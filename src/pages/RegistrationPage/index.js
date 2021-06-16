import { useState } from 'react';
// import { useHistory } from 'react-router';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';

const maskPhoneNumber = (value) => {
    return value
        .replace(/\D/g, "") // Substitui qualquer caráctere que não seja número por nada
        .replace(/(\d{2})(\d)/, "($1) $2") // Captura os 2 primeiros dígitos e são colocados entre parênteses. Também é adicionado um espaço com o restante dos números.
        .replace(/(\d{5})(\d)/, "$1-$2") // Captura 5 dígitos e adiciona '-' entre a divisão dos dígitos.
        .replace(/(-\d{4})(\d+?)$/, "$1") // Captura 4 dígitos seguidos de '-' e não deixa ser digitado mais nada.
};

const RegistrationPage = () => {
    // const history = useHistory()
    const [form, onChangeInput] = useForm({
        name: '',
        email: '',
        cpf: ''
    })

    const [phoneNumber, setPhoneNumber] = useState('')

    const [skills, setSkills] = useState({
        git: false,
        react: false,
        php: false,
        nodejs: false,
        devops: false,
        bancoDeDados: false,
        typescript: false
    })

    const onCheckboxChange = (event) => {
        setSkills({ ...skills, [event.target.name]: event.target.checked })
    }

    const onSubmit = (event) => {
        const checkedSkillsCount = Object.values(skills).filter(skill => skill === true).length

        if (phoneNumber && phoneNumber.length < 15) {
            alert('O número de telefone é inválido')
        } else {
            if (checkedSkillsCount >= 1 && checkedSkillsCount <= 3) {
                const body = {
                    name: form.name,
                    email: form.email,
                    cpf: form.cpf,
                    phoneNumber: phoneNumber,
                    skills: JSON.stringify(skills)
                }

                axios
                    .post(`http://localhost:3003/candidates/register`, body)
                    .then((res) => {
                        alert(`Parabéns ${res.data}, sua candidatura foi enviada!`)
                    })
                    .catch((err) => {
                        if (err.message.includes('409')) {
                            alert('CPF já cadastrado!')
                        } else {
                            alert(err.message)
                        }
                    })
                // history.push('/')
            } else {
                alert('Selecione de 1 a 3 conhecimentos.')

            }
        }

        event.preventDefault()
    }

    return (
        <div>
            RegistrationPage
            <form onSubmit={onSubmit}>
                <div>
                    <label>Nome*: </label>
                    <input
                        placeholder='Obrigatório'
                        onChange={onChangeInput}
                        value={form.name}
                        name={'name'}
                        type='text'
                        maxLength='100'
                        required
                    />
                </div>

                <div>
                    <label>E-mail*: </label>
                    <input
                        placeholder='Obrigatório'
                        onChange={onChangeInput}
                        value={form.email}
                        name={'email'}
                        type='email'
                        maxLength='100'
                        required
                    />
                </div>

                <div>
                    <label>CPF*: </label>
                    <input
                        placeholder='Obrigatório'
                        onChange={onChangeInput}
                        value={form.cpf}
                        name={'cpf'}
                        type='text'
                        maxLength='14'
                        pattern='^\d{3}.\d{3}.\d{3}-\d{2}'
                        title='Exemplo: 000.000.000-00'
                        required
                    />
                </div>

                <div>
                    <label>Celular: </label>
                    <input
                        placeholder='Opcional'
                        onChange={(event) => setPhoneNumber(maskPhoneNumber(event.target.value))}
                        value={phoneNumber}
                        name={'phoneNumber'}
                        type='text'
                    />
                </div>

                <div>
                    <label>Conhecimentos*: </label>
                    <label>
                        <input
                            onChange={onCheckboxChange}
                            name={'git'}
                            type='checkbox'
                            checked={skills.git}
                        />
                        Git
                    </label>

                    <label>
                        <input
                            onChange={onCheckboxChange}
                            name={'react'}
                            type='checkbox'
                            checked={skills.react}
                        />
                        React
                    </label>

                    <label>
                        <input
                            onChange={onCheckboxChange}
                            name={'php'}
                            type='checkbox'
                            checked={skills.php}
                        />
                        PHP
                    </label>

                    <label>
                        <input
                            onChange={onCheckboxChange}
                            name={'nodejs'}
                            type='checkbox'
                            checked={skills.nodejs}
                        />
                        NodeJS
                    </label>

                    <label>
                        <input
                            onChange={onCheckboxChange}
                            name={'devops'}
                            type='checkbox'
                            checked={skills.devops}
                        />
                        DevOps
                    </label>

                    <label>
                        <input
                            onChange={onCheckboxChange}
                            name={'bancoDeDados'}
                            type='checkbox'
                            checked={skills.bancoDeDados}
                        />
                        Banco de Dados
                    </label>

                    <label>
                        <input
                            onChange={onCheckboxChange}
                            name={'typescript'}
                            type='checkbox'
                            checked={skills.typescript}
                        />
                        TypeScript
                    </label>
                </div>

                <button>Registrar</button>
            </form>
        </div>
    )
};

export default RegistrationPage;