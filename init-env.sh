#!/usr/bin/env bash

port=9001
db_root_password=$(openssl rand -base64 24)
db_user="wall_agent"
db_password=$(openssl rand -base64 24)
db_name="whiteboard"
db_port=5432

cat > .env << END
PORT=$port
DB_ROOT_PASSWORD="$db_root_password"
DB_USER="$db_user"
DB_PASSWORD="$db_password"
DB_NAME="$db_name"
END