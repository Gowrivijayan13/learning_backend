import express from "express"
import { empdetailread, empdetailscreate, empdetailsdelete, empdetailupdate } from "../controllers/empdetails.controllers.js";
const router=express.Router();
// for creating the CRUD operations
//R=reading the emp details
router.get("/",empdetailread)
//c=creating the emp details
router.post("/",empdetailscreate)
//U=updating  the emp details
router.put("/:id",empdetailupdate)
//D = for deleting the emp details
router.delete("/",empdetailsdelete)
export default router;