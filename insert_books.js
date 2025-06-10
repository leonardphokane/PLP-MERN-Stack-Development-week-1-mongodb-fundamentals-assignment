const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://leonardphokane1:FbaskVn50B7Dw0T9@cluster0.s70hksp.mongodb.net/"; // Replace with actual connection string
const client = new MongoClient(uri); // No need for deprecated options


async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        const db = client.db("plp_bookstore");
        const collection = db.collection("books");

        const books = [
            { title: "The Pragmatic Programmer", author: "Andrew Hunt", genre: "Technology", published_year: 1999, price: 35, in_stock: true, pages: 352, publisher: "Addison-Wesley" },
            { title: "Clean Code", author: "Robert C. Martin", genre: "Technology", published_year: 2008, price: 40, in_stock: true, pages: 464, publisher: "Prentice Hall" },
            { title: "1984", author: "George Orwell", genre: "Dystopian", published_year: 1949, price: 15, in_stock: true, pages: 328, publisher: "Secker & Warburg" },
            { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", published_year: 1960, price: 18, in_stock: false, pages: 281, publisher: "J.B. Lippincott & Co." },
            { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", published_year: 1925, price: 20, in_stock: true, pages: 180, publisher: "Charles Scribner's Sons" },
            { title: "Sapiens", author: "Yuval Noah Harari", genre: "History", published_year: 2011, price: 25, in_stock: true, pages: 498, publisher: "Harper" },
            { title: "Atomic Habits", author: "James Clear", genre: "Self-Help", published_year: 2018, price: 30, in_stock: true, pages: 320, publisher: "Avery" },
            { title: "The Alchemist", author: "Paulo Coelho", genre: "Philosophy", published_year: 1988, price: 22, in_stock: false, pages: 197, publisher: "HarperOne" },
            { title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian", published_year: 1932, price: 16, in_stock: true, pages: 268, publisher: "Chatto & Windus" },
            { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", genre: "Psychology", published_year: 2011, price: 27, in_stock: true, pages: 512, publisher: "Farrar, Straus and Giroux" }
        ];

        const result = await collection.insertMany(books);
        console.log(`${result.insertedCount} books inserted successfully!`);
    } finally {
        await client.close();
    }
}

run();
