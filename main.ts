let clrX = 0
let clrY = 0
let posX = randint(10, 118)
let posY = randint(20, 54)
let revX = Math.randomBoolean()
let revY = Math.randomBoolean()
music.setVolume(64)
kitronik_VIEW128x64.show("BOUNCING PIXEL", 1, kitronik_VIEW128x64.ShowAlign.Centre)
basic.forever(function () {
    clrX += posX
    clrY += posY
    if (revX) {
        posX += -1
    } else {
        posX += 1
    }
    if (revY) {
        posY += -1
    } else {
        posY += 1
    }
    if (posX < 10 || posX > 118) {
        revX = !(revX)
        music.playTone(220, music.beat(BeatFraction.Sixteenth))
    }
    if (posY < 20 || posY > 54) {
        revY = !(revY)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
    }
    kitronik_VIEW128x64.setPixel(posX, posY)
    kitronik_VIEW128x64.clearPixel(clrX, clrY)
})
