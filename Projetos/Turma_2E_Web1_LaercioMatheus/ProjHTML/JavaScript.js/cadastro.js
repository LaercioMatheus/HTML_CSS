        function cadastrar() {
            var nome = document.getElementById('nome').value;
            var cpf = document.getElementById('cpf').value;
            var email = document.getElementById('email').value;
            var endereco = document.getElementById('endereço').value;
            var cidade = document.getElementById('cidade').value;
            var estado = document.getElementById('estado').value;
            var usuario = document.getElementById('usuario').value;
            var senha = document.getElementById('senha').value;
            var confirmSenha = document.getElementById('confirmSenha').value;


            //Aqui é onde o sistema verifica se foi preenchido os campos
            if (nome.trim() === '') {
                alert('Por favor, preencha o campo Nome.');
                return;
            }
            
            if (!validarCPF(cpf)) {
                alert('CPF inválido. Preencha no formato correto.');
                return;
            }

            if (!validarEmail(email)) {
                alert('E-mail inválido. Preencha no formato correto.');
                return;
            }

            if (endereco.trim() === '') {
                alert('Por favor, preencha o campo Endereço.');
                return;
            }

            if (cidade.trim() === '') {
                alert('Por favor, preencha o campo Cidade.');
                return;
            }

            if (estado.trim() === '') {
                alert('Por favor, selecione um estado.');
                return;
            }

            if (usuario.trim() === '') {
                alert('Por favor, preencha o campo Usuário.');
                return;
            }

            if (senha.trim() === '') {
                alert('Por favor, preencha o campo Senha.');
                return;
            }

            if (senha !== confirmSenha) {
                alert('As senhas não correspondem. Por favor, tente novamente.');
                return;
            }
              alert('Cadastro realizado com sucesso!');
    // Aqui temina essa etapa de verficação
    }

    // Aqui é a parte de validação de 'cpf' e 'email'

        // Onde verifica o cpf
            function validarCPF(cpf) {
                cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
            
                if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
                    return false;
                }
            
                var soma = 0;
                var resto;
            
                for (var i = 1; i <= 9; i++) {
                    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
                }
            
                resto = (soma * 10) % 11;
            
                if (resto === 10 || resto === 11) {
                    resto = 0;
                }
            
                if (resto !== parseInt(cpf.substring(9, 10))) {
                    return false;
                }
            
                soma = 0;
            
                for (var i = 1; i <= 10; i++) {
                    soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
                }
            
                resto = (soma * 10) % 11;
            
                if (resto === 10 || resto === 11) {
                    resto = 0;
                }
            
                if (resto !== parseInt(cpf.substring(10, 11))) {
                    return false;
                }
            
                return true;
            }
            
            // Exemplo de uso
            var cpfValido = validarCPF('123.456.789-09');
            console.log(cpfValido); // Retorna true ou false
                        

        // Onde verifica o email
                // Validação do email
                function validarEmail(email) {
                    // Expressão regular para validar e-mails
                    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                
                    return regexEmail.test(email);
                }
                
                // Exemplo
                var emailValido = validarEmail('usuario@example.com');
                console.log(emailValido); // Retorna true ou false

/*Função para a pesquisa no menu */
        function executarPesquisa() {
            // Adicione aqui a lógica de pesquisa desejada
            alert('Pesquisando...');
        }