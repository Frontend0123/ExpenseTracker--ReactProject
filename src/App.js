import AddTransaction from './Components/AddTransaction';
import Balance from './Components/Balance';
import Header from './Components/Header';
import IncomeExpense from './Components/IncomeExpense';
import {GlobalProvider }from './Components/Context/GlobalState';
import TransactionList from './Components/TransactionList';



function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
      <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      
      <AddTransaction/>

      </div>
    
    </GlobalProvider>
  );
}

export default App;
