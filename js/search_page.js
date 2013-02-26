$(function() {
    $('body').simplicityState();
    $('#q,#type').simplicityInputs();
    $('#type').simplicityFacetedSelect().hide();
    $('#type_fancy').simplicityFancySelect({
        select: '#type'
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
            url: 'http://gsa.discoverysearchengine.com:8090/ws/query',
            controllerCallback: window.search_controller,
            backend: 'engine'
        })
        .simplicityDiscoverySearch('search');
});
