# stage 2
FROM node:latest as node
WORKDIR  /AngularRestAPI
COPY . .
RUN npm i
CMD ["npm", "run","prod"]

# stage 2
FROM nginx:alpine
