import { Menu, Typography, Badge } from "antd";
import {
  AppstoreOutlined,
  RocketOutlined,
  CreditCardOutlined,
  LoadingOutlined,
  FormOutlined,
  ThunderboltOutlined,
  BlockOutlined,
  StarFilled,
  FireOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

export const Sidebar = ({ pages, currentPage, onPageChange }) => {
  // Category icons and colors
  const categoryConfig = {
    Basics: { icon: <AppstoreOutlined />, color: '#667eea' },
    Buttons: { icon: <RocketOutlined />, color: '#f093fb' },
    Cards: { icon: <CreditCardOutlined />, color: '#4ecdc4' },
    Feedback: { icon: <LoadingOutlined />, color: '#ff6b6b' },
    Forms: { icon: <FormOutlined />, color: '#f59e0b' },
    Animations: { icon: <ThunderboltOutlined />, color: '#10b981' },
    Components: { icon: <BlockOutlined />, color: '#8b5cf6' },
    Backgrounds: { icon: <BlockOutlined />, color: '#667eea' },
    Trending: { icon: <FireOutlined />, color: '#ec4899' },
    UX: { icon: <StarFilled />, color: '#38bdf8' },
    New: { icon: <StarFilled />, color: '#f59e0b' },
  };

  // Group pages by category
  const categories = {
    Basics: pages.filter((p) => p.category === "Basics"),
    Buttons: pages.filter((p) => p.category === "Buttons"),
    Cards: pages.filter((p) => p.category === "Cards"),
    Feedback: pages.filter((p) => p.category === "Feedback"),
    Forms: pages.filter((p) => p.category === "Forms"),
    Animations: pages.filter((p) => p.category === "Animations"),
    Components: pages.filter((p) => p.category === "Components"),
    Backgrounds: pages.filter((p) => p.category === "Backgrounds"),
    Trending: pages.filter((p) => p.category === "Trending"),
    UX: pages.filter((p) => p.category === "UX"),
    New: pages.filter((p) => p.category === "New"),
  };

  // Create menu items with icons
  const menuItems = Object.entries(categories).map(([categoryName, categoryPages]) => ({
    key: categoryName,
    type: 'group',
    label: (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 12,
        padding: '12px 16px',
        color: categoryConfig[categoryName]?.color || '#fff',
        fontWeight: 600,
        fontSize: 14,
        textTransform: 'uppercase',
        letterSpacing: '0.8px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 8,
        margin: '4px 0',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}>
        <span style={{ fontSize: 16 }}>
          {categoryConfig[categoryName]?.icon}
        </span>
        {categoryName}
        <Badge 
          count={categoryPages.length} 
          style={{ 
            backgroundColor: categoryConfig[categoryName]?.color || '#667eea',
            marginLeft: 'auto',
            fontSize: 10,
            minWidth: 18,
            height: 18,
            borderRadius: 9,
          }} 
        />
      </div>
    ),
    children: categoryPages.map(page => ({
      key: page.id,
      label: (
        <div style={{
          padding: '8px 16px',
          borderRadius: 6,
          transition: 'all 0.3s ease',
          fontSize: 14,
          margin: '2px 0',
          background: currentPage === page.id ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          color: currentPage === page.id ? '#fff' : 'rgba(255, 255, 255, 0.8)',
          fontWeight: currentPage === page.id ? 500 : 400,
          borderLeft: currentPage === page.id ? `3px solid ${categoryConfig[categoryName]?.color || '#667eea'}` : 'none',
        }}>
          {page.label}
        </div>
      ),
      onClick: () => onPageChange(page.id),
    })),
  }));

  return (
    <div style={{ 
      padding: '20px 12px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
      boxShadow: '4px 0 16px rgba(0, 0, 0, 0.3)',
      borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    }}>
      
      {/* Header */}
      <div style={{
        padding: '16px 12px',
        textAlign: 'center',
        marginBottom: 20,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <h2 style={{
          color: '#fff',
          margin: 0,
          fontSize: 22,
          fontWeight: 700,
          background: 'linear-gradient(90deg, #667eea, #764ba2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        }}>
          MY-ReactBits
        </h2>
        <p style={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: 12,
          margin: '8px 0 0 0',
        }}>
          Beautiful UI Components
        </p>
      </div>

      {/* Menu */}
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
        <Menu
          mode="inline"
          selectedKeys={[currentPage]}
          style={{
            background: 'transparent',
            border: 'none',
          }}
          theme="dark"
          items={menuItems}
          className="custom-sidebar-menu"
        />
      </div>
      
      {/* Footer */}
      <div style={{
        padding: '16px 12px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        marginTop: 16,
      }}>
        <Text style={{ 
          color: 'rgba(255, 255, 255, 0.6)', 
          fontSize: 12,
        }}>
          © 2025  MY-ReactBits UI
        </Text>
      </div>
    </div>
  );
};