import Dispatcher from '../Dispatcher';

export function addItem(toDoItem) {
    Dispatcher.dispatch({
        type: "ADD_TODO",
        toDoItem
    });
}

export function removeItem(itemIndex) {
    Dispatcher.dispatch({
        type: "REMOVE_TODO",
        itemIndex
    });
}

export function markTodoDone(itemIndex) {
    Dispatcher.dispatch({
        type: "MARK_DONE_TODO",
        itemIndex
    });
}

export function addAsyncItem() {
    Dispatcher.dispatch({type: "FETCH_ASYNC_TODO"});
    var data_file = "http://www.tutorialspoint.com/json/data.json";
    var xhttp = new XMLHttpRequest();
    try{
        // Opera 8.0+, Firefox, Chrome, Safari
        xhttp = new XMLHttpRequest();
     }catch (e) {
        // // Internet Explorer Browsers
        // try{
        //     xhttp = new ActiveXObject("Msxml2.XMLHTTP");
             
        // }catch (e) {
         
        //    try{
        //     xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        //    }catch (e) {
        //       // Something went wrong
        //       alert("Your browser broke!");
        //       return false;
        //    }
             
        // }
     }
     
     xhttp.onreadystatechange = function() {
     
        if (xhttp.readyState == 4  ) {
           // Javascript function JSON.parse to parse JSON data
           var jsonObj = JSON.parse(xhttp.responseText);
           console.log(jsonObj)
           Dispatcher.dispatch({
            type: "ADD_TODO",
            toDoItem: {newItemValue: jsonObj.name}
            });
           // jsonObj variable now contains the data structure and can
           // be accessed as jsonObj.name and jsonObj.country.
        //    document.getElementById("Name").innerHTML = jsonObj.name;
        //    document.getElementById("Country").innerHTML = jsonObj.country;
        }
     }
     
     xhttp.open("GET", data_file, true);
     xhttp.send();
}