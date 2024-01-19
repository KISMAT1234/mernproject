import mongoose from "mongoose";
import slugify from "slugify";

const newsSchema = new mongoose.Schema({
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
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
    image:{
        type: String,
    },
    description:{
        type: String,
    },
    meta_title:{
        type: String,
    },
    meta_description:{
        type: String,
    },
       
   

},{
    versionKey: false,
});

newsSchema.pre("save", async function(next){
    if(this.isModified("title")){
        this.slug = slugify(this.title, {lower: true});
    }
    next();
    
});

export default mongoose.model("News", newsSchema);
