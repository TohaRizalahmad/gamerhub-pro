
        /* Data produk */
        const products = [
            { id:1, name:'Corsair Vengeance RGB Pro 16GB', category:'ram', price:1250000, desc:'DDR4 3200MHz RAM dengan RGB lighting dinamis untuk performa gaming maksimal', features:['DDR4 3200MHz','16GB','RGB'], badge:'Terlaris', image:'https://wahanacms.teltics.in/uploads/images/inguqmjwi5mditjsiuztembqimytmkbsla4eoqrjl4ysgmrqgiytanzqguytemjxgaytmmzr.jpg' },
            { id:2, name:'G.Skill Trident Z5 Neo RGB 32GB', category:'ram', price:2800000, desc:'DDR5 6000MHz High Performance RAM untuk AMD Ryzen dan Intel platform', features:['DDR5 6000MHz','32GB','RGB Neo'], badge:'Premium', image:'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/111/MTA-181709768/g-skill_g-skill_ram_trident_z5_royal_neo_ddr5_64gb_-2x32gb-_6000mhz_cl30_f5-6000j3036g32gx2-tr5ns_full04_r1nxru91.jpg' },
            { id:3, name:'Samsung 990 PRO 1TB', category:'ssd', price:2100000, desc:'NVMe PCIe 4.0 M.2 SSD dengan kecepatan baca hingga 7,450 MB/s', features:['PCIe 4.0','1TB','7450 MB/s'], badge:'Terlaris', image:'https://kkomputer.com/13675/samsung-990-pro-1tb-m2-pcie-gen-4-nvme.jpg' },
            { id:4, name:'WD Black SN850X 2TB', category:'ssd', price:3800000, desc:'PCIe Gen4 NVMe SSD gaming dengan heatsink untuk performa optimal', features:['PCIe 4.0','2TB','Heatsink'], badge:'Premium', image:'https://blossomzones.com/wp-content/uploads/2024/09/SN850X-2TB.jpg' },
            { id:5, name:'Gaming PC RTX 4070 Ti', category:'pc', price:22500000, desc:'Intel Core i7-14700K, RTX 4070 Ti 12GB, 32GB DDR5 RAM, 1TB NVMe SSD', features:['RTX 4070 Ti','i7-14700K','32GB RAM'], badge:'Hot', image:'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800' },
            { id:6, name:'Gaming PC RTX 4090', category:'pc', price:45000000, desc:'Intel Core i9-14900K, RTX 4090 24GB, 64GB DDR5 RAM, 2TB NVMe SSD', features:['RTX 4090','i9-14900K','64GB RAM'], badge:'Ultimate', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QwzPyWKFnZfqboRUh2qQjJfPI8ZdlIsY5w&s' },
            { id:7, name:'Logitech G Pro X Superlight', category:'peripherals', price:1850000, desc:'Wireless gaming mouse ultra-ringan 63g dengan sensor HERO 25K', features:['Wireless','63g','HERO 25K'], badge:'Terlaris', image:'https://images.unsplash.com/photo-1527814050087-3793815479db?w=800' },
            { id:8, name:'Razer BlackWidow V4 Pro', category:'peripherals', price:3200000, desc:'Mechanical keyboard dengan Green Switch dan RGB Chroma lighting', features:['Mechanical','Green Switch','RGB Chroma'], badge:'Premium', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpWXCd0-RiewAcvu4owTuIJkRPeEgqeaA0dw&s' },
            { id:9, name:'Kingston Fury Beast RGB 16GB', category:'ram', price:1100000, desc:'DDR4 3600MHz Value RAM dengan RGB infrared sync technology', features:['DDR4 3600MHz','16GB','RGB Sync'], badge:'Value', image:'https://media.kingston.com/kingston/product/FURY_Beast_RGB_Black_DDR4_1_angle-zm-lg.jpg' },
            { id:10, name:'Crucial P5 Plus 1TB', category:'ssd', price:1650000, desc:'PCIe Gen4 NVMe SSD dengan kecepatan baca hingga 6,600 MB/s', features:['PCIe 4.0','1TB','6600 MB/s'], badge:'Value', image:'https://e2zstore.com/wp-content/uploads/2023/01/crucial-p5-plus.jpg' },
            { id:11, name:'HyperX Cloud Alpha Wireless', category:'peripherals', price:2400000, desc:'Wireless gaming headset dengan battery life hingga 300 jam', features:['Wireless','300h Battery','7.1 Surround'], badge:'Hot', image:'https://images.unsplash.com/photo-1599669454699-248893623440?w=800' },
            { id:12, name:'ASUS ROG Swift PG27AQN', category:'peripherals', price:12500000, desc:'27\" 1440p 360Hz Fast IPS Gaming Monitor dengan G-Sync', features:['27\" 1440p','360Hz','G-Sync'], badge:'Premium', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Pmd1f4PsTbkuaZaG1K_EyHGTBzea629bNg&s' },
            { id:13, name:'Corsair Dominator Platinum RGB 32GB', category:'ram', price:3200000, desc:'DDR5 5600MHz Premium RAM dengan Capellix RGB LEDs', features:['DDR5 5600MHz','32GB','Capellix RGB'], badge:'Premium', image:'https://m.media-amazon.com/images/I/61zEFLjQxOL._AC_UF1000,1000_QL80_.jpg' },
            { id:14, name:'Seagate FireCuda 530 2TB', category:'ssd', price:4200000, desc:'PCIe Gen4 x4 NVMe SSD dengan heatsink untuk PS5 dan PC', features:['PCIe 4.0','2TB','PS5 Compatible'], badge:'Hot', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRVlnQMfEXp6OMop9daCX2CsBMFeIe3gG76w&s' },
            { id:15, name:'SteelSeries Apex Pro TKL', category:'peripherals', price:2850000, desc:'Mechanical gaming keyboard dengan OmniPoint adjustable switches', features:['OmniPoint','TKL','OLED Display'], badge:'Hot', image:'https://images-cdn.ubuy.co.id/65623e26de87854ea973d047-steelseries-apex-pro-tkl-mechanical.jpg' }
        ];

        /* App state */
        let cart = [];
        try {
            const raw = localStorage.getItem('gamerhub_cart');
            if (raw) cart = JSON.parse(raw) || [];
        } catch (e) {
            cart = [];
            try { localStorage.removeItem('gamerhub_cart'); } catch (_) {}
        }
        let currentFilter = 'all';
        let currentSort = 'default';

        /* Helpers */
        function formatPrice(price){ return price.toLocaleString('id-ID'); }
        function getCategoryName(cat){
            const names = { ram:'Memory RAM', ssd:'Storage SSD', pc:'PC Gaming', peripherals:'Peripheral Gaming' };
            return names[cat] || cat;
        }

        /* Render products */
        function renderProducts(){
            const container = document.getElementById('productsContainer');
            let filtered = currentFilter === 'all' ? [...products] : products.filter(p => p.category === currentFilter);

            const searchTerm = (document.getElementById('searchInput').value || '').toLowerCase().trim();
            if (searchTerm) {
                filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm) || p.desc.toLowerCase().includes(searchTerm));
            }

            if (currentSort === 'price-low') filtered.sort((a,b)=>a.price-b.price);
            else if (currentSort === 'price-high') filtered.sort((a,b)=>b.price-a.price);
            else if (currentSort === 'name') filtered.sort((a,b)=>a.name.localeCompare(b.name));

            container.innerHTML = filtered.map(product => `
                <div class="product-card" data-id="${product.id}">
                            ${product.badge ? `<div class="product-badge">${escapeHtml(product.badge)}</div>` : ''}
                    <div class="product-image">
                        <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy"
                             onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22250%22><rect width=%22600%22 height=%22250%22 fill=%22%231e293b%22/><text x=%2230%22 y=%22130%22 fill=%22%238b5cf6%22 font-size=%2220%22>Gambar tidak tersedia</text></svg>'">
                    </div>
                    <div class="product-info">
                        <div class="product-category">${getCategoryName(product.category)}</div>
                        <div class="product-name">${escapeHtml(product.name)}</div>
                        <div class="product-desc">${escapeHtml(product.desc)}</div>
                        <div class="product-features">
                            ${product.features.map(f=>`<span class="feature-tag">${escapeHtml(f)}</span>`).join('')}
                        </div>
                        <div class="product-footer">
                            <div class="product-price">Rp ${formatPrice(product.price)}</div>
                            <button class="add-to-cart" onclick="addToCart(${product.id})">
                                <span aria-hidden="true">＋</span> Keranjang
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        /* Escape HTML to avoid accidental injection */
        function escapeHtml(str){
            if(!str) return '';
            return String(str)
                .replace(/&/g,'&amp;')
                .replace(/</g,'&lt;')
                .replace(/>/g,'&gt;')
                .replace(/"/g,'&quot;')
                .replace(/'/g,'&#039;');
        }

        /* Filter (receives element to toggle active class safely) */
        function filterProducts(category, el){
            currentFilter = category;
            document.querySelectorAll('.filter-btn').forEach(btn=>btn.classList.remove('active'));
            if(el) el.classList.add('active');
            renderProducts();
        }

        function searchProducts(){ renderProducts(); }
        function sortProducts(sortType){ currentSort = sortType; renderProducts(); }

        /* Cart functions */
        function persistCart(){ localStorage.setItem('gamerhub_cart', JSON.stringify(cart)); }
        function updateCart(){
            const cartCount = document.getElementById('cartCount');
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');

            const totalItems = cart.reduce((s,i)=>s+i.quantity,0);
            const subtotal = cart.reduce((s,i)=>s + i.price * i.quantity, 0);
            const tax = Math.round(subtotal * 0.11);
            const total = subtotal + tax;

            cartCount.textContent = totalItems;

            if(cart.length === 0){
                cartItems.innerHTML = `
                    <div class="empty-cart">
                        <div class="empty-cart-icon">🛍️</div>
                        <h3>Keranjang Anda Kosong</h3>
                        <p>Silakan tambahkan produk ke keranjang</p>
                    </div>
                `;
                cartTotal.innerHTML = '';
            } else {
                cartItems.innerHTML = cart.map(item => `
                    <div class="cart-item" data-id="${item.id}">
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${escapeHtml(item.name)}" onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22><rect width=%2280%22 height=%2280%22 fill=%22%231e293b%22/></svg>'">
                        </div>
                        <div class="cart-item-info">
                            <div class="cart-item-name">${escapeHtml(item.name)}</div>
                            <div class="cart-item-details">${getCategoryName(item.category)}</div>
                            <div class="cart-item-price">Rp ${formatPrice(item.price * item.quantity)}</div>
                        </div>
                        <div class="cart-item-controls">
                            <div class="quantity-controls">
                                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                                <span class="quantity">${item.quantity}</span>
                                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">＋</button>
                            </div>
                            <button class="remove-btn" onclick="removeFromCart(${item.id})">❌ Hapus</button>
                        </div>
                    </div>
                `).join('');

                cartTotal.innerHTML = `
                    <div class="total-row"><span>Subtotal:</span><span>Rp ${formatPrice(subtotal)}</span></div>
                    <div class="total-row"><span>Pajak (11%):</span><span>Rp ${formatPrice(tax)}</span></div>
                    <div class="total-row grand"><span>Total:</span><span>Rp ${formatPrice(total)}</span></div>
                    <button class="checkout-btn" onclick="checkout()">🧾 Checkout Sekarang</button>
                `;
            }

            persistCart();
        }

        function addToCart(productId){
            const product = products.find(p=>p.id===productId);
            if(!product) return;
            const existing = cart.find(i=>i.id===productId);
            if(existing) existing.quantity++;
            else cart.push({...product, quantity:1});
            updateCart();
            showNotification('✔ Produk ditambahkan ke keranjang!');
        }

        function updateQuantity(productId, change){
            const item = cart.find(i=>i.id===productId);
            if(!item) return;
            item.quantity += change;
            if(item.quantity <= 0) removeFromCart(productId);
            else updateCart();
        }

        function removeFromCart(productId){
            cart = cart.filter(i=>i.id !== productId);
            updateCart();
        }

        function checkout(){
            if(cart.length === 0) return;
            const subtotal = cart.reduce((s,i)=>s + i.price * i.quantity, 0);
            const tax = Math.round(subtotal * 0.11);
            const grandTotal = subtotal + tax;

            alert(`✔ Pesanan Berhasil Dibuat!\n\nTotal Pembelian: Rp ${formatPrice(grandTotal)}\n\nTerima kasih telah berbelanja di GamerHub Pro!`);
            cart = [];
            updateCart();
            closeCart();
        }

        /* Modal open/close with outside click + ESC key + scroll lock */
        const cartModal = document.getElementById('cartModal');
        const cartModalContent = document.getElementById('cartModalContent');
        function openCart(){
            if(!cartModal) return;
            cartModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        function closeCart(){
            if(!cartModal) return;
            cartModal.classList.remove('active');
            document.body.style.overflow = '';
        }
        function toggleCart(){ if(!cartModal) return; cartModal.classList.contains('active') ? closeCart() : openCart(); }

        const cartToggleBtn = document.getElementById('cartToggleBtn');
        const cartCloseBtn = document.getElementById('cartCloseBtn');
        if (cartToggleBtn) cartToggleBtn.addEventListener('click', toggleCart);
        if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
        // close when clicking outside content
        if (cartModal && cartModalContent) {
            cartModal.addEventListener('click', (e)=>{
                if(!cartModalContent.contains(e.target)) closeCart();
            });
        }
        // Escape to close only when modal is active
        window.addEventListener('keydown', (e)=>{ if(e.key === 'Escape' && cartModal && cartModal.classList.contains('active')) closeCart(); });

        /* Notification */
        function showNotification(message){
            const notification = document.createElement('div');
            notification.textContent = message;
            notification.style.cssText = `
                position:fixed; top:90px; right:20px; background:linear-gradient(135deg,var(--success),#059669);
                color:#fff; padding:.9rem 1.1rem; border-radius:12px; box-shadow:0 10px 30px rgba(16,185,129,0.18);
                z-index:2200; animation: fadeIn .18s ease;
            `;
            document.body.appendChild(notification);
            setTimeout(()=>{ notification.style.opacity = '0'; setTimeout(()=>notification.remove(),300); }, 2200);
        }

        /* Simple hamburger menu toggle for mobile (kept minimal, tidak merubah konsep) */
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const navLinks = document.getElementById('navLinks');
        if (hamburgerBtn && navLinks) {
            hamburgerBtn.addEventListener('click', ()=>{
                navLinks.classList.toggle('open');
            });
        }

        /* Utility: escape HTML already provided above */

        /* Init */
        function init(){
            renderProducts();
            updateCart();

            // note: filterProducts() already manages the 'active' class via onclick handlers
        }

        // safe exposure for inline handlers used in markup
        window.addToCart = addToCart;
        window.updateQuantity = updateQuantity;
        window.removeFromCart = removeFromCart;
        window.filterProducts = filterProducts;
        window.searchProducts = searchProducts;
        window.sortProducts = sortProducts;
        window.checkout = checkout;
        window.toggleCart = toggleCart;
        window.openCart = openCart;
        window.closeCart = closeCart;

        // run
        init();