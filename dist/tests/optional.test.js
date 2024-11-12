"use strict";
describe('Optional Parameter', function () {
    it('should support null and undefined', function () {
        function sayHello(name) {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info('Hello');
            }
        }
        sayHello("Alif");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
