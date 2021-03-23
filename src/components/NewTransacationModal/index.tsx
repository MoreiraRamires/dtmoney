     
import Modal from 'react-modal';
import { Container, ControllerTransaction } from './styles';
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useState } from 'react';
interface NewTransactionModalProps{
  isOpen:boolean;
  onRequestClose: ()=>void;
}
export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){
const [type, setType] = useState("deposit")

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
        />
        <input 
          type='number'
          placeholder="Valor"
        />

        <ControllerTransaction>
          <button
           type="button"
           onClick={()=>{setType("deposit")}}>
            <span>Entrada</span>
            <img src={incomeImg} alt=""/>
          </button>
          <button
            type="button"
            onClick={()=>{setType("withdraw")}}
          >
            <span>Saída</span>
            <img src={outcomeImg} alt=""/>
          </button>
        </ControllerTransaction>

        <input 
          placeholder="Categoria"
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
        
        