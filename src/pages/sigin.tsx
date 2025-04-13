import { useForm } from 'react-hook-form';
import axios from 'axios';
import {  Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import '../assets/css/signUp.css'
import { useState } from 'react';

// Definindo o schema de validação com Zod
const formSchema = z.object({
    email: z.string().email('Digite um email válido'),
    password: z.string().min(4, { message: "Pelo Menos 4 caracteres" }),
   
  });
  
  // Tipagem com base no schema Zod
  type FormData = z.infer<typeof formSchema>;
  
  const SingIN: React.FC = () => {

    const [message, setMessage] = useState('')
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>({
        resolver: zodResolver(formSchema),
      });
      const navigate = useNavigate()
      const onSubmit = async (data: FormData) => {
       try {
        const res = await axios.post(
            'http://127.0.0.1:3333/',  
            data,
            {
                headers: {
                    "Content-Type": 'application/json'
                }
            })

            if(res.status === 200) {
                const {id} = res.data
                navigate(`/profile/${id}`)
            } 
       } catch (error) {
        // Trata erros de requisição
        if (axios.isAxiosError(error)) {
          // Verifica se o erro é do tipo AxiosError
          if (error.response && error.response.status === 400) {
            // Erro 400: Aluno não encontrado
            setMessage('Credenciais inválidas');
          } else {
            // Outros erros de rede ou servidor
            setMessage('Erro ao logar. Tente novamente mais tarde.');
          }
        } else {
          // Erros não relacionados ao Axios
          setMessage('Erro desconhecido');
        }
      }
      }

    return(<>
<div className='sigin-content'>
<div className="container">
    <img src="sglg.png" alt="Logo" className="logo" />
    <div className="form-container">
     <form onSubmit={handleSubmit(onSubmit)}>
     <h1>Criar Conta!</h1>
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
          <Link to='/signUp'>Registrar-me</Link>
          {errors.password && <span>{errors.password.message}</span>}
          <button type="submit" id='btn-ini'>Enviar</button>
     </form>
     {message && <p id='erro'>{message}</p>}
    </div>
    </div>
</div>
    </>)

  }

  export {SingIN}