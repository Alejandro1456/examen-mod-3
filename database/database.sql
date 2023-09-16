create database apirest;
create table users(
    id SERIAL PRIMARY KEY, 
    ci varchar(100),
    name varchar(100),
    paterno varchar(100),
    materno varchar(100),
    email TEXT

);

insert into users(ci,name,paterno,materno,email) values 
('21343124','Juan','Perez','Siempre','juan@gmail.com'),
('21343124','Jorge','Terraza','Velasco','jorge@gmail.com');