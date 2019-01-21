const db = require('../db/config');


const schools = {}


schools.create = (req,res,next) =>{
    console.log('yey')
    db.one('INSERT INTO schools (email,title, address, building_number, city, phone, no_of_students, subscribe_time, total, bakery_id) VALUES ($1,$2,$3, $4, $5,$6,$7,$8,$9,$10) RETURNING *;', [req.body.email,req.body.title, req.body.address, req.body.building_number, req.body.city, req.body.phone,req.body.NoOfStudents,req.body.subscribe_time,req.body.total,req.body.bakery_id ])
    .then((data) =>{
        res.locals.school = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

schools.get = (req,res,next) =>{
    db.manyOrNone('SELECT * FROM schools;')
    .then((data) =>{
        res.locals.schools = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}



// schools.getSubscribed = (req,res,next) =>{
//     db.manyOrNone('SELECT * FROM school WHERE bakery_id=$1;', [req.user.id])
//     .then((data) =>{
//         res.locals.schools = data;
//         next();
//     })
//     .catch((error) => {
//         console.log(error);
//         next();
//     })
// }





module.exports=schools;