.PHONY: hooks temp

hooks:
	@cp hooks/commit-msg .git/hooks/commit-msg
	@echo "Make sure the hook file is executable."

temp:
	@python scripts/temp_gen.py
