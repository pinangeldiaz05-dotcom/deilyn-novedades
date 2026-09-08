document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     NAVEGACIÓN
  ========================= */

  const enlaceInicio = document.getElementById("enlaceInicio");
  const btnExplorar = document.getElementById("btnExplorar");

  enlaceInicio.addEventListener("click", function (e) {

    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

  btnExplorar.addEventListener("click", function () {

    document.getElementById("novedades").scrollIntoView({
      behavior: "smooth"
    });

  });


  /* =========================
     PRODUCTOS
  ========================= */

  const productos = {

    1: {
      imagen: "https://i.ibb.co/fdQVwHGR/jeju73.jpg",
      titulo: "Conjunto infantil",
      descripcion: "Conjunto moderno y cómodo para niños.",
      precio: "RD$1,000"
    },

    2: {
      imagen: "https://i.ibb.co/S7sNx3q9/jsheyr75.webp",
      titulo: "Conjunto moderno",
      descripcion: "Un estilo bonito para cualquier ocasión.",
      precio: "RD$1,000"
    },

    3: {
      imagen: "https://i.ibb.co/NgfDDtMm/kdhdjd.jpg",
      titulo: "Conjunto casual",
      descripcion: "Perfecto para un look cómodo y moderno.",
      precio: "RD$1,000"
    },

    4: {
      imagen: "https://i.ibb.co/ZRVm145d/sfgwes.jpg",
      titulo: "Pantalón para niño",
      descripcion: "Pantalón cómodo para el día a día.",
      precio: "RD$700"
    },

    5: {
      imagen: "https://i.ibb.co/fcd6vFY/ehw.jpg",
      titulo: "Pantalón para niña",
      descripcion: "Diseño cómodo y bonito.",
      precio: "RD$700"
    },

    6: {
      imagen: "https://i.ibb.co/HpRW0pzJ/sasa.jpg",
      titulo: "Poloche para niño",
      descripcion: "Poloche cómodo para cualquier ocasión.",
      precio: "RD$500"
    },

    7: {
      imagen: "https://i.ibb.co/9mPbBVXc/jddd.jpg",
      titulo: "Poloche para niña",
      descripcion: "Estilo sencillo y bonito.",
      precio: "RD$500"
    },

    8: {
      imagen: "https://i.ibb.co/nNNcRJWw/jdd.jpg",
      titulo: "Conjunto para niño",
      descripcion: "Conjunto moderno y cómodo.",
      precio: "RD$1,000"
    },

    9: {
      imagen: "https://i.ibb.co/C3M4Zj76/jjhj.jpg",
      titulo: "Conjunto para niña",
      descripcion: "Un conjunto bonito para las pequeñas.",
      precio: "RD$1,000"
    },

    10: {
      imagen: "https://i.ibb.co/pj458jFs/jsjs.jpg",
      titulo: "Short para niño",
      descripcion: "Short ligero y cómodo.",
      precio: "RD$450"
    },

    11: {
      imagen: "https://i.ibb.co/R4PZ6TJ3/jsius.jpg",
      titulo: "Short para niña",
      descripcion: "Diseño cómodo para todos los días.",
      precio: "RD$450"
    },

    12: {
      imagen: "https://i.ibb.co/d0xmh8CL/ksjs.jpg",
      titulo: "Vestido para niña",
      descripcion: "Vestido bonito y moderno.",
      precio: "RD$900"
    },

    13: {
      imagen: "https://i.ibb.co/MDRG8KKM/jui7.jpg",
      titulo: "Camisa para niña",
      descripcion: "Camisa con un estilo moderno.",
      precio: "RD$650"
    },

    14: {
      imagen: "https://i.ibb.co/gFXddLW1/78.jpg",
      titulo: "Camisa para niño",
      descripcion: "Camisa de manga larga con diseño moderno.",
      precio: "RD$650"
    }

  };


  /* =========================
     MODAL
  ========================= */

  const modal = document.getElementById("modalProducto");
  const cerrarModal = document.getElementById("cerrarModal");

  const modalImagen = document.getElementById("modalImagen");
  const modalTitulo = document.getElementById("modalTitulo");
  const modalDescripcion = document.getElementById("modalDescripcion");
  const modalPrecio = document.getElementById("modalPrecio");
  const botonContacto = document.getElementById("botonContacto");


  document.querySelectorAll(".btn-producto").forEach(function (boton) {

    boton.addEventListener("click", function () {

      const id = boton.dataset.producto;
      const producto = productos[id];

      modalImagen.src = producto.imagen;
      modalTitulo.textContent = producto.titulo;
      modalDescripcion.textContent = producto.descripcion;
      modalPrecio.textContent = producto.precio;

      modal.classList.add("mostrar");

    });

  });


  cerrarModal.addEventListener("click", function () {

    modal.classList.remove("mostrar");

  });


  modal.addEventListener("click", function (e) {

    if (e.target === modal) {
      modal.classList.remove("mostrar");
    }

  });


  document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {
      modal.classList.remove("mostrar");
    }

  });


  /* =========================
     BOTÓN CONTACTO
  ========================= */

  botonContacto.addEventListener("click", function () {

    modal.classList.remove("mostrar");

    document.getElementById("contacto").scrollIntoView({
      behavior: "smooth"
    });

  });


  /* =========================
     FILTROS
  ========================= */

  let categoriaSeleccionada = "todos";
  let generoSeleccionado = "todos";

  const filtrosCategoria = document.querySelectorAll(".filtro");
  const filtrosGenero = document.querySelectorAll(".filtro-genero");
  const ropaItems = document.querySelectorAll(".ropa-item");


  function actualizarProductos() {

    ropaItems.forEach(function (producto) {

      const categoria = producto.dataset.categoria;
      const genero = producto.dataset.genero;

      const coincideCategoria =
        categoriaSeleccionada === "todos" ||
        categoria === categoriaSeleccionada;

      const coincideGenero =
        generoSeleccionado === "todos" ||
        genero === generoSeleccionado;

      if (coincideCategoria && coincideGenero) {

        producto.style.display = "";

      } else {

        producto.style.display = "none";

      }

    });

  }


  filtrosCategoria.forEach(function (boton) {

    boton.addEventListener("click", function () {

      filtrosCategoria.forEach(function (btn) {
        btn.classList.remove("activo");
      });

      boton.classList.add("activo");

      categoriaSeleccionada = boton.dataset.categoria;

      actualizarProductos();

    });

  });


  filtrosGenero.forEach(function (boton) {

    boton.addEventListener("click", function () {

      filtrosGenero.forEach(function (btn) {
        btn.classList.remove("activo");
      });

      boton.classList.add("activo");

      generoSeleccionado = boton.dataset.genero;

      actualizarProductos();

    });

  });

});