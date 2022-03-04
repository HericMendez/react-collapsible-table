

const fakedata = [
  {
    id: "af199bdf-7002-41d6-a083-b6190aedf6f8",
    nome: "José Placeholder",
    cpf: "33344433322",
    endereco: [
      {
        id: "32013c47-28ac-4d8c-850a-19e54360cc34",
        rua: "Rua 7 de Setembro, nº 1045, Centro",
        cidade: "nodata",
        clientId: "af199bdf-7002-41d6-a083-b6190aedf6f8",
        principal: true,
        estado: "São Paulo"
      },
      
      {
        id: "32013c47-28ac-4d8c-850a-19e54360cc34",
        rua: "Rua 6, nº 666, Centro",
        cidade: "Araraquara",
        clientId: "af199bdf-7002-41d6-a083-b6190aedf6f8",
        principal: false,
        estado: "São Paulo"
      },
    ],
    telefone: [
      {
        id: "181e8f73-688d-45ea-8e0f-a073ae29dac7",
        "numero_telefone": "222222",
        clientId: "af199bdf-7002-41d6-a083-b6190aedf6f8"
      },
      {
        id: "422c3d3c-5d14-467b-af3d-fe6d5bf1b5bf",
        "numero_telefone": "0000-0000",
        clientId: "af199bdf-7002-41d6-a083-b6190aedf6f8"
      }
    ]
  },
  {
    id: "47b904c3-efd1-4ee0-a124-2c9029f6320e",
    nome: "Pedro Undefined",
    cpf: "2222123322",
    endereco: [
      {
        id: "7b899532-c682-40d7-9f7c-0fcc65d8c677",
        rua: "Rua Teste, nª undefned",
        cidade: "Testelândia",
        clientId: "47b904c3-efd1-4ee0-a124-2c9029f6320e",
        principal: false,
        estado: "São Paulo"
      }
    ],
    telefone: [
      {
        id: "1a6c4a92-0581-4451-8b90-0f220a34d6fc",
        "numero_telefone": "1234-5678",
        clientId: "47b904c3-efd1-4ee0-a124-2c9029f6320e"
      }
    ]
  },
  {
    id: "c5151e92-e15b-485a-99ca-7fbeda78abe5",
    nome: "Json Object da Silva",
    cpf: "32165499789",
    endereco: [
      {
        id: "c44a9516-f5cc-442f-8058-b6f5dab89623",
        rua: "Rua Stack Overflow, nº NaN",
        cidade: "Cidade Ram",
        clientId: "c5151e92-e15b-485a-99ca-7fbeda78abe5",
        principal: true,
        estado: "São Paulo"
      }
    ],
    telefone: []
  },

  {
    id: "c5151e92-e15b-485a-99ca-7fbeda78abe5",
    nome: "José da Silva",
    cpf: "32165499789",
    endereco: [],
      
    telefone: []
  }
]
 export default fakedata;