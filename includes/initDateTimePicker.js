export function initDateTimePicker(id){
    // Questo deve essere rivisto
    const el = $('#riga-pagamento-' + id + ' .datetime-picker-picker');
    if(el.length > 0) {
        el.flatpickr({
            enableTime: true,
            altInput: true,
            altFormat: "d/m/Y H:i:ss",
            dateFormat: "Y-m-d H:i:ss",
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