// initiate the shorten function and ui function
const shorten = new Shorten();
const ui = new UI();



const errMsg = document.querySelector('.err-msg');
const linkInput = document.getElementById('link-input');
const card = document.querySelector('.shorten-cont')

//shorten the link
document.querySelector('.shorten-it').addEventListener('click',shortenBtn);
function shortenBtn(e){

  const textValue = document.getElementById('link-input').value;
//check if the text field is empty
  if(textValue === ''){
    linkInput.style.border = '2px solid hsl(0, 87%, 67%)';
    errMsg.textContent = `Please add a link`
    errMsg.style.color = 'hsl(0, 87%, 67%)';
  }
  else{
    errMsg.style.display = 'none';
    linkInput.style.border = 'none';
    shorten.linkChoice(textValue);
    short()

  //set timeout until the data is fetched then show the data
  setTimeout(function(){
    card.classList.add('show')
  },9000)
  }
   
  e.preventDefault()
}

// get response data from the api
function short(){
  shorten.shortenLink()
  .then((data)=>{
    //paint it to the DOM
    ui.paint(data)
  })
  .catch((err)=>{
    console.log(err)
  })
}


// Main design

const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const linkContainer = document.querySelector('.nav-link');

toggle.addEventListener('click',function(){
  // const linkHeight = links.getBoundingClientRect().height;
  // const containerHeight = linkContainer.getBoundingClientRect().height;

  // if(containerHeight === 0){
  //   linkContainer.style.height = `${linkHeight}px`;
  // }
  // else{
  //   linkContainer.style.height = 0;
  // }
  linkContainer.classList.toggle('display');
})

//copy text
const copy = document.querySelector('.copy');

copy.addEventListener('click',function(){
  
  copy_text()
})
function copy_text(){
  if (document.selection) { // IE
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById('new-link'));
    range.select();
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById('new-link'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
  }
  document.execCommand("copy");
  /* Alert success */
  copy.textContent = 'Copied!';
  copy.style.background = 'hsl(255, 11%, 22%)';
  
  
}







const tl = gsap.timeline({defaults:{ease:'power1.out'}})
tl.to('#logo', {duration:3.5})
tl.to('.preload',{y:'-100%',duration:1.5,delay:0.5})
tl.to('.slider',{y:'-100%',duration:1},'-=1.5')
tl.fromTo('.hero-txt',{y:'100%',opacity:0},{y:'0%',opacity:1,duration:1,stagger:0.7})
tl.fromTo('.hero-btn',{y:'-100%',opacity:0},{y:'0%',opacity:1,ease:'bounce.out',duration:1.5})
tl.fromTo('.get_started',{y:'-100%',opacity:0},{y:'0%',opacity:1,ease:'bounce.out',duration:1.5})










