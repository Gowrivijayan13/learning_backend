import Empdetails from "../models/empdetails.model.js";
export const empdetailread = (req, res) => {
  res.send("reading the employee users");
};
export const empdetailscreate = async (req, res) => {
  //name,empid,email,jioning date,department,role
  console.log(req.body);
  //validat eyour data
  const a = new Empdetails({
    name: req.body.name,
    empid: req.body.empid,
    email: req.body.email,
    joining_date: req.body.jioning_date,
    department: req.body.department,
    role: req.body.role,
  });

  try {
    const bsave = await a.save();
    return res.status(201).json(bsave);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
  // return res.json(req.body);
};

export const empdetailupdate = (req, res) => {
  res.send("updating the employee users");
};
export const empdetailsdelete = (req, res) => {
  res.send("deleting  the employee users");
};
