import Decimal from 'decimal.js';

import { toDecimalPlaces } from './formatCurrencyAmount';
import { isEqualTo } from './mathUtil';

/**
 * Formats all numbers with a dollar value
 * 123456.789 ===> 123,456.78
 * @param value
 * @param precision
 * @param tiny
 * @returns
 */
export const formatNumber = (
	value: string | number = '',
	precision = 2,
	isRound = false
) => {
	if (value === '') {
		return '-';
	}
	if (isEqualTo(value, '0')) {
		return '0';
	}
	try {
		const _value = toDecimalPlaces(
			value,
			precision,
			isRound ? Decimal.ROUND_HALF_EVEN : Decimal.ROUND_DOWN
		);
		const n = String(_value);
		const p = n.indexOf('.');
		return n.replaceAll(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) =>
			p < 0 || i < p ? `${m},` : m
		);
	} catch (error: any) {
		console.error(error.message);
		return '-';
	}
};

/**
 * Used to format the position size
 * @param value
 * @param precision
 * @returns
 */
export function formatSize(value: string | number = '', precision = 4) {
	return formatNumber(value, precision);
}
