---
# Front matter comment to ensure Jekyll properly reads file.
---

$('#carousel').hover(
  function() {
    console.log('pause start');
    $('#carousel').carousel('pause');
    console.log('pause end');
  },
  function() {
    console.log('cycle start');
    $('#carousel').carousel('cycle');
    console.log('cycle end');
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
