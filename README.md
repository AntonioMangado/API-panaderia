# API-panaderia
Technical test - API for a bakery. Documentation is also generated with swagger once the project is started.

## Open endpoints
- Login: `POST /users/login`
- Create user: `POST /users`
- Documentation: `GET /api-docs`

## Closed endpoints
Closed endpoints require a valid token to be included in the header of the request. A token can be acquired from the Login endpoint above.

- Get all products: `GET /products`
- Get product by ID: `GEt /products/:id`
- Create product: `POST /products`
- Edit product by ID: `PUT /products/:id`
- Delete product by ID: `DELETE /products/:id`
