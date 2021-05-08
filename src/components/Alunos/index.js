
import Nome from "../Nome";
import { useContext } from 'react';
import { UserContext } from '../../contexts/user';

function Alunos() {
  const { qtdAlunos } = useContext(UserContext);

    return (
      <div>
        <h2>Componente Alunos {qtdAlunos}</h2>
        <br/>
        <Nome />
      </div>
    );
  }
  
  export default Alunos;
  