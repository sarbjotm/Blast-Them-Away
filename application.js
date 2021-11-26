
counter = 0
miscounter = 0

addsquares=function(){
   i = 0
   var v = $('#howmany').val()

   for(i= 0; i<v; i+=1){

     min = Math.ceil(1);
     max = Math.floor(2);
     shape_style = Math.floor(Math.random() * (max - min + 1) + min);

     if(shape_style == 1){
      x = Math.random() * 180;
      y = Math.random() * 180;
      r = paper.rect(x, y, 20, 20);
      filled = {'fill': '#fff'};

      r.attr(filled)
      rotate= Math.random()*1440-720
      turning={'transform': 'r'+rotate}
      r.animate(turning,4000, misses)
      r.click(removal)
    }

    else{
      x = Math.random() * 180;
      y = Math.random() * 180;
      r = paper.ellipse(x, y, 40, 20 )
      filled = {'fill': '#f04'};
      r.attr(filled)
      rotate = Math.random()*1440-720
      turning = {'transform': 'r'+rotate}
      r.animate(turning,4000, misses)
      r.click(removal)
    }


}

}


removal = function() {

  this.remove()
  counter = counter + 1
  document.getElementById("counter").innerHTML = "Clicks: " + counter;

}


misses = function() {
  this.remove()
  miscounter = miscounter + 1
  document.getElementById("misses").innerHTML = "Misses: " + miscounter;
}


setup=function(){

  paper=Raphael('svg1',500,500)

  $('#more').click(addsquares)
  $('#remove').click(removesq)


}

$(document).ready(setup)
