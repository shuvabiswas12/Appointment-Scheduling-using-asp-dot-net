
$(document).ready(function () {
    InitializeCalendar();
});

function InitializeCalendar() {
    try {
        $("#calendar").fullCalendar({
            timezone: false,
            header: {
                left: 'prev, next, today',
                center: 'title',
                right: 'month, agendaweek, agendaday'
            },
            selectable: true,
            editable: false,

        })
    }
    catch (e) {
        alert(e);
    }
}


