input.onButtonPressed(Button.A, function () {
    basic.showString("" + (steps))
    basic.showString("STEPS")
    if (input.buttonIsPressed(Button.A)) {
        steps = 0
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (7 - steps * 0.007))
    basic.showString("KM")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (steps * 0.007))
    basic.showString("KM")
})
let steps = 0
steps = 0
