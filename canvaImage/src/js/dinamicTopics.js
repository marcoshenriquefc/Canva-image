addNewTopic()
//Create new topic
function addNewTopic(titleTipic = 'Clique aqui para editar.:') {
    let divBase = document.querySelector('.base__image__article');

    //Main HMTL Elements
    let divMain = document.createElement('div')
    let spanMain = document.createElement('span')
    let divTitle = document.createElement('div')
    let listMain = document.createElement('ol')
    //Secondary HMTL Elements
    let h3Title = document.createElement('h3')
    let spanAddItem = document.createElement('span')


    // Adding classes
    divMain.classList.add('base__image__topico');
    spanMain.classList.add('closeItem', 'closeTopic');
    divTitle.classList.add('image__title__box');
    listMain.classList.add('image__list');

    h3Title.classList.add('topico01', 'title-topic');
    spanAddItem.classList.add('addItem', 'active');

    //Seting attributes and values/text
    h3Title.setAttribute('contenteditable', 'true')
    h3Title.innerHTML = titleTipic;
    spanMain.innerHTML = '\u00D7'
    spanAddItem.innerHTML = '\u00D7'

    //Seting children 
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
    let node = elemento.children;
    let arr = [];

    for (let i = 0; i < node.length; i++) {
        arr.push(node[i]);
    }
    let = lista = arr[2];

    //creating elements
    let div = document.createElement('div');
    let li = document.createElement("li");

    //Seting attributes 
    li.setAttribute('contenteditable', 'true')
    li.classList.add('list-item')
    div.classList.add('item')

    div.appendChild(li);
    lista.appendChild(div);


    let span = document.createElement("SPAN");
    let txt = document.createTextNode("-");

    span.className = "closeItem";
    span.appendChild(txt);

    div.appendChild(span);
}

//verify click to delet Topic/Itens AND create topics
addEventListener("click", function (e) {
    let elemento = e.target;

    if (elemento.classList.contains('closeItem')) {
        let div = elemento.parentElement;
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




let switchKey = false;

addEventListener('keydown', (event) =>{
    let lista = document.querySelector('.list-item');

    if(event.target.classList.contains(lista.classList)
        && event.key == 'Control' || event.key == 'Shift'){
            switchKey = true;
    }
})

addEventListener('keyup', (event) =>{
    let lista = document.querySelector('.list-item');

    if(event.target.classList.contains(lista.classList)
        && event.key == 'Control' || event.key == 'Shift'){
            switchKey = false;
    }
})

addEventListener('keypress', (event) =>{
    let lista = document.querySelector('.list-item');
    let inputClicked= event.target;

    if(inputClicked.classList.contains(lista.classList)
        && event.key == 'Enter'
        && switchKey == true){
            // inputClicked.innerHTML += '<br>'

            inputClicked.value = 2
    }
})

//Cancel enter default
function doNothing(event) {

    //Cancel enter default
    if (!e) var e = window.event;

    e.cancelBubble = true;
    e.returnValue = false;

    if (e.stopPropagation) {
        e.stopPropagation();
        e.preventDefault();
    }

    if(switchKey == false){
        //Find HTML element list
        let lista = event.target.parentElement.parentElement.parentElement;
        // let topic = event.target;
    
        //Take item list of specifical topic
        let allItensTopic = event.target.parentElement.parentElement.childNodes;
        let arrayAllItensToppic = [];
        allItensTopic.forEach(e => {
            arrayAllItensToppic.push(e);
        })
        //take last element
        let lastItem = arrayAllItensToppic[arrayAllItensToppic.length - 1];
    
        //Verify enter key pressed in list element
        //Verify if last item is equals target item
        if (lista.classList.contains('base__image__topico')
            && lastItem == event.target.parentElement) {
            //create a new item in list element
            newItem(lista)
        }
    
    
    
        if (event.target.classList.contains("title-topic")) {
            let topic = [event.target];
    
            allItensTopic = event.target.parentElement.parentElement.querySelectorAll('.item');
            nextItem(event.target, allItensTopic)
        }
        else{
            nextItem(event.target, allItensTopic)
        }
    }
}

//Focus in next item 
function nextItem(itemAtual, listaItem) {
    let nextItemArray;


    listaItem.forEach((element, index) => {
        element = element.querySelector('.list-item')
        if (element == itemAtual) {
            nextItemArray = listaItem[index + 1].querySelector('.list-item')
        }
    })

    if(itemAtual.classList.contains("title-topic")){
        nextItemArray = listaItem[0].querySelector('.list-item')
        // console.log(listaItem[0])
    }
    nextItemArray.focus()
}