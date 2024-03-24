## Encode Solidity Bootcamp
# Homework Week 2

by: 
- Sergey Epifanov @BanzaiTokyo 0x46656d5628464fB99bE9b3d35FBbc3D185506b4A
- Mauro Monso @Mauro.Monso
- Loic Balum @0xcoil 0x8f63A3E560b4bEBCf8bF056cbb8fC8E4b36B1b80
- Ilya Shulman @kwindi 0x90445D3131521092DB770a8f8122268ADBD526A0.



## Sergey
deployed the contract with
npx ts-node --files ./scripts/viemDeploy.ts first second third fourth at:
0x0970aaa10e4a9fcab2da444e76dff7c946096dfd
transaction:
https://sepolia.etherscan.io/tx/0x0cb10f44a03cdf53d8b0e070712a2a4f6da1feb213bf6143aa77a02fb2d2a7fb

## Loic
Pushed a RightToVote script, you can run it with :
npx ts-node --files ./scripts/RightToVote.ts 0x0970aaA10E4a9FCAB2dA444E76DFf7C946096dFd [Address of the wallet you want to give the vote]

## Mauro
Pushed castVote.ts, this was the one done during the lecture. 
Also added delegateVote.ts, still working on it as I am getting the error "Execution reverted for an unknown reason."
npx ts-node --files ./scripts/delegateVote.ts <contract address> <delegated wallet address>
One successful Tx: https://sepolia.etherscan.io/tx/0x5f466a3dcb8f33248b63d38d298d91498c03a33fcd9df9bdf7fcb13457cafaed

Added winningProposal.ts to run it:
npx ts-node --files ./scripts/winningProposal.ts <contract address>
will display the winning Proposal by number and name. 
