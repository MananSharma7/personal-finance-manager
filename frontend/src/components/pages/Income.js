import React, { useEffect } from "react";
import IncomeForm from "../Items/IncomeForm";
import { useGlobalContext } from "../globalContext";
import IncomeItem from "../Items/IncomeItem";

const Income = () => {
  const { incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();
  useEffect(() => {
    getIncomes()
  }, [getIncomes])


  return (
    <div className="ui container" style={{ minHeight: "77vh" }}>
      <h2>Incomes</h2>
      <h2 className="total-income">Total Income: <span>${totalIncome()}</span></h2>
      <div className="ui relaxed grid">
        <div className="six wide column">
          <IncomeForm />
        </div>
        <div className="ten wide column">
          <div className="ui items">
            {incomes.map((income) => {
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
                deleteItem={deleteIncome}
              />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Income;