/*
 fa-thermometer-0 (alias) [&#xf2cb;]4.7 fa-thermometer-1 (alias) [&#xf2ca;]4.7 fa-thermometer-2 (alias) [&#xf2c9;]4.7 fa-thermometer-3 (alias) [&#xf2c8;]
 fa-thermometer-4 (alias) [&#xf2c7;] */

const tempLoad = () => {
    let temp = document.getElementById('temp');
    temp.innerHTML = "&#xf2cb";

    setTimeout(()=>{
        temp.innerHTML = "&#xf2ca";
        temp.style.color = '#f8b627';
    }, 1000)

    setTimeout(()=>{
        temp.innerHTML = "&#xf2c9";
        temp.style.color = '#f8b627';
    }, 2000)

    setTimeout(()=>{
        temp.innerHTML = "&#xf2c8";
        temp.style.color = '#f8b627';
    }, 3000)

    setTimeout(()=>{
        temp.innerHTML = "&#xf2c7";
        temp.style.color = "#d63031";
    }, 4000)

}

tempLoad();

setInterval(tempLoad, 5000);