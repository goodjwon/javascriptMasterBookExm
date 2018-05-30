document.addEventListener('DOMContentLoaded', function() {
    var Counter = function(elem) {
      this.count = 0;
      this.elem = elem;
     
    //   elem.addEventListener('click', function() {
    //    this.count++;
    //    this.show();
    //  }, false);
  
        elem.addEventListener('click', () => {
        this.count++;
        this.show();
        }, false);
    };
  
    Counter.prototype.show = function() {
      console.log(this.elem.id + '는' + this.count + '회 클릭되었다.');
    }
  
    var c = new Counter(document.getElementById('btn'));
  }, false);
  