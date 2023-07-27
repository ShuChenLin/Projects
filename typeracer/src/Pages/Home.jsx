import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const goPractice = () => {
        navigate('practice');
        console.log("test for git in this computer");
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
                    </div>
                </div>
            </div>
            <div className="MainContainer">
                <div className="publicContainer">
                    <div className="pubword">
                        <label className="words">Global Typing Competition</label>
                        <label className="info">Increase your type speed by racing with others!</label>
                    </div>
                    <button className="pubbtn">Enter a Type Race</button>
                </div>
                <div className="privateContainer">
                    <div className="offlineBlock">
                        <div className="Infos">
                            <label className="Big">Typing Test</label>
                            <label className="Small">Improve your skills by yourself</label>
                        </div>
                        <button className="privbtn1" onClick={goPractice}>Practice Yourself</button>
                    </div>
                    <div className="onlineBlock">
                        <div className="Infos">
                            <label className="Big">Type With Your Friends</label>
                            <label className="Small">Invite your friends to race with you</label>
                        </div>
                        <button className="privbtn2">Create A Race Room</button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home