function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $(".container").append("<div class='box'></div>");
        };
    };
    $(".box").width(800/x);
    $(".box").height(800/x);
}

function randomGrid() {
	resetGrid();
	$('.box').mouseenter(function() {
		var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
		$(this).css('background-color', randomColor);
	});	
}

function resetGrid() {
	$('.box').remove();
	var input = prompt("How many squares do you want on the edges of the grid?");
	createGrid(input);
	$('.box').mouseenter(function() {
		$(this).css('background-color', "black");
	});
}

function clearGrid() {
	$('.box').css('background-color', "white");
}

$(document).ready(function() {
	createGrid(16);

	$('.box').mouseenter(function() {
		$(this).css('background-color', "black");
	});

	$('.reset-grid').click(function() {
		resetGrid();
	});

	$('.clear-grid').click(function() {
		clearGrid();
	});

	$('.random-grid').click(function() {
		randomGrid();
	});	

});