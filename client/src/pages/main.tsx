import { Typography } from "antd";
import { Link } from "react-router-dom";

interface MainProps {}

const Main: React.FunctionComponent<MainProps> = () => {
  return (
    <section>
      <Typography.Title level={2} style={{ margin: 0 }}>
        Main
      </Typography.Title>
      <Link to="/login">Login</Link>
    </section>
  );
};

export default Main;
