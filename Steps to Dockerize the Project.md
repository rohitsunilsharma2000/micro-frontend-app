

## **📌 Steps to Dockerize the Project**
We will create:
- **`Dockerfile`** for both the **Container App (Host)** and **Cart Microfrontend**.
- **`docker-compose.yml`** to run both containers together.

---

### **1️⃣ Create `Dockerfile` for the Container App**
📌 Inside the **`container/`** folder, create a `Dockerfile`:
```sh
touch container/Dockerfile
```

📄 **`container/Dockerfile`**
```dockerfile
# Use node image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
```

---

### **2️⃣ Create `Dockerfile` for the Cart Microfrontend**
📌 Inside the **`cart/`** folder, create a `Dockerfile`:
```sh
touch cart/Dockerfile
```

📄 **`cart/Dockerfile`**
```dockerfile
# Use node image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Expose port 3001
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
```

---

### **3️⃣ Create `docker-compose.yml`**
📌 At the **root level** (`micro-frontend-app/`), create a `docker-compose.yml` file:
```sh
touch docker-compose.yml
```

📄 **`docker-compose.yml`**
```yaml
version: '3.8'

services:
  container:
    build: ./container
    ports:
      - "3000:3000"
    volumes:
      - ./container:/app
      - /app/node_modules
    depends_on:
      - cart

  cart:
    build: ./cart
    ports:
      - "3001:3001"
    volumes:
      - ./cart:/app
      - /app/node_modules
```

---

## **🚀 Running the Micro Frontends with Docker**
1. **Build and start both containers:**
   ```sh
   docker-compose up --build
   ```
2. Open the **Container App** at:
   ```
   http://localhost:3000
   ```
3. Open the **Cart Microfrontend** at:
   ```
   http://localhost:3001
   ```

---

## **📌 Stopping the Containers**
To stop the running containers, use:
```sh
docker-compose down
```

---

## **🎯 Summary**
- **Each microfrontend runs in its own Docker container.**
- **The apps communicate dynamically via Webpack Module Federation.**
- **`docker-compose.yml` runs both containers together.**

