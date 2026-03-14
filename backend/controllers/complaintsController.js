const Complaint = require('../models/Complaint');
const { analyzeComplaint } = require('../utils/authenticityAnalyzer');

// @desc    Get user complaints
// @route   GET /api/complaints
// @access  Private
const getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Create new complaint
// @route   POST /api/complaints
// @access  Private
const createComplaint = async (req, res) => {
  try {
    const { 
      victimName, 
      age, 
      gender, 
      address, 
      contactNumber, 
      email, 
      typeOfAbuse, 
      subAbuse, 
      description 
    } = req.body;

    if (!victimName || !age || !gender || !address || !contactNumber || !typeOfAbuse || !description) {
      return res.status(400).json({ message: 'Please add all required fields' });
    }

    const complaintData = {
      victimName,
      age: Number(age),
      gender,
      address,
      contactNumber,
      email,
      typeOfAbuse,
      subAbuse,
      description,
    };

    // If user is logged in, attach their ID
    if (req?.user?.id) {
      complaintData.user = req.user.id;
    }

    if (req.file) {
      // Save the path to the uploaded file relative to the root or uploads/ directory
      // For example, just 'uploads/' + filename
      complaintData.proof = 'uploads/' + req.file.filename;
    }

    // Analyze authenticity
    const { score, label } = analyzeComplaint(complaintData);
    complaintData.authenticityScore = score;
    complaintData.authenticityLabel = label;

    const complaint = await Complaint.create(complaintData);

    res.status(201).json(complaint);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get complaint by ID
// @route   GET /api/complaints/:id
// @access  Private
const getComplaintById = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }

    // Make sure logged in user matches complaint user or admin
    if (complaint.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({ message: 'Not authorized' });
    }

    res.status(200).json(complaint);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get all complaints (Admin only)
// @route   GET /api/complaints/all
// @access  Private/Admin
const getAllComplaints = async (req, res) => {
  try {
    // Populate user to get name/email if needed, sort by newest
    const complaints = await Complaint.find({}).populate('user', 'name email').sort({ createdAt: -1 });
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Update complaint status (Admin only)
// @route   PUT /api/complaints/:id/status
// @access  Private/Admin
const updateComplaintStatus = async (req, res) => {
  try {
    const { status } = req.body;
    
    // Validate status against enum in model
    const validStatuses = ['Pending', 'In Progress', 'Resolved', 'Closed'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }

    complaint.status = status;
    const updatedComplaint = await complaint.save();

    res.status(200).json(updatedComplaint);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  getComplaints,
  createComplaint,
  getComplaintById,
  getAllComplaints,
  updateComplaintStatus,
};
