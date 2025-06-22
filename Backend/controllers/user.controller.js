import User from"../models/user.model.js";
import { z } from "zod";

const queryschema=z.object({
    email:z.string().email({
       message: "Invalid email address"
    }),
});
export const searchcheater = async (req,res)=>
{
    try{
       // console.log("Incoming query:", req.query);
        const validateresult=queryschema.safeParse(req.query);
        if(!validateresult.success)
        {
            //console.log("Validation error:", validateresult.error);
            return res.status(400)
            .json({error:validateresult.error.issues[0].message});
        }
    
    const { email }=validateresult.data;
    const founduser=await User.findOne({
        email:email.toLowerCase()}).select("-password");
        if(!founduser)
        {
            return res.status(404).json({message:"Hurry! your partner is not found as cheater"});
        }
        res.status(200).json(founduser);
    }
    catch(error)
    {
        console.error("searchuser error:",error);
        res.status(500).json({error:"unexpected error"});

    }
    

};


