#!/bin/bash

# Check if an argument was passed
if [ -z "$1" ]
then
    echo "Please provide an migration name as an argument"
    exit 1
fi

# Get the migration name
migration_name="$1"

# Create the migration using typeorm command
typeorm migration:create ./src/infrastructure/persistence/migrations/$migration_name

echo "Successfully created migration $migration_name using TypeORM CLI"