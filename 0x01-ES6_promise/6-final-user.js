import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
	// Call the provided functions with the given arguments
  	const photoPromise = uploadPhoto(fileName);
  	const userPromise = signUpUser(firstName, lastName);
	
	// create and array of promises using the provides functions
	const promises = [photoPromise, userPromise];
	
	//Use promise,allsetted to collectively handle all promises
	return Promise.allSettled(promises)
		.then(result => {
		// Transform results into the desired format
		return result.map(result => ({
			status: result.status,
			value: result.status === 'fullfilled' ? result.value : result.reason,
		}));
		});

}
