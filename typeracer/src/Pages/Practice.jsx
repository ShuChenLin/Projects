function Practice() {
    return (
        <div>
            <div className="Title">
                <button className="titlebtn1">TypeRacer</button>
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
                            <img src="https://cdn-icons-png.flaticon.com/128/3202/3202926.png" alt="nothing" style={{ height: "40px", width: "40px" }}></img>
                        </div>
                        <div className="runningSpeed">
                            <label> 0 wpm </label>
                        </div>
                    </div>
                    <div className="GameSetting">
                        <button className="Back">
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