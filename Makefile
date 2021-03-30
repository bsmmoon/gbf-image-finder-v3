-include config/.env

install:
	npm install

server-hot:
	PORT=$(PORT) gatsby develop &

server:
	gatsby build
	gatsby serve -p 3000 &

kill:
	kill -9 ${shell lsof -ti :$(PORT)}

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


