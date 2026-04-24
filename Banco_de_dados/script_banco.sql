create database UFC_FIGHTING;

use UFC_FIGHTING;

create table usuario(
id_usuario int primary key auto_increment,
nome varchar(100),
email varchar(100),
senha varchar(100)
);

create table comparacoes(
id_comparacoes int primary key auto_increment,
fk_usuario int,
id_lutador1 int,
id_lutador2 int,
data datetime default current_timestamp,
foreign key(fk_usuario) references usuario(id_usuario)
);

create table escolhas(
id_escolha int primary key auto_increment,
fk_usuario int,
id_lutador int,
data datetime default current_timestamp,
foreign key(fk_usuario) references usuario(id_usuario)
);