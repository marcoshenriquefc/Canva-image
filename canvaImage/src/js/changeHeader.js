
//Change header area name
function changeArea() {
    let area = document.querySelector('.area-name');
    let areaInput = document.querySelector('#area-input')

    area.innerHTML = areaInput.value;

    changeColor(area.innerHTML);
}

//Change color to header card
function changeColor(area = "") {
    let html = document.querySelector('html');
    let colorInput = document.querySelector('#color-input');

    // console.log(colorInput.value)
    const color = {
        Laranja: 'marketing',
        Verde: 'saude-seguranca',
        Rosa: 'servico-compartilhado',
        Marrom: 'gestao-estrategica',
        Azul: 'educacao-tecnologia',
    }

    html.classList = '';

    if (colorInput.value == 'padrao') {
        switch (area) {
            case "Marketing":
                html.classList.add(color.Laranja);
                break;

            case "Saúde e segurança na indústria":
                html.classList.add(color.Verde);
                break;

            case "Centro de serviços compartilhados":
                html.classList.add(color.Rosa);
                break;

            case "Gestão estratégica":
                html.classList.add(color.Marrom);
                break;

            case "Educação e tecnologia":
                html.classList.add(color.Azul);
                break;
            default:
                changeArea()
                break;
        }

    }
    else {
        switch (colorInput.value) {
            case "laranja":
                html.classList.add(color.Laranja);
                break;

            case "verde":
                html.classList.add(color.Verde);
                break;

            case "rosa":
                html.classList.add(color.Rosa);
                break;

            case "marrom":
                html.classList.add(color.Marrom);
                break;

            case "azul":
                html.classList.add(color.Azul);
                break;
            default:
                break;
        }
    }

}