---
# Front matter comment to ensure Jekyll properly reads file.
---

var forcePause = false;
var forceCycle = false;

$('#carousel').hover(
  function() {
    console.log('in');
    if (forceCycle == false) {
      console.log('pausing_start');
      forcePause = true;
      $('#carousel').carousel('pause');
      forcePause = false;
      console.log('pausing_end');
    }
  },
  function() {
    console.log('out');
    if (forcePause == false) {
      console.log('cycling_start');
      forceCycle = true;
      $('#carousel').carousel('cycle');
      forceCycle = false;
      console.log('cycling_end');
    }
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
