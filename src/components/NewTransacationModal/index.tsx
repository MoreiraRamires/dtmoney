     
import Modal from 'react-modal';
import { Container, ControllerTransaction, RadioBox } from './styles';
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import React, { FormEvent, useState} from 'react';
import { useTransactions } from '../../hooks/useTransactions';
interface NewTransactionModalProps{
  isOpen:boolean;
  onRequestClose: ()=>void;
}


export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){

  const {createTransction} = useTransactions();
  const [type, setType] = useState("deposit")
  const [title,setTitle]= useState('')
  const [amount,setAmount]= useState(0)
  const [category,setCategory]= useState('')



  async function handleCreateNewTransaction(event:FormEvent){
    event.preventDefault();
    await createTransction({
      title,
      amount,
      category, 
      type
    })

    setType("deposit");
    setTitle("");
    setAmount(0);
    setCategory("");
    onRequestClose()
  }


  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
       type="button"
       onClick={onRequestClose}
       className="react-close-modal">

        <img src={closeImg} alt="Close" />
      </button>
      <Container>
        <input 
         placeholder="Titulo"
         value={title}
         onChange={event => setTitle(event.target.value)}

        />
        <input 
          type='number'
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <ControllerTransaction>
          <RadioBox
           type="button"
           onClick={()=>{setType("deposit")}}
           isActive={type === "deposit"}
           activeColor="green"
           >

            <span>Entrada</span>
            <img src={incomeImg} alt=""/>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={()=>{setType("withdraw")}}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <span>Saída</span>
            <img src={outcomeImg} alt=""/>
          </RadioBox>
        </ControllerTransaction>

        <input 
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit"
        onClick={handleCreateNewTransaction}
        >Cadastrar</button>
      </Container>
    </Modal>
  )
}
        
        