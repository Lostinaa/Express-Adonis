const express  = require('express');
const router = express.Router();
const { getPost, getPosts, createPost, updatePost, deletePost } = require('../controllers/postController.js');

// Get all posts
router.get('/', getPosts);

// Get single post
router.get('/:id', getPost);

// Create new post
router.post('/', createPost);

// Update Post
router.put('/:id', updatePost);

// Delete Post
router.delete('/:id', deletePost);

module.exports = router;

