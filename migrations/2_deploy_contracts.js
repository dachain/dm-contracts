var DAChainToken = artifacts.require("./DAChainToken.sol");

var accounts = web3.eth.accounts

module.exports = function(deployer) {
  deployer.deploy(DAChainToken);
};
