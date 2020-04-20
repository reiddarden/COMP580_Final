// Start to OW
var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'Start2OW.json'
});

// OW to BT

var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('ow2bt'),
    renderer: 'svg',
    loop: false, 
    autoplay: true,
    path: 'OW2BT.json'
}); 

// BT to Kenan

var animation3 = bodymovin.loadAnimation({
    container: document.getElementById('kenan'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path:'BT2Kenan.json'
});

// Kenan to WT

var animation4 = bodymovin.loadAnimation({
    container: document.getElementById('wt'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'Kenan2WT.json'
});

// WT to Dean Dome

var animation5 = bodymovin.loadAnimation({
    container: document.getElementById('dome'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'WT2Dome.json'
});



