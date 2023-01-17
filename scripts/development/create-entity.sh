#!/bin/bash

# Check if an argument was passed
if [ -z "$1" ]
then
    echo "Please provide an entity name as an argument"
    exit 1
fi

# Get the entity name
entity_name="$1"

# Create the entity using typeorm command
typeorm entity:create src/infrastructure/persistence/entities/$entity_name

echo "Successfully created entity $entity_name using TypeORM CLI"