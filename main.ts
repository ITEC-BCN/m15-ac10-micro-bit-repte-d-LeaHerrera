basic.forever(function () {
    if (input.temperature() > 22) {
        basic.showString("Calor")
    } else {
        basic.showString("Fred")
    }
})
basic.forever(function () {
    if (input.lightLevel() > 200) {
        music.setVolume(255)
        music.play(music.stringPlayable("F G F G - A B C5 ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("A G A B A A B C5 ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("B B A G F G F A ", 120), music.PlaybackMode.UntilDone)
    } else if (input.lightLevel() > 50) {
        music.setVolume(50)
        music.play(music.stringPlayable("C D D C D E D D ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("D D C E C D D C ", 120), music.PlaybackMode.UntilDone)
    }
})
