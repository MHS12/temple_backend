const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const port = 3000;
const imageRouter = require("./routes/imageRouter");

const connectDB = require("./config/DBconfig");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
connectDB();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// swagger setup can be added here in the future
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My Node API",
      version: "1.0.0",
      description: "API documentation using Swagger in Node.js",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to API docs
};

const swaggerSpec = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/about", (req, res) => {
  res.send("About Us");
});
app.use("/", imageRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
