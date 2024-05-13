FROM node:20.9.0-alpine as build

WORKDIR /frontend

COPY . .

RUN npm install
RUN npm run build

FROM nginx:1.25.5

COPY --from=build ./frontend/dist ./usr/share/nginx/html