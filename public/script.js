console.log("App is running");

// a helper function that creates a list item for a given dream

// fetch the initial list of dreams
fetch("/broadcast")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });
