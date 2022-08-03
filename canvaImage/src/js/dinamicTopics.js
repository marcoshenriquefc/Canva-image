
addNewTopic()
//Create new topic
function addNewTopic() {
    let divBase = document.querySelector('.base__image__article');

    //Nodes principais
    let divMain = document.createElement('div')
    let spanMain = document.createElement('span')
    let divTitle = document.createElement('div')
    let listMain = document.createElement('ol')
    //Nodes secundários
    let h3Title = document.createElement('h3')
    let spanAddItem = document.createElement('span')


    // Adicionando classes
    divMain.classList.add('base__image__topico');
    spanMain.classList.add('closeItem', 'teste');
    divTitle.classList.add('image__title__box');

    h3Title.classList.add('topico01', 'title-topic');
    spanAddItem.classList.add('addItem', 'active');

    //Setando atributos e valores
    h3Title.setAttribute('contenteditable', 'true')
    h3Title.innerHTML = 'Clique aqui para editar.:' 
    spanMain.innerHTML = '\u00D7'
    spanAddItem.innerHTML = '\u00D7'

    //Setando filhos 
    divTitle.appendChild(h3Title)
    divTitle.appendChild(spanAddItem)


    divMain.appendChild(spanMain)
    divMain.appendChild(divTitle)
    divMain.appendChild(listMain)

    divBase.appendChild(divMain)

    newItem(divMain)
}

//Create new Item
function newItem(elemento) {
    // // console.log(element)

    let node = elemento.children;
    let arr = [];

    for (let i = 0; i < node.length; i++) {
        arr.push(node[i]);
    }
    let = lista = arr[2];

    // Criando elementos 
    let div = document.createElement('div');
    let li = document.createElement("li");

    // Setando atributos 
    li.setAttribute('contenteditable', 'true')
    li.setAttribute('onfocus', 'teste2()')
    li.classList.add('list-item')
    div.classList.add('item')

    // let textReset = document.createTextNode('Clique aqui para editar.:');
    // li.appendChild(textReset);
    div.appendChild(li);
    lista.appendChild(div);


    let span = document.createElement("SPAN");
    let txt = document.createTextNode("-");

    span.className = "closeItem";
    span.appendChild(txt);
    // span.setAttribute('onclick', 'deletItemList()')

    div.appendChild(span);

    // let closeItem = document.querySelectorAll('.item .closeItem')
}

//Delete Topic and Itens
addEventListener("click", function (e) {
    let elemento = e.target;

    if (elemento.classList.contains('closeItem')) {
        let div = elemento.parentElement;
        // console.log(div)
        div.remove();
    }

    if (elemento.classList.contains('addItem')) {
        newItem(elemento.parentElement.parentElement)
    }
})



//Create item with enter key
addEventListener('keypress', (event) => {
    let keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if (keyCode == 13) {
        doNothing(event)
    }
})

//Cancel enter default
function doNothing(event) {

    //Parando funções normais do botão enter
    if (!e) var e = window.event;

    e.cancelBubble = true;
    e.returnValue = false;

    if (e.stopPropagation) {
        e.stopPropagation();
        e.preventDefault();
    }



    //Recebendo a lista dos itens
    let lista = event.target.parentElement.parentElement.parentElement;

    //Recebendos os itens da lista do tópico selecionado
    let allItensTopic = event.target.parentElement.parentElement.childNodes;
    let arrayAllItensToppic = [];
    allItensTopic.forEach(e => {
        arrayAllItensToppic.push(e);
    })
    //Recebendo o ultimo item da lista
    let lastItem = arrayAllItensToppic[arrayAllItensToppic.length - 1];

    //Verificando se o ENTER foi feito na lista
    //Verificando se o ultimo item é igual ao item TARGET
    if (lista.classList.contains('base__image__topico')
        && lastItem == event.target.parentElement) {
        //Criando um novo item na lista
        newItem(lista)

        allItensTopic[1].focus()
    }

    nextItem(event.target, allItensTopic)
}

//Focus in next item 
function nextItem(itemAtual, listaItem) {
    let nextItemArray;

    listaItem.forEach((element, index) => {
        element = element.querySelector('.list-item')
        if (element == itemAtual) {
            console.log('igual')
            nextItemArray = listaItem[index + 1].querySelector('.list-item')
        }
    })
    nextItemArray.focus()
}