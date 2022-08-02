// LIMPANDO A DIV E TRANSFORMANDO EM CANVAS
function shot() {
    const image = document.querySelector("#capture");
    const button = document.querySelectorAll(".addTopic");
    const closeBtn = document.querySelectorAll(".closeItem");

    //Removendo botões e aumentando a imagem
    image.classList.add('shot');
    if(button != null){
        addClassToShot(button);
    }
    if(closeBtn != null){
        addClassToShot(closeBtn);
    }

    //TRANSFORMANDO A IMAGEM EM CANVAS E PASSANDO PARA A FUNÇÃO
    html2canvas(image)
        .then(canvas => {
            download(canvas, 'myimage.png');
        });

    //Retornando ao modelo normal de edição
    image.classList.remove('shot');
    if(button != null){
        removeClassToShot(button);
    }
    if(closeBtn != null){
        removeClassToShot(closeBtn);
    }
    // CreatePDFfromHTML()
}

//Removendo os itens de edição para "a foto"
function addClassToShot(e){
    console.log(e)
    e.forEach((e) =>{
        e.classList.add('removeToShot');
    })
}
//Adicionando novamente os itens de edição
function removeClassToShot(e){
    console.log(e)
    e.forEach((e) =>{
        e.classList.remove('removeToShot');
    })
}



// BAIXAR O CANVAS COMO IMAGEM
function download(canvas, filename) {
    /// create an "off-screen" anchor tag
    var lnk = document.createElement('a'), e;

    /// the key here is to set the download attribute of the a tag
    lnk.download = filename;

    /// convert canvas content to data-uri for link. When download
    /// attribute is set the content pointed to by link will be
    /// pushed as "download" in HTML5 capable browsers
    lnk.href = canvas.toDataURL("image/png;base64");

    /// create a "fake" click-event to trigger the download
    if (document.createEvent) {
        e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", true, true, window,
            0, 0, 0, 0, 0, false, false, false,
            false, 0, null);

        lnk.dispatchEvent(e);
    } else if (lnk.fireEvent) {
        lnk.fireEvent("onclick");
    }
}
