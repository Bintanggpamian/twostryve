// ============================================================
// TWOSTRYVE — Main Application
// SPA Router, Page Renderers, UI Components
// ============================================================

// SVG Icons (inline for performance)
const ICONS = {
  search: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  cart: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',
  x: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  chevronRight: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  chevronLeft: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
  chevronUp: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>',
  heart: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  share: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98"/><path d="m8.59 10.49 6.83-3.98"/></svg>',
  plus: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
  minus: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>',
  trash: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  whatsapp: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',
  arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>',
  instagram: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
  facebook: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  tiktok: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.33-6.33V9.18a8.16 8.16 0 0 0 4.59 1.45v-3.3a4.85 4.85 0 0 1-.7-.64z"/></svg>',
  mapPin: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  phone: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  filter: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
  shoppingBag: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  eye: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
};

// ============================================================
// APP CLASS
// ============================================================
const App = {
  currentPage: '',

  async init() {
    this.renderShell();
    this.bindGlobalEvents();

    // Wait for Supabase data before first render so all browsers show cloud data
    if (typeof SupabaseEngine !== 'undefined' && SupabaseEngine.ready) {
      try { await SupabaseEngine.ready; } catch(e) { /* ignore */ }
    }

    this.handleRoute();
    window.addEventListener('hashchange', () => this.handleRoute());
    Cart.updateBadge();

    // Intersection Observer for reveal animations
    this.setupRevealObserver();
  },

  // ---- Shell (Header + Footer + Overlays) ----
  renderShell() {
    document.getElementById('app').innerHTML = `
      ${this.renderAnnouncementBar()}
      ${this.renderHeader()}
      <main id="main-content"></main>
      ${this.renderFooter()}
      ${this.renderCartDrawer()}
      ${this.renderSearchOverlay()}
      ${this.renderFloatingWA()}
      <button class="back-to-top" id="backToTop" aria-label="Kembali ke atas">${ICONS.arrowUp}</button>
      <div class="toast-container" id="toastContainer"></div>
      <div class="lightbox" id="lightbox">
        <button class="lightbox-close">${ICONS.x}</button>
        <img src="" alt="" />
      </div>
    `;
  },

  renderAnnouncementBar() {
    return `<div class="announcement-bar">🔥 FREE ONGKIR untuk pembelian di atas ${formatPrice(STORE.freeShippingMin)} — <a href="#/shop" style="text-decoration:underline">Shop Now</a></div>`;
  },

  renderHeader() {
    return `
    <header class="header" id="siteHeader">
      <div class="header-inner">
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
        <a href="#/" class="header-logo">TWO<span>STRYVE</span></a>
        <nav class="header-nav" id="headerNav">
          <a href="#/" class="nav-link" data-page="home">Home</a>
          <div class="nav-dropdown">
            <a href="#/shop" class="nav-link nav-dropdown-trigger" data-page="shop">
              Shop ${ICONS.chevronDown}
            </a>
            <div class="nav-dropdown-menu">
              <a href="#/shop" class="nav-dropdown-item">Semua Produk</a>
              ${CATEGORIES.map(c => `<a href="#/shop?cat=${c.slug}" class="nav-dropdown-item">${c.name}</a>`).join('')}
            </div>
          </div>
          <a href="#/blog" class="nav-link" data-page="blog">Blog</a>
          <a href="#/about" class="nav-link" data-page="about">About</a>
          <a href="#/contact" class="nav-link" data-page="contact">Kontak</a>
        </nav>
        <div class="header-actions">
          <button class="header-action-btn" id="searchBtn" aria-label="Cari produk">${ICONS.search}</button>
          <button class="header-action-btn" id="cartBtn" aria-label="Keranjang">
            ${ICONS.cart}
            <span class="cart-badge" id="cartBadge">0</span>
          </button>
        </div>
      </div>
    </header>
    <nav class="mobile-nav" id="mobileNav">
      <a href="#/" class="mobile-nav-link" onclick="App.closeMobileMenu()">Home</a>
      <a href="#/shop" class="mobile-nav-link" onclick="App.closeMobileMenu()">Shop</a>
      <div class="mobile-nav-sub">
        ${CATEGORIES.map(c => `<a href="#/shop?cat=${c.slug}" class="mobile-nav-link" onclick="App.closeMobileMenu()" style="font-family:var(--font-body);font-size:1rem;padding:0.5rem 0">${c.name}</a>`).join('')}
      </div>
      <a href="#/blog" class="mobile-nav-link" onclick="App.closeMobileMenu()">Blog</a>
      <a href="#/about" class="mobile-nav-link" onclick="App.closeMobileMenu()">About</a>
      <a href="#/faq" class="mobile-nav-link" onclick="App.closeMobileMenu()">FAQ</a>
      <a href="#/contact" class="mobile-nav-link" onclick="App.closeMobileMenu()">Kontak</a>
      <a href="#/track-order" class="mobile-nav-link" onclick="App.closeMobileMenu()">Cek Pesanan</a>
    </nav>`;
  },

  renderFooter() {
    return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-brand-name">TWO<span>STRYVE</span></div>
            <p class="footer-brand-desc">${STORE.tagline}. Brand streetwear lokal dengan kualitas premium dan desain yang berani.</p>
            <div class="footer-socials">
              <a href="${STORE.instagram}" target="_blank" class="footer-social-link" aria-label="Instagram">${ICONS.instagram}</a>
              <a href="${STORE.tiktok}" target="_blank" class="footer-social-link" aria-label="TikTok">${ICONS.tiktok}</a>
              <a href="${STORE.facebook}" target="_blank" class="footer-social-link" aria-label="Facebook">${ICONS.facebook}</a>
            </div>
          </div>
          <div>
            <h4 class="footer-heading">Shop</h4>
            <div class="footer-links">
              <a href="#/shop" class="footer-link">Semua Produk</a>
              ${CATEGORIES.slice(0, 4).map(c => `<a href="#/shop?cat=${c.slug}" class="footer-link">${c.name}</a>`).join('')}
            </div>
          </div>
          <div>
            <h4 class="footer-heading">Info</h4>
            <div class="footer-links">
              <a href="#/about" class="footer-link">Tentang Kami</a>
              <a href="#/faq" class="footer-link">FAQ</a>
              <a href="#/size-guide" class="footer-link">Size Guide</a>
              <a href="#/how-to-shop" class="footer-link">Cara Belanja</a>
              <a href="#/track-order" class="footer-link">Cek Pesanan</a>
            </div>
          </div>
          <div>
            <h4 class="footer-heading">Kebijakan</h4>
            <div class="footer-links">
              <a href="#/return-policy" class="footer-link">Kebijakan Retur</a>
              <a href="#/terms" class="footer-link">Syarat & Ketentuan</a>
              <a href="#/contact" class="footer-link">Kontak Kami</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="footer-copyright">© ${new Date().getFullYear()} TWOSTRYVE. All rights reserved.</p>
          <div class="footer-payment-methods">
            <span class="footer-payment-badge">BCA</span>
            <span class="footer-payment-badge">Mandiri</span>
            <span class="footer-payment-badge">QRIS</span>
            <span class="footer-payment-badge">COD</span>
          </div>
        </div>
      </div>
    </footer>`;
  },

  renderCartDrawer() {
    return `
    <div class="cart-overlay" id="cartOverlay"></div>
    <div class="cart-drawer" id="cartDrawer">
      <div class="cart-drawer-header">
        <h3 class="cart-drawer-title">Keranjang</h3>
        <button class="cart-drawer-close" id="cartClose">${ICONS.x}</button>
      </div>
      <div class="cart-drawer-items" id="cartDrawerItems"></div>
      <div class="cart-drawer-footer" id="cartDrawerFooter"></div>
    </div>`;
  },

  renderSearchOverlay() {
    return `
    <div class="search-overlay" id="searchOverlay">
      <div class="search-modal">
        <div class="search-input-wrap">
          ${ICONS.search}
          <input type="text" class="search-input" id="searchInput" placeholder="Cari produk..." autocomplete="off" />
          <button onclick="App.closeSearch()" style="padding:4px">${ICONS.x}</button>
        </div>
        <div class="search-results" id="searchResults">
          <div class="search-hint">Ketik untuk mencari produk...</div>
        </div>
      </div>
    </div>`;
  },

  renderFloatingWA() {
    return `
    <div class="wa-float">
      <span class="wa-float-label">Chat Admin</span>
      <a href="https://wa.me/${STORE.whatsapp}?text=Halo,%20saya%20ingin%20bertanya%20tentang%20produk%20TWOSTRYVE" target="_blank" class="wa-float-btn" aria-label="Chat WhatsApp">${ICONS.whatsapp}</a>
    </div>`;
  },

  // ---- Global Events ----
  bindGlobalEvents() {
    // Mobile menu
    document.addEventListener('click', (e) => {
      if (e.target.closest('#mobileMenuBtn')) this.toggleMobileMenu();
      if (e.target.closest('#searchBtn')) this.openSearch();
      if (e.target.closest('#cartBtn')) this.openCartDrawer();
      if (e.target.closest('#cartClose') || e.target.closest('#cartOverlay')) this.closeCartDrawer();
      if (e.target.closest('#searchOverlay') && !e.target.closest('.search-modal')) this.closeSearch();
      if (e.target.closest('#backToTop')) window.scrollTo({ top: 0, behavior: 'smooth' });
      if (e.target.closest('.lightbox-close') || (e.target.closest('#lightbox') && !e.target.closest('img'))) this.closeLightbox();
    });

    // Scroll events
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const backToTop = document.getElementById('backToTop');
      if (backToTop) backToTop.classList.toggle('show', window.scrollY > 500);

      const header = document.getElementById('siteHeader');
      if (header) header.classList.toggle('scrolled', window.scrollY > 10);
    });

    // Search input
    document.addEventListener('input', (e) => {
      if (e.target.id === 'searchInput') this.handleSearch(e.target.value);
    });

    // Keyboard
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeSearch();
        this.closeCartDrawer();
        this.closeLightbox();
        this.closeMobileMenu();
      }
    });

    // Cart updates
    window.addEventListener('cart-updated', () => this.updateCartDrawerContent());
  },

  // ---- Rebuild Shell Nav (dynamic CMS sync) ----
  // Updates header nav dropdown, mobile nav, footer links, and WA button
  // with the latest CMS data (categories, store settings) without full re-render
  rebuildShellNav() {
    // Update header nav dropdown with latest categories
    const dropdownMenu = document.querySelector('.nav-dropdown-menu');
    if (dropdownMenu) {
      dropdownMenu.innerHTML = `<a href="#/shop" class="nav-dropdown-item">Semua Produk</a>` +
        CATEGORIES.map(c => `<a href="#/shop?cat=${c.slug}" class="nav-dropdown-item">${c.name}</a>`).join('');
    }

    // Update mobile nav with latest categories
    const mobileNavSub = document.querySelector('.mobile-nav-sub');
    if (mobileNavSub) {
      mobileNavSub.innerHTML = CATEGORIES.map(c =>
        `<a href="#/shop?cat=${c.slug}" class="mobile-nav-link" onclick="App.closeMobileMenu()" style="font-family:var(--font-body);font-size:1rem;padding:0.5rem 0">${c.name}</a>`
      ).join('');
    }

    // Update footer Shop links with latest categories
    const footerLinks = document.querySelectorAll('.footer-links');
    if (footerLinks.length > 0) {
      const shopFooter = footerLinks[0];
      shopFooter.innerHTML = `<a href="#/shop" class="footer-link">Semua Produk</a>` +
        CATEGORIES.slice(0, 4).map(c => `<a href="#/shop?cat=${c.slug}" class="footer-link">${c.name}</a>`).join('');
    }

    // Update floating WA button with latest WA number
    const waBtn = document.querySelector('.wa-float-btn');
    if (waBtn) {
      waBtn.href = `https://wa.me/${STORE.whatsapp}?text=Halo,%20saya%20ingin%20bertanya%20tentang%20produk%20TWOSTRYVE`;
    }

    // Update footer brand description
    const footerDesc = document.querySelector('.footer-brand-desc');
    if (footerDesc) {
      footerDesc.textContent = `${STORE.tagline}. Brand streetwear lokal dengan kualitas premium dan desain yang berani.`;
    }

    // Update announcement bar with latest free shipping setting
    const announcementBar = document.querySelector('.announcement-bar');
    if (announcementBar) {
      announcementBar.innerHTML = `🔥 FREE ONGKIR untuk pembelian di atas ${formatPrice(STORE.freeShippingMin)} — <a href="#/shop" style="text-decoration:underline">Shop Now</a>`;
    }
  },

  // ---- Router ----
  handleRoute() {
    if (typeof refreshLiveData === 'function') refreshLiveData();

    // Rebuild dynamic shell parts (header nav + footer) so CMS changes
    // to categories, store settings, etc. are reflected immediately
    this.rebuildShellNav();

    const hash = window.location.hash || '#/';
    const [path, queryString] = hash.slice(1).split('?');
    const params = new URLSearchParams(queryString || '');
    const segments = path.split('/').filter(Boolean);

    window.scrollTo({ top: 0, behavior: 'instant' });
    this.closeMobileMenu();

    const main = document.getElementById('main-content');
    if (!main) return;

    // Route matching
    if (segments.length === 0 || (segments.length === 1 && segments[0] === '')) {
      this.currentPage = 'home';
      this.renderHomePage(main);
    } else if (segments[0] === 'shop') {
      this.currentPage = 'shop';
      this.renderShopPage(main, params);
    } else if (segments[0] === 'product' && segments[1]) {
      this.currentPage = 'product';
      this.renderProductPage(main, segments[1]);
    } else if (segments[0] === 'cart') {
      this.currentPage = 'cart';
      this.renderCartPage(main);
    } else if (segments[0] === 'checkout') {
      this.currentPage = 'checkout';
      this.renderCheckoutPage(main);
    } else if (segments[0] === 'order-success') {
      this.currentPage = 'order-success';
      this.renderOrderSuccessPage(main, params);
    } else if (segments[0] === 'track-order') {
      this.currentPage = 'track-order';
      this.renderTrackOrderPage(main);
    } else if (segments[0] === 'blog') {
      this.currentPage = 'blog';
      this.renderBlogPage(main);
    } else if (segments[0] === 'article' && segments[1]) {
      this.currentPage = 'article';
      this.renderArticlePage(main, segments[1]);
    } else if (segments[0] === 'search') {
      this.currentPage = 'search';
      this.renderSearchPage(main, params);
    } else if (segments[0] === 'about') {
      this.currentPage = 'about';
      this.renderAboutPage(main);
    } else if (segments[0] === 'faq') {
      this.currentPage = 'faq';
      this.renderFAQPage(main);
    } else if (segments[0] === 'size-guide') {
      this.currentPage = 'size-guide';
      this.renderSizeGuidePage(main);
    } else if (segments[0] === 'how-to-shop') {
      this.currentPage = 'how-to-shop';
      this.renderHowToShopPage(main);
    } else if (segments[0] === 'return-policy') {
      this.currentPage = 'return-policy';
      this.renderReturnPolicyPage(main);
    } else if (segments[0] === 'terms') {
      this.currentPage = 'terms';
      this.renderTermsPage(main);
    } else if (segments[0] === 'contact') {
      this.currentPage = 'contact';
      this.renderContactPage(main);
    } else {
      main.innerHTML = `<div class="empty-state" style="min-height:60vh">${ICONS.search}<h3>Halaman Tidak Ditemukan</h3><p>Halaman yang kamu cari tidak ada.</p><a href="#/" class="btn btn-primary">Kembali ke Home</a></div>`;
    }

    // Update active nav
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.page === this.currentPage);
    });

    // Re-setup reveal observer
    setTimeout(() => this.setupRevealObserver(), 100);
  },

  // ---- HOMEPAGE ----
  renderHomePage(container) {
    const cfg = HOMEPAGE_CONFIG;
    const newProducts = [...PRODUCTS].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 8);
    const saleProducts = PRODUCTS.filter(p => p.salePrice);
    const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 4);

    container.innerHTML = `
      ${cfg.showHero ? this.renderHeroBanner() : ''}

      ${cfg.showCategories ? `
      <section class="section">
        <div class="container">
          <div class="section-header reveal">
            <h2 class="section-title">Kategori</h2>
            <a href="#/shop" class="section-link">Lihat Semua ${ICONS.chevronRight}</a>
          </div>
          <div class="grid-4 reveal">
            ${CATEGORIES.slice(0, 4).map(cat => `
              <a href="#/shop?cat=${cat.slug}" class="category-card">
                <img src="${cat.image}" alt="${cat.name}" loading="lazy" />
                <div class="category-card-overlay">
                  <div>
                    <div class="category-card-name">${cat.name}</div>
                    <div class="category-card-count">${cat.count || 0} Produk</div>
                  </div>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      </section>` : ''}

      ${cfg.showNewArrivals ? `
      <section class="section" style="background:#f9f9f9">
        <div class="container">
          <div class="section-header reveal">
            <h2 class="section-title">New Arrivals</h2>
            <a href="#/shop?sort=newest" class="section-link">Lihat Semua ${ICONS.chevronRight}</a>
          </div>
          <div class="grid-4 reveal">
            ${newProducts.slice(0, 4).map(p => this.renderProductCard(p)).join('')}
          </div>
        </div>
      </section>` : ''}

      ${cfg.showPromoBanner ? `
      <section class="section-sm">
        <div class="container reveal">
          <div class="promo-banner">
            <img src="${cfg.promoBannerImage || 'assets/images/promo-mid.png'}" alt="Promo Banner" loading="lazy" />
            <div class="promo-banner-overlay">
              <div class="promo-banner-content">
                <h2>${cfg.promoBannerTitle || 'Free Ongkir'}</h2>
                <p style="color:#eee;margin-bottom:24px">${cfg.promoBannerDesc || 'Untuk pembelian di atas ' + formatPrice(STORE.freeShippingMin)}</p>
                <a href="#/shop" class="btn btn-primary btn-lg">${cfg.promoBannerCta || 'Belanja Sekarang'}</a>
              </div>
            </div>
          </div>
        </div>
      </section>` : ''}

      ${cfg.showSale && saleProducts.length > 0 ? `
      <section class="section">
        <div class="container">
          <div class="section-header reveal">
            <h2 class="section-title">🔥 Sale</h2>
            <a href="#/shop?sale=true" class="section-link">Lihat Semua ${ICONS.chevronRight}</a>
          </div>
          <div class="grid-4 reveal">
            ${saleProducts.slice(0, 4).map(p => this.renderProductCard(p)).join('')}
          </div>
        </div>
      </section>` : ''}

      ${cfg.showBestSellers && featuredProducts.length > 0 ? `
      <section class="section" style="background:#f9f9f9">
        <div class="container">
          <div class="section-header reveal">
            <h2 class="section-title">Best Sellers</h2>
            <a href="#/shop?sort=popular" class="section-link">Lihat Semua ${ICONS.chevronRight}</a>
          </div>
          <div class="grid-4 reveal">
            ${featuredProducts.map(p => this.renderProductCard(p)).join('')}
          </div>
        </div>
      </section>` : ''}

      ${cfg.showMagazine ? `
      <section class="section">
        <div class="container">
          <div class="section-header reveal">
            <h2 class="section-title">Magazine</h2>
            <a href="#/blog" class="section-link">Lihat Semua ${ICONS.chevronRight}</a>
          </div>
          <div class="grid-3 reveal">
            ${ARTICLES.map(a => this.renderArticleCard(a)).join('')}
          </div>
        </div>
      </section>` : ''}

      ${cfg.showNewsletter ? `
      <section class="section-sm">
        <div class="container reveal">
          <div class="newsletter">
            <h2 class="newsletter-title">Stay Updated</h2>
            <p class="newsletter-desc">Daftar newsletter kami untuk mendapatkan info produk terbaru, promo eksklusif, dan konten menarik.</p>
            <form class="newsletter-form" onsubmit="event.preventDefault(); App.showToast('Terima kasih sudah subscribe! 🎉', 'success'); this.reset();">
              <input type="email" class="newsletter-input" placeholder="Email kamu..." required />
              <button type="submit" class="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>` : ''}
    `;
    if (cfg.showHero) this.initHeroBanner();
  },

  renderHeroBanner() {
    return `
    <section class="hero" id="heroBanner">
      <div class="hero-slides" id="heroSlides">
        ${BANNERS.map((b, i) => `
          <div class="hero-slide">
            <img src="${b.image}" alt="${b.title}" />
            <div class="hero-slide-overlay">
              <div class="hero-content">
                <span class="hero-tag">${b.tag}</span>
                <h1 class="hero-title">${b.title}</h1>
                <p class="hero-desc">${b.description}</p>
                <div class="hero-cta">
                  <a href="${b.link}" class="btn btn-primary btn-lg">${b.cta}</a>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      <button class="hero-arrow hero-arrow-prev" onclick="App.heroSlide(-1)">${ICONS.chevronLeft}</button>
      <button class="hero-arrow hero-arrow-next" onclick="App.heroSlide(1)">${ICONS.chevronRight}</button>
      <div class="hero-nav" id="heroNav">
        ${BANNERS.map((_, i) => `<div class="hero-dot${i === 0 ? ' active' : ''}" onclick="App.heroGoTo(${i})"></div>`).join('')}
      </div>
    </section>`;
  },

  heroIndex: 0,
  heroTimer: null,

  initHeroBanner() {
    this.heroIndex = 0;
    this.startHeroAutoplay();
  },

  startHeroAutoplay() {
    clearInterval(this.heroTimer);
    this.heroTimer = setInterval(() => this.heroSlide(1), 5000);
  },

  heroSlide(dir) {
    this.heroIndex = (this.heroIndex + dir + BANNERS.length) % BANNERS.length;
    this.heroGoTo(this.heroIndex);
  },

  heroGoTo(index) {
    this.heroIndex = index;
    const slides = document.getElementById('heroSlides');
    const dots = document.querySelectorAll('.hero-dot');
    if (slides) slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    this.startHeroAutoplay();
  },

  // ---- PRODUCT CARD ----
  renderProductCard(product) {
    const discount = getDiscountPercent(product.price, product.salePrice);
    return `
    <a href="#/product/${product.slug}" class="product-card" data-product-id="${product.id}">
      <div class="product-card-image">
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy" />
        <div class="product-card-badges">
          ${product.isNew ? '<span class="badge badge-new">New</span>' : ''}
          ${discount > 0 ? `<span class="badge badge-sale">-${discount}%</span>` : ''}
        </div>
        <div class="product-card-actions">
          <button class="product-card-action-btn" onclick="event.preventDefault(); event.stopPropagation(); App.quickAddToCart(${product.id})" aria-label="Tambah ke keranjang">${ICONS.shoppingBag}</button>
          <button class="product-card-action-btn" onclick="event.preventDefault(); event.stopPropagation();" aria-label="Quick view">${ICONS.eye}</button>
        </div>
      </div>
      <div class="product-card-body">
        <div class="product-card-category">${product.category}</div>
        <h3 class="product-card-name">${product.name}</h3>
        <div class="product-card-price">
          <span class="price-current">${formatPrice(product.salePrice || product.price)}</span>
          ${product.salePrice ? `<span class="price-original">${formatPrice(product.price)}</span>` : ''}
        </div>
        ${product.colors.length > 1 ? `
        <div class="product-card-colors">
          ${product.colors.map(c => `<span class="color-dot" style="background:${c.hex}" title="${c.name}"></span>`).join('')}
        </div>` : ''}
      </div>
    </a>`;
  },

  quickAddToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const firstColor = product.colors[0].name;
    const firstSize = product.sizes[0];
    Cart.addItem(product, firstColor, firstSize, 1);
    this.showToast(`${product.name} ditambahkan ke keranjang!`, 'success');
    this.openCartDrawer();
  },

  // ---- ARTICLE CARD ----
  renderArticleCard(article) {
    return `
    <a href="#/article/${article.slug}" class="article-card">
      <div class="article-card-image">
        <img src="${article.coverImage}" alt="${article.title}" loading="lazy" />
      </div>
      <div class="article-card-body">
        <span class="article-card-tag">${article.tag}</span>
        <h3 class="article-card-title">${article.title}</h3>
        <p class="article-card-excerpt">${article.excerpt}</p>
        <div class="article-card-meta">
          <span>${article.publishedAt}</span>
          <span>·</span>
          <span>${article.readTime}</span>
        </div>
      </div>
    </a>`;
  },

  // ---- SHOP PAGE ----
  renderShopPage(container, params) {
    const catFilter = params.get('cat') || '';
    const saleFilter = params.get('sale') === 'true';
    const sortParam = params.get('sort') || 'newest';

    let filtered = [...PRODUCTS];
    if (catFilter) filtered = filtered.filter(p => CATEGORIES.find(c => c.slug === catFilter && c.id === p.categoryId));
    if (saleFilter) filtered = filtered.filter(p => p.salePrice);

    // Sort
    switch (sortParam) {
      case 'newest': filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); break;
      case 'price-low': filtered.sort((a, b) => getDisplayPrice(a) - getDisplayPrice(b)); break;
      case 'price-high': filtered.sort((a, b) => getDisplayPrice(b) - getDisplayPrice(a)); break;
      case 'popular': filtered.sort((a, b) => b.soldCount - a.soldCount); break;
    }

    const catName = catFilter ? CATEGORIES.find(c => c.slug === catFilter)?.name || 'Produk' : 'Semua Produk';

    container.innerHTML = `
    <div class="container">
      <div class="breadcrumb">
        <a href="#/">Home</a> <span class="sep">/</span> <span>Shop</span>
        ${catFilter ? `<span class="sep">/</span> <span>${catName}</span>` : ''}
      </div>
      <div class="page-hero" style="background:transparent;border:none;padding:var(--space-8) 0 var(--space-4)">
        <h1 style="text-align:left">${saleFilter ? '🔥 Sale Items' : catName}</h1>
      </div>

      <div class="shop-layout">
        <aside class="shop-sidebar" id="shopSidebar">
          <div class="filter-group">
            <h4 class="filter-title">Kategori</h4>
            <div class="filter-option ${!catFilter ? 'active' : ''}" onclick="window.location.hash='#/shop'">
              <span class="filter-checkbox"></span> Semua <span class="filter-count">${PRODUCTS.length}</span>
            </div>
            ${CATEGORIES.map(c => {
              const count = PRODUCTS.filter(p => p.categoryId === c.id).length;
              return `<div class="filter-option ${catFilter === c.slug ? 'active' : ''}" onclick="window.location.hash='#/shop?cat=${c.slug}'">
                <span class="filter-checkbox"></span> ${c.name} <span class="filter-count">${count}</span>
              </div>`;
            }).join('')}
          </div>
          <div class="filter-group">
            <h4 class="filter-title">Promo</h4>
            <div class="filter-option ${saleFilter ? 'active' : ''}" onclick="window.location.hash='#/shop?sale=true'">
              <span class="filter-checkbox"></span> Sedang Diskon <span class="filter-count">${PRODUCTS.filter(p => p.salePrice).length}</span>
            </div>
          </div>
        </aside>

        <div>
          <div class="shop-toolbar">
            <button class="btn btn-ghost filter-toggle-btn" onclick="document.getElementById('shopSidebar').classList.toggle('show')">${ICONS.filter} Filter</button>
            <span class="shop-result-count">${filtered.length} produk ditemukan</span>
            <div class="shop-sort">
              <label>Sort:</label>
              <select onchange="window.location.hash='#/shop?${catFilter ? 'cat=' + catFilter + '&' : ''}${saleFilter ? 'sale=true&' : ''}sort=' + this.value">
                <option value="newest" ${sortParam === 'newest' ? 'selected' : ''}>Terbaru</option>
                <option value="price-low" ${sortParam === 'price-low' ? 'selected' : ''}>Termurah</option>
                <option value="price-high" ${sortParam === 'price-high' ? 'selected' : ''}>Termahal</option>
                <option value="popular" ${sortParam === 'popular' ? 'selected' : ''}>Terlaris</option>
              </select>
            </div>
          </div>
          ${filtered.length > 0 ? `
            <div class="product-grid">
              ${filtered.map(p => this.renderProductCard(p)).join('')}
            </div>
          ` : `
            <div class="empty-state">
              ${ICONS.shoppingBag}
              <h3>Tidak ada produk</h3>
              <p>Coba ubah filter atau cari produk lain.</p>
              <a href="#/shop" class="btn btn-outline">Lihat Semua Produk</a>
            </div>
          `}
        </div>
      </div>
    </div>`;
  },

  // ---- PRODUCT DETAIL PAGE ----
  renderProductPage(container, slug) {
    const product = PRODUCTS.find(p => p.slug === slug);
    if (!product) {
      container.innerHTML = `<div class="empty-state" style="min-height:60vh">${ICONS.search}<h3>Produk Tidak Ditemukan</h3><p>Produk yang kamu cari tidak tersedia.</p><a href="#/shop" class="btn btn-primary">Kembali ke Shop</a></div>`;
      return;
    }

    const discount = getDiscountPercent(product.price, product.salePrice);
    const related = PRODUCTS.filter(p => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 4);
    const defaultColor = product.colors[0].name;
    const defaultSize = product.sizes[0];

    container.innerHTML = `
    <div class="container product-detail">
      <div class="breadcrumb">
        <a href="#/">Home</a> <span class="sep">/</span>
        <a href="#/shop">Shop</a> <span class="sep">/</span>
        <a href="#/shop?cat=${CATEGORIES.find(c => c.id === product.categoryId)?.slug || ''}">${product.category}</a> <span class="sep">/</span>
        <span>${product.name}</span>
      </div>

      <div class="product-detail-grid">
        <div class="gallery">
          <div class="gallery-main" onclick="App.openLightbox(this.querySelector('img').src)">
            <img src="${product.images[0]}" alt="${product.name}" id="galleryMainImg" />
          </div>
          <div class="gallery-thumbs">
            ${product.images.map((img, i) => `
              <div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="App.switchGalleryImage('${img}', this)">
                <img src="${img}" alt="${product.name} ${i + 1}" />
              </div>
            `).join('')}
          </div>
        </div>

        <div class="product-info">
          <h1 class="product-name">${product.name}</h1>

          <div class="product-price-section">
            ${product.salePrice ? `
              <span class="product-price product-price-sale">${formatPrice(product.salePrice)}</span>
              <span class="product-price-original">${formatPrice(product.price)}</span>
              <span class="product-discount-badge">-${discount}%</span>
            ` : `
              <span class="product-price">${formatPrice(product.price)}</span>
            `}
          </div>

          <p class="product-desc">${product.description}</p>

          ${product.colors.length > 0 ? `
          <div class="variant-section">
            <div class="variant-label">Warna: <span id="selectedColorName">${defaultColor}</span></div>
            <div class="color-swatches">
              ${product.colors.map((c, i) => `
                <button class="color-swatch ${i === 0 ? 'active' : ''}" style="background:${c.hex}" data-color="${c.name}" title="${c.name}" onclick="App.selectColor(this, ${product.id})"></button>
              `).join('')}
            </div>
          </div>` : ''}

          <div class="variant-section">
            <div class="variant-label">Ukuran: <span id="selectedSizeName">${defaultSize}</span></div>
            <div class="size-options" id="sizeOptions">
              ${product.sizes.map((s, i) => {
                const variant = product.variants.find(v => v.color === defaultColor && v.size === s);
                const stock = variant ? variant.stock : 0;
                return `<button class="size-option ${i === 0 ? 'active' : ''} ${stock === 0 ? 'disabled' : ''}" data-size="${s}" data-stock="${stock}" onclick="App.selectSize(this, ${product.id})" ${stock === 0 ? 'disabled' : ''}>${s}</button>`;
              }).join('')}
            </div>
            <div class="stock-info" id="stockInfo"></div>
          </div>

          <div class="product-actions">
            <div class="qty-selector">
              <button onclick="App.changeQty(-1)">−</button>
              <input type="number" id="productQty" value="1" min="1" max="99" readonly />
              <button onclick="App.changeQty(1)">+</button>
            </div>
            <button class="btn btn-primary btn-lg" style="flex:1" onclick="App.addProductToCart(${product.id})" id="addToCartBtn">
              ${ICONS.shoppingBag} Tambah ke Keranjang
            </button>
          </div>

          <div class="accordion" style="margin-top:var(--space-8)">
            <div class="accordion-item">
              <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('open')">
                Detail Produk ${ICONS.chevronDown}
              </button>
              <div class="accordion-content"><div class="accordion-content-inner">
                <p><strong>Material:</strong> ${product.material}</p>
                <p><strong>Berat:</strong> ${product.weight}g</p>
                <p>${product.description}</p>
              </div></div>
            </div>
            <div class="accordion-item">
              <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('open')">
                Size Guide ${ICONS.chevronDown}
              </button>
              <div class="accordion-content"><div class="accordion-content-inner">
                <p>Lihat <a href="#/size-guide" style="color:var(--color-accent);text-decoration:underline">Size Guide lengkap</a> untuk panduan ukuran.</p>
              </div></div>
            </div>
            <div class="accordion-item">
              <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('open')">
                Pengiriman & Retur ${ICONS.chevronDown}
              </button>
              <div class="accordion-content"><div class="accordion-content-inner">
                <p>Pesanan diproses dalam 1-2 hari kerja. Free ongkir untuk pembelian di atas ${formatPrice(STORE.freeShippingMin)}.</p>
                <p>Return/tukar dalam 7 hari setelah diterima. <a href="#/return-policy" style="color:var(--color-accent);text-decoration:underline">Baca kebijakan retur</a>.</p>
              </div></div>
            </div>
          </div>

          <div style="margin-top:var(--space-6);display:flex;gap:var(--space-4);align-items:center">
            <span style="font-size:var(--text-sm);color:var(--color-text-muted)">Share:</span>
            <a href="https://wa.me/?text=Cek%20produk%20${encodeURIComponent(product.name)}%20di%20TWOSTRYVE" target="_blank" class="btn btn-ghost btn-sm">${ICONS.whatsapp}</a>
          </div>
        </div>
      </div>

      ${related.length > 0 ? `
      <section class="section">
        <div class="section-header">
          <h2 class="section-title">Produk Terkait</h2>
        </div>
        <div class="grid-4">
          ${related.map(p => this.renderProductCard(p)).join('')}
        </div>
      </section>` : ''}
    </div>`;

    // Initialize stock info
    this.updateStockInfo(product.id);
  },

  selectedColor: null,
  selectedSize: null,

  selectColor(btn, productId) {
    document.querySelectorAll('.color-swatch').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    this.selectedColor = btn.dataset.color;
    document.getElementById('selectedColorName').textContent = btn.dataset.color;

    // Update size availability
    const product = PRODUCTS.find(p => p.id === productId);
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(opt => {
      const variant = product.variants.find(v => v.color === btn.dataset.color && v.size === opt.dataset.size);
      const stock = variant ? variant.stock : 0;
      opt.dataset.stock = stock;
      opt.classList.toggle('disabled', stock === 0);
      opt.disabled = stock === 0;
    });
    this.updateStockInfo(productId);
  },

  selectSize(btn, productId) {
    if (btn.disabled) return;
    document.querySelectorAll('.size-option').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    this.selectedSize = btn.dataset.size;
    document.getElementById('selectedSizeName').textContent = btn.dataset.size;
    this.updateStockInfo(productId);
  },

  updateStockInfo(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    const color = this.selectedColor || document.querySelector('.color-swatch.active')?.dataset.color || product.colors[0].name;
    const size = this.selectedSize || document.querySelector('.size-option.active')?.dataset.size || product.sizes[0];
    const variant = product.variants.find(v => v.color === color && v.size === size);
    const stock = variant ? variant.stock : 0;
    const el = document.getElementById('stockInfo');
    if (el) {
      if (stock === 0) {
        el.className = 'stock-info out';
        el.textContent = 'Stok habis';
      } else if (stock <= 5) {
        el.className = 'stock-info low';
        el.textContent = `Sisa ${stock} — Hampir habis!`;
      } else {
        el.className = 'stock-info';
        el.textContent = `Stok tersedia (${stock})`;
      }
    }
    // Disable add to cart if out of stock
    const addBtn = document.getElementById('addToCartBtn');
    if (addBtn) {
      addBtn.disabled = stock === 0;
      addBtn.classList.toggle('disabled', stock === 0);
    }
  },

  changeQty(delta) {
    const input = document.getElementById('productQty');
    if (input) {
      let val = parseInt(input.value) + delta;
      if (val < 1) val = 1;
      if (val > 99) val = 99;
      input.value = val;
    }
  },

  addProductToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const color = document.querySelector('.color-swatch.active')?.dataset.color || product.colors[0].name;
    const size = document.querySelector('.size-option.active')?.dataset.size || product.sizes[0];
    const qty = parseInt(document.getElementById('productQty')?.value || 1);

    Cart.addItem(product, color, size, qty);
    this.showToast(`${product.name} (${color}, ${size}) ditambahkan ke keranjang!`, 'success');
    this.openCartDrawer();
  },

  switchGalleryImage(src, thumb) {
    const mainImg = document.getElementById('galleryMainImg');
    if (mainImg) mainImg.src = src;
    document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  },

  // ---- CART PAGE ----
  renderCartPage(container) {
    const items = Cart.getItems();
    container.innerHTML = `
    <div class="container" style="padding-top:var(--space-8);padding-bottom:var(--space-16);min-height:60vh">
      <div class="breadcrumb">
        <a href="#/">Home</a> <span class="sep">/</span> <span>Keranjang</span>
      </div>
      <h1 style="font-family:var(--font-heading);font-size:var(--text-4xl);letter-spacing:2px;margin-bottom:var(--space-8)">KERANJANG BELANJA</h1>

      ${items.length === 0 ? `
        <div class="empty-state">
          ${ICONS.shoppingBag}
          <h3>Keranjang Kosong</h3>
          <p>Belum ada produk di keranjang kamu.</p>
          <a href="#/shop" class="btn btn-primary">Mulai Belanja</a>
        </div>
      ` : `
        <div class="cart-page-grid">
          <div>
            <div class="cart-table-header">
              <span>Produk</span><span>Harga</span><span>Jumlah</span><span>Subtotal</span><span></span>
            </div>
            ${items.map(item => `
              <div class="cart-page-item">
                <div class="cart-page-item-info">
                  <div class="cart-page-item-image">
                    <img src="${item.image}" alt="${item.name}" />
                  </div>
                  <div>
                    <div style="font-weight:600">${item.name}</div>
                    <div style="font-size:var(--text-xs);color:var(--color-text-muted);margin-top:4px">${item.color} / ${item.size}</div>
                  </div>
                </div>
                <div style="font-size:var(--text-sm)">${formatPrice(item.price)}</div>
                <div>
                  <div class="cart-item-qty">
                    <button onclick="Cart.updateQty(${item.productId}, '${item.color}', '${item.size}', ${item.qty - 1}); App.renderCartPage(document.getElementById('main-content'))">−</button>
                    <span>${item.qty}</span>
                    <button onclick="Cart.updateQty(${item.productId}, '${item.color}', '${item.size}', ${item.qty + 1}); App.renderCartPage(document.getElementById('main-content'))">+</button>
                  </div>
                </div>
                <div style="font-weight:700">${formatPrice(item.price * item.qty)}</div>
                <button class="cart-item-remove" onclick="Cart.removeItem(${item.productId}, '${item.color}', '${item.size}'); App.renderCartPage(document.getElementById('main-content'))">${ICONS.trash}</button>
              </div>
            `).join('')}
          </div>
          <div class="cart-summary">
            <h3 class="cart-summary-title">Ringkasan Pesanan</h3>
            <div class="cart-summary-row"><span>Subtotal</span><span>${formatPrice(Cart.getSubtotal())}</span></div>
            <div class="cart-summary-row"><span>Estimasi Ongkir</span><span>${Cart.getShipping() === 0 ? '<span style="color:var(--color-success)">GRATIS</span>' : formatPrice(Cart.getShipping())}</span></div>
            <div class="cart-summary-row total"><span>Total</span><span>${formatPrice(Cart.getTotal())}</span></div>
            <a href="#/checkout" class="btn btn-primary btn-block btn-lg" style="margin-top:var(--space-6)">Checkout</a>
            <a href="#/shop" class="btn btn-ghost btn-block" style="margin-top:var(--space-3)">Lanjut Belanja</a>
          </div>
        </div>
      `}
    </div>`;
  },

  // ---- CHECKOUT PAGE ----
  renderCheckoutPage(container) {
    const items = Cart.getItems();
    if (items.length === 0) {
      window.location.hash = '#/cart';
      return;
    }

    container.innerHTML = `
    <div class="container" style="padding-top:var(--space-8);padding-bottom:var(--space-16)">
      <div class="breadcrumb">
        <a href="#/">Home</a> <span class="sep">/</span> <a href="#/cart">Keranjang</a> <span class="sep">/</span> <span>Checkout</span>
      </div>
      <h1 style="font-family:var(--font-heading);font-size:var(--text-4xl);letter-spacing:2px;margin-bottom:var(--space-8)">CHECKOUT</h1>

      <form class="checkout-grid" id="checkoutForm" onsubmit="event.preventDefault(); App.processCheckout()">
        <div>
          <div class="form-section">
            <h3 class="form-section-title">Data Pembeli</h3>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Nama Lengkap <span class="required">*</span></label>
                <input type="text" class="form-input" name="name" required placeholder="Nama lengkap kamu" />
              </div>
              <div class="form-group">
                <label class="form-label">No. HP / WhatsApp <span class="required">*</span></label>
                <input type="tel" class="form-input" name="phone" required placeholder="08xxxxxxxxxx" />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Email <span class="required">*</span></label>
              <input type="email" class="form-input" name="email" required placeholder="email@contoh.com" />
            </div>
            <div class="form-group">
              <label class="form-label">Alamat Lengkap <span class="required">*</span></label>
              <textarea class="form-textarea" name="address" required placeholder="Jalan, No. Rumah, RT/RW, Kelurahan, Kecamatan, Kota, Provinsi, Kode Pos"></textarea>
            </div>
            <div class="form-group">
              <label class="form-label">Catatan (opsional)</label>
              <textarea class="form-textarea" name="notes" placeholder="Catatan tambahan untuk pesanan kamu..." style="min-height:60px"></textarea>
            </div>
          </div>

          <div class="form-section">
            <h3 class="form-section-title">Metode Pembayaran</h3>
            <div class="payment-options" id="paymentOptions">
              <div class="payment-option active" data-method="transfer" onclick="App.selectPayment(this)">
                <span class="payment-radio"></span>
                <div><div class="payment-name">Transfer Bank</div><div class="payment-desc">BCA / Mandiri</div></div>
              </div>
              <div class="payment-option" data-method="qris" onclick="App.selectPayment(this)">
                <span class="payment-radio"></span>
                <div><div class="payment-name">QRIS</div><div class="payment-desc">Scan QR dari e-wallet atau mobile banking</div></div>
              </div>
              <div class="payment-option" data-method="cod" onclick="App.selectPayment(this)">
                <span class="payment-radio"></span>
                <div><div class="payment-name">COD (Cash on Delivery)</div><div class="payment-desc">Bayar saat barang diterima — area terbatas</div></div>
              </div>
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-lg btn-block">Buat Pesanan</button>
        </div>

        <div class="cart-summary" style="position:sticky;top:calc(var(--header-height) + var(--space-8))">
          <h3 class="cart-summary-title">Ringkasan Pesanan</h3>
          ${items.map(item => `
            <div style="display:flex;gap:var(--space-3);padding:var(--space-3) 0;border-bottom:1px solid var(--color-border)">
              <div style="width:50px;height:60px;border-radius:var(--radius-sm);overflow:hidden;flex-shrink:0;background:var(--color-bg-card)">
                <img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover" />
              </div>
              <div style="flex:1;font-size:var(--text-sm)">
                <div style="font-weight:600">${item.name}</div>
                <div style="color:var(--color-text-muted);font-size:var(--text-xs)">${item.color} / ${item.size} × ${item.qty}</div>
              </div>
              <div style="font-weight:600;font-size:var(--text-sm);white-space:nowrap">${formatPrice(item.price * item.qty)}</div>
            </div>
          `).join('')}
          <div class="cart-summary-row" style="margin-top:var(--space-4)"><span>Subtotal</span><span>${formatPrice(Cart.getSubtotal())}</span></div>
          <div class="cart-summary-row"><span>Ongkir</span><span>${Cart.getShipping() === 0 ? '<span style="color:var(--color-success)">GRATIS</span>' : formatPrice(Cart.getShipping())}</span></div>
          <div class="cart-summary-row total"><span>Total</span><span style="color:var(--color-accent)">${formatPrice(Cart.getTotal())}</span></div>
        </div>
      </form>
    </div>`;
  },

  selectPayment(el) {
    document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('active'));
    el.classList.add('active');
  },

  async processCheckout() {
    const form = document.getElementById('checkoutForm');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (!data.name || !data.phone || !data.email || !data.address) {
      this.showToast('Mohon lengkapi semua field yang wajib diisi', 'error');
      return;
    }

    const invoice = generateInvoice();
    const payment = document.querySelector('.payment-option.active')?.dataset.method || 'transfer';

    const order = {
      invoice,
      ...data,
      payment,
      items: Cart.getItems(),
      subtotal: Cart.getSubtotal(),
      shipping: Cart.getShipping(),
      total: Cart.getTotal(),
      status: 'new',
      createdAt: new Date().toISOString(),
    };

    // Dual-save: Save to localStorage (fallback) and send to Supabase Cloud
    const orders = JSON.parse(localStorage.getItem('twostryve_orders') || '[]');
    orders.push(order);
    localStorage.setItem('twostryve_orders', JSON.stringify(orders));

    if (typeof SupabaseEngine !== 'undefined' && SupabaseEngine.isConfigured) {
      await SupabaseEngine.insertOrder(order);
    }

    Cart.clear();
    window.location.hash = `#/order-success?invoice=${invoice}`;
  },

  // ---- ORDER SUCCESS PAGE ----
  renderOrderSuccessPage(container, params) {
    const invoiceNo = params.get('invoice') || 'INV-XXXXXX-XXXX';
    const orders = JSON.parse(localStorage.getItem('twostryve_orders') || '[]');
    const order = orders.find(o => o.invoice === invoiceNo);

    container.innerHTML = `
    <div class="order-success">
      <div class="order-success-icon">${ICONS.check}</div>
      <h1>Pesanan Berhasil!</h1>
      <p style="color:var(--color-text-secondary)">Terima kasih sudah berbelanja di TWOSTRYVE. Berikut detail pesanan kamu.</p>

      <div class="order-invoice">
        <div class="order-invoice-number">${invoiceNo}</div>

        ${order ? `
        <div style="margin-bottom:var(--space-6)">
          ${order.items.map(item => `
          <div style="display:flex;gap:var(--space-3);padding:var(--space-3) 0;border-bottom:1px solid var(--color-border)">
            <div style="width:50px;height:60px;border-radius:var(--radius-sm);overflow:hidden;flex-shrink:0;background:var(--color-bg-card)">
              <img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover" />
            </div>
            <div style="flex:1;font-size:var(--text-sm)">
              <div style="font-weight:600">${item.name}</div>
              <div style="color:var(--color-text-muted);font-size:var(--text-xs)">${item.color} / ${item.size} × ${item.qty}</div>
            </div>
            <div style="font-weight:600;font-size:var(--text-sm)">${formatPrice(item.price * item.qty)}</div>
          </div>
          `).join('')}
        </div>
        <div class="cart-summary-row"><span>Subtotal</span><span>${formatPrice(order.subtotal)}</span></div>
        <div class="cart-summary-row"><span>Ongkir</span><span>${order.shipping === 0 ? 'GRATIS' : formatPrice(order.shipping)}</span></div>
        <div class="cart-summary-row total"><span>Total</span><span style="color:var(--color-accent)">${formatPrice(order.total)}</span></div>
        ` : ''}

        <div style="margin-top:var(--space-8);padding:var(--space-6);background:var(--color-bg);border-radius:var(--radius-md)">
          <h4 style="font-family:var(--font-heading);font-size:var(--text-xl);letter-spacing:2px;margin-bottom:var(--space-4)">INSTRUKSI PEMBAYARAN</h4>
          <p style="font-size:var(--text-sm);color:var(--color-text-secondary);margin-bottom:var(--space-4)">Silakan transfer ke salah satu rekening berikut:</p>
          ${STORE.bankAccounts.map(acc => `
          <div style="padding:var(--space-3);border:1px solid var(--color-border);border-radius:var(--radius-sm);margin-bottom:var(--space-2)">
            <div style="font-weight:700">${acc.bank}</div>
            <div style="font-size:var(--text-lg);font-family:monospace;color:var(--color-accent)">${acc.number}</div>
            <div style="font-size:var(--text-xs);color:var(--color-text-muted)">a.n. ${acc.name}</div>
          </div>
          `).join('')}
          <p style="font-size:var(--text-sm);color:var(--color-warning);margin-top:var(--space-4)">⚠️ Lakukan pembayaran dalam 24 jam. Pesanan akan otomatis dibatalkan jika melewati batas waktu.</p>
        </div>
      </div>

      <div style="margin-top:var(--space-8);display:flex;gap:var(--space-3);justify-content:center;flex-wrap:wrap">
        <a href="https://wa.me/${STORE.whatsapp}?text=Halo,%20saya%20sudah%20memesan%20dengan%20invoice%20${invoiceNo}" target="_blank" class="btn btn-primary">${ICONS.whatsapp} Konfirmasi via WA</a>
        <a href="#/track-order" class="btn btn-outline">Cek Status Pesanan</a>
        <a href="#/shop" class="btn btn-ghost">Lanjut Belanja</a>
      </div>
    </div>`;
  },

  // ---- TRACK ORDER PAGE ----
  renderTrackOrderPage(container) {
    container.innerHTML = `
    <div class="track-order-box">
      <h1>Cek Status Pesanan</h1>
      <p style="color:var(--color-text-secondary);margin-bottom:var(--space-8)">Masukkan No. Invoice atau No. HP untuk mengecek status pesanan kamu.</p>

      <form onsubmit="event.preventDefault(); App.trackOrder()" style="max-width:400px;margin:0 auto">
        <div class="form-group">
          <input type="text" class="form-input" id="trackInput" placeholder="No. Invoice (INV-XXXXXX-XXXX) atau No. HP" style="text-align:center" />
        </div>
        <button type="submit" class="btn btn-primary btn-block btn-lg">Cek Pesanan</button>
      </form>

      <div id="trackResult" style="margin-top:var(--space-8)"></div>
    </div>`;
  },

  trackOrder() {
    const query = document.getElementById('trackInput')?.value.trim();
    const result = document.getElementById('trackResult');
    if (!query || !result) return;

    const orders = JSON.parse(localStorage.getItem('twostryve_orders') || '[]');
    const order = orders.find(o => o.invoice === query || o.phone === query);

    if (!order) {
      result.innerHTML = `<div class="empty-state" style="padding:var(--space-8)"><h3>Pesanan Tidak Ditemukan</h3><p>Pastikan No. Invoice atau No. HP yang kamu masukkan benar.</p></div>`;
      return;
    }

    const statusSteps = ['Pesanan Dibuat', 'Menunggu Pembayaran', 'Diverifikasi', 'Diproses', 'Dikirim', 'Selesai'];
    const currentStep = 1; // Default for mock

    result.innerHTML = `
    <div class="order-invoice" style="text-align:left">
      <div class="order-invoice-number">${order.invoice}</div>
      <div class="cart-summary-row"><span>Nama</span><span>${order.name}</span></div>
      <div class="cart-summary-row"><span>Total</span><span style="font-weight:700;color:var(--color-accent)">${formatPrice(order.total)}</span></div>
      <div class="cart-summary-row"><span>Pembayaran</span><span style="text-transform:uppercase">${order.payment}</span></div>
      <div class="cart-summary-row"><span>Tanggal</span><span>${new Date(order.createdAt).toLocaleDateString('id-ID')}</span></div>

      <div class="order-timeline" style="margin-top:var(--space-8)">
        ${statusSteps.map((step, i) => `
          <div class="timeline-step ${i < currentStep ? 'completed' : ''} ${i === currentStep ? 'current' : ''}">
            <div class="timeline-step-title">${step}</div>
            ${i <= currentStep ? `<div class="timeline-step-time">${new Date(order.createdAt).toLocaleDateString('id-ID')}</div>` : ''}
          </div>
        `).join('')}
      </div>
    </div>`;
  },

  // ---- BLOG PAGE ----
  renderBlogPage(container) {
    container.innerHTML = `
    <div class="page-hero"><div class="container"><h1>Magazine</h1><p>Insight, tips, dan cerita dari dunia streetwear</p></div></div>
    <div class="container section">
      <div class="blog-grid">
        ${ARTICLES.length > 0 ? `<div class="blog-featured">${this.renderArticleCard(ARTICLES[0])}</div>` : ''}
        ${ARTICLES.slice(1).map(a => this.renderArticleCard(a)).join('')}
      </div>
    </div>`;
  },

  // ---- ARTICLE DETAIL ----
  renderArticlePage(container, slug) {
    const article = ARTICLES.find(a => a.slug === slug);
    if (!article) {
      container.innerHTML = `<div class="empty-state" style="min-height:60vh"><h3>Artikel Tidak Ditemukan</h3><a href="#/blog" class="btn btn-primary">Kembali ke Blog</a></div>`;
      return;
    }

    container.innerHTML = `
    <div class="article-detail">
      <div class="breadcrumb"><a href="#/">Home</a> <span class="sep">/</span> <a href="#/blog">Blog</a> <span class="sep">/</span> <span>${article.title}</span></div>
      <div class="article-detail-cover"><img src="${article.coverImage}" alt="${article.title}" /></div>
      <span class="article-card-tag">${article.tag}</span>
      <h1>${article.title}</h1>
      <div class="article-detail-meta">
        <span>${article.publishedAt}</span>
        <span>·</span>
        <span>${article.readTime}</span>
      </div>
      <div class="article-detail-content">${article.content}</div>

      ${ARTICLES.filter(a => a.id !== article.id).length > 0 ? `
      <div style="margin-top:var(--space-16)">
        <h2 class="section-title" style="margin-bottom:var(--space-6)">Artikel Lainnya</h2>
        <div class="grid-2">${ARTICLES.filter(a => a.id !== article.id).map(a => this.renderArticleCard(a)).join('')}</div>
      </div>` : ''}
    </div>`;
  },

  // ---- SEARCH PAGE ----
  renderSearchPage(container, params) {
    const q = params.get('q') || '';
    const results = PRODUCTS.filter(p => p.name.toLowerCase().includes(q.toLowerCase()) || p.category.toLowerCase().includes(q.toLowerCase()));

    container.innerHTML = `
    <div class="container section" style="min-height:60vh">
      <h1 style="font-family:var(--font-heading);font-size:var(--text-4xl);letter-spacing:2px;margin-bottom:var(--space-2)">HASIL PENCARIAN</h1>
      <p style="color:var(--color-text-muted);margin-bottom:var(--space-8)">${results.length} hasil untuk "${q}"</p>
      ${results.length > 0 ? `<div class="product-grid">${results.map(p => this.renderProductCard(p)).join('')}</div>` : `
        <div class="empty-state">${ICONS.search}<h3>Tidak Ditemukan</h3><p>Coba gunakan kata kunci lain.</p><a href="#/shop" class="btn btn-outline">Lihat Semua Produk</a></div>
      `}
    </div>`;
  },

  // ---- STATIC PAGES (CMS-integrated via PAGES_CONTENT) ----
  renderAboutPage(container) {
    const page = PAGES_CONTENT.about || {};
    const title = page.title || 'Tentang Kami';
    const subtitle = page.subtitle || 'Mengenal lebih dekat TWOSTRYVE';
    const content = page.content || '<p>Konten belum tersedia.</p>';
    container.innerHTML = `
    <div class="page-hero"><div class="container"><h1>${title}</h1><p>${subtitle}</p></div></div>
    <div class="page-content">${content}</div>`;
  },

  renderFAQPage(container) {
    container.innerHTML = `
    <div class="page-hero"><div class="container"><h1>FAQ</h1><p>Frequently Asked Questions</p></div></div>
    <div class="page-content">
      ${FAQ_ITEMS.map((item, i) => `
      <div class="faq-item" id="faq-${i}">
        <button class="faq-question" onclick="this.parentElement.classList.toggle('open'); const c = this.nextElementSibling; c.style.maxHeight = c.style.maxHeight ? null : c.scrollHeight + 'px';">
          ${item.q} ${ICONS.plus}
        </button>
        <div class="faq-answer"><div class="faq-answer-inner">${item.a}</div></div>
      </div>`).join('')}
    </div>`;
  },

  renderSizeGuidePage(container) {
    container.innerHTML = `
    <div class="page-hero"><div class="container"><h1>Size Guide</h1><p>Panduan ukuran untuk memastikan kamu mendapatkan fit yang sempurna</p></div></div>
    <div class="page-content">
      <p>Semua ukuran dalam <strong>sentimeter (cm)</strong>. Toleransi ±1-2cm karena proses produksi.</p>
      ${Object.values(SIZE_CHART).map(chart => `
        <h2>${chart.title}</h2>
        <table class="size-table">
          <thead><tr>${chart.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
          <tbody>${chart.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
        </table>
      `).join('')}
      <p style="margin-top:var(--space-8)">Masih ragu soal ukuran? <a href="https://wa.me/${STORE.whatsapp}" target="_blank" style="color:var(--color-accent);text-decoration:underline">Chat kami via WhatsApp</a> dan kami bantu pilihkan ukuran yang tepat!</p>
    </div>`;
  },

  renderHowToShopPage(container) {
    container.innerHTML = `
    <div class="page-hero"><div class="container"><h1>Cara Belanja</h1><p>Panduan langkah demi langkah untuk berbelanja di TWOSTRYVE</p></div></div>
    <div class="container section">
      <div class="steps">
        <div class="step-card">
          <div class="step-number">1</div>
          <h3>Pilih Produk</h3>
          <p>Browse katalog, pilih warna & ukuran yang kamu inginkan.</p>
        </div>
        <div class="step-card">
          <div class="step-number">2</div>
          <h3>Checkout</h3>
          <p>Masukkan ke keranjang, isi form data pembeli & alamat.</p>
        </div>
        <div class="step-card">
          <div class="step-number">3</div>
          <h3>Bayar</h3>
          <p>Transfer ke rekening kami atau pilih metode pembayaran lain.</p>
        </div>
        <div class="step-card">
          <div class="step-number">4</div>
          <h3>Terima Barang</h3>
          <p>Pesanan diproses & dikirim ke alamat kamu. Cek status kapan saja!</p>
        </div>
      </div>

      <div style="text-align:center;margin-top:var(--space-12)">
        <p style="color:var(--color-text-secondary);margin-bottom:var(--space-4)">Butuh bantuan? Jangan ragu hubungi kami!</p>
        <a href="https://wa.me/${STORE.whatsapp}" target="_blank" class="btn btn-primary btn-lg">${ICONS.whatsapp} Chat Admin</a>
      </div>
    </div>`;
  },

  renderReturnPolicyPage(container) {
    const page = PAGES_CONTENT.returnPolicy || {};
    const title = page.title || 'Kebijakan Retur';
    const subtitle = page.subtitle || 'Return & Exchange Policy';
    const content = page.content || '<p>Konten belum tersedia.</p>';
    container.innerHTML = `
    <div class="page-hero"><div class="container"><h1>${title}</h1><p>${subtitle}</p></div></div>
    <div class="page-content">
      ${content}
      <p style="margin-top:var(--space-6)"><a href="https://wa.me/${STORE.whatsapp}" target="_blank" style="color:var(--color-accent);text-decoration:underline">Hubungi CS untuk proses return →</a></p>
    </div>`;
  },

  renderTermsPage(container) {
    const page = PAGES_CONTENT.terms || {};
    const title = page.title || 'Syarat & Ketentuan';
    const subtitle = page.subtitle || 'Terms and Conditions';
    const content = page.content || '<p>Konten belum tersedia.</p>';
    container.innerHTML = `
    <div class="page-hero"><div class="container"><h1>${title}</h1><p>${subtitle}</p></div></div>
    <div class="page-content">${content}</div>`;
  },

  renderContactPage(container) {
    container.innerHTML = `
    <div class="page-hero"><div class="container"><h1>Kontak Kami</h1><p>Ada pertanyaan? Kami siap membantu!</p></div></div>
    <div class="container section">
      <div class="contact-grid">
        <div>
          <h2 style="font-family:var(--font-heading);font-size:var(--text-3xl);letter-spacing:2px;margin-bottom:var(--space-8)">GET IN TOUCH</h2>
          <div class="contact-info-item">
            <div class="contact-info-icon">${ICONS.whatsapp}</div>
            <div>
              <div style="font-weight:600;margin-bottom:2px">WhatsApp</div>
              <a href="https://wa.me/${STORE.whatsapp}" target="_blank" style="color:var(--color-text-secondary)">${STORE.whatsapp.replace('62', '+62 ')}</a>
            </div>
          </div>
          <div class="contact-info-item">
            <div class="contact-info-icon">${ICONS.mail}</div>
            <div>
              <div style="font-weight:600;margin-bottom:2px">Email</div>
              <a href="mailto:${STORE.email}" style="color:var(--color-text-secondary)">${STORE.email}</a>
            </div>
          </div>
          <div class="contact-info-item">
            <div class="contact-info-icon">${ICONS.instagram}</div>
            <div>
              <div style="font-weight:600;margin-bottom:2px">Instagram</div>
              <a href="${STORE.instagram}" target="_blank" style="color:var(--color-text-secondary)">@twostryve.id</a>
            </div>
          </div>
          <div class="contact-info-item">
            <div class="contact-info-icon">${ICONS.mapPin}</div>
            <div>
              <div style="font-weight:600;margin-bottom:2px">Lokasi</div>
              <span style="color:var(--color-text-secondary)">${STORE.address}</span>
            </div>
          </div>
        </div>
        <div>
          <form class="form-section" onsubmit="event.preventDefault(); App.showToast('Pesan berhasil dikirim! Kami akan segera merespons.', 'success'); this.reset();">
            <h3 class="form-section-title">Kirim Pesan</h3>
            <div class="form-group">
              <label class="form-label">Nama <span class="required">*</span></label>
              <input type="text" class="form-input" required placeholder="Nama kamu" />
            </div>
            <div class="form-group">
              <label class="form-label">Email <span class="required">*</span></label>
              <input type="email" class="form-input" required placeholder="email@contoh.com" />
            </div>
            <div class="form-group">
              <label class="form-label">Pesan <span class="required">*</span></label>
              <textarea class="form-textarea" required placeholder="Tulis pesan kamu..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Kirim Pesan</button>
          </form>
        </div>
      </div>
    </div>`;
  },

  // ---- CART DRAWER ----
  openCartDrawer() {
    document.getElementById('cartDrawer')?.classList.add('open');
    document.getElementById('cartOverlay')?.classList.add('open');
    document.body.classList.add('no-scroll');
    this.updateCartDrawerContent();
  },

  closeCartDrawer() {
    document.getElementById('cartDrawer')?.classList.remove('open');
    document.getElementById('cartOverlay')?.classList.remove('open');
    document.body.classList.remove('no-scroll');
  },

  updateCartDrawerContent() {
    const itemsContainer = document.getElementById('cartDrawerItems');
    const footerContainer = document.getElementById('cartDrawerFooter');
    if (!itemsContainer || !footerContainer) return;

    const items = Cart.getItems();
    if (items.length === 0) {
      itemsContainer.innerHTML = `<div class="cart-drawer-empty">${ICONS.shoppingBag}<p>Keranjang kamu masih kosong</p><a href="#/shop" class="btn btn-outline" onclick="App.closeCartDrawer()">Mulai Belanja</a></div>`;
      footerContainer.innerHTML = '';
      return;
    }

    itemsContainer.innerHTML = items.map(item => `
      <div class="cart-item">
        <div class="cart-item-image"><img src="${item.image}" alt="${item.name}" /></div>
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-variant">${item.color} / ${item.size}</div>
          <div class="cart-item-price">${formatPrice(item.price)}</div>
          <div class="cart-item-qty">
            <button onclick="Cart.updateQty(${item.productId}, '${item.color}', '${item.size}', ${item.qty - 1})">−</button>
            <span>${item.qty}</span>
            <button onclick="Cart.updateQty(${item.productId}, '${item.color}', '${item.size}', ${item.qty + 1})">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="Cart.removeItem(${item.productId}, '${item.color}', '${item.size}')">${ICONS.x}</button>
      </div>
    `).join('');

    footerContainer.innerHTML = `
      <div class="cart-drawer-total"><span>Total</span><span>${formatPrice(Cart.getTotal())}</span></div>
      <a href="#/cart" class="btn btn-outline btn-block" onclick="App.closeCartDrawer()">Lihat Keranjang</a>
      <a href="#/checkout" class="btn btn-primary btn-block" onclick="App.closeCartDrawer()" style="margin-top:var(--space-2)">Checkout</a>
    `;
  },

  // ---- SEARCH ----
  openSearch() {
    document.getElementById('searchOverlay')?.classList.add('open');
    document.body.classList.add('no-scroll');
    setTimeout(() => document.getElementById('searchInput')?.focus(), 200);
  },

  closeSearch() {
    document.getElementById('searchOverlay')?.classList.remove('open');
    document.body.classList.remove('no-scroll');
  },

  handleSearch(query) {
    const resultsContainer = document.getElementById('searchResults');
    if (!resultsContainer) return;

    if (!query.trim()) {
      resultsContainer.innerHTML = '<div class="search-hint">Ketik untuk mencari produk...</div>';
      return;
    }

    const q = query.toLowerCase();
    const results = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));

    if (results.length === 0) {
      resultsContainer.innerHTML = '<div class="search-hint">Tidak ada produk yang cocok</div>';
      return;
    }

    resultsContainer.innerHTML = results.map(p => `
      <a href="#/product/${p.slug}" class="search-result-item" onclick="App.closeSearch()">
        <div class="search-result-image"><img src="${p.images[0]}" alt="${p.name}" /></div>
        <div>
          <div class="search-result-name">${p.name}</div>
          <div class="search-result-price">${formatPrice(p.salePrice || p.price)}</div>
        </div>
      </a>
    `).join('');
  },

  // ---- LIGHTBOX ----
  openLightbox(src) {
    const lb = document.getElementById('lightbox');
    if (lb) {
      lb.querySelector('img').src = src;
      lb.classList.add('open');
      document.body.classList.add('no-scroll');
    }
  },

  closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (lb) {
      lb.classList.remove('open');
      document.body.classList.remove('no-scroll');
    }
  },

  // ---- MOBILE MENU ----
  toggleMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('mobileNav');
    btn?.classList.toggle('active');
    nav?.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  },

  closeMobileMenu() {
    document.getElementById('mobileMenuBtn')?.classList.remove('active');
    document.getElementById('mobileNav')?.classList.remove('open');
    document.body.classList.remove('no-scroll');
  },

  // ---- TOAST ----
  showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${message}</span><button class="toast-close" onclick="this.parentElement.remove()">${ICONS.x}</button>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(30px)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  },

  // ---- REVEAL ANIMATION OBSERVER ----
  setupRevealObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  },
};

// ---- Initialize App ----
document.addEventListener('DOMContentLoaded', () => App.init());
