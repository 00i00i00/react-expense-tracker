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

  return (
    <div className="new-expense">
      {formHidden && <button onClick={formVisibilityHandler}>Add New Expense</button>}
      {!formHidden && <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancelClick={formVisibilityHandler}
      />}
    </div>
  );
};

export default NewExpense;
