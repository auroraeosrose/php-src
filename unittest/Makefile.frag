unittest: $(UNITTEST_PATH)

$(UNITTEST_PATH): $(PHP_GLOBAL_OBJS) $(PHP_BINARY_OBJS) 
	$(BUILD_UNITTEST)

