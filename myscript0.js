var categoryNum; // 1 ~ 6

$(document).ready(function () {
    init();
});

function init() {
    categoryNum = 1;
    categoryTransform();
}

function categoryTransform() {
    switch (categoryNum) {
        case 1 : categoryOne();
            break;
        case 2 : 
            break;
        case 3 :
            break;
        case 4 :
            break;
        case 5 :
            break;
        case 6 :
            break;
    }
}

function categoryOne() { // 여행지 선정
    $('<div></div>')
    .attr('id', 'myID')
    .css({
        // 각 카테고리 공통 속성
        backgroundColor : '#FFFFFF',
        width : 980, height : 660,
        
    }).insertAfter('#main');

    $('<a>월레스와 그로밋</a>')
    .css({
        // 태그 공통
        position : 'absolute',
        // CSS
        backgroundColor : '#FFFF00',
        marginLeft : 30,
        color : '#0F3B54',
    }).insertAfter('#main');

    $('<img></img>')
    .attr({
        width : '200',
        height : '200',
        src : 'image.jpg'
    })
    .css({
        // 태그 공통
        position : 'absolute',
        // CSS
        marginTop : 30
    }).insertAfter('#main');
}