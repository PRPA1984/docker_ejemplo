FROM node:16-alpine3.11

RUN mkdir /app
ADD . /app/
WORKDIR /app
RUN npm install
RUN npm run build


FROM nginx:latest

COPY --from=0 app/build /usr/share/nginx/html

EXPOSE 80    

CMD ["nginx", "-g", "daemon off;"]
