let y = 0
let x = 0
let stop = 0
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
// 컨트롤
basic.forever(function () {
    while (stop != 1) {
        if (x > 0 && !(led.point(x - 1, y))) {
            if (input.buttonIsPressed(Button.A)) {
                led.unplot(x, y)
                x = x - 1
                led.plot(x, y)
            }
        }
        if (x < 4 && !(led.point(x + 1, y))) {
            if (input.buttonIsPressed(Button.B)) {
                led.unplot(x, y)
                x = x + 1
                led.plot(x, y)
            }
        }
        basic.pause(100)
    }
})
// 시스텀
basic.forever(function () {
    if (input.logoIsPressed()) {
        stop = 0
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        basic.clearScreen()
        basic.pause(200)
    }
    while (stop != 1) {
        music.playTone(494, music.beat(BeatFraction.Half))
        stop = 0
        x = randint(0, 4)
        y = 0
        led.plot(x, y)
        basic.pause(500)
        while (y < 4 && !(led.point(x, y + 1))) {
            led.unplot(x, y)
            y += 1
            led.plot(x, y)
            basic.pause(500)
        }
        // 삭제
        if (led.point(0, 4) && (led.point(1, 4) && (led.point(2, 4) && (led.point(3, 4) && led.point(4, 4))))) {
            led.unplot(0, 4)
            led.unplot(1, 4)
            led.unplot(2, 4)
            led.unplot(3, 4)
            led.unplot(4, 4)
            music.playMelody("C D E F G A B C5 ", 800)
            if (led.point(0, 3)) {
                led.unplot(0, 3)
                led.plot(0, 4)
                if (led.point(0, 2)) {
                    led.unplot(0, 2)
                    led.plot(0, 3)
                    if (led.point(0, 1)) {
                        led.unplot(0, 1)
                        led.plot(0, 2)
                    }
                }
            }
            if (led.point(1, 3)) {
                led.unplot(1, 3)
                led.plot(1, 4)
                if (led.point(1, 2)) {
                    led.unplot(1, 2)
                    led.plot(1, 3)
                    if (led.point(1, 1)) {
                        led.unplot(1, 1)
                        led.plot(1, 2)
                    }
                }
            }
            if (led.point(2, 3)) {
                led.unplot(2, 3)
                led.plot(2, 4)
                if (led.point(2, 2)) {
                    led.unplot(2, 2)
                    led.plot(2, 3)
                    if (led.point(2, 1)) {
                        led.unplot(2, 1)
                        led.plot(2, 2)
                    }
                }
            }
            if (led.point(3, 3)) {
                led.unplot(3, 3)
                led.plot(3, 4)
                if (led.point(3, 2)) {
                    led.unplot(3, 2)
                    led.plot(3, 3)
                    if (led.point(3, 1)) {
                        led.unplot(3, 1)
                        led.plot(3, 2)
                    }
                }
            }
            if (led.point(4, 3)) {
                led.unplot(4, 3)
                led.plot(4, 4)
                if (led.point(4, 2)) {
                    led.unplot(4, 2)
                    led.plot(4, 3)
                    if (led.point(4, 1)) {
                        led.unplot(4, 1)
                        led.plot(4, 2)
                    }
                }
            }
            basic.pause(500)
        }
        if (led.point(0, 0) || (led.point(1, 0) || (led.point(2, 0) || (led.point(3, 0) || led.point(4, 0))))) {
            stop = 1
            music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
        }
    }
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
