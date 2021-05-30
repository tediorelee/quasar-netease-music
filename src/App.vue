<template>
	<div id="q-app">
		<q-ajax-bar/>
		<transition
			enter-active-class="animated fadeIn"
			leave-active-class="animated fadeOut"
			mode="out-in"
		>
			<keep-alive>
				<router-view />
			</keep-alive>
		</transition>
	</div>
</template>
<script>
export default {
	name: 'App'
};
</script>
