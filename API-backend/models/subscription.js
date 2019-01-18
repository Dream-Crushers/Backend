const db = require('../db/config');

const subscription ={}

subscription.getBakery = (req,res,next) =>{
    db.manyOrNone('SELECT * FROM subscription where bakery_id=$1 ;',[req.user.id])
    .then((data) => {
        res.locals.subscriptions = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

subscription.getThisBakery = (req,res,next) =>{
    db.manyOrNone('SELECT * FROM subscription where id=$1 ;',[req.body.id])
    .then((data) => {
        res.locals.subscriptions = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

subscription.createQ = (req,res,next) =>{
    db.one('INSERT INTO subscription (name,price,bakery_id) VALUES ($1,$2,$3) RETURNING *;', ["Quarterly (Semester)",0,req.user.id])
    .then((data) =>{
        res.locals.subscription = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

subscription.createY = (req,res,next) =>{
    db.one('INSERT INTO subscription (name,price,bakery_id) VALUES ($1,$2,$3) RETURNING *;', ["Yearly",0,req.user.id])
    .then((data) =>{
        res.locals.subscription = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

subscription.UpdateQ = (req,res,next) =>{
    db.one('UPDATE subscription SET name=$1 , price=$2 WHERE bakery_id=$3 RETURNING *;', [req.body.subscriptionQ,req.body.priceQ,req.user.id])
    .then((data) =>{
        res.locals.subscription = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

subscription.UpdateY = (req,res,next) =>{
    db.one('UPDATE subscription SET name=$1 , price=$2 WHERE  id=$3 AND bakery_id=$4 RETURNING *;', [req.body.subscriptionY,req.body.priceY,req.body.id,req.user.id])
    .then((data) =>{
        res.locals.subscription = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

module.exports=subscription;