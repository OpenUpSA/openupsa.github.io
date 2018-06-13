---
layout: base
---
<section class="whats-your-story index">
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">

        <img src="/img/whats-your-story/reimagine-storytelling.jpg">

        <h2>What is Re-imagine Storytelling all about?</h2>
        <p>
          We have moved into the digital and information age. This means that the way we tell stories has evolved from simply spreading the news to getting the reader involved. This is what Re-imagine Storytelling is all about. It brings together elements of data, tech, journalism and activism. It goes beyond just reporting issues of social justice to actively trying to solve them.
        </p>
        <p>
          We chose eight final teams to compete for a cash prize of R20,000. All projects were guaranteed a small budget to work with, Codebridge resources, a cool space where you can plot, plan and create, as well as media coverage.
        </p>

        <a href="stories/children-raising-children.html"><img src="/img/whats-your-story/trophy.png"></a>

        <a class="btn btn-success btn-block btn-winner" href="stories/children-raising-children.html"><i class="fa fa-book" aria-hidden="true"></i> Read their story</a>

        <h2>The eight finalists</h2>

        {% for team in site.miscellaneous %}
          {% if team.layout contains "whats-your-story" %}
          <a class="col-team" href="stories/{{ team.icon }}.html">
            <div class="row">
              <div class="team-image col-sm-4 col-md-3">
                <img src="/img/whats-your-story/{{ team.icon }}.jpg">
              </div>
              <div class="team-text col-sm-8 col-md-9">
                <h3 class="team-name">{{ team.name }}</h3>
                <p class="team-description">{{ team.tagline }}</p>
              </div>
            </div>
          </a>
          {% endif %}
        {% endfor %}

        <h3>With support from:</h3>

        <div class="row">
          <div class="col-xs-6 col-sm-3 col-donor">
            <a href="/"><img src="/img/logo.svg"></a>
          </div>
          <div class="col-xs-6 col-sm-3 col-donor">
            <a href="https://www.facebook.com/HacksHackersAfrica" target="_blank"><img src="/img/whats-your-story/hh.png"></a>
          </div>
          <div class="col-xs-6 col-sm-3 col-donor">
          <a href="http://www.makingallvoicescount.org/" target="_blank"><img src="/img/whats-your-story/mavc.png"></a>
          </div>
          <div class="col-xs-6 col-sm-3 col-donor">
          <a href="http://opendata.durban/" target="_blank"><img src="/img/whats-your-story/opendatadurban.jpg"></a>
          </div>
        </div>

        <h3><small>We thank our donors for making this storytelling challenge possible</small></h3>

      </div>
    </div>
  </div>
</section>