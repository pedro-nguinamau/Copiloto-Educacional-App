// import React from 'react';
// import { useParams} from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// interface AlunoData {
//     nome: string | null,
//     classe: string | null,
//     curso: string | null,
//     disciplina: string[]
// }




// const Profile: React.FC = () => {
//   const { id } = useParams(); // Captura o parâmetro de rota "id"

//   const [stateAluno, setSateAluno] = useState<AlunoData>({
//     nome: null,
//     classe: null,
//     curso: null,
//     disciplina: []
// })
// const [ loading, setLoading ] = useState<boolean>(true)

// useEffect(() => {
//     const fetcthData = async() => {
//         try{
//             const response = await axios.get(`http://127.0.0.1:3333/user/${id}`)
//             setSateAluno(response.data)
//             setLoading(false)
//             console.log(response)
//         } catch(error) {
//             console.log(error)
//             setLoading(false)
//         }
//     }

//     fetcthData()

// }, [])

// if (loading) return <p>Carregando...</p>;


//   return (
//     <div>
//         <h1>Bem-Vindo(a)</h1>
//         <h1>{stateAluno?.nome}</h1>
//         <h2>Classe: {stateAluno?.classe}</h2>
//         <h2>Curso: {stateAluno?.curso}</h2>


         
//   <h2>Disciplinas</h2>
//       {stateAluno.disciplina && stateAluno.disciplina.length >= 0 ? (
//         <ul>
//           {stateAluno.disciplina.map((disciplina, index) => (
//             <li key={index}>{disciplina}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>Nenhuma disciplina encontrada.</p>
//       )}


//     </div>
//   );
// };

// export default Profile;

import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/profile.css'; // Importando o arquivo CSS

interface AlunoData {
  nome: string | null;
  classe: string | null;
  curso: string | null;
  disciplina: string[];
}

const Profile: React.FC = () => {
  const { id } = useParams(); // Captura o parâmetro de rota "id"

  const [stateAluno, setStateAluno] = useState<AlunoData>({
    nome: null,
    classe: null,
    curso: null,
    disciplina: [],
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:3333/user/${id}`);
        setStateAluno(response.data);
        setLoading(false);
        console.log(response);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="profile-container">
      <h1>Bem-Vindo(a), {stateAluno.nome}</h1>
      <h2>Classe: {stateAluno.classe}</h2>
      <h2>Curso: {stateAluno.curso}</h2>

      <h2>Disciplinas</h2>
      {stateAluno.disciplina && stateAluno.disciplina.length > 0 ? (
        <div className="disciplinas-grid">
          {stateAluno.disciplina.map((disciplina, index) => (
            <div key={index} className="disciplina-card">
              {disciplina}
            </div>
          ))}
        </div>
      ) : (
        <p>Nenhuma disciplina encontrada.</p>
      )}
    </div>
  );
};

export default Profile;