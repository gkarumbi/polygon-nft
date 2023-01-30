import {expect} from "chai";
import { ethers } from "hardhat";
import {PolygonNFT} from "../typechain-types";
 
let nftContract : PolygonNFT;

let user1,user2,user3,user4


describe('PolygonNFT', function(){
    this.beforeEach(async()=>{
        const contractNFT = await ethers.getContractFactory('PolygonNFT');
        nftContract = await contractNFT.deploy('PolygonNFT', 'PNT')
        await nftContract.deployed();
        [user1,user2,user3,user4] = await ethers.getSigners();
    })

    it('Mint NFT',async () => {
        console.log(`NFT Address: ${nftContract.address} `)
        console.log(`user1: ${user1.address}, user2 ${user2.address}, user3 ${user3.address}`)
    })
});