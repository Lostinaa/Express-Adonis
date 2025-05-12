const posts = [
    {id: 1, title: 'post one'},
    {id: 2, title: 'post two'},
    {id: 3, title: 'post three'}
];

// @desc   Get all posts
// @route  GET /api/posts
const getPosts = (req, res) => {
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
    res.status(200).json(posts);
};

// @desc   Get single post
// @route  GET /api/posts/:id
const getPost = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(200).json(post);
};

// @desc   Create new post
// @route  POST /api/posts
const createPost = (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };
   
    if (!newPost.title) {
        return res.status(400).json({ msg: 'Please include title' });
    }
    
    posts.push(newPost);
    res.status(201).json(posts);
};

// @desc   Update post
// @route  PUT /api/posts/:id
const updatePost = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    
    if (!post) {
        return res.status(404).json({ msg: `Post with id ${id} not found` });
    }
    
    post.title = req.body.title;
    res.status(200).json(posts);
};

// @desc   Delete post
// @route  DELETE /api/posts/:id
const deletePost = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    
    if (!post) {
        return res.status(404).json({ msg: `Post with id ${id} not found` });
    }
    
    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
};

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
};