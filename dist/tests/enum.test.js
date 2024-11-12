import { CustomerType } from "../src/enum";
describe('Enum', function () {
    it('should support in typescript', function () {
        const customer = {
            id: 1,
            name: "Alif",
            type: CustomerType.PLATINUM
        };
        console.info(customer);
    });
});
