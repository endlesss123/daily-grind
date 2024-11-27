/*

Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:

One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content
The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.

name- for example Bubble Tea
pic- for example bubble-tea.jpg
alt-name of coffee in alt tag
color- color associated with coffee
desc- description of coffee
day- day of the week



*/








let myDate = new Date();
let myDay = myDate.getDay();
let coffee = "";
let today ="";


if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
 }

// Here's how we convert a string to an integer:

myDay = parseInt(myDay);//must change to integer for switch


//Here's a website where this is discussed: Mozilla Developer Network on parseInt()


switch(myDay){

    case 0:
        today = "Sunday";  


        coffee = {
            name: "Caramel Latte", 
            pic: "images/caramel-latte.jpg",
            alt: "A pic of a caramel latte", 
            color: "yellow",
            day: "Sunday", 
            desc: `For when I want something sweet`
        };

    break; 

    case 1:
        today = "Monday";  

        coffee = {
            name: "Cold Brew", 
            pic: "images/cold-brew.jpg",
            alt: "A pic of a cold brew", 
            color: "brown",
            day: "Monday", 
            desc: `For when I need a quick pick me up!`
        };
    break; 

     case 2:
        today = "Tuesday";  


        coffee = {
            name: "Drip", 
            pic: "images/drip.jpg",
            alt: "A pic of a drip", 
            color: "blue",
            day: "Tuesdat", 
            desc: `For when I need sauce!`
        };
    break; 

    case 3:
        today = "Wednesday";  

        coffee = {
            name: "Bubble Tea", 
            pic: "images/bubble-tea.jpg",
            alt: "A pic of a bubble tea", 
            color: "pink",
            day: "Wednesday", 
            desc: `I like me some bubble tea!`
        };
    break; 

    case 4:
        today = "Thursday";  

        coffee = {
            name: "Frappaccino", 
            pic: "images/frappaccino.jpg",
            alt: "A pic of a frappaccino", 
            color: "red",
            day: "Thursday", 
            desc: `I like me some whip cream on top!`
        };
    break; 

    case 5:
        today = "Friday";  

        coffee = {
            name: "Mocha", 
            pic: "images/mocha.jpg",
            alt: "A pic of a mocha", 
            color: "purple",
            day: "Friday", 
            desc: `I like a cup of mocha!`
        };
    break;
    
    case 6:
        today = "Saturday";  

        coffee = {
            name: "Latte", 
            pic: "images/latte.jpg",
            alt: "A pic of a latte", 
            color: "green",
            day: "Saturday", 
            desc: `I like a small cup of latte!`
        };
    break; 
    
    default:
       today = "Something went wrong";

}

//alert(today);
console.log(coffee);

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);


document.querySelector("html").style.backgroundColor = coffee.color;

function coffeeTemplate(coffee){
    return `       <p>
    		 <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>`;
}
