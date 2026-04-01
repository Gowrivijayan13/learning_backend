import { model, Schema } from "mongoose";


const empdeatilsschema =new Schema ({
    //   name :String,
    //   empid:String,
    //   email : String,
    //   joining_date :Date,
    //   department : String,
    //   role : String
    //if i have give the empty vlue it want to show there is the failed
      name :{
        type :String,
        required :true,
        
      },
      empid: {
  type: String,
  required: [true, "Employee ID is required"],
  unique: true,

},
      email : String,
      joining_date :Date,
      department : String,
      role : String
})
const empdetailsmodel =model("Empdetails",empdeatilsschema);
// or mongooese.model("Empdetails",empdeatilsschema)
export default empdetailsmodel;