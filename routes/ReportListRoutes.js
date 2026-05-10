const express = require('express');
const router = express.Router();
const ReportListController = require('../controller/ReportListController');

router.get('/reportlist', ReportListController.getReportList);
router.post('/reportlist', ReportListController.createReportList);
router.delete('/reportlist/:id', ReportListController.deleteReportList);
router.put('/reportlist/:id', ReportListController.updateReportList);

module.exports = router;