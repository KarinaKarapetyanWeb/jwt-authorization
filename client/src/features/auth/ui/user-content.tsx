import { Button, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import {
  logOutUser,
  selectCurrentToken,
  selectCurrentUser,
} from "../../../shared";

import { useLogoutMutation } from "../api/auth-api";

// TODO: check if one feature can include another
import { UsersList } from "../../users";
import { useGetUsersMutation } from "../../users";

interface UserContentProps {}

const UserContent: React.FunctionComponent<UserContentProps> = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  const [getUsers, { isLoading: isUsersLoading, data }] = useGetUsersMutation();
  const [logOut] = useLogoutMutation();

  const welcome = user ? `Welcome ${user.email}!` : "Welcome!";
  const tokenAbbr = `${token.slice(0, 9)}...`;

  const handleLogOutBtnClick = () => {
    logOut();
    localStorage.removeItem("token");
    logOutUser();
  };

  const handleGetUsersBtnClick = () => getUsers();

  const content = (
    <section>
      <Typography.Title level={2} style={{ margin: 0 }}>
        {welcome}
      </Typography.Title>
      <Typography.Paragraph>
        {user.isActivated
          ? "Аккаунт подтвержден по почте"
          : "ПОДТВЕРДИТЕ АККАУНТ!!!!"}
      </Typography.Paragraph>
      <Typography.Paragraph>Token: {tokenAbbr}</Typography.Paragraph>
      <Button onClick={handleLogOutBtnClick}>Выйти</Button>
      <Button onClick={handleGetUsersBtnClick}>Get users</Button>
      {data && <UsersList users={data || []} />}
    </section>
  );

  return content;
};

export default UserContent;
