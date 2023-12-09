const imagens = document.querySelectorAll("img");

function aplicaBorda(elemento){
    elemento.style.border = "solid 2px red";
}

imagens.forEach(aplicaBorda);

const imagensUrl = [
    "img/download.jfif",
    "img/download (1).png",
    "img/images.jfif",
    "img/6671766-fantastica-lua-magica-luz-e-agua-barco-com-arvore-papel-de-parede-gratis-foto.jpg"
]


function criarIMG(url){
    const imgElement = document.createElement("img");
    imgElement.src = url;
    imgElement.width = 200;
    return imgElement;
}

function addImgBody(img){
    document.body.appendChild(img);
}

//transforma todas as urls de texto em imagens HTML
const imagenss = urls.map(criarIMG);
imagens.forEach(addImgBody);