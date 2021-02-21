CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path VARCHAR(1000) NOT NULL, 
	description VARCHAR(1000),
  	likes INTEGER	
);


SELECT * FROM gallery;




INSERT INTO gallery (path, description, likes)
VALUES
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0);