import express from "express";
import {
  empdetailread,
  empdetailscreate,
  empdetailsdelete,
  empdetailupdate,
  empidchecking,
} from "../controllers/empdetails.controllers.js";
const router = express.Router();
// for creating the CRUD operations
//R=reading the emp details
router.get("/", empdetailread);
router.get("/:id", empidchecking);
//c=creating the emp details
router.post("/", empdetailscreate);
//U=updating  the emp details
router.put("/:id", empdetailupdate);
//D = for deleting the emp details
router.delete("/:id", empdetailsdelete);
export default router;
