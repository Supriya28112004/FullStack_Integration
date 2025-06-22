import mongoose from "mongoose";
import axios from "axios";
import User from "./models/user.model.js";
import dotenv from "dotenv";
dotenv.config();
const seedingdatabase=async()=>{
try{
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Successfully connected");
    const count=await User.countDocuments();
    if(count>0)
    {
        console.log("Database already connected");
        const sampleUser = await User.findOne();
        console.log(" Sample user from DB:", sampleUser.email);
        await mongoose.disconnect();
        console.log(" MongoDB connection closed");
        return;
    }
    const response = await axios.get('https://randomuser.me/api/?results=50&nat=us');
    const userseeding=response.data.results.map((cheater)=>(
    {
        firstname:cheater.name.first,
        lastname: cheater.name.last,
        email:  cheater.email,
        age:cheater.dob.age,
        city:cheater.location.city,
        picture:cheater.picture.large,


    }
    ));
   // console.log("Sample user email:", userseeding[0].email);

    await User.insertMany(userseeding);
    console.log("successfully inserted with 50 users");
    console.log(" Sample user inserted:", userseeding[0].email);
}
catch(error)
{
    console.log("error in seeding the database:",error.message);
}
finally{
    await mongoose.disconnect();
    console.log("MongoDB connection closed");
}
};
seedingdatabase();

