const SimpleStorage = artifacts.require("./SimpleStorage.sol");
module.exports = function (deployer) {
    console.log("Deploy method called::::::::::::::::::");
    deployer.deploy(SimpleStorage);
}