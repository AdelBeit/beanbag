export type User = {
  user_id: number;
  phone_number: string;
  first_name: string;
  last_name: string;
  birthday: Date;
};

export type Transaction = {
  transaction_id: number;
  user_id: number;
  transaction_type: string;
  transaction_date: Date;
  transaction_points: number;
  points_used_earned: number;
  running_points_total: number;
};
