# Pull the latest ruby image
FROM ruby:latest

# Setup system requirements
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

# Create a working directory
RUN mkdir /app

# Set the working directory
WORKDIR /app

# Copy Gemfile
COPY Gemfile /app/Gemfile

# Install dependencies
RUN bundle install

# Copy the rest of the Rails application files to the container
COPY . .

# Start the application
# ENTRYPOINT ["rails", "s", "-b", "0.0.0.0", "-p", "4000"]

# Start the Rails application and run migrations
CMD ["bash", "-c", "bundle exec rails db:migrate db:seed && bundle exec rails server -b 0.0.0.0 -p 4000"]
