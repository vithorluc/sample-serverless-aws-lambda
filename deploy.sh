#!/bin/bash

# Set the argument as an environment variable
export STAGE="$1"

# Print the environment variable to verify it was set
echo "STAGE is set to: $STAGE"

# Run the yarn run test command
#yarn run test

if [ $? -ne 0 ]; then
  echo "Tests failed, not deploying"
  exit 1
else
  echo "Tests passed, deploying"
  # Run the serverless deploy command with the --stage option set to the value of the argument
  serverless deploy --stage "$STAGE"
fi