$(function() {
  Handlebars.registerHelper("debug", function(optionalValue) {

    if (optionalValue) {
      console.log("Value");
      console.log("====================");
      console.log(optionalValue);
    } else {
      console.log("Current Context");
      console.log("====================");
      console.log(this);
    }
  });

  var Dataset = function(type, name, code, extra, hitTemplate, hintFun) {
    var self = this;

    self.type = type;
    self.name = name;
    self.id = name.toLowerCase().replace(/[^a-zA-Z0-9-]+/g, "-").replace(/-+/g, "-");

    switch (self.type) {
      case "socrata":
        self.searchUrlTemplate = "https://data.code4sa.org/resource/" + code + ".json?$q={0}";
        self.searchMoreUrlTemplate = "https://data.code4sa.org/" + extra + "/data?q={0}";
        self.metadataUrl = "https://data.code4sa.org/api/views/" + code + ".json";
        break;
      case "socrata_private":
        self.searchUrlTemplate = "https://backchat.code4sa.org/portalproxy/resource/" + code + ".json?$q={0}";
        self.searchMoreUrlTemplate = "https://backchat.code4sa.org/portalproxy/resource/" + code + ".csv?$q={0}";
        self.metadataUrl = "https://backchat.code4sa.org/portalproxy/api/views/" + code + ".json";
        break;
      case "sourceafrica":
        self.searchUrlTemplate = "https://dc.sourceafrica.net/api/search.json?q=projectid%3A404-sens+{0}&page=0&sections=true&mentions=3";
        self.searchMoreUrlTemplate = "https://sourceafrica.net/search.html#q=projectid%3A404-sens%20{0}";
        self.metadataUrl = null;
        break;
      case "aleph":
        self.host = code;
        self.searchUrlTemplate = code + "/api/1/query?q={0}";
        self.searchMoreUrlTemplate = code + "/search?q={0}";
        self.metadataUrl = null;
        break;
    }

    if (self.metadataUrl) {
      $.ajax(self.metadataUrl)
        .done(function(resp) {
          var timestamp = resp.indexUpdatedAt || resp.publicationDate;
          var date = new Date(timestamp*1000);
          self.updatedDateString = "Updated: " + date.toLocaleDateString("en-ZA");
          /* if this completes before the first search, it'll be set in the
             dataset template, otherwise it'll be set in the page by jQuery: */
          var container = $('#' + self.id + ' updated-date');
          container.html(self.updatedDateString);
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus, errorThrown, jqXHR);
        });
    }
    self.hitTemplate = hitTemplate || function(hit) {
      var summary = "";

      $.each(hit, function(key, val) {
        summary += " " + Handlebars.escapeExpression(val);
      });

      return summary;
    };

    self.parse_socrata = function(resp) {
      self.total_hits = resp.length;
      self.hits = [];

      resp = resp.slice(0, 5);
      resp.forEach(function(hit) {
        self.hits.push({
          summary: self.markText(self.hitTemplate(hit), self.q),
        });
      });
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

    self.parse_aleph = function(resp) {
      self.total_hits = resp.total;

      resp.results.slice(0, 5).forEach(function(hit) {
        if (hit.records.results.length === 1) {
          hit.countString = "1 hit";
        } else if (hit.records.results.length < 5) {
          hit.countString = hit.records.results.length + " hits";
        } else {
          hit.countString = "5+ hits";
        }
        hit.host = self.host;
        hit.query = encodeURIComponent(self.q);
        self.hits.push({
          summary: self.markText(self.hitTemplate(hit), self.q),
        });
      });
    };

    self.makeHint = hintFun || function(query) { return null; };

    self.markText = function(text, query) {
      var tmp = $.parseHTML("<div>" + text + "</div>")[0];
      new Mark(tmp).mark(stemmer(query), {separateWordSearch: true});
      return tmp.innerHTML;
    };

    self.reset = function() {
      self.hint = null;
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

      self.hint = self.makeHint(query);

      $.ajax(url)
        .done(function(resp) {
          self.error = false;
          self.searching = false;
          self['parse_' + self.type].call(this, resp);
          result.resolve();
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
          self.searching = false;
          self.error = true;
          console.log(textStatus, errorThrown, jqXHR);
          if ('ga' in window) {
            logMsg = self.type + " query: \"" + self.q + "\" " + textStatus + ": " + errorThrown;
            ga('send', 'event', 'corporate-data-search', 'error', logMsg);
          }
          result.resolve();
        });

      return result;
    };
  };

  var datasets = [
    new Dataset("socrata", "Tender Awards 2015-2016", "9vmn-5tnb", "Government/Tender-Awards-2015-2016/kvv2-xrvr"),
    new Dataset("socrata", "Restricted Suppliers", "rvqa-n6ju", "Government/Database-of-Restricted-Suppliers/rvqa-n6ju"),
    new Dataset("sourceafrica", "SENS", "404-sens"),
    new Dataset("socrata", "Deceased Estates", "x5eb-ewki", "dataset/Deceased-Estates/s2gz-zxmc", Handlebars.compile($("#deceased-estate-hit-template").html())),
    new Dataset("socrata", "Trusts", "3jhi-ewix", "dataset/Trusts/3jhi-ewix"),
    new Dataset("socrata", "UK Land Registry", "qxgb-avr5", "Business/UK-Land-Registry/n7gy-as2q"),
    new Dataset("aleph", "Open Gazettes", "https://search.opengazettes.org.za", null, Handlebars.compile($("#aleph-hit-template").html())),
  ];

  var resultsContainer = $('#search-results');
  var datasetTemplate = Handlebars.compile($('#search-dataset-template').html());
  var $form = $("#corporate-data-search form");
  var queryInput = $form.find('[name=q]');
  var startSearch = function(q) {
    var perCol = Math.ceil(datasets.length / 2);
    resultsContainer
      .show()
      .find('.panel').remove();

    datasets.forEach(function(dataset, i) {
      // column it should go in
      var col = Math.floor(i / perCol) + 1,
          $output = resultsContainer.find('.col-' + col);

      dataset.reset();
      $output.append(datasetTemplate(dataset));

      dataset.search(q)
        .then(function() {
          $output.find("#" + dataset.id).replaceWith(datasetTemplate(dataset));
        });
    });
  };

  $form.on('submit', function(e) {
    e.preventDefault();
    var q = queryInput.val();
    if ('pushState' in history)
      history.pushState(q, "TRACE search: " + q, "trace.html?q=" + encodeURIComponent(q));
    startSearch(q);
    if ('ga' in window) ga('send', 'event', 'corporate-data-search', 'request', q);
  });

  window.onpopstate = function(event) {
    if (event.state) {
      var q = event.state;
      queryInput.val(q);
      startSearch(q);
    }
  }

});
