/* =========================
   GENERAL
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #fff7fb;
    color: #332530;
}

button,
input {
    font-family: inherit;
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
    color: inherit;
}


/* =========================
   NAVBAR
========================= */

.navbar {
    position: sticky;
    top: 0;
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 16px 6%;

    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(15px);

    border-bottom: 1px solid #f5d8e8;
}

.logo {
    font-size: 22px;
    font-weight: 800;
    color: #e05b9c;
}

.logo span {
    color: #733c61;
}

.navbar nav {
    display: flex;
    gap: 25px;
}

.navbar nav a {
    font-weight: 600;
    transition: 0.3s;
}

.navbar nav a:hover {
    color: #df5799;
}

.cart-button {
    border: none;
    background: #f6d4e5;
    color: #713755;

    padding: 10px 15px;
    border-radius: 30px;

    font-weight: bold;
}

.cart-button b {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-width: 23px;
    height: 23px;

    margin-left: 5px;

    border-radius: 50%;

    background: #df5799;
    color: white;

    font-size: 12px;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 600px;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    padding: 60px 20px;

    background:
        radial-gradient(circle at top left, #ffd8ea, transparent 40%),
        radial-gradient(circle at bottom right, #f3c8df, transparent 40%),
        #fff7fb;
}

.hero-content {
    max-width: 750px;
}

.mini-title {
    color: #d94f94;
    font-weight: 800;
    letter-spacing: 2px;
    margin-bottom: 20px;
}

.hero h1 {
    font-size: clamp(42px, 7vw, 78px);
    line-height: 1.05;
    margin-bottom: 25px;
}

.hero h1 span {
    color: #df5799;
}

.hero p:not(.mini-title) {
    font-size: 19px;
    color: #6f5a67;
    margin-bottom: 35px;
}

.main-button {
    display: inline-block;

    padding: 15px 28px;

    border-radius: 30px;

    background: #df5799;
    color: white;

    font-weight: bold;

    box-shadow: 0 10px 25px rgba(223, 87, 153, 0.25);

    transition: 0.3s;
}

.main-button:hover {
    transform: translateY(-3px);
    background: #c94483;
}


/* =========================
   SECTIONS
========================= */

.section {
    padding: 90px 6%;
}

.section-title {
    text-align: center;
    margin-bottom: 45px;
}

.section-title > span,
.contact > div > span {
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 3px;
    color: #df5799;
}

.section-title h2 {
    font-size: 42px;
    margin: 10px 0;
}

.section-title p {
    color: #806d78;
}


/* =========================
   SEARCH
========================= */

.search-box {
    max-width: 600px;
    margin: 0 auto 25px;
}

.search-box input {
    width: 100%;

    border: 1px solid #f0c9dc;
    outline: none;

    background: white;

    padding: 15px 20px;

    border-radius: 30px;

    font-size: 16px;

    box-shadow: 0 5px 20px rgba(130, 65, 100, 0.06);
}

.search-box input:focus {
    border-color: #df5799;
}


/* =========================
   FILTERS
========================= */

.filters,
.gender-filters {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    gap: 10px;

    margin-bottom: 18px;
}

.filter,
.gender {
    border: 1px solid #edc5d9;

    background: white;

    color: #70465f;

    padding: 10px 17px;

    border-radius: 25px;

    transition: 0.25s;
}

.filter:hover,
.gender:hover,
.filter.active,
.gender.active {
    background: #df5799;
    color: white;
    border-color: #df5799;
}


/* =========================
   PRODUCTS
========================= */

.products-grid {
    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(230px, 1fr));

    gap: 25px;
}

.product-card {
    background: white;

    border-radius: 22px;

    overflow: hidden;

    border: 1px solid #f3d9e6;

    box-shadow:
        0 10px 30px rgba(90, 45, 70, 0.07);

    transition: 0.3s;

    position: relative;
}

.product-card:hover {
    transform: translateY(-6px);

    box-shadow:
        0 18px 40px rgba(90, 45, 70, 0.12);
}

.product-image {
    width: 100%;
    height: 260px;

    object-fit: cover;

    display: block;

    background: #f9eaf2;
}

.product-info {
    padding: 20px;
}

.product-category {
    font-size: 12px;
    color: #df5799;
    font-weight: 700;
    text-transform: uppercase;
}

.product-info h3 {
    margin: 7px 0;
    font-size: 19px;
}

.product-info p {
    color: #796873;
    font-size: 14px;
    min-height: 40px;
}

.product-price {
    font-size: 21px;
    font-weight: 800;
    color: #713755;

    margin: 14px 0;
}

.product-actions {
    display: flex;
    gap: 8px;
}

.view-product,
.quick-cart {
    border: none;

    padding: 11px;

    border-radius: 12px;

    font-weight: bold;
}

.view-product {
    flex: 1;

    background: #f7dce9;
    color: #713755;
}

.quick-cart {
    width: 48px;

    background: #df5799;
    color: white;
}

.view-product:hover,
.quick-cart:hover {
    opacity: 0.85;
}


/* =========================
   NO PRODUCTS
========================= */

.no-products {
    display: none;

    text-align: center;

    padding: 40px;

    color: #806d78;
}


/* =========================
   CONTACT
========================= */

.contact {
    padding: 80px 6%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 40px;

    background: #f8d9e8;
}

.contact h2 {
    font-size: 38px;
    margin: 10px 0;
}

.contact p {
    color: #705766;
}

.contact-buttons {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.contact-buttons a {
    padding: 14px 20px;

    border-radius: 30px;

    font-weight: bold;
}

.whatsapp {
    background: #25d366;
    color: white;
}

.instagram {
    background: #df5799;
    color: white;
}


/* =========================
   MODALS
========================= */

.modal {
    position: fixed;

    inset: 0;

    z-index: 3000;

    display: none;

    align-items: center;
    justify-content: center;

    padding: 20px;

    background: rgba(38, 20, 31, 0.6);

    backdrop-filter: blur(7px);
}

.modal.show {
    display: flex;
}

.modal-content,
.cart-content {
    width: min(900px, 100%);

    max-height: 90vh;

    overflow-y: auto;

    background: white;

    border-radius: 25px;

    position: relative;

    box-shadow: 0 20px 70px rgba(0, 0, 0, 0.2);
}

.modal-content {
    display: grid;

    grid-template-columns: 1fr 1fr;

    overflow: hidden;
}

.modal-content > img {
    width: 100%;
    height: 100%;

    min-height: 450px;

    object-fit: cover;
}

.modal-info {
    padding: 50px 40px;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

.modal-category {
    color: #df5799;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 13px;
}

.modal-info h2 {
    font-size: 35px;
    margin: 10px 0;
}

.modal-info p:not(.modal-category) {
    color: #766570;
    line-height: 1.6;
}

.modal-info h3 {
    font-size: 28px;
    color: #713755;
    margin: 20px 0;
}

.close-modal {
    position: absolute;

    top: 15px;
    right: 15px;

    width: 38px;
    height: 38px;

    border: none;

    border-radius: 50%;

    background: #f5dce8;

    color: #713755;

    font-size: 25px;

    z-index: 5;
}

.add-cart-button {
    border: none;

    background: #df5799;
    color: white;

    padding: 15px;

    border-radius: 13px;

    font-weight: bold;

    font-size: 16px;
}


/* =========================
   CART
========================= */

.cart-content {
    max-width: 650px;
    padding: 30px;
}

.cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 20px;
}

.cart-header .close-modal {
    position: static;
}

.cart-item {
    display: flex;
    align-items: center;

    gap: 15px;

    padding: 15px 0;

    border-bottom: 1px solid #f0dce6;
}

.cart-item img {
    width: 75px;
    height: 75px;

    border-radius: 13px;

    object-fit: cover;
}

.cart-item-info {
    flex: 1;
}

.cart-item-info h4 {
    margin-bottom: 5px;
}

.cart-item-price {
    color: #df5799;
    font-weight: bold;
}

.quantity-controls {
    display: flex;
    align-items: center;
    gap: 8px;
}

.quantity-controls button {
    width: 30px;
    height: 30px;

    border: none;

    border-radius: 8px;

    background: #f6dbe8;

    color: #713755;

    font-weight: bold;
}

.remove-item {
    border: none;

    background: none;

    color: #d94f94;

    font-size: 18px;
}

.cart-summary {
    padding-top: 20px;
}

.cart-summary > div {
    display: flex;
    justify-content: space-between;

    font-size: 20px;

    margin-bottom: 18px;
}

.whatsapp-order {
    width: 100%;

    border: none;

    padding: 15px;

    border-radius: 13px;

    background: #25d366;
    color: white;

    font-size: 16px;
    font-weight: bold;
}

.clear-cart {
    width: 100%;

    border: none;

    background: transparent;

    color: #c74b83;

    padding: 13px;

    margin-top: 8px;
}

.empty-cart {
    text-align: center;
    padding: 40px;
}

.empty-cart div {
    font-size: 50px;
    margin-bottom: 10px;
}

.empty-cart p {
    margin-bottom: 20px;
    color: #806d78;
}

.empty-cart button {
    border: none;

    background: #df5799;
    color: white;

    padding: 12px 20px;

    border-radius: 25px;
}


/* =========================
   FOOTER
========================= */

footer {
    text-align: center;

    padding: 35px 20px;

    background: #3c2635;

    color: white;
}

footer p {
    color: #d6bcca;
    margin-top: 8px;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 800px) {

    .navbar {
        flex-wrap: wrap;
        gap: 15px;
    }

    .navbar nav {
        order: 3;
        width: 100%;

        justify-content: center;

        gap: 15px;

        overflow-x: auto;
    }

    .navbar nav a {
        font-size: 14px;
        white-space: nowrap;
    }

    .hero {
        min-height: 500px;
    }

    .section {
        padding: 65px 5%;
    }

    .section-title h2 {
        font-size: 34px;
    }

    .modal-content {
        grid-template-columns: 1fr;
    }

    .modal-content > img {
        min-height: 280px;
        height: 280px;
    }

    .modal-info {
        padding: 30px;
    }

    .contact {
        flex-direction: column;
        text-align: center;
    }

    .contact-buttons {
        justify-content: center;
    }

    .product-image {
        height: 240px;
    }
}

@media (max-width: 500px) {

    .logo {
        font-size: 18px;
    }

    .cart-button span {
        display: none;
    }

    .hero h1 {
        font-size: 43px;
    }

    .products-grid {
        grid-template-columns: 1fr;
    }

    .cart-content {
        padding: 20px;
    }

    .cart-item {
        flex-wrap: wrap;
    }
}
