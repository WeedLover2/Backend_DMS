const Report = require ('../models/Report');

exports.getReport = async (req, res) => {
    try {
        const report = await Report.find();
        res.status(200).json(report);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createReport = async (req, res) => {
    try {
        const { title, Description, CreatedBy } = req.body;
    
        const newReport = new Report({
            title,
            Description,
            CreatedBy
        
        });
        await newReport.save();
        res.status(201).json(newReport);
        console.log("Report created succesfully");
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
};

exports.deleteReport = async (req, res) => {
    try {
        const report = await Report.findById(req.params.id);

        await report.deleteOne();

        res.status(200).json({ message: "Report deleted succesfully"});

        console.log("Report deleted succesfully");
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateReport = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, Description, IsFinished } = req.body;

        const report = await Report.findById(id);
        if (!report) {
            return res.status(404).json({ message: "Report not found" });
        }

        const updateReport = {
            ...req.body,
        };

        const updatedReport = await Report.findByIdAndUpdate(id, updateReport, { new: true});
        
        res.status(200).json(updatedReport);
        console.log("Report updated succesfully");
    } catch (err) {
        res.status(400).json({ message: err.message });
        console.log("Failed to update report");
    }
};