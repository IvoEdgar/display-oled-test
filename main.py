clrX = 0
clrY = 0
clrX2 = 0
clrY2 = 0
posX = randint(10, 118)
posY = randint(20, 54)
posX2 = randint(10, 118)
posY2 = randint(20, 54)
revX = Math.random_boolean()
revY = Math.random_boolean()
revX2 = Math.random_boolean()
revY2 = Math.random_boolean()
music.set_volume(32)
kitronik_VIEW128x64.show("BOUNCING PIXEL", 1, kitronik_VIEW128x64.ShowAlign.CENTRE)

def on_forever():
    global clrX, clrY, clrX2, clrY2, posX, posY, posX2, posY2, revX, revY, revX2, revY2
    clrX = posX
    clrY = posY
    clrX2 = posX2
    clrY2 = posY2
    if revX:
        posX += -1
    else:
        posX += 1
    if revY:
        posY += -1
    else:
        posY += 1
    if revX2:
        posX2 += -1
    else:
        posX2 += 1
    if revY2:
        posY2 += -1
    else:
        posY2 += 1
    if posX < 2 or posX > 126:
        revX = not (revX)
        music.play_tone(440, music.beat(BeatFraction.SIXTEENTH))
    if posY < 11 or posY > 62:
        revY = not (revY)
        music.play_tone(523, music.beat(BeatFraction.SIXTEENTH))
    if posX2 < 2 or posX2 > 126:
        revX2 = not (revX2)
        music.play_tone(440, music.beat(BeatFraction.SIXTEENTH))
    if posY2 < 11 or posY2 > 62:
        revY2 = not (revY2)
        music.play_tone(523, music.beat(BeatFraction.SIXTEENTH))
    kitronik_VIEW128x64.clear_pixel(clrX, clrY)
    kitronik_VIEW128x64.set_pixel(posX, posY)
    kitronik_VIEW128x64.clear_pixel(clrX2, clrY2)
    kitronik_VIEW128x64.set_pixel(posX2, posY2)
basic.forever(on_forever)
