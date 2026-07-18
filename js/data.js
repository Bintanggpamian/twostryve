// ============================================================
// TWOSTRYVE — Mock Data Store
// All products, categories, banners, articles & store settings
// ============================================================

const STORE = {
  name: 'TWOSTRYVE',
  tagline: 'Streetwear Culture Redefined',
  phone: '628123456789',
  email: 'hello@twostryve.id',
  address: 'Jakarta, Indonesia',
  whatsapp: '628123456789',
  instagram: 'https://instagram.com/twostryve.id',
  tiktok: 'https://tiktok.com/@twostryve.id',
  facebook: 'https://facebook.com/twostryve.id',
  bankAccounts: [
    { bank: 'BCA', number: '1234567890', name: 'PT TWOSTRYVE INDONESIA' },
    { bank: 'Mandiri', number: '0987654321', name: 'PT TWOSTRYVE INDONESIA' },
  ],
  shippingCost: 15000,
  freeShippingMin: 500000,
};

const CATEGORIES = [
  {
    id: 1, name: 'T-Shirt', slug: 't-shirt', image: 'assets/images/cat-tshirt.png', parent: null, count: 12, subcategories: [
      { id: 11, name: 'Regular', slug: 'regular-tshirt' },
      { id: 12, name: 'Oversized', slug: 'oversized-tshirt' },
      { id: 13, name: 'Long Sleeve', slug: 'long-sleeve' },
    ]
  },
  {
    id: 2, name: 'Hoodie', slug: 'hoodie', image: 'assets/images/cat-hoodie.png', parent: null, count: 8, subcategories: [
      { id: 21, name: 'Pullover', slug: 'pullover' },
      { id: 22, name: 'Zip-Up', slug: 'zip-up' },
    ]
  },
  { id: 3, name: 'Jacket', slug: 'jacket', image: 'assets/images/product-3.png', parent: null, count: 5, subcategories: [] },
  {
    id: 4, name: 'Pants', slug: 'pants', image: 'assets/images/cat-pants.png', parent: null, count: 6, subcategories: [
      { id: 41, name: 'Cargo', slug: 'cargo' },
      { id: 42, name: 'Jogger', slug: 'jogger' },
    ]
  },
  {
    id: 5, name: 'Accessories', slug: 'accessories', image: 'assets/images/product-6.png', parent: null, count: 4, subcategories: [
      { id: 51, name: 'Cap', slug: 'cap' },
      { id: 52, name: 'Socks', slug: 'socks' },
    ]
  },
];

const PRODUCTS = [
  {
    id: 1,
    name: 'Shadow Graphic Tee',
    slug: 'shadow-graphic-tee',
    category: 'T-Shirt',
    categoryId: 1,
    description: 'Kaos oversized dengan graphic print shadow bold di bagian depan. Dibuat dari bahan cotton combed 24s premium yang lembut dan nyaman. Cocok untuk tampilan streetwear sehari-hari.',
    material: '100% Cotton Combed 24s',
    weight: 250,
    price: 189000,
    salePrice: 149000,
    images: ['assets/images/product-1.png', 'assets/images/product-1.png', 'assets/images/product-1.png'],
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'White', hex: '#f5f5f5' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    variants: [
      { color: 'Black', size: 'S', stock: 15, sku: 'SGT-BLK-S' },
      { color: 'Black', size: 'M', stock: 22, sku: 'SGT-BLK-M' },
      { color: 'Black', size: 'L', stock: 18, sku: 'SGT-BLK-L' },
      { color: 'Black', size: 'XL', stock: 10, sku: 'SGT-BLK-XL' },
      { color: 'Black', size: 'XXL', stock: 5, sku: 'SGT-BLK-XXL' },
      { color: 'White', size: 'S', stock: 12, sku: 'SGT-WHT-S' },
      { color: 'White', size: 'M', stock: 20, sku: 'SGT-WHT-M' },
      { color: 'White', size: 'L', stock: 14, sku: 'SGT-WHT-L' },
      { color: 'White', size: 'XL', stock: 8, sku: 'SGT-WHT-XL' },
      { color: 'White', size: 'XXL', stock: 0, sku: 'SGT-WHT-XXL' },
    ],
    isNew: true,
    isFeatured: true,
    soldCount: 156,
    createdAt: '2026-07-10',
  },
  {
    id: 2,
    name: 'Essential Hoodie',
    slug: 'essential-hoodie',
    category: 'Hoodie',
    categoryId: 2,
    description: 'Hoodie essential dengan desain minimalis dan embroidered logo di dada. Bahan fleece 280gsm tebal dan hangat. Hood dengan drawstring adjustable.',
    material: 'Cotton Fleece 280gsm',
    weight: 450,
    price: 329000,
    salePrice: null,
    images: ['assets/images/product-2.png', 'assets/images/product-2.png', 'assets/images/product-2.png'],
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Charcoal', hex: '#333333' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    variants: [
      { color: 'Black', size: 'S', stock: 8, sku: 'EH-BLK-S' },
      { color: 'Black', size: 'M', stock: 15, sku: 'EH-BLK-M' },
      { color: 'Black', size: 'L', stock: 20, sku: 'EH-BLK-L' },
      { color: 'Black', size: 'XL', stock: 12, sku: 'EH-BLK-XL' },
      { color: 'Black', size: 'XXL', stock: 6, sku: 'EH-BLK-XXL' },
      { color: 'Charcoal', size: 'M', stock: 10, sku: 'EH-CHR-M' },
      { color: 'Charcoal', size: 'L', stock: 14, sku: 'EH-CHR-L' },
      { color: 'Charcoal', size: 'XL', stock: 7, sku: 'EH-CHR-XL' },
    ],
    isNew: true,
    isFeatured: true,
    soldCount: 89,
    createdAt: '2026-07-08',
  },
  {
    id: 3,
    name: 'Urban Windbreaker',
    slug: 'urban-windbreaker',
    category: 'Jacket',
    categoryId: 3,
    description: 'Windbreaker jacket dengan desain urban modern. Water-resistant, lightweight, dan stylish. Dilengkapi reflective details untuk keamanan di malam hari.',
    material: 'Polyester Ripstop Water-Resistant',
    weight: 350,
    price: 459000,
    salePrice: 389000,
    images: ['assets/images/product-3.png', 'assets/images/product-3.png', 'assets/images/product-3.png'],
    colors: [
      { name: 'Olive', hex: '#4a5339' },
      { name: 'Black', hex: '#1a1a1a' },
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    variants: [
      { color: 'Olive', size: 'M', stock: 6, sku: 'UW-OLV-M' },
      { color: 'Olive', size: 'L', stock: 10, sku: 'UW-OLV-L' },
      { color: 'Olive', size: 'XL', stock: 8, sku: 'UW-OLV-XL' },
      { color: 'Olive', size: 'XXL', stock: 3, sku: 'UW-OLV-XXL' },
      { color: 'Black', size: 'M', stock: 7, sku: 'UW-BLK-M' },
      { color: 'Black', size: 'L', stock: 12, sku: 'UW-BLK-L' },
      { color: 'Black', size: 'XL', stock: 9, sku: 'UW-BLK-XL' },
    ],
    isNew: false,
    isFeatured: true,
    soldCount: 203,
    createdAt: '2026-06-20',
  },
  {
    id: 4,
    name: 'Tactical Cargo Pants',
    slug: 'tactical-cargo-pants',
    category: 'Pants',
    categoryId: 4,
    description: 'Cargo pants dengan multiple pockets dan utility straps. Bahan ripstop yang kuat dan tahan lama. Desain terinspirasi dari military gear.',
    material: 'Cotton Ripstop 240gsm',
    weight: 420,
    price: 379000,
    salePrice: 299000,
    images: ['assets/images/product-4.png', 'assets/images/product-4.png', 'assets/images/product-4.png'],
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
      { name: 'Olive', hex: '#4a5339' },
    ],
    sizes: ['28', '30', '32', '34', '36'],
    variants: [
      { color: 'Black', size: '28', stock: 5, sku: 'TCP-BLK-28' },
      { color: 'Black', size: '30', stock: 12, sku: 'TCP-BLK-30' },
      { color: 'Black', size: '32', stock: 18, sku: 'TCP-BLK-32' },
      { color: 'Black', size: '34', stock: 10, sku: 'TCP-BLK-34' },
      { color: 'Black', size: '36', stock: 4, sku: 'TCP-BLK-36' },
      { color: 'Olive', size: '30', stock: 8, sku: 'TCP-OLV-30' },
      { color: 'Olive', size: '32', stock: 14, sku: 'TCP-OLV-32' },
      { color: 'Olive', size: '34', stock: 6, sku: 'TCP-OLV-34' },
    ],
    isNew: false,
    isFeatured: false,
    soldCount: 312,
    createdAt: '2026-05-15',
  },
  {
    id: 5,
    name: 'Rebel Graphic Tee',
    slug: 'rebel-graphic-tee',
    category: 'T-Shirt',
    categoryId: 1,
    description: 'Kaos oversized dengan graphic print rebel yang edgy. Cotton combed 24s premium yang breathable. Print menggunakan teknik DTF berkualitas tinggi.',
    material: '100% Cotton Combed 24s',
    weight: 250,
    price: 179000,
    salePrice: null,
    images: ['assets/images/product-5.png', 'assets/images/product-5.png', 'assets/images/product-5.png'],
    colors: [
      { name: 'White', hex: '#f5f5f5' },
      { name: 'Black', hex: '#1a1a1a' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    variants: [
      { color: 'White', size: 'S', stock: 20, sku: 'RGT-WHT-S' },
      { color: 'White', size: 'M', stock: 25, sku: 'RGT-WHT-M' },
      { color: 'White', size: 'L', stock: 22, sku: 'RGT-WHT-L' },
      { color: 'White', size: 'XL', stock: 15, sku: 'RGT-WHT-XL' },
      { color: 'White', size: 'XXL', stock: 8, sku: 'RGT-WHT-XXL' },
      { color: 'Black', size: 'M', stock: 18, sku: 'RGT-BLK-M' },
      { color: 'Black', size: 'L', stock: 20, sku: 'RGT-BLK-L' },
      { color: 'Black', size: 'XL', stock: 10, sku: 'RGT-BLK-XL' },
    ],
    isNew: true,
    isFeatured: false,
    soldCount: 45,
    createdAt: '2026-07-12',
  },
  {
    id: 6,
    name: 'Stryve Snapback',
    slug: 'stryve-snapback',
    category: 'Accessories',
    categoryId: 5,
    description: 'Snapback cap dengan embroidered TWOSTRYVE logo. Adjustable strap di belakang. Bahan cotton twill premium.',
    material: 'Cotton Twill',
    weight: 100,
    price: 149000,
    salePrice: 119000,
    images: ['assets/images/product-6.png', 'assets/images/product-6.png'],
    colors: [
      { name: 'Black', hex: '#1a1a1a' },
    ],
    sizes: ['One Size'],
    variants: [
      { color: 'Black', size: 'One Size', stock: 30, sku: 'SS-BLK-OS' },
    ],
    isNew: false,
    isFeatured: true,
    soldCount: 178,
    createdAt: '2026-06-01',
  },
  {
    id: 7,
    name: 'Void Long Sleeve',
    slug: 'void-long-sleeve',
    category: 'T-Shirt',
    categoryId: 1,
    description: 'Long sleeve oversized dengan minimalist sleeve print details. Cotton combed 24s double knit untuk kenyamanan ekstra.',
    material: '100% Cotton Combed 24s',
    weight: 300,
    price: 219000,
    salePrice: null,
    images: ['assets/images/product-7.png', 'assets/images/product-7.png', 'assets/images/product-7.png'],
    colors: [
      { name: 'Charcoal', hex: '#333333' },
      { name: 'Black', hex: '#1a1a1a' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    variants: [
      { color: 'Charcoal', size: 'S', stock: 10, sku: 'VLS-CHR-S' },
      { color: 'Charcoal', size: 'M', stock: 18, sku: 'VLS-CHR-M' },
      { color: 'Charcoal', size: 'L', stock: 15, sku: 'VLS-CHR-L' },
      { color: 'Charcoal', size: 'XL', stock: 8, sku: 'VLS-CHR-XL' },
      { color: 'Black', size: 'M', stock: 14, sku: 'VLS-BLK-M' },
      { color: 'Black', size: 'L', stock: 12, sku: 'VLS-BLK-L' },
      { color: 'Black', size: 'XL', stock: 6, sku: 'VLS-BLK-XL' },
    ],
    isNew: true,
    isFeatured: false,
    soldCount: 67,
    createdAt: '2026-07-05',
  },
  {
    id: 8,
    name: 'Fury Graphic Tee',
    slug: 'fury-graphic-tee',
    category: 'T-Shirt',
    categoryId: 1,
    description: 'Kaos oversized dengan desain bold dan warna merah maroon yang kuat. Cotton combed 24s premium. Perfect untuk statement outfit.',
    material: '100% Cotton Combed 24s',
    weight: 250,
    price: 189000,
    salePrice: 159000,
    images: ['assets/images/product-8.png', 'assets/images/product-8.png'],
    colors: [
      { name: 'Maroon', hex: '#6b1d2a' },
      { name: 'Black', hex: '#1a1a1a' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    variants: [
      { color: 'Maroon', size: 'S', stock: 12, sku: 'FGT-MRN-S' },
      { color: 'Maroon', size: 'M', stock: 20, sku: 'FGT-MRN-M' },
      { color: 'Maroon', size: 'L', stock: 16, sku: 'FGT-MRN-L' },
      { color: 'Maroon', size: 'XL', stock: 10, sku: 'FGT-MRN-XL' },
      { color: 'Maroon', size: 'XXL', stock: 4, sku: 'FGT-MRN-XXL' },
      { color: 'Black', size: 'M', stock: 15, sku: 'FGT-BLK-M' },
      { color: 'Black', size: 'L', stock: 18, sku: 'FGT-BLK-L' },
      { color: 'Black', size: 'XL', stock: 9, sku: 'FGT-BLK-XL' },
    ],
    isNew: false,
    isFeatured: true,
    soldCount: 134,
    createdAt: '2026-06-28',
  },
];

const BANNERS = [
  {
    id: 1,
    title: 'New Collection 2026',
    subtitle: 'Streetwear Culture Redefined',
    description: 'Koleksi terbaru yang menggabungkan urban style dengan kenyamanan premium.',
    image: 'assets/images/hero-1.png',
    cta: 'Shop Now',
    link: '#/shop',
    tag: 'New Arrival',
  },
  {
    id: 2,
    title: 'Mega Sale Up to 50%',
    subtitle: 'Limited Time Offer',
    description: 'Diskon besar-besaran untuk item pilihan. Jangan sampai kehabisan.',
    image: 'assets/images/hero-2.png',
    cta: 'Shop Sale',
    link: '#/shop?sale=true',
    tag: 'Sale',
  },
];

const ARTICLES = [
  {
    id: 1,
    title: 'Panduan Style: Mix & Match Streetwear untuk Sehari-hari',
    slug: 'panduan-style-mix-match-streetwear',
    excerpt: 'Tips dan trik bagaimana memadukan item streetwear untuk tampilan sehari-hari yang stylish tanpa berlebihan.',
    content: `<p>Streetwear bukan sekadar pakaian — ini adalah ekspresi diri. Dalam artikel ini, kita akan membahas cara memadukan item-item streetwear untuk tampilan yang on-point.</p>
<h2>1. Mulai dari Basic</h2>
<p>Fondasi streetwear yang kuat dimulai dari basic essentials: kaos polos berkualitas, hoodie, dan celana yang pas. Pilih warna-warna netral seperti hitam, putih, abu-abu, dan olive sebagai base outfit kamu.</p>
<h2>2. Layering is Key</h2>
<p>Teknik layering adalah salah satu kunci utama dalam streetwear. Combine kaos dengan hoodie, tambahkan jacket di atasnya. Mainkan proporsi — oversized top dengan slim bottom atau sebaliknya.</p>
<h2>3. Aksesoris yang Tepat</h2>
<p>Snapback cap, crossbody bag, atau socks yang matching bisa elevate outfit kamu ke level berikutnya. Jangan takut eksperimen!</p>
<p>Yang paling penting: wear it with confidence. Streetwear is all about attitude.</p>`,
    coverImage: 'assets/images/hero-1.png',
    tag: 'Style Guide',
    publishedAt: '2026-07-15',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Behind The Brand: Cerita di Balik TWOSTRYVE',
    slug: 'behind-the-brand-twostryve',
    excerpt: 'Mengenal lebih dekat filosofi dan perjalanan brand TWOSTRYVE dari awal hingga sekarang.',
    content: `<p>TWOSTRYVE lahir dari kecintaan terhadap budaya streetwear dan semangat untuk terus bergerak maju. Nama "TWOSTRYVE" sendiri merepresentasikan dua hal: kreativitas dan kegigihan.</p>
<h2>Awal Mula</h2>
<p>Berawal dari sebuah mimpi sederhana — menciptakan brand lokal yang bisa bersaing dengan brand internasional dalam hal kualitas dan desain, TWOSTRYVE mulai dibentuk.</p>
<h2>Filosofi Desain</h2>
<p>Setiap piece yang kami rancang memiliki cerita. Kami percaya bahwa pakaian adalah medium untuk mengekspresikan identitas. Desain kami terinspirasi dari kehidupan urban, budaya jalanan, dan seni kontemporer.</p>
<h2>Komitmen Kualitas</h2>
<p>Kami menggunakan bahan-bahan premium dan proses produksi yang ketat untuk memastikan setiap produk yang sampai di tangan customer memiliki kualitas terbaik.</p>`,
    coverImage: 'assets/images/hero-2.png',
    tag: 'Brand Story',
    publishedAt: '2026-07-10',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'Tren Streetwear 2026: Warna, Siluet, dan Material',
    slug: 'tren-streetwear-2026',
    excerpt: 'Breakdown tren streetwear yang mendominasi tahun 2026 — dari earth tones hingga techwear influence.',
    content: `<p>Tahun 2026 membawa angin segar untuk dunia streetwear. Berikut tren-tren yang mendominasi tahun ini.</p>
<h2>Earth Tones Dominan</h2>
<p>Olive, khaki, brown, dan warna-warna alam lainnya mendominasi koleksi streetwear tahun ini. Warna-warna ini memberikan kesan mature dan sophisticated.</p>
<h2>Oversized Masih Berkuasa</h2>
<p>Siluet oversized masih menjadi favorit. Boxy fit t-shirt, wide leg pants, dan oversized hoodie tetap jadi staple item.</p>
<h2>Techwear Influence</h2>
<p>Pengaruh techwear semakin terasa — material teknis, detail fungsional seperti strap dan pocket tambahan, serta desain yang futuristik.</p>`,
    coverImage: 'assets/images/product-3.png',
    tag: 'Trend',
    publishedAt: '2026-07-05',
    readTime: '6 min read',
  },
];

const FAQ_ITEMS = [
  {
    q: 'Bagaimana cara memesan produk di TWOSTRYVE?',
    a: 'Pilih produk yang kamu inginkan, pilih warna dan ukuran, lalu klik "Tambah ke Keranjang". Setelah selesai belanja, buka keranjang dan klik "Checkout". Isi form pemesanan dengan data lengkap, pilih metode pembayaran, dan submit. Kamu akan mendapatkan No. Invoice dan instruksi pembayaran.'
  },
  {
    q: 'Apakah harus membuat akun untuk berbelanja?',
    a: 'Tidak! Kamu bisa berbelanja langsung tanpa harus daftar atau login. Cukup isi data di form pemesanan saja.'
  },
  {
    q: 'Metode pembayaran apa saja yang tersedia?',
    a: 'Saat ini kami menerima pembayaran melalui Transfer Bank (BCA, Mandiri), QRIS, dan COD (khusus area tertentu). Payment gateway otomatis akan segera hadir.'
  },
  {
    q: 'Berapa lama proses pengiriman?',
    a: 'Pesanan akan diproses dalam 1-2 hari kerja setelah pembayaran dikonfirmasi. Estimasi pengiriman tergantung kurir dan lokasi, biasanya 2-5 hari kerja untuk area Pulau Jawa, dan 5-10 hari kerja untuk luar Jawa.'
  },
  {
    q: 'Apakah bisa return/tukar produk?',
    a: 'Ya! Kami menerima return/tukar dalam waktu 7 hari setelah produk diterima, dengan syarat produk belum dicuci, belum dipakai, dan masih ada tag. Hubungi CS kami via WhatsApp untuk proses return.'
  },
  {
    q: 'Bagaimana cara mengetahui ukuran yang tepat?',
    a: 'Kamu bisa cek Size Guide yang kami sediakan di halaman produk atau di menu "Size Guide". Jika masih ragu, jangan ragu hubungi CS kami.'
  },
  {
    q: 'Bagaimana cara cek status pesanan saya?',
    a: 'Kamu bisa cek status pesanan di halaman "Cek Status Pesanan" dengan memasukkan No. Invoice atau No. HP yang kamu gunakan saat memesan.'
  },
];

const SIZE_CHART = {
  tshirt: {
    title: 'T-Shirt / Kaos',
    headers: ['Size', 'Lebar (cm)', 'Panjang (cm)', 'Lengan (cm)'],
    rows: [
      ['S', '50', '68', '21'],
      ['M', '53', '71', '22'],
      ['L', '56', '74', '23'],
      ['XL', '59', '76', '24'],
      ['XXL', '62', '78', '25'],
    ]
  },
  hoodie: {
    title: 'Hoodie',
    headers: ['Size', 'Lebar (cm)', 'Panjang (cm)', 'Lengan (cm)'],
    rows: [
      ['S', '53', '66', '58'],
      ['M', '56', '69', '60'],
      ['L', '59', '72', '62'],
      ['XL', '62', '74', '64'],
      ['XXL', '65', '76', '66'],
    ]
  },
  pants: {
    title: 'Pants / Celana',
    headers: ['Size', 'Pinggang (cm)', 'Panjang (cm)', 'Paha (cm)'],
    rows: [
      ['28', '72', '98', '56'],
      ['30', '76', '100', '58'],
      ['32', '80', '102', '60'],
      ['34', '84', '104', '62'],
      ['36', '88', '106', '64'],
    ]
  }
};

// Helper: format currency to IDR
function formatPrice(num) {
  return 'Rp ' + num.toLocaleString('id-ID');
}

// Helper: calculate discount percentage
function getDiscountPercent(price, salePrice) {
  if (!salePrice || salePrice >= price) return 0;
  return Math.round(((price - salePrice) / price) * 100);
}

// Helper: generate invoice number
function generateInvoice() {
  const date = new Date();
  const y = date.getFullYear().toString().slice(-2);
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const rand = Math.floor(Math.random() * 9000 + 1000);
  return `INV-${y}${m}${d}-${rand}`;
}

// Helper: get product display price
function getDisplayPrice(product) {
  return product.salePrice || product.price;
}

const HOMEPAGE_CONFIG = {
  showHero: true,
  showCategories: true,
  showNewArrivals: true,
  showPromoBanner: true,
  showSale: true,
  showBestSellers: true,
  showMagazine: true,
  showNewsletter: true,
  promoBannerTitle: 'Free Ongkir',
  promoBannerDesc: 'Untuk pembelian di atas Rp 500.000',
  promoBannerImage: 'assets/images/promo-mid.png',
  promoBannerCta: 'Belanja Sekarang',
};

const PAGES_CONTENT = {
  about: {
    title: 'Tentang Kami',
    subtitle: 'Mengenal lebih dekat TWOSTRYVE',
    content: `<p style="font-size:16px;line-height:1.8;margin-bottom:24px"><strong>TWOSTRYVE</strong> adalah brand streetwear lokal yang lahir dari semangat untuk menghadirkan fashion urban berkualitas premium dengan harga yang terjangkau.</p>
<h2>Visi Kami</h2>
<p>Menjadi brand streetwear terdepan yang menginspirasi generasi muda untuk berani mengekspresikan diri melalui fashion.</p>
<h2>Misi Kami</h2>
<p>Menciptakan produk streetwear yang menggabungkan desain bold, material premium, dan kenyamanan. Setiap piece dirancang untuk orang-orang yang berani tampil beda.</p>`
  },
  returnPolicy: {
    title: 'Kebijakan Retur',
    subtitle: 'Return & Exchange Policy',
    content: `<h2>Ketentuan Umum</h2>
<p>Kami menerima pengembalian atau penukaran produk dalam waktu <strong>7 hari</strong> setelah produk diterima.</p>
<h2>Syarat Return/Tukar</h2>
<p>• Produk belum pernah dicuci atau dipakai<br>• Tag dan label masih terpasang<br>• Disertai bukti pembelian (No. Invoice)</p>`
  },
  terms: {
    title: 'Syarat & Ketentuan',
    subtitle: 'Terms and Conditions',
    content: `<p>Dengan mengakses dan menggunakan website TWOSTRYVE (twostryve.id), Anda dianggap telah membaca, memahami, dan menyetujui seluruh Syarat & Ketentuan.</p>
<h2>1. Informasi Umum</h2>
<p>Website ini dimiliki dan dioperasikan oleh TWOSTRYVE. Semua konten dilindungi oleh hak cipta.</p>`
  }
};

// Dynamic sync with localStorage for CMS Admin Panel
if (typeof localStorage !== 'undefined') {
  try {
    const savedProducts = localStorage.getItem('twostryve_products');
    if (savedProducts) {
      const parsed = JSON.parse(savedProducts);
      PRODUCTS.length = 0;
      PRODUCTS.push(...parsed);
    }

    const savedCategories = localStorage.getItem('twostryve_categories');
    if (savedCategories) {
      const parsed = JSON.parse(savedCategories);
      CATEGORIES.length = 0;
      CATEGORIES.push(...parsed);
    }

    const savedBanners = localStorage.getItem('twostryve_banners');
    if (savedBanners) {
      const parsed = JSON.parse(savedBanners);
      BANNERS.length = 0;
      BANNERS.push(...parsed);
    }

    const savedArticles = localStorage.getItem('twostryve_articles');
    if (savedArticles) {
      const parsed = JSON.parse(savedArticles);
      ARTICLES.length = 0;
      ARTICLES.push(...parsed);
    }

    const savedStore = localStorage.getItem('twostryve_store');
    if (savedStore) Object.assign(STORE, JSON.parse(savedStore));

    const savedHomeConfig = localStorage.getItem('twostryve_home_config');
    if (savedHomeConfig) Object.assign(HOMEPAGE_CONFIG, JSON.parse(savedHomeConfig));

    const savedPagesContent = localStorage.getItem('twostryve_pages_content');
    if (savedPagesContent) Object.assign(PAGES_CONTENT, JSON.parse(savedPagesContent));
  } catch (e) {
    console.warn('LocalStorage sync skipped:', e);
  }
}

function refreshLiveData() {
  if (typeof localStorage === 'undefined') return;
  // If Supabase Engine is connected, Supabase Cloud is the single source of truth!
  // Do not overwrite Supabase data with old browser localStorage cache.
  if (typeof SupabaseEngine !== 'undefined' && SupabaseEngine.isConfigured) return;

  try {
    const savedProducts = localStorage.getItem('twostryve_products');
    if (savedProducts) {
      const parsed = JSON.parse(savedProducts);
      PRODUCTS.length = 0;
      PRODUCTS.push(...parsed);
    }

    const savedCategories = localStorage.getItem('twostryve_categories');
    if (savedCategories) {
      const parsed = JSON.parse(savedCategories);
      CATEGORIES.length = 0;
      CATEGORIES.push(...parsed);
    }

    const savedBanners = localStorage.getItem('twostryve_banners');
    if (savedBanners) {
      const parsed = JSON.parse(savedBanners);
      BANNERS.length = 0;
      BANNERS.push(...parsed);
    }

    const savedArticles = localStorage.getItem('twostryve_articles');
    if (savedArticles) {
      const parsed = JSON.parse(savedArticles);
      ARTICLES.length = 0;
      ARTICLES.push(...parsed);
    }

    const savedStore = localStorage.getItem('twostryve_store');
    if (savedStore) Object.assign(STORE, JSON.parse(savedStore));

    const savedHomeConfig = localStorage.getItem('twostryve_home_config');
    if (savedHomeConfig) Object.assign(HOMEPAGE_CONFIG, JSON.parse(savedHomeConfig));

    const savedPagesContent = localStorage.getItem('twostryve_pages_content');
    if (savedPagesContent) Object.assign(PAGES_CONTENT, JSON.parse(savedPagesContent));
  } catch (e) {
    console.warn('refreshLiveData error:', e);
  }
}

// ============================================================
// SUPABASE CLOUD ENGINE INTEGRATION
// Set your Supabase URL & Key below so ALL browsers/devices
// connect to Supabase Cloud automatically without inputting in admin.
// ============================================================
const SUPABASE_CONFIG = {
  url: 'https://fuiwcdipvfbtvezcgwjw.supabase.co', // Base Project URL tanpa /rest/v1/
  key: 'sb_publishable_VM7jrvTH9JqglkHFYhepyA_o3lBJDCs'  // Supabase Key
};

const SupabaseEngine = {
  client: null,
  isConfigured: false,

  init() {
    let url = SUPABASE_CONFIG.url || (typeof localStorage !== 'undefined' && localStorage.getItem('twostryve_supabase_url'));
    let key = SUPABASE_CONFIG.key || (typeof localStorage !== 'undefined' && localStorage.getItem('twostryve_supabase_key'));

    // Auto Sanitize URL: hapus /rest/v1/ dan slash berlebih di akhir URL
    if (url) {
      url = url.trim().replace(/\/rest\/v1\/?$/i, '').replace(/\/+$/, '');
    }
    if (key) {
      key = key.trim();
    }

    // Safely ignore dummy placeholders
    if (url && (url.includes('xyzabc123') || url.includes('YOUR_SUPABASE'))) url = '';
    if (key && (key.includes('...') || key.includes('YOUR_SUPABASE'))) key = '';

    if (url && key && window.supabase) {
      try {
        this.client = window.supabase.createClient(url, key);
        this.isConfigured = true;
        console.log('⚡ Supabase Engine Connected to:', url);

        // Auto clear stale localStorage caches so all browsers sync to Supabase automatically
        if (typeof localStorage !== 'undefined') {
          localStorage.removeItem('twostryve_products');
          localStorage.removeItem('twostryve_categories');
          localStorage.removeItem('twostryve_banners');
          localStorage.removeItem('twostryve_articles');
        }

        // Store promise so App.init() can await it before first render
        this.ready = this.fetchDataFromSupabase();
      } catch (e) {
        console.error('Supabase Init Failed:', e);
        this.ready = Promise.resolve();
      }
    } else {
      this.ready = Promise.resolve();
      console.log('⚠️ Supabase credentials not configured properly.');
    }
  },

  async fetchDataFromSupabase() {
    if (!this.isConfigured || !this.client) return;

    // 1. Fetch Categories
    try {
      const { data: cats, error: catErr } = await this.client.from('categories').select('*').order('id');
      if (!catErr && cats && cats.length > 0) {
        CATEGORIES.length = 0;
        cats.forEach(c => CATEGORIES.push({
          id: c.id,
          name: c.name,
          slug: c.slug,
          image: c.image || 'assets/images/cat-tshirt.png',
          count: c.count || 0
        }));
      }
    } catch (e) { console.warn('Supabase categories fetch failed:', e); }

    // 2. Fetch Banners
    try {
      const { data: bans, error: banErr } = await this.client.from('banners').select('*').order('id');
      if (!banErr && bans && bans.length > 0) {
        BANNERS.length = 0;
        bans.forEach(b => BANNERS.push({
          id: b.id,
          title: b.title,
          tag: b.tag,
          cta: b.cta,
          link: b.link,
          image: b.image,
          description: b.description
        }));
      }
    } catch (e) { console.warn('Supabase banners fetch failed:', e); }

    // 3. Fetch Products
    try {
      const { data: prods, error: prodErr } = await this.client.from('products').select('*').order('id', { ascending: false });
      if (!prodErr && prods && prods.length > 0) {
        PRODUCTS.length = 0;
        prods.forEach(p => PRODUCTS.push({
          id: p.id,
          name: p.name,
          slug: p.slug,
          category: p.category_name || p.category,
          categoryId: p.category_id,
          price: Number(p.price),
          salePrice: p.sale_price ? Number(p.sale_price) : null,
          material: p.material || '',
          description: p.description || '',
          images: Array.isArray(p.images) && p.images.length ? p.images : ['assets/images/product-1.png'],
          colors: Array.isArray(p.colors) && p.colors.length ? p.colors : [{ name: 'Black', hex: '#000000' }],
          sizes: Array.isArray(p.sizes) && p.sizes.length ? p.sizes : ['S', 'M', 'L', 'XL'],
          variants: Array.isArray(p.variants) && p.variants.length ? p.variants : [{ color: 'Black', size: 'S', stock: 10 }],
          isNew: p.is_new !== false,
          isFeatured: p.is_featured === true,
          createdAt: p.created_at
        }));
      }
    } catch (e) { console.warn('Supabase products fetch failed:', e); }

    // 4. Fetch Articles
    try {
      const { data: arts, error: artErr } = await this.client.from('articles').select('*').order('id', { ascending: false });
      if (!artErr && arts && arts.length > 0) {
        ARTICLES.length = 0;
        arts.forEach(a => ARTICLES.push({
          id: a.id,
          title: a.title,
          slug: a.slug,
          tag: a.tag || 'STYLE',
          readTime: a.read_time || '3 min read',
          coverImage: a.cover_image || 'assets/images/article-1.png',
          excerpt: a.excerpt || '',
          content: a.content || '',
          publishedAt: a.published_at || a.created_at
        }));
      }
    } catch (e) { console.warn('Supabase articles fetch failed:', e); }

    // Mark data as ready
    this.dataReady = true;
    console.log('✅ Supabase data fully loaded! Products:', PRODUCTS.length, 'Categories:', CATEGORIES.length, 'Banners:', BANNERS.length, 'Articles:', ARTICLES.length);

    // Force re-render on website with retry to handle race condition
    this._forceRerender();
  },

  _forceRerender() {
    const tryRender = () => {
      if (typeof window !== 'undefined' && window.App && typeof window.App.handleRoute === 'function') {
        window.App.handleRoute();
        return true;
      }
      return false;
    };
    // Try immediately, then retry after short delays in case App isn't ready yet
    if (!tryRender()) {
      setTimeout(() => { if (!tryRender()) setTimeout(tryRender, 500); }, 200);
    }
  },

  async insertOrder(orderData) {
    if (!this.isConfigured || !this.client) return false;
    try {
      const { data, error } = await this.client.from('orders').insert([{
        invoice: orderData.invoice,
        customer_name: orderData.name,
        phone: orderData.phone,
        email: orderData.email,
        address: orderData.address,
        subtotal: orderData.subtotal,
        shipping: orderData.shipping,
        total: orderData.total,
        payment_method: orderData.payment,
        status: orderData.status || 'new',
        items: orderData.items,
        notes: orderData.notes || ''
      }]).select();
      if (error) {
        console.error('Supabase Order Insert Error:', error);
        return false;
      }
      console.log('✅ Order inserted to Supabase:', data);
      return true;
    } catch (e) {
      console.error('Supabase Order Error:', e);
      return false;
    }
  },

  async updateOrderStatus(invoice, status) {
    if (!this.isConfigured || !this.client) return false;
    try {
      const { error } = await this.client.from('orders').update({ status }).eq('invoice', invoice);
      if (error) {
        console.error('Supabase Order Status Update Error:', error);
        return false;
      }
      return true;
    } catch (e) {
      console.error('Supabase updateOrderStatus error:', e);
      return false;
    }
  },

  async fetchOrdersFromSupabase() {
    if (!this.isConfigured || !this.client) return null;
    try {
      const { data, error } = await this.client.from('orders').select('*').order('created_at', { ascending: false });
      if (!error && data) {
        return data.map(o => ({
          invoice: o.invoice,
          name: o.customer_name,
          phone: o.phone,
          email: o.email,
          address: o.address,
          subtotal: Number(o.subtotal),
          shipping: Number(o.shipping),
          total: Number(o.total),
          payment: o.payment_method,
          status: o.status,
          items: o.items || [],
          notes: o.notes || '',
          createdAt: o.created_at
        }));
      }
    } catch (e) {
      console.warn('Supabase fetchOrders error:', e);
    }
    return null;
  },

  async smartInsert(tableName, payload) {
    let { data, error } = await this.client.from(tableName).insert([payload]).select();
    if (!error && data && data.length > 0) return data[0];

    console.warn(`Supabase ${tableName} insert retry with explicit ID due to:`, error?.message);
    try {
      const { data: maxRows } = await this.client.from(tableName).select('id').order('id', { ascending: false }).limit(1);
      const nextId = (maxRows && maxRows[0] && typeof maxRows[0].id === 'number') ? maxRows[0].id + 1 : Date.now();
      const retryRes = await this.client.from(tableName).insert([{ id: nextId, ...payload }]).select();
      if (retryRes.data && retryRes.data.length > 0) return retryRes.data[0];
    } catch (e) {
      console.error(`Smart insert retry failed for ${tableName}:`, e);
    }
    return null;
  },

  async saveProduct(p) {
    if (!this.isConfigured || !this.client) return false;
    try {
      const payload = {
        name: p.name,
        slug: p.slug || p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        category_id: p.categoryId || null,
        category_name: p.category || 'Uncategorized',
        price: p.price,
        sale_price: p.salePrice || null,
        material: p.material || '',
        description: p.description || '',
        images: p.images || [],
        colors: p.colors || [],
        sizes: p.sizes || [],
        variants: p.variants || [],
        is_active: p.isActive !== undefined ? p.isActive : true,
        is_featured: p.isFeatured !== undefined ? p.isFeatured : false,
        is_new: p.isNew !== undefined ? p.isNew : true
      };

      if (p.id && typeof p.id === 'number' && p.id < 2147483647) {
        const { data, error } = await this.client.from('products').upsert({ id: p.id, ...payload }).select();
        if (error) {
          console.error('Supabase Product Upsert Error:', error);
          return false;
        }
        return data ? data[0] : true;
      } else {
        const result = await this.smartInsert('products', payload);
        return result || true;
      }
    } catch (e) {
      console.error('Supabase saveProduct error:', e);
      return false;
    }
  },

  async deleteProduct(id) {
    if (!this.isConfigured || !this.client) return false;
    try {
      const { error } = await this.client.from('products').delete().eq('id', id);
      if (error) {
        console.error('Supabase Product Delete Error:', error);
        return false;
      }
      return true;
    } catch (e) {
      console.error('Supabase deleteProduct error:', e);
      return false;
    }
  },

  async saveCategory(c) {
    if (!this.isConfigured || !this.client) return false;
    try {
      const payload = {
        name: c.name,
        slug: c.slug || c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        image: c.image || '',
        count: c.count || 0
      };

      if (c.id && typeof c.id === 'number' && c.id < 2147483647) {
        const { data, error } = await this.client.from('categories').upsert({ id: c.id, ...payload }).select();
        if (error) {
          console.error('Supabase Category Upsert Error:', error);
          return false;
        }
        return data ? data[0] : true;
      } else {
        const result = await this.smartInsert('categories', payload);
        return result || true;
      }
    } catch (e) {
      console.error('Supabase saveCategory error:', e);
      return false;
    }
  },

  async deleteCategory(id) {
    if (!this.isConfigured || !this.client) return false;
    try {
      const { error } = await this.client.from('categories').delete().eq('id', id);
      if (error) {
        console.error('Supabase Category Delete Error:', error);
        return false;
      }
      return true;
    } catch (e) {
      console.error('Supabase deleteCategory error:', e);
      return false;
    }
  },

  async saveBanner(b) {
    if (!this.isConfigured || !this.client) return false;
    try {
      const payload = {
        title: b.title,
        tag: b.tag || '',
        cta: b.cta || '',
        link: b.link || '#',
        image: b.image || '',
        description: b.description || ''
      };

      if (b.id && typeof b.id === 'number' && b.id < 2147483647) {
        const { data, error } = await this.client.from('banners').upsert({ id: b.id, ...payload }).select();
        if (error) {
          console.error('Supabase Banner Upsert Error:', error);
          return false;
        }
        return data ? data[0] : true;
      } else {
        const result = await this.smartInsert('banners', payload);
        return result || true;
      }
    } catch (e) {
      console.error('Supabase saveBanner error:', e);
      return false;
    }
  },

  async deleteBanner(id) {
    if (!this.isConfigured || !this.client) return false;
    try {
      const { error } = await this.client.from('banners').delete().eq('id', id);
      return !error;
    } catch (e) {
      console.error('Supabase deleteBanner error:', e);
      return false;
    }
  },

  async saveArticle(art) {
    if (!this.isConfigured || !this.client) return false;
    try {
      const payload = {
        title: art.title,
        slug: art.slug || art.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        tag: art.tag || 'STYLE',
        read_time: art.readTime || '3 min read',
        cover_image: art.coverImage || '',
        excerpt: art.excerpt || '',
        content: art.content || ''
      };

      if (art.id && typeof art.id === 'number' && art.id < 2147483647) {
        const { data, error } = await this.client.from('articles').upsert({ id: art.id, ...payload }).select();
        if (error) return false;
        return data ? data[0] : true;
      } else {
        const result = await this.smartInsert('articles', payload);
        return result || true;
      }
    } catch (e) {
      console.error('Supabase saveArticle error:', e);
      return false;
    }
  },

  async deleteArticle(id) {
    if (!this.isConfigured || !this.client) return false;
    try {
      const { error } = await this.client.from('articles').delete().eq('id', id);
      return !error;
    } catch (e) {
      return false;
    }
  },

  /* BULK SYNC ALL LOCAL DATA TO SUPABASE CLOUD */
  async syncAllLocalToSupabase() {
    if (!this.isConfigured || !this.client) return { success: false, message: 'Supabase belum dikonfigurasi' };

    let totalSynced = 0;
    try {
      // 1. Sync Categories
      const localCats = JSON.parse(localStorage.getItem('twostryve_categories')) || CATEGORIES;
      for (const cat of localCats) {
        await this.saveCategory(cat);
        totalSynced++;
      }

      // 2. Sync Banners
      const localBanners = JSON.parse(localStorage.getItem('twostryve_banners')) || BANNERS;
      for (const b of localBanners) {
        await this.saveBanner(b);
        totalSynced++;
      }

      // 3. Sync Products
      const localProds = JSON.parse(localStorage.getItem('twostryve_products')) || PRODUCTS;
      for (const p of localProds) {
        await this.saveProduct(p);
        totalSynced++;
      }

      // 4. Sync Articles
      const localArts = JSON.parse(localStorage.getItem('twostryve_articles')) || ARTICLES;
      for (const a of localArts) {
        await this.saveArticle(a);
        totalSynced++;
      }

      await this.fetchDataFromSupabase();
      return { success: true, count: totalSynced };
    } catch (err) {
      console.error('Bulk sync failed:', err);
      return { success: false, message: err.message };
    }
  }
};

// Initialize Supabase Engine immediately on script load
if (typeof window !== 'undefined') {
  SupabaseEngine.init();
}
