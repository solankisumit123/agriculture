const mongoose = require("mongoose");

const BillSchema = new mongoose.Schema({
  customerName: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  amount: {
     type: Number, 
     required: true 
    },
  dueDate: { 
    type: Date, 
    required: true 
  },
  status: { 
    type: String, 
    enum: ["Pending", "Paid"],
    default: "Pending" 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
    },
});

module.exports = mongoose.model("bill", BillSchema);
