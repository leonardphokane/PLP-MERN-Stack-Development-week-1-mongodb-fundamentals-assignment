# PLP Bookstore MongoDB Project

## Overview

This project demonstrates the setup and use of a MongoDB database for a bookstore.  
It includes inserting book documents, performing CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Setup Instructions

### 1. MongoDB Setup

- Install MongoDB Community Edition locally OR use MongoDB Atlas (free tier).
- Create a database named `plp_bookstore`.
- Create a collection named `books`.

### 2. Insert Books

- Use the provided `insert_books.js` script to insert at least 10 book documents.
- Each book contains fields like `title`, `author`, `genre`, `published_year`, `price`, `in_stock`, `pages`, and `publisher`.

### 3. Run Queries

- Open MongoDB Shell (`mongosh`) or MongoDB Compass.
- Run queries from the `queries.js` file to:
  - Perform CRUD operations
  - Execute advanced queries with filtering, projection, sorting, and pagination
  - Perform aggregation pipelines for analytics
  - Create indexes and check query performance

## Files in this repository

- `insert_books.js` — Script to insert sample book documents
- `queries.js` — Contains all MongoDB queries for tasks 2 to 5
- `mongodb_books_screenshot.png` — Screenshot showing sample inserted books in the collection
- `README.md` — This file with instructions and overview

## How to Run

1. Start your MongoDB server (locally or connect to Atlas).
2. Run the `insert_books.js` script to populate the database:
   ```bash
   node insert_books.js
   ```
