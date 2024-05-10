---
title: 'Guía de Referencia: Comandos Básicos de la Terminal'
sidebar_position: 9
toc_min_heading_level: 2
toc_max_heading_level: 3
---

## Manejo de Archivos y Directorios

### `pwd`

- **Descripción**: Muestra la ruta del directorio actual.
- **Ejemplo**:

  ```bash
  pwd
  ```

  Salida: `/home/usuario`

### `cd`

- **Descripción**: Cambia el directorio actual a otro especificado.
- **Ejemplos**:

  - Cambiar al directorio home del usuario:

    ```bash
    cd ~
    ```

  - Subir un nivel en la jerarquía de directorios:

    ```bash
    cd ..
    ```

### `ls`

- **Descripción**: Lista los archivos y directorios en el directorio actual.
- **Ejemplos**:

  - Listar archivos y directorios:

    ```bash
    ls
    ```

  - Listar archivos y directorios con detalles:

    ```bash
    ls -l
    ```

  - Listar todos los archivos, incluidos los ocultos:

    ```bash
    ls -a
    ```

### `mkdir`

- **Descripción**: Crea un nuevo directorio.
- **Ejemplo**:

  ```bash
  mkdir nuevo_directorio
  ```

### `rmdir`

- **Descripción**: Elimina un directorio vacío.
- **Ejemplo**:

  ```bash
  rmdir directorio_vacio
  ```

### `rm`

- **Descripción**: Elimina archivos o directorios.
- **Ejemplos**:

  - Eliminar un archivo:

    ```bash
    rm archivo.txt
    ```

  - Eliminar un directorio y su contenido:

    ```bash
    rm -r directorio
    ```

## Visualización y Manipulación de Contenido

### `cat`

- **Descripción**: Muestra el contenido de un archivo o lo concatena.
- **Ejemplo**:

  ```bash
  cat archivo.txt
  ```

### `more` / `less`

- **Descripción**: Permite la visualización paginada de texto.
- **Ejemplo**:

  ```bash
  less archivo_largo.txt
  ```

### `head` / `tail`

- **Descripción**: Muestra las primeras o últimas líneas de un archivo.
- **Ejemplos**:

  - Mostrar las primeras 10 líneas:

    ```bash
    head archivo.txt
    ```

  - Mostrar las últimas 10 líneas:

    ```bash
    tail archivo.txt
    ```

## Gestión del Sistema

### `top`

- **Descripción**: Muestra información en tiempo real sobre procesos en ejecución.
- **Ejemplo**:

  ```bash
  top
  ```

### `ps`

- **Descripción**: Reporta el estado de los procesos en ejecución.
- **Ejemplo**:

  ```bash
  ps aux
  ```

### `kill`

- **Descripción**: Envía una señal a un proceso, usualmente para terminarlo.
- **Ejemplo**:

  ```bash
  kill -9 1234
  ```

## Permisos de Archivos y Directorios

### `chmod`

- **Descripción**: Cambia los permisos de acceso a un archivo o directorio.
- **Ejemplo**:

  ```bash
  chmod 754 script.sh
  ```

Los permisos en Unix/Linux se representan típicamente en forma numérica, usando tres dígitos:

- **Primer dígito (7)**: Representa los permisos del propietario del archivo.
- **Segundo dígito (5)**: Representa los permisos del grupo al que pertenece el archivo.
- **Tercer dígito (4)**: Representa los permisos para otros usuarios que no son ni el propietario ni parte del grupo.

Cada dígito es la suma de:

- **4**: Lectura (_read_)
- **2**: Escritura (_write_)
- **1**: Ejecución (_execute_)

Por lo tanto, los números se interpretan como:

- **7** (4+2+1): Lectura, escritura y ejecución para el propietario.
- **5** (4+0+1): Lectura y ejecución para el grupo.
- **4** (4+0+0): Lectura para otros.

### `chown`

- **Descripción**: Cambia el propietario y/o grupo de un archivo o directorio.

- **Ejemplo**:

  ```bash
  chown usuario:grupo archivo.txt
  ```

## Conectividad

### `ping`

- **Descripción**: Verifica la conectividad de red con una dirección IP o dominio.
- **Ejemplo**:

  ```bash
  ping google.com
  ```
