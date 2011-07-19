BIN_PATH := ./node_modules/expresso/bin
EXPRESSO := $(BIN_PATH)/expresso
JSLINT   := /usr/local/bin/gjslint
FIX_STYLE := /usr/local/bin/fixjsstyle
JSLINT_PARAMS := --exclude_files model.js --custom_jsdoc_tags public,static --recurse lib/

test: 
	# $(EXPRESSO) --serial test/BaseTypes.test.js
	$(EXPRESSO) --serial test/Geometry.test.js

jslint: 
	$(JSLINT) $(JSLINT_PARAMS)

fixstyle: 
	$(FIX_STYLE) $(JSLINT_PARAMS)

docs:

benchmark:

install:
	npm install . --dev

uninstall: 
	rm -rf ./node_modules

.PHONY: test jslint docs benchmark install uninstall 
