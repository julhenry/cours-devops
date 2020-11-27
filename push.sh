#!/bin/sh
git remote add cleverapps
https://$CLEVER_TOKEN:$CLEVER_SECRET@push.clever-cloud.com/app_aa8043ae-6fad-4ef8-9d21-db1957eee1dd.git
git --verbose --force push cleverapps main