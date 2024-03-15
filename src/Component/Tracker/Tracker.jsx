import { useState, useEffect } from "react";
import styles from "./Tracker.module.css"; 

function App() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseCost, setExpenseCost] = useState(0);

  useEffect(() => {

    fetchBudgetFromAPI();
  }, []);

  const fetchBudgetFromAPI = async () => {
    try {
      const response = await fetch("http://localhost:3000/summary");
      if (!response.ok) {
        throw new Error("Failed to fetch budget data");
      }
      const data = await response.json();
      setBudget(data[0].budget);
    } catch (error) {
      console.error("Error fetching budget:", error);
    }
  };

  const handleAddExpense = () => {
    if (expenseName && expenseCost > 0) {
      const newExpense = {
        name: expenseName,
        cost: parseFloat(expenseCost),
      };
      setExpenses([...expenses, newExpense]);
      setExpenseName("");
      setExpenseCost(0);
    } else {
      alert("Please enter valid expense details.");
    }
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  const calculateTotalSpent = () => {
    return expenses.reduce((total, expense) => total + expense.cost, 0);
  };

  const calculateRemainingBudget = () => {
    return budget - calculateTotalSpent();
  };

  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.trackerSection}>
          <h1 className={styles.header}>Expense Tracker</h1>
          <div className={styles.budgetSection}>
            <div className={styles.budgetItem}>
              <h2>Revenue: &#8377; {budget}</h2>
            </div>
            <div className={styles.spentItem}>
              <h2>Expenditure:  &#8377;{calculateTotalSpent()}</h2>
            </div>
            <div className={styles.profitItem}>
              <h2>Net Income:  &#8377;{calculateRemainingBudget()}</h2>
            </div>
          </div>
          <div className={styles.expenseList}>
            <h2 className={styles.expenseHeading}>Expenses</h2>
            <table className={styles.expenseTable}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Cost</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense, index) => (
                  <tr key={index}>
                    <td>{expense.name}</td>
                    <td> &#8377;{expense.cost}</td>
                    <td>
                      <button onClick={() => handleDeleteExpense(index)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.addExpenseSection}>
          <div className={styles.addExpenseForm}>
            <h1 className={styles.add}>Add Expenses</h1>
            <input
              type="text"
              placeholder="Expense Name"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Expense Cost"
              value={expenseCost}
              onChange={(e) => setExpenseCost(e.target.value)}
            />
            <button onClick={handleAddExpense}>Add Expense</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
