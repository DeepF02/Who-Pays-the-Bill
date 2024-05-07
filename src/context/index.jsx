import { useState, createContext } from 'react';
import {ToastContainer, toast} from 'react-toastify';

const MyContext =  createContext();

const MyProvider = (props) => {
    const [stage,setStage] = useState(1);
    const [players,setPlayers] = useState([]);
    const [result,setResult] = useState('');


    const addPlayerHandler = (name) =>{
        setPlayers(prevState => ([
            ...prevState,
            name
        ]));
    }

    const removePlayerHandler = (idx) =>{
        let newPlayerArr = [...players];
        newPlayerArr.splice(idx, 1);

        setPlayers(newPlayerArr);
    }

    const genrateLoser = () => {
        let result = players[Math.floor(Math.random() * players.length)];
        setResult(result);
    }

    const nextHandler = () =>{
        // let newPlayerArr = [...players];
        // newPlayerArr.splice(idx, 1);
        if(players.length<2){
            toast.error('You need more than one Player', {
                position: "top-left",
                autoClose:2000
           });
        }
        else{
            setStage(2);
            console.log();
            setTimeout(()=>{
                genrateLoser();
            }, 2000)
        }
    }

    const resetGameHandle = () => {
        setStage(1);
        setPlayers([]);
        setResult('');
    }

    return(
        <>
            <MyContext.Provider value={{
                // STATE
                stage:stage,
                players:players,
                result:result,
                // METHODS
                addPlayer:addPlayerHandler,
                removePlayer:removePlayerHandler,
                next: nextHandler,
                resetGame: resetGameHandle,
                getNewLoser: genrateLoser
            }}>
                {props.children}
            </MyContext.Provider>
            <ToastContainer/>
        </>
    )

}

export {
    MyContext,
    MyProvider
}