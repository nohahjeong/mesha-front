export const goToHomePage = (history) => {
    history.push(`/`)
};

export const goToRegistrationPage = (history) => {
    history.push(`/NOMEDOCOLABORADOR/registrar`)
};

export const goToListPage = (history) => {
    history.push(`/registros`)
};

export const goToValidationPage = (history, candidate) => {
    history.push(`/NOMEDOCOLABORADOR/validar/${candidate}`)
};