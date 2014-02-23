// For every row that is for an athlete from the specified schools
// in config.js, color it blue.
$("td.team a").each(function() {
    var school_name = $(this).html().toLowerCase();
    
    if (schools.indexOf(school_name) != -1) {
        var row = $(this).parent().parent();
        // set background color of each td in the row
        row.find("td").each(function() {
            $(this).css("background", "#000088");
            $(this).css("color", "white");
            $(this).find("a").css("color", "white");
        });
    }
});
