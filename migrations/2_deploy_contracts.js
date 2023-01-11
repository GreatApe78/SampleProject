const MeuContrato = artifacts.require("MeuContrato")

module.exports = async function (deployer,netowrk,accounts){
    await deployer.deploy(MeuContrato)

    let a = MeuContrato.deployed()

}