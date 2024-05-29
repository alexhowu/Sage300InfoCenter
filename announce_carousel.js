
$(document).ready(function () {
    const online = window.navigator.onLine;
    if (online) {
        $("#announcements_carousel").show();
        $("#offline_carousel").hide();
    } else {
        $("#announcements_carousel").hide();
        $("#offline_carousel").show();
    }


     if (online) {
        $.ajax({
            url: "./Announcements.csv",
            dataType: "text",
            error: function () {
                $("#announcements_carousel").hide();
                $("#offline_carousel").show();
                
            },
            success: function (data) {
  
                var announcements_data = data.split(/\r?\n|\r/);

                var announce_header_pos = 0;
                var announce_text_pos = 1;
                var button_text_pos = 2;
                var button_link_pos = 3;
               
                var announce_data_count = announcements_data.length; 

                //saving xlsx to csv adds a row at the end.. 
                //remove this from the announcement count or any other row that does not have 4 sets of data
                var announce_count = announce_data_count;
                for (var count = announce_data_count-1; count > 0; count --) {
                    
                    var row_data =  csvRowToArray(announcements_data[count]); 
                    if (row_data == null || row_data.length < 4 ) {
                        announce_count--; 
                    }
                }

                //remove header row from announce count
                announce_count--; 
                
                var indicators_el = $("#ac_indicators");
                var active_middle = 1;
                if (announce_count > 2) {
                    active_middle = 2; 
                }
                for (var count = 1; count <= announce_count; count++) {
                    var aria_current = "false";
                    var is_active = false;
                    if (count === active_middle) {
                        aria_current = "true";
                        is_active = true;
                    }
                    var ind_button = $("<button/>");
                    if (is_active) {
                        ind_button.addClass("active")
                    }

                    ind_button.attr("type", "button")
                       .attr("data-bs-target", "#announcements_carousel")
                        .attr("data-bs-slide-to", (count - 1).toString())
                        .attr("aria-label", "Slide " + (count).toString())
                        .attr("aria-current", aria_current);

                    indicators_el.append(ind_button);
                }

                var inner_carousel_el = $("#ac_inner");
     
                for (var count = 1; count <= announce_count ; count++) {
                    var item_active = '';
                    var text_start = '';
                    if (count === 1 && announce_count > 2) {
                        text_start = 'text-start';
                    }

                    if (count === active_middle) {
                        item_active = 'active';
                    }         

                    if (count === announce_count && announce_count > 2) {
                        text_start = 'text-end';
                    }

                    var cell_data = csvRowToArray(announcements_data[count]); 

                    var announce_header = cell_data[announce_header_pos];
                    var announce_text = cell_data[announce_text_pos];
                    var button_text = cell_data[button_text_pos];
                    var button_link = cell_data[button_link_pos];

                    var item_el = ($("<div/>")
                        .addClass("carousel-item " + item_active)
                        .append('<svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"' +
                            'aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">' +
                            '<rect width="100%" height="100%"/>'));

                    var item_container_el = $("<div/>").addClass("container");

                    var caption_el = $("<div/>").addClass("carousel-caption " + text_start)
                    var h1 = $("<h1/>").text(announce_header);
                    var p1 = $("<p/>").text(announce_text);
                    caption_el.append(h1);
                    caption_el.append(p1);
                    var cap_link_el = $("<p/>");
                    var cap_link_a = $("<a/>")
                        .addClass("btn btn-lg announce-button")
                        .attr("href", button_link)
                        .attr("target", "_blank")
                        .text(button_text);
                    cap_link_el.append(cap_link_a);
                    caption_el.append(cap_link_el);
                    item_container_el.append(caption_el);

                    item_el.append(item_container_el);
                    inner_carousel_el.append(item_el);
                }

            }
        });
    } 

});

function csvRowToArray(row, delimiter = ',', quoteChar = '"'){
    let nStart = 0, nEnd = 0, a=[], nRowLen=row.length, bQuotedValue;
    while (nStart <= nRowLen) {
        bQuotedValue = (row.charAt(nStart) === quoteChar);
        if (bQuotedValue) {
            nStart++;
            nEnd = row.indexOf(quoteChar + delimiter, nStart)
        } else {
            nEnd = row.indexOf(delimiter, nStart)
        }
        
        if (nEnd < 0 )   { if (bQuotedValue == true) {nEnd = nRowLen - 1} else {nEnd = nRowLen}    }
        a.push(row.substring(nStart,nEnd).replaceAll('\"\"', '\"'));
        nStart = nEnd + delimiter.length + (bQuotedValue ? 1 : 0)
    }
    return a;
}
