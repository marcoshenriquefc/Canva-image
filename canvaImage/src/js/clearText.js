
        addEventListener("click", function (e) {
            let item = e.target

            if (item.classList.contains('title-topic') || item.classList.contains('list-item')) {
                console.log('ok')

                let text = item.innerText
                console.log(text)

                if (text === 'Clique aqui para editar.:') {
                    item.innerText = '';
                }
            }


        })