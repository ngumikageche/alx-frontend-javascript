export default function getFullResponseFromAPI(success){
  return new Promise((resolve, reject) => {
    if (success === true) {
		// Resolve the Promise a success object
		resolve({ status: 200, body: 'Success'});
	} else {
        reject(new Error('The fake API is not working currently'));
		}
  });
}
