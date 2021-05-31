export function loading (loading) {
	return function (target, name, descriptor) {
		const fn = descriptor.value;
		descriptor.value = async function (...args) {
			try {
				this[loading] = true;
				return await fn.apply(this, args);
			} finally {
				this[loading] = false;
			}
		};
	};
};

export function confirmation (message, ok, cancel) {
	return function (target, name, descriptor) {
		const fn = descriptor.value;
		descriptor.value = async function (...args) {
			this.$modal.confirm({
				message: this.$t(message) || args[0],
				ok: ok ? this.$t(ok) : undefined,
				cancel: cancel ? this.$t(cancel) : undefined
			}).onOk(async () => {
				await fn.apply(this, args);
			});
		};
	};
};

export function confirmationWithCheckbox (message, checkboxMessage, ok, cancel) {
	return function (target, name, descriptor) {
		const IS_CHECK_KEY = 'isChecked';
		const fn = descriptor.value;
		descriptor.value = async function (...args) {
			this.$modal.confirm({
				options: {
					type: 'checkbox',
					model: [IS_CHECK_KEY],
					items: [
						{ label: this.$t(checkboxMessage), value: IS_CHECK_KEY, color: 'primary' }
					]
				},
				message: this.$t(message) || args[0],
				ok: ok ? this.$t(ok) : undefined,
				cancel: cancel ? this.$t(cancel) : undefined
			}).onOk(async (data) => {
				const checked = data.includes(IS_CHECK_KEY);
				await fn.apply(this, [checked, ...args]);
			});
		};
	};
};
