document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true
    });

    // Renderiza o calendário
    calendar.render();

    // Após a renderização, modifica os estilos dos cabeçalhos dos dias da semana
    const dayHeaders = document.querySelectorAll('.fc-day-header');
    dayHeaders.forEach(header => {
        header.style.backgroundColor = '#f0f0f0';
        header.style.color = '#333333';
        header.style.textAlign = 'center';
        header.style.fontWeight = 'bold';
    });
});

// Função para exibir a tabela de acordo com a seleção do módulo
function mostrarTabela(ele) {
    let table1 = document.getElementById("container-table1");
    let table2 = document.getElementById("container-table2");

    if (ele.value === "m1") {
        table1.style.display = 'block';
        table2.style.display = 'none';
    } else if (ele.value === "m2") {
        table2.style.display = 'block';
        table1.style.display = 'none';
    } else {
        table1.style.display = 'none';
        table2.style.display = 'none';
    }
}

// Função para aumentar o tamanho da fonte
function aumentarFonte() {
    const elements = document.querySelectorAll('body *');
    elements.forEach(element => {
        const currentFontSize = parseFloat(window.getComputedStyle(element).fontSize);
        element.style.fontSize = (currentFontSize + 1) + 'px';
    });
}

// Função para diminuir o tamanho da fonte
function diminuirFonte() {
    const elements = document.querySelectorAll('body *');
    elements.forEach(element => {
        const currentFontSize = parseFloat(window.getComputedStyle(element).fontSize);
        if (currentFontSize > 10) {  // Define um tamanho mínimo para a fonte
            element.style.fontSize = (currentFontSize - 1) + 'px';
        }
    });
}

// Função para alternar o contraste (tema claro ou escuro)
function alternarContraste() {
    document.body.classList.toggle('contraste-escuro');
}

// Adicionando eventos de clique aos botões
document.getElementById('aumentar-fonte').addEventListener('click', aumentarFonte);
document.getElementById('diminuir-fonte').addEventListener('click', diminuirFonte);
document.getElementById('alternar-contraste').addEventListener('click', alternarContraste);