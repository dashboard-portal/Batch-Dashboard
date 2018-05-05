FROM node:carbon

RUN mkdir -p /home/node/Batch-Dashboard
COPY package.json /home/node/Batch-Dashboard/package.json
RUN chown -R node:node /home/node/*

USER node
WORKDIR /home/node/Batch-Dashboard
RUN yarn
# ENTRYPOINT [ "entrypoint.sh" ]
CMD ["yarn", "start"]