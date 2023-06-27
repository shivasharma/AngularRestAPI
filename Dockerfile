# stage 2
FROM node:latest as node
WORKDIR  /AngularRestAPI
COPY . .
RUN npm i
CMD ["npm", "run","prod"]

# stage 2
FROM nginx:1.17
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /AngularRestAPI
COPY --from=build /app/dist .
EXPOSE 8080:8080
CMD ["nginx", "-g", "daemon off;"]
#COPY --from=node /AngularRestAPI/dist/angularrestapi /var/www/html
