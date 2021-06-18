import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import { useHistory } from 'react-router';
import { goToListPage } from "../../router/coordinator";

const CandidateInfoCard = (props) => {
    const history = useHistory();

    // Formatar a data para ser enviada no banco de dados
    const formatDate = (date) => {
        let month = '' + (date.getMonth() + 1);
        let day = '' + date.getDate();
        let year = date.getFullYear();

        let hours = '' + date.getHours();
        let minutes = '' + date.getMinutes();
        let seconds = '' + date.getSeconds();

        const addZero = (variable) => {
            if (variable.length < 2) {
                variable = '0' + variable
            };
        };

        [month, day, hours, minutes, seconds].forEach(addZero);

        const YMD = [year, month, day].join('-');

        const HMS = [hours, minutes, seconds].join(':');

        return [YMD, HMS].join(' ');
    };

    const onClickValidate = () => {
        const body = {
            validation: 1,
            validationTime: formatDate(new Date())
        };

        axios
            .post(`${BASE_URL}/candidates/validate/${props.cpf}`, body)
            .then((res) => {
                alert(`O registro do candidato ${props.name} foi validado.`)
            })
            .catch((err) => {
                alert(err.message)
            });
    };

    const onClickDoNotValidate = () => {
        const body = {
            validation: 0,
            validationTime: formatDate(new Date())
        };

        axios
            .post(`${BASE_URL}/candidates/validate/${props.cpf}`, body)
            .then((res) => {
                alert(`O registro do candidato ${props.name} NÃO foi validado.`)
            })
            .catch((err) => {
                alert(err.message)
            });
    }

    return (
        <div>
            <button onClick={() => goToListPage(history)}>Voltar</button>

            <p>Nome: {props.name}</p>

            <p>E-mail: {props.email}</p>

            <p>CPF: {props.cpf}</p>

            <p>Celular: {props.phoneNumber}</p>

            <p>Skills: {props.skills}</p>

            <button onClick={onClickValidate}>Validar</button>
            <button onClick={onClickDoNotValidate}>Não validar</button>
        </div>
    );
};

export default CandidateInfoCard;