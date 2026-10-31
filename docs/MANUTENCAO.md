# Manual rápido de manutenção

## Quero mudar o preço de um livro
Abra `conteudo/dados/livros.js`, procure o título e altere `"price": 35` para o novo valor. Não use vírgula decimal no JS: use `29.90`. Salve, commit e faça push para a branch `main`.

## Livro vendido
No mesmo registro, mude `"status": "disponivel"` para `"status": "vendido"`. O botão para adicionar ficará desativado e aparecerá selo VENDIDO.

## Quero a capa original do meu exemplar
1. Fotografe **a capa frontal da edição que você possui**, com boa luz, sem reflexos, em formato vertical, sem pessoas no fundo.
2. Otimize a foto (JPG/WebP entre 400–900 px de largura, idealmente abaixo de 250 kB).
3. Coloque-a em `conteudo/capas/`, por exemplo `sapiens-real.webp`.
4. No livro correspondente no arquivo de dados, atualize `"cover": "conteudo/capas/sapiens-real.webp"`.
5. Se for uma foto real, atualize `"coverType": "foto-real"` e, se souber que a edição foi conferida, `"verifiedEdition": true`.
6. Faça o commit no GitHub; confirme no site que a imagem carregou.

As capas iniciais fornecidas são **ilustrativas e não oficiais**.

## Quero adicionar um livro
Copie o objeto JSON de um livro no arquivo `livros.js` e edite título, autor, preço, categoria e caminho da imagem. Use um `id` novo e único. Separe os objetos por vírgula. Se quiser uma nova capa ilustrativa, use qualquer SVG existente como referência e crie um novo SVG em `conteudo/capas/` com texto atualizado.

## Contato
- Instagram: editar URLs em `index.html`.
- WhatsApp: editar o número em `index.html` **e** `assets/js/app.js`.
- Os pedidos são finalizados por mensagem; sem banco de dados não há reserva automática.

## Verificar
Rode `python scripts/verificar_site.py` dentro da pasta principal. Ele confere arquivos e dados e ajuda a evitar imagens faltando na publicação.

## GitHub Pages: resolver erros comuns
- Página 404: confira `index.html` na raiz e **Settings → Pages → Deploy from a branch → main → /(root)**.
- Site sem imagens: confirme caminhos relativos e extensão exata; no GitHub letras maiúsculas/minúsculas importam.
- Preço não muda: confirme alteração em `livros.js` e atualize a aba usando recarga completa.
- Link do WhatsApp: testes em desktop podem abrir WhatsApp Web; em celular, o aplicativo.
- Imagens não oficiais: solicite fotos reais do exemplar antes da venda e troque as ilustrativas conforme tiver imagens.
