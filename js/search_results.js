(function ($, window) {
    window.search_results = function (target, data) {
        var results = $('<div class="results"><div class="summary">There are <span class="exact"/> exact matches out of <span class="total"/> results</div></div>');
        var discoveryResponse = data._discovery.response;
        results.find(".exact").text(discoveryResponse.exactSize);
        results.find(".total").text(discoveryResponse.totalSize);
        $.each(discoveryResponse.itemIds, function (itemIndex, itemId) {
            var item = {
                '_id': itemId,
                '_exact': discoveryResponse.exactMatches[itemIndex],
                '_score': discoveryResponse.relevanceValues[itemIndex]
            };
            if (discoveryResponse.properties) {
                $.extend(item, discoveryResponse.properties[itemIndex]);
            }
            var result = $('<div class="result"><pre class="pre-scrollable"/></div>')
                .addClass(item._exact ? 'exactmatch' : 'closematch');
            result.find('pre').text(JSON.stringify(item, null, '    '));
            results.append(result);
        });
        target.html(results);
    };
})($, window);