CREATE TABLE panaderia_api.products (
	id INT auto_increment NOT NULL,
	title varchar(100) NOT NULL,
	description varchar(100) NOT NULL,
	stock BOOL NOT NULL,
	date_created DATE NOT NULL,
	CONSTRAINT products_pk PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;
