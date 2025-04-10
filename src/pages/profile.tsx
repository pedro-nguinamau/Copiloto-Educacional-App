import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/profile.css'; // Importando o arquivo CSS

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
  const { id } = useParams(); // Captura o parâmetro de rota "id"

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
        console.log(response);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

//Para Comecar um novo cha sempre que a disciplina e cliada primeiro cramos um novo cha t no banco de dados 
//Redirecionamos
  const iniciarChat = async (disciplinaId: number, nome: string) => {
    const id: number | null = stateAluno.alunoId
    try {
      const response = await axios.post("http://127.0.0.1:3333/chat", {
        alunoId: stateAluno.alunoId,
        disciplinaId: disciplinaId,
      });

      if (response.status === 200) {
        const chat = response.data;
        const chatid = chat.id
        navigate(`/chat/${chat.id}`, {state: { nome, id, chatid}}); // Redireciona para o chat
      }
    } catch (error) {
      console.error("Erro ao iniciar o chat:", error);
    }
  };

  if (loading) return <p>Carregando...</p>;

  return (
  <div className='container-profile'>
        <div className="profile-container">
        <div className='info'>
        <h1 className='nome'>Bem-Vindo(a), {stateAluno.nome}</h1>
        <h2>Classe: {stateAluno.classe}</h2>
        <h2>Curso: {stateAluno.curso}</h2>
     </div>
      <h2>Disciplinas</h2>
      
       <div className='disciplinas-grid'>
        {stateAluno.disciplina.map((disciplinas) => (
            <div 
              key={disciplinas.id}
              className='disciplina-card'
              onClick={() => iniciarChat(disciplinas.id, disciplinas.nome)}
              style={{ cursor: 'pointer'}}
              >{disciplinas.nome} </div>
            
          ))}
       </div>
    </div>
  </div>
  );
};

export default Profile;

