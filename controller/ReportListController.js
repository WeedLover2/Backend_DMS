const ReportList = require('../models/ReportList')

exports.getReportList = async (req, res) => {
    try {
        const reportList = await ReportList.find();
        res.status(200).json(reportList);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createReportList = async (req, res) => {
    try {
        const { activity, Isdone, IsChildFrom } = req.body;
    
        const newReportList = new ReportList({
            activity,
            Isdone,
            IsChildFrom
        
        });
        await newReportList.save();
        res.status(201).json(newReportList);
        console.log("Report List created succesfully");
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
};

exports.deleteReportList = async (req, res) => {
    try {
        const reportList = await ReportList.findById(req.params.id);

        await reportList.deleteOne();

        res.status(200).json({ message: "Report List deleted succesfully"});

        console.log("Report List deleted succesfully");
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateReportList = async (req, res) => {
    try {
        const { id } = req.params;
        const { activity, Isdone, IsChildFrom } = req.body;

        const reportList = await ReportList.findById(id);
        if (!reportList) {
            return res.status(404).json({ message: "Report List not found" });
        }

        const updateReportList = {
            ...req.body,
        };

        const updatedReportList = await ReportList.findByIdAndUpdate(id, updateReportList, { new: true});
        
        res.status(200).json(updatedReportList);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};