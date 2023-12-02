import { fetchUserProfile, fetchUsers } from "@lib/data"

export default async function Page() {
  const user = await fetchUserProfile(1);
  return (
    <div>
      <h1>Hello {user['first_name']}</h1>
      <h3>Points balance: {user['running_points_total']}</h3>
    </div>
  )
}
