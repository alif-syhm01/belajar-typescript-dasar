describe('Function', function () {
    it('should support in typescript', function () {
        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`;
        }

        expect(sayHello("Alif")).toBe("Hello Alif");
        expect(sayHello()).toBe("Hello Guest");

        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }

        printHello("Alif");
    });

    it('should support rest parameter', function () {
       function sum(...values: number[]): number {
           let total = 0;

           for (const value of values) {
               total += value;
           }

           return total;
       }

       expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });

    it('should support original parameter', function () {
        function sayHello(firstName: string, lastName?: string): string {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            } else {
                return `Hello ${firstName}`;
            }
        }

        expect(sayHello("Alif")).toBe("Hello Alif");
        expect(sayHello("Aliffio", "Syah")).toBe("Hello Aliffio Syah");
    });

    it('should support function overloading', function () {
        function callMe(value: number): number;
        function callMe(value: string): string;

        function callMe(value: any): any {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof  value === "number") {
                return value * 10;
            }
        }

        expect(callMe(100)).toBe(1000);
        expect(callMe("Alif")).toBe("ALIF");
    });

    it('should function as parameter', function () {
        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`;
        }

        function toUpper(name: string): string {
            return name.toUpperCase();
        }

        expect(sayHello("Alif", toUpper)).toBe("Hello ALIF");

        expect(sayHello("Alif", function (name: string): string {
            return name.toUpperCase();
        })).toBe("Hello ALIF");

        expect(sayHello("Alif", (name: string): string => name.toUpperCase())).toBe("Hello ALIF");
    })
})