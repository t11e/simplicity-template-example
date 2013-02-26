$(function() {
    $('body').simplicityState();
    $('#q,#genre').simplicityInputs();
    $('#genre').simplicityFacetedSelect().hide();
    $('#genre_fancy').simplicityFancySelect({
        select: '#genre'
    });
    $('#results').simplicitySearchResults({
        resultsCallback: window.search_results
    });
    $('#pagination_top,#pagination_bottom').simplicityPagination();
    $('button[name="resetSearch"]').click(function () {
        $('body').simplicityState('reset');
    });
    $('body')
        .simplicityState('mergeQueryParams')
        .simplicityHistory()
        .simplicityState('triggerChangeEvent')
        .simplicityPageSnapBack()
        .simplicityDiscoverySearch({
            url: 'http://freebase-movies.discoverysearchengine.com:8090/ws/query',
            controllerCallback: window.search_controller,
            backend: 'engine'
        })
        .simplicityDiscoverySearch('search');
});
