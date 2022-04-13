const Wallet = artifacts.require("Wallet");

//network is optional here but i usually add it anyways
//we need accounts so we can set up your owners
//array
module.exports = (deployer, accounts) => {
  const owners = [accounts[0], accounts[1], accounts[2]]
  const limit = 2
  
  //now that we have defined the nessecary params for the
 //contracts constructor you will be able to deploy
  // you just simply add the values in here in the same order
  // that you define them in your actual contract
  deployer.deploy(owners, limit)
}