import './index.css';
import React from "react";


// Component 2
class ProfileClass extends React.Component {

  constructor(props) {
    super(props);
    this.name = props.name;
    this.date = props.registredAt;
  }

  dateToRender = (date) => {

    function monthToToStr(num) {
      return num > 12 || num < 1

        ? null

        : 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')[num - 1];
    }

    return date.getFullYear() + ' ' + monthToToStr(date.getMonth()+1) + ' ' + date.getDate();
  }

  render() {
    return (
      <div className="profile-component">
        <h2>Привет, <strong>{this.name}</strong></h2>
        <h3>Дата регистрации: {this.dateToRender(this.date)}</h3>
      </div>
    );
  }
}

export default ProfileClass;