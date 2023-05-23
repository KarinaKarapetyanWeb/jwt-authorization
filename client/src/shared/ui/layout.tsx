import { Outlet } from "react-router-dom";
import { Layout as LayoutAntd } from "antd";

const { Header, Content, Footer } = LayoutAntd;

interface LayoutProps {}

const Layout: React.FunctionComponent<LayoutProps> = () => {
  return (
    <LayoutAntd>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      ></Header>
      <Content className="site-layout" style={{ padding: "0 50px" }}>
        <div style={{ padding: 24, minHeight: 380, background: "white" }}>
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </LayoutAntd>
  );
};

export default Layout;
