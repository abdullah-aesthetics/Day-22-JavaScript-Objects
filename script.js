// ==================================================
// Student Course Dataset - Objects & Nested Data
// Day 22 - JavaScript Objects
// ==================================================


// ---------- 1. CREATE THE DATASET ----------
// An object stores related information as key: value pairs.
// Each student is an object, and the "course" property holds another object inside it (nested object).
const students = [
    {
        name: "Ayesha",
        studentId: 101,
        age: 20,
        marks: 88,
        course: { courseName: "Web Development", instructor: "Dr. Imran", durationMonths: 6 },
        contact: { email: "ayesha@example.com", city: "Lahore" }
    },
    {
        name: "Bilal",
        studentId: 102,
        age: 21,
        marks: 65,
        course: { courseName: "Cyber Security", instructor: "Ms. Nadia", durationMonths: 8 }
        // Bilal has no contact object, we will see how to handle that safely later
    },
    {
        name: "Sara",
        studentId: 103,
        age: 19,
        marks: 92,
        course: { courseName: "Web Development", instructor: "Dr. Imran", durationMonths: 6 },
        contact: { email: "sara@example.com", city: "Karachi" }
    },
    {
        name: "Usman",
        studentId: 104,
        age: 22,
        marks: 54,
        course: { courseName: "Database Systems", instructor: "Mr. Farhan", durationMonths: 4 }
    },
    {
        name: "Hina",
        studentId: 105,
        age: 20,
        marks: 76,
        course: { courseName: "Cyber Security", instructor: "Ms. Nadia", durationMonths: 8 },
        contact: { email: "hina@example.com", city: "Islamabad" }
    },
    {
        name: "Daniyal",
        studentId: 106,
        age: 23,
        marks: 70,
        course: { courseName: "Database Systems", instructor: "Mr. Farhan", durationMonths: 4 }
    }
];


// ---------- 2. DISPLAY RECORDS AND ACCESS PROPERTIES ----------
console.log("===== 2. Student Records =====");

// One full record (in the browser console you can expand it to see the nested object)
console.log("First record:", students[0]);

// Loop through every record and show some of its properties
students.forEach((student) => {
    console.log(student.studentId + " | " + student.name + " | Age " + student.age + " | Marks " + student.marks);
});

// Dot notation: object.property
const firstStudent = students[0];
console.log("Dot notation  - name:", firstStudent.name);

// Bracket notation: object["property"] (useful when the property name is stored in a variable)
console.log("Bracket notation - studentId:", firstStudent["studentId"]);

const propertyToRead = "age";
console.log("Bracket with a variable - " + propertyToRead + ":", firstStudent[propertyToRead]);


// ---------- 3. NESTED OBJECTS ----------
console.log("===== 3. Nested Course Information =====");

// Use a dot for each level: student.course.courseName
console.log("Ayesha's course:", students[0].course.courseName);
console.log("Ayesha's instructor:", students[0].course.instructor);

students.forEach((student) => {
    console.log(
        student.name + " studies " + student.course.courseName +
        " with " + student.course.instructor +
        " (" + student.course.durationMonths + " months)"
    );
});

// Safe access: some students have no contact object.
// student.contact.email would crash for them, but student.contact?.email just gives undefined
console.log("Contact emails (safe access with ?.):");
students.forEach((student) => {
    const email = student.contact?.email;

    if (email) {
        console.log(student.name + ": " + email);
    } else {
        console.log(student.name + ": no contact information");
    }
});


// ---------- 4. FIND A SPECIFIC STUDENT ----------
console.log("===== 4. Finding Students =====");

// find() returns the first student that matches the condition
const studentWithId103 = students.find((student) => student.studentId === 103);
console.log("Student with ID 103:", studentWithId103.name, "-", studentWithId103.course.courseName);

// filter() returns every student that matches the condition
const cyberSecurityStudents = students.filter((student) => student.course.courseName === "Cyber Security");
console.log("Cyber Security students:", cyberSecurityStudents.map((student) => student.name));


// ---------- 5. ADD, UPDATE AND DELETE PROPERTIES ----------
console.log("===== 5. Updating Records =====");

// Update 1: change Bilal's marks (a normal property)
console.log("Bilal's marks before:", students[1].marks);
students[1].marks = 72;
console.log("Bilal's marks after:", students[1].marks);

// Update 2: change Usman's instructor (a property inside the nested object)
console.log("Usman's instructor before:", students[3].course.instructor);
students[3].course.instructor = "Dr. Zubair";
console.log("Usman's instructor after:", students[3].course.instructor);

// Add a new property
students[0].hasScholarship = true;
console.log("Added property to Ayesha:", students[0].hasScholarship);

// Delete a property
delete students[0].hasScholarship;
console.log("After delete, hasScholarship is:", students[0].hasScholarship);   // undefined means it no longer exists


// ---------- 6. SUMMARY METRICS ----------
console.log("===== 6. Summary =====");

let totalMarks = 0;
let highestMarks = students[0].marks;
let topStudentName = students[0].name;

// One pass through the array calculates everything
students.forEach((student) => {
    totalMarks += student.marks;

    if (student.marks > highestMarks) {
        highestMarks = student.marks;
        topStudentName = student.name;
    }
});

const averageMarks = totalMarks / students.length;

console.log("Total number of students:", students.length);
console.log("Average marks:", averageMarks.toFixed(2));
console.log("Highest marks:", highestMarks, "(" + topStudentName + ")");
