const socket = io();
const messageForm = document.getElementById("messageForm");
const usernameInput = document.getElementById("usernameInput");
const messageInput = document.getElementById("messageInput");
const messagesPool = document.getElementById("messagesPool");

const productForm = document.getElementById("productForm");
const productInput = document.getElementById("productInput");
const priceInput = document.getElementById("priceInput");
const imgInput = document.getElementById("imgInput");
const categoryInput = document.getElementById("categoryInput")
const productsContainer = document.getElementById("productsContainer");


const sendProduct = (product) => {
    socket.emit("client:product", product);
}

const renderProduct = (productData) => {
    const html = productData.map((productInfo) => {
        return `
            <h2>${productInfo.nombre}</h2>
            <img src="${productInfo.thumbnail}" alt="" width="100">
            <p>${productInfo.precio}</p>
            `
    });
    productsContainer.innerHTML = html;
};

const formProductsHandler = (event) => {
    event.preventDefault();

    const productInfo = {
        nombre: productInput.value,
        thumbnail: imgInput.value,
        precio: priceInput.value,
        category: categoryInput.value
    };
    sendProduct(productInfo);
    productForm.reset()
}

socket.on("server:product", renderProduct)

const sendMessage = async (messageInfo) => {
    socket.emit("client:message", messageInfo);
};

const renderMessage = (messagesData) => {
    const html = messagesData.map((messageInfo) => {
        return `<div> <strong style="color: blue">${messageInfo.username}</strong><span style="color: brown">[${messageInfo.time}]:</span> <em style="color: green; font-style: italic">${messageInfo.message}</em> </div>`;
    });
    messagesPool.innerHTML = html.join(" ");
};

const submitHandler = (event) => {
    event.preventDefault();

    const messageInfo = {
        username: usernameInput.value,
        message: messageInput.value,
        type: "usuario"
    };

    sendMessage(messageInfo);

    messageInput.value = "";
    usernameInput.readOnly = true;
};

productForm.addEventListener("submit", formProductsHandler);

messageForm.addEventListener("submit", submitHandler);

socket.on("server:message", renderMessage);