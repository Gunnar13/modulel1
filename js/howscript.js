import { Howl } from "./howler.min.js";
export const sound = new Howl({
    src: ['js/sound2.mp3'],
    volume: 0.5,
    onend: function () {
        alert('Finished!');
    }
});
sound.play()