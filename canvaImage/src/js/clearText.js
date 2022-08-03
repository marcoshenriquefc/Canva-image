

// Clear text placeholder when click 
addEventListener("click", clear)

function clear(e) {
    let item = e.target

    if (item.classList.contains('title-topic') || item.classList.contains('list-item')) {

        let text = item.innerText

        if (text === 'Clique aqui para editar.:') {
            item.innerText = '';
        }
    }
}