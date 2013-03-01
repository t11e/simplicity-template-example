(function ($, window) {
    window.searchController = function (state) {
        var pageSize = 5;
        var request = {
            criteria: [],
            properties: [],
            facets: {
                genre: {
                  depth: 0,
                  topN: 15,
                  sortBy: 'countDesc'
                }
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
        if (state.genre) {
            request.criteria.push({
                dimension: 'genre',
                id: state.genre
            });
        }
        if (request.criteria.length ===  0) {
            // If no search criteria were provided, we can
            // configure a default search here.
            request.criteria.push({dimension: '_kind'});
        }
        return request;
    };
})($, window);
