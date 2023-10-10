import { DisplayState, formatTime } from "./helpers"
import { FaPlay, FaPause, FaUndo } from "react-icons/fa"

interface DisplayProps {
    displayState: DisplayState;
    reset: () => void;
    startStop: (DisplayState: DisplayState) => void;
}

const Display: React.FC<DisplayProps> = ({
    displayState,
    reset,
    startStop,
}) => {
    return (
        <div className="Display">
            <h4 id="timer-label">{displayState.timeType}</h4>
            <span id="time-left" style={{color: `${displayState.timerRunning ? "red" : "white"}`}}>
                {formatTime(displayState.time)}
                </span>
                <div>
                    <button id="start-stop" onClick={() => startStop(displayState)}>
                        {displayState.timerRunning ? <FaPause /> : <FaPlay />}
                    </button>
                    <button id="reset" onClick={reset}>
                        <FaUndo />
                    </button>
                </div>
        </div>
    )
}

export default Display