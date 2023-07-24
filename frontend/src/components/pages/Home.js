import React, { useEffect } from "react";
import Chart from "../Items/Chart";
import History from "../Items/History";
import { useGlobalContext } from "../globalContext";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import homeImg from "./../style/wealth.jpg";
import "./../style/style.css";

const Home = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const { totalExpenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()


  useEffect(() => {
    getIncomes();
    getExpenses();
  }, [getIncomes, getExpenses]);

  if (!auth.user) {
    return (
      <div className="ui container" style={{ minHeight: "77vh" }}>
        <div className="img-container">
          <img className="homeImg" alt="altTxt" src={homeImg} />
        </div>
        <h3>Please Login to access full Application!</h3>
        <button className="ui blue button" onClick={() => navigate("/login")}>Login In!</button>
      </div>
    );
  }

  return (
    <div className="ui container" style={{ minHeight: "77vh" }}>
      <h2 className="home-header">All Transactions</h2>
      <div className="ui grid">
        <div className="ten wide column ui segment">
          <Chart />
        </div>
        <div className="six wide column">
          <History />
        </div>
      </div>
      <div className="amount-con ui three column centered grid">
        <div className="income home-totals" style={{ backgroundColor: "green" }}>
          <h2>Total Income</h2>
          <p>
            $ {totalIncome()}
          </p>
        </div>
        <div className="expense home-totals" style={{ backgroundColor: "red" }}>
          <h2>Total Expense</h2>
          <p>
            $ {totalExpenses()}
          </p>
        </div>
        <div className="balance home-totals" style={{ backgroundColor: "blue" }}>
          <h2>Total Balance</h2>
          <p>
            $ {totalBalance()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;