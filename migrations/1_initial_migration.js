Web3 = require('web3')
var Migrations = artifacts.require("../contracts/Migrations.sol");

const accounts =  web3.eth.getAccounts();
module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
 