const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
  const nftContract = await nftContractFactory.deploy();

  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with account: ", deployer.address);

  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  // Call the function.
  let txn = await nftContract.makeAnEpicNFT();
  // Wait for it to be mined.
  await txn.wait();
  console.log("Minted NFT #1");

  // let txn2 = await nftContract.makeAnEpicNFT()
  // // Wait for it to be mined.
  // await txn2.wait()
  // console.log("Minted NFT #2")
  //
  // let txn3 = await nftContract.makeAnEpicNFT()
  // // Wait for it to be mined.
  // await txn3.wait()
  // console.log("Minted NFT #3")
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
