import { Menu, Typography, Divider, Badge } from "antd";
import {
  AppstoreOutlined,
  RocketOutlined,
  CreditCardOutlined,
  LoadingOutlined,
  FormOutlined,
  ThunderboltOutlined,
  BlockOutlined,
  StarFilled,
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
  };

  // Create menu items with icons
  const menuItems = Object.entries(categories).map(([categoryName, categoryPages]) => ({
    key: categoryName,
    type: 'group',
    label: (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 8,
        padding: '8px 0 4px',
        color: categoryConfig[categoryName]?.color || '#fff',
        fontWeight: 600,
        fontSize: 13,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
      }}>
        <span style={{ fontSize: 14 }}>
          {categoryConfig[categoryName]?.icon}
        </span>
        {categoryName}
        <Badge 
          count={categoryPages.length} 
          style={{ 
            backgroundColor: categoryConfig[categoryName]?.color || '#667eea',
            marginLeft: 'auto',
            fontSize: 10,
          }} 
        />
      </div>
    ),
    children: categoryPages.map(page => ({
      key: page.id,
      label: (
        <div style={{
          padding: '4px 8px',
          borderRadius: 6,
          transition: 'all 0.3s ease',
          fontSize: 14,
        }}>
          {page.label}
        </div>
      ),
      onClick: () => onPageChange(page.id),
    })),
  }));

  return (
    <div style={{ 
      padding: '24px 16px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
     
      


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

      
    </div>
  );
};
