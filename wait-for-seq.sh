#!/bin/bash

while ! nc -z seq 5341; do
  sleep 1
done

exec "$@"
