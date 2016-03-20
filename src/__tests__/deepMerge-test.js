"use strict";

jest.unmock("../deepMerge");

describe("deepMerge", () => {
	it("Merges [1,2] and [3,4] into [1,2,3,4]", () => {
		const deepMerge = require("../deepMerge").default;
		expect(deepMerge([1, 2], [3, 4])).toEqual([1,2,3,4]);
	});

	it("Merges {foo: 42} and undefined into {foo: 42}", () => {
		const deepMerge = require("../deepMerge").default;
		expect(deepMerge({foo: 42}, undefined)).toEqual({foo: 42});
	});
});
