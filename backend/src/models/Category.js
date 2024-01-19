import mongoose from "mongoose";
import slugify from "slugify";

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        rrequied: true,
        min: 2,
        max: 255,
    },
    slug:{
        type: String,
        required: true,
        unique: true,
    },
    
   

},{
    versionKey: false,
});

categorySchema.pre("save", async function(next){
    if(this.isModified("title")){
        this.slug = slugify(this.title, {lower: true});
    }
    next();
    
});

export default mongoose.model("Category", categorySchema);
