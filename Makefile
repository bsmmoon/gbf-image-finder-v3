include config/.env

install:
	npm install

server-hot:
	PORT=$(PORT) gatsby develop &

server:
	gatsby build
	gatsby serve -p 3000 &

kill:
	kill -9 ${shell lsof -ti :$(PORT)}
