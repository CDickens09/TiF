function Convert(input)
{
	// Brings in current output from question output box
	var value = document.getElementById(input.id).value
	if (input.id.search("Q") == -1)
	{
		var output = "AConverted";
	}
	else 
	{
		var output = "QConverted";
	}
	while (value.search("random") !== -1)
	{
		// Finds index for random value identifier
		var index = value.search("random");
		// Brings in accuracy for random variables
		var acc = document.getElementById("RandomAccuracy").value;
		// Creates new string with random variable added
		value = value.substr(0, index) + Math.random().toFixed(acc) + value.substr(index + 6);
		document.getElementById(output).innerHTML = value;
	}
}