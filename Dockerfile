FROM node:14-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install --force
COPY . .
RUN npm run build

FROM nginx:1.19-alpine AS server
COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder ./app/build /usr/share/nginx/html

EXPOSE 80
