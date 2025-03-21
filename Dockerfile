
FROM node:20-alpine as builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config to serve the SPA correctly
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 82
EXPOSE 82

CMD ["nginx", "-g", "daemon off;"]
