//--------------Styling the wrapper--------------
document.querySelector('.wrapper').style.margin = '0px auto'
document.querySelector('.wrapper').style.width = '60vw';
document.querySelector('.wrapper').style.fontFamily = 'poppins, sans-serif'
document.querySelector('h1').style.textAlign = 'center'
document.querySelector('h2').style.textAlign = 'center'
// h1.style.cssText = 'color: pink; text-align: center; font-size: 3em'
document.querySelector('.wrapper').style.cursor = 'pointer'

/**-------------------------STYLING THE HEADERS-------------------------*/
document.querySelector('h2').style.textDecoration = 'underline';
const head = document.querySelector('h1');
head.innerHTML = `Asabeneh Yetayeh challenges in <span>2020</span>`
console.log(head)
let modifiedYear = document.getElementsByTagName('span')[0]
modifiedYear.style.fontSize = '60px';
let h1Colors = ['green', 'red', 'pink', 'purple', 'teal'];

function modifiedYearColor(){
    modifiedYear.style.color = h1Colors[Math.floor(Math.random()*5)]
    period.style.backgroundColor = h1Colors[Math.floor(Math.random()*5)]
}
setInterval(modifiedYearColor, 1000);//An interval of one seconds to change the color of the year 2020 in the h1 element.

// const pattern = /\d+/g;
// const digit = head.textContent.match(pattern);
// const toString = digit.toString()
// console.log(toString)
// head.style.color = '';

/**----------CREATING THE DATE AND TIME OBJECT----------*/
let period = document.createElement('h4'); //create the element
period.id = 'calender' //Giving an id attribute to the h4 element.
var body = document.querySelector('body');
body.appendChild(period); //Going into the HTML DOM
period.style.cssText = 'text-align:center; background-color: orange;  margin: 0 auto; width: 20vw; padding: 10px; font-weight: lighter; border-radius: 10px'
document.querySelector('h2').after(period)//Placing the period element to the exact location or spot intended to be.

function displayTime() {
    let timePeriod = new Date();
    let hour = timePeriod.getHours();
    let minute = timePeriod.getMinutes();
    let seconds = timePeriod.getSeconds();
    let day = timePeriod.getDate()
    let month = timePeriod.getMonth() + 1;
    let year = timePeriod.getFullYear();
    let months = {1:'January', 2:'February', 3:'March', 4:'April', 5:'May', 6:'June', 7:'July', 8:'August', 9:'September', 10:'October', 11:'November', 12:'December',}
    
    hour = hour < 10 ? "0" + hour : hour; 
    minute = minute < 10 ? "0" + minute : minute; 
    seconds = seconds < 10 ? "0" + seconds : seconds; 
    
    let calendar = `${months[month]} ${day}, ${year} ${hour}:${minute}:${seconds}`;    
    period.innerHTML = calendar; //assing the value calendar to the period variable(element).
}
displayTime();
setInterval(displayTime, 1000);

//--------------Styling the Lists--------------
document.querySelector('ul').style.padding = '0'
let lists = document.querySelectorAll('li');
lists.forEach((element, index)=>{
    element.style.cssText = 'list-style: none; padding: 10px; margin-bottom: 2px; background-color: red'
    // element.style.listStyle = 'none'
    // element.style.padding = '10px'
    // element.style.marginBottom = '2px'
    // element.style.backgroundColor = 'red'
    if(index === 0){
        element.style.backgroundColor = 'green'
    }
    else if(index === 1){
        element.style.backgroundColor = 'yellow';
    }
})