/**
 * Created by aherz on 9/20/17.
 */

// Variable to store the raw HTML for the nav
var basicHTML = '<span id="headerLogoText">PageLogo</span>' +
    '<ul>' +
    '<li id="servicesNavLink">Services <div id="servicesNavDropDown" class="dropdown-content"></div></li>' +
    '<li id="galleryNavLink">Gallery <div id="galleryNavDropDown" class="dropdown-content"></div></li>' +
    '<li id="aboutNavLink">About Us</li>' +
    '<li id="contactUsNavLink">Contact Us</li>' +
    '</ul>';

// Create the variables to store the nav bar links
var servicesLink;
var servicesLinkDropDown;
var galleryLink;
var galleryLinkDropDown;

// When page loads makes association with variables variables and HTML IDs. Creates mouse hover events for the elements
$(function() {
    // Add the raw HTML to the page
    $('header:first').append(basicHTML);

    // Adds the event logic to the navigation
    servicesLink = $('servicesNavLink');
    servicesLinkDropDown = $('servicesNavDropDown');;
    galleryLink = $('galleryNavLink');;
    galleryLinkDropDown = $('galleryNavDropDown');;
    var mouseLeave = "mouseleave";
    var mouseEnter = "mouseenter";

    $(servicesLink).mouseenter(function () {
        event.stopPropagation();
        dropDownProcessor(servicesLink, servicesLinkDropDown, mouseEnter);
    });

    $(servicesLink, servicesLinkDropDown).mouseleave(function () {
        event.stopPropagation();
        dropDownProcessor(servicesLink, servicesLinkDropDown, mouseLeave);
    });

    $(galleryLink).mouseenter(function () {
        event.stopPropagation();
        dropDownProcessor(galleryLink, galleryLinkDropDown, mouseEnter);
    });

    $(galleryLink, galleryLinkDropDown).mouseleave(function () {
        event.stopPropagation();
        dropDownProcessor(galleryLink, galleryLinkDropDown, mouseLeave);
    });

});

// Checks what should be done when a mouse event is triggered
function dropDownProcessor(navLink, dropdownBox, mouseMovement) {

    if(mouseMovement == "mouseenter") {
        if ($(dropdownBox).css('display') != "block") {
            if($(dropdownBox).has("a").length == 0 ) {
                populateNavDropDown(navLink, dropdownBox);
            }
            dropdownBox.toggle('show');
        }
    }

    if(mouseMovement == "mouseleave") {
        if ($(navLink).is(":hover") == false && $(dropdownBox).is(":hover") == false) {
            if ($(dropdownBox).css('display') == "block") {
                dropdownBox.toggle('show');

            }
        }
    }
}

// Populates the empty nav drop downs
function populateNavDropDown(navName, dropdownBox) {

    var links = headerNavBarLinkValues(navName);
    var linksParsed = JSON.parse(links);
    for (var i = 0; i < linksParsed.names.length; i++){
        $(dropdownBox).append('<a href = "' + linksParsed.hyperLinks[i] + '">' + linksParsed.names[i] + '</a>');
    }

}