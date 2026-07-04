function setLink(id, url) {
  const el = document.getElementById(id);
  if (!el) return;
  el.href = url || '#';
  if (!url || url === '#') {
    el.addEventListener('click', e => {
      e.preventDefault();
      alert('This link will be added soon.');
    });
  }
}

function buildTitle() {
  document.getElementById('heroTitle').innerHTML =
    `<span class="pink-word">${BRAND.heroTitleTop}</span><br><span class="mint-word">${BRAND.heroTitleMiddle}</span><br><span>${BRAND.heroTitleBottom}</span>`;
}

function buildServices() {
  const grid = document.getElementById('serviceGrid');
  grid.innerHTML = '';
  SERVICES.forEach(group => {
    const card = document.createElement('article');
    card.className = `service${group.style ? ' ' + group.style : ''}`;

    const top = document.createElement('div');
    top.className = 'service-top';

    const badge = document.createElement('div');
    badge.className = 'service-badge';
    badge.textContent = group.icon || '•';

    const title = document.createElement('h3');
    title.textContent = group.title;

    top.appendChild(badge);
    top.appendChild(title);
    card.appendChild(top);

    const tags = document.createElement('div');
    tags.className = 'tags';

    group.items.forEach(item => {
      const s = document.createElement('span');
      s.textContent = item;
      tags.appendChild(s);
    });

    card.appendChild(tags);
    grid.appendChild(card);
  });
}

function fill() {
  document.getElementById('miniBrand').textContent = BRAND.miniBrand;
  document.getElementById('eyebrowText').textContent = BRAND.eyebrow;
  document.getElementById('tagline').textContent = BRAND.tagline;
  document.getElementById('description').textContent = BRAND.description;
  document.getElementById('vibeText').textContent = BRAND.vibe;
  document.getElementById('footerText').textContent = BRAND.footer;
  document.getElementById('quoteText').textContent = BUTTON_TEXT.quote;
  document.getElementById('websiteText').textContent = BUTTON_TEXT.website;
  document.getElementById('contactText').textContent = BUTTON_TEXT.contact;
  document.getElementById('quoteCardText').textContent = BUTTON_TEXT.quote;
  buildTitle();
  buildServices();
}

function links() {
  setLink('quoteLink', LINKS.quote);
  setLink('websiteLink', LINKS.website);
  setLink('contactLink', LINKS.contact);
  setLink('instagramLink', LINKS.instagram);
  setLink('facebookLink', LINKS.facebook);
  setLink('tiktokLink', LINKS.tiktok);
  setLink('venmoLink', LINKS.venmo);
  setLink('cashappLink', LINKS.cashapp);
  setLink('paypalLink', LINKS.paypal);
  setLink('reviewLink', LINKS.googleReview);
  setLink('contactCardLink', LINKS.contactCard);
}

fill();
links();
