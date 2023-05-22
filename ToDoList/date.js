
//This will log a module object
console.log(module);



//This is a module that exports a function that returns the current date
module.exports.getDate = function() {
    
    let today = new Date();
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long'
    };

    //toDateString() is used to formate the date using the options object and locale string
    return today.toLocaleDateString("en-US", options);

}

//exports also works fine!
exports.getDay = getDay;
//This is a module that exports a function that returns the current day

function getDay() {
    let today = new Date();
    let options = {
        weekday: 'long'
    };

   return today.toLocaleDateString("en-US", options);
  
}