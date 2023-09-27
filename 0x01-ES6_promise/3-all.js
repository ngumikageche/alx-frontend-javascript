import {uploadPhoto, createUser} from "./utils.js";
export default function handleProfileSignup() {
	// create and array of promises using the provides functions
	const promises = [uploadPhoto(), createUser()];

	//Use Promise.all to collectively resolve all promises
	Promise.all(promises)
	.then(results => {
	// 'results' is an array of resolved values
	// The first result is from uploadPhoto, and the second is from createUser
	const photoResult = results[0];
    const userResult = results[1];

    // Log the relevant data to the console
    console.log(`Uploaded Photo: ${photoResult.body}`);
    console.log(`First Name: ${userResult.firstName}, Last Name: ${userResult.lastName}`);
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });
}
