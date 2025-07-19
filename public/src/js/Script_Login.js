// Seleciona o formulário de login pelo id
const loginForm = document.getElementById('form-login');
// Adiciona um listener para o evento de submit do formulário
loginForm.addEventListener('submit', function(event){
    event.preventDefault(); // Impede o envio padrão do formulário (recarregar a página)
    // Coleta os dados dos campos de email e senha
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    // Envia os dados para o servidor usando fetch (requisição POST para /usuarios/login)
    fetch('/usuarios/login', {
        method: 'POST', // Método HTTP POST
        headers: {
            'content-type' : 'application/json' // Informa que o corpo da requisição está em JSON
        },
        body: JSON.stringify({email: email,senha: senha}) // Converte os dados para JSON
    })
    // Converte a resposta do servidor para JSON
    .then(res => res.json())
    // Trata a resposta recebida do backend
    .then(data => {
        if (data.error){ // Se houver erro, mostra um alerta com a mensagem
            alert(data.error);
        } else if (data.success){ // Se o login for bem-sucedido, redireciona para a página principal
            window.location.href = '/index';
        }
    })
    // Trata erros de conexão ou outros problemas
    .catch(error => {
        console.error('Erro ao realizar login:', error);
        alert('Erro ao realizar login. Tente novamente mais tarde.');
    });
})