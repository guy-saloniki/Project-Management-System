const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Done'],
  },
});

module.exports = mongoose.model('Project', projectSchema);
