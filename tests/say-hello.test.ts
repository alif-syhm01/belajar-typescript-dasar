import {sayHello} from "../src/say-hello";

describe('sayHello', function (): void {
    it('should return hello alif', function (): void {
        expect(sayHello('alif')).toBe('Hello alif');
    })
})