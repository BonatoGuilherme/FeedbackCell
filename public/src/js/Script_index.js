fetch('/celulares')
    .then(res => res.json())
    .then(dados => {
        const lista = document.getElementById('lista-celulares');
        dados.forEach(celular => {
            // Cria o elemento do celular
            const celularDiv = document.createElement('div');
            celularDiv.innerHTML = `
                <img src="${celular.imagem}" alt="${celular.descricao}">
                <p>${celular.descricao}</p>
                <div class="button">
                    <button class="like-btn"><img src="/src/IMG/ícones/like.svg" alt="Like"></button>
                    <p class="like-count" id="like${celular.id_celular}">${celular.likes}</p>
                    <button class="deslike-btn"><img src="/src/IMG/ícones/dislike.svg" alt="Dislike"></button>
                    <p class="deslike-count" id="dislike${celular.id_celular}">${celular.deslikes}</p>
                    <button class="comment-btn" data-img="${celular.imagem}">
                        <img src="/src/IMG/ícones/comments.svg" alt="Comment">
                    </button>
                    <p id="coment${celular.id_celular}">0</p>
                </div>
            `;
            // Evento de like
            const likeBtn = celularDiv.querySelector('.like-btn');
            const likeCount = celularDiv.querySelector('.like-count');
            likeBtn.addEventListener('click', () => {
                fetch(`/celulares/${celular.id_celular}/like`, { method: 'POST' })
                    .then(res => res.json())
                    .then(data => {
                        likeCount.textContent = data.likes;
                    });
            });
            // Evento de deslike
            const deslikeBtn = celularDiv.querySelector('.deslike-btn');
            const deslikeCount = celularDiv.querySelector('.deslike-count');
            deslikeBtn.addEventListener('click', () => {
                fetch(`/celulares/${celular.id_celular}/deslike`, { method: 'POST' })
                    .then(res => res.json())
                    .then(data => {
                        deslikeCount.textContent = data.deslikes;
                    });
            });
            // Evento de comentário
            const commentBtn = celularDiv.querySelector('.comment-btn');
            commentBtn.addEventListener('click', () => {
                // Salva os dados do celular no localStorage
                localStorage.setItem('celularComentario', JSON.stringify({
                    descricao: celular.descricao,
                    imagem: celular.imagem
                }));
                // Redireciona para a página de comentários
                window.location.href = '/comment.html';
            });
            lista.appendChild(celularDiv);
        });
        })
    .catch(err => {
        document.getElementById('lista-celulares').innerHTML = 'Erro ao carregar celulares!';
        console.error(err);
    });