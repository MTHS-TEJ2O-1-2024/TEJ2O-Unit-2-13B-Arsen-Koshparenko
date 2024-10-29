/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Arsen Koshparenko
 * Created on: Oct 2024
 * This program turn off neopixel
*/

//setup
let count = 4
let neopixelStrip: neopixel.Strip = null
basic.clearScreen()
basic.showIcon(IconNames.Happy)
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

//button A is pressed
input.onButtonPressed(Button.A, function () {
    count = 4
    while (count >= 0) {
        basic.showNumber(count)
        basic.pause(500)

        if (count == 4) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.show()
            basic.pause(500)
        }

        if (count == 3) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
            basic.pause(500)
        }

        if (count == 2) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
            basic.pause(500)
        }

        if (count == 1) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
            basic.pause(500)
        }

        if (count == 0) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            neopixelStrip.show()
            basic.pause(500)


        } count = count - 1
    }
    basic.showIcon(IconNames.Happy)
})
