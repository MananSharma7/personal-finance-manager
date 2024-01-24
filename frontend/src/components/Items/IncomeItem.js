import React from "react";
import moment from 'moment';
import "./../style/style.css";

const IncomeItem = ({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  type
}) => {
  const categoryIcon = () => {
    switch (category) {
      case 'salary':
        return "money bill alternate outline";
      case 'freelancing':
        return 'desktop'
      case 'investments':
        return 'archive';
      case 'stocks':
        return 'chart line';
      case 'bitcoin':
        return 'bitcoin';
      case 'bank':
        return 'building outline';
      case 'youtube':
        return "youtube";
      case 'takeaways':
        return "coffee icon";
      case 'education':
        return "university icon";
      case 'groceries':
        return "shopping bag icon";
      case 'health':
        return "hospital symbol icon";
      case 'subscriptions':
        return "tv icon";
      case 'clothing':
        return "black tie icon";
      case 'travelling':
        return "bus icon";
      case 'other':
        return "dollar sign";
      default:
        return 'sticky note outline'
    }
  }

  return (
    <div id="item-container" className="ui segment">
      <div>
        <i className={`${categoryIcon(category)} big icon`}></i>
      </div>
      <div id="items">
        <div id="item-top">
          <h3>{title}</h3>
        </div>
        <div id="item-down">
          <div>
            ${amount}
          </div>
          <div>
            {moment(date).format('DD-MM-YYYY')}
          </div>
          <p>
            {description}
          </p>
        </div>
        <div id="item-button">
          <button
            className="ui icon button red"
            onClick={() => deleteItem(id)}
          >
            <i className="trash icon"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default IncomeItem;