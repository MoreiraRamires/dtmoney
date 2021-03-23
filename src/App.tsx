import React, { useState } from 'react';
import {GlobalStyle} from '../src/styles/global'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransacationModal';
import Modal from 'react-modal';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

   function handleOpenNewTransactionModal() {
    setIsTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsTransactionModalOpen(false);
  }

  
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
       />

      <GlobalStyle/>
    </>
  );
}

export default App

// use o export ao inves de export default por dois motivos - Chappter 2 - Estrutura de Aplicacao - aula 02
// Segurança , evita erros durante a nomeacao
