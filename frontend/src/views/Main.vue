<template>
	<section class="home">
		<div class="page-header">
			<h2 class="page-title">
				Kata
			</h2>
		</div>
		<div class="row">
			<div class="col-lg-8 grid-margin stretch-card">
				<div class="card">
					<div class="card-body">
						<h4 class="card-title">Filters</h4>
						<form>
							<div class="row">
								<div class="col-lg-6">
									<b-form-group label="Title">
										<b-form-input type="text" v-model="filter.title" placeholder="Book name"/>
									</b-form-group>
								</div>
								<div class="col-lg-6">
									<b-form-group label="ISBN">
										<b-form-input type="text" v-model="filter.isbn" placeholder="5554-5545-4518"/>
									</b-form-group>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-6">
									<b-form-group label="Author's Name">
										<b-form-input type="text" v-model="filter.author" placeholder="John Doe"/>
									</b-form-group>
								</div>
							</div>
						</form>
						<h4 class="card-title">Actions</h4>
						<div class="row">
							<!--
							<div class="col-sm-3">
								<b-button block variant="primary"> New Book </b-button>
							</div>
							<div class="col-sm-3 mt-3 mt-md-0">
								<b-button block variant="primary"> New Magazine </b-button>
							</div>
							-->
							<div class="col-sm-3 mt-3 mt-md-0">
								<b-button block variant="success" @click="exportBookCSV"> Export Books CSV </b-button>
							</div>
							<div class="col-sm-3 mt-3 mt-md-0">
								<b-button block variant="success" @click="exportMagazineCSV"> Export Magazines CSV </b-button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12 grid-margin stretch-card">
				<div class="card">
					<div class="card-body">
						<b-table striped hover responsive stacked="sm" :items="items" :fields="fields">
							<template #cell(actions)="row">
								<div class="d-flex">
									<b-button size="sm" variant="primary" @click="editarPessoa(row.item.id_pessoa)"><i class="mdi mdi-pencil"></i></b-button>
									<b-button size="sm" variant="danger" @click="deletarPessoa(row.item.id_pessoa)" class="ml-2"><i class="mdi mdi-delete"></i></b-button>
								</div>
							</template>
						</b-table>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style>
.table-hover tbody tr:hover {
	color: inherit!important;
	background-color: rgb(36,37,40); 
}

.custom-select {
	min-height: calc(2.25rem + 2px);
}
</style>

<script>
/**
 * JSON structure:
 * {
 *    type: 'book' || 'magazine',
 *    author: [{ // book and magazine
 *       email: '',
 *       firstName: '',
 *       lastName: ''
 *    }],
 *    title: '', // book and magazine
 *    description: '', // book 
 *    isbn: '', // book
 *    publishedAt: '' // magazine
 * }
 */
import Papa from 'papaparse';
import FileSaver from 'file-saver';

export default {
	name: 'home',
	data() {
		return {
			filter: {
				title: '',
				isbn: '',
				author: ''
			},
			pessoaId: '',
			authors: [],
			books: [],
			magazines: [],
			itemsOriginal: [],
			fields: [
				{
					key: 'title',
					label: 'Title',
					sortable: true
				},
				{
					key: 'isbn',
					label: 'ISBN',
					sortable: true
				},
				{
					key: 'authors',
					formatter: function(authors) {
						return authors.map((author) => { return author.firstName + ' ' + author.lastName }).join(', ');
					},
					label: 'Authors',
					sortable: true
				}
			]
		};
	},
	computed: {
		items() {
			let mergedBooksMagazines = [];
			mergedBooksMagazines.push(...this.books, ...this.magazines); 
			return mergedBooksMagazines.filter((item) => {
				if(this.filter.title && !(new RegExp(this.filter.title, 'ig').test(item.title))) return false;
				if(this.filter.isbn && !(new RegExp(this.filter.isbn, 'ig').test(item.isbn))) return false;
				if(this.filter.author) {
					let authorsNames = item.authors.map((author) => { return author.firstName + ' ' + author.lastName }).join(' ');
					if(!( new RegExp(this.filter.author, 'ig').test(authorsNames) || new RegExp(this.filter.author, 'ig').test(authorsNames) )) return false;
				}

				return true;
			});
		}
	},
	methods: {
		loadAuthors() {
			Papa.parse('/store/authors.csv', {
				download: true,
				complete: (result) => {
					result.data.forEach((row, index) => {
						if(index === 0 || !row[0]) return;

						this.authors.push({
							email: row[0],
							firstName: row[1],
							lastName: row[2]
						});
					})
					this.loadBooksAndMagazines();
				}
			});
		},
		getParsedAuthors(authors) {
			authors = authors.split(',');
			return this.authors.filter((author) => {
				for(let i = 0; i < authors.length; i++) {
					if(author.email === authors[i]) return true;
				}
				return false;
			});
		},
		loadBooksAndMagazines() {
			Papa.parse('/store/books.csv', {
				download: true,
				complete: (result) => {
					result.data.forEach((row, index) => {
						if(index === 0 || !row[0]) return;

						this.books.push({
							title: row[0],
							isbn: row[1],
							authors: this.getParsedAuthors(row[2]),
							description: row[3]
						});
					});
				}
			});

			Papa.parse('/store/magazines.csv', {
				download: true,
				complete: (result) => {
					result.data.forEach((row, index) => {
						if(index === 0 || !row[0]) return;

						this.magazines.push({
							title: row[0],
							isbn: row[1],
							authors: this.getParsedAuthors(row[2]),
							publishedAt: row[3]
						});
					});
				}
			});
		},
		/*
		addBook(book) {
			this.books.push(book);
		},
		addMagazine(magazine) {
			this.books.push(book);
		},
		*/
		saveStringToCSV(csv, filename) {
			let blob = new Blob([csv], {type: "text/plain;charset=utf-8"});
			FileSaver.saveAs(blob, filename);
		},
		exportBookCSV() {
			let books = JSON.parse(JSON.stringify(this.books));
			books = books.map((item) => {
				let authorsEmails = item.authors.map((author) => { return author.email }).join(',');
				item.authors = authorsEmails;
				return item;
			});

			let csv = Papa.unparse(books, { header: true, quotes: false, delimiter: ';' });

			this.saveStringToCSV(csv, 'books.csv');
		},
		exportMagazineCSV() {
			let magazines = JSON.parse(JSON.stringify(this.magazines));
			magazines = magazines.map((item) => {
				let authorsEmails = item.authors.map((author) => { return author.email }).join(',');
				item.authors = authorsEmails;
				return item;
			});

			let csv = Papa.unparse(magazines, { header: true, quotes: false, delimiter: ';' });

			this.saveStringToCSV(csv, 'magazines.csv');
		}

	},
	mounted() {
		this.loadAuthors();
	}
}
</script>
