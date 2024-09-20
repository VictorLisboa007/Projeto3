import { useState } from "react"
import "./Forms.module.css"

const Forms = (props) => {

    //Váriaveis pra guardar o que a pessoa informou no formulário
    const [name, setName] = useState(props ? props.name : "")
    const [email, setEmail] = useState(props ? props.email : "")
    const [desc, setDesc] = useState()
    const [tipo, setTipo] = useState()

    // Previne a página de ser recarregada quando enviar o formulário
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(desc)
        console.log(tipo)
        setName("")
        setEmail("")
        setDesc("")
        setTipo("")
    }

    //Função pra guardar o nome que a pessoa informou no campo "Nome"
    const handleName = (e) => {
        setName(e.target.value)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Forms</h1>
            {/* Input com htlmFor */}
            <label htmlFor="nome"><b>Nome: </b></label>
            <br/>
            <input type="text" id="nome" placeholder="Digite seu nome" onChange={handleName} value={name}/>
            <br/>
            {/* Label envolvendo o input */}
            <label>
                <span><b>Email:</b></span>
                <br/>
                <input type="email" name="email" placeholder="Digite seu email" onChange={(e) => {setEmail(e.target.value)}} value={email}/>
            </label>
                <br/>
            {/* campo textarea */}
            <label>
                <span><b>Descrição:</b></span>
                <textarea name="descricao" placeholder="Se descreva a si próprio mesmo" onChange={(e) => {setDesc(e.target.value)}}  value={desc}></textarea>
            </label>
            <br/>
            <label>
                <span><b>Tipo de Usuário: </b></span>
                <select name="tipoU" onChange={(e) => {setTipo(e.target.value)}} value={tipo}>
                    <option value="user"> Usuário </option>
                    <option value="adm"> Administrador </option>
                    <option value="client"> Cliente </option>
                </select>
            </label>
            <input type="submit" value='Enviar'/>
        </form>
    </div>
  )
}

export default Forms