(function ($, window) {
    window.search_controller = function (state) {
        var pageSize = 10;
        var request = {
            criteria: [],
            properties: [],
            facets: {
                type: {dimension: 'formats_avail'}
            },
            startIndex: state.page ? (pageSize * (state.page - 1)) : 0,
            pageSize: pageSize
        };
        if (state.q) {
            request.criteria.push({
                dimension: 'freetext',
                value: state.q,
                cull: true
            });
        }
        if (state.type) {
            request.criteria.push({
                dimension: 'formats_avail',
                id: state.type
            });
        }
        if (request.criteria.length ===  0) {
            // If no search criteria were provided, we can
            // configure a default search here.
            request.criteria.push({dimension: 'formats_avail'});
        }
        return request;
    };
})($, window);
