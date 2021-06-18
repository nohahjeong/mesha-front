import { useHistory } from 'react-router-dom';
import { goToRegistrationPage, goToListPage } from '../../router/coordinator';

const HomePage = () => {
    const history = useHistory();

    return (
        <div>
            <h1>Manga Rosa</h1>

            <h2>Área dos usuários</h2>
            <button onClick={() => goToRegistrationPage(history)}>Registrar</button>

            <hr />

            <h2>Área dos administradores</h2>
            <button onClick={() => goToListPage(history)}>Lista</button>
        </div>
    );
};

export default HomePage;