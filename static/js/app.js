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