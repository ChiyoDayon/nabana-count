import useSound from "use-sound";
import nabanaNoise from './../assets/nabana_noise.wav';


function playSound(){
    const [play] = useSound(nabanaNoise);

    play();
}

export default playSound;