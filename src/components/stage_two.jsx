import { useContext } from "react";
import { MyContext } from "../context";

const Stage2 = () => {
    const context=useContext(MyContext);

    return (
        <>
            <div className="result_wrapper">
                <h3>The looser is : {context.result}</h3>
            </div>
            <div
             className="action_button"
             onClick={()=>context.resetGame()}
            >
                START OVER
            </div>
            <div
             className="action_button btn_2"
             onClick={()=>context.getNewLoser()}
            >
                Get New Loser
            </div>
        </>
    )
}

export default Stage2;