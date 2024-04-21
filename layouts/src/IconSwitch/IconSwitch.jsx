import "./IconSwitch.css";

export default function IconSwitch({icon, onSwitch}) {
    return (
        <span className="material-icons switchBtn" onClick={onSwitch}>{icon}</span>
    );
}