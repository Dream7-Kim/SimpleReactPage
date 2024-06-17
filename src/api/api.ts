
import { get, post } from './http';
import * as url from './url';

export function cooperationsUser(params: any) {
	return post(url.user, params);
}

export function cooperationsCompany(params: any) {
	return post(url.company, params);
}

export function cooperationsApply(params: any) {
	return post(url.apply, params);
}
