const db = require('../db/config');


const schools = {}


schools.create = (req,res,next) =>{
    db.one('INSERT INTO schools (title, address, building_number, city, phone) VALUES ($1,$2,$3, $4, $5) RETURNING *;', [req.body.title, req.body.address, req.body.building_number, req.body.city, req.body.phone, ])
    .then((data) =>{
        res.locals.school = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}



module.exports=schools;