create DATABASE productos;
create TABLE producto(
	`id` int not null AUTO_INCREMENT,
	`nombre` varchar(100) not null,
    `existencias` int not null DEFAULT 0,
	primary key (`id`)
);