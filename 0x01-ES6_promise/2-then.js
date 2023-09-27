export default function handleResponseFromAPI(promise){
	return new Promise((resolve, reject) => {
		if (promise === true) {
		// Resolve the Promise a success obj
		resolve({ status: 200, body: 'Success'});
		} else {
      	console.error('Got a response from the API'); // Log when rejected
		}
	});
}
