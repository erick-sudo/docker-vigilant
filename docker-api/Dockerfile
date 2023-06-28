FROM ruby:latest
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /app
WORKDIR /app
ADD Gemfile /app/Gemfile
RUN bundle install
ADD . /app
ENTRYPOINT ["bundle", "exec", "puma", "-C", "config/puma.rb", "-p", "4000", "-b" "0.0.0.0"]