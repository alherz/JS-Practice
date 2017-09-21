/**
 * Created by aherz on 9/20/17.
 */

// Creates a JSON object containing the text and URL for links to be used in the header nav bar
function headerNavBarLinkValues(navName) {

    //console.log("backend fired!");

    var navServiceLinkList = ["Service 1", "/service1.html", "Service 2", "/service2.html", "Service 3", "/service3.html", "Service 4", "/service4.html",
        "Service 5", "/service5.html", "Service 6", "/service6.html", "Service 7", "/service7.html"];

    var navGalleryLinkList = ["Gallery 1", "/gallery1.html", "Gallery 2", "/gallery2.html", "Gallery 3", "/gallery3.html", "Gallery 4", "/gallery4.html",
        "Gallery 5", "/gallery5.html", "Gallery 6", "/gallery6.html", "Gallery 7", "/gallery7.html"];

    var linkObj = {};
    linkObj.hyperLinks = [];
    linkObj.names = [];

    // array Position Counter
    var x = 0;

    if (navName == productLink){

        for(var i = 0; i < navServiceLinkList.length; i++){
            if(i % 2 == 0 || i == 0){
                linkObj.names[x] = (navServiceLinkList[i]);
                x = x +1;
            } else {
                linkObj.hyperLinks[x - 1] = (navServiceLinkList[i]);
            }
            //console.log("create product list loop fired!");
        }
    } else if (navName == aboutLink){
        for(var i = 0; i < navGalleryLinkList.length; i++){
            if(i % 2 == 0 || i == 0){
                linkObj.names[x] = (navGalleryLinkList[i]);
                x = x +1;
            } else {
                linkObj.hyperLinks[x - 1] = (navGalleryLinkList[i]);
            }
            //console.log("create product list loop fired!");
        }
    }
    var linkJSON = JSON.stringify(linkObj);
    //console.log("JSON going to show");
    //console.log(linkJSON);
    return linkJSON;
}