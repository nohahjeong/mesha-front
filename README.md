# Avaliação técnica FullStack NodeJS - `MESHA` - Front End

## Instruções

### `Script`

Execute o script `'$ npm run start'` para acessar a página `'http://localhost'`.

### `Usuários`

Acessando a área dos usuários com o botão `'Registrar'` da página inicial, o usuário pode mandar seus dados para o registro na página de endereço `'http://localhost/NOMEDOCOLABORADOR/registrar'` ou voltar para a página inicial com o botão `'Voltar'`.

Os campos obrigatórios são:
- Nome => Até 100 caracteres
- E-mail => Até 100 caracteres, com `'@'` necessário
- CPF => Deve ser preenchido no formato `'000.000.000-00'` sendo necessário digitar os caracteres `'.'` e `'-'` e deve ser único para cada usuário registrado
- Conhecimentos => Deve selecionar de 1 a 3 conhecimentos

O campo opcional é:
- Celular => Quando preenchido, deve ser completo. Somente é possível digitar números e o dado é automaticamente formatado para o formato `'(00) 00000-0000'`.

Ao clicar no botão `'Registrar'`, o usuário é notificado do registro e redirecionado para a página inicial, se não, o usuário é notificado sobre os campos que não estão preenchidos corretamente.

### `Administradores`

Acessando a área dos administradores com o botão `'Lista'` da página inicial, o administrador pode acessar e visualizar a lista dos registros ordenados pela ordem alfabética dos nomes na página de endereço `'http://localhost/registros'` e voltar para a página inicial com o botão `'Voltar'`.

A lista de registro pode demorar para ser carregada. Enquanto isso, é dado o aviso 'Carregando'.

Cada registro da lista exibe o nome do usuário e o status de validação do registro bem como a data e hora da validação, podendo este ser:
- Indefinido => Quando o registro ainda não foi validado por um administrador
- Validado => Quando um administrador validou o registro
- Não validado => Quando um administrador não validou o registro

O administrador pode acessar as informações de cada registro clicando neste e sendo direcionado para a página `'http://localhost/NOMEDOCOLABORADOR/validar'`.

Na página de informações do registro, o administrador pode validar ou não o registro através dos botões `'Validar'` e `'Não validar'`, respectivamente, e sendo notificado de tal ação.