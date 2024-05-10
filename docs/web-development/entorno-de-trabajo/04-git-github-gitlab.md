---
title: Git & GitHub
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 3
---

En esta sección, aprenderemos sobre [Git](https://git-scm.com/), una herramienta indispensable para cualquier desarrollador. Exploraremos cómo Git puede ayudarte a gestionar versiones de nuestros proyectos y evitar la pérdida de trabajo. Además, veremos cómo GitHub y GitLab complementan a Git, proporcionando un espacio para almacenar y compartir nuestro código de manera segura.

## Trataremos

- Qué es Git y cómo te ayuda a gestionar tu código.
- La diferencia entre Git y plataformas como GitHub y GitLab.
- Configuración inicial de Git y creación de claves SSH para una conexión segura con GitHub o GitLab.

## Requisitos previos

- Git instalado en tu sistema.
- Una cuenta en GitHub o GitLab.

## Introducción

Imagina que realizas una actualización del código y todo se vuelve un caos; el código ya no funciona y no tienes ni idea de qué pudo haber pasado, aquí es uno de los casos donde Git te puede salvar el día!

Sin Git, solo puedes lamentarte por la pérdida de tu trabajo, tratas de recordar los cambios realizados en la última actualización o vuelves a empezar todo de cero...

Pero con Git, sabes que el trabajo previo realizado está a salvo y puedes retroceder a una versión anterior del código, antes de que ocurriera el problema y así poder analizar los cambios realizados para identificar la causa del fallo, sin tener que perder tiempo tratando de recordar cómo estaba el código con anterioridad.

## ¿Qué es Git?

Git es un sistema de control de versiones que trabaja en nuestro ordenador y nos permite realizar un seguimiento de los cambios realizados en nuestro código fuente y colaborar con otros desarrolladores de una manera eficiente.

Git nos permite trabajar sin miedo a perder nuestro trabajo. Si algo sale mal, podemos volver a una versión anterior del código sin que se convierta en un drama.

> ⓘ Integrar Git con plataformas como GitHub o GitLab desde el inicio de tu aprendizaje no solo fomentará buenos hábitos de programación, sino que también te preparará para el entorno profesional. La mayoría de las empresas de software utilizan Git en combinación con una plataforma de alojamiento para gestionar sus proyectos de desarrollo. Por ello, dominar Git es crucial y valorado en la industria.

## ¿Qué es GitHub/GitLab?

[GitHub](https://github.com/) y [GitLab](https://about.gitlab.com/) son plataformas de alojamiento de código en la nube que que facilitan el almacenamiento, la gestión y la compartición de nuestros proyectos de programación con otros desarrolladores.

Imagina que has estado trabajando durante semanas en un proyecto y de repente tu ordenador falla: el disco duro se daña y, para colmo, no tienes copias de seguridad en discos externos o memorias USB. En este escenario catastrófico, haber subido tus códigos a GitHub o GitLab te salva de perder todo tu trabajo.

Más allá de ser un salvavidas en situaciones extremas, estas plataformas también permiten colaborar eficientemente con otros. Por ejemplo, durante el _bootcamp_, al finalizar cada día de clase: el/la profesor/a, subirá los códigos de ejemplo y/o ejercicios hechos durante la clase para que los puedas descargar desde el repositorio del profesor/a simplemente por medio de un comando. Interesante, ¿verdad?

En la sección "Entorno de Trabajo" ya aprendimos a instalar Git para uso local. Ahora, es importante que también crees una cuenta en GitHub o GitLab. ¿A qué esperas? :)
Trata de utilizar el mismo email que nos has indicado.

![](./resources/github_gitlab.png)

## Configuración inicial de Git

Ahora vamos a realizar la configuración inicial de Git en nuestro equipo, para ello necesitamos establecer nuestro nombre y un correo electrónico (a ser posible el indicado a HACK A BOSS), pero antes de eso, vamos a volver a comprobar que tenemos Git instalado, abre una terminal y escribe el siguiente comando:

```shell
git --version
```

Si el sistema no reconoce el comando o no muestra una versión de Git, significa que necesitas instalarlo. Consulta la sección "Entorno de Trabajo" para obtener instrucciones sobre cómo hacerlo.

Una vez confirmado que Git está instalado, procederemos a configurar tu nombre y correo electrónico en Git. Abre una terminal en Ubuntu, _ZSH_ en macOS, o _Git Bash_ en Windows y ejecuta estos comandos:

```shell
git config --global user.name "Tu nombre aquí"

git config --global user.email "tucorreoaqui@mail.com"
```

> ⓘ Trata de utilizar el mismo email que el definido cuando creaste la cuenta de GitHub o GitLab.

Si tienes dudas sobre si has introducido correctamente tus datos, puedes verificarlos con los siguientes comandos:

```shell
git config user.name # Debe imprimir en pantalla tu nombre

git config user.email # Debe imprimir en pantalla tu email
```

Aquí tienes un vídeo donde nuestro compañero Samu explica cómo configurar nombre y email en Git.

![](https://www.youtube.com/embed/B0iSzPtSYEM?modestbranding=1)

## Creación de una clave SSH para GitHub o GitLab

Crear una clave SSH puede parecer complicado al principio, pero es un proceso que solo necesitas realizar una vez para establecer una conexión segura entre tu ordenador y los servidores de GitHub o GitLab. Este método es muy recomendado para operaciones seguras y automáticas de Git sin necesidad de ingresar tu usuario y contraseña cada vez.

### Creando una llave SSH en nuestro ordenador

#### Windows

Windows, por defecto, no muestra archivos ocultos, por lo que el primer paso es activar esta opción para poder trabajar con las claves SSH.

En **Windows 11**:

1. Abre el **Explorador de archivos**.
2. Haz clic en la pestaña **Ver** en la parte superior de la ventana.
3. En el grupo **Mostrar**, haz clic en la casilla **Elementos ocultos**.

En **Windows 10**, el proceso es bastante similar:

1. Abre el **Explorador de Archivos**.
2. Haz clic en la pestaña **Vista** en la barra superior.
3. En el grupo **Mostrar u ocultar**, marca la casilla **Elementos ocultos**.

> ⓘ Maneja con cuidado los archivos ocultos. Evita eliminar o modificar archivos desconocidos que son críticos para el sistema.

Una vez hechos estos pasos previos, vamos a configurar la _key SSH_:

1. Lo primero será abrir una ventana de Git Bash e introduce el siguiente comando junto a tu email vinculado a GitHub/GitLab:

```shell
ssh-keygen -t ed25519 -C "tuemail@mail.com"
```

Cambia [tu-email@dominio.com](mailto:tu-email@dominio.com) por el email con que te registraste en GitHub o GitLab).

Preguntará por la ruta y nombre donde se va a almacenar la _key SSH_, pulsa Enter sin introducir ningún dato, dejando la ruta por defecto (`/c/Users/user/.ssh/id_ed25519`)

Ahora, te preguntará para introducir una contraseña, pulsa Enter directamente sin introducir ninguna contraseña. Pide repetir contraseña, nuevamente pulsa Enter sin introducir nada.

¡Felicidades! Has creado tu primera clave SSH.

2. Busca el fichero que se ha creado. Para eso abre la carpeta `Usuarios/Users` (normalmente está en el disco `C`) y entra en tu usuario, deberías ver la carpeta oculta `.ssh`, accede a ella.

3. Dentro de la carpeta `.ssh` debería haber dos archivos llamados `id_ed25519`, uno de ellos (normalmente el segundo) con extensión `.pub` (Windows lo reconoce como Publisher). Haz clic derecho al `.pub`, selecciona "_abrir con…_" y elige un editor de texto. Por ejemplo Notepad, Block de notas, Visual Studio Code… Copia todo su contenido, desde _ssh-ed25519_, seguido por una serie de caracteres aleatorios y terminando con tu email incluido.

4. Este paso varía ligeramente en GitHub y GitLab:
   En GitHub, loguéate y dirígete clicando en el avatar arriba a la derecha a: `Settings > SSH and GPG keys > New SSH Key`.

   En GitLab, una vez logueado/a, en el menú a la izquierda clica sobre el avatar situado en la derecha, y accede a `Preferences > SSH Keys > Add new key`

5. Ahora debes introducir un título (en la sección **title**) para que puedas identificar la clave SSH y pegar el contenido del fichero en el apartado de **Key**. Pulsa en `Add SSH Key` cuando lo hayas hecho.

### Ubuntu y macOS

1. Lo primero será abrir un nuevo terminal e introducir el siguiente comando junto a tu email vinculado a GitHub/GitLab:

   ```shell
   ssh-keygen -t ed25519 -C "tuemail@mail.com"
   ```

   Cambia _tuemail@dominio.com_ por el email con que te registraste en GitHub o GitLab.

   Preguntará por la ruta y nombre donde se va a almacenar la _key SSH_, pulsa Enter sin introducir ningún dato, dejando la ruta por defecto (`/home/user/.ssh/id_ed25519`)

   Ahora, te preguntará para introducir una contraseña, pulsa Enter directamente sin introducir ninguna contraseña. Pide repetir contraseña, nuevamente pulsa Enter sin introducir nada.

   Enhorabuena! Has creado tu primera clave SSH.

2. Desde el mismo terminal, accede a la ruta donde se almacenó la _key SSH_ (`/home/user/.ssh/`)
   La llave se compone de 2 archivos, en este caso `id_ed25519` privada, que debes mantener en tu ordenador y no compartir con nadie (almacena una cadena larga y aleatoria que se utiliza para **encriptar datos** y **firmar digitalmente** tu identidad) y `id_ed25519.pub` pública (contiene la información matemática necesaria para **desencriptar datos** que han sido encriptados con la clave privada correspondiente), cuyo contenido es el que hay que utilizar en GitHub/GitLab para identificar la _key SSH_.

   Debes copiar el contenido de `id_ed25519.pub` para utilizarlo en GitHub/GitLab, para ello puedes utilizar el comando `cat`, mostrará en la terminal todo el contenido del archivo, selecciona todo el contenido (desde ssh-ed25591..., hasta incluir el email) y copiar todo el contenido (ten en cuenta que para copiar el contenido seleccionado dentro de un terminal se usa `Ctrl + Shift + C` y no únicamente `Ctrl + C`).

3. Este paso varía ligeramente en GitHub y GitLab:
   En GitHub, loguéate y dirígete clicando en el avatar arriba a la derecha a: `Settings > SSH and GPG keys > New SSH Key`.

   En GitLab, una vez logueado/a, en el menú a la izquierda clica sobre el avatar situado en la derecha, y accede a `Preferences > SSH Keys > Add new key`

4. Ahora debes introducir un título (en la sección **title**) para que puedas identificar la clave SSH y pegar el contenido del fichero en el apartado de **Key**. Pulsa en `Add SSH Key` cuando lo hayas hecho.

En este vídeo aprenderás cómo crear y vincular una clave SSH a tu cuenta en GitHub o GitLab.

![](https://www.youtube.com/embed/N3eFbeUYQUY?modestbranding=1)
