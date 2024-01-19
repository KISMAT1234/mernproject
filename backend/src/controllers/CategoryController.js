import Category from "../models/Category.js";

class CategoryController{

    async index(req, res){
        try{
            const categories = await Category.find({});
            res.status(200).send(categories);
        }catch(error){
            res.status(500).send({message: "Could not fetch categories"});
        }
    }

    async show(req, res){
        try{
            const category = await Category.findOne({_id: req.params.id});
            res.status(200).send(category);
        }catch(error){
            res.status(500).send({message: "Could not fetch category"});
        }
    }

    async store(req, res){
        try{
            const category = new Category(req.body);
            await category.save();
            res.status(201).send({success: true, message: "Category created"});
        }catch(error){
            res.status(500).send({message: "Could not create category"});
        }
    }

    async update(req, res){
        try{
            const category = await Category.findOneAndUpdate(
                {_id: req.params.id},
                req.body,
                {new: true}
            );
            res.status(200).send({success: true, message: "Category updated"});
        }catch(error){
            res.status(500).send({success:true,message: "Could not update category"});
        }

    }

    async destroy(req, res){
        try{
            await Category.findOneAndDelete({_id: req.params.id});
            res.status(200).send({success:true,message: "Category deleted"});
        }catch(error){
            res.status(500).send({message: "Could not delete category"});
        }
    }

}

export default  CategoryController;