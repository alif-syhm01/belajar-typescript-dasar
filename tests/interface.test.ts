import {Seller} from "../src/seller";
import {Employee, Manager} from "../src/employee";
import {Person} from "../src/person";

describe('Interface', function () {
    it('should support in typescript', function () {
        const seller: Seller = {
            id: 1,
            name: 'Toko Mainan',
            nib: "1232123123",
            npwp: "92831283712",
        };

        seller.name = "Toko Alif";
        // seller.nib = "8172372312";

        console.info(seller);
    });

    it('should support function interface', function () {
        // function interface
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        }

        expect(add(2, 2)).toBe(4);
    });

    it('should support indexable interface', function () {
        // array interface
        interface StringArray {
            [index: number]: string
        }

        const names: StringArray = ["Aliffio", "Syah", "Maulana"];
        console.info(names);
    });

    it('should support indexable interface for non number index', function () {
        interface StringDictionary {
            [key: string]: string
        }

        const dictionary: StringDictionary = {
            "name": "Alif",
            "address": "Indonesia"
        };

        expect(dictionary["name"]).toBe("Alif");
        expect(dictionary["address"]).toBe("Indonesia");
    });

    it('should support extend interface', function () {
        const employee: Employee = {
            id: "1",
            name: "Aliffio",
            division: "IT"
        };

        console.info(employee);

        const manager: Manager = {
            id: "2",
            name: "Syah",
            division: "IT",
            numberOfEmployee: 10
        };

        console.info(manager)
    });

    it('should support function in interface', function () {
       const person: Person = {
           name: "Alif",
           sayHello: function (name: string): string {
               return `Hi ${name}, my name is ${this.name}`;
           }
       }

       console.info(person.sayHello("Syah"));
    });

    it('should support intersection types', function () {
        interface HasName {
            name: string
        }

        interface HasId {
            id: string
        }

        // // no need additional detail
        // interface Person extends HasName, HasId {
        //     // better using intersection type
        // }

        type Domain = HasName & HasId;

        const domain: Domain = {
            id: "1",
            name: "Alif"
        }

        console.info(domain)
    });

    it('should support type assertions', function () {
        const person: any = {
            name: "Alif",
            age: 23
        };

        const person2: Person = person as Person;
        // person2.sayHello("Syah")

        console.info(person2)
    })
});