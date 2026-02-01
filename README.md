# 🚀 BaseToken - Web3 Token Landing Page

A modern, dark-themed Web3 token landing page built with React, Vite, Tailwind CSS, Wagmi v2, and RainbowKit.

## ✨ Features

- 🎨 **Modern Dark UI**: Futuristic cyberpunk design with neon accents
- 🔗 **Wallet Connection**: Seamless wallet integration via RainbowKit
- 💰 **Token Balance Display**: Real-time balance tracking from smart contracts
- 🎯 **Mint Functionality**: Easy token minting with transaction status tracking
- 📊 **Live Stats**: Display total supply and token metrics
- ⚡ **Optimized Performance**: Built with Vite and React
- 🎭 **Animations**: Smooth transitions and engaging micro-interactions
- 📱 **Responsive Design**: Works perfectly on all devices

## 🛠️ Tech Stack

- **Framework**: React (Vite)
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Web3 Integration**:
  - Wagmi v2
  - Viem
  - RainbowKit
  - TanStack Query
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js 18.x or later
- npm or yarn or pnpm
- MetaMask or another Web3 wallet

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Get your WalletConnect Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/) and add it to `.env.local`:

```env
VITE_WALLETCONNECT_PROJECT_ID=your_project_id_here
```

### 3. Configure Your Smart Contract

#### Update Contract Address

Edit `src/constants/contracts.js` and replace the placeholder addresses with your deployed contract addresses:

```javascript
export const CONTRACT_ADDRESSES = {
  // Base Mainnet
  8453: "0xYourBaseContractAddress",
  
  // Ethereum Mainnet
  1: "0xYourMainnetContractAddress",
};
```

#### Update Contract ABI

Edit `src/constants/abi.js` and replace the placeholder ABI with your actual contract ABI. Make sure your contract includes these functions:

- `mint(uint256 amount)` - For minting tokens
- `balanceOf(address account)` - For checking balance
- `totalSupply()` - For total supply
- `decimals()` - For token decimals
- `symbol()` - For token symbol

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
web3-token-landing/
├── src/
│   ├── app/
│   │   ├── page.jsx             # Main landing page
│   │   ├── layout.js            # Layout component
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── Web3Provider.jsx     # Wagmi & RainbowKit provider
│   │   ├── Navbar.jsx           # Navigation with ConnectButton
│   │   ├── TokenStats.jsx       # Token statistics display
│   │   └── MintCard.jsx         # Mint functionality component
│   ├── config/
│   │   └── wagmi.js             # Wagmi configuration
│   ├── constants/
│   │   ├── abi.js               # Contract ABI
│   │   └── contracts.js         # Contract addresses
│   └── main.jsx                 # Entry point
├── public/                      # Static assets
├── tailwind.config.js           # Tailwind configuration
├── vite.config.js               # Vite configuration
└── package.json                 # Dependencies
```

## 🎨 Customization

### Change Color Theme

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      neon: {
        purple: "#a855f7",
        pink: "#ec4899",
        cyan: "#06b6d4",
      },
      // Add your custom colors
    },
  },
}
```

### Modify Fonts

The project uses:
- **Display Font**: Orbitron (headers, logo)
- **Body Font**: Rajdhani (body text)

To change fonts, update the Google Fonts import in `src/app/globals.css`.

### Update Branding

Replace "BaseToken" with your token name in:
- `index.html` (title)
- `src/components/Navbar.jsx` (logo)
- `src/app/page.jsx` (hero section)

## 🔐 Smart Contract Requirements

Your ERC-20 token contract should implement these functions:

```solidity
function mint(uint256 amount) external;
function balanceOf(address account) external view returns (uint256);
function totalSupply() external view returns (uint256);
function decimals() external view returns (uint8);
function symbol() external view returns (string memory);
```

## 🌐 Supported Networks

- Base Mainnet (Chain ID: 8453)
- Ethereum Mainnet (Chain ID: 1)

To add more networks, edit `src/config/wagmi.js`:

```javascript
import { arbitrum, polygon } from "wagmi/chains";

export const config = getDefaultConfig({
  // ...
  chains: [base, mainnet, arbitrum, polygon],
});
```

## 📦 Building for Production

```bash
npm run build
npm run serve
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy!

### Other Platforms

This is a standard Vite application and can be deployed to any platform that supports static site hosting:
- Netlify
- GitHub Pages
- AWS S3
- etc.

## 🔧 Troubleshooting

### Wallet Connection Issues

- Make sure you have a valid WalletConnect Project ID
- Check that your wallet is connected to the correct network
- Clear browser cache and try again

### Transaction Failures

- Ensure you have enough ETH for gas fees
- Verify the contract address is correct
- Check that the contract function names match the ABI

### Build Errors

- Delete `node_modules` and `dist` folders
- Run `npm install` again
- Check Node.js version (should be 18.x or later)

## 📄 License

MIT License - feel free to use this project for your own tokens!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💬 Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ using React, Vite, Wagmi v2, and RainbowKit
