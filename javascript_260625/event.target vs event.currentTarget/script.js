 // Add event listener to the outer div
    document.getElementById('outer').addEventListener('click', function(event) {
      console.log("OUTER CLICK HANDLER");
      console.log("event.target:", event.target);
      console.log("event.currentTarget:", event.currentTarget);
    });
