# 📚 Sebo de Livros dos Schultz

Site de catálogo estático, responsivo e pronto para **GitHub Pages**, sem dependências, frameworks ou compilação.

## ✅ O que está incluído
- **44 exemplares** (preços unitários e referências estimadas) cadastrados em `conteudo/dados/livros.js`.
- **44 artes de capa ilustrativas individuais**, em SVG, dentro de `conteudo/capas/` (não são as capas oficiais).
- **3 fotos reais** do acervo em `conteudo/fotos/`.
- Busca, filtros, ordenação, seleção de livros, soma dos preços e pedido pelo WhatsApp.
- Contatos: WhatsApp **(51) 98613-3553** e Instagram **@andersonschultz**.

## 🚀 Publicar no GitHub Pages — sem instalar nada
1. Extraia o ZIP.
2. Crie um repositório público no GitHub (ex.: `sebo-dos-schultz`).
3. Suba **todos os arquivos e pastas contidos na pasta `sebo-dos-schultz`**, diretamente na **raiz** do repositório. Não suba apenas o ZIP e não deixe `index.html` dentro de uma subpasta.
4. Abra o repositório em **Settings → Pages**.
5. Em **Build and deployment**, escolha **Deploy from a branch**, selecione `main` e `/ (root)`, depois **Save**.
6. Quando a publicação terminar, seu endereço normalmente será `https://SEU_USUARIO.github.io/sebo-dos-schultz/`.

> O site não depende do endereço do repositório e funciona também em outros nomes, porque todas as referências são relativas.

## 🛠️ Editar o catálogo
Abra `conteudo/dados/livros.js`. Cada livro possui:

```js
{
  "id": 2,
  "title": "Sapiens — Uma Breve História da Humanidade",
  "author": "Yuval Noah Harari",
  "price": 40,
  "reference": 60,
  "category": "Leitura & literatura",
  "cover": "conteudo/capas/livro-02.svg",
  "status": "disponivel"
}
```

- Altere `price` para o preço de venda.
- Altere `reference` para o valor de referência **estimado** (ou `0` para ocultar).
- Troque `"disponivel"` por `"vendido"` para impedir a seleção (a consulta permanece acessível).
- Para usar **a capa real**, coloque uma foto `.jpg`, `.png` ou `.webp` em `conteudo/capas/` e atualize `cover` para o caminho correspondente. **Confirme edição e direitos de uso da imagem.**
- Adicione/remova registros no arquivo JS para atualizar o catálogo. Cada `id` deve ser único.
- O arquivo `conteudo/dados/livros.csv` serve como planilha de consulta, mas **o site lê o `.js`**, não o `.csv`.

## ☎️ Editar contatos
Procure `5551986133553` em `index.html` **e** `assets/js/app.js`; mude os dois se trocar o WhatsApp. Para Instagram, altere o link em `index.html`.

## 🖼️ Sobre as capas
Os arquivos `livro-01.svg` até `livro-44.svg` são **artes ilustrativas** produzidas para exibir todos os títulos sem depender de servidor externo. **Não reproduzem as capas editoriais oficiais**. Pedidos individuais no WhatsApp convidam o comprador a solicitar fotos reais e confirmar edição. A listagem foi preparada a partir das fotos do acervo; alguns títulos/edições permanecem pendentes de conferência. Não apresente as ilustrações como fotos dos exemplares.

## 🧪 Testar antes de publicar
- Basta abrir `index.html` em um navegador moderno. O catálogo local já funciona.
- Se preferir, rode `python -m http.server 8000` na pasta raiz e abra `http://localhost:8000`.
- Simule um celular e teste: pesquisa, filtros, seleção e redirecionamento para o WhatsApp.

## 📁 Estrutura
```text
sebo-dos-schultz/
├── index.html                # página inicial para GitHub Pages
├── .nojekyll                 # publicação de arquivos estáticos
├── README.md                 # este guia
├── PROMPT-MELHORIAS.md       # prompt para evoluir o projeto com IA
├── robots.txt
├── assets/
│   ├── css/style.css         # identidade visual responsiva
│   ├── js/app.js             # pesquisa, filtros, carrinho e links
│   └── favicon.svg
├── conteudo/
│   ├── capas/livro-01.svg ... livro-44.svg
│   ├── fotos/acervo-01.jpg ... acervo-03.jpg
│   └── dados/livros.js       # fonte única usada pelo site
│              livros.csv     # exportação de apoio
├── docs/
│   └── MANUTENCAO.md
└── scripts/
    └── verificar_site.py    # verificação básica do conteúdo
```

## Avisos de transparência
As comparações mostram **estimativas de preço de referência**, não comprovantes de preço original de capa nem quanto o vendedor pagou. Os preços anunciados são sugestões para venda dos usados e podem ser alterados antes de publicar. A disponibilidade, frete, pagamento, condição e edição final são confirmados pelo WhatsApp. Não é um e-commerce com checkout.
