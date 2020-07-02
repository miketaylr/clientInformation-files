//
// class.lang.Environ.js
//
Package("lang");

/**
 * Establece variable globales de contexto y
 * configurac$ion.
 */
public.Class.Environ = function () {
  eval(lang);
  with (private)
    with (protected)
      with (public)
        with (static) {
          //_____________________________________________________________________________________
          // Usuario interno.
          global.isInternal = null;
          //_____________________________________________________________________________________
          // Usuario de confianza
          global.isTrusted = null;
          //_____________________________________________________________________________________
          // Current date.
          global.$DATE = null;
          //_____________________________________________________________________________________
          // Charset actual.
          global.$CHARSET = null;
          //_____________________________________________________________________________________
          // URL actual  (http://ntwasdes/draw00/img/allianz.gif).
          global.$URL = null;
          //_____________________________________________________________________________________
          // Protocolo (http:).
          global.$PROTOCOL = null;
          //_____________________________________________________________________________________
          // Dominio (ntwasdes).
          global.$DOMAIN = null;
          //_____________________________________________________________________________________
          // Domino + purto (ntwasdes:8080).
          global.$HOST = null;
          //_____________________________________________________________________________________
          // Uniform Resource Folder (http://ntwasdes/draw00/img/).
          global.$URF = null;
          //_____________________________________________________________________________________
          // Uniform Resource Name (allianz.gif).
          global.$URN = null;
          //_____________________________________________________________________________________
          // Ruta completa de carpeta (/draw00/img).
          global.$PATH = null;
          //_____________________________________________________________________________________
          // Name Space: main folder (/draw00).
          global.$NS = null;
          //_____________________________________________________________________________________
          // Name Sub-Space: last folder ( /img).
          global.$NSS = null;
          //_____________________________________________________________________________________
          // Configuraci$on de pantalla.
          global.$SCREEN = null;
          //_____________________________________________________________________________________
          // Modo de conexi$on (lan, modem, offline, unknown).
          global.$CONNECTION = null;
          //_____________________________________________________________________________________
          // Plataforma del sistema operativo.
          global.$PLATFORM = null;
          //_____________________________________________________________________________________
          // Famila de la CPU.
          global.$CPU = null;
          //_____________________________________________________________________________________
          // Indicador de Java habilitado.
          global.$JAVA = null;
          //_____________________________________________________________________________________
          // Indicador de cookies habilitadas.
          global.$COOKIES = null;
          //_____________________________________________________________________________________
          // Indicador de soporte Microsoft Active X Object.
          global.$AXO = null;
          //_____________________________________________________________________________________
          // Versi$on de widgets.
          global.$WIDGETS = null;
          //_____________________________________________________________________________________
          // Versi$on de SEA.
          global.$SEA = null;
          //_____________________________________________________________________________________
          // Objeto proveedor de configuraci$on del navegador.
          static.Object.clientCaps = null;

          //_____________________________________________________________________________________
          // Muestara una ventana con la lista de las variables
          // de entorno (pulsando [ALT] + [¡].
          private.showVariables = function () {
            var oEvent = DOMEvent();

            // [ALT] + '¡'
            if (oEvent.altKey && oEvent.getKey() == 221) {
              var sAux = "";
              for (var Member in window)
                if (Member.charAt(0) == "$" && Member.length > 1)
                  // Excluimos la funcion general de jquery
                  sAux += Member + "=" + window[Member] + "\n";
              if (sAux != "") alert("\n" + sAux + "\n", 3);
            }

            return true;
          };

          //_____________________________________________________________________________________
          // Establece variables de generales de entorno.
          // En la siguiente lista, se muestran todas la variables de configuraci$on
          // incluyendo las que se arrastran de P$agina en p$agina.
          //
          // &#36;AGENT      Si hay sesi$on, c$odigo de agente del usuario agente (por ejemplo 100)
          // &#36;AREA       Si hay sesi$on, descripci$on del $area del usuario empleado
          // &#36;AXO        Indicador de soporte de ActiveX (true o false)
          // &#36;BRANCH     Si hay sesi$on, c$odigo de sucursal del usuario agente (por ejemplo 0105)
          // &#36;BROWSER    Tipo de navegador:
          //                  FF = Mozilla Firefox
          //                  GG = Generic Gecko
          //                  GM = Generic Mozilla
          //                  IE = Internet Explorer
          //                  CR = Chrome
          //                  KM = K-Meleon
          //                  KO = Konqueror
          //                  MZ = Mozilla Firebird o Phoenix
          //                  NS = Netscape
          //                  OP = Opera
          //                  PE = Pocket Explorer
          //                  SF = Safari
          //                  XX = Otros
          // &#36;BROWVER    Versi$on del navegador
          // &#36;BROWRENDER Versi$on de la renderizaci$on del navegador (p.e. emulaci$on IE7 con IE8)
          // &#36;CHARSET    Juego de caracteres actual (normalmente  ISO-8859-1)
          // &#36;CN         Si hay sesi$on, nombre  corriente del usuario (Common Name)
          // &#36;COL        Si hay sesi$on, c$odigo de colaborador del usuario agente (por ejemplo 0001)
          // &#36;COMPANY    Si hay sesi$on, c$odigo de compañ$ia (por ejemplo 02)
          // &#36;CONNECTION Modo de conexi$on:
          //                  lan     = Red
          //                  modem   = Modem
          //                  offline = Disco local
          //                  unknown = Otros
          // &#36;CONTEXT    Si hay sesi$on, contexto de la aplicaci$on:
          //                  IN = Intrallianz
          //                  EP = ePac
          // &#36;COOKIES    Indicador de soporte de cookies (true o false)
          // &#36;COUNTRY    Si hay sesi$on, pa$is del usuario (por ejemplo ES)
          // &#36;CPU        Familia de la CPU:
          //                  Intel:    x86
          //                  AMD:      ia64
          //                  Motorola: 68K, PPC
          //                  Digital:  Alpha
          //                  Otros:    XXX
          // &#36;DATE       Fecha actual auto-actualizable
          // &#36;DEP        Si hay sesi$on, descripci$on del departamento del usuario empleado
          // &#36;DIV        Si hay sesi$on, descripci$on del la divisi$on del usuario empleado
          // &#36;DOMAIN     Dominio actual (por ejemplo ntwasdes)
          // &#36;DOMW3C     Indicador de soporte DOM W3C (true o false)
          // &#36;ENVIRON    Si hay sesi$on, entorno de la aplicaci$on:
          //                  DESA = Desarrollo
          //                  INTE = Integraci$on
          //                  PROD = Producci$on
          // &#36;HOST       Dominio y puerto (por ejemplo ntwasdes:80)
          // &#36;IE         Versi$on extendida del Internet Explorer (por ejemplo 6,0,2900,2180)
          // &#36;IP         Si hay sesi$on, direcci$on IP de red (por ejemplo 100.1.226.3)
          // &#36;JAVA       Indicador de soporte JAVA habilitado (true o false)
          // &#36;JS         Versi$on del motor JavaScript (por ejemplo 1,2)
          // &#36;JWS        Versi$on de la m$aquina virtual de JAVA Sun, Java Web Start (por ejemplo 1,5)
          // &#36;LANG       Si hay sesi$on, idioma del usuario (por ejemplo es)
          // &#36;LIBURI     URI de las librer$ias est$aticas (por ejemplo /AlllLibComu)
          // &#36;MACHINE    Si hay sesi$on, nombre de m$aquina (por ejemplo AZ-640809)
          //                  Si no hay sesi$on, la variable est$a informada en DESA e intranet y con Explorer.
          // &#36;MVM        Versi$on de la m$aquina virtual de JAVA Microsoft , (por ejemplo 5,0,3810,0)
          // &#36;NS         Carpeta del recuso o namespace (por ejemplo draw00)
          // &#36;NSS        Subcarpeta del recurso so sub-namespace (por ejemplo /img)
          // &#36;OU         Si hay sesi$on, colectivo al que pertenece el usuario empleado,
          //                  Organization Unit (por ejemplo empleados)
          // &#36;PATCH      Parches o paquetes de servicio del navegador (por ejemplo SP2)
          // &#36;PATH       Carpeta completa (por ejemplo /draw00/img)
          // &#36;PLATFORM   Plataforma del S.O.
          //                  Windows:   WinCE,  Win16, Win32, Win64
          //                  Macintosh: MacPPC, Mac68K
          //                  Sun:       SunOS
          //                  Otros:     XXX
          // &#36;PROTOCOL   Protocolo de conexi$on (por ejemplo http:)
          // &#36;SCREEN     Configuraci$on de la pantalla (por ejemplo 1280x1024x32)
          // &#36;SEA        Si es una aplicaci$on SEA, versi$on del entorno SEA
          // &#36;SERVER     Si hay sesi$on, nombre del servidor (por ejemplo ntwasp09)
          // &#36;SESSION    Si hay sesi$on, identificaci$on de la sesi$on (JSESSION)
          // &#36;STYLE      Nombre del archivo maestro de estilos CSS (por ejemplo allianz6.0)
          // &#36;TECHNOLOGY Tecnolog$ia del sistema:
          //                 WVI = Windows Vista
          //                 WS3 = Windows Server 2003
          //                 WXP = Windows XP
          //                 W2K = Windows 2000
          //                 W40 = Windows NT 4.0
          //                 WNT = Windows NT ( NT < 4.0)
          //                 WME = Windows ME
          //                 W98 = Windows 98 (1a y 2a edici$on)
          //                 W95 = Windows 95
          //                 WCE = Windows CE / Windows Mobile
          //                 POS = PalmOS
          //                 SUN = Sun Microsystems
          //                 MAC = Macintosh
          //                 LNX = Linux
          //                 IRX = IRIX
          //                 OS2 = OS/2
          //                 XXX = Otros
          // &#36;TERMINAL   Si hay sesi$on, direcci$on IP en base decimal (por ejemplo 6401E203)
          // &#36;TIMER      Ventana del reloj general de sesi$on
          // &#36;URF        Dominio y carpeta completa (por ejemplo http://ntwasdes/draw00/img/)
          // &#36;URL        URL completa (por ejemplo http://ntwasdes/draw00/img/allianz.gif)
          // &#36;URN        Nombre del  recurso (por ejemplo allianz.gif)
          // &#36;USER       Si hay sesi$on, nombre de usuario (por ejemplo orsiyes)
          // &#36;USERID     Si hay sesi$on, identificador de usuario (por ejemplo un NIF. 12345678Z)
          // &#36;WIDGETS    Si es una aplicaci$on con widgets, versi$on de los widgets
          // &#36;WINUSR     Usuario windows, s$olo en DESA e intranet, con Explorer (por ejemplo orsiyes)
          // &#36;WINVER     Versi$on numérica del sistema windows:
          //                 WVI = 6.0
          //                 WS3 = 5.2
          //                 WXP = 5.1
          //                 W2K = 5.0
          //                 W40 = 4.0
          //                 WNT = 3.0
          //                 WME = 2.5
          //                 W98 = 2.2
          //                 W95 = 2.0
          //                 WCE = 1.0
          static.Void.setEnvironment = function () {
            var sAux =
              location.pathname.charAt(0) == "/"
                ? location.pathname
                : "/" + location.pathname;

            $PROTOCOL = location.protocol.toLowerCase();
            $DOMAIN = location.hostname.toLowerCase();
            $HOST = location.host.toLowerCase();
            $URL = location.href;
            $URN = sAux.substr(sAux.lastIndexOf("/") + 1);
            $NS = sAux.substring(0, sAux.indexOf("/", 1));
            $PATH = sAux.substring(0, sAux.lastIndexOf("/"));
            $URF = $PROTOCOL + "/" + "/" + $HOST + $NS + "/";
            $NSS =
              $NS == $PATH ? $NS : $PATH.substr($PATH.lastIndexOf("/") + 1);

            $OVERLOAD = clientCaps.uniqueNumber ? clientCaps.uniqueNumber : 0;
            $CONNECTION = clientCaps.connectionType
              ? clientCaps.connectionType
              : "unknown";
            $PLATFORM = navigator.platform ? navigator.platform : "XXX";
            $CPU = navigator.cpuClass ? navigator.cpuClass : "XXX";
            $SCREEN =
              screen.width + "x" + screen.height + "x" + screen.colorDepth;
            $JAVA = navigator.javaEnabled();

            $COOKIES =
              typeof window.dialogArguments == "undefined"
                ? navigator.cookieEnabled
                : true;

            $WIDGETS = document.getElementById("widgetsVersion")
              ? document
                  .getElementById("widgetsVersion")
                  .content.replace(/\./g, ",")
              : "0,0";
            $SEA = document.getElementById("seaVersion")
              ? document
                  .getElementById("seaVersion")
                  .content.replace(/\./g, ",")
              : "0,0";

            try {
              $CHARSET = document.charset
                ? document.charset.toUpperCase()
                : document.characterSet.toUpperCase();
            } catch (e) {
              $CHARSET = "";
            }

            $AXO = isIE && activexof("Scripting.Dictionary") ? true : false;
            $DATE = dateof(null, "@dd/@mm/@yyyy");

            var oSrc = window.environment;

            // Si no existeix el envion.$TIMER, sera ella mateixa
            //
            try {
              var oAux = oSrc.$TIMER;
            } catch (e) {
              oSrc = self;
            }

            window.$TIMER = oSrc.$TIMER ? oSrc.$TIMER : null;
            window.$USER = oSrc.$USER ? oSrc.$USER : "";
            window.$CN = oSrc.$CN ? oSrc.$CN : "";
            window.$IP = oSrc.$IP ? oSrc.$IP : "";
            window.$SERVER = oSrc.$SERVER ? oSrc.$SERVER : "";
            window.$SESSION = "";
            window.$TERMINAL = oSrc.$TERMINAL ? oSrc.$TERMINAL : "";

            //Support DOM W3C
            window.$DOMW3C =
              document.createElement != null && document.getElementById != null;

            if (!oSrc.$WINUSR) {
              if (isIE && (isIntra || isTrial)) {
                var oAux = activexof("WScript.Network");
                if (oAux) {
                  oSrc.$WINUSR = oAux.UserName; // Nombre local del usuario windows
                  oSrc.$MACHINE = oAux.ComputerName; // Nombre local de la maquina
                }
              }
            }

            window.$MACHINE = oSrc.$MACHINE ? oSrc.$MACHINE : "";
            window.$WINUSR = oSrc.$WINUSR ? oSrc.$WINUSR : "";

            if (window.$MACHINE != "") {
              var iAux = window.$MACHINE.indexOf(".");
              if (iAux != -1)
                window.$MACHINE = window.$MACHINE.substring(0, iAux);
            }

            // Si no hay usuario, Not User
            if (window.$USER == "") window.$USER = "NOTUSER";

            // Si es desarrollo y no hay usuario, utilizar el del windows
            if (isTrial && window.$USER == "NOTUSER" && window.$WINUSR != "")
              window.$USER = window.$WINUSR.toUpperCase();

            window.$USERID = oSrc.$USERID
              ? oSrc.$USERID
              : oSrc.strEmpNIF
              ? oSrc.strEmpNIF
              : "";
            window.$COUNTRY = oSrc.$COUNTRY
              ? oSrc.$COUNTRY
              : oSrc.pais
              ? oSrc.pais
              : "";
            window.$COMPANY = oSrc.$COMPANY
              ? oSrc.$COMPANY
              : oSrc.codEmpresa
              ? oSrc.codEmpresa
              : "";
            window.$ENVIRON = oSrc.$ENVIRON
              ? oSrc.$ENVIRON
              : oSrc.entorno
              ? oSrc.entorno
              : "";
            window.$CONTEXT = oSrc.$CONTEXT
              ? oSrc.$CONTEXT
              : oSrc.APP
              ? oSrc.APP
              : "";

            // Problemas con la variable $LANG : redefinida en EPAc y SEA-Widgets
            //
            if (
              typeof window.$LANG == "undefined" ||
              window.$LANG.length == 0
            ) {
              window.$LANG = oSrc.$LANG
                ? oSrc.$LANG
                : oSrc.idioma
                ? oSrc.idioma
                : "";
            }

            if (
              typeof window.$LANGCOUNTRY == "undefined" ||
              window.$LANGCOUNTRY.length == 0
            ) {
              window.$LANGCOUNTRY = oSrc.$LANGCOUNTRY ? oSrc.$LANGCOUNTRY : "";
            }

            window.$AREA = oSrc.$AREA
              ? oSrc.$AREA
              : oSrc.ALLar
              ? oSrc.ALLar
              : "";
            window.$DIV = oSrc.$DIV
              ? oSrc.$DIV
              : oSrc.ALLdiv
              ? oSrc.ALLdiv
              : "";
            window.$DEP = oSrc.$DEP
              ? oSrc.$DEP
              : oSrc.ALLdep
              ? oSrc.ALLdep
              : "";
            window.$OU = oSrc.$OU ? oSrc.$OU : oSrc.ALLcol ? oSrc.ALLcol : "";
            window.$BRANCH = oSrc.$BRANCH
              ? oSrc.$BRANCH
              : oSrc.sucursal
              ? oSrc.sucursal
              : "";
            window.$AGENT = oSrc.$AGENT
              ? oSrc.$AGENT
              : oSrc.agente
              ? oSrc.agente
              : "";
            window.$COL = oSrc.$COL
              ? oSrc.$COL
              : oSrc.colaborador
              ? oSrc.colaborador
              : "";

            if (window.$ENVIRON.length > 3)
              window.$ENVIRON = window.$ENVIRON.substring(0, 4);

            if (window.$TERMINAL == "" && window.$IP != "")
              try {
                var aAux = window.$IP.split(".");
                aAux[0] = valueof(aAux[0]).toString(16);
                aAux[1] = valueof(aAux[1]).toString(16);
                aAux[2] = valueof(aAux[2]).toString(16);
                aAux[3] = valueof(aAux[3]).toString(16);

                window.$TERMINAL = (
                  fillof(aAux[0], "0>2") +
                  fillof(aAux[1], "0>2") +
                  fillof(aAux[2], "0>2") +
                  fillof(aAux[3], "0>2")
                ).toUpperCase();
              } catch (e) {}

            window.$CN = window.$CN.toUpperCase();
            window.$DEP = window.$DEP.toUpperCase();
            window.$DIV = window.$DIV.toUpperCase();
            window.$AREA = window.$AREA.toUpperCase();
            window.$OU = window.$OU.toUpperCase();
            window.$COUNTRY = window.$COUNTRY.toUpperCase();

            window.$STYLE = oSrc.$STYLE ? oSrc.$STYLE : "";
            window.$PATCH = oSrc.$PATCH ? oSrc.$PATCH : getPatches();
            window.$TECHNOLOGY = oSrc.$TECHNOLOGY
              ? oSrc.$TECHNOLOGY
              : getTechnology();
            window.$JWS = oSrc.$JWS ? oSrc.$JWS : getJavaWebStart();

            // JS Engine version
            setJSVersion();

            window.$BROWSER = oSrc.$BROWSER;
            if (window.$BROWSER == null) {
              var sAux = getBrowser();
              window.$BROWSER = sAux.substring(0, 2);
              window.$BROWVER = sAux.substr(2); // .replace(/\./g,",");
            }

            window.$BROWVER = oSrc.$BROWVER;
            if (window.$BROWVER == null) {
              var sAux = getBrowser();
              window.$BROWVER = sAux.substr(2);
            }

            window.$BROWRENDER = oSrc.$BROWRENDER;
            if (window.$BROWRENDER == null) {
              window.$BROWRENDER = renderBrowserVersion();
            }

            window.$MOBILE = oSrc.$MOBILE
              ? oSrc.$MOBILE
              : getMobileTechnology();
            window.$TABLET = oSrc.$TABLET
              ? oSrc.$TABLET
              : getTabletTechnology();

            window.$IE = oSrc.$IE;
            if (window.$IE == null) {
              window.$IE = "";
              window.$MVM = "";
              if (isIE && WINDOWS_VERSION)
                try {
                  window.$IE = clientCaps.getComponentVersion(
                    WINDOWS_COMPONENT["IE"],
                    "componentID"
                  );
                  window.$MVM = clientCaps.getComponentVersion(
                    WINDOWS_COMPONENT["MVM"],
                    "componentID"
                  );
                } catch (e) {}
            }

            window.$WINVER = oSrc.$WINVER
              ? oSrc.$WINVER
              : getWindowsVersion(window.$TECHNOLOGY);

            if (window.addEventListener)
              window.addEventListener("load", getWidgetsEnviroOnLoad, false);
            else window.attachEvent("onload", getWidgetsEnviroOnLoad);
          };

          //_____________________________________________________________________________________
          // JavaScript engine version
          private.Void.setJSVersion = function () {
            if (!isReady)
              document.write(
                "<script language='JavaScript1.1'>$JS='1,1';</script>" +
                  "<script language='JavaScript1.2'>$JS='1,2';</script>" +
                  "<script language='JavaScript1.3'>$JS='1,3';</script>" +
                  "<script language='JavaScript1.4'>$JS='1,4';</script>" +
                  "<script language='JavaScript1.5'>$JS='1,5';</script>" +
                  "<script language='JavaScript1.6'>$JS='1,6';</script>" +
                  "<script language='JavaScript2.0'>$JS='2,0';</script>"
              );
          };

          //_____________________________________________________________________________________
          // Get browser type
          private.String.getBrowser = function () {
            var sUA = navigator.userAgent + " ";
            var iAux = 0;
            var sAux = "XX"; // unknown
            var oAux = BROWSER_ID;

            for (var Member in oAux) {
              iAux = sUA.indexOf(Member);
              if (iAux != -1) {
                iAux = iAux + Member.length + 1;
                sAux =
                  oAux[Member] + sUA.substring(iAux, sUA.indexOf(" ", iAux));
                sAux = sAux.replace(/;/g, "");
                break;
              }
            }

            return sAux;
          };

          //_____________________________________________________________________________________
          // Get rederer browser version
          private.String.renderBrowserVersion = function () {
            var iEngine = 0;

            var iAux = $BROWVER; // version actual IE

            if (document.documentMode) iAux = document.documentMode;

            iEngine = parseInt(iAux);
            if (isNaN(iEngine)) iEngine = iAux;

            var sEngine = iEngine.toString();

            if (sEngine.length > 3) sEngine = sEngine.substr(0, 3);

            return sEngine;
          };

          //_____________________________________________________________________________________
          // Get system Type
          private.String.getTechnology = function () {
            var sUA = navigator.userAgent + " ";
            var sAux = "XXX"; // unknown
            var cAux = SYSTEM_ID;

            for (var Member in cAux) {
              if (sUA.indexOf(Member) != -1) {
                sAux = cAux[Member];
                break;
              }
            }

            return sAux;
          };

          //_____________________________________________________________________________________
          // Get Widgets Page Type Style
          static.Void.getWidgetsEnviroOnLoad = function () {
            // Se ejecuta quant se ha carregat la pagina
            //
            var oSrc = window.environment;

            // Si no existeix el envion.$TIMER, sera ella mateixa
            //
            try {
              var oAux = oSrc.$TIMER;
            } catch (e) {
              oSrc = self;
            }

            // Modificamos el usuario, si estamos en una ventana emulando otro
            // (p.e. login en intra con usuario generico)
            var oEmuUser = document.getElementById("cellUserPromptHeaderArea");
            if (oEmuUser != null) {
              var sEmuUser =
                oEmuUser.innerText != null
                  ? oEmuUser.innerText
                  : oEmuUser.textContent;
              if (typeof sEmuUser == "string" && sEmuUser.length > 0) {
                window.$USER = trimof(sEmuUser);
              }
            }

            if (typeof $STYLELINE == "undefined" || $STYLELINE.length == 0) {
              $STYLELINE = getStyleLineByCssFile();
            }

            if (
              typeof $PAGETYPESTYLE == "undefined" ||
              $PAGETYPESTYLE.length == 0
            ) {
              $PAGETYPESTYLE = getPageTypeStyle();
            }
          };

          //_____________________________________________________________________________________
          // Get Style Type by CSS File Name
          static.String.getStyleLineByCssFile = function () {
            var sRetCssStyle = "styleLine06";
            var aStyleSheet = document.styleSheets;

            for (var iAux = 0, iLen = aStyleSheet.length; iAux < iLen; iAux++) {
              var sHRef = aStyleSheet[iAux].href;
              if (sHRef) {
                // pot ser que no existeixi si no es un fitxer : amb el tag style
                var sNameCssFile = sHRef.toUpperCase();
                if (sNameCssFile.indexOf("STYLE2010.CSS") > -1)
                  sRetCssStyle = "styleLine10";
              }
            }

            return sRetCssStyle;
          };

          //_____________________________________________________________________________________
          // Get Widgets Page Type Style
          static.String.getPageTypeStyle = function () {
            var sRetTypeStyle = "";
            var aStyleSheet = document.styleSheets;

            for (var iAux = 0, iLen = aStyleSheet.length; iAux < iLen; iAux++) {
              var sHRef = aStyleSheet[iAux].href;
              if (sHRef) {
                // pot ser que no existeixi si no es un fitxer : amb el tag style
                var iPosi = sHRef.indexOf("/gbl");
                if (iPosi >= 0) {
                  var sHRefAux = sHRef.substr(iPosi + 4);
                  var iPosi = sHRefAux.indexOf(".");
                  if (iPosi > 0) sRetTypeStyle = sHRefAux.substr(0, iPosi);
                  else sRetTypeStyle = sHRefAux;
                }
              }
            }

            return sRetTypeStyle;
          };

          //_____________________________________________________________________________________
          // Get Mobile Type
          private.String.getMobileTechnology = function () {
            var sUA = navigator.userAgent + " ";
            var sAux = "NONE";

            if (sUA.match(/mobile/gi) != null) {
              sAux = "OTHER";

              if (sUA.match(/(iphone|ipod|ipad)/gi) != null) sAux = "IPHONE";

              if (sUA.match(/blackberry/gi) != null) sAux = "BLACKBERRY";

              if (sUA.match(/android/gi) != null) sAux = "ANDROID";
            }

            return sAux;
          };

          //_____________________________________________________________________________________
          // Get Tablet Type
          private.String.getTabletTechnology = function () {
            var sUA = navigator.userAgent + " ";
            var sAux = "NONE";

            if (sUA.match(/(xoom|tablet|kindle)/gi) != null) sAux = "OTHER";

            if (sUA.match(/ipad/gi) != null) sAux = "IPAD";

            if (sUA.match(/android/gi) != null) sAux = "ANDROID";

            return sAux;
          };

          //_____________________________________________________________________________________
          // Get windows system number version
          private.Number.getWindowsVersion = function (String) {
            var sTech = arguments[0];
            var iUnknown = 0.0;
            var cAux = WINDOWS_VERSION;

            return cAux[sTech] ? cAux[sTech] : iUnknown;
          };

          //_____________________________________________________________________________________
          // Browser patch
          private.String.getPatches = function () {
            var sAux = window.clientInformation
              ? window.clientInformation.appMinorVersion
              : "";

            if (!sAux) sAux = "";

            if (sAux != "") {
              var iAux = sAux.indexOf(";");
              sAux = sAux.substr(iAux + 1).replace(/;/gim, " ");
            }

            return sAux;
          };

          //_____________________________________________________________________________________
          // Sun Java Web Start (Java Virtual Machine)
          private.String.getJavaWebStart = function () {
            var sAux = "";
            var cAux = JAVA_WEB_START;

            if (isIE) {
              for (var Member in cAux) {
                if (activexof(Member)) {
                  sAux = cAux[Member];
                  break;
                }
              }
            } else {
              var Member = "Java Plug-in";
              var aPlugins = navigator.plugins;
              for (var Idx = 0, Len = aPlugins.length; Idx < Len; Idx++) {
                sAux = aPlugins[Idx].description;
                if (sAux.indexOf(Member) != -1) {
                  Len = Member.length + 1;
                  sAux = sAux.substring(Len, sAux.indexOf(" ", Len));
                  break;
                }
              }
            }

            return sAux;
          };

          //____________________________________________________________________________________
          // Si estamos dentro del frame con una aplicaci$on de Sea-Widgets, cada vez que
          // redimensionemos la ventana general de la apliaci$on, hemos de redimensionar
          // el contenedor appArea
          static.Boolean.isIERenderCompatible = function () {
            var bRet = $BROWSER == "IE" && parseInt($BROWRENDER, 10) <= 7;

            return bRet;
          };

          //_____________________________________________________________________________________
          // Constructor.
          // Sin argumentos.
          private.constructor = new (function () {
            Super();
            clientCaps = document.html;
            clientCaps.style.behavior = "url(#default#clientCaps)";

            setEnvironment();

            isInternal =
              isTrial ||
              $IP.indexOf("100.") == 0 ||
              $IP.indexOf("192.168.") == 0;
            isTrusted =
              $AREA ==
              "\x41\x52\x45\x41\x20\x4F\x52\x47\x41\x4E\x49" +
                "\x5A\x2E\x20\x53\x49\x53\x54\x45\x4D\x41\x53" +
                "\x20\x59\x20\x53\x45\x52\x56\x49\x43\x49\x4F\x53";

            document.addEventListenerAllianz("keydown", showVariables, false);
          })();
        }
}; // end class

//________________________________________________________________________________________
//
Environ.BROWSER_ID = {
  Chrome: "CR", // Chrome (se ha de posar primer que safari)
  Konqueror: "KO", // Konqueror
  MSPIE: "PE", // Pocket Explorer
  Pocket: "PE", // Pocket Explorer
  MSIE: "IE", // Internet Explorer
  Microsoft: "IE", // Internet Explorer
  Opera: "OP", // Opera
  Netscape: "NS", // Netscape
  Netscape6: "NS", // Netscape
  Firefox: "FF", // Mozilla Firefox
  Firebird: "MZ", // Mozilla Firebird
  Phoenix: "MZ", // Mozilla Phoenix
  Safari: "SF", // Safari
  "K-Meleon": "KM", // K-Meleon
  Gecko: "GG", // Generic Gecko
  Mozilla: "GM", // Generic Moz
};

//________________________________________________________________________________________
//
Environ.SYSTEM_ID = {
  "Windows 8": "W08", // Windows 8
  "Windows NT 6.2": "W08", // Windows 8
  "Windows 7": "W07", // Windows 7
  "Windows NT 6.1": "W07", // Windows 7
  "Windows Vista": "WVI", // Windows Vista
  "Windows NT 6.0": "WVI", // Windows Vista
  "Windows Server 2003": "WS3", // Windows Server 2003
  "Windows NT 5.2": "WS3", // Windows Server 2003
  "Windows XP": "WXP", // Windows XP
  "Windows NT 5.1": "WXP", // Windows NT 5.1
  "Windows 2000": "W2K", // Windows 2000
  "Windows NT 5.0": "W2K", // Windows 2000
  "Windows NT 4.0": "W40", // Windows NT
  "Windows NT": "WNT", // Windows NT
  WinNT: "WNT",
  "Windows ME": "WME",
  "Win 9x": "WME",
  "Windows 98": "W98",
  Win98: "W98",
  "Windows 95": "W95",
  Win95: "W95",
  "Windows CE": "WCE",
  SunOS: "SUN",
  Ubuntu: "UBU",
  Android: "AND",
  Linux: "LNX",
  Macintosh: "MAC",
  "Mac OS": "MAC",
  Mac_68K: "MAC",
  Mac_PPC: "MAC",
  Mac_PowerPC: "MAC",
  "OS/2": "OS2",
  PalmOS: "POS",
};

//________________________________________________________________________________________
//
Environ.WINDOWS_VERSION = {
  WCE: 1.0, // Windows CE/Windows Mobile
  W95: 2.0, // Windows 95
  W98: 2.2, // Windows 98/Windows 98 SE
  WME: 2.5, // Windows Mellenium
  WNT: 3.0, // Windows NT >= 3.0
  W40: 4.0, // Windows NT >= 4.0
  W2K: 5.0, // Windows 2000
  WXP: 5.1, // Windows XP
  WS3: 5.2, // Windows Server 2003
  WVI: 6.0, // Windows Vista
  W07: 6.1, // Windows 7
  W08: 6.2, // Windows 8
};

//________________________________________________________________________________________
//
Environ.WINDOWS_COMPONENT = {
  IE: "{89820200-ECBD-11CF-8B85-00AA005B4383}", // Internet Explorer
  MVM: "{08B0E5C0-4FCB-11CF-AAA5-00401C608500}", // Virtrual Machine
};

//________________________________________________________________________________________
//
Environ.JAVA_WEB_START = {
  "JavaWebStart.isInstalled.1.6.0.0": "1,6",
  "JavaWebStart.isInstalled.1.5.0.0": "1,5",
  "JavaWebStart.isInstalled.1.5.0.0": "1,5",
  "JavaWebStart.isInstalled.1.4.2.0": "1,4,2,0",
  "JavaWebStart.isInstalled.1": "1,4,1,0",
  "JavaWebStart.isInstalled.3": "1,3",
  "JavaWebStart.isInstalled.2": "1,2",
  "JavaWebStart.isInstalled": "1,0",
};

//_____________________________________________________________________________________
// Mostramos en el satuts de la ventana el contexto de la aplicaci$on
Environ.showContextStatus = function () {
  var sContext = $NS;

  if (sContext.length > 1) {
    if (sContext.charAt(0) == "/") sContext = sContext.substr(1);
  }
  window.defaultStatus = sContext;
};

void new Environ();

window.addEventListenerAllianz("load", Environ.showContextStatus, false);
/*
page: http://www.e-pacallianz.com/
url: https://www.e-pacallianz.com/drwd00/js/class.lang.Environ.js
*/
