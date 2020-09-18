var employeedata = d3.json("employee.json")
var successFCN = function(employee)
{
    console.log("Data retrieved", employee); drawtable(employee);
}

var drawtable = function(employee){
var rows = d3.select("tbody")
.selectAll("tr")
.data(employee)
.enter()
.append("tr")

rows.append("td")
.text(function(name) {
    return name.firstName + " " + name.lastName;
})
    
rows.append("td")
    .append("img")
    .attr("src", function(pic) {
    return pic.photo;
})

rows.append("td")
    .text(function(faculty){
    return faculty.title;
})
    
rows.append("td")
    .text(function(faculty){
    return faculty.unit;
})
    
rows.append("td")
    .text(function(faculty){
    return faculty.bio;
})
    
rows.append("td")
    .text(function(faculty){
    return faculty.phone;
})
    
rows.append("td")
    .text(function(faculty){
    return faculty.email;
})
}


var failureFCN = function(employee)
{
    console.log("Something went wrong", employee);
}
employeedata.then(successFCN,failureFCN);