export function initSelectAjax(id) {
    let el = $(id);
    console.log("initSelectAjax", el);
    if (el.length < 1) {
        return;
    }
    el.each(function () {
        console.log("initSelectAjax inner", this);
        var placeholder = $(this).attr('data-placeholder');
        var ajax_url = $(this).attr('data-ajax_url');
        var templateResultFunction = $(this).attr('data-templateResult');
        var templateSelectionFunction = $(this).attr('data-templateSelection');
        var delay_default = parseInt($(this).attr('data-delay'));
        if (isNaN(delay_default) || delay_default <= 0) {
            delay_default = 250;
        }
        var minimumInputLength_default = parseInt($(this).attr('data-minimumInputLength'));
        if (isNaN(minimumInputLength_default) || minimumInputLength_default < 0) {
            minimumInputLength_default = 0;
        }
        var $select_element = $(this);
        $(this).select2({
            ajax: {
                url: ajax_url,
                dataType: 'json',
                delay: delay_default,
                data: function (params) {
                    return {
                        search: params.term, // search term
                        page: params.page
                    };
                },
                processResults: function (data, params) {
                    // parse the results into the format expected by Select2
                    // since we are using custom formatting functions we do not need to
                    // alter the remote JSON data, except to indicate that infinite
                    // scrolling can be used
                    params.page = params.page || 1;

                    return {
                        results: data.data,
                        pagination: {
                            more: (params.page * data.per_page) < data.total
                        }
                    };
                },
                cache: true
            },
            escapeMarkup: function (markup) {
                return markup;
            }, // let our custom formatter work
            minimumInputLength: minimumInputLength_default,
            templateResult: function (repo) {
                if (templateResultFunction != undefined && templateResultFunction != '' && templateResultFunction in window) {
                    return window[templateResultFunction](repo);
                }
                if (repo.loading) return repo.text;

                var markup = "<div class='row'>"
                    + "<div class='col-md-12'>" + repo.descr
                    + "</div>"
                    + "</div>";

                return markup;
            }, // omitted for brevity, see the source of this page
            templateSelection: function (repo) {
                if (templateSelectionFunction != undefined && templateSelectionFunction != '' && templateSelectionFunction in window) {
                    return window[templateSelectionFunction](repo);
                }
                if (!repo.descr) {
                    if ($select_element.children('option:selected').length > 0) {
                        return $select_element.children('option:selected').text();
                    }
                    return (templateSelectionFunction != undefined) ? placeholder : '';
                }
                return repo.descr;
            } // omitted for brevity, see the source of this page
        });
        /* $('[data-submitOnChange]').on("select2:select", function (event) {
            $(event.currentTarget).closest("form").submit();
        }); */
    });
}