FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV production
ENV MODEL_URL https://storage.googleapis.com/submissionmlgc-alhilaluddin/submissions-model/model.json
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "start"]