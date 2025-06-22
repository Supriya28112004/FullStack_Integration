import mongoose from "mongoose";
const userschema=new mongoose.Schema({
firstname:{
    type:String,
    required: true
},
lastname:{
    type:String,
    required:true
},
email:
{
    type:String,
    required:true,
    unique:true
},
age:
{
    type:Number,
    required:true

},
city:
{
    type:String,
    required:true
},
picture:
{
    type:String,
    required:true
}
});


const User=mongoose.model('User',userschema);
export default User;
