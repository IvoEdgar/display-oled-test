posX = randint(10, 118)
posY = randint(20, 54)
revX = Math.random_boolean()
revY = Math.random_boolean()
kitronik_VIEW128x64.show("TESTE DE DISPLAY", 1, kitronik_VIEW128x64.ShowAlign.CENTRE)

def on_forever():
    global posX, posY, revX, revY
    kitronik_VIEW128x64.clear_pixel(posX, posY)
    if revX:
        posX += -1
    else:
        posX += 1
    if revY:
        posY += -1
    else:
        posY += 1
    if posX < 10 or posX > 118:
        revX = not (revX)
    if posY < 20 or posY > 54:
        revY = not (revY)
    kitronik_VIEW128x64.set_pixel(posX, posY)
basic.forever(on_forever)
