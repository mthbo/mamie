---
# Front matter comment to ensure Jekyll properly reads file.
---

$('#carousel').hover(
  function() {
    $(this).carousel('pause');
    $(this).addClass('carousel-paused');
  },
  function() {
    $(this).carousel('cycle');
    $(this).removeClass('carousel-paused');
  }
)

var shuffle = function() {
  elements = document.querySelectorAll('.randomize');
  Array.prototype.forEach.call(elements, function(parentel, i){
    var children = parentel.children;
    children = Array.prototype.slice.call(children, 0);
    children = Array.prototype.sort.call(children, function(a, b) {
        return Math.random() - 0.5;
    });
    for(var i = 0, l = children.length; i < l; i++) parentel.append(children[i]);
    children[0].classList.add('active');
  });
};
shuffle();
