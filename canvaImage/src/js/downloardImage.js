// Clear div and transform in canvas
function shot() {
    const image = document.querySelector("#capture");
    const addTopicBtn = document.querySelector(".addTopic");
    const addItemBtn = document.querySelectorAll(".addItem");
    const closeBtn = document.querySelectorAll(".closeItem");

    const nameInput = nameData();

    //Remove button and transform scale up
    image.classList.add('shot');
    addTopicBtn.classList.add('removeToShot');
    if (addItemBtn != null) {
        addClassToShot(addItemBtn);
    }
    if (closeBtn != null) {
        addClassToShot(closeBtn);
    }


    let baseView = document.querySelector('.base__view')
    baseView.scroll(0, 0)
    window.scroll(0, 0)

    //Transforming div in canvas and "shot"
    html2canvas(image)
        .then(canvas => {
            download(canvas, `${nameInput}.png`);
        });

    //Return itens to edit mode
    image.classList.remove('shot');
    addTopicBtn.classList.remove('removeToShot');
    if (addItemBtn != null) {
        removeClassToShot(addItemBtn);
    }
    if (closeBtn != null) {
        removeClassToShot(closeBtn);
    }
}

//Removing edit buttons to "shot"
function addClassToShot(e) {
    e.forEach((e) => {
        e.classList.add('removeToShot');
    })
}
//Return edit butons again
function removeClassToShot(e) {
    e.forEach((e) => {
        e.classList.remove('removeToShot');
    })
}



// Downloard canva to image
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

// Name genarete do image
function nameData() {
    let input = document.querySelector('#area-input').value;
    let color = document.querySelector('#color-input').value;
    let nome = 'Comunica Digesti - '

    switch (input) {
        case "Marketing":
            nome += input;
            break;

        case "Saúde e segurança na indústria":
            nome += 'Saude-Seguranca'
            break;

        case "Centro de serviços compartilhados":
            nome += 'Servicos-compartilhados'
            break;

        case "Gestão estratégica":
            nome += 'Gestao-estrategica'
            break;

        case "Educação e tecnologia":
            nome += 'Educacao-tecnologia'
            break;

        default:
            nome += 'Default'
            break;
    }

    if (color != 'padrao') {
        nome += " - " + color;
    }

    return nome;
}