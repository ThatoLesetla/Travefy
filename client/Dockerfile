FROM tiangolo/node-frontend:10 as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build

FROM nginx:1.15

# CMD [ "ng" , "serve" ]

# #ARG confiiguration=production

# RUN npm run build -- --output-path=./dist/out --configuration${confiiguration}

FROM nginx:1.15

COPY --from=build-stage /app/ /usr/share/nginx/html

COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf


