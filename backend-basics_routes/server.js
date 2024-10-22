import { createServer } from "node:http";

export const server = createServer((req, res) => {
  if (req.url === "/api/fish/1") {
    res.statusCode = 200;
    res.end("Shrimp");
  } else if (req.url === "/api/fish/2") {
    res.statusCode = 200;
    res.end("Anemonefish");
  } else {
    res.statusCode = 404;
    res.end("Not Found!");
  }
});

// ## Task

// Build a server that sends a different response depending on the url route:

// - if the requested url is `/api/fish/1`, the response should be `"Shrimp"` and the status code should be `200`;
// - if the requested url is `/api/fish/2`, the response should be `"Anemonefish"` and the status code should be `200`;
// - for all other urls, the response should be `"Not found"` and the status code should be `404`.

// Use the following hints as guideline:

// - Switch to the `./server.js`; use the `createServer` method provided by the `node:http` module to create a server.
// - Inside of the function body of `createServer`, you can access the requested url with the help of the `request` object; it provides a `url` key which holds the url value.
//   - Check the value of this `url` key to equal `/api/fish/1` or `/api/fish/2` and pass the respective value to `response.end()` as argument. Make sure to also set the correct status code using `response.statusCode =`.
// - Export the server as a named export from the `./server.js` file.
