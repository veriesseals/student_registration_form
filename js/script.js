// Next Step
// -----------------------------------------------------
function nextStep(step) {
    document.querySelector(`.step-${step}`).style.display = 'none';
    document.querySelector(`.step-${step + 1}`).style.display = 'block';
}


// Next Step
// -----------------------------------------------------
function prevStep(step) {
    document.querySelector(`.step-${step}`).style.display = 'none';
    document.querySelector(`.step-${step + 1}`).style.display = 'block';
}

// Get Element by ID with addEventListener and async function
// -----------------------------------------------------
document.getElementById('registrationForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    // Create Varible to collect student data from end user
    // ---------------------------------------
    const studentData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        grade: document.getElementById('grade').value,
        school: document.getElementById('school').value,
    };
    
    // Create variable to POST to API 
    // ---------------------------------------
    const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(studentData),
    });
    
    // Create variable to Respond and return result from API 
    // ---------------------------------------
    const result = await response.json();
    document.getElementById('responseMessage').innerText = result.message;
});