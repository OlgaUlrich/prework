class Player:
    player = []
    currentTrack = "Something"
    changedTrack = ''
    change = False


    @classmethod
    def Add(cls, TrackName):
        Player.player.append(TrackName)
        return Player.player

    @classmethod
    def Play(cls):
        log = Player.change
        if log == False:
            ct = Player.player[len(Player.player)-1]
            Player.currentTrack = ct
            print(f'Playing {Player.currentTrack.title} by {Player.currentTrack.artist}')
        else:
            print(f'Playing {Player.changedTrack.title} by {Player.changedTrack.artist}')
            Player.change = False

    @classmethod
    def Prev(cls):
        Player.change = True
        arr = Player.player
        n = Player.currentTrack
        ind = arr.index(n)
        if  ind < 0:
            ind = len(arr)
        else:
            ct = Player.player[ind - 1]
            Player.changedTrack = ct
            Player.currentTrack = ct
                # return Player.changedTrack

    @classmethod
    def Next(cls):
        Player.change = True
        arr = Player.player
        n = Player.currentTrack
        ind = arr.index(n)
        if ind > len(arr):
            ind = 0
        else:
            ct = Player.player[ind + 1]
            Player.changedTrack = ct
            Player.currentTrack = ct

    @classmethod
    def printTracksInfo(cls):
        arr = Player.player
        a = 0
        for i in arr:
            a +=1
            print(f"№{a} - track: {i.title}, album: {i.album}, artist: {i.artist}")

    @classmethod
    def selectTrack(cls, num):
        arr = Player.player

        if num > len(arr):
            print("There is no that number of Track")
        else:
            Player.change = True
            ct = arr[num]
            Player.changedTrack = ct