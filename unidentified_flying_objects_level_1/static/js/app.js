// JavaScript-UFO_Sightings_Publication app

// Create a reference to the table body that will be in the web page
let tbody = d3.select("tbody");
// Create variable equal to data variable in the data.js
var tableData = data;

// Define function to build table out of data.js file
function buildTable(data){
    // Clear tbody variable data
    tbody.html("");
    // Create a loop that iterates through data.js to find each row
    data.forEach((dataRow) => {
        // For each new row found, append row `tr` to the html table body `tbody`
        let row = tbody.append("tr");
        // Apply a value for each data row value found that will correspond to the table body column
        Object.values(dataRow).forEach((val) => {
            // Iterate through and append a cell to the row for each new value to fill out table
            let cell = row.append("td");
            cell.text(val);
        });
    })
}
// Create an event handler function for the UFO sighting "Search by Date" filter
function handleClick(){
    // Cancels the event if it is cancelable
    d3.event.preventDefault();
    // Define variable that represents the request for the datetime value as the search criteria
    let date = d3.select("#datetime").property("value");
    // Create copy of tableData variable with a new name 'filterData' to use in if statement
    let filterData = tableData;

    // If 'date' variable is equal to {}
    if(date) {
        // Filter through the data.js data, determine if datetime value input equals 'date' and return results
        filterData = filterData.filter((row) => row.datetime === date);
    }
    // Build a table from the filtered data
    buildTable(filterData);
}
// Activate the defined event handler function with .on("click")
d3.selectAll("#filter-btn").on("click", handleClick);
// Re-build Table with data.js
buildTable(tableData);
