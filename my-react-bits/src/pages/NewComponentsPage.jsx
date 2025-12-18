import { PricingCard } from "../components/PricingCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { FeatureCard } from "../components/FeatureCard";
import { Typography, Space, Card, Button, Divider } from "antd";
import { useState } from "react";

const { Title, Paragraph, Text } = Typography;

const pricingCardExampleCode = `import { PricingCard } from "./components/PricingCard";

export function Example() {
  return (
    <PricingCard
      title="Pro"
      price="$19"
      period="/month"
      features={[
        "20 Projects",
        "20GB Storage",
        "Priority Support",
        "24/7 Support"
      ]}
      buttonText="Get Started"
      popular
    />
  );
}`;

const testimonialCardExampleCode = `import { TestimonialCard } from "./components/TestimonialCard";

export function Example() {
  return (
    <TestimonialCard
      quote="This product has completely transformed our workflow. The attention to detail and user experience is unmatched."
      author="Sarah Johnson"
      title="CEO, TechCorp"
      rating={5}
    />
  );
}`;

const featureCardExampleCode = `import { FeatureCard } from "./components/FeatureCard";

export function Example() {
  return (
    <FeatureCard
      icon="🚀"
      title="Fast Performance"
      description="Our platform is optimized for speed and efficiency, ensuring smooth performance even with large datasets."
    />
  );
}`;

export const NewComponentsPage = () => {
  const [activeTab, setActiveTab] = useState("pricing");

  return (
    <div style={{
      background: "linear-gradient(180deg, #0a0b1e 0%, #1a1b2e 100%)",
      minHeight: "100vh",
      padding: "24px 0",
    }}>
      {/* Hero Section */}
      <div style={{
        textAlign: "center",
        padding: "40px 24px",
        color: "white",
      }}>
        <Title level={1} style={{
          color: "white",
          fontSize: 48,
          fontWeight: 700,
          marginBottom: 16,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          🌟 New UI Components
        </Title>

        <Paragraph style={{
          fontSize: 18,
          color: "#a1a1aa",
          maxWidth: 800,
          margin: "0 auto 24px",
        }}>
          Discover our latest collection of modern, attractive, and highly functional UI components
          designed to elevate your web applications with stunning visuals and smooth interactions.
        </Paragraph>

        {/* Navigation Tabs */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          flexWrap: "wrap",
          marginBottom: 40,
        }}>
          {["pricing", "testimonial", "feature"].map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: activeTab === tab
                  ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                  : "rgba(255, 255, 255, 0.1)",
                color: "white",
                border: "none",
                padding: "12px 24px",
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 24,
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: activeTab === tab
                  ? "0 4px 12px rgba(102, 126, 234, 0.4)"
                  : "none",
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab) {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.2)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab) {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Cards
            </Button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 24px",
      }}>
        {/* Pricing Card Section */}
        {activeTab === "pricing" && (
          <div style={{
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: 24,
            padding: 32,
            marginBottom: 40,
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24,
              flexWrap: "wrap",
              gap: 16,
            }}>
              <div>
                <Title level={2} style={{
                  color: "white",
                  margin: 0,
                  fontSize: 32,
                }}>
                  💰 Pricing Cards
                </Title>
                <Text style={{ color: "#a1a1aa", fontSize: 16 }}>
                  Beautiful pricing cards with gradient designs and interactive elements
                </Text>
              </div>

              <Button
                type="primary"
                style={{
                  background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  border: "none",
                }}
              >
                View Code
              </Button>
            </div>

            <Divider style={{ background: "rgba(255, 255, 255, 0.1)", margin: "24px 0" }} />

            {/* Pricing Cards Demo */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              marginBottom: 32,
            }}>
              <PricingCard
                title="Basic"
                price="$9"
                period="/month"
                features={[
                  "10 Projects",
                  "5GB Storage",
                  "Basic Support",
                  "Email Support"
                ]}
                buttonText="Get Started"
                gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              />

              <PricingCard
                title="Pro"
                price="$19"
                period="/month"
                features={[
                  "20 Projects",
                  "20GB Storage",
                  "Priority Support",
                  "24/7 Support"
                ]}
                buttonText="Get Started"
                popular
                gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
              />

              <PricingCard
                title="Enterprise"
                price="$49"
                period="/month"
                features={[
                  "Unlimited Projects",
                  "100GB Storage",
                  "Dedicated Support",
                  "Advanced Analytics"
                ]}
                buttonText="Contact Sales"
                gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
              />
            </div>

            {/* Code Example */}
            <Card style={{
              background: "#0a0b1e",
              border: "1px solid #1f2937",
              borderRadius: 16,
              overflow: "hidden",
            }}>
              <pre style={{
                background: '#0a0b1e',
                padding: 24,
                borderRadius: 8,
                overflow: 'auto',
                margin: 0,
                color: '#e5e7eb',
                fontSize: 14,
              }}>
                <code style={{ color: '#e5e7eb', fontSize: 14 }}>{pricingCardExampleCode}</code>
              </pre>
            </Card>
          </div>
        )}

        {/* Testimonial Card Section */}
        {activeTab === "testimonial" && (
          <div style={{
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: 24,
            padding: 32,
            marginBottom: 40,
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24,
              flexWrap: "wrap",
              gap: 16,
            }}>
              <div>
                <Title level={2} style={{
                  color: "white",
                  margin: 0,
                  fontSize: 32,
                }}>
                  🗣️ Testimonial Cards
                </Title>
                <Text style={{ color: "#a1a1aa", fontSize: 16 }}>
                  Elegant testimonial cards with ratings and author information
                </Text>
              </div>

              <Button
                type="primary"
                style={{
                  background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  border: "none",
                }}
              >
                View Code
              </Button>
            </div>

            <Divider style={{ background: "rgba(255, 255, 255, 0.1)", margin: "24px 0" }} />

            {/* Testimonial Cards Demo */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
              marginBottom: 32,
            }}>
              <TestimonialCard
                quote="This product has completely transformed our workflow. The attention to detail and user experience is unmatched."
                author="Sarah Johnson"
                title="CEO, TechCorp"
                rating={5}
                gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              />

              <TestimonialCard
                quote="The best investment we made this year. Our team productivity increased by 40% after implementing this solution."
                author="Michael Chen"
                title="CTO, Innovate Inc"
                rating={4}
                gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
              />

              <TestimonialCard
                quote="Excellent customer support and regular updates. The platform keeps getting better with each release."
                author="Emily Rodriguez"
                title="Product Manager, Startup Co"
                rating={5}
                gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
              />
            </div>

            {/* Code Example */}
            <Card style={{
              background: "#0a0b1e",
              border: "1px solid #1f2937",
              borderRadius: 16,
              overflow: "hidden",
            }}>
              <pre style={{
                background: '#0a0b1e',
                padding: 24,
                borderRadius: 8,
                overflow: 'auto',
                margin: 0,
                color: '#e5e7eb',
                fontSize: 14,
              }}>
                <code style={{ color: '#e5e7eb', fontSize: 14 }}>{testimonialCardExampleCode}</code>
              </pre>
            </Card>
          </div>
        )}

        {/* Feature Card Section */}
        {activeTab === "feature" && (
          <div style={{
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: 24,
            padding: 32,
            marginBottom: 40,
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24,
              flexWrap: "wrap",
              gap: 16,
            }}>
              <div>
                <Title level={2} style={{
                  color: "white",
                  margin: 0,
                  fontSize: 32,
                }}>
                  ⚡ Feature Cards
                </Title>
                <Text style={{ color: "#a1a1aa", fontSize: 16 }}>
                  Clean and modern feature cards with icons and descriptions
                </Text>
              </div>

              <Button
                type="primary"
                style={{
                  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  border: "none",
                }}
              >
                View Code
              </Button>
            </div>

            <Divider style={{ background: "rgba(255, 255, 255, 0.1)", margin: "24px 0" }} />

            {/* Feature Cards Demo */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
              marginBottom: 32,
            }}>
              <FeatureCard
                icon="🚀"
                title="Fast Performance"
                description="Our platform is optimized for speed and efficiency, ensuring smooth performance even with large datasets."
                gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              />

              <FeatureCard
                icon="🔒"
                title="Secure"
                description="Enterprise-grade security with end-to-end encryption and regular security audits."
                gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
              />

              <FeatureCard
                icon="💡"
                title="Intelligent"
                description="AI-powered features that learn and adapt to your workflow for maximum productivity."
                gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
              />
            </div>

            {/* Code Example */}
            <Card style={{
              background: "#0a0b1e",
              border: "1px solid #1f2937",
              borderRadius: 16,
              overflow: "hidden",
            }}>
              <pre style={{
                background: '#0a0b1e',
                padding: 24,
                borderRadius: 8,
                overflow: 'auto',
                margin: 0,
                color: '#e5e7eb',
                fontSize: 14,
              }}>
                <code style={{ color: '#e5e7eb', fontSize: 14 }}>{featureCardExampleCode}</code>
              </pre>
            </Card>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{
        textAlign: "center",
        padding: "40px 24px",
        color: "#a1a1aa",
        fontSize: 14,
      }}>
        <Text style={{ color: "#6b7280" }}>
          © {new Date().getFullYear()} My React Bits. All rights reserved.
        </Text>
      </div>
    </div>
  );
};