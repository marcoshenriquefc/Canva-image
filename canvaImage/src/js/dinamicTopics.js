addNewTopic()
function newItem(elemento) {
    // console.log(element)

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
    li.classList.add('list-item')
    div.classList.add('item')

    let textReset = document.createTextNode('Clique aqui para editar.:');
    li.appendChild(textReset);
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

addEventListener("click", function (e) {
    let elemento = e.target;

    if (elemento.classList.contains('closeItem')) {
        let div = elemento.parentElement;
        console.log(div)
        div.remove();
    }

    if(elemento.classList.contains('addItem')){
        newItem(elemento.parentElement.parentElement)
    }
})

function addNewTopic(){
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
