function saveEmployeeDetails(event) {
    event.preventDefault(); 

    const empId = document.getElementById("empId").value;
    const empName = document.getElementById("empName").value;
    const empAge = document.getElementById("empAge").value;
    const empSalary = document.getElementById("empSalary").value;

    const formData = new URLSearchParams();
    formData.append("id", empId);
    formData.append("name", empName);
    formData.append("age", empAge);
    formData.append("salary", empSalary);

    fetch("http://localhost:8080/Employee_Management/employee", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData.toString()
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("responseText").innerText = data;
        document.getElementById("responseText").style.color = "green";
    })
    .catch(error => {
        document.getElementById("responseText").innerText = "Error: " + error;
        document.getElementById("responseText").style.color = "red";
    });
}
