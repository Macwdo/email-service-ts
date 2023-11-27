import { sum } from "@src/utils/sum-func";

describe("sum", () => {
    it("should add two numbers", () => {
        expect(sum(1, 2)).toBe(3);
    });
});
