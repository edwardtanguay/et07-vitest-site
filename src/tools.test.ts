import { surround, doIt } from './tools';
import { describe, expect, it } from 'vitest';

describe('doIt()', () => {
	it("works", () => {
		expect(doIt()).toBe('okok');
	});
});
describe('surround()', () => {
	it("returns various brackets correctly", () => {
		expect(surround('test', '[]')).toBe('[test]');
		expect(surround('test', '()')).toBe('(test)');
		expect(surround('test', '{}')).toBe('{test}');
	});
	it("returns similar characters correctly", () => {
		expect(surround('test', '**')).toBe('*test*');
		expect(surround('test', '||')).toBe('|test|');
	});
	it("fails gracefully on wrong number of letters", () => {
		expect(surround('test', '***')).toBe('test');
		expect(surround('test', '||sjkdfjskdfj')).toBe('test');
		expect(surround('test', 'x')).toBe('test');
	});
	it("fails gracefully on empty values", () => {
		expect(surround('test', '')).toBe('test');
		expect(surround('', '')).toBe('');
		expect(surround('', '[]')).toBe('[]');
	});
});