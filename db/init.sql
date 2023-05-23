SELECT 'CREATE DATABASE reserves_app_db'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'reserves_app_db')\gexec