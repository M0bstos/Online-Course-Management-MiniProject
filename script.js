// Logging in script
// Redirects user to the correct Dashboard based on Username and Password
document.addEventListener("DOMContentLoaded", function() {
    var loginButton = document.querySelector(".btn"); 
    loginButton.addEventListener("click", function(event) {
        event.preventDefault(); 

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (username === "admin" && password === "admin") {
            window.location.href = "admin.html";
        } else {
            window.location.href = "user.html";
        }
    });
});

// Deleting a course
document.addEventListener("DOMContentLoaded", function() {
    var tableContainer = document.querySelector('.table-container');

    function handleDeleteButtonClick(event) {
        if (event.target.classList.contains('btn')) {
            var row = event.target.closest('tr');
            row.remove();
            showSuccessMessage();
        }
    }

    // Add event listener to the table container for delete button clicks
    tableContainer.addEventListener('click', handleDeleteButtonClick);

    function showSuccessMessage() {
        var message = document.createElement("div");
        message.textContent = "Course deleted successfully";
        message.classList.add("success-message");

        document.body.appendChild(message);
        setTimeout(function() {
            message.remove();
        }, 4000);
    }
});


// Adding a course
document.addEventListener("DOMContentLoaded", function() {
    var courseCards = document.querySelectorAll(".course--card");

    courseCards.forEach(function(card) {
        card.addEventListener("click", function() {
            var courseTitle = card.querySelector(".course-detail").textContent;
            var courseCode = card.querySelector(".title").textContent;
            var faculty = "TBA"; 
            var dateRegistered = getCurrentDate(); 

            localStorage.setItem("selectedCourseTitle", courseTitle);
            localStorage.setItem("selectedCourseCode", courseCode);
            localStorage.setItem("selectedFaculty", faculty);
            localStorage.setItem("selectedDateRegistered", dateRegistered);

            window.location.href = "user.html";
        });
    });
});

function getCurrentDate() {
    var currentDate = new Date();
    var day = String(currentDate.getDate()).padStart(2, '0');
    var month = String(currentDate.getMonth() + 1).padStart(2, '0');
    var year = currentDate.getFullYear();
    return day + '-' + month + '-' + year;
}

// JavaScript for updating table

document.addEventListener("DOMContentLoaded", function() {
    var courseTitle = localStorage.getItem("selectedCourseTitle");
    var courseCode = localStorage.getItem("selectedCourseCode");
    var faculty = localStorage.getItem("selectedFaculty");
    var dateRegistered = localStorage.getItem("selectedDateRegistered");

    if (courseTitle && courseCode && faculty && dateRegistered) {
        var newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${courseTitle}</td>
            <td>${courseCode}</td>
            <td>${faculty}</td>
            <td>${dateRegistered}</td>
            <td>Pending</td>
            <td><button><i class='bx bx-trash btn icon' ></button></td>
        `;

        var tableBody = document.querySelector(".table-container tbody");
        tableBody.appendChild(newRow);

        localStorage.removeItem("selectedCourseTitle");
        localStorage.removeItem("selectedCourseCode");
        localStorage.removeItem("selectedFaculty");
        localStorage.removeItem("selectedDateRegistered");
    }
});
