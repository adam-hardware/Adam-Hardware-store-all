// main.js
// وظائف: توليد منتجات (كمثال)، بحث، فلترة فئة، مفضلة، عربة، حفظ في localStorage، مودال عرض

document.addEventListener('DOMContentLoaded', () => {
  // بيانات منتجات مثال — عوّض أو استبدل بالبيانات الحقيقية أو جلبها من API
  const products = [
    { id: 'p1', title: 'RTX 2060 - Used', category: 'pc', price: 8.599, img: 'rtx 2060.png', desc: 'احسن كارت في سعره / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/gigabyte-geforce-rtx-2060-oc/ref/4/' },
    { id: 'p29', title: 'RX 6600XT - Used', category: 'pc', price: 10.499, img: 'RX 6600XT.png', desc: 'احسن كارت في سعره / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/msi-gaming-amd-radeon-rx-6600-xt-128-bit-8gb-gddr6-dp-hdmi-dual-torx-fans-freesync-directx-12-vr-ready-oc-graphics-card/ref/4/' },
    { id: 'p30', title: 'RTX 5060 Single fan - New', category: 'pc', price: 16.849, img: '5060 1.png', desc: 'احسن كارت في سعره / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/zotac-gaming-geforce-rtx-5060-8g-gddr7-solo-graphics-card-3-years-warranty/ref/4/' },
    { id: 'p31', title: 'RTX 3060 12gb Classic - Used', category: 'pc', price: 12.299, img: 'classic 3060.png', desc: 'احسن كارت في سعره / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/leadtek-winfast-rtx-3060-12gb/ref/4/' },
    
    


    { id: 'p2', title: 'RTX 3060 - Used', category: 'pc', price: 13.199, img: '3060.png', desc: 'احسن كارت للمونتاج والجرافيك / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/rtx-3060-12gb-oc-msi-ventus-2x/ref/4/' },
    { id: 'p3', title: 'RTX 5060 tripple fan - New', category: 'pc', price: 19.799, img: 'asus1.png', desc: 'كارت شاشه حديث GDDR7 / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:"https://egycomputers.com/product/asus-geforce-rtx-5060-prime-8gb-gddr7-oc-edition-graphic-card-new-3-years-local-warranty/ref/4/" },
    { id: 'p15', title: 'RTX 2060 Super - Used', category: 'pc', price: 9.699, img: '2060 su.jpg', desc: 'احسن كارت في سعره / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/gigabyte-geforce-rtx-2060-super-gaming-oc-8g/ref/4/' },
    { id: 'p16', title: 'GTX 750ti - Used', category: 'pc', price: 2.299, img: 'gtx 750.jpg', desc: 'مستعمل بحاله ممتازه مع ضمان هايل / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/zotac-geforce-gtx-750-ti-2gb-oc/ref/4/' },
    { id: 'p17', title: 'RX 580 8GB - Used', category: 'pc', price: 3.899, img: 'rx 580.png', desc: 'مستعمل بحاله ممتازه مع ضمان هايل متقلقش مفيش تعدين هنا / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/xfx-rx-580-8gb/ref/4/' },
    { id: 'p18', title: 'RX 590 8GB - Used', category: 'pc', price: 4.199, img: 'rx 590.png', desc: 'مستعمل بحاله ممتازه مع ضمان هايل متقلقش مفيش تعدين هنا / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/xfx-rx-590-8gb/ref/4/' },
    { id: 'p19', title: 'RX 5600XT - Used', category: 'pc', price: 7.299, img: 'rc 5600xt.jpg', desc: 'افضل كارت للالعاب في سعره مع ضمان هايل / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'' },
    { id: 'p20', title: 'تجميعه بكارت RTX 3060 , i5 13400f جديده بالكامل ميعاده الرمات والكارت وضمان استبدال لاي قطعه', category: 'complete', price: 28.999, img: 'case .png', desc: 'تجميعة بRTX 3060 12جيجا مع i5 13400f ورمات 2x8 3200 و ssd nvme m.2 256g و كيس وباور من زيجماتك 750 و H610m و hdd 500g  التجميعه معاها ويندوز مجاني ولعبه بتختارها مجانيه / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/intel-i5-13400f-gaming-build/ref/4/' },
    { id: 'p21', title: 'تجميعة ryzen 5 3600 , b450 , rx 580 8gb متقلقش مفيش تعدين هنا كل حاجه مع ضمان استبدال', category: 'complete', price: 12.054, img: 'case .png', desc: 'احسن تجميعه ممكن تشريها بالسعر ده في العالم ryzen 5 3600 و rx 580 8gb , ssd nvme m.2 256 , B450 s2h او نسخة الgaming  / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/ryzen-5-3600-gaming-build/ref/4/' },
    { id: 'p22', title: 'تجميعه بكارت RTX 3060 , i5 12400f جديده بالكامل ميعاده الرمات والكارت وضمان استبدال لاي قطعه', category: 'complete', price: 27.674, img: 'case .png', desc: 'تجميعة بRTX 3060 12جيجا مع i5 12400f ورمات 2x8 3200 و ssd nvme m.2 256g و كيس وباور من زيجماتك 750 و H610m و hdd 500g  التجميعه معاها ويندوز مجاني ولعبه بتختارها مجانيه / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/intel-i5-12400f-gaming-build/ref/4/' },
    { id: 'p23', title: 'Samsung NVME M.2 256GB - Used', category: 'ssd', price: 925, img: 'ssd256.png', desc: 'مستعمل بحاله ممتازه وهيلث ممتاز / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/samsung-pm981-256gb-nvme-pcie-m-2-ssd-original-used/ref/4/' },
    { id: 'p24', title: 'WD HDD 500GB - Used', category: 'hdd', price: 375, img: 'hdd500.png', desc: 'هارد 500 ب هيلث ممتاز / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/wd-hard-disk-western-digital-500-gb/ref/4/' },
    { id: 'p25', title: '8x1 TeamGroup ARGB Ram DDR4 3000MHz - Used', category: 'pc', price: 750, img: 'ram rgp.png', desc: 'ضمان سنه استبدال / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/teamgroup-team-t-force-delta-rgb-ddr4-gaming-memory-8-gb-3000-mhz/ref/4/' },
    { id: 'p26', title: '8x1 Cursair Ram DDR4 3200MHz - Used', category: 'pc', price: 750, img: 'ram cursiar.png', desc: 'ضمان سنه استبدال / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/corsair-vengeance-8gb-ddr4-2133mhz/ref/4/' },
    { id: 'p27', title: '8x1 Samsung Ram DDR4 3200MHz - Used', category: 'pc', price: 725, img: 'ram gr 3200.png', desc: 'ضمان سنه استبدال  / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/samsung-8gb-ddr4-3200-mhz-pc4-25600-dimm-desktop-memory-ram/ref/4/' },
    { id: 'p28', title: '8x1 Crucial RAM DDR4 2666 MHz - Used', category: 'pc', price: 699, img: '1111.webp', desc: 'ضمان سنه استبدال  / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://egycomputers.com/product/crucial-ram-8gb-ddr4-2666-mhz-cl19-desktop-memory-ct8g4dfra266/ref/4/' },
     














    
    { id: 'p5', title: 'GTA V', category: 'games', price: 599, img: 'gta.jpg', desc: 'لعبة عالم مفتوح اصليه علي حسابك انت الشخصي / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://www.facebook.com/share/p/1KAyANg34Z/' },
    { id: 'p6', title: 'Red dead redemption 2', category: 'games', price: 599, img: 'rdd2.jpg', desc: 'لعبة عالم مفتوح اصليه علي حسابك انت الشخصي / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://www.facebook.com/share/p/1KAyANg34Z/' },
    { id: 'p7', title: 'FC 25', category: 'games', price: 210, img: 'fifa 25.jpg', desc: 'لعبة كرة قدم اصليه علي حسابك انت الشخصي / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://www.facebook.com/share/p/1KAyANg34Z/' },
    { id: 'p8', title: 'Uncharted', category: 'games', price: 499, img: 'unca.jpg', desc: 'لعبة اصليه علي حسابك انت الشخصي / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://www.facebook.com/share/p/1KAyANg34Z/' },
    { id: 'p9', title: 'Detriot', category: 'games', price: 379, img: 'de.jpg', desc: 'لعبة اصليه علي حسابك انت الشخصي / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://www.facebook.com/share/p/1KAyANg34Z/' },
    { id: 'p10', title: 'Battelefield 2024', category: 'games', price: 210, img: 'battel.jpg', desc: 'لعبة اصليه علي حسابك انت الشخصي / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://www.facebook.com/share/p/1KAyANg34Z/' },
    { id: 'p11', title: 'Rematch', category: 'games', price: 829, img: 'rematch.jpg', desc: 'لعبة اصليه علي حسابك انت الشخصي / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://www.facebook.com/share/p/1KAyANg34Z/' },
    { id: 'p12', title: 'Forza Horizone 4', category: 'games', price: 239, img: 'forza.jpg', desc: 'لعبة اصليه علي حسابك انت الشخصي / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://www.facebook.com/share/p/1KAyANg34Z/' },
    { id: 'p13', title: 'Euro Truck Simulator 2', category: 'games', price: 0, img: 'euro.jpg', desc: 'لعبة اصليه علي حسابك انت الشخصي / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://www.facebook.com/share/p/17KifPovTB/' },
    { id: 'p14', title: 'Windows 11 OEM', category: 'games', price: 50, img: 'win11 oem.jpg', desc: 'نسخه اصليه مفعله / ملحوظه عشان تشتري اي حاجه من الموقع لازم تخش من الرابط الي موجود في كل حاجه او قطعه اتمام والطلب هنا لسه جاري تنفيذه', buyLink:'https://www.facebook.com/share/p/1BJuKQSPaE/' },
    
    
    
    
    
    
    
    

    
    
    
    // أضف منتجات أكثر حسب الحاجة...
  ];

  // عناصر DOM
  const productsSection = document.getElementById('productsSection');
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  const categorySelect = document.getElementById('categorySelect');
  const favCountEl = document.querySelector('.count_favourite');
  const cartCountEl = document.querySelector('.count_items_header');
  const cartSidebar = document.getElementById('cartSidebar');
  const cartItemsEl = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');
  const yearEl = document.getElementById('year');
  const hamburger = document.querySelector('.hamburger');
  const iconCart = document.querySelector('.icon-cart');
  const iconFav = document.querySelector('.icon-fav');

  // مودال
  const productModal = document.getElementById('productModal');
  const modalBody = document.getElementById('modalBody');
  const closeModal = document.getElementById('closeModal');

  // LocalStorage keys
  const KEY_FAV = 'ah_favorites_v1';
  const KEY_CART = 'ah_cart_v1';

  // تحميل الحالة من التخزين
  let favorites = JSON.parse(localStorage.getItem(KEY_FAV) || '[]'); // array of ids
  let cart = JSON.parse(localStorage.getItem(KEY_CART) || '[]'); // array of {id, qty}

  // تعيين سنة الفوتر
  yearEl.textContent = new Date().getFullYear();

  // تحديث العدادين
  function updateCounters(){
    favCountEl.textContent = favorites.length;
    const totalQty = cart.reduce((s,i)=>s + (i.qty||1),0);
    cartCountEl.textContent = totalQty;
  }

  // حفظ
  function saveState(){
    localStorage.setItem(KEY_FAV, JSON.stringify(favorites));
    localStorage.setItem(KEY_CART, JSON.stringify(cart));
    updateCounters();
  }

  // توليد كروت المنتجات
  function renderProducts(list){
    productsSection.innerHTML = '';
    if(list.length === 0){
      productsSection.innerHTML = `<p style="color:#fff">لا توجد منتجات مطابقة.</p>`;
      return;
    }
    list.forEach(p => {
      const card = document.createElement('article');
      card.className = 'product_card';
      card.innerHTML = `
        <div class="product_img">
          <img loading="lazy" src="${p.img}" alt="${p.title}">
        </div>
        <div class="product_meta">
          <div class="product_title">${p.title}</div>
          <div class="product_price">${p.price.toLocaleString()} ج.م</div>
          <div class="product_desc" style="color:var(--muted);font-size:14px">${p.desc}</div>
        </div>
        <div class="product_actions">
          <button class="btn btn_view" data-id="${p.id}">عرض</button>
          <button class="btn btn_add" data-id="${p.id}"><i class="fa-solid fa-cart-plus"></i> أضف للعربة</button>
          <button class="btn btn_fav" data-id="${p.id}" title="إضافة للمفضلة"><i class="${favorites.includes(p.id)?'fa-solid':'fa-regular'} fa-heart"></i></button>
        </div>
      `;
      productsSection.appendChild(card);
    });
  }

  // البحث والفلترة
  function filterAndRender(){
    const q = searchInput.value.trim().toLowerCase();
    const cat = categorySelect.value;
    let list = products.filter(p => {
      const matchesQ = p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
      const matchesCat = (cat === 'all') || (p.category === cat);
      return matchesQ && matchesCat;
    });
    renderProducts(list);
  }

  // أحداث البحث
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    filterAndRender();
  });
  searchInput.addEventListener('input', () => filterAndRender());
  categorySelect.addEventListener('change', () => filterAndRender());

  // الاستماع لنقرات داخل قسم المنتجات (delegation)
  productsSection.addEventListener('click', (e) => {
    const viewBtn = e.target.closest('.btn_view');
    const addBtn = e.target.closest('.btn_add');
    const favBtn = e.target.closest('.btn_fav');

    if(viewBtn){
      const id = viewBtn.dataset.id;
      openProductModal(id);
    } else if(addBtn){
      const id = addBtn.dataset.id;
      addToCart(id);
    } else if(favBtn){
      const id = favBtn.dataset.id;
      toggleFavorite(id, favBtn);
    }
  });

  // فتح مودال المنتج
  function openProductModal(id){
    const p = products.find(x=>x.id===id);
    if(!p) return;
    modalBody.innerHTML = `
      <div style="display:flex;gap:16px;flex-wrap:wrap">
        <img src="${p.img}" alt="${p.title}">
        <div style="flex:1;min-width:220px">
          <h2 style="margin:0 0 8px">${p.title}</h2>
          <p style="margin:0 0 12px;color:var(--muted)">${p.desc}</p>
          <p style="font-weight:800;color:var(--accent);margin-bottom:10px">${p.price.toLocaleString()} ج.م</p>
          <div style="display:flex;gap:8px">
            <button class="btn btn_add" data-id="${p.id}"><i class="fa-solid fa-cart-plus"></i> أضف للعربة</button>
            <a class="btn btn_view" href="${p.buyLink}" target="_blank">شراء من المصدر</a>
          </div>
        </div>
      </div>
    `;
    productModal.classList.remove('hidden');
  }

  closeModal && (closeModal.onclick = () => productModal.classList.add('hidden'));
  productModal.addEventListener('click', (e) => {
    if(e.target === productModal) productModal.classList.add('hidden');
  });

  // إدارة المفضلة
  function toggleFavorite(id, btnEl){
    const idx = favorites.indexOf(id);
    if(idx === -1){
      favorites.push(id);
      if(btnEl) btnEl.querySelector('i').classList.replace('fa-regular','fa-solid');
    } else {
      favorites.splice(idx,1);
      if(btnEl) btnEl.querySelector('i').classList.replace('fa-solid','fa-regular');
    }
    saveState();
  }

  // إضافة للسلة
  function addToCart(id){
    const existing = cart.find(i=>i.id===id);
    if(existing) existing.qty = (existing.qty||1) + 1;
    else cart.push({id, qty:1});
    saveState();
    renderCart();
    // افتح السلايدبار
    cartSidebar.classList.add('open');
  }

  // عرض محتويات العربة
  function renderCart(){
    cartItemsEl.innerHTML = '';
    if(cart.length === 0){
      cartItemsEl.innerHTML = '<p style="color:#fff">السلة فارغة</p>';
      cartTotalEl.textContent = '0';
      return;
    }
    let total = 0;
    cart.forEach(item => {
      const p = products.find(x=>x.id === item.id) || {title:'منتج غير معروف', price:0, img:''};
      const row = document.createElement('div');
      row.className = 'cart_item';
      row.innerHTML = `
        <img src="${p.img}" alt="${p.title}">
        <div style="flex:1">
          <div style="font-weight:700;color:#fff">${p.title}</div>
          <div style="color:var(--muted);font-size:14px">${p.price.toLocaleString()} ج.م</div>
          <div style="margin-top:6px;display:flex;gap:8px;align-items:center">
            <button class="qty_minus" data-id="${item.id}">-</button>
            <span class="qty_val">${item.qty}</span>
            <button class="qty_plus" data-id="${item.id}">+</button>
            <button class="remove_item" data-id="${item.id}" style="margin-inline-start:auto;background:transparent;border:0;color:#ff4d4d;cursor:pointer">حذف</button>
          </div>
        </div>
      `;
      cartItemsEl.appendChild(row);
      total += (p.price * (item.qty || 1));
    });
    cartTotalEl.textContent = total.toLocaleString();
  }

  // أحداث داخل العربة (تعديل كمية / حذف)
  cartItemsEl.addEventListener('click', (e) => {
    const plus = e.target.closest('.qty_plus');
    const minus = e.target.closest('.qty_minus');
    const remove = e.target.closest('.remove_item');
    if(plus){
      const id = plus.dataset.id;
      const itm = cart.find(i=>i.id===id);
      if(itm){ itm.qty = (itm.qty||1) + 1; saveState(); renderCart(); }
    } else if(minus){
      const id = minus.dataset.id;
      const itm = cart.find(i=>i.id===id);
      if(itm){ itm.qty = (itm.qty||1) - 1; if(itm.qty <= 0) cart = cart.filter(i=>i.id!==id); saveState(); renderCart();}
    } else if(remove){
      const id = remove.dataset.id;
      cart = cart.filter(i=>i.id!==id);
      saveState(); renderCart();
    }
  });

  // إغلاق وفتح السلايدبار
  document.getElementById('closeCart')?.addEventListener('click', ()=> cartSidebar.classList.remove('open'));
  iconCart.addEventListener('click', (e) => { e.preventDefault(); cartSidebar.classList.toggle('open'); renderCart(); });
  iconFav.addEventListener('click', (e) => { e.preventDefault(); alert('المفضلات: ' + (favorites.length ? favorites.length + ' عناصر' : 'فارغة')); });

  // همبرغر للموبايل (يمكن تعديله ليعرض قائمة جانبية)
  hamburger.addEventListener('click', () => {
    // على سبيل المثال نعرض/نخفي شريط العربة أو نجعل البحث يظهر مكبر
    cartSidebar.classList.toggle('open');
    renderCart();
  });

  // فتح مودال أو إضافة للعربة من داخل المودال (event delegation global)
  document.body.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.btn_add');
    if(addBtn && addBtn.dataset.id){
      addToCart(addBtn.dataset.id);
      // إذا كان المودال مفتوحاً نغلقه
      productModal.classList.add('hidden');
    }
  });

  // رندر أولي
  saveState();
  filterAndRender();
});