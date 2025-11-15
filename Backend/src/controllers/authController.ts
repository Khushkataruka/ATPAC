import {Request,Response} from "express";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import Student from '../models/studentModel'
import dotenv from 'dotenv'
dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET || "ATPAC"

export const register = async(req:Request,res:Response)=>{
    try{
        const {name,rollNo, email, branch, batch, password} = req.body;

        const existing = await Student.findOne({email});
        if(existing){
            res.status(201).json({message: "User already exists"})
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const student = new Student({
            name,
            rollNo,
            email,
            branch,
            batch,
            password: hashedPassword,

    })
    await student.save();
    res.status(201).json({message: "User Created Successfully"})
    }catch(err){
        res.status(500).json({message: "Login Server Error",err})
    }
}
export const login = async(req: Request, res: Response)=>{
    try{
        const {email, password}=req.body;
        const student = await Student.findOne({email})
        if(!student){
           return res.status(500).json({message: "User not found"})
        }
        const isMatch= await bcrypt.compare(password, student.password);
        const token = jwt.sign({id: student._id},JWT_SECRET,{expiresIn : '7d'})

        res.status(201).json({token,student})
    }catch(err){
       return res.status(500).json({message: "Server Error"})
    }
}
export const profile = async(req: Request, res:Response)=>{
    try{
        const studentId = (req as any).user._id;
        const student = await Student.findById({studentId}).select("-password");
        if(!student) return res.status(404).json({message: "User Not found"});

        res.json(student);
    }catch (error) {
        return res.status(500).json({ message: "Server error", error });
}
}
export const getStudentById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const student = await Student.findById(id);
  
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
  
      res.status(200).json(student);
    } catch (error) {
      return res.status(500).json({ message: "Server Error", error });
    }
  };
  export const forgotPassword = async (req: Request, res:Response)=>{
    try{
        const {email} = req.body
        const user = await Student.findOne({email});

        if(!user){
           return res.status(404).json({message:"User Not Found"});
        }
        
        const token = jwt.sign({id: (user as any)._id},process.env.JWT_SECRET!,{
            expiresIn: "15m"
        })

        user.resetPasswordToken = token;
        user.resetPasswordExpire = Date.now()+15*60*1000;
        await user.save();

        const ResetUrl = `http://localhost:3000/reset-password/${token}`;

        return res.status(200).json({message:"Password reset link has been generated",
            ResetUrl
        })
    }catch(err){
        return res.status(404).json({message:"Page Not Found"})
    }
  };
  export const resetPassword = async(req:Request,res:Response)=>{
    try{
        const {token}= req.params
        const {newPassword} = req.body;
         if(!token){
            return res.status(404).json({message:"User Not Found"});
         }
        let decoded : any;
        try{
           decoded = jwt.verify(token,process.env.JWT_SECRET!);
        }catch(err){
            return res.status(404).json({message:"internal server error"})
        }
        const user = await Student.findOne({
            _id: decoded.id,
            resetPasswordToken: token,
            resetPasswordExpire: { $gt: Date.now() },
          });

          if (!user) {
            return res.status(400).json({ message: "Invalid or expired token" });
          }
      
          const hashed = await bcrypt.hash(newPassword, 10);
          user.password = hashed;
      
          user.resetPasswordToken = undefined;
          user.resetPasswordExpire = undefined;
      
          await user.save();
      
          return res
            .status(200)
            .json({ message: "Password has been reset successfully" });
    }catch(err){
        return res.status(404).json({message:"server Error", err})
    }
 };
 export const verifyEmail = async(res:Response, req: Request)=>{
    try{
        const { token } = req.body;

    if (!token) return res.status(400).json({ message: "Token required" });

    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };

    const user = await Student.findOne({
      _id: decoded.id,
      emailVerificationToken: token,
    });

    if (!user) return res.status(400).json({ message: "Invalid or expired token" });

    user.isVerified = true;
    user.emailVerificationToken = undefined;
    await user.save();

    return res.json({ message: "Email verified successfully" });
    }catch(err){
        return res.status(500).json({message:"Internal Server Error in sending mail"})
    }
 };
 
