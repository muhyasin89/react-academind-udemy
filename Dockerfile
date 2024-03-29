# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies

RUN yarn install

COPY package.json ./
COPY yarn.lock ./

# add app
COPY . ./

# start app
CMD ["yarn", "start"]