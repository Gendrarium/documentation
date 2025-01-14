# Getting Started for HackTheOrb, The Agoric x Chainlink Hackathon!

Welcome to the Agoric Platform! This doc is a guide for developing smart contracts and DeFi components.

## Get set up to hack!

1. [Install the prerequisites](./before-using-agoric.md)

2. Create the starter dapp

```sh
agoric init my-fungible-faucet
cd my-fungible-faucet
# Start the Agoric platform
agoric install && agoric start --reset
# In a second terminal
agoric deploy contract/deploy.js
agoric deploy api/deploy.js
# In a third terminal
cd ui && yarn start
```

Having trouble? Chat with our engineers on [Agoric Discord](https://discord.gg/gC9z6US). Also, check 
out our more [detailed documentation](./start-a-project.md).

## Dig into our architecture

1. **[ERTP](./ertp-introduction.md)**: An intro to ERTP, our token standard for fungible and non-fungible tokens.
2. **[Zoe](./intro-zoe.md)**: An intro to Zoe, our smart contract runner. Zoe escrows and
   protects your users' digital assets, letting you focus on development. 
3. **[Agoric Stack](/platform/README.md)**: An intro to the Agoric technical stack.
4. **[Agoric Dapp Guide](/dapps/README.md)** and **[Agoric Dapp
   Templates](/dapps/dapp-templates.md)**: Pre-written dapps with 
   UI you can install as a template, such as our constant product AMM.
5. **[Agoric Contracts](/zoe/guide/contracts/README.md)**: Pre-written contracts you can browse and reuse.

## Videos

Quickly get up to speed with these instructional videos:

- [DeFi Workshops: Smart Contracts in JavaScript](https://www.youtube.com/watch?v=qudVWjSqDJU)
  by Dean Tribble covers general concepts with examples.
  
- [Building a Composable DeFi Contract](https://www.youtube.com/watch?v=faxrecQgEio) by Kate Sills walks through 
  writing first a covered call option contract, and then an OTC Desk contract that uses 
  the covered call contract.
  
## Next steps

For where to go from here in our documentation and learning about Agoric, see 
our [Documentation Guide](./README.md) for links to ERTP and Zoe Guides and API 
documentation, a guide to Agoric distributed JavaScript programming, a Glossary, and more. 

## Support

Need help? Chat with our engineers on [Agoric Discord](https://discord.gg/gC9z6US).
