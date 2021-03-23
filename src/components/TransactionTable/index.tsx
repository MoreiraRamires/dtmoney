import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";


export function TransactionTable() {
  useEffect(()=>{
    api.get("transactions")
      .then(response=> console.log(response.data))
  },[])

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Desenvolvimento Web
            </td>
            <td className="deposit">R$12000,00</td>
            <td>Desenvolvimento</td>
            <td>20/12/2021</td>
          </tr>

          <tr>
            <td>
              Desenvolvimento Web
            </td>
            <td className="withdraw">R$12000,00</td>
            <td>Desenvolvimento</td>
            <td>20/12/2021</td>
          </tr>
        </tbody>

      </table>
    </Container>
  );
}