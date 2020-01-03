$(document).ready(function () {
    // Init
    $('.image-section-coco').hide();
    $('.loadercoco').hide();
    $('#resultcoco').hide();

    // Upload Preview
    function readURLcoco(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreviewcoco').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreviewcoco').hide();
                $('#imagePreviewcoco').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUploadcoco").change(function () {
        $('.image-section-coco').show();
        $('#btn-predict-coco').show();
        $('#resultcoco').text('');
        $('#resultcoco').hide();
        readURLcoco(this);
    });

    // Predict
    $('#btn-predict-coco').click(function () {
        var form_data = new FormData($('#upload-file-coco')[0]);

        // Show loading animation
        $(this).hide();
        $('.loadercoco').show();

        // Make prediction by calling api /predictResNet50
        $.ajax({
            type: 'POST',
            url: '/predictcoco',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('.loadercoco').hide();
                $('#resultcoco').fadeIn(600);
                $('#resultcoco').text(' Result:  ' + data);
                console.log('Success!');
            },
        });
    });

});
