FROM node:8

WORKDIR /app

COPY . .

EXPOSE 8080

ENV ENVIRONMENT=development

RUN npm install

CMD ["npm", "start"]

