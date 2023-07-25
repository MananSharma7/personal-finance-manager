import React, { useEffect } from "react";
import ExpenseForm from "../Items/ExpenseForm";
import { useGlobalContext } from "../globalContext";
import IncomeItem from "../Items/IncomeItem";

const Expenses = () => {
  const { expenses, getExpenses, deleteExpense, totalExpenses } = useGlobalContext();
  useEffect(() => {
    getExpenses()
  }, [getExpenses])


  return (
    <div className="ui container" style={{ minHeight: "77vh" }}>
      <h2>Expenses</h2>
      <h2 className="total-income">Total Expenses: <span>${totalExpenses()}</span></h2>
      <div className="ui relaxed grid">
        <div className="six wide column">
          <ExpenseForm />
        </div>
        <div className="ten wide column">
          <div className="ui items">
            {expenses.map((income) => {
              const { _id, title, amount, date, category, description, type } = income;
              return <IncomeItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                category={category}
                indicatorColor="green"
                deleteItem={deleteExpense}
              />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expenses;