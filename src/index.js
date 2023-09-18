import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(){
 return <img className='avatar' src="./images/wallpaper.jpg" alt="" />
}

function Intro(){
  return <div>
    <h1>Anand Tiwari</h1>
    <p>A software developer working as a Hybrd developer from last 2 yrs at Snapwork Technologies Pvt Ltd.</p>
  </div>
}

function SkillList(){
  return <div className='skill-list'>
    <Skill skill='Angular' emoji='✌️' color='red'/>
    <Skill skill='ReactJS' emoji='🫰' color='yellow'/>
    <Skill skill='HTML+CSS' emoji='👍' color='green'/>
    <Skill skill='Javascript' emoji='🙌' color='blue'/>
    </div>
}

function Skill(props){
  return <div className='skill' style={{backgroundColor:props.color}}><span>{props.skill}</span> {props.emoji}</div>
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
