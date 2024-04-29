let table1 = document.getElementById("container-table1");
let table2 = document.getElementById("container-table2");
let select = document.getElementById("select-modulo");

function mostrarTabela(ele) {
    if (ele.value == "m1") {
        table1.style.display = 'block';
        table2.style.display = 'none';
    } else if (ele.value == "m2") {
        table2.style.display = 'block';
        table1.style.display = 'none';
    } else {
        table1.style.display = 'none';
        table2.style.display = 'none';
    }
}


document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true
    });
    calendar.render();
});