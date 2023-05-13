import "./TicTacToe.css";
import { Board } from "./components/Board"

export const TicTacToe = () => {
    return (
        <div className="tikTakToeWrapper">
            <h1>Ta-Te-Ti</h1>
            <Board />
        </div>
    )
}