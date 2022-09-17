

const main = document.querySelector("main");

const fnct = (message) => {
    message = "This is the best moment to have a look at this website !";
    const dateTimeNow = new Date();
    const date = dateTimeNow.toLocaleDateString();
    const hour = dateTimeNow.toLocaleTimeString();
    
    return date + " " + hour + " : " + message;



}

alert(fnct());

