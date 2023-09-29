import {
    Connection,
    PublicKey,
    clusterApiUrl,
    LAMPORTS_PER_SOL,
  } from "@solana/web3.js";
  
  const publicKey = new PublicKey("2eUENyC4sc9QTbyi59bMZKVY8A7Ec1oasTRZ92NJ4JYA");
  
  const getWalletBalance = async () => {
    try {
      const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
      const walletBalance = await connection.getBalance(publicKey);
      console.log(
        `The address: ${publicKey} cuurently has ${walletBalance / LAMPORTS_PER_SOL} SOL`
      );
    } catch (err: any) {}
  };
  
  const main = async () => {
    await getWalletBalance();
  };
  
  main();