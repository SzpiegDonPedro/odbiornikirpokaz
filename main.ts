input.onButtonPressed(Button.A, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
makerbit.onIrDatagram(function () {
    lista = makerbit.irDatagram()
})
let lista = ""
makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.Keyestudio)
basic.forever(function () {
    serial.writeLine(lista)
    if (makerbit.irDatagram() == "0x00FF1AE5") {
        basic.showString("RED")
    } else if (makerbit.irDatagram() == "0x00FF9A65") {
        basic.showString("GREEN")
    } else if (makerbit.irDatagram() == "0x00FFA25D") {
        basic.showString("BLUE")
    } else {
        basic.clearScreen()
    }
})
