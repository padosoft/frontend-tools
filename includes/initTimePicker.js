export function initTimePicker(id){
    // Questo deve essere rivisto
    const el = $('#riga-pagamento-' + id + ' .time-picker');
    if(el.length > 0) {
        el.flatpickr({
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
            time_24hr: true,
            allowInput: true,
            onReady: function ( dateObj, dateStr, instance ) {
                let $clear = $( '<div class="flatpickr-clear"><span class="badge-pill badge-primary">Clear</span></div>' )
                    .on( 'click', () => {
                        instance.clear();
                        instance.close();
                    } )
                    .appendTo( $( instance.calendarContainer ) );
            }
        });
    }
};