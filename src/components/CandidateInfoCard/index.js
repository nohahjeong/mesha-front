const CandidateInfoCard = (props) => {
    return (
        <div>
            <p>Nome: {props.name}</p>
            
            <p>E-mail: {props.email}</p>
            
            <p>CPF: {props.cpf}</p>
            
            <p>Celular: {props.phoneNumber}</p>
            
            <p>Skills: {props.skills}</p>

            <button>Validar</button>
            <button>Não validar</button>
        </div>
    )
};

export default CandidateInfoCard;