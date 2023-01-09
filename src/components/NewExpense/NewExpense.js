import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formHidden, setFormHidden] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormHidden(true);
  };

  const formVisibilityHandler = () => {
    setFormHidden((prevState) => {
      return !prevState;
    });
  };

  if (formHidden) {
    return (
      <div className="new-expense">
        <button onClick={formVisibilityHandler}>Add New Expense</button>
      </div>
    );
  }
  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancelClick={formVisibilityHandler}
      />
    </div>
  );
};

export default NewExpense;
