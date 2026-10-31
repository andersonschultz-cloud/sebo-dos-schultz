## v3 — capas editoriais de referência
- 27 referências editoriais online com fallback WebP local.
- Separação visual entre capa de referência e ilustração.
- Registro das fontes e diferenças potenciais de edição em `docs/CAPAS-OFICIAIS.md`.
- Cache busting JS/CSS v3.

# Histórico de versões

## v2.0 — 31/10/2026

- Corrige o defeito nas 44 imagens SVG causado por `&` não escapado.
- Gera e inclui 44 capas ilustrativas WebP, locais e otimizadas.
- Preserva os SVGs originais agora válidos, para editar futuramente.
- Adiciona capa-reserva WebP para links de imagem incorretos.
- Melhora a apresentação das capas e o destaque do preço nos cartões.
- Adiciona indicador visível “Arte ilustrativa” para evitar confusão com capas oficiais.
- Salva no navegador a seleção de livros até o usuário limpá-la.
- Ajusta layouts compactos e telas de até 380 px.
- Atualiza instruções de manutenção e publicação.
- Inclui auditoria automática no GitHub Actions para arquivos de capa e dados.
- Adiciona versionamento dos links CSS e JS para reduzir problemas de cache.
