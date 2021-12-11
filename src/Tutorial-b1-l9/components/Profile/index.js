import './index.css';

// Component 1
const Profile = (props) => {
  const propDate = props.registredAt;

  const dateToRender = propDate.getFullYear() + ' ' + monthToToStr(propDate.getMonth()+1) + ' ' + propDate.getDate();

  function monthToToStr(num) {
    return num > 12 || num < 1

      ? null

      : 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')[num - 1];
  }

  return (
    <div className="profile-component">
        <h2>Привет, <strong>{props.name}</strong></h2>
        <h3>Дата регистрации: {dateToRender}</h3>
    </div>
  );
}

export default Profile;