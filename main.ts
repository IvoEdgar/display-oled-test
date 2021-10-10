let clrY2 = 0
let clrX2 = 0
let clrY = 0
let clrX = 0
let counter = 0
let posX = 2 * randint(5, 59)
let posY = 2 * randint(10, 27)
let posX2 = 2 * randint(5, 59)
let posY2 = 2 * randint(10, 27)
let revX = Math.randomBoolean()
let revY = Math.randomBoolean()
let revX2 = Math.randomBoolean()
let revY2 = Math.randomBoolean()
music.setVolume(96)
kitronik_VIEW128x64.show("COLLISION DOTS: " + convertToText(counter), 1, kitronik_VIEW128x64.ShowAlign.Centre)
basic.forever(function () {
    clrX = posX
    clrY = posY
    clrX2 = posX2
    clrY2 = posY2
    if (revX) {
        posX += -2
    } else {
        posX += 2
    }
    if (revY) {
        posY += -1
    } else {
        posY += 1
    }
    if (revX2) {
        posX2 += -1
    } else {
        posX2 += 1
    }
    if (revY2) {
        posY2 += -2
    } else {
        posY2 += 2
    }
    if (posX < 3 || posX > 125) {
        revX = !(revX)
        music.playTone(440, music.beat(BeatFraction.Sixteenth))
    }
    if (posY < 12 || posY > 61) {
        revY = !(revY)
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
    }
    if (posX2 < 3 || posX2 > 125) {
        revX2 = !(revX2)
        music.playTone(440, music.beat(BeatFraction.Sixteenth))
    }
    if (posY2 < 12 || posY2 > 61) {
        revY2 = !(revY2)
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
    }
    if (posX == posX2 && posY == posY2) {
        counter += 1
        kitronik_VIEW128x64.show("COLLISION DOTS: " + convertToText(counter), 1, kitronik_VIEW128x64.ShowAlign.Centre)
        kitronik_VIEW128x64.invert(kitronik_VIEW128x64.onOff(true))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        kitronik_VIEW128x64.invert(kitronik_VIEW128x64.onOff(false))
    }
    kitronik_VIEW128x64.clearPixel(clrX, clrY)
    kitronik_VIEW128x64.setPixel(posX, posY)
    kitronik_VIEW128x64.clearPixel(clrX2, clrY2)
    kitronik_VIEW128x64.setPixel(posX2, posY2)
})
