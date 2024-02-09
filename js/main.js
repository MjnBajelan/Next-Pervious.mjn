let child = document.querySelectorAll("div.circle");

child.forEach((elem) => {
  elem.addEventListener("click", function (e) {
    child.forEach((elem) => {
      elem.style.backgroundColor = "whitesmoke";
    });

    e.target.style.backgroundColor = "red";

    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.style.backgroundColor ='darkred';

    }
    if (e.target.previousElementSibling) {
      e.target.previousElementSibling.style.backgroundColor ="tomato";

    }
  });
});
