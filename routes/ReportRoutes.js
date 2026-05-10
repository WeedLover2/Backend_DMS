const express = require('express');
const router = express.Router();
const ReportController = require('../controller/ReportController');

router.get('/report', ReportController.getReport);
router.post('/report', ReportController.createReport);
router.delete('/report/:id', ReportController.deleteReport);
router.put('/report/:id', ReportController.updateReport);

module.exports = router;