import {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
  } from "@solana/web3.js";
  const getBalance = async () => {
    try {
      const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
      const balance = await connection.getBalance(
        new PublicKey("2eUENyC4sc9QTbyi59bMZKVY8A7Ec1oasTRZ92NJ4JYA")
      );
  
      console.log(balance);
    } catch (_) {}
  };
  const main = async () => {
    await getBalance();
  };
  
  main();