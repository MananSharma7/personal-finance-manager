const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExpenseSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50
  },
  amount: {
    type: Number,
    required: true,
    trim: true,
    maxLength: 20
  },
  type: {
    type: String,
    default: "Expense"
  },
  date: {
    type: Date,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxLength: 20
  },
}, { timestamps: true });//automatically adds fields to schema: createdAt and updatedAt

module.exports = mongoose.model("Expense", ExpenseSchema);