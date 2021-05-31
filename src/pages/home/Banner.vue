<template>
	<q-carousel
		v-model="slide"
		swipeable
		animated
		padding
		navigation
		thumbnails
		autoplay="auto"
		:navigation-position="navPos"
		class="rounded-borders"
		style="max-width: 800px;max-height: 300px;margin: 0 auto"
	>
		<q-carousel-slide
			:name="index"
			v-for="(item, index) in banners"
			:key="index"
			:img-src="item.imageUrl"
		/>
	</q-carousel>
</template>

<script>
export default {
	name: 'Banner',
	data () {
		return {
			loading: false,
			banners: [],
			slide: 0,
			navPos: 'bottom',
			auto: true
		};
	},
	methods: {
		async getBanner () {
			this.loading = true;
			let type = 0;
			let params = {
				type: type
			};
			let result = await this.$store.dispatch('personalized/getBanner', params);
			if (result) {
				this.banners = result.data.banners;
				this.loading = false;
			}
		}
	},
	created () {
		this.getBanner();
	}
};
</script>

<style scoped>

</style>
