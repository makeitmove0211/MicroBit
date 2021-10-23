stop = 0
x = 0
y = 0

def on_forever():
    pass
basic.forever(on_forever)

# 시스텀

def on_forever2():
    global stop, x, y
    while stop != 1:
        stop = 0
        x = randint(0, 4)
        y = 0
        led.plot(x, y)
        basic.pause(500)
        while y < 4 and not (led.point(x, y + 1)):
            led.unplot(x, y)
            y += 1
            led.plot(x, y)
            basic.pause(500)
        # 삭제
        if led.point(0, 4) and (led.point(1, 4) and (led.point(2, 4) and (led.point(3, 4) and led.point(4, 4)))):
            led.unplot(0, 4)
            led.unplot(1, 4)
            led.unplot(2, 4)
            led.unplot(3, 4)
            led.unplot(4, 4)
            basic.pause(500)
            if led.point(0, 3):
                led.unplot(0, 3)
                led.plot(0, 4)
                if led.point(0, 2):
                    led.unplot(0, 2)
                    led.plot(0, 3)
                    if led.point(0, 1):
                        led.unplot(0, 1)
                        led.plot(0, 2)
            if led.point(1, 3):
                led.unplot(1, 3)
                led.plot(1, 4)
                if led.point(1, 2):
                    led.unplot(1, 2)
                    led.plot(1, 3)
                    if led.point(1, 1):
                        led.unplot(1, 1)
                        led.plot(1, 2)
            if led.point(2, 3):
                led.unplot(2, 3)
                led.plot(2, 4)
                if led.point(2, 2):
                    led.unplot(2, 2)
                    led.plot(2, 3)
                    if led.point(2, 1):
                        led.unplot(2, 1)
                        led.plot(2, 2)
            if led.point(3, 3):
                led.unplot(3, 3)
                led.plot(3, 4)
                if led.point(3, 2):
                    led.unplot(3, 2)
                    led.plot(3, 3)
                    if led.point(3, 1):
                        led.unplot(3, 1)
                        led.plot(3, 2)
            if led.point(4, 3):
                led.unplot(4, 3)
                led.plot(4, 4)
                if led.point(4, 2):
                    led.unplot(4, 2)
                    led.plot(4, 3)
                    if led.point(4, 1):
                        led.unplot(4, 1)
                        led.plot(4, 2)
            basic.pause(500)
        if led.point(0, 0) or (led.point(1, 0) or (led.point(2, 0) or (led.point(3, 0) or led.point(4, 0)))):
            stop = 1
    basic.show_leds("""
        # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
    """)
basic.forever(on_forever2)
