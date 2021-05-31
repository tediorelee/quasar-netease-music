<template>
	<q-page padding>
		<div v-if="loading" class="row justify-center">
			<q-spinner-dots class="text-primary text-h4"/>
		</div>
		<div class="q-px-xl" v-else>
			<banner class="q-mb-md"></banner>
			<recommandList></recommandList>
		</div>
	</q-page>
</template>

<script>
import recommandList from 'pages/home/recommandPlayList';
import Banner from 'pages/home/Banner';

export default {
	name: 'PageIndex',
	components: {
		recommandList,
		Banner
	},
	data () {
		return {
		};
	}
};
</script>
