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
      case 'Salary':
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
      case 'other':
        return "dollar sign";
      default:
        return 'sticky note outline'
    }
  }

  return (
    <div className="item income-item">
      <div className="small image ">
        <i className={`${categoryIcon(category)} huge icon`}></i>
      </div>
      <div className="content item-image">
        <div className="header">
          {title}
        </div>
        <div className="description ui grid">
          <p>${amount}</p>
          {moment(date).format('DD-MM-YYYY')}
          <p>
            {description}
          </p>
          <div className="ui image">
            <button
              className="ui icon button red"
              onClick={() => deleteItem(id)}
            >
              <i className="trash icon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IncomeItem;