// Stores the active TCP connection object.
let connection;

// handleUserInput function

const handleUserInput = function (key) {
  if (key === "\u0003") { 
    process.exit(); // terminate the game 
  } else if (key === "w") { 
    connection.write("Move: up")
  } else if (key === 'a') { 
    connection.write("Move: left")
  } else if (key === "s") { 
    connection.write("Move: down")
  } else if (key === "d") { 
    connection.write("Move: right")
  } else if (key === "g") { 
    connection.write("Say: goat")
  } else if (key === "r") { 
    connection.write("Say: why are you running!")
  } else if (key === "l") { 
    connection.write("Say: i am the biggest!")
  } 
  
};

// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput); 
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};

module.exports = setupInput;