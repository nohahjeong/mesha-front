import { BrowserRouter as Browser, Switch, Route } from 'react-router-dom';
import RegistrationPage from '../pages/RegistrationPage';
import ListPage from '../pages/ListPage';
import RegistrationValidationPage from '../pages/RegistrationValidationPage';

const Router = () => {
    return (
        <Browser>
            <Switch>
                <Route exact path='/NOMEDOCOLABORADOR/registrar'>
                    <RegistrationPage />
                </Route>

                <Route exact path='/registros'>
                    <ListPage />
                </Route>

                <Route exact path='/NOMEDOCOLABORADOR/validar'>
                    <RegistrationValidationPage />
                </Route>
            </Switch>
        </Browser>
    )
};

export default Router;