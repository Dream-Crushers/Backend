const db = require('../db/config');

const products ={}

products.getAll = (req,res,next) =>{
    db.manyOrNone('SELECT * FROM meals;')
    .then((data) => {
        res.locals.products = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

products.create = (req,res,next) =>{
    db.one('INSERT INTO meals (name,img,calories,fat,protein,carb,sodium,cholesterol,vitamin_a,vitamin_c,calcium,iron,bakery_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *;', 
    [req.body.name,req.body.img,req.body.calories,req.body.fat,req.body.protein,req.body.carb,req.body.sodium,req.body.cholesterol,req.body.vitamin_a,req.body.vitamin_c,req.body.calcium,req.body.iron,req.user.id])
    .then((data) =>{
        res.locals.product = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

products.getUserProduct = (req,res,next) => { 
    console.log("\n\n\n getUserProduct")
    db.manyOrNone('SELECT * FROM meals where bakery_id= $1', [req.user.id])
    .then((data) =>{
        console.log(data)
        res.locals.product = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

products.getBakerProduct = (req,res,next) => { 
console.log(req.params.id);
    console.log("\n\n\n\n\n\n getUserProduct")
    db.manyOrNone('SELECT * FROM meals where bakery_id= $1;', [req.params.id])
    .then((data) =>{
        res.locals.products = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}


products.delete = (req,res,next)=>{
    db.none('DELETE FROM meals WHERE id=$1;', [req.params.id])
    .then((data)=>{
        next();
    })
    .catch((error) =>{
        console.log(error);
        next();
    })
}

module.exports=products;