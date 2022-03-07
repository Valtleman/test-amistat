input.onPinPressed(TouchPin.P0, function () {
    basic.showString("" + (randint(0, 100)))
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("" + (Math.randomBoolean()))
})
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.pause(500)
})
