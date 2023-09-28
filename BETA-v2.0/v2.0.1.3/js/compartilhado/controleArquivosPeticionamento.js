


function remove(el) {
    el.remove();
    let extras = document.querySelectorAll('[data-extralinha]');
    reamudar(extras);
  }


  
function reamudar(extras) {
    if (extras.length > 0) {
  
      let i = 0;
      extras.forEach(extra => {
        extra.childNodes[1].childNodes[3].childNodes[1].dataset.spannomen = i;
        extra.childNodes[1].childNodes[3].childNodes[3].childNodes[1].dataset.spandsizen = i;
        extra.childNodes[3].childNodes[3].dataset.qualn = i;
        extra.childNodes[3].childNodes[3].name = "arquivon" + i;
        extra.childNodes[3].childNodes[3].id = "arquivon" + i;
        extra.childNodes[3].childNodes[1].setAttribute("for", "arquivon" + i);
        i++;
      });
    }
  }