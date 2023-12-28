# Simple Load Balancer with Nginx

This project demonstrates a simple setup for distributing traffic across three servers using Nginx as a load balancer. The goal is to ensure continuous accessibility to a specific domain, even if one of the servers becomes unavailable.

## Overview

In this setup, Nginx acts as a load balancer to evenly distribute incoming requests across three backend servers. The load balancing configuration helps improve the availability and reliability of the application.

![Load Balancer Diagram](./flow.png)

## Prerequisites

- Nginx installed on the load balancer server.
- Three backend servers running the application.
- Docker container

## Configuration

### Load Balancer (Nginx)

1. Install Nginx on the load balancer server:

   ```bash
   sudo apt-get update
   sudo apt-get install nginx

2. Install Docker

   ```bash
   sudo apt-get install docker.io

Configure Docker:
Ensure that Docker is set up to run on your load balancer server. Refer to the Docker documentation for detailed instructions. By default at /etc/nginx/sites-available and /etc/nginx/sites-enabled


