

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
   email varchar,
   no_of_students varchar,
  subscribe_time varchar, 
  total int,
     bakery_id int,
   foreign key (bakery_id) references bakery
);



CREATE TABLE subscription (
   id serial primary key,
   threeM_details varchar,
   sixM_details varchar, 
   threeM_price int, 
   sixM_price int,
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


-- not used
CREATE TABLE workout (
  id serial primary key,
  name varchar, 
  description varchar,
  calories_burned int,
  minutes int
);

-- just for testing


-- INSERT INTO bakery (password,title , address , building_number , city , email,phone , img ) VALUES ('1','Torta & More','Al Hussain Ibn Ali street','3317', 'Riyadh',' info@tortaandmore.com','053 211 4466', 'https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/compras/miga_1.jpg?itok=ZHg6mgWk');
-- INSERT INTO bakery (password,title , address , building_number , city , email,phone , img ) VALUES ('2','Torta & More','Al Hussain Ibn Ali street','3317', 'Riyadh',' info1@tortaandmore.com','053 211 4466', 'https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/compras/miga_1.jpg?itok=ZHg6mgWk');
-- INSERT INTO bakery (password,title , address , building_number , city , email,phone , img ) VALUES ('3','Torta & More','Al Hussain Ibn Ali street','3317', 'Riyadh',' info2@tortaandmore.com','053 211 4466', 'https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/compras/miga_1.jpg?itok=ZHg6mgWk');

-- INSERT INTO meals ( img,calories,fat, protein, carb, sodium, cholesterol, vitamin_a, vitamin_c, calcium,iron, bakery_id) VALUES ();

-- INSERT INTO subscription (threeM_details,sixM_details , threeM_price , sixM_price ,bakery_id) VALUES ('Full semester ',' 2 Semesters( 1 Year)',60,120);

-- INSERT INTO meals (name,img,bakery_id) VALUES ('chicken sandwich','https://www.cfacdn.com/img/order/COM/Menu_Refresh/Entree/Entree%20Desktop/_0003s_0009_Final__0026_CFA_PDP_Grilled-Deluxe-Sandwich_1085.png',1);
-- INSERT INTO meals (name,img,bakery_id) VALUES ('falaefl','https://www.cfacdn.com/img/order/COM/Menu_Refresh/Entree/Entree%20Desktop/_0003s_0009_Final__0026_CFA_PDP_Grilled-Deluxe-Sandwich_1085.png',1);


-- INSERT INTO subscription (threeM_details, sixM_details, threeM_price , sixM_price ,bakery_id) VALUES ('Meals 5 days a week for full semester ','Meals 5 days a week for 2 semesters( 1 Year)',0,0,1);