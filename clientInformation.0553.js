!(function (window, document, undefined) {
  "use strict";
  var kl = {},
    Array = window.Array;
  !(function (kl) {
    var core = {};
    !(function (core) {
      (core.utils = {}),
        (function (core) {
          core.utils = core.utils || {};
          var w = window;
          core.utils.utf8 = {
            encode: function (str, cancelEcs) {
              return (
                (w =
                  w ||
                  (core.utils.restorer && core.utils.restorer.getUrlFns()) ||
                  window),
                cancelEcs || (str = core.helpers.strHelper.escapeStr(str)),
                w.unescape(w.encodeURIComponent(str))
              );
            },
          };
        })(core || {}),
        (function (core) {
          function format_uuid(values) {
            var i = 0,
              uuid = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(
                /[x]/g,
                function (c) {
                  return values[i++].toString(16);
                }
              );
            return uuid;
          }
          function generate_numbers() {
            var size = 32,
              numbers = new Array(32),
              c = window.crypto || window.msCrypto;
            if (
              c &&
              c.getRandomValues &&
              "function" == typeof c.getRandomValues
            ) {
              (numbers = new Uint32Array(size)), c.getRandomValues(numbers);
              for (var i = 0; i < size; i++) numbers[i] = numbers[i] % 16;
            } else
              for (var i = 0; i < size; i++)
                numbers[i] = Math.floor(16 * Math.random());
            return format_uuid(numbers);
          }
          (core.utils = core.utils || {}),
            (core.utils.uuid = { generate: generate_numbers });
        })(core || {}),
        (function (core) {
          function log(txt, lvl) {}
          (core.utils = core.utils || {}),
            (core.utils.log = function () {}),
            (core.utils.log = log);
        })(core || {}),
        (function (core) {
          function v0id(a) {
            return a;
          }
          function getMethod(fnName) {
            var method = v0id,
              curr = window.JSON,
              isie8 = !1;
            try {
              delete window.JSON;
            } catch (e) {
              try {
                var elt = document.createElement("div");
                (elt.innerHTML =
                  "<span>/*[if lte IE 8]><span>8</span><![endif]*//*[if gte IE 9]><span>9</span><![endif]*/</span>"),
                  (isie8 = "8" == elt.innerText);
              } catch (e1) {}
            }
            if (!window.JSON && core.utils.restorer) {
              window.JSON = curr;
              try {
                ext = ext || core.utils.restorer.getNative("JSON");
              } catch (e) {}
              if (ext && ext.JSON)
                try {
                  var extJSON = ext.JSON,
                    w = window.JSON;
                  method =
                    extJSON && extJSON[fnName]
                      ? !extJSON[fnName] ||
                        (w &&
                          w[fnName] &&
                          (!w[fnName] ||
                            ("" + extJSON[fnName] == "" + w[fnName] &&
                              extJSON[fnName].toString + "" ==
                                "" + w[fnName].toString)))
                        ? function (a) {
                            return w[fnName].call(w, a);
                          }
                        : function (a) {
                            return extJSON[fnName].call(extJSON, a);
                          }
                      : fallback[fnName];
                } catch (e) {}
              else method = fallback[fnName];
            } else {
              try {
                window.JSON = window.JSON || curr;
              } catch (e) {}
              method = function (a) {
                return (
                  (!isie8 && window.JSON[fnName]) ||
                  fallback[fnName]
                ).call(w, a);
              };
            }
            return method;
          }
          core.utils = core.utils || {};
          var ext,
            fallback = {};
          !(function (JSON) {
            function f(n) {
              return n < 10 ? "0" + n : n;
            }
            function this_value() {
              return this.valueOf();
            }
            function to_JSON(item) {
              return "function" == typeof item.toJSON
                ? item.toJSON()
                : item instanceof Date
                ? isFinite(this.valueOf())
                  ? this.getUTCFullYear() +
                    "-" +
                    f(this.getUTCMonth() + 1) +
                    "-" +
                    f(this.getUTCDate()) +
                    "T" +
                    f(this.getUTCHours()) +
                    ":" +
                    f(this.getUTCMinutes()) +
                    ":" +
                    f(this.getUTCSeconds()) +
                    "Z"
                  : null
                : item.valueOf();
            }
            function quote(string) {
              return (
                (rx_escapable.lastIndex = 0),
                rx_escapable.test(string)
                  ? '"' +
                    string.replace(rx_escapable, function (a) {
                      var c = meta[a];
                      return "string" == typeof c
                        ? c
                        : "\\u" +
                            ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
                    }) +
                    '"'
                  : '"' + string + '"'
              );
            }
            function str(key, holder) {
              var i,
                k,
                v,
                length,
                partial,
                mind = gap,
                value = holder[key];
              switch (
                (value &&
                  "object" == typeof value &&
                  "function" == typeof value.toJSON &&
                  (value instanceof Date ||
                    value instanceof Boolean ||
                    value instanceof Number ||
                    value instanceof String) &&
                  (value = to_JSON(value)),
                "function" == typeof rep &&
                  (value = rep.call(holder, key, value)),
                typeof value)
              ) {
                case "string":
                  return quote(value);
                case "number":
                  return isFinite(value) ? String(value) : "null";
                case "boolean":
                case "null":
                  return String(value);
                case "object":
                  if (!value) return "null";
                  if (
                    ((gap += indent),
                    (partial = []),
                    "[object Array]" === Object.prototype.toString.apply(value))
                  ) {
                    for (length = value.length, i = 0; i < length; i += 1)
                      partial[i] = str(i, value) || "null";
                    return (
                      (v =
                        0 === partial.length
                          ? "[]"
                          : gap
                          ? "[\n" +
                            gap +
                            partial.join(",\n" + gap) +
                            "\n" +
                            mind +
                            "]"
                          : "[" + partial.join(",") + "]"),
                      (gap = mind),
                      v
                    );
                  }
                  if (rep && "object" == typeof rep)
                    for (length = rep.length, i = 0; i < length; i += 1)
                      "string" == typeof rep[i] &&
                        ((k = rep[i]),
                        (v = str(k, value)),
                        v && partial.push(quote(k) + (gap ? ": " : ":") + v));
                  else
                    for (k in value)
                      Object.prototype.hasOwnProperty.call(value, k) &&
                        ((v = str(k, value)),
                        v && partial.push(quote(k) + (gap ? ": " : ":") + v));
                  return (
                    (v =
                      0 === partial.length
                        ? "{}"
                        : gap
                        ? "{\n" +
                          gap +
                          partial.join(",\n" + gap) +
                          "\n" +
                          mind +
                          "}"
                        : "{" + partial.join(",") + "}"),
                    (gap = mind),
                    v
                  );
              }
            }
            var rx_one = /^[\],:{}\s]*$/,
              rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
              rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
              rx_four = /(?:^|:|,)(?:\s*\[)+/g,
              rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
              rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
              gap,
              indent,
              meta,
              rep;
            "function" != typeof JSON.stringify &&
              ((meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\",
              }),
              (JSON.stringify = function (value, replacer, space) {
                var i;
                if (((gap = ""), (indent = ""), "number" == typeof space))
                  for (i = 0; i < space; i += 1) indent += " ";
                else "string" == typeof space && (indent = space);
                if (
                  ((rep = replacer),
                  replacer &&
                    "function" != typeof replacer &&
                    ("object" != typeof replacer ||
                      "number" != typeof replacer.length))
                )
                  throw new Error("JSON.stringify");
                return str("", { "": value });
              })),
              "function" != typeof JSON.parse &&
                (JSON.parse = function (text, reviver) {
                  function walk(holder, key) {
                    var k,
                      v,
                      value = holder[key];
                    if (value && "object" == typeof value)
                      for (k in value)
                        Object.prototype.hasOwnProperty.call(value, k) &&
                          ((v = walk(value, k)),
                          v !== undefined ? (value[k] = v) : delete value[k]);
                    return reviver.call(holder, key, value);
                  }
                  var j;
                  if (
                    ((text = String(text)),
                    (rx_dangerous.lastIndex = 0),
                    rx_dangerous.test(text) &&
                      (text = text.replace(rx_dangerous, function (a) {
                        return (
                          "\\u" +
                          ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                        );
                      })),
                    rx_one.test(
                      text
                        .replace(rx_two, "@")
                        .replace(rx_three, "]")
                        .replace(rx_four, "")
                    ))
                  )
                    return (
                      (j = eval("(" + text + ")")),
                      "function" == typeof reviver ? walk({ "": j }, "") : j
                    );
                  throw new SyntaxError("JSON.parse");
                });
          })(fallback),
            (core.utils.JSON = {
              encode: function (obj) {
                return getMethod("stringify")(obj);
              },
              decode: function (str) {
                return getMethod("parse")(str);
              },
            });
        })(core || {}),
        (function (core) {
          (core.utils = core.utils || {}),
            (core.utils.delegate = function (obj, fn, params) {
              if (!obj) throw "Base object is required";
              if (!fn || "function" != typeof fn) throw "Function is required";
              var args1 = Array.prototype.slice.call(arguments, 2);
              return function () {
                var args = args1.concat(Array.prototype.slice.call(arguments));
                return args.push(this), fn.apply(obj, args);
              };
            }),
            (core.utils.getGlobalCallback = function (
              obj,
              fn,
              tmpFnName,
              params
            ) {
              var args1 = Array.prototype.slice.call(arguments, 3);
              if (window[tmpFnName]) {
                for (var i = 0; window[tmpFnName + "_" + i]; ) i++;
                tmpFnName = tmpFnName + "_" + i;
              }
              return (
                (window[tmpFnName] = function () {
                  try {
                    delete window[tmpFnName];
                  } catch (e) {
                    window[tmpFnName] = undefined;
                  }
                  var args = args1.concat(
                    Array.prototype.slice.call(arguments)
                  );
                  return args.push(this), fn.apply(obj, args);
                }),
                tmpFnName
              );
            });
        })(core || {}),
        (function (core) {
          function getNativesSource() {
            tmpIfr ||
              (tmpIfr = core.helpers.testFrame.getFrame(
                document.getElementsByTagName("body")
              ));
          }
          function getNativeObj(path) {
            var parts = path.split("."),
              obj = null;
            if (parts.length)
              try {
                if (tmpIfr.ishiddenwin) obj = tmpIfr.win.getObj(path);
                else {
                  obj = tmpIfr.win[parts[0]] || null;
                  for (var i = 1, l = parts.length; i < l && obj; i++) {
                    if (!obj[parts[i]]) throw "Can not find " + path;
                    obj = obj[parts[i]];
                  }
                }
              } catch (e) {}
            return obj;
          }
          core.utils = core.utils || {};
          var tmpIfr = null,
            w = window,
            we = null;
          core.utils.restorer = {
            getNative: function () {
              var objs = null;
              getNativesSource();
              for (var i = 0, l = arguments.length; i < l; i++) {
                var path = arguments[i],
                  obj = getNativeObj(path);
                obj && ((objs = objs || {}), (objs[path] = obj));
              }
              return objs;
            },
            getUrlFns: function () {
              if (
                (getNativesSource(),
                (we =
                  we ||
                  this.getNative(
                    "unescape",
                    "encodeURIComponent",
                    "escape",
                    "decodeURIComponent"
                  )),
                "%25" != w.escape("%") ||
                  "%" != w.unescape("%25") ||
                  (we &&
                    we.unescape &&
                    w.unescape.toString() != we.unescape.toString()))
              ) {
                var curr_unescape = w.unescape,
                  curr_encodeURIComponent = w.encodeURIComponent;
                try {
                  delete w.unescape, delete w.encodeURIComponent;
                } catch (e) {
                  (w.unescape = null), (w.encodeURIComponent = null);
                }
                (w.unescape && w.encodeURIComponent) ||
                  ((w.unescape = curr_unescape),
                  (w.encodeURIComponent = curr_encodeURIComponent),
                  (w = we || w));
              }
              return w;
            },
          };
        })(core || {}),
        (function (core) {
          function flush() {
            var dataStr = core.utils.JSON.encode(data);
            try {
              "localStorage" in window &&
                (window.localStorage[storageName] = dataStr),
                "sessionStorage" in window &&
                  (window.sessionStorage[storageName] = dataStr);
            } catch (e) {}
          }
          function init(_storageName) {
            var local = null,
              sess = null;
            if (
              ((storageName = _storageName),
              (data = data || {}),
              "localStorage" in window)
            )
              try {
                local = window.localStorage[storageName];
              } catch (e) {}
            if ("sessionStorage" in window)
              try {
                sess = window.sessionStorage[storageName];
              } catch (e) {}
            (data = local
              ? core.helpers.objectHelper.copyProperties(
                  data,
                  core.utils.JSON.decode(local)
                )
              : data),
              (data = sess
                ? core.helpers.objectHelper.copyProperties(
                    data,
                    core.utils.JSON.decode(sess)
                  )
                : data);
          }
          core.utils = core.utils || {};
          var data = {},
            storageName = "";
          core.utils.storage = {
            setData: function (propName, value) {
              "undefined" == typeof value
                ? delete data[propName]
                : (data[propName] = value),
                flush();
            },
            getData: function (propName) {
              return data ? data[propName] : null;
            },
            init: init,
          };
        })(core || {}),
        (function (core) {
          (core.utils = core.utils || {}),
            (core.utils.hash = function (str) {
              if (Array.prototype.reduce)
                return str.split("").reduce(function (a, b) {
                  return (a = (a << 5) - a + b.charCodeAt(0)), a & a;
                }, 0);
              var i,
                character,
                hash = 0;
              if (0 === str.length) return hash;
              for (i = 0; i < str.length; i++)
                (character = str.charCodeAt(i)),
                  (hash = (hash << 5) - hash + character),
                  (hash &= hash);
              return hash;
            });
        })(core || {});
    })(core || {}),
      (function (core) {
        (core.helpers = {}),
          (function (core) {
            function escapeStr(a) {
              return escStrs[a];
            }
            function addAsterisk(match, nums, last2) {
              return repeat("*", nums.length) + last2;
            }
            function replaceNums(match, origin, protocol, restUrl) {
              return (
                ("undefined" != typeof origin && null !== origin) ||
                  (origin = ""),
                origin + restUrl.replace(numbersRegex, addAsterisk)
              );
            }
            core.helpers = core.helpers || {};
            var repeat,
              escStrs = {
                "\b": "\\b",
                "\f": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "\t": "\\t",
              },
              numbersRegex = /(\d+)(\d{2})/g,
              urlTest = /^((http:|https:)?\/\/[^\/?&#]+[\/#])?([^\?]*)(\?[\s\S]*)?$/i,
              STR_APPLY_OK = !0,
              STR_APPLY_UIA_OK = !0;
            try {
              String.fromCharCode.apply(null, [0]);
            } catch (__) {
              STR_APPLY_OK = !1;
            }
            try {
              String.fromCharCode.apply(null, new Uint8Array(1));
            } catch (__) {
              STR_APPLY_UIA_OK = !1;
            }
            (repeat =
              "function" == typeof "".repeat && "-----" === "-".repeat(5)
                ? function (str, num) {
                    return str.repeat(num);
                  }
                : function (str, num) {
                    return new Array(num + 1).join(str);
                  }),
              (core.helpers.strHelper = {
                escapeStr: function (str) {
                  return str
                    .replace(/[\b\f\n\r\t]/g, escapeStr)
                    .replace(
                      /[\u0000-\u0007\u000b\u000d-\u001f\u2028\u2029]/g,
                      ""
                    );
                },
                hex2binbuf: function (str) {
                  var b = [];
                  return (
                    str
                      .replace(/[^\da-f]/gi, "")
                      .replace(/([\da-f]{2})/gi, function (a) {
                        return b.push(+("0x" + ("00" + a).slice(-2))), "";
                      }),
                    b
                  );
                },
                maskNumbers: function (str) {
                  return str.replace(urlTest, replaceNums);
                },
              });
          })(core || {}),
          (function (core) {
            function fillDoc(d) {
              d.open(),
                d.write(
                  "<!doctype html><html><head></head><body></body></html>"
                ),
                d.close();
            }
            function getIfr() {
              var d,
                iifr = document.createElement("iframe");
              return (
                core.helpers.dom.append(iifr, document.documentElement),
                (iifr.style.position = "absolute"),
                (iifr.style.left = "-100em"),
                (iifr.style.top = "-100em"),
                (iifr.style.width = "10px"),
                (iifr.style.height = "10px"),
                (document.documentElement.domain = document.domain),
                (d = iifr.contentDocument || iifr.contentWindow.document) &&
                  d != window &&
                  d != document &&
                  fillDoc(d),
                {
                  doc: d,
                  win: iifr.contentWindow || d.defaultView || iifr.self,
                  body: d.body,
                }
              );
            }
            var ifr = null;
            (core.helpers = core.helpers || {}),
              (core.helpers.testFrame = {
                makeIframe: getIfr,
                getFrame: function (body) {
                  if (!ifr) {
                    var d;
                    "ActiveXObject" in window &&
                      ((d = new window.ActiveXObject("htmlfile")),
                      d &&
                        (fillDoc(d),
                        (ifr = {
                          win: d.parentWindow,
                          body: d.body,
                          doc: d,
                          ishiddenwin: !0,
                        }))),
                      document.documentElement && !d && (ifr = getIfr());
                  }
                  return (
                    ifr &&
                      ifr.ishiddenwin &&
                      ifr.win.execScript &&
                      !ifr.win.getObj &&
                      ifr.win.execScript(
                        "window['getObj'] = function (str){ var o=null; try{ o=eval(str); }catch(e){} return o; }"
                      ),
                    ifr &&
                      ifr.ishiddenwin &&
                      ifr.win.eval &&
                      !ifr.win.getObj &&
                      ifr.win.eval(
                        "window['getObj'] = function (str){ var o=null; try{ o=eval(str); }catch(e){} return o; }"
                      ),
                    ifr
                  );
                },
              });
          })(core || {}),
          (function () {
            function getself(a) {
              return a;
            }
            function utf8esc(a) {
              return core.utils.utf8.encode(a);
            }
            function copyProperties(objTo, objFrom, typesFilter) {
              try {
                for (var paramName in objFrom) {
                  var val = objFrom[paramName],
                    filter_i = typesFilter && typesFilter[typeof val];
                  filter_i
                    ? (objTo[paramName] = filter_i(val))
                    : typesFilter || (objTo[paramName] = val);
                }
              } catch (e) {}
              return objTo;
            }
            core.helpers = core.helpers || {};
            var allowedtypes = {
              string: utf8esc,
              number: getself,
              boolean: getself,
            };
            core.helpers.objectHelper = {
              hasOwnProp: function (obj, propName) {
                return (
                  propName in obj && !(propName in obj.constructor.prototype)
                );
              },
              extend: function () {
                return copyProperties.apply(
                  this,
                  Array.prototype.slice.call(arguments, 0).concat(null)
                );
              },
              copyProperties: function () {
                return copyProperties.apply(
                  this,
                  Array.prototype.slice.call(arguments, 0).concat(allowedtypes)
                );
              },
            };
          })(core || {}),
          (function () {
            function type(obj) {
              return null == obj
                ? String(obj)
                : class2type[toString.call(obj)] || "object";
            }
            function isFunction(obj) {
              return "function" === _jq.type(obj);
            }
            function isArray(obj) {
              return "array" === _jq.type(obj);
            }
            function each(object, callback, args) {
              var name,
                i = 0,
                length = object.length,
                isObj = length === undefined || isFunction(object);
              if (args)
                if (isObj) {
                  for (name in object)
                    if (callback.apply(object[name], args) === !1) break;
                } else
                  for (
                    ;
                    i < length && callback.apply(object[i++], args) !== !1;

                  );
              else if (isObj) {
                for (name in object)
                  if (callback.call(object[name], name, object[name]) === !1)
                    break;
              } else
                for (
                  ;
                  i < length && callback.call(object[i], i, object[i++]) !== !1;

                );
              return object;
            }
            function isPlainObject(obj) {
              return !(!obj || "object" !== _jq.type(obj));
            }
            function extend() {
              var options,
                name,
                src,
                copy,
                copyIsArray,
                clone,
                target = arguments[0] || {},
                i = 1,
                length = arguments.length,
                deep = !1;
              for (
                "boolean" == typeof target &&
                  ((deep = target), (target = arguments[1] || {}), (i = 2)),
                  "object" == typeof target ||
                    _jq.isFunction(target) ||
                    (target = {}),
                  length === i && ((target = this), --i);
                i < length;
                i++
              )
                if (null != (options = arguments[i]))
                  for (name in options)
                    (src = target[name]),
                      (copy = options[name]),
                      target !== copy &&
                        (deep &&
                        copy &&
                        (_jq.isPlainObject(copy) ||
                          (copyIsArray = _jq.isArray(copy)))
                          ? (copyIsArray
                              ? ((copyIsArray = !1),
                                (clone = src && _jq.isArray(src) ? src : []))
                              : (clone =
                                  src && _jq.isPlainObject(src) ? src : {}),
                            (target[name] = _jq.extend(deep, clone, copy)))
                          : copy !== undefined && (target[name] = copy));
              return target;
            }
            function createOptions(options) {
              var object = (optionsCache[options] = {});
              return (
                _jq.each(options.split(core_rspace), function (_, flag) {
                  object[flag] = !0;
                }),
                object
              );
            }
            core.helpers = core.helpers || {};
            var _jq = {
                type: type,
                isArray: isArray,
                isFunction: isFunction,
                isPlainObject: isPlainObject,
                each: each,
                extend: extend,
                noop: function () {},
              },
              toString = Object.prototype.toString,
              class2type = {
                "[object Boolean]": "boolean",
                "[object Number]": "number",
                "[object String]": "string",
                "[object Function]": "function",
                "[object Array]": "array",
                "[object Date]": "date",
                "[object RegExp]": "regexp",
                "[object Object]": "object",
              },
              core_rspace = /\s+/,
              optionsCache = {};
            _jq.Callbacks = function (options) {
              options =
                "string" == typeof options
                  ? optionsCache[options] || createOptions(options)
                  : _jq.extend({}, options);
              var memory,
                fired,
                firing,
                firingStart,
                firingLength,
                firingIndex,
                list = [],
                stack = !options.once && [],
                fire = function (data) {
                  for (
                    memory = options.memory && data,
                      fired = !0,
                      firingIndex = firingStart || 0,
                      firingStart = 0,
                      firingLength = list.length,
                      firing = !0;
                    list && firingIndex < firingLength;
                    firingIndex++
                  )
                    if (
                      list[firingIndex].apply(data[0], data[1]) === !1 &&
                      options.stopOnFalse
                    ) {
                      memory = !1;
                      break;
                    }
                  (firing = !1),
                    list &&
                      (stack
                        ? stack.length && fire(stack.shift())
                        : memory
                        ? (list = [])
                        : self.disable());
                },
                self = {
                  add: function () {
                    if (list) {
                      var start = list.length;
                      !(function add(args) {
                        _jq.each(args, function (_, arg) {
                          var type = _jq.type(arg);
                          "function" === type
                            ? (options.unique && self.has(arg)) ||
                              list.push(arg)
                            : arg &&
                              arg.length &&
                              "string" !== type &&
                              add(arg);
                        });
                      })(arguments),
                        firing
                          ? (firingLength = list.length)
                          : memory && ((firingStart = start), fire(memory));
                    }
                    return this;
                  },
                  remove: function () {
                    return (
                      list &&
                        _jq.each(arguments, function (_, arg) {
                          for (
                            var index;
                            (index = _jq.inArray(arg, list, index)) > -1;

                          )
                            list.splice(index, 1),
                              firing &&
                                (index <= firingLength && firingLength--,
                                index <= firingIndex && firingIndex--);
                        }),
                      this
                    );
                  },
                  has: function (fn) {
                    return _jq.inArray(fn, list) > -1;
                  },
                  empty: function () {
                    return (list = []), this;
                  },
                  disable: function () {
                    return (list = stack = memory = undefined), this;
                  },
                  disabled: function () {
                    return !list;
                  },
                  lock: function () {
                    return (stack = undefined), memory || self.disable(), this;
                  },
                  locked: function () {
                    return !stack;
                  },
                  fireWith: function (context, args) {
                    return (
                      (args = args || []),
                      (args = [context, args.slice ? args.slice() : args]),
                      !list ||
                        (fired && !stack) ||
                        (firing ? stack.push(args) : fire(args)),
                      this
                    );
                  },
                  fire: function () {
                    return self.fireWith(this, arguments), this;
                  },
                  fired: function () {
                    return !!fired;
                  },
                };
              return self;
            };
            var core_slice = Array.prototype.slice;
            _jq.extend({
              Deferred: function (func) {
                var tuples = [
                    [
                      "resolve",
                      "done",
                      _jq.Callbacks("once memory"),
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      _jq.Callbacks("once memory"),
                      "rejected",
                    ],
                    ["notify", "progress", _jq.Callbacks("memory")],
                  ],
                  state = "pending",
                  promise = {
                    state: function () {
                      return state;
                    },
                    always: function () {
                      return deferred.done(arguments).fail(arguments), this;
                    },
                    then: function () {
                      var fns = arguments;
                      return _jq
                        .Deferred(function (newDefer) {
                          _jq.each(tuples, function (i, tuple) {
                            var action = tuple[0],
                              fn = fns[i];
                            deferred[tuple[1]](
                              _jq.isFunction(fn)
                                ? function () {
                                    var returned = fn.apply(this, arguments);
                                    returned && _jq.isFunction(returned.promise)
                                      ? returned
                                          .promise()
                                          .done(newDefer.resolve)
                                          .fail(newDefer.reject)
                                          .progress(newDefer.notify)
                                      : newDefer[action + "With"](
                                          this === deferred ? newDefer : this,
                                          [returned]
                                        );
                                  }
                                : newDefer[action]
                            );
                          }),
                            (fns = null);
                        })
                        .promise();
                    },
                    promise: function (obj) {
                      return null != obj ? _jq.extend(obj, promise) : promise;
                    },
                  },
                  deferred = {};
                return (
                  (promise.pipe = promise.then),
                  _jq.each(tuples, function (i, tuple) {
                    var list = tuple[2],
                      stateString = tuple[3];
                    (promise[tuple[1]] = list.add),
                      stateString &&
                        list.add(
                          function () {
                            state = stateString;
                          },
                          tuples[1 ^ i][2].disable,
                          tuples[2][2].lock
                        ),
                      (deferred[tuple[0]] = list.fire),
                      (deferred[tuple[0] + "With"] = list.fireWith);
                  }),
                  promise.promise(deferred),
                  func && func.call(deferred, deferred),
                  deferred
                );
              },
              when: function (subordinate) {
                var progressValues,
                  progressContexts,
                  resolveContexts,
                  i = 0,
                  resolveValues = core_slice.call(arguments),
                  length = resolveValues.length,
                  remaining =
                    1 !== length ||
                    (subordinate && _jq.isFunction(subordinate.promise))
                      ? length
                      : 0,
                  deferred = 1 === remaining ? subordinate : _jq.Deferred(),
                  updateFunc = function (i, contexts, values) {
                    return function (value) {
                      (contexts[i] = this),
                        (values[i] =
                          arguments.length > 1
                            ? core_slice.call(arguments)
                            : value),
                        values === progressValues
                          ? deferred.notifyWith(contexts, values)
                          : --remaining ||
                            deferred.resolveWith(contexts, values);
                    };
                  };
                if (length > 1)
                  for (
                    progressValues = new Array(length),
                      progressContexts = new Array(length),
                      resolveContexts = new Array(length);
                    i < length;
                    i++
                  )
                    resolveValues[i] && _jq.isFunction(resolveValues[i].promise)
                      ? resolveValues[i]
                          .promise()
                          .done(updateFunc(i, resolveContexts, resolveValues))
                          .fail(deferred.reject)
                          .progress(
                            updateFunc(i, progressContexts, progressValues)
                          )
                      : --remaining;
                return (
                  remaining ||
                    deferred.resolveWith(resolveContexts, resolveValues),
                  deferred.promise()
                );
              },
            }),
              (core.helpers.deferred = _jq.Deferred),
              (core.helpers.when = _jq.when);
          })(core || {}),
          (function () {
            (core.helpers = core.helpers || {}),
              (core.helpers.cookies = {
                set: function (key, value, attributes) {
                  return (
                    attributes.path || (attributes.path = "/"),
                    (key = encodeURIComponent(String(key))),
                    (key = key.replace(
                      /%(23|24|26|2B|5E|60|7C)/g,
                      decodeURIComponent
                    )),
                    (key = key.replace(/[\(\)]/g, escape)),
                    (document.cookie = [
                      key,
                      "=",
                      value,
                      attributes.expires &&
                        "; expires=" + attributes.expires.toUTCString(),
                      attributes.path && "; path=" + attributes.path,
                      attributes.domain && "; domain=" + attributes.domain,
                      attributes.secure ? "; secure" : "",
                    ].join(""))
                  );
                },
                get: function (key) {
                  for (
                    var cookies = document.cookie
                        ? document.cookie.split("; ")
                        : [],
                      rdecode = /(%[0-9A-Z]{2})+/g,
                      i = 0;
                    i < cookies.length;
                    i++
                  ) {
                    var parts = cookies[i].split("="),
                      name = parts[0].replace(rdecode, decodeURIComponent),
                      cookie = parts.slice(1).join("=");
                    '"' === cookie.charAt(0) && (cookie = cookie.slice(1, -1));
                    try {
                      if (
                        ((cookie = cookie.replace(rdecode, decodeURIComponent)),
                        key === name)
                      )
                        return cookie;
                    } catch (e) {}
                  }
                },
              });
          })(),
          (function (core) {
            function find(selector) {
              if ("querySelectorAll" in document)
                return document.querySelectorAll(selector);
              for (
                var tagNames = selector.split(","), elts = [];
                tagNames.length;

              )
                elts = elts.concat(
                  elts.slice.call(
                    document.getElementsByTagName(
                      (tagNames.shift() || "").replace(trimRegex, "")
                    ),
                    0
                  )
                );
              return elts;
            }
            function unbindDomLoaded(e) {
              var d = window.document;
              ("complete" === d.readyState || isBodyReady) &&
                (bodyReadyTimer && window.clearTimeout(bodyReadyTimer),
                "removeEventListener" in d
                  ? (d.removeEventListener(
                      "onreadystatechange",
                      unbindDomLoaded,
                      !1
                    ),
                    d.removeEventListener(
                      "DOMContentLoaded",
                      unbindDomLoaded,
                      !1
                    ),
                    window.removeEventListener("load", unbindDomLoaded, !1))
                  : "detachEvent" in d &&
                    (d.detachEvent("onreadystatechange", unbindDomLoaded),
                    d.detachEvent("DOMContentLoaded", unbindDomLoaded),
                    window.detachEvent("onload", unbindDomLoaded)),
                !isDomReady &&
                  callback &&
                  ((e = e || window.event),
                  callFn.call(this, callback, e),
                  (callback = null)));
            }
            function callFn(fn, e) {
              document.body
                ? ("function" == typeof fn && fn(e), (isDomReady = !0))
                : window.setTimeout(
                    core.utils.delegate(this, callFn, fn, e),
                    50
                  );
            }
            function testBodyReady() {
              if (
                (bodyReadyTimer && window.clearTimeout(bodyReadyTimer),
                "loading" !== document.readyState &&
                  !isDomReady &&
                  !isBodyReady &&
                  document &&
                  document.body)
              ) {
                var elt;
                try {
                  (elt = document.createElement("span")),
                    document.body.appendChild(elt),
                    document.body.removeChild(elt),
                    (isBodyReady = !0),
                    unbindDomLoaded(null);
                } catch (e) {}
                elt = null;
              }
              isBodyReady ||
                (bodyReadyTimer = window.setTimeout(testBodyReady, 100));
            }
            function bindDomReady(fn) {
              if (
                isDomReady ||
                isBodyReady ||
                "complete" === document.readyState
              )
                callFn.call(this, fn);
              else {
                if (
                  ((callback = callback
                    ? (function (f1, f2) {
                        return function (e) {
                          f1(e), f2(e);
                        };
                      })(callback, fn)
                    : fn),
                  !readyBound)
                ) {
                  var d = window.document;
                  "addEventListener" in d
                    ? (d.addEventListener(
                        "onreadystatechange",
                        unbindDomLoaded,
                        !1
                      ),
                      d.addEventListener(
                        "DOMContentLoaded",
                        unbindDomLoaded,
                        !1
                      ),
                      window.addEventListener("load", unbindDomLoaded, !1))
                    : "attachEvent" in d &&
                      (d.attachEvent("onreadystatechange", unbindDomLoaded),
                      d.attachEvent("DOMContentLoaded", unbindDomLoaded),
                      window.attachEvent("onload", unbindDomLoaded)),
                    (readyBound = !0);
                }
                testBodyReady();
              }
            }
            function bindLives() {
              for (var newCache = []; livecache.length; ) {
                var live_i = livecache.shift(),
                  elt = find(live_i.selector);
                elt.length &&
                  (core.utils.log(
                    "Bining lives for " +
                      live_i.eventName +
                      " on " +
                      elt.length +
                      " " +
                      live_i.selector
                  ),
                  this.bind(elt, live_i.eventName, live_i.fn)),
                  newCache.push(live_i);
              }
              (livecache = newCache),
                !livechangebound &&
                  document.body &&
                  ((livechangebound = !0),
                  this.bindonchange(
                    document.body,
                    core.utils.delegate(this, bindLives),
                    "bindLives"
                  ));
            }
            function live(selector, eventName, fn) {
              "function" == typeof fn &&
                (livecache.push({
                  selector: selector,
                  eventName: eventName,
                  fn: fn,
                }),
                liveinited ||
                  ((liveinited = !0),
                  bindDomReady.call(
                    this,
                    core.utils.delegate(this, bindLives)
                  )));
            }
            function callChangeCallback(fn, evtId, evt) {
              evt &&
                evt.target &&
                (core.utils.log("ChangeCallback " + evtId),
                evttimer[evtId] && window.clearTimeout(evttimer[evtId]),
                core.utils.log("callChangeCallback called " + evt.type),
                (evttimer[evtId] = window.setTimeout(function () {
                  core.utils.log(
                    "callChangeCallback calling handler for " +
                      evt.type +
                      " " +
                      evtId || ""
                  ),
                    (evttimer[evtId] = null),
                    fn(evt);
                }, 100)));
            }
            function callMutationCallback(fn, observerId, mutations, observer) {
              core.utils.log("callMutationCallback " + observerId),
                mutations &&
                  (core.utils.log(
                    "callMutationCallback[" +
                      observerId +
                      "] found mutations: " +
                      mutations.length
                  ),
                  evttimer[observerId] &&
                    window.clearTimeout(evttimer[observerId]),
                  (evttimer[observerId] = window.setTimeout(function () {
                    window.clearTimeout(evttimer[observerId]),
                      (evttimer[observerId] = null),
                      core.utils.log(
                        "callMutationCallback[" +
                          observerId +
                          "] calling callback: " +
                          fn.toString()
                      ),
                      fn(mutations);
                  }, 100)));
            }
            function fallbackDomChangeHandler() {
              if (
                (core.utils.log("fallbackDomChangeHandler called "),
                domchangecache)
              ) {
                var newcache = [];
                core.utils.log(
                  "fallbackDomChangeHandler queue length is " +
                    domchangecache.length
                );
                for (var i = 0, l = domchangecache.length; i < l; i++)
                  domchangecache[i].elt.parentElement
                    ? (domchangecache[i].elt.outerHTML !==
                        domchangecache[i].cache &&
                        (core.utils.log(
                          "fallbackDomChangeHandler calling callback"
                        ),
                        (domchangecache[i].cache =
                          domchangecache[i].elt.outerHTML),
                        domchangecache[i].fn()),
                      newcache.push(domchangecache[i]))
                    : (core.utils.log(
                        "fallbackDomChangeHandler calling callback (no parent elt)"
                      ),
                      domchangecache[i].fn(),
                      (domchangecache[i].elt = null),
                      (domchangecache[i] = null));
                domchangecache = newcache.length > 0 ? newcache : null;
              }
            }
            var isDomReady = !1,
              domchangeIndx = 0,
              isBodyReady = !1,
              callback = null,
              readyBound = !1,
              domchangecache = null,
              bodyReadyTimer = null,
              trimRegex = /^\s+|\s+$/g,
              isIE11 = !window.ActiveXObject && "ActiveXObject" in window,
              MutationObserver =
                (!isIE11 && window.MutationObserver) ||
                window.WebKitMutationObserver ||
                window.MozMutationObserver,
              livecache = [],
              liveinited = !1,
              livechangebound = !1,
              evttimer = {};
            core.helpers.dom = {
              bindonchange: function (elt, fn) {
                var evtId = "domchange" + domchangeIndx++;
                if (MutationObserver) {
                  core.utils.log(
                    "bindonchange mutations " + evtId + " for " + elt
                  );
                  var observer = new MutationObserver(
                    core.utils.delegate(this, callMutationCallback, fn, evtId)
                  );
                  observer.observe(elt, { childList: !0, subtree: !0 });
                } else if ("addEventListener" in elt) {
                  core.utils.log(
                    "bindonchange DOMNodeInserted/DOMNodeInsertedIntoDocument " +
                      evtId +
                      " for " +
                      elt
                  );
                  var cb = core.utils.delegate(
                    this,
                    callChangeCallback,
                    fn,
                    evtId
                  );
                  elt.addEventListener("DOMNodeInserted", cb, !1),
                    elt.addEventListener("DOMNodeRemoved", cb, !1),
                    elt.addEventListener("DOMNodeInsertedIntoDocument", cb, !1),
                    elt.addEventListener("DOMNodeRemovedFromDocument", cb, !1);
                } else
                  "undefined" != typeof document.onpropertychange &&
                    (core.utils.log(
                      "bindonchange fallback " + evtId + " for " + elt
                    ),
                    domchangecache ||
                      ((domchangecache = []),
                      window.setInterval(
                        core.utils.delegate(
                          this,
                          fallbackDomChangeHandler,
                          evtId
                        ),
                        300
                      )),
                    domchangecache.push({
                      elt: elt,
                      fn: fn,
                      cache: elt.outerHTML,
                    }));
              },
              bind: function (elt, evtName, fn, forceLive) {
                if ("string" == typeof elt) {
                  var elts = find(elt);
                  elts.length > 0 && !forceLive
                    ? this.bind(elts, evtName, fn)
                    : live.call(this, elt, evtName, fn);
                } else if (
                  elt.nodeType ||
                  elt === window ||
                  elt === window.document
                )
                  if (
                    "ready" === evtName.toLocaleLowerCase() &&
                    elt === window.document
                  )
                    bindDomReady.call(this, fn);
                  else {
                    if ("function" == typeof elt[evtName]) {
                      var myfn = fn,
                        their = elt[evtName];
                      (elt[evtName] = null),
                        (fn = function (evt) {
                          return myfn(evt), their(evt);
                        });
                    }
                    try {
                      this.unbind(elt, evtName, fn);
                    } catch (e) {}
                    "addEventListener" in elt
                      ? ("onmousewheel" === evtName.toLocaleLowerCase() &&
                          "DOMMouseScroll" in elt &&
                          (evtName = "onDOMMouseScroll"),
                        elt.addEventListener(
                          evtName.slice(2).toLocaleLowerCase(),
                          fn,
                          !1
                        ))
                      : "attachEvent" in elt && elt.attachEvent(evtName, fn);
                  }
                else if (elt instanceof Array || elt.length)
                  for (var i = 0, l = elt.length; i < l; i++)
                    this.bind(elt[i], evtName, fn);
              },
              unbind: function (elt, evtName, fn) {
                "removeEventListener" in elt
                  ? ("onmousewheel" === evtName.toLocaleLowerCase() &&
                      "DOMMouseScroll" in elt &&
                      (evtName = "onDOMMouseScroll"),
                    elt.removeEventListener(
                      evtName.slice(2).toLocaleLowerCase(),
                      fn,
                      !1
                    ))
                  : "detachEvent" in elt && elt.detachEvent(evtName, fn);
              },
              append: function (newElt, whereTo) {
                newElt && whereTo && whereTo.appendChild(newElt);
              },
              remove: function (elt) {
                elt && elt.parentNode && elt.parentNode.removeChild(elt);
              },
            };
          })(core || {});
      })(core || {}),
      (function (core, XMLHttpRequest) {
        function jsonp(url, onsuccess, onerror, callback_name) {
          var callback_name = callback_name || "jsonp_callback";
          (window.kfp = window.kfp || {}),
            (window.kfp[callback_name] = onsuccess);
          var head = document.getElementsByTagName("head")[0] || document.body,
            script = document.createElement("script");
          (script.type = "text/javascript"),
            (script.src = url),
            initEvents.call(
              this,
              script,
              function () {
                head.removeChild(script);
              },
              function () {
                head.removeChild(script),
                  onerror &&
                    "function" == typeof onerror &&
                    onerror.call(arguments);
              },
              function () {
                head.removeChild(script);
              }
            ),
            head.appendChild(script);
        }
        function getXmlHttp() {
          var xhrCache = window.XMLHttpRequest,
            xhr = XMLHttpRequest;
          try {
            if (!(xhr() instanceof xhr)) {
              try {
                delete window.XMLHttpRequest;
              } catch (e) {
                window.XMLHttpRequest = xhr = null;
              }
              (XMLHttpRequest = xhr = window.XMLHttpRequest
                ? window.XMLHttpRequest
                : (
                    core.utils.restorer &&
                    core.utils.restorer.getNative("XMLHttpRequest")
                  ).XMLHttpRequest || xhrCache),
                (window.XMLHttpRequest = xhrCache);
            }
          } catch (e) {}
          return xhr;
        }
        function getTransport(isCrossDomain, noFallback) {
          if (!transport) {
            if (
              (isCrossDomain && window.XDomainRequest
                ? (transport = fallbackAjax)
                : window.XMLHttpRequest && (transport = getXmlHttp()),
              !transport &&
                "undefined" != typeof window.ActiveXObject &&
                !isCrossDomain)
            )
              try {
                new ActiveXObject("Msxml2.XMLHTTP") &&
                  (transport = function () {
                    return new ActiveXObject("Msxml2.XMLHTTP");
                  });
              } catch (e) {
                try {
                  new ActiveXObject("Microsoft.XMLHTTP") &&
                    (transport = function () {
                      return new ActiveXObject("Microsoft.XMLHTTP");
                    });
                } catch (e1) {
                  core.utils.log(
                    "http.getTransport: could not create XHR: " + e1.message,
                    core.utils.log.ERROR
                  );
                }
              }
            transport ||
              ((transport = fallbackAjax),
              core.utils.log("Falling back transport "));
          }
          return (
            noFallback && transport == fallbackAjax && (transport = null),
            transport ? new transport() : null
          );
        }
        function init(opts) {
          if (opts)
            for (var paramName in opts)
              opts.hasOwnProperty(paramName) &&
                (options[paramName] = opts[paramName]);
          return options;
        }
        function initEvents(xhr, success, err, complete, dataIn) {
          "onreadystatechange" in xhr
            ? (xhr.onreadystatechange = core.utils.delegate(
                this,
                stateChangeHandler,
                xhr,
                success,
                err,
                complete,
                dataIn
              ))
            : ("onerror" in xhr &&
                (xhr.onerror = core.utils.delegate(
                  this,
                  errHandler,
                  xhr,
                  err,
                  complete,
                  !1,
                  dataIn
                )),
              "onprogress" in xhr &&
                (xhr.onprogress = core.utils.delegate(
                  this,
                  progresHandler,
                  xhr,
                  success,
                  err,
                  complete,
                  dataIn
                )),
              "onload" in xhr &&
                (xhr.onload = core.utils.delegate(
                  this,
                  successHandler,
                  xhr,
                  success,
                  err,
                  complete,
                  dataIn
                ))),
            "ontimeout" in xhr &&
              (xhr.ontimeout = core.utils.delegate(
                this,
                errHandler,
                xhr,
                err,
                complete,
                !0,
                dataIn
              ));
        }
        function loadData(dataIn, success, err, complete, opts) {
          if (isLoading)
            return void queue.push(Array.prototype.slice.call(arguments));
          opts = opts || {};
          var url = opts.url || options.url || "",
            isCrossDomain = testCrossDomain.call(this, url),
            xhr = getTransport.call(
              this,
              isCrossDomain,
              !(!opts || !opts.noFallback)
            );
          if (xhr) {
            isLoading = !0;
            var data = dataIn,
              async = ("async" in opts ? opts : options).async,
              method = opts.method || options.method,
              useCreds = !!(opts.useCreds === !0 || opts.useCreds === !1
                ? opts.useCreds
                : options.useCreds),
              timeout = opts.timeout || options.timeout,
              requestEnc = "charset" in opts ? opts.charset : options.charset,
              requestType =
                (opts.requestType || options.requestType) +
                (requestEnc ? "; charset=" + requestEnc : "");
            "overrideMimeType" in xhr && xhr.overrideMimeType(requestType),
              initEvents.call(this, xhr, success, err, complete, {
                data: dataIn,
              }),
              method.toLowerCase() == sendMethods.GET &&
                ((url = url + (url.indexOf("?") === -1 ? "?" : "&") + data),
                (data = null));
            try {
              xhr.open(method, url, async);
            } catch (e) {
              return void core.utils.log(
                "HTTP ERROR: can not open connection " + e.message
              );
            }
            if (
              ("timeout" in xhr && async && (xhr.timeout = timeout),
              "setRequestHeader" in xhr &&
                xhr.setRequestHeader("Content-Type", requestType),
              useCreds)
            )
              try {
                xhr.withCredentials = !0;
              } catch (e) {
                core.utils.log("No withCredentials");
              }
            try {
              isCrossDomain && (xhr.crossDomain = !0);
            } catch (e) {
              core.utils.log("crossDomain can not be set");
            }
            core.utils.log("Sending to " + url.slice(0, 20)),
              xhr.send(data || "");
          }
        }
        function prepareParams(data, doubeencode) {
          return data;
        }
        function testCrossDomain(url) {
          var anch = document.createElement("a"),
            anchExt = document.createElement("a");
          (anchExt.href = url),
            (anchExt.href = anchExt.href),
            (anch.href = ("" + window.location.href).toLowerCase());
          var result =
            anchExt.protocol != anch.protocol || anchExt.host != anch.host;
          return result;
        }
        function stateChangeHandler(xhr, success, err, complete, evt) {
          if (4 == xhr.readyState)
            try {
              200 == xhr.status
                ? successHandler.call(this, xhr, success, err, complete, evt)
                : errHandler.call(this, xhr, err, complete, !1, evt);
            } catch (eeer) {}
          else progresHandler.call(this, xhr, success, err, complete, evt);
        }
        function successHandler(xhr, success, err, complete, evt) {
          var result = xhr.responseText || "",
            proceed = !1;
          if (options.responseType == dataTypes.JSON)
            try {
              (result = eval("(" + result + ")")),
                (proceed = !!result.error),
                proceed ||
                  ((xhr.onerror = null),
                  errHandler.call(
                    this,
                    {
                      responseText: result,
                      status: 500,
                      statusText: result.error,
                    },
                    err,
                    complete,
                    !1,
                    evt
                  ));
            } catch (error) {
              proceed = !0;
            }
          else proceed = !0;
          proceed &&
            ("function" == typeof success && success(result),
            loadComplete.call(this, complete));
        }
        function errHandler(xhr, err, complete, isTimeout, evt) {
          this.trace && this.trace(xhr, err, complete, isTimeout, evt),
            "function" == typeof err &&
              err(xhr.responseText, xhr.status, xhr.statusText),
            loadComplete.call(this, complete);
        }
        function progresHandler(xhr, success, err, complete, evt) {}
        function loadComplete(complete) {
          isLoading = !1;
          var next = queue.shift(),
            s = this;
          next &&
            window.setTimeout(function () {
              loadData.apply(s, next), (s = null), (next = null);
            }, 0);
        }
        var fallbackAjax = function () {
          this._init();
        };
        fallbackAjax.prototype = {
          form: null,
          ifr: null,
          _inited: !1,
          _loadDone: !1,
          _quirksInterval: null,
          status: 0,
          responseText: "",
          statusText: "",
          method: "POST",
          url: "",
          open: function (inputMethod, inputUrl) {
            inputMethod
              ? (this.method = inputMethod.toUpperCase())
              : (this.method = "POST"),
              (this.url = inputUrl || window.location.href);
          },
          onload: null,
          onerror: null,
          _init: function () {
            var elt,
              ifrId = "kl_ajax_ifr" + new Date().getTime();
            if (fallbackAjax.container || document.body) {
              var doc = fallbackAjax.container || document;
              try {
                elt = doc.createElement('<iframe name="' + ifrId + '">');
              } catch (e) {
                (elt = doc.createElement("iframe")), (elt.name = ifrId);
              }
              doc.body.appendChild(elt),
                (elt.id = ifrId),
                (elt.frameBorder = 0),
                (elt.border = 0),
                (elt.style.position = "absolute"),
                (elt.style.left = "-10px"),
                (elt.style.top = "-10px"),
                (elt.style.width = "10px"),
                (elt.style.height = "10px"),
                (this.ifr = elt),
                (this.form = doc.createElement("form")),
                (this.form.enctype = "application/x-www-form-urlencoded"),
                (this.form.target = ifrId);
              var input = doc.createElement("input");
              (input.type = "hidden"),
                (input.name = "data"),
                (input.id = "datafor" + ifrId),
                core.helpers.dom.append(input, this.form),
                core.helpers.dom.append(this.form, doc.body),
                (this._inited = !0);
            } else
              window.setTimeout(core.utils.delegate(this, this._init), 100);
          },
          _handleLoded: function () {
            this._loadDone ||
              ((this._loadDone = !0),
              (this.status = 200),
              (this.responseText = ""),
              (this.statusText = "Ok"),
              "function" == typeof this.onload && this.onload(),
              this.destroy());
          },
          _handleError: function () {
            this._loadDone ||
              ((this._loadDone = !0),
              (this.status = 500),
              (this.responseText = ""),
              (this.statusText = "Error"),
              "function" == typeof this.onload && this.onerror(),
              this.destroy());
          },
          _quirkstest: function (done, err) {
            this._loadDone ||
              (this.ifr.document &&
                "complete" == this.ifr.document.readyState &&
                this.ifr.onload &&
                (window.clearInterval(this._quirksInterval), done()));
          },
          send: function (data) {
            if (this._inited) {
              var inputs = this.form.getElementsByTagName("input");
              if (inputs.length > 0) {
                (this.loadHandler1 = core.utils.delegate(
                  this,
                  this._handleLoded
                )),
                  (this.errHandler1 = core.utils.delegate(
                    this,
                    this._handleError
                  ));
                var quirkstest = core.utils.delegate(
                  this,
                  this._quirkstest,
                  this.loadHandler1,
                  this.errHandler1
                );
                (this._loadDone = !1),
                  window.setTimeout(
                    (function (f, inps, ifr, o) {
                      return function () {
                        (inps[0].value = decodeURIComponent(data)),
                          core.helpers.dom.bind(ifr, "onload", o.loadHandler1),
                          core.helpers.dom.bind(ifr, "onerror", o.errHandler1),
                          (ifr.onload = o.loadHandler1),
                          (ifr.onerror = o.errHandler1),
                          (o._quirksInterval = window.setInterval(
                            quirkstest,
                            100
                          )),
                          (f.method = o.method),
                          (f.action = o.url),
                          f.submit(),
                          (f = null),
                          (inps = null);
                      };
                    })(this.form, inputs, this.ifr, this),
                    0
                  );
              }
            } else
              window.setTimeout(
                core.utils.delegate(this, this.send, data),
                100
              );
          },
          destroy: function () {
            window.clearInterval(this._quirksInterval),
              window.setTimeout(
                core.utils.delegate(this, function () {
                  if (this.form) {
                    if (this.ifr) {
                      (this.ifr.onload = null),
                        (this.ifr.onerror = null),
                        this.ifr.parentNode.removeChild(this.ifr);
                      try {
                        core.helpers.dom.unbind(
                          this.ifr,
                          "onload",
                          this.loadHandler1
                        );
                      } catch (e) {}
                      try {
                        core.helpers.dom.unbind(
                          this.ifr,
                          "onerror",
                          this.errHandler1
                        );
                      } catch (e) {}
                      this.ifr = null;
                    }
                    this.form.parentNode.removeChild(this.form),
                      (this.form = null);
                  }
                }),
                0
              );
          },
        };
        var transport = null,
          dataTypes = { JSON: "json", Text: "text", HTML: "html" },
          isLoading = !1,
          queue = [],
          sendMethods = { GET: "get", POST: "post" },
          options = {
            url: "",
            ssid: "",
            async: !0,
            timeout: 6e3,
            method: sendMethods.POST,
            requestType: "application/json",
            responseType: dataTypes.JSON,
            charset: "utf-8",
            useCreds: !0,
            doubeencode: !0,
          };
        core.http = {
          setAsync: function (val) {
            options.async = !!val;
          },
          init: init,
          send: loadData,
          get: jsonp,
        };
      })(core || {}, window.XMLHttpRequest),
      (function (core) {
        function checkSameDataSent(data) {
          return (
            (currentDataHash = core.utils.hash(
              core.utils.JSON.encode(getHashWithoutTime(data))
            )),
            currentDataHash === prevDataHash
          );
        }
        function getHashWithoutTime(obj) {
          var copy, i, attr, len;
          if (null === obj || "object" != typeof obj) return obj;
          if (obj instanceof Date)
            return (copy = new Date()), copy.setTime(obj.getTime()), copy;
          if (obj instanceof Array) {
            for (copy = [], len = obj.length, i = 0; i < len; i++)
              copy[i] = getHashWithoutTime(obj[i]);
            return copy;
          }
          if (obj instanceof Object) {
            copy = {};
            for (attr in obj)
              obj.hasOwnProperty(attr) &&
                "time" !== attr &&
                "historyLength" !== attr &&
                (copy[attr] = getHashWithoutTime(obj[attr]));
            return copy;
          }
        }
        function sendByTimer(options) {
          sendTimer && window.clearTimeout(sendTimer),
            (sendTimer = window.setTimeout(
              core.utils.delegate(this, sendData, options),
              sendPeriod
            ));
        }
        function sendData(options) {
          sendTimer && window.clearTimeout(sendTimer), (sendTimer = null);
          var i,
            l,
            handler,
            d_i,
            d,
            dataJson,
            callback,
            errCallback,
            sendSync = !(!options || !options.sendSync),
            dateObj = new Date(),
            data = {
              time: [dateObj.getTime(), dateObj.getTimezoneOffset() || 0],
              url: core.helpers.strHelper.maskNumbers(window.location.href),
              ref: core.helpers.strHelper.maskNumbers(document.referrer || ""),
            },
            extraData = [],
            partsIndx = 0;
          for (l = handlerstypes.length, i = 0; i < l; i++)
            if (
              ((handler = handlers[handlerstypes[i]]),
              handler &&
                handler.hasOwnProperty("getData") &&
                "function" == typeof handler.getData)
            ) {
              d_i = null;
              try {
                d_i = handler.getData();
              } catch (e) {
                core.utils.log(
                  "Error getting data from " + handler + ": " + e.message,
                  core.utils.log.ERROR
                );
              }
              null !== d_i &&
                (handler.extraField &&
                  (extraData.push(d_i[handler.extraField]),
                  (d_i.partIndx = partsIndx++),
                  delete d_i[handler.extraField]),
                (data[handlerstypes[i]] = d_i));
            }
          return (
            (d = core.helpers.deferred()),
            (callback = function (x) {
              (prevDataHash = currentDataHash), d.resolve(x);
            }),
            (errCallback = function (x) {
              d.reject(x);
            }),
            checkSameDataSent(data)
              ? (sendByTimer.call({ sendSync: !1 }), d.resolve(""))
              : ((dataJson = core.utils.JSON.encode(data)),
                sendSync && core.http.setAsync(!1),
                core.http.send(dataJson, callback, errCallback),
                core.http.setAsync(!0),
                sendByTimer.call({ sendSync: !1 }),
                updateSessionCookie(),
                d.promise())
          );
        }
        function initHandlers() {
          var i,
            l,
            handlerId,
            triggerHandler = sendData,
            options = {
              sendTrigger: triggerHandler,
              getSessionId: function () {
                return browserSessionId;
              },
              loginCount: loginCount,
              getServerUrl: function () {
                return serverUrl;
              },
            };
          for (l = handlerstypes.length, i = 0; i < l; i++)
            if (
              ((handlerId = handlerstypes[i]),
              handlers[handlerId] &&
                handlers[handlerId].hasOwnProperty("start") &&
                "function" == typeof handlers[handlerId].start)
            )
              try {
                handlers[handlerId].start(options);
              } catch (e) {
                delete handlers[handlerId];
              }
          sendData.call(this);
        }
        function rejectHandlers(reason) {
          var i, l, handlerId;
          for (l = handlerstypes.length, i = 0; i < l; i++)
            if (
              ((handlerId = handlerstypes[i]),
              handlers[handlerId] &&
                handlers[handlerId].hasOwnProperty("abort") &&
                "function" == typeof handlers[handlerId].abort)
            )
              try {
                handlers[handlerId].abort({ abortReason: reason });
              } catch (ignore) {}
        }
        function httpGet(url, callback_name) {
          var d = core.helpers.deferred();
          return (
            core.http.get(
              url,
              function (data) {
                d.resolve(data);
              },
              function (e) {
                d.reject(e);
              },
              callback_name
            ),
            d.promise()
          );
        }
        function requestSessionId() {
          var localSessionId = generateLocalSessionId(),
            localData = {
              e: browserSessionIdExpires,
              id: localSessionId,
              t: sendPeriod,
            },
            timeouted = !1,
            t = window.setTimeout(function () {
              try {
                (timeouted = !0), d.resolve(localData);
              } catch (ignore) {}
            }, sessionIdRequestTimeout),
            d = core.helpers.deferred();
          return (
            httpGet(browserSessionIdUrl, "jsonp_oxwdsq")
              .done(function (data) {
                clearTimeout(t), timeouted || d.resolve(data);
              })
              .fail(function () {
                clearTimeout(t), timeouted || d.resolve(localData);
              }),
            d
          );
        }
        function createMdsIntegration() {
          (window.kfp = window.kfp || {}),
            (window.kfp.get_oxxfgh = function () {
              return browserSessionId;
            });
        }
        function setBrowserSessionIdCookie(id, lc, e, t) {
          var value = id + "#" + lc + "#" + e + "#" + t,
            expiresDate = new Date();
          expiresDate.setTime(expiresDate.getTime() + e),
            core.helpers.cookies.set(browserSessionIdCookieName, value, {
              expires: expiresDate,
              domain: cookieDomain,
            });
        }
        function updateSessionCookie() {
          setBrowserSessionIdCookie(
            browserSessionId,
            loginCountValue,
            browserSessionIdExpires,
            sendPeriod
          );
        }
        function getBrowserSessionIdFromCookie() {
          try {
            var value = core.helpers.cookies.get(browserSessionIdCookieName);
            if (value) {
              var parts = value.split("#");
              return (
                (browserSessionId = parts[0]),
                (loginCountValue = +parts[1]),
                (browserSessionIdExpires = +parts[2]),
                (sendPeriod = +parts[3]),
                !(
                  isNaN(loginCountValue) ||
                  isNaN(browserSessionIdExpires) ||
                  isNaN(sendPeriod)
                )
              );
            }
          } catch (ignore) {}
          return !1;
        }
        function loginCount(value) {
          return (
            arguments.length > 0 &&
              ((loginCountValue = value), updateSessionCookie()),
            loginCountValue
          );
        }
        function generateLocalSessionId() {
          var id = core.utils.uuid.generate();
          return "L!" + id;
        }
        function initBrowserSessionId() {
          return getBrowserSessionIdFromCookie()
            ? core.helpers.deferred().resolve(browserSessionId)
            : requestSessionId().done(function (data) {
                (browserSessionIdExpires = +data.e),
                  (browserSessionId = data.id),
                  data.t && (sendPeriod = +data.t),
                  updateSessionCookie();
              });
        }
        var currentDataHash,
          prevDataHash,
          trackRes = "/track",
          browserSessionIdRes = "/oxwdsq",
          handlers = {},
          handlerstypes = [],
          browserSessionIdCookieName = "oxxfgh",
          sendTimer = null,
          sendPeriod = 5e3,
          serverUrl = "https://ru.fp.kaspersky-labs.com",
          cookieDomain = "",
          trackUrl = serverUrl + trackRes,
          browserSessionIdUrl = serverUrl + browserSessionIdRes,
          browserSessionId = null,
          loginCountValue = 0,
          browserSessionIdExpires = 6e5,
          sessionIdRequestTimeout = 3e4,
          globals = { utils: !0, helpers: !0 };
        (kl.registerHandler = function (name, requires, fnCreator) {
          if ("function" == typeof fnCreator) {
            var args = [];
            requires = requires || [];
            for (var i = 0, l = requires.length; i < l; i++) {
              var argName = requires[i].toLowerCase();
              globals[argName] && args.push(core[argName] || null);
            }
            handlers[name] || handlerstypes.push(name),
              (handlers[name] = fnCreator.apply(null, args));
          }
        }),
          (kl.init = function () {
            core.http.init({ url: trackUrl, responseType: "text" }),
              core.http.setAsync(!0),
              initBrowserSessionId()
                .done(function () {
                  initHandlers(), createMdsIntegration();
                })
                .fail(function () {
                  var reason = "failed to receive sessionid.";
                  rejectHandlers(reason);
                });
          });
      })(core || {});
  })(kl || {}),
    kl.registerHandler("cha", [], function () {
      return {
        getData: function () {
          return "s-27-33-g81e9d14";
        },
      };
    }),
    kl.registerHandler("geugae", [], function () {
      var _getSessionId = function () {};
      return {
        start: function (o) {
          _getSessionId = o.getSessionId;
        },
        getData: function () {
          return _getSessionId();
        },
      };
    }),
    kl.registerHandler("browser", ["utils", "helpers"], function (
      utils,
      helpers
    ) {
      function startHandler(o) {
        (options = helpers.objectHelper.extend(options, o)), gather();
      }
      function copyProperties(target, source, field_names) {
        for (var i = 0, l = field_names.length; i < l; i++)
          source[field_names[i]] &&
            (target[field_names[i]] = source[field_names[i]]);
        return target;
      }
      function cloneArray(source, converter) {
        var target = [];
        if (source.length)
          for (var i = 0, len = source.length; i < len; i++)
            source[i] && target.push(converter(source[i]));
        return target;
      }
      function copyPlugin(source) {
        var plugin = {};
        return (
          copyProperties(plugin, source, [
            "description",
            "filename",
            "name",
            "version",
          ]),
          (plugin.mime_type = cloneArray(source, function (s) {
            return copyProperties({}, s, ["type", "suffixes", "description"]);
          })),
          plugin
        );
      }
      function getNavigator() {
        var navi = window.navigator || window.clientInformation,
          data = {
            hasMsManipulationViewsEnabled: "msManipulationViewsEnabled" in navi,
            hasMsPointerEnabled: "msPointerEnabled" in navi,
          },
          plugins = navi.plugins;
        try {
          data.langs = navi.languages && [].concat(navi.languages);
        } catch (e) {}
        for (var ni = 0, nl = navProps.length; ni < nl; ni++)
          try {
            data[navProps[ni]] = navi[navProps[ni]];
          } catch (e) {}
        if (plugins)
          try {
            data.plugins = cloneArray(plugins, copyPlugin);
          } catch (eep) {}
        if (data.hasMsManipulationViewsEnabled || data.hasMsPointerEnabled) {
          try {
            data.hasMediaDevices = "undefined" != typeof navi.mediaDevices;
          } catch (ee0) {}
          try {
            data.isPluginsInstanceOfPluginArray =
              window.PluginArray && navi.plugins instanceof window.PluginArray;
          } catch (ee1) {}
          try {
            data.isPluginsInstanceOfMSPluginsCollection =
              window.MSPluginsCollection &&
              navi.plugins instanceof window.MSPluginsCollection;
          } catch (ee2) {}
        }
        return data;
      }
      function getWindow() {
        return { hasActiveXObject: "ActiveXObject" in window };
      }
      function getConditionalCompilation() {
        return ccfn() || { enabled: !1 };
      }
      function getHtmlCC() {
        var elt,
          spans,
          html = "",
          txt = [],
          conds = [
            "lte IE 6",
            "IE 6",
            "IE 7",
            "IE 8",
            "IE 9",
            "IE 10",
            "IE 11",
            "gt IE 11",
            "IEMobile",
          ];
        try {
          (elt = document.createElement("div")), (elt.kljs_elt = !0);
          for (var ci = conds.length; ci--; )
            html +=
              "/*[if " +
              conds[ci] +
              "]><span>" +
              conds[ci] +
              "</span><![endif]*/";
          (elt.innerHTML = html), (spans = elt.getElementsByTagName("span"));
          for (var si = spans.length; si--; )
            txt.push((spans[si] || spans.item(si)).innerHTML);
          if (
            ((spans = null), (elt.innerHTML = ""), (elt = null), txt.length > 0)
          )
            return { enabled: !0, tests: txt };
        } catch (e) {
          utils.log("ERROR " + e.message);
        }
        return { enabled: !1 };
      }
      function gather() {
        var data = {
          time: new Date().getTime(),
          url: helpers.strHelper.maskNumbers(window.location.href),
          name: utils.utf8.encode(helpers.strHelper.maskNumbers(window.name)),
          domain: utils.utf8.encode(document.domain),
          charset: document.characterSet || document.charset || "",
          defenc: document.defaultCharset,
          historyLength: window.history.length,
          java: navigator.javaEnabled(),
          navigator: getNavigator(),
          window: getWindow(),
          jsCC: getConditionalCompilation(),
          htmlCC: getHtmlCC(),
          colors: [
            document.bgColor,
            document.fgColor,
            document.linkColor,
            document.alinkColor,
            document.vlinkColor,
          ],
        };
        try {
          var svg;
          document.createElementNS &&
            (svg = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "svg"
            )).createSVGRect &&
            ((data.svgppmx = svg.pixelUnitToMillimeterX),
            (data.svgppmy = svg.pixelUnitToMillimeterY),
            (data.svgscrppmx = svg.screenPixelToMillimeterX),
            (data.svgscrppmy = svg.screenPixelToMillimeterY)),
            (svg = null);
        } catch (ee) {}
        return (datachanged = !0), data;
      }
      var datachanged = !1,
        navProps = [
          "appCodeName",
          "appMinorVersion",
          "appName",
          "appVersion",
          "browserLanguage",
          "buildID",
          "cookieEnabled",
          "cpuClass",
          "doNotTrack",
          "hardwareConcurrency",
          "language",
          "maxTouchPoints",
          "msManipulationViewsEnabled",
          "msMaxTouchPoints",
          "msPointerEnabled",
          "onLine",
          "oscpu",
          "platform",
          "pluginFilenames",
          "pointerEnabled",
          "product",
          "productSub",
          "systemLanguage",
          "userAgent",
          "userLanguage",
          "vendor",
          "vendorSub",
          "webdriver",
        ],
        ccfn = new Function(
          "/*@cc_on\t\t\treturn {                 enabled: true,                 jscript_version: @_jscript_version,                 win32: @_win32 };\t\t@*/"
        ),
        options = { sendTrigger: function () {} };
      return {
        start: startHandler,
        getData: function () {
          return gather();
        },
      };
    }),
    kl.registerHandler("mds", ["utils"], function (utils) {
      function gatherData() {
        return (
          utils.storage.init("klaf_ie_user_storage"),
          { did: utils.storage.getData("uid") }
        );
      }
      return {
        getData: function () {
          return gatherData.call(this);
        },
      };
    }),
    kl.registerHandler("login", ["utils", "helpers"], function (
      utils,
      helpers
    ) {
      function waitForInitialize(onready) {
        var d = helpers.deferred(),
          t = window.setTimeout(function () {
            try {
              d.reject("request timeout");
            } catch (e) {}
          }, 1e3);
        return (
          _initialized
            .done(function () {
              onready()
                .done(function (args) {
                  clearTimeout(t), d.resolve(args);
                })
                .fail(function (args) {
                  clearTimeout(t), d.reject(args);
                });
            })
            .fail(function (v) {
              d.reject(v);
            }),
          d.promise()
        );
      }
      function startHandler(o) {
        (_sendTrigger = o.sendTrigger),
          (_loginCount = o.loginCount),
          (_getSessionId = o.getSessionId),
          _initializedDeferred.resolve();
      }
      function abortHandler(o) {
        _initializedDeferred.reject(o.abortReason);
      }
      var _userName = null,
        _userId = null,
        _obsSessionId = null,
        _loginReslt = null,
        _clientId = null,
        _loginCount = null,
        _getSessionId = null,
        _sendTrigger = null,
        _readyToSend = !1,
        _initializedDeferred = helpers.deferred(),
        _initialized = _initializedDeferred.promise();
      return (
        (window.kfp = window.kfp || {}),
        (window.kfp.login_start = function (clientId, phase) {
          return (
            (_clientId = clientId),
            waitForInitialize(function () {
              var loginCount = _loginCount(),
                sessionId = _getSessionId() + "_" + loginCount;
              return (
                (_obsSessionId = sessionId),
                "login" == phase
                  ? (loginCount++,
                    _loginCount(loginCount),
                    (_readyToSend = !0),
                    _sendTrigger("login", { sendSync: !1 }).pipe(function () {
                      return sessionId;
                    }))
                  : "prelogin" == phase
                  ? helpers.deferred().resolve(sessionId)
                  : helpers.deferred().reject("unknown login phase")
              );
            })
          );
        }),
        (window.kfp.login = function (
          clientId,
          obsSesionId,
          userId,
          userName,
          loginResult
        ) {
          return (
            (_userId = userId),
            (_userName = userName),
            (_clientId = clientId),
            (_loginReslt = loginResult),
            (_obsSessionId = obsSesionId),
            waitForInitialize(function () {
              return (
                (_readyToSend = !0), _sendTrigger("login", { sendSync: !1 })
              );
            })
          );
        }),
        {
          start: startHandler,
          abort: abortHandler,
          getData: function () {
            var readyToSend = _readyToSend;
            return (
              (_readyToSend = !1),
              readyToSend
                ? {
                    userId: _userId,
                    userName: _userName,
                    obsSessionId: _obsSessionId,
                    clientId: _clientId,
                    loginResult: _loginReslt,
                  }
                : null
            );
          },
        }
      );
    }),
    kl.registerHandler("nav", ["helpers", "utils"], function (helpers, utils) {
      function clickHandler(evt) {
        if ((evt = evt || window.event)) {
          var elt = evt.srcElement || evt.target || evt.targetElement;
          elt &&
            "a" === (elt.tagName || "").toLowerCase() &&
            elt.href &&
            ((nextUrl = elt.href), collect(), _sendTrigger());
        }
      }
      function enterHandler(evt) {
        if ((evt = evt || window.event)) {
          var elt = evt.srcElement || evt.target || evt.targetElement,
            _key = evt.which || evt.keyCode;
          if (elt && (13 === _key || 32 === _key || 0 === _key)) {
            var _tagName = (elt.tagName || "").toLowerCase();
            switch (_tagName) {
              case "a":
                clickHandler(evt);
            }
          }
        }
      }
      function formHandler(evt) {
        if ((evt = evt || window.event)) {
          var elt = evt.srcElement || evt.target || evt.targetElement;
          elt &&
            "form" === (elt.tagName || "").toLowerCase() &&
            elt.action &&
            ((nextUrl = elt.action), collect(), _sendTrigger());
        }
      }
      function collect() {
        (curUrl = window.location.href), (historyLen = window.history.length);
      }
      function navEvtHandler() {
        collect(), _sendTrigger();
      }
      function testUrl() {
        testTimer && window.clearTimeout(testTimer),
          window.location.href !== curUrl && (collect(), _sendTrigger()),
          (testTimer = window.setTimeout(
            utils.delegate(this, testUrl),
            urlChangeTimeout
          ));
      }
      function startHandler(_options) {
        (_sendTrigger = _options.sendTrigger),
          helpers.dom.bind("a", "onmousedown", clickHandler, !0),
          helpers.dom.bind("a", "onkeydown", enterHandler, !0),
          helpers.dom.bind("form", "onsubmit", formHandler, !0),
          collect(),
          "onhashchange" in window &&
            helpers.dom.bind(window, "hashchange", navEvtHandler),
          "onpopstate" in window || "PopStateEvent" in window
            ? helpers.dom.bind(window, "popstate", navEvtHandler)
            : testUrl.call(this);
      }
      var _sendTrigger = function () {},
        curUrl = "",
        nextUrl = "",
        urlChangeTimeout = 200,
        testTimer = null,
        historyLen = 0;
      return {
        start: startHandler,
        getData: function () {
          var _nextUrl = nextUrl;
          return (
            (nextUrl = ""), { nextUrl: helpers.strHelper.maskNumbers(_nextUrl) }
          );
        },
      };
    }),
    (function () {
      kl.init();
    })();
})(window, window.document);

/*
page: http://www.tinkoff.ru/
url: https://static.tinkoff.ru/dist/kfp/das.js
*/
