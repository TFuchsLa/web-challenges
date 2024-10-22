import { server } from "./server.js";

const port = 8000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// - Open the `./index.js` file and import the server from the `./server.js` file.
// - Call the `listen(8000)` method on the server to start listening on port 8000.

// ✨ Your server now reacts differently depending on the requested url! Let's check that it works:
