// Logging in script
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
        if (event.target.classList.contains('bx-trash')) {
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

// Edit popup
document.addEventListener("DOMContentLoaded", function() {
    const table = document.querySelector('table');
    const rows = table.rows;
    const editButtons = document.querySelectorAll('.edit');

    editButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            openPopup(index);
        });
    });

function openPopup(index) {
    const popup = document.querySelector('.payment--content');
    popup.style.display = 'block';

    const row = table.rows[index + 1]; // Add 1 to skip the header row
    const cells = row.cells;
    const cardNoInput = document.querySelector('#cardno');
    const validTillInput = document.querySelector('#validtill');
    const cvvInput = document.querySelector('#cvv');

    cardNoInput.value = cells[0].innerText;
    validTillInput.value = cells[1].innerText;
    cvvInput.value = cells[2].innerText;

    const saveButton = document.querySelector('.btns');
    saveButton.addEventListener('click', saveChanges);

    function saveChanges(event) {
        event.preventDefault(); // Prevent page reload

        cells[0].innerText = cardNoInput.value;
        cells[1].innerText = validTillInput.value;
        cells[2].innerText = cvvInput.value;

        popup.style.display = 'none';
        saveButton.removeEventListener('click', saveChanges);
    }
}
});


// Add a Course

// JavaScript code to handle the popup and form submission

function getRandomClass() {
    var classes = ['night-fade', 'purple-paradise', 'sharpeye-eagle', 'kye-meh'];
    var randomIndex = Math.floor(Math.random() * classes.length);
    return classes[randomIndex];
}

// Function to open the popup
function openAdd() {
    var popup = document.getElementById("addcourse");
    popup.style.display = "block";
}

// Function to close the popup
function closeAdd() {
    var popup = document.getElementById("addcourse");
    popup.style.display = "none";
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve form inputs
    var courseName = document.getElementById("cardno").value;
    var courseCode = document.getElementById("validtill").value;
    var facultyName = document.getElementById("cvv").value;
    var saveChanges = document.getElementById("checkbox").checked;

    // Do something with the form data, like creating a new course card
    if (saveChanges) {
        createCourseCard(courseName, courseCode, facultyName);
    }

    // Close the popup after submission
    closeAdd();
}

// Function to create a new course card
function createCourseCard(name, code, fee) {
    // Create new elements
    var cardWrapper = document.querySelector(".card--wrapper");
    var newCard = document.createElement("div");
    var gradientClasses = ['night-fade', 'purple-paradise', 'sharpeye-eagle', 'kye-meh'];
    var randomIndex = Math.floor(Math.random() * gradientClasses.length);
    
    newCard.className = "course--card " + gradientClasses[randomIndex];

    var cardHeader = document.createElement("div");
    cardHeader.className = "card--header";

    var amountDiv = document.createElement("div");
    amountDiv.className = "amount";

    var courseTitle = document.createElement("span");
    courseTitle.className = "title";
    courseTitle.textContent = code;

    var amountValue = document.createElement("span");
    amountValue.className = "amount-value";
    amountValue.textContent = "₹" + fee;

    var icon = document.createElement("i");
    icon.className = "bx bxs-book-open bx-border-circle icon";

    var courseDetail = document.createElement("span");
    courseDetail.className = "course-detail";
    courseDetail.textContent = name;

    // Append elements to the card
    amountDiv.appendChild(courseTitle);
    amountDiv.appendChild(amountValue);
    cardHeader.appendChild(amountDiv);
    cardHeader.appendChild(icon);
    newCard.appendChild(cardHeader);
    newCard.appendChild(courseDetail);
    cardWrapper.appendChild(newCard);
}


// Event listener for the form submission
document.querySelector("form").addEventListener("submit", submitForm);
