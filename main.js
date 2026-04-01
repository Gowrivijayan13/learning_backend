import express from "express";
import empdetails from "./routes/empdetails.route.js";
import connectionmongodb from "./lib/db.js";

const app = express();
const PORT = 9999;
connectionmongodb();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.get("/", (req, res) => {
  res.json({ msg: "hello everyone..." });
});
// /empdeatils/empdetails
app.use("/empdetails", empdetails);

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
