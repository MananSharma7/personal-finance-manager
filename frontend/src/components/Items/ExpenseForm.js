import React, { useState } from "react";
import { useGlobalContext } from "../globalContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseForm = () => {

  const { addExpense, error, setError } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: ""
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = name => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError('');
  }

  const handleSubmit = e => {
    e.preventDefault();
    addExpense(inputState);
    setInputState({
      title: '',
      amount: '',
      date: '',
      category: '',
      description: '',
    });
  }

  return (
    <div className="ui segment">
      {error && <h5>{error}</h5>}
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <input type="text"
            value={title}
            onChange={handleInput('title')}
            placeholder="Expense Title"
          />
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Expense Amount"
            value={amount}
            name={"amount"}
            onChange={handleInput("amount")}
          />
        </div>
        <div className="field">
          <DatePicker
            id='date'
            placeholderText='Enter A Date'
            selected={date}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => {
              setInputState({ ...inputState, date: date })
            }}
          />
        </div>
        <div style={{ margin: "16px 0" }}>
          <select
            required value={category}
            className="ui dropdown"
            id="category"
            onChange={handleInput('category')}
          >
            <option value="" disabled >Select Option</option>
            <option value="education">Education</option>
            <option value="groceries">Groceries</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
            <option value="takeaways">Takeaways</option>
            <option value="clothing">Clothing</option>
            <option value="travelling">Travelling</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="field">
          <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
        </div>
        <button type="submit" className="ui button primary">Add Expense</button>
      </form >
    </div >
  );
}

export default ExpenseForm;