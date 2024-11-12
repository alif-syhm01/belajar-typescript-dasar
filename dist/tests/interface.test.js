describe('Interface', function () {
    it('should support in typescript', function () {
        const seller = {
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
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it('should support indexable interface', function () {
        const names = ["Aliffio", "Syah", "Maulana"];
        console.info(names);
    });
    it('should support indexable interface for non number index', function () {
        const dictionary = {
            "name": "Alif",
            "address": "Indonesia"
        };
        expect(dictionary["name"]).toBe("Alif");
        expect(dictionary["address"]).toBe("Indonesia");
    });
    it('should support extend interface', function () {
        const employee = {
            id: "1",
            name: "Aliffio",
            division: "IT"
        };
        console.info(employee);
        const manager = {
            id: "2",
            name: "Syah",
            division: "IT",
            numberOfEmployee: 10
        };
        console.info(manager);
    });
    it('should support function in interface', function () {
        const person = {
            name: "Alif",
            sayHello: function (name) {
                return `Hi ${name}, my name is ${this.name}`;
            }
        };
        console.info(person.sayHello("Syah"));
    });
    it('should support intersection types', function () {
        const domain = {
            id: "1",
            name: "Alif"
        };
        console.info(domain);
    });
    it('should support type assertions', function () {
        const person = {
            name: "Alif",
            age: 23
        };
        const person2 = person;
        // person2.sayHello("Syah")
        console.info(person2);
    });
});
export {};
