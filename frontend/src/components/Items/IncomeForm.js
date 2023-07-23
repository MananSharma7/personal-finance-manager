import React, { useState } from "react";
import { useGlobalContext } from "../globalContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const IncomeForm = () => {

  const { addIncome, error, setError } = useGlobalContext();
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
    addIncome(inputState);
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
            placeholder="Salary Title"
          />
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Salary Amount"
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
            <option value="" disabled>Select Option</option>
            <option value="salary">Salary</option>
            <option value="freelancing">Freelancing</option>
            <option value="investments">Investiments</option>
            <option value="stocks">Stocks</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="bank">Bank Transfer</option>
            <option value="youtube">Youtube</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="field">
          <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
        </div>
        <button type="submit" className="ui button primary">Add Income</button>
      </form >
    </div >
  );
}

export default IncomeForm;