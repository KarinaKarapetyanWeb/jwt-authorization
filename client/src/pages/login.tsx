import { Typography } from "antd";
import { Form } from "../features/auth";

interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = () => {
  return (
    <section>
      <Typography.Title level={2} style={{ margin: 0 }}>
        Login
      </Typography.Title>
      <Form />
    </section>
  );
};

export default Login;
