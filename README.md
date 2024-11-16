Personal Library Management System - Backend Documentation
Overview
This backend application serves as the core of a personal library management system. It is designed to manage books with functionalities for adding, updating, retrieving, and deleting book records. The backend is built using Python, Node.js, and MongoDB, with features such as error handling and database operations for seamless integration.

Features
Add Books: Allows the addition of new book records with details such as title, author, genre, publication date, and ISBN. The system checks for duplicate ISBNs and ensures each book is unique.
Retrieve Books: Fetches all available book records from the database, displaying essential information like title, author, and status.
Update Books: Updates existing book records using a unique identifier, allowing changes to the title, author, status, or other fields.
Delete Books: Removes a book record from the database using a unique identifier.
Error Handling: Handles duplicate key errors, invalid data types, and other database-related issues gracefully.
Key Technologies
Python: Used for data loading and interacting with the backend services.
Node.js: Provides a robust framework for building the server and API endpoints.
MongoDB: Acts as the database for storing book records and handling data persistence.
How It Works
Data Loading: The data_loader.py script is used to populate the MongoDB database with initial book records. Duplicate records are detected and logged to avoid conflicts.
CRUD Operations: API endpoints handle Create, Read, Update, and Delete operations for book records. Each request is validated, and appropriate error messages are returned for invalid inputs.
Book Schema: The book records include fields such as:
title: The title of the book.
author: The author's name.
genre: The genre of the book.
publicationDate: The publication date.
isbn: A unique identifier for the book.
status: Indicates if the book is "Available" or "Checked Out".
Error Handling Examples
Duplicate Key Error: Occurs when trying to add a book with an ISBN that already exists in the database.
Invalid ID Error: Occurs when trying to update or delete a book using an invalid or non-existent book ID.


Setup and Installation

Clone the repository:

git clone <repository_url>

Install dependencies for both Python and Node.js:
Python: pip install -r requirements.txt
Node.js: npm install
Configure your environment variables:
Create a .env file and add your database connection string and other secret keys.
Run the data loader script:

python data_loader.py



Start the server:

npm start
Usage Instructions
Use the data loader script to initialize your database with book records.
Access the API endpoints for CRUD operations using tools like Postman or Thunder Client.

Example API Endpoints
GET /books: Fetch all books.
POST /books: Add a new book.
PUT /books/:id: Update an existing book by ID.
DELETE /books/:id: Delete a book by ID.

Notes
Ensure that sensitive information such as database credentials is hidden using environment variables.
The system is built to handle common errors and provide meaningful feedback to the user.