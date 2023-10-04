export default function getStudentIdsSum(students) {
    // function that performs addition of the arrays passed
    let total = (a,b) => {
        return a + b;
    }
    // function that returns all the ids only
    function getStudentIds() {
        // Use the map function to extract the 'id' property from each student
        const studentIds = students.map(student => student.id);

        return studentIds;
    };
    const myids = getStudentIds();
    return (myids.reduce(total));
    

}