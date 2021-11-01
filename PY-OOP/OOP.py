from Player import Player
from Track import Track

track1 = Track("Incubus", "Drive", "Make Yourself")
track2 = Track("Ritchie Valens", "La Bamba", "La Bamba")
track3 = Track("Red Hot Chilli Peppers", "Californication", "Californication")

p = Player()
p.Add(track1)
p.Add(track2)
p.Add(track3)
p.Play()

p.Prev()
p.Play()

p.Next()
p.Play()

p.selectTrack(0)
p.Play()

p.printTracksInfo()









