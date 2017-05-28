// 1 = COMPETING
// 2 = COLLABORATING
// 3 = COMPROMISING
// 4 = AVOIDING
// 5 = ACCOMMODATING

var type_dict = {'1A':4, '1B': 5, '2A': 3, '2B': 2, '3A': 1, '3B': 4, '4A': 3, '4B': 5, 
	'5A': 2, '5B': 4, '6A': 4, '6B': 1, '7A': 4, '7B': 3, '8A': 1, '8B': 2, '9A': 4, '9B': 1, '10A': 1, 
	'10B': 3, '11A': 2, '11B': 5, '12A': 4, '12B': 3, '13A': 3, '13B': 1, '14A': 2, '14B': 1, '15A': 5, '15B': 4,
	'16A': 5, '16B': 1, '17A': 1, '17B': 4, '18A': 5, '18B': 3, '19A': 2, '19B': 4, '20A': 2, '20B': 4, '21A': 5, 
	'21B': 2, '22A': 3, '22B': 1, '23A': 2, '23B': 4, '24A': 5, '24B': 3, '25A': 1, '25B': 1, '26A': 3, '26B': 2, 
	'27A': 4, '27B': 5, '28A': 1, '28B': 2, '29A': 3, '29B': 4, '30A': 5, '30B': 2 };

var A_array = ['There are times when I let others take responsibility for solving the problem.', ' I try to find a compromise solution.', 
		'I am usually firm in pursuing my goals.', 'I try to find a compromise solution.', 
		'I consistently seek the other\'s help in working out a solution.', 'I try to avoid creating unpleasantness for myself.', 
		'I try to postpone the issue until I have had some time to think about it.', 'I am usually firm in pursuing my goals.', 
		'I feel that differences are not always worrying about.', 'I am firm in pursuing my goals.', 
		'I attempt to get all concerns and issues immediately out in the open.',
		'I sometimes avoid taking positions which would create controversy.', 
		'I propose middle ground.',
		'I tell another my ideas and ask them for theirs.',
		'I might try to soothe the other\'s feelings and preserve our relationship.',
		'I try not to hurt the other\'s feelings.',
		'I am usually firm in pursuing my goals.',
		'If it makes the other person happy, I might let them maintain their views.',
		'I try to get all concerns and issues immediately out in the open.',
		'I attempt to immediately work through our differences.',
		'In approaching negotiations, I try to be considerate of the other person\'s feelings.',
		'I try to find a position that is intermediate between mine and another person\'s.',
		'I am often concerned with satisfying all my wishes.',
		'If the other\'s position seems important to them, I would try to meet their wishes',
		'I try to show the other person the logic and benefits of my position.',
		'I propose a middle ground.',
		'I sometimes avoid taking positions that would create controversy.',
		'I am usually firm in pursuing my goals.',
		'I propose middle ground.',
		'I try not to hurt the other person\'s feelings.'];

var B_array = [' Rather than negotiate the things on which we disagree, I try to stress those things upon which we both agree.', 'I attempt to deal with all of another\'s and my concerns.', 'I might try to soothe the other\'s feelings and preserve our relationship.', 'I sometimes sacrifice my own wishes for the wishes of the other person.', 
		'I try to do what is necessary to avoid useless tensions.', 'I try to win my position.', ' I give up some points in exchange for others.', 'I attempt to get all concerns and issues immediately out in the open.', 
		'I make some effort to get my way.','I try to find a compromise solution.', 'I might try to soothe the other\'s feelings and preserve our relationship.',
		'I will let another have some of their positions if they let me have some of mine.',
		'I press to get my points made.',
		'I try to show them the logic and benefits of my position.',
		'I try to do what is necessary to avoid tension.',
		'I try to convince the other person of the merits of my position.',
		'I try to do what is necessary to avoid useless tensions.',
		'I will let the other person have some of their positions if they let me have some of mine.',
		' I try to postpone the issue until I have had some time to think it over.',
		'I try to find a fair combination of gains and losses for both of us.',
		'I always lean toward a direct discussion of the problem.',
		'I assert my wishes.',
		'There are times when I let others take responsibility for solving problems.',
		'I try to get the other person to settle for a compromise.',
		'In approaching negotiations, I try to be considerate of the other person\'s wishes.',
		'I am nearly always concerned with satisfying all my wishes.',
		'If it makes the other person happy, I might let them maintain their views.',
		'I feel that differences are not always worth worrying about.',
		'I feel that differences are not always worth worrying about.',
		'I always share the problem with the other person so that we can work it out.' ];

// we get the index from the type_dictionary then i++

var score_array = [0, 0, 0, 0, 0, 0];


main();



function main() {
	setFormContainers();
	var labels = $(".form-check-label").map(function() {
		return this;
	}).get();
	renderInputButtons(labels);

	// count up for each category
    $(document).ready(function(){
		$("input[type='submit']").click(function(){
			score_array = [0, 0, 0, 0, 0, 0];
			$(':radio:checked').each(function(){
				console.log($(this).attr('id'));
				console.log('type_dict[$(this).attr(id)]: ', type_dict[$(this).attr('id')]);
			   score_array[type_dict[$(this).attr('id')]] += 1;
			});
			console.log(score_array);
			displayResults();


	    });
	});
}

function displayResults() {
	var results = $(".col-md-15").map(function() {
		return this;
	}).get();
	for (var i = 0; i < results.length; i++) {
		$(results[i]).append("<p class='r'>" + score_array[i+1].toString());
	}
}

function renderInputButtons(labels) {
	b_array_counter = 0;
	a_array_counter = 0;
	for (let i = 0; i < A_array.length + B_array.length; ++i) { 
		if (i % 2 == 0) {
			id = (a_array_counter+1).toString() + 'A';
			var inner = A_array[a_array_counter];
			a_array_counter += 1;
		} else {
			id = (b_array_counter+1).toString() + 'B';
			var inner = B_array[b_array_counter];
			b_array_counter += 1;
		}
		var $newinput = $( '<input type="radio" class="form-check-input" unchecked></input>')
		$newinput.attr('name',i);
		$newinput.attr('id',id);
		console.log(id);
		$(labels[i]).append($newinput);
		$(labels[i]).append("    " + inner)
	}
}

// https://stackoverflow.com/questions/10876953/how-to-make-a-radio-button-unchecked-by-clicking-it
// brilliant code for unchecking options buttons 
$(document).on("click", "input", function(){
	thisRadio = $(this);
	if (thisRadio.hasClass("imChecked")) {
		thisRadio.removeClass("imChecked");
		thisRadio.prop('checked', false);
		score_array[type_dict[$(thisRadio).attr('id')]] -= 1;
	} else { 
		thisRadio.prop('checked', true);
		thisRadio.addClass("imChecked");
	};
})

/* creates all divs for all the options and the labels within those divs  */
function setFormContainers() {
	// add header row
	// var $headerrow = $( ' <div class="row"> 
	// 		<div class="col-xs-6 form-check">option A</div>
	// 		<div class="col-xs-6 form-check">option B</div>
	// 	</div> ');
	// $(".container").append($headerrow);
	//$(".container").append('<div class="row"><div class="col-xs-6 form-check header">option 1</div><div class="col-xs-6 form-check header">option 2</div></div>')

	for (var i = 0; i < A_array.length; i++) {
		// create rows for 2 choices
		var $row = $( '<div class="row"></div>')
		$(".container").append($row)
	}

	// add 2 cols to each row
	var $opt1 = $( '<div class="col-xs-6 form-check"></div>');
	$('.row').append($opt1);
	$('.row').append($opt1);

	// add labels to each col
	$('.col-xs-6').append('<label class="form-check-label"></label>')	

}