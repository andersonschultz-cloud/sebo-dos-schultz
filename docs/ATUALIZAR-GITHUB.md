# Atualizar o site já publicado no GitHub Pages

Repositório identificado pelo endereço mostrado na captura de tela: `andersonschultz-cloud/sebo-dos-schultz`.

## Opção simples: pelo navegador
1. Entre no GitHub e abra o repositório do site.
2. Baixe a nova versão ZIP e **extraia** os arquivos.
3. Na branch `main`, use **Add file → Upload files** (ou arraste o conteúdo extraído para a área de upload). Os arquivos novos devem ficar na **raiz** do repositório. Preserve a estrutura `assets/`, `conteudo/`, `docs/`, `scripts/` e `.github/`.
4. Confirme que `index.html` está na raiz (não dentro de `sebo-dos-schultz/sebo-dos-schultz`).
5. Faça o commit. Em Settings → Pages, mantenha **Deploy from a branch → main → / (root)**.
6. Abra `https://andersonschultz-cloud.github.io/sebo-dos-schultz/` e atualize com Ctrl+F5.

> Atenção: para substituir arquivos existentes pela interface web, pode ser mais simples sincronizar via Git (abaixo). Não é necessário remover os SVGs antigos: nesta versão os SVGs estão corrigidos, e as capas exibidas são os novos WebP.

## Opção recomendada: pelo Git

Se o repositório já está clonado, copie os arquivos **de dentro** do ZIP extraído para a pasta do repositório e execute:

```bash
git add -A
git commit -m "Corrige capas dos 44 livros e melhora o catálogo"
git push origin main
```

Se ainda não clonou:

```bash
git clone https://github.com/andersonschultz-cloud/sebo-dos-schultz.git
cd sebo-dos-schultz
# copie o conteúdo extraído para esta pasta, substituindo arquivos existentes
git add -A
git commit -m "Corrige capas dos 44 livros e melhora o catálogo"
git push origin main
```

## Como confirmar que funcionou
- Abra a página e confira as capas de *Sociedade de Risco*, *Sapiens*, *Como as Democracias Morrem* e outros.
- Clique com o botão direito na imagem → **Abrir imagem em nova guia**. O caminho deve terminar com `.webp`.
- Se alguma imagem faltar, abra as ferramentas de desenvolvedor, aba **Network/Rede**, e procure resposta 404.
- Faça uma busca, selecione um livro, recarregue a página e verifique se a seleção foi mantida.
- O botão de consulta individual deve direcionar ao WhatsApp `5551986133553`.

## Por que as imagens sumiam?
Todas as 44 capas em SVG tinham um caractere `&` não escapado no texto do arquivo (XML inválido). Corrigimos os SVGs, convertemos as capas para WebP e passamos o catálogo a usar WebP local. Assim, não há dependência de imagens externas.

**Limitação:** as 44 capas são *artes ilustrativas individuais* e não imagens oficiais da capa de cada edição. Para substituí-las por fotos reais, atualize o arquivo correspondente em `conteudo/capas/` e o campo `cover` em `conteudo/dados/livros.js`.
