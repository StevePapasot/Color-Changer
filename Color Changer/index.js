//-------------------------- Blue ----------------------------
let blue = ['#0000ff10','#0000ff20','#0000ff30','#0000ff40','#0000ff50','#0000ff60','#0000ff70','#0000ff80','#0000ff90','#0000ff'];
let button1 = document.getElementById('button1');

button.addEventListener('click', function(){
    let press = parseInt((Math.random()*blue.length)+1);
    //grab the picked
    let picked = document.getElementById('picked');

    picked.style.background = `${blue[press]}`
})


//-------------------------- Yellow ----------------------------
let yellow = ['#FFFF0010','#FFFF0020','#FFFF0030','#FFFF0040','#FFFF0050','#FFFF0060','#FFFF0070','#FFFF0080','#FFFF0090','#FFFF00'];
button.addEventListener('click', function(){
    let press2 = parseInt((Math.random()*yellow.length)+1);
    //grab the picked
    let pickedy = document.getElementById('pickedy');

    pickedy.style.background = `${yellow[press2]}`
})


//-------------------------- Red ----------------------------
let red = ['#FF000010','#FF000020','#FF000030','#FF000040','#FF000050','#FF000060','#FF000070','#FF000080','#FF000090','#FF0000'];
button.addEventListener('click', function(){
    let press3 = parseInt((Math.random()*red.length)+1);
    //grab the picked
    let pickedr = document.getElementById('pickedr');

    pickedr.style.background = `${red[press3]}`
})


//-------------------------- Orange ----------------------------
let orange = ['#FFA50010','#FFA50020','#FFA50030','#FFA50040','#FFA50050','#FFA50060','#FFA50070','#FFA50080','#FFA50090','#FFA500'];
button.addEventListener('click', function(){
    let press4 = parseInt((Math.random()*orange.length)+1);
    //grab the picked
    let pickedo = document.getElementById('pickedo');

    pickedo.style.background = `${orange[press4]}`
})


//-------------------------- Green ----------------------------
let green = ['#00800010','#00800020','#00800030','#00800040','#00800050','#00800060','#00800070','#00800080','#00800090','#008000'];
button.addEventListener('click', function(){
    let press5 = parseInt((Math.random()*green.length)+1);
    //grab the picked
    let pickedg = document.getElementById('pickedg');

    pickedg.style.background = `${green[press5]}`
})


//-------------------------- Violet ----------------------------
let violet = ['#EE82EE10','#EE82EE20','#EE82EE30','#EE82EE40','#EE82EE50','#EE82EE60','#EE82EE70','#EE82EE80','#EE82EE90','#EE82EE'];
button.addEventListener('click', function(){
    let press6 = parseInt((Math.random()*violet.length)+1);
    //grab the picked
    let pickedv = document.getElementById('pickedv');

    pickedv.style.background = `${violet[press6]}`
})