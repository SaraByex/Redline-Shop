Redline Shop
React based e commerce web application.

Overview
Redline Shop is a single page application built with React and React Router.
It provides product browsing, shopping cart functionality, user authentication, and an admin protected product upload area.

Core Features
Home landing page.
Product catalogue and shop view.
Shopping cart with item management.
User registration and login.
Admin only route for adding products.
Persistent navigation bar and footer across pages.
Client side routing with protected routes.

Routing Structure
/
Home page.

/products
Product catalogue listing.

/shop
Shop view for browsing products.

/cart
Shopping cart page.

/login
User login.

/register
User registration.

/admin/add-product
Admin only page for adding products.
Access restricted by authenticated admin email.

Admin Protection Logic
Admin access is controlled through a custom AdminRoute component.
Only a user authenticated with the email sarabukulu@gmail.com
 can access admin routes.
Unauthorized users are redirected to the login page.

Tech Stack
React.
React Router DOM.
Context API for authentication state.
Firebase Authentication and Database assumed for backend services.

Project Structure
components
Reusable UI components and pages.

context
Authentication context provider.

App.jsx
Main routing and layout configuration.

Installation
Clone the repository.
Install dependencies using npm install.
Start the development server using npm start.

Notes
This project focuses on frontend routing, access control, and component structure.
Backend logic such as payments, inventory validation, and security rules should be enforced server side.
