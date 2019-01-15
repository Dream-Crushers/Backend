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
    db.one('INSERT INTO meals (name,img,calories) VALUES ($1,$2,$3) RETURNING *;', [req.body.name,req.body.img,req.body.calories])
    .then((data) =>{
        res.locals.product = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

// products.update = (req,res,next) =>{
//     db.one('UPDATE colors SET name=$1 ,rgb_value=$2 ,hex_value=$3 WHERE id=$4 RETURNING *;',[req.body.name,req.body.rgb_value,req.body.hex_value, req.params.id] )
//     .then((data)=>{
//         res.locals.color=data;
//         next();
//     })
//     .catch((error)=>{
//         console.log(error);
//         next();
//     })
// }

products.delete = (req,res,next)=>{
    db.none('DELETE FROM meals WHERE id=$1;', [ req.params.id])
    .then((data)=>{
        next();
    })
    .catch((error) =>{
        console.log(error);
        next();
    })
}

module.exports=products;