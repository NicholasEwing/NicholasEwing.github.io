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
		$(this).css('background-color', '#' + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10));
	});	
}

function resetGrid() {
	$('.box').remove();
	var input = prompt("How many squares do you want on the edges of the grid?");
	createGrid(input);
	$('.box').mouseenter(function() {
		$(this).addClass('active');
	});
}

function clearGrid() {
	$('.box').removeClass('active');
}

$(document).ready(function() {
	createGrid(16);

	$('.box').mouseenter(function() {
		$(this).addClass('active');
	});

	/* I got stuck on the "reset" part. I thought there
	was a more intricate way to turn the addClass feature
	back on after running resetGrid. Turns out I can just
	put the mouseenter function back inside.

	I thought a bit too hard about it since I wanted to try
	and avoid repeating any code, but at least I learned something.
	*/

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