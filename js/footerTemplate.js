/**
 * Created by aherz on 9/22/17.
 */

// Variable to store the raw HTML for the nav
var basicFooterHTML = '<p>PageLogo&#174; By: John Doe<br />' +
    'Here is links to legal mumbo jumbo<br />' +
    'Address to some mail box for whatever</p>';

// When page loads it populates the header
$(function() {
    // Add the raw HTML to the page
    $('footer:last').prepend(basicFooterHTML);
});