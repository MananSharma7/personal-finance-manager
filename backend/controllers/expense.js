const ExpenseSchema = require("../models/expenseModel");

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  const Expense = ExpenseSchema({
    title,
    amount,
    category,
    description,
    date,
  })

  try {
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    if (amount <= 0 || !amount === "number") {
      return res.status(400).json({ message: "Amount must be positive number!" });
    }
    await Expense.save()
    res.status(200).json({ message: "Expense Added!" });
  } catch (error) {
    res.status(700).json({ message: "Server Error!" });
  }
}

exports.getExpense = async (req, res) => {
  try {
    const Expense = await ExpenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(Expense);
  } catch (error) {
    res.status(700).json({ message: "Server Error!" });
  }
}

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  ExpenseSchema.findByIdAndDelete(id)
    .then((Expense) => {
      res.status(200).json({ message: "Expense Deleted!" });
    })
    .catch((error) => {
      res.status(700).json({ message: "Server Error!" });
    })
}