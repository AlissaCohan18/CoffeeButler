# To Do:
* routes/handlebars: show order on page (wrote some initial code in both home-routes and dashboard.handlebars; will need to be vetted once orders are created)



# Completed:
* Backend: Create new user login (password hashing)
* Backend: Login (e-mail and password verification)
* Add session/cookies for personalized user experience
* Frontend: Login/Create Login Page
* javaScript: login, logout, sign up
* incorporate handlebars
* deploy on heroku
* update order-routes.js: remove all fields but drink and nickname for all orders (we're not doing add-ons any more); for order.create an id will be created automatically so that can be removed from that line of code as well. May need to standardize Order vs order (for example it's Order.init in model, it's order.create ref anywhere to match updated model), test order routes in insomneia. they didn't work when i went to check them and play with javascript/handlebars
* frontend: dashboard/order page
* create table relationships in models/index.js

# Sprinkles:
- queue or dashboard with all current/new orders (get all orders)
- delete and/or update orders
- reorder button
- "order ready" set on a time interval to clear dashboard