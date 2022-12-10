import { Container } from './styles';
import { Input } from '../components/Input';
import { ItemRepo } from '../components/ItemRepo';
import { Button } from '../components/Button';

import { api } from '../services/api';

import logo from '../github.png';
import { useState } from 'react';

export const App = () => {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {

    const { data } = await api.get(`repos/${currentRepo}`)

    if (data.id) {

      const isExist = repos.find(repo => repo.id === data.id);

      if (!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }

    }
    alert('Repositório não encontrado')

  }

  const handleRemoveRepo = (id) => {
    const isExist = repos.find(repos => repos.id === id);
    if (isExist) {
      repos.splice(repos.id)
    }
  }

  return (
    <Container>
      <img src={logo} alt="github logo" width={72} height={72} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} key={repo.id} />)}
    </Container>
  );
}

export default App;
