import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './ActivityCard.css';

const ActivityCard = ({ activity }) => {
  const renderChart = () => {
    const data = [
      { name: 'Used', value: activity.data.value },
      { name: 'Remaining', value: 100 - activity.data.value }
    ];
    
    const COLORS = ['#6366f1', '#e5e7eb'];

    return (
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={120}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={30}
              outerRadius={50}
              startAngle={90}
              endAngle={450}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="chart-center-text">{activity.data.center}</div>
      </div>
    );
  };

  const renderCalendar = () => {
    return (
      <div className="calendar-container">
        <div className="calendar-chart">
          <div className="calendar-segments">
            {Array.from({ length: activity.data.segments }, (_, i) => (
              <div key={i} className="calendar-segment" />
            ))}
          </div>
          <div className="calendar-center-text">{activity.data.center}</div>
        </div>
      </div>
    );
  };

  const renderList = () => {
    return (
      <div className="list-container">
        {activity.data.map((item, index) => (
          <div key={index} className="list-item">
            <span className="list-item-name">{item.name}</span>
            <span className={`list-item-amount ${item.color}`}>{item.amount}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="activity-card">
      <div className="activity-header">
        <h3>{activity.title}</h3>
        {activity.subtitle && <p>{activity.subtitle}</p>}
      </div>
      <div className="activity-content">
        {activity.type === 'chart' && renderChart()}
        {activity.type === 'calendar' && renderCalendar()}
        {activity.type === 'list' && renderList()}
      </div>
    </div>
  );
};

export default ActivityCard;