import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import * as dotenv from "dotenv";

dotenv.config();

const deployerPrivateKey = process.env.PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
//      url: "https://ethereum-sepolia-rpc.publicnode.com",
      url: "https://eth-sepolia.g.alchemy.com/v2/LSFuZJVCAxCIGSBH534HvjJhf-kinHwC",
      accounts: [deployerPrivateKey],
    }
  }
};

export default config;
