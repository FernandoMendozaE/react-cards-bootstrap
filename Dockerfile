# Use a Node lts-alpine base image
FROM node:lts-alpine as builder 

# Set the working directory to /app inside the container
WORKDIR /app

COPY ./package.json ./
RUN npm install

# ==== BUILD =====
COPY . .
RUN npm run build

# Use a nginx stable-alpine base image
FROM nginx:stable-alpine

EXPOSE 80

COPY --from=builder /app/build /usr/share/nginx/html