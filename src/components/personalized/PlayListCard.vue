<template>
	<q-card @click="onClickCard" style="height: 140px; width: 140px;" class="shadow-4">
		<q-badge class="absolute-top-right z-top" rounded color="primary" :label="playCount"/>
		<q-img
			:src="picUrl"
			class="card-rounded"
		>
			<div style="max-height: 70px;font-size: 12px;"
				class="absolute-bottom text-center overflow-hidden text-no-wrap ellipsis">
				{{ name }}
			</div>
		</q-img>
		<q-icon name="play_circle_filled" color="white" size="sm" class="absolute-bottom-right z-top" />
	</q-card>
</template>

<script>
export default {
	name: 'PlayListCard',
	props: {
		name: {
			type: String,
			required: true
		},
		id: {
			type: Number,
			required: true
		},
		playCount: {
			type: Number,
			required: true
		},
		picUrl: {
			type: String,
			required: true
		}
	},
	data () {
		return {};
	},
	methods: {
		onClickCard () {
			this.$router.push(`/playlist/${this.id}`);
		}
	}
};
</script>

<style scoped>

</style>
