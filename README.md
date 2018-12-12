# Test - Docker - Env Vars

## Overview
A minimal demo which illustrates how environment variables can be provided and applied within a Docker container.

## Prerequisites
- Node
- npm
- Docker

## Instructions

### Creating The Image
- Create a Docker image by running the following command: `docker build -t <tag>:<version> .`
  - NOTE: `<tag>` and `<version>` must be replaced with actual values (ie. `foo:v1.0.0`).

### Running The Container In Development Mode
- Create a container instance by running the following command: `docker run -p 8080:8080 <tag>:<version>`.
- Navigate to `localhost:8080` in your browser of choice and confirm that the container is running in 'development' mode.
- Kill the container process.

### Running The Container In Non-Development Mode
- Create a container instance and run it in production mode by running the following command: `docker run -p 8080:8080 -e ENVIRONMENT='production' <tag>:<version>`.
- Navigate to `localhost:8080` in your browser of choice and confirm that the container is running in 'production' mode.
- Kill the container process.

### Cleanup
- Optionally remove the Docker images by running the following command: `docker rmi <tag>:<version>`.
