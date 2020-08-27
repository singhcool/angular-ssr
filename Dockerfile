FROM node:12.11.1-alpine
WORKDIR /app
COPY . ./

RUN npm install
ARG VALUES="development"
RUN if [ "$VALUES" = "development" ] ; then npm run buildDevelop ;elif [ "$VALUES" = "uat" ] ; then npm run buildUat ;elif [ "$VALUES" = "qa" ] ; then npm run buildQA ;elif [ "$VALUES" = "prod" ] ; then npm run buildProd; fi
EXPOSE 80
CMD ["npm", "run", "serveSSR"]