import './index.css';

// Component 1
const Form = () => {

  let email = ""
  let password = ""

  function handleChangeEvent(e) {

    // Check input type and assign variable value
    switch (e.target.type) {
      case "password":
        password = e.target.value;
        break;

      case "email":
        email = e.target.value;
        break;

    }

    nospaces(e.target);
  }

  // Check for spaces on input with RegExp
  function nospaces(t){
    if(t.value.match(/\s/g)){
      alert('Spaces not allowed');
      t.value=t.value.replace(/\s/g,'');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Check if inputs are filled
    if (email === "" || password === "") {
      alert("Please Fill Form")
    } else {
      console.log({email, password})

      // Clean Inputs after submit
      let inputs = document.getElementsByTagName('input');
      for (let i = 0; i < inputs.length; i += 1) {
        inputs[i].value = '';
      }
    }
  }

  return (

      <form action="" onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <input type="email" onChange={handleChangeEvent} />
          <input type="password" onChange={handleChangeEvent} />
          <button type="submit">Enter</button>
        </div>
      </form>

  );
}

export default Form;