import "./issues.scss";


// * paragraph

$(document).ready(function(){
 $.fn.animate_Text = function() {
  var string = this.text();
  return this.each(function(){
   var $this = $(this);
   $this.html(string.replace(/./g, '<span class="new">$&</span>'));
   $this.find('span.new').each(function(i, el){
    setTimeout(function(){ $(el).addClass('div_opacity'); }, 20 * i);
   });
  });
 };
 $('#main__description').show();
 $('#main__description').animate_Text();
});
