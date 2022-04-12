function Title(prop) {

  return (
    <div className="Title">
      <h1>Monsters</h1>
      <input placeholder="Monster Name" onChange={prop.type}></input>
      <button onClick={prop.handleClick}>Random Monster</button>
    </div>

  );

}

export default Title;

