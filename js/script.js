$(function() {
    var url = window.location.url;
    $(".navigation a").each(function() {
        if (url == (this.href)) {
            $(this).closest("li").addClass("active");
            $(this).closest("li").parent().parent().addClass("active");
        }
    });
});

function homePageButton() {
    window.location.href = 'index.html';
    $('#homePageButtonStyle').css("background-color", "blue");
}

function aboutMePageButton() {
    window.location.href = 'about.html';
}

function aboutCricketPageButton() {
    window.location.href = 'aboutCricket.html';
}

function kolkataClick() {
    $('#kolkataDiv').show();
}

function kolkataClose() {
    $('#kolkataDiv').hide();
}

function openIndia() {
    $('#indiaDiv').show();
    $('#temp').hide();
}

function closeIndia() {
    $('#temp').show();
    $('#indiaDiv').hide();
}
function openAustralia() {
    $('#australiaDiv').show();
    $('#temp').hide();
}

function closeAustralia() {
    $('#australiaDiv').hide();
    $('#temp').show();
}
function openBangladesh() {
    $('#bangladeshDiv').show();
    $('#temp').hide();
}

function closeBangladesh() {
    $('#bangladeshDiv').hide();
    $('#temp').show();
}
function openEngland() {
    $('#englandDiv').show();
    $('#temp').hide();
}

function closeEngland() {
    $('#englandDiv').hide();
    $('#temp').show();
}
function openNewZealand() {
    $('#newZealandDiv').show();
    $('#temp').hide();
}

function closeNewZealand() {
    $('#newZealandDiv').hide();
    $('#temp').show();
}
function openPakistan() {
    $('#pakistanDiv').show();
    $('#temp').hide();
}

function closePakistan() {
    $('#pakistanDiv').hide();
    $('#temp').show();
}
function openSouthAfrica() {
    $('#southAfricaDiv').show();
    $('#temp').hide();
}

function closeSouthAfrica() {
    $('#southAfricaDiv').hide();
    $('#temp').show();
}
function openSriLanka() {
    $('#sriLankaDiv').show();
    $('#temp').hide();
}

function closeSriLanka() {
    $('#sriLankaDiv').hide();
    $('#temp').show();
}
function openWestIndies() {
    $('#westIndiesDiv').show();
    $('#temp').hide();
}

function closeWestIndies() {
    $('#westIndiesDiv').hide();
    $('#temp').show();
}
