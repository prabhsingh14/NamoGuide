// these backend functionalities are not added to the frontend yet

const express = require('express');
const router = express.Router();

const {
    getAllTours,
    getTourById,
    searchTours,
    bookTour
} = require('../controllers/Tours');

router.get('/', getAllTours);
router.get('/:id', getTourById);
router.get('/search', searchTours);
router.post('/:id/book', bookTour);

module.exports = router;