// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const projects = document.getElementsByClassName("projectpanel");
const scroller = document.getElementById("scroller");
const timeline = document.getElementById("timeline-holder");
var canhide = true;


async function showprojecthover(projectobject) {
    var projectid = projectobject.id;

    if (window.innerWidth <= 1000 || !canhide) 
    {
        return;
    }
      
    scroller.style.display = "inline-block";
    timeline.style.filter = "none";

    for (const p of projects) {
        if (p.id == projectid) {
            p.style.display = "flex";
        }
        else {
            p.style.display = "none";

        }
    }

    await delay(100);
    canhide = true;
}

async function showprojectclick(projectobject) {
    var projectid = projectobject.id;

    if (window.innerWidth > 1000 || !canhide) 
    {
        return;
    }
    
    canhide = false;
    await delay(100);
    scroller.style.display = "block";
    timeline.style.filter = "blur(8px)";

    for (const p of projects) {
        if (p.id == projectid) {
            p.style.display = "flex";
        }
        else {
            p.style.display = "none";

        }
    }

    await delay(100);
    canhide = true;
}

function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function hideScoller() {
    if (window.innerWidth <= 1000)
    {
        if (!canhide)
        {
            return;
        }
        await delay(100);
        scroller.style.display = "none";
    }
    timeline.style.filter = "none";
}


function moveScroller() {
    var $anchor = $("#scroller-anchor");
    var $scroller = $('#scroller');

    var move = function () {
        var st = $(window).scrollTop();
        var ot = $anchor.offset().top;
        if (st > ot) {
            $scroller.css({
                position: "fixed",
                top: "0px"
            });
        } else {
            $scroller.css({
                position: "relative",
                top: ""
            });
        }
    };
    $(window).scroll(move);
    move();
}

function scrollToAbout() {
    document.getElementById("about").scrollIntoView();
}

function scrollToTop() {
    document.getElementById("top").scrollIntoView();
}

$(function () {
    moveScroller();
});


var a = document.getElementById('projects-here'); 
a.addEventListener('click', function(){ document.getElementById("projects").scrollIntoView();}, false);
