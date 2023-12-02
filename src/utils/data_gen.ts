function generateDummyUsers(numUsers:number) {
  const users = [];
  for (let i = 0; i < numUsers; i++) {
    const phone_number = `555-${Math.floor(100 + Math.random() * 900)}-${Math.floor(1000 + Math.random() * 9000)}`;
    const first_name = `FirstName${i}`;
    const last_name = `LastName${i}`;
    const birthday = `199${Math.floor(Math.random() * 10)}-0${Math.floor(1 + Math.random() * 9)}-0${Math.floor(1 + Math.random() * 9)}`;

    users.push(`('${phone_number}', '${first_name}', '${last_name}', '${birthday}')`);
  }
  return users.join(', ');
}

function generateDummyTransactions(userId:number, numTransactions:number) {
  const transactions = [];
  let runningPointsTotal = 0;

  for (let i = 0; i < numTransactions; i++) {
    const transactionAmount = parseFloat((Math.random() * 100).toFixed(2));
    const pointsUsedEarned = Math.floor(transactionAmount / 10);
    runningPointsTotal += pointsUsedEarned;

    transactions.push(`(${userId}, ${transactionAmount}, ${pointsUsedEarned}, ${runningPointsTotal})`);
  }
  return transactions.join(', ');
}
const dummyUsers = generateDummyUsers(3); // Generate data for 3 users
console.log(dummyUsers);

for(let i=1;i<5;i++){
  let d = generateDummyTransactions(i, 20); // Generate 20 transactions for user with ID 3
  console.log(d);
}