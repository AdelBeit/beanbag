import { fetchUsers } from "@lib/data";

export default async function Page() {
  const users = await fetchUsers();
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>{user.first_name}</li>
        ))}
      </ul>
    </div>
  );
}
