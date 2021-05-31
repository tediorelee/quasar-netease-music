import axios from 'axios';

export default ({ router, Vue }) => {
	axios.defaults.baseURL = 'http://localhost:3000';
	axios.defaults.timeout = 60000;
	axios.defaults.validateStatus = (status) => {
		return true;
	};

	// axios.interceptors.request.use((config) => {
	// 	let token = localStorage.getItem('token');
	// 	if (token) {
	// 		config.headers.Authorization = `Bearer ${token}`;
	// 	}
	// 	config.headers.language = localStorage.getItem('locale') || 'en-us';
	// 	return config;
	// });
	//
	// axios.interceptors.response.use((response) => {
	// 	let result = response.data;
	// 	if (result.error) {
	// 		let error = result.type;
	// 		if (response.config.url.includes('api/')) {
	// 			const msgKey = `errors.text.${result.type}`;
	// 			let msg = Vue.prototype.$t(msgKey);
	// 			if (msg === msgKey) {
	// 				msg = Vue.prototype.$t('common.text.unknownError');
	// 			}
	// 			Vue.prototype.$q.notify.negative(msg);
	// 		} else {
	// 			switch (error) {
	// 				case 'validation_error':
	// 					Vue.prototype.$q.notify.negative(Vue.prototype.$t('common.text.validationError'));
	// 					break;
	// 				case 'resource_not_found':
	// 					Vue.prototype.$q.notify.negative(Vue.prototype.$t('common.text.resourceNotFound'));
	// 					break;
	// 				case 'method_not_allowed':
	// 					Vue.prototype.$q.notify.negative(Vue.prototype.$t('common.text.methodNotAllowed'));
	// 					break;
	// 				case 'unknown_error':
	// 					Vue.prototype.$q.notify.negative(Vue.prototype.$t('common.text.unknownError'));
	// 					break;
	// 				case 'server_timeout':
	// 					Vue.prototype.$q.notify.negative(Vue.prototype.$t('common.text.serverTimeout'));
	// 					break;
	// 				case 'account_suspended':
	// 					Vue.prototype.$q.notify.negative(Vue.prototype.$t('common.text.accountSuspended'));
	// 					localStorage.removeItem('token');
	// 					router.push({ name: 'Login' });
	// 					break;
	// 				case 'token_expired':
	// 					Vue.prototype.$q.notify.negative(Vue.prototype.$t('common.text.tokenExpired'));
	// 					localStorage.removeItem('token');
	// 					router.push({ name: 'Login' });
	// 					break;
	// 				case 'invalid_token':
	// 					localStorage.removeItem('token');
	// 					router.push({ name: 'Login' });
	// 					break;
	// 			}
	// 		}
	// 	}
	// 	return result;
	// }, () => {
	// 	Vue.prototype.$q.notify.negative(Vue.prototype.$t('common.text.serviceUnavailable'));
	// 	return { error: true };
	// });

	Vue.prototype.$axios = axios;
};
