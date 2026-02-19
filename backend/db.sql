CREATE TABLE destinations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  location VARCHAR(100),
  price INT,
  image TEXT
);

INSERT INTO destinations(name, location, price, image)
VALUES
('Beach Paradise','Goa',5000,'https://source.unsplash.com/400x300/?beach'),
('Mountain Escape','Manali',7000,'https://source.unsplash.com/400x300/?mountain'),
('City Lights','Dubai',25000,'https://source.unsplash.com/400x300/?dubai');

