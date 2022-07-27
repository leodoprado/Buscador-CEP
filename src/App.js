import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'

import { Container, Title, ContainerInput, Main } from './styles';

import api from './services/api'

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({});

  async function handleSearch() {

    if(input === ''){
      alert("Preencha o CEP!")
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput('');

    } catch {
      alert("Ops: ERRO ao buscar CEP!");
      setInput('');
    }
  }

  return (
    <Container>
      <Title>Buscador de CEP</Title>

      <ContainerInput>
        <input 
        type="text" 
        placeholder="Digite o CEP que deseja buscar..."
        value={input}
        onChange={(e) => setInput(e.target.value) }
        />

        <button onClick={handleSearch}>
          <FiSearch size={25} color='white' />
        </button>
      </ContainerInput>

      {Object.keys(cep).length > 1 && (
        <Main>
          <h2>CEP: {cep.cep}</h2>

          <span>{cep.rua}</span>
          {cep.complemento !== '' && <span>Complemento: {cep.complemento}</span>}
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </Main>
      )};
    </Container>
  );
}

export default App;
