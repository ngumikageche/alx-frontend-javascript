export default function getListStudentIds(students) {
  // Check if the input is an array
  if (!Array.isArray(students)) {
    return [];
  }
  // Use the map function to extract the 'id' property from each object
  const studentIds = students.map((student) => {
    // Check if each element in the array is an object with an 'id' property
    if (typeof student === 'object' && student !== null && 'id' in student) {
      return student.id;
    }
    // If an element doesn't have 'id' property, return undefined
    return undefined;
  });
    // Filter out undefined values (non-object elements or objects without 'id' property)
  return studentIds.filter((id) => id !== undefined);
}
