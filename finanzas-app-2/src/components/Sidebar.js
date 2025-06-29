import React from 'react';
import { 
  Home, 
  CreditCard, 
  PieChart, 
  Calendar, 
  Target, 
  Lightbulb,
  Bot,
  Settings
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Finanzas', sublabel: 'Dashboard', icon: Home },
    { id: 'transactions', label: 'Transacciones', sublabel: 'Movimientos', icon: CreditCard },
    { id: 'budgets', label: 'Presupuestos', sublabel: 'Reportes', icon: PieChart },
    { id: 'categories', label: 'Categorías', sublabel: 'Gastos', icon: Target },
    { id: 'iot', label: 'IOT', sublabel: 'Domótica', icon: Settings },
    { id: 'recommendations', label: 'Recomendaciones', sublabel: 'Análisis', icon: Lightbulb },
    { id: 'ai', label: 'IA', sublabel: 'Configuración IA', icon: Bot }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">₿</div>
          <span className="logo-text">Finanás</span>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <Icon size={20} />
              <div className="nav-text">
                <span className="nav-label">{item.label}</span>
                <span className="nav-sublabel">{item.sublabel}</span>
              </div>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;