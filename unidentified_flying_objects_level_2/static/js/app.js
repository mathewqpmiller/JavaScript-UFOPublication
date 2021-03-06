// JavaScript-UFO_Sightings_Publication level 2 app

//  CREATE TABLE

// Create a reference to the table body that will be in the web page
var tbody = d3.select("tbody");
// Create variable equal to data variable in the data.js
var tableData = data;
// Define function to build table out of data.js file
function buildTable(Data, body){
    // Clear tbody variable data
    tbody.html("");
    // Create a loop that iterates through data.js to find each row
    Data.forEach(function(dataRow){
        // For each new row found, append row `tr` to the html table body `tbody`
        var row = body.append("tr");
        // Apply a value for each data row value found that will correspond to the table body column
        Object.values(dataRow).forEach(function(value){
            // Iterate through and append a cell to the row for each new value to fill out table
            row.append("td").text(value);
        });
    });
    return Data;
};

// FILTER VALUES FUNCTIONS

// Filter date function
function filter_date(fil_data){
    var inputElement = d3.select("#datetime");
    var inputDate = inputElement.property("value");
    // If statement
    if(inputDate){
        var filteredData = fil_data.filter(dataRow => dataRow.datetime === inputDate);
        return filteredData
    }
    // If not equal return placeholder value
    return fil_data
};
// Filter city function
function filter_city(fil_data){
    var inputElement = d3.select("#city");
    var inputCity = inputElement.property("value");
    // If statement
    if(inputCity){
        var filteredData = fil_data.filter(dataRow => dataRow.city === inputCity.toLowerCase());
        return filteredData
    }
    // If not equal return placeholder value
    return fil_data
};
// Filter state function
function filter_state(fil_data){
    var inputElement = d3.select("#state");
    var inputState = inputElement.property("value");
    // If statement
    if (inputState){
        var filteredData = fil_data.filter(dataRow => dataRow.state === inputState.toLowerCase());
        return filteredData
    }
    // If not equal return placeholder value
    return fil_data
};
// Filter country function
function filter_country(fil_data){
    var inputElement = d3.select("#country");
    var inputCountry = inputElement.property("value");
    // If statement
    if (inputCountry){
        var filteredData = fil_data.filter(dataRow => dataRow.country === inputCountry.toLowerCase());
        return filteredData
    }
    // If not equal return placeholder value
    return fil_data
};
// Filter shape function
function filter_shape(fil_data){
    var inputElement = d3.select("#shape");
    var inputShape = inputElement.property("value");
    // If statement
    if(inputShape){
        var filteredData = fil_data.filter(dataRow => dataRow.shape === inputShape.toLowerCase());
        return filteredData
    }
    // If not equal return placeholder value
    return fil_data
};

// EVENT HANDLER 

// Define and activate an event handler listener with .on("change")
d3.select("#form").on("change", runEnter);
// Create an event handler function for the UFO sighting "Search by Date" filter
function runEnter() {
    // Removing all data from table
    d3.select("tbody").remove();
    // Cancels the event if it is cancelable
    d3.event.preventDefault();
    // Define variable that represents the request to select the ufo-table id tag
    var table = d3.select("#ufo-table");
    // Define a variable that holds the newly created, filtered, table
    var t_body = table.append("tbody");
    // Calling function to filtered data if input given by user
    var filtered_table = filter_date(tableData);
    filtered_table = filter_city(filtered_table);
    filtered_table = filter_state(filtered_table);
    filtered_table = filter_country(filtered_table);
    filtered_table = filter_shape(filtered_table);
    // Return filtered results to html table body
    buildTable(filtered_table, t_body);
}
// Re-build Table with data.js
buildTable(tableData, tbody);
