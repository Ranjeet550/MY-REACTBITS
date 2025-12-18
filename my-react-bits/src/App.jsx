import { useState } from "react";
import { Layout, Typography, theme } from "antd";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { HomePage } from "./pages/HomePage";
import { ButtonPage } from "./pages/ButtonPage";
import { CardPage } from "./pages/CardPage";
import { AccordionPage } from "./pages/AccordionPage";
import { TabsPage } from "./pages/TabsPage";
import { DividerPage } from "./pages/DividerPage";
import { AnimatedButtonsPage } from "./pages/AnimatedButtonsPage";
import { AnimatedCardsPage } from "./pages/AnimatedCardsPage";
import { StatsCardPage } from "./pages/StatsCardPage";
import { LoadersPage } from "./pages/LoadersPage";
import { AlertPage } from "./pages/AlertPage";
import { InputsPage } from "./pages/InputsPage";
import { SwitchPage } from "./pages/SwitchPage";
import { CheckboxPage } from "./pages/CheckboxPage";
import { RadioPage } from "./pages/RadioPage";
import { SliderPage } from "./pages/SliderPage";
import { TextAnimationsPage } from "./pages/TextAnimationsPage";
import { UIComponentsPage } from "./pages/UIComponentsPage";
import { ChipPage } from "./pages/ChipPage";
import { BreadcrumbPage } from "./pages/BreadcrumbPage";
import { DropdownPage } from "./pages/DropdownPage";
import { PaginationPage } from "./pages/PaginationPage";
import { TimelinePage } from "./pages/TimelinePage";
import { ModernComponentsPage } from "./pages/ModernComponentsPage";
import { CarouselPage } from "./pages/CarouselPage";
import { DatePickerPage } from "./pages/DatePickerPage";
import { FileUploadPage } from "./pages/FileUploadPage";
import { RatingProgressPage } from "./pages/RatingProgressPage";
import { ColorPickerPage } from "./pages/ColorPickerPage";
import { ToggleStepperPage } from "./pages/ToggleStepperPage";
import { TrendingComponentsPage } from "./pages/TrendingComponentsPage";
import { AnimationComponentsPage } from "./pages/AnimationComponentsPage";
import { AttractiveComponentsPage } from "./pages/AttractiveComponentsPage";
import { NewComponentsPage } from "./pages/NewComponentsPage";
import { CurvedLoopPage } from "./pages/CurvedLoopPage";
import { FallingTextPage } from "./pages/FallingTextPage";
import { ThreadsPage } from "./pages/ThreadsPage";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

const pages = [
  { id: "home", label: "Home", category: "Navigation" },
  { id: "button", label: "Button", category: "Basics" },
  { id: "card", label: "Card", category: "Basics" },
  { id: "accordion", label: "Accordion", category: "Basics" },
  { id: "tabs", label: "Tabs", category: "Basics" },
  { id: "divider", label: "Divider", category: "Basics" },
  { id: "animated-buttons", label: "Animated Buttons", category: "Buttons" },
  { id: "animated-cards", label: "Animated Cards", category: "Cards" },
  { id: "stats-card", label: "Stats Card", category: "Cards" },
  { id: "loaders", label: "Loaders", category: "Feedback" },
  { id: "alert", label: "Alert", category: "Feedback" },
  { id: "inputs", label: "Inputs", category: "Forms" },
  { id: "switch", label: "Switch", category: "Forms" },
  { id: "checkbox", label: "Checkbox", category: "Forms" },
  { id: "radio", label: "Radio", category: "Forms" },
  { id: "slider", label: "Slider", category: "Forms" },
  { id: "text-animations", label: "Text Animations", category: "Animations" },
  { id: "ui-components", label: "UI Components", category: "Components" },
  { id: "chip", label: "Chip", category: "Components" },
  { id: "breadcrumb", label: "Breadcrumb", category: "Components" },
  { id: "dropdown", label: "Dropdown", category: "Components" },
  { id: "pagination", label: "Pagination", category: "Components" },
  { id: "timeline", label: "Timeline", category: "Components" },
  { id: "modern-components", label: "Modern Components", category: "Trending" },
  { id: "carousel", label: "Carousel", category: "Media" },
  { id: "date-picker", label: "DatePicker", category: "Forms" },
  { id: "file-upload", label: "FileUpload", category: "Forms" },
  { id: "rating-progress", label: "Rating & Progress", category: "Feedback" },
  { id: "color-picker", label: "ColorPicker", category: "Tools" },
  { id: "toggle-stepper", label: "Toggle & Stepper", category: "Forms" },
  { id: "trending-components", label: "Trending Components", category: "Trending" },
  { id: "animation-components", label: "Animation Components", category: "Animations" },
  { id: "attractive-components", label: "Attractive Components", category: "UX" },
  { id: "new-components", label: "New Components", category: "New" },
  { id: "curved-loop", label: "Curved Loop", category: "Animations" },
  { id: "falling-text", label: "Falling Text", category: "Animations" },
  { id: "threads", label: "Threads", category: "Backgrounds" },
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
            {currentPage === "accordion" && <AccordionPage />}
            {currentPage === "tabs" && <TabsPage />}
            {currentPage === "divider" && <DividerPage />}
            {currentPage === "animated-buttons" && <AnimatedButtonsPage />}
            {currentPage === "animated-cards" && <AnimatedCardsPage />}
            {currentPage === "stats-card" && <StatsCardPage />}
            {currentPage === "loaders" && <LoadersPage />}
            {currentPage === "alert" && <AlertPage />}
            {currentPage === "inputs" && <InputsPage />}
            {currentPage === "switch" && <SwitchPage />}
            {currentPage === "checkbox" && <CheckboxPage />}
            {currentPage === "radio" && <RadioPage />}
            {currentPage === "slider" && <SliderPage />}
            {currentPage === "text-animations" && <TextAnimationsPage />}
            {currentPage === "ui-components" && <UIComponentsPage />}
            {currentPage === "chip" && <ChipPage />}
            {currentPage === "breadcrumb" && <BreadcrumbPage />}
            {currentPage === "dropdown" && <DropdownPage />}
            {currentPage === "pagination" && <PaginationPage />}
            {currentPage === "timeline" && <TimelinePage />}
            {currentPage === "modern-components" && <ModernComponentsPage />}
            {currentPage === "carousel" && <CarouselPage />}
            {currentPage === "date-picker" && <DatePickerPage />}
            {currentPage === "file-upload" && <FileUploadPage />}
            {currentPage === "rating-progress" && <RatingProgressPage />}
            {currentPage === "color-picker" && <ColorPickerPage />}
            {currentPage === "toggle-stepper" && <ToggleStepperPage />}
            {currentPage === "trending-components" && <TrendingComponentsPage />}
            {currentPage === "animation-components" && <AnimationComponentsPage />}
            {currentPage === "attractive-components" && <AttractiveComponentsPage />}
            {currentPage === "new-components" && <NewComponentsPage />}
            {currentPage === "curved-loop" && <CurvedLoopPage />}
            {currentPage === "falling-text" && <FallingTextPage />}
            {currentPage === "threads" && <ThreadsPage />}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
