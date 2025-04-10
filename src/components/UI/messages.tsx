import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../assets/css/chat.css'
interface props {
    chatid: number
}
const Messages: React.FC<props>= ({chatid}) => {
  
    interface Messages {
      r: string
      t: string

    }
    const [messages, setMessages] = useState<Messages[]>([])
//Atualizar o conteudo das mensagens automaticamene
    useEffect(() => {
        const  fetchData = async () => {
            try{
                const res = await axios.get(`http://127.0.0.1:3333/messages/${chatid}`)
                setMessages(res.data)
                console.log(messages)
            
            } catch (error) {
                console.error("Error fetching messages:", error)
            }
        }
        fetchData()
    }, [messages])
    return(<>
        {messages.map(( d, index) => {
            return (
               <div className="chat-mm">

                    <div className="assistent-div">
                            {
                                d.r === "assistent" && (
                                    <div className="assistent-message">
                                        <h1 key={index}>{d.t}</h1>
                                    </div>
                                )
                            }
                       </div>

                  <div className="user-div">
                    {
                            d.r === "user" && (
                            <div className="user-message">
                                <h1 key={index}>{d.t}</h1>
                            </div>)
                        }

                  </div>
                   
                
               </div>        
            )

        })}
   
    </>)
 
}

export { Messages }

