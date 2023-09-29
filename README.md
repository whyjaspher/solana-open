# solana-open

solana dev bootcamp notes and terminologies:
Solana
	First Block: March 16 2020
	Consensus: Proof-of-stake
Fast, Decentralized, Scalable, Energy Efficient
BTC proof-of-work (SOL to validate transactions)
Solana proof-of-stake
SOL - native token
Lamports - are fractional SOL and are named after Leslie Lamport
Solana Accounts are similar to files in operating systems such as Linux
Lamports because they can't handle decimals

{
key: number,
lamports: number,
data: UintSArray,
fs_executable: boolean,
owner: PublicKey,
}

Keypair - pair of keys: public key and private key
public key used as an address that points to an account on the Solana Network
secret key is used to verify identity or authority
All interactions in Solana Network happens through the JSON RPC API (way to talk)
@solana/web3.js (helper functions for javascript to interact with solana blockchain)
Transaction any modification to on-chain data happens through transaction sent to programs
Instruction - set of functions (mutation or query)
Wallet holds the currency
Phantom Wallet

solana dev bootcamp unfinished tasks:
get_transactions.ts bad secret key size
token-account.ts no return value
token-mint.ts no return value
mint-account.ts bad secret key size
