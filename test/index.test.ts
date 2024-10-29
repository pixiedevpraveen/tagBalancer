import { test, expect } from "bun:test";
import { tagBalancer } from "../src";
import testData from "./testData.json";

testData.forEach(({ name, html_str, expected }) => {

    test(name, () => {
        expect(tagBalancer(html_str)).toBe(expected)
    })
})
