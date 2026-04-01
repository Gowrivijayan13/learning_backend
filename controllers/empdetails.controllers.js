import Empdetails from "../models/empdetails.model.js";
export const empdetailread = async (req, res) => {
  try {
    const reademp = await Empdetails.find();
    res.json(reademp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  //   res.send("reading the employee users");
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
export const empidchecking = async (req, res) => {
  try {
    const checked = await Empdetails.findById(req.params.id);
    if (checked == null) {
      return res.status(404).json({ message: "cannot find the employee" });
    } else {
      res.json(checked);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const empdetailupdate = async (req, res) => {
  try {
    const empupdate = await Empdetails.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        name: req.body.name,
        email: req.body.email,
      },
      {
        new : true 
      },
     
    );
     res.status(200).json(empupdate);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
  //  res.end("updating the employee users");
};
export const empdetailsdelete = async (req, res) => {
  try {
     const empdelete = await Empdetails.deleteOne(
      {
        _id: req.params.id,
      }
  
  
);
res.status(200).json(empdelete);

} catch (error) {
    return res.status(400).json({ message: error.message });
  }
  // res.send("deleting  the employee users");
};
