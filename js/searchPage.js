$(function() {
    $('body').simplicityState();

    $('#q,#genre').simplicityInputs();

    $('#genre').simplicityFacetedSelect().hide();
    $('#genreFancy').simplicityFancySelect({
        select: '#genre'
    });

    $('#results').simplicitySearchResults({
        resultsCallback: window.searchResults
    });

    $('#paginationTop,#paginationBottom').simplicityPagination();

    $('#resetSearch').click(function () {
        $('body').simplicityState('reset');
    });

    $('body')
        .simplicityPageSnapBack()
        .simplicityDiscoverySearch({
            url: 'http://freebase-movies.discoverysearchengine.com:8090/ws/query',
            backend: 'engine',
            controllerCallback: window.searchController
        })
        .simplicityDiscoverySearch('search');
});
