function plugin(Vue, axios) {
	if (plugin.installed) {
		return
	}
	plugin.installed = true

	if (!axios) {
		console.error('You have to install axios')
		return
	}

	Vue.axios = axios

	Object.defineProperties(Vue.prototype, {
		axios: {
			get() {
				return axios
			}
		},
		$http: {
			get() {
				return axios
			}
		}
	})
}

if (typeof window !== 'undefined' && window.Vue && window.axios) {
	window.Vue.use(plugin, window.axios)
}

export default plugin
