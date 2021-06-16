import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from '../../constants/url';
import CandidateListItem from "../../components/CandidateListItem";
import { useHistory } from 'react-router';
import { goToValidationPage } from "../../router/coordinator";

const ListPage = () => {
    const history = useHistory()

    const candidates = useRequestData(`${BASE_URL}/candidates/getAllCandidates`, [])

    const cadidateCards = candidates.map((candidate) => {
        return (
            <CandidateListItem
                key={candidate.cpf}
                name={candidate.name}
                onClick={() => goToValidationPage(history, candidate.cpf)}
            />
        )
    })

    return (
        <div>
            {candidates.length > 0 ? cadidateCards : 'Carregando'}
        </div>
    )
};

export default ListPage;