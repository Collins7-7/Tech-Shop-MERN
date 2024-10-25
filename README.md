# Tech Shop

![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![Express](https://img.shields.io/badge/Backend-Express-blue)
![React](https://img.shields.io/badge/Frontend-React-blue)
![Node.js](https://img.shields.io/badge/Server-Node.js-green)
![Docker](https://img.shields.io/badge/Container-Docker-blue)
![License](https://img.shields.io/badge/License-MIT-blue)
![Contributions](https://img.shields.io/badge/Contributions-Welcome-brightgreen)

**Tech Shop** is a full-stack e-commerce web application designed to sell electronics, allowing users to browse, review, and purchase products with a seamless shopping experience. Built using the MERN stack, the app integrates PayPal for secure payments and supports various user functionalities including adding items to the cart, managing profiles, and leaving product reviews. 

Although Tech Shop was previously hosted on Amazon EC2, it is now accessible via [GitHub Repository](https://github.com/Collins7-7/Tech-Shop-MERN) where you can view and run the code locally.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **User Registration and Authentication**: Secure signup and login, allowing users to manage their personal profiles.
- **Product Browsing and Cart Management**: Users can view electronics, add them to a cart, and review items before purchase.
- **Payment Integration**: PayPal integration for secure, streamlined transactions.
- **Product Reviews and Ratings**: Users can rate and leave reviews on products.
- **Responsive Design**: Accessible on both desktop and mobile devices.
- **Profile Management**: Users can edit profile details.

---

## Tech Stack

- **Front-end**: React
- **Back-end**: Node.js with Express
- **Database**: MongoDB
- **Authentication**: Custom user authentication
- **Payment Processing**: PayPal
- **Containerization**: Docker

---

## Installation

### Prerequisites
- Node.js and npm
- MongoDB server or MongoDB Atlas for database
- Docker (optional, for containerized deployment)

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/Tech-Shop.git
   cd Tech-Shop
2. **Back-end Setup**

- Navigate to the backend directory.
- Configure MongoDB connection, PayPal API credentials, and other environment variables in the .env file.
- Install dependencies and start the Express server:
  ```bash
  npm install
  npm start
3. **Front-end Setup**

- Navigate to the frontend directory.
- Install dependencies and start the React development server:
  ```bash
  npm install
  npm start
  
4. **Access the Application**
Open a browser and go to http://localhost:3000.

6. **Docker Setup (Optional)**

To run the application in a container, use the following commands:
```bash
docker-compose up --build
```
**Usage**
*Sign Up and Log In*
- Users can register using an email, username, and password to access personalized features.
*Viewing and Adding Electronics to Cart*
- Browse available electronics, view details, and add items to your cart.
*Payment*
- Use PayPal integration for secure checkout and payment processing.
*Product Reviews*
- Rate and leave reviews for products, helping other users make informed decisions.
*Profile Management*
- Update profile details and manage account settings within the profile section.

**Future Enhancements**
1. Enhanced Search and Filter: Add filters for brand, price, and specifications.
2. Wishlist: Allow users to save products for later viewing.
3. Discount Codes: Add support for promotional discount codes.
   
**Contributing**
We welcome contributions!
*To get started:*
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request for review.
For major changes, please open an issue to discuss your ideas first.

*License*
This project is licensed under the MIT License - see the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.
