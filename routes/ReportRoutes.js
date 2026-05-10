const express = require('express');
const router = express.Router();
const ReportController = require('../controller/ReportController');

router.get('/report', getReport);
router.post('/report', createReport);
router.delete('/report/:id', deleteReport);
router.put('/report/:id', updateReport);

module.exports = router;