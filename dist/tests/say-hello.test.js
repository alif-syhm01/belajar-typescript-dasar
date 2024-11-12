import { sayHello } from "../src/say-hello";
describe('sayHello', function () {
    it('should return hello alif', function () {
        expect(sayHello('alif')).toBe('Hello alif');
    });
});
