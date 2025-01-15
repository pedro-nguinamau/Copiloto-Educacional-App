import React from "react"
type MessageProps = {
    message: string
}

const PropsComponent: React.FC<MessageProps> = ({ message }) => {
    return(
        <>{message}</>
    )
}

export default PropsComponent