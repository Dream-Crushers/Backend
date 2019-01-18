const db = require('../db/config');
var bcrypt = require("bcrypt");
const bakeries ={}

bakeries.getAll = (req,res,next) =>{
    db.manyOrNone('SELECT * FROM bakery;')
    .then((data) => {
        res.locals.bakery = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

bakeries.getInfo = (req,res,next) =>{
    console.log(req.user.id)
    db.one('SELECT * FROM bakery where id =$1;', [req.user.id])
    .then((data) => {
        res.locals.bakery = data;
        next();
    })
    .catch((error) => {
        console.log(error);
        next();
    })
}

bakeries.create = (req,res,next) =>{
const salt = bcrypt.genSaltSync(10);
  db.one("INSERT INTO bakery (email,password,title,address,building_number,img,city,phone) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *;",
    [
      req.body.email,
      bcrypt.hashSync(req.body.password, salt),
      req.body.title,
      req.body.address,
      req.body.building_number,
      req.body.img,
      req.body.city,
      req.body.phone

    ]
  )
    .then(function(result) {
    console.log("\n\n\n\n usercreate" , result )
      req.user = result;
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
}

bakeries.login = (req, res, next) => {
  db.one("SELECT * FROM bakery WHERE email = $1;", [req.body.email])
    .then(function(result) {
      if (bcrypt.compareSync(req.body.password, result.password)) {
        req.user = result;
      }
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
};

bakeries.findEmail = (req, res, next) => {
  db.oneOrNone("SELECT * FROM bakery WHERE email=$1;", [req.body.email])
    .then(function(result) {
      res.user = result;
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
};

module.exports=bakeries;