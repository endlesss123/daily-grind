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

















myDate = new Date();
myDay = myDate.getDay();

switch(myDay){

    case 0:
        today = "Sunday";  
    break; 

    case 2:
        today = "Tuesday";  
    break; 
    
    default:
       today = "Something went wrong";

}

alert(today);
