import axios from 'axios';
export default {
	namespaced: true,
	state: {

	},
	getters: {

	},
	mutations: {

	},
	actions: {
		async getRecommandPlayList (context, params) {
			return await axios.get('/personalized', { params });
		},
		async getBanner (context, params) {
			return await axios.get('/banner', { params });
		}
	}
};
