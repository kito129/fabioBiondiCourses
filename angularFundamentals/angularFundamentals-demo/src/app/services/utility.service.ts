import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UtilityService {
	add(a: number, b: number): number {
		return a + b;
	}
}
