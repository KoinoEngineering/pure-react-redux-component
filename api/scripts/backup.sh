docker-compose down --remove-orphans
docker-compose up -d
docker-compose exec db pg_dump --username=postgres -C api_development > initdb/01_api_development.sql
docker-compose down --remove-orphans
