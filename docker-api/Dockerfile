FROM ruby:latest
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev
RUN mkdir /app
WORKDIR /app
ADD Gemfile /app/Gemfile
RUN bundle install
ADD . /app
ENTRYPOINT ["rails", "s", "-b", "0.0.0.0", "-p", "4000"]
# ENTRYPOINT ["bundle", "exec", "puma", "-C", "config/puma.rb", "-p", "4000"]
