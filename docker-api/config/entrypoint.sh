#!/bin/bash

set -e

# Run migrations and seed the database
bundle exec rails db:migrate
bundle exec rails db:seed

# Execute the CMD from the Dockerfile
exec "$@"