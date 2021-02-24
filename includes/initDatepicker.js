export function initDatepicker(id){
    const el = $(id);
    if(el.length > 0) {
        el.flatpickr({
            altInput: true,
            altFormat: "d/m/Y",
            dateFormat: "Y-m-d",
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
}