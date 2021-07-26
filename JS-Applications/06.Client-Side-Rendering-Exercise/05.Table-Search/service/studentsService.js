
async function getAllStudents() {
    let studentsResponse = await fetch('http://localhost:3030/jsonstore/advanced/table');
    let studentsObj = await studentsResponse.json();
    return studentsObj;
}

export { getAllStudents };