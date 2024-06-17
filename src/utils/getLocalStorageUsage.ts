import Decimal from 'decimal.js';

export function getLocalStorageUsage(): string {
	let totalUsage = 0;
	for (let i = 0; i < localStorage.length; i += 1) {
		const key = localStorage.key(i);
		if (key) {
			const item = localStorage.getItem(key);
			if (item) {
				totalUsage += item.length;
			}
		}
	}
	return new Decimal(totalUsage).div(1024).div(1024).toFixed();
}

export function isLocalStorageFull(): boolean {
	try {
		const testKey = '__localStorageTest__';
		const testData = 'test';
		localStorage.setItem(testKey, testData);
		localStorage.removeItem(testKey);
		return false;
	} catch (error) {
		if (
			error instanceof DOMException &&
			(error.code === 22 ||
				error.code === 1014 ||
				error.name === 'QuotaExceededError' ||
				error.name === 'NS_ERROR_DOM_QUOTA_REACHED')
		) {
			return true;
		}
		throw error;
	}
}
