var appState = Alloy.Models.appState;

function generateRandomColor() {
	var c =(Math.floor(Math.random()*255))*256*256 + 
	       (Math.floor(Math.random()*255))*256 + 
	       (Math.floor(Math.random()*255));
	c = c.toString(16);
	while (c.length < 6) {
		c = '0' + c;
	}
	return '#' + c;
}

// Update the model's counter and color, which in turn
// updates the UI via model binding
function updateState() {
	appState.set({
		counter: appState.get('counter')+1,
		color: generateRandomColor()
	});
}

// Simulate a change in our model to trigger UI binding.
// Remember, don't use fetch() when using a model with
// no persistence, it will generate an error.
appState.trigger('change');

$.index.open();

