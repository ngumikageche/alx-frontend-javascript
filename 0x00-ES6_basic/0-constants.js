// func to instatiate variables using const
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// func to get last string
export function getLast() {
  return ' is okay';
}
// func to instatiate variables using let
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}
