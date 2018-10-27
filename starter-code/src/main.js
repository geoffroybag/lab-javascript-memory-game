var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  memoryGame.shuffleCards();
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);


  var stockCards = [];
  // Bind the click event of each element to a function
  $(".back").click(function () {
     var button = $(event.target);
      button.toggleClass("back");
      button.next().addClass("back");
      stockCards.push(button.attr('name'));
      console.log(stockCards);
      
      if(stockCards.length==2){
        var checkPair = memoryGame.checkIfPair(stockCards[0], stockCards[1]);
        $('#pairs_clicked').html(memoryGame.pairsClicked);
        if (checkPair == false){
          setTimeout(function(){
            return hideCards(stockCards);
            }, 1000);
            setTimeout(function(){
              return stockCards = [];
              }, 1001);
        }
        else {
          $('#pairs_guessed').html(memoryGame.pairsGuessed);
          stockCards = [];
        }
      }
      else {

      }
  });


 
  
});

var memoryGame = new MemoryGame(cards);


function hideCards(array){
  var getFirstCard = document.getElementsByName(array[0]);
  var getSecondCard = document.getElementsByName([array[1]]);
  $(getFirstCard[0]).addClass("back")
  $(getFirstCard[0]).next().removeClass("back")
  $(getSecondCard[0]).addClass("back")
  $(getSecondCard[0]).next().removeClass("back")
  $(getFirstCard[1]).addClass("back")
  $(getFirstCard[1]).next().removeClass("back")
  $(getSecondCard[1]).addClass("back")
  $(getSecondCard[1]).next().removeClass("back")
}