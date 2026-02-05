# Use lightweight Node image
FROM node:18-alpine

# Create app directory inside container
WORKDIR /app

# Copy package files first (for caching)
COPY app-code/package*.json ./

# Install production dependencies
RUN npm install --production

# Copy remaining source code
COPY app-code/ .

# Set environment
ENV NODE_ENV=production

# Expose port
EXPOSE 3000

# Start application
CMD ["node", "app.js"]

