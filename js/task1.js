var employeedata = d3.json("../employee.json")

var successFCN = function(employee)
{
    console.log("Data retrieved", employee);
}

var failureFCN = function(employee)
{
    console.log("Something went wrong", employee);
}

employeedata.then(successFCN,failureFCN);