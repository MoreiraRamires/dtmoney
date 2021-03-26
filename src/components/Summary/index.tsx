import { Container } from "./styles";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import React,{useContext} from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary(){
  const {transactions} =  useContext(TransactionsContext); 

const summary= transactions.reduce((acc, transaction) => {
  if(transaction.type ==="deposit") {
    acc.deposits += transaction.amount;
    acc.total += transaction.amount;
  }else{
  acc.withdraw += transaction.amount;
  acc.total -= transaction.amount;
  }
  return acc;
  }, {
  deposits:0,
  withdraw:0,
  total:0,
  })

  return(
   <Container>
     <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"/>
        </header>
        <strong> {summary.deposits}</strong>
     </div>

     <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas"/>
        </header>
        <strong> -{summary.withdraw}</strong>
     </div>

     <div>
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong> {summary.total}</strong>
     </div>

     
   </Container>
  )
}