#!/usr/bin/env python3
"""Verifica arquivos essenciais sem dependências externas."""
from pathlib import Path
import re,json,sys,xml.etree.ElementTree as ET
root=Path(__file__).resolve().parents[1]
data=(root/'conteudo/dados/livros.js').read_text(encoding='utf8')
match=re.search(r'window\.SCHULTZ_BOOKS\s*=\s*(\[.*\])\s*;',data,re.S)
if not match:sys.exit('ERRO: dados do catálogo inválidos')
books=json.loads(match.group(1));ids=set();errors=[]
for b in books:
 if b['id'] in ids:errors.append(f'ID duplicado: {b["id"]}')
 ids.add(b['id'])
 coverpath=root/b['cover']
 if not coverpath.is_file():errors.append(f'Capa ausente: {b["cover"]}')
 elif coverpath.suffix.lower()=='.webp':
  try:
   with coverpath.open('rb') as fp:
    if fp.read(4)!=b'RIFF':raise ValueError('cabeçalho WebP incorreto')
  except Exception as ex:errors.append(f'WebP invalido: {b["cover"]} ({ex})')
 svgpath=coverpath.with_suffix('.svg')
 if svgpath.exists():
  try:ET.parse(svgpath)
  except ET.ParseError as ex:errors.append(f'SVG invalido: {svgpath.name} ({ex})')
 if b['price']<0:errors.append(f'Preço inválido: {b["title"]}')
for path in ['index.html','assets/css/style.css','assets/js/app.js','conteudo/fotos/acervo-01.jpg','conteudo/fotos/acervo-02.jpg','conteudo/fotos/acervo-03.jpg']:
 if not (root/path).is_file():errors.append(f'Arquivo ausente: {path}')
print(f'Livros: {len(books)} | Capas existentes: {sum((root/b["cover"]).is_file() for b in books)} | Soma: R$ {sum(b["price"] for b in books):.2f}')
if errors:
 print('\n'.join(errors));sys.exit(1)
print('OK — dados, WebP e fontes SVG verificados.')
