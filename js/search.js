(function() {
  var $searchForm = $("#search-form"),
      $q = $searchForm.find("[name=q]"),
      resultsTemplate = Handlebars.compile($("#search-result-template").html());

  // Initalize lunr with the fields it will be searching on. I've given title
  // a boost of 10 to indicate matches on this field are more important.
  var searchIndex = lunr(function() {
    this.field('id');
    this.field('title', {boost: 10});
    this.field('author');
    this.field('content');
  });

  // Add the data to lunr
  for (var key in SITE_CONTENT) { 
    var item = SITE_CONTENT[key];

    searchIndex.add({
      'id': key,
      'title': item.title,
      'author': item.author,
      'content': item.content
    });
  }

  $searchForm.on('submit', function(e) {
    e.preventDefault();
    // TODO: push state
    doSearch($q.val());
  });

  $q.on('change keyup', _.debounce(function(e) {
    doSearch($q.val());
  }, 200));

  function doSearch(q) {
    var results = _.map(searchIndex.search(q), function(r) {
      hit = SITE_CONTENT[r.ref];
      hit.path = hit.url;
      hit.snippet = hit.content.substring(0, 150) + "...";
      return hit;
    });

    $("#search-results").html(resultsTemplate({
      n: results.length,
      plural: results.length == 1 ? '' : 's',
      hits: results,
    }));
  }

  // do search on page load
  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('q');
  if (searchTerm) {
    $q.val(searchTerm).trigger('change');
  }
})();
