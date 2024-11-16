const express = require('express');
const router = express.Router()
const Book = require('../models/Book')

// creating or adding a book
router.post('/books',async(req,res) =>{
    try {
        const newBook = new Book(req.body)
        await newBook.save()
        res.status(201).send(newBook)
    } catch (error) {
        res.status(401).send(error)
    }
})

// Get all books
router.get('/books', async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).send(books);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  // Update a book
router.put('/books/:id', async (req, res) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedBook) return res.status(404).send();
      res.send(updatedBook);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  // Delete a book
router.delete('/books/:id', async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
      if (!deletedBook) return res.status(404).send();
      res.send(deletedBook);
    } catch (error) {
      res.status(500).send(error);
    }
  });
module.exports = router;