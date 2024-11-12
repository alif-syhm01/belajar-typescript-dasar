"use strict";
describe('Function', function () {
    it('should support in typescript', function () {
        function sayHello(name = "Guest") {
            return `Hello ${name}`;
        }
        expect(sayHello("Alif")).toBe("Hello Alif");
        expect(sayHello()).toBe("Hello Guest");
        function printHello(name) {
            console.info(`Hello ${name}`);
        }
        printHello("Alif");
    });
    it('should support rest parameter', function () {
        function sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    it('should support original parameter', function () {
        function sayHello(firstName, lastName) {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }
            else {
                return `Hello ${firstName}`;
            }
        }
        expect(sayHello("Alif")).toBe("Hello Alif");
        expect(sayHello("Aliffio", "Syah")).toBe("Hello Aliffio Syah");
    });
    it('should support function overloading', function () {
        function callMe(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value * 10;
            }
        }
        expect(callMe(100)).toBe(1000);
        expect(callMe("Alif")).toBe("ALIF");
    });
});
