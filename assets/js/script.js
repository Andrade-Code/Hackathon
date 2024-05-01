document.addEventListener('DOMContentLoaded', function () {
    // Configura o calendário com a visualização mensal
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true
    });
    calendar.render();
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
