import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({children})=>{

    const [showModal,setShowModal] = useState(false)
    const [transaction,setTransaction] = useState([])

    function groupExpenses(expenses) {
        const categories = ['Food', 'Entertainment', 'Travel', 'Personal Care', 'Shopping', 'Donations', 'Petrol', 'Other'];
        
        const groupedExpenses = categories.map(category => {
          let amount = 0;
          expenses.forEach(expense => {
            if(expense.category === category) {
              amount += parseInt(expense.amount); 
            }
          });
          return {
            category,
            amount: amount || 0
          };
        });
        
        return groupedExpenses;
      }
      
    return(
        <AppContext.Provider value={{showModal,setShowModal,transaction,setTransaction ,groupExpenses}}>
      {children}
    </AppContext.Provider>
    )
}

//custom hook
const useGobalState = () => {
    return useContext(AppContext);
  };

export { AppProvider, AppContext, useGobalState };
