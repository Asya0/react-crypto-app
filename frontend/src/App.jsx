// import AppLayout from './components/layout/AppLayout'
// import { CryptoContextProvider } from "./context/crypto-context";
import React from "react";
import { Layout } from "antd";
import AppHeader from "./components/layout/AppHeader";
import AppContent from "./components/layout/AppContent";
import AppSider from "./components/layout/AppSider";

const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};

export default function App() {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
}
