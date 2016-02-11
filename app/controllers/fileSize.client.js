$(function() {
   $('form').on('submit', function(e) {
        e.preventDefault();
        var file = $('input[name="file_size"]')[0].files[0];
        
        if (file) {
            alert('FILE SIZE: ' + file.size);
        }
        else {
            alert('NO FILE SELECTED');
        }
    });
});