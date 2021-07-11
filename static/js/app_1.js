// Import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Start a new function to build table to display data
function buildTable(data) {

    // Tells JS to use an empty string when creating table, creating a blank canvas and clearing data
    tbody.html("");

    // forEach loop to loop through rows of array in data.js and add rows of data to the table
    data.forEach((dataRow) => {
        // Create variable that will append row to table body within forEach loop
        let row = tbody.append("tr");
        // Loop through each field in dataRow 
        Object.values(dataRow).forEach((val) => {
            // Append  each value of object to a cell in a table (td)
            let cell = row.append("td");
            // Extract only text of the value 
            cell.text(val);
        });
    });
}

function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check to see if a date was entered and filter the data using that date
    if (date) {
        // Apply 'filter' to the table data to only keep rows where 'datetime' value matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //Rebuild the table using the filtered data
    // NOTE: if no date was entered, then filteredData will just be original tableData
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);