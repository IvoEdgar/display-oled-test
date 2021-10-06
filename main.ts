let posX = randint(10, 118)
let posY = randint(20, 54)
let revX = Math.randomBoolean()
let revY = Math.randomBoolean()
kitronik_VIEW128x64.show("TESTE DE DISPLAY", 1, kitronik_VIEW128x64.ShowAlign.Centre)
basic.forever(function () {
    kitronik_VIEW128x64.clearPixel(posX, posY)
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
    }
    if (posY < 20 || posY > 54) {
        revY = !(revY)
    }
    kitronik_VIEW128x64.setPixel(posX, posY)
})
