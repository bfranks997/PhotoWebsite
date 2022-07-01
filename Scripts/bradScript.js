var MoreInfo = $(".MoreInfo");
var LatestNews = $(".LatestNews");
var Contact = $(".Contact");

var MoreInfoBool = false;
var LatestNewsBool = false;
var ContactBool = false;

function shutAll(time){
    MoreInfoBool = false;
    LatestNewsBool = false;
    ContactBool = false;
    $(".container").slideUp(time);
    $(".container2").slideUp(time);
    $(".container3").slideUp(time);
}

$(document).ready(shutAll());



MoreInfo.click(function(){
    if(MoreInfoBool == true){
        $(".container").slideUp();
        MoreInfoBool = false;
        return;
    }
    else{
        shutAll(100);
        MoreInfoBool = true;
        $(".container").slideDown();
    }
});

LatestNews.click(function(){
    if(LatestNewsBool == true){
        $(".container2").slideUp();
        LatestNewsBool = false;
        return;
    }
    else{
        shutAll(100);
        LatestNewsBool = true;
        $(".container2").slideDown();
    }
});

Contact.click(function(){
    if(ContactBool == true){
        $(".container3").slideUp();
        ContactBool = false;
        return;
    }
    else{
        shutAll(100);
        ContactBool = true;
        $(".container3").slideDown();
    }
});