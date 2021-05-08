import { useState } from "react";
import Alunos from "./components/Alunos";
import UserProvider from './contexts/user';

function App() {
  const [nomeAluno, setNomeAluno] = useState('Joao');
  return (
    <UserProvider>
      <div>
        <h1>ESCOLA</h1>
        <hr/>
        <Alunos/> 
      </div>
    </UserProvider>
  );
}

export default App;
