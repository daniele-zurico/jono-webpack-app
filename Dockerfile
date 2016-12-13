FROM rosenhouse/phantomjs2

# TODO Move to base image

ENV NPM_CONFIG_REGISTRY="http://registry.npmjs.org/" \
 PHANTOMJS2_VERSION="2.0.0"

RUN apt-get update
RUN apt-get install --yes curl git
RUN curl -sL https://deb.nodesource.com/setup_5.x | bash -
RUN apt-get install --yes nodejs
 
# Commands

WORKDIR /tmp
COPY package.json package.json
RUN npm install --no-optional
RUN mkdir /<%= appNameSlug %>
WORKDIR /<%= appNameSlug %>
ADD . /<%= appNameSlug %>
RUN mv /tmp/node_modules ./
RUN npm install slush-mfp -g
RUN npm run-script package
RUN tar -C target/ -czf <%= appNameSlug %>.tar.gz .

CMD ["cat <%= appNameSlug %>.tar.gz"] 