import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import '../assets/css/signUp.css'


// Definindo o schema de validação com Zod
const formSchema = z.object({
  nomeCompleto: z.string().min(1, 'O nome é obrigatório'),
  email: z.string().email('Digite um email válido'),
  password: z.string().min(5, { message: "Pelo Menos 5 caracteres" }),
  classeId: z.coerce.number({ message: "Selecione a Sua Classe" }), // Alterado para `z.number()`
  cursoId: z.coerce.number({ message: "Selecione o Seu Curso"}), // Alterado para `z.number()`
});

// Tipagem com base no schema Zod
type FormData = z.infer<typeof formSchema>;


const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      // Enviando os dados para a API
      const response = await axios.post(
        'http://127.0.0.1:3333/user',
        data, // Enviando o objeto com os dados do formulário
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const { id } = response.data;

      navigate(`/profile/${id}`);
    
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <div className='sigin-content'>
    <div className="container">
    <img src="sglg.png" alt="Logo" className="logo" />
    <div className="form-container">
      <h1>Criar Conta!</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="nomeCompleto">Nome</label>
          <input
            type="text"
            id="nomeCompleto"
            placeholder="Digite seu nome"
            {...register('nomeCompleto')}
          />
          {errors.nomeCompleto && <span>{errors.nomeCompleto.message}</span>}

          <label htmlFor="classeId">Classe</label>
          <select id="classeId" {...register('classeId')}>
            <option value="">Selecione uma classe</option>
            <option value={1}>10ª Classe</option>
            <option value={2}>11ª Classe</option>
            <option value={3}>12ª Classe</option>
          </select>
          {errors.classeId && <span>{errors.classeId.message}</span>}

          <label htmlFor="cursoId">Curso</label>
          <select id="cursoId" {...register('cursoId')}>
            <option value="">Selecione um curso</option>
            <option value={1}>Informática de Gestão</option>
            <option value={2}>Contabilidade e Gestão</option>
            <option value={3}>Gestão de Recursos Humanos</option>
            <option value={4}>Técnico de Finanças</option>
          </select>
          {errors.cursoId && <span>{errors.cursoId.message}</span>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu email"
            {...register('email')}
          />
          {errors.email && <span>{errors.email.message}</span>}

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            {...register('password')}
          />
          {errors.password && <span>{errors.password.message}</span>}
          <Link to='/'>Entrar</Link>

          <button type="submit">Enviar</button>
    </form>

    </div>
    </div>
    </div>
  );
    
};

export { SignUp };
