import { ethers } from "hardhat";

async function main() {
//step 1 - add your file name to contract factory

const contract = await ethers.getContractFactory('PolygonNFT');
//Step 2 -Add name of your NFT and Symbol

const deployedContract = await contract.deploy('PolygonNFT', 'PNT');

//Step 3- deploy contract

deployedContract.deployed();

console.log(`NFT contract address is ${deployedContract.address}`)
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
