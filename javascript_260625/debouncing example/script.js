let debounceTimer;

    function performSearch(query) {
      console.log("Searching for:", query);
    }

    document.getElementById("searchInput").addEventListener("input", function () {
      clearTimeout(debounceTimer);  // cancel any previously scheduled execution

      // set new timeout to delay execution
      debounceTimer = setTimeout(() => {
        performSearch(this.value); // run only after typing has stopped for 500ms
      }, 500); // 500ms debounce delay
    });
