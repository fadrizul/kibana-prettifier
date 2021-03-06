install:
	@rm -rf ./node_modules
	npm install

lint: 
	node_modules/.bin/eslint --fix src/ testHandler.js

zip:
	@rm -rf KibanaPrettifierBundle.zip
	zip -r KibanaPrettifierBundle.zip ./src/*

.PHONY: install lint zip