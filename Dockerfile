FROM node:12

# Create app directory
WORKDIR /app

# Set container port
ENV PORT 3000

# Copy npm package.json
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server/server.js"]