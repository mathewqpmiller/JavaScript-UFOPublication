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
// Create an event handler function for the Search Date filter
function handleClick(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Check if a Date was Entered & Filter Data Using that Date;
    if(date) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === date);
    }
    // Build Table with Filtered Data
    buildTable(filterData);
}
// `on` Function to attach an Event to the Handler Function
d3.selectAll("#filter-btn").on("click", handleClick);
// Build Table with data.js
buildTable(tableData);
