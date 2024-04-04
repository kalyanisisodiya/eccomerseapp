import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
      },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    address:{
        type: {},
        require: true,
    },
    wishlist: [{ type: mongoose.Schema.Types.ObjectId,ref: "Address" }],
    refreshToken:{
        type: String,
    },
    answer:{
        type:String,
        required:true,
    },
    role:{
        type: Number,
        default: 0
    }

},{timestamps: true}
);

export default mongoose.model("users", userSchema);