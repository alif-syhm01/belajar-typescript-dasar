"use strict";
describe('Object', function () {
    it('should support in typescript', function () {
        // for simple use case only
        const person = {
            id: "1",
            name: "Alif",
        };
        console.info(person);
        person.id = "2";
        person.name = "Aliffio";
        // person.description = "test";
        console.info(person);
    });
});