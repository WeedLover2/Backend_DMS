const express = require('express');
const router = express.Router();
const ReportListController = require('../controller/ReportListController');

router.get('/reportlist', getReportList);
router.post('/reportlist', createReportList);
router.delete('/reportlist/:id', deleteReportList);
router.put('/reportlist/:id', updateReportList);

module.exports = router;