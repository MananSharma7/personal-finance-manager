import React from 'react'
import "./../style/style.css";
import { useGlobalContext } from './../globalContext';

function History() {
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();

  return (
    <div>
      <h2>Recent History</h2>
      {history.map((item) => {
        const { _id, title, amount, type } = item;
        return (
          <div key={_id} className={type === 'Expense' ? "red history-item ui segment grid" : "green history-item ui segment grid"}>
            <div className='twelve wide column'>
              <h4>{title}</h4>
            </div>
            <div className='four wide column'>
              {type === 'Expense' ? `-  $ ${amount <= 0 ? 0 : amount}` : `+  $ ${amount <= 0 ? 0 : amount}`}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default History;