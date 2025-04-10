
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../assets/css/chat.css'
import { Messages } from "../components/UI/messages";
import { useForm } from "react-hook-form";
import {  z } from "zod";
import axios from "axios";
import { useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

const schemaMessage = z.object({
    conteudo: z.string({ message: 'Informe a questão'})
})

type ConteudoData = z.infer<typeof schemaMessage>;
const Chatjs = () => {
    const location = useLocation();
    const nome = location.state?.nome ;
    const id = location.state?.id;
    const chatid = location.state?.chatid;
   const navigate = useNavigate();
   const textareaRef = useRef<HTMLTextAreaElement | null>(null);

   const { 
    register,
    handleSubmit,

   } = useForm<ConteudoData>({
    resolver: zodResolver(schemaMessage)
   })
 
   const voltar = () => {
    navigate(`/profile/${id}`)

   }
   const onSubmit = async (conteudo: ConteudoData) => {

    try {
            const res  = await axios.post('http://127.0.0.1:3333/messages', 
              {
                
                    chatId: chatid,  // Note a mudança de ChatId para chatId
                    role: 'user',
                    conteudo: conteudo.conteudo,
                    nomeDisciplina: nome
                
               
              })

            if(res.status === 200) {
                console.log("OK")
            }

        } catch (error) {
            console.error("Erro :", error);
        }
   }
   
   
  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };


    return (
        <div className="chat-container">
            {/* Barra Lateral */}
            <aside className="sidebar">
                <h2>Opções</h2>
                <button className="sidebar-btn" onClick={() => voltar()}>Ir para o Menu</button>
                <button className="sidebar-btn">Ver Mensagens</button>              
            </aside>

            {/* Conteúdo do Chat */}
            <div className="chat-main">
                {/* Barra Superior Fixa */}
                <div className="chat-header">
                    <h1>Assistente de Disciplina: {nome}</h1>
                </div>

                {/* Área de Mensagens (com scroll) */}
                <div className="chat-content">
                    <Messages chatid={chatid} /> 
                   
                </div>

                {/* Campo de Mensagem */}
                
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                         <div className="elemet-form">
                         <textarea
                         
                            onInput={handleInput}
                            placeholder="Digite sua mensagem..."
                            {...register('conteudo')}

                            ref={(el) => {
                                register("conteudo").ref(el);
                                textareaRef.current = el;
                              }}
                            />
                            <div>
                            <button type="submit">Enviar</button> 
                            </div>
                         </div>
                    </form>
            
                 
            </div>
        </div>
    );
};

export { Chatjs };
