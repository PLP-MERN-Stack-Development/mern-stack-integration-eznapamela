// routes/posts.js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// ✅ CREATE a new post (POST /api/posts)
router.post('/', async (req, res) => {
  try {
    const { title, content, author, category} = req.body;

    const post = new Post({
      title,
      content,
      author,
      category
    });

    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ READ all posts (GET /api/posts)
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('author', 'username email')
      .populate('category', 'name');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ READ one post (GET /api/posts/:id)
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('author', 'username email')
      .populate('category', 'name');

    if (!post) return res.status(404).json({ message: 'Post not found' });

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ UPDATE a post (PUT /api/posts/:id)
router.put('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedPost) return res.status(404).json({ message: 'Post not found' });

    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ DELETE a post (DELETE /api/posts/:id)
router.delete('/:id', async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);

    if (!deletedPost) return res.status(404).json({ message: 'Post not found' });

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
