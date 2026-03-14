const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { getComplaints, createComplaint, getComplaintById, getAllComplaints, updateComplaintStatus } = require('../controllers/complaintsController');
const { protect, admin } = require('../middleware/authMiddleware');

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage,
});

// Optional auth middleware for POST route (attaches req.user if token exists but doesn't throw 401 if missing)
const optionalAuth = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const jwt = require('jsonwebtoken');
      const User = require('../models/User');
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
    } catch (error) {
      console.error('Optional auth failed:', error);
      // Don't throw, just continue without req.user
    }
  }
  next();
};

router.route('/').get(protect, getComplaints).post(optionalAuth, upload.single('proof'), createComplaint);
router.route('/all').get(protect, admin, getAllComplaints);
router.route('/:id').get(protect, getComplaintById);
router.route('/:id/status').put(protect, admin, updateComplaintStatus);

module.exports = router;
