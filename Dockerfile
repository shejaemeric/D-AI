# Use the official nginx image as the base
FROM nginx:1.10.1-alpine

# Copy the nginx configuration file to the container
COPY nginx.conf /etc/nginx/conf.d/default.conf


# Copy the production-ready build files to the nginx container
COPY build /usr/share/nginx/html

# Expose port 80 to allow traffic to the container
EXPOSE 80
