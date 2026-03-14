const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false, // Allow guest complaints
  },
  victimName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  typeOfAbuse: {
    type: String,
    required: true,
  },
  subAbuse: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  proof: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Resolved', 'Closed'],
    default: 'Pending',
  },
  notes: {
    type: String,
  },
  authenticityScore: {
    type: Number,
    min: 0,
    max: 100,
  },
  authenticityLabel: {
    type: String,
    enum: ['High Authenticity', 'Moderate Authenticity', 'Needs Review (Potential Fake)'],
    default: 'Moderate Authenticity',
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Complaint', complaintSchema);
