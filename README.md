# 📚 Sebo de Livros dos Schultz

Site de catálogo estático, responsivo e pronto para **GitHub Pages**, sem dependências, frameworks ou compilação.

## ✅ O que está incluído
- **75 exemplares** (preços unitários e referências estimadas) cadastrados em `conteudo/dados/livros.js`.
- **45 referências de capas editoriais** por URL pública, com **75 capas ilustrativas locais de segurança**, em WebP, dentro de `conteudo/capas/` (além das fontes SVG editáveis). As imagens de editoras e livrarias não são incorporadas ao ZIP.
- **5 fotos reais** do acervo em `conteudo/fotos/`.
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
  "cover": "conteudo/capas/livro-02.webp",
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
Os arquivos `livro-01.webp` até `livro-44.webp` são **artes ilustrativas de reserva**; o catálogo prioriza as capas editoriais remotas cadastradas em `coverOnline` quando existirem. Veja `docs/CAPAS-OFICIAIS.md` para lista de fontes e limitações. **Não reproduzem as capas editoriais oficiais**. Pedidos individuais no WhatsApp convidam o comprador a solicitar fotos reais e confirmar edição. A listagem foi preparada a partir das fotos do acervo; alguns títulos/edições permanecem pendentes de conferência. Não apresente as ilustrações como fotos dos exemplares.

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
│   ├── capas/livro-01.webp ... livro-75.webp (exibidos no site)
│   ├── capas/livro-01.svg ... livro-75.svg (fontes para edição)
│   ├── fotos/acervo-01.jpg ... acervo-05.jpg
│   └── dados/livros.js       # fonte única usada pelo site
│              livros.csv     # exportação de apoio
├── docs/
│   └── MANUTENCAO.md
└── scripts/
    └── verificar_site.py    # verificação básica do conteúdo
```

## Avisos de transparência
As comparações mostram **estimativas de preço de referência**, não comprovantes de preço original de capa nem quanto o vendedor pagou. Os preços anunciados são sugestões para venda dos usados e podem ser alterados antes de publicar. A disponibilidade, frete, pagamento, condição e edição final são confirmados pelo WhatsApp. Não é um e-commerce com checkout.


## 🧩 Correção das capas — versão 2
A versão inicial possuía XML inválido em todas as 44 artes SVG: o caractere `&` nos nomes das categorias não estava escapado (`&amp;`). Alguns navegadores exibiam o texto alternativo em vez das capas.

Nesta versão, **todos os SVGs foram corrigidos e validados**. O catálogo usa imagens **WebP locais**, já convertidas, para maior compatibilidade. Elas não dependem de links externos nem de APIs, inclusive no GitHub Pages em `/sebo-dos-schultz/`.

Para atualizar o site que já está no GitHub, substitua os arquivos existentes com os arquivos **de dentro da pasta raiz do ZIP**. Faça commit e aguarde a publicação do Pages. Se aparecer uma cópia antiga, use `Ctrl + F5` (Windows) ou abra em aba anônima. CSS e JS recebem `?v=4` para reduzir problemas de cache.

A seleção de livros é salva automaticamente no navegador local (sem conta e sem envio de dados). Não é uma reserva de estoque.

## 🔄 Atualizar o site no GitHub
Consulte [`docs/ATUALIZAR-GITHUB.md`](docs/ATUALIZAR-GITHUB.md) para substituir a versão anterior.

## ✅ Validação automática
O workflow `.github/workflows/validar-site.yml` executa `python scripts/verificar_site.py` nos pushes para `main` e nas pull requests.

## 🖼️ Atualização v3 — capas editoriais
Foram identificadas **27 capas editoriais de referência** (incluindo títulos com mais de um exemplar). Elas são carregadas de seus provedores originais com fallback local imediato no erro. Não há garantia de que o provedor permitirá hotlink indefinidamente; se a capa editorial não carregar, a imagem ilustrativa local aparecerá. Algumas capas são de edições ou tiragens semelhantes, não confirmadas como idênticas ao acervo. Consulte `docs/CAPAS-OFICIAIS.md`.

## 🆕 Atualização v4 (10/11/2026)

Foram adicionados 31 livros das fotografias mais recentes, totalizando **75 livros**. Os novos títulos aparecem primeiro na ordenação padrão e levam selo de novidade. Foram incluídas 2 novas fotografias do acervo e categorias de romance, bem-estar e TAG. Consulte `docs/NOVIDADES-2026-11-10.md` para a lista completa, preços e ressalvas.

**Importante:** o valor de referência **não é o preço pago** pelos exemplares; para obras TAG pode ser o preço estimado de um kit com adicionais, que não são garantidos. Os preços são sugestões e podem ser editados em `conteudo/dados/livros.js`. Não há capa oficial garantida em todos os volumes: imagens editoriais remotas são usadas quando disponíveis, com arte local marcada como ilustrativa quando não houver. Há ainda um exemplar vermelho parcialmente encoberto que não foi identificado e, por isso, não foi cadastrado.
