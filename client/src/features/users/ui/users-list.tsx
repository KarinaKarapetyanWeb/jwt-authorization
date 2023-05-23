import { IUser } from "../../../shared";

interface UsersListProps {
  users: IUser[];
}

const UsersList: React.FunctionComponent<UsersListProps> = ({ users }) => {
  return (
    <section className="users">
      <h1>Users List</h1>
      <ul>
        {users.map((user: IUser, i: number) => {
          return <li key={i}>{user.email}</li>;
        })}
      </ul>
    </section>
  );
};

export default UsersList;
