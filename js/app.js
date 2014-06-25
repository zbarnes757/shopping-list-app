$(document).ready(function  () {
	//Quick test
	console.log("Hello World");

	/*Allows an "Enter" keystroke to work as a submit button for input field*/
	function getItem() {
        $('#add-items').keydown(function (enter) {
            if (enter.keyCode == 13) {
                postItem();
            }
        });
    }

    getItem();

    function postItem () {
    	var item = $("#add-items").val();
    	var work = '<li class="item">' + item + '</li>';
    	$("#to-get > ul").prepend(work);
    	$("#add-items").val('');
    	$('#to-get li:first-child')
        .css('opacity', "0")
        .css("margin-top", "-20px")
        .animate(
            { opacity: "1" },
            { queue: true, duration: 'slow' }
        )
        .animate(
            {marginTop: "0px"},
            { queue: false, duration: 'slow' }
        );
    }

    $(document).on('dblclick', '.item', function () {
		console.log("Double click");
		$(this).closest('li').fadeOut(300);
    })
    .on('click', '.item', function () {
    	$(this).closest('li').toggleClass('got');
    });


});