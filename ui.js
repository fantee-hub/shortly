class UI{
  constructor(){
    this.originalLink = document.getElementById('original');
    this.newLink = document.getElementById('new-link');
  }

  paint(details){
    this.originalLink.textContent = details.result.original_link;
    this.newLink.textContent = details.result.full_short_link2;
    this.newLink.setAttribute('href',details.result.full_short_link2)
    
  }
}