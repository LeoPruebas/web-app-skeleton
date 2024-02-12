import express from 'express';
export const router = express.Router();

// Home page route
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// Add more routes as needed
