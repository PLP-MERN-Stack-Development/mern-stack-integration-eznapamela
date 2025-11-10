// server/routes/categories.js
const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const { body } = require('express-validator');
const validateRequest = require('../Middleware/validateRequest');

// GET /api/categories - list all categories
router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.find().sort({ name: 1 });
    res.json(categories);
  } catch (err) {
    next(err);
  }
});

// POST /api/categories - create a category
router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 50 }).withMessage('Name too long'),
    body('description').optional().isLength({ max: 200 }).withMessage('Description too long'),
  ],
  validateRequest,
  async (req, res, next) => {
    try {
      const { name, description } = req.body;
      // prevent duplicates
      const existing = await Category.findOne({ name });
      if (existing) return res.status(409).json({ message: 'Category already exists' });

      const category = new Category({ name, description });
      await category.save();
      res.status(201).json(category);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
