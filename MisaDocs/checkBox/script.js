$(document).ready(function () {
  // 
  checkboxClickAnimation()
})
function checkboxClickAnimation() {
  let checkboxInput = $(".checkbox__input-checkbox");  
  checkboxInput.change(function () {
    if (this.checked) {
      console.log("test1");
      $(".checkbox__container").removeClass("checkbox__input-anim--unchecked");
      $(".checkbox__container").addClass("checkbox__input-anim--checked");
    }
    else {
      console.log("test2");
      $(".checkbox__container").removeClass("checkbox__input-anim--checked");
      $(".checkbox__container").addClass("checkbox__input-anim--unchecked");
    }
  })
}
