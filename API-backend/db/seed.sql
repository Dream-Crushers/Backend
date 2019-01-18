DROP DATABASE IF EXISTS school_db;
CREATE DATABASE school_db;
\c school_db


-- CREATE TABLE users(
--   id serial primary key,
--   name varchar NOT NULL,
--   email varchar UNIQUE NOT NULL,
--   password_digest varchar NOT NULL,
--   is_admin boolean DEFAULT 'f'
-- );

CREATE TABLE bakery (
   id serial primary key,
   password varchar not null,
   title varchar, 
   address varchar,
   building_number varchar,
   city varchar,
   email varchar UNIQUE ,
   phone varchar,
   img varchar
);

CREATE TABLE schools (
   id serial primary key,
   title varchar, 
   address varchar,
   building_number varchar,
   city varchar,
   phone varchar,
   email varchar
);



CREATE TABLE subscription (
   id serial primary key,
   name varchar ,
   price int,
   bakery_id int,
   foreign key (bakery_id) references bakery
);


CREATE TABLE meals (
   id serial primary key,
   name varchar, 
   img varchar,
   calories int,
    fat varchar,
    protein varchar,
    carb varchar,
    sodium varchar,
    cholesterol varchar,
    vitamin_a varchar,
    vitamin_c varchar,
    calcium varchar,
    iron varchar,
   bakery_id int,
   foreign key (bakery_id) references bakery
);


CREATE TABLE ingredients (
   id serial primary key,
   name varchar, 
   calories int
);

CREATE TABLE meals_ingredients (
  meal_id int,
  ingredient_id int,
  foreign key (meal_id) references meals,
  foreign key (ingredient_id) references ingredients

);

CREATE TABLE workout (
  id serial primary key,
  name varchar, 
  description varchar,
  calories_burned int,
  minutes int
);


INSERT INTO bakery (password,title,address,img) VALUES ('1234','Flowers Bakery', 'Riyadh', 'https://cdn.vox-cdn.com/thumbor/dwvodCiM7CaMhqq6E1JLO6qJrKk=/0x0:1024x683/1200x800/filters:focal(431x261:593x423)/cdn.vox-cdn.com/uploads/chorus_image/image/55810987/eatersea1016_standard_bakery_official.0.0.jpg://');
INSERT INTO bakery (password,title,address,img) VALUES ('4456','Good Bakery', 'Riyadh', 'https://cdn.vox-cdn.com/thumbor/dwvodCiM7CaMhqq6E1JLO6qJrKk=/0x0:1024x683/1200x800/filters:focal(431x261:593x423)/cdn.vox-cdn.com/uploads/chorus_image/image/55810987/eatersea1016_standard_bakery_official.0.0.jpg://');
INSERT INTO bakery (password,title,address,img) VALUES ('5543','Stop Bakery', 'Riyadh', 'https://cdn.vox-cdn.com/thumbor/dwvodCiM7CaMhqq6E1JLO6qJrKk=/0x0:1024x683/1200x800/filters:focal(431x261:593x423)/cdn.vox-cdn.com/uploads/chorus_image/image/55810987/eatersea1016_standard_bakery_official.0.0.jpg://');
INSERT INTO meals (name,img,bakery_id) VALUES ('chicken sandwich','https://www.cfacdn.com/img/order/COM/Menu_Refresh/Entree/Entree%20Desktop/_0003s_0009_Final__0026_CFA_PDP_Grilled-Deluxe-Sandwich_1085.png',1);
INSERT INTO meals (name,img,bakery_id) VALUES ('falaefl','https://www.cfacdn.com/img/order/COM/Menu_Refresh/Entree/Entree%20Desktop/_0003s_0009_Final__0026_CFA_PDP_Grilled-Deluxe-Sandwich_1085.png',1);

