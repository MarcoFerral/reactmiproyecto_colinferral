const InputNoVowels = () => {
  
  const keyDownHandler = ( evento) => {

    const vocales =['a', 'e', 'i', 'o', 'u']
    if (vocales.includes(evento.key.toLowerCase()) ) {
      evento.preventDefault()

    }

    console.log('tecla:' + );
    console.log(evento.key);
  }
  
  return (
    <div>
      <h3>Input no vowels</h3>
      <input onKeyDown={ keyDownHandler } type='text'/>
    </div>
  )
}
export default InputNoVowels