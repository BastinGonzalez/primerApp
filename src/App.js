import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {



  const [linea1, setLinea1] = useState('');
  const [Linea2, setLinea2] = useState('');
  const [Imagen, setImagen] = useState('');

  const onChangeLinea1 = function(evento){
    setLinea1(evento.target.value)
  }

  const onChangeLinea2 = function(evento){
    setLinea2(evento.target.value)
  }

  const onChangeImagen = function(evento){
    setImagen(evento.target.value)
  }

  const onClicExportar = function(evento){
    
    html2canvas(document.querySelector("#meme")).then(canvas =>{
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'memesUT.png';
      link.href = img;
      link.click();

    });
  }

  return (
    <div className="App">
    
      <select onChange={onChangeImagen}>

       <option value="Meme1"> Meme 1</option>
       <option value="Meme2"> Meme 2</option>
       <option value="Meme3"> Meme 3</option>
       <option value="Meme4"> Meme 4</option>
       <option value="Meme5"> Meme 5</option>
       <option value="Meme6"> Meme 6</option>
       <option value="Meme7"> Meme 7</option>
       <option value="Meme8"> Meme 8</option>
       <option value="Meme9"> Meme 9</option>
       <option value="Meme10"> Meme 10</option>
       
      </select> <br/>
    
      <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'/><br/>
      <input onChange={onChangeLinea2} type="text" placeholder='Linea 2'/><br/>
    
     <button onClick={onClicExportar}>Exportar</button>

    <div className='meme' id='meme'>
      
      <span>{Linea2}</span><br/>
      <span>{linea1}</span> 
      <img src={"/img/" + Imagen + ".jpg"}/>
    </div>
     
    </div>
  );
}

export default App;
