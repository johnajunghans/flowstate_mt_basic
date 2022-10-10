const mathSubjects = [
    "K-5 Math",
    "6-7 Math",
    "Pre-Algebra",
    "Algebra 1",
    "Geometry",
    "Algebra 2",
    "Trigonometry",
    "Precalculus",
    "Calculus",
    "AB/BC Calc",
    "AP/IB Calc",
    "Statistics"
];

const scienceSubjects = [
    "K-5 Science",
    "6-8 Science",
    "Biology",
    "Chemistry",
    "AP/IB Biology",
    "AP/IB Chemistry"
]

const mentorship = [
    "Calendar/Planner Use",
    "Effective Goal Setting",
    "Positive Habit Formation",
    "Test Taking Strategies",
    "Overcoming Test Anxiety",
    "Mindfulness Techniques"
]

// function gridCol(data){
//     let columns = Math.floor(Math.sqrt(data.length));
//     let varGridColumns = `grid-template-columns: repeat(${columns}, 1fr)` 
//     return varGridColumns;
// }

function gridMap(data, id){
    let gridContainer = document.querySelector(`#${id}`);
    // let varGridColumns = gridCol(data);
    // console.log(varGridColumns);
    // gridContainer.setAttribute('style', `${varGridColumns}`);
    data.map(subject => {
        let subjectWrapper = document.createElement('div');
        subjectWrapper.setAttribute('class', 'subject-wrapper');
        let image = document.createElement('img');
        image.setAttribute('src', '../icons/check.svg');
        image.setAttribute('alt', 'checkmark');
        let subjectName = document.createElement('h3');
        subjectName.setAttribute('class', 'subject-name');
        subjectName.innerText = `${subject}`;
        subjectWrapper.append(image);
        subjectWrapper.append(subjectName);
        gridContainer.append(subjectWrapper);
    })
}

gridMap(mathSubjects, "math");
gridMap(scienceSubjects, "science");
gridMap(mentorship, "mentorship");


