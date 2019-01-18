const db = require('../db/config');


const schools = {}


schools.create = (req,res,next) =>{
    db.one('INSERT INTO schools (email,title, address, building_number, city, phone,bakery_id) VALUES ($1,$2,$3, $4, $5,$6,$7) RETURNING *;', [req.body.email,req.body.title, req.body.address, req.body.building_number, req.body.city, req.body.phone,req.body.bakery_id ])
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