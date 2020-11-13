class Shorten{
  constructor(url){
    this.url = url
  }

  async shortenLink(){
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${this.url}`)
    const responseData = await response.json();
    return responseData
  }

  linkChoice(url){
    this.url = url;
  }
}