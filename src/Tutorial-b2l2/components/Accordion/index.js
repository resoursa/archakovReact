import './index.css';
import React from "react";

// Accordion panel
const Accordion = (props) => {
  const tabs = props.tabsArray;

  let [active, setActive] = React.useState(1);

  const checkClick = () => {
    console.log(setActive, active);
  }

  const tabItem = tabs.map((panel, index) =>
    <div className={active === panel.id ? "tab active" : "tab"} key={index}>
      <input onClick={() => checkClick(setActive(panel.id))} id={"tab-" + panel.id} type="checkbox" name="tabs"/>
      <label htmlFor={"tab-" + panel.id}>{panel.title}</label>

      <div className="tab-content">
        <p>{panel.description}</p>
      </div>
    </div>
  )

  return (
    <div className="app-tabs">

      {tabItem}

    </div>
    )
}

export default Accordion;