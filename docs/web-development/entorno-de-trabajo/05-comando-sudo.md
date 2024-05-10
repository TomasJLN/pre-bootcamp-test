---
title: Comando sudo
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 3
---

En esta sección, veremos qué es `sudo` y cómo utilizarlo para la realización de tareas administrativas en nuestro sistema, manteniendo al mismo tiempo la seguridad al limitar el acceso a las funciones críticas.

## **¿Qué es sudo?**

`sudo` (abreviatura del inglés _**S**uper**U**ser **D**o_) es un comando especial en sistemas operativos basados en Linux, como Ubuntu, que permite a usuarios normales ejecutar comandos con privilegios de _superusuario_ o _root_. Sería el equivalente en Windows a _“ejecutar con permisos de administrador”_.

Para instalar aplicaciones en un sistema Linux, normalmente se requieren permisos de administrador. Por ejemplo, si deseamos instalar `htop`, un monitor de recursos del sistema, deberemos abrir el terminal de Ubuntu y escribir el comando siguiente:

```shell
apt install htop
```

Es probable que este comando no funcione inicialmente debido a la falta de permisos adecuados. Para solucionarlo, podemos utilizar el comando `sudo` antes del comando de instalación:

```shell
sudo apt install htop
```

Al hacer esto, `sudo` proporciona temporalmente los privilegios de administrador necesarios para realizar cambios significativos en el sistema, como la instalación de software. Este control es vital para mantener la seguridad y la integridad del sistema operativo, asegurando que solo los usuarios autorizados realicen modificaciones importantes.

> ⓘ Las acciones con privilegios de _root_ son potencialmente peligrosas, por lo que no se otorgan a todos los usuarios. Sudo actúa como un guardián, permitiéndonos realizar tareas administrativas en nuestro sistema sin tener que iniciar sesión como _root_, lo que aumenta la seguridad y reduce el riesgo de errores.

## **¿Cómo se usa?**

Actualizar el sistema operativo Linux requiere privilegios de administrador porque estas acciones afectan a todo el sistema y no están permitidas para usuarios normales. A continuación, veremos cómo usar `sudo` para ejecutar actualizaciones de forma segura.

1. **Abre una terminal**: Puedes hacerlo buscando "terminal" en tus aplicaciones o presionando `Ctrl+Alt+T` en la mayoría de las distribuciones de Linux.

![](./resources/app_terminal.png)

2. **Usa `sudo` para ejecutar los comandos de actualización**: Para actualizar el sistema, necesitas ejecutar dos comandos. Primero, ejecuta:

   ```shell
   sudo apt update
   ```

   Este comando busca en los repositorios las últimas actualizaciones de software disponibles.

   Después de ejecutar este comando con `sudo`, se te pedirá que ingreses tu contraseña de usuario (debes ser un usuario autorizado en el grupo `sudo`). Al teclear la contraseña, no verás los caracteres que escribes, esto es una medida de seguridad para proteger tu información.

   Luego, para instalar estas actualizaciones, ejecuta:

   ```shell
   sudo apt upgrade
   ```

   Este segundo comando descarga e instala las actualizaciones.

### **¡Atención!**

- **Usa `sudo` con responsabilidad:** No lo trates como una herramienta para todo; úsalo solo para tareas que específicamente requieren privilegios de administrador.
- **Cuidado con los comandos que ejecutas:** Un error con privilegios de _root_ puede tener graves consecuencias y pueden causar daños significativos al sistema.
- **Evita usar sudo para tareas rutinarias:** Para actividades cotidianas que no requieren acceso elevado, es mejor operar con tu cuenta de usuario estándar para mantener la seguridad del sistema.

  **Documentación oficial de sudo:** [https://man7.org/linux/man-pages/man8/sudo.8.html](https://man7.org/linux/man-pages/man8/sudo.8.html)
