function Header({data}){
    console.log(data)
    return(
      <header>
        <h1>{data.about}</h1>
        </header>
    );
    }
    export default Header;