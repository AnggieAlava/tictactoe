help:  ## Shows this help.
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

install: ## Installs dependencies
	npm install -g parcel@latest

clean: ## Cleans the project
	rm -rf .cache dist

build:## Builds the project
	npx parcel index.html

start:## Runs in dev mode
	npx parcel index.html --open
