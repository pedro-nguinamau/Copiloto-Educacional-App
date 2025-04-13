
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../assets/css/chat.css'
import { Messages } from "../components/UI/messages";

import axios from "axios";
import React, { useRef, useState, FormEvent } from "react";

// import { LuArrowBigLeft } from "react-icons/lu";
// import { LuArchive } from "react-icons/lu";
import { IoApps } from "react-icons/io5";
import { LuAlignLeft } from "react-icons/lu";

// const schemaMessage = z.object({
//     conteudo: z.string({ message: 'Informe a questão'})
// })

// type ConteudoData = z.infer<typeof schemaMessage>;
const Chatjs = () => {
    const location = useLocation();
    const nome = location.state?.nome ;
    const id = location.state?.id;
    const chatid = location.state?.chatid;
   const navigate = useNavigate();
 
    const [conteudo, setConteudo] = useState<string>('')

 
   const voltar = () => {
    navigate(`/profile/${id}`)

   }
   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  
  e.preventDefault()
    try {
            const res  = await axios.post('http://127.0.0.1:3333/messages', 
              {
                    chatId: chatid,  // Note a mudança de ChatId para chatId
                    role: 'user',
                    conteudo: conteudo,
                    nomeDisciplina: nome
                
              })

            if(res.status === 200) {
                console.log("OK")
                setConteudo('')
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
          
        

            {/* Conteúdo do Chat */}
            <div className="chat-main">
                {/* Barra Superior Fixa */}
                <div className="chat-header">
                <div className="logo">
                <img id="bar-icon" src="/Camada 2.png" alt="" />
                </div>
                    <h1>Assistente de Disciplina: {nome}</h1>
                    <div className="nav-btn">
                    <button className="sidebar-btn" onClick={() => voltar()}><IoApps  /><span>Menu</span></button>
                    <button className="sidebar-btn"><LuAlignLeft /> <span>Arquivo</span></button>    
                    </div>
                </div>

                {/* Área de Mensagens (com scroll) */}
                <div className="chat-content">
                    <Messages chatid={chatid} /> 
                   
                </div>

                {/* Campo de Mensagem */}
                
                <form onSubmit={handleSubmit} className="form">
                         <div className="elemet-form">
                         <textarea
                         
                            onInput={handleInput}
                            placeholder="Digite sua mensagem..."
                            value={conteudo}
                            onChange={(e) => setConteudo(e.target.value)}

                         
                            />
                            <div>
                               <button type="submit" id="btn-send"><img src="/btn.png" alt="" /></button> 
                            </div>
                         </div>
                    </form>
            
                 
            </div>
        </div>
    );
};

export { Chatjs };
