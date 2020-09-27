function getJson() {
    var url = 'https://kmrgetmessage.azurewebsites.net/api/GetJSON?code=Nf/VkbTQIWDwHdqJ2wQdocwzeRIGPd84A4eKVtvZ6blRBETjHXbaUw=='
    $.ajax(url,
        {
            success: function (data, status, xhr) {// success callback function

                //var returnedData = JSON.parse(data);
                var html = 'Name:' + data.name + ' - location:' + data.location

                $('#azuredata').append(data);
            }
        });
}