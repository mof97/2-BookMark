// hide sho wtaible

function hide_show (){
  var li = document.querySelectorAll(".togle ul li"),
      table = document.querySelectorAll(".table");
      li.forEach(el => {
        el.addEventListener('click' , function(e){
          el.parentNode.querySelectorAll(".active").forEach(liAct => {
            liAct.classList.remove("active");
          })
          e.target.classList.add("active")
          table.forEach(tab => {
            if (e.target.getAttribute("data-show") == tab.getAttribute("data-show")){
              tab.parentNode.querySelectorAll('.active').forEach(act => {
                act.classList.remove("active")
                //console.log(act)
              })
              tab.classList.add("active")
            }  
          })        
        })
      })
}

hide_show()

function prShow(){
  var headel = document.querySelectorAll(".drop .tit");
    //console.log(headel)

    headel.forEach(el =>{
      el.addEventListener('click',function(){
        console.log(el)
        el.parentNode.parentNode.parentNode.querySelectorAll(".h-auto").forEach(test =>{
          test.classList.remove('h-auto')
        })
        console.log(el.nextSibling)
        el.nextElementSibling.classList.add("h-auto")
      })
    })
}
prShow()