"use client";

import Content from "@/app/catalogo/componentes/content/content";
import MainCap from "@/app/catalogo/componentes/main/main";
import Web from "@/app/catalogo/componentes/web/web";
import Codigo from "@/componentes/cursos/codigo/codigo";
import Resumen from "@/componentes/cursos/resumen/resumen";
import Texto from "@/componentes/cursos/texto/texto";
import Titulo from "@/componentes/cursos/titulo/titulo";


import "./formularios.css";
import { useState } from "react";

function Formularios() {
    const [editableValue, setEditableValue] = useState("Se puede editar valor");
    const [readonlyValue] = useState("No se puede editar valor");
    const [whiteText, setWhiteText] = useState("valor");
    

    return (
        <MainCap>
            <Resumen>
                <Titulo text={`formularios`}/>
                <Titulo level={2} text={`Atributos`}/>
                <Texto texto={`Ahora veremos los atributos del formulario y de los input`}/>
                <Codigo lenguaje={"html"} codigo={`<form action="/ap//datos">   <!-- A donde enviar los datos -->
  <input type="text">   <!-- Usar un tipo de campo -->
  <input type="text" placeholder="nombre">  <!-- Texto indicativo de inputs -->
  <input type="text" required>  <!-- Llenar input de forma obligatoria -->
  <input type="text" value="valor">  <!-- Poner un valor por defecto al input --> 
  <input type="text" readOnly>  <!-- No se podra editar el valor de un input -->
</form>`}/>
                <Web>
                    <div>
                        <input type="text" />
                        <input type="text" placeholder="nombre" />
                        <input type="text" required />
                        <input type="text" onChange={e=>setWhiteText(e.target.value)} value={whiteText}/>
                        <input type="text" readOnly />
                    </div>
                </Web>


                <Titulo level={2} text={`Tipos de campo`}/>
                <Texto texto={`Con los formularios vamos a recoger datos del usuario.`}/>
                <Content position="start">
                    <Codigo lenguaje={"html"} codigo={`<form>
  <input type="text">  <!-- texto -->
  <input type="password">   <!-- contraseña -->
  <input type="number">   <!-- numero -->
  <input type="email">    <!-- correo electronico -->
  <input type="color">    <!-- colores -->
  <input type="range" min="2" max="25">   <!-- rangos -->
  <input type="date">   <!-- fecha -->
  <input type="time">   <!-- hora -->
  <input type="button" value="boton">   <!-- boton personalizado -->
  <input type="submit">   <!-- boton para enviar informacion -->
  <textarea>    <!-- Campo para escribir lo que sea -->
    texto
  </textarea>
</form>`}/>
                    <Web>
                        <div className="content--form--formulario--html--catalogo">
                            <input type="text" />
                            <input type="password" />
                            <input type="number" />
                            <input type="email" />
                            <input type="color" />
                            <input type="range" min="2" max="25" />
                            <input type="date" />
                            <input type="time" />
                            <input type="button" value="boton" />
                            <input type="submit" />
                            <textarea defaultValue={"texto"}></textarea>
                        </div>
                    </Web>
                </Content>

            </Resumen>
            <Titulo text={`formularios`}/>
            <Texto texto={`Formularios en HTML: permiten enviar información al servidor. Se crean con <form> y tienen campos de entrada. Al hacer clic en enviar, la información se envía al servidor para ser procesada.

Tambien nosotros mismos podemos procesar la informacion de los inputs para hacer una que otra cosa interesante con javaScript.

Estos tienen un proceso ordenado que pasa cuando se interactua con los inputs.

1- input es lo que envia el usuario osea una entrada de datos.
2- procesamiento es lo que pasa o se hace con los datos.
3- output es lo que recibira el usuario o una escucha.

Ahora veremos como es la estructura de los formularios.

1- Se crea form
2- Input siempre ira dentro de form`}/>
            <Codigo lenguaje={"html"} codigo={`<form>
  <input>
  <input>
</form>`}/>
            <Web>
                <form>
                    <input />
                    <input />
                </form>
            </Web>


            <Titulo level={2} text={`Atributos de form e input`}/>
            <Texto texto={`1- "name" aqui va el nombre del input para trabajar con un lenguaje backend, sera la forma de identificar y recojer un dato desde el lenguaje backend por ahora sera irrelevante.

2- "action" bueno esto tambien es para un lenguaje backend, pero en simples palabras sirve para enviar la informacion del formulario a algun lugar.

3- "type" es para poner el tipo de campo que sera el input de hecho ahora mismo veremos los tipos de inputs.`}/>
            <Codigo lenguaje={"html"} codigo={`<form action="/api/procesar">
  <input type="text" name="dato">
</form>`}/>
            <Web><input type="text" name="dato" /></Web>
            <Titulo level={2} text={`type`}/>
            <Texto texto={`Este es un atributo que va dentro del campo input.`}/>
            <Codigo lenguaje={"sintaxis"} codigo={`<input type="aqui el tipo de dato" name="dato">`}/>
            <Codigo lenguaje={"html"} codigo={`
________________________________________________________
|               |
|   type        |   funcion
|_______________|_______________________________________
|               |
|    text       |   Esto es para textos.
|_______________|_______________________________________
|               |   este es para poder poner contraseñas 
|   password    |   osea que ocultara los caracteres que 
|               |   se escriban sobre el input.
|_______________|________________________________________
|               |   este es para poner solo numeros
|  number       |   no se podran escribir letras sobre 
|               |   este input.
|_______________|________________________________________
|               |   este es para poner solamente emails 
|   email       |   si no lo hace saltara un mensaje que 
|               |   debes poner un email.
|_______________|________________________________________
|               |   
|   color       |   este es para seleccionar un color.
|_______________|________________________________________
|               |   este es para seleccionar un rango 
|               |   esto a su vez tiene 2 aributos que 
|   range       |   son "min" y "max" en estos pondremos 
|               |   el minimo y el maximo.
|_______________|________________________________________
|               |
|   date        |   este es para poner una fecha.
|_______________|________________________________________
|               |
|   time        |   este es para poner una hora.
|_______________|________________________________________
|               |   este es para poner un boton este 
|               |   tiene una propiedad llamada "value" 
|   button      |   que es lo que queremos que diga 
|               |   el boton.
|_______________|________________________________________
|               |   este es un boton que se encargara de
|   submit      |   enviar los datos tambien tienen el 
|               |   atributo value.
|_______________|________________________________________`}/>
            <Content position="start">
                <Codigo lenguaje={"html"} codigo={`<form>
  <input type="text">
  <input type="password">
  <input type="number">
  <input type="email">
  <input type="color">
  <input type="range" min="2" max="25">
  <input type="date">
  <input type="time">
  <input type="button" value="boton">
  <input type="submit">
</form>
`}/>
                <Web>
                    <div className="content--form--formulario--html--catalogo">
                        <input type="text" />
                        <input type="password" />
                        <input type="number" />
                        <input type="email" />
                        <input type="color" />
                        <input type="range" min="2" max="25" />
                        <input type="date" />
                        <input type="time" />
                        <input type="button" value="boton" />
                        <input type="submit" />
                    </div>
                </Web>
            </Content>
            
            <Titulo level={2} text={`atributos de input`}/>
            <Texto texto={`1- required es para que el usuario tenga que llenar ese input de forma obligatoria.

2- placeholder es para poner un texto indicativo al usuario.`}/>
            <Codigo lenguaje={"html"} codigo={`<form>
  <input type="text" required placeholder="nombre">
  <input type="email"  required placeholder="correo">
  <input type="password" required placeholder="contraseña">
  <input type="text" placeholder="nombre (opcional)">
  <input type="submit" value="enviar todos los datos">
</form>`}/>
            <Web>
                <div>
                    <input type="text" required placeholder="nombre" />
                    <input type="email"  required placeholder="correo" />
                    <input type="password" required placeholder="contraseña" />
                    <input type="text" placeholder="nombre (opcional)" />
                    <input type="submit" value="enviar todos los datos" />
                </div>
            </Web>
            <Titulo level={2} text={`textArea`}/>
            <Texto texto={`En este input se puede escribir lo que sea y ademas se puede agrandar o achicar como queramos.`}/>
            <Codigo lenguaje={"html"} codigo={`<textarea>
  texto
</textarea>`}/>
            <Web>
                <textarea defaultValue={"texto"}>
                </textarea>
            </Web>
            <Titulo level={2} text={`value`}/>
            <Texto texto={`Este atributo es el valor que tiene un campo osea que si en un input se escribe "hola" el valor del input sera "hola", este atributo se suele usar para poner valores por defecto o para modificar un valor desde javaScript u otros lenguajes de programacion.`}/>
            <Codigo lenguaje={"html"} codigo={`<form>
  <input type="text" value="Editar valor">
  <input type="text" value="">
</form>`}/>
            <Web>
                <div>
                    <input type="text" defaultValue="Editar valor" />
                    <input type="text" defaultValue="" />
                </div>
            </Web>
            
            <Titulo level={2} text={`readOnly`}/>
            <Texto texto={`Con este atributo evitaremos que se pueda modificar el valor de un campo.`}/>
            <Codigo lenguaje={"html"} codigo={`<form>
  <input type="text" value="Se puede editar valor">
  <input type="text" value="No se puede evitar valor" readonly>
</form>`}/>
            <Web>
                <div>
                    <input
                        type="text"
                        value={editableValue}
                        onChange={(e) => setEditableValue(e.target.value)}
                    />
                    <input type="text" defaultValue={readonlyValue} readOnly />

                </div>
            </Web>
        </MainCap>
    );
}

export default Formularios;