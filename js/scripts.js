function validate(){
    // check valid zip code
    var zip = $("#zip").val();
    if (zip !== ""){
        if (isNaN(zip) && zip.length !== 5){
            alert("Zip code is not valid or not in a valid format.")
            return false;
        }
    }

    return true;
}