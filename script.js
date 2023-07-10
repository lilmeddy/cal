setInterval(() => {
    let date = new Date();
    date.getHours() <= 11
      ? (document.getElementById("time").innerHTML =
          date.getHours() + ":" + date.getMinutes() + " AM")
      : (document.getElementById("time").innerHTML =
          date.getHours() + ":" + date.getMinutes() + " PM");
  }, 1000);
  let myShow = document.getElementById("myShow");
  function display(num) {
    myShow.value += num;
  }
  function calculate() {
    try {
      myShow.value = eval(myShow.value);
    } catch (err) {
      myShow.value = "Math Error";
      console.log("error");
    }
  }
  function Clear() {
    myShow.value = "";
  }
  