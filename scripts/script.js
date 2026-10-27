const products = [
    { id: 1, category: "party", name: "Váy Dạ Hội Đỏ Cổ Điển", price: 250000, img: "images/party-dress-1.jpg" },
    { id: 2, category: "party", name: "Đầm Công Chúa Trắng Nàng Thơ", price: 200000, img: "images/party-dress-2.jpg" },
    { id: 3, category: "party", name: "Đầm Lụa Satin Xẻ Tà Sang Trọng", price: 280000, img: "images/party-dress-3.jpg" },
    { id: 4, category: "party", name: "Váy Cúp Ngực Đính Đá Dự Tiệc", price: 320000, img: "images/party-dress-4.jpg" },
    { id: 5, category: "party", name: "Đầm Dạ Hội Đuôi Cá Tôn Dáng", price: 300000, img: "images/party-dress-5.jpg" },
    { id: 6, category: "party", name: "Váy Trễ Vai Ánh Nhũ Sang Trọng", price: 270000, img: "images/party-dress-6.jpg" },
    { id: 7, category: "party", name: "Đầm Đen Xẻ Đùi Quyến Rũ", price: 260000, img: "images/party-dress-7.jpg" },
    { id: 8, category: "party", name: "Váy Xòe Bồng Phối Ren Tiểu Thư", price: 230000, img: "images/party-dress-8.jpg" },
    { id: 9, category: "aodai", name: "Áo Dài Truyền Thống Đỏ Quý Phái", price: 180000, img: "images/aodai-1.jpg" },
    { id: 10, category: "aodai", name: "Áo Dài Cách Tân Thêu Hoa Nhã Nhặn", price: 160000, img: "images/aodai-2.jpg" },
    { id: 11, category: "aodai", name: "Áo Dài Cưới Lụa Trơn Cổ Điển", price: 250000, img: "images/aodai-3.jpg" },
    { id: 12, category: "aodai", name: "Áo Dài Vải Voan Pastel Nhẹ Nhàng", price: 170000, img: "images/aodai-4.jpg" },
    { id: 13, category: "aodai", name: "Áo Dài Nhung Đỏ Đính Kết Ngọc", price: 280000, img: "images/aodai-5.jpg" },
    { id: 14, category: "aodai", name: "Áo Dài Lụa Tây Thi Cao Cấp", price: 220000, img: "images/aodai-6.jpg" },
    { id: 15, category: "aodai", name: "Áo Dài Cô Ba Sài Gòn Chấm Bi", price: 150000, img: "images/aodai-7.jpg" },
    { id: 16, category: "aodai", name: "Áo Dài Tứ Thân Truyền Thống", price: 200000, img: "images/aodai-8.jpg" },
    { id: 17, category: "lolita", name: "Đầm Lolita Classic Ngọt Ngào", price: 220000, img: "images/lolita-1.jpg" },
    { id: 18, category: "lolita", name: "Set Gothic Lolita Ren Đen Bí Ẩn", price: 250000, img: "images/lolita-2.jpg" },
    { id: 19, category: "lolita", name: "Cosplay Anime Học Đường Nhật Bản", price: 150000, img: "images/lolita-3.jpg" },
    { id: 20, category: "lolita", name: "Váy Công Chúa Gothic Quý Tộc", price: 280000, img: "images/lolita-4.jpg" },
    { id: 21, category: "lolita", name: "Trang Phục Nữ Quản Gia (Maid)", price: 180000, img: "images/lolita-5.jpg" },
    { id: 22, category: "lolita", name: "Đầm Lolita Trà Chiều Phong Cách Âu", price: 260000, img: "images/lolita-6.jpg" },
    { id: 23, category: "lolita", name: "Set Nữ Sinh Thủy Thủ Bảng Tên", price: 140000, img: "images/lolita-7.jpg" },
    { id: 24, category: "lolita", name: "Áo Choàng Phù Thủy Kèm Mũ Magician", price: 190000, img: "images/lolita-8.jpg" },
    { id: 25, category: "accessories", name: "Máy Ảnh Film Canon AE-1", price: 200000, img: "images/accessory-1.jpg" },
    { id: 26, category: "accessories", name: "Mũ Rơm Đi Biển Cổ Điển", price: 50000, img: "images/accessory-2.jpg" },
    { id: 27, category: "accessories", name: "Đèn Hoàng Hôn (Sunset Lamp)", price: 80000, img: "images/accessory-3.jpg" },
    { id: 28, category: "accessories", name: "Góc Setup Studio Hoa Khô", price: 150000, img: "images/accessory-4.jpg" },
    { id: 29, category: "accessories", name: "Gương Đứng Nghệ Thuật", price: 90000, img: "images/accessory-5.jpg" },
    { id: 30, category: "accessories", name: "Giỏ Mây Cầm Tay Ngoại Cảnh", price: 40000, img: "images/accessory-6.jpg" },
    { id: 31, category: "accessories", name: "Bộ Tóc Giả Cosplay Anime", price: 60000, img: "images/accessory-7.jpg" },
    { id: 32, category: "accessories", name: "Cài Tóc Tai Mèo / Sừng Quỷ", price: 30000, img: "images/accessory-8.jpg" },
    { id: 33, category: "accessories", name: "Trượng Phép Thuật / Kiếm Nhựa", price: 70000, img: "images/accessory-9.jpg" }
];

let cart = JSON.parse(localStorage.getItem('lumina_cart')) || [];
let orders = JSON.parse(localStorage.getItem('lumina_orders')) || [];

function formatMoney(amount) { return amount.toLocaleString('vi-VN') + 'đ'; }
function toggleMobileMenu() { document.getElementById('main-nav').classList.toggle('active'); }

// --- HÀM CHUYỂN TRANG (TAB/SPA) ---
let currentTabId = 'home';
let currentNavElement = null;

function showPage(pageId, element, skipScroll = false) {
    currentTabId = pageId;
    if (element) currentNavElement = element;

    // 1. Ẩn tất cả các trang
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active-page');
    });
    
    // 2. Hiển thị trang được chọn
    const targetPage = document.getElementById(pageId);
    if (targetPage) targetPage.classList.add('active-page');
    
    // 3. Xóa active ở tất cả menu và đổi màu menu đang chọn
    if (currentNavElement) {
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        currentNavElement.classList.add('active');
    }

    // 4. Đóng menu điện thoại & cuộn lên top
    document.getElementById('main-nav').classList.remove('active');
    if (!skipScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- HÀM TÌM KIẾM ---
function removeVietnameseTones(str) {
    if (!str) return "";
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

function searchAndSortProducts() {
    const rawTerm = document.getElementById("search-input").value.toLowerCase().trim();
    const term = removeVietnameseTones(rawTerm);
    const sortVal = document.getElementById("sort-select").value;
    
    let filteredProducts = [...products];

    if (term) {
        filteredProducts = filteredProducts.filter(p => {
            const productName = removeVietnameseTones(p.name.toLowerCase());
            return productName.includes(term);
        });
        
        // Khi gõ tìm kiếm, ẩn trang chủ/quản lý đơn, HIỂN THỊ TẤT CẢ các mục sản phẩm để thấy kết quả
        document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active-page'));
        document.querySelectorAll('.products-section').forEach(sec => sec.classList.add('active-page'));
    } else {
        // Trả lại giao diện trang hiện tại nếu xóa chữ ở ô tìm kiếm
        showPage(currentTabId, currentNavElement, true);
    }

    if (sortVal === "asc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortVal === "desc") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    renderFilteredProducts(filteredProducts);
}

function renderFilteredProducts(productList) {
    const categories = {
        "party": document.getElementById("party-list"),
        "aodai": document.getElementById("aodai-list"),
        "lolita": document.getElementById("lolita-list"),
        "accessories": document.getElementById("accessories-list")
    };

    for (let key in categories) { if (categories[key]) categories[key].innerHTML = ""; }

    productList.forEach(product => {
        const cardHTML = `
            <div class="product-card">
                <img src="${product.img}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price">${formatMoney(product.price)} / ngày</p>
                    <button class="btn-add" onclick="addToCart(${product.id})"><i class="fas fa-plus"></i> Chọn Thuê</button>
                </div>
            </div>
        `;
        if (categories[product.category]) { categories[product.category].innerHTML += cardHTML; }
    });
}

// --- QUẢN LÝ GIỎ HÀNG ---
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    if (existing) existing.quantity += 1; else cart.push({ ...product, quantity: 1 });
    
    localStorage.setItem('lumina_cart', JSON.stringify(cart));
    updateCartUI();
    showToast("Đã thêm sản phẩm vào giỏ!");
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('lumina_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById("cart-items");
    const count = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");
    if (!container) return;

    container.innerHTML = "";
    let total = 0, qty = 0;

    cart.forEach(item => {
        total += item.price * item.quantity; qty += item.quantity;
        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p>${formatMoney(item.price)} x ${item.quantity}</p>
                    <button class="btn-remove" onclick="removeFromCart(${item.id})">Bỏ chọn</button>
                </div>
            </div>
        `;
    });
    count.innerText = qty;
    cartTotal.innerText = formatMoney(total) + " / ngày";
}

function toggleCart() { document.getElementById("cart-sidebar").classList.toggle("active"); }

// --- CHỐT ĐƠN & VALIDATE ---
function openCheckoutModal() {
    if (cart.length === 0) { showToast("Giỏ đồ thuê đang trống!"); return; }
    toggleCart(); 
    document.getElementById("checkout-modal").classList.add("active");
    
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    
    const dateInput = document.getElementById("renter-date");
    dateInput.value = dateStr;
    dateInput.min = dateStr; 
    
    document.getElementById("renter-time").value = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    document.getElementById("renter-days").value = 1;
    document.getElementById("discount-percent").value = 0;
    
    calculateModalTotal();
}

function closeCheckoutModal() { document.getElementById("checkout-modal").classList.remove("active"); }

function calculateModalTotal() {
    let dailyTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let days = Math.max(1, parseInt(document.getElementById("renter-days").value) || 1);
    let discount = Math.max(0, Math.min(100, parseFloat(document.getElementById("discount-percent").value) || 0));
    
    let finalTotal = (dailyTotal * days) * (1 - discount/100);
    document.getElementById("modal-total-price").innerText = formatMoney(finalTotal > 0 ? finalTotal : 0);
}

function sanitizeHTML(str) {
    let temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

function submitOrder() {
    const rawName = document.getElementById("renter-name").value.trim();
    const rawPhone = document.getElementById("renter-phone").value.trim();
    
    if (!rawName || !rawPhone) { alert("Vui lòng nhập Tên và Số điện thoại!"); return; }

    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    if (!phoneRegex.test(rawPhone)) {
        alert("Lỗi: Vui lòng nhập đúng định dạng SĐT (10 số)!"); return;
    }

    const name = sanitizeHTML(rawName);
    const phone = sanitizeHTML(rawPhone);
    const date = document.getElementById("renter-date").value;
    const time = document.getElementById("renter-time").value;
    const days = Math.max(1, parseInt(document.getElementById("renter-days").value) || 1);
    const discountPercent = Math.max(0, Math.min(100, parseFloat(document.getElementById("discount-percent").value) || 0));
    const depositType = document.querySelector('input[name="deposit-type"]:checked').value;

    let dailyTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let finalTotal = (dailyTotal * days) * (1 - discountPercent/100);

    const newOrder = {
        id: Date.now(), name, phone, date, time, days, discountPercent, depositType,
        items: [...cart], total: finalTotal, status: "Đang thuê"
    };

    orders.push(newOrder);
    localStorage.setItem('lumina_orders', JSON.stringify(orders));
    
    cart = []; 
    localStorage.setItem('lumina_cart', JSON.stringify(cart));
    
    updateCartUI(); 
    closeCheckoutModal(); 
    renderOrders();
    showToast("Chốt đơn thuê thành công!");
}

// --- QUẢN LÝ ĐƠN HÀNG ---
function renderOrders() {
    const container = document.getElementById("orders-container");
    if (!container) return;
    
    if (orders.length === 0) {
        container.innerHTML = `<p class="no-order">Chưa có đơn thuê nào được tạo.</p>`; return;
    }

    container.innerHTML = "";
    [...orders].reverse().forEach(order => {
        let itemNames = order.items.map(i => `${sanitizeHTML(i.name)} (x${i.quantity})`).join(", ");
        let discountText = order.discountPercent > 0 ? ` <span style="color:#e63946">(Đã giảm ${order.discountPercent}%)</span>` : '';
        let btnDisabled = order.status === "Đã trả đồ" ? "disabled" : "";
        let btnText = order.status === "Đã trả đồ" ? "Hoàn tất" : "Xác nhận đã trả đồ";
        
        container.innerHTML += `
            <div class="order-card">
                <div class="order-info">
                    <h4>${order.name} - SĐT: ${order.phone}</h4>
                    <p><b>Đồ thuê:</b> ${itemNames}</p>
                    <p><b>Thời gian:</b> ${order.date} lúc ${order.time} (${order.days} ngày)</p>
                    <p><b>Tổng tiền:</b> ${formatMoney(order.total)}${discountText}</p>
                </div>
                <div style="text-align: right;">
                    <span class="order-status ${order.status === 'Đang thuê' ? 'status-renting' : 'status-returned'}">${order.status}</span>
                    <div class="order-actions">
                        <button class="btn-return" ${btnDisabled} onclick="markAsReturned(${order.id})">${btnText}</button>
                        <button class="btn-delete" onclick="deleteOrder(${order.id})"><i class="fas fa-trash"></i> Xóa đơn</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function markAsReturned(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = "Đã trả đồ";
        localStorage.setItem('lumina_orders', JSON.stringify(orders));
        renderOrders();
        showToast(`Đã nhận lại đồ của khách ${order.name}!`);
    }
}

function deleteOrder(orderId) {
    if (confirm("CẢNH BÁO: Bạn có chắc chắn muốn xóa đơn hàng này không?")) {
        orders = orders.filter(o => o.id !== orderId);
        localStorage.setItem('lumina_orders', JSON.stringify(orders));
        renderOrders();
        showToast("Đã xóa đơn hàng thành công!");
    }
}

function showToast(msg) {
    const t = document.getElementById("toast");
    if(!t) return; t.innerText = msg; t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 2500);
}

// --- BACK TO TOP ---
window.addEventListener('scroll', () => {
    const btt = document.getElementById("back-to-top");
    if (btt) {
        if (window.scrollY > 400) btt.style.display = "block";
        else btt.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- KHỞI TẠO KHI LOAD TRANG ---
window.onload = function() { 
    currentNavElement = document.querySelector('.nav-btn.active');
    searchAndSortProducts(); 
    renderOrders(); 
    updateCartUI(); 
};