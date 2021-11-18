<template>
	<!-- The modal -->
	<b-modal id="new-magazine" :hide-header-close="true" title="New Magazine" @hide="reset" ref="modal">
		<form>
			<div class="row">
				<div class="col-lg-12">
					<b-form-group label="Title">
						<b-form-input type="text" v-model="form.title"/>
					</b-form-group>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12">
					<b-form-group label="ISBN">
						<b-form-input type="text" v-model="form.isbn" placeholder="111-111-111"/>
					</b-form-group>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12">
					<b-form-group label="Authors Email">
						<b-form-input type="text" v-model="form.author" placeholder="null@example.com"/>
						<b-form-text>Separated by comma (,)</b-form-text>
					</b-form-group>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12">
					<b-form-group label="Published At">
						<b-form-input type="text" v-model="form.publishedAt"/>
					</b-form-group>
				</div>
			</div>
		</form>
		<template #modal-footer="{ cancel }">
			<div class="row col-12 justify-content-end">
				<div class="col-sm-12 col-lg-3">
					<b-button @click="cancel()" block>Cancel</b-button>
				</div>
				<div class="col-sm-12 col-lg-2 mt-sm-3 mt-lg-0">
					<b-button variant="primary" @click="submit" block>
					</b-button>
				</div>
			</div>
		</template>
	</b-modal>
</template>

<script>

export default {
	data() {
		return {
			form: {
				title: '',
				isbn: '',
				author: '',
				publishedAt: ''
			}
		}
	},
	methods: {
		submit() {
			this.$refs.modal.hide();
			this.$emit('update', this.form);
		},
		reset() {
			this.form = {
				title: '',
				isbn: '',
				author: '',
				publishedAt: ''
			}
		}
	}
}
</script>