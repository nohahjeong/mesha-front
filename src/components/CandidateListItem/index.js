const CandidateListItem = (props) => {
    let validationStatus
    switch (props.validation) {
        case 0:
            validationStatus = 'Não validado'
            break;

        case 1:
            validationStatus = 'Validado'
            break;

        default:
            validationStatus = 'Indefinido'
            break;
    }

    return (
        <li onClick={props.onClick}>
            {props.name} | Status: {validationStatus}
        </li>
    )
};

export default CandidateListItem;