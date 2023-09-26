export default function returmHowManyArguments (...args) {
	let count = 0
	for (let i in args)
	{
		count = count + 1;
	}
	return (count);

}
