

# 🛒 Micro Frontends with React & Webpack 5 Module Federation

This project demonstrates **Micro Frontends (MFE)** using **React** and **Webpack 5 Module Federation**, where a **Container App** manages a **Cart Microfrontend** that allows users to add vegetables to a cart.

---
## 📌 **Project Structure**
```markdown

micro-frontend-app/
│── container/         # Host app (Main shell)
│   ├── src/
│   │   ├── components/
│   │   │   ├── VegetableList.js
│   │   ├── App.js
│   │   ├── bootstrap.js
│   │   ├── index.js
│   ├── webpack.config.js
│   ├── package.json
│── cart/             # Microfrontend Cart App
│   ├── src/
│   │   ├── components/
│   │   │   ├── Cart.js
│   │   ├── App.js
│   │   ├── bootstrap.js
│   │   ├── index.js
│   ├── webpack.config.js
│   ├── package.json
│── package.json      # Root package file
│── README.md         # Documentation
```

---

## 🚀 **Features**
- **Modular microfrontend architecture**
- **Independent microfrontend deployment**
- **Dynamic data sharing (Add to Cart)**
- **Lazy loading with `React.lazy()`**
- **Webpack 5 Module Federation**

---

## 🛠 **Installation & Setup**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/rohitsunilsharma2000/micro-frontend-app.git
cd micro-frontend-react
```

### **2️⃣ Setup Container App**
```sh
cd container
npm install
npm start
```
The **container app** runs on `http://localhost:3000/`.

### **3️⃣ Setup Cart Microfrontend**
```sh
cd ../cart
npm install
npm start
```
The **cart microfrontend** runs on `http://localhost:3001/`.

---

## 📦 **Webpack Configuration**
### **📌 `cart/webpack.config.js` (Microfrontend)**
```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 3001,
  },
  entry: "./src/index.js",
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./Cart": "./src/components/Cart",
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
```

### **📌 `container/webpack.config.js` (Host)**
```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 3000,
  },
  entry: "./src/index.js",
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        cart: "cart@http://localhost:3001/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
```

---

## 🛍 **Micro Frontend Components**
### **📌 `container/src/components/VegetableList.js`**
```javascript
import React from "react";

const vegetables = [
  "আলু", "পটল", "বেগুন", "লাউ", "ঝিঙে", "চিচিঙ্গা", "কুমড়ো", "করলা", "ফুলকপি", "বাঁধাকপি",
  "গাজর", "মূলা", "পালং শাক", "মিষ্টি আলু", "ঢেঁড়স", "শসা", "টমেটো", "পেঁয়াজ", "রসুন", "আদা"
];

const VegetableList = ({ addToCart }) => {
  return (
    <div>
      <h2>ভেজিটেবল লিস্ট</h2>
      <ul>
        {vegetables.map((veg, index) => (
          <li key={index}>
            {veg} <button onClick={() => addToCart(veg)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VegetableList;
```

### **📌 `cart/src/components/Cart.js`**
```javascript
import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
```

---

## 📌 **Running the Project**
1. **Start the Cart Microfrontend** (`cart/`)
   ```sh
   cd cart
   npm start
   ```
2. **Start the Container App** (`container/`)
   ```sh
   cd ../container
   npm start
   ```
3. **Test the Feature**
   - Click **"Add to Cart"** on a vegetable.
   - The **cart updates dynamically in the microfrontend**.

---

## 🎯 **Key Takeaways**
✅ **Independent microfrontend deployment**  
✅ **Dynamic component sharing between apps**  
✅ **Lazy loading and optimized performance**  
✅ **Real-world micro frontend architecture**  

---

## 🎉 **Next Steps**
- **Enhance with Redux or Zustand for state management**
- **Add persistent storage (localStorage, database)**
- **Implement authentication and user sessions**

---

## 📝 **License**
This project is licensed under the MIT License.

---

