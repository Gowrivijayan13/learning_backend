import express from "express";

const app = express();
const PORT = 9999;

app.get("/", (req, res) => {
    res.json({ msg: "hello everyone" });
});
// for creating the CRUD operations
//R=reading the emp details
app.get("/empdetails",()=>{

})
//c=creating the emp details
app.post("/empdetails",()=>{

})
//U=updating  the emp details
app.put("/empdetails/:id",()=>{

})
//D = for deleting the emp details
app.delete("/empdetails",()=>{
    
})
app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});