var categoryNum; // 1 ~ 6

$(document).ready(function () {
//return categoryThree();
  //started();
  /*
  $('#div2').keyup(function(){
    var searchVal = $(this).val();
    if( searchVal != '도쿄'){
      failed();
    }
  */

  //$('#cate1').on('click', function(event) {

    basis();

  $('#searchicon').on('click', function(event) {

    categoryOne();
    //init();

  /*$('#scale').on('click', function(event) {
      Test1();
*/
  $('#cate2').on('click', function(event) {
    $("img").remove("#img1,#img2,#img3,#scale,#img5");
    //$('#searchicon').on('click', function(event) {
      categoryTwo();

/*
  $('#blockcarry').on('click', function(event) {

    TestBlock();
*/
  $('#cate3').on('click', function(event) {
    $("img").remove("#skytree1,#skytree2,#blockcarry");
    categoryThree();
/*
    $('.more').click(function(){
      if($('.more').hasClass('more')){

      $('.more').addClass('close').removeClass('more');
        %('.board').css('visibility', 'visible');
    }else if($('.close').hasClass('close')){

      $('.close').addClass('more').removeClass('close');
      $('.board').css('visibility','hidden');
    }
  });
    });
    */
//});
//});
});
});
});
function Test1(){

  alert("잠깐")
}
function TestBlock(){

  alert("블록 보관함에 담겼습니다.")
}


function init() {
    categoryNum = 1;
    categoryTransform();
}
function started(){
  $('<img></img>')
  .attr('id', 'index0')
  .attr('src', "index0.png")
  .css({
      // 각 카테고리 공통 속성
      position : 'absolute',
      width : 960 ,
      height : 580 ,
      marginLeft : 10,
      marginTop : 70,
        zIndex : 1
  }).insertAfter('#main')
}

function failed(){
  $('<img></img>')
  .attr('id', 'index1')
  .attr('src', "index1.png")
  .css({
      // 각 카테고리 공통 속성
      position : 'absolute',
      width : 960 ,
      height : 580 ,
      marginLeft : 10,
      marginTop : 70,
        zIndex : 1
  }).insertAfter('#main')
}

function categoryTransform() {
    switch (categoryNum) {
        case 1 : categoryOne();
        case 2 : categoryTwo();
            break;
        case 3 : categoryThree();
            break;
        case 4 : categoryFour();
            break;
        case 5 : categoryFive();
            break;
        case 6 : categorySix();
            break;
    }
}

function basis() { // 여행지 선정

    $('<div></div>')
    .attr('id', 'myID')
    .css({
        // 각 카테고리 공통 속성
        backgroundColor : '#FFFFFF',
        width : 980, height : 660,

    }).insertAfter('#main')

    $('<div></div>')
    .attr('id', 'div1')
    .css({
        // 각 카테고리 공통 속성
        position : 'absolute',
        backgroundColor : 'gray',
        width : 960, height : 50,
        marginLeft : 10,
        marginTop : 10
    }).insertAfter('#main')

    $('<input></input>') //검색창
    .attr('id', 'div2')
    .css({
        // 각 카테고리 공통 속성
        type : 'search',
        position : 'absolute',
        backgroundColor : 'white',
        width : 850
        , height : 35,
        marginLeft : 20,
        marginTop : 15,
        zIndex : 1,
    }).insertAfter('#main')

    $('<img></img>')
    .attr('id', 'searchicon')
    .attr('src', "그림1.png")
    .css({
        // 각 카테고리 공통 속성
        position : 'absolute',
        width : 40 ,
        height : 40 ,
        marginLeft : 900,
        marginTop : 15,
          zIndex : 1
    }).insertAfter('#main')

/*
    $('<img></img>')
    .attr('id', 'index0')
    .attr('src', "index0.png")
    .css({
        // 각 카테고리 공통 속성
        position : 'absolute',
        width : 960 ,
        height : 580 ,
        marginLeft : 10,
        marginTop : 70,
          zIndex : 1
    }).insertAfter('#main')
*/
}


function categoryOne() { //여행지 선정
  $('<img></img>')
  .attr('id', 'img1')
  .attr('src', "오사카 지도.png")
  .css({
      // 각 카테고리 공통 속성
      position : 'absolute',
      width : 290 ,
      height : 290 ,
      marginLeft : 10,
      marginTop : 70,
        zIndex : 1
  }).insertAfter('#main')


  $('<img></img>')
  .attr('id', 'img2')
  .attr('src', "오사카 설명.png")
  .css({
      // 각 카테고리 공통 속성
      position : 'absolute',
      width : 670 ,
      height : 290 ,
      marginLeft : 310,
      marginTop : 70,
        zIndex : 1
  }).insertAfter('#main')

  $('<img></img>')
  .attr('id', 'img3')
  .attr('src', "여행지 정보.png")
  .css({
      // 각 카테고리 공통 속성
      position : 'absolute',
      width : 950 ,
      height : 200 ,
      marginLeft : 10,
      marginTop : 370,
        zIndex : 1
  }).insertAfter('#main')

$('<img></img>')
.attr('id', 'scale')
.attr('src', "확대버튼.png")
.css({
    // 각 카테고리 공통 속성
    position : 'absolute',
    width : 40 ,
    height : 40 ,
    marginLeft : 930,
    marginTop : 610,
      zIndex : 1
}).insertAfter('#main')

$('<img></img>')
.attr('id', 'img5')
.attr('src', "여행지 정보2.png")
.css({
    // 각 카테고리 공통 속성
    position : 'absolute',
    width : 950 ,
    height : 440 ,
    marginLeft : 10,
    marginTop : 700,
      zIndex : 1
}).insertAfter('#main')


  $('<div></div>')
  .attr('id', 'scroll')
  .css({
      position : 'absolute',
      overflow : 'auto' ,
      width : 980 ,
      height : 660 ,
      marginLeft : 30,
      marginTop : 10,
        zIndex : 1
  }).insertAfter('#main')
}


function categoryTwo(){ // 관광지 카탈로그
  $('<img></img>')
  .attr('id', 'skytree1')
  .attr('src', "스카이트리.jpg")
  .css({
      // 각 카테고리 공통 속성
      position : 'absolute',
      width : 500 ,
      height : 490 ,
      marginLeft : 10,
      marginTop : 70,
        zIndex : 1
  }).insertAfter('#main')

  $('<img></img>')
  .attr('id', 'skytree2')
  .attr('src', "스카이트리 설명.png")
  .css({
      // 각 카테고리 공통 속성
      position : 'absolute',
      width : 460 ,
      height : 490 ,
      marginLeft : 510,
      marginTop : 70,
        zIndex : 1
  }).insertAfter('#main')

  $('<img></img>')
  .attr('id', 'blockcarry')
  .attr('src', "블록담기.png")
  .css({
      // 각 카테고리 공통 속성
      position : 'absolute',
      width : 950 ,
      height : 90 ,
      marginLeft : 10,
      marginTop : 560,
        zIndex : 1
  }).insertAfter('#main')
}



function categoryThree() { //블록 선택

  $('<div></div>')
  .attr('id', 'cate3div')
  .css({
      // 각 카테고리 공통 속성
      backgroundColor : '#FFFFFF',
      width : 980, height : 660,


  }).insertAfter('#main')


  $('<div><h2>&nbsp&nbsp&nbsp관광지 블록<h2></div>')
  .attr('id', 'blockcate1')
  .css({
      // 각 카테고리 공통 속성
      position : 'absolute',
      backgroundColor : '#dcdcdc',
      width : 290, height : 630,
      marginLeft : 20,
      marginTop : 10
  }).insertAfter('#main')


  $('<div></div>')
  .attr('id', 'blank1')
  .css({
      // 각 카테고리 공통 속성
      position : 'absolute',
      backgroundColor : 'white',
      width : 270, height : 550,
      marginLeft : 30,
      marginTop : 80 ,
      zIndex : 1
  }).insertAfter('#main')


  $('<div><h2>&nbsp&nbsp&nbsp음식점 블록<h2></div>')
  .attr('id', 'blockcate1')
  .css({
      // 각 카테고리 공통 속성
      position : 'absolute',
      backgroundColor : '#dcdcdc',
      width : 290, height : 630,
      marginLeft : 340,
      marginTop : 10,

  }).insertAfter('#main')

  $('<div></div>')
  .attr('id', 'blockcate2')
  .css({
      // 각 카테고리 공통 속성
      position : 'absolute',
      backgroundColor : '#ffffff',
      width : 270, height : 550,
      marginLeft : 350,
      marginTop : 80,
      zIndex : 1,
  }).insertAfter('#main')

  $('<div><h2>&nbsp&nbsp&nbsp기타 블록<h2></div>')
  .attr('id', 'blockcate1')
  .css({
      // 각 카테고리 공통 속성
      position : 'absolute',
      backgroundColor : '#dcdcdc',
      width : 290, height : 630,
      marginLeft : 660,
      marginTop : 10
  }).insertAfter('#main')

  $('<div></div>')
  .attr('id', 'blockcate2')
  .css({
      // 각 카테고리 공통 속성
      position : 'absolute',
      backgroundColor : '#ffffff',
      width : 270, height : 550,
      marginLeft : 670,
      marginTop : 80,
      zIndex : 1,
  }).insertAfter('#main')

  $('<wrap></wrap>')



}




})
