var katzDeliLine = [];
function takeANumber (katzDeliLine, personname) {
  katzDeliLine.push(personname);
  return `Welcome, ${personname}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing (katzDeliLine) {
  var removedname;
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
     removedname = katzDeliLine[0];
     katzDeliLine.shift();
     return `Currently serving ${removedname}.`;
}
}

function currentLine(line) { 
  if (line.length === 0) {
    return "The line is currently empty.";
  } 
  var numbersAndNames = [];
  for (let i = 0; i < line.length; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`);
  } 
  return `The line is currently: ${numbersAndNames.join(', ')}`;
  }
