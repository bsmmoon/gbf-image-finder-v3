include config/.env

install:
	npm install

server:
	PORT=$(PORT) gatsby develop &

kill:
	kill -9 ${shell lsof -ti :$(PORT)}
