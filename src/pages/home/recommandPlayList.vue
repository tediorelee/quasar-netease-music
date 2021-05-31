<template>
	<q-card flat>
		<span class="q-ml-md text-weight-bold text-subtitle1">推荐歌单</span>
		<div v-if="loading" class="row justify-center">
			<q-spinner-dots class="text-primary text-h4"/>
		</div>
		<div v-else class="row q-mt-lg">
			<play-list-card
				class="q-ma-md"
				v-for="(item, index) in recommandList"
				:key="index"
				:name="item.name"
				:id="item.id"
				:play-count="item.playCount"
				:picUrl="item.picUrl"
			></play-list-card>
		</div>
	</q-card>
</template>

<script>
// import { loading } from 'src/mixins/decorator';
import PlayListCard from 'components/personalized/PlayListCard';

export default {
	name: 'recommandList',
	components: {
		PlayListCard
	},
	data () {
		return {
			loading: false,
			recommandList: []
		};
	},
	computed: {

	},
	methods: {
		async getRecommandPlayList () {
			this.loading = true;
			let limit = 20;
			let params = {
				limit: limit
			};
			let res = await this.$store.dispatch('personalized/getRecommandPlayList', params);
			if (res.status === 200) {
				this.recommandList = res.data.result;
				this.loading = false;
			}
		}

	},
	created () {
		this.getRecommandPlayList();
	}
};
</script>
