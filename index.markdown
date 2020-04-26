---
layout: default
---

<div class="row justify-content-center px-2 pt-3 pb-3 mb-2">
  <div class="col-12 col-lg-9">
    <h1 class='font-weight-light'>{{ site.title }}  🤔</h1>
    <h2 class="font-weight-light lead text-secondary">{{ site.description }}</h2>
  </div>
</div>

<div id="carousel" class="carousel slide carousel-fade px-2 pt-4 pb-3 rounded" data-ride="carousel">
  <div class="row justify-content-center">
    <div class="col-12 col-lg-9">
      <div class="carousel-inner randomize">
        {% for thought in site.thoughts reversed %}
          <div
            {% if forloop.first %}
              class="carousel-item active"
            {% else %}
              class="carousel-item"
            {% endif %}
          >
            <div class="lead text-secondary pb-2 d-flex justify-content-between">
              <p><span class='pr-2'>📭</span> {{ thought.post_date }}</p>
              <p class='d-none' id='pause'>⏸</p>
            </div>
            <blockquote class="blockquote text-justify">
              <p class="mb-0">{{ thought.content | markdownify }}</p>
              <footer class="blockquote-footer text-right">
                {{ thought.author_name }} ({{ thought.author_dates }})
                {% if thought.source_name %}
                  dans <cite title="Source Title">{{ thought.source_name }}, {{ thought.source_date }}</cite>
                {% endif %}
              </footer>
            </blockquote>
          </div>
        {% endfor %}
      </div>
    </div>
  </div>
  <a class="carousel-control-prev d-none d-lg-block pt-5 mt-5" href="#carousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next d-none d-lg-block pt-5 mt-5" href="#carousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>

</div>


