// Find all books in a specific genre
db.books.find({ genre: "Fiction" })

// Find books published after a certain year
db.books.find({ published_year: { $gt: 2010 } })

// Find books by a specific author
db.books.find({ author: "George Orwell" })

// Update the price of a specific book
db.books.updateOne({ title: "The Great Gatsby" }, { $set: { price: 11.99 } })

// Delete a book by its title
db.books.deleteOne({ title: "Moby Dick" })

// Find books that are both in stock and published after 2010
db.books.find({ $and: [{ in_stock: true }, { published_year: { $gt: 2010 } }] })

// Projection to return only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// Sorting books by price (ascending)
db.books.find().sort({ price: 1 })

// Sorting books by price (descending)
db.books.find().sort({ price: -1 })

// Pagination (5 books per page, skipping the first 5)
db.books.find().sort({ price: 1 }).skip(5).limit(5)
