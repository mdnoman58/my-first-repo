/*const courses = [
    { id: '1', title: 'HTML Basics', description: 'Learn the basics of HTML.' },
    { id: '2', title: 'CSS Essentials', description: 'Master CSS for web design.' },
    { id: '3', title: 'JavaScript 101', description: 'Understand the fundamentals of JavaScript.' }

    
  ];
  
  const courseList = document.getElementById('course-list');
  const courseDetail = document.getElementById('course-detail');
  
  function showCourseList() {
    courseList.innerHTML = '';
    courseDetail.style.display = 'none';
    courseList.style.display = 'block';
  
    courses.forEach(course => {
      const courseItem = document.createElement('div');
      courseItem.className = 'course-item';
      courseItem.innerHTML = `
        <div class="course-title">${course.title}</div>
        <div class="course-description">${course.description}</div>
      `;
      courseItem.onclick = () => showCourseDetail(course);
      courseList.appendChild(courseItem);
    });
  }
  
  function showCourseDetail(course) {
    courseList.style.display = 'none';
    courseDetail.style.display = 'block';
    courseDetail.innerHTML = `
      <div class="course-detail">
        <div class="course-detail-title">${course.title}</div>
        <div class="course-detail-description">${course.description}</div>
        <button class="back-button" onclick="showCourseList()">Back to Courses</button>
      </div>
    `;
  }
  
  showCourseList();

  function joinGroup(groupName) {
    alert('You have joined the ' + groupName + ' group!');
}

function RSVPEvent(eventName) {
    alert('You have RSVP\'d for the ' + eventName + '!');
}*/
