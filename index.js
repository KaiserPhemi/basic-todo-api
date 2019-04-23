// express app
import app from "./src/app";
import mongoose from "mongoose";

// declare port
const port = process.env.PORT || 5555;
app.set("port", port);

// connect to database
if (process.env.NODE_ENV !== "test") {
  mongoose.connect("mongodb://localhost/todoProd", { useNewUrlParser: true });
} else {
  mongoose.connect("mongodb://localhost/todoTest", { useNewUrlParser: true });
}

// start server
if (!module.parent) {
  app.listen(port, err => {
    if (err) {
      throw err;
    }
    // eslint-disable-next-line no-console
    console.log(`Server started. Listening on port ${port}...`);
  });
}
