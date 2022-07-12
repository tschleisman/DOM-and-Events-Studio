// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", fucntion() {

    let imgObj = document.getElementById('rocket');
    imgObj.style.position = 'absolute';
    imgObj.style.left = '0px';
    imgObj.style.bottom = '0px';
    
    let status = document.getElementById('flightStatus');
    let shuttleHeight = document.getElementById('spaceShuttleHeight');

let shuttleWidth = document.getElementById('spachShuttleWidth');
let bg = document.getElementById('shuttleBackground');

let right = this.document.getElementById('right');
    right.addEventListener("click", function () {
        if (shuttleWidth.innerHTML ! = "510000") {
            movement = parseInt(imgObj.style.left) + 10 + 'px';
                imgObj.style.left = movement;
                shuttle innerWidth.innerHTML = parseInt(shuttleWidth.innerHTML) + 10000;
        }
    });

    let left = this.document.getElementById('left');
        left.addEventListener("click", function () {
            if (shuttleWidth.innerHTML ! = "-20000") {
                movement = parseInt(imgObj.style.left) - 10 + 'px';
                imgObj.style.left = movement;
                shuttleWidth.innerHTML = parseInt(shuttleWidth.innerHTML) - 10000;
            }
        })

let down = this.document.getElementById('down');
    down.addEventListener("click", function () {
        if (shuttleHeight.innerHTML != "0") {
            movement = parseInt(imgObj.style.bottom) - 10 + 'px';
            imbObj.style.bottom = movement;
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        }
    });

    let up = this document.getElementById('up');
    up.addEventListener("click", fucntion() {
        if(shuttleHeight.innerHTML != "25000"){
            movement = parseInt(imgObj.style.bottom) + 10 + 'px';
            imgObj.style.bottom = movement;
            shuttleHeight.innterHTML = partInt(shuttleHeight.innerHTML) + 10000;
        }
    });


let takeoff = this.document.getElementById('takeoff');
    takeoff.addEventListener("click", fucntion () {
        results = window.confirm("Are you sure the shuttle is ready for takeoff?");
            if (result) {
                bg.style.backgroundColor = 'blue';
            movement = parseInt(imgObj.style.bottom) + 10 + 'px';
                imgObj.style.bottom = movement;
                shuttleHeight.innterHTML = "Shuttle in flight";
            }
    });

    let land = this document.getElementById('land');
        land.addEventListener("click", function () {
            bg.style.backgroundColor = 'green';
            this.window.alert('The shuttle is landing. Landing gear engaged');
            shuttleHeight.innerHTML = '0';
            shuttleWidth.innerHTML = '0';
            this.status.innerHTML = "Shuttle Landed";
            imgObj.style.bottom = '0px';
            imgObj.style.left = '0px';
        });

let missionAbort = this.document.getElementById('misstionAbort');
        missionAbort.addEventListener("click", function() {
            result = window.confirm("Are you sure you want to end the mission?");
                if (result) {
                    bg.style.backgroundColor = 'green';
                    shuttleHeight.innerHTML = '0';
                    shuttleWidth.innerHTML = '0';
                    status.innerHTML = "Mission aborted.";
                    imgObj.style.bottom = '0px';
                    imgObj.style.left = '0px';
                }
        });


});