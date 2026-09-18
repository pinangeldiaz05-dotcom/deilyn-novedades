/* =====================================================
   DEILYN NOVEDADES
   SCRIPT PRINCIPAL
===================================================== */


/* =====================================================
   PRODUCTOS REALES
===================================================== */

const products = [

    {
        id: 1,
        name: "Conjunto infantil",
        price: 1000,
        category: "conjuntos",
        gender: "niño",
        description: "Conjunto moderno y cómodo para niños.",
        image: "https://i.ibb.co/fdQVwHGR/jeju73.jpg",
        featured: true
    },

    {
        id: 2,
        name: "Conjunto moderno",
        price: 1000,
        category: "conjuntos",
        gender: "niña",
        description: "Un estilo bonito para cualquier ocasión.",
        image: "https://i.ibb.co/S7sNx3q9/jsheyr75.webp",
        featured: true
    },

    {
        id: 3,
        name: "Conjunto casual",
        price: 1000,
        category: "conjuntos",
        gender: "niña",
        description: "Perfecto para un look cómodo y moderno.",
        image: "https://i.ibb.co/NgfDDtMm/kdhdjd.jpg",
        featured: true
    },

    {
        id: 4,
        name: "Pantalón para niño",
        price: 700,
        category: "pantalones",
        gender: "niño",
        description: "Pantalón cómodo para el día a día.",
        image: "https://i.ibb.co/ZRVm145d/sfgwes.jpg"
    },

    {
        id: 5,
        name: "Pantalón para niña",
        price: 700,
        category: "pantalones",
        gender: "niña",
        description: "Diseño cómodo y bonito.",
        image: "https://i.ibb.co/fcd6vFY/ehw.jpg"
    },

    {
        id: 6,
        name: "Poloche para niño",
        price: 500,
        category: "poloches",
        gender: "niño",
        description: "Poloche cómodo para cualquier ocasión.",
        image: "https://i.ibb.co/HpRW0pzJ/sasa.jpg"
    },

    {
        id: 7,
        name: "Poloche para niña",
        price: 500,
        category: "poloches",
        gender: "niña",
        description: "Estilo sencillo y bonito.",
        image: "https://i.ibb.co/9mPbBVXc/jddd.jpg"
    },

    {
        id: 8,
        name: "Conjunto para niño",
        price: 1000,
        category: "conjuntos",
        gender: "niño",
        description: "Conjunto moderno y cómodo.",
        image: "https://i.ibb.co/nNNcRJWw/jdd.jpg"
    },

    {
        id: 9,
        name: "Conjunto para niña",
        price: 1000,
        category: "conjuntos",
        gender: "niña",
        description: "Un conjunto bonito para las pequeñas.",
        image: "https://i.ibb.co/C3M4Zj76/jjhj.jpg"
    },

    {
        id: 10,
        name: "Short para niño",
        price: 450,
        category: "shorts",
        gender: "niño",
        description: "Short ligero y cómodo.",
        image: "https://i.ibb.co/pj458jFs/jsjs.jpg"
    },

    {
        id: 11,
        name: "Short para niña",
        price: 450,
        category: "shorts",
        gender: "niña",
        description: "Diseño cómodo para todos los días.",
        image: "https://i.ibb.co/R4PZ6TJ3/jsius.jpg"
    },

    {
        id: 12,
        name: "Vestido para niña",
        price: 900,
        category: "vestidos",
        gender: "niña",
        description: "Vestido bonito y moderno.",
        image: "https://i.ibb.co/d0xmh8CL/ksjs.jpg"
    },

    {
        id: 13,
        name: "Camisa para niña",
        price: 650,
        category: "camisas",
        gender: "niña",
        description: "Camisa con un estilo moderno.",
        image: "https://i.ibb.co/MDRG8KKM/jui7.jpg"
    },

    {
        id: 14,
        name: "Camisa para niño",
        price: 650,
        category: "camisas",
        gender: "niño",
        description: "Camisa de manga larga con diseño moderno.",
        image: "https://i.ibb.co/gFXddLW1/78.jpg"
    }

];


/* =====================================================
   VARIABLES
===================================================== */

let cart = JSON.parse(localStorage.getItem("deilynCart")) || [];

let currentCategory = "todos";
let currentGender = "todos";
let currentSearch = "";

let selectedProduct = null;


/* =====================================================
   ELEMENTOS HTML
===================================================== */

const productsGrid =
    document.getElementById("productsGrid");

const featuredProducts =
    document.getElementById("featuredProducts");

const cartCount =
    document.getElementById("cartCount");

const cartModal =
    document.getElementById("cartModal");

const productModal =
    document.getElementById("productModal");

const cartItems =
    document.getElementById("cartItems");

const emptyCart =
    document.getElementById("emptyCart");

const cartSummary =
    document.getElementById("cartSummary");

const cartTotal =
    document.getElementById("cartTotal");

const noProducts =
    document.getElementById("noProducts");

const searchInput =
    document.getElementById("searchInput");


/* =====================================================
   FORMATO DE DINERO
===================================================== */

function formatPrice(price) {

    return "RD$" + price.toLocaleString("es-DO");

}


/* =====================================================
   MOSTRAR PRODUCTOS
===================================================== */

function renderProducts() {

    productsGrid.innerHTML = "";

    const filteredProducts = products.filter(product => {

        const categoryMatch =
            currentCategory === "todos" ||
            product.category === currentCategory;

        const genderMatch =
            currentGender === "todos" ||
            product.gender === currentGender;

        const searchMatch =
            product.name
                .toLowerCase()
                .includes(currentSearch.toLowerCase());

        return categoryMatch && genderMatch && searchMatch;

    });


    if (filteredProducts.length === 0) {

        noProducts.style.display = "block";

        return;

    }

    noProducts.style.display = "none";


    filteredProducts.forEach(product => {

        productsGrid.appendChild(
            createProductCard(product)
        );

    });

}


/* =====================================================
   PRODUCTOS DESTACADOS
===================================================== */

function renderFeatured() {

    featuredProducts.innerHTML = "";

    products
        .filter(product => product.featured)
        .forEach(product => {

            featuredProducts.appendChild(
                createProductCard(product)
            );

        });

}


/* =====================================================
   CREAR TARJETA
===================================================== */

function createProductCard(product) {

    const card = document.createElement("article");

    card.className = "product-card";


    card.innerHTML = `

        <img
            class="product-image"
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
        >

        <div class="product-info">

            <span class="product-category">
                ${product.category}
            </span>

            <h3>
                ${product.name}
            </h3>

            <p>
                ${product.description}
            </p>

            <div class="product-price">
                ${formatPrice(product.price)}
            </div>

            <div class="product-actions">

                <button
                    class="view-product"
                    onclick="openProduct(${product.id})"
                >
                    Ver producto
                </button>

                <button
                    class="quick-cart"
                    onclick="addToCart(${product.id})"
                    title="Agregar al carrito"
                >
                    🛒
                </button>

            </div>

        </div>
    `;

    return card;

}


/* =====================================================
   ABRIR PRODUCTO
===================================================== */

function openProduct(id) {

    const product =
        products.find(item => item.id === id);

    if (!product) return;

    selectedProduct = product;

    document.getElementById("modalImage").src =
        product.image;

    document.getElementById("modalImage").alt =
        product.name;

    document.getElementById("modalName").textContent =
        product.name;

    document.getElementById("modalDescription").textContent =
        product.description;

    document.getElementById("modalPrice").textContent =
        formatPrice(product.price);

    document.getElementById("modalCategory").textContent =
        product.category;

    productModal.classList.add("show");

    document.body.style.overflow = "hidden";

}


/* =====================================================
   CERRAR PRODUCTO
===================================================== */

document
    .getElementById("closeProductModal")
    .addEventListener("click", closeProductModal);


function closeProductModal() {

    productModal.classList.remove("show");

    document.body.style.overflow = "";

}


/* =====================================================
   AGREGAR DESDE MODAL
===================================================== */

document
    .getElementById("modalAddCart")
    .addEventListener("click", () => {

        if (!selectedProduct) return;

        addToCart(selectedProduct.id);

        closeProductModal();

        openCart();

    });


/* =====================================================
   AGREGAR AL CARRITO
===================================================== */

function addToCart(id) {

    const product =
        products.find(item => item.id === id);

    if (!product) return;


    const existing =
        cart.find(item => item.id === id);


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id: product.id,

            quantity: 1

        });

    }


    saveCart();

    updateCart();

}


/* =====================================================
   GUARDAR CARRITO
===================================================== */

function saveCart() {

    localStorage.setItem(
        "deilynCart",
        JSON.stringify(cart)
    );

}


/* =====================================================
   ACTUALIZAR CARRITO
===================================================== */

function updateCart() {

    cartItems.innerHTML = "";

    let totalItems = 0;

    let totalPrice = 0;


    cart.forEach(item => {

        const product =
            products.find(p => p.id === item.id);

        if (!product) return;


        totalItems += item.quantity;

        totalPrice +=
            product.price * item.quantity;


        const cartItem =
            document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="cart-item-info">

                <h4>
                    ${product.name}
                </h4>

                <span class="cart-item-price">
                    ${formatPrice(product.price)}
                </span>

            </div>

            <div class="quantity-controls">

                <button
                    onclick="changeQuantity(${product.id}, -1)"
                >
                    −
                </button>

                <strong>
                    ${item.quantity}
                </strong>

                <button
                    onclick="changeQuantity(${product.id}, 1)"
                >
                    +
                </button>

            </div>

            <button
                class="remove-item"
                onclick="removeFromCart(${product.id})"
                title="Eliminar"
            >
                🗑️
            </button>

        `;


        cartItems.appendChild(cartItem);

    });


    cartCount.textContent = totalItems;

    cartTotal.textContent =
        formatPrice(totalPrice);


    if (cart.length === 0) {

        emptyCart.style.display = "block";

        cartSummary.style.display = "none";

    } else {

        emptyCart.style.display = "none";

        cartSummary.style.display = "block";

    }

}


/* =====================================================
   CAMBIAR CANTIDAD
===================================================== */

function changeQuantity(id, amount) {

    const item =
        cart.find(item => item.id === id);

    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(item => item.id !== id);

    }


    saveCart();

    updateCart();

}


/* =====================================================
   ELIMINAR PRODUCTO
===================================================== */

function removeFromCart(id) {

    cart =
        cart.filter(item => item.id !== id);

    saveCart();

    updateCart();

}


/* =====================================================
   ABRIR CARRITO
===================================================== */

document
    .getElementById("openCart")
    .addEventListener("click", openCart);


function openCart() {

    updateCart();

    cartModal.classList.add("show");

    document.body.style.overflow = "hidden";

}


/* =====================================================
   CERRAR CARRITO
===================================================== */

document
    .getElementById("closeCart")
    .addEventListener("click", closeCart);


function closeCart() {

    cartModal.classList.remove("show");

    document.body.style.overflow = "";

}


/* =====================================================
   SEGUIR COMPRANDO
===================================================== */

document
    .getElementById("continueShopping")
    .addEventListener("click", closeCart);


/* =====================================================
   VACIAR CARRITO
===================================================== */

document
    .getElementById("clearCart")
    .addEventListener("click", () => {

        if (cart.length === 0) return;

        const confirmClear =
            confirm("¿Quieres vaciar todo el carrito?");

        if (!confirmClear) return;

        cart = [];

        saveCart();

        updateCart();

    });


/* =====================================================
   FILTRO CATEGORÍAS
===================================================== */

document
    .querySelectorAll(".filter")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".filter")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            button.classList.add("active");

            currentCategory =
                button.dataset.category;

            renderProducts();

        });

    });


/* =====================================================
   FILTRO GÉNERO
===================================================== */

document
    .querySelectorAll(".gender")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".gender")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            button.classList.add("active");

            currentGender =
                button.dataset.gender;

            renderProducts();

        });

    });


/* =====================================================
   BUSCADOR
===================================================== */

searchInput.addEventListener("input", event => {

    currentSearch =
        event.target.value;

    renderProducts();

});


/* =====================================================
   PEDIDO POR WHATSAPP
===================================================== */

document
    .getElementById("whatsappOrder")
    .addEventListener("click", () => {

        if (cart.length === 0) {

            alert("Tu carrito está vacío.");

            return;

        }


        let message =
            "Hola, quiero hacer un pedido en Deilyn Novedades:%0A%0A";


        let total = 0;


        cart.forEach(item => {

            const product =
                products.find(p => p.id === item.id);

            if (!product) return;


            const subtotal =
                product.price * item.quantity;

            total += subtotal;


            message +=
                `• ${product.name} x${item.quantity} — ${formatPrice(subtotal)}%0A`;

        });


        message +=
            `%0A*Total: ${formatPrice(total)}*`;

        message +=
            "%0A%0AQuisiera consultar disponibilidad y tallas.";


        const whatsappURL =
            `https://wa.me/18295861825?text=${message}`;


        window.open(
            whatsappURL,
            "_blank"
        );

    });


/* =====================================================
   CERRAR MODALES AL HACER CLICK AFUERA
===================================================== */

productModal.addEventListener("click", event => {

    if (event.target === productModal) {

        closeProductModal();

    }

});


cartModal.addEventListener("click", event => {

    if (event.target === cartModal) {

        closeCart();

    }

});


/* =====================================================
   ESC PARA CERRAR
===================================================== */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeProductModal();

        closeCart();

    }

});


/* =====================================================
   INICIAR PÁGINA
===================================================== */

renderFeatured();

renderProducts();

updateCart();
