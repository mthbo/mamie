---
layout: default
---

<div class="pt-3 pb-4">
  <h1 class='font-weight-light'>{{ site.title }}</h1>
  <h2 class="font-weight-light lead text-secondary">{{ site.description }}</h2>
</div>

<div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner randomize">
    {% for thought in site.thoughts %}
      <div
        {% if forloop.first %}
          class="carousel-item active"
        {% else %}
          class="carousel-item"
        {% endif %}
      >
        <h3 class="lead pb-2 mb-3">{{ thought.post_date }}</h3>
        <blockquote class="blockquote text-justify">
          <p class="mb-0">{{ thought.content | markdownify }}</p>
          <footer class="blockquote-footer text-right">{{ thought.author_name }} ({{ thought.author_dates }}) dans <cite title="Source Title">{{ thought.source_name }}, {{ thought.source_date }}</cite></footer>
        </blockquote>
      </div>
    {% endfor %}
  </div>
  <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>

</div>


