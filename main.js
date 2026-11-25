// Creamos variable contenedor que identifique al div del HTML con
// el método "getElementById"
let contenedor = document.getElementById("contenedor"); // -> solo busca ID
// let contenedor = document.querySelector("#contenedor"); -> busca ID o CLASES

// Le agregamos al contenedor una clase ("contenedorInicial") con
// el método "classList.add"
contenedor.classList.add("contenedorInicial");

// Creamos un nuevo elemento (etiqueta "h1") desde el JS para acceder al HTML
let titulo = document.createElement("h1");
titulo.classList.add("titulo");

// Con "textContent" podemos darle un contenido a la etiqueta
titulo.textContent = "Clase 1 - DOM";

// Con "appendChild" podemos agregar un elemento dentro de otro elemento
contenedor.appendChild(titulo);

let subtitulo = document.createElement("h2");
subtitulo.style.color = "red";
subtitulo.textContent = "Programación I";

contenedor.appendChild(subtitulo);

/* -- TABLA -- */
let tabla = document.createElement("table");
tabla.classList.add("tabla");

/* -- Encabezado -- */
let header = document.createElement("thead");

let filaHeader = document.createElement("tr");

/* -- Columnas -- */
let th1 = document.createElement("th");
th1.textContent = "Título";

let th2 = document.createElement("th");
th2.textContent = "Año";

let th3 = document.createElement("th");
th3.textContent = "Descripción";

filaHeader.append(th1, th2, th3); // append -> agregué las 3 columnas en 1 línea
header.appendChild(filaHeader); // appenChild -> agrego de a 1 elemento
tabla.appendChild(header);

/* -- CUERPO -- */
let body = document.createElement("tbody");

/* Fila 1 */
let filaBody1 = document.createElement("tr");

/* Título del libro */
let td1 = document.createElement("td");
td1.textContent = "Harry Potter";

/* Año del libro */
let td2 = document.createElement("td");
td2.textContent = "1997";

/* Descripción del libro */
let td3 = document.createElement("td");
td3.textContent = "Libro de aventuras mágicas.";

filaBody1.append(td1, td2, td3);
body.appendChild(filaBody1);

/* Fila 2 */
let filaBody2 = document.createElement("tr");

let td4 = document.createElement("td");
td4.textContent = "El Señor de los Anillos";

let td5 = document.createElement("td");
td5.textContent = "1954";

let td6 = document.createElement("td");
td6.textContent = "Libro de fantasía.";

filaBody2.append(td4, td5, td6);
body.appendChild(filaBody2);

/* Le envío el cuerpo de la tabla */
tabla.appendChild(body);

/* Envío la tabla al contenedor */
contenedor.appendChild(tabla);

/* --------------------------------------------------------- */
/* Arreglo de libros */
let libros = [
  {
    titulo: "El Principito",
    anio: "1943",
    descripcion: "Novela corta.",
  },
  {
    titulo: "El Caballero de la Armadura Oxidada",
    anio: "1989",
    descripcion: "Libro clásico.",
  },
];

let contenedor2 = document.getElementById("contenedor2");
let boton = document.querySelector("#agregar"); // # -> ID

function editarTarjeta(tarjetaParametro, liTitulo, liDescripcion, liAnio) {
  /* OBTENEMOS NUEVA INFORMACIÓN DE LA TARJETA POR PROMPT */
  let nuevoTitulo = prompt("Nuevo titulo: ", tarjetaParametro.titulo);
  if (nuevoTitulo === null) return; // cancela: no modifica nada

  let nuevaDescripcion = prompt(
    "Nueva descripción: ",
    tarjetaParametro.descripcion,
  );
  if (nuevaDescripcion === null) return;

  let nuevoAnio = prompt("Nuevo año: ", tarjetaParametro.anio);
  if (nuevoAnio === null) return;

  /* ACTUALIZAMOS LA INFORMACIÓN DE LA TARJETA QUE VENÍA DEL ARREGLO */
  tarjetaParametro.titulo = nuevoTitulo;
  tarjetaParametro.descripcion = nuevaDescripcion;
  tarjetaParametro.anio = nuevoAnio;

  /* ACTUALIZAMOS EL CONTENIDO VISUAL DE LA TARJETA */
  liTitulo.textContent = "Título: " + tarjetaParametro.titulo;
  liDescripcion.textContent = "Descripción: " + tarjetaParametro.descripcion;
  liAnio.textContent = "Año: " + tarjetaParametro.anio;
}

/* Función para crear tarjetas */
function crearTarjeta(tarjetaParametro) {
  // TARJETA = LIBRO
  let tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta");

  let listaTarjetas = document.createElement("ul"); // tipo lista

  /* TÍTULO DE LA TARJETA */
  let liTitulo = document.createElement("li");
  // Accedo al título de una tarjeta según lo que yo recibo por parámetro
  liTitulo.textContent = tarjetaParametro.titulo;
  liTitulo.classList.add("tituloTarjeta");

  /* DESCRIPCIÓN DE LA TARJETA */
  let liDescripcion = document.createElement("li");
  liDescripcion.textContent = tarjetaParametro.descripcion;
  liDescripcion.classList.add("descripcionTarjeta");

  /* AÑO DE LA TARJETA */
  let liAnio = document.createElement("li");
  liAnio.textContent = tarjetaParametro.anio;
  liAnio.classList.add("anioTarjeta");

  listaTarjetas.append(liTitulo, liDescripcion, liAnio);

  /* ACCIONES */
  let acciones = document.createElement("div");
  acciones.classList.add("acciones");

  /* EDITAR */
  let botonEditar = document.createElement("button");
  botonEditar.textContent = "Editar tarjeta";
  botonEditar.classList.add("btn-editar");
  botonEditar.addEventListener("click", () => {
    editarTarjeta(tarjetaParametro, liTitulo, liDescripcion, liAnio);
  });

  /* ELIMINAR */
  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar tarjeta";
  botonEliminar.classList.add("btn-eliminar");
  botonEliminar.addEventListener("click", () => {
    /* Consultar primero si el usuario está seguro */
    let confirmarEliminar = confirm("¿Está seguro de eliminar esta tarjeta?");

    /* confirm -> devuelve true */
    if (confirmarEliminar) {
      tarjeta.remove(); // .remove -> ELIMINAR UN ELEMENTO
      alert("Tarjeta eliminada.");
    } else {
      alert("Operación cancelada.");
    }
  });

  /* VER MÁS */
  let botonVerMas = document.createElement("button");
  botonVerMas.textContent = "Ver Más";
  botonVerMas.classList.add("btn-verMas");
  botonVerMas.addEventListener("click", () => {
    verMasInfo(tarjetaParametro);
  });

  acciones.append(botonEditar, botonEliminar, botonVerMas);

  tarjeta.appendChild(listaTarjetas);

  tarjeta.appendChild(acciones);

  return tarjeta;
}

function verMasInfo(datoTarjeta) {
  /* 
    window.open -> abre una nueva pestaña en el navegador 
     _blank -> crea un documento en blanco
    */
  const pestania = window.open("", "_blank");

  /* Si el navegador bloquea ventana emergente (null), alerta al usuario */
  if (!pestania) {
    alert(
      "El navegador bloqueó la pestaña emergente. Debe permitir desde configuración.",
    );
    return;
  }

  /* DOM de la pestaña nueva */
  const doc = pestania.document;

  /* Accedo al documento, generando nuevas etiquetas sin necesidad de declararlas
  en variables */
  doc.title = datoTarjeta.title;

  /* Agregamos una hoja de estilo desde el DOM; manejamos estilos completos para
  etiquetas específicas desde un "style" */
  const estilo = doc.createElement("style");
  estilo.textContent =
    "body { font-family: Arial, sans-serif; max-width: 600px; margin: 2rem auto; padding: 0 1rem;}" +
    "h1 { margin-bottom: 0.2rem; color: pink }" +
    "dt { font-weight: bold; margin-top: 1rem; color: #0000 }" +
    "dd { margin: 0.2rem 0 0; font-size: 1.1rem }";

  doc.head.appendChild(estilo);

  let titulo = doc.createElement("h1");
  titulo.textContent = datoTarjeta.titulo;

  doc.body.appendChild(titulo);

  let lista = doc.createElement("dl");
  let campos = [
    ["Descripción: ", datoTarjeta.descripcion],
    ["Año: ", datoTarjeta.anio],
  ];

  campos.forEach((campo) => {
    let dt = doc.createElement("dt");
    dt.textContent = campo[0] || "Sin datos";
    let dd = doc.createElement("dd");
    dd.textContent = campo[1] || "Sin datos";
    //lista.appendChild(dt);
    //lista.appendChild(dd);
    lista.append(dt, dd);
  });
  doc.body.appendChild(lista);

  let botonCerrar = doc.createElement("button");
  botonCerrar.textContent = "Cerrar pestaña";
  botonCerrar.addEventListener("click", () => {
    pestania.close();
  });
  doc.body.appendChild(botonCerrar);
}

const servicioTarjetas = {
  crearTarjeta(datos) {
    let titulo = datos.titulo.trim(); // elimina espacios en blanco
    let descripcion = datos.descripcion.trim();
    let anio = Number(datos.anio);

    if (titulo === "" || descripcion === "") {
      return {
        ok: false,
        mensaje: "El título y la descripción son obligatorios.",
      };
    }

    if (!Number.isInteger(anio)) {
      return {
        ok: false,
        mensaje: "El año debe ser numérico",
      };
    }

    /* Estado: TRUE -> el servicio cumplió su propósito */
    /* dato: Objeto de TARJETA (parámetros esperados) */
    return {
      ok: true,
      dato: {
        titulo: titulo,
        descripcion: descripcion,
        anio: anio,
      },
    };
  },
};

let formulario = document.querySelector("#formularioTarjeta"); // ID: querySelector + #id
let mensaje = document.getElementById("mensaje"); // ID: getElementById + id

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // -> evitamos recargo de la página

    let resultado = servicioTarjetas.crearTarjeta({
        // referencia: elemento obtenido desde el HTML + dato (value)
        titulo: document.getElementById("titulo").value,
        descripcion: document.getElementById("descripcion").value,
        anio: document.getElementById("anio").value
    })

    /* En caso de conflicto en los datos, obtenemos estado "false" y el mensaje que definimos (qué fue lo que falló) */
    if (!resultado.ok) {
        mensaje.textContent = resultado.mensaje;
        return;
    }

    mensaje.textContent = "";
    contenedor.appendChild(crearTarjeta(resultado.dato));
    formulario.reset(); // .reset() -> vacía los inputs
})

let indice = 0;

/* addEventListener -> evento que escuche cuando haga "click" */
boton.addEventListener("click", () => {
  // indice es menor a la longitud de mi arreglo "libros"
  if (indice < libros.length) {
    /* 
            Creamos una nueva tarjeta llamando a la función "crearTarjeta"
            Parámetro de crearTarjeta = al libro en la posición que esté 
            recorriendo del arreglo "libros"
        */
    let nuevaTarjeta = crearTarjeta(libros[indice]);

    contenedor2.appendChild(nuevaTarjeta);

    indice++;
  } else {
    // Si no hay más libros, se deshabilita el botón
    boton.disabled = true;
    boton.textContent = "No hay más libros";
  }
});
