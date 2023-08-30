import "./Main.css";

function Main({ searchForPokemon }) {
  function handleChange(e) {
    const { name, value } = e.target;
    console.log(`handle change`);
  }

  return (
    <div>
      <h1>Hello</h1>
      <form>
        <label> Search: </label>
        <input type='text' onChange={handleChange}></input>
      </form>
    </div>
  );
}

export default Main;
