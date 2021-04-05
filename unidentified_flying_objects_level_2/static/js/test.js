// from data.js
let tableData = data;

// YOUR CODE HERE!

// Selecting table body
let tbody = d3.select("tbody");
console.log()
function createtable(Data, body){
    Data.forEach(function(dataRow){
        var row = body.append("tr");
        Object.values(dataRow).forEach(function(value){
            row.append("td").text(value);
        });
    });
    return Data;
};

// Printing table
createtable(tableData, tbody);

// Create form event handlers
d3.select("#form").on("change", runEnter);

// Filter Date
function filter_date(original){
    // Selecting user input
    var inputDate = d3.select("#datetime");
    var searchDate = inputDate.property("value");
    // If date search equals tabledata
    if(searchDate){
        var filteredData = original.filter(dataRow => dataRow.datetime === searchDate);
        return filteredData
    }
    // if no input given return data in original form
    return original  
};
// Filter City
function filter_city(original){
    var inputCity = d3.select("#city");
    var searchCity = inputCity.property("value");
    // If city search equals tabledata
    if(inputCity){
        var filteredData = original.filter(ufo => ufo.city === searchCity.toLowerCase());
        return filteredData
    }
    // if no input given return data in original form
    return fil_data    
};

// Filter Function for State
function filter_by_state(fil_data){
    var inputElement = d3.select("#state");
    var inputState = inputElement.property("value");

    // Creating new filtered data based on input if given
    if (inputState){
        var filteredData = fil_data.filter(ufo => ufo.state === inputState.toLowerCase());
        return filteredData
    }
    // if no input given return data in original form
    return fil_data    
};

// Filter Function for Country
function filter_by_country(fil_data){
    var inputElement = d3.select("#country");
    var inputCountry = inputElement.property("value");

    // Creating new filtered data based on input if given
    if (inputCountry){    
        var filteredData = fil_data.filter(ufo => ufo.country === inputCountry.toLowerCase());
        return filteredData
    }
    // if no input given return data in original form
    return fil_data    
};

// Filter Function for Shape
function filter_by_shape(fil_data){
    var inputElement = d3.select("#shape");
    var inputShape = inputElement.property("value");

    // Creating new filtered data based on input if given
    if(inputShape){
        var filteredData = fil_data.filter(ufo => ufo.shape === inputShape.toLowerCase());
        return filteredData
    }
    // if no input given return data in original form
    return fil_data    
};

// creating run enter function
function runEnter() {

    // Removing all data from table
    d3.select("tbody").remove();

    // Preventing page from refresh
    d3.event.preventDefault();

    // Create table for input data
    var table = d3.select("#ufo-table");
    var t_body = table.append("tbody");
        
    // Calling function to filtered data if input given by user
    var filtered_table = filter_date(tableData);
    filtered_table = filter_city(filtered_table);
    filtered_table = filter_by_country(filtered_table);
    filtered_table = filter_by_shape(filtered_table);
    filtered_table = filter_by_state(filtered_table);

    // Printing final table based on user input
    buildTable(filtered_table, t_body);
};
