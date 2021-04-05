// from data.js
let tableData = data;

// YOUR CODE HERE!

// Selecting table body
let tbody = d3.select("tbody");
console.log()
function buildTable(Data, body){
    Data.forEach(function(dataRow){
        var row = body.append("tr");
        Object.values(dataRow).forEach(function(value){
            row.append("td").text(value);
        });
    });
    return Data;
};

// Printing table
buildTable(tableData, tbody);

// Filter Function for Date
function filter_date(fil_data){
    // Selecting user input
    var inputElement = d3.select("#datetime");
    var inputDate = inputElement.property("value");

    // Creating new filtered data based on input if given
    if(inputDate){
        var filteredData = fil_data.filter(dataRow => dataRow.datetime === inputDate);
        return filteredData
    }
    // if no input given return data in original form
    return fil_data
};

// Filter Function for City
function filter_city(fil_data){
    var inputElement = d3.select("#city");
    var inputCity = inputElement.property("value");

    // Creating new filtered data based on input if given
    if(inputCity){
        var filteredData = fil_data.filter(dataRow => dataRow.city === inputCity.toLowerCase());
        return filteredData
    }
    // if no input given return data in original form
    return fil_data
};

// Filter Function for State
function filter_state(fil_data){
    var inputElement = d3.select("#state");
    var inputState = inputElement.property("value");

    // Creating new filtered data based on input if given
    if (inputState){
        var filteredData = fil_data.filter(dataRow => dataRow.state === inputState.toLowerCase());
        return filteredData
    }
    // if no input given return data in original form
    return fil_data
};

// Filter Function for Country
function filter_country(fil_data){
    var inputElement = d3.select("#country");
    var inputCountry = inputElement.property("value");

    // Creating new filtered data based on input if given
    if (inputCountry){
        var filteredData = fil_data.filter(dataRow => dataRow.country === inputCountry.toLowerCase());
        return filteredData
    }
    // if no input given return data in original form
    return fil_data
};

// Filter Function for Shape
function filter_shape(fil_data){
    var inputElement = d3.select("#shape");
    var inputShape = inputElement.property("value");

    // Creating new filtered data based on input if given
    if(inputShape){
        var filteredData = fil_data.filter(dataRow => dataRow.shape === inputShape.toLowerCase());
        return filteredData
    }
    // if no input given return data in original form
    return fil_data
};

// Selecting Button and Form
d3.select("#form").on("change", runEnter);
// creating run enter function
function runEnter() {
    // Removing all data from table
    d3.select("tbody").remove();
    // Preventing page from refresh
    d3.event.preventDefault();
    // Crearting new tbody for data
    var table = d3.select("#ufo-table");
    var t_body = table.append("tbody");
    // Calling function to filtered data if input given by user
    var filtered_table = filter_date(tableData);
    filtered_table = filter_city(filtered_table);
    filtered_table = filter_state(filtered_table);
    filtered_table = filter_country(filtered_table);
    filtered_table = filter_shape(filtered_table);
    

    // Printing final table based on user input
    buildTable(filtered_table, t_body);

};
