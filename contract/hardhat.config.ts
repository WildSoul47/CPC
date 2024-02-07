import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-contract-sizer";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
    solidity: {
        compilers: [
            {
                version: "0.8.11",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
            {
                version: "0.8.9",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            }
        ]
    },
    networks: {
        dev: {
            timeout: 100000000,
            gasPrice: 80000000000,
            gas: 5000000,
            url: "https://rpc-mainnet.matic.quiknode.pro",
            accounts: process.env.PRIVATE_KEY_DEV !== undefined ? [process.env.PRIVATE_KEY_DEV] : [],
        },
        release: {
            timeout: 100000000,
            gasPrice: 80000000000,
            gas: 5000000,
            url: "https://polygon-rpc.com",
            accounts: process.env.PRIVATE_KEY_RELEASE !== undefined ? [process.env.PRIVATE_KEY_RELEASE] : [],
        }
    },
    etherscan: {}
};

export default config;
