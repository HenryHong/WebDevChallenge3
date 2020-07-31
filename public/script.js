//Global variable assignment
var CatImgTag = document.getElementById("CatImageTag");
var xhr = new XMLHttpRequest();
var currCatObj; 

//Resize and deplay the inputted cat picture.
function CatImager(CatApiRsp){
    var MaxWidth = 700;
    var MaxHeight = 700;
    var imagewidth = CatApiRsp.width;
    var imageheight = CatApiRsp.height;

    while ((imagewidth > MaxWidth) || (imageheight > MaxHeight)){
        imagewidth = imagewidth/2;
        imageheight = imageheight/2;
    }

    CatImgTag.width = imagewidth;
    CatImgTag.height = imageheight;
    CatImgTag.src = CatApiRsp.url;
}

//Fetch a random cat picture
function Catpicturexhr(){
    CatImgTag.src = "";
    xhr.open('GET', "http://localhost:3000/catpic", true);
    xhr.send(null);

    xhr.onreadystatechange = processRequest;
    function processRequest(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                console.log(JSON.stringify(response,null,"\t"));
                CatImager(response);
                currCatObj = response;
            } 
    }

}

Catpicturexhr();