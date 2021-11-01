class Player{
    constructor(){

        this.playlist = {
            
        };
        this.currentTrack = 0;

    }

  
}

let player = new Player();

class Track{

    constructor(_artist, _title, _album){
        this.artist=_artist;
        this.title = _title;
        this.album = _album;

    }

}

Player.prototype.add = function(newTrack){
        let arrKeys = Object.keys(this.playlist);
        this.playlist[arrKeys.length] = newTrack;

}

Player.prototype.play = function(){

    let cur = this.currentTrack;
   let curTrack = this.playlist[cur];
//    let curArtist 
    console.log(`Now is playing ${curTrack.title} by ${curTrack.artist}`)
    //  console.log(cur);
}

Player.prototype.next = function(){
        let arrKeys = Object.keys(this.playlist);
        let num = this.currentTrack;
        if(num < arrKeys.length-1){
  this.currentTrack++;
       }
        else{
            this.currentTrack = 0;
       
            }
   
}

Player.prototype.previous = function(){
    let arrKeys = Object.keys(this.playlist);
    if(this.currentTrack > 0){
         this.currentTrack--;
    }else{
      return this.currentTrack =  arrKeys.length-1;
    }
  
}




var driveTrack = new Track('Incubus', 'Drive', 'Make Yourself');
var laBambaTrack = new Track('Ritchie Valens', 'La Bamba', 'La Bamba');

player.add(driveTrack);
player.add(laBambaTrack);
player.previous();
player.previous();
player.previous();

player.play();



