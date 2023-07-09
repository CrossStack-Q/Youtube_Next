FROM node:20-alpine


RUN mkdir -p /home/app

COPY ./nextapp /home/app



WORKDIR /home/app
RUN npm install --force

# ENV i had only
RUN npm run build

CMD ["npm", "start"]
