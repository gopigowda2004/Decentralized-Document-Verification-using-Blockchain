# BlockChain-Based Document Verification with IPFS

This project aims to create a secure and decentralized system for document verification using Blockchain and InterPlanetary File System (IPFS) technologies. The system stores the hash of the documents in the Blockchain network and the documents themselves in the IPFS network. This ensures that the documents cannot be tampered with or altered, and they can be easily retrieved and verified by authorized parties.

## Features

- Secure document verification using Blockchain and IPFS technologies
- Decentralized system, with no central authority or single point of failure
- Fast and easy verification process, with no need for intermediaries or third-party services
- User-friendly interface for document upload and verification
- Support for multiple document types and formats

## Requirements

- Node.js and npm installed on your system
- MetaMask Wallet
- IPFS API (key and secret) you can get it from infura.io
-  Ganache (for local Ethereum blockchain simulation)
- Solidity (for writing smart contracts)
- VS Code (recommended code editor)
- Tailwind CSS (for styling the frontend)

## Installation

1. Clone this repository: 
   ``https://github.com/DevAloshe/BlockChain-Based-Document-Verfication-With-IPFS.git``


2. Install the required packages:
  ``cd BlockChain-Based-Document-Verfication-With-IPFS``
  `` npm install``

4. deploy the contract.sol using remixe online ide
   after the deployment complete copy the contract address from remix and paste it in the app.js contract address field
   you also need to specify the network url and the network explorer url you are working on ( you can get them from       metamask network settings)
   
5. Open the application in your browser using Live Server Extension .
6. if you need to view the actual documents you have to create new infura account at ``infura.io`` and use the api id and secret provided by infura and paste them in the app.js where is the uploadToInfura function

## SETUP

Follow these steps to set up the project on your local machine:

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/gopigowda2004/Decentralized-Document-Verification-using-Blockchain.git
cd Decentralized-Document-Verification-using-Blockchain

npm install

npm install -g truffle

truffle version

Truffle v5.x.x (core: 5.x.x)
Node vxx.x.x

truffle compile

truffle migrate --network development

## IN App.js you need to change address
The address "0x1770B3133F23a24698D3f9049e69BcB30038586b" is an Ethereum wallet or smart contract address. Here’s how you can find or verify it:

The address "0x1770B3133F23a24698D3f9049e69BcB30038586b" is an Ethereum wallet or smart contract address. Here’s how you can find or verify it:

🔍 1️⃣ Check in Ganache (Local Blockchain)
If you're using Ganache for local Ethereum development, follow these steps:

Open Ganache → You will see a list of accounts with addresses.

Find the Address in the list (if it's from your local blockchain).

If you deployed a smart contract, check the "Contracts" tab.

🔍 2️⃣ Check in Metamask (Your Wallet)
If this is your wallet address:

Open Metamask.

Click on your account name (it will copy the address).

Compare it with "0x1770B3133F23a24698D3f9049e69BcB30038586b".

🔍 3️⃣ Check in Truffle Console
If you deployed a contract using Truffle, run:

truffle console
Then, check deployed contracts:

YourContract.deployed().then(instance => instance.address)
you will get address copy and paste to App.js Address



I have Used Etherum Token You need to use Polygon matic Token
you need to buy this in crypto currency exchange



1️⃣ Open MetaMask
Click on MetaMask Extension in your browser.

Click on the Network Dropdown (top left, where it shows "Ethereum Mainnet").

Click on "Add network" or "Add network manually".

🔹 2️⃣ Enter Polygon Network Details
In the Add Network section, enter the following details:

Network Name: Polygon Mainnet

New RPC URL: https://polygon-rpc.com/

Chain ID: 137

Currency Symbol: MATIC

Block Explorer URL: https://polygonscan.com/

After entering these details, click "Save".


## How to Buy MATIC (Polygon) Token
You can buy MATIC (Polygon) using various methods, depending on whether you want to purchase it with fiat (INR, USD, etc.) or trade it with other cryptocurrencies.

1️⃣ Buy MATIC from a Crypto Exchange
You can purchase MATIC directly from these popular crypto exchanges:
✅ Binance → https://www.binance.com
✅ Coinbase → https://www.coinbase.com
✅ WazirX (For India) → https://wazirx.com
✅ KuCoin → https://www.kucoin.com
✅ Kraken → https://www.kraken.com

📝 Steps to Buy from an Exchange:
Sign up/Login on your preferred exchange.

Complete KYC (for fiat deposits).

Deposit INR/USD via UPI, bank transfer, or credit/debit card.

Search for "MATIC" in the trading section.

Buy MATIC using INR, USDT, or other available pairs.

Withdraw MATIC to your MetaMask Wallet (if needed).

🔹 2️⃣ Buy MATIC on MetaMask (Using Fiat & Crypto)
Open MetaMask and select the Polygon Network.

Click on "Buy" inside MetaMask.

Choose a payment method (Credit/Debit card or P2P).

Follow the payment instructions and confirm the purchase.

🔸 Supported Services in MetaMask: MoonPay, Transak, Wyre

🔹 3️⃣ Swap Crypto for MATIC (If You Already Have Crypto)
If you have Ethereum (ETH), USDT, or BNB, you can swap it for MATIC on a Decentralized Exchange (DEX) like:
🔁 Uniswap → https://app.uniswap.org
🔁 SushiSwap → https://app.sushi.com
🔁 QuickSwap (Best for Polygon) → https://quickswap.exchange

📝 Steps for Swapping:
Go to QuickSwap and connect MetaMask.

Select ETH/USDT → MATIC in the swap section.

Approve the transaction and swap.

MATIC will be added to your wallet.

🔹 4️⃣ Withdraw MATIC to Your MetaMask Wallet
Copy your MetaMask Polygon (MATIC) address.

Go to the exchange where you bought MATIC.

Withdraw MATIC → Enter your MetaMask address.

Select the Polygon Network (NOT ERC-20, BNB, etc.).

Confirm Withdrawal.

## Usage

1. The owner of the system must first add an exporter to the list of authorized parties. This is done by clicking on the "Add Exporter" button and entering the exporter's Metamask address.
2. Upload a document to the system by clicking on the "Upload Document" button and selecting a file from your computer. The document will be encrypted and stored in the IPFS network, and its hash will be recorded in the Blockchain.

3. Verify a document by clicking on the "Verify Document" button and choose the document and click verify button. The system will retrieve the document from the IPFS network, decrypt it, and compare its hash with the one recorded in the Blockchain.

4. The system will display a message indicating whether the document is authentic or not.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgments
- Metamask documentation
- Solidity and Web3.js documentation
- IPFS documentation
- Truffle documentation


<img width="1600" height="900" alt="Screenshot 2025-04-02 184957" src="https://github.com/user-attachments/assets/3a207875-9861-4450-b9ac-2ab745b2c2a7" />



<img width="1600" height="900" alt="Screenshot 2025-04-03 200253" src="https://github.com/user-attachments/assets/41bed082-c9cf-4a7a-9801-fd9d4c893e9e" />


<img width="776" height="365" alt="Screenshot 2025-04-03 200034" src="https://github.com/user-attachments/assets/b0d8bd51-34a1-4326-84f4-0fc7e100637e" />


<img width="820" height="367" alt="Screenshot 2025-04-03 195900" src="https://github.com/user-attachments/assets/e14be52c-4a7f-48d1-af9e-39235e8bdbf5" />



<img width="340" height="562" alt="Screenshot 2025-03-15 183720" src="https://github.com/user-attachments/assets/ebdfa45f-6ec5-4450-b437-18c6efaf0d7a" />
