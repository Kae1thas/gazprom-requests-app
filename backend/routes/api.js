const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

router.get('/applications', applicationController.getAll);
router.post('/applications', applicationController.create);

module.exports = router;