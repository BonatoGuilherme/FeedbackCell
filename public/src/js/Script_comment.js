// Recupera os dados do celular do localStorage
const celular = JSON.parse(localStorage.getItem('celularComentario'));

if (celular) {
    // Exibe a descrição
    document.getElementById('nome-celular').textContent = celular.descricao;
    // Exibe a imagem
    document.getElementById('imagem-celular').innerHTML = `<img src="${celular.imagem}" alt="${celular.descricao}"
        width="350px" style="border-radius: 16px; background-color: white;">`;

    //Cria uma tabela de comentários
    const comentariosDiv = document.createElement('div');
    comentariosDiv.innerHTML = `
        <table style="width:400px;margin-top:20px;border-collapse:collapse;border-radius:5px;background-color:#f3f6fa;">
            <thead>
                <tr>
                    <th style="text-align:left;padding:4px;border-bottom:1px solid #ccc;">Comentários</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding:5px; color:#888;">Nenhum Comentário.</td>
                </tr>
            </tbody>
        </table>
    `;
    // Insere a tabela antes do formulário
    const container = document.querySelector('.container');
    const form = container.querySelector('form');
    container.insertBefore(comentariosDiv, form);
}
