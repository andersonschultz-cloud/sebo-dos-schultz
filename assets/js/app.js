/* Sebo dos Schultz | Catálogo 100% estático e hospedável no GitHub Pages */
(() => {
 'use strict';
 const books=Array.isArray(window.SCHULTZ_BOOKS)?window.SCHULTZ_BOOKS:[];
 const PHONE='5551986133553';
 const money = n => new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(Number(n)||0);
 const esc = s => String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const normalize=s=>String(s??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const el=id=>document.getElementById(id);
 const SAVED_KEY='sebo-schultz-selecao-v2';
 function restoreSelection(){
  try {const ids=JSON.parse(localStorage.getItem(SAVED_KEY)||'[]');return new Set(Array.isArray(ids)?ids.filter(id=>books.some(b=>b.id===id&&b.status!=='vendido')):[]);}catch{return new Set();}
 }
 const state={term:'',category:'Todos os livros',sort:'default',selected:restoreSelection()};
 const saveSelection=()=>{try{localStorage.setItem(SAVED_KEY,JSON.stringify([...state.selected]));}catch{}};
 const categoryLabels={'Leitura & literatura':'Literatura & ideias','Concursos & direito':'Concursos & direito','Técnicos & outros':'Técnicos & outros'};
 const categories=['Todos os livros',...new Set(books.map(b=>b.category))];
 const calcTotal=()=>books.filter(b=>state.selected.has(b.id)).reduce((acc,b)=>acc+(Number(b.price)||0),0);
 const available=book=>book.status!=='vendido';
 const imageSrc=book=>book.coverOnline||book.cover;
 const coverAlt=book=>book.coverOnline?`Capa editorial de referência para ${book.title}; confirme a edição do exemplar`:`Capa ilustrativa de ${book.title}`;
 const coverNote=book=>book.coverOnline?'CAPA EDITORIAL • REFERÊNCIA':'CAPA ILUSTRATIVA';
 const whatsapp=(message)=>`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
 const toast=(msg)=>{const t=el('toast'); t.textContent=msg;t.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove('show'),2800);};
 function filtered(){let arr=books.filter(b=>(state.category==='Todos os livros'||b.category===state.category) && normalize(`${b.title} ${b.author} ${b.category}`).includes(normalize(state.term)));
  if(state.sort==='price-asc')arr.sort((a,b)=>a.price-b.price);
  if(state.sort==='price-desc')arr.sort((a,b)=>b.price-a.price);
  if(state.sort==='name')arr.sort((a,b)=>a.title.localeCompare(b.title,'pt-BR'));
  if(state.sort==='savings')arr.sort((a,b)=>((b.reference||0)-b.price)-((a.reference||0)-a.price));
  return arr;
 }
 function card(b){const chosen=state.selected.has(b.id);const sold=!available(b);
  return `<article class="book-card" aria-label="${esc(b.title)}">
   <div class="cover-zone"><span class="tag ${sold?'tag-muted':''}">${sold?'VENDIDO':'SEBO • USADO'}</span><img src="${esc(imageSrc(b))}" alt="${esc(coverAlt(b))}" loading="lazy" decoding="async" referrerpolicy="no-referrer" width="560" height="800" onerror="this.onerror=null;this.src='${esc(b.cover)}';if(this.nextElementSibling){this.nextElementSibling.textContent='CAPA ILUSTRATIVA';this.nextElementSibling.classList.remove('official-note');}"><span class="cover-note ${b.coverOnline?'official-note':''}">${coverNote(b)}</span></div>
   <div class="book-body"><div class="book-cat">${esc(categoryLabels[b.category]||b.category)}</div>
   <h3>${esc(b.title)}</h3><p class="book-author">${esc(b.author)}</p>
   <div class="book-condition">${esc(b.condition||'Usado · boas condições')}</div>
   <div class="price-panel"><div class="old-price">Preço de referência (estimado): ${Number(b.reference)?`<s>${money(b.reference)}</s>`:'sob consulta'}</div>
   <span class="deal">✦ PREÇO ESPECIAL DE SEBO</span><strong class="new-price">${money(b.price)}</strong>
   <div class="book-actions"><button type="button" class="choose-btn ${chosen?'chosen':''}" data-select="${b.id}" ${sold?'disabled':''} aria-pressed="${chosen}">${sold?'Indisponível':chosen?'✓ Na minha seleção':'+ Quero este livro'}</button>
    <a class="single-btn" href="${whatsapp(`Olá! Vi o livro "${b.title}" no Sebo dos Schultz, anunciado por ${money(b.price)}. Ele ainda está disponível? Pode me enviar fotos da capa e detalhes da edição?`)}" target="_blank" rel="noopener noreferrer" aria-label="Consultar ${esc(b.title)} no WhatsApp">Consultar ↗</a></div>
   ${b.notes?`<p class="book-footnote">${esc(b.notes)}</p>`:''}</div></div></article>`;
 }
 function renderFilters(){el('categories').innerHTML=categories.map(c=>`<button type="button" class="${c===state.category?'active':''}" data-category="${esc(c)}" aria-pressed="${c===state.category}">${esc(categoryLabels[c]||c)}</button>`).join('');}
 function render(){const list=filtered();el('book-grid').innerHTML=list.map(card).join('');el('results-count').textContent=`${list.length} ${list.length===1?'livro encontrado':'livros encontrados'}`;el('empty').hidden=list.length>0;renderFilters();renderCart();}
 function renderCart(){const n=state.selected.size;el('cart-bar').hidden=n===0;el('cart-count').textContent=`${n} ${n===1?'livro':'livros'}`;el('cart-total').textContent=money(calcTotal());}
 function selectedBooks(){return books.filter(b=>state.selected.has(b.id));}
 function selectedMessage(){const arr=selectedBooks();const lines=arr.map((b,i)=>`${i+1}. ${b.title} — ${money(b.price)}`);return `Olá! Encontrei estes livros no Sebo dos Schultz e gostaria de verificar disponibilidade:\n\n${lines.join('\n')}\n\nTotal estimado: ${money(calcTotal())}\n\nPode confirmar o estado dos livros e como combinar a entrega?`;}
 function renderDialog(){const arr=selectedBooks();if(!arr.length){el('selection-dialog').close();return;}
  el('dialog-items').innerHTML=arr.map(b=>`<div class="dialog-item"><img src="${esc(imageSrc(b))}" alt="" width="53" height="75" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${esc(b.cover)}';"><div class="dialog-item-info"><strong>${esc(b.title)}</strong><small>${esc(b.author)}</small></div><strong class="dialog-item-price">${money(b.price)}</strong><button type="button" data-remove="${b.id}" aria-label="Remover ${esc(b.title)}">×</button></div>`).join('');
  el('dialog-total').textContent=money(calcTotal());el('dialog-whatsapp').href=whatsapp(selectedMessage());
 }
 function openDialog(){renderDialog();el('selection-dialog').showModal();}
 el('categories').addEventListener('click',ev=>{const b=ev.target.closest('[data-category]');if(!b)return;state.category=b.dataset.category;render();});
 el('search').addEventListener('input',ev=>{state.term=ev.target.value;render();});
 el('sort').addEventListener('change',ev=>{state.sort=ev.target.value;render();});
 el('book-grid').addEventListener('click',ev=>{const b=ev.target.closest('[data-select]');if(!b)return;const id=Number(b.dataset.select);const book=books.find(x=>x.id===id);if(!book||!available(book))return;if(state.selected.has(id))state.selected.delete(id);else state.selected.add(id);saveSelection();render();toast(state.selected.has(id)?'Adicionado à sua seleção.':'Livro removido da seleção.');});
 el('clear-filters').addEventListener('click',()=>{state.category='Todos os livros';state.term='';state.sort='default';el('search').value='';el('sort').value='default';render();});
 el('clear-cart').addEventListener('click',()=>{state.selected.clear();saveSelection();render();toast('Seleção esvaziada.');});
 el('cart-open').addEventListener('click',openDialog);
 el('dialog-close').addEventListener('click',()=>el('selection-dialog').close());
 el('selection-dialog').addEventListener('click',ev=>{if(ev.target===el('selection-dialog'))el('selection-dialog').close();const btn=ev.target.closest('[data-remove]');if(btn){state.selected.delete(Number(btn.dataset.remove));saveSelection();render();renderDialog();}});
 el('year').textContent=new Date().getFullYear();el('hero-count').textContent=books.length;render();
})();
