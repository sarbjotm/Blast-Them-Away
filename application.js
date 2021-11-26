
let counter = 0
let miscounter = 0
let level = 1
let colours = ['#f1d376', '#df87df', '#22c66a', '#22a8c6', '#db6bf7']
addsquares=function(){
  i = 0
  var v = $('#howmany').val()

  for(i= 0; i<v; i+=1){
    random_colour = Math.floor(Math.random() * (4 - 0 + 1) + 0);
    min = Math.ceil(1);
    max = Math.floor(2);
    shape_style = Math.floor(Math.random() * (max - min + 1) + min);

    if(shape_style == 1){
      x = Math.random() * 360;
      y = Math.random() * 360;
      r = paper.rect(x, y, 20, 20);
      filled = {'fill': colours[random_colour]};

      r.attr(filled);
      rotate= Math.random()*1440-720;
      turning={'transform': 'r'+rotate};
      r.animate(turning,4000, misses);
      r.click(removal);
    }

    else{
      x = Math.random() * 360;
      y = Math.random() * 360;
      r = paper.ellipse(x, y, 40, 20 )
      filled = {'fill': colours[random_colour]};
      r.attr(filled)
      rotate = Math.random()*1440-720;
      turning = {'transform': 'r'+rotate};
      r.animate(turning,4000, misses);
      r.click(removal);
    }


}

}


removal = function() {
  this.remove()
  counter = counter + 1;
  document.getElementById("counter").innerHTML = "Clicks: " + counter;

}


misses = function() {
  this.remove()
  miscounter = miscounter + 1
  document.getElementById("misses").innerHTML = "Misses: " + miscounter;
}




let c = 10;

addcircles = function(){
  circle = paper2.circle(100,100,c);
  circle.attr("stroke","#00f");
  c = c + 10;
}

setup=function(){

  paper=Raphael('svg1',500,500);
  paper2=Raphael('svg2',500,500);

  $('#more').click(addsquares);
  $('#another').click(addcircles);

}

$(document).ready(setup);
