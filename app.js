/* ══════════════════════════════════
   DATA — Menyu məhsulları
   Developer: Ad, desc, price, popular, img dəyişdirilə bilər
══════════════════════════════════ */
const MENU = [
  /* ─── ŞİRİN KREPİÇLƏR ─── */
  {
    id: 1, cat: 'sweet',
    name: '"Crepes" Bounty® ilə',
    desc: 'Kokos, qaymaq, qatılaşdırılmış süd',
    price: 5.99, popular: true,
    img: 'images/crepe-main.jpg'
  },
  {
    id: 2, cat: 'sweet',
    name: '"Crepes" Nutella® ilə',
    desc: 'Nutella',
    price: 5.99, popular: true,
    img: 'images/crepe-main.jpg'
  },
  {
    id: 3, cat: 'sweet',
    name: '"Crepes" Snickers® ilə',
    desc: 'Karamel, Araxis, Nutella®',
    price: 5.99, popular: true,
    img: 'images/crepe-main.jpg'
  },
  {
    id: 4, cat: 'sweet',
    name: '"Crepes" Banan Qaymaq ilə',
    desc: 'Banan, qaymaq, qatılaşdırılmış süd',
    price: 5.99, popular: true,
    img: 'images/crepe-main.jpg'
  },
  {
    id: 5, cat: 'sweet',
    name: '"Crepes" Banan Qaymaq və Nutella® ilə',
    desc: 'Banan, qaymaq, Nutella®',
    price: 5.99, popular: true,
    img: 'images/crepe-main.jpg'
  },
  {
    id: 6, cat: 'sweet',
    name: '"Crepes" Giləmeyvə ilə',
    desc: 'Çiyələk',
    price: 5.99, popular: false,
    img: 'images/crepe-main.jpg'
  },
  {
    id: 7, cat: 'sweet',
    name: '"Crepes" Ştrudel ilə',
    desc: 'Alma, karamel, darçın',
    price: 5.99, popular: false,
    img: 'images/crepe-main.jpg'
  },
  /* ─── DOYUMLU KREPİÇLƏR ─── */
  {
    id: 8, cat: 'savory',
    name: '"Crepes" Blindoq',
    desc: 'Sosis, holland pendiri',
    price: 5.99, popular: false,
    img: 'images/crepe-main.jpg'
  },
  {
    id: 9, cat: 'savory',
    name: '"Crepes" Julyen ilə',
    desc: 'Qöbələk, qaymaq, holland pendiri',
    price: 11.49, popular: true,
    img: 'images/crepe-main.jpg'
  },
  {
    id: 10, cat: 'savory',
    name: '"Crepes" Şirin və Turş Sousda Toyuq ilə',
    desc: 'Toyuq, şirin və turş sousu, holland pendiri',
    price: 11.49, popular: false,
    img: 'images/crepe-main.jpg'
  },
  {
    id: 11, cat: 'savory',
    name: '"Crepes" Ədviyyatlı Toyuq Tərəvəz ilə',
    desc: 'Toyuq əti, ədviyyatlı sousu, mangal salatı, holland pendiri',
    price: 11.49, popular: false,
    img: 'images/crepe-main.jpg'
  },
  {
    id: 12, cat: 'savory',
    name: '"Crepes" Pendir ilə',
    desc: 'Holland pendiri',
    price: 5.99, popular: false,
    img: 'images/crepe-main.jpg'
  },
  /* ─── SOYUQ İÇKİLƏR ─── */
  {
    id: 13, cat: 'drinks',
    name: 'Coca-Cola® 500 ml',
    desc: 'Soyuq içki',
    price: 2.99, popular: false,
    img: 'https://sspark.genspark.ai/cfimages?u1=MfvZ5JMwuvbEg4LmvsV%2FJy0uj9xxGJBR23fLiL%2BAUyp6nc1fieviYAyF0uCPG0yqsBYliWWgWQRQs4sI19FzKUv22LHvV%2F%2BtBzUrIDMFQMRHgNDQmahpB0Yo%2FXVjAnOuU3WA7klmkuir&u2=%2Fj8C5oCuvI8KOLxS&width=2560'
  },
  {
    id: 14, cat: 'drinks',
    name: 'Fanta® 500 ml',
    desc: 'Soyuq içki',
    price: 2.99, popular: false,
    img: 'https://sspark.genspark.ai/cfimages?u1=poiPVLD%2FFSZP2yiJsdgn2u%2BNq%2B32baH%2F3hdCWIaiymmz89KyKLJgWDOhqV%2FlftwJC1HNFrUE%2BrG%2FS7y1q2is%2FCphXNTzBSVV05qoy8BPONg3Kso%3D&u2=BFimVj20SjJq1HWh&width=2560'
  },
  {
    id: 15, cat: 'drinks',
    name: 'Sprite® 500 ml',
    desc: 'Soyuq içki',
    price: 2.99, popular: false,
    img: 'https://sspark.genspark.ai/cfimages?u1=7BzmN3f8QhjDtf1ZurBuR4NV6jHWWrEUZmaMTa3KnyHYDRJkVkmoQDiF7QKq3JNJ6klsR2yigPvyDpC4rNc9%2BR3MSXDoIgBB10FHL9rmKBHREx76045ha0jrHbpQA%2BbYSNsk4Sg%3D&u2=5seWVKK8K2Vj48vT&width=2560'
  }
];

/* ──────────────────────────────────
   CATEGORIES
────────────────────────────────── */
const CATS = [
  { id: 'sweet',  label: '🍫 Şirin krepiçlər' },
  { id: 'savory', label: '🧀 Doyumlu krepiçlər' },
  { id: 'drinks', label: '🥤 Soyuq içkilər' }
];

/* ──────────────────────────────────
   GALLERY images
   Add/remove paths here for gallery
────────────────────────────────── */
const GALLERY_IMGS = [
  'galr.jpg',
  'galr.jpg',
  'galr.jpg',
  'galr.jpg',
  'images/crepe-main.jpg',
  'images/crepe-main.jpg',
  'images/crepe-main.jpg',
  'images/crepe-main.jpg'
];

/* ──────────────────────────────────
   FAQ
────────────────────────────────── */
const FAQ = [
  {
    q: 'Çatdırılma xidmətiniz varmı?',
    a: 'Bəli, Bakı şəhəri daxilində çatdırılma xidmətimiz mövcuddur. Sifariş üçün WhatsApp-dan əlaqə saxlayın.'
  },
  {
    q: 'Minimum sifariş məbləği nədir?',
    a: 'Minimum sifariş məbləği Yoxdur.'
  },
  {
    q: 'Rezervasiya üçün neçə gün əvvəl müraciət etmək lazımdır?',
    a: 'Ən azı 1 gün əvvəl müraciət etməyiniz tövsiyə olunur.'
  },
  {
    q: 'Ödəniş üsulları hansılardır?',
    a: 'Nağd pul, bank kartı və bank köçürməsi qəbul edilir.'
  },
  {
    q: 'Allergiya üçün xüsusi hazırlanmış məhsullarınız varmı?',
    a: 'Xüsusi tələblərinizi sifariş formunda qeyd edə bilərsiniz, komandamız əlindən gələni edəcək.'
  }
];

/* ══════════════════════════════════
   STATE
══════════════════════════════════ */
let cart = JSON.parse(localStorage.getItem('crepes_cart') || '[]');
let currentPage = 'home';
let prevPage = null;
let currentProduct = null;

/* ══════════════════════════════════
   INIT
══════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderPopular();
  renderGalleryPreview();
  renderGalleryFull();
  renderMenu();
  renderFAQ();
  updateCartUI();

  // Nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => goTo(btn.dataset.page));
  });
});

/* ══════════════════════════════════
   NAVIGATION
══════════════════════════════════ */
function goTo(page) {
  if (page === currentPage) return;
  prevPage = currentPage;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.page === page);
  });
  currentPage = page;
  window.scrollTo(0, 0);
}

function goBack() {
  if (prevPage) goTo(prevPage);
  else goTo('home');
}

/* gallery page opener */
function openGallery() {
  prevPage = currentPage;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-gallery').classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  currentPage = 'gallery';
  window.scrollTo(0, 0);
}

/* ══════════════════════════════════
   RENDER POPULAR
══════════════════════════════════ */
function renderPopular() {
  const popular = MENU.filter(m => m.popular).slice(0, 8);
  const el = document.getElementById('popularScroll');
  el.innerHTML = popular.map(item => `
    <div class="h-card" onclick="openProduct(${item.id})">
      <img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='images/crepe-main.jpg'"/>
      <div class="h-card-body">
        <div class="h-card-name">${item.name}</div>
        <div class="h-card-price">${item.price.toFixed(2)} ₼</div>
      </div>
    </div>
  `).join('');
}

/* ══════════════════════════════════
   RENDER GALLERY PREVIEW (home)
══════════════════════════════════ */
function renderGalleryPreview() {
  const el = document.getElementById('galleryPreview');
  el.innerHTML = GALLERY_IMGS.slice(0, 6).map(src => `
    <img src="${src}" alt="Qaleriya" loading="lazy" onclick="openGallery()" onerror="this.src='images/crepe-main.jpg'"/>
  `).join('');
}

/* ══════════════════════════════════
   RENDER GALLERY FULL
══════════════════════════════════ */
function renderGalleryFull() {
  const el = document.getElementById('galleryFull');
  el.innerHTML = GALLERY_IMGS.map(src => `
    <img src="${src}" alt="Qaleriya" loading="lazy" onerror="this.src='images/crepe-main.jpg'"/>
  `).join('');
}

/* ══════════════════════════════════
   RENDER MENU
══════════════════════════════════ */
function renderMenu() {
  // Category tabs
  const tabs = document.getElementById('catTabs');
  tabs.innerHTML = CATS.map((c, i) => `
    <button class="cat-tab ${i === 0 ? 'active' : ''}" onclick="scrollToCategory('${c.id}', this)">${c.label}</button>
  `).join('');

  // Menu items grouped by category
  const content = document.getElementById('menuContent');
  content.innerHTML = CATS.map(cat => {
    const items = MENU.filter(m => m.cat === cat.id);
    return `
      <div class="menu-category" id="cat-${cat.id}">
        <div class="cat-heading">${cat.label}</div>
        ${items.map(item => `
          <div class="menu-item" onclick="openProduct(${item.id})">
            <img class="menu-img" src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='images/crepe-main.jpg'"/>
            <div class="menu-info">
              <div class="menu-name">${item.name}${item.popular ? '<span class="badge-popular">POPULYAR</span>' : ''}</div>
              <div class="menu-desc">${item.desc}</div>
            </div>
            <div class="menu-right">
              <div class="menu-price">${item.price.toFixed(2)} ₼</div>
              <button class="add-btn" onclick="event.stopPropagation(); addToCart(${item.id})" aria-label="Əlavə et">+</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }).join('');

  // Intersection observer to highlight active tab
  const catEls = document.querySelectorAll('.menu-category');
  const tabBtns = document.querySelectorAll('.cat-tab');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id.replace('cat-', '');
        tabBtns.forEach(b => b.classList.remove('active'));
        const active = document.querySelector(`.cat-tab[onclick*="${id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  catEls.forEach(el => observer.observe(el));
}

function scrollToCategory(id, btn) {
  document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const el = document.getElementById('cat-' + id);
  if (el) {
    const offset = el.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }
}

/* ══════════════════════════════════
   PRODUCT MODAL
══════════════════════════════════ */
function openProduct(id) {
  currentProduct = MENU.find(m => m.id === id);
  if (!currentProduct) return;
  document.getElementById('modal-img').src = currentProduct.img;
  document.getElementById('modal-img').onerror = function() { this.src='images/crepe-main.jpg'; };
  document.getElementById('modal-name').textContent = currentProduct.name;
  document.getElementById('modal-ingredients').textContent = '🧾 Tərkib: ' + currentProduct.desc;
  document.getElementById('modal-price').textContent = currentProduct.price.toFixed(2) + ' ₼';
  document.getElementById('modal-add-btn').onclick = () => {
    addToCart(currentProduct.id);
    closeProductModal();
  };
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModal(e) {
  if (e.target.id === 'productModal') closeProductModal();
}

/* ══════════════════════════════════
   CART
══════════════════════════════════ */
function addToCart(id) {
  const item = MENU.find(m => m.id === id);
  if (!item) return;
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: item.id, name: item.name, price: item.price, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast('🛒 ' + item.name.substring(0, 25) + '... əlavə edildi');
}

function removeFromCart(id) {
  const idx = cart.findIndex(c => c.id === id);
  if (idx === -1) return;
  if (cart[idx].qty > 1) cart[idx].qty--;
  else cart.splice(idx, 1);
  saveCart();
  updateCartUI();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('crepes_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const cartSection = document.getElementById('cartSection');
  const emptyCart = document.getElementById('emptyCart');
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');

  if (cart.length === 0) {
    cartSection.style.display = 'none';
    emptyCart.style.display = 'block';
  } else {
    cartSection.style.display = 'block';
    emptyCart.style.display = 'none';

    cartItems.innerHTML = cart.map(c => `
      <div class="cart-item">
        <div class="cart-name">${c.name}</div>
        <div class="cart-qty">
          <button class="qty-btn" onclick="removeFromCart(${c.id})">−</button>
          <span class="qty-num">${c.qty}</span>
          <button class="qty-btn" onclick="addToCart(${c.id})">+</button>
        </div>
        <div class="cart-price">${(c.price * c.qty).toFixed(2)} ₼</div>
      </div>
    `).join('');

    const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
    cartTotal.textContent = 'Cəmi: ' + total.toFixed(2) + ' ₼';
  }
}

/* ══════════════════════════════════
   ORDER FORM
══════════════════════════════════ */
let userLocation = null;

function getLocation() {
  const input = document.getElementById('ord-location');
  input.value = 'Konum alınır...';
  if (!navigator.geolocation) {
    input.value = 'Cihazınız konumu dəstəkləmir';
    return;
  }
  navigator.geolocation.getCurrentPosition(
    pos => {
      const lat = pos.coords.latitude.toFixed(6);
      const lng = pos.coords.longitude.toFixed(6);
      const link = `https://maps.google.com/?q=${lat},${lng}`;
      userLocation = link;
      input.value = link;
    },
    () => { input.value = 'Konum alına bilmədi, ünvanı əl ilə daxil edin'; }
  );
}

function submitOrder(e) {
  e.preventDefault();
  const name    = document.getElementById('ord-name').value.trim();
  const phone   = document.getElementById('ord-phone').value.trim();
  const address = document.getElementById('ord-address').value.trim();
  const locVal  = document.getElementById('ord-location').value.trim();
  const note    = document.getElementById('ord-note').value.trim();

  if (!name || !phone) { showToast('❗ Ad və telefon doldurulmalıdır'); return; }

  const cartText = cart.length > 0
    ? cart.map(c => `• ${c.name} x${c.qty} — ${(c.price*c.qty).toFixed(2)} AZN`).join('\n')
    : 'Məhsul seçilməyib (telefonla bildiriləcək)';

  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);

  let msg = `🍽️ *YENİ SİFARİŞ*\n\n`;
  msg += `👤 Ad: ${name}\n`;
  msg += `📞 Tel: ${phone}\n`;
  if (address) msg += `🏠 Ünvan: ${address}\n`;
  if (locVal && locVal.startsWith('http')) msg += `📍 Konum: ${locVal}\n`;
  msg += `\n🛒 *Sifariş:*\n${cartText}\n`;
  if (total > 0) msg += `\n💰 *Cəmi: ${total.toFixed(2)} AZN*\n`;
  if (note) msg += `\n📝 Qeyd: ${note}`;

  const wa = `https://wa.me/994502531989?text=${encodeURIComponent(msg)}`;
  window.open(wa, '_blank');

  showToast('✅ Sifarişiniz göndərildi!');
  clearCart();
  e.target.reset();
  userLocation = null;
}

/* ══════════════════════════════════
   RESERVATION FORM
══════════════════════════════════ */
function submitReservation(e) {
  e.preventDefault();
  const name   = document.getElementById('res-name').value.trim();
  const phone  = document.getElementById('res-phone').value.trim();
  const people = document.getElementById('res-people').value;
  const date   = document.getElementById('res-date').value;
  const note   = document.getElementById('res-note').value.trim();

  if (!name || !phone || !people || !date) {
    showToast('❗ Bütün məcburi sahələri doldurun');
    return;
  }

  const dateStr = date.replace('T', ' ');

  let msg = `📅 *YENİ RESERVASİYA*\n\n`;
  msg += `👤 Ad: ${name}\n`;
  msg += `📞 Tel: ${phone}\n`;
  msg += `👥 Nəfər sayı: ${people}\n`;
  msg += `🕐 Tarix/Saat: ${dateStr}\n`;
  if (note) msg += `📝 Qeyd: ${note}`;

  const wa = `https://wa.me/994559406018?text=${encodeURIComponent(msg)}`;
  window.open(wa, '_blank');

  showToast('✅ Rezervasiya göndərildi!');
  e.target.reset();
}

/* ══════════════════════════════════
   FAQ
══════════════════════════════════ */
function renderFAQ() {
  const el = document.getElementById('faqList');
  el.innerHTML = FAQ.map((f, i) => `
    <div class="faq-item" id="faq-${i}">
      <div class="faq-q" onclick="toggleFaq(${i})">
        <span>${f.q}</span>
        <span class="faq-arrow">▼</span>
      </div>
      <div class="faq-a">${f.a}</div>
    </div>
  `).join('');
}

function toggleFaq(i) {
  const el = document.getElementById('faq-' + i);
  el.classList.toggle('open');
}

/* ══════════════════════════════════
   TOAST
══════════════════════════════════ */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}
