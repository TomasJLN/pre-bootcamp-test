"use strict";(self.webpackChunkdocutest=self.webpackChunkdocutest||[]).push([[214],{4203:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>t,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var i=s(4848),r=s(8453);const l={title:"Gu\xeda de Referencia: Comandos B\xe1sicos de la Terminal",sidebar_position:9,toc_min_heading_level:2,toc_max_heading_level:3},c=void 0,d={id:"web-development/entorno-de-trabajo/guia-referencia-comandos-basicos-terminal",title:"Gu\xeda de Referencia: Comandos B\xe1sicos de la Terminal",description:"Manejo de Archivos y Directorios",source:"@site/docs/web-development/entorno-de-trabajo/guia-referencia-comandos-basicos-terminal.md",sourceDirName:"web-development/entorno-de-trabajo",slug:"/web-development/entorno-de-trabajo/guia-referencia-comandos-basicos-terminal",permalink:"/pre-bootcamp-test/docs/web-development/entorno-de-trabajo/guia-referencia-comandos-basicos-terminal",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web-development/entorno-de-trabajo/guia-referencia-comandos-basicos-terminal.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Gu\xeda de Referencia: Comandos B\xe1sicos de la Terminal",sidebar_position:9,toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"tutorialSidebar",previous:{title:"La Terminal",permalink:"/pre-bootcamp-test/docs/web-development/entorno-de-trabajo/anexo-c-la-terminal"},next:{title:"Data",permalink:"/pre-bootcamp-test/docs/category/data"}},o={},a=[{value:"Manejo de Archivos y Directorios",id:"manejo-de-archivos-y-directorios",level:2},{value:"<code>pwd</code>",id:"pwd",level:3},{value:"<code>cd</code>",id:"cd",level:3},{value:"<code>ls</code>",id:"ls",level:3},{value:"<code>mkdir</code>",id:"mkdir",level:3},{value:"<code>rmdir</code>",id:"rmdir",level:3},{value:"<code>rm</code>",id:"rm",level:3},{value:"Visualizaci\xf3n y Manipulaci\xf3n de Contenido",id:"visualizaci\xf3n-y-manipulaci\xf3n-de-contenido",level:2},{value:"<code>cat</code>",id:"cat",level:3},{value:"<code>more</code> / <code>less</code>",id:"more--less",level:3},{value:"<code>head</code> / <code>tail</code>",id:"head--tail",level:3},{value:"Gesti\xf3n del Sistema",id:"gesti\xf3n-del-sistema",level:2},{value:"<code>top</code>",id:"top",level:3},{value:"<code>ps</code>",id:"ps",level:3},{value:"<code>kill</code>",id:"kill",level:3},{value:"Permisos de Archivos y Directorios",id:"permisos-de-archivos-y-directorios",level:2},{value:"<code>chmod</code>",id:"chmod",level:3},{value:"<code>chown</code>",id:"chown",level:3},{value:"Conectividad",id:"conectividad",level:2},{value:"<code>ping</code>",id:"ping",level:3}];function h(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"manejo-de-archivos-y-directorios",children:"Manejo de Archivos y Directorios"}),"\n",(0,i.jsx)(n.h3,{id:"pwd",children:(0,i.jsx)(n.code,{children:"pwd"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Descripci\xf3n"}),": Muestra la ruta del directorio actual."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ejemplo"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pwd\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Salida: ",(0,i.jsx)(n.code,{children:"/home/usuario"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"cd",children:(0,i.jsx)(n.code,{children:"cd"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Descripci\xf3n"}),": Cambia el directorio actual a otro especificado."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ejemplos"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Cambiar al directorio home del usuario:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ~\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Subir un nivel en la jerarqu\xeda de directorios:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ..\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ls",children:(0,i.jsx)(n.code,{children:"ls"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Descripci\xf3n"}),": Lista los archivos y directorios en el directorio actual."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ejemplos"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Listar archivos y directorios:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ls\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Listar archivos y directorios con detalles:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ls -l\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Listar todos los archivos, incluidos los ocultos:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ls -a\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"mkdir",children:(0,i.jsx)(n.code,{children:"mkdir"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Descripci\xf3n"}),": Crea un nuevo directorio."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ejemplo"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir nuevo_directorio\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"rmdir",children:(0,i.jsx)(n.code,{children:"rmdir"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Descripci\xf3n"}),": Elimina un directorio vac\xedo."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ejemplo"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"rmdir directorio_vacio\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"rm",children:(0,i.jsx)(n.code,{children:"rm"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Descripci\xf3n"}),": Elimina archivos o directorios."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ejemplos"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Eliminar un archivo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"rm archivo.txt\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Eliminar un directorio y su contenido:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"rm -r directorio\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"visualizaci\xf3n-y-manipulaci\xf3n-de-contenido",children:"Visualizaci\xf3n y Manipulaci\xf3n de Contenido"}),"\n",(0,i.jsx)(n.h3,{id:"cat",children:(0,i.jsx)(n.code,{children:"cat"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Descripci\xf3n"}),": Muestra el contenido de un archivo o lo concatena."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ejemplo"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat archivo.txt\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"more--less",children:[(0,i.jsx)(n.code,{children:"more"})," / ",(0,i.jsx)(n.code,{children:"less"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Descripci\xf3n"}),": Permite la visualizaci\xf3n paginada de texto."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ejemplo"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"less archivo_largo.txt\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"head--tail",children:[(0,i.jsx)(n.code,{children:"head"})," / ",(0,i.jsx)(n.code,{children:"tail"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Descripci\xf3n"}),": Muestra las primeras o \xfaltimas l\xedneas de un archivo."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ejemplos"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Mostrar las primeras 10 l\xedneas:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"head archivo.txt\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Mostrar las \xfaltimas 10 l\xedneas:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"tail archivo.txt\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"gesti\xf3n-del-sistema",children:"Gesti\xf3n del Sistema"}),"\n",(0,i.jsx)(n.h3,{id:"top",children:(0,i.jsx)(n.code,{children:"top"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Descripci\xf3n"}),": Muestra informaci\xf3n en tiempo real sobre procesos en ejecuci\xf3n."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ejemplo"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"top\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ps",children:(0,i.jsx)(n.code,{children:"ps"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Descripci\xf3n"}),": Reporta el estado de los procesos en ejecuci\xf3n."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ejemplo"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ps aux\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"kill",children:(0,i.jsx)(n.code,{children:"kill"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Descripci\xf3n"}),": Env\xeda una se\xf1al a un proceso, usualmente para terminarlo."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ejemplo"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kill -9 1234\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"permisos-de-archivos-y-directorios",children:"Permisos de Archivos y Directorios"}),"\n",(0,i.jsx)(n.h3,{id:"chmod",children:(0,i.jsx)(n.code,{children:"chmod"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Descripci\xf3n"}),": Cambia los permisos de acceso a un archivo o directorio."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ejemplo"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"chmod 754 script.sh\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Los permisos en Unix/Linux se representan t\xedpicamente en forma num\xe9rica, usando tres d\xedgitos:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Primer d\xedgito (7)"}),": Representa los permisos del propietario del archivo."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Segundo d\xedgito (5)"}),": Representa los permisos del grupo al que pertenece el archivo."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Tercer d\xedgito (4)"}),": Representa los permisos para otros usuarios que no son ni el propietario ni parte del grupo."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Cada d\xedgito es la suma de:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"4"}),": Lectura (",(0,i.jsx)(n.em,{children:"read"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"2"}),": Escritura (",(0,i.jsx)(n.em,{children:"write"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"1"}),": Ejecuci\xf3n (",(0,i.jsx)(n.em,{children:"execute"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Por lo tanto, los n\xfameros se interpretan como:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"7"})," (4+2+1): Lectura, escritura y ejecuci\xf3n para el propietario."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"5"})," (4+0+1): Lectura y ejecuci\xf3n para el grupo."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"4"})," (4+0+0): Lectura para otros."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"chown",children:(0,i.jsx)(n.code,{children:"chown"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Descripci\xf3n"}),": Cambia el propietario y/o grupo de un archivo o directorio."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ejemplo"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"chown usuario:grupo archivo.txt\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"conectividad",children:"Conectividad"}),"\n",(0,i.jsx)(n.h3,{id:"ping",children:(0,i.jsx)(n.code,{children:"ping"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Descripci\xf3n"}),": Verifica la conectividad de red con una direcci\xf3n IP o dominio."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ejemplo"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ping google.com\n"})}),"\n"]}),"\n"]})]})}function t(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var i=s(6540);const r={},l=i.createContext(r);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);