import { useEffect, useRef, useState } from "react";
import { Button, Form as FormAntd, Input, InputRef, Spin } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useRegistrationMutation } from "../api/auth-api";
import { setCredentials } from "../../../shared/model/shared-store";

interface FormProps {}

const Form: React.FunctionComponent<FormProps> = () => {
  const userRef = useRef<null | InputRef>(null);
  const errRef = useRef<null | HTMLParagraphElement>(null);
  const [user, setUser] = useState("karina_karapetyan@mail.ru");
  const [pwd, setPwd] = useState("123");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading: isLoadingLogin }] = useLoginMutation();
  const [registration, { isLoading: isLoadingRegistration }] =
    useRegistrationMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userRef && userRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleLoginBtnClick = async (e: React.SyntheticEvent) => {
    try {
      const data = await login({ email: user, password: pwd }).unwrap();
      dispatch(setCredentials({ ...data }));
      setUser("");
      setPwd("");
      navigate("/welcome");
    } catch (err: any) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef?.current?.focus();
    }
  };

  const handleRegisterBtnClick = async (e: React.SyntheticEvent) => {
    try {
      const data = await registration({
        email: user,
        password: pwd,
      }).unwrap();
      dispatch(setCredentials({ ...data }));
      setUser("");
      setPwd("");
      navigate("/welcome");
    } catch (err: any) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef?.current?.focus();
    }
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUser(e.target.value);

  const handlePwdInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPwd(e.target.value);

  const isLoading = isLoadingLogin || isLoadingRegistration;

  const content = isLoading ? (
    <Spin />
  ) : (
    <section className="login">
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      <FormAntd style={{ maxWidth: 500 }}>
        <FormAntd.Item label="Username:">
          <Input
            type="text"
            id="username"
            ref={userRef}
            value={user}
            onChange={handleUserInput}
            autoComplete="off"
            required
          />
        </FormAntd.Item>
        <FormAntd.Item label="Password:">
          <Input
            type="password"
            id="password"
            onChange={handlePwdInput}
            value={pwd}
            required
          />
        </FormAntd.Item>
        <Button onClick={handleLoginBtnClick}>Sign In</Button>
        <Button onClick={handleRegisterBtnClick}>Register</Button>
      </FormAntd>
    </section>
  );

  return content;
};

export default Form;
