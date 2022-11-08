URLS DEL PROYECTO:  
Netlify: https://festivaldegifs.netlify.app  
GitHub: https://github.com/hectoralvaez/festival-de-gifs  
GitHub Pages: https://hectoralvaez.github.io/festival-de-gifs/  

React, Vite, GitHub, Jest, React Testing Library, Netlify, GitHub Pages


## ARRANCAR UN PROYECTO CON YARN + VITE:  
En la carpeta donde vamos a instalar el proyecto:  
`yarn create vite`

1. Nos pide el nombre del proyecto:  
`hook-app`
2. Seleccionamos el framework "React"  
3. Seleccionamos la variante "JavaScript"  

En la carpeta donde ya se ha instalado el proyecto:  
`yarn`

Para ejecutar la aplicación:  
`yarn dev`



> ### LINKS DE INTERÉS:  
> [Documentación de React y recursos relacionados](https://es.reactjs.org/docs/getting-started.html)  

> EXTRAS:  
> 
> - [GitHub](https://github.com/): Plataforma de alojamiento de código para el control de versiones y la colaboración.
> - [Netlify](https://www.netlify.com/): Desplegar desplegar aplicaciones sin BackEnd.
> - [Jest](https://jestjs.io/): Para hacer tests en Babel, TypeScript, Node, React, Angular, Vue y más. (combinada con [React Testing Library](https://testing-library.com/docs/))
> - [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro/): Librería para hacer tests en React (combinada con [Jest](https://jestjs.io/)).  
En las instalaciones CRA ya viene instalada, con Vite hay que hacer la instalación a parte.  
En terminal: `yarn add --dev @testing-library/react @types/jest jest-environment-jsdom`
> - [Vite](https://vitejs.dev/): La alternativa a [Create React App (CRA)](https://create-react-app.dev/), es más ligero


> MORE INFO:  
> [Use Vite for React Apps instead of CRA](https://dev.to/nilanth/use-vite-for-react-apps-instead-of-cra-3pkg)

> ## TESTS
>> NOTA:  
>> Siempre falta tiempo para hacer tests, por lo tanto, se recomienda, como mínimo, hacer el test de la ruta crítica, es decir, la parte principal de la app. Si fuera una tienda, la ruta crítica es el proceso de compra (añadir productos al carito, el cesto de la compra, etc...)  
>
>> [Más info de tests AAA (Patrón AAA)](https://geeks.ms/jorge/2018/08/25/unit-testing-y-el-patron-aaa/)  
>> 1. Arrange (Organizar/Inicializa) => Inicializa los objetos y establece los valores de los datos que vamos a utilizar en el Test que lo contiene.
>> 2. Act (Actuar) => Realiza la llamada al método a probar con los parámetros preparados para tal fin.
>> 3. Assert (Confirmar/Comprobar) => Comprueba que el método de pruebas ejecutado se comporta tal y como teníamos previsto que lo hiciera.
>
>> EXTRA INFO JEST:
>> - [expect](https://jestjs.io/docs/expect)
>
>> EXTRA INFO REACT TESTING LIBRARY (RTL):  
>> `screen`  
>>El objeto `screen` de React Testing Library (RTL) proporciona métodos para consultar los elementos representados del DOM para hacer afirmaciones sobre su contenido de texto, atributos y más. [Queries](https://testing-library.com/docs/queries/about/)


> EXTRA INFO REACT:  
>  - Para evitar que, por ejemplo, aparezca duplicado el console.log de la llamada al `useEffect`, eliminar el `<React.StrictMode>` del `main.jsx`.

> EXTRA INFO:  
> - Las dev tools de Chrome solo funcionan en desarollo, cuando estamos en producción, no funcionan.

> EXTRA INFO VISUAL STUDIO CODE:  
> - Para crear un Functional Component `rafc`.


---

<br />

# 🪝 120. useEffect unmount - Cleanup

Cuando llamamos el snippet del `useEffect` automáticamente genera 3 partes:

Tenemos el callback, o función de retorno formado por el cuerpo `first` y el "cleanup" (limpieza) que sería el return con el contenido `second`. 

A continuación encontramos la array con las dependencias `[third]`
```javascript
useEffect(() => {
    first;

    return () => {
        second;
    };
}, [third]);
```

### Cleanup `second`
Esta función la utilizaremos para limpiar, cancelar observables, cancelar algún tipo de subscripción o listener para evitar que siga consumiendo memoria. 


Este `if` solo muestro el component <Message /> si el `username` es exactamente igual a "Héctor2".

```javascript
{
    (username === 'Héctor2') && <Message />
}
```

Simplemente con esto, ya desaparece por completo todo el componente, no hace falta el Cleanup para hacerlo desaparecer. En este ejemplo, no es muy útil el cleanup, de hecho, no está haciendo nada, solo el console.log para saber que el componente se ha desmontado.  

Esto será útil cuando en el momento de desmontar un componente, tengamos que liberar espacio cancelando observables, algún tipo de subscripción o listener.



---

<br />

# 🪝 119. Dependencias del useEffect

`useEffect` está formado por dos argumentos:  
El primero es el callback, es decir, la función que se va a disparar.  
El segundo son las dependencias, que es un array en el cual marcamos las condiciones que van a hacer que se dispare el `useEffect`. 

Si llamamos el `useEffect` sin dependencias (no se recomienda poner un `useEffect` sin dependencias) este se disparará cada vez que el componente es redibujado (al cargarse o al hacer cambios en cualquier elemento que lo forma).  

Seguramente este no sea el comportamiento que queremos, ya que lo normal sería que el `useEffect` esté vinculado a una acción en concreto, no a todos los cambios del componente.  

> React recomienda tener UN EFECTO POR CADA ACCIÓN que se quiera ejecutar, es decir, en lugar de tener un solo efecto que haga muchas acciones, es mejor tener EFECTOS ESPECÍFICOS por cada efecto secundario o acción que se quiera ejecutar.


EJEMPLO [NO RECOMENDADO]: Se ejecuta SIEMPRE que se redibuja el componente, ya que no tiene dependencias.

```javascript
useEffect( () => {
    console.log('useEffect called!');
});
```

Si en las dependencias pasamos un array vacío, el `useEffect` solo se ejecutará la primera vez que se renderize el componente:

```javascript
useEffect( () => {
    console.log('useEffect called!');
}, []);
```

Si en las dependencias pasamos la referencia del formulario (`formState`) solo se ejecutará cuando haya cambios en el formulario (y la primera vez que se carga el componente):

EJEMPLO: Se ejecuta SOLO si hay cambios en el FORM.

```javascript
useEffect( () => {
    console.log('formState changed!');
}, [formState]);
```

Si en las dependencias pasamos la referencia del email dentro del formulario (`email`) solo se ejecutará cuando haya cambios en el email (y la primera vez que se carga el componente):

EJEMPLO: Se ejecuta SOLO si hay cambios en el EMAIL del formulario.

```javascript
useEffect( () => {
    console.log('email changed!');
}, [email]);
```
---

<br />

# 🪝 118. [useEffect](https://es.reactjs.org/docs/hooks-effect.html) - SimpleForm

useEffect es uno de los hooks más usados junto con useState.  

Antes de empezar con `useEffect`, necesitamos mantener el "estado", es decir, mantener la información del formulario.  

Hay más hooks que nos permiten mantener estados, pero hasta el momento, el que conocemos es `useState`.  

```javascript
const [formState, setFormState] = useState({
    username: 'Héctor',
    email: 'hector@gmail.com'
});
```

Desestructuramos el `formState`:  
```javascript
const { username, email } = formState;
```

De esta manera ya podemos llamar al valor en los inputs `value={ email }`:
```
<input
    type="email"
    className="form-control mt-2"
    placeholder="email@loquesea.com"
    name="email"
    value={ email }
/>
```

Ahora ya podemos ver el valor asignado en los inputs, pero no se pueden cambiar porque React "trabaja en una sola vía", quiere decir que si se hace un cambio en el state, se tiene que volver a dibujar, es decir, llamar a una función que vuelva a pasar por el state.  

Creamos una función que nos permita hacer cambios en los inputs:


```javascript
const onInputChange = ( event ) => {
    console.log(event);
}
```

```
<input
    type="email"
    className="form-control mt-2"
    placeholder="email@loquesea.com"
    name="email"
    value={ email }
    onChange={ onInputChange }
/>
```


### PROCESO DE OBTENCIÓN DE DATOS:

Hacemos console log dentro de la función, de manera que cada vez que cambie el input tocando cualquier tecla, se dispare la función `onChange={ onInputChange }`  

1 - `console.log(event)`
Así recibimos toda la información vinculada al evento. 
```javascript
const onInputChange = ( event ) => {
    console.log(event);
}
```
Podemos ver TODA la información.  


2 - `console.log(event.target)`
```javascript
const onInputChange = ( event ) => {
    console.log(event.target);
}
```
Con `event.target` recibimos el input completo en html.
```
<input type="email" class="form-control mt-2" placeholder="email@loquesea.com" name="email" value="hector@gmail.com">
```


3 - `console.log(event.target.value)`
```javascript
const onInputChange = ( event ) => {
    console.log(event.target.value);
}
```
Con `event.target.value` recibimos el valor del input con el cambio aplicado al valor inicial.
```
Héctor2
```

4 - `console.log(event.target.name)`
```javascript
const onInputChange = ( event ) => {
    console.log(event.target.name);
}
```
Con `event.target.name` recibimos el nombre del input que se está cambiando.
```
email
```

5 - Del `event`, desestructuramos el `target`
```javascript
const onInputChange = ({ target }) => {
    const { name, value } = target;
    console.log({ name, value });
}
```
Recibimos el objeto con los dos valores indicados y m´s información del objeto:
```
{name: 'username', value: 'Héctor2'}.
```

Ahora ya tenemos la información que necesitamos (name, value) del input al que estamos aplicando cambios para poder aplicar el `setFormState`


### ASIGNAR EL VALOR AL INPUT:

En la función `onInputChange`, llamamos al `setFormState` para registrar el valor del input.  

Antes de nada, desestructuramos el `formState`, ya que podría tener muchos otros valores que no queremos perder, para eso usamos Spread Operator `...formState,`  

A continuación, usamos las "propiedades computadas el objeto" y hacemos referencia al "name" de la siguiente manera para asignarle el nuevo valor:  
`[ name ]: value`

Este es el resultado de la función

```javascript
const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
        ...formState,
        [ name ]: value
    });
}
```



---

<br />

# 🪝 117. Exponer métodos del Hook

## PARA CREAR FUNCIONES DENTRO DE UN HOOK Y PODERLAS REUTILIZAR: 
### Declarar la función dentro del hook (useCounter.js):

```javascript
const increment = () => {
    setCounter( counter + 1);
}
```

### Enviar la función desde el hook (useCounter.js):
Pasar el resultado de la función al `return`:  
```javascript
return {
    counter,
    increment,
}
```
(el `counter`ya se lo estábamos pasando)


### Recibir la función en el component (CounterWithCustomHook.jsx):
Desestructuramos el contenido que recibimos de `useCounter.js`, es necesario tener importado el hook `import { useCounter } from "../hooks/useCounter";`  
```javascript
const { counter, increment } = useCounter();
```
(el `counter`ya se lo estábamos recibiendo)

### Usar la función en el component (CounterWithCustomHook.jsx):
```javascript
onClick={ increment }
```

Una forma sencilla de controlar que el contador no llegue a valores negativos.  
```javascript
const decrement = () => {
    if ( counter === 0 ) return; // Aquí sale de la función.
    setCounter( counter - 1);
}
```

### Usar onClick con y sin argumentos:
Cuando hacemos `onClick`, estamos pasando el *evento del click* como **primer argumento**.  

#### VERSIÓN 1 SIN ARGUMENTO:
Si la función no tienen ningún argumento:  
```javascript
const increment = () => {
    setCounter( counter + 1);
}
```
Se puede hacer la llamada a la función dentro del onClick sin ningún problema:
```javascript
onClick={ increment }
```

#### VERSIÓN 2 CON ARGUMENTO:
La función dentro del onClick, en realidad lo que está haciendo es lo siguiente:
```javascript
onClick={ () => increment() }
```


Si la función tiene que recibir un argumento la declaramos así:  
```javascript
const increment = ( value = 1 ) => { // Si no se pasa el argumento "value", por defecto será "1"
    setCounter( counter + value );
}
```

Ahora sí podemos pasar el valor que va a incrementar:
```javascript
onClick={ () => increment(2) }
```



`[object Object]` es la representación `toString` de un objeto, es decir, deja de funcionar como `object` y pasa a ser un `string`



---


<br />

# 🪝 116. useCounter - CustomHook

La ventaja de crear un custom hook es que lo puedes reutilizar en toda la aplicación y no tener que repetir toda la lógica y "carpintería" para algo tan sencillo.  

Nuestros hooks los añadimos en la carpeta `hooks` y es un estandar que empiecen con 'use', en este caso `useCounter.js`.   

Un hook no es más que una simple función con un `return`que puede ser un objeto `return{}`, un array `return[]`, un boleano `return true`, puede ser lo que necesitemos que devuelva.  

Dependiendo de lo que devuelva, a la hora de usarlo habrá que definirlo como objeto:  
```javascript
const {} = useCounter();
```
O como array:
```javascript
const [] = useCounter();
```

En nuestro caso, lo hacemos como objeto, ya que la desestructuración ya que nos permite desestructurar exactamente lo que necesitamos por nombre y además es la práctica más habitual.  

Para aplicar la desestructuración al objeto:  
```javascript
const { counter } = useCounter();
```

Y poder usar el valor dentro del código:  
```javascript
{ counter } 
```

Normalmente los Customs Hooks están vinculado con hooks propios de React, en este caso el `useState`.

---

<br />

# 🪝 115. [useState](https://es.reactjs.org/docs/hooks-state.html)  [IMPORTANTE] ⭐

useState es el hook más sencillo.  

## useState con un valor:

Podemos inicializar el useState con un valor:  
```javascript
const [counter, setCounter] = useState(10)
```

Al que luego hacemos referencia de la siguiente manera:  
```javascript
{ counter }
```

Y que podemos manipular así:  
```javascript
onClick={ () => setCounter( counter + 1 ) }
```


Dicho esto, podemos inicializar useState con:
- **valor primitivo** (el ejemplo anterior)
- **array**
- **objecto**, 
- **la instancia de una clase**
- o lo que necesite el state...


## useState con un objeto:
```javascript
const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
})
```

Al que luego hacemos referencia de la siguiente manera:  
```javascript
{ counter.counter1 }
```

NO LO PODEMOS MANIPULAR ASÍ, ya que es un objeto y cambia el state de todos los valores del objeto:  
```javascript
onClick={ () => setCounter( counter.counter1 + 1 ) }
```

## useState con un objeto DESESTRUCTURADO:
```javascript
const [{counter1, counter2, counter3}, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
})
```

Al que luego hacemos referencia de la siguiente manera:  
```javascript
{ counter1 }
```

NO LO PODEMOS MANIPULAR ASÍ, ya que es un objeto y cambia el state de todos los valores del objeto:  
```javascript
onClick={ () => setCounter( counter1 + 1 ) }
```

Para ver el estado de los hooks, vamos a chrome, en la pestaña de React "Components" veremos que el estado del objeto al iniciar la aplicación es:  
```javascript
{counter1: 10, counter2: 20, counter3: 30}
```

Pero al hacer click en el botón el State pasa a ser `11`.  

> NOTA: Nada impide cambiar un estado dentro de un useState (pasar de objeto a numérico), trabajando con typeScrript, podríamos obligar a que no cambie de estado.

Para manipular el objeto con useState, hay que preservar los valores anteriores.  
Al llamar a `setCounter`, lo que estamos haciendo es establecer el nuevo valor del state.  

```javascript
onClick={ 
    () => setCounter( {
        counter1: counter1 + 1,
        counter2: counter2,
        counter3: counter3
    } )
}
```

Para simplificarlo:  
VERSIÓN 1:  
```javascript
const [{ counter1, counter2, counter3 }, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
})
```

Como el valor és el mismo, no hace falta volver a asignarle el valor
```javascript
onClick={ 
    () => setCounter( {
        counter1: counter1 + 1,
        counter2, 
        counter3,
    } )
}
```

VERSIÓN 2:  
Con `state` y desestructurando el propio `state` para facilitar el uso de "Spread Operator", ("esparcir" las propiedades), lo que nos permite copiar rápidamente todo o parte de una array u objeto existente en otra array u objeto.

```javascript
const [ state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
})

const {counter1, counter2, counter3 } = state
```

Usamos `...` en "state" para recuperar el valor del resto de los valores del objeto y solo aplicamos el cambio al que queremos modificar.  
```javascript
onClick={ 
    () => setCounter( {
        ...state,
        counter1: counter1 + 1,
    } )
}
```


<br />

---
# 🪝 113. Temas puntuales de la sección

## ¿Qué veremos en esta sección?

- Profundizar en el tema de los Hooks
- Crear otros customHooks
- useState
- useCounter - Personalizado
- useEffect y sus precauciones
- useRef
- useFetch - Personalizado + optimizaciones
- useLayoutEffect
- Memo
- useMemo
- useCallback

Estos son los Hooks relativamente simples, aún hay mas que explicaremos más adelante, pero en esta sección nos enfocaremos en estos trabajos y para qué nos pueden servir.  
Adicionalmente estaremos dejando las bases para lo que será una sección de pruebas sumamente interesante después.  

<br />

---

# 🆕 INICIO SECCIÓN 9: Profundizando Hooks - Generales

---

# 🏁 FIN SECCIÓN 8: Testing - Probando la aplicación de GifExpert


# 🔬 110. Pruebas de tarea (sobre GifExpert)

### TODO: Hacer las pruebas, por ejemplo:  
✅ Tomar un snapshot  
🔳 Escribir en input i enviar formulario y ver qué pasa  
🔳 Que pasa si se envía la misma cataegoria  
🔳 Que pasa si se envía una cataegoria diferente  

<br />

---

# 🔬 109. Pruebas sobre customHooks
En la versión 16 y 17 de React se utilizaba el [React Hooks Testing Library](https://react-hooks-testing-library.com).  

En la versión 18 no se recomienda utilizarlo, ya no funciona, pero se ha fusionado con React Testing Library (RTL), por lo tanto, los hooks están integrados en React Testing Library (RTL).  


Con los Hooks tenemos que evaluar:  
- Elementos de entrada
- Salida

Por lo general los Hooks usan sus propias funciones para cambiar el estado, pero en este caso, hacemos nosotros el cambio manualmente de `isLoading: true` a `isLoading: false`

Los Hooks solo pueden ser llamados dentro del cuerpo de un Functional Component.  

Aparentemente, se podría hacer de la siguiente manera:  

```javascript
const { images, isLoading } = useFetchGifs();
```

Pero no funciona porque los Hooks necesitan parte del ciclo de vida de los componentes de React, no se pueden evaluar de forma aislada.  

Para eso podemos usar la funcion `RenderHook` de React Testing Library (antes (React 16/17) se tenía que importar de "React Hooks Testing Library", pero ya está integrado en RTL).  

Creamos un Call Back (una función) en la que mandamos llamar el hook "useFetchGifs" pasándole la categoría 'APM'

```javascript
renderHook( ()=> useFetchGifs('APM') );
```

`renderHook` devuelve varias cosas, así que lo desestructuramos:
```javascript
const { result } = renderHook( () => useFetchGifs('APM') ); 
```
Obteniendo este objeto:  
`{ current: { images: [], isLoading: true } }`

Desestructuramos el resultado "result.current"  
```javascript
        const { images, isLoading } = result.current;   
```
Y ya podemos hacer los Aserts:  
```javascript
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
```


El segundo test, bastante denso, con un async/await e importando `waitFor`de RTL  

<br />

---
# 🔬 108. Hacer un mock completo de un Custom Hook
Hace un Mock completo de este path "../../src/hooks/useFetchGifs":  
```javascript
jest.mock('../../src/hooks/useFetchGifs');  
```
(Hay que importarlo previamente `import { useFetchGifs } from "../../src/hooks/useFetchGifs";`)

Una vez dentro del test, usamos `mockReturnValue`, una función de Jest para simular que se dispara la función:  
```javascript
useFetchGifs.mockReturnValue({      
    images: [],
    isLoading: true
});
```


<br />

---
# 🔬 107. Pruebas del componente GifGrid - Mock customHook

Este component trabaja con un Custom Hook, lo que hace un poco más complicado el testeo.  

Pero en este test solo nocs centramos en probar el GifGrid, el custom hook useFetchGifs se testeará a parte, para simplificar los tests.  

Tienen que ser tests unitarios, no es obligatorio comporbar todo lo que hay dentro del componente, solo el funcionamiento del componente en sí.

<br />

---

# 🔬 106. Jest Functions
Tenemos que evaluar el comportamiento de una función, en nuestro caso, que onNewCategory sea llamada con el valor que tenía la caja de texto.  

onNewCategory, es una función que se está enviando como argumento a "AddCategory" y además esa función es obligatoria, definida con propTypes como .isRequired  

La función cuando se está evaluando en el test es esta `()=> {}`  

¿Cómo evaluamos esa función? Hay que saber si ha sido llamada, con qué valor ha sido llamada, que se haya llamado una vez, etc  

Así definimos una función "Mock" con Jest (en testing llamamos "Mock" a una simulación).  

```javascript
const onNewCategory = jest.fn();
```

  

<br />

---


# 🔬 105. Simular un submit del formulario

Tenemos que hacer dos pruebas
1. El submit del form
2. El valor del input (si va vacío/si tiene datos)

NOTA:  
React testing Library no detecta el "form" si no le añadimos el `aria-label="form"`  


<br />

---

# 🔬 103. Pruebas en el helper getGifs

No nos vamos a detener a analizar cada parte del código de la función.  
Sí analizaremos el resultado de la función, pasando una categoría, tiene que devolver una respuesta concreta, pero no entramos a testear el `fetch`ni nada en concreto.

Si estamos evaluando el funcionamiento de una API externa, no podemos estar seguros de la respuesta que va a dar.  
Por ejemplo, no podemos hacer un console.log de lo que devuelve la función pasando por la api y compararlo ya que podrían añadir nuevos gifs.  

APUNTE:  
Si la función es asíncrona, el test también lo hacemos como "async" `test('Tiene que retornar un array de gifs', async() => {` y podemos usar el "await" al llamar la función `const gifs = await getGifs(category);`  

✕ TEST QUE NO NOS SIRVEN PARA CONFIRMAR EL FUNCIONAMIENTO DE LA FUNCIÓN:  
1. No sirve pillar la respuesta que nos da el `console.log(gifs)` y compararla con lo que devuelve el test, podrían haber cambios en la API
2. Si supieramos que SIEMPRE va a devolver un array de 20 elementos, si la categoría devuelve menos de 20 resultados, petaría, pero no querría decir que falla nuestra aplicación. Por lo tanto, `expect( gifs.length ).toBe( 20 );` no sería un buen test.


✓ TEST QUE SÍ NOS SIRVEN PARA CONFIRMAR EL FUNCIONAMIENTO DE LA FUNCIÓN:  
1. Para asegurar que por lo menos devuelva un elemento en el array `expect( gifs.length ).toBeGreaterThan( 0 );` (pero no nos aseguramos de que sea un array de gifs)
2. Para asegurar que devuelva un arreglo de gifs como mínimo con la estructura que tenemos marcada en la función (id, title, url)  
```javascript
expect( gifs[0] ).toEqual({
    id: expect.any( String ),
    title: expect.any( String ),
    url: expect.any( String ),
});
```
(Simplemente evaluamos que devuelvan "strings", no miramos que la url tenga "http" ni nada parecido)

<br />

---

# 🔬 102. Pruebas del componente - GifGridItem

`screen.debug();`  
Con screen.debug en el test, imprimimos la estructura completa de lo que estamos testeando, lo que permite ver cada elemento html  

Uso de `screen`  
Se recomienda desestructurar el objeto generado con 'screen', en este caso "screen.getByRole('img')"  
Para evitar repetir `screen.getByRole('img')` y tener que hacer referencia a cada atributo así `screen.getByRole('img').alt` o así `screen.getByRole('img').url`  
<br />

Lo desestructuramos  
```javascript
const { src, alt } = screen.getByRole('img'); // Aquí está el objeto desestructurado
```  

Para usarlo de la siguiente manera:  
```javascript
expect( src ).toBe( url );      // expect(screen.getByRole('img').src).toBe( url );
expect( alt ).toBe( title );    // expect(screen.getByRole('img').alt).toBe( title );
```  


<br />

---

# 🔬 100. Implementando PropTypes

Instalar las PropTypes (en termminal):  
`yarn add prop-types`
<br />



> ### TAREA:
> 1. Añadir PropTypes
>     - title obligatorio
>     - url obligatorio
> 
> 2. Evaluar el snapshot  


### 1 - Añadir PropTypes  
En el component `GifItem.jsx`, hacer el import de PropTypes:  
`import PropTypes from 'prop-types'` 

A continuación, en el component, definir las PropTypes:  
```javascript 
GifItem.propType = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
```

### 2 - Evaluar el snapshot  
En el test `GifItem.test.jsx`:

- Importar el component a testear
- Importar el `render` de `@testing-library/react`
- Declaración del grupo de pruebas referentes al component `<GifItem />`
- Declarar las variables a testear (`title`, `url`)
- Test del render al objeto `container`
- "Expect": `expect(container).toMatchSnapshot();`

```javascript 
// Contenido de "GifItem.test.jsx"
import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en <GifItem />", () => {
    const title = 'el título';
    const url = 'http://www.google.com';

    test("Tiene que hacer match con el snapshot", () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });
});
```

IMPORTANTE:  
Esta prueba no asegura que la imagen o el título estén correctamente colocados, solo asegura que las piezas del html están sintácticamente igual que cuando se generó. Es útil, pero no en componentes que cambian mucho

---

# 🔬 99. Configurar el ambiente de pruebas
Seguir los pasos indicados en el documento `vite-testing-config.md`.


# Instalación y configuracion de Jest + React Testing Library
## En proyectos de React + Vite

1. Instalaciones:
```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Opcional: Si usamos Fetch API en el proyecto:
```
yarn add --dev whatwg-fetch
```

3. Actualizar los scripts del __package.json__
```
"scripts: {
  ...
  "test": "jest --watchAll"
```

4. Crear la configuración de babel __babel.config.cjs__
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Opcional, pero eventualmente necesario, crear Jest config y setup:

__jest.config.cjs__
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

__jest.setup.js__
```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```



# 🔬 98. Temas puntuales de la sección

## ¿Qué veremos en esta sección?

- Seguir el camino de las pruebas
- Pruebas en componentes específicos
- Pruebas en componentes de forma individual
- Pruebas con customHooks
- Esperar cambios en un customHook
- Simular eventos en inputs y formularios
- Simular llamadas a funciones
- Evaluar si existen elementos en el componente

En esta sección seguiremos expandiendo todo lo que habíamos visto anteriormente en otras secciones de pruebas, pero ahora veremos más a detalle los temas y adicionalmente introduciremos nuevos conceptos y nuevos tipos de pruebas.

<br />

---

# 🔬 INICIO SECCIÓN 8: Testing - Probando la aplicación de GifExpert


---


# FIN SECCIÓN 7: Generando el build de producción y despliegues


# 95. Desplegando aplicación en Github Pages
# 96. Actualizar Github pages
Lo que tenemos en el repositiorio es un proyecto de Node.  
Para publicar en Github Pages:
- Hacer el `build` para que genere la carpeta `dist`
- Una vez hecha la carpeta, renombrarla a `docs`
- Subir el repositorio a GitHib
- Para que funcione en Github Pages hay que actualizar las rutas dentro del index.html de la carpeta docs para que lo haga de forma relativa a donde está

<br />

---

# 94. Subir a GitHub
> - [GitHub](https://github.com/): Plataforma de alojamiento de código para el control de versiones y la colaboración.


<br />

---
# 93. Preparación del proyecto - Github Pages
Arrancar git  

Terminal:  
`git init`

<br />

---

# 92. Desplegar en Netlify
Para desplegar aplicaciones sin BackEnd  
[Netlify](https://www.netlify.com/)

https://festivaldegifs.netlify.app


<br />

---

# 91. Temas puntuales de la sección

## ¿Qué veremos en esta sección?

- Aprender cómo realizar backups a repositorios de Git
- Subir nuestro repositorio a GitHub
- Uso de Github Pages
- Desplegar nuestra aplicación de React
- Generar build de producción de nuestra aplicación

Aunque es una sección pequeña, les puede servir para desplegar infinidad de proyectos de React de forma gratuita, sin contar que tendrán respaldos de sus proyectos por si llegan a perder su trabajo que tenían localmente en su computadora.





<br />

---


# INICIO SECCIÓN 7: Generando el build de producción y despliegues


---


# FIN SECCIÓN 6: GifExpertApp - Aplicación

# 88. Archivos de barril
Los "Archivos de barril" sirven para unificar los compoents, o heplers, o hooks en un solo archivo encargado de exportar, de manera que en ua sola linea se pueden hacer todos los imports, como trabaja React:  

```javascript
import { useEffect, useState } from "react";
```
De manera que podemos pasar de esto:
```javascript
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
```

A esto:
```javascript
import { AddCategory, GifGrid } from "./components";
```

Si el archivo de barril se llama index.js, no hace falta especificar el nombre, ya que por defecto, si hasces una llamada a la carpeta sin definir el archivo, carga el index (como en todos los lenguajes de programación)




<br />

---
# 87. Mostrar mensaje de carga
VERSIÓN 1: Condicional ternario  

```javascript
isLoading
? (<h2>Cargando...</h2>)
: null
```

VERSIÓN 1.1: Condicional ternario (sin los paréntesis, también funcionaría) 

```javascript
isLoading
? <h2>Cargando...</h2>
: null
```

VERSIÓN 2: if corto con una sola condición.  
Si isLoading = true, ejecuta lo que hay después de "&&"  
Si isLoading = false, ya no continua y salta  
"&&" se conoce como "AND LÓGICO"  
```javascript
isLoading && (<h2>Cargando...</h2>)
```


<br />

---

# 86. Custom Hook - useFetchGifs (clase muy densa, repasar)

> Construir tus propios Hooks te permite extraer la lógica del componente en funciones reutilizables.

Los Hooks tienen que empezar siempre por "use", es un estandar de React.  

Un Hook no es más que una función que devuelve algo, en este ejemplo "useFetchGifs" devuelve un objeto.  

MÁS INFO:  
[Construyendo tus propios Hooks](https://es.reactjs.org/docs/hooks-custom.html)


<br />

---

# 85. className - Clases de css

VERSIÓN 1  
Desestructurando el objeto para sacar las props que necesitamos de manera independiente
```javascript
images.map( ({id, title, url}) => (
    <GifItem 
        key={id} 
        title={title}
        url={url}
    />
 ) ) 
```

VERSIÓN 2  
Pasando como props "image" para enviar todas las propiedasdes completas

```javascript
images.map( ( image ) => (
    <GifItem 
        key={image.id} 
        title={image.title}
        url={image.url}
    />
 ) ) 
```

VERSIÓN 3 ESPARCIR LAS PROPS  
Esparcir las "props", de esta manera el component recibe TODAS las properties
```javascript
images.map( ( image ) => (
    <GifItem 
        key={image.id} 
        { ...image }
    />
    ) ) 
```

<br />

---


# 84. Mostrar los títulos de las imágenes

### IMPORTANTE:  
useEffect no puede usar "async", tiene que retornar una función, no una promesa.  

```javascript
// ESTO NO ES CORRECTO:
useEffect ( async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
}, []);
```

```javascript
// CORRECTO VERSIÓN 1, con "then":
useEffect ( () => {
    getGifs(category)
    .then( newImages => setImages(newImages));
}, []);
```

```javascript
// CORRECTO VERSIÓN 2, con función asíncrona independiente:
const getImages = async() => {
    const newImages = await getGifs( category );
    setImages(newImages);
}

useEffect ( () => {
    getImages();
}, []);
```
Esta función SÍ puede ser asíncrona, podemos pasarle la promesa y luego llamar a esta función dentro del "useEffect" para que no se ejecute siempre, solo la primera vez que carga el componente  
<br />

### IMPORTANTE:  
Para hacer el bucle de los elementos, hay que partir del "map" que se genera con el `useState`:  
```javascript
const [images, setImages] = useState([]);
```

Por lo tanto, el "map" parte de "images" de manera que se usa asi:

```javascript
{
    images.map( ({id, title}) => ( 
        <li key={id}>{ title }</li>
    ) ) 
}
```

<br />

---

# 83. Demostración de producción rápido

Para generar el build de producción, simplemente hay que llamar al comando `yarn build`, que genera el bundel final, en la carpeta "dist" que sería el contenido a subir al hosting.

<br />

---

# 82. useEffect

Hay que solucionar dos problemas muy comunes cuando estamos empezando en React:  
1. ¿Por qué se está llamando dos veces?
2. ¿Por qué se está llamando cada vez que se hace algún cambio?  

React, cada vez que detecta un cambio, lo vuelve a ejecutar para redibujar, es decir, está volviendo a ejecutar el componente.  
  
Hay ciertas funciones especiales que pueden sobrevivir y mantener el estado.  
  
También hay funciones que le pueden decir a React que se ejecute solo una vez, y aunque hayan nuevos cambios, no se vuelve a ejecutar.  

### 1. Solución a ¿Por qué se está llamando dos veces?
Quitando el `<React.StrictMode>` del `main.jsx` solucionamos que se ejecute dos veces cada vez que hacemos una acción.

> NOTA:
> Se puede dejar el strict mode en modo DEV y PROD, ya que no tiene impacto cuando se lleva a producción con el `build`  
> https://reactjs.org/docs/strict-mode.html

### 2. Solución a ¿Por qué se está llamando cada vez que se hace algún cambio?
Usar el hook de React `useEffect`.  

`useEffect` sirve para disparar efectos secundarios, es decir, algo que queremos ejecutar cuando algo suceda, por ejemplo, cuando el 'counter' cambie, que se dispare un efecto o que se dispare solo cuando se renderice por primera vez el componente.  

El Hook useEffect está formado por dos partes:  
La primera la función que se ejecuta:  
```javascript
    () => {
        //Aquí va el código que queremos ejecutar en este "useEffect"
        getGifs(category); 
    }
```
La segunda se definen las dependencias dentro de un array.  
Si se dejan las dependencias vacías, significa que este hook (useEffect) solo se va a disparar la primera vez que se crea el componente.  
```javascript
useEffect( () => {
    //Aquí va el código que queremos ejecutar en este "useEffect"
    getGifs(category); 
}, [ ] ); // En el array se van a definir las dependencias. 
```


<br />

---

# 81. Fetch API - Obtener las imágenes deseadas

> NO LLAMAR NUNCA LA EJECUCIÓN DE UNA FUNCIÓN DENTRO DE UN FUNCTIONAL COMPOENT!  
> Cada vez que se llama al Functional Component `<GifGrid />` y se renderiza, vuelve a ejecutar la función `getGifs(category)`


PENDIENTE EN ESTA CLASE:  
Mover la llamada a la función `getGifs(category)` fuera del functional component para que NO se dispare cada vez que se llama al functional component.

---

# 80. GifGrid - Nuevo componente
Este componente mostrará cada grid independiente.

---

# 79. Validar que sean únicos los nombres

> IMPORTANTE: 
> No usar el index "i" del `.map()` en el "key" para solucionar el problema con el Unique Key que dispara React ya que ese valor lo usa React para saber cuando un elemento se eliminó.
> Si borramos el 0, la posición 0 sigue exsistiendo.
> TOTAL, que no se use la i del map para las unique keys. 

### MAL:
```javascript
categories.map( (category, i) => {
    return <li key={ i }> { category } </li>
} ) 
```

---

# 78. Emitir un evento al padre
## OBJETIVO: Mejora del componente AddCategory, ya que lo único que tiene que hacer es enviar el valor a insertar

```javascript
<AddCategory setCategories={ setCategories }/>
```

No está mal pasar la función ahí directamente, pero seríam mejor solo enviar el valor a insertar.

Pero mejor separarlo de manera que quede así:
```javascript
<AddCategory onNewCategory={ ( value ) => onAddCategory(value) }/>
```

En realidad podría ser así:
```javascript
<AddCategory onNewCategory={ onAddCategory }/>
```


> IMPORTANTE: 
> usar el prefijo "on" para eventos que disparen los botones, o lo que sea.
> En este caso `onAddCategory` 

<br />

---
# INICIO SECCIÓN 6: GifExpertApp - Aplicación
