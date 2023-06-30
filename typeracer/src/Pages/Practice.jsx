import { render } from "@testing-library/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Practice() {
    const text = "For years I've been rushing around, taking whatever I fancied, not giving a tinker's curse for those I hurt. Yet here I am... with riches and reputation, feeling no wiser than when I left home. Yet when I turn around, and look at the course I've run... there's not a man or woman that I love left standing beside me.";
    const [typedCorrect, setTypedCorrect] = useState('');
    const [typedText, setTypedText] = useState('');
    const [typedWrong, setTypedWrong] = useState(false);
    const [completion, setCompletion] = useState(0);
    const navigate = useNavigate();

    const getWordColor = (index) => {
        let tmpText = typedCorrect + typedText;
        if (tmpText[index] === undefined) {
            return 'black';
        } else if (tmpText[index] === text[index]) {
            return 'rgb(72, 193, 35)';
        } else {
            return 'red';
        }
    };

    const renderText = () => {
        let localError = -1;
        let tmpText = typedCorrect + typedText;

        for (let i = 0; i < tmpText.length; i++) {
            if (tmpText[i] !== text[i]) {
                localError = i;
                break;
            }
        }

        return text.split('').map((char, index) => {

            return <span key={index} style={{
                fontWeight: "bold",
                color: (tmpText[index] !== undefined && index > localError && localError >= 0) ? 'red' : getWordColor(index),
                fontSize: "18px",
            }}>
                {char}
            </span>
        });
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setTypedText(value);
        setTypedWrong(false);
        let tmpText = typedCorrect + value;
        for (let i = 0; i < tmpText.length; i++) {
            if (tmpText[i] !== text[i]) {
                setTypedWrong(true);
                break;
            }
        }

        if (!typedWrong && value[value.length - 1] === ' ') {
            setTypedCorrect(tmpText);
            setTypedText('');
        }
        setCompletion(100 * typedCorrect.length / text.length);
    }

    const goHome = () => {
        navigate("/");
    }

    return (
        <div>
            <div className="Title">
                <button className="titlebtn1" onClick={goHome}>TypeRacer</button>
                <button className="titlebtns">Null</button>
                <button className="titlebtns">Discord</button>
                <button className="titlebtns">About</button>
                <img src="https://images.pexels.com/photos/3800391/pexels-photo-3800391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="nothing" className="UserPic"></img>
                <div className="UserInfo">
                    <button className="UserName">Guest</button>
                    <div className="btns">
                        <button className="btn1">Create Account</button>
                        <button className="btn2">Sign in</button>
                        <label className="speed">0 wpm</label>
                    </div>
                </div>
            </div>
            <div className="PracticeContainer">
                <label className="intro1">Practice Racetrack</label>
                <label className="intro2">You are now practicing yourself, click here to race with others.</label>
                <div className="publicContainer">
                    <div className="pubword">
                        <label className="words">Fighting!!!</label>
                    </div>
                    <div className="Players">
                        <div className="runningCar">
                            <img src="https://cdn-icons-png.flaticon.com/128/3202/3202926.png" alt="nothing" style={{ height: "40px", width: "40px", marginLeft: `${completion}%` }}></img>
                        </div>
                        <div className="runningSpeed">
                            <label> 0 wpm </label>
                        </div>
                    </div>
                    <div className="TypeInfo">
                        <div style={{ margin: "1vw" }}>{renderText()}</div>
                        <input type="text" value={typedText} onChange={handleChange} className="TypedWord"></input>
                    </div>
                    <div className="GameSetting">
                        <button className="Back" onClick={goHome}>
                            Back to Menu
                        </button>
                        <button className="Start">
                            Start New Race
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Practice 