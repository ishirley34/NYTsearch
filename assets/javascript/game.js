//Form to search by event name
	//insert search parameters into url : fq?= + subject
	//var searchTerm
//# of articles returned
	// drop down menu for 1, 5, 10
//optional start date
	//
//optional end date
//search button
	//called #
//clear terms button
//articles displayed at bottom
//   
// var searchTerm = $("#searchInput").val();
// var recordsNumber = $("#recordsInput").val();
// var startYear = $("#startInput").val();
// var endYear = $("#endInput").val();
var searchTerm = "Obama Inauguration";
var startYear = 20080101;
var endYear = 20090101;

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "4aff35029d08433f8db89c39afe46f08",
  'fq': searchTerm,
  'begin_date': startYear,
  'end_date': endYear,
  'page': recordsInput
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});



$("#searchInput").on("click", function {
	
})