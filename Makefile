.PHONY: hooks

hooks:
	@cp hooks/commit-msg .git/hooks/commit-msg
	@echo "Make sure the hook file is executable."
