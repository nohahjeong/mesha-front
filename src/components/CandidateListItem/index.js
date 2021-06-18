const CandidateListItem = (props) => {
    let validationStatus;

    switch (props.validation) {
        case 0:
            validationStatus = `Não validado em ${props.validationTime}`
            break;

        case 1:
            validationStatus = `Validado em ${props.validationTime}`
            break;

        default:
            validationStatus = `Indefinido`
            break;
    };

    return (
        <li onClick={props.onClick}>
            {props.name} | Status: {validationStatus}
        </li>
    );
};

export default CandidateListItem;