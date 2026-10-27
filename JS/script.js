// ==========================================
// PRODUCTOS
// ==========================================

const productos = {

  "robot-pi5": {
    nombre: "Robot Móvil Programable Raspberry Pi 5",
    precio: 249.99,
    imagen: "img/robot-movil-programable.png",
    descripcion: "Robot móvil programable basado en Raspberry Pi 5, ideal para proyectos de robótica, inteligencia artificial, visión artificial, automatización y educación STEM.",
    especificaciones: [
      "Controlador: Raspberry Pi 5, 8 GB RAM",
      "Procesador: Broadcom BCM2712, Quad-Core ARM Cortex-A76 a 2.4 GHz",
      "Motores: 2 motores DC con encoder",
      "Sensores: Ultrasonido y seguimiento de línea",
      "Conectividad: Wi-Fi y Bluetooth",
      "Puertos: USB 3.0, USB 2.0, Gigabit Ethernet y GPIO de 40 pines",
      "Almacenamiento: Compatible con tarjeta microSD",
      "Batería: 7.4 V / 2200 mAh",
      "Chasis: Metálico",
      "Aplicaciones: Robótica educativa, inteligencia artificial y automatización"
    ],
    garantia: "1 año"
  },

  "brazo-robotico": {
    nombre: "Brazo Robótico Programable 4DOF",
    precio: 159.99,
    imagen: "img/brazo-robotico.png",
    descripcion: "Brazo robótico programable de 4 grados de libertad, diseñado para prácticas de automatización, robótica y programación.",
    especificaciones: [
      "Tipo: Brazo robótico programable",
      "Grados de libertad: 4DOF",
      "Control: Programable",
      "Aplicaciones: Robótica y automatización",
      "Uso: Educación y proyectos tecnológicos"
    ],
    garantia: "1 año"
  },

  "arduino-uno": {
    nombre: "Arduino UNO R3",
    precio: 24.99,
    imagen: "img/arduino-uno r3.png",
    descripcion: "Placa de desarrollo Arduino UNO R3 ideal para aprender programación, electrónica y desarrollar proyectos de automatización.",
    especificaciones: [
      "Tipo: Placa de desarrollo",
      "Microcontrolador: ATmega328P",
      "Entradas y salidas digitales",
      "Entradas analógicas",
      "Conexión USB",
      "Ideal para proyectos de electrónica y robótica"
    ],
    garantia: "1 año"
  },

  "esp32": {
    nombre: "ESP32 DevKit V1",
    precio: 14.99,
    imagen: "img/esp-32.png",
    descripcion: "Placa ESP32 para proyectos de IoT, automatización, robótica y aplicaciones conectadas a Internet.",
    especificaciones: [
      "Tipo: Placa de desarrollo",
      "Conectividad Wi-Fi",
      "Conectividad Bluetooth",
      "Entradas y salidas GPIO",
      "Compatible con múltiples sensores",
      "Ideal para proyectos IoT"
    ],
    garantia: "1 año"
  },

  "sensor-ultrasonico": {
    nombre: "Sensor Ultrasónico HC-SR04",
    precio: 3.49,
    imagen: "img/sensor-ultrasonico.png",
    descripcion: "Sensor ultrasónico para medir distancias y detectar objetos en proyectos de robótica y automatización.",
    especificaciones: [
      "Modelo: HC-SR04",
      "Tipo: Sensor ultrasónico",
      "Medición de distancia",
      "Compatible con Arduino y otras placas",
      "Ideal para robots y sistemas de automatización"
    ],
    garantia: "1 año"
  },

  "dht11": {
    nombre: "Sensor de Temperatura y Humedad DHT11",
    precio: 2.99,
    imagen: "img/sensor-temperatura-humedad.png",
    descripcion: "Sensor digital utilizado para medir temperatura y humedad en proyectos electrónicos y sistemas de monitoreo.",
    especificaciones: [
      "Modelo: DHT11",
      "Medición de temperatura",
      "Medición de humedad",
      "Salida digital",
      "Compatible con Arduino y ESP32",
      "Ideal para proyectos de monitoreo"
    ],
    garantia: "1 año"
  },

  "relay-1canal": {
    nombre: "Módulo Relay 1 Canal 5V",
    precio: 1.99,
    imagen: "img/modulo-relay.png",
    descripcion: "Módulo relay de un canal para controlar dispositivos eléctricos mediante microcontroladores.",
    especificaciones: [
      "Tipo: Relay de 1 canal",
      "Voltaje de control: 5V",
      "Control mediante microcontroladores",
      "Compatible con Arduino y ESP32",
      "Ideal para proyectos de automatización"
    ],
    garantia: "1 año"
  },

  "pantalla-lcd": {
    nombre: "Pantalla LCD 16x2 con módulo I2C",
    precio: 6.49,
    imagen: "img/pantalla-lcd.png",
    descripcion: "Pantalla LCD de 16x2 caracteres con módulo I2C para mostrar información en proyectos electrónicos.",
    especificaciones: [
      "Tipo: LCD 16x2",
      "Módulo de comunicación I2C",
      "16 columnas y 2 filas",
      "Compatible con Arduino",
      "Ideal para mostrar datos y mediciones"
    ],
    garantia: "1 año"
  },

  "bateria-litio": {
    nombre: "Batería recargable de litio",
    precio: 3.99,
    imagen: "img/bateria-recargable.png",
    descripcion: "Batería recargable de litio para alimentar proyectos electrónicos, robots y dispositivos portátiles.",
    especificaciones: [
      "Tipo: Batería recargable de litio",
      "Diseñada para proyectos electrónicos",
      "Fuente de alimentación portátil",
      "Aplicaciones en robótica y electrónica"
    ],
    garantia: "1 año"
  },

  "cables-jumper": {
    nombre: "Cables Jumper Macho-Hembra",
    precio: 4.49,
    imagen: "img/cable-jumper.png",
    descripcion: "Cables jumper para realizar conexiones rápidas entre placas, sensores y módulos electrónicos.",
    especificaciones: [
      "Tipo: Macho-Hembra",
      "Uso: Prototipado electrónico",
      "Compatible con placas de desarrollo",
      "Ideales para Arduino y ESP32",
      "Facilitan las conexiones entre componentes"
    ],
    garantia: "1 año"
  },

  "camara-ip": {
    nombre: "Cámara IP Wi-Fi 1080P PTZ",
    precio: 39.99,
    imagen: "img/camara-ip.png",
    descripcion: "Cámara IP con conectividad Wi-Fi para sistemas de monitoreo, seguridad y proyectos de inteligencia artificial.",
    especificaciones: [
      "Resolución: 1080P",
      "Conectividad: Wi-Fi",
      "Tipo: Cámara IP",
      "Movimiento PTZ",
      "Aplicaciones: Monitoreo e inteligencia artificial"
    ],
    garantia: "1 año"
  },

  "esp32-cam": {
    nombre: "Módulo Cámara ESP32-CAM",
    precio: 9.99,
    imagen: "img/modulo-camara.png",
    descripcion: "Módulo basado en ESP32 con cámara para desarrollar proyectos de visión artificial, IoT y monitoreo.",
    especificaciones: [
      "Tipo: Módulo con cámara",
      "Controlador: ESP32",
      "Conectividad Wi-Fi",
      "Aplicaciones de visión artificial",
      "Ideal para proyectos IoT"
    ],
    garantia: "1 año"
  },

  "vl53l0x": {
    nombre: "Sensor de Distancia Láser VL53L0X",
    precio: 12.99,
    imagen: "img/sensor-distancia.png",
    descripcion: "Sensor de distancia basado en tecnología láser para mediciones precisas en proyectos de robótica y automatización.",
    especificaciones: [
      "Modelo: VL53L0X",
      "Tipo: Sensor de distancia láser",
      "Medición de distancia",
      "Comunicación I2C",
      "Aplicaciones en robótica y automatización"
    ],
    garantia: "1 año"
  },

  "mq135": {
    nombre: "Sensor de Calidad de Aire MQ-135",
    precio: 4.99,
    imagen: "img/sensor-calidad-aire.png",
    descripcion: "Sensor utilizado para detectar diferentes gases y desarrollar sistemas de monitoreo de calidad del aire.",
    especificaciones: [
      "Modelo: MQ-135",
      "Tipo: Sensor de gases",
      "Monitoreo de calidad del aire",
      "Compatible con placas de desarrollo",
      "Aplicaciones en sistemas de monitoreo"
    ],
    garantia: "1 año"
  }

};


// ==========================================
// OBTENER PRODUCTO DE LA URL
// ==========================================

const parametros = new URLSearchParams(window.location.search);
const productoId = parametros.get("id");
const productoActual = productos[productoId];


// ==========================================
// MOSTRAR PRODUCTO
// ==========================================

const productoImagen = document.getElementById("producto-imagen");
const productoNombre = document.getElementById("producto-nombre");
const productoPrecio = document.getElementById("producto-precio");
const productoDescripcion = document.getElementById("producto-descripcion");
const productoEspecificaciones = document.getElementById("producto-especificaciones");
const productoGarantia = document.getElementById("producto-garantia");
const botonCarrito = document.getElementById("add-cart");


if (productoActual && productoNombre) {

  productoImagen.src = productoActual.imagen;
  productoImagen.alt = productoActual.nombre;

  productoNombre.textContent = productoActual.nombre;

  productoPrecio.textContent =
    "$" + productoActual.precio.toFixed(2);

  productoDescripcion.textContent =
    productoActual.descripcion;

  productoGarantia.textContent =
    productoActual.garantia;

  productoEspecificaciones.innerHTML = "";

  productoActual.especificaciones.forEach(especificacion => {

    productoEspecificaciones.innerHTML +=
      `<li>${especificacion}</li>`;

  });

}


// ==========================================
// AGREGAR AL CARRITO
// ==========================================

if (productoActual && botonCarrito) {

  botonCarrito.addEventListener("click", function () {

    const productoParaCarrito = {

      id: productoId,
      nombre: productoActual.nombre,
      precio: productoActual.precio,
      imagen: productoActual.imagen,
      cantidad: 1

    };

    let carrito =
      JSON.parse(localStorage.getItem("carrito")) || [];

    const productoExistente =
      carrito.find(item => item.id === productoId);

    if (productoExistente) {

      productoExistente.cantidad++;

    } else {

      carrito.push(productoParaCarrito);

    }

    localStorage.setItem(
      "carrito",
      JSON.stringify(carrito)
    );

    alert("Producto agregado al carrito 🛒");

  });

}


// ==========================================
// MOSTRAR CARRITO
// ==========================================

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const clearCart = document.getElementById("clear-cart");


if (cartItems) {

  let carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];

  let total = 0;


  if (carrito.length === 0) {

    cartItems.innerHTML = `
      <p class="empty-cart">
        Tu carrito está vacío.
      </p>
    `;

  } else {

    carrito.forEach(producto => {

      const subtotal =
        producto.precio * producto.cantidad;

      total += subtotal;

      cartItems.innerHTML += `

        <div class="cart-product">

          <img
            src="${producto.imagen}"
            alt="${producto.nombre}"
          >

          <div class="cart-product-info">

            <h3>
              ${producto.nombre}
            </h3>

            <p>
              Precio: $${producto.precio.toFixed(2)}
            </p>

            <div class="cart-quantity">

              <button
                class="quantity-btn"
                onclick="cambiarCantidad('${producto.id}', -1)"
              >
                −
              </button>

              <span>
                ${producto.cantidad}
              </span>

              <button
                class="quantity-btn"
                onclick="cambiarCantidad('${producto.id}', 1)"
              >
                +
              </button>

            </div>

            <p>
              Subtotal:
              <strong>
                $${subtotal.toFixed(2)}
              </strong>
            </p>

            <button
              class="remove-product"
              onclick="eliminarProducto('${producto.id}')"
            >
              🗑️ Eliminar
            </button>

          </div>

        </div>

      `;

    });

  }

  cartTotal.textContent =
    total.toFixed(2);

}


// ==========================================
// CAMBIAR CANTIDAD
// ==========================================

function cambiarCantidad(id, cambio) {

  let carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];

  const producto =
    carrito.find(item => item.id === id);

  if (!producto) {
    return;
  }

  producto.cantidad += cambio;

  if (producto.cantidad <= 0) {

    carrito = carrito.filter(
      item => item.id !== id
    );

  }

  localStorage.setItem(
    "carrito",
    JSON.stringify(carrito)
  );

  location.reload();
}


// ==========================================
// ELIMINAR PRODUCTO
// ==========================================

function eliminarProducto(id) {

  let carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];

  carrito = carrito.filter(
    item => item.id !== id
  );

  localStorage.setItem(
    "carrito",
    JSON.stringify(carrito)
  );

  location.reload();
}


// ==========================================
// VACIAR CARRITO
// ==========================================

if (clearCart) {

  clearCart.addEventListener("click", function () {

    localStorage.removeItem("carrito");

    location.reload();

  });

}
// ==========================================
// CONTADOR DEL CARRITO
// ==========================================

function actualizarContadorCarrito() {

  const cartCount = document.getElementById("cart-count");

  if (!cartCount) {
    return;
  }

  const carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];

  let cantidadTotal = 0;

  carrito.forEach(producto => {
    cantidadTotal += producto.cantidad;
  });

  cartCount.textContent = cantidadTotal;
}

actualizarContadorCarrito();
// ==========================================
// PROCESAR PEDIDO POR WHATSAPP
// ==========================================

const whatsappCheckoutBtn = document.getElementById("whatsapp-checkout-btn");

if (whatsappCheckoutBtn) {
  whatsappCheckoutBtn.addEventListener("click", function () {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
      alert("Tu carrito está vacío. Agrega productos antes de realizar un pedido.");
      return;
    }

    // Número de WhatsApp corporativo de OVEY Technologies
    let numeroWhatsApp = "50377663997"

    let mensaje = "Hola, *OVEY Technologies* . Me gustaría realizar el siguiente pedido desde la pasarela web:\n\n";

    let totalGeneral = 0;

    carrito.forEach((producto, index) => {
      let subtotal = producto.precio * producto.cantidad;
      totalGeneral += subtotal;
      mensaje += `${index + 1}. *${producto.nombre}*\n`;
      mensaje += `   Cantidad: ${producto.cantidad}\n`;
      mensaje += `   Subtotal: $${subtotal.toFixed(2)}\n\n`;
    });

    mensaje += `--------------------------\n`;
    mensaje += `*Total a pagar: $${totalGeneral.toFixed(2)}*\n\n`;
    mensaje += `Quedo a la espera de las instrucciones para coordinar el pago y el envío. ¡Gracias!`;

    let mensajeCodificado = encodeURIComponent(mensaje);

    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`, "_blank");
  });
}
