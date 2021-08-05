const fs = require("fs");
const yieldableJson = require("yieldable-json");

console.log("Running Demo . . .");
runAsyncJsonDemo();

// Main function.
function runAsyncJsonDemo()
{
	coordinateDemo(function (overallErr)
	{
		if (overallErr !== null)
		{
			displayResult(overallErr.message);
		}
		else
		{
			displayResult("Complete");
		}
	});
}


// Read input JSON file.
function coordinateDemo(coordCallback)
{
	console.log("Reading");
	
	fs.readFile("./input.json", "utf8", function (readErr, rawInputText)
	{
		if (readErr !== null)
		{
			// Error reading file.
			return coordCallback(readErr);
		}
		else
		{
			// Successful - Parse raw text.
			callJsonParse(rawInputText, coordCallback);
		}
	});
}

// Parse input JSON.
function callJsonParse(rawTxt, parseCallback)
{
	var parseMsg = "";
	
	yieldableJson.parseAsync(rawTxt, function (parseErr, parsedJsonObject)
	{
		if (parseErr !== null)
		{
			// JSON parse error.
			parseMsg = writeJsonErrorText("parsing", parseErr.message);
			return parseCallback(new Error(parseMsg));
		}
		else
		{
			// Successful - Process object.
			handleProcessing(parsedJsonObject, parseCallback);
		}
	});
}


function handleProcessing(parsedObject, processCallback)
{
	console.log("Processing");
	
	// JSON processing goes here.
	
	var waitMs = chooseDelayLength();
	
	// Random delay.
	setTimeout(function()
	{
		// Processing complete.
		callJsonStringify(parsedObject, processCallback);
	}, waitMs);
}


// Stringify JSON object.
function callJsonStringify(parsedObj, stringCallback)
{
	var stringifyMsg = "";
	
	console.log("Saving");
	
	yieldableJson.stringifyAsync(parsedObj, null, 4, 1,
	function (stringErr, definitionText)
	{
		if (stringErr !== null)
		{
			// JSON stringify error.
			stringifyMsg = writeJsonErrorText("stringifying", stringErr.message);
			return stringCallback(new Error(stringifyMsg));
		}
		else
		{
			// Successful - Save output file.
			callOutputSave(definitionText, stringCallback);
		}
	});
}


// Write output JSON file.
function callOutputSave(defTxt, saveCallback)
{
	fs.writeFile("./output.json", defTxt, function (saveErr)
	{
		// Finished.
		return saveCallback(saveErr);
	});
}


// Displays result message.
function displayResult(resMsg)
{
	console.log("");
	console.log(resMsg);
}


// Random processing delay length in milliseconds.
function chooseDelayLength()
{
	var minDelay = 1000;
	var maxDelay = 5000;
	var diffAmount = maxDelay - minDelay;
	var randSeed = Math.random() * diffAmount;
	var delayRes = Math.round(minDelay + diffAmount);
	
	return delayRes;
}


// Yieldable JSON error text.
function writeJsonErrorText(vAction, vMsg)
{
	var writeRes = "";
	
	writeRes += "Error ";
	writeRes += vAction;
	writeRes += " JSON - ";
	writeRes += vMsg;
	
	return writeRes;
}