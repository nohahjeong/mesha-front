import { BrowserRouter as Browser, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RegistrationPage from '../pages/RegistrationPage';
import ListPage from '../pages/ListPage';
import ValidationPage from '../pages/ValidationPage';

const Router = () => {
    return (
        <Browser>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>

                <Route exact path='/NOMEDOCOLABORADOR/registrar'>
                    <RegistrationPage />
                </Route>

                <Route exact path='/registros'>
                    <ListPage />
                </Route>

                <Route exact path='/NOMEDOCOLABORADOR/validar/:cpf'>
                    <ValidationPage />
                </Route>
            </Switch>
        </Browser>
    )
};

export default Router;