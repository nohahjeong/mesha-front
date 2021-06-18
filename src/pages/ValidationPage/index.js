import { useParams } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/url';
import CandidateInfoCard from '../../components/CandidateInfoCard';

const ValidationPage = () => {
    const candidateCpf = useParams();

    const candidate = useRequestData(`${BASE_URL}/candidates/getCandidate/${candidateCpf.cpf}`, []);

    return (
        <div>
            {candidate.length > 0 ? <CandidateInfoCard {...candidate[0]} /> : 'Carregando'}
        </div>
    );
};

export default ValidationPage;