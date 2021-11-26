
let counter = 0
let miscounter = 0
let level = 1
let colours = ['#f1d376', '#df87df', '#22c66a', '#22a8c6', '#db6bf7']

addsquares=function(){
  i = 0
  var v = $('#howmany').val()
  if (v == ""){
    alert("Please enter a value greater than 0")
  }

  else if (v == 0){
    alert ("To play the game, you must enter a number greater than 0")
  }

  else if (v <= 50){


    for(i = 0; i < v; i+=1){
      random_colour = Math.floor(Math.random() * (4 - 0 + 1) + 0);
      min = Math.ceil(1);
      max = Math.floor(2);
      shape_style = Math.floor(Math.random() * (max - min + 1) + min);

      if(shape_style == 1){
        x = Math.floor(Math.random() * (460 - 30 + 1) + 30)
        y = Math.floor(Math.random() * (460 - 30 + 1) + 30)
        r = paper.rect(x, y, 20, 20);
        filled = {'fill': colours[random_colour]};

        r.attr(filled);
        rotate= Math.random()*1440-720;
        turning={'transform': 'r'+rotate};
        r.animate(turning,4000, misses);
        r.click(removal);
      }

      else{
        x = Math.floor(Math.random() * (460 - 30 + 1) + 30)
        y = Math.floor(Math.random() * (460 - 30 + 1) + 30)
        r = paper.ellipse(x, y, 40, 20)
        filled = {'fill': colours[random_colour]};
        r.attr(filled)
        rotate = Math.random()*1440-720;
        turning = {'transform': 'r'+rotate};
        r.animate(turning,4000, misses);
        r.click(removal);

      }

  }

}

  else if (v > 50){
    alert("Please enter a value less than or equal to 50")
  }


  else{
    alert("Please enter an integer value")
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
  random_colour = Math.floor(Math.random() * (4 - 0 + 1) + 0);
  circle = paper2.circle(250,250,c);
  circle.attr("stroke", colours[random_colour]);
  c = c + 10;
}


setup=function(){

  paper=Raphael('svg1',500,500);
  paper2=Raphael('svg2',500,500);

  $('#more').click(addsquares);
  $('#another').click(addcircles);

}

$(document).ready(setup);
