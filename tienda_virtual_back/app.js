const express = require("express");
const app = express();
const productRouter = require("./app/routes/routes");
const mongoose = require("mongoose");
// var mongoClient = require('mongodb').MongoClient;

 
//middleware
app.use(express.json());
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 



const uri_mongo = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/tienda",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);


// var url = "mongodb://localhost:27017/tienda";
// mongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });


 

app.use("/", productRouter);

module.exports = app;