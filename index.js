// Code your solution here
// Function to find drivers with an exact name match
function findMatching(drivers, name) {
    return drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to find drivers with names that start with a provided string
  function fuzzyMatch(drivers, letters) {
    return drivers.filter((driver) =>
      driver.toLowerCase().startsWith(letters.toLowerCase())
    );
  }
  
  // Function to find drivers with a matching name
  function matchName(drivers, name) {
    return drivers.filter((driver) => driver.name === name);
  }

  
