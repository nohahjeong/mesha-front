const CandidateListItem = (props) => {
    return (
        <li onClick={props.onClick}>
            {props.name} | Status: Validado - Não validado
        </li>
    )
};

export default CandidateListItem;