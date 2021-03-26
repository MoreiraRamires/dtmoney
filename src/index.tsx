import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from "miragejs"
import App from './App';

createServer({

  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
      {
        id:1,
        title: "Aluguel",
        type: "withdraw",
        category:"Despesas Fixas",
        amount:3500,
        createdAt:new Date("2021-02-15 09:00:00" ),
      },
      {
        id:2,
        title: "Dividendos",
        type: "deposit",
        category:"Ativos Bolsa",
        amount:500,
        createdAt:new Date("2021-03-01 14:00:00" ),
      },
    ],
  })
  },

  routes(){
    this.namespace="api";
    this.get("/transactions",()=>{
      return this.schema.all("transaction")
    })
    this.post('/transactions', (schema , request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create("transaction",data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);