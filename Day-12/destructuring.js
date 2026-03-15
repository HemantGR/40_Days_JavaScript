console.log("Learn Object Destructring");

const student = {
    'name': 'John Williamson',
    'age': 9,
    'std': 3,
    'subjects': ['Maths', 'English', 'EVS'],
    'parents': {
      'father': 'Brown Williamson',
      'mother': 'Sophia',
      'email': 'john-parents@abcde.com'
    },
    'address': {
      'street': '65/2, brooklyn road',
      'city': 'Carterton',
      'country': 'New Zealand',
      'zip': 5791
    }
};

const {name, age, meal="Breakfast"} = student;
console.log(name, age, meal);

const {subjects, numberOfSubjects = subjects.length} = student;
console.log(numberOfSubjects); // 3

const {std: standard} = student;
console.log(standard)

const {address: {zip}} = student;
console.log(zip);

function sendEmail ({parents: {email}}){
    console.log(`Email sent to ${email}`);
}

sendEmail(student);

const students = [
    {
        'name': 'William',
        'grade': 'A'
    },
    {
        'name': 'Tom',
        'grade': 'A+'
    },
    {
        'name': 'Bob',
        'grade': 'B'
    }
];

for ( let {name, grade} of students) {
    console.log(name, grade)
}   