function time(){
     dt = new Date();
    var year = dt.getFullYear();
    var times = document.getElementsByClassName("showtime")
    times.innerHTML = year + '年'
}
time()
