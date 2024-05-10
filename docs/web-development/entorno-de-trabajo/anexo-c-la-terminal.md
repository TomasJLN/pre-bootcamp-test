---
title: La Terminal
sidebar_position: 8
toc_min_heading_level: 2
toc_max_heading_level: 3
---

## **¿Qué es la terminal?**

En la sección de "Entorno de Trabajo", aprendimos cómo instalar herramientas desde la Terminal. Pero, ¿sabes realmente qué es la Terminal? Si tienes dudas o no estás seguro/a, aquí te ofrecemos una breve explicación de qué es y te introducimos a los comandos más básicos.

La Terminal, también conocida como **línea de comandos** o **consola**, es una interfaz de texto que nos permite interactuar con nuestro ordenador a través de **comandos específicos**. A diferencia de las interfaces gráficas, no utiliza ventanas ni iconos, sino que opera mediante texto escrito.

## **¿Por qué usar la terminal?**

- **Control total:** La terminal te da acceso a todas las funciones del sistema, lo que permite realizar desde tareas básicas hasta complejas configuraciones del sistema.

- **Precisión y velocidad:** A menudo, escribir un comando es más rápido que navegar por menús.

- **Automatización:** Puedes crear [_scripts_](https://es.wikipedia.org/wiki/Script), que son como programas pequeños, para automatizar tareas repetitivas.

- **Compatibilidad:** Funciona de manera similar en todos los sistemas operativos principales como Windows, Mac y Linux.

## **¿Cómo funciona la terminal?**

1. **Abre la terminal:**

   - Windows, busca "PowerShell" o mejor "Git Bash" si ya tienes instalado Git.
   - Mac, abre la aplicación "Terminal".
   - Ubuntu, puedes abrir la terminal con el atajo de teclado (`Ctrl + Alt + T`) o abriendo el menú de aplicaciones (los nueve puntos en la derecha de barra de tareas y buscando Terminal).

2. **Escribe un comando:** Por ejemplo, para ver los archivos en tu directorio actual, escribe:

```shell
ls
```

3. **Presiona Enter:** El sistema procesará y ejecutará tu comando.

## Algunos comandos comunes desde el terminal (Ubuntu)

- `pwd`: Muestra la ruta donde nos encontramos actualmente.
- `cd`: Navegar a determinado directorio. Con `cd ..` vamos al directorio superior, `cd .. ..` subimos dos niveles, y con `cd ~` nos ubicamos en el directorio de nuestro usuario.
- `ls`: Lista el contenido del directorio sobre el que ejecutamos el comando `ls`. Si queremos ver más detalles sobre los archivos o directorios del contenido utilizamos `ls -l`. Y para mostrar los archivos ocultos se utiliza `ls -a`
- `-h` o `--help`: Muestra la información sobre un determinado comando si existiera dicha información. Prueba a ejecutar `ls --help`.
- `man [comandoquesea]`: Muestra información detallada sobre el comando sobre el que ejecutamos `man`, descripción y sus argumentos.
- `touch [nombre_archivo.extensión]`: Crea un archivo con el nombre indicado en la ruta donde nos encontramos. Por ejemplo, `touch mi_archivo.txt` crea el archivo `mi_archivo.txt` dentro de la ruta donde nos encontramos.
- `mkdir` `[nombre_directorio]`: Crea un nuevo directorio. Por ejemplo, `mkdir fotos` crea un directorio llamado fotos.
- `cp [origen] [destino]`: Copia archivos o directorios. Por ejemplo, `cp archivo.txt /ruta/destino/` copia `archivo.txt` al destino especificado (`/ruta/destino/).
- `mv [origen] [destino]`: Mueve archivos o directorios a una nueva ubicación. También se utiliza para renombrar archivos o directorios.
- `rm [archivo]`: Elimina archivos. Utiliza `rm -r [directorio]` para eliminar un directorio y su contenido. Úsalo con precaución.
- `rmdir [directorio]`: Elimina directorios vacíos. Para eliminar directorios que contienen archivos, se usa `rm -r [directorio]`.

- `clear`: Limpia la pantalla de la terminal, borrando el contenido visible y dejando la pantalla en blanco, lista para nuevos comandos.

> **Nota:** Estos comandos funcionan de manera similar en macOS y Linux.
>
> En Windows, puedes usar Git Bash (instalado con Git) para obtener una experiencia con los comandos similares a Linux. Es útil para los desarrolladores que trabajan con Git y otros procesos de desarrollo de software que dependen de herramientas de línea de comandos Unix, así puedes utilizar la mayoría de los comandos listados anteriormente ( el comando `man` no está disponible).

### Ejemplo de uso

Para poner en práctica algunos de los comandos anterior vamos a crear un nuevo directorio donde guardaremos nuestros primeros códigos. Comencemos:

Al abrir una terminal, lo primero que queremos saber es en qué directorio nos encontramos actualmente para poder empezar a trabajar, para ello, escribimos el siguiente comando que nos mostrará la ruta actual en donde estamos ubicados:

```shell
pwd
```

Como siguiente paso, podemos querer saber qué contenido tiene el directorio en el que nos encontramos, para listar el contenido del directorio actual ejecutamos el siguiente comando:

```shell
ls
```

Esto nos mostrará un listado con todas las carpetas y archivos que contiene el directorio actual donde nos encontramos. Sobre el comando `ls` merece la pena mencionar que tiene 2 opciones usadas con frecuencia y fáciles de recordar, la primera opción es añadir la _flag_ `-a` después de `ls` (`ls -a`), esto listará tanto el contenido visible como el contenido oculto dentro del directorio (como pueden ser los archivos ocultos del sistema, claves ssh, o archivos que ocultamos nosotros mismos). La segunda opción utilizada es `-l` (`ls -l`) con la que además de mostrar el contenido se mostrará más información como es cuanto ocupa, cuando fue modificado, si es un archivo, carpeta o enlace, cuanto ocupa. También cabe decir, que podemos utilizar las dos opciones en el mismo comando para obtener toda la información por medio de `ls -la`. Ah, otra cosa del comando `ls`, no es necesario acceder al directorio al que queremos listar el contenido, podemos listar el contenido de cualquier directorio, simplemente dando la ruta (absoluta o relativa) en el comando:

```shell
ls /home/user/Desktop
```

Vamos a crear una nueva carpeta para almacenar nuestros futuros proyectos realizados durante el curso, para esto, navegamos al directorio donde queremos tener nuestra nueva carpeta, por ejemplo `/home/user/Documents/` con el siguiente comando `cd /home/user/Documents`, al pulsar Enter nos situamos dentro de la carpeta indicada (siempre que exista) y lo podemos comprobar por medio del comando ya visto `pwd`.

```shell
cd /home/user/Documents

pwd
```

Ahora creamos la nueva carpeta que vamos a llamar "JAB", aquí entra en juego otro nuevo comando, el comando `mkdir` que se utiliza para crear carpetas:

```shell
mkdir JAB
```

Puedes comprobar que se ha creado correctamente si, nuevamente haces un listado del contenido de la carpeta donde te encuentras por medio del comando `ls`

```shell
tom@HAB:~/Documents$ ls

# HackABoss  JAB  Personal  Varios
```

Ojo, si estás en Ubuntu (Linux) o macOS (en sus últimas versiones) difieren de Windows en qué **SÍ** diferencian mayúsculas y minúsculas, a esto se le llama "_Case Sensitive_" y lo que quiere decir es que una carpeta o archivo que se llame "**D**ocumentos" no sería la misma que si se llamara "**d**ocumentos", serían diferentes y podrían coexistir dentro del mismo directorio; esto no pasa con la línea de comandos propia de Windows (CMD) ya que en este caso no distinguen mayúsculas y minúsculas y daría igual como nombráramos una carpeta que luego podemos acceder tanto si la escribimos en mayúsculas, en minúsculas como alternando mayúsculas y minúsculas. Aún así, al final de esta sección, vamos a definir unas cuantas reglas básicas de buenas prácticas para no tener luego problemas al crear o acceder a archivos o carpetas.

Continuando con el ejemplo, resulta que nos hemos equivocado al nombrar la carpeta, la hemos llamado "JAB" cuando queríamos llamarla "HAB". Bueno, no hay problema, podemos eliminar el directorio vacío "JAB":

```shell
rmdir JAB
```

Con este comando, hemos eliminado la carpeta "JAB", bueno, siempre y cuando esté vacía porque si contiene algún archivo o carpeta nos lanzaría un error de que no se ha podido eliminar porque no está vacía... Esto nos da la oportunidad de introducir un nuevo comando `rm` que vamos a utilizar para eliminar archivos y directorios que no están vacíos, su sintaxis es igual que la de `rmdir` , por ejemplo, si queremos eliminar un archivo que no nos sirve llamado "logs.txt" utilizamos el comando `rm logs.txt` y habremos borrado el archivo.
Volviendo al punto anterior donde queríamos eliminar una carpeta no vacía, debemos añadir la opción -r (de _recursive_) para eliminar el directorio y también todo el contenido que se encuentra en él (úsalo con precaución para evitar disgustos).

Volvamos a crear la carpeta, esta vez con el nombre escrito correctamente:

```shell
mkdir HAB
```

Ya podemos acceder dentro del directorio recién creado para empezar a trabajar con archivos:

```shell
cd HAB
```

Vamos a crear un nuevo archivo desde la terminal, como puedes ver hasta ahora la sintaxis de los comandos básicos es sencilla y esta no es una excepción, para poder crear un nuevo archivo con la extensión que queramos se utiliza la sintaxis del comando `touch nombredelarchivo`, por ejemplo, vamos a crear un archivo TXT llamado "README" donde vamos a explicar brevemente qué contenido va a tener nuestra carpeta, utilizamos el siguiente comando:

```shell
touch README
```

Una vez más (intencionadamente o no), cometimos un error y no le indicamos la extensión del archivo (TXT), para corregirlo, vamos a renombrar el nombre del archivo utilizando el comando `mv` de la siguiente manera:

```shell
mv README README.txt
```

Insertemos algo de información dentro del archivo "README.txt" utilizando algún editor de texto o mejor aún, desde Visual Studio Code. Para no tener que buscar VS Code en la lista de aplicaciones, y ya que tenemos la terminal en la carpeta donde se encuentra el archivo, vamos a abrir el VS Code por medio del siguiente comando:

```shell
code .
```

Con la instrucción anterior se abrirá nuestro Visual Studio Code en la carpeta donde nos encontramos (el punto `.` representa la ruta actual). Ingresemos alguna información dentro del archivo `README.txt`:

```text
Bienvenid@s a mi carpeta de proyectos
Aquí se localizarán todos mis maravillosos proyectos realizados

```

Guardamos el archivo en Visual Studio Code pulsando en el icono de Guardar (o por medio de la combinación de teclas `Ctrl + S`) y cerramos Visual Studio Code. Desde nuestra terminal, podemos ver el contenido de algún archivo de texto mediante el siguiente comando:

```shell
cat README.md
```

Este comando, es una forma rápida de ver el contenido de un archivo de texto desde el terminal. Podemos ver sus posibles opciones (_flags_) escribiendo `cat --help`.

Actualmente, tenemos demasiado texto en nuestra terminal, mejor vamos a limpiarla con el siguiente comando:

```shell
clear
```

Y con esto hemos visto unos cuantos e los comandos más básicos que puede que ya conocieras. Para finalizar, podemos borrar todo lo hecho hasta ahora en caso de que no lo vayamos a utilizar. Este paso es más crítico que los anteriores pues ni no lo realizamos con cuidado podemos eliminar más de lo esperado, PRECAUCIÓN:

Nos situamos en el directorio superior donde creamos la carpeta "HAB" (`cd ..`) , comprobamos que efectivamente, estamos en la ruta `/home/user/Documents` por medio del comando `pwd`

```shell
pwd # /home/user/Documents
```

Ahora, eliminamos el directorio "HAB" con todo su contenido, si la carpeta estuviese vacía, nos llegaba con el comando `rmdir HAB`, pero, en este caso, contiene archivos (como es `README.txt`), por lo tanto, debemos utilizar el comando `rm -r [directorio]` para eliminar dicho directorio y todo su contenido:

```shell
rm -r HAB
```

Listo! Ya estamos preparados para seguir practicando con los comandos de la terminal.

> **Nota**: En [este enlace](https://ubuntu.com/tutorials/command-line-for-beginners#1-overview) a la documentación oficial de Ubuntu dispones de información más detallada sobre la Terminal de Linux y sus comandos más básicos. En inglés.

### Reglas básicas de buenas prácticas para nombrar archivos y carpetas

- **Usa nombres descriptivos y que sean fáciles de entender:** Los nombres deben proporcionar una idea clara de su contenido sin necesidad de abrir el archivo o directorio.
- **Evita espacios en blanco:** Los espacios pueden causar problemas en _scripts_ y comandos en la línea de comandos.
- **Utiliza guiones bajos (`_`) o guiones (`-`) para separar palabras:** Esto mejora la legibilidad sin interferir con el funcionamiento de comandos en la terminal.
- **Evita caracteres especiales (`*`, `&`, `$`...):** Estos caracteres pueden ser interpretados de manera especial por el sistema operativo o aplicaciones de línea de comandos.
- **Presta atención a la diferencia entre mayúsculas y minúsculas:** Asegúrate de usar consistentemente mayúsculas o minúsculas según cómo fue creado el archivo o directorio, especialmente en sistemas que distinguen entre ellas.
- **Preferiblemente usa letras del alfabeto inglés:** Evita el uso de caracteres especiales de otros idiomas, como acentos, tildes o la letra 'ñ', ya que pueden no ser bien interpretados en todos los sistemas o pueden causar problemas en entornos de desarrollo y producción.
- **Mantén nombres cortos y concisos:** Nombres largos pueden ser truncados en algunos sistemas o hacer más complicado el trabajo con ellos en la línea de comandos.
- **Evita usar nombres que puedan ser interpretados como opciones de comando:** Nombres como '-rf' o '--help' pueden ser mal interpretados por comandos en la terminal.

Siguiendo estas reglas básicas, podrás organizar mejor tus archivos y directorios, y evitarás errores al trabajar con la terminal.

---

# Copiar y Pegar en la Terminal

En la interfaz de la terminal, el manejo de las operaciones de copiar y pegar es ligeramente diferente al de otros programas de interfaz gráfica. Dado que la combinación de teclas `Ctrl + C` tiene una función específica en la terminal (enviar la señal SIGINT para interrumpir el proceso actual), se utiliza una combinación diferente para copiar y pegar texto.

## Copiar Texto

Para copiar texto dentro de la terminal:

- **Usa la combinación `Ctrl + Shift + C`:**
  - Primero, selecciona el texto que deseas copiar en la terminal utilizando el cursor del ratón.
  - Luego, presiona `Ctrl + Shift + C` para copiar el texto seleccionado al portapapeles.

## Pegar Texto

Para pegar texto copiado en la terminal:

- **Usa la combinación `Ctrl + Shift + V`:**
  - Simplemente coloca el cursor en el lugar de la terminal donde deseas insertar el texto.
  - Presiona `Ctrl + Shift + V` para pegar el contenido del portapapeles en la terminal.

---

# Uso de la tecla `[TAB]` para autocompletado

La tecla `TAB` en la terminal de sistemas operativos Unix y Linux es una herramienta extremadamente útil para mejorar la eficiencia y la velocidad al trabajar con la línea de comandos. Su uso más común es para la función de autocompletar, que ayuda a completar comandos, nombres de archivos, directorios y otros elementos sin necesidad de escribirlos completamente.

## Funcionalidades de la tecla TAB

1. **Autocompletado de Comandos**:

   - Cuando empiezas a escribir un comando en la terminal y presionas `TAB`, el sistema intenta autocompletar el resto del comando basándose en los comandos disponibles que coincidan con las letras ya ingresadas.
   - Si hay más de una posible coincidencia, presionando `TAB` dos veces mostrará una lista de todas las opciones disponibles.

2. **Autocompletado de Nombres de Archivos y Directorios**:

   - De manera similar a los comandos, si escribes las primeras letras de un archivo o directorio y presionas `TAB`, el sistema intentará completar el nombre por ti.
   - Si el prefijo ingresado es ambiguo debido a múltiples coincidencias, presionar `TAB` dos veces mostrará una lista de todos los nombres de archivos o directorios que coincidan.

3. **Autocompletado de Rutas**:

   - Al escribir rutas, como al usar comandos que requieren una ubicación de archivo o directorio (por ejemplo, `cd` o `ls`), puedes escribir parte de la ruta y usar `TAB` para completar el resto de la ruta automáticamente.
   - Esto es particularmente útil para evitar errores de tipeo en rutas largas y complicadas y para acelerar la escritura de comandos.

4. **Autocompletado de Opciones de Comandos**:

   - Muchos comandos tienen opciones o "flags" que modifican su comportamiento. Puedes comenzar a escribir una opción con un guión (por ejemplo, `-`) y usar `TAB` para completar o listar las opciones disponibles para ese comando.

### Ejemplo

Supongamos que quieres cambiar el directorio a `Documents` que se encuentra en tu directorio home. Puedes empezar escribiendo:

```shell
cd Doc
```

Al presionar `TAB` después de "_Doc_", el sistema completará automáticamente el resto del nombre si `Documents` es el único directorio que comienza con esas letras. Si hay más de un directorio que comienza con "Doc", como `Documentation` y `Documents`, presionar `TAB` dos veces mostrará ambas opciones.

### Consejos para el uso de la tecla TAB

- **Uso frecuente**: Haz de `TAB` un hábito en tu flujo de trabajo diario en la terminal para maximizar tu eficiencia.

- **Combinaciones dobles de TAB**: Si no estás seguro/a de cómo continúa un comando o ruta, presionar `TAB` dos veces puede darte pistas útiles sobre las posibles opciones.

- **Mejora la precisión**: Usar `TAB` no solo acelera la escritura, sino que también reduce el riesgo de errores al escribir nombres de archivos, directorios o comandos incorrectamente.
