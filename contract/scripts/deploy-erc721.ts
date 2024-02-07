import { ethers, upgrades } from "hardhat";

async function main() {
    let tx: any;
    const TokenInfo = {
        name: "CPCNFT-Test",
        domainName: "ERC721Token",
        symbol: "CPCNFT",
        baseTokenURI: "https://res.xxxx.com/nft/token/"
    };

    const factory = await ethers.getContractFactory("ERC721Token");
    const smart = await upgrades.deployProxy(factory, [TokenInfo.name, TokenInfo.symbol, TokenInfo.baseTokenURI]);
    await smart.waitForDeployment();

    console.log(`${TokenInfo.domainName} deployed to ${smart.target}`);

    console.log("name:", await smart.name());
    console.log("symbol:", await smart.symbol());

    console.log("%s deployed done.", TokenInfo.domainName);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
