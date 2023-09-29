import * as web3 from '@solana/web3.js';
import * as token from '@solana/spl-token'
import  'dotenv/config';
import bs58 from 'bs58';


const main = async () => {
    const connection = new web3.Connection(web3.clusterApiUrl('devnet'), "confirmed")
    const payer = web3.Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY ?? ""))

    // Token Account: 9J8T47g1a4YBkNB3H8J9pkm3n68K3GAcw2hGsKY7iTFb
    // Token Mint: FtpCLbKbFeTwqyfS37kuiS7oofCQtNbVRzAaBEtMZQwu

    const tokenMintAccount = new web3.PublicKey( "FtpCLbKbFeTwqyfS37kuiS7oofCQtNbVRzAaBEtMZQwu")
    const tokenAccount = new web3.PublicKey( "9J8T47g1a4YBkNB3H8J9pkm3n68K3GAcw2hGsKY7iTFb")
    const mintAccount = await token.mintTo(
        connection,
        payer,
        tokenMintAccount,
        tokenAccount,
        payer,
        web3.LAMPORTS_PER_SOL * .00000009
    )
    
        //Mint Account: 2tzBezFieoTbFtyozhPCy3mMDpADHHJnc74CRi6shGg2LaxtFcfneoQEp7KUeVp3a6L1QMCD9s3XQAGZ9WjJ2pjh
    console.log("Mint Account: ", mintAccount)

}

main()
    .then(d => {process.exit(0)})
    .catch(e => {
        console.log(e)
        process.exit(1)
    })