import { useState } from "react";
import { Layout, Typography, theme } from "antd";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { HomePage } from "./pages/HomePage";
import { ButtonPage } from "./pages/ButtonPage";
import { CardPage } from "./pages/CardPage";
import { AnimatedButtonsPage } from "./pages/AnimatedButtonsPage";
import { AnimatedCardsPage } from "./pages/AnimatedCardsPage";
import { LoadersPage } from "./pages/LoadersPage";
import { InputsPage } from "./pages/InputsPage";
import { TextAnimationsPage } from "./pages/TextAnimationsPage";
import { UIComponentsPage } from "./pages/UIComponentsPage";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

const pages = [
  { id: "home", label: "Home", category: "Navigation" },
  { id: "button", label: "Button", category: "Basics" },
  { id: "card", label: "Card", category: "Basics" },
  { id: "animated-buttons", label: "Animated Buttons", category: "Buttons" },
  { id: "animated-cards", label: "Animated Cards", category: "Cards" },
  { id: "loaders", label: "Loaders", category: "Feedback" },
  { id: "inputs", label: "Inputs", category: "Forms" },
  { id: "text-animations", label: "Text Animations", category: "Animations" },
  { id: "ui-components", label: "UI Components", category: "Components" },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const { token } = theme.useToken();

  const currentPageMeta = pages.find((p) => p.id === currentPage);

  return (
    <Layout style={{ height: '100vh' }}>
      {/* Header/Navbar */}
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(12px)',
          padding: '0 32px',
          borderBottom: '1px solid rgba(102, 126, 234, 0.2)',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
        }}
      >
        <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      </Header>

      <Layout>
        {/* Sidebar - Hidden on home page */}
        {currentPage !== "home" && (
          <Sider
            width={260}
            style={{
              background: 'linear-gradient(180deg, #001529 0%, #000c17 100%)',
              overflow: 'auto',
              height: 'calc(100vh - 64px)',
            }}
          >
            <Sidebar 
              pages={pages.filter(p => p.category !== "Navigation")} 
              currentPage={currentPage} 
              onPageChange={setCurrentPage} 
            />
          </Sider>
        )}

        {/* Main Content */}
        <Layout>
          <Content
            style={{
              padding: '24px 32px',
              overflow: 'auto',
              background: token.colorBgLayout,
            }}
          >
            {currentPage !== "home" && (
              <Text type="secondary" style={{ display: 'block', marginBottom: 16 }}>
                Components / {currentPageMeta.label}
              </Text>
            )}
            {currentPage === "home" && <HomePage onNavigate={setCurrentPage} />}
            {currentPage === "button" && <ButtonPage />}
            {currentPage === "card" && <CardPage />}
            {currentPage === "animated-buttons" && <AnimatedButtonsPage />}
            {currentPage === "animated-cards" && <AnimatedCardsPage />}
            {currentPage === "loaders" && <LoadersPage />}
            {currentPage === "inputs" && <InputsPage />}
            {currentPage === "text-animations" && <TextAnimationsPage />}
            {currentPage === "ui-components" && <UIComponentsPage />}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
