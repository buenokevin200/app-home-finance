import React, { useState } from 'react';
import { Search, Bell, Plus, TrendingUp, TrendingDown } from 'lucide-react';
import ActivityCard from './ActivityCard.js';
import TransactionList from './TransactionList';
import './Dashboard.css';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const activities = [
    {
      title: 'Actividades',
      subtitle: 'Gastos',
      type: 'chart',
      data: { center: 'IOT', value: 75 }
    },
    {
      title: 'Calendário',
      subtitle: 'Tapos',
      type: 'calendar',
      data: { center: 'IOT', segments: 8 }
    },
    {
      title: 'Transações Recorrentes',
      subtitle: '',
      type: 'list',
      data: [
        { name: 'Ginástica', amount: '+', color: 'green' },
        { name: 'Compras', amount: '+', color: 'green' },
        { name: 'Gasolina', amount: '+', color: 'green' },
        { name: 'Atividades', amount: '+', color: 'green' },
        { name: 'Refeições', amount: '+', color: 'green' },
        { name: 'Apartamento', amount: '+', color: 'green' }
      ]
    }
  ];

  const recentTransactions = [
    { description: 'Desem', amount: 3460, type: 'expense' },
    { description: 'Tanso', amount: 6540, type: 'income' },
    { description: 'Stato', amount: 3460, type: 'expense' }
  ];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="search-section">
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="notification-btn">
            <Bell size={20} />
            <span className="notification-text">Notificações</span>
          </button>
        </div>
        <button className="user-btn">
          <span>Cellar Soon</span>
        </button>
      </header>

      <div className="dashboard-content">
        <h1 className="section-title">Activos</h1>
        
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
          
          <div className="recommendations-card">
            <h3>Recomendações</h3>
            <div className="recommendation-item">
              <span className="rec-label">Mercado</span>
              <span className="rec-value">1470</span>
            </div>
            <div className="recommendation-item">
              <span className="rec-label">Renda</span>
              <span className="rec-value">6540</span>
            </div>
            <div className="recommendation-item">
              <span className="rec-label">Saldo</span>
              <span className="rec-value">4070</span>
            </div>
            <button className="add-transaction-btn">
              <Plus size={16} />
              Agregar transacción
            </button>
          </div>
        </div>

        <TransactionList transactions={recentTransactions} />
      </div>
    </div>
  );
};

export default Dashboard;