import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import '../App.css'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Container
} from "@mui/material";


import fakedata from "./fakedata";
import Collapsible from "./Collapsible";

const Tabela = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    setClientes(fakedata);
  }, []);

  return (
    <Container>
      <div classname="upper">
        <Button variant="contained">Novo Cadastro</Button>
      </div>
      
    <TableContainer className="container border mt-5 p-2">
      <Table striped bordered hover>
        <TableHead >
          <TableRow >
            <TableCell className="tableHeader">#</TableCell>
            <TableCell className="tableHeader">Nome </TableCell>

            <TableCell className="tableHeader">CPF</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <>
            {clientes.length > 0 ? (
              clientes.map((cliente, index) => (
                <>
                  <Collapsible
                    header={
                      <>
                        <TableCell className="clientRow">{index + 1}</TableCell>
                        <TableCell className="clientRow">{cliente.nome}<TableRow> <Button 
                                          size="small"
                                          >Alterar</Button>
                                          <Button size="small">Excluir</Button></TableRow></TableCell>
                        <TableCell className="clientRow">{cliente.cpf} <TableRow>{"\u00A0"}</TableRow></TableCell>
                        
                      </>
                    }
                  >
                    <>
                      {
                        <TableRow>
                          <TableCell></TableCell>
                          <TableCell>
                            {cliente.endereco ? (
                              cliente.endereco.map((data, indexB) => (
                                <>
                                  <TableRow>
                                    {data.principal ? (
                                      <>
                                        <strong>
                                          <TableRow>
                                            Endereço Principal:
                                          </TableRow>
                                        </strong>
                                        <TableRow>
                                          {data.rua} - {data.cidade} -{" "}
                                          {data.estado}
                                        </TableRow>
                                        <TableRow>
                                          <Button 
                                          size="small"
                                          >Alterar</Button>
                                          <Button size="small">Excluir</Button>
                                        </TableRow>
                                      </>
                                    ) : (
                                      <>
                                        {`\u00A0`}
                                        <strong>
                                          {" "}
                                          <TableRow>
                                            Endereço {indexB + 1}:{" "}
                                          </TableRow>
                                        </strong>
                                        <TableRow>
                                          {data.rua} -{data.cidade} -
                                          {data.estado}
                                        </TableRow>

                                        <TableRow>
                                          <Button 
                                          size="small"
                                          >Alterar</Button>
                                          <Button size="small">Excluir</Button>
                                        </TableRow>
                                      </>
                                    )}
                                  </TableRow>

                                  <hr />
                                </>
                              ))
                            ) : (
                              <>
                                {" "}
                                <TableRow> Nenhum Endereço </TableRow>
                                <hr />
                              </>
                            )}
                            <Button variant="outlined" size="small">Novo Endereço</Button>
                          </TableCell>

                          <TableCell>
                            {cliente.telefone ? (
                              cliente.telefone.map((data, indexC) => (
                                <>
                                  <TableRow>
                                    <strong>{`Telefone ${
                                      indexC + 1
                                    }: \u00A0`}</strong>
                                  </TableRow>
                                  <TableRow>{data.numero_telefone}</TableRow>
                                  <TableRow>
                                          <Button 
                                          size="small"
                                          >Alterar</Button>
                                          <Button size="small">Excluir</Button>
                                        </TableRow>

                                  <hr />
                                </>
                              ))
                            ) : (
                              <>
                                {" "}
                                <TableRow> Nenhum telefone </TableRow>
                                <hr />
                              </>
                            )}

                            <Button variant="outlined" size="small">Novo Telefone</Button>
                          </TableCell>
                        </TableRow>
                      }
                    </>
                  </Collapsible>
                </>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3}>Nenhum usuário cadastrado!</TableCell>
              </TableRow>
            )}
          </>
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
};

export default Tabela;
