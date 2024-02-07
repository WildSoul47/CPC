import { ethers, upgrades } from "hardhat";

async function main() {
    let tx: any;
    const TokenInfo = {
        name: "CPCToken-Test",
        domainName: "ERC20Token",
        symbol: "$CPC",
        decimals: 18,
        initialSupply: ethers.parseEther("10000000000"),
    };

    const factory = await ethers.getContractFactory("ERC20Token");
    const smart = await upgrades.deployProxy(factory, [TokenInfo.name, TokenInfo.symbol, TokenInfo.initialSupply]);
    await smart.waitForDeployment();

    console.log(`${TokenInfo.domainName} deployed to ${smart.target}`);

    console.log("name:", await smart.name());
    console.log("decimals:", await smart.decimals());
    console.log("symbol:", await smart.symbol());

    console.log("%s deployed done.", TokenInfo.domainName);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
