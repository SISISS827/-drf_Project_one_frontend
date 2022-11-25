postNote = function() {
    var myDiv = document.getElementById("noteCommentBox"),
        msgBox = document.getElementById("myNote"),
        message = '<div class="text-holder"><div class="feed-description"><span id="note_Note_Content">' + escapeHTML(msgBox.value)  + '</span><div class="feed-by">from <span id="note_Created_By">' + 'get_current_user_displayname' + '</span> at <span id="note_Created_Time">'+ Date.now() + '</span></div></div></div>';
    myDiv.insertAdjacentHTML('afterend', '<div id="feed-item">' + message + '</div>');
},

escapeHTML = function(input) {
    return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
},

initEvents = function() {
    var sendBttn = document.getElementById("send");
    sendBttn.addEventListener("click", function() {
    postNote();
    });
};

document.addEventListener("DOMContentLoaded", initEvents);