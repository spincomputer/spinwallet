# spinwallet

**spinwallet** is a starter template for building a Dynamic wallet app using Next.js for applications building on SPIN Computer. It seamlessly integrates Dynamic authentication, Ethereum wallet connectors, and JWT management, providing a robust foundation for developing decentralized wal§t applications.

---

## Features

- **Dynamic Authentication:**  
  Uses Dynamic Labs SDK to authenticate users via a modal wallet connection.
  
- **JWT Management:**  
  Retrieves and displays JWT tokens for authenticated users, ensuring secure communication with your backend.
  
- **Ethereum Wallet Integration:**  
  Supports Ethereum wallet connectors for easy blockchain interactions.
  
- **Custom Next.js Layout:**  
  Yses a custom global layout with Google Fonts integration (Geist Sans and Geist Mono) for a polished UI.

- **Backend Integration:**  
  Automatically sends authentication data to your backend API for further verification or processing.

---

## Prerequisites

- **Node.js:** v14 or later
- **Package Manager:** npm or yarn
- **Dynamic Labs Account:** Obtain your Dynamic Environment ID from [Dynamic Labs](https://www.dynamic.xyz/).

---

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/spincomputer/spinwallet.git
   cd spinwallet
   ```

2. **Install Dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

---

## Environment Configuration

Create a `.env.local` file in the root directory and add the following environment variables:

```env
NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID=your_dynamic_environment_id
NEXT_PUBLIC_API_URL=http://localhost:8000
```

- **NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID:** Your Dynamic Labs environment ID.
- **NEXT_PUBLIC_API_URL:** URL for your backend API endpoint (defaults to a local server).

---

## Running the Application

Start the development server:

Using npm:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser to view the SPIN Wallet app.

---

## Project Structure

```
spin-wallet/
├── app/
│   ├── globals.css              # Global CSS styles
│   ├── layout.tsx               # Root layout with global fonts and DynamicProvider
├── components/
│   └── DynamicProvider.tsx      # Wraps the app with Dynamic Labs authentication context
├── pages/
│   └── index.tsx                # Home page with DynamicWidget and JWT display
├── public/                      # Static assets
├── .env.local                   # Environment variables (not committed)
├── package.json                 # Project metadata and scripts
└── README.md                    # This file
```

---

## How It Works

- **Root Layout & Fonts:**  
  The `RootLayout` component (in `app/layout.tsx`) applies global styles and fonts using Geist Sans and Geist Mono from Google Fonts.

- **Dynamic Provider:**  
  The `DynamicProvider` component (in `components/DynamicProvider.tsx`) wraps the application with authentication settings, including wallet connectors and event handlers. On successful authentication, it:
  - Stores user data in local storage.
  - Retrieves and sends the JWT to your backend via a POST request to `/api/auth`.
  
- **Home Page:**  
  The home page (in `pages/index.tsx`) includes:
  - **DynamicWidget:** Opens a modal for wallet connection.
  - **JWTDisplay:** Retrieves and displays the JWT stored in local storage.

---

## Customization

- **Authentication Endpoint:**  
  Adjust the API endpoint in `DynamicProvider.tsx` if your backend is hosted elsewhere or if you need additional processing on the authentication data.

- **Styling:**  
  Modify `globals.css` and the layout components to customize the look and feel of your wallet app.

- **Wallet Connectors:**  
  You can add or change wallet connectors in the `DynamicProvider` settings as needed.

---

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

---

## License

This project is licensed under the [Apache 2.0](LICENSE).

---

Enjoy building with spinwallet and creating the next generation of decentralized applications!