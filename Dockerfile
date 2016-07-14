FROM heroku/cedar:14
MAINTAINER Paulo Diovani <paulo.diovani@codeminer42.com>

RUN mkdir -p /app/user
WORKDIR /app/user

ENV GEM_PATH /app/heroku/ruby/bundle/ruby/2.3.0
ENV GEM_HOME /app/heroku/ruby/bundle/ruby/2.3.0
RUN mkdir -p /app/heroku/ruby/bundle/ruby/2.3.0

# Install Ruby
RUN mkdir -p /app/heroku/ruby/ruby-2.3.1
RUN curl -s --retry 3 -L https://heroku-buildpack-ruby.s3.amazonaws.com/cedar-14/ruby-2.3.1.tgz | tar xz -C /app/heroku/ruby/ruby-2.3.1
ENV PATH /app/heroku/ruby/ruby-2.3.1/bin:$PATH

# Install Node
RUN curl -s --retry 3 -L http://s3pository.heroku.com/node/v0.12.7/node-v0.12.7-linux-x64.tar.gz | tar xz -C /app/heroku/ruby/
RUN mv /app/heroku/ruby/node-v0.12.7-linux-x64 /app/heroku/ruby/node-0.12.7
ENV PATH /app/heroku/ruby/node-0.12.7/bin:$PATH

# Install Bundler
RUN gem install bundler -v 1.9.10 --no-ri --no-rdoc
ENV PATH /app/user/bin:/app/heroku/ruby/bundle/ruby/2.3.0/bin:$PATH
ENV BUNDLE_APP_CONFIG /app/heroku/ruby/.bundle/config

ENV RACK_ENV development

# Run bundler to cache dependencies
COPY ["Gemfile", "Gemfile.lock", "/app/user/"]
RUN bundle install --path /app/heroku/ruby/bundle --jobs 4
ADD . /app/user

# export env vars during run time
RUN mkdir -p /app/.profile.d/
RUN echo "cd /app/user/" > /app/.profile.d/home.sh
ONBUILD RUN echo "export PATH=\"$PATH\" GEM_PATH=\"$GEM_PATH\" GEM_HOME=\"$GEM_HOME\" RACK_ENV=\"\${RACK_ENV:-$RACK_ENV}\" BUNDLE_APP_CONFIG=\"$BUNDLE_APP_CONFIG\"" > /app/.profile.d/ruby.sh

COPY ./init.sh /usr/bin/init.sh
RUN chmod +x /usr/bin/init.sh

ENTRYPOINT ["/usr/bin/init.sh"]
