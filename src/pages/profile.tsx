// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../assets/css/profile.css'; // Importando o arquivo CSS

// import { useNavigate } from 'react-router-dom';

// interface AlunoData {
//   alunoId: number | null,
//   nome: string | null;
//   classe: string | null;
//   curso: string | null;
//   disciplina: { id: number; nome: string }[];
// }

// const Profile: React.FC = () => {
//   const navigate = useNavigate();
//   const { id } = useParams(); // Captura o parâmetro de rota "id"

//   const [stateAluno, setStateAluno] = useState<AlunoData>({
//     alunoId: null,
//     nome: null,
//     classe: null,
//     curso: null,
//     disciplina: [],
//   });
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:3333/user/${id}`);
//         setStateAluno(response.data);
//         setLoading(false);
//         console.log(response);
//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

// //Para Comecar um novo cha sempre que a disciplina e cliada primeiro cramos um novo cha t no banco de dados 
// //Redirecionamos
//   const iniciarChat = async (disciplinaId: number, nome: string) => {
//     const id: number | null = stateAluno.alunoId
//     try {
//       const response = await axios.post("http://127.0.0.1:3333/chat", {
//         alunoId: stateAluno.alunoId,
//         disciplinaId: disciplinaId,
//       });

//       if (response.status === 200) {
//         const chat = response.data;
//         const chatid = chat.id
//         navigate(`/chat/${chat.id}`, {state: { nome, id, chatid}}); // Redireciona para o chat
//       }
//     } catch (error) {
//       console.error("Erro ao iniciar o chat:", error);
//     }
//   };

//   if (loading) return <p>Carregando...</p>;

//   return (
//   <div className='container-profile'>
//         <div className="profile-container">
//         <div className='info'>
//         <h1 className='nome'>Bem-Vindo(a), {stateAluno.nome}</h1>
//         <h2>Classe: {stateAluno.classe}</h2>
//         <h2>Curso: {stateAluno.curso}</h2>
//      </div>
//       <h2>Disciplinas</h2>
      
//        <div className='disciplinas-grid'>
//         {stateAluno.disciplina.map((disciplinas) => (
//             <div 
//               key={disciplinas.id}
//               className='disciplina-card'
//               onClick={() => iniciarChat(disciplinas.id, disciplinas.nome)}
//               style={{ cursor: 'pointer'}}
//               >{disciplinas.nome} </div>
            
//           ))}
//        </div>
//     </div>
//   </div>
//   );
// };

// export default Profile;

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../assets/css/profile.css';
// import { useNavigate } from 'react-router-dom';

// interface AlunoData {
//   alunoId: number | null,
//   nome: string | null;
//   classe: string | null;
//   curso: string | null;
//   disciplina: { id: number; nome: string }[];
// }

// const Profile: React.FC = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [stateAluno, setStateAluno] = useState<AlunoData>({
//     alunoId: null,
//     nome: null,
//     classe: null,
//     curso: null,
//     disciplina: [],
//   });
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:3333/user/${id}`);
//         setStateAluno(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   const iniciarChat = async (disciplinaId: number, nome: string) => {
//     const id: number | null = stateAluno.alunoId;
//     try {
//       const response = await axios.post("http://127.0.0.1:3333/chat", {
//         alunoId: stateAluno.alunoId,
//         disciplinaId: disciplinaId,
//       });

//       if (response.status === 200) {
//         const chat = response.data;
//         const chatid = chat.id;
//         navigate(`/chat/${chat.id}`, {state: { nome, id, chatid }});
//       }
//     } catch (error) {
//       console.error("Erro ao iniciar o chat:", error);
//     }
//   };

//   if (loading) return <div className="loading">Carregando...</div>;

//   return (
//     <div className="profile-moderno">
//       <div className="profile-header">
//         <h1>Bem-vindo, <span>{stateAluno.nome}</span></h1>
//         <div className="profile-info">
//           <p><strong>Classe:</strong> {stateAluno.classe}</p>
//           <p><strong>Curso:</strong> {stateAluno.curso}</p>
//         </div>
//       </div>

//       <div className="disciplinas-container">
//         <h2>Suas Disciplinas</h2>
//         <p className="subtitulo">Clique em uma disciplina para iniciar o chat</p>
        
//         <div className="disciplinas-grid">
//           {stateAluno.disciplina.map((disciplina) => (
//             <div 
//               key={disciplina.id}
//               className="disciplina-card"
//               onClick={() => iniciarChat(disciplina.id, disciplina.nome)}
//             >
//               {disciplina.nome}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../assets/css/profile.css';
// import { useNavigate } from 'react-router-dom';

// interface AlunoData {
//   alunoId: number | null,
//   nome: string | null;
//   classe: string | null;
//   curso: string | null;
//   disciplina: { id: number; nome: string }[];
// }

// const Profile: React.FC = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [stateAluno, setStateAluno] = useState<AlunoData>({
//     alunoId: null,
//     nome: null,
//     classe: null,
//     curso: null,
//     disciplina: [],
//   });
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:3333/user/${id}`);
//         setStateAluno(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   const iniciarChat = async (disciplinaId: number, nome: string) => {
//     const id: number | null = stateAluno.alunoId;
//     try {
//       const response = await axios.post("http://127.0.0.1:3333/chat", {
//         alunoId: stateAluno.alunoId,
//         disciplinaId: disciplinaId,
//       });

//       if (response.status === 200) {
//         const chat = response.data;
//         const chatid = chat.id;
//         navigate(`/chat/${chat.id}`, {state: { nome, id, chatid }});
//       }
//     } catch (error) {
//       console.error("Erro ao iniciar o chat:", error);
//     }
//   };

//   if (loading) return <div className="loading-screen">Carregando...</div>;

//   return (
//     <div className="dark-theme">
//       <div className="profile-container">
//         <header className="profile-header">
//           <h1>Olá, <span>{stateAluno.nome}</span></h1>
//           <div className="user-meta">
//             <div className="meta-item">
//               <span className="meta-label">Classe</span>
//               <span className="meta-value">{stateAluno.classe}</span>
//             </div>
//             <div className="meta-item">
//               <span className="meta-label">Curso</span>
//               <span className="meta-value">{stateAluno.curso}</span>
//             </div>
//           </div>
//         </header>

//         <main className="disciplinas-section">
//           <h2>Disciplinas Disponíveis</h2>
//           <p className="section-description">Selecione uma disciplina para iniciar um chat</p>

//           <div className="disciplinas-grid">
//             {stateAluno.disciplina.map((disciplina) => (
//               <div 
//                 key={disciplina.id}
//                 className="disciplina-card"
//                 onClick={() => iniciarChat(disciplina.id, disciplina.nome)}
//               >
//                 <h3>{disciplina.nome}</h3>
//                 <div className="card-hover-effect">Iniciar Chat</div>
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/profile.css';
import { useNavigate } from 'react-router-dom';

interface AlunoData {
  alunoId: number | null,
  nome: string | null;
  classe: string | null;
  curso: string | null;
  disciplina: { id: number; nome: string }[];
}

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [stateAluno, setStateAluno] = useState<AlunoData>({
    alunoId: null,
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
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const iniciarChat = async (disciplinaId: number, nome: string) => {
    const id: number | null = stateAluno.alunoId;
    try {
      const response = await axios.post("http://127.0.0.1:3333/chat", {
        alunoId: stateAluno.alunoId,
        disciplinaId: disciplinaId,
      });

      if (response.status === 200) {
        const chat = response.data;
        const chatid = chat.id;
        navigate(`/chat/${chat.id}`, {state: { nome, id, chatid }});
      }
    } catch (error) {
      console.error("Erro ao iniciar o chat:", error);
    }
  };

  if (loading) return <div className="loading-screen">Carregando...</div>;

  return (
    <div className="light-theme">
      <div className="profile-container">
        <header className="profile-header">
          <h1>Olá, <span>{stateAluno.nome}</span></h1>
          <div className="user-meta">
            <div className="meta-item">
              <span className="meta-label">Classe</span>
              <span className="meta-value">{stateAluno.classe}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Curso</span>
              <span className="meta-value">{stateAluno.curso}</span>
            </div>
          </div>
        </header>

        <main className="disciplinas-section">
          <h2>Disciplinas Disponíveis</h2>
          <p className="section-description">Selecione uma disciplina para iniciar um chat</p>

          <div className="disciplinas-grid">
            {stateAluno.disciplina.map((disciplina) => (
              <div 
                key={disciplina.id}
                className="disciplina-card"
                onClick={() => iniciarChat(disciplina.id, disciplina.nome)}
              >
                <h3>{disciplina.nome}</h3>
                <div className="card-hover-effect">Iniciar Chat →</div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;