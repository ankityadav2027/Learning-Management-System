// Sample course data
const courses = [
    { id: 1, name: 'Course 1', description: 'Description of Course 1' },
    { id: 2, name: 'Course 2', description: 'Description of Course 2' },
    { id: 3, name: 'Course 3', description: 'Description of Course 3' },
];

// Function to display courses
function displayCourses() {
    const courseList = document.getElementById('course-list');
    courses.forEach(course => {
        const courseItem = document.createElement('li');
        courseItem.innerHTML = `<h3>${course.name}</h3><p>${course.description}</p>`;
        courseList.appendChild(courseItem);
    });
}

// Call the function to display courses on page load
window.onload = displayCourses;
