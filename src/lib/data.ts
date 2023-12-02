import {sql} from '@vercel/postgres';
import { unstable_noStore as noStore } from "next/cache";
import { Transaction, User } from "./definitions";

export async function fetchUsers(){
  noStore();
  try{
    const data = await sql<User>`SELECT * FROM users`;
    return data.rows;
  }catch(err){
    console.log("Database Error:",err);
    throw new Error("Failed to fetch users");
  }
}

export async function fetchUserProfile(id:User["user_id"]){
  noStore();
  try{
    const data = await sql<Pick<User, 'first_name'> & Pick<Transaction, 'running_points_total'>>`
    SELECT U.first_name,
       T.running_points_total
    FROM Users U
    JOIN
      (SELECT user_id,
              running_points_total
      FROM Transactions
      WHERE user_id = ${id}
      ORDER BY transaction_date DESC, transaction_id DESC
      LIMIT 1 ) T ON U.user_id = T.user_id
    WHERE U.user_id = ${id}`;
    return data.rows[0];
  } catch(err){
    console.log("Database Error:",err);
    throw new Error("Failed to fetch user profile");
  }
}