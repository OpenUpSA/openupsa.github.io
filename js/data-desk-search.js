$(function() {
  var error = function(jqXHR, textStatus, errorThrown) {
    console.log(textStatus, errorThrown, jqXHR);
  };

  var Dataset = function(type, name, code, extra) {
    var self = this;

    self.type = type;
    self.name = name;
    self.id = Math.random().toString(36).substring(7);

    switch (self.type) {
      case "socrata":
        self.searchUrlTemplate = "https://data.code4sa.org/resource/" + code + ".json?$q={0}";
        self.searchMoreUrlTemplate = "https://data.code4sa.org/" + extra + "/data?q={0}";
        break;
      case "socrata_private":
        self.searchUrlTemplate = "http://127.0.0.1:8000/portalproxy/resource/" + code + ".json?$q={0}";
        self.searchMoreUrlTemplate = "http://127.0.0.1:8000/portalproxy/resource/" + code + ".csv?$q={0}";
        break;
      case "sourceafrica":
        self.searchUrlTemplate = "https://dc.sourceafrica.net/api/search.json?q=projectid%3A404-sens+{0}&page=0&sections=true&mentions=3";
        self.searchMoreUrlTemplate = "https://sourceafrica.net/search.html#q=projectid%3A404-sens%20{0}";
        break;
    }

    self.handleError = function() {
      self.error = true;
    };
    self.parse_socrata = function(resp) {
      self.total_hits = resp.length;
      self.hits = [];

      resp = resp.slice(0, 5);

      for (var i = 0; i < resp.length; i++) {
        var hit = resp[i];
        var summary = "";

        $.each(hit, function(key, val) {
          summary += " " + Handlebars.escapeExpression(val);
        });

        self.hits.push({
          summary: self.markText(summary, self.q),
        });
      }
    };
    self.parse_socrata_private = self.parse_socrata;

    self.parse_sourceafrica = function(resp) {
      self.total_hits = resp.total;
      self.hits = [];

      hits = resp.documents.slice(0, 5);

      for (var i = 0; i < hits.length; i++) {
        var hit = hits[i],
            summary = '<a href="' + hit.canonical_url + '">' + hit.title + '</a>';
            mentions = [];

        if (hit.mentions) {
          for (var j = 0; j < hit.mentions.length; j++) {
            mentions.push(hit.mentions[j].text.replace(/<(\/)?b>/g, "<$1mark>"));
          }
        }

        if (mentions.length) {
          summary += " - " + mentions.join(" ... ");
        }

        self.hits.push({
          summary: summary,
        });
      }
    };

    self.markText = function(text, query) {
      var tmp = document.createElement('div');

      // mark() turns newlines into br
      tmp.innerText = text.replace(/\n/, ' ');
      new Mark(tmp).mark(stemmer(query), {separateWordSearch: true});

      return tmp.innerHTML;
    };

    self.reset = function() {
      self.hits = [];
      self.total_hits = 0;
      self.searching = true;
      self.searchMoreURL = "";
    };
    self.reset();

    self.search = function(query) {
      var result = $.Deferred(),
          escapedQuery = encodeURIComponent(query),
          url = self.searchUrlTemplate.replace("{0}", escapedQuery);

      self.searchMoreURL = self.searchMoreUrlTemplate.replace("{0}", escapedQuery);
      self.q = query;

      $.ajax(url)
        .done(function(resp) {
          self.searching = false;
          self['parse_' + self.type].call(this, resp);
          result.resolve();
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
          self.searching = false;
          self.handleError.call(this)
          error(jqXHR, textStatus, errorThrown);
          result.fail();
        });

      return result;
    };
  };

  var datasets = [
    new Dataset("socrata_private", "CIPC", "5erp-fahs", "dataset/CIPC-attempt-2/5erp-fahs"),
    new Dataset("socrata", "UK Land Registry", "qxgb-avr5", "Business/UK-Land-Registry/n7gy-as2q"),
    new Dataset("socrata", "Tender Awards 2015-2016", "9vmn-5tnb", "Government/Tender-Awards-2015-2016/kvv2-xrvr"),
    new Dataset("sourceafrica", "SENS", "404-sens"),
  ];

  var resultsContainer = $('#corporate-data-search .search-results');
  var datasetTemplate = Handlebars.compile($('#search-dataset-template').html());

  $("#corporate-data-search form").on('submit', function(e) {
    e.preventDefault();
    resultsContainer.empty();
    var q = $(this).find('[name=q]').val();

    datasets.forEach(function(dataset) {
      dataset.reset();
      resultsContainer.append(datasetTemplate(dataset));

      dataset.search(q)
        .then(function() {
          resultsContainer.find("#" + dataset.id).replaceWith(datasetTemplate(dataset));
        });
    });

    if ('ga' in window) ga('send', 'event', 'corporate-data-search', q);
  });

});
