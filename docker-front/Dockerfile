# Layer 1 NODE
FROM node:18

# Working directory for subsequent commands
WORKDIR /app

#Copy appliaction files into the docker image
COPY . .

# Install exact dependency versions
RUN npm ci

# Building app
RUN npm run build

CMD ["serve", "-s", "build", "-l", "5000"]