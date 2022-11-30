const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Database15",{})
.then(()=>{
    console.log("Sucessfully connected with Database !")
})
.catch(e=>{
    console.log("error")
})
const schema = mongoose.Schema;

const userSchema = new schema({
    id:{type:Number , unique:true},
    title:{type:String},
    is_completed:{type:Boolean}
})
const TaskDetails= mongoose.model("collection15" ,userSchema)
module.exports=TaskDetails;