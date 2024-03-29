import database from "../db/index.js";

const insertProducts = async () => {
    try {
        const products = [
            {
              "nombre": "Escuadra",
              "precio": 12,
              "codigo": "Regla",
              "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
              "stock": "25",
              "detalle": "Regla en Escuadra de 30cm",
              "id": 1,
              "timestamp": 1672089128417
            },
            {
              "nombre": "Calculadora",
              "precio": 30,
              "codigo": "Calculadora",
              "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
              "id": 2,
              "stock": 15,
              "detalle": "Calculadora Cientifica",
              "timestamp": 1672089129423
            },
            {
              "nombre": "Computadora",
              "precio": 1500,
              "codigo": "Computadora",
              "thumbnail": "https://cdn2.iconfinder.com/data/icons/whcompare-isometric-web-hosting-servers/50/laptop-with-code-256.png",
              "id": 3,
              "stock": 6,
              "detalle": "Computadora de Oficina.",
              "timestamp": 1672089130430
            },
            {
              "nombre": "Teclado",
              "precio": 600,
              "codigo": "Teclado",
              "thumbnail": "https://cdn3.iconfinder.com/data/icons/delta/256/Keyboard.png",
              "id": 4,
              "stock": 8,
              "detalle": "Teclado Logitech",
              "timestamp": 1674653344539
            },
            {
              "nombre": "Regla",
              "precio": 15,
              "codigo": "Regla",
              "thumbnail": "https://cdn4.iconfinder.com/data/icons/unigrid-tools/54/023_rule_direct_ruler_scale_measure_tool-512.png",
              "id": 5,
              "stock": 25,
              "detalle": "Regla recta de 30cm.",
              "timestamp": 1672089132444
            },
            {
              "nombre": "Escritorio",
              "precio": 1300,
              "codigo": "Escritorio",
              "thumbnail": "https://cdn1.iconfinder.com/data/icons/prettycons-furniture-and-households-vol-1-flat/58/29-Working_Desk-furniture_room_appliance_household-256.png",
              "id": 6,
              "stock": 10,
              "detalle": "Escritorio de Madera de 1.5mts x 60cms.",
              "timestamp": 1672089133445
            },
            {
              "nombre": "Impresora",
              "precio": 500,
              "codigo": "Impresora",
              "thumbnail": "https://cdn3.iconfinder.com/data/icons/flat-set-1/64/flat_set_1-21-256.png",
              "id": 7,
              "stock": 10,
              "detalle": "Impresora LaserJet",
              "timestamp": 1672089134451
            },
            {
              "nombre": "Telefono",
              "precio": 60,
              "codigo": "Telefono",
              "thumbnail": "https://cdn3.iconfinder.com/data/icons/network-and-communications-8/32/network_communication_fax_landline_phone_set_telephone-256.png",
              "id": 8,
              "stock": 10,
              "detalle": "Telefono fijo para Oficina.",
              "timestamp": 1672089135461
            },
            {
              "nombre": "Resma A4",
              "precio": 5.75,
              "codigo": "Hojas",
              "thumbnail": "https://cdn1.iconfinder.com/data/icons/arts-and-crafts-basic/64/paper-sheets-256.png",
              "stock": 36,
              "detalle": "Resma de Hojas A4 x 500u.",
              "id": 9,
              "timestamp": 1672089136469
            },
            {
              "nombre": "Engrapadora",
              "precio": 7,
              "codigo": "Engrapadora",
              "thumbnail": "https://cdn1.iconfinder.com/data/icons/stationery-filled-outline/64/stapler-stationery-tool-256.png",
              "id": 10,
              "stock": 8,
              "detalle": "Engrapadora de metal para Oficina.",
              "timestamp": 1672089137474
            },
            {
              "nombre": "Grapas",
              "precio": 3,
              "codigo": "Grapas",
              "thumbnail": "https://cdn2.iconfinder.com/data/icons/school-business-tools/100/Staple-256.png",
              "id": 11,
              "stock": 35,
              "detalle": "Grapas de Libreria.",
              "timestamp": 1672089138480
            },
            {
              "nombre": "Chinches",
              "precio": 3,
              "codigo": "Chinches",
              "thumbnail": "https://cdn1.iconfinder.com/data/icons/iconoe-ui-2/64/Iconoe-Tack-256.png",
              "id": 12,
              "stock": 35,
              "detalle": "Chinches para Corcho.",
              "timestamp": 1672089139490
            }
          ];

        await database("products").insert(products);

        console.log("products inserted!");

        database.destroy();
    } catch (err) {
        console.log(err);
        database.destroy();
    }
};

insertProducts();