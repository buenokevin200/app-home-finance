import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './TransactionList.css';

const TransactionList = ({ transactions }) => {
  return (
    <div className="transaction-list">
      <h3>Transacciones Recientes</h3>
      <div className="transaction-table">
        <div className="transaction-header">
          <span>Descripción</span>
          <span>Pres/Tide</span>
        </div>
        {transactions.map((transaction, index) => (
          <div key={index} className="transaction-row">
            <div className="transaction-info">
              {transaction.type === 'income' ? (
                <TrendingUp className="transaction-icon income" size={16} />
              ) : (
                <TrendingDown className="transaction-icon expense" size={16} />
              )}
              <span>{transaction.description}</span>
            </div>
            <span className={`transaction-amount ${transaction.type}`}>
              {transaction.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;