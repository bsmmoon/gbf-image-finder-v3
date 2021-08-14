-include config/.env

install:
	npm install

start:
	PORT=$(PORT) gatsby develop &

kill:
	kill -9 ${shell lsof -ti :$(PORT)}

build:
	make content
	gatsby build

preview:
	firebase hosting:channel:deploy preview

deploy:
	firebase deploy

tree:
	tree -I "node_modules|public"

content:
	mkdir -p src/content
	curl -H 'Authorization: token ${GITHUB_ACCESS_TOKEN}' \
  -H 'Accept: application/vnd.github.v3.raw' \
  -L https://api.github.com/repos/${OWNER}/${REPO}/contents/${CHARACTERS_PATH} \
	-o src/content/characters.json
	
	curl -H 'Authorization: token ${GITHUB_ACCESS_TOKEN}' \
  -H 'Accept: application/vnd.github.v3.raw' \
  -L https://api.github.com/repos/${OWNER}/${REPO}/contents/${TAGS_PATH} \
	-o src/content/tags.json

then:
	sleep 1
