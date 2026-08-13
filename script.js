// ============================================
// LÓGICA DO SITE — injeta os dados de data.js no HTML
// ============================================

function montarLinkWhatsapp(numero, mensagem) {
  const texto = encodeURIComponent(mensagem);
  return `https://wa.me/${numero}?text=${texto}`;
}

function renderizarHero() {
  document.getElementById('hero-titulo').textContent = SITE_DATA.negocio.nome;
  document.getElementById('hero-slogan').textContent = SITE_DATA.negocio.slogan;

  const linkWa = montarLinkWhatsapp(
    SITE_DATA.negocio.whatsapp,
    `Olá! Gostaria de fazer uma encomenda na ${SITE_DATA.negocio.nome}.`
  );
  document.getElementById('wa-hero').href = linkWa;
  document.getElementById('wa-header').href = linkWa;
  document.getElementById('wa-footer').href = linkWa;
}

function renderizarSobre() {
  document.getElementById('sobre-titulo').textContent = SITE_DATA.sobre.titulo;
  document.getElementById('sobre-texto').textContent = SITE_DATA.sobre.texto;
}

function renderizarProdutos() {
  const grid = document.getElementById('grid-produtos');
  grid.innerHTML = SITE_DATA.produtos.map(p => `
    <div class="card-produto">
      <h3>${p.nome}</h3>
      <span class="preco">${p.preco}</span>
      <p>${p.descricao}</p>
    </div>
  `).join('');
}

function renderizarGaleria() {
  const container = document.getElementById('galeria-container');
  container.innerHTML = SITE_DATA.galeria.map(g => `
    <div class="foto-galeria">${g.legenda}</div>
  `).join('');
}

function renderizarContacto() {
  document.getElementById('c-endereco').textContent = SITE_DATA.negocio.endereco;
  document.getElementById('c-horario').textContent = SITE_DATA.negocio.horario;
  document.getElementById('c-telefone').textContent = SITE_DATA.negocio.telefone;
  document.getElementById('c-email').textContent = SITE_DATA.negocio.email;
  document.getElementById('footer-nome').textContent = SITE_DATA.negocio.nome;
  document.getElementById('ano').textContent = new Date().getFullYear();
}

function iniciar() {
  renderizarHero();
  renderizarSobre();
  renderizarProdutos();
  renderizarGaleria();
  renderizarContacto();
}

document.addEventListener('DOMContentLoaded', iniciar);
