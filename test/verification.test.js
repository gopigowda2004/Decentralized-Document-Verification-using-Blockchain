const Verification = artifacts.require("Verification");

contract("Verification", (accounts) => {
    it("should deploy the contract", async () => {
        let instance = await Verification.deployed();
        assert(instance.address !== "", "Contract address should not be empty");
    });
});
