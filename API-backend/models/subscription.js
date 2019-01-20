// const db = require('../db/config');

// const subscription ={}

// subscription.getBakery = (req,res,next) =>{
//     db.manyOrNone('SELECT * FROM subscription where bakery_id=$1 ;',[req.user.id])
//     .then((data) => {
//         res.locals.subscriptions = data;
//         next();
//     })
//     .catch((error) => {
//         console.log(error);
//         next();
//     })
// }

// subscription.getThisBakery = (req,res,next) =>{
//     db.manyOrNone('SELECT * FROM subscription where id=$1 ;',[req.body.id])
//     .then((data) => {
//         res.locals.subscriptions = data;
//         next();
//     })
//     .catch((error) => {
//         console.log(error);
//         next();
//     })
// }

// subscription.createQ = (req,res,next) =>{
//     db.one('INSERT INTO subscription (name,details, price,bakery_id) VALUES ($1,$2,$3,$4) RETURNING *;', ["Quarterly (Semester)",'Meals 5 days a week for full semester ',0,req.user.id])
//     .then((data) =>{
//         res.locals.subscription = data;
//         next();
//     })
//     .catch((error) => {
//         console.log(error);
//         next();
//     })
// }

// subscription.createY = (req,res,next) =>{
//     db.one('INSERT INTO subscription (name,details,price,bakery_id) VALUES ($1,$2,$3) RETURNING *;', ["Yearly","Meals 5 days a week for full semester ",0,req.user.id])
//     .then((data) =>{
//         res.locals.subscription = data;
//         next();
//     })
//     .catch((error) => {
//         console.log(error);
//         next();
//     })
// }

// subscription.UpdateQ = (req,res,next) =>{
//     db.one('UPDATE subscription SET name=$1 , price=$2 WHERE bakery_id=$3 RETURNING *;', [req.body.subscriptionQ,req.body.priceQ,req.user.id])
//     .then((data) =>{
//         res.locals.subscription = data;
//         next();
//     })
//     .catch((error) => {
//         console.log(error);
//         next();
//     })
// }

// subscription.UpdateY = (req,res,next) =>{
//     db.manyOrNone('UPDATE subscription SET name=$1 , price=$2 WHERE bakery_id=$3 RETURNING *;', [req.body.subscriptionY,req.body.priceY,req.user.id])
//     .then((data) =>{
//         res.locals.subscription = data;
//         next();
//     })
//     .catch((error) => {
//         console.log(error);
//         next();
//     })
// }

// module.exports=subscription;


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
    db.manyOrNone('SELECT * FROM subscription where bakery_id=$1 ;',[req.params.id])
    .then((data) => {
        res.locals.subscriptions = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

subscription.create = (req,res,next) =>{
    console.log('@@')
    db.one('INSERT INTO subscription (threeM_details, sixM_details, threeM_price , sixM_price ,bakery_id) VALUES ($1,$2,$3,$4,$5) RETURNING *;', ['Full semester ',' 2 Semesters( 1 Year)',0,0,req.user.id])
    .then((data) =>{
        console.log('data',data)
        res.locals.subscription = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

// subscription.createY = (req,res,next) =>{
//     db.one('INSERT INTO subscription (name,details,price,bakery_id) VALUES ($1,$2,$3) RETURNING *;', ["Yearly","Meals 5 days a week for 2 semesters( 1 Year) ",0,req.user.id])
//     .then((data) =>{
//         res.locals.subscription = data;
//         next();
//     })
//     .catch((error) => {
//         console.log(error);
//         next();
//     })
// }

subscription.Update = (req,res,next) =>{
    console.log("req.body\n\n\n\n" , req.body); 
    db.one('UPDATE subscription SET threeM_details=$1, sixM_details=$2, threeM_price=$3 , sixM_price=$4 WHERE bakery_id=$5 RETURNING *;', [req.body.threem_details, req.body.sixm_details, req.body.threem_price, req.body.sixm_price,req.user.id])
    .then((data) =>{

        console.log("data\n\n\n\n" ,data); 
        res.locals.subscription = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

// subscription.UpdateY = (req,res,next) =>{
//     db.one('UPDATE subscription SET name=$1 , price=$2 WHERE  id=$3 AND bakery_id=$4 RETURNING *;', [req.body.subscriptionY,req.body.priceY,req.body.id,req.user.id])
//     .then((data) =>{
//         res.locals.subscription = data;
//         next();
//     })
//     .catch((error) => {
//         console.log(error);
//         next();
//     })
// }

module.exports=subscription;