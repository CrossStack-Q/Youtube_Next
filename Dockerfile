FROM node:20-alpine


RUN mkdir -p /home/app

COPY ./reactapp /home/app



WORKDIR /home/app
RUN npm install --force

ENV GOOGLE_ID=983744644321-1f9rb3c7q94pfhr7qhf081mhp4m0ovto.apps.googleusercontent.com
ENV GOOGLE_SECRET=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
ENV NEXTAUTH_SECRET=qwer1234321
ENV NEXTAUTH_URL=http://localhost:3000
RUN npm run build

CMD ["npm", "start"]
