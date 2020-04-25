<!DOCTYPE html>
<html>
  {% include head.html %}
  <body>
    <div class="min-vh-100 d-flex flex-column">
      <div class="flex-grow-1 bg-light">
        <div class="container my-5">
          <div class="row justify-content-center my-5">
            <div class="col col-lg-10 col-xl-9">
              {{ content }}
            </div>
          </div>
        </div>
      </div>
      {% include footer.html %}
    </div>
  </body>
  {% include scripts.html %}
</html>
