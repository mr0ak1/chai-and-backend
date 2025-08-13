//
import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`SERVER IS RUNNING AT :http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB CONNECTION FAILED!!!", error);
  });

// import express from "express";
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERRR", error);
//       throw error;

//       app.listen(process.env.PORT, () => {
//         `App is listening on ${process.env.PORT}`;
//       });
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// })();
