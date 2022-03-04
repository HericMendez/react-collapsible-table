import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";

import { Table } from "react-bootstrap";
import {
  BsFillTrashFill,
  BsFillPencilFill,
  BsPatchPlusFill,
} from "react-icons/bs";

import "bootstrap/dist/css/bootstrap.min.css";
import fakedata from "./fakedata";
import Collapsible from "./Collapsible";
import { Button } from "bootstrap";

const Tabela = () => {
  let enderecoData = [];
  let foneData = [];
  const [clientes, setClientes] = useState([]);
  const [enderecos, setEndereco] = useState([]);

  useEffect(() => {
    setClientes(fakedata);
  }, []);

  fakedata.forEach((data, index) => {
    /// console.log("data ",index,": ", data.endereco.length)
    for (var i = 0; i < data.endereco.length; i++) {
      console.log(
        `Data ${index} - Endereço ${i}: ${data.endereco[i].rua}, Length: ${data.endereco.length}`
      );
      enderecoData.push(data.endereco[i]);
    }
    for (var j = 0; j < data.telefone.length; j++) {
      console.log(
        `Data ${index} - Telefone ${j}: ${data.telefone[j].numero_telefone}, Length: ${data.telefone.length}`
      );
    }
  });
  //console.log("fonedata: ",foneData);
  //
  //console.log("clientdata: ", clientes[0].telefone[0].numero_telefone)

  return (
    <div className="container border mt-5 p-2">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome </th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>
          <>
            {clientes.length > 0 ? (
              clientes.map((cliente, index) => (
                <>
                  <Collapsible
                    header={
                      <>
                        <td>{index + 1}</td>
                        <td>
                          <BsFillPencilFill />{`\u00A0`}
                          <BsFillTrashFill />
                          {`\u00A0 \u00A0`}
                          {cliente.nome}
                        </td>
                        <td>{cliente.cpf}</td>
                      </>
                    }
                  >
                    <>
                      {
                        <tr>
                          <td></td>
                          <td>
                            {cliente.endereco
                              ? cliente.endereco.map((data, indexB) => (
                                  <>
                                    <tr>
                                      {data.principal ? (
                                        <>
                                          <BsFillPencilFill /> {`\u00A0`}
                                          <BsFillTrashFill />
                                          {`\u00A0`}
                                          <strong>
                                            {" "}
                                            <tr>Endereço Principal:</tr>
                                          </strong>
                                          <tr>
                                            {data.rua} - {data.cidade} -{" "}
                                            {data.estado}
                                          </tr>
                                        </>
                                      ) : (
                                        <>
                                          <BsFillPencilFill /> {`\u00A0`}
                                          <BsFillTrashFill />
                                          {`\u00A0`}
                                          <strong>
                                            {" "}
                                            <tr>Endereço {indexB + 1}: </tr>
                                          </strong>
                                          <tr>
                                            {data.rua} - 
                                            {data.cidade} - 
                                            {data.estado}
                                          </tr>
                                        </>
                                      )}
                                    </tr>

                                    <hr />
                                  </>
                                ))
                              : <> <tr> Nenhum Endereço </tr><hr /></>}
                            <button>Novo Endereço</button>
                          </td>

                          <td>
                            {cliente.telefone
                              ? cliente.telefone.map((data, indexC) => (
                                  <>
                                    <tr>
                                      <strong>{`Telefone ${
                                        indexC + 1
                                      }: \u00A0`}</strong>
                                      <BsFillPencilFill />
                                      {`\u00A0`}
                                      <BsFillTrashFill />
                                    </tr>
                                    <tr>{data.numero_telefone}</tr>

                                    <hr />
                                  </>
                                )) :<> <tr> Nenhum telefone </tr><hr /></>}
                                
                             
                            <button>Novo Telefone</button>
                          </td>
                        </tr>
                      }
                    </>
                  </Collapsible>
                </>
              ))
            ) : (
              <tr>
                <td colSpan={3}>Nenhum usuário cadastrado!</td>
              </tr>
            )}
          </>
        </tbody>
      </Table>
    </div>
  );
};

export default Tabela;
/*



                    <tr
                        style={{backgroundColor: "#ccc"}}
                        onClick={() => setIsopen(!isOpen)}
                    >
                        <td>2</td>
                        <td>José Placeholder</td>
                        <td>123456789-00</td>
                        <td>Rua 7 de Setembro, nº1500 - Centro - Matão/SP</td>

                        <td>(16)99999-9999</td>

                    </tr>
                    {isOpen && <>{
                        <><tr>
                        <td>2.1</td>
                        <td>-</td>
                        <td>-</td>
                        <td>Rua A, nª111 - Bairro Undefined</td>
                        
                        <td>(11)22222-2222</td>
                    </>
                    </tr>
                    <tr>
                        <td>2.2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>a</td>
                        <td>b</td>

                    </tr>
                    

                    }</>}

                    
  
  
 
 */
