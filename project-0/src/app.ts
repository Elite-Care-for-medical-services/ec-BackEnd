import express from "express";

import mockRoutes from "./routes/mock.routes";

const app = express();

// Middleware to parse JSON request bodies
// This is essential for Express to understand JSON data sent from the front-end
app.use(express.json());

// Basic health check endpoint
app.get("/", (req, res) => {
  res.status(200).send("Elite Care Project0 API is running!");
});

// --- Mount our API routes ---

// Mount mock routes under the '/api/mock' base path
// This means all routes defined in mock.routes.ts (e.g., '/mockData')
// will be accessible at '/api/mock/mockData'
app.use("/api/mock", mockRoutes);

// Error handling middleware
// This middleware catches any errors that occur during request processing.
// Express recognizes a middleware with four arguments (err, req, res, next)
// as an error-handling middleware.

app.use((err: any, req: express.Request, res: express.Response) => {
  // Log the error stack to the console for debugging purposes.
  console.error(err.stack);

  // Send a 500 Internal Server Error response to the client.
  // This indicates that something unexpected went wrong on the server.
  res.status(500).send("Something went wrong!");
});

export default app;
