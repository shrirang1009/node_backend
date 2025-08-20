import mongoose,{Schema} from "mongoose";
import bcrypt  from "bcrypt" 
import jwt from "jsonwebtoken"
 const UserSchema=new Schema({
    username:
    {
      type:String,
     reuired:true,
     uniqu:true,
     lowercase:true,
     trim:true,
     index:true
    },
    email:
    {
      type:String,
      required:true,
      unique:true,
      lowercase:true,
      trim:true
    },
    fullName:
    {
      typr:String,
      required:true,
      trim:true,
      index:true
    },
    avatar:
    {
      type:String, //cloudanaryurl
      required:true
    },
    coverImage:
    {
      type:String, //cloudanaryurl
    }, 
    watchHidtory:[
      {
         type:Schema.Types.ObjectId,
         ref:"Video"
      }
    ],
    password:
    {
      typr:String,
      required:[true,"Password is required"]
    },
    refereshToken:
    {
      type:String
    }
    
 },{timestamps:true}
) 


UserSchema.pre("save",async function (next)
{    // we need to give u rounds =10 or number
    if(!this.isModified("password")) return next();
    this.password=bcrypt.hash(this.password,10)
     next()
    // if password field is passes/bheji  then only change it
})

userSchema.methods.isPasswordCorrect= async function(password)
{
   return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken= function(){
 jwt.sign(
   {
      _id:this._id,
      email:this.email,
      username:this.username,
      fullName:this.fullName
   },
   process.env.ACCESS_TOKEN_SECRET,
   {
      expiresIn:process.env.ACCESS_TOKEN_EXPIRY
   }
 )
}
userSchema.methods.generateRefreshToken= function(){
    jwt.sign(
   {
      _id:this._id,
      
   },
   process.env.REFRESH_TOKEN_SECRET,
   {
      expiresIn:process.env.REFRESH_TOKEN_EXPIRY
   }
 )

}

export const User=mongoose.model("User",UserSchema)   