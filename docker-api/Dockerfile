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

# Copy the custom entrypoint script to the container
COPY entrypoint.sh /usr/bin/entrypoint.sh
RUN chmod +x /usr/bin/entrypoint.sh

# Set the entrypoint to the custom script
ENTRYPOINT ["entrypoint.sh"]

# Start the application
CMD ["rails", "s", "-b", "0.0.0.0", "-p", "4000"]