onmessage = function(e) {
  console.log("Message receive from the main script");
  var workerResult = "Result: " + (e.data[0] * e.data[1]);
  console.log("Posting message back to the main script");
  postMessage(workerResult);
}
