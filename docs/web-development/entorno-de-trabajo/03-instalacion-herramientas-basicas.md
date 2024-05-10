---
title: Instalación de las herramientas básicas
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 3
---

En esta sección nos enfocaremos en la instalación de parte de las herramientas básicas que utilizaremos durante el bootcamp. Si bien, haremos uso de más herramientas en el camino, comenzaremos por las básicas y que, en un principio, no deberemos tener ningún problema al instalarlas si seguimos los pasos.

## Herramientas a instalar

Antes de sumergirnos en la instalación, es importante comprender qué herramientas vamos a configurar:

- **Google Chrome**: Utilizaremos Chrome como nuestro navegador principal para visualizar y probar nuestras aplicaciones web. Además, aprovecharemos las "Herramientas de Desarrollador" integradas para inspeccionar elementos en HTML y CSS, depurar JavaScript y más.

- **Zoom**: Esta plataforma será el medio a través del cual se impartirán las clases. Asegúrate de tenerla correctamente configurada para no perder ninguna sesión importante. Recuerda que es importante que utilices el correo electrónico que nos indicaste para poder llevar un control sobre la asistencia, en caso contrario podrías tener faltas de asistencia sin saberlo y no llegar a obtener el apto!

- **Visual Studio Code**: Desde HACK A BOSS recomendamos el uso del editor de código VS Code. VS Code es un editor de código (casi un IDE, puedes ver las diferencias en el [Anexo B](./anexo-b-diferencias-editor-texto-codigo-ide.md)) que te ayudará a escribir tu código, dispone de funciones avanzadas para el autocompletado y la depuración de código. Además soporta diferentes lenguajes de programación así como numerosas extensiones y una comunidad muy activa.

- **Git**: Git es un control de versiones que vamos a utilizar mucho y puede que lo veas complicado en un principio pero pronto te adaptarás y podrás comprobar lo útil y práctico que llega a ser. Con Git podrás descargar los apuntes, ejemplos y ejercicios del día anterior una vez que que el instructor/a los haya subido. También podrás llevar un control sobre tu código y volver a una versión anterior si algo ha salido mal. Git es una herramienta fundamental que debemos aprender, omnipresente en entornos laborales. Hablaremos un poco más sobre Git y GitHub/GitLab más adelante.

- **Node.js y NPM**: Node.js es un entorno de ejecución que te permite ejecutar JavaScript fuera del navegador. Aunque aún no tienes por qué saberlo, JavaScript (lenguaje de programación que vamos a utilizar y mucho) se ejecuta desde los navegadores (Chrome, Firefox, Edge, Safari...) ya que estos disponen de un intérprete de instrucciones de JavaScript. Con Node.js podrás utilizar JavaScript sin necesidad de navegador alguno, en la parte de _backend_ (la parte del servidor donde se sirven los datos que van a estar disponibles en los navegadores de los clientes) utilizaremos Node.js, con la ventaja de basarnos en un lenguaje de programación que ya conoceremos como es JavaScript. Por otra parte, NPM o _Node Package Manager_ es un gestor de paquetes para Node.js, donde podemos descargar módulos escritos por otros programadores para utilizar en nuestras aplicaciones, para qué inventar la rueda cuando ya está inventada?

> **Nota**: Aprender Node.js y NPM te ayudará a comprender mejor el ecosistema de JavaScript en general. Muchos _frameworks_ y bibliotecas populares de JavaScript se basan en Node.js y NPM, por lo que te será más fácil y familiar aprenderlas en el futuro.

## Google Chrome [![](./resources/chrome_logo_1.png)](https://www.google.com/intl/es_es/chrome/)

### Windows

1. Accede al sitio web oficial de Google Chrome: [https://www.google.com/intl/es_es/chrome/](https://www.google.com/intl/es_es/chrome/) y haz clic en "Descárgalo aquí".
2. Una vez descargado el archivo, haz doble clic en él para ejecutarlo.
3. El asistente de instalación te guiará a través del proceso. Acepta las condiciones de uso y selecciona la ubicación donde deseas instalar Chrome.
4. Haz clic en "Instalar" y espera a que se complete el proceso. Una vez finalizado, Chrome se abrirá automáticamente.

### macOS

1. Accede al sitio web oficial de Google Chrome: [https://www.google.com/intl/es_es/chrome/](https://www.google.com/intl/es_es/chrome/) y haz clic en "Descárgalo aquí".
2. El archivo se descargará en la carpeta "Descargas". Haz doble clic sobre él para abrirlo.
3. En la ventana que se abre, arrastra el icono de Chrome a la carpeta "Aplicaciones".
4. Abre la carpeta "Aplicaciones" y haz doble clic en el icono de Chrome para ejecutarlo.

### Ubuntu

1. Abre la **Terminal**. Puedes encontrarla en el menú de aplicaciones o presionando `Ctrl+Alt+T`.
2. Ejecuta el siguiente comando para actualizar la lista de paquetes disponibles en los repositorios oficiales:

```shell
sudo apt update
```

3. Introduce la contraseña de tu cuenta de administrador cuando se te solicite. Cuando introduzcas la contraseña no se verá ningún carácter escrito por motivos de seguridad pero sí se está escribiendo, asegúrate de introducirla correctamente.

4. Ahora, ejecuta el siguiente comando para instalar la última versión de Google Chrome disponible:

```shell
sudo apt install -y google-chrome-stable
```

5. La instalación se completará automáticamente y Chrome se añadirá a tu menú de aplicaciones.

> **Note**: Dispones de más información sobre la instalación, desinstalación y problemas relacionados en la siguiente dirección: [https://support.google.com/chrome/answer/95346?hl=es](https://support.google.com/chrome/answer/95346?hl=es)

## Zoom [![](./resources/zoom_logo_1.png)](https://zoom.us/es)

### Windows

1. Accede al sitio web oficial de Zoom: [https://zoom.us/download](https://zoom.us/download) y haz clic en el botón "Download" correspondiente a "Zoom Workplace desktop app".
2. Una vez descargado el archivo, haz doble clic en él para ejecutarlo.
3. El asistente de instalación te guiará a través del proceso. Acepta las condiciones de uso y selecciona la ubicación donde deseas instalar Zoom (la ubicación por defecto suele estar bien).
4. Haz clic en "Instalar" y espera a que se complete el proceso. Una vez finalizado, Zoom se abrirá automáticamente.

### macOS

1. Accede al sitio web oficial de Zoom: [https://zoom.us/download](https://zoom.us/download) y haz clic en el botón "Download" correspondiente a "Zoom Workplace desktop app".
2. El archivo se descargará en la carpeta "Descargas". Haz doble clic sobre él para abrirlo.
3. En la ventana que se abre, arrastra el icono de Zoom a la carpeta "Aplicaciones".
4. Abre la carpeta "Aplicaciones" y haz doble clic en el icono de Zoom para ejecutarlo.

### Ubuntu

**Desde el Escritorio de Ubuntu**:

1. Abre el Centro de Software de Ubuntu (Ubuntu Software), lo puedes encontrar en el menú de aplicaciones o en el dock.
2. Utiliza la barra de búsqueda y escribe "zoom".
3. Encuentra la aplicación **Zoom Client** y haz clic en su imagen en los resultados.
4. Haz clic en el botón "Instalar".
5. Introduce tu contraseña de administrador cuando te lo solicite para proceder con la instalación.

**Desde un Terminal**:

1. Descarga el archivo instalador desde [Centro de descargas](https://zoom.us/download?os=linux). Selecciona en el "Tipo de Linux" la distribución correspondiente, en nuestro caso es Ubuntu, selecciona la "Arquitectura del SO" que es muy probable que sea 64bits y pulsa en el botón de "Descargar".

2. Abre una Terminal, la puedes encontrar en el menú de aplicaciones o pulsando las teclas `Ctrl + Alt + T` y navega hasta la ruta donde se encuentra el archivo descargado, probablemente en `~/Downloads`

```shell
cd ~/Downloads
```

3. Escribe en la terminal el siguiente comando y pulsa **Entrar** para ejecutarlo.

```shell
sudo apt install ./zoom_amd64.deb
```

4. Introduce la contraseña de tu cuenta de administrador cuando se te solicite. Cuando introduzcas la contraseña no verás ningún carácter escrito por motivos de seguridad pero se está escribiendo, asegúrate de introducirla correctamente.

Una vez instalado, podrás encontrar Zoom en tu menú de aplicaciones para iniciarlo.

> **Nota**: Recuerda crear tu cuenta con el email que nos has indicado para poder llevar un control de asistencia efectivo y evitar faltas de asistencia. Más información sobre Zoom en su [Soporte Oficial](https://support.zoom.com/hc).

## Visual Studio Code [![](./resources/vsc_logo_1.png)](https://code.visualstudio.com/)

### Windows y macOS

La instalación de Visual Studio Code (VSC) tanto en Windows como en macOS no difiere de las instalaciones previas realizadas para Chrome y Zoom, debes aplicar los mismos pasos para una instalación correcta.

Solo tienes que tener claro qué botón pulsar en el [Centro de descargas](https://code.visualstudio.com/Download) para descargar la versión correcta para tu sistema operativo.

### Ubuntu

**Desde el Escritorio de Ubuntu**:

1. Abre el Centro de Software de Ubuntu (_Ubuntu Software_), lo puedes encontrar en el menú de aplicaciones o en el dock.
2. Utiliza la barra de búsqueda y escribe "Visual Studio Code".
3. Encuentra la aplicación **Code** y haz clic en su imagen en los resultados.
4. Haz clic en el botón "Instalar".
5. Introduce tu contraseña de administrador cuando te lo solicite para proceder con la instalación.

**Desde un Terminal**:

1. Descarga el archivo instalador desde [Centro de descargas](https://code.visualstudio.com/Download), haz clic sobre el botón que pone "_.deb - Debian, Ubuntu_".

2. Abre una Terminal, la puedes encontrar en el menú de aplicaciones o pulsando las teclas `Ctrl + Alt + T` y navega hasta la ruta donde se encuentra el archivo descargado, probablemente en `~/Downloads`

```shell
cd ~/Downloads
```

3. Escribe en la terminal el siguiente comando (cambiando la versión por la que hayas descargado, puedes completarla escribiendo `code_` y pulsando la tecla `TAB` tabulador), luego pulsa **Enter** para ejecutarlo.

```shell
sudo apt install ./code_ #pulsa la tecla TAB para autocompletar
```

4. Introduce la contraseña de tu cuenta de administrador cuando se te solicite. Cuando introduzcas la contraseña no verás ningún carácter escrito por motivos de seguridad pero se está escribiendo, asegúrate de introducirla correctamente.

Una vez instalado, podrás encontrar VS Code en tu menú de aplicaciones para iniciarlo.

> **Nota**: Si por alguna razón utilizaste los dos métodos anteriores para realizar la instalación de _VSC_, puede que dentro de las aplicaciones encuentres dos instancias de la misma, puedes eliminar la creada desde el terminal, por ejemplo mediante el siguiente comando desde el terminal:

```shell
sudo apt remove code
```

Con `sudo apt remove` puedes eliminar diferentes aplicaciones instaladas por medio del terminal. En el Anexo XXX podrás encontrar un Manual de Referencias básicas a la utilización de comandos en terminal de Ubuntu.

> **Nota**: Si quieres saber más sobre Visual Studio Code puedes acceder a su [Documentación Oficial](https://code.visualstudio.com/docs/setup/setup-overview).

## Git [![](./resources/git_logo_1.png)](https://git-scm.com/)

### Windows

La instalación de Git en Windows sigue siendo igual de sencilla que las anteriores: accede a la [página de descargas](https://git-scm.com/download/win) de Git para Windows y pulsa sobre el enlace "Click here to download" para descargar la última versión estable disponible.

Una vez finalizado, ejecuta el archivo descargado y procede con la instalación. Durante la instalación, asegúrate que está marcada la opción de "_Add a Git Bash Profile to Windows Terminal_" (que debería estar marcada por defecto) y posteriormente, si ya tienes Visual Studio Code instalado, selecciona la opción "_Use Visual Studio Code as Git's default editor_", luego continúa con el proceso estándar de Git en Windows sin variar ninguna de las opciones restantes (todo siguiente).

### macOS

En este caso varía un poco la instalación pero no va a suponer un problema:

1. Primero instala [_Homebrew_](https://brew.sh/es/) (un gestor de paquetes) en caso de que no lo tengas ya instalado, por medio del siguiente comando desde tu terminal de macOS:

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Una vez instalado _Homebrew_, procede a instalar Git por medio del comando:

```shell
brew install git
```

Y eso sería todo!

### Ubuntu

En Ubuntu vamos a instalarlo desde la terminal.

1. Primero actualizamos la lista de repositorios como hacemos habitualmente:

```shell
sudo apt update
```

2. Recuerda que te pedirá la contraseña de administrador de sistema y esta no se va a ver reflejada en la pantalla, tecléala con cuidado.

3. Una vez actualizados los repositorios instalamos Git:

```shell
sudo apt install git
```

Puedes comprobar si Git se ha instalado correctamente en cualquiera que sea tu sistema operativo escribiendo el siguiente comando en un terminal:

```shell
git --version
```

Esto debe devolver la versión que tienes instalada de Git, en caso contrario Git no se ha instalado y deberás volver a seguir los pasos.

> **Nota**: Más información de Git en su [Documentación Oficial](https://git-scm.com/doc).

## Node.js y NPM [![](./resources/nodejs_logo_1.png)](https://nodejs.org/en/)

### Windows y macOS

1. Accede a la página oficial de Node.js: [https://nodejs.org/en/download](https://nodejs.org/en/download) selecciona la última versión LTS para tu sistema operativo con la arquitectura correspondiente (muy posiblemente x64) y haz clic en el botón "Download Node.js".

2. Una vez descargado, ejecuta el archivo descargado (`.msi` para Windows y `pkg` para macOS) y sigue las instrucciones del instalador.

3. Puedes comprobar que tanto Node.js como NPM están instalados abriendo una terminal y escribiendo `node -v` y `npm -v`. Si la instalación ha sido correcta, se mostrarán las versiones instaladas de Node.js y npm, ya que NPM (_Node Package Manager_) se instala automáticamente al instalar Node.js.

> **Nota**: En macOS también puedes instalar Node.js a traves del Gestor de paquetes _Homebrew_ si lo instalaste anteriormente para Git, simplemente escribe en la terminal `brew install node@20` donde 20 es la versión actual de Node.

### Ubuntu

Para la instalación de Node.js vamos a dar un paso más, y en vez de instalar directamente una versión específica de Node, lo instalaremos a través de [NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#table-of-contents) (_Node Version Manager_), que es un gestor de versiones de Node que nos permite instalar y cambiar entre diferentes versiones de Node.js sin tener que instalarlas y desinstalarlas manualmente. En el Anexo XXX tienes más información de cómo utilizar NVM, por ahora, llega con instalar la versión actual de Node.js

1. Instala NVM desde una terminal por medio del comando siguiente:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

2. Una vez instalado NVM, procede a instalar la versión 20 (la actual al escribir estas letras) con NVM, escribiendo el comando:

```shell
nvm install 20
```

3. Comprueba en el terminal que, tanto Node.js como npm han sido instalados correctamente por medio de los comandos:

```shell
node -v # Debe imprimir en pantalla la versión actual de Node

npm -v # Debe imprimir en pantalla la versión instalada de NPM
```

> **Nota**: Aunque lo trataremos más adelante, si tienes curiosidad puedes encontrar más información sobre Node.js en su [Documentación oficial](https://nodejs.org/docs/latest-v20.x/api/index.html).

> **Importante**: Ten en cuenta que los procedimientos de instalación mencionados podrían cambiar con el tiempo. Es fundamental que estés preparado/a para adaptarte a estos cambios y resolver cualquier problema que pueda surgir por ti mismo/a. **Dominar la búsqueda de información relevante en la documentación oficial es una habilidad esencial**. En Hack A Boss, insistimos en la importancia de aprender de manera autónoma. Esta capacidad no solo es vital para tu éxito en este curso, sino que también te preparará para adaptarte rápidamente a las innovaciones tecnológicas y enfrentar futuros desafíos.
