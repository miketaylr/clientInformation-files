var Prototype = {
  Version: "1.6.0.3",
  Browser: {
    IE: !(!window.attachEvent || -1 !== navigator.userAgent.indexOf("Opera")),
    Opera: -1 < navigator.userAgent.indexOf("Opera"),
    WebKit: -1 < navigator.userAgent.indexOf("AppleWebKit/"),
    Gecko:
      -1 < navigator.userAgent.indexOf("Gecko") &&
      -1 === navigator.userAgent.indexOf("KHTML"),
    MobileSafari: !!navigator.userAgent.match(/Apple.*Mobile.*Safari/),
  },
  BrowserFeatures: {
    XPath: !!document.evaluate,
    SelectorsAPI: !!document.querySelector,
    ElementExtensions: !!window.HTMLElement,
    SpecificElementExtensions:
      document.createElement("div").__proto__ &&
      document.createElement("div").__proto__ !==
        document.createElement("form").__proto__,
  },
  ScriptFragment: "<script[^>]*>([\\S\\s]*?)\x3c/script>",
  JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,
  emptyFunction: function () {},
  K: function (a) {
    return a;
  },
};
Prototype.Browser.MobileSafari &&
  (Prototype.BrowserFeatures.SpecificElementExtensions = !1);
var Class = {
    create: function () {
      function a() {
        this.initialize.apply(this, arguments);
      }
      var b = null,
        c = $A(arguments);
      Object.isFunction(c[0]) && (b = c.shift());
      Object.extend(a, Class.Methods);
      a.superclass = b;
      a.subclasses = [];
      if (b) {
        var d = function () {};
        d.prototype = b.prototype;
        a.prototype = new d();
        b.subclasses.push(a);
      }
      for (b = 0; b < c.length; b++) a.addMethods(c[b]);
      a.prototype.initialize ||
        (a.prototype.initialize = Prototype.emptyFunction);
      return (a.prototype.constructor = a);
    },
    Methods: {
      addMethods: function (a) {
        var b = this.superclass && this.superclass.prototype,
          c = Object.keys(a);
        Object.keys({ toString: !0 }).length || c.push("toString", "valueOf");
        for (var d = 0, e = c.length; d < e; d++) {
          var f = c[d],
            g = a[f];
          if (
            b &&
            Object.isFunction(g) &&
            "$super" == g.argumentNames().first()
          ) {
            var h = g,
              g = (function (a) {
                return function () {
                  return b[a].apply(this, arguments);
                };
              })(f).wrap(h);
            g.valueOf = h.valueOf.bind(h);
            g.toString = h.toString.bind(h);
          }
          this.prototype[f] = g;
        }
        return this;
      },
    },
  },
  Abstract = {};
Object.extend = function (a, b) {
  for (var c in b) a[c] = b[c];
  return a;
};
Object.extend(Object, {
  inspect: function (a) {
    try {
      return Object.isUndefined(a)
        ? "undefined"
        : null === a
        ? "null"
        : a.inspect
        ? a.inspect()
        : String(a);
    } catch (b) {
      if (b instanceof RangeError) return "...";
      throw b;
    }
  },
  toJSON: function (a) {
    switch (typeof a) {
      case "undefined":
      case "function":
      case "unknown":
        return;
      case "boolean":
        return a.toString();
    }
    if (null === a) return "null";
    if (a.toJSON) return a.toJSON();
    if (!Object.isElement(a)) {
      var b = [],
        c;
      for (c in a) {
        var d = Object.toJSON(a[c]);
        Object.isUndefined(d) || b.push(c.toJSON() + ": " + d);
      }
      return "{" + b.join(", ") + "}";
    }
  },
  toQueryString: function (a) {
    return $H(a).toQueryString();
  },
  toHTML: function (a) {
    return a && a.toHTML ? a.toHTML() : String.interpret(a);
  },
  keys: function (a) {
    var b = [],
      c;
    for (c in a) b.push(c);
    return b;
  },
  values: function (a) {
    var b = [],
      c;
    for (c in a) b.push(a[c]);
    return b;
  },
  clone: function (a) {
    return Object.extend({}, a);
  },
  isElement: function (a) {
    return !(!a || 1 != a.nodeType);
  },
  isArray: function (a) {
    return null != a && "object" == typeof a && "splice" in a && "join" in a;
  },
  isHash: function (a) {
    return a instanceof Hash;
  },
  isFunction: function (a) {
    return "function" == typeof a;
  },
  isString: function (a) {
    return "string" == typeof a;
  },
  isNumber: function (a) {
    return "number" == typeof a;
  },
  isUndefined: function (a) {
    return "undefined" == typeof a;
  },
});
Object.extend(Function.prototype, {
  argumentNames: function () {
    var a = this.toString()
      .match(/^[\s\(]*function[^(]*\(([^\)]*)\)/)[1]
      .replace(/\s+/g, "")
      .split(",");
    return 1 != a.length || a[0] ? a : [];
  },
  bind: function () {
    if (2 > arguments.length && Object.isUndefined(arguments[0])) return this;
    var a = this,
      b = $A(arguments),
      c = b.shift();
    return function () {
      return a.apply(c, b.concat($A(arguments)));
    };
  },
  bindAsEventListener: function () {
    var a = this,
      b = $A(arguments),
      c = b.shift();
    return function (d) {
      return a.apply(c, [d || window.event].concat(b));
    };
  },
  curry: function () {
    if (!arguments.length) return this;
    var a = this,
      b = $A(arguments);
    return function () {
      return a.apply(this, b.concat($A(arguments)));
    };
  },
  delay: function () {
    var a = this,
      b = $A(arguments),
      c = 1e3 * b.shift();
    return window.setTimeout(function () {
      return a.apply(a, b);
    }, c);
  },
  defer: function () {
    var a = [0.01].concat($A(arguments));
    return this.delay.apply(this, a);
  },
  wrap: function (a) {
    var b = this;
    return function () {
      return a.apply(this, [b.bind(this)].concat($A(arguments)));
    };
  },
  methodize: function () {
    if (this._methodized) return this._methodized;
    var a = this;
    return (this._methodized = function () {
      return a.apply(null, [this].concat($A(arguments)));
    });
  },
});
Date.prototype.toJSON = function () {
  return (
    '"' +
    this.getUTCFullYear() +
    "-" +
    (this.getUTCMonth() + 1).toPaddedString(2) +
    "-" +
    this.getUTCDate().toPaddedString(2) +
    "T" +
    this.getUTCHours().toPaddedString(2) +
    ":" +
    this.getUTCMinutes().toPaddedString(2) +
    ":" +
    this.getUTCSeconds().toPaddedString(2) +
    'Z"'
  );
};
var Try = {
  these: function () {
    for (var a, b = 0, c = arguments.length; b < c; b++) {
      var d = arguments[b];
      try {
        a = d();
        break;
      } catch (e) {}
    }
    return a;
  },
};
RegExp.prototype.match = RegExp.prototype.test;
RegExp.escape = function (a) {
  return String(a).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
};
var PeriodicalExecuter = Class.create({
  initialize: function (a, b) {
    this.callback = a;
    this.frequency = b;
    this.currentlyExecuting = !1;
    this.registerCallback();
  },
  registerCallback: function () {
    this.timer = setInterval(
      this.onTimerEvent.bind(this),
      1e3 * this.frequency
    );
  },
  execute: function () {
    this.callback(this);
  },
  stop: function () {
    this.timer && (clearInterval(this.timer), (this.timer = null));
  },
  onTimerEvent: function () {
    if (!this.currentlyExecuting)
      try {
        (this.currentlyExecuting = !0), this.execute();
      } finally {
        this.currentlyExecuting = !1;
      }
  },
});
Object.extend(String, {
  interpret: function (a) {
    return null == a ? "" : String(a);
  },
  specialChar: {
    "\b": "\\b",
    "\t": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    "\\": "\\\\",
  },
});
Object.extend(String.prototype, {
  gsub: function (a, b) {
    var c = "",
      d = this,
      e;
    for (b = arguments.callee.prepareReplacement(b); 0 < d.length; )
      (e = d.match(a))
        ? ((c += d.slice(0, e.index)),
          (c += String.interpret(b(e))),
          (d = d.slice(e.index + e[0].length)))
        : ((c += d), (d = ""));
    return c;
  },
  sub: function (a, b, c) {
    b = this.gsub.prepareReplacement(b);
    c = Object.isUndefined(c) ? 1 : c;
    return this.gsub(a, function (a) {
      return 0 > --c ? a[0] : b(a);
    });
  },
  scan: function (a, b) {
    this.gsub(a, b);
    return String(this);
  },
  truncate: function (a, b) {
    a = a || 30;
    b = Object.isUndefined(b) ? "..." : b;
    return this.length > a ? this.slice(0, a - b.length) + b : String(this);
  },
  strip: function () {
    return this.replace(/^\s+/, "").replace(/\s+$/, "");
  },
  stripTags: function () {
    return this.replace(/<\/?[^>]+>/gi, "");
  },
  stripScripts: function () {
    return this.replace(new RegExp(Prototype.ScriptFragment, "img"), "");
  },
  extractScripts: function () {
    var a = new RegExp(Prototype.ScriptFragment, "im");
    return (this.match(new RegExp(Prototype.ScriptFragment, "img")) || []).map(
      function (b) {
        return (b.match(a) || ["", ""])[1];
      }
    );
  },
  evalScripts: function () {
    return this.extractScripts().map(function (a) {
      return eval(a);
    });
  },
  escapeHTML: function () {
    var a = arguments.callee;
    a.text.data = this;
    return a.div.innerHTML;
  },
  unescapeHTML: function () {
    var a = new Element("div");
    a.innerHTML = this.stripTags();
    return a.childNodes[0]
      ? 1 < a.childNodes.length
        ? $A(a.childNodes).inject("", function (a, c) {
            return a + c.nodeValue;
          })
        : a.childNodes[0].nodeValue
      : "";
  },
  toQueryParams: function (a) {
    var b = this.strip().match(/([^?#]*)(#.*)?$/);
    return b
      ? b[1].split(a || "&").inject({}, function (a, b) {
          if ((b = b.split("="))[0]) {
            var e = decodeURIComponent(b.shift()),
              f = 1 < b.length ? b.join("=") : b[0];
            void 0 != f && (f = decodeURIComponent(f));
            e in a
              ? (Object.isArray(a[e]) || (a[e] = [a[e]]), a[e].push(f))
              : (a[e] = f);
          }
          return a;
        })
      : {};
  },
  toArray: function () {
    return this.split("");
  },
  succ: function () {
    return (
      this.slice(0, this.length - 1) +
      String.fromCharCode(this.charCodeAt(this.length - 1) + 1)
    );
  },
  times: function (a) {
    return 1 > a ? "" : Array(a + 1).join(this);
  },
  camelize: function () {
    var a = this.split("-"),
      b = a.length;
    if (1 == b) return a[0];
    for (
      var c =
          "-" == this.charAt(0)
            ? a[0].charAt(0).toUpperCase() + a[0].substring(1)
            : a[0],
        d = 1;
      d < b;
      d++
    )
      c += a[d].charAt(0).toUpperCase() + a[d].substring(1);
    return c;
  },
  capitalize: function () {
    return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
  },
  underscore: function () {
    return this.gsub(/::/, "/")
      .gsub(/([A-Z]+)([A-Z][a-z])/, "#{1}_#{2}")
      .gsub(/([a-z\d])([A-Z])/, "#{1}_#{2}")
      .gsub(/-/, "_")
      .toLowerCase();
  },
  dasherize: function () {
    return this.gsub(/_/, "-");
  },
  inspect: function (a) {
    var b = this.gsub(/[\x00-\x1f\\]/, function (a) {
      var b = String.specialChar[a[0]];
      return b ? b : "\\u00" + a[0].charCodeAt().toPaddedString(2, 16);
    });
    return a
      ? '"' + b.replace(/"/g, '\\"') + '"'
      : "'" + b.replace(/'/g, "\\'") + "'";
  },
  toJSON: function () {
    return this.inspect(!0);
  },
  unfilterJSON: function (a) {
    return this.sub(a || Prototype.JSONFilter, "#{1}");
  },
  isJSON: function () {
    var a;
    if (this.blank()) return !1;
    a = this.replace(/\\./g, "@").replace(/"[^"\\\n\r]*"/g, "");
    return /^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/.test(a);
  },
  evalJSON: function (a) {
    var b = this.unfilterJSON();
    try {
      if (!a || b.isJSON()) return eval("(" + b + ")");
    } catch (c) {}
    throw new SyntaxError("Badly formed JSON string: " + this.inspect());
  },
  include: function (a) {
    return -1 < this.indexOf(a);
  },
  startsWith: function (a) {
    return 0 === this.indexOf(a);
  },
  endsWith: function (a) {
    var b = this.length - a.length;
    return 0 <= b && this.lastIndexOf(a) === b;
  },
  empty: function () {
    return "" == this;
  },
  blank: function () {
    return /^\s*$/.test(this);
  },
  interpolate: function (a, b) {
    return new Template(this, b).evaluate(a);
  },
});
(Prototype.Browser.WebKit || Prototype.Browser.IE) &&
  Object.extend(String.prototype, {
    escapeHTML: function () {
      return this.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    },
    unescapeHTML: function () {
      return this.stripTags()
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");
    },
  });
String.prototype.gsub.prepareReplacement = function (a) {
  if (Object.isFunction(a)) return a;
  var b = new Template(a);
  return function (a) {
    return b.evaluate(a);
  };
};
String.prototype.parseQuery = String.prototype.toQueryParams;
Object.extend(String.prototype.escapeHTML, {
  div: document.createElement("div"),
  text: document.createTextNode(""),
});
String.prototype.escapeHTML.div.appendChild(String.prototype.escapeHTML.text);
var Template = Class.create({
  initialize: function (a, b) {
    this.template = a.toString();
    this.pattern = b || Template.Pattern;
  },
  evaluate: function (a) {
    Object.isFunction(a.toTemplateReplacements) &&
      (a = a.toTemplateReplacements());
    return this.template.gsub(this.pattern, function (b) {
      if (null == a) return "";
      var c = b[1] || "";
      if ("\\" == c) return b[2];
      var d = a,
        e = b[3],
        f = /^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;
      b = f.exec(e);
      if (null == b) return c;
      for (; null != b; ) {
        var g = b[1].startsWith("[") ? b[2].gsub("\\\\]", "]") : b[1],
          d = d[g];
        if (null == d || "" == b[3]) break;
        e = e.substring("[" == b[3] ? b[1].length : b[0].length);
        b = f.exec(e);
      }
      return c + String.interpret(d);
    });
  },
});
Template.Pattern = /(^|.|\r|\n)(#\{(.*?)\})/;
var $break = {},
  Enumerable = {
    each: function (a, b) {
      var c = 0;
      try {
        this._each(function (d) {
          a.call(b, d, c++);
        });
      } catch (d) {
        if (d != $break) throw d;
      }
      return this;
    },
    eachSlice: function (a, b, c) {
      var d = -a,
        e = [],
        f = this.toArray();
      if (1 > a) return f;
      for (; (d += a) < f.length; ) e.push(f.slice(d, d + a));
      return e.collect(b, c);
    },
    all: function (a, b) {
      a = a || Prototype.K;
      var c = !0;
      this.each(function (d, e) {
        c = c && !!a.call(b, d, e);
        if (!c) throw $break;
      });
      return c;
    },
    any: function (a, b) {
      a = a || Prototype.K;
      var c = !1;
      this.each(function (d, e) {
        if ((c = !!a.call(b, d, e))) throw $break;
      });
      return c;
    },
    collect: function (a, b) {
      a = a || Prototype.K;
      var c = [];
      this.each(function (d, e) {
        c.push(a.call(b, d, e));
      });
      return c;
    },
    detect: function (a, b) {
      var c;
      this.each(function (d, e) {
        if (a.call(b, d, e)) throw ((c = d), $break);
      });
      return c;
    },
    findAll: function (a, b) {
      var c = [];
      this.each(function (d, e) {
        a.call(b, d, e) && c.push(d);
      });
      return c;
    },
    grep: function (a, b, c) {
      b = b || Prototype.K;
      var d = [];
      Object.isString(a) && (a = new RegExp(a));
      this.each(function (e, f) {
        a.match(e) && d.push(b.call(c, e, f));
      });
      return d;
    },
    include: function (a) {
      if (Object.isFunction(this.indexOf) && -1 != this.indexOf(a)) return !0;
      var b = !1;
      this.each(function (c) {
        if (c == a) throw ((b = !0), $break);
      });
      return b;
    },
    inGroupsOf: function (a, b) {
      b = Object.isUndefined(b) ? null : b;
      return this.eachSlice(a, function (c) {
        for (; c.length < a; ) c.push(b);
        return c;
      });
    },
    inject: function (a, b, c) {
      this.each(function (d, e) {
        a = b.call(c, a, d, e);
      });
      return a;
    },
    invoke: function (a) {
      var b = $A(arguments).slice(1);
      return this.map(function (c) {
        return c[a].apply(c, b);
      });
    },
    max: function (a, b) {
      a = a || Prototype.K;
      var c;
      this.each(function (d, e) {
        d = a.call(b, d, e);
        if (null == c || d >= c) c = d;
      });
      return c;
    },
    min: function (a, b) {
      a = a || Prototype.K;
      var c;
      this.each(function (d, e) {
        d = a.call(b, d, e);
        if (null == c || d < c) c = d;
      });
      return c;
    },
    partition: function (a, b) {
      a = a || Prototype.K;
      var c = [],
        d = [];
      this.each(function (e, f) {
        (a.call(b, e, f) ? c : d).push(e);
      });
      return [c, d];
    },
    pluck: function (a) {
      var b = [];
      this.each(function (c) {
        b.push(c[a]);
      });
      return b;
    },
    reject: function (a, b) {
      var c = [];
      this.each(function (d, e) {
        a.call(b, d, e) || c.push(d);
      });
      return c;
    },
    sortBy: function (a, b) {
      return this.map(function (c, d) {
        return { value: c, criteria: a.call(b, c, d) };
      })
        .sort(function (a, b) {
          var e = a.criteria,
            f = b.criteria;
          return e < f ? -1 : e > f ? 1 : 0;
        })
        .pluck("value");
    },
    toArray: function () {
      return this.map();
    },
    zip: function () {
      var a = Prototype.K,
        b = $A(arguments);
      Object.isFunction(b.last()) && (a = b.pop());
      var c = [this].concat(b).map($A);
      return this.map(function (b, e) {
        return a(c.pluck(e));
      });
    },
    size: function () {
      return this.toArray().length;
    },
    inspect: function () {
      return "#<Enumerable:" + this.toArray().inspect() + ">";
    },
  };
Object.extend(Enumerable, {
  map: Enumerable.collect,
  find: Enumerable.detect,
  select: Enumerable.findAll,
  filter: Enumerable.findAll,
  member: Enumerable.include,
  entries: Enumerable.toArray,
  every: Enumerable.all,
  some: Enumerable.any,
});
function $A(a) {
  if (!a) return [];
  if (a.toArray) return a.toArray();
  for (var b = a.length || 0, c = Array(b); b--; ) c[b] = a[b];
  return c;
}
Prototype.Browser.WebKit &&
  ($A = function (a) {
    if (!a) return [];
    if (
      ("function" !== typeof a ||
        "number" !== typeof a.length ||
        "function" !== typeof a.item) &&
      a.toArray
    )
      return a.toArray();
    for (var b = a.length || 0, c = Array(b); b--; ) c[b] = a[b];
    return c;
  });
Array.from = $A;
Object.extend(Array.prototype, Enumerable);
Array.prototype._reverse ||
  (Array.prototype._reverse = Array.prototype.reverse);
Object.extend(Array.prototype, {
  _each: function (a) {
    for (var b = 0, c = this.length; b < c; b++) a(this[b]);
  },
  clear: function () {
    this.length = 0;
    return this;
  },
  first: function () {
    return this[0];
  },
  last: function () {
    return this[this.length - 1];
  },
  compact: function () {
    return this.select(function (a) {
      return null != a;
    });
  },
  flatten: function () {
    return this.inject([], function (a, b) {
      return a.concat(Object.isArray(b) ? b.flatten() : [b]);
    });
  },
  without: function () {
    var a = $A(arguments);
    return this.select(function (b) {
      return !a.include(b);
    });
  },
  reverse: function (a) {
    return (!1 !== a ? this : this.toArray())._reverse();
  },
  reduce: function () {
    return 1 < this.length ? this : this[0];
  },
  uniq: function (a) {
    return this.inject([], function (b, c, d) {
      (0 != d && (a ? b.last() == c : b.include(c))) || b.push(c);
      return b;
    });
  },
  intersect: function (a) {
    return this.uniq().findAll(function (b) {
      return a.detect(function (a) {
        return b === a;
      });
    });
  },
  clone: function () {
    return [].concat(this);
  },
  size: function () {
    return this.length;
  },
  inspect: function () {
    return "[" + this.map(Object.inspect).join(", ") + "]";
  },
  toJSON: function () {
    var a = [];
    this.each(function (b) {
      b = Object.toJSON(b);
      Object.isUndefined(b) || a.push(b);
    });
    return "[" + a.join(", ") + "]";
  },
});
Object.isFunction(Array.prototype.forEach) &&
  (Array.prototype._each = Array.prototype.forEach);
Array.prototype.indexOf ||
  (Array.prototype.indexOf = function (a, b) {
    b || (b = 0);
    var c = this.length;
    for (0 > b && (b = c + b); b < c; b++) if (this[b] === a) return b;
    return -1;
  });
Array.prototype.lastIndexOf ||
  (Array.prototype.lastIndexOf = function (a, b) {
    b = isNaN(b) ? this.length : (0 > b ? this.length + b : b) + 1;
    var c = this.slice(0, b).reverse().indexOf(a);
    return 0 > c ? c : b - c - 1;
  });
Array.prototype.toArray = Array.prototype.clone;
function $w(a) {
  return Object.isString(a) ? ((a = a.strip()) ? a.split(/\s+/) : []) : [];
}
Prototype.Browser.Opera &&
  (Array.prototype.concat = function () {
    for (var a = [], b = 0, c = this.length; b < c; b++) a.push(this[b]);
    b = 0;
    for (c = arguments.length; b < c; b++)
      if (Object.isArray(arguments[b]))
        for (var d = 0, e = arguments[b].length; d < e; d++)
          a.push(arguments[b][d]);
      else a.push(arguments[b]);
    return a;
  });
Object.extend(Number.prototype, {
  toColorPart: function () {
    return this.toPaddedString(2, 16);
  },
  succ: function () {
    return this + 1;
  },
  times: function (a, b) {
    $R(0, this, !0).each(a, b);
    return this;
  },
  toPaddedString: function (a, b) {
    var c = this.toString(b || 10);
    return "0".times(a - c.length) + c;
  },
  toJSON: function () {
    return isFinite(this) ? this.toString() : "null";
  },
});
$w("abs round ceil floor").each(function (a) {
  Number.prototype[a] = Math[a].methodize();
});
function $H(a) {
  return new Hash(a);
}
var Hash = Class.create(
  Enumerable,
  (function () {
    function a(a, c) {
      return Object.isUndefined(c)
        ? a
        : a + "=" + encodeURIComponent(String.interpret(c));
    }
    return {
      initialize: function (a) {
        this._object = Object.isHash(a) ? a.toObject() : Object.clone(a);
      },
      _each: function (a) {
        for (var c in this._object) {
          var d = this._object[c],
            e = [c, d];
          e.key = c;
          e.value = d;
          a(e);
        }
      },
      set: function (a, c) {
        return (this._object[a] = c);
      },
      get: function (a) {
        if (this._object[a] !== Object.prototype[a]) return this._object[a];
      },
      unset: function (a) {
        var c = this._object[a];
        delete this._object[a];
        return c;
      },
      toObject: function () {
        return Object.clone(this._object);
      },
      keys: function () {
        return this.pluck("key");
      },
      values: function () {
        return this.pluck("value");
      },
      index: function (a) {
        var c = this.detect(function (c) {
          return c.value === a;
        });
        return c && c.key;
      },
      merge: function (a) {
        return this.clone().update(a);
      },
      update: function (a) {
        return new Hash(a).inject(this, function (a, b) {
          a.set(b.key, b.value);
          return a;
        });
      },
      toQueryString: function () {
        return this.inject([], function (b, c) {
          var d = encodeURIComponent(c.key),
            e = c.value;
          if (e && "object" == typeof e) {
            if (Object.isArray(e)) return b.concat(e.map(a.curry(d)));
          } else b.push(a(d, e));
          return b;
        }).join("&");
      },
      inspect: function () {
        return (
          "#<Hash:{" +
          this.map(function (a) {
            return a.map(Object.inspect).join(": ");
          }).join(", ") +
          "}>"
        );
      },
      toJSON: function () {
        return Object.toJSON(this.toObject());
      },
      clone: function () {
        return new Hash(this);
      },
    };
  })()
);
Hash.prototype.toTemplateReplacements = Hash.prototype.toObject;
Hash.from = $H;
var ObjectRange = Class.create(Enumerable, {
    initialize: function (a, b, c) {
      this.start = a;
      this.end = b;
      this.exclusive = c;
    },
    _each: function (a) {
      for (var b = this.start; this.include(b); ) a(b), (b = b.succ());
    },
    include: function (a) {
      return a < this.start
        ? !1
        : this.exclusive
        ? a < this.end
        : a <= this.end;
    },
  }),
  $R = function (a, b, c) {
    return new ObjectRange(a, b, c);
  },
  Ajax = {
    getTransport: function () {
      return (
        Try.these(
          function () {
            return new XMLHttpRequest();
          },
          function () {
            return new ActiveXObject("Msxml2.XMLHTTP");
          },
          function () {
            return new ActiveXObject("Microsoft.XMLHTTP");
          }
        ) || !1
      );
    },
    activeRequestCount: 0,
    Responders: {
      responders: [],
      _each: function (a) {
        this.responders._each(a);
      },
      register: function (a) {
        this.include(a) || this.responders.push(a);
      },
      unregister: function (a) {
        this.responders = this.responders.without(a);
      },
      dispatch: function (a, b, c, d) {
        this.each(function (e) {
          if (Object.isFunction(e[a]))
            try {
              e[a].apply(e, [b, c, d]);
            } catch (f) {}
        });
      },
    },
  };
Object.extend(Ajax.Responders, Enumerable);
Ajax.Responders.register({
  onCreate: function () {
    Ajax.activeRequestCount++;
  },
  onComplete: function () {
    Ajax.activeRequestCount--;
  },
});
Ajax.Base = Class.create({
  initialize: function (a) {
    this.options = {
      method: "post",
      asynchronous: !0,
      contentType: "application/x-www-form-urlencoded",
      encoding: "UTF-8",
      parameters: "",
      evalJSON: !0,
      evalJS: !0,
    };
    Object.extend(this.options, a || {});
    this.options.method = this.options.method.toLowerCase();
    Object.isString(this.options.parameters)
      ? (this.options.parameters = this.options.parameters.toQueryParams())
      : Object.isHash(this.options.parameters) &&
        (this.options.parameters = this.options.parameters.toObject());
  },
});
Ajax.Request = Class.create(Ajax.Base, {
  _complete: !1,
  initialize: function ($super, b, c) {
    $super(c);
    this.transport = Ajax.getTransport();
    this.request(b);
  },
  request: function (a) {
    this.url = a;
    this.method = this.options.method;
    a = Object.clone(this.options.parameters);
    ["get", "post"].include(this.method) ||
      ((a._method = this.method), (this.method = "post"));
    this.parameters = a;
    if ((a = Object.toQueryString(a)))
      "get" == this.method
        ? (this.url += (this.url.include("?") ? "&" : "?") + a)
        : /Konqueror|Safari|KHTML/.test(navigator.userAgent) && (a += "&_=");
    try {
      var b = new Ajax.Response(this);
      if (this.options.onCreate) this.options.onCreate(b);
      Ajax.Responders.dispatch("onCreate", this, b);
      this.transport.open(
        this.method.toUpperCase(),
        this.url,
        this.options.asynchronous
      );
      this.options.asynchronous && this.respondToReadyState.bind(this).defer(1);
      this.transport.onreadystatechange = this.onStateChange.bind(this);
      this.setRequestHeaders();
      this.body = "post" == this.method ? this.options.postBody || a : null;
      this.transport.send(this.body);
      if (!this.options.asynchronous && this.transport.overrideMimeType)
        this.onStateChange();
    } catch (c) {
      this.dispatchException(c);
    }
  },
  onStateChange: function () {
    var a = this.transport.readyState;
    1 < a &&
      (4 != a || !this._complete) &&
      this.respondToReadyState(this.transport.readyState);
  },
  setRequestHeaders: function () {
    var a = {
      "X-Requested-With": "XMLHttpRequest",
      "X-Prototype-Version": Prototype.Version,
      Accept: "text/javascript, text/html, application/xml, text/xml, */*",
    };
    "post" == this.method &&
      ((a["Content-type"] =
        this.options.contentType +
        (this.options.encoding ? "; charset=" + this.options.encoding : "")),
      this.transport.overrideMimeType &&
        2005 > (navigator.userAgent.match(/Gecko\/(\d{4})/) || [0, 2005])[1] &&
        (a.Connection = "close"));
    if ("object" == typeof this.options.requestHeaders) {
      var b = this.options.requestHeaders;
      if (Object.isFunction(b.push))
        for (var c = 0, d = b.length; c < d; c += 2) a[b[c]] = b[c + 1];
      else
        $H(b).each(function (b) {
          a[b.key] = b.value;
        });
    }
    for (var e in a) this.transport.setRequestHeader(e, a[e]);
  },
  success: function () {
    var a = this.getStatus();
    return !a || (200 <= a && 300 > a);
  },
  getStatus: function () {
    try {
      return this.transport.status || 0;
    } catch (a) {
      return 0;
    }
  },
  respondToReadyState: function (a) {
    a = Ajax.Request.Events[a];
    var b = new Ajax.Response(this);
    if ("Complete" == a) {
      try {
        (this._complete = !0),
          (
            this.options["on" + b.status] ||
            this.options["on" + (this.success() ? "Success" : "Failure")] ||
            Prototype.emptyFunction
          )(b, b.headerJSON);
      } catch (c) {
        this.dispatchException(c);
      }
      var d = b.getHeader("Content-type");
      ("force" == this.options.evalJS ||
        (this.options.evalJS &&
          this.isSameOrigin() &&
          d &&
          d.match(
            /^\s*(text|application)\/(x-)?(java|ecma)script(;.*)?\s*$/i
          ))) &&
        this.evalResponse();
    }
    try {
      (this.options["on" + a] || Prototype.emptyFunction)(b, b.headerJSON),
        Ajax.Responders.dispatch("on" + a, this, b, b.headerJSON);
    } catch (e) {
      this.dispatchException(e);
    }
    "Complete" == a &&
      (this.transport.onreadystatechange = Prototype.emptyFunction);
  },
  isSameOrigin: function () {
    var a = this.url.match(/^\s*https?:\/\/[^\/]*/);
    return (
      !a ||
      a[0] ==
        "#{protocol}//#{domain}#{port}".interpolate({
          protocol: location.protocol,
          domain: document.domain,
          port: location.port ? ":" + location.port : "",
        })
    );
  },
  getHeader: function (a) {
    try {
      return this.transport.getResponseHeader(a) || null;
    } catch (b) {
      return null;
    }
  },
  evalResponse: function () {
    try {
      return eval((this.transport.responseText || "").unfilterJSON());
    } catch (a) {
      this.dispatchException(a);
    }
  },
  dispatchException: function (a) {
    (this.options.onException || Prototype.emptyFunction)(this, a);
    Ajax.Responders.dispatch("onException", this, a);
  },
});
Ajax.Request.Events = [
  "Uninitialized",
  "Loading",
  "Loaded",
  "Interactive",
  "Complete",
];
Ajax.Response = Class.create({
  initialize: function (a) {
    this.request = a;
    a = this.transport = a.transport;
    var b = (this.readyState = a.readyState);
    if ((2 < b && !Prototype.Browser.IE) || 4 == b)
      (this.status = this.getStatus()),
        (this.statusText = this.getStatusText()),
        (this.responseText = String.interpret(a.responseText)),
        (this.headerJSON = this._getHeaderJSON());
    4 == b &&
      ((a = a.responseXML),
      (this.responseXML = Object.isUndefined(a) ? null : a),
      (this.responseJSON = this._getResponseJSON()));
  },
  status: 0,
  statusText: "",
  getStatus: Ajax.Request.prototype.getStatus,
  getStatusText: function () {
    try {
      return this.transport.statusText || "";
    } catch (a) {
      return "";
    }
  },
  getHeader: Ajax.Request.prototype.getHeader,
  getAllHeaders: function () {
    try {
      return this.getAllResponseHeaders();
    } catch (a) {
      return null;
    }
  },
  getResponseHeader: function (a) {
    return this.transport.getResponseHeader(a);
  },
  getAllResponseHeaders: function () {
    return this.transport.getAllResponseHeaders();
  },
  _getHeaderJSON: function () {
    var a = this.getHeader("X-JSON");
    if (!a) return null;
    a = decodeURIComponent(escape(a));
    try {
      return a.evalJSON(
        this.request.options.sanitizeJSON || !this.request.isSameOrigin()
      );
    } catch (b) {
      this.request.dispatchException(b);
    }
  },
  _getResponseJSON: function () {
    var a = this.request.options;
    if (
      !a.evalJSON ||
      ("force" != a.evalJSON &&
        !(this.getHeader("Content-type") || "").include("application/json")) ||
      this.responseText.blank()
    )
      return null;
    try {
      return this.responseText.evalJSON(
        a.sanitizeJSON || !this.request.isSameOrigin()
      );
    } catch (b) {
      this.request.dispatchException(b);
    }
  },
});
Ajax.Updater = Class.create(Ajax.Request, {
  initialize: function ($super, b, c, d) {
    this.container = {
      success: b.success || b,
      failure: b.failure || (b.success ? null : b),
    };
    d = Object.clone(d);
    var e = d.onComplete;
    d.onComplete = function (b, c) {
      this.updateContent(b.responseText);
      Object.isFunction(e) && e(b, c);
    }.bind(this);
    $super(c, d);
  },
  updateContent: function (a) {
    var b = this.container[this.success() ? "success" : "failure"],
      c = this.options;
    c.evalScripts || (a = a.stripScripts());
    if ((b = $(b)))
      if (c.insertion)
        if (Object.isString(c.insertion)) {
          var d = {};
          d[c.insertion] = a;
          b.insert(d);
        } else c.insertion(b, a);
      else b.update(a);
  },
});
Ajax.PeriodicalUpdater = Class.create(Ajax.Base, {
  initialize: function ($super, b, c, d) {
    $super(d);
    this.onComplete = this.options.onComplete;
    this.frequency = this.options.frequency || 2;
    this.decay = this.options.decay || 1;
    this.updater = {};
    this.container = b;
    this.url = c;
    this.start();
  },
  start: function () {
    this.options.onComplete = this.updateComplete.bind(this);
    this.onTimerEvent();
  },
  stop: function () {
    this.updater.options.onComplete = void 0;
    clearTimeout(this.timer);
    (this.onComplete || Prototype.emptyFunction).apply(this, arguments);
  },
  updateComplete: function (a) {
    this.options.decay &&
      ((this.decay =
        a.responseText == this.lastText ? this.decay * this.options.decay : 1),
      (this.lastText = a.responseText));
    this.timer = this.onTimerEvent
      .bind(this)
      .delay(this.decay * this.frequency);
  },
  onTimerEvent: function () {
    this.updater = new Ajax.Updater(this.container, this.url, this.options);
  },
});
function $(a) {
  if (1 < arguments.length) {
    for (var b = 0, c = [], d = arguments.length; b < d; b++)
      c.push($(arguments[b]));
    return c;
  }
  Object.isString(a) && (a = document.getElementById(a));
  return Element.extend(a);
}
Prototype.BrowserFeatures.XPath &&
  (document._getElementsByXPath = function (a, b) {
    for (
      var c = [],
        d = document.evaluate(
          a,
          $(b) || document,
          null,
          XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
          null
        ),
        e = 0,
        f = d.snapshotLength;
      e < f;
      e++
    )
      c.push(Element.extend(d.snapshotItem(e)));
    return c;
  });
if (!window.Node) var Node = {};
Node.ELEMENT_NODE ||
  Object.extend(Node, {
    ELEMENT_NODE: 1,
    ATTRIBUTE_NODE: 2,
    TEXT_NODE: 3,
    CDATA_SECTION_NODE: 4,
    ENTITY_REFERENCE_NODE: 5,
    ENTITY_NODE: 6,
    PROCESSING_INSTRUCTION_NODE: 7,
    COMMENT_NODE: 8,
    DOCUMENT_NODE: 9,
    DOCUMENT_TYPE_NODE: 10,
    DOCUMENT_FRAGMENT_NODE: 11,
    NOTATION_NODE: 12,
  });
(function () {
  var a = this.Element;
  this.Element = function (a, c) {
    c = c || {};
    a = a.toLowerCase();
    var d = Element.cache;
    if (Prototype.Browser.IE && c.name)
      return (
        (a = "<" + a + ' name="' + c.name + '">'),
        delete c.name,
        Element.writeAttribute(document.createElement(a), c)
      );
    d[a] || (d[a] = Element.extend(document.createElement(a)));
    return Element.writeAttribute(d[a].cloneNode(!1), c);
  };
  Object.extend(this.Element, a || {});
  a && (this.Element.prototype = a.prototype);
}.call(window));
Element.cache = {};
Element.Methods = {
  visible: function (a) {
    return "none" != $(a).style.display;
  },
  toggle: function (a) {
    a = $(a);
    Element[Element.visible(a) ? "hide" : "show"](a);
    return a;
  },
  hide: function (a) {
    a = $(a);
    a.style.display = "none";
    return a;
  },
  show: function (a) {
    a = $(a);
    a.style.display = "";
    return a;
  },
  remove: function (a) {
    a = $(a);
    a.parentNode.removeChild(a);
    return a;
  },
  update: function (a, b) {
    a = $(a);
    b && b.toElement && (b = b.toElement());
    if (Object.isElement(b)) return a.update().insert(b);
    b = Object.toHTML(b);
    a.innerHTML = b.stripScripts();
    b.evalScripts.bind(b).defer();
    return a;
  },
  replace: function (a, b) {
    a = $(a);
    if (b && b.toElement) b = b.toElement();
    else if (!Object.isElement(b)) {
      b = Object.toHTML(b);
      var c = a.ownerDocument.createRange();
      c.selectNode(a);
      b.evalScripts.bind(b).defer();
      b = c.createContextualFragment(b.stripScripts());
    }
    a.parentNode.replaceChild(b, a);
    return a;
  },
  insert: function (a, b) {
    a = $(a);
    if (
      Object.isString(b) ||
      Object.isNumber(b) ||
      Object.isElement(b) ||
      (b && (b.toElement || b.toHTML))
    )
      b = { bottom: b };
    var c, d, e, f;
    for (f in b)
      (c = b[f]),
        (f = f.toLowerCase()),
        (d = Element._insertionTranslations[f]),
        c && c.toElement && (c = c.toElement()),
        Object.isElement(c)
          ? d(a, c)
          : ((c = Object.toHTML(c)),
            (e = ("before" == f || "after" == f
              ? a.parentNode
              : a
            ).tagName.toUpperCase()),
            (e = Element._getContentFromAnonymousElement(e, c.stripScripts())),
            ("top" != f && "after" != f) || e.reverse(),
            e.each(d.curry(a)),
            c.evalScripts.bind(c).defer());
    return a;
  },
  wrap: function (a, b, c) {
    a = $(a);
    Object.isElement(b)
      ? $(b).writeAttribute(c || {})
      : (b = Object.isString(b) ? new Element(b, c) : new Element("div", b));
    a.parentNode && a.parentNode.replaceChild(b, a);
    b.appendChild(a);
    return b;
  },
  inspect: function (a) {
    a = $(a);
    var b = "<" + a.tagName.toLowerCase();
    $H({ id: "id", className: "class" }).each(function (c) {
      var d = c.first();
      c = c.last();
      (d = (a[d] || "").toString()) && (b += " " + c + "=" + d.inspect(!0));
    });
    return b + ">";
  },
  recursivelyCollect: function (a, b) {
    a = $(a);
    for (var c = []; (a = a[b]); ) 1 == a.nodeType && c.push(Element.extend(a));
    return c;
  },
  ancestors: function (a) {
    return $(a).recursivelyCollect("parentNode");
  },
  descendants: function (a) {
    return $(a).select("*");
  },
  firstDescendant: function (a) {
    for (a = $(a).firstChild; a && 1 != a.nodeType; ) a = a.nextSibling;
    return $(a);
  },
  immediateDescendants: function (a) {
    if (!(a = $(a).firstChild)) return [];
    for (; a && 1 != a.nodeType; ) a = a.nextSibling;
    return a ? [a].concat($(a).nextSiblings()) : [];
  },
  previousSiblings: function (a) {
    return $(a).recursivelyCollect("previousSibling");
  },
  nextSiblings: function (a) {
    return $(a).recursivelyCollect("nextSibling");
  },
  siblings: function (a) {
    a = $(a);
    return a.previousSiblings().reverse().concat(a.nextSiblings());
  },
  match: function (a, b) {
    Object.isString(b) && (b = new Selector(b));
    return b.match($(a));
  },
  up: function (a, b, c) {
    a = $(a);
    if (1 == arguments.length) return $(a.parentNode);
    var d = a.ancestors();
    return Object.isNumber(b) ? d[b] : Selector.findElement(d, b, c);
  },
  down: function (a, b, c) {
    a = $(a);
    return 1 == arguments.length
      ? a.firstDescendant()
      : Object.isNumber(b)
      ? a.descendants()[b]
      : Element.select(a, b)[c || 0];
  },
  previous: function (a, b, c) {
    a = $(a);
    if (1 == arguments.length)
      return $(Selector.handlers.previousElementSibling(a));
    var d = a.previousSiblings();
    return Object.isNumber(b) ? d[b] : Selector.findElement(d, b, c);
  },
  next: function (a, b, c) {
    a = $(a);
    if (1 == arguments.length)
      return $(Selector.handlers.nextElementSibling(a));
    var d = a.nextSiblings();
    return Object.isNumber(b) ? d[b] : Selector.findElement(d, b, c);
  },
  select: function () {
    var a = $A(arguments),
      b = $(a.shift());
    return Selector.findChildElements(b, a);
  },
  adjacent: function () {
    var a = $A(arguments),
      b = $(a.shift());
    return Selector.findChildElements(b.parentNode, a).without(b);
  },
  identify: function (a) {
    a = $(a);
    var b = a.readAttribute("id"),
      c = arguments.callee;
    if (b) return b;
    do b = "anonymous_element_" + c.counter++;
    while ($(b));
    a.writeAttribute("id", b);
    return b;
  },
  readAttribute: function (a, b) {
    a = $(a);
    if (Prototype.Browser.IE) {
      var c = Element._attributeTranslations.read;
      if (c.values[b]) return c.values[b](a, b);
      c.names[b] && (b = c.names[b]);
      if (b.include(":"))
        return a.attributes && a.attributes[b] ? a.attributes[b].value : null;
    }
    return a.getAttribute(b);
  },
  writeAttribute: function (a, b, c) {
    a = $(a);
    var d = {},
      e = Element._attributeTranslations.write;
    "object" == typeof b ? (d = b) : (d[b] = Object.isUndefined(c) ? !0 : c);
    for (var f in d)
      (b = e.names[f] || f),
        (c = d[f]),
        e.values[f] && (b = e.values[f](a, c)),
        !1 === c || null === c
          ? a.removeAttribute(b)
          : !0 === c
          ? a.setAttribute(b, b)
          : a.setAttribute(b, c);
    return a;
  },
  getHeight: function (a) {
    return $(a).getDimensions().height;
  },
  getWidth: function (a) {
    return $(a).getDimensions().width;
  },
  classNames: function (a) {
    return new Element.ClassNames(a);
  },
  hasClassName: function (a, b) {
    if ((a = $(a))) {
      var c = a.className;
      return (
        0 < c.length &&
        (c == b || new RegExp("(^|\\s)" + b + "(\\s|$)").test(c))
      );
    }
  },
  addClassName: function (a, b) {
    if ((a = $(a)))
      return (
        a.hasClassName(b) || (a.className += (a.className ? " " : "") + b), a
      );
  },
  removeClassName: function (a, b) {
    if ((a = $(a)))
      return (
        (a.className = a.className
          .replace(new RegExp("(^|\\s+)" + b + "(\\s+|$)"), " ")
          .strip()),
        a
      );
  },
  toggleClassName: function (a, b) {
    if ((a = $(a)))
      return a[a.hasClassName(b) ? "removeClassName" : "addClassName"](b);
  },
  cleanWhitespace: function (a) {
    a = $(a);
    for (var b = a.firstChild; b; ) {
      var c = b.nextSibling;
      3 != b.nodeType || /\S/.test(b.nodeValue) || a.removeChild(b);
      b = c;
    }
    return a;
  },
  empty: function (a) {
    return $(a).innerHTML.blank();
  },
  descendantOf: function (a, b) {
    a = $(a);
    b = $(b);
    if (a.compareDocumentPosition)
      return 8 === (a.compareDocumentPosition(b) & 8);
    if (b.contains) return b.contains(a) && b !== a;
    for (; (a = a.parentNode); ) if (a == b) return !0;
    return !1;
  },
  scrollTo: function (a) {
    a = $(a);
    var b = a.cumulativeOffset();
    window.scrollTo(b[0], b[1]);
    return a;
  },
  getStyle: function (a, b) {
    a = $(a);
    b = "float" == b ? "cssFloat" : b.camelize();
    var c = a.style[b];
    (c && "auto" != c) ||
      (c = (c = document.defaultView.getComputedStyle(a, null)) ? c[b] : null);
    return "opacity" == b ? (c ? parseFloat(c) : 1) : "auto" == c ? null : c;
  },
  getOpacity: function (a) {
    return $(a).getStyle("opacity");
  },
  setStyle: function (a, b) {
    a = $(a);
    var c = a.style;
    if (Object.isString(b))
      return (
        (a.style.cssText += ";" + b),
        b.include("opacity")
          ? a.setOpacity(b.match(/opacity:\s*(\d?\.?\d*)/)[1])
          : a
      );
    for (var d in b)
      "opacity" == d
        ? a.setOpacity(b[d])
        : (c[
            "float" == d || "cssFloat" == d
              ? Object.isUndefined(c.styleFloat)
                ? "cssFloat"
                : "styleFloat"
              : d
          ] = b[d]);
    return a;
  },
  setOpacity: function (a, b) {
    a = $(a);
    a.style.opacity = 1 == b || "" === b ? "" : 1e-5 > b ? 0 : b;
    return a;
  },
  getDimensions: function (a) {
    a = $(a);
    var b = a.getStyle("display");
    if ("none" != b && null != b)
      return { width: a.offsetWidth, height: a.offsetHeight };
    var b = a.style,
      c = b.visibility,
      d = b.position,
      e = b.display;
    b.visibility = "hidden";
    b.position = "absolute";
    b.display = "block";
    var f = a.clientWidth;
    a = a.clientHeight;
    b.display = e;
    b.position = d;
    b.visibility = c;
    return { width: f, height: a };
  },
  makePositioned: function (a) {
    a = $(a);
    var b = Element.getStyle(a, "position");
    ("static" != b && b) ||
      ((a._madePositioned = !0),
      (a.style.position = "relative"),
      Prototype.Browser.Opera && ((a.style.top = 0), (a.style.left = 0)));
    return a;
  },
  undoPositioned: function (a) {
    a = $(a);
    a._madePositioned &&
      ((a._madePositioned = void 0),
      (a.style.position = a.style.top = a.style.left = a.style.bottom = a.style.right =
        ""));
    return a;
  },
  makeClipping: function (a) {
    a = $(a);
    if (a._overflow) return a;
    a._overflow = Element.getStyle(a, "overflow") || "auto";
    "hidden" !== a._overflow && (a.style.overflow = "hidden");
    return a;
  },
  undoClipping: function (a) {
    a = $(a);
    if (!a._overflow) return a;
    a.style.overflow = "auto" == a._overflow ? "" : a._overflow;
    a._overflow = null;
    return a;
  },
  cumulativeOffset: function (a) {
    var b = 0,
      c = 0;
    do (b += a.offsetTop || 0), (c += a.offsetLeft || 0), (a = a.offsetParent);
    while (a);
    return Element._returnOffset(c, b);
  },
  positionedOffset: function (a) {
    var b = 0,
      c = 0;
    do
      if (
        ((b += a.offsetTop || 0),
        (c += a.offsetLeft || 0),
        (a = a.offsetParent))
      ) {
        if ("BODY" == a.tagName.toUpperCase()) break;
        if ("static" !== Element.getStyle(a, "position")) break;
      }
    while (a);
    return Element._returnOffset(c, b);
  },
  absolutize: function (a) {
    a = $(a);
    if ("absolute" == a.getStyle("position")) return a;
    var b = a.positionedOffset(),
      c = b[1],
      b = b[0],
      d = a.clientWidth,
      e = a.clientHeight;
    a._originalLeft = b - parseFloat(a.style.left || 0);
    a._originalTop = c - parseFloat(a.style.top || 0);
    a._originalWidth = a.style.width;
    a._originalHeight = a.style.height;
    a.style.position = "absolute";
    a.style.top = c + "px";
    a.style.left = b + "px";
    a.style.width = d + "px";
    a.style.height = e + "px";
    return a;
  },
  relativize: function (a) {
    a = $(a);
    if ("relative" == a.getStyle("position")) return a;
    a.style.position = "relative";
    var b = parseFloat(a.style.top || 0) - (a._originalTop || 0),
      c = parseFloat(a.style.left || 0) - (a._originalLeft || 0);
    a.style.top = b + "px";
    a.style.left = c + "px";
    a.style.height = a._originalHeight;
    a.style.width = a._originalWidth;
    return a;
  },
  cumulativeScrollOffset: function (a) {
    var b = 0,
      c = 0;
    do (b += a.scrollTop || 0), (c += a.scrollLeft || 0), (a = a.parentNode);
    while (a);
    return Element._returnOffset(c, b);
  },
  getOffsetParent: function (a) {
    if (a.offsetParent) return $(a.offsetParent);
    if (a == document.body) return $(a);
    for (; (a = a.parentNode) && a != document.body; )
      if ("static" != Element.getStyle(a, "position")) return $(a);
    return $(document.body);
  },
  viewportOffset: function (a) {
    var b = 0,
      c = 0,
      d = a;
    do
      if (
        ((b += d.offsetTop || 0),
        (c += d.offsetLeft || 0),
        d.offsetParent == document.body &&
          "absolute" == Element.getStyle(d, "position"))
      )
        break;
    while ((d = d.offsetParent));
    d = a;
    do
      if (
        !Prototype.Browser.Opera ||
        (d.tagName && "BODY" == d.tagName.toUpperCase())
      )
        (b -= d.scrollTop || 0), (c -= d.scrollLeft || 0);
    while ((d = d.parentNode));
    return Element._returnOffset(c, b);
  },
  clonePosition: function (a, b, c) {
    c = Object.extend(
      {
        setLeft: !0,
        setTop: !0,
        setWidth: !0,
        setHeight: !0,
        offsetTop: 0,
        offsetLeft: 0,
      },
      c || {}
    );
    b = $(b);
    var d = b.viewportOffset();
    a = $(a);
    var e = [0, 0],
      f = null;
    "absolute" == Element.getStyle(a, "position") &&
      ((f = a.getOffsetParent()), (e = f.viewportOffset()));
    f == document.body &&
      ((e[0] -= document.body.offsetLeft), (e[1] -= document.body.offsetTop));
    c.setLeft && (a.style.left = d[0] - e[0] + c.offsetLeft + "px");
    c.setTop && (a.style.top = d[1] - e[1] + c.offsetTop + "px");
    c.setWidth && (a.style.width = b.offsetWidth + "px");
    c.setHeight && (a.style.height = b.offsetHeight + "px");
    return a;
  },
};
Element.Methods.identify.counter = 1;
Object.extend(Element.Methods, {
  getElementsBySelector: Element.Methods.select,
  childElements: Element.Methods.immediateDescendants,
});
Element._attributeTranslations = {
  write: { names: { className: "class", htmlFor: "for" }, values: {} },
};
Prototype.Browser.Opera
  ? ((Element.Methods.getStyle = Element.Methods.getStyle.wrap(function (
      a,
      b,
      c
    ) {
      switch (c) {
        case "left":
        case "top":
        case "right":
        case "bottom":
          if ("static" === a(b, "position")) return null;
        case "height":
        case "width":
          if (!Element.visible(b)) return null;
          var d = parseInt(a(b, c), 10);
          return d !== b["offset" + c.capitalize()]
            ? d + "px"
            : ("height" === c
                ? [
                    "border-top-width",
                    "padding-top",
                    "padding-bottom",
                    "border-bottom-width",
                  ]
                : [
                    "border-left-width",
                    "padding-left",
                    "padding-right",
                    "border-right-width",
                  ]
              ).inject(d, function (c, d) {
                var g = a(b, d);
                return null === g ? c : c - parseInt(g, 10);
              }) + "px";
        default:
          return a(b, c);
      }
    })),
    (Element.Methods.readAttribute = Element.Methods.readAttribute.wrap(
      function (a, b, c) {
        return "title" === c ? b.title : a(b, c);
      }
    )))
  : Prototype.Browser.IE
  ? ((Element.Methods.getOffsetParent = Element.Methods.getOffsetParent.wrap(
      function (a, b) {
        b = $(b);
        var c = b.getStyle("position");
        if ("static" !== c) return a(b);
        b.setStyle({ position: "relative" });
        var d = a(b);
        b.setStyle({ position: c });
        return d;
      }
    )),
    $w("positionedOffset viewportOffset").each(function (a) {
      Element.Methods[a] = Element.Methods[a].wrap(function (a, c) {
        c = $(c);
        var d = c.getStyle("position");
        if ("static" !== d) return a(c);
        var e = c.getOffsetParent();
        e && "fixed" === e.getStyle("position") && e.setStyle({ zoom: 1 });
        c.setStyle({ position: "relative" });
        e = a(c);
        c.setStyle({ position: d });
        return e;
      });
    }),
    (Element.Methods.cumulativeOffset = Element.Methods.cumulativeOffset.wrap(
      function (a, b) {
        return a(b);
      }
    )),
    (Element.Methods.getStyle = function (a, b) {
      a = $(a);
      b = "float" == b || "cssFloat" == b ? "styleFloat" : b.camelize();
      var c = a.style[b];
      !c && a.currentStyle && (c = a.currentStyle[b]);
      return "opacity" == b
        ? (c = (a.getStyle("filter") || "").match(/alpha\(opacity=(.*)\)/)) &&
          c[1]
          ? parseFloat(c[1]) / 100
          : 1
        : "auto" == c
        ? ("width" != b && "height" != b) || "none" == a.getStyle("display")
          ? null
          : a["offset" + b.capitalize()] + "px"
        : c;
    }),
    (Element.Methods.setOpacity = function (a, b) {
      a = $(a);
      var c = a.currentStyle;
      if ((c && !c.hasLayout) || (!c && "normal" == a.style.zoom))
        a.style.zoom = 1;
      var c = a.getStyle("filter"),
        d = a.style;
      if (1 == b || "" === b)
        return (
          (c = c.replace(/alpha\([^\)]*\)/gi, ""))
            ? (d.filter = c)
            : d.removeAttribute("filter"),
          a
        );
      1e-5 > b && (b = 0);
      d.filter =
        c.replace(/alpha\([^\)]*\)/gi, "") + "alpha(opacity=" + 100 * b + ")";
      return a;
    }),
    (Element._attributeTranslations = {
      read: {
        names: { class: "className", for: "htmlFor" },
        values: {
          _getAttr: function (a, b) {
            return a.getAttribute(b, 2);
          },
          _getAttrNode: function (a, b) {
            var c = a.getAttributeNode(b);
            return c ? c.value : "";
          },
          _getEv: function (a, b) {
            return (b = a.getAttribute(b)) ? b.toString().slice(23, -2) : null;
          },
          _flag: function (a, b) {
            return $(a).hasAttribute(b) ? b : null;
          },
          style: function (a) {
            return a.style.cssText.toLowerCase();
          },
          title: function (a) {
            return a.title;
          },
        },
      },
    }),
    (Element._attributeTranslations.write = {
      names: Object.extend(
        { cellpadding: "cellPadding", cellspacing: "cellSpacing" },
        Element._attributeTranslations.read.names
      ),
      values: {
        checked: function (a, b) {
          a.checked = !!b;
        },
        style: function (a, b) {
          a.style.cssText = b ? b : "";
        },
      },
    }),
    (Element._attributeTranslations.has = {}),
    $w(
      "colSpan rowSpan vAlign dateTime accessKey tabIndex encType maxLength readOnly longDesc frameBorder"
    ).each(function (a) {
      Element._attributeTranslations.write.names[a.toLowerCase()] = a;
      Element._attributeTranslations.has[a.toLowerCase()] = a;
    }),
    (function (a) {
      Object.extend(a, {
        href: a._getAttr,
        src: a._getAttr,
        type: a._getAttr,
        action: a._getAttrNode,
        disabled: a._flag,
        checked: a._flag,
        readonly: a._flag,
        multiple: a._flag,
        onload: a._getEv,
        onunload: a._getEv,
        onclick: a._getEv,
        ondblclick: a._getEv,
        onmousedown: a._getEv,
        onmouseup: a._getEv,
        onmouseover: a._getEv,
        onmousemove: a._getEv,
        onmouseout: a._getEv,
        onfocus: a._getEv,
        onblur: a._getEv,
        onkeypress: a._getEv,
        onkeydown: a._getEv,
        onkeyup: a._getEv,
        onsubmit: a._getEv,
        onreset: a._getEv,
        onselect: a._getEv,
        onchange: a._getEv,
      });
    })(Element._attributeTranslations.read.values))
  : Prototype.Browser.Gecko && /rv:1\.8\.0/.test(navigator.userAgent)
  ? (Element.Methods.setOpacity = function (a, b) {
      a = $(a);
      a.style.opacity = 1 == b ? 0.999999 : "" === b ? "" : 1e-5 > b ? 0 : b;
      return a;
    })
  : Prototype.Browser.WebKit &&
    ((Element.Methods.setOpacity = function (a, b) {
      a = $(a);
      a.style.opacity = 1 == b || "" === b ? "" : 1e-5 > b ? 0 : b;
      if (1 == b)
        if ("IMG" == a.tagName.toUpperCase() && a.width) a.width++, a.width--;
        else
          try {
            var c = document.createTextNode(" ");
            a.appendChild(c);
            a.removeChild(c);
          } catch (d) {}
      return a;
    }),
    (Element.Methods.cumulativeOffset = function (a) {
      var b = 0,
        c = 0;
      do {
        b += a.offsetTop || 0;
        c += a.offsetLeft || 0;
        if (
          a.offsetParent == document.body &&
          "absolute" == Element.getStyle(a, "position")
        )
          break;
        a = a.offsetParent;
      } while (a);
      return Element._returnOffset(c, b);
    }));
if (Prototype.Browser.IE || Prototype.Browser.Opera)
  Element.Methods.update = function (a, b) {
    a = $(a);
    b && b.toElement && (b = b.toElement());
    if (Object.isElement(b)) return a.update().insert(b);
    b = Object.toHTML(b);
    var c = a.tagName.toUpperCase();
    c in Element._insertionTranslations.tags
      ? ($A(a.childNodes).each(function (b) {
          a.removeChild(b);
        }),
        Element._getContentFromAnonymousElement(c, b.stripScripts()).each(
          function (b) {
            a.appendChild(b);
          }
        ))
      : (a.innerHTML = b.stripScripts());
    b.evalScripts.bind(b).defer();
    return a;
  };
"outerHTML" in document.createElement("div") &&
  (Element.Methods.replace = function (a, b) {
    a = $(a);
    b && b.toElement && (b = b.toElement());
    if (Object.isElement(b)) return a.parentNode.replaceChild(b, a), a;
    b = Object.toHTML(b);
    var c = a.parentNode,
      d = c.tagName.toUpperCase();
    if (Element._insertionTranslations.tags[d]) {
      var e = a.next(),
        d = Element._getContentFromAnonymousElement(d, b.stripScripts());
      c.removeChild(a);
      e
        ? d.each(function (a) {
            c.insertBefore(a, e);
          })
        : d.each(function (a) {
            c.appendChild(a);
          });
    } else a.outerHTML = b.stripScripts();
    b.evalScripts.bind(b).defer();
    return a;
  });
Element._returnOffset = function (a, b) {
  var c = [a, b];
  c.left = a;
  c.top = b;
  return c;
};
Element._getContentFromAnonymousElement = function (a, b) {
  var c = new Element("div"),
    d = Element._insertionTranslations.tags[a];
  d
    ? ((c.innerHTML = d[0] + b + d[1]),
      d[2].times(function () {
        c = c.firstChild;
      }))
    : (c.innerHTML = b);
  return $A(c.childNodes);
};
Element._insertionTranslations = {
  before: function (a, b) {
    a.parentNode.insertBefore(b, a);
  },
  top: function (a, b) {
    a.insertBefore(b, a.firstChild);
  },
  bottom: function (a, b) {
    a.appendChild(b);
  },
  after: function (a, b) {
    a.parentNode.insertBefore(b, a.nextSibling);
  },
  tags: {
    TABLE: ["<table>", "</table>", 1],
    TBODY: ["<table><tbody>", "</tbody></table>", 2],
    TR: ["<table><tbody><tr>", "</tr></tbody></table>", 3],
    TD: ["<table><tbody><tr><td>", "</td></tr></tbody></table>", 4],
    SELECT: ["<select>", "</select>", 1],
  },
};
(function () {
  Object.extend(this.tags, {
    THEAD: this.tags.TBODY,
    TFOOT: this.tags.TBODY,
    TH: this.tags.TD,
  });
}.call(Element._insertionTranslations));
Element.Methods.Simulated = {
  hasAttribute: function (a, b) {
    b = Element._attributeTranslations.has[b] || b;
    var c = $(a).getAttributeNode(b);
    return !(!c || !c.specified);
  },
};
Element.Methods.ByTag = {};
Object.extend(Element, Element.Methods);
!Prototype.BrowserFeatures.ElementExtensions &&
  document.createElement("div").__proto__ &&
  ((window.HTMLElement = {}),
  (window.HTMLElement.prototype = document.createElement("div").__proto__),
  (Prototype.BrowserFeatures.ElementExtensions = !0));
Element.extend = (function () {
  if (Prototype.BrowserFeatures.SpecificElementExtensions) return Prototype.K;
  var a = {},
    b = Element.Methods.ByTag,
    c = Object.extend(
      function (c) {
        if (!c || c._extendedByPrototype || 1 != c.nodeType || c == window)
          return c;
        var e = Object.clone(a),
          f = c.tagName.toUpperCase(),
          g;
        b[f] && Object.extend(e, b[f]);
        for (g in e)
          (f = e[g]), !Object.isFunction(f) || g in c || (c[g] = f.methodize());
        c._extendedByPrototype = Prototype.emptyFunction;
        return c;
      },
      {
        refresh: function () {
          Prototype.BrowserFeatures.ElementExtensions ||
            (Object.extend(a, Element.Methods),
            Object.extend(a, Element.Methods.Simulated));
        },
      }
    );
  c.refresh();
  return c;
})();
Element.hasAttribute = function (a, b) {
  return a.hasAttribute
    ? a.hasAttribute(b)
    : Element.Methods.Simulated.hasAttribute(a, b);
};
Element.addMethods = function (a) {
  function b(b) {
    b = b.toUpperCase();
    Element.Methods.ByTag[b] || (Element.Methods.ByTag[b] = {});
    Object.extend(Element.Methods.ByTag[b], a);
  }
  function c(a, b, c) {
    c = c || !1;
    for (var d in a) {
      var e = a[d];
      Object.isFunction(e) && ((c && d in b) || (b[d] = e.methodize()));
    }
  }
  function d(a) {
    var b,
      c = {
        OPTGROUP: "OptGroup",
        TEXTAREA: "TextArea",
        P: "Paragraph",
        FIELDSET: "FieldSet",
        UL: "UList",
        OL: "OList",
        DL: "DList",
        DIR: "Directory",
        H1: "Heading",
        H2: "Heading",
        H3: "Heading",
        H4: "Heading",
        H5: "Heading",
        H6: "Heading",
        Q: "Quote",
        INS: "Mod",
        DEL: "Mod",
        A: "Anchor",
        IMG: "Image",
        CAPTION: "TableCaption",
        COL: "TableCol",
        COLGROUP: "TableCol",
        THEAD: "TableSection",
        TFOOT: "TableSection",
        TBODY: "TableSection",
        TR: "TableRow",
        TH: "TableCell",
        TD: "TableCell",
        FRAMESET: "FrameSet",
        IFRAME: "IFrame",
      };
    c[a] && (b = "HTML" + c[a] + "Element");
    if (window[b]) return window[b];
    b = "HTML" + a + "Element";
    if (window[b]) return window[b];
    b = "HTML" + a.capitalize() + "Element";
    if (window[b]) return window[b];
    window[b] = {};
    window[b].prototype = document.createElement(a).__proto__;
    return window[b];
  }
  var e = Prototype.BrowserFeatures,
    f = Element.Methods.ByTag;
  a ||
    (Object.extend(Form, Form.Methods),
    Object.extend(Form.Element, Form.Element.Methods),
    Object.extend(Element.Methods.ByTag, {
      FORM: Object.clone(Form.Methods),
      INPUT: Object.clone(Form.Element.Methods),
      SELECT: Object.clone(Form.Element.Methods),
      TEXTAREA: Object.clone(Form.Element.Methods),
    }));
  if (2 == arguments.length) {
    var g = a;
    a = arguments[1];
  }
  g
    ? Object.isArray(g)
      ? g.each(b)
      : b(g)
    : Object.extend(Element.Methods, a || {});
  e.ElementExtensions &&
    (c(Element.Methods, HTMLElement.prototype),
    c(Element.Methods.Simulated, HTMLElement.prototype, !0));
  if (e.SpecificElementExtensions)
    for (var h in Element.Methods.ByTag)
      (e = d(h)), Object.isUndefined(e) || c(f[h], e.prototype);
  Object.extend(Element, Element.Methods);
  delete Element.ByTag;
  Element.extend.refresh && Element.extend.refresh();
  Element.cache = {};
};
document.viewport = {
  getDimensions: function () {
    var a = {},
      b = Prototype.Browser;
    $w("width height").each(function (c) {
      var d = c.capitalize();
      b.WebKit && !document.evaluate
        ? (a[c] = self["inner" + d])
        : b.Opera && 9.5 > parseFloat(window.opera.version())
        ? (a[c] = document.body["client" + d])
        : (a[c] = document.documentElement["client" + d]);
    });
    return a;
  },
  getWidth: function () {
    return this.getDimensions().width;
  },
  getHeight: function () {
    return this.getDimensions().height;
  },
  getScrollOffsets: function () {
    return Element._returnOffset(
      window.pageXOffset ||
        document.documentElement.scrollLeft ||
        document.body.scrollLeft,
      window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
    );
  },
};
var Selector = Class.create({
  initialize: function (a) {
    this.expression = a.strip();
    this.shouldUseSelectorsAPI()
      ? (this.mode = "selectorsAPI")
      : this.shouldUseXPath()
      ? ((this.mode = "xpath"), this.compileXPathMatcher())
      : ((this.mode = "normal"), this.compileMatcher());
  },
  shouldUseXPath: function () {
    if (!Prototype.BrowserFeatures.XPath) return !1;
    var a = this.expression;
    return (Prototype.Browser.WebKit &&
      (a.include("-of-type") || a.include(":empty"))) ||
      /(\[[\w-]*?:|:checked)/.test(a)
      ? !1
      : !0;
  },
  shouldUseSelectorsAPI: function () {
    if (!Prototype.BrowserFeatures.SelectorsAPI) return !1;
    Selector._div || (Selector._div = new Element("div"));
    try {
      Selector._div.querySelector(this.expression);
    } catch (a) {
      return !1;
    }
    return !0;
  },
  compileMatcher: function () {
    var a = this.expression,
      b = Selector.patterns,
      c = Selector.criteria,
      d,
      e;
    if (Selector._cache[a]) this.matcher = Selector._cache[a];
    else {
      for (
        this.matcher = [
          "this.matcher = function(root) {",
          "var r = root, h = Selector.handlers, c = false, n;",
        ];
        a && d != a && /\S/.test(a);

      ) {
        d = a;
        for (var f in b)
          if (((e = b[f]), (e = a.match(e)))) {
            this.matcher.push(
              Object.isFunction(c[f]) ? c[f](e) : new Template(c[f]).evaluate(e)
            );
            a = a.replace(e[0], "");
            break;
          }
      }
      this.matcher.push("return h.unique(n);\n}");
      eval(this.matcher.join("\n"));
      Selector._cache[this.expression] = this.matcher;
    }
  },
  compileXPathMatcher: function () {
    var a = this.expression,
      b = Selector.patterns,
      c = Selector.xpath,
      d,
      e;
    if (Selector._cache[a]) this.xpath = Selector._cache[a];
    else {
      for (this.matcher = [".//*"]; a && d != a && /\S/.test(a); ) {
        d = a;
        for (var f in b)
          if ((e = a.match(b[f]))) {
            this.matcher.push(
              Object.isFunction(c[f]) ? c[f](e) : new Template(c[f]).evaluate(e)
            );
            a = a.replace(e[0], "");
            break;
          }
      }
      this.xpath = this.matcher.join("");
      Selector._cache[this.expression] = this.xpath;
    }
  },
  findElements: function (a) {
    a = a || document;
    var b = this.expression;
    switch (this.mode) {
      case "selectorsAPI":
        if (a !== document)
          var c = a.id,
            b = "#" + $(a).identify() + " " + b;
        b = $A(a.querySelectorAll(b)).map(Element.extend);
        a.id = c;
        return b;
      case "xpath":
        return document._getElementsByXPath(this.xpath, a);
      default:
        return this.matcher(a);
    }
  },
  match: function (a) {
    this.tokens = [];
    for (
      var b = this.expression,
        c = Selector.patterns,
        d = Selector.assertions,
        e,
        f;
      b && e !== b && /\S/.test(b);

    ) {
      e = b;
      for (var g in c)
        if (((f = c[g]), (f = b.match(f))))
          if (d[g])
            this.tokens.push([g, Object.clone(f)]), (b = b.replace(f[0], ""));
          else return this.findElements(document).include(a);
    }
    b = !0;
    for (g = 0; (d = this.tokens[g]); g++)
      if (((c = d[0]), (d = d[1]), !Selector.assertions[c](a, d))) {
        b = !1;
        break;
      }
    return b;
  },
  toString: function () {
    return this.expression;
  },
  inspect: function () {
    return "#<Selector:" + this.expression.inspect() + ">";
  },
});
Object.extend(Selector, {
  _cache: {},
  xpath: {
    descendant: "//*",
    child: "/*",
    adjacent: "/following-sibling::*[1]",
    laterSibling: "/following-sibling::*",
    tagName: function (a) {
      return "*" == a[1]
        ? ""
        : "[local-name()='" +
            a[1].toLowerCase() +
            "' or local-name()='" +
            a[1].toUpperCase() +
            "']";
    },
    className: "[contains(concat(' ', @class, ' '), ' #{1} ')]",
    id: "[@id='#{1}']",
    attrPresence: function (a) {
      a[1] = a[1].toLowerCase();
      return new Template("[@#{1}]").evaluate(a);
    },
    attr: function (a) {
      a[1] = a[1].toLowerCase();
      a[3] = a[5] || a[6];
      return new Template(Selector.xpath.operators[a[2]]).evaluate(a);
    },
    pseudo: function (a) {
      var b = Selector.xpath.pseudos[a[1]];
      return b
        ? Object.isFunction(b)
          ? b(a)
          : new Template(Selector.xpath.pseudos[a[1]]).evaluate(a)
        : "";
    },
    operators: {
      "=": "[@#{1}='#{3}']",
      "!=": "[@#{1}!='#{3}']",
      "^=": "[starts-with(@#{1}, '#{3}')]",
      "$=":
        "[substring(@#{1}, (string-length(@#{1}) - string-length('#{3}') + 1))='#{3}']",
      "*=": "[contains(@#{1}, '#{3}')]",
      "~=": "[contains(concat(' ', @#{1}, ' '), ' #{3} ')]",
      "|=": "[contains(concat('-', @#{1}, '-'), '-#{3}-')]",
    },
    pseudos: {
      "first-child": "[not(preceding-sibling::*)]",
      "last-child": "[not(following-sibling::*)]",
      "only-child": "[not(preceding-sibling::* or following-sibling::*)]",
      empty: "[count(*) = 0 and (count(text()) = 0)]",
      checked: "[@checked]",
      disabled: "[(@disabled) and (@type!='hidden')]",
      enabled: "[not(@disabled) and (@type!='hidden')]",
      not: function (a) {
        for (
          var b = a[6], c = Selector.patterns, d = Selector.xpath, e, f, g = [];
          b && e != b && /\S/.test(b);

        ) {
          e = b;
          for (var h in c)
            if ((a = b.match(c[h]))) {
              f = Object.isFunction(d[h])
                ? d[h](a)
                : new Template(d[h]).evaluate(a);
              g.push("(" + f.substring(1, f.length - 1) + ")");
              b = b.replace(a[0], "");
              break;
            }
        }
        return "[not(" + g.join(" and ") + ")]";
      },
      "nth-child": function (a) {
        return Selector.xpath.pseudos.nth(
          "(count(./preceding-sibling::*) + 1) ",
          a
        );
      },
      "nth-last-child": function (a) {
        return Selector.xpath.pseudos.nth(
          "(count(./following-sibling::*) + 1) ",
          a
        );
      },
      "nth-of-type": function (a) {
        return Selector.xpath.pseudos.nth("position() ", a);
      },
      "nth-last-of-type": function (a) {
        return Selector.xpath.pseudos.nth("(last() + 1 - position()) ", a);
      },
      "first-of-type": function (a) {
        a[6] = "1";
        return Selector.xpath.pseudos["nth-of-type"](a);
      },
      "last-of-type": function (a) {
        a[6] = "1";
        return Selector.xpath.pseudos["nth-last-of-type"](a);
      },
      "only-of-type": function (a) {
        var b = Selector.xpath.pseudos;
        return b["first-of-type"](a) + b["last-of-type"](a);
      },
      nth: function (a, b) {
        var c,
          d = b[6];
        "even" == d && (d = "2n+0");
        "odd" == d && (d = "2n+1");
        if ((c = d.match(/^(\d+)$/))) return "[" + a + "= " + c[1] + "]";
        if ((c = d.match(/^(-?\d*)?n(([+-])(\d+))?/)))
          return (
            "-" == c[1] && (c[1] = -1),
            (d = c[1] ? Number(c[1]) : 1),
            (c = c[2] ? Number(c[2]) : 0),
            new Template(
              "[((#{fragment} - #{b}) mod #{a} = 0) and ((#{fragment} - #{b}) div #{a} >= 0)]"
            ).evaluate({ fragment: a, a: d, b: c })
          );
      },
    },
  },
  criteria: {
    tagName: 'n = h.tagName(n, r, "#{1}", c);      c = false;',
    className: 'n = h.className(n, r, "#{1}", c);    c = false;',
    id: 'n = h.id(n, r, "#{1}", c);           c = false;',
    attrPresence: 'n = h.attrPresence(n, r, "#{1}", c); c = false;',
    attr: function (a) {
      a[3] = a[5] || a[6];
      return new Template(
        'n = h.attr(n, r, "#{1}", "#{3}", "#{2}", c); c = false;'
      ).evaluate(a);
    },
    pseudo: function (a) {
      a[6] && (a[6] = a[6].replace(/"/g, '\\"'));
      return new Template(
        'n = h.pseudo(n, "#{1}", "#{6}", r, c); c = false;'
      ).evaluate(a);
    },
    descendant: 'c = "descendant";',
    child: 'c = "child";',
    adjacent: 'c = "adjacent";',
    laterSibling: 'c = "laterSibling";',
  },
  patterns: {
    laterSibling: /^\s*~\s*/,
    child: /^\s*>\s*/,
    adjacent: /^\s*\+\s*/,
    descendant: /^\s/,
    tagName: /^\s*(\*|[\w\-]+)(\b|$)?/,
    id: /^#([\w\-\*]+)(\b|$)/,
    className: /^\.([\w\-\*]+)(\b|$)/,
    pseudo: /^:((first|last|nth|nth-last|only)(-child|-of-type)|empty|checked|(en|dis)abled|not)(\((.*?)\))?(\b|$|(?=\s|[:+~>]))/,
    attrPresence: /^\[((?:[\w]+:)?[\w]+)\]/,
    attr: /\[((?:[\w-]*:)?[\w-]+)\s*(?:([!^$*~|]?=)\s*((['"])([^\4]*?)\4|([^'"][^\]]*?)))?\]/,
  },
  assertions: {
    tagName: function (a, b) {
      return b[1].toUpperCase() == a.tagName.toUpperCase();
    },
    className: function (a, b) {
      return Element.hasClassName(a, b[1]);
    },
    id: function (a, b) {
      return a.id === b[1];
    },
    attrPresence: function (a, b) {
      return Element.hasAttribute(a, b[1]);
    },
    attr: function (a, b) {
      var c = Element.readAttribute(a, b[1]);
      return c && Selector.operators[b[2]](c, b[5] || b[6]);
    },
  },
  handlers: {
    concat: function (a, b) {
      for (var c = 0, d; (d = b[c]); c++) a.push(d);
      return a;
    },
    mark: function (a) {
      for (var b = Prototype.emptyFunction, c = 0, d; (d = a[c]); c++)
        d._countedByPrototype = b;
      return a;
    },
    unmark: function (a) {
      for (var b = 0, c; (c = a[b]); b++) c._countedByPrototype = void 0;
      return a;
    },
    index: function (a, b, c) {
      a._countedByPrototype = Prototype.emptyFunction;
      if (b) {
        a = a.childNodes;
        b = a.length - 1;
        for (var d = 1; 0 <= b; b--) {
          var e = a[b];
          1 != e.nodeType ||
            (c && !e._countedByPrototype) ||
            (e.nodeIndex = d++);
        }
      } else
        for (b = 0, d = 1, a = a.childNodes; (e = a[b]); b++)
          1 != e.nodeType ||
            (c && !e._countedByPrototype) ||
            (e.nodeIndex = d++);
    },
    unique: function (a) {
      if (0 == a.length) return a;
      for (var b = [], c, d = 0, e = a.length; d < e; d++)
        (c = a[d])._countedByPrototype ||
          ((c._countedByPrototype = Prototype.emptyFunction),
          b.push(Element.extend(c)));
      return Selector.handlers.unmark(b);
    },
    descendant: function (a) {
      for (var b = Selector.handlers, c = 0, d = [], e; (e = a[c]); c++)
        b.concat(d, e.getElementsByTagName("*"));
      return d;
    },
    child: function (a) {
      for (var b = 0, c = [], d; (d = a[b]); b++)
        for (var e = 0, f; (f = d.childNodes[e]); e++)
          1 == f.nodeType && "!" != f.tagName && c.push(f);
      return c;
    },
    adjacent: function (a) {
      for (var b = 0, c = [], d; (d = a[b]); b++)
        (d = this.nextElementSibling(d)) && c.push(d);
      return c;
    },
    laterSibling: function (a) {
      for (var b = Selector.handlers, c = 0, d = [], e; (e = a[c]); c++)
        b.concat(d, Element.nextSiblings(e));
      return d;
    },
    nextElementSibling: function (a) {
      for (; (a = a.nextSibling); ) if (1 == a.nodeType) return a;
      return null;
    },
    previousElementSibling: function (a) {
      for (; (a = a.previousSibling); ) if (1 == a.nodeType) return a;
      return null;
    },
    tagName: function (a, b, c, d) {
      var e = c.toUpperCase(),
        f = [],
        g = Selector.handlers;
      if (a) {
        if (d) {
          if ("descendant" == d) {
            for (b = 0; (d = a[b]); b++) g.concat(f, d.getElementsByTagName(c));
            return f;
          }
          a = this[d](a);
          if ("*" == c) return a;
        }
        for (b = 0; (d = a[b]); b++) d.tagName.toUpperCase() === e && f.push(d);
        return f;
      }
      return b.getElementsByTagName(c);
    },
    id: function (a, b, c, d) {
      c = $(c);
      var e = Selector.handlers;
      if (!c) return [];
      if (!a && b == document) return [c];
      if (a) {
        if (d)
          if ("child" == d)
            for (b = 0; (d = a[b]); b++) {
              if (c.parentNode == d) return [c];
            }
          else if ("descendant" == d)
            for (b = 0; (d = a[b]); b++) {
              if (Element.descendantOf(c, d)) return [c];
            }
          else if ("adjacent" == d)
            for (b = 0; (d = a[b]); b++) {
              if (Selector.handlers.previousElementSibling(c) == d) return [c];
            }
          else a = e[d](a);
        for (b = 0; (d = a[b]); b++) if (d == c) return [c];
        return [];
      }
      return c && Element.descendantOf(c, b) ? [c] : [];
    },
    className: function (a, b, c, d) {
      a && d && (a = this[d](a));
      return Selector.handlers.byClassName(a, b, c);
    },
    byClassName: function (a, b, c) {
      a || (a = Selector.handlers.descendant([b]));
      b = " " + c + " ";
      for (var d = 0, e = [], f, g; (f = a[d]); d++)
        (g = f.className),
          0 != g.length && (g == c || (" " + g + " ").include(b)) && e.push(f);
      return e;
    },
    attrPresence: function (a, b, c, d) {
      a || (a = b.getElementsByTagName("*"));
      a && d && (a = this[d](a));
      b = [];
      d = 0;
      for (var e; (e = a[d]); d++) Element.hasAttribute(e, c) && b.push(e);
      return b;
    },
    attr: function (a, b, c, d, e, f) {
      a || (a = b.getElementsByTagName("*"));
      a && f && (a = this[f](a));
      b = Selector.operators[e];
      e = [];
      f = 0;
      for (var g; (g = a[f]); f++) {
        var h = Element.readAttribute(g, c);
        null !== h && b(h, d) && e.push(g);
      }
      return e;
    },
    pseudo: function (a, b, c, d, e) {
      a && e && (a = this[e](a));
      a || (a = d.getElementsByTagName("*"));
      return Selector.pseudos[b](a, c, d);
    },
  },
  pseudos: {
    "first-child": function (a, b, c) {
      b = 0;
      c = [];
      for (var d; (d = a[b]); b++)
        Selector.handlers.previousElementSibling(d) || c.push(d);
      return c;
    },
    "last-child": function (a, b, c) {
      b = 0;
      c = [];
      for (var d; (d = a[b]); b++)
        Selector.handlers.nextElementSibling(d) || c.push(d);
      return c;
    },
    "only-child": function (a, b, c) {
      b = Selector.handlers;
      c = 0;
      for (var d = [], e; (e = a[c]); c++)
        b.previousElementSibling(e) || b.nextElementSibling(e) || d.push(e);
      return d;
    },
    "nth-child": function (a, b, c) {
      return Selector.pseudos.nth(a, b, c);
    },
    "nth-last-child": function (a, b, c) {
      return Selector.pseudos.nth(a, b, c, !0);
    },
    "nth-of-type": function (a, b, c) {
      return Selector.pseudos.nth(a, b, c, !1, !0);
    },
    "nth-last-of-type": function (a, b, c) {
      return Selector.pseudos.nth(a, b, c, !0, !0);
    },
    "first-of-type": function (a, b, c) {
      return Selector.pseudos.nth(a, "1", c, !1, !0);
    },
    "last-of-type": function (a, b, c) {
      return Selector.pseudos.nth(a, "1", c, !0, !0);
    },
    "only-of-type": function (a, b, c) {
      var d = Selector.pseudos;
      return d["last-of-type"](d["first-of-type"](a, b, c), b, c);
    },
    getIndices: function (a, b, c) {
      return 0 == a
        ? 0 < b
          ? [b]
          : []
        : $R(1, c).inject([], function (c, e) {
            0 == (e - b) % a && 0 <= (e - b) / a && c.push(e);
            return c;
          });
    },
    nth: function (a, b, c, d, e) {
      if (0 == a.length) return [];
      "even" == b && (b = "2n+0");
      "odd" == b && (b = "2n+1");
      c = Selector.handlers;
      var f = [],
        g = [],
        h;
      c.mark(a);
      h = 0;
      for (var k; (k = a[h]); h++)
        k.parentNode._countedByPrototype ||
          (c.index(k.parentNode, d, e), g.push(k.parentNode));
      if (b.match(/^\d+$/))
        for (b = Number(b), h = 0; (k = a[h]); h++)
          k.nodeIndex == b && f.push(k);
      else if ((h = b.match(/^(-?\d*)?n(([+-])(\d+))?/)))
        for (
          "-" == h[1] && (h[1] = -1),
            b = Selector.pseudos.getIndices(
              h[1] ? Number(h[1]) : 1,
              h[2] ? Number(h[2]) : 0,
              a.length
            ),
            h = 0,
            d = b.length;
          (k = a[h]);
          h++
        )
          for (e = 0; e < d; e++) k.nodeIndex == b[e] && f.push(k);
      c.unmark(a);
      c.unmark(g);
      return f;
    },
    empty: function (a, b, c) {
      b = 0;
      c = [];
      for (var d; (d = a[b]); b++)
        "!" == d.tagName || d.firstChild || c.push(d);
      return c;
    },
    not: function (a, b, c) {
      var d = Selector.handlers;
      b = new Selector(b).findElements(c);
      d.mark(b);
      c = 0;
      for (var e = [], f; (f = a[c]); c++) f._countedByPrototype || e.push(f);
      d.unmark(b);
      return e;
    },
    enabled: function (a, b, c) {
      b = 0;
      c = [];
      for (var d; (d = a[b]); b++)
        d.disabled || (d.type && "hidden" === d.type) || c.push(d);
      return c;
    },
    disabled: function (a, b, c) {
      b = 0;
      c = [];
      for (var d; (d = a[b]); b++) d.disabled && c.push(d);
      return c;
    },
    checked: function (a, b, c) {
      b = 0;
      c = [];
      for (var d; (d = a[b]); b++) d.checked && c.push(d);
      return c;
    },
  },
  operators: {
    "=": function (a, b) {
      return a == b;
    },
    "!=": function (a, b) {
      return a != b;
    },
    "^=": function (a, b) {
      return a == b || (a && a.startsWith(b));
    },
    "$=": function (a, b) {
      return a == b || (a && a.endsWith(b));
    },
    "*=": function (a, b) {
      return a == b || (a && a.include(b));
    },
    "$=": function (a, b) {
      return a.endsWith(b);
    },
    "*=": function (a, b) {
      return a.include(b);
    },
    "~=": function (a, b) {
      return (" " + a + " ").include(" " + b + " ");
    },
    "|=": function (a, b) {
      return ("-" + (a || "").toUpperCase() + "-").include(
        "-" + (b || "").toUpperCase() + "-"
      );
    },
  },
  split: function (a) {
    var b = [];
    a.scan(/(([\w#:.~>+()\s-]+|\*|\[.*?\])+)\s*(,|$)/, function (a) {
      b.push(a[1].strip());
    });
    return b;
  },
  matchElements: function (a, b) {
    var c = $$(b),
      d = Selector.handlers;
    d.mark(c);
    for (var e = 0, f = [], g; (g = a[e]); e++)
      g._countedByPrototype && f.push(g);
    d.unmark(c);
    return f;
  },
  findElement: function (a, b, c) {
    Object.isNumber(b) && ((c = b), (b = !1));
    return Selector.matchElements(a, b || "*")[c || 0];
  },
  findChildElements: function (a, b) {
    b = Selector.split(b.join(","));
    for (var c = [], d = Selector.handlers, e = 0, f = b.length, g; e < f; e++)
      (g = new Selector(b[e].strip())), d.concat(c, g.findElements(a));
    return 1 < f ? d.unique(c) : c;
  },
});
Prototype.Browser.IE &&
  Object.extend(Selector.handlers, {
    concat: function (a, b) {
      for (var c = 0, d; (d = b[c]); c++) "!" !== d.tagName && a.push(d);
      return a;
    },
    unmark: function (a) {
      for (var b = 0, c; (c = a[b]); b++)
        c.removeAttribute("_countedByPrototype");
      return a;
    },
  });
function $$() {
  return Selector.findChildElements(document, $A(arguments));
}
var Form = {
  reset: function (a) {
    $(a).reset();
    return a;
  },
  serializeElements: function (a, b) {
    "object" != typeof b
      ? (b = { hash: !!b })
      : Object.isUndefined(b.hash) && (b.hash = !0);
    var c,
      d,
      e = !1,
      f = b.submit,
      g = a.inject({}, function (a, b) {
        !b.disabled &&
          b.name &&
          ((c = b.name),
          (d = $(b).getValue()),
          null == d ||
            "file" == b.type ||
            ("submit" == b.type &&
              (e || !1 === f || (f && c != f) || !(e = !0))) ||
            (c in a
              ? (Object.isArray(a[c]) || (a[c] = [a[c]]), a[c].push(d))
              : (a[c] = d)));
        return a;
      });
    return b.hash ? g : Object.toQueryString(g);
  },
  Methods: {
    serialize: function (a, b) {
      return Form.serializeElements(Form.getElements(a), b);
    },
    getElements: function (a) {
      return $A($(a).getElementsByTagName("*")).inject([], function (a, c) {
        Form.Element.Serializers[c.tagName.toLowerCase()] &&
          a.push(Element.extend(c));
        return a;
      });
    },
    getInputs: function (a, b, c) {
      a = $(a);
      a = a.getElementsByTagName("input");
      if (!b && !c) return $A(a).map(Element.extend);
      for (var d = 0, e = [], f = a.length; d < f; d++) {
        var g = a[d];
        (b && g.type != b) || (c && g.name != c) || e.push(Element.extend(g));
      }
      return e;
    },
    disable: function (a) {
      a = $(a);
      Form.getElements(a).invoke("disable");
      return a;
    },
    enable: function (a) {
      a = $(a);
      Form.getElements(a).invoke("enable");
      return a;
    },
    findFirstElement: function (a) {
      a = $(a)
        .getElements()
        .findAll(function (a) {
          return "hidden" != a.type && !a.disabled;
        });
      var b = a
        .findAll(function (a) {
          return a.hasAttribute("tabIndex") && 0 <= a.tabIndex;
        })
        .sortBy(function (a) {
          return a.tabIndex;
        })
        .first();
      return b
        ? b
        : a.find(function (a) {
            return ["input", "select", "textarea"].include(
              a.tagName.toLowerCase()
            );
          });
    },
    focusFirstElement: function (a) {
      a = $(a);
      a.findFirstElement().activate();
      return a;
    },
    request: function (a, b) {
      a = $(a);
      b = Object.clone(b || {});
      var c = b.parameters,
        d = a.readAttribute("action") || "";
      d.blank() && (d = window.location.href);
      b.parameters = a.serialize(!0);
      c &&
        (Object.isString(c) && (c = c.toQueryParams()),
        Object.extend(b.parameters, c));
      a.hasAttribute("method") && !b.method && (b.method = a.method);
      return new Ajax.Request(d, b);
    },
  },
  Element: {
    focus: function (a) {
      $(a).focus();
      return a;
    },
    select: function (a) {
      $(a).select();
      return a;
    },
  },
};
Form.Element.Methods = {
  serialize: function (a) {
    a = $(a);
    if (!a.disabled && a.name) {
      var b = a.getValue();
      if (void 0 != b) {
        var c = {};
        c[a.name] = b;
        return Object.toQueryString(c);
      }
    }
    return "";
  },
  getValue: function (a) {
    a = $(a);
    var b = a.tagName.toLowerCase();
    return Form.Element.Serializers[b](a);
  },
  setValue: function (a, b) {
    a = $(a);
    var c = a.tagName.toLowerCase();
    Form.Element.Serializers[c](a, b);
    return a;
  },
  clear: function (a) {
    $(a).value = "";
    return a;
  },
  present: function (a) {
    return "" != $(a).value;
  },
  activate: function (a) {
    a = $(a);
    try {
      a.focus(),
        !a.select ||
          ("input" == a.tagName.toLowerCase() &&
            ["button", "reset", "submit"].include(a.type)) ||
          a.select();
    } catch (b) {}
    return a;
  },
  disable: function (a) {
    a = $(a);
    a.disabled = !0;
    return a;
  },
  enable: function (a) {
    a = $(a);
    a.disabled = !1;
    return a;
  },
};
var Field = Form.Element,
  $F = Form.Element.Methods.getValue;
Form.Element.Serializers = {
  input: function (a, b) {
    switch (a.type.toLowerCase()) {
      case "checkbox":
      case "radio":
        return Form.Element.Serializers.inputSelector(a, b);
      default:
        return Form.Element.Serializers.textarea(a, b);
    }
  },
  inputSelector: function (a, b) {
    if (Object.isUndefined(b)) return a.checked ? a.value : null;
    a.checked = !!b;
  },
  textarea: function (a, b) {
    if (Object.isUndefined(b)) return a.value;
    a.value = b;
  },
  select: function (a, b) {
    if (Object.isUndefined(b))
      return this["select-one" == a.type ? "selectOne" : "selectMany"](a);
    for (var c, d, e = !Object.isArray(b), f = 0, g = a.length; f < g; f++)
      if (((c = a.options[f]), (d = this.optionValue(c)), e)) {
        if (d == b) {
          c.selected = !0;
          break;
        }
      } else c.selected = b.include(d);
  },
  selectOne: function (a) {
    var b = a.selectedIndex;
    return 0 <= b ? this.optionValue(a.options[b]) : null;
  },
  selectMany: function (a) {
    var b,
      c = a.length;
    if (!c) return null;
    var d = 0;
    for (b = []; d < c; d++) {
      var e = a.options[d];
      e.selected && b.push(this.optionValue(e));
    }
    return b;
  },
  optionValue: function (a) {
    return Element.extend(a).hasAttribute("value") ? a.value : a.text;
  },
};
Abstract.TimedObserver = Class.create(PeriodicalExecuter, {
  initialize: function ($super, b, c, d) {
    $super(d, c);
    this.element = $(b);
    this.lastValue = this.getValue();
  },
  execute: function () {
    var a = this.getValue();
    if (
      Object.isString(this.lastValue) && Object.isString(a)
        ? this.lastValue != a
        : String(this.lastValue) != String(a)
    )
      this.callback(this.element, a), (this.lastValue = a);
  },
});
Form.Element.Observer = Class.create(Abstract.TimedObserver, {
  getValue: function () {
    return Form.Element.getValue(this.element);
  },
});
Form.Observer = Class.create(Abstract.TimedObserver, {
  getValue: function () {
    return Form.serialize(this.element);
  },
});
Abstract.EventObserver = Class.create({
  initialize: function (a, b) {
    this.element = $(a);
    this.callback = b;
    this.lastValue = this.getValue();
    "form" == this.element.tagName.toLowerCase()
      ? this.registerFormCallbacks()
      : this.registerCallback(this.element);
  },
  onElementEvent: function () {
    var a = this.getValue();
    this.lastValue != a &&
      (this.callback(this.element, a), (this.lastValue = a));
  },
  registerFormCallbacks: function () {
    Form.getElements(this.element).each(this.registerCallback, this);
  },
  registerCallback: function (a) {
    if (a.type)
      switch (a.type.toLowerCase()) {
        case "checkbox":
        case "radio":
          Event.observe(a, "click", this.onElementEvent.bind(this));
          break;
        default:
          Event.observe(a, "change", this.onElementEvent.bind(this));
      }
  },
});
Form.Element.EventObserver = Class.create(Abstract.EventObserver, {
  getValue: function () {
    return Form.Element.getValue(this.element);
  },
});
Form.EventObserver = Class.create(Abstract.EventObserver, {
  getValue: function () {
    return Form.serialize(this.element);
  },
});
if (!window.Event) var Event = {};
Object.extend(Event, {
  KEY_BACKSPACE: 8,
  KEY_TAB: 9,
  KEY_RETURN: 13,
  KEY_ESC: 27,
  KEY_LEFT: 37,
  KEY_UP: 38,
  KEY_RIGHT: 39,
  KEY_DOWN: 40,
  KEY_DELETE: 46,
  KEY_HOME: 36,
  KEY_END: 35,
  KEY_PAGEUP: 33,
  KEY_PAGEDOWN: 34,
  KEY_INSERT: 45,
  cache: {},
  relatedTarget: function (a) {
    switch (a.type) {
      case "mouseover":
        a = a.fromElement;
        break;
      case "mouseout":
        a = a.toElement;
        break;
      default:
        return null;
    }
    return Element.extend(a);
  },
});
Event.Methods = (function () {
  var a;
  if (Prototype.Browser.IE) {
    var b = { 0: 1, 1: 4, 2: 2 };
    a = function (a, d) {
      return a.button == b[d];
    };
  } else
    a = Prototype.Browser.WebKit
      ? function (a, b) {
          switch (b) {
            case 0:
              return 1 == a.which && !a.metaKey;
            case 1:
              return 1 == a.which && a.metaKey;
            default:
              return !1;
          }
        }
      : function (a, b) {
          return a.which ? a.which === b + 1 : a.button === b;
        };
  return {
    isLeftClick: function (b) {
      return a(b, 0);
    },
    isMiddleClick: function (b) {
      return a(b, 1);
    },
    isRightClick: function (b) {
      return a(b, 2);
    },
    element: function (a) {
      a = Event.extend(a);
      var b = a.target,
        e = a.type;
      (a = a.currentTarget) &&
        a.tagName &&
        ("load" === e ||
          "error" === e ||
          ("click" === e &&
            "input" === a.tagName.toLowerCase() &&
            "radio" === a.type)) &&
        (b = a);
      b.nodeType == Node.TEXT_NODE && (b = b.parentNode);
      return Element.extend(b);
    },
    findElement: function (a, b) {
      var e = Event.element(a);
      if (!b) return e;
      e = [e].concat(e.ancestors());
      return Selector.findElement(e, b, 0);
    },
    pointer: function (a) {
      var b = document.documentElement,
        e = document.body || { scrollLeft: 0, scrollTop: 0 };
      return {
        x:
          a.pageX ||
          a.clientX + (b.scrollLeft || e.scrollLeft) - (b.clientLeft || 0),
        y:
          a.pageY ||
          a.clientY + (b.scrollTop || e.scrollTop) - (b.clientTop || 0),
      };
    },
    pointerX: function (a) {
      return Event.pointer(a).x;
    },
    pointerY: function (a) {
      return Event.pointer(a).y;
    },
    stop: function (a) {
      Event.extend(a);
      a.preventDefault();
      a.stopPropagation();
      a.stopped = !0;
    },
  };
})();
Event.extend = (function () {
  var a = Object.keys(Event.Methods).inject({}, function (a, c) {
    a[c] = Event.Methods[c].methodize();
    return a;
  });
  if (Prototype.Browser.IE)
    return (
      Object.extend(a, {
        stopPropagation: function () {
          this.cancelBubble = !0;
        },
        preventDefault: function () {
          this.returnValue = !1;
        },
        inspect: function () {
          return "[object Event]";
        },
      }),
      function (b) {
        if (!b) return !1;
        if (b._extendedByPrototype) return b;
        b._extendedByPrototype = Prototype.emptyFunction;
        var c = Event.pointer(b);
        Object.extend(b, {
          target: b.srcElement,
          relatedTarget: Event.relatedTarget(b),
          pageX: c.x,
          pageY: c.y,
        });
        return Object.extend(b, a);
      }
    );
  Event.prototype =
    Event.prototype || document.createEvent("HTMLEvents").__proto__;
  Object.extend(Event.prototype, a);
  return Prototype.K;
})();
Object.extend(
  Event,
  (function () {
    function a(a) {
      if (a._prototypeEventID) return a._prototypeEventID[0];
      arguments.callee.id = arguments.callee.id || 1;
      return (a._prototypeEventID = [++arguments.callee.id]);
    }
    function b(a) {
      return a && a.include(":") ? "dataavailable" : a;
    }
    function c(a, b) {
      var c = (h[a] = h[a] || {});
      return (c[b] = c[b] || []);
    }
    function d(b, d, e) {
      var f = a(b),
        f = c(f, d);
      if (f.pluck("handler").include(e)) return !1;
      var g = function (a) {
        if (!Event || !Event.extend || (a.eventName && a.eventName != d))
          return !1;
        Event.extend(a);
        e.call(b, a);
      };
      g.handler = e;
      f.push(g);
      return g;
    }
    function e(a, b, d) {
      return c(a, b).find(function (a) {
        return a.handler == d;
      });
    }
    function f(a, b, c) {
      var d = (h[a] = h[a] || {});
      if (!d[b]) return !1;
      d[b] = d[b].without(e(a, b, c));
    }
    function g() {
      for (var a in h) for (var b in h[a]) h[a][b] = null;
    }
    var h = Event.cache;
    window.attachEvent && window.attachEvent("onunload", g);
    Prototype.Browser.WebKit &&
      window.addEventListener("unload", Prototype.emptyFunction, !1);
    return {
      observe: function (a, c, e) {
        a = $(a);
        var f = b(c);
        c = d(a, c, e);
        if (!c) return a;
        a.addEventListener
          ? a.addEventListener(f, c, !1)
          : a.attachEvent("on" + f, c);
        return a;
      },
      stopObserving: function (d, g, n) {
        d = $(d);
        var l = a(d),
          q = b(g);
        if (!n && g)
          return (
            c(l, g).each(function (a) {
              d.stopObserving(g, a.handler);
            }),
            d
          );
        if (!g)
          return (
            Object.keys((h[l] = h[l] || {})).each(function (a) {
              d.stopObserving(a);
            }),
            d
          );
        var p = e(l, g, n);
        if (!p) return d;
        d.removeEventListener
          ? d.removeEventListener(q, p, !1)
          : d.detachEvent("on" + q, p);
        f(l, g, n);
        return d;
      },
      fire: function (a, b, c) {
        a = $(a);
        "undefined" != typeof a[0] && (a = a[0]);
        a == document &&
          document.createEvent &&
          !a.dispatchEvent &&
          (a = document.documentElement);
        var d;
        document.createEvent
          ? ((d = document.createEvent("HTMLEvents")),
            d.initEvent("dataavailable", !0, !0))
          : ((d = document.createEventObject()),
            (d.eventType = "ondataavailable"));
        d.eventName = b;
        d.memo = c || {};
        document.createEvent
          ? a.dispatchEvent(d)
          : a.fireEvent && a.fireEvent(d.eventType, d);
        return Event.extend(d);
      },
    };
  })()
);
Object.extend(Event, Event.Methods);
Element.addMethods({
  fire: Event.fire,
  observe: Event.observe,
  stopObserving: Event.stopObserving,
});
Object.extend(document, {
  fire: Element.Methods.fire.methodize(),
  observe: Element.Methods.observe.methodize(),
  stopObserving: Element.Methods.stopObserving.methodize(),
  loaded: !1,
});
(function () {
  function a() {
    document.loaded ||
      (b && window.clearInterval(b),
      document.fire("dom:loaded"),
      (document.loaded = !0));
  }
  var b;
  document.addEventListener
    ? Prototype.Browser.WebKit
      ? ((b = window.setInterval(function () {
          /loaded|complete/.test(document.readyState) && a();
        }, 0)),
        Event.observe(window, "load", a))
      : document.addEventListener("DOMContentLoaded", a, !1)
    : (document.write(
        "<script id=__onDOMContentLoaded defer src=//:>\x3c/script>"
      ),
      ($("__onDOMContentLoaded").onreadystatechange = function () {
        "complete" == this.readyState &&
          ((this.onreadystatechange = null), a());
      }));
})();
Hash.toQueryString = Object.toQueryString;
var Toggle = { display: Element.toggle };
Element.Methods.childOf = Element.Methods.descendantOf;
var Insertion = {
    Before: function (a, b) {
      return Element.insert(a, { before: b });
    },
    Top: function (a, b) {
      return Element.insert(a, { top: b });
    },
    Bottom: function (a, b) {
      return Element.insert(a, { bottom: b });
    },
    After: function (a, b) {
      return Element.insert(a, { after: b });
    },
  },
  $continue = Error('"throw $continue" is deprecated, use "return" instead'),
  Position = {
    includeScrollOffsets: !1,
    prepare: function () {
      this.deltaX =
        window.pageXOffset ||
        document.documentElement.scrollLeft ||
        document.body.scrollLeft ||
        0;
      this.deltaY =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
    },
    within: function (a, b, c) {
      if (this.includeScrollOffsets)
        return this.withinIncludingScrolloffsets(a, b, c);
      this.xcomp = b;
      this.ycomp = c;
      this.offset = Element.cumulativeOffset(a);
      return (
        c >= this.offset[1] &&
        c < this.offset[1] + a.offsetHeight &&
        b >= this.offset[0] &&
        b < this.offset[0] + a.offsetWidth
      );
    },
    withinIncludingScrolloffsets: function (a, b, c) {
      var d = Element.cumulativeScrollOffset(a);
      this.xcomp = b + d[0] - this.deltaX;
      this.ycomp = c + d[1] - this.deltaY;
      this.offset = Element.cumulativeOffset(a);
      return (
        this.ycomp >= this.offset[1] &&
        this.ycomp < this.offset[1] + a.offsetHeight &&
        this.xcomp >= this.offset[0] &&
        this.xcomp < this.offset[0] + a.offsetWidth
      );
    },
    overlap: function (a, b) {
      if (!a) return 0;
      if ("vertical" == a)
        return (this.offset[1] + b.offsetHeight - this.ycomp) / b.offsetHeight;
      if ("horizontal" == a)
        return (this.offset[0] + b.offsetWidth - this.xcomp) / b.offsetWidth;
    },
    cumulativeOffset: Element.Methods.cumulativeOffset,
    positionedOffset: Element.Methods.positionedOffset,
    absolutize: function (a) {
      Position.prepare();
      return Element.absolutize(a);
    },
    relativize: function (a) {
      Position.prepare();
      return Element.relativize(a);
    },
    realOffset: Element.Methods.cumulativeScrollOffset,
    offsetParent: Element.Methods.getOffsetParent,
    page: Element.Methods.viewportOffset,
    clone: function (a, b, c) {
      c = c || {};
      return Element.clonePosition(b, a, c);
    },
  };
document.getElementsByClassName ||
  (document.getElementsByClassName = (function (a) {
    function b(a) {
      return a.blank()
        ? null
        : "[contains(concat(' ', @class, ' '), ' " + a + " ')]";
    }
    a.getElementsByClassName = Prototype.BrowserFeatures.XPath
      ? function (a, d) {
          d = d.toString().strip();
          var e = /\s/.test(d) ? $w(d).map(b).join("") : b(d);
          return e ? document._getElementsByXPath(".//*" + e, a) : [];
        }
      : function (a, b) {
          b = b.toString().strip();
          var e = [],
            f = /\s/.test(b) ? $w(b) : null;
          if (!f && !b) return e;
          var g = $(a).getElementsByTagName("*");
          b = " " + b + " ";
          for (var h = 0, k, m; (k = g[h]); h++)
            k.className &&
              (m = " " + k.className + " ") &&
              (m.include(b) ||
                (f &&
                  f.all(function (a) {
                    return !a.toString().blank() && m.include(" " + a + " ");
                  }))) &&
              e.push(Element.extend(k));
          return e;
        };
    return function (a, b) {
      return $(b || document.body).getElementsByClassName(a);
    };
  })(Element.Methods));
Element.ClassNames = Class.create();
Element.ClassNames.prototype = {
  initialize: function (a) {
    this.element = $(a);
  },
  _each: function (a) {
    this.element.className
      .split(/\s+/)
      .select(function (a) {
        return 0 < a.length;
      })
      ._each(a);
  },
  set: function (a) {
    this.element.className = a;
  },
  add: function (a) {
    this.include(a) || this.set($A(this).concat(a).join(" "));
  },
  remove: function (a) {
    this.include(a) && this.set($A(this).without(a).join(" "));
  },
  toString: function () {
    return $A(this).join(" ");
  },
};
Object.extend(Element.ClassNames.prototype, Enumerable);
Element.addMethods();

TLightBox = function (a, b, h, k, l) {
  var e = !0,
    c = null,
    f = lightBoxes.lightBoxes.length,
    g = 100,
    d = 50,
    m = !1,
    n = 1001 + f,
    p = k,
    q = l;
  "undefined" == typeof k && (p = !0);
  "undefined" != typeof b && (n = parseInt(b));
  "undefined" != typeof h && (d = parseInt(h));
  "undefined" == typeof l && (q = !1);
  lightBoxes.lightBoxes[f] = this;
  this.pAllHidden = function () {
    for (var a = 0; a < lightBoxes.lightBoxes.length; a++) {
      var b = lightBoxes.lightBoxes[a];
      if (b.pVisible() && b.pWithImage()) return !1;
    }
    return !0;
  };
  this.pAutoMove = function (a) {
    if ("undefined" == typeof a) return e;
    e = Boolean(a);
  };
  this.pDoFrame = function () {
    this.iframe &&
      ((this.iframe.style.left = c.offsetLeft + "px"),
      (this.iframe.style.width = c.offsetWidth + "px"),
      (this.iframe.style.height = c.offsetHeight + "px"),
      e
        ? positionElement(this.iframe, d)
        : (this.iframe.style.top = c.offsetTop + "px"));
  };
  this.pElement = function (a) {
    if ("undefined" == typeof a) return c;
    c = a;
  };
  this.pDisableIFrame = function () {
    return q;
  };
  this.pGetRef = function () {
    return "lightBoxes.lightBoxes[" + f + "]";
  };
  this.pIndex = function () {
    return f;
  };
  this.pLeft = function (a) {
    if ("undefined" == typeof a) return g;
    g = parseInt(a);
    c.style.left = g + "px";
    this.pDoFrame();
  };
  this.pName = function () {
    return a;
  };
  this.pSize = function () {
    return null == c ? null : new Size(c.offsetWidth, c.offsetHeight);
  };
  this.pTop = function (a) {
    if ("undefined" == typeof a) return d;
    d = parseInt(a);
    e ? positionElement(c, d) : (c.style.top = d + "px");
    this.pDoFrame();
  };
  this.pVisible = function (a) {
    if ("undefined" == typeof a) return m;
    m = a;
  };
  this.pWithImage = function () {
    return p;
  };
  this.pZIndex = function () {
    return n;
  };
  bodyLoaded && this.init();
};
TLightBox.prototype.autoMove = function (a) {
  return this.pAutoMove(a);
};
TLightBox.prototype.element = function () {
  this.pElement() || this.init();
  return this.pElement();
};
TLightBox.prototype.getHtml = function (a) {
  return this.pElement()
    ? getHtml(this.pElement(), a)
    : this.init()
    ? this.getHtml(a)
    : !1;
};
TLightBox.prototype.height = function (a) {
  if (this.pElement())
    if ("undefined" != typeof a)
      (this.pElement().style.height = parseInt(a) + "px"), this.pDoFrame();
    else return this.pElement().offsetHeight;
};
TLightBox.prototype.hide = function () {
  this.pElement()
    ? this.pVisible() &&
      (this.pVisible(!1),
      this.iframe && (this.iframe.style.display = "none"),
      (this.pElement().style.display = "none"),
      this.pAllHidden() && (Html.get("imgBack").style.display = "none"))
    : this.init() && this.hide();
};
TLightBox.prototype.init = function () {
  if (null == this.pElement()) {
    var a = Html.get(this.pName());
    return a
      ? (document.body.appendChild(a),
        this.pElement(a),
        (a.style.display = "none"),
        (a.style.position = "absolute"),
        (a.style.zIndex = this.pZIndex()),
        isIE6 && !this.pDisableIFrame()
          ? ((this.iframe = document.createElement("IFRAME")),
            (this.iframe.src = "misc/default/empty.htm"),
            (this.iframe.style.display = "none"),
            (this.iframe.style.position = "absolute"),
            (this.iframe.style.zIndex = this.pZIndex() - 1),
            document.body.appendChild(this.iframe))
          : (this.iframe = null),
        !0)
      : !1;
  }
  return !0;
};
TLightBox.prototype.initialized = function () {
  return null != this.pElement();
};
TLightBox.prototype.left = function (a) {
  return this.pLeft(a);
};
TLightBox.prototype.move = function (a, b) {
  this.pLeft(a);
  this.pTop(b);
};
TLightBox.prototype.name = function () {
  return this.pName();
};
TLightBox.prototype.position = function (a) {
  if (this.pAutoMove() && this.pElement() && this.pVisible()) {
    if ("undefined" == typeof a || "undefined" == typeof a.width)
      a = getSize(szPage);
    this.pElement().style.left =
      (a.width - this.pElement().offsetWidth) / 2 + "px";
    positionElement(this.pElement(), this.pTop());
    this.pDoFrame();
  }
};
TLightBox.prototype.show = function () {
  if (this.pElement()) {
    if (!this.pVisible()) {
      this.pVisible(!0);
      this.iframe && (this.iframe.style.display = "block");
      this.pElement().style.display = "block";
      this.pWithImage() && (Html.get("imgBack").style.display = "block");
      var a = getSize(szWindow),
        a = Math.floor((a.height - this.height()) / 2);
      this.top() > a && this.top(Math.min(a, 40));
      this.pAutoMove()
        ? this.position()
        : (this.left((winSize.width - this.pElement().offsetWidth) / 2),
          this.top(this.pTop()));
    }
  } else this.init() && this.show();
};
TLightBox.prototype.size = function () {
  return this.pSize();
};
TLightBox.prototype.top = function (a) {
  return this.pTop(a);
};
TLightBox.prototype.visible = function () {
  return this.pVisible();
};
TLightBox.prototype.width = function (a) {
  if (this.pElement())
    if ("undefined" != typeof a)
      (this.pElement().style.width = parseInt(a) + "px"), this.pDoFrame();
    else return this.pElement().offsetWidth;
};
TLightBoxes = function () {
  this.lightBoxes = [];
};
TLightBoxes.prototype.anyVisible = function () {
  for (var a = 0; a < this.lightBoxes.length; a++)
    if (this.lightBoxes[a].visible()) return !0;
  return !1;
};
TLightBoxes.prototype.init = function () {
  for (var a = 0; a < this.lightBoxes.length; a++) this.lightBoxes[a].init();
};
TLightBoxes.prototype.position = function (a) {
  if (this.anyVisible()) {
    var b = Html.get("imgBack");
    b &&
      "100%" == !Element.getStyle(b, "width") &&
      ((b.style.width = a.width + "px"), (b.style.height = a.height + "px"));
    for (b = 0; b < this.lightBoxes.length; b++) this.lightBoxes[b].position(a);
  }
};

var isNS = document.layers ? !0 : !1,
  isIE = document.all ? !0 : !1,
  isIE6 = isIE && -1 < window.clientInformation.appVersion.indexOf("MSIE 6"),
  server = document.location.protocol + "//" + document.location.host + "/",
  TDataTypes = "dtBoolean dtDateTime dtDouble dtInteger dtString dtMoney dtPercentage dtLong dtGuid dtDecimal".split(
    " "
  ),
  dtBoolean = 0,
  dtDateTime = 1,
  dtDouble = 2,
  dtInteger = 3,
  dtString = 4,
  dtMoney = 5,
  dtPercentage = 6,
  dtLong = 7,
  dtGuid = 8,
  dtDecimal = 9,
  bodyLoaded = !1,
  image = document.createElement("IMG"),
  kaTimer = setTimeout("keepAlive();", 12e4),
  pageSize = null,
  winSize = null,
  lightBoxes = new TLightBoxes(),
  messageBox = new TLightBox("divMessage", 2e3, 200, imgBack);
!window.XMLHttpRequest &&
  window.ActiveXObject &&
  (window.XMLHttpRequest = function () {
    for (var a = ["Microsoft.XMLHTTP", "MSXML2.XMLHTTP"], b = a.length; b--; )
      try {
        return new ActiveXObject(a[b]);
      } catch (c) {}
    throw Error("No XML support in this browser.");
  });
"undefined" === typeof console && (console = { log: function () {} });
document.getElementByName ||
  (document.getElementByName = function (a) {
    a = document.getElementsByName(a);
    return 0 < a.length ? a[0] : null;
  });
window.onresize = function () {
  bodyResize(document.body);
};
var browsers = {
  unknown: 0,
  IE: 1,
  firefox: 2,
  edge: 3,
  netscape: 4,
  mozilla: 5,
  opera: 6,
  safari: 7,
  chrome: 8,
};
function bodyLoad(a, b) {
  var c = Html.get("cWarn");
  c && document.body.appendChild(c);
  bodyResize(a);
  try {
    window.onscroll = function () {
      bodyScroll(document.documentElement);
    };
  } catch (d) {}
  b ? window.print() : initLightboxesAndMessage();
  "undefined" != typeof doWizards && doWizards();
  "undefined" != typeof customBodyLoad && customBodyLoad(a);
  bodyLoaded = !0;
}
function bodyResize(a) {
  var b = Html.get("__asptrace");
  b && ((b.style.width = "12px"), (b.style.overflow = "hidden"));
  winSize = pageSize = null;
  var c = getSize(szPage);
  lightBoxes.position(c);
  b && (b.style.width = c.width + "px");
  "undefined" != typeof customBodyResize && customBodyResize(a, c);
}
function bodyScroll(a) {
  var b = getSize(szPage);
  lightBoxes.position(b);
  "undefined" != typeof customBodyScroll && customBodyScroll(a);
}
function clearElement(a, b) {
  a.value == a.defaultValue && (a.value = "");
}
function positionElement(a, b) {
  var c = document.documentElement,
    c = window.scrollY || c.scrollTop,
    d = c + b,
    e = getSize(szWindow);
  b + a.offsetHeight + 20 > e.height &&
    ((d = c + e.height - a.offsetHeight - 20), d < c && (d = c));
  a.style.top = d + "px";
}
function closeMessage(a) {
  a = findForm();
  messageBox.initialized() && messageBox.hide();
  a && frmFormReady && frmFormReady(a.ID);
}
function findForm() {
  if (document.forms)
    for (var a = 0; a < document.forms.length; a++) {
      var b = document.forms[a],
        c = String(b.name);
      if (c.startsWith("frmForm_"))
        return (a = parseInt(c.split("_")[1])), (b.ID = a), b;
    }
}
function initLightboxesAndMessage() {
  lightBoxes.init();
  if (messageBox.initialized()) {
    var a = Html.get("divMessageText"),
      b = Html.get("btnCloseMessage");
    messageBox.show();
    if (b)
      try {
        b.focus();
      } catch (c) {}
    else
      (b = 1e4),
        a &&
          (b = Math.max(
            Math.floor((String(a.innerText).length / 80) * 7e3),
            5e3
          )),
        setTimeout("messageBox.hide();", b);
  }
}
function intInputKeyPress(a, b) {
  var c = [8, 9, 13, 45, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57],
    d = b.keyCode || b.charCode;
  return 0 === b.charCode || c.contains(d)
    ? (b.returnValue = !0)
    : cancelEvent(b);
}
function floatInputKeyPress(a, b) {
  var c = [8, 9, 13, 44, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57],
    d = b.keyCode || b.charCode;
  if (0 === b.charCode || c.contains(d))
    if (44 == d || 46 == d) {
      if (
        0 == a.value.length ||
        -1 < a.value.indexOf(".") ||
        -1 < a.value.indexOf(",")
      )
        return cancelEvent(b);
    } else return (b.returnValue = !0);
  else return cancelEvent(b);
}
function datetimeInputKeyPress(a, b) {
  for (
    var c = Date.formatInfo,
      d = [8, 9, 13, 32, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58],
      e = 0;
    e < c.dateSeparator.length;
    e++
  )
    d.add(c.dateSeparator.charCodeAt(e));
  for (e = 0; e < c.timeSeparator.length; e++)
    d.add(c.timeSeparator.charCodeAt(e));
  c = b.keyCode || b.charCode;
  if (0 === b.charCode || d.contains(c)) return !0;
  b.cancelBubble = !0;
  return cancelEvent(b);
}
function dateInputKeyPress(a, b) {
  for (
    var c = Date.formatInfo,
      d = [8, 9, 13, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57],
      e = 0;
    e < c.dateSeparator.length;
    e++
  )
    d.add(c.dateSeparator.charCodeAt(e));
  c = b.keyCode || b.charCode;
  if (0 === b.charCode || d.contains(c)) return !0;
  b.cancelBubble = !0;
  return cancelEvent(b);
}
function timeInputKeyPress(a, b) {
  for (
    var c = Date.formatInfo,
      d = [8, 9, 13, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58],
      e = 0;
    e < c.timeSeparator.length;
    e++
  )
    d.add(c.timeSeparator.charCodeAt(e));
  c = b.keyCode || b.charCode;
  if (0 === b.charCode || d.contains(c)) return !0;
  b.cancelBubble = !0;
  return cancelEvent(b);
}
function checkAnchors() {
  for (var a = document.getElementsByTagName("a"), b = 0; b < a.length; b++) {
    var c = a[b];
    c.href || (c.className = "anchor");
  }
}
function rndString(a) {
  "undefined" == typeof a && (a = 16);
  for (var b = "", c = 0; c < a; c++)
    b += "1234567890abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".substr(
      Math.floor(61 * Math.random()),
      1
    );
  return b;
}
function keepAlive() {
  kaTimer && clearTimeout(kaTimer);
  null != document &&
    null != document.body &&
    (document.body.appendChild(image),
    (image.style.position = "absolute"),
    (image.style.top = "0px"),
    (image.style.zIndex = "10"),
    (image.style.left = "0px"),
    (image.src = "misc/keepAlive.aspx?str=" + rndString()),
    (kaTimer = setTimeout("keepAlive();", 12e4)));
}
function resizeFont(a, b, c) {
  var d = getCookie("FontSize"),
    d = d ? parseInt(d) : 1,
    d = "undefined" != typeof c ? c : 1 == d ? 3 : 1;
  document.body.style.fontSize = 60 + 10 * d + "%";
  setCookie("FontSize", d);
  "undefined" != typeof onFontResize && onFontResize(a, b, c);
  return 60 + 10 * d;
}
function printItem(a) {
  var b = new Url().remove("msg");
  "undefined" != typeof a && (b = b.remove("catID").add("itmID", a));
  (a = window.open(
    b.replacePage("printItem.aspx"),
    "printItem",
    "menubar=0,location=0,toolbar=0,scrollbars=0,resizable=0,status=0,width=800,height=600"
  )) && a.focus();
}
function printPage() {
  printItem();
}
function sendItem(a, b) {
  var c = Html.get("divSendItem" + a),
    d = Html.get("aSend" + a);
  if (c) {
    var e,
      f = "none" != c.style.display;
    (e = Html.get("divBookItem" + a)) &&
      "none" != e.style.display &&
      Resources.hideForm(a);
    "undefined" == typeof b && (b = 0);
    if ("undefined" != typeof jQuery)
      e = f
        ? function () {
            $("#divSendItem" + a).slideUp();
          }
        : function () {
            $("#divSendItem" + a).slideDown();
          };
    else if (3 > b) {
      include("js/default/versions/1/effects.js");
      if ("undefined" == typeof Effect) {
        setTimeout("sendItem(" + a + ", " + ++b + ")", 50);
        return;
      }
      e = f
        ? function () {
            Effect.SlideUp("divSendItem" + a, { duration: 0.3 });
            c.style.display = "none";
          }
        : function () {
            Effect.SlideDown("divSendItem" + a, { duration: 0.3 });
            c.style.display = "";
          };
    } else return;
    d && (f ? Html.addClass(d, "active") : Html.removeClass(d, "active"));
    e();
  } else
    (d = new Url().remove("msg")),
      (d = window.open(
        d.replacePage("sendItem.aspx"),
        "sendItem",
        "menubar=0,location=0,toolbar=0,scrollbars=0,resizable=0,status=0,width=400,height=290"
      )) && d.focus();
}
function editItem(a) {
  var b = new Url().remove("msg"),
    b = b.add("itmID", a),
    b = b.add("action", 1);
  document.location.href = b;
}
function displayImage(a) {
  var b = new Url(a);
  -1 == a.indexOf(".aspx") && (b = new Url("misc/showFile.aspx?File=" + a));
  a = new Url()
    .replacePage("misc/default/showImage.aspx", !0)
    .add("Filename", b.get("Filename"))
    .add("File", b.get("File"));
  (a = window.open(
    a,
    "showFile",
    "menubar=0,location=0,toolbar=0,scrollbars=1,resizable=1,status=1,width=50,height=50,top=25,left=25"
  )) && a.focus();
}
function resizeWin() {
  var a = Html.get("imgMain"),
    b = a.offsetWidth,
    a = a.offsetHeight;
  isIE6 ? window.resizeTo(b + 45, a + 70) : window.resizeTo(b + 45, a + 95);
}
function alertWin(a, b, c) {
  var d = null;
  if (
    (d =
      "undefined" != typeof b && "undefined" != typeof c
        ? window.open("", b, c)
        : "undefined" != typeof b
        ? window.open("", b)
        : "undefined" != typeof c
        ? window.open("", "", c)
        : window.open())
  )
    d.document.open(), d.document.write(a), d.document.close();
}
function frmSendLinkSubmit(a, b) {
  var c = a.elements.edtName,
    d = a.elements.edtEmailReplyTo,
    e = a.elements.edtEmailRecipient;
  return "" == String(c.value)
    ? (alert(getMessage("YourNameLeftEmpty")), c.focus(), cancelEvent(b))
    : "" == String(d.value)
    ? (alert(getMessage("EMailAddressReplyToLeftEmpty")),
      d.focus(),
      cancelEvent(b))
    : isEmail(d.value)
    ? "" == String(e.value)
      ? (alert(getMessage("EMailAddressRecipientLeftEmpty")),
        e.focus(),
        cancelEvent(b))
      : isEmail(e.value)
      ? !0
      : (alert(getMessage("EmailNotValid")), e.focus(), cancelEvent(b))
    : (alert(getMessage("EmailNotValid")), d.focus(), cancelEvent(b));
}
function cookieName(a) {
  a = escape(a);
  a = a.replace(/@/gi, "%40");
  a = a.replace(/\*/gi, "%2A");
  a = a.replace(/-/gi, "%2D");
  a = a.replace(/_/gi, "%5F");
  a = a.replace(/\+/gi, "%2B");
  a = a.replace(/\./gi, "%2E");
  return a.replace(/\//gi, "%2F");
}
function getCookie(a, b) {
  if (b || "undefined" === typeof b) a = cookieName(a);
  var c = document.cookie,
    d = c.indexOf(" " + a + "=");
  -1 == d && (d = c.indexOf(a + "="));
  if (-1 == d) return null;
  var d = c.indexOf("=", d) + 1,
    e = c.indexOf(";", d);
  -1 == e && (e = c.length);
  return unescape(c.substring(d, e));
}
function removeCookie(a) {
  setCookie(a);
}
function setCookie(a, b, c) {
  a = cookieName(a);
  if (null != b && "undefined" != typeof b && "" != String(b)) {
    var d = new Date().nextYear();
    2 < arguments.length && (d = c);
    document.cookie =
      null == d
        ? a + "=" + escape(b) + "; path=/"
        : a + "=" + escape(b) + "; path=/;expires=" + d.toGMTString();
  } else
    document.cookie =
      a + "=; path=/;expires=" + new Date().priorDay().toGMTString();
}
function toggleDisplay(a) {
  "string" == typeof a && (a = Html.get(a));
  "object" == typeof a &&
    (a.style.display = "none" == a.style.display ? "" : "none");
}
var checking = !1;
function checkBoxListClick(a, b, c) {
  if (!checking) {
    checking = !0;
    b = document.getElementsByName(c);
    if (a.id.endsWith("All"))
      for (c = 0; c < b.length; c++) b[c].checked = a.checked;
    else if ((a = Html.get(c + "All"))) {
      var d = !0;
      for (c = 0; c < b.length; c++) b[c].checked || (d = !1);
      a.checked = d;
    }
    checking = !1;
  }
}
function isChildOf(a, b) {
  return "undefined" != typeof a.contains
    ? a.contains(b)
    : null == b
    ? !1
    : a == b
    ? !0
    : isChildOf(a, b.parentNode);
}
function isParentOf(a, b) {
  return isChildOf(b, a);
}
TEvent = function (a, b, c) {
  this.event = b;
  this.func = c;
  this.object = a;
  if ("undefined" == typeof a._events || 0 == a._events.length) a._events = [];
  a._events.add(this);
};
TEvent.events = [];
TEvent.first = null;
TEvent.find = function () {
  for (var a = 0; a < arguments.length; a++) {
    var b = window[arguments[a]];
    if ("function" == typeof b) return b;
  }
  return null;
};
TEvent.unload = function (a) {
  if (null != TEvent.events) {
    TEvent.first && removeEvent(window, "unload", TEvent.first);
    for (var b = TEvent.events.length - 1; 0 <= b; b--) {
      var c = TEvent.events[b];
      "unload" == c.event && c.func(a);
      removeEvent(c);
      removeEventsOn(c.object, !1);
      TEvent.events[b] = null;
    }
    TEvent.events = null;
    TEvent.first = null;
  }
};
function addEvent(a, b, c) {
  "string" == typeof a && (a = Html.get(a));
  "string" == typeof c && (c = new Function("event", c));
  a.attachEvent
    ? (null == TEvent.first &&
        ((TEvent.first = new Function("event", "TEvent.unload(event)")),
        window.attachEvent("onunload", TEvent.first)),
      "unload" != b && a.attachEvent("on" + b, c))
    : (null == TEvent.first &&
        ((TEvent.first = new Function("event", "TEvent.unload(event)")),
        window.addEventListener("unload", TEvent.first, !1)),
      "unload" != b && a.addEventListener(b, c, !1));
  TEvent.events.add(new TEvent(a, b, c));
  return c;
}
function cancelEvent(a) {
  if (
    "undefined" == typeof a ||
    null == a ||
    "undefined" == typeof a.cancelBubble
  )
    return !1;
  a.cancelBubble = !0;
  "function" == typeof a.preventDefault
    ? a.preventDefault()
    : "returnValue" in a && (a.returnValue = !1);
  return !1;
}
function createEvent(a) {
  var b = "click";
  "string" == typeof a
    ? ((b = a), (a = null))
    : "undefined" != typeof a && "undefined" != typeof a.type && (b = a.type);
  var c = a ? a.charCode || a.keyCode : null,
    d = a ? a.srcElement || a.target : null;
  return {
    altKey: a ? a.altKey : !1,
    button: a ? a.button : null,
    bookmarks: a ? a.bookmarks : [],
    boundElements: a ? a.boundElements : [],
    cancelBubble: a ? a.cancelBubble : !1,
    clientX: a ? a.clientX : 0,
    clientY: a ? a.clientY : 0,
    ctrlKey: a ? a.ctrlKey : !1,
    fromElement: a ? a.fromElement : null,
    keyCode: a ? c : 0,
    offsetX: a ? a.offsetX : 0,
    offsetY: a ? a.offsetY : 0,
    reason: a ? a.reason : null,
    returnValue: a ? a.returnValue : !0,
    screenX: a ? a.screenX : 0,
    screenY: a ? a.screenY : 0,
    shiftKey: a ? a.shiftKey : !1,
    srcElement: a ? d : null,
    srcFilter: a ? a.srcFilter : null,
    target: a ? d : null,
    toElement: a ? a.toElement : null,
    type: a ? a.type : b,
    x: a ? a.x : 0,
    y: a ? a.y : 0,
  };
}
function filterEvent(a) {
  return String(a).replace(/^function \w*\([^\)]*\)\s*{\s*((.|\n)*)\s*}/, "$1");
}
function removeEvent(a, b, c) {
  if (a instanceof TEvent) removeEvent(a.object, a.event, a.func);
  else {
    "string" == typeof a && (a = Html.get(a));
    try {
      a.detachEvent
        ? a.detachEvent("on" + b, c)
        : a.removeEventListener(b, c, !1);
    } catch (d) {}
  }
}
function removeEventsOn(a, b) {
  if (
    "undefined" != typeof a &&
    a &&
    "undefined" != typeof a._events &&
    null != a._events
  ) {
    "undefined" == typeof b && (b = !0);
    for (var c = 0; c < a._events.length; c++) {
      var d = a._events[c];
      b &&
        (removeEvent(d),
        TEvent.events && TEvent.events.contains(d) && TEvent.events.remove(d));
      a._events[c] = null;
    }
    a._events = [];
  }
}
function valueString(a, b) {
  var c = typeof a,
    d = "";
  b = b || [];
  if ("boolean" == c) return a ? "true" : "false";
  if ("number" == c) return a;
  if ("string" == c) return '"' + a + '"';
  if ("undefined" == c) return "undefined";
  if (null == a) return "null";
  if (a instanceof Array) {
    for (var e = 0; e < a.length; e++) d += ", " + valueString(a[e], b);
    return d.length ? "[" + d.substr(2) + "]" : "[]";
  }
  if (a instanceof Date)
    return "#" + a.formatString("s").replace("T", " ") + "#";
  if (a instanceof RegExp) return a.toString();
  if ("function" == c) return (a = String(a)), a.substr(0, a.indexOf(")") + 1);
  if ("object" == c) {
    b.push(a);
    if ("undefined" != typeof a.nodeName) {
      c = a.nodeName;
      if ("#text" == c || "#cdata" == c)
        return a.nodeName + '["' + a.nodeValue + '"]';
      if ("undefined" != typeof a.attributes) {
        if (a.attributes)
          for (e = 0; e < a.attributes.length; e++) {
            var f = a.attributes[e];
            "" == f.nodeValue ||
              "inherit" == f.nodeValue ||
              null == f.nodeValue ||
              String(f.nodeValue).startsWith("function") ||
              (d += " " + f.nodeName + '="' + f.nodeValue + '"');
          }
        return "undefined" != typeof a.nodeType && 2 == a.nodeType
          ? "@" + c + '= "' + a.nodeValue + '"'
          : "<" + c + d + "/>";
      }
      return "undefined" != typeof a.location
        ? "window" + (window.name ? '["' + a.name + '"]' : "")
        : "<" +
            c.toLowerCase() +
            (a.id ? ' id="' + a.id + '"' : "") +
            (a.className ? ' class="' + a.className + '"' : "") +
            "/>";
    }
    if ("undefined" != typeof a.Class)
      return (
        (d = a.Class),
        "Point" == d
          ? "Point(" + a.left + ", " + a.top + ")"
          : "Size" == d
          ? "Size(" + a.width + ", " + a.height + ")"
          : "Url" == d
          ? 'Url("' + a.toString() + '")'
          : "Rgb" == d
          ? "Rgb(" +
            a.red +
            ", " +
            a.green +
            ", " +
            a.blue +
            ') {"' +
            a.toHex() +
            '"}'
          : "TWizard" == d || "TTable" == d || "TColumn" == d
          ? "undefined" == typeof a.owner
            ? d + '("' + a.name + '")'
            : valueString(a.owner, b) + "." + d + '("' + a.name + '")'
          : "TField" == d
          ? valueString(a.owner.owner, b) +
            ".TRow[" +
            a.owner.index +
            "]." +
            d +
            '("' +
            a.name +
            '")'
          : "TMenuItem" == d
          ? d + "[" + a.id + "]"
          : "undefined" != typeof a.ID
          ? d + "[" + valueString(a.ID, b) + "]"
          : "KeyStroke" == d
          ? a.toString()
          : d
      );
    if ("undefined" != typeof a.toString) {
      d = "";
      try {
        for (e in a)
          d = b.contains(a[e])
            ? d + (", " + e + ": /* backref */")
            : d + (", " + e + ": " + valueString(a[e], b));
        d.length && (d = "{" + d.substr(2) + "}");
      } catch (h) {
        d = "";
      }
      return a.toString().replace(/^\[object( [^\]]+)\]$/gi, "$1") + d;
    }
    if ("undefined" != typeof a.srcElement || "undefined" != typeof a.target)
      return "undefined" != typeof a.type
        ? "event[type = " + a.type + "]"
        : "event";
    try {
      return String(a);
    } catch (g) {
      return (
        'unhandled type: "' + typeof a + '". String( value ): ' + g.message
      );
    }
  } else return 'unhandled type: "' + typeof a + '"';
}
function coalesce() {
  for (var a = 0; a < arguments.length; a++)
    if ("undefined" != typeof arguments[a] && null != arguments[a])
      return arguments[a];
  return null;
}
function parseBool(a) {
  var b = parseInt(a);
  return "true" == String(a).substr(0, 4).toLowerCase() || (!isNaN(b) && 0 != b)
    ? !0
    : "false" == String(a).substr(0, 5).toUpperCase() || (!isNaN(b) && 0 == b)
    ? !1
    : null;
}
function isSame(a, b, c) {
  if ("undefined" == typeof c) {
    if (((c = typeof a), c == typeof b)) {
      if (null == a && null == b) return !0;
      if (null == a || null == b) return !1;
      if (
        "undefined" != typeof a.Class &&
        "undefined" != typeof b.Class &&
        a.Class == b.Class
      )
        return a == b;
      "string" == c &&
        ((a = a.replace(/\r\n/gi, "\n")), (b = b.replace(/\r\n/gi, "\n")));
      return a.toString() == b.toString();
    }
  } else
    try {
      return (a = convert(a, c)), (b = convert(b, c)), isSame(a, b);
    } catch (d) {}
  return !1;
}
function convert(a, b) {
  if (null == a || "" == String(a)) return null;
  switch (b) {
    case dtBoolean:
      return "false" == String(a).toLowerCase() || "0" == String(a) ? !1 : !0;
    case dtDateTime:
      var c = isDateTime(a);
      if (0 != c) return new Date(c);
      c = parseXmlDate(a);
      if (isNaN(c)) throw Error(getIllegalDateMessage());
      return c;
    case dtPercentage:
      String(a).endsWith("%") &&
        (a = String(a).substr(0, String(a).length - 1));
    case dtDecimal:
    case dtDouble:
    case dtMoney:
      "number" != typeof a &&
        ((c = Number.formatInfo),
        "." != c.groupingSeparator ||
          a.contains(c.decimalSeparator) ||
          (a = String(a).replace(
            new RegExp("\\" + c.groupingSeparator + "{1}", "gi"),
            c.decimalSeparator
          )),
        (a = String(a).replace(
          new RegExp("\\" + c.groupingSeparator, "gi"),
          ""
        )),
        (a = a.replace(c.currencySymbol, "")),
        (a = a.trim()),
        (a = a.replace(new RegExp("\\" + c.decimalSeparator, "gi"), ".")));
      if (!isNumeric(a)) {
        if ((c = getMessage(17))) throw Error(c.text);
        throw Error(
          "De ingevoerde waarde is niet correct. Er wordt een getal verwacht."
        );
      }
      return parseFloat(a);
    case dtInteger:
    case dtLong:
      if (!String(a).match(/\d{1,10}/gi)) {
        if ((c = getMessage(16))) throw Error(c.text);
        throw Error(
          "De ingevoerde waarde is niet correct. Er wordt een geheel getal verwacht."
        );
      }
      return parseInt(a);
    case dtString:
    case dtGuid:
      return String(a);
    default:
      throw Error('Illegal assignment to parameter "type" (' + b + ").");
  }
}
function getBackColor(a) {
  "string" == typeof a && (a = Html.get(a));
  var b = Element.getStyle(a, "background-color");
  null == a.parentNode ||
    ("transparent" != b && !b.startsWith("rgba(0, 0, 0, 0)")) ||
    (b = getBackColor(a.parentNode));
  return b;
}
function getColor(a) {
  "string" == typeof a && (a = Html.get(a));
  var b = Element.getStyle(a, "color");
  return "transparent" == b || b.startsWith("rgba(0, 0, 0, 0)")
    ? null != a.parentNode
      ? getColor(a.parentNode)
      : b
    : b;
}
function rgbToHex(a) {
  if (isIE) return a.replace("#", "");
  a.startsWith("rgb(") &&
    ((a = a.substr(4)), (a = a.substr(0, a.length - 1)), (a = a.split(", ")));
  return toHex(a[0]) + toHex(a[1]) + toHex(a[2]);
}
function twoDigit(a) {
  return 1 == a.length ? "0" + a : a;
}
Rgb = function (a, b, c) {
  this.Class = "Rgb";
  if ("transparent" == a)
    (this.blue = this.green = this.red = 128), (this.transparent = !0);
  else {
    if ("undefined" == typeof a || null == a) a = 255;
    if ("undefined" == typeof b || null == b) b = 255;
    if ("undefined" == typeof c || null == c) c = 255;
    this.red = a;
    this.green = b;
    this.blue = c;
    this.transparent = !1;
  }
};
Rgb.prototype.lighter = function (a) {
  if (this.transparent) return this;
  "undefined" == typeof a && (a = 5);
  var b = Math.round((this.red * (100 + a)) / 100),
    c = Math.round((this.green * (100 + a)) / 100);
  a = Math.round((this.blue * (100 + a)) / 100);
  return new Rgb(Math.min(b, 255), Math.min(c, 255), Math.min(a, 255));
};
Rgb.prototype.darker = function (a) {
  if (this.transparent) return this;
  "undefined" == typeof a && (a = 5);
  var b = Math.round((this.red * (100 - a)) / 100),
    c = Math.round((this.green * (100 - a)) / 100);
  a = Math.round((this.blue * (100 - a)) / 100);
  return new Rgb(b, c, a);
};
Rgb.prototype.toHex = function () {
  return this.transparent
    ? ""
    : twoDigit(toHex(this.red)) +
        twoDigit(toHex(this.green)) +
        twoDigit(toHex(this.blue));
};
Rgb.prototype.toString = function () {
  return this.transparent ? "transparent" : "#" + this.toHex();
};
function hexToRgb(a) {
  if ("transparent" == a || null == a) return new Rgb("transparent");
  a.startsWith("0x") && (a = a.substr(2));
  a.startsWith("#") && (a = a.substr(1));
  a = a.toUpperCase();
  var b, c;
  if (6 == a.length)
    (b = hexToNum(a.substr(0, 2))),
      (c = hexToNum(a.substr(2, 2))),
      (a = hexToNum(a.substr(4, 2)));
  else if (3 == a.length)
    (b = hexToNum(a.substr(0, 1) + a.substr(0, 1))),
      (c = hexToNum(a.substr(1, 1) + a.substr(1, 1))),
      (a = hexToNum(a.substr(2, 1) + a.substr(2, 1)));
  else {
    var d = /rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*\d+)?\)/gi;
    if (!d.test(a))
      throw Error(
        "Illegal call to hexToRgb(color) ('" +
          a +
          "'). Parameter 'color' is expected to be 'transparent', a hexadecimal value in the formats '0xE0FFA8', '0xFFF', '#EF9090', '#888', 'A8CEF3' or 'FFF' or a value like 'rgb(x, y, z)'."
      );
    b = parseInt(a.replace(d, "$1"));
    c = parseInt(a.replace(d, "$2"));
    a = parseInt(a.replace(d, "$3"));
  }
  return new Rgb(b, c, a);
}
function hexToNum(a, b) {
  "undefined" == typeof b && (b = 1);
  var c = a.substr(a.length - 1).toUpperCase();
  if (1 < a.length)
    return hexToNum(a.substr(0, a.length - 1), 16 * b) + hexToNum(c, b);
  switch (c) {
    case "A":
      return 10 * b;
    case "B":
      return 11 * b;
    case "C":
      return 12 * b;
    case "D":
      return 13 * b;
    case "E":
      return 14 * b;
    case "F":
      return 15 * b;
    default:
      return parseInt(c) * b;
  }
}
function toHex(a) {
  if ("number" != typeof a)
    throw Error(
      'Illegal call to toHex( number ) ("' +
        a +
        "\"). Parameter 'number' is not a number."
    );
  if (10 > a) return String(a);
  switch (a) {
    case 10:
      return "A";
    case 11:
      return "B";
    case 12:
      return "C";
    case 13:
      return "D";
    case 14:
      return "E";
    case 15:
      return "F";
  }
  return toHex(Math.floor(a / 16)) + toHex(a % 16);
}
function fillOut(a) {
  return 10 > Number(a) ? "0" + String(a) : String(a);
}
function isEmail(a) {
  return /^([\w-]+(\.[\w-]+)*)@([0-9a-z-]+\.)+[a-z]{2,}$/gi.test(a);
}
function isURL(a) {
  return Url.isValid(a);
}
function flashString(a) {
  a = a.replace(/\%/g, "%25");
  a = a.replace(/\&amp;/g, "%26");
  a = a.replace(/\&/g, "%26");
  return a.replace(/\+/g, "%2B");
}
function withZeros(a, b) {
  var c = "";
  if (!RegExp("^-?\\d+(\\.\\d+)?$", "gi").test(a)) return !1;
  a.startsWith("-") && ((a = a.substr(1)), (c = "-"));
  -1 < a.indexOf(".") && ((a = a.trimEnd("0")), (a = a.trimEnd(".")));
  a.startsWith("0") &&
    ((a = a.trimStart("0")),
    a.startsWith(".") && (a = "0" + a),
    0 == a.length && (a = "0"));
  return parseFloat(c + a) == b;
}
function isNumeric(a) {
  a = new String(a);
  -1 < a.indexOf(",") &&
    -1 < a.indexOf(".") &&
    (a.indexOf(",") > a.indexOf(".")
      ? (a = a.replace(/\./gi, ""))
      : a.indexOf(",") < a.indexOf(".") && (a = a.replace(/\,/gi, "")));
  a = a.replace(/\,/gi, ".");
  return withZeros(a, parseFloat(a));
}
function toNumber(a) {
  -1 < a.indexOf(",") &&
    -1 < a.indexOf(".") &&
    (a.indexOf(",") > a.indexOf(".")
      ? (a = a.replace(/\./gi, ""))
      : a.indexOf(",") < a.indexOf(".") && (a = a.replace(/\,/gi, "")));
  a = a.replace(/\,/gi, ".");
  return parseFloat(a);
}
function include(a) {
  var b = document.getElementsByTagName("head")[0],
    c = b ? b.getElementsByTagName("script") : null;
  if (!b) return !1;
  if (c)
    for (var d = 0; d < c.length; d++)
      if (c[d].getAttribute("src") == a) return !1;
  c = document.createElement("script");
  c.setAttribute("language", "javascript");
  c.setAttribute("type", "text/javascript");
  c.setAttribute("src", a);
  b.appendChild(c);
  return !0;
}
function filterHeaders(a) {
  a = a.replace(/\t*<\![^>]+>(\r\n)?/gi, "");
  a = a.replace(/\t*<\/?html[^>]*>(\r\n)?/gi, "");
  if (-1 < a.indexOf('<img id="imgBack')) {
    a = a.split("\r\n");
    for (var b = 0; b < a.length; b++)
      a[b].trim().startsWith('<img id="imgBack"')
        ? ((a[b] = ""), (b = a.length))
        : (a[b] = "");
    a = a.join("\r\n").trimEnd().trimStart("\r\n");
  }
  return a.replace(/\t*<\/body>(\r\n)?/gi, "");
}
function getHtml(a, b) {
  if (a && "undefined" != typeof a.innerHTML) {
    "undefined" == typeof b.request && (b = new Url(b));
    b = b.add("rnd", rndString());
    var c = b.request();
    if (
      ("" != String(c).trim() && 0 == c) ||
      "false" == String(c).toLowerCase()
    )
      return !1;
    a.innerHTML = filterHeaders(c);
    return !0;
  }
  throw Error(
    'Illegal call to getHtml( element, url ). Parameter "element" is not a valid Html object.'
  );
}
function htmlSize(a) {
  "string" == typeof a && (a = Html.get(a));
  if ("undefined" == typeof a || null == a)
    throw Error(
      "Illegal argument. First argument is undefined or element not found (" +
        valueString(a) +
        ")."
    );
  a.size = new Size(
    a.offsetWidth -
      measure(a, "margin-left") -
      measure(a, "border-left-width") -
      measure(a, "padding-left") -
      measure(a, "padding-right") -
      measure(a, "border-right-width") -
      measure(a, "margin-right"),
    a.offsetHeight -
      measure(a, "margin-top") -
      measure(a, "border-top-width") -
      measure(a, "padding-top") -
      measure(a, "padding-bottom") -
      measure(a, "border-bottom-width") -
      measure(a, "margin-bottom")
  );
  return a.size;
}
function isScrolling(a) {
  if ("undefined" == typeof a || null == a) return !1;
  var b = Element.getStyle(a, "overflow");
  isIE && "hidden" != Element.getStyle(a, "overflowY") && (b = "auto");
  return a.offsetHeight < a.scrollHeight && "hidden" != b ? !0 : !1;
}
function xFind(a, b) {
  for (
    var c = String(b).toLowerCase().split("/"), d = 0;
    d < c.length && null != a;
    d++
  ) {
    for (
      var e = null,
        f = c[d].contains("[") ? c[d].split("[")[0] : c[d],
        h = c[d].contains("[") ? c[d].split(/[\[\]]/)[1] : 1,
        g = 0;
      g < a.childNodes.length && h && null == e;
      g++
    ) {
      var k = a.childNodes[g];
      1 != k.nodeType ||
        ("*" != f && k.tagName.toLowerCase() != f) ||
        (h--, 0 == h && (e = k));
    }
    a = e;
  }
  return a;
}
function getParent(a, b) {
  "string" == typeof a && (a = Html.get(a));
  for ("undefined" == typeof b && (b = 1); a && b--; ) a = a.parentNode;
  return a;
}
var szPage = 1,
  szWindow = 2;
function getSize(a) {
  if (document.body) {
    if (null == pageSize || null == winSize) {
      var b, c, d, e;
      window.innerHeight && window.scrollMaxY
        ? ((d = document.body.scrollWidth),
          (e = window.innerHeight + window.scrollMaxY))
        : document.body.scrollHeight > document.body.offsetHeight
        ? ((d = document.body.scrollWidth), (e = document.body.scrollHeight))
        : ((d = document.body.offsetWidth), (e = document.body.offsetHeight));
      self.innerHeight
        ? ((b = self.innerWidth), (c = self.innerHeight))
        : document.documentElement && document.documentElement.clientHeight
        ? ((b = document.documentElement.clientWidth),
          (c = document.documentElement.clientHeight))
        : document.body &&
          ((b = document.body.clientWidth), (c = document.body.clientHeight));
      pageHeight = e < c ? c : e;
      d < b ? ((pageWidth = b), e > c && (pageWidth -= 18)) : (pageWidth = d);
      pageSize = new Size(pageWidth, pageHeight);
      winSize = new Size(b, c);
    }
  } else return null;
  switch (a) {
    case szPage:
      return pageSize;
    case szWindow:
      return winSize;
    default:
      return [pageSize, winSize];
  }
}
function measure(a, b) {
  if (null == b || "" == b) return 0;
  b = String(b);
  var c = Element.getStyle(a, b),
    d = parseFloat(c),
    e = 0;
  isNaN(d) && (d = 0);
  String(c).endsWith("%")
    ? (e = Math.round((a.offsetWidth * d) / 100, 0))
    : String(c).endsWith("px") && (e = d);
  return e;
}
function getLeft(a) {
  return a && a != document.body
    ? "absolute" == Element.getStyle(a, "position")
      ? a.offsetLeft
      : a.offsetLeft + getLeft(a.offsetParent) - a.scrollLeft
    : a && browser == browsers.IE && a == document.body
    ? measure(document.body, "margin-left")
    : 0;
}
function getTop(a) {
  return a && a != document.body
    ? "absolute" == Element.getStyle(a, "position")
      ? a.offsetTop
      : a.offsetTop + getTop(a.offsetParent) - a.scrollTop
    : a && browser == browsers.IE && a == document.body
    ? measure(document.body, "margin-top")
    : 0;
}
function getPos(a) {
  return new Point(getLeft(a), getTop(a));
}
Point = function (a, b) {
  this.Class = "Point";
  this.left = "undefined" != typeof a ? a : 0;
  this.top = "undefined" != typeof b ? b : 0;
};
Point.prototype.toString = function () {
  return "Point(" + this.left + ", " + this.top + ")";
};
Size = function (a, b) {
  this.Class = "Size";
  this.width = "undefined" != typeof a ? a : 0;
  this.height = "undefined" != typeof b ? b : 0;
};
Size.prototype.toString = function () {
  return "Size(" + this.width + ", " + this.height + ")";
};
Array.contains = function (a, b) {
  if (null == a || "undefined" == typeof a.length)
    throw Error(
      "Illegal call to Array.indexOf(). First parameter is not an array."
    );
  for (var c = 0; c < a.length; c++)
    if (b instanceof RegExp) {
      if (-1 < String(a[c]).search(b)) return !0;
    } else if (b instanceof Date) {
      if (b.isSameDate(a[c])) return !0;
    } else if (a[c] == b) return !0;
  return !1;
};
Array.indexOf = function (a, b, c, d) {
  if (null == a || "undefined" == typeof a.length)
    throw Error(
      "Illegal call to Array.indexOf(). First parameter is not an array."
    );
  c = "undefined" == typeof c ? 0 : parseInt(c);
  if (isNaN(c) || 0 > c) c = 0;
  d = "undefined" == typeof d ? a.length : parseInt(d);
  if (isNaN(d) || d > a.length) d = a.length;
  for (; c < d; c++)
    if (b instanceof RegExp) {
      if (-1 < String(a[c]).search(b)) return c;
    } else if (b instanceof Date) {
      if (b.isSameDate(a[c])) return c;
    } else if (a[c] == b) return c;
  return -1;
};
"undefined" == typeof [].forEach &&
  ((Array.forEach = function (a, b) {
    if (null == a || "undefined" == typeof a.length)
      throw Error(
        "Illegal call to Array.indexOf(). First parameter is not an array."
      );
    for (var c = 0; c < this.length; c++)
      "undefined" != typeof a[c] && b(a[c], c, a);
  }),
  (Array.prototype.forEach = function (a) {
    Array.forEach(this, a);
  }));
Array.prototype.add = function (a) {
  var b = this.length;
  this[this.length] = a;
  return b;
};
Array.prototype.clear = function (a) {
  this.length = 0;
};
Array.prototype.clone = function () {
  return [].concat(this);
};
Array.prototype.contains = function (a) {
  return Array.contains(this, a);
};
Array.prototype.insert = function (a, b) {
  if (0 > a) throw Error("Illegal argument. Index out of range (" + a + ").");
  a > this.length && (a = this.length);
  for (var c = this.length; c > a; c--) this[c] = this[c - 1];
  this[a] = b;
};
Array.prototype.insertAfter = function (a, b) {
  var c = this.indexOf(b);
  if (-1 == c)
    throw Error(
      "Illegal argument. Given element is not contained by the array."
    );
  this.insert(c + 1, a);
};
Array.prototype.insertBefore = function (a, b) {
  var c = this.indexOf(b);
  if (-1 == c)
    throw Error(
      "Illegal argument. Given element is not contained by the array."
    );
  this.insert(c, a);
};
Array.prototype.indexOf = function (a, b, c) {
  return Array.indexOf(this, a, b, c);
};
Array.prototype.moveTo = function (a, b) {
  var c = this.indexOf(a);
  c != b && (-1 < c && this.remove(c), this.insert(b, a));
};
Array.prototype.remove = function (a) {
  if ("number" == typeof a) {
    for (; a < this.length - 1; a++) this[a] = this[a + 1];
    this.length--;
  } else if (((a = this.indexOf(a)), -1 < a)) this.remove(a);
  else
    throw Error(
      "Illegal argument. Given element is not contained by the array."
    );
};
Boolean.prototype.formatString = function (a) {
  return Boolean.formatString(this, a);
};
Boolean.formatString = function (a, b) {
  var c = String(b || falseText[Languages.current]).split(";");
  2 > c.length && c.add(trueText[Languages.current]);
  3 > c.length && c.add("");
  return null == a ? c[2] : 1 == a ? c[1] : c[0];
};
NumberFormat = function (a, b, c) {
  this.decimalSeparator = a;
  this.groupingSeparator = b;
  this.currencySymbol = c;
};
Number.prototype.fillOut = function (a) {
  if (isNaN(this) || !isFinite(this)) return String(this);
  "undefined" == typeof a && (a = 2);
  for (var b = String(this); b.length < a; ) b = "0" + b;
  return b;
};
Number.prototype.formatString = function (a) {
  if ("C" == a || "c" == a)
    return this.formatString(Number.formatInfo.currencySymbol + " ,##0.00");
  if ("D" == a || "d" == a) return this.formatString("0");
  if ("N" == a || "n" == a) return this.formatString(",##0.00");
  if ("P" == a || "p" == a) return this.formatString(",##0.00%");
  if (null == a || "" == a || "undefined" == typeof a)
    return String(this).replace(".", Number.formatInfo.decimalSeparator);
  a = String(a);
  var b = String(this),
    c = a,
    d = b.split(/\./gi),
    e = -1 < a.indexOf(","),
    f = 0 > this;
  a = a.replace(/,/gi, "");
  a = a.split(/\./gi);
  if (a[0].match(/0#/gi))
    throw Error(
      "Illegal format in call to \"formatString\". '#' encountered after '0' and before the decimal separator."
    );
  if (1 < a.length && a[1].match(/#0/gi))
    throw Error(
      "Illegal format in call to \"formatString\". '#' encountered before '0' and after the decimal separator."
    );
  if (2 < a.length)
    throw Error(
      'Illegal format in call to "formatString". Multiple use of decimal separator.'
    );
  c.endsWith(".") ||
    (1 == a.length
      ? (d = String(Math.round(b)).split("."))
      : 0 < a[1].length &&
        ((d = a[1].search(/[^#0]/g)),
        -1 == d && (d = a[1].length),
        (d = String(Math.round(b * Math.pow(10, d)) / Math.pow(10, d)).split(
          "."
        ))));
  b = f ? d[0].substr(1) : d[0];
  c = a[0].replace(/^[^0]*(0+)/gi, "$1");
  c.length > b.length && (b = c.substr(0, c.length - b.length) + b);
  if (e) {
    e = b;
    b = "";
    for (c = e.length - 1; 0 <= c; c -= 3)
      b =
        0 <= c - 2
          ? Number.formatInfo.groupingSeparator + e.substr(c - 2, 3) + b
          : e.substr(0, c + 1) + b;
    if (b.startsWith(".") || b.startsWith(",")) b = b.substr(1);
  }
  e = a[0].search(/[0#,\.]/);
  0 < e && (b = a[0].substr(0, e) + b);
  1 < a.length &&
    ((b += Number.formatInfo.decimalSeparator),
    1 < d.length
      ? ((b += d[1]),
        1 < a.length &&
          ((e = a[1].replace(/([#0])/g, "$1")),
          e.length > d[1].length && (b += e.substr(e.length - d[1].length)),
          (d = Math.min(d[1].length, a[1].search(/[^#0]/g))),
          -1 < d && (b += a[1].substr(d))))
      : 1 < a.length && (b += a[1]));
  a = new RegExp(RegExp.escape(Number.formatInfo.decimalSeparator) + "#+", "g");
  a.test(b) && (b = b.replace(a, ""));
  b = b.replace(/#/gi, "");
  b.endsWith(Number.formatInfo.decimalSeparator) &&
    (b = b.substr(0, b.length - 1));
  return f ? "-" + b : b;
};
RegExp.escape = function (a) {
  if (null == a || "" == a || "undefined" == typeof a) return "";
  a = String(a);
  a = a.replace(/\\/g, "\\\\");
  a = a.replace(/\./g, "\\.");
  a = a.replace(/\^/g, "\\^");
  a = a.replace(/\$/g, "\\$");
  a = a.replace(/\?/g, "\\?");
  a = a.replace(/\*/g, "\\*");
  a = a.replace(/\+/g, "\\+");
  a = a.replace(/\|/g, "\\|");
  a = a.replace(/\(/g, "\\(");
  a = a.replace(/\)/g, "\\)");
  a = a.replace(/\{/g, "\\{");
  a = a.replace(/\}/g, "\\}");
  a = a.replace(/\[/g, "\\[");
  return a.replace(/\]/g, "\\]");
};
var regExp = {
  escape: function (a) {
    return RegExp.escape(a);
  },
};
String.prototype.capitalize = function () {
  return this.substr(0, 1).toUpperCase() + this.substr(1);
};
String.prototype.coalesce = function () {
  if ("" != this) return this;
  for (var a = 0; a < arguments.length; a++)
    if (arguments[a]) return arguments[a];
  return "";
};
String.prototype.contains = function () {
  for (var a = 0; a < arguments.length; a++)
    if (-1 < this.indexOf(arguments[a])) return !0;
  return !1;
};
String.prototype.endsWith = function (a) {
  return this.substr(this.length - a.length) == new String(a);
};
String.prototype.htmlDecode = function () {
  var a = String(this);
  a || (a = "");
  for (var a = a.replace(/\&amp;/gi, "&"), b = 0; b < charCodes.length; b++)
    var c = charCodes[b],
      a = a.replace(
        new RegExp(RegExp.escape(specialChar[c - 160]), "g"),
        String.fromCharCode(c)
      );
  a = a.replace(/&quot;/gi, '"');
  a = a.replace(/&lt;/gi, "<");
  return a.replace(/&gt;/gi, ">");
};
String.prototype.htmlEncode = function () {
  var a = String(this);
  a || (a = "");
  for (var a = a.replace(/\&/gi, "&amp;"), b = 0; b < charCodes.length; b++)
    var c = charCodes[b],
      d = specialChar[c - 160],
      a = a.replace(new RegExp(String.fromCharCode(c), "g"), d);
  a = a.replace(/\"/gi, "&quot;");
  a = a.replace(/\</gi, "&lt;");
  return a.replace(/\>/gi, "&gt;");
};
String.prototype.indent = function (a) {
  var b = "\r\n";
  "undefined" == typeof a && (a = 1);
  for (var c = 0; c < a; c++) b += "\t";
  return this.replace(/\r\n(\t*<)/gi, b + "$1");
};
String.prototype.innerTrim = function () {
  return this.replace(/ {2,}/gi, " ");
};
String.prototype.insert = function (a, b) {
  var c = new String(this);
  0 < a && (c = this.substr(0, a));
  c += b;
  a < this.length && (c += this.substr(a, this.length - a));
  return c;
};
String.prototype.lowerFirst = function () {
  return this.uncapitalize();
};
String.prototype.reverse = function () {
  for (var a = "", b = 0; b < this.length; b++)
    a += this.substr(this.length - b - 1, 1);
  return a;
};
String.prototype.shortenLeft = function (a) {
  return this.substr(a);
};
String.prototype.shortenRight = function (a) {
  return this.substr(0, this.length - a);
};
String.prototype.startsWith = function (a) {
  return this.substr(0, a.length) == new String(a);
};
String.prototype.substringAfter = function (a) {
  a = this.indexOf(a);
  return -1 == a ? "" : this.substr(a + 1);
};
String.prototype.substringBefore = function (a) {
  a = this.indexOf(a);
  return -1 == a ? "" : this.substr(0, a);
};
String.prototype.toJs = function () {
  var a = this.replace(/\\/gi, "\\\\"),
    a = a.replace(/\"/gi, '\\"'),
    a = a.replace(/\r/gi, "\\r"),
    a = a.replace(/\n/gi, "\\n"),
    a = a.replace(/\t/gi, "\\t");
  return '"' + a + '"';
};
String.prototype.toSingleQuoteJs = function () {
  var a = this.replace(/\\/gi, "\\\\"),
    a = a.replace(/\"/gi, '\\"'),
    a = a.replace(/\r/gi, "\\r"),
    a = a.replace(/\n/gi, "\\n"),
    a = a.replace(/\t/gi, "\\t");
  return "'" + a + "'";
};
String.prototype.trim = function (a, b, c) {
  var d = new String(this);
  "undefined" == typeof b && (b = !0);
  "undefined" == typeof c && (c = !0);
  0 == arguments.length
    ? (b && (d = d.replace(/^\s*/gi, "")), c && (d = d.replace(/\s*$/gi, "")))
    : (b &&
        ((b = new RegExp("^[" + RegExp.escape(a) + "]*", "gi")),
        (d = d.replace(b, ""))),
      c &&
        ((c = new RegExp("[" + RegExp.escape(a) + "]*$", "gi")),
        (d = d.replace(c, ""))));
  return d;
};
String.prototype.trimEnd = function (a) {
  return this.trim(a, !1, !0);
};
String.prototype.trimStart = function (a) {
  return this.trim(a, !0, !1);
};
String.prototype.uncapitalize = function () {
  return this.substr(0, 1).toLowerCase() + this.substr(1);
};
String.prototype.unindent = function (a) {
  var b = "\r\n";
  "undefined" == typeof a && (a = 1);
  for (var c = 0; c < a; c++) b += "\t";
  return this.replace(new RegExp(b), "\r\n");
};
String.prototype.upperFirst = function () {
  return this.capitalize();
};
TUser = function (a, b, c, d) {
  this.Class = "TUser";
  this.ID = a;
  this.fullname = b;
  this.username = c;
  this.eMail = d;
};
TUser.prototype.toJS = function () {
  return (
    "new TUser( " +
    valueString(this.ID) +
    ", " +
    valueString(this.fullname) +
    ", " +
    valueString(this.username) +
    ", " +
    valueString(this.eMail) +
    ")"
  );
};
TUser.prototype.toXML = function (a) {
  "undefined" == typeof a && (a = "user");
  var b = "\r\n<" + a;
  "null" != String(this.ID) && (b += ' ID="' + this.ID + '"');
  b += ">";
  this.fullname && (b += "\r\n\t<fullname>" + this.fullname + "</fullname>");
  this.username && (b += "\r\n\t<username>" + this.username + "</username>");
  this.eMail && (b += "\r\n\t<eMail>" + this.eMail + "</eMail>");
  return b + ("\r\n</" + a + ">");
};
Url = function (a) {
  var b = null;
  this.Class = "Url";
  this.disposed = !1;
  this.onreadystagechange = this.HTTP = null;
  this.index = Url.all.add(this);
  b =
    "undefined" == typeof a
      ? String(document.location)
      : String(a).replace(/\&amp;/gi, "&");
  null == Url.unload &&
    (Url.unload = addEvent(window, "unload", "Url.dispose();"));
  this.url = function (a) {
    if ("undefined" == typeof a) return b;
    b = a;
  };
};
Url.prototype.add = function (a, b) {
  var c = this.url();
  if (null == b || "undefined" == typeof b) return this.remove(a);
  "undefined" != typeof b.age && (b = b.formatString("g?"));
  b = encodeURIComponent(b);
  if (-1 < c.search(new RegExp("([?&])(" + a + "=[^&#]*)", "gi")))
    c = c.replace(
      new RegExp("([?&])(" + a + "=[^&#]*)", "gi"),
      "$1" + a + "=" + b
    );
  else {
    var d = null;
    -1 < c.indexOf("#") &&
      ((d = c.substr(c.indexOf("#"))), (c = c.substr(0, c.indexOf("#"))));
    c = -1 < c.indexOf("?") ? c + ("&" + a + "=" + b) : c + ("?" + a + "=" + b);
    d && (c += d);
  }
  return new Url(c);
};
Url.prototype.async = function (a, b, c) {
  "string" == typeof c
    ? (this.onreadystatechange = new Function("HTTP", c))
    : "function" == typeof c && (this.onreadystatechange = c);
  if (
    null != this.onreadystatechange &&
    "function" != typeof this.onreadystatechange
  )
    throw Error(
      "Invalid call to Url.async(method, xml, func). Third parameter should be a function or a string containing the body of a function."
    );
  "undefined" == typeof a && (a = "GET");
  "undefined" == typeof b && (b = null);
  this.HTTP = new XMLHttpRequest();
  null != this.onreadystatechange &&
    (this.HTTP.onreadystatechange = new Function(
      "Url.all[" + this.index + "].loaded();"
    ));
  this.HTTP.open(a.toUpperCase(), this.add("rnd", rndString()));
  this.HTTP.setRequestHeader("snakeware-ajax", "true");
  "POST" == a.toUpperCase() &&
    this.HTTP.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
  this.HTTP.send(b);
};
Url.prototype.asyncJson = function (a, b, c) {
  var d = this;
  d.async(a, b, function (a) {
    a = d.convertToJson(a.responseText);
    c(d, a);
  });
};
Url.prototype.convertToJson = function (a) {
  return a && "{}" !== a && "[]" !== a
    ? "object" === typeof JSON
      ? JSON.parse(a)
      : eval("(" + a + ")")
    : null;
};
Url.prototype.current = function () {
  return new Url(String(document.location));
};
Url.prototype.dispose = function () {
  this.disposed ||
    ((this.onreadystagechange = this.HTTP = null), (this.disposed = !0));
};
Url.prototype.filter = function () {
  for (var a = new Url(this.url()), b = 0; b < arguments.length; b++)
    a = a.remove(arguments[b]);
  return a;
};
Url.prototype.filterAll = function () {
  return new Url(this.url().replace(Url.regex, "$1$8"));
};
Url.prototype.filterAllBut = function () {
  for (var a = this.filterAll(), b = 0; b < arguments.length; b++)
    a = a.add(arguments[b], this.get(arguments[b]));
  return a;
};
Url.prototype.get = function (a) {
  var b = this.url();
  a = b.replace(new RegExp(".*[?&]" + a + "=([^&#]*).*", "gi"), "$1");
  return a == b ? null : decodeURIComponent(a);
};
Url.prototype.isSame = function (a) {
  Url.isUrl(a) || (a = new Url(a));
  var b = this.page(),
    c = a.page();
  if (null != b || null != c)
    if (
      (null == b && null != c) ||
      (null != b && null == c) ||
      b.toLowerCase() != c.toLowerCase()
    )
      return !1;
  b = this.keys();
  for (c = 0; c < b.length; c++) if (a.get(b[c]) != this.get(b[c])) return !1;
  return !0;
};
Url.prototype.keys = function () {
  for (var a = this.query().split("&"), b = 0; b < a.length; b++)
    a[b].contains("=") && (a[b] = a[b].substr(0, a[b].indexOf("=")));
  return a;
};
Url.prototype.loaded = function () {
  if (4 == this.HTTP.readyState) this.onreadystatechange(this.HTTP);
};
Url.prototype.page = function () {
  var a = this.url().replace(Url.regex, "$8");
  "" == a && (a = null);
  return a;
};
Url.prototype.query = function () {
  var a = this.server(),
    a = null != a ? a + this.page() : this.page(),
    a = this.toString().replace(a, "");
  a.startsWith("?") && (a = a.substr(1));
  return a;
};
Url.prototype.remove = function (a) {
  var b = this.url();
  if ("#" == a)
    return -1 < b.indexOf("#") && (b = b.substr(b.indexOf("#"))), new Url(b);
  b = b.replace(new RegExp("([?&])" + a + "=[^&#]*", "gi"), "$1");
  b = b.replace(/\?&/gi, "?");
  b = b.replace(/&&/gi, "&");
  b = b.replace(/&$/gi, "");
  b = b.replace(/\?$/gi, "");
  return new Url(b);
};
Url.prototype.removeServer = function () {
  var a = this.server();
  return null != a ? new Url(this.url().replace(a, "")) : new Url(this.url());
};
Url.prototype.replacePage = function (a, b) {
  var c = rewriting,
    d = this.url(),
    e = this.page();
  "undefined" == typeof b && (b = !1);
  b && (c = !1);
  return (null != e && e.endsWith(".aspx")) || !c
    ? null == e
      ? ((d = d.replace(Url.regex, "$1/" + a + "$13")),
        (d = d.replace("//" + a, "/" + a)),
        d.startsWith("/" + a) && (d = d.substr(1)),
        new Url(d))
      : new Url(d.replace(e, a))
    : this.add("use", a.replace(".aspx", ""));
};
Url.prototype.request = function (a, b, c, d) {
  "undefined" == typeof a && (a = "GET");
  "undefined" == typeof b && (b = null);
  "undefined" == typeof c && (c = !1);
  var e = this,
    f = new XMLHttpRequest();
  null == b &&
    "POST" == a.toUpperCase() &&
    ((b = this.server()),
    (e = new Url(null != b ? b + this.page() : this.page())),
    (b = this.query()));
  f.open(a.toUpperCase(), e.add("rnd", rndString()), !1);
  f.setRequestHeader("snakeware-ajax", "true");
  "POST" == a.toUpperCase() &&
    f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  f.send(b);
  if (200 == f.status) return c ? f.responseXML : f.responseText;
  (d || "undefined" == typeof d) && this.showError(f);
  return !1;
};
Url.prototype.requestJson = function (a, b, c) {
  a = this.request(a, b, !1, c);
  return this.convertToJson(a);
};
Url.prototype.server = function () {
  var a = this.url().replace(Url.regex, "$1");
  "" == a ? (a = null) : a.endsWith("/") || (a += "/");
  return a;
};
Url.prototype.showError = function (a) {
  null != this.HTTP && "undefined" == typeof a && (a = this.HTTP);
  alertWin(a.responseText);
};
Url.prototype.toExternal = function () {
  var a = this.server(),
    b = this.url();
  null == a && (b = Url.current.server() + b);
  return new Url(b);
};
Url.prototype.toString = function () {
  return this.url();
};
Url.all = [];
Url.current = new Url();
Url.disposed = !1;
Url.files = /^(https?:\/\/((localhost(:\d+)?\/(wwwroot(\.dev|\.local)?)?)|([^\/\?]+))\/)?(([^\/\.]+\/)*[^\?]*?)?(\?.*)?$/i;
Url.local = /^([a-zA-Z0-9\-]+|(http:\/\/)?localhost:\d+)?(\/\S*)?$/i;
Url.regex = /^(https?:\/\/((localhost(:\d+)?\/(wwwroot(\.dev|\.local)?)?)|([^\/\?]+))\/?)?(([^\/\.]+\/)*([^\?#]+(\.(\w+))?)?)?([#\?].*)?$/i;
Url.relative = /^(\/\S*)?$/i;
Url.unload = null;
Url.valid = /^(https?\:\/\/)?((([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)*([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?)(\.[a-zA-Z]{2,7}))|(\d{1,3}(\.\d{1,3}){3}))(\/\S*)?$/i;
Url.dispose = function () {
  if (!Url.disposed) {
    for (var a = 0; a < Url.all.length; a++)
      Url.all[a].dispose(), (Url.all[a] = null);
    Url.all = [];
    Url.disposed = !0;
    Url.regex = null;
  }
};
Url.isLocal = function (a) {
  if (null == a) return !1;
  Url.isUrl(a) && (a = a.toString());
  return Url.local.test(a);
};
Url.isRelative = function (a) {
  if (null == a) return !1;
  Url.isUrl(a) && (a = a.toString());
  return Url.relative.test(a);
};
Url.isUrl = function (a) {
  return "Url" == Object.getClass(a);
};
Url.isValid = function (a) {
  if (null == a) return !1;
  Url.isUrl(a) && (a = a.toString());
  var b = a.replace(Url.valid, "$9");
  if ("" != b && null != b)
    for (var b = b.split("."), c = 0; c < b.length; c++)
      if (255 < Number(b[c])) return !1;
  return Url.valid.test(a);
};
Object.getClass = function (a) {
  return null == a
    ? null
    : "undefined" != typeof a && "undefined" != typeof a.Class
    ? a.Class
    : typeof a;
};
var Log = {
    active: !1,
    Class: "Log",
    included: !1,
    doWrite: function () {},
    error: function (a) {
      a.description
        ? Log.write("ERROR", a.description)
        : a.message
        ? Log.write("ERROR", a.message)
        : Log.write("ERROR", a);
    },
    write: function () {
      if (Log.active && !Log.included) {
        var a = new Url("js/default/versions/1/log.js").request();
        eval(a);
        Log.included = !0;
        Log.write.apply(this, arguments);
      }
    },
  },
  Cookies = {
    accept: function () {
      this.set("AcceptedCookies", !0);
      var a = Html.get("cWarn");
      a && Html.remove(a);
      (a = Html.get("cSpace")) && Html.remove(a);
    },
    exists: function (a) {
      return null != Cookies(a);
    },
    get: function (a) {
      a = getCookie(a);
      if (null == a) return a;
      a = String(a).split("|~~|");
      var b = 1 < a.length ? parseInt(a[1]) : dtString;
      return a.length ? convert(a[0], b) : null;
    },
    remove: function (a) {
      removeCookie(a);
    },
    set: function (a, b, c) {
      if (null == b && "null" == String(b)) removeCookie(a);
      else {
        "undefined" == typeof c &&
          (c =
            "boolean" == typeof b
              ? dtBoolean
              : "number" == typeof b
              ? String(b).contains(".")
                ? dtDouble
                : dtInteger
              : "object" == typeof b && "undefined" != typeof b.formatString
              ? dtDateTime
              : dtString);
        switch (c) {
          case dtBoolean:
            b = b ? "true" : "false";
            break;
          case dtDateTime:
            b = b.formatString("g");
            break;
          default:
            b = String(b);
        }
        setCookie(a, b + ("|~~|" + c));
      }
    },
  },
  Html = {
    addClass: function (a, b) {
      Element.addClassName(a, b);
    },
    blur: function (a) {
      Element.removeClassName(a, "focused");
    },
    disable: function (a) {
      Element.addClassName(a, "disabled");
    },
    enable: function (a) {
      Element.removeClassName(a, "disabled");
    },
    find: function (a, b, c) {
      "undefined" == typeof c && (c = !1);
      if (a && "undefined" != typeof a.childNodes) {
        for (var d = 0; d < a.childNodes.length; d++) {
          var e = a.childNodes[d];
          if (b == ntText) {
            if ("undefined" != typeof e.data && "" != e.data && null != e.data)
              return e;
          } else if (e.nodeType == b) return e;
        }
        if (c)
          for (d = 0; d < a.childNodes.length; )
            return (e = a.childNodes[d]), Html.find(e, b, !0);
      }
      return null;
    },
    findAll: function (a, b, c, d) {
      "undefined" == typeof d && (d = []);
      "undefined" == typeof c && (c = !1);
      if (a && "undefined" != typeof a.childNodes)
        for (var e = 0; e < a.childNodes.length; e++) {
          var f = a.childNodes[e];
          b == ntText
            ? "undefined" != typeof f.data &&
              "" != f.data &&
              null != f.data &&
              d.add(f)
            : f.nodeType == b && d.add(f);
          c && (d = Html.findAll(f, b, !0, d));
        }
      return d;
    },
    focus: function (a) {
      Element.addClassName(a, "focused");
    },
    get: function (a) {
      if (1 < arguments.length) {
        for (var b = 0; b < arguments.length; b++) {
          var c = Html.get(arguments[b]);
          if (c) return c;
        }
        return null;
      }
      return "string" == typeof a
        ? document.getElementById(a)
        : "undefined" == typeof a
        ? null
        : a;
    },
    getLineHeight: function (a) {
      if (browser == browsers.IE) {
        var b = a.parentNode.appendChild(document.createElement(a.nodeName));
        b.innerHTML = "testje";
        b.style.border = "0px solid";
        b.style.height = "auto";
        b.style.margin = "0px";
        b.style.padding = "0px";
        b.style.width = "1000px";
        b.rows = 1;
        a = b.clientHeight;
        b.parentNode.removeChild(b);
        return a;
      }
      return parseInt(Element.getStyle(a, "line-height"));
    },
    getText: function (a) {
      a = Html.findAll(a, ntText, !0);
      for (var b = "", c = 0; c < a.length; c++) b += a[c].data;
      return b.trim();
    },
    hasClass: function (a, b) {
      return Element.hasClassName(a, b);
    },
    moveBottom: function (a) {
      return Html.nextElement(a) ? (a.parentNode.appendChild(a), !0) : !1;
    },
    moveDown: function (a) {
      var b = Html.nextElement(a);
      return b
        ? ((b = Html.nextElement(b))
            ? a.parentNode.insertBefore(a, b)
            : a.parentNode.appendChild(a),
          !0)
        : !1;
    },
    moveTop: function (a) {
      return Html.previousElement(a)
        ? (a.parentNode.insertBefore(a, a.parentNode.firstChild), !0)
        : !1;
    },
    moveUp: function (a) {
      var b = Html.previousElement(a);
      return b ? (a.parentNode.insertBefore(a, b), !0) : !1;
    },
    nextElement: function (a) {
      for (a = a.nextSibling; a && a.nodeType != ntElement; ) a = a.nextSibling;
      return a;
    },
    previousElement: function (a) {
      for (a = a.previousSibling; a && a.nodeType != ntElement; )
        a = a.previousSibling;
      return a;
    },
    remove: function (a) {
      a.parentNode && a.parentNode.removeChild(a);
    },
    removeClass: function (a, b) {
      Element.removeClassName(a, b);
    },
    setText: function (a, b) {
      null == b && (b = "");
      "string" != typeof b && (b = String(b));
      var c = Html.find(a, ntText);
      null != c
        ? (c.data = b)
        : a.insertBefore(document.createTextNode(b), a.firstChild);
    },
    toAttrib: function (a) {
      if (null != a) {
        for (a = String(a); -1 < a.indexOf("&amp;"); )
          a = a.replace(/\&amp;/gi, "&");
        a = a.replace(/\&/gi, "&amp;");
        a = a.replace(/\"/gi, "&quot;");
        a = a.replace(/</gi, "&lt;");
        a = a.replace(/>/gi, "&gt;");
      } else a = "";
      return a;
    },
    toHtml: function (a) {
      null != a
        ? ((a = String(a)),
          (a = a.htmlEncode()),
          (a = a.replace(/\r?\n/gi, "<br/>")),
          (a = a.trim()))
        : (a = "");
      return a;
    },
    toText: function (a) {
      var b;
      if (null != a) {
        a = String(a);
        a = a.replace(/[\r?\n]/gi, "");
        a = a.replace(/<p>&nbsp;<\/p>/gi, "<p></p>");
        a = a.replace(/<br\/?>/gi, "\r\n");
        a = a.replace(/<\/p>/gi, "\r\n");
        a = a.replace(/<\/h\d>/gi, "\r\n");
        a = a.replace(/<\/?[^>]+>/gi, "");
        for (var c = 0; c < charCodes.length; c++)
          (b = new RegExp(RegExp.escape(specialChar[charCodes[c] - 160]), "g")),
            (a = a.replace(b, String.fromCharCode(charCodes[c])));
        b = RegExp("&#(\\d{3});", "g");
        for (c = a.match(b); c; ) {
          var d = parseInt(c[0].replace("&#", ""));
          a = a.replace(c[0], String.fromCharCode(d));
          c = a.match(b);
        }
        a = a.trim();
      }
      return a;
    },
  },
  Counter = {
    changes: [],
    element: null,
    func: null,
    max: 99,
    min: 1,
    startValue: null,
    stop: !1,
    timer: null,
    action: function (a) {
      clearTimeout(Counter.timer);
      var b = Number(Counter.element.value.replace(",", "."));
      b + a < this.min
        ? ((Counter.element.value = this.min), (Counter.stop = !0))
        : b + a > this.max
        ? ((Counter.element.value = this.max), (Counter.stop = !0))
        : ((Counter.stop && Counter.startValue != b) ||
            (Counter.element.value = b + a),
          Counter.stop ||
            (Counter.timer = setTimeout("Counter.action( " + a + ");", 200)));
      Counter.stop && Counter.stopped();
    },
    end: function () {
      Counter.stop = !0;
    },
    init: function (a, b) {
      "undefined" == typeof b && (b = null);
      if (a && !a.chEvent && b) {
        "string" == typeof b && (b = new Function("value", b));
        var c = Counter.changes.length;
        Counter.changes.add({ element: a, func: b });
        a.onchange = null;
        a.removeAttribute("onchange");
        a.chEvent = addEvent(a, "change", "Counter.onChange(" + c + ");");
        if (browser != browsers.IE || 9 <= version) Counter.onChange(c);
      }
    },
    onChange: function (a) {
      if (!(a >= Counter.changes.length)) {
        var b = Counter.changes[a].element;
        a = Counter.changes[a].func;
        var c = Number(b.value.replace(",", "."));
        "undefined" != typeof b.field && b.field.value(c);
        null != a && ((c = convert(c, dtDouble)), a(c));
      }
    },
    start: function (a, b, c) {
      "string" != typeof a && (a = xFind(a.parentNode, "input").id);
      "undefined" == typeof b
        ? (b = 1)
        : NaN == Number(b)
        ? (b = 1)
        : 1 < b
        ? (b = 1)
        : -1 > b && (b = -1);
      "undefined" == typeof c && (c = null);
      null == Counter.timer &&
        ("string" == typeof c && (c = new Function("value", c)),
        (a = Html.get(a)),
        (Counter.func = c),
        (Counter.stop = !1),
        (Counter.element = a),
        (Counter.startValue = Number(a.value.replace(",", "."))),
        (Counter.timer = setTimeout("Counter.action( " + b + " );", 100)),
        a.field ||
          a.chEvent ||
          !c ||
          ((b = Counter.changes.length),
          Counter.changes.add({ element: a, func: c }),
          (a.onchange = null),
          a.removeAttribute("onchange"),
          (a.chEvent = addEvent(a, "change", "Counter.onChange(" + b + ");"))));
    },
    stopped: function () {
      if (null != Counter.timer) {
        clearTimeout(Counter.timer);
        var a = Counter.element,
          b = Counter.func;
        Counter.element = null;
        Counter.func = null;
        Counter.startValue = null;
        Counter.timer = null;
        "undefined" != typeof a.field &&
          a.field.value(a.value.replace(",", "."));
        null != b && b(a.value.replace(",", "."));
      }
    },
    unload: function (a) {
      Counter.stopped();
      for (a = 0; a < Counter.changes.length; a++)
        Counter.changes[a].element.chEvent = null;
      Counter.changes.clear();
    },
  };
addEvent(window, "unload", "Counter.unload(event);");
var Flipbook = {
    width: 922,
    height: 600,
    open: function (a, b, c) {
      "undefined" == typeof b && (b = 1024);
      "undefined" == typeof c && (c = 800);
      a = new Url(server + "misc/flipbook.aspx")
        .add("steID", steID)
        .add("itmID", a);
      b = window.open(
        a,
        "frmFlipbook",
        "menubar=0,location=1,toolbar=0,scrollbars=0,resizable=0,status=0,width=" +
          b +
          ",height=" +
          c
      );
      b.opener = window;
      b && b.focus();
    },
  },
  Analytics = {
    trackEvent: function (a, b, c) {
      "object" === typeof _gaq
        ? _gaq.push(["_trackEvent", a, b, c])
        : "function" === typeof ga
        ? ga("send", "event", a, b, c)
        : "undefined" !== typeof console && console.log(a, ",", b, ",", c);
    },
  },
  Sw;
(function (a) {
  a.initImage = function (a) {
    a = $(a);
    var c = a.data("src");
    a.is(":visible") && a.attr("src") != c && a.attr("src", c);
  };
})(Sw || (Sw = {}));

var base64 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function (c) {
    var a = "",
      d = 0,
      b,
      e,
      f,
      g,
      h,
      k;
    for (c = base64._utf8_encode(c); d < c.length; )
      (b = c.charCodeAt(d++)),
        (e = c.charCodeAt(d++)),
        (f = c.charCodeAt(d++)),
        (g = b >> 2),
        (b = ((b & 3) << 4) | (e >> 4)),
        (h = ((e & 15) << 2) | (f >> 6)),
        (k = f & 63),
        isNaN(e) ? (h = k = 64) : isNaN(f) && (k = 64),
        (a =
          a +
          this._keyStr.charAt(g) +
          this._keyStr.charAt(b) +
          this._keyStr.charAt(h) +
          this._keyStr.charAt(k));
    return a;
  },
  decode: function (c) {
    var a = "",
      d = 0,
      b,
      e,
      f,
      g,
      h;
    for (c = c.replace(/[^A-Za-z0-9\+\/\=]/g, ""); d < c.length; )
      (b = this._keyStr.indexOf(c.charAt(d++))),
        (e = this._keyStr.indexOf(c.charAt(d++))),
        (g = this._keyStr.indexOf(c.charAt(d++))),
        (h = this._keyStr.indexOf(c.charAt(d++))),
        (b = (b << 2) | (e >> 4)),
        (e = ((e & 15) << 4) | (g >> 2)),
        (f = ((g & 3) << 6) | h),
        (a += String.fromCharCode(b)),
        64 != g && (a += String.fromCharCode(e)),
        64 != h && (a += String.fromCharCode(f));
    return base64._utf8_decode(a);
  },
  _utf8_encode: function (c) {
    c = c.replace(/\r\n/g, "\n");
    for (var a = "", d = 0; d < c.length; d++) {
      var b = c.charCodeAt(d);
      128 > b
        ? (a += String.fromCharCode(b))
        : (127 < b && 2048 > b
            ? (a += String.fromCharCode((b >> 6) | 192))
            : ((a += String.fromCharCode((b >> 12) | 224)),
              (a += String.fromCharCode(((b >> 6) & 63) | 128))),
          (a += String.fromCharCode((b & 63) | 128)));
    }
    return a;
  },
  _utf8_decode: function (c) {
    for (var a = "", d = 0, b = (c1 = c2 = 0); d < c.length; )
      (b = c.charCodeAt(d)),
        128 > b
          ? ((a += String.fromCharCode(b)), d++)
          : 191 < b && 224 > b
          ? ((c2 = c.charCodeAt(d + 1)),
            (a += String.fromCharCode(((b & 31) << 6) | (c2 & 63))),
            (d += 2))
          : ((c2 = c.charCodeAt(d + 1)),
            (c3 = c.charCodeAt(d + 2)),
            (a += String.fromCharCode(
              ((b & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
            )),
            (d += 3));
    return a;
  },
};

var TWeekDay = "wdSunday wdMonday wdTuesday wdWednesday wdThursday wdFriday wdSaturday".split(
    " "
  ),
  wdSunday = 0,
  wdMonday = 1,
  wdTuesday = 2,
  wdWednesday = 3,
  wdThursday = 4,
  wdFriday = 5,
  wdSaturday = 6,
  CalendarWeekRule = { FirstDay: 0, FirstFullWeek: 1, FirstFourDayWeek: 2 };
DateTimeFormat = function (a, b, c, e, f, l, g, q) {
  this.dateSeparator = a;
  this.longDatePattern = b;
  this.shortDatePattern = c;
  this.timeSeparator = e;
  this.longTimePattern = f;
  this.shortTimePattern = l;
  this.firstDay = g;
  this.firstWeekRule = q || 2;
};
DateTimeFormat.prototype.getDateDisplayPattern = function () {
  for (
    var a = this.shortDatePattern, a = a.split("'"), b = 1;
    b < a.length;
    b++
  )
    a[b] = "";
  a = a.join("");
  return a
    .replace(
      new RegExp("[^dmy" + regExp.escape(this.dateSeparator) + "]", "gi"),
      ""
    )
    .trim();
};
DateTimeFormat.prototype.getTimeDisplayPattern = function () {
  for (
    var a = this.shortTimePattern, a = a.split("'"), b = 1;
    b < a.length;
    b++
  )
    a[b] = "";
  a = a.join("");
  return a
    .replace(
      new RegExp("[^hnst" + regExp.escape(this.timeSeparator) + "]", "gi"),
      ""
    )
    .trim();
};
Date.prototype.addDays = function (a) {
  var b = new Date(this);
  b.setDate(this.getDate() + a);
  return b;
};
Date.prototype.addHours = function (a) {
  var b = new Date(this);
  b.setHours(this.getHours() + a);
  return b;
};
Date.prototype.addMinutes = function (a) {
  var b = new Date(this);
  b.setMinutes(this.getMinutes() + a);
  return b;
};
Date.prototype.addMonths = function (a) {
  var b = new Date(this);
  b.setMonth(this.getMonth() + a);
  return b;
};
Date.prototype.addSeconds = function (a) {
  var b = new Date(this);
  b.setSeconds(this.getSeconds() + a);
  return b;
};
Date.prototype.addYears = function (a) {
  var b = new Date(this);
  b.setFullYear(this.getFullYear() + a);
  return b;
};
Date.prototype.age = function () {
  var a = new Date(),
    b = a.getFullYear() - this.getFullYear();
  (a.getMonth() < this.getMonth() ||
    (a.getMonth() == this.getMonth() && a.getDate() < this.getDate())) &&
    b--;
  return b;
};
Date.prototype.daysInMonth = function () {
  return Date.daysInMonth(this.getMonth() + 1, this.getFullYear());
};
Date.prototype.formatString = function (a) {
  var b = String(a);
  null == a || "" == a || "undefined" == typeof a
    ? (b =
        Date.formatInfo.shortDatePattern +
        " " +
        Date.formatInfo.shortTimePattern)
    : "s" == a
    ? (b = "yyyy-mm-ddTHH:nn:ss")
    : "d" == a
    ? (b = Date.formatInfo.shortDatePattern)
    : "D" == a
    ? (b = Date.formatInfo.longDatePattern)
    : "t" == a
    ? (b = Date.formatInfo.shortTimePattern)
    : "T" == a
    ? (b = Date.formatInfo.longTimePattern)
    : "f?" == a
    ? (b =
        0 == this.getHours() && 0 == this.getMinutes()
          ? Date.formatInfo.longDatePattern
          : Date.formatInfo.longDatePattern +
            " " +
            Date.formatInfo.shortTimePattern)
    : "f" == a
    ? (b =
        Date.formatInfo.longDatePattern +
        " " +
        Date.formatInfo.shortTimePattern)
    : "F?" == a
    ? (b =
        0 == this.getHours() && 0 == this.getMinutes() && 0 == this.getSeconds()
          ? Date.formatInfo.longDatePattern
          : Date.formatInfo.longDatePattern +
            " " +
            Date.formatInfo.longTimePattern)
    : "F" == a
    ? (b =
        Date.formatInfo.longDatePattern + " " + Date.formatInfo.longTimePattern)
    : "g?" == a
    ? (b =
        0 == this.getHours() && 0 == this.getMinutes()
          ? Date.formatInfo.shortDatePattern
          : Date.formatInfo.shortDatePattern +
            " " +
            Date.formatInfo.shortTimePattern)
    : "g" == a
    ? (b =
        Date.formatInfo.shortDatePattern +
        " " +
        Date.formatInfo.shortTimePattern)
    : "G?" == a
    ? (b =
        0 == this.getHours() && 0 == this.getMinutes() && 0 == this.getSeconds()
          ? Date.formatInfo.shortDatePattern
          : Date.formatInfo.shortDatePattern +
            " " +
            Date.formatInfo.longTimePattern)
    : "G" == a &&
      (b =
        Date.formatInfo.shortDatePattern +
        " " +
        Date.formatInfo.longTimePattern);
  b = b.replace(/\%/g, "");
  b = b.replace(/\//g, Date.formatInfo.dateSeparator);
  b = b.replace(/-/g, Date.formatInfo.dateSeparator);
  b = b.replace(/:/g, Date.formatInfo.timeSeparator);
  b = b.replace(/yyyy/gi, this.getFullYear());
  if (-1 < b.toLowerCase().indexOf("yyy"))
    throw Error('Illegal yearformat "yyy".');
  b = b.replace(/yy/gi, new String(this.getFullYear()).substr(2));
  b = b.replace(/^mm$/gi, fillOut(this.getMonth() + 1));
  b = b.replace(/^mm([^m])/gi, fillOut(this.getMonth() + 1) + "$1");
  b = b.replace(/([^m])mm$/gi, "$1" + fillOut(this.getMonth() + 1));
  b = b.replace(/([^m])mm([^m])/gi, "$1" + fillOut(this.getMonth() + 1) + "$2");
  b = b.replace(/^m$/gi, this.getMonth() + 1);
  b = b.replace(/^m([^m])/gi, this.getMonth() + 1 + "$1");
  b = b.replace(/([^m])m$/gi, "$1" + (this.getMonth() + 1));
  b = b.replace(/([^m])m([^m])/gi, "$1" + (this.getMonth() + 1) + "$2");
  b = b.replace(/^dd$/gi, fillOut(this.getDate()));
  b = b.replace(/^dd([^d])/gi, fillOut(this.getDate()) + "$1");
  b = b.replace(/([^d])dd$/gi, "$1" + fillOut(this.getDate()));
  b = b.replace(/([^d])dd([^d])/gi, "$1" + fillOut(this.getDate()) + "$2");
  b = b.replace(/^d$/gi, this.getDate());
  b = b.replace(/^d([^d])/gi, this.getDate() + "$1");
  b = b.replace(/([^d])d$/gi, "$1" + this.getDate());
  b = b.replace(/([^d])d([^d])/gi, "$1" + this.getDate() + "$2");
  12 < this.getHours()
    ? ((b = b.replace(/hh/g, fillOut(this.getHours() - 12))),
      (b = b.replace(/h/g, this.getHours() - 12)))
    : 0 == this.getHours()
    ? ((b = b.replace(/hh/g, "12")), (b = b.replace(/h/g, "12")))
    : ((b = b.replace(/hh/g, fillOut(this.getHours()))),
      (b = b.replace(/h/g, this.getHours())));
  b = b.replace(/HH/g, fillOut(this.getHours()));
  b = b.replace(/H/g, this.getHours());
  b = b.replace(/nn/gi, fillOut(this.getMinutes()));
  b = b.replace(/n/gi, this.getMinutes());
  b = b.replace(/ss/gi, fillOut(this.getSeconds()));
  b = b.replace(/s/gi, this.getSeconds());
  12 > this.getHours()
    ? ((b = b.replace(/tt/g, "AM")), (b = b.replace(/t/g, "A")))
    : ((b = b.replace(/tt/g, "PM")), (b = b.replace(/t/g, "P")));
  b = b.replace(/mmmm/gi, months[this.getMonth()]);
  b = b.replace(/mmm/gi, months[this.getMonth()].substr(0, 3));
  b = b.replace(/dddd/gi, days[this.getDay()]);
  b = b.replace(/ddd/gi, days[this.getDay()].substr(0, 2));
  "s" == a &&
    ("-" != this.dateSeparator &&
      (b = b.replace(
        new RegExp(regExp.escape(Date.formatInfo.dateSeparator), "gi"),
        "-"
      )),
    ":" != this.timeSeparator &&
      (b = b.replace(
        new RegExp(regExp.escape(Date.formatInfo.timeSeparator), "gi"),
        ":"
      )));
  return b;
};
Date.prototype.getWeek = function () {
  if (Date.formatInfo.firstWeekRule == CalendarWeekRule.FirstDay) {
    var a = this.getFullYear(),
      b = new Date(a, 0, 1).getDay();
    0 == b ? (b = 6) : b--;
    var c =
      (Date.UTC(a, this.getMonth(), this.getDate(), 0, 0, 0) -
        Date.UTC(a, 0, 1, 0, 0, 0)) /
        864e5 +
      1;
    4 > b
      ? (b = Math.floor((c + b - 1) / 7) + 1)
      : ((b = Math.floor((c + b - 1) / 7)),
        0 == b &&
          ((a = new Date(--a, 0, 1).getDay()),
          0 == a ? (a = 6) : a--,
          (b = 4 > a ? 53 : 52)));
  } else
    var a = this.getFullYear(),
      c = this.getMonth() + 1,
      b = this.getDate() + Date.formatInfo.firstDay - 1,
      e = Math.floor((14 - c) / 12),
      a = a + 4800 - e,
      a =
        b +
        Math.floor((153 * (c + 12 * e - 3) + 2) / 5) +
        365 * a +
        (Math.floor(a / 4) - Math.floor(a / 100) + Math.floor(a / 400)) -
        32045,
      a = (((a + 31741 - (a % 7)) % 146097) % 36524) % 1461,
      b = Math.floor(a / 1460),
      b = Math.floor((((a - b) % 365) + b) / 7) + 1;
  return b;
};
Date.prototype.integrateDate = function (a) {
  var b = new Date(this);
  b.setMonth(0);
  b.setDate(a.getDate());
  b.setMonth(a.getMonth());
  b.setFullYear(a.getFullYear());
  return b;
};
Date.prototype.integrateTime = function (a) {
  var b = new Date(this);
  b.setHours(a.getHours());
  b.setMinutes(a.getMinutes());
  b.setSeconds(a.getSeconds());
  b.setMilliseconds(a.getMilliseconds());
  return b;
};
Date.prototype.isLeapYear = function () {
  return Date.isLeapYear(this.getFullYear());
};
Date.prototype.isSame = function (a) {
  return this.isSameDate(a) && this.isSameTime(a);
};
Date.prototype.isSameDate = function (a) {
  return (
    this.getDate() == a.getDate() &&
    this.getMonth() == a.getMonth() &&
    this.getFullYear() == a.getFullYear()
  );
};
Date.prototype.isSameMonth = function (a) {
  return (
    this.getFullYear() == a.getFullYear() && this.getMonth() == a.getMonth()
  );
};
Date.prototype.isSameTime = function (a) {
  return (
    this.getSeconds() == a.getSeconds() &&
    this.getMinutes() == a.getMinutes() &&
    this.getHours() == a.getHours()
  );
};
Date.prototype.isSameWeek = function (a) {
  return this.getFullYear() == a.getFullYear() && this.weekNo() == a.weekNo();
};
Date.prototype.isSameYear = function (a) {
  return this.getFullYear() == a.getFullYear();
};
Date.prototype.jsDate = function () {
  return (
    "new Date(" +
    this.getFullYear() +
    ", " +
    this.getMonth() +
    ", " +
    this.getDate() +
    ", " +
    this.getHours() +
    ", " +
    this.getMinutes() +
    ", " +
    this.getSeconds() +
    ", " +
    this.getMilliseconds() +
    ")"
  );
};
Date.prototype.nextDay = function (a) {
  a || (a = 1);
  var b = new Date(this);
  b.getDate() + a <= b.daysInMonth()
    ? b.setDate(b.getDate() + a)
    : 11 > b.getMonth()
    ? (b.setDate(b.getDate() + a - b.daysInMonth()),
      b.setMonth(b.getMonth() + 1))
    : (b.setDate(b.getDate() + a - b.daysInMonth()),
      b.setYear(b.getFullYear() + 1),
      b.setMonth(0));
  return b;
};
Date.prototype.nextMonth = function () {
  var a = new Date(this);
  if (11 > a.getMonth())
    for (a.setMonth(a.getMonth() + 1); a.getMonth() > this.getMonth() + 1; )
      a = a.priorDay();
  else a.setMonth(0), a.setYear(a.getFullYear() + 1);
  return a;
};
Date.prototype.nextWeek = function () {
  return this.nextDay(7);
};
Date.prototype.nextYear = function (a) {
  a || (a = 1);
  var b = new Date(this);
  b.setYear(b.getFullYear() + a);
  return b;
};
Date.prototype.priorDay = function (a) {
  "undefined" == typeof a && (a = 1);
  var b = new Date(this);
  1 <= b.getDate() - a
    ? b.setDate(b.getDate() - a)
    : (0 < b.getMonth()
        ? b.setMonth(b.getMonth() - 1)
        : (b.setYear(b.getFullYear() - 1), b.setMonth(11)),
      b.setDate(b.daysInMonth() - a + b.getDate()));
  return b;
};
Date.prototype.priorWeek = function () {
  return this.priorDay(7);
};
Date.prototype.priorMonth = function () {
  var a = new Date(this);
  if (0 < a.getMonth())
    for (a.setMonth(a.getMonth() - 1); a.getMonth() == this.getMonth(); )
      a = a.priorDay();
  else a.setMonth(11), a.setYear(a.getFullYear() - 1);
  return a;
};
Date.prototype.priorYear = function (a) {
  a || (a = 1);
  var b = new Date(this);
  b.setYear(b.getFullYear() - a);
  return b;
};
Date.prototype.round = function () {
  var a = new Date(this);
  a.setHours(0);
  a.setMinutes(0);
  a.setSeconds(0);
  a.setMilliseconds(0);
  return a;
};
Date.prototype._setTime = Date.prototype.setTime;
Date.prototype.setTime = function () {
  if (0 == arguments.length) return new Date(this);
  var a = arguments[0],
    b = 1 < arguments.length ? parseInt(arguments[1]) : 0,
    c = 2 < arguments.length ? parseInt(arguments[2]) : 0,
    e = 3 < arguments.length ? parseInt(arguments[3]) : 0;
  if ("string" == typeof a) {
    var f = Date.isTime(a);
    if (f)
      (a = f.getHours()),
        (b = f.getMinutes()),
        (c = f.getSeconds()),
        (e = f.getMilliseconds());
    else if (((a = parseInt(a)), isNaN(a)))
      throw Error("Invalid first argument.");
  }
  if (isNaN(b)) throw Error("Invalid second argument.");
  if (isNaN(c)) throw Error("Invalid third argument.");
  if (isNaN(e)) throw Error("Invalid fourth argument.");
  if (1e3 > a && -1e3 < a)
    return (
      (f = new Date(this)),
      f.setHours(a),
      f.setMinutes(b),
      f.setSeconds(c),
      f.setMilliseconds(e),
      f
    );
  Date.prototype._setTime.apply(this, arguments);
};
Date.prototype.weekNo = function () {
  return this.getWeek();
};
Date.current = new Date();
Date.daysInMonth = function (a, b) {
  "undefined" == typeof b && (b = Date.current.getYear());
  switch (a) {
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return Date.isLeapYear(b) ? 29 : 28;
    default:
      return 31;
  }
};
Date.isLeapYear = function (a) {
  return 0 == a % 4 && (a % 100 || 0 == a % 1e3);
};
Date.isDate = function (a) {
  return isDate(a);
};
Date.isDateTime = function (a) {
  return isDateTime(a);
};
Date.isSame = function (a, b) {
  return (null != a && null == b) || (null == a && null != b)
    ? !1
    : null == a && null == b
    ? !0
    : a.isSame(b);
};
Date.isSameDate = function (a, b) {
  return (null != a && null == b) || (null == a && null != b)
    ? !1
    : null == a && null == b
    ? !0
    : a.isSameDate(b);
};
Date.isSameMonth = function (a, b) {
  return (null != a && null == b) || (null == a && null != b)
    ? !1
    : null == a && null == b
    ? !0
    : a.isSameMonth(b);
};
Date.isSameTime = function (a, b) {
  return (null != a && null == b) || (null == a && null != b)
    ? !1
    : null == a && null == b
    ? !0
    : a.isSameTime(b);
};
Date.isSameWeek = function (a, b) {
  return (null != a && null == b) || (null == a && null != b)
    ? !1
    : null == a && null == b
    ? !0
    : a.isSameWeek(b);
};
Date.isSameYear = function (a, b) {
  return (null != a && null == b) || (null == a && null != b)
    ? !1
    : null == a && null == b
    ? !0
    : a.isSameYear(b);
};
Date.isTime = function (a) {
  return isTime(a);
};
Date.isValidDate = function (a, b, c) {
  return isNaN(a) || isNaN(b) || isNaN(c) || 0 > b || 11 < b || 1 > c
    ? !1
    : 0 == b || 2 == b || 4 == b || 6 == b || 7 == b || 9 == b || 11 == b
    ? 31 >= c
    : 3 == b || 5 == b || 8 == b || 10 == b
    ? 30 >= c
    : 1 == b
    ? Date.isLeapYear(a)
      ? 29 >= c
      : 28 >= c
    : !1;
};
TDay = function (a, b, c, e) {
  this.owner = a;
  this.date = new Date(b);
  this.disabled = c ? !0 : !1;
  this.className = "undefined" != typeof e ? String(e) : null;
};
TDay.prototype.toString = function () {
  return (
    "{date:" +
    valueString(this.date) +
    ", disabled:" +
    this.disabled +
    ", className: " +
    valueString(this.className) +
    "}"
  );
};
var AllowTime = { yes: !0, no: !1, dontShow: "don't show" };
TDateInput = function (a, b, c, e, f, l) {
  var g = f,
    q = c,
    m = null,
    k = l ? new Date(l) : null,
    p = [],
    h = !1,
    d = [],
    r = null,
    w = b,
    z = TDateInput.instances.length,
    u = null,
    n = new Date(9999, 11, 31, 23, 59, 59),
    t = new Date(1753, 0, 1),
    v = k ? k : new Date();
  this.allowTime = e;
  this.autoHide = TDateInput.autoHide;
  this.autoFocus = TDateInput.autoFocus;
  this.blockedMessage = blockedMessage[Languages.current];
  this.Class = "TDateInput";
  this.doHide = !0;
  this.maxDateMessage = maxDateMessage[Languages.current];
  this.minDateMessage = minDateMessage[Languages.current];
  this.onshow = this.onchange = null;
  this.settingDate = !1;
  this.timer = 0;
  if ("undefined" == typeof a || 0 == String(a).length)
    throw Error('Illegal call to constructor. "name" cannot be empty.');
  "undefined" == typeof e && (this.allowTime = !1);
  if ("undefined" == typeof b)
    throw Error('Illegal call to constructor. "element" cannot be empty.');
  if ("undefined" == typeof c)
    throw Error('Illegal call to constructor. "button" cannot be empty.');
  if (!g) g = [];
  else if (!g.contains)
    throw Error(
      'Illegal call to constructor. "block" should be an array of Date.'
    );
  for (b = 0; b < g.length; b++) {
    if ("function" != typeof g[b].age)
      throw Error(
        'Illegal call to constructor. "block" contains elements which are not of type Date.'
      );
    g[b] = g[b].round();
  }
  TDateInput.instances.add(this);
  this.div = document.createElement("DIV");
  this.div.id = "div" + a.upperFirst();
  this.div.className = "calendar";
  this.div.style.display = "none";
  this.autoHide &&
    ((this.div.onmouseover = new Function(
      "event",
      "TDateInput.instances[" + z + "].stopHide(this);"
    )),
    (this.div.onmouseout = new Function(
      "event",
      "TDateInput.instances[" + z + "].hide(this);"
    )));
  isIE &&
    ((this.frame = document.createElement("IFRAME")),
    (this.frame.id = "frm" + a.upperFirst()),
    (this.frame.src = "misc/default/empty.htm"),
    (this.frame.style.visiblity = "hidden"),
    (this.frame.style.position = "absolute"),
    (this.frame.style.border = "0px solid"),
    this.autoHide &&
      ((this.frame.onmouseover = new Function(
        "event",
        "TDateInput.instances[" + z + "].stopHide(this);"
      )),
      (this.frame.onmouseout = new Function(
        "event",
        "TDateInput.instances[" + z + "].hide(this);"
      ))));
  bodyLoaded ||
    addEvent(window, "load", "TDateInput.instances[" + z + "].init(event);");
  this.blocked = function (a) {
    return g.contains(a);
  };
  this.pButton = function (a) {
    if ("undefined" == typeof a) return q;
    q = Html.get(a);
    if (null == q)
      throw (
        ((q = a),
        Error(
          'Invalid parameter passed to TDateInput constructor. The button element "' +
            a +
            '" does not exist (yet).'
        ))
      );
  };
  this.pClearDays = function (a, b) {
    r = new Date(a);
    u = new Date(b);
    p = [];
  };
  this.pClearFilled = function () {
    d = [];
  };
  this.pDataUrl = function (a) {
    if ("undefined" == typeof a) return m;
    m = "undefined" != typeof a.Class && "Url" == a.Class ? a : new Url(a);
    "string" == typeof w && this.getData();
  };
  this.pDate = function (a, b, c) {
    if ("undefined" == typeof a) return k;
    if (!this.settingDate) {
      this.settingDate = !0;
      if (null != a) {
        if ("undefined" == typeof a.isLeapYear)
          throw Error(
            'Illegal assignment to date. Value is not a date object and not null ("' +
              valueString(a) +
              '").'
          );
        0 == this.allowTime && (a = a.round());
        if (a >= n)
          throw Error(
            this.maxDateMessage.replace("[MAXDATE]", n.formatString("d"))
          );
        if (a < t)
          throw Error(
            this.minDateMessage.replace("[MINDATE]", t.formatString("d"))
          );
        if (this.blocked(a.round()))
          throw Error(
            this.blockedMessage.replace("[DATE]", a.round().formatString("d"))
          );
      }
      isSame(k, a) ||
        ((k = a),
        null == k || "19000101" == k.formatString("yyyymmdd")
          ? ((this.pElement().value = ""), this.write())
          : (this.pShowDate(k), this.pFillElement(k)),
        "boolean" == typeof c && c && this.pHide(),
        this.onchange &&
          ((b =
            "undefined" == typeof b ? createEvent("change") : createEvent(b)),
          (b.srcElement = w),
          this.onchange(b)));
      this.settingDate = !1;
    }
  };
  this.pDispose = function () {
    h ||
      ((h = !0),
      q && (q = q.DateInput = null),
      w && (w = w.DateInput = null),
      (this.frame = this.div = null));
  };
  this.pElement = function (a) {
    if ("undefined" == typeof a) return w;
    w = Html.get(a);
    if (null == w)
      throw (
        ((w = a),
        Error(
          'Invalid parameter passed to TDateInput constructor. The input element "' +
            a +
            '" does not exist (yet).'
        ))
      );
  };
  this.pFilled = function () {
    return d;
  };
  this.pFillElement = function (a) {
    if (null == a) this.pElement().value = "";
    else {
      var b = "000000" != a.formatString("HHnnss");
      1 == this.allowTime && b
        ? (this.pElement().value = a.formatString("g"))
        : (this.pElement().value = a.formatString("d"));
    }
  };
  this.getData = function (a, b) {
    null == b && (b = v);
    if (
      ("undefined" == typeof a ||
        null == a ||
        a.getMonth() != b.getMonth() ||
        a.getFullYear() != b.getFullYear()) &&
      null != m
    ) {
      var c = m.add("date", b.formatString("d")).request("GET", null, !0);
      this.pClearFilled();
      g = [];
      if (null != c && null != c.firstChild && null != c.firstChild.childNodes)
        for (var d = 0; d < c.firstChild.childNodes.length; d++) {
          var e = c.firstChild.childNodes[d],
            f = parseBool(e.getAttribute("disabled")),
            h = e.getAttribute("class"),
            e = parseXmlDate(e.textContent);
          Date.isDate(e) &&
            (f
              ? (g.contains(e) || g.add(e),
                isSame(k, e) && ((k = null), w && (w.value = "")),
                h && this.addFilled(e, h))
              : this.addFilled(e, h));
        }
    }
  };
  this.pGetDay = function (a) {
    a = p[a];
    return "undefined" != typeof a ? a : null;
  };
  this.pGetDays = function () {
    return p;
  };
  this.pGetFirst = function () {
    return r;
  };
  this.pGetLast = function () {
    return u;
  };
  this.pGetRef = function () {
    return "TDateInput.instances[" + z + "]";
  };
  this.pHide = function () {
    this.div.style.display = "none";
    this.frame &&
      this.frame.parentNode == document.body &&
      document.body.removeChild(this.frame);
  };
  this.pMaxDate = function (a) {
    if ("undefined" == typeof a) return n;
    if (null == a) n = new Date(9999, 11, 31);
    else {
      if (a > new Date(9999, 11, 31))
        throw Error("Illegal assignment to maxDate. Max. value is 31-12-9999");
      if (a < new Date(1753, 0, 1))
        throw Error("Illegal assignment to maxDate. Min. value is 1-1-1753");
      if (a <= t)
        throw Error("Illegal assignment to maxDate. Date smaller than minDate");
      n = a.round();
      k && k >= n && this.pDate(n.priorDay());
      v && v >= n ? this.pShowDate(n.priorDay()) : this.write();
    }
  };
  this.pMinDate = function (a) {
    if ("undefined" == typeof a) return t;
    if (null == a) t = new Date(1753, 0, 1);
    else {
      if (a > new Date(9999, 11, 31))
        throw Error("Illegal assignment to minDate. Max. value is 31-12-9999");
      if (a < new Date(1753, 0, 1))
        throw Error("Illegal assignment to minDate. Min. value is 1-1-1753");
      if (a >= n)
        throw Error("Illegal assignment to minDate. Date greater than maxDate");
      t = a.round();
      k && k < t && this.pDate(t);
      v && v < t ? this.pShowDate(t) : this.write();
    }
  };
  this.pName = function () {
    return a;
  };
  this.pShowDate = function (a) {
    var b = v;
    if ("undefined" == typeof a) return v;
    v = a >= n ? n.priorDay() : a < t ? t : a.round();
    if (!isSame(b, v) && (this.getData(b, v), this.write(), this.onshow))
      this.onshow(this);
  };
  this.td = function (a) {
    var b = !1,
      c = "";
    p[a] = new TDay(this, a);
    a < t || a >= n || this.blocked(a)
      ? ((b = !0), (c += ' disabled="true"'), (p[a].disabled = !0))
      : (c +=
          ' onclick="' +
          this.pGetRef() +
          ".setDate(" +
          a.jsDate() +
          ',event,true);"');
    c =
      a.getMonth() != v.getMonth()
        ? c + ' class="calDayOM'
        : c + ' class="calDay';
    a.isSameDate(new Date()) && (c += " calToday");
    k && a.isSameDate(k) && (c += " calSelected");
    "boolean" == typeof d[a] && 1 == d[a]
      ? ((c += " calFilled"), (p[a].className = "calFilled"))
      : "string" == typeof d[a] &&
        "" != d[a] &&
        ((c += " " + d[a]), (p[a].className = d[a]));
    b && (c += " calDisabled");
    c += '"';
    return b
      ? c + ' style="cursor:default"'
      : c +
          ' onmouseover="this.oldclass=this.className;this.className+=\' calSelected\'" onmouseout="this.className=this.oldclass"';
  };
  bodyLoaded && this.init();
};
TDateInput.prototype.addFilled = function (a, b) {
  Date.isDate(a) || (a = new Date(a));
  if ("function" == typeof a.age)
    (b = "undefined" == typeof b || null == b ? !0 : String(b)),
      (this.pFilled()[a.round()] = b),
      (this.pFilled()[this.pFilled().length] = a);
  else
    throw Error(
      'Illegal call to TDateInput.addFilled(). Parameter "date" is no date.'
    );
};
TDateInput.prototype.button = function () {
  return this.pButton();
};
TDateInput.prototype.clearFilled = function () {
  this.pClearFilled();
};
TDateInput.prototype.days = function () {
  return this.pGetDays();
};
TDateInput.prototype.dispose = function () {
  this.pDispose();
};
TDateInput.prototype.dataUrl = function (a) {
  return this.pDataUrl(a);
};
TDateInput.prototype.date = function (a) {
  return this.pDate(a);
};
TDateInput.prototype.dayNo = function (a) {
  return a.getDay() < Date.formatInfo.firstDay
    ? 7 - Date.formatInfo.firstDay + a.getDay()
    : a.getDay() - Date.formatInfo.firstDay;
};
TDateInput.prototype.element = function () {
  return this.pElement();
};
TDateInput.prototype.filled = function () {
  return this.pFilled();
};
TDateInput.prototype.getDay = function (a) {
  return this.pGetDay(a);
};
TDateInput.prototype.hide = function (a, b) {
  this.doHide &&
    ("undefined" == typeof b && (b = 100),
    (this.timer = setTimeout(this.pGetRef() + ".pHide();", b)));
};
TDateInput.prototype.init = function (a) {
  this.pElement(this.pElement());
  this.pElement().DateInput = this;
  "" != this.pElement().value && this.setDate(this.pElement());
  a = this.pGetRef() + ".pElement()";
  this.pElement().onchange &&
    ((this.onchange = new Function(
      "event",
      filterEvent(this.pElement().onchange).replace("this", a)
    )),
    (this.pElement().onchange = null));
  addEvent(
    this.pElement(),
    "change",
    this.pGetRef() + ".setDate(" + a + ",event);"
  );
  isIE && (this.pElement().style.behavior = "");
  this.pButton(this.pButton());
  this.pButton().DateInput = this;
  this.autoHide &&
    (addEvent(this.pButton(), "mouseout", this.pGetRef() + ".hide(this,500);"),
    addEvent(this.pButton(), "mouseover", this.pGetRef() + ".stopHide(this);"));
  addEvent(
    this.pButton(),
    "click",
    this.pGetRef() + ".show(this);event.cancelBubble=true"
  );
  this.pButton().hideFocus && (this.pButton().hideFocus = !0);
  this.write();
  this.autoHide ||
    TDateInput.addedEvent ||
    (addEvent(document.body, "click", "TDateInput.hide();"),
    (TDateInput.addedEvent = !0));
};
TDateInput.prototype.maxDate = function (a) {
  return this.pMaxDate(a);
};
TDateInput.prototype.minDate = function (a) {
  return this.pMinDate(a);
};
TDateInput.prototype.month = function () {
  for (
    var a = this.pGetFirst(),
      b = this.pGetLast(),
      c = b.nextDay(),
      e = [],
      f = a;
    f < c;
    f = f.nextDay()
  )
    e[f] = this.getDay(f);
  return { first: a, last: b, days: e };
};
TDateInput.prototype.name = function () {
  return this.pName();
};
TDateInput.prototype.nextMonth = function (a, b) {
  try {
    return this.pShowDate(this.pShowDate().nextMonth()), cancelEvent(b);
  } catch (c) {
    return (
      (this.settingDate = !1),
      c.description
        ? alert(c.description)
        : c.message
        ? alert(c.message)
        : alert(c),
      !1
    );
  }
};
TDateInput.prototype.priorMonth = function (a, b) {
  try {
    return this.pShowDate(this.pShowDate().priorMonth()), cancelEvent(b);
  } catch (c) {
    return (
      (this.settingDate = !1),
      c.description
        ? alert(c.description)
        : c.message
        ? alert(c.message)
        : alert(c),
      !1
    );
  }
};
TDateInput.prototype.showDate = function (a) {
  return this.pShowDate(a);
};
TDateInput.prototype.setDate = function (a, b, c) {
  var e = this.pElement();
  if (a == e) {
    if (
      ((a =
        0 < String(e.value).length
          ? e.getAttribute("placeholder") == e.value
            ? null
            : 0 != this.allowTime
            ? isDateTime(e.value)
            : isDate(e.value)
          : null),
      0 == a)
    )
      return (
        (a = getIllegalDateMessage()),
        alert(a),
        isIE ? e.select() : (this.pFillElement(this.date()), e.focus()),
        "undefined" != typeof b ? cancelEvent(b) : !1
      );
  } else
    null != a &&
      "function" != typeof a.age &&
      (a = 0 != this.allowTime ? isDateTime(a) : isDate(a));
  var f = this.pDate();
  0 != this.allowTime &&
    null != a &&
    "000000" == a.formatString("HHnnss") &&
    null != f &&
    "000000" != f.formatString("HHnnss") &&
    (a = a.integrateTime(f));
  try {
    return this.pDate(a, b, c), !0;
  } finally {
    return (
      (this.settingDate = !1),
      isIE
        ? e.select()
        : (this.date() ? this.pFillElement(this.date()) : (e.value = ""),
          this.autoFocus && e.focus()),
      "undefined" != typeof b ? cancelEvent(b) : !1
    );
  }
};
TDateInput.prototype.setMonth = function (a) {
  try {
    var b = new Date(this.pShowDate());
    b.setMonth(a.value);
    this.pShowDate(b);
    return !0;
  } catch (c) {
    return (
      c.description
        ? alert(c.description)
        : c.message
        ? alert(c.message)
        : alert(c),
      !1
    );
  }
};
TDateInput.prototype.setYear = function (a) {
  try {
    var b = new Date(this.pShowDate());
    b.setYear(a.value);
    this.pShowDate(b);
    return !0;
  } catch (c) {
    return (
      c.description
        ? alert(c.description)
        : c.message
        ? alert(c.message)
        : alert(c),
      !1
    );
  }
};
TDateInput.prototype.show = function (a) {
  this.div.parentNode != document.body &&
    (document.body.appendChild(this.div),
    isIE && document.body.appendChild(this.frame));
  "none" == this.div.style.display &&
    this.date() &&
    this.pShowDate(this.date());
  a = getLeft(this.pButton()) + this.pButton().offsetWidth;
  var b = getTop(this.pButton()) + this.pButton().offsetHeight,
    c = getLeft(this.pElement()),
    e = getTop(this.pElement()) + this.pElement().offsetHeight;
  this.x = c;
  this.y = Math.max(b, e);
  this.div.style.left = this.x + "px";
  this.div.style.top = this.y + "px";
  this.div.style.zIndex = 9999;
  this.div.style.display = "";
  this.div.style.left =
    0 > a - this.div.offsetWidth ? "0px" : a - this.div.offsetWidth + "px";
  "undefined" != typeof this.frame &&
    ((this.frame.style.zIndex = 9998),
    (this.frame.style.left = this.div.offsetLeft + "px"),
    (this.frame.style.top = this.div.offsetTop + "px"),
    (this.frame.style.width = this.div.offsetWidth + "px"),
    (this.frame.style.height = this.div.offsetHeight + "px"),
    (this.frame.style.visibility = "visible"));
};
TDateInput.prototype.startHiding = function () {
  this.autoHide && (this.doHide = !0);
};
TDateInput.prototype.stopHiding = function () {
  this.doHide = !1;
};
TDateInput.prototype.stopHide = function (a) {
  clearTimeout(this.timer);
  this.timer = 0;
};
TDateInput.prototype.write = function () {
  if (this.div) {
    var a = this.pGetRef(),
      b = new Date(this.pShowDate()),
      c = new Date(this.pMinDate()),
      e = new Date(this.pMaxDate()),
      f = b.getFullYear(),
      l = b.getMonth(),
      g = new Date(f, l, 1),
      q = g.nextMonth(),
      m = this.dayNo(g),
      k = new Date(b),
      p = b.nextMonth(),
      h = "";
    this.pClearDays(g, q.priorDay());
    k.setDate(1);
    k = k.priorDay();
    k = k < c ? ' disabled="true"' : "";
    p.setDate(1);
    var p = p > e ? ' disabled="true"' : "",
      h =
        '<table border="0" cellspacing="0" cellpadding="3">\r\n\t<col/><col/><col/><col/><col/><col/><col/><col/>\r\n\t<tr style="font-size:90%;" onmouseover="' +
        a +
        '.stopHide(this);">\r\n\t\t<td colspan="5" align="center" class="select">\r\n\t\t\t<select onchange="' +
        a +
        ".setMonth(this);" +
        a +
        '.startHiding()" onmousedown="' +
        a +
        ".stopHide(this);" +
        a +
        '.stopHiding()" onmouseleave="' +
        a +
        '.startHiding()">\r\n',
      d = 0,
      r = 11;
    d < c.getMonth() && f == c.getFullYear() && (d = c.getMonth());
    for (
      r > e.getMonth() && f == e.getFullYear() && (r = e.getMonth());
      d < r + 1;
      d++
    )
      h +=
        '\t\t\t\t<option value="' +
        d +
        '"' +
        (d == l ? ' selected="selected"' : "") +
        ">" +
        months[d] +
        "</option>\r\n";
    h +=
      '\t\t\t</select>\r\n\t\t</td>\r\n\t\t<td colspan="3" align="center" class="select">\r\n\t\t\t<select onchange="' +
      a +
      ".setYear(this);" +
      a +
      '.startHiding()" onmousedown="' +
      a +
      ".stopHide(this);" +
      a +
      '.stopHiding()" onmouseleave="' +
      a +
      '.startHiding()">\r\n';
    d = b.getFullYear() - 100;
    r = b.getFullYear() + 75;
    d < c.getFullYear() && (d = c.getFullYear());
    for (r > e.getFullYear() && (r = e.getFullYear()); d < r + 1; d++)
      h +=
        '\t\t\t\t<option value="' +
        d +
        '"' +
        (d == f ? ' selected="selected"' : "") +
        ">" +
        d +
        "</option>\r\n";
    h +=
      '\t\t\t</select>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr id="trButtons" onmouseover="' +
      a +
      '.stopHide(this)">\r\n\t\t<td style="padding:0"><button class="priorMonth" type="button"' +
      k +
      ' onclick="' +
      a +
      '.priorMonth()" onmouseover="' +
      a +
      '.stopHide(this)"></button></td>\t\t<td colspan="6" align="center">' +
      b.formatString("MMMM yyyy") +
      '</td>\r\n\t\t<td style="padding:0"><button class="nextMonth" type="button"' +
      p +
      ' onclick="' +
      a +
      '.nextMonth()"  onmouseover="' +
      a +
      '.stopHide(this)"></button></td>\r\n\t</tr>\r\n\t<tr height="20" class="body">\r\n\t\t<td><img src="img/default/pixTrans.gif" height="1" width="20" /></td>\r\n';
    for (d = Date.formatInfo.firstDay; 7 > d; d++)
      h +=
        '\t\t<td class="calDayHeader"><img src="img/default/pixTrans.gif" height="1" width="20" /><br/>' +
        days[d].substr(0, 2) +
        "</td>\r\n";
    for (d = 0; d < Date.formatInfo.firstDay; d++)
      h +=
        '\t\t<td class="calDayHeader"><img src="img/default/pixTrans.gif" height="1" width="20" /><br/>' +
        days[d].substr(0, 2) +
        "</td>\r\n";
    h +=
      '\t</tr>\r\n\t<tr class="body">\r\n\t\t<td class="calWeekNo" style="cursor:default;">' +
      g.priorDay(m).weekNo() +
      "</td>\r\n";
    for (d = m; 0 < d; d--)
      (k = g.priorDay(d)),
        (h +=
          "\t\t<td" + this.td(k) + ">" + k.formatString("%d") + "</td>\r\n");
    for (; g < q; )
      (h += "\t\t<td" + this.td(g) + ">" + g.formatString("%d") + "</td>\r\n"),
        (g = g.nextDay()),
        (m = this.dayNo(g)),
        g < q &&
          0 == m &&
          (h +=
            '\t</tr>\r\n\t<tr class="body">\r\n\t\t<td class="calWeekNo" style="cursor:default;">' +
            g.weekNo() +
            "</td>");
    if (m)
      for (d = 0; 20 > d && 7 > m; g = g.nextDay(), d++)
        (h += "<td" + this.td(g) + ">" + g.formatString("%d") + "</td>"), m++;
    this.div.innerHTML = h + "\t</tr>\r\n</table>";
    this.frame &&
      ((this.frame.style.left = this.div.offsetLeft + "px"),
      (this.frame.style.top = this.div.offsetTop + "px"),
      (this.frame.style.width = this.div.offsetWidth + "px"),
      (this.frame.style.height = this.div.offsetHeight + "px"));
  }
};
TDateInput.addedEvent = !1;
TDateInput.autoHide = !0;
TDateInput.autoFocus = !0;
TDateInput.instances = [];
TDateInput.dispose = function () {
  for (var a = 0; a < TDateInput.instances.length; a++)
    TDateInput.instances[a].dispose(), (TDateInput.instances[a] = null);
  TDateInput.instances = [];
};
TDateInput.hide = function () {
  for (var a = 0; a < TDateInput.instances.length; a++) {
    var b = TDateInput.instances[a];
    b.autoHide || "none" == b.div.style.display || b.hide();
  }
};
addEvent(window, "unload", "TDateInput.dispose();");
var Period = { Day: 1, Week: 7, Month: 31 };
TCalendar = function (a, b, c, e, f, l) {
  var g = e,
    q = null,
    m = f ? new Date(f) : null,
    k = [],
    p = !1,
    h = !1,
    d = [],
    r = null,
    w = TCalendar.instances.length,
    z = null,
    u = new Date(9999, 11, 31, 23, 59, 59),
    n = new Date(1753, 0, 1),
    t = b,
    v = Period.Day,
    x = m ? m : new Date(),
    A = "boolean" == typeof l ? l : !0;
  this.allowTime = c;
  this.blockedMessage = blockedMessage[Languages.current];
  this.Class = "TCalendar";
  this.maxDateMessage = maxDateMessage[Languages.current];
  this.minDateMessage = minDateMessage[Languages.current];
  this.onshow = this.onchange = null;
  this.timer = 0;
  if ("undefined" == typeof a || 0 == String(a).length)
    throw Error('Illegal call to constructor. "name" cannot be empty.');
  "undefined" == typeof c && (c = !1);
  if ("undefined" == typeof b)
    throw Error('Illegal call to constructor. "parent" cannot be empty.');
  if (!g) g = [];
  else if (!g.contains)
    throw Error(
      'Illegal call to constructor. "block" should be an array of Date.'
    );
  for (b = 0; b < g.length; b++) {
    if ("function" != typeof g[b].age)
      throw Error(
        'Illegal call to constructor. "block" contains elements which are not of type Date.'
      );
    g[b] = g[b].round();
  }
  TCalendar.instances.add(this);
  this.div = document.createElement("DIV");
  this.div.id = "div" + a.upperFirst();
  this.div.className = "calendar inline";
  bodyLoaded ||
    addEvent(window, "load", "TCalendar.instances[" + w + "].init();");
  this.blocked = function (a) {
    return g.contains(a);
  };
  this.pClearDays = function (a, b) {
    r = new Date(a);
    z = new Date(b);
    k = [];
  };
  this.pClearFilled = function () {
    d = [];
  };
  this.pDataUrl = function (a) {
    if ("undefined" == typeof a) return q;
    q = "undefined" != typeof a.Class && "Url" == a.Class ? a : new Url(a);
    this.getData();
    "string" != typeof t && this.write();
  };
  this.pDate = function (a, b, c) {
    if ("undefined" == typeof a) return m;
    if (null != a) {
      if ("function" != typeof a.age)
        throw Error(
          'Illegal assignment to date. Value is not a date object and not null ("' +
            valueString(a) +
            '").'
        );
      this.allowTime || (a = a.round());
      if (a >= u)
        throw Error(
          this.maxDateMessage.replace("[MAXDATE]", u.formatString("d"))
        );
      if (a < n)
        throw Error(
          this.maxDateMessage.replace("[MINDATE]", n.formatString("d"))
        );
      if (this.blocked(a.round()))
        throw Error(
          this.blockedMessage.replace("[DATE]", a.round().formatString("d"))
        );
    }
    if (
      !isSame(m, a) &&
      ((m = a),
      null == m || p ? this.write() : this.pShowDate(m),
      this.onchange)
    )
      if ("undefined" != typeof b)
        (a = createEvent(b)),
          "undefined" != typeof c
            ? ((c.calendar = this), (a.srcElement = c))
            : (a.srcElement = this),
          this.onchange(this, a);
      else this.onchange(this);
  };
  this.pDirect = function (a) {
    if ("undefined" == typeof a) return p;
    p = a ? !0 : !1;
  };
  this.pDispose = function () {
    h || ((h = !0), (this.div = t = t.Calendar = null));
  };
  this.pFilled = function () {
    return d;
  };
  this.getData = function (a, b) {
    null == b && (b = x);
    if (
      ("undefined" == typeof a ||
        null == a ||
        a.getMonth() != b.getMonth() ||
        a.getFullYear() != b.getFullYear()) &&
      null != q
    ) {
      var c = q.add("date", b.formatString("d")).request("GET", null, !0);
      this.pClearFilled();
      g = [];
      if (null != c && null != c.firstChild && null != c.firstChild.childNodes)
        for (var e = 0; e < c.firstChild.childNodes.length; e++) {
          var d = c.firstChild.childNodes[e],
            f = parseBool(d.getAttribute("disabled")),
            h = d.getAttribute("class"),
            d = parseXmlDate(d.textContent);
          Date.isDate(d) &&
            (f
              ? (g.contains(d) || g.add(d),
                isSame(m, d) && this.pDate(null),
                h && this.addFilled(d, h))
              : this.addFilled(d, h));
        }
    }
  };
  this.pGetDay = function (a) {
    a = k[a];
    return "undefined" != typeof a ? a : null;
  };
  this.pGetDays = function () {
    return k;
  };
  this.pGetFirst = function () {
    return r;
  };
  this.pGetFirst = function () {
    return r;
  };
  this.pGetLast = function () {
    return z;
  };
  this.pGetRef = function () {
    return "TCalendar.instances[" + w + "]";
  };
  this.pMaxDate = function (a) {
    if ("undefined" == typeof a) return u;
    if (null == a) u = new Date(9999, 11, 31);
    else {
      if (a > new Date(9999, 11, 31))
        throw Error("Illegal assignment to maxDate. Max. value is 31-12-9999");
      if (a < new Date(1753, 0, 1))
        throw Error("Illegal assignment to maxDate. Min. value is 1-1-1753");
      if (a <= n)
        throw Error("Illegal assignment to maxDate. Date smaller than minDate");
      u = a.round();
      m && m >= u && this.pDate(u.priorDay());
      x && x >= u ? this.pShowDate(u.priorDay()) : this.write();
    }
  };
  this.pMinDate = function (a) {
    if ("undefined" == typeof a) return n;
    if (null == a) n = new Date(1753, 0, 1);
    else {
      if (a > new Date(9999, 11, 31))
        throw Error("Illegal assignment to minDate. Max. value is 31-12-9999");
      if (a < new Date(1753, 0, 1))
        throw Error("Illegal assignment to minDate. Min. value is 1-1-1753");
      if (a >= u)
        throw Error("Illegal assignment to minDate. Date greater than maxDate");
      n = a.round();
      m && m < n && this.pDate(n);
      x && x < n ? this.pShowDate(n) : this.write();
    }
  };
  this.pName = function () {
    return a;
  };
  this.pParent = function (a) {
    if ("undefined" == typeof a) return t;
    t = Html.get(a);
  };
  this.pPeriod = function (a) {
    if ("undefined" == typeof a) return v;
    switch (a) {
      case Period.Week:
        a = Period.Week;
        break;
      case Period.Month:
        a = Period.Month;
        break;
      default:
        a = Period.Day;
    }
    v != a && ((v = a), (a = p ? x : m) ? this.pShowDate(a) : this.write());
  };
  this.pShowDate = function (a, b, c) {
    var d = x;
    if ("undefined" == typeof a) return x;
    x = a >= u ? u.priorDay() : a < n ? n : a.round();
    if (
      !isSame(d, x) &&
      (this.getData(d, x), p ? this.pDate(x, b, c) : this.write(), this.onshow)
    )
      this.onshow(this);
  };
  this.pShowSelects = function (a) {
    if ("undefined" == typeof a) return A;
    A = a;
    this.div &&
      ((a = xFind(this.div, "table/tbody/tr")),
      "trSelects" == a.id && a && (a.style.display = A ? "" : "none"));
  };
  this.td = function (a) {
    var b = !1,
      c = "";
    k[a] = new TDay(this, a);
    a < n || a >= u || this.blocked(a)
      ? ((b = !0), (c += ' disabled="true"'), (k[a].disabled = !0))
      : (c +=
          ' onclick="' +
          this.pGetRef() +
          ".setDate(" +
          a.jsDate() +
          ',event)"');
    c =
      a.getMonth() != x.getMonth()
        ? c + ' class="calDayOM'
        : c + ' class="calDay';
    a.isSameDate(new Date()) && (c += " calToday");
    var e = p ? (null == m ? x : m) : m;
    if (e)
      switch (v) {
        case Period.Day:
          m && a.isSameDate(m) && (c += " calSelected");
          break;
        case Period.Week:
          a.isSameWeek(e) && (c += " calSelected");
          break;
        case Period.Month:
          a.isSameMonth(e) && (c += " calSelected");
      }
    "boolean" == typeof d[a] && 1 == d[a]
      ? ((c += " calFilled"), (k[a].className = "calFilled"))
      : "string" == typeof d[a] &&
        "" != d[a] &&
        ((c += " " + d[a]), (k[a].className = d[a]));
    b && (c += " calDisabled");
    c += '"';
    return b
      ? c + ' style="cursor:default"'
      : c +
          ' onmouseover="this.oldclass=this.className;this.className+=\' calSelected\'" onmouseout="this.className=this.oldclass"';
  };
  bodyLoaded && this.init();
};
TCalendar.prototype.addFilled = function (a, b) {
  "function" != typeof a.age && (a = new Date(a));
  if ("function" == typeof a.age)
    (b = "undefined" == typeof b || null == b ? !0 : String(b)),
      (this.pFilled()[a.round()] = b),
      (this.pFilled()[this.pFilled().length] = a);
  else
    throw Error(
      'Illegal call to TCalendar.addFilled(). Parameter "date" is no date.'
    );
};
TCalendar.prototype.clearFilled = function () {
  this.pClearFilled();
};
TCalendar.prototype.days = function () {
  return this.pGetDays();
};
TCalendar.prototype.dispose = function () {
  this.pDispose();
};
TCalendar.prototype.dataUrl = function (a) {
  return this.pDataUrl(a);
};
TCalendar.prototype.date = function (a) {
  return this.pDate(a);
};
TCalendar.prototype.dayNo = function (a) {
  return a.getDay() < Date.formatInfo.firstDay
    ? 7 - Date.formatInfo.firstDay + a.getDay()
    : a.getDay() - Date.formatInfo.firstDay;
};
TCalendar.prototype.direct = function (a) {
  return this.pDirect(a);
};
TCalendar.prototype.filled = function () {
  return this.pFilled();
};
TCalendar.prototype.getDay = function (a) {
  return this.pGetDay(a);
};
TCalendar.prototype.hideSelects = function () {
  this.pShowSelects(!1);
};
TCalendar.prototype.init = function () {
  this.pParent(this.pParent());
  this.write();
  this.parent().appendChild(this.div);
};
TCalendar.prototype.maxDate = function (a) {
  return this.pMaxDate(a);
};
TCalendar.prototype.minDate = function (a) {
  return this.pMinDate(a);
};
TCalendar.prototype.month = function () {
  for (
    var a = this.pGetFirst(),
      b = this.pGetLast(),
      c = b.nextDay(),
      e = [],
      f = a;
    f < c;
    f = f.nextDay()
  )
    e[f] = this.getDay(f);
  return { first: a, last: b, days: e };
};
TCalendar.prototype.name = function () {
  return this.pName();
};
TCalendar.prototype.nextMonth = function (a, b) {
  try {
    return this.pShowDate(this.pShowDate().nextMonth(), b, a), cancelEvent(b);
  } catch (c) {
    return (
      c.description
        ? alert(c.description)
        : c.message
        ? alert(c.message)
        : alert(c),
      !1
    );
  }
};
TCalendar.prototype.priorMonth = function (a, b) {
  try {
    return this.pShowDate(this.pShowDate().priorMonth(), b, a), cancelEvent(b);
  } catch (c) {
    return (
      c.description
        ? alert(c.description)
        : c.message
        ? alert(c.message)
        : alert(c),
      !1
    );
  }
};
TCalendar.prototype.parent = function () {
  return this.pParent();
};
TCalendar.prototype.period = function (a) {
  return this.pPeriod(a);
};
TCalendar.prototype.showDate = function (a) {
  return this.pShowDate(a);
};
TCalendar.prototype.showSelects = function () {
  this.pShowSelects(!0);
};
TCalendar.prototype.setDate = function (a, b) {
  null != a &&
    "undefined" == typeof a.isLeapYear &&
    (a = this.allowTime ? isDateTime(a) : isDate(a));
  this.allowTime &&
    "000000" == a.formatString("HHnnss") &&
    null != this.pDate() &&
    "000000" != this.pDate().formatString("HHnnss") &&
    (a = a.integrateTime(this.pDate()));
  try {
    return this.pDate(a, b), !0;
  } catch (c) {
    return (
      c.description
        ? alert(c.description)
        : c.message
        ? alert(c.message)
        : alert(c),
      !1
    );
  }
};
TCalendar.prototype.setMonth = function (a) {
  try {
    var b = new Date(this.pShowDate());
    b.setMonth(a.value);
    this.pShowDate(b);
    return !0;
  } catch (c) {
    return (
      c.description
        ? alert(c.description)
        : c.message
        ? alert(c.message)
        : alert(c),
      !1
    );
  }
};
TCalendar.prototype.setYear = function (a) {
  try {
    var b = new Date(this.pShowDate());
    b.setYear(a.value);
    this.pShowDate(b);
    return !0;
  } catch (c) {
    return (
      c.description
        ? alert(c.description)
        : c.message
        ? alert(c.message)
        : alert(c),
      !1
    );
  }
};
TCalendar.prototype.write = function () {
  if (this.div) {
    var a = this.pGetRef(),
      b = new Date(this.pShowDate()),
      c = new Date(this.pMinDate()),
      e = new Date(this.pMaxDate()),
      f = b.getFullYear(),
      l = b.getMonth(),
      g = new Date(f, l, 1),
      q = g.nextMonth(),
      m = this.dayNo(g),
      k = new Date(b),
      p = b.nextMonth(),
      h = "";
    this.pClearDays(g, q.priorDay());
    k.setDate(1);
    k = k.priorDay();
    k = k < c ? ' disabled="true"' : "";
    p.setDate(1);
    var p = p > e ? ' disabled="true"' : "",
      h =
        '<table border="0" cellspacing="0" cellpadding="3">\r\n\t<col/><col/><col/><col/><col/><col/><col/><col/>\r\n\t<tr id="trSelects" class="body"' +
        (this.pShowSelects() ? "" : ' style="display:none"') +
        '>\r\n\t\t<td colspan="5" align="center" class="select">\r\n\t\t\t<select onchange="' +
        a +
        '.setMonth(this)">\r\n',
      d = 0,
      r = 11;
    d < c.getMonth() && f == c.getFullYear() && (d = c.getMonth());
    for (
      r > e.getMonth() && f == e.getFullYear() && (r = e.getMonth());
      d < r + 1;
      d++
    )
      h +=
        '\t\t\t\t<option value="' +
        d +
        '"' +
        (d == l ? ' selected="selected"' : "") +
        ">" +
        months[d] +
        "</option>\r\n";
    h +=
      '\t\t\t</select>\r\n\t\t</td>\r\n\t\t<td colspan="3" align="center" class="select">\r\n\t\t\t<select onchange="' +
      a +
      '.setYear(this)">\r\n';
    d = b.getFullYear() - 100;
    r = b.getFullYear() + 75;
    d < c.getFullYear() && (d = c.getFullYear());
    for (r > e.getFullYear() && (r = e.getFullYear()); d < r + 1; d++)
      h +=
        '\t\t\t\t<option value="' +
        d +
        '"' +
        (d == f ? ' selected="selected"' : "") +
        ">" +
        d +
        "</option>\r\n";
    h +=
      '\t\t\t</select>\r\n\t\t</td>\r\n\t</tr>\r\n\t<tr id="trButtons">\r\n\t\t<td style="padding:0"><button class="priorMonth" type="button"' +
      k +
      ' onclick="' +
      a +
      '.priorMonth(this,event)"></button></td>\t\t<td colspan="6" align="center">' +
      b.formatString("MMMM yyyy") +
      '</td>\r\n\t\t<td style="padding:0"><button class="nextMonth" type="button"' +
      p +
      ' onclick="' +
      a +
      '.nextMonth(this,event)"></button></td>\r\n\t</tr>\r\n\t<tr height="20" class="body">\r\n\t\t<td><img src="img/default/pixTrans.gif" height="1" class="calWeekNo"/></td>\r\n';
    for (d = Date.formatInfo.firstDay; 7 > d; d++)
      h +=
        '\t\t<td class="calDayHeader"><img src="img/default/pixTrans.gif" height="1" class="calDayHeader"/><br/>' +
        days[d].substr(0, 2) +
        "</td>\r\n";
    for (d = 0; d < Date.formatInfo.firstDay; d++)
      h +=
        '\t\t<td class="calDayHeader"><img src="img/default/pixTrans.gif" height="1" class="calDayHeader"/><br/>' +
        days[d].substr(0, 2) +
        "</td>\r\n";
    h +=
      '\t</tr>\r\n\t<tr class="body">\r\n\t\t<td class="calWeekNo" style="cursor:default">' +
      g.priorDay(m).weekNo() +
      "</td>\r\n";
    for (d = m; 0 < d; d--)
      (k = g.priorDay(d)),
        (h +=
          "\t\t<td" + this.td(k) + ">" + k.formatString("%d") + "</td>\r\n");
    for (; g < q; )
      (h += "\t\t<td" + this.td(g) + ">" + g.formatString("%d") + "</td>\r\n"),
        (g = g.nextDay()),
        (m = this.dayNo(g)),
        g < q &&
          0 == m &&
          (h +=
            '\t</tr>\r\n\t<tr class="body">\r\n\t\t<td class="calWeekNo" style="cursor:default">' +
            g.weekNo() +
            "</td>");
    if (m)
      for (d = 0; 20 > d && 7 > m; g = g.nextDay(), d++)
        (h += "<td" + this.td(g) + ">" + g.formatString("%d") + "</td>"), m++;
    this.div.innerHTML = h + "\t</tr>\r\n</table>";
  }
};
TCalendar.instances = [];
TCalendar.dispose = function () {
  for (var a = 0; a < TCalendar.instances.length; a++)
    TCalendar.instances[a].dispose(), (TCalendar.instances[a] = null);
  TCalendar.instances = [];
};
addEvent(window, "unload", "TCalendar.dispose();");
function trimNumber(a) {
  a = new String(a);
  return "0" == a ? 0 : parseInt(a.trimStart("0"));
}
function tryMakeDate(a) {
  var b = Date.current.getFullYear(),
    c = Date.current.getMonth() + 1,
    e = trimNumber(a.substr(0, 2)),
    f = 2 < a.length ? trimNumber(a.substr(2, 2)) : c,
    l = 4 < a.length ? trimNumber(a.substr(4)) : b;
  if (12 < f || e > Date.daysInMonth(f, l)) {
    var g = !0;
    12 < f &&
      8 > a.length &&
      ((f = trimNumber(a.substr(2, 1))),
      (l = trimNumber(a.substr(3))),
      0 < f && 12 >= f && e <= Date.daysInMonth(f, l) && (g = !1));
    g &&
      ((e = trimNumber(a.substr(0, 1))),
      (f = 1 < a.length ? trimNumber(a.substr(1, 2)) : c),
      (l = 3 < a.length ? trimNumber(a.substr(3)) : b),
      12 < f &&
        ((f = trimNumber(a.substr(1, 1))), (l = trimNumber(a.substr(2)))));
  }
  return { day: e.toString(), month: f.toString(), year: l.toString() };
}
function isDate(a) {
  if (null == a) return !0;
  if ("function" == typeof a.age) return a;
  a = new String(a);
  if (0 == a.length) return !0;
  var b = a.split(Date.formatInfo.dateSeparator.trim()),
    c = Date.formatInfo.shortDatePattern,
    e = !0;
  if (2 > b.length || 3 < b.length)
    (b = []),
      (a = tryMakeDate(a)),
      (e = !1),
      (b[0] = a.day),
      (b[1] = a.month),
      (b[2] = a.year);
  for (a = 0; a < b.length; a++)
    (b[a] = b[a].trimStart("0")), "" == b[a] && (b[a] = "0");
  a = 0 < b.length ? parseInt(b[0]) : null;
  var f = 1 < b.length ? parseInt(b[1]) : Date.current.getMonth() + 1,
    l = 2 < b.length ? parseInt(b[2]) : Date.current.getFullYear();
  if (
    isNaN(a) ||
    null == a ||
    isNaN(f) ||
    isNaN(l) ||
    a != b[0] ||
    f != b[1] ||
    (2 < b.length && l != b[2])
  )
    return !1;
  e &&
    (c.search("y") < c.search("m") && c.search("m") < c.search("d")
      ? ((b = l), (l = a), (a = b))
      : c.search("m") < c.search("d") && ((b = f), (f = a), (a = b)));
  if (1 > a || 1 > f || 12 < f) return !1;
  50 > l ? (l += 2e3) : 100 > l && (l += 1900);
  if (1753 > l || 9999 < l) return !1;
  switch (f) {
    case 2:
      if (0 == l % 4 && (0 != l % 100 || 0 == l % 1e3)) {
        if (29 < a) return !1;
      } else if (28 < a) return !1;
      break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (31 < a) return !1;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (30 < a) return !1;
      break;
    default:
      return !1;
  }
  return new Date(l, f - 1, a, 0, 0, 0);
}
function tryMakeTime(a) {
  var b = parseInt(a),
    c = "0",
    e = "0";
  if (b == a)
    if (24 > b) c = new String(b);
    else if (99 < b && 1e3 > b) {
      if (
        ((c = new String(b).substr(0, 1)),
        (e = new String(b).substr(1)),
        59 < trimNumber(e))
      )
        return !1;
    } else if (2360 > b) {
      if (
        ((c = new String(b).substr(0, 2)),
        (e = new String(b).substr(2)),
        59 < trimNumber(e))
      )
        return !1;
    } else if (95960 > b) {
      if (
        ((c = new String(b).substr(0, 1)),
        (e = new String(b).substr(1, 2)),
        (y = new String(b).substr(3)),
        59 < trimNumber(e) || 59 < trimNumber(y))
      )
        return !1;
    } else if (235960 > b) {
      if (
        ((c = new String(b).substr(0, 2)),
        (e = new String(b).substr(2, 2)),
        (y = new String(b).substr(4)),
        59 < trimNumber(e) || 59 < trimNumber(y))
      )
        return !1;
    } else return !1;
  else return !1;
  return { hours: c, minutes: e, seconds: "0" };
}
function isTime(a) {
  if (null == a) return !0;
  if ("function" == typeof a.age) return a;
  a = new String(a);
  if (0 == a.length) return !0;
  try {
    var b = a.split(
      new RegExp("[" + Date.formatInfo.timeSeparator + " ]", "gi")
    );
    if (2 > b.length || 3 < b.length) {
      var b = [],
        c = tryMakeTime(a);
      if (0 == c) return !1;
      b[0] = c.hours;
      b[1] = c.minutes;
      b[2] = c.seconds;
    }
    for (a = 0; a < b.length; a++)
      (b[a] = b[a].trimStart("0")), "" == b[a] && (b[a] = "0");
    var e = 0 < b.length ? Number(b[0]) : null,
      f = 1 < b.length ? Number(b[1]) : null,
      l = 2 < b.length ? Number(b[2]) : 0,
      g = 3 < b.length ? b[3] : null;
    if (isNaN(e) || null == e || isNaN(f) || null == f) return !1;
    if (isNaN(l))
      if (/(AM|PM)/.test(b[2])) (g = b[2].toUpperCase()), (l = 0);
      else return !1;
    "PM" == g && 12 > e && (e += 12);
    return 0 > e || 23 < e || 0 > f || 59 < f || 0 > l || 59 < l
      ? !1
      : new Date(1900, 0, 1, e, f, l);
  } catch (q) {
    return !1;
  }
}
function isDateTime(a) {
  if (null == a) return !0;
  if ("function" == typeof a.age) return a;
  if (0 == new String(a).length) return !0;
  a = a.split(/\s+/gi);
  if (1 < a.length && 0 < a[1].length) {
    for (var b = 2; b < a.length; b++) a[1] += " " + a[b];
    var b = isDate(a[0]),
      c = isTime(a[1]);
    if (0 != b && 0 != c)
      return (
        b.setHours(c.getHours()),
        b.setMinutes(c.getMinutes()),
        b.setSeconds(c.getSeconds()),
        b
      );
    a = a.join(" ");
    c = isTime(a);
    return 0 != c ? c : !1;
  }
  if (-1 < a[0].indexOf(Date.formatInfo.dateSeparator)) return isDate(a[0]);
  if (-1 < a[0].indexOf(Date.formatInfo.timeSeparator)) return isTime(a[0]);
  b = isDate(a[0]);
  return 0 != b ? b : isTime(a[0]);
}
function getIllegalDateMessage() {
  var a = "'" + Date.formatInfo.getDateDisplayPattern() + "'",
    b = getMessage(19);
  return b
    ? b.text.replace("D-M-JJJJ", a)
    : "De ingevoerde datum is niet correct. Er wordt een datum met het volgende formaat verwacht: " +
        a +
        ".";
}

Number.formatInfo = new NumberFormat(",", ".", "â¬");
Date.formatInfo = new DateTimeFormat(
  "-",
  "dddd d mmmm yyyy",
  "d-m-yyyy",
  ":",
  "HH:nn:ss",
  "HH:nn",
  wdMonday,
  2
);
var Snakeware;
(function (f) {
  var g = (function () {
    function a() {
      this._keyIndexes = {};
      this._keys = [];
      this._values = [];
    }
    a.prototype.getKeyValuePair = function (c) {
      return a.getKeyValuePair(this._keys[c], this._values[c]);
    };
    a.getKeyValuePair = function (c, b) {
      return { key: c, value: b };
    };
    a.prototype.count = function () {
      return this._keys.length;
    };
    a.prototype.keys = function () {
      return this._keys.clone();
    };
    a.prototype.values = function () {
      return this._values.clone();
    };
    a.prototype.add = function (c, b) {
      var a = this.indexOf(c);
      -1 == a
        ? ((a = this._keys.length),
          this._keys.push(c),
          (this._keyIndexes[c] = a),
          this._values.push(b))
        : (this._values[a] = b);
      return b;
    };
    a.prototype.clear = function () {
      this._keyIndexes = {};
      this._keys = [];
      this._values = [];
    };
    a.prototype.containsKey = function (c) {
      return -1 < this.indexOf(c);
    };
    a.prototype.containsValue = function (c) {
      for (var b = 0; b < this._values.length; b++)
        if (this._values[b] == c) return !0;
      return !1;
    };
    a.prototype.forEach = function (c) {
      for (var b = [], a = 1; a < arguments.length; a++)
        b[a - 1] = arguments[a];
      for (var a = [], d = 0; d < this._keys.length; d++)
        a.push(c(this.getKeyValuePair(d), d, b));
      return a;
    };
    a.prototype.get = function (a, b) {
      var e = this.indexOf(a);
      return -1 == e ? coalesce(b) : this._values[e];
    };
    a.prototype.indexOf = function (a) {
      a = this._keyIndexes[a];
      return "number" == typeof a ? a : -1;
    };
    a.prototype.remove = function (a) {
      var b = this.indexOf(a);
      if (-1 == b) return !1;
      this.get(a);
      this._keyIndexes[a] = void 0;
      this._keys.remove(b);
      for (this._values.remove(b); b < this._keys.length; b++)
        (a = this._keys[b]), (this._keyIndexes[a] = b);
      return !0;
    };
    return a;
  })();
  f.Dictionary = g;
})(Snakeware || (Snakeware = {}));

var __extends =
    this.__extends ||
    function (l, d) {
      function m() {
        this.constructor = l;
      }
      for (var g in d) d.hasOwnProperty(g) && (l[g] = d[g]);
      m.prototype = d.prototype;
      l.prototype = new m();
    },
  Snakeware;
(function (l) {
  function d(b) {
    return null == b
      ? u
      : Array.isArray(b)
      ? 1e3 + d(b[0])
      : "boolean" == typeof b
      ? dtBoolean
      : "number" == typeof b
      ? dtDecimal
      : "string" == typeof b
      ? dtString
      : b instanceof Date
      ? dtDateTime
      : b instanceof Url
      ? -1
      : 1e6;
  }
  function m(b, a) {
    return "undefined" == typeof b || null == b
      ? null
      : -1 == a
      ? new Url(b)
      : convert(b, a);
  }
  var g = (function () {
      if ("undefined" == typeof Storage) return !1;
      try {
        return (
          localStorage.setItem("hasCapability", "true"),
          localStorage.removeItem("hasCapability"),
          !0
        );
      } catch (b) {
        return console.log(b), !1;
      }
    })(),
    u,
    p = (function () {
      function b() {}
      b.add = function (a) {
        var e = a.name();
        "undefined" == typeof this.caches[e] && (this.caches[e] = []);
        this.caches[e].push(a);
      };
      b.destroy = function (a) {
        "undefined" != typeof this.caches[a] &&
          this.caches[a].forEach(function (e) {
            e.destroy();
          });
      };
      b.remove = function (a) {
        a = a.name();
        "undefined" != typeof this.caches[a] && (this.caches[a] = []);
      };
      b.caches = [];
      return b;
    })(),
    v = (function (b) {
      function a(e, c) {
        b.call(this);
        this._key = a.getKey(e);
        this._name = e;
        p.add(this);
        this.load(c);
      }
      __extends(a, b);
      a.getKey = function (e) {
        return 'Snakeware.Cache["' + e + '"]';
      };
      a.prototype.getValueDataType = function () {
        if (null != this._valueDataType) return this._valueDataType;
        for (var e = this.values(), a = 0; a < e.length; a++) {
          var b = e[a];
          if (null != b) return (this._valueDataType = d(b));
        }
        return null;
      };
      a.prototype.load = function (a) {
        if (!g) return !1;
        this._storage = coalesce(a, localStorage);
        if (
          !this._refreshed &&
          (Url.current.get("refresh") || Url.current.get("reset"))
        )
          return (
            (this._refreshed = !0), this._storage.removeItem(this._key), !1
          );
        a = this._storage.getItem(this._key);
        return "undefined" == typeof a || "" == a ? !1 : this.deserialize(a);
      };
      a.prototype.save = function () {
        g && this._storage.setItem(this._key, this.serialize());
        return g;
      };
      a.prototype.name = function () {
        return this._name;
      };
      a.prototype.add = function (a, c) {
        if (this._destroyed)
          throw Error(
            "Invalid call to Cache.add. The cache object has been destroyed."
          );
        b.prototype.add.call(this, a, c);
        this.save();
        return c;
      };
      a.prototype.clear = function () {
        if (this._destroyed)
          throw Error(
            "Invalid call to Cache.clear. The cache object has been destroyed."
          );
        b.prototype.clear.call(this);
        this.save();
      };
      a.prototype.containsKey = function (a) {
        if (this._destroyed)
          throw Error(
            "Invalid call to Cache.containsKey. The cache object has been destroyed."
          );
        return b.prototype.containsKey.call(this, a);
      };
      a.prototype.containsValue = function (a) {
        if (this._destroyed)
          throw Error(
            "Invalid call to Cache.containsValue. The cache object has been destroyed."
          );
        return b.prototype.containsValue.call(this, a);
      };
      a.prototype.deserialize = function (a) {
        var c = this;
        if (this._destroyed)
          throw Error(
            "Invalid call to Cache.deserialize. The cache object has been destroyed."
          );
        if (null == a || "" == a) return !1;
        a = a.split("~1~");
        if (2 > a.length) return !1;
        var h = Number(a[0]),
          q = (this._valueDataType = Number(a[1]));
        if (4 > a.length) return !0;
        for (var d = new l.Dictionary(), f = 2; f < a.length; f += 2)
          try {
            var g = convert(a[f], h),
              k = a[f + 1];
            if (1e6 == q)
              if ("null" == k) k = null;
              else if (t.isDeserializable(k)) k = t.execute(k);
              else throw Error("Not implemented yet. See todo's in cache.ts");
            else if (1e3 <= q) {
              for (
                var n = q - 1e3, r = k.split("~2~"), f = 0;
                f < r.length;
                f++
              )
                r[f] = m(r[f], n);
              k = r;
            } else k = m(k, q);
            d.add(g, k);
          } catch (p) {
            return console.log(p), !1;
          }
        b.prototype.clear.call(this);
        d.forEach(function (a) {
          b.prototype.add.call(c, a.key, a.value);
        });
        this.save();
        return !0;
      };
      a.prototype.destroy = function () {
        this._destroyed || (this.clear(), (this._destroyed = !0));
      };
      a.destroy = function (e) {
        p.destroy(e);
        g && localStorage.removeItem(a.getKey(e));
      };
      a.prototype.forEach = function (a) {
        for (var c = [], h = 1; h < arguments.length; h++)
          c[h - 1] = arguments[h];
        if (this._destroyed)
          throw Error(
            "Invalid call to Cache.forEach. The cache object has been destroyed."
          );
        return b.prototype.forEach.call(this, a, c);
      };
      a.prototype.get = function (a, c) {
        if (this._destroyed)
          throw Error(
            "Invalid call to Cache.get. The cache object has been destroyed."
          );
        return b.prototype.get.call(this, a, c);
      };
      a.prototype.indexOf = function (a) {
        if (this._destroyed)
          throw Error(
            "Invalid call to Cache.indexOf. The cache object has been destroyed."
          );
        return b.prototype.indexOf.call(this, a);
      };
      a.prototype.log = function () {
        console.log(
          "=========================================================================="
        );
        this.forEach(function (a, b) {
          console.log(b.fillOut(4) + ".", a.key, a.value);
        });
        console.log(
          "=========================================================================="
        );
        var a = this._storage.getItem(this._key),
          a = n.split(a);
        console.log("storage", a);
        console.log(
          "=========================================================================="
        );
      };
      a.prototype.refresh = function () {
        return this.load(this._storage);
      };
      a.prototype.remove = function (a) {
        if (this._destroyed)
          throw Error(
            "Invalid call to Cache.remove. The cache object has been destroyed."
          );
        return b.prototype.remove.call(this, a) ? (this.save(), !0) : !1;
      };
      a.prototype.serialize = function () {
        if (this._destroyed)
          throw Error(
            "Invalid call to Cache.serialize. The cache object has been destroyed."
          );
        var a = "",
          b = d(this.keys()[0]),
          h = this.getValueDataType(),
          a = a + (b + "~1~"),
          a = a + h;
        this.forEach(function (b) {
          a += "~1~" + b.key;
          if (1e6 <= h)
            if (null == b.value) a += "~1~null";
            else if (n.isSerializable(b.value)) {
              var c = new n();
              b.value.serialize(c);
              a += "~1~" + c.execute();
            } else throw Error("Not implemented yet. See todo's in cache.ts");
          else if (1e3 <= h) {
            for (var f = (c = ""), d = 0; d < b.value.length; d++)
              (c += f + b.value[d]), (f = "~2~");
            a += "~1~" + c;
          } else a += "~1~" + b.value;
        });
        return a;
      };
      return a;
    })(l.Dictionary);
  l.Cache = v;
  var t = (function () {
    function b() {}
    b.buildArray = function (a) {
      var b = [];
      b.push(a[0]);
      for (var c = 1; c < a.length; c += 2) {
        var d = a[c],
          g = parseInt(a[c + 1]),
          d = m(d, g);
        b.push(d);
      }
      return b;
    };
    b.getDeserialize = function (a) {
      try {
        var b = eval(a + ".deserialize");
        if ("function" == typeof b) return b;
      } catch (c) {}
      return null;
    };
    b.execute = function (a) {
      var e = a.substr(3).split("~2~"),
        c = b.getDeserialize(e[0]);
      if (null == c)
        throw Error(
          "Invalid call to Deserialize.execute. The specified value (" +
            valueString(a) +
            ") is not deserializable."
        );
      a = b.buildArray(e);
      return c(a);
    };
    b.isDeserializable = function (a) {
      return "undefined" == typeof a || null == a ? !1 : a.startsWith("~3~");
    };
    return b;
  })();
  l.Deserializer = t;
  var n = (function () {
    function b() {
      this._values = [];
    }
    b.getClass = function (a) {
      return "undefined" == typeof a ||
        null == a ||
        "undefined" == typeof a.constructor ||
        null == a.constructor
        ? void 0
        : "undefined" != typeof a.constructor.name
        ? a.constructor.name.coalesce(a.Class)
        : a.Class;
    };
    b.prototype.add = function (a) {
      this._values.push(a);
      this._values.push(d(a));
    };
    b.split = function (a) {
      a = a.split("~1~");
      for (var b = 0; b < a.length; b++)
        if ("string" == typeof a[b] && a[b].contains("~2~")) {
          a[b] = a[b].split("~2~");
          for (var c = 0; c < a[b].length; c++)
            "string" == typeof a[b][c] &&
              (a[b][c] = a[b][c].replace("~3~", "new "));
        }
      return a;
    };
    b.prototype.execute = function () {
      return "~3~" + this._object + "~2~" + this._values.join("~2~");
    };
    b.isSerializable = function (a) {
      return void 0 == b.getClass(a)
        ? !1
        : "function" == typeof a.serialize &&
            "undefined" != typeof a.constructor &&
            "function" == typeof a.constructor.deserialize;
    };
    b.prototype.register = function (a) {
      this._object = "string" == typeof a ? a : b.getClass(a);
    };
    return b;
  })();
  l.Serializer = n;
})(Snakeware || (Snakeware = {}));

function getMessage(a) {
  return Messages.get(a);
}
var Messages = Messages || {};
(function (a) {
  function c() {
    null == b && (b = new Snakeware.Cache("messages"));
    return b;
  }
  var b = null;
  a.add = function (a, d) {
    return c().add(a + "[" + language + "]", d);
  };
  a.destroy = function () {
    Snakeware.Cache.destroy("messages");
    b = null;
  };
  a.exists = function (a) {
    return c().containsKey(a + "[" + language + "]");
  };
  a.get = function (a) {
    a = String(a);
    var d = c(),
      b = a + "[" + language + "]";
    if (d.containsKey(b)) return d.get(b);
    try {
      var e = new XMLHttpRequest();
      e.open("POST", "misc/default/getMessage.aspx?steID=" + steID, !1);
      e.setRequestHeader("snakeware-ajax", "true");
      e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      e.send('<message ID="' + a + '" />');
      if (200 == e.status) {
        var k = TMessage.fromXml(e.responseXML);
        return d.add(b, k);
      }
      if (404 != e.status) {
        var g = window.open();
        g &&
          (g.document.open(),
          g.document.write(e.responseText),
          g.document.close());
        return k.add(b, null);
      }
      return null;
    } catch (f) {
      return (
        f.description
          ? alert(f.description)
          : f.message
          ? alert(f.message)
          : alert(f),
        null
      );
    }
  };
})(Messages);
TMessage = function (a, c, b, h) {
  this.Class = "TMessage";
  this.ID = a;
  this.name = c;
  this.text = b;
  this.isMail = h;
};
TMessage.deserialize = function (a) {
  if ("undefined" == typeof a || null == a) return null;
  if (5 > a.length || "TMessage" != a[0])
    throw Error(
      "Invalid call to TMessage.deserialize. The specified data (" +
        valueString(a) +
        ") is invalid."
    );
  return new TMessage(a[1], a[2], a[3], Boolean(a[4]));
};
TMessage.fromXml = function (a) {
  var c = a.documentElement;
  a = c.getAttribute("ID");
  var b = parseInt(a),
    h = c.getElementsByTagName("name")[0].firstChild.data,
    d = c.getElementsByTagName("text")[0],
    c = parseBool(c.getAttribute("isMail"));
  isNaN(b) && (b = a);
  if (!d) return null;
  d = d.text || d.textContent;
  return new TMessage(b, h, d, c);
};
TMessage.prototype.replace = function (a, c) {
  null != a && (this.text = this.text.replace(a, c));
};
TMessage.prototype.serialize = function (a) {
  a.register(this);
  a.add(this.ID);
  a.add(this.name);
  a.add(this.text);
  a.add(this.isMail);
};
TMessage.prototype.toString = function () {
  return this.text;
};
var Languages = {
    dutch: 0,
    english: 1,
    german: 2,
    french: 3,
    spanisch: 4,
    italian: 5,
    letvian: 6,
    chinese: 7,
    russian: 8,
    swahili: 9,
    arabic: 10,
    bulgarian: 11,
    danish: 12,
    frisian: 13,
    belgianDutch: 14,
    belgianFrench: 15,
    polish: 16,
    swedish: 17,
    portuguese: 19,
    chineseTraditional: 20,
    czech: 21,
    finnish: 22,
    current: language,
    abbr: "nl en de fr es it lv zh ru sw ar bg da fy nl fr pl sv pt cht cz fi".split(
      " "
    ),
    getIndex: function (a) {
      "undefined" == typeof a && (a = Languages.current);
      switch (a) {
        case 0:
        case 13:
        case 14:
          return 0;
        case 2:
          return 2;
        case 3:
        case 15:
          return 3;
        case 17:
          return 4;
        default:
          return 1;
      }
    },
  },
  Language = { abbr: Languages.abbr[language] },
  Days = {
    monday: 0,
    tuesday: 1,
    wednesday: 2,
    thursday: 3,
    friday: 4,
    saturday: 5,
    sunday: 6,
  },
  Months = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  },
  lngMonths = [
    "januari februari maart april mei juni juli augustus september oktober november december".split(
      " "
    ),
    "january february march april may june july august september october november december".split(
      " "
    ),
    "Januar Februar MÃ¤rz April Mai Juni Juli August September Oktober November Dezember".split(
      " "
    ),
    "janvier fÃ©vrier mars avril mai juin juillet aoÃ»t septembre octobre novembre dÃ©cembre".split(
      " "
    ),
    "januari februari mars april maj juni juli augusti september oktober november december".split(
      " "
    ),
  ],
  lngDays = [
    "zondag maandag dinsdag woensdag donderdag vrijdag zaterdag".split(" "),
    "sunday monday tuesday wednesday thursday friday saturday".split(" "),
    "Sonntag Monntag Dienstag Mittwoch Donnerstag Freitag Samstag".split(" "),
    "dimanche lundi mardi mercredi jeudi vendredi samedi".split(" "),
    "sÃ¶ndag mÃ¥ndag tisdag onsdag torsdag fredag lÃ¶rdag".split(" "),
  ],
  months = lngMonths[Languages.getIndex()],
  days = lngDays[Languages.getIndex()],
  newPassword = [
    "Weet u zeker dat u een nieuw wachtwoord wil opvragen?",
    "Are you sure you want to request a new password?",
    "Sind Sie sicher das Sie um eines neues Passwort bitten wolt?",
    "Ãtes-vous sÃ»r vous voulez-vous demander un nouveau mot de passe?",
  ],
  noUsername = [
    "U heeft uw gebruikersnaam nog niet ingevoerd.",
    "You did not enter your username.",
    "Sie haben Ihrem Anwendername nicht ausgefÃ¼llt.",
    "Vous n'avez pas Ã©crit votre nom d'utilisateur.",
  ],
  noNewPassword1 = [
    "U heeft uw nieuwe wachtwoord nog niet ingevuld.",
    "You did not enter your new password.",
    "Sie haben Ihre neue Passwort nicht eingetrugen.",
    "Vous n'avez pas entrÃ© votre nouveau mot de passe.",
  ],
  noNewPassword2 = [
    "U heeft de bevestiging van het nieuwe wachtwoord nog niet ingevuld.",
    "You did not enter the confirmation of your new password.",
    "Sie haben die BestÃ¤tigung Ihres neuen Stichwortes nicht eingetrugen.",
    "Vous n'avez pas Ã©crit la confirmation de votre nouveau mot de passe.",
  ],
  noOldPassword = [
    "U heeft uw huidige wachtwoord nog niet ingevuld.",
    "You did not enter your current password.",
    "Sie haben Ihre gegenwÃ¤rtiges Passwort nicht eingetrugen.",
    "Vous n'avez pas entrÃ© votre mot de passe courant.",
  ],
  noPassword = [
    "U heeft uw wachtwoord nog niet ingevoerd.",
    "You left the password field empty.",
    "Sie haben Ihrem Passwort nicht ausgefÃ¼llt.",
    "Vous n'avez pas Ã©crit votre mot de passe.",
  ],
  noSearchText = [
    "U heeft nog geen zoekwoorden ingevuld.",
    "You did not enter any keywords to search for.",
    "Sie trugen keine SchlÃ¼sselwÃ¶rter ein, um nach zu suchen.",
    "Vous n'avez Ã©crit aucun mot-clÃ© pour rechercher.",
  ],
  illegalSearchWords = [
    "U heeft alleen zoekwoorden ingevuld die te kort of niet relevant zijn.",
    "You have entered keywords that too short or not relevant only.",
    "Sie haben nur Stichworte eingegeben, die zu kurz oder nicht relevant sein.",
    "Vous avez seulement entrÃ© des mots clÃ©s trop court ou pas trait.",
  ],
  minDateMessage = [
    'De ingevoerde datum is te klein. De datum moet op of na "[MINDATE]" liggen.',
    'The entered date is to small. The date should lie on or after "[MINDATE]".',
    'Das ausgefÃ¼llte Datum ist zu klein. Das Datum sollte auf oder nach "[MINDATE]" liegen',
    'La date Ã©crite est Ã  petit. La date devrait se trouver ou aprÃ¨s "[MINDATE]".',
  ],
  maxDateMessage = [
    'De ingevoerde datum is te groot. De datum moet voor "[MAXDATE]" liggen.',
    'The entered date is to large. The date should lie before "[MAXDATE]".',
    'Das ausgefÃ¼llte Datum ist zu groÃ. Das Datum sollte vor "[MAXDATE]" liegen.',
    'La date Ã©crite est Ã  grand. La date devrait se trouver devant "[MAXDATE]".',
  ],
  blockedMessage = [
    "De ingevoerde datum is niet toegestaan.",
    "The entered date is not allowed.",
    "Das erreichte Datum wird nicht gewÃ¤hrt.",
    "La date Ã©crite n'est pas accordÃ©e.",
  ],
  nameEmpty = [
    "U heeft uw naam nog niet ingevuld.",
    "You left your name empty.",
    "Sie lieÃen Ihren Namen leer.",
    "Vous avez laissÃ© votre nom vide.",
  ],
  eMailEmpty = [
    "U heeft het e-mailadres nog niet ingevuld.",
    "You left the e-mail address empty.",
    "Sie lieÃen die E-mail Adresse leer.",
    "Vous avez laissÃ© l'adresse du E-mail vide",
  ],
  eMailInvalid = [
    "U heeft een incorrect e-mailadres ingevuld.",
    "The entered e-mail address is invalid.",
    "Die eingetragene E-mail Adresse ist unzulÃ¤ssig.",
    "L'adresse Ã©crite de E-mail est inadmissible.",
  ],
  mandatory = [
    "Dit veld is verplicht en moet worden ingevuld.",
    "This field is mandatory and must be completed.",
    "Dieses Feld ist obligatorisch und muss darum ausgefÃ¼llt werden.",
    "Ce champ est obligatoire et doit Ãªtre complÃ©tÃ©.",
  ],
  wrongValue = [
    "U heeft een niet correcte waarde ingevuld.",
    "You have entered an incorrect value.",
    "Sie haben einen falschen Wert ausgefÃ¼llt.",
    "Vous avez entrÃ© une valeur incorrecte.",
  ],
  maxAnswers = [
    "U heeft teveel vinkjes gezet. U mag maximaal [MAXANSWERS] vinkjes zetten.",
    "You have checked too many checkmarks. You can check up to [MAXANSWERS] checkmarks.",
    "Sie haben zu viele Markierungen geklickt. Sie kÃ¶nnen bis zu [MAXANSWERS] Markierungen klicken.",
    "Vous avez cochÃ© trop de checkmarks. Vous pouvez consulter jusqu'Ã  [MAXANSWERS] checkmarks.",
  ],
  noUserSelected = [
    "U heeft nog geen gebruiker geselecteerd.",
    "You did not select a user yet.",
    "Sie haben noch nicht einen Anwender gewÃ¤hlt.",
    "Vous n'avez pas choisi un utilisateur encore.",
  ],
  subjectEmpty = [
    "U heeft nog geen onderwerp ingevuld.",
    "You left the subject empty.",
    "Sie lieÃen das Thema leer.",
    "Vous avez laissÃ© le sujet vide.",
  ],
  textEmpty = [
    "U heeft nog geen tekst ingevuld.",
    "You did not enter any text.",
    "Sie trugen keinen Text ein.",
    "Vous n'avez Ã©crit aucun texte.",
  ],
  commentsEmpty = [
    "U heeft nog geen opmerkingen ingevuld.",
    "You did not enter any comments yet.",
    "Sie trugen noch keine Anmerkungen ein.",
    "Vous n'avez Ã©crit aucun commentaire encore.",
  ],
  noMailingChecked = [
    "U heeft nog geen enkele nieuwsbrief aangevinkt.",
    "You did not select any newsletter yet.",
    "Sie haben schon noch keine Newsletter gewÃ¤hlt.",
    "Vous n'avez choisi aucun bulletin encore.",
  ],
  webAddresInvalid = [
    "U heeft een incorrect web adres ingevuld.",
    "You entered an invalid webaddress.",
    "Sie trugen eine unzulÃ¤ssige Verbindung ein.",
    "Vous avez Ã©crit un lien inadmissible.",
  ],
  titleEmpty = [
    "U heeft nog geen titel ingevuld.",
    "You left the title empty.",
    "Sie trugen keinen Titel ein.",
    "Vous avez laissÃ© le title vide.",
  ],
  trueText = ["waar", "true", "wahr", "vrai"],
  falseText = ["onwaar", "false", "falsch", "faux"];

var ntElement = 1,
  ntAttribute = 2,
  ntText = 3,
  ntCData = 4,
  ntComment = 8,
  ntDocument = 9,
  Xml,
  charCodes,
  specialChar;
(function () {
  charCodes = [
    160,
    161,
    162,
    163,
    164,
    165,
    166,
    167,
    168,
    169,
    170,
    171,
    172,
    173,
    174,
    175,
    176,
    177,
    178,
    179,
    180,
    181,
    182,
    183,
    184,
    185,
    186,
    187,
    188,
    189,
    190,
    191,
    192,
    193,
    194,
    195,
    196,
    197,
    198,
    199,
    200,
    201,
    202,
    203,
    204,
    205,
    206,
    207,
    208,
    209,
    210,
    211,
    212,
    213,
    214,
    215,
    216,
    217,
    218,
    219,
    220,
    221,
    222,
    223,
    224,
    225,
    226,
    227,
    228,
    229,
    230,
    231,
    232,
    233,
    234,
    235,
    236,
    237,
    238,
    239,
    240,
    241,
    242,
    243,
    244,
    245,
    246,
    247,
    248,
    249,
    250,
    251,
    252,
    253,
    254,
    255,
    338,
    339,
    352,
    353,
    376,
    402,
    710,
    732,
    8211,
    8212,
    8216,
    8217,
    8218,
    8220,
    8221,
    8222,
    8224,
    8225,
    8226,
    8230,
    8240,
    8249,
    8250,
    8364,
    8482,
  ];
  specialChar = "&nbsp; &iexcl; &cent; &pound; &curren; &yen; &brvbar; &sect; &uml; &copy; &ordf; &laquo; &not; &shy; &reg; &macr; &deg; &plusmn; &sup2; &sup3; &acute; &micro; &para; &middot; &cedil; &sup1; &ordm; &raquo; &frac14; &frac12; &frac34; &iquest; &Agrave; &Aacute; &Acirc; &Atilde; &Auml; &Aring; &AElig; &Ccedil; &Egrave; &Eacute; &Ecirc; &Euml; &Igrave; &Iacute; &Icirc; &Iuml; &ETH; &Ntilde; &Ograve; &Oacute; &Ocirc; &Otilde; &Ouml; &times; &Oslash; &Ugrave; &Uacute; &Ucirc; &Uuml; &Yacute; &THORN; &szlig; &agrave; &aacute; &acirc; &atilde; &auml; &aring; &aelig; &ccedil; &egrave; &eacute; &ecirc; &euml; &igrave; &iacute; &icirc; &iuml; &eth; &ntilde; &ograve; &oacute; &ocirc; &otilde; &ouml; &divide; &oslash; &ugrave; &uacute; &ucirc; &uuml; &yacute; &thorn; &yuml;".split(
    " "
  );
  specialChar[178] = "&OElig;";
  specialChar[179] = "&oelig;";
  specialChar[192] = "&Scaron;";
  specialChar[193] = "&scaron;";
  specialChar[216] = "&Yuml;";
  specialChar[242] = "&fnof;";
  specialChar[550] = "&circ;";
  specialChar[572] = "&tilde;";
  specialChar[8051] = "&ndash;";
  specialChar[8052] = "&mdash;";
  specialChar[8056] = "&lsquo;";
  specialChar[8057] = "&rsquo;";
  specialChar[8058] = "&sbquo;";
  specialChar[8060] = "&ldquo;";
  specialChar[8061] = "&rdquo;";
  specialChar[8062] = "&bdquo;";
  specialChar[8064] = "&dagger;";
  specialChar[8065] = "&Dagger;";
  specialChar[8066] = "&bull;";
  specialChar[8070] = "&hellip;";
  specialChar[8080] = "&permil;";
  specialChar[8089] = "&lsaquo;";
  specialChar[8090] = "&rsaquo;";
  specialChar[8204] = "&euro;";
  specialChar[8322] = "&trade;";
})();
(function (b) {
  function d(a, e) {
    var b = "undefined" == typeof e ? "Argument" : null;
    if (null == b) {
      switch (e) {
        case 1:
          b = "First";
          break;
        case 2:
          b = "Second";
          break;
        case 3:
          b = "Third";
      }
      b += " argument";
    }
    if (null == a || "undefined" == typeof a.ownerDocument)
      throw Error(
        "Illegal argument. " +
          b +
          " is expected to be a XmlNode (" +
          valueString(a) +
          ")."
      );
  }
  function h(a, e, f) {
    var c = null;
    if ("undefined" != typeof a && null != a)
      if (Url.isUrl(a)) {
        "string" == typeof f && (f = new Function("request", f));
        if ("function" == typeof f) {
          a.onreadystatechange = function (a) {
            var e;
            e =
              null != a.responseXML && "" != a.responseXML
                ? h(l(a.responseXML))
                : h();
            f({
              status: a.status,
              statusText: a.statusText,
              responseText: a.responseText,
              responseXML: e,
            });
          };
          "undefined" != typeof e && null != e
            ? a.async("post", l(e))
            : a.async();
          return;
        }
        c = null;
        c = (c =
          "undefined" != typeof e
            ? a.request("post", l(e), !0, !0)
            : a.request("get", null, !0, !0))
          ? h(l(c))
          : h();
      } else if ("undefined" != typeof a.documentElement) c = a;
      else {
        if ("undefined" != typeof a.ownerDocument) return h(l(a));
        if ("string" != typeof a)
          throw Error(
            "Illegal argument. First argument is not an Xml object, a string or an url (" +
              valueString(a) +
              ")."
          );
      }
    try {
      if (null == c || "undefined" == typeof c.documentElement)
        if (void 0 !== window.ActiveXObject) {
          e = 0;
          for (
            var d = [
              "MSXML2.DOMDocument.6.0",
              "MSXML2.DOMDocument.3.0",
              "MSXML2.DOMDocument",
              "MSXML.DOMDocument",
              "Microsoft.XMLDOM",
            ];
            null == c && e < d.length;

          ) {
            try {
              c = new ActiveXObject(d[e]);
            } catch (g) {}
            e++;
          }
          if (null == c)
            throw Error(
              "Capability not supported. Cannot create DOMDocument object."
            );
          "string" == typeof a && c.loadXML(a);
        } else
          c =
            "string" == typeof a
              ? new DOMParser().parseFromString(a, "text/xml")
              : document.implementation.createDocument("", "", null);
    } catch (n) {
      Log.error(n), (c = "undefined" != typeof a ? new b(a) : new b());
    }
    try {
      c.setProperty("SelectionLanguage", "XPath");
    } catch (w) {
      Log.write(
        'doc.setProperty("SelectionLanguage", "XPath"); not supported...'
      );
    }
    return c;
  }
  function p(a, e, b, c) {
    d(a);
    if ("string" != typeof e)
      throw Error(
        "Illegal argument. xPath expression expected to be of type string (" +
          valueString(e) +
          ")."
      );
    if (0 == e.length)
      throw Error("Illegal argument. xPath expression's length is zero.");
    if ("undefined" == typeof b) return null;
    if (a.nodeType == ntDocument)
      return (
        e.contains("/") && (e = e.substr(e.indexOf("/") + 1)),
        p(a.documentElement, e, b, c)
      );
    var k = a.ownerDocument;
    e = e.split("/");
    a.nodeType == ntDocument && (k = a);
    for (var g = 0; g < e.length; g++) {
      var n = r(a, e[g]);
      null == n &&
        (e[g].startsWith("@")
          ? ((n = e[g].substr(1)),
            (n = k.createAttribute(n)),
            a.setAttributeNode(n))
          : (n = a.appendChild(
              (function (a) {
                var e = null;
                if (-1 < a.indexOf("[")) {
                  var b = a.substr(a.indexOf("[") + 1);
                  a = a.substr(0, a.indexOf("["));
                  for (
                    var e = k.createElement(a),
                      b = b.substr(0, b.length - 1),
                      b = b.replace(/(\s+or\s+|\s+and\s+)/gi, "|"),
                      b = b.split("|"),
                      c = 0;
                    c < b.length;
                    c++
                  ) {
                    var f = b[c];
                    if (f.contains("=")) {
                      f = f.split("=");
                      a = f[0].trim();
                      f = 1 < f.length ? f[1].trim() : null;
                      a.startsWith("@") && (a = a.substr(1));
                      if (null != f) {
                        if (f.startsWith('"') || f.startsWith("'"))
                          f = f.substr(1);
                        if (f.endsWith('"') || f.endsWith("'"))
                          f = f.substr(0, f.length - 1);
                      }
                      e.setAttribute(a, f);
                    }
                  }
                } else e = k.createElement(a);
                return e;
              })(e[g])
            )));
      a = n;
    }
    if (a.nodeType == ntElement && c == ntCData) {
      for (; null != a.firstChild; ) a.removeChild(a.firstChild);
      a.appendChild(k.createCDATASection(b));
    } else t(a, b);
    return a;
  }
  function m(a) {
    return null == a || "" === a
      ? null
      : String(a).replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/gi, "");
  }
  function q(a, e) {
    d(a, 1);
    if ("string" != typeof e)
      throw Error(
        "Illegal argument. Second argument is not a string (" +
          valueString(e) +
          ")."
      );
    if ("undefined" != typeof a.selectNodes) return a.selectNodes(e);
    var b = a.ownerDocument;
    a.nodeType == ntDocument && (b = a);
    if ("undefined" == typeof XPathResult) {
      var c = h(l(a));
      return q(c, e);
    }
    for (
      var c = [],
        b = b.evaluate(e, a, null, XPathResult.ANY_TYPE, null),
        k = b.iterateNext();
      k;

    )
      c.add(k), (k = b.iterateNext());
    return c;
  }
  function r(a, e, b) {
    d(a, 1);
    if ("string" != typeof e)
      throw Error(
        "Illegal argument. Second argument is not a string (" +
          valueString(e) +
          ")."
      );
    if ("undefined" != typeof a.selectSingleNode) return a.selectSingleNode(e);
    var c = a.ownerDocument;
    a.nodeType == ntDocument && (c = a);
    return "undefined" == typeof XPathResult
      ? ((a = h(l(a))), r(a, e, b))
      : (e = c.evaluate(e, a, null, XPathResult.ANY_TYPE, null).iterateNext())
      ? e
      : null;
  }
  function t(a, e) {
    d(a, 1);
    e = m(e);
    if (a.nodeType == ntElement) {
      for (
        var b = a.firstChild ? a.firstChild.nodeType : ntText, c = 0;
        c < a.childNodes.length;
        c++
      ) {
        var k = a.childNodes[c];
        if (k.nodeType == ntText || k.nodeType == ntCData)
          a.removeChild(k), c--;
      }
      null != e &&
        (b == ntCData
          ? a.insertBefore(a.ownerDocument.createCDATASection(e), a.firstChild)
          : a.insertBefore(a.ownerDocument.createTextNode(e), a.firstChild));
    } else a.value = null != e ? e : "";
  }
  function u(a, e) {
    var b = "";
    void 0 == e && (e = "");
    if (a.childNodes.length) {
      for (
        var b = b + ("<br/>" + e + "&lt;" + v(a) + "&gt;"), c = 0;
        c < a.childNodes.length;
        c++
      )
        b += u(a.childNodes[c], e + "&nbsp;&nbsp;&nbsp;");
      for (var d = a.childNodes.length, c = 0; c < a.childNodes.length; c++)
        (a.childNodes[c].nodeType != ntText &&
          a.childNodes[c].nodeType != ntCData) ||
          d--;
      0 < d && (b += "<br/>" + e);
      b += "&lt;/" + a.nodeName + "&gt;";
    } else
      a.nodeType == ntText
        ? ((c = null),
          "undefined" != typeof a.value
            ? (c = a.value)
            : "undefined" != typeof a.text
            ? (c = a.text)
            : "undefined" != typeof a.textContent
            ? (c = a.textContent)
            : "undefined" != typeof a.nodeValue && (c = a.nodeValue),
          "undefined" != typeof c &&
            "" != c &&
            null != c &&
            (b +=
              '<font color="black"><b>' +
              toXml(c, dtString)
                .htmlEncode()
                .replace(/[\r\n]/gi, "<br/>") +
              "</b></font>"))
        : a.nodeType == ntCData
        ? ((c = null),
          "undefined" != typeof a.value
            ? (c = a.value)
            : "undefined" != typeof a.text
            ? (c = a.text)
            : "undefined" != typeof a.textContent
            ? (c = a.textContent)
            : "undefined" != typeof a.nodeValue && (c = a.nodeValue),
          (b +=
            '<font color="red">&lt;![CDATA[<br/><div style="margin-left:' +
            (e.length / 6) * 7 +
            'px; padding-left:3px; border-left:1px solid #C00000;"><font color="black">'),
          (b += toXml(c, dtString)
            .replace(/[\r\n]/gi, "<br/>")
            .replace(/[\t]/gi, "&nbsp;&nbsp;&nbsp;")),
          (b += "</font><br/></div>" + e + "]]&gt;</font>"))
        : a.nodeType == ntElement &&
          (b += "<br/>" + e + "&lt;" + v(a) + "/&gt;");
    return b;
  }
  function v(a) {
    var b = a.nodeName;
    if (a.attributes)
      for (var f = 0; f < a.attributes.length; f++) {
        var c = a.attributes.item(f);
        "xmlns:sql" != c.nodeName &&
          "null" != c.value &&
          "" != c.value &&
          null != c.value &&
          (b +=
            " " +
            c.nodeName +
            '=<font color="blue">"' +
            c.value.replace(/\"/g, "&amp;quot;") +
            '"</font>');
      }
    return b;
  }
  function l(a) {
    d(a, 1);
    return "undefined" != typeof a.xml
      ? a.xml
      : new XMLSerializer().serializeToString(a);
  }
  b.Class = "Xml";
  b.appendChild = function (a, b) {
    if ("undefined" == typeof a)
      throw Error("Illegal argument. First argument is not defined.");
    if ("undefined" == typeof b)
      throw Error("Illegal argument. Second argument is not defined.");
    if (
      "undefined" == typeof a.ownerDocument &&
      "undefined" == a.documentElement
    )
      throw Error(
        "Illegal argument. First argument is not an XmlNode (" +
          valueString(a) +
          ")."
      );
    if (
      "undefined" == typeof b.ownerDocument &&
      "undefined" == b.documentElement
    )
      throw Error(
        "Illegal argument. Second argument is not an XmlNode (" +
          valueString(b) +
          ")."
      );
    var f = null != a.ownerDocument ? a.ownerDocument : a,
      c = null != b.ownerDocument ? b.ownerDocument : b;
    null != f && "undefined" != typeof f.importNode && f != c
      ? b == c
        ? a.appendChild(f.importNode(b.documentElement, !0))
        : a.appendChild(f.importNode(b, !0))
      : b == c
      ? a.appendChild(b.documentElement)
      : a.appendChild(b);
  };
  b.compare = function (a, b) {
    if ("undefined" == typeof a)
      throw Error("Illegal argument. First argument is not defined.");
    if ("undefined" == typeof b)
      throw Error("Illegal argument. Second argument is not defined.");
    if (null == a && null == b) return null;
    if (null == a && null != b)
      return {
        node1: a,
        node2: b,
        reason: "First node is null, second is not null.",
        reasons: [],
      };
    if (null != a && null == b)
      return {
        node1: a,
        node2: b,
        reason: "First node is not null, second is null.",
        reasons: [],
      };
    if (
      "undefined" == typeof a.ownerDocument &&
      "undefined" == a.documentElement
    )
      throw Error(
        "Illegal argument. First argument is not an XmlNode (" +
          valueString(a) +
          ")."
      );
    if (
      "undefined" == typeof b.ownerDocument &&
      "undefined" == b.documentElement
    )
      throw Error(
        "Illegal argument. Second argument is not an XmlNode (" +
          valueString(b) +
          ")."
      );
    var f = function (a, b) {
      for (var e = [], c = 0; c < a.childNodes.length; c++) {
        var d = a.childNodes[c],
          g = null;
        switch (d.nodeType) {
          case ntElement:
            var k;
            k = d;
            for (var h = "", l = 0; l < k.attributes.length; l++)
              var m = k.attributes.item(l),
                h =
                  h +
                  (" and @" +
                    m.nodeName +
                    " = '" +
                    String(m.value).replace(/\'/gi, "&#39;") +
                    "'");
            k = "" != h ? k.nodeName + "[" + h.substr(5) + "]" : k.nodeName;
            h = q(b, k);
            if (0 == h.length)
              return {
                node1: a,
                node2: b,
                reason: "Couldn't find child: \"" + k + '".',
                reasons: e,
              };
            for (l = 0; l < h.length && null == g; l++)
              (m = f(d, h[l])), null == m ? (g = h[l]) : e.add(m);
            if (null == g)
              return 1 == e.length
                ? e[0]
                : {
                    node1: a,
                    node2: b,
                    reason: "Couldn't find correct child: \"" + k + '".',
                    reasons: e,
                  };
            break;
          case ntText:
          case ntCData:
            a: {
              for (g = 0; g < b.childNodes.length; g++)
                if (b.childNodes[g].nodeType == d.nodeType) {
                  g = b.childNodes[g];
                  break a;
                }
              g = null;
            }
            if (null == g)
              return {
                node1: a,
                node2: b,
                reason: "Couldn't find text or CDATA node.",
                reasons: e,
              };
            if (d.nodeValue != g.nodeValue)
              return {
                node1: d,
                node2: g,
                reason: "text or CDATA nodes are not the same.",
                reasons: e,
              };
        }
      }
      return null;
    };
    "undefined" != typeof a.documentElement && (a = a.documentElement);
    "undefined" != typeof b.documentElement && (b = b.documentElement);
    if (a.nodeName != b.nodeName)
      return {
        node1: a,
        node2: b,
        reason: "Root nodes are not the same.",
        reasons: [],
      };
    if (a.nodeType != b.nodeType)
      return {
        node1: a,
        node2: b,
        reason: "Root nodes are not of the same type.",
        reasons: [],
      };
    if (a.nodeType == ntElement) {
      for (var c = 0; c < a.attributes.length; c++) {
        var d = a.attributes.item(c),
          g = b.getAttributeNode(d.nodeName);
        if (null == g)
          return {
            node1: a,
            node2: b,
            reason:
              'Attribute "' + d.nodeName + '" does not exists in second node.',
            reasons: [],
          };
        if (d.value != g.value)
          return {
            node1: d,
            node2: g,
            reason:
              'The values of the "' +
              d.nodeName +
              '" attributes are not the same ("' +
              d.value +
              '" and "' +
              g.value +
              '").',
            reasons: [],
          };
      }
      for (c = 0; c < b.attributes.length; c++) {
        g = b.attributes.item(c);
        d = a.getAttributeNode(g.nodeName);
        if (null == d)
          return {
            node1: a,
            node2: b,
            reason:
              'Attribute "' + g.nodeName + '" does not exists in first node.',
            reasons: [],
          };
        if (d.value != g.value)
          return {
            node1: d,
            node2: g,
            reason:
              'The values of the "' +
              d.nodeName +
              '" attributes are not the same ("' +
              d.value +
              '" and "' +
              g.value +
              '").',
            reasons: [],
          };
      }
    }
    c = f(a, b);
    return null != c ? c : f(b, a);
  };
  b.create = h;
  b.createPath = p;
  b.filterIllegalChars = m;
  b.find = function (a, b) {
    d(a, 1);
    if ("undefined" != typeof a.childNodes)
      for (var f = 0; f < a.childNodes.length; f++)
        if (a.childNodes[f].nodeType == b) return a.childNodes[f];
    return null;
  };
  b.findAll = function (a, b) {
    d(a, 1);
    var f = [];
    if ("undefined" != typeof a.childNodes)
      for (var c = 0; c < a.childNodes.length; c++)
        a.childNodes[c].nodeType == b && f.add(a.childNodes[c]);
    return f;
  };
  b.getText = function (a) {
    if (null == a) return null;
    d(a, 1);
    return a.nodeType == ntElement ? a.text || a.textContent : a.value;
  };
  b.getValue = function (a) {
    if (null == a) return null;
    d(a, 1);
    if (a.nodeType == ntElement) {
      for (var b = "", f = 0; f < a.childNodes.length; f++) {
        var c = a.childNodes[f];
        c.nodeType == ntText && (b += c.text || c.textContent);
      }
      return b;
    }
    return a.value;
  };
  b.moveBottom = function (a) {
    d(a, 1);
    return a.nextSibling ? (a.parentNode.appendChild(a), !0) : !1;
  };
  b.moveDown = function (a) {
    d(a, 1);
    return a.nextSibling
      ? (a.nextSibling.nextSibling
          ? a.parentNode.insertBefore(a, a.nextSibling.nextSibling)
          : a.parentNode.appendChild(a),
        !0)
      : !1;
  };
  b.moveTop = function (a) {
    d(a, 1);
    return a.previousSibling
      ? (a.parentNode.insertBefore(a, a.parentNode.firstChild), !0)
      : !1;
  };
  b.moveUp = function (a) {
    d(a, 1);
    return a.previousSibling
      ? (a.parentNode.insertBefore(a, a.previousSibling), !0)
      : !1;
  };
  b.removeChildNodes = function (a) {
    for (d(a, 1); a.firstChild; ) a.removeChild(a.firstChild);
  };
  b.removeNode = function (a) {
    d(a, 1);
    if (a.parentNode) a.parentNode.removeChild(a);
    else throw Error("Illegal argument. The specified node has no parent.");
  };
  b.selectNodes = q;
  b.selectSingleNode = r;
  b.setText = t;
  b.setValue = function (a, b, f, c, k) {
    d(a, 1);
    var g = r(a, b),
      h = a,
      l = b;
    b.contains("/") &&
      ((l = b.substr(b.lastIndexOf("/") + 1)),
      (h = r(a, b.substr(0, b.lastIndexOf("/")))));
    l.startsWith("@") && ((l = l.substr(1)), (k = ntAttribute));
    c == dtString && (f = m(f));
    if (null == f || "" == String(f))
      return (
        null != g &&
          (k == ntAttribute
            ? h.removeAttribute(l)
            : null != a && h.removeChild(g)),
        null
      );
    "undefined" == typeof k && (k = ntElement);
    f = c == dtString ? f : toXml(f, c);
    null == g ? (g = p(a, b, f, k)) : t(g, f);
    return g;
  };
  b.show = function (a, b) {
    if (
      null == a ||
      ("string" != typeof a && "undefined" == typeof a.childNodes)
    )
      throw Error(
        "Illegal argument. First argument is expected to be a XmlNode or a string containing Xml (" +
          valueString(a) +
          ")."
      );
    a = h(a);
    if ("undefined" == typeof b || null == b) b = "";
    "undefined" != typeof a.documentElement && (a = a.documentElement);
    var d = 40 + l(a).length,
      c = window.open(
        "",
        "frmXML" + b,
        "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=1,width=788,height=570"
      );
    c &&
      (c.document.open(),
      c.document.writeln(
        "<html><head><title>Xml " +
          b +
          '</title></head><body style="font-family: Lucida Console, Courier New; font-size:11px; color:navy; margin:5px; background-color:white;">&lt;?xml version="1.0" encoding="Windows-1252"?&gt;'
      ),
      c.document.writeln(u(a)),
      2048 > d
        ? c.document.writeln(
            '<div style="clear:both; margin-top:10px; font-family:Verdana; color:black;"><b>XML size:</b> ' +
              d +
              " bytes</div></html>"
          )
        : 2048 > d / 1024
        ? c.document.writeln(
            '<div style="clear:both; margin-top:10px; font-family:Verdana; color:black;"><b>XML size:</b> ' +
              Math.round((d / 1024) * 100) / 100 +
              " kB</div></html>"
          )
        : 2048 > d / 1024 / 1024 &&
          c.document.writeln(
            '<div style="clear:both; margin-top:10px; font-family:Verdana; color:black;"><b>XML size:</b> ' +
              Math.round((d / 1024 / 1024) * 100) / 100 +
              " MB</div></html>"
          ),
      c.document.writeln("</body></html>"),
      c.document.close(),
      c.focus());
  };
  b.strToXPath = function (a) {
    if (null == a) return "''";
    var b = a.split("'");
    return 1 < b.length
      ? "concat('" + b.join("', \"'\", '") + "')"
      : "'" + a + "'";
  };
  b.toString = l;
  b.toHtml = function (a) {
    if (null == a) return "";
    if ("string" != typeof a && "undefined" == typeof a.childNodes)
      throw Error(
        "Illegal argument. First argument is expected to be a XmlNode or a string containing Xml (" +
          valueString(a) +
          ")."
      );
    var b = RegExp(
        "<(a|b|blockquote|body|button|center|code|colgroup|div|em|fieldset|font|frame|frameset|head|h[dn]|html|iframe|label|legend|li|object|ol|optgroup|option|p|q|s|script|select|span|strike|strong|sub|sup|table|tbody|td|textarea|tfoot|th|thead|title|tr|u|ul)(\\b[^>]*?)?\\s*/>",
        "gi"
      ),
      d = RegExp('<\\?xml version="1\\.0" encoding="[^"]*"\\?>', "gi");
    return ("string" == typeof a ? a : l(a))
      .replace(b, "<$1$2></$1>")
      .replace(d, "");
  };
  b.transform = function (a, b) {
    d(a, 1);
    null != b && "string" == typeof b && (b = h(new Url(b)));
    if (null == b || "undefined" == typeof b.documentElement)
      throw Error(
        "Illegal argument. Second argument is expected to be a XmlDocument or a string containing the path to a valid Xsl file (" +
          valueString(b) +
          ")."
      );
    if ("undefined" != typeof a.transformNode) return a.transformNode(b);
    var f = new XSLTProcessor();
    f.importStylesheet(b);
    return (f = f.transformToFragment(a, a.ownerDocument || a)) ? l(f) : null;
  };
})(Xml || (Xml = {}));
function toXml(b, d) {
  if ("undefined" != typeof d)
    switch (d) {
      case dtBoolean:
        return b ? "1" : "0";
      case dtDateTime:
        return b.formatString("s");
      case dtDecimal:
      case dtDouble:
      case dtMoney:
      case dtPercentage:
        return b.formatString("0.0#########").replace(",", ".");
      case dtInteger:
      case dtLong:
        break;
      case dtString:
      case dtGuid:
        b = b.replace(/\&/gi, "&amp;");
        b = b.replace(/\"/gi, "&quot;");
        b = b.replace(/\</gi, "&lt;");
        b = b.replace(/\>/gi, "&gt;");
        b = Xml.filterIllegalChars(b);
        break;
      default:
        throw Error('Illegal assignment to parameter "type" (' + d + ").");
    }
  else {
    d = typeof b;
    if ("boolean" == d) return toXml(b, dtBoolean);
    if ("number" == d) return toXml(b, dtDouble);
    if ("string" == d) return toXml(b, dtString);
    if (b instanceof Date) return toXml(b, dtDateTime);
    throw Error(
      'Illegal assignment to parameter "value" (' +
        valueString(b) +
        "). The value is of an illegal type."
    );
  }
  return b;
}
function fromXml(b, d) {
  "undefined" != typeof b &&
    "undefined" != typeof b.firstChild &&
    (b = Xml.getText(b));
  if (null == b || "" == String(b)) return null;
  if ("undefined" == typeof d) return b;
  switch (d) {
    case dtBoolean:
      return "0" == String(b) ||
        "false" == String(b).toLowerCase() ||
        "no" == String(b).toLowerCase()
        ? !1
        : !0;
    case dtDateTime:
      return (b = parseXmlDate(b)), isNaN(b) ? null : b;
    case dtDecimal:
    case dtDouble:
    case dtMoney:
    case dtPercentage:
      return (b = parseFloat(b)), isNaN(b) ? null : b;
    case dtInteger:
    case dtLong:
      return (b = parseInt(b)), isNaN(b) ? null : b;
    case dtString:
    case dtGuid:
      return (
        (b = b.replace(/\r+\n/gi, "\n")),
        (b = b.replace(/\n/gi, "\r\n")),
        (b = b.replace(/&amp;/gi, "&")),
        (b = b.replace(/&quot;/gi, '"')),
        (b = b.replace(/&lt;/gi, "<")),
        b.replace(/&gt;/gi, ">")
      );
    default:
      throw Error('Illegal assignment to parameter "type" (' + d + ").");
  }
}
function parseXmlDate(b) {
  if (/^(\d{4}-\d{2}-\d{2})(T\d{2}:\d{2}:\d{2}(\.\d{1,7})?)?$/i.test(b)) {
    b = b.split(/[-T:\.]/g);
    for (var d = 0; d < b.length; d++)
      for (; b[d].startsWith("0") && 1 < String(b[d]).length; )
        b[d] = b[d].substr(1);
    var d = parseInt(b[0]),
      h = parseInt(b[1]),
      p = parseInt(b[2]),
      m = parseInt(b[3]),
      q = parseInt(b[4]);
    b = parseInt(b[5]);
    isNaN(m) && (m = 0);
    isNaN(q) && (q = 0);
    isNaN(b) && (b = 0);
    return new Date(d, h - 1, p, m, q, b);
  }
  return parseInt("knaag");
}
function htmlEncode(b) {
  var d;
  try {
    d = new String(b);
    d = d.replace(/&/g, "&amp;");
    for (var h = 0; h < charCodes.length; h++) {
      var p = charCodes[h],
        m = specialChar[p - 160];
      d = d.replace(
        new RegExp(String.fromCharCode(p), "g"),
        "&amp;" + m.substr(1)
      );
    }
    d = d.replace(/</g, "&lt;");
    d = d.replace(/>/g, "&gt;");
    d = d.replace(/"/g, "&quot;");
  } catch (q) {
    try {
      d = b.join(", ");
    } catch (r) {
      d = b;
    }
  }
  return d;
}

TMenu = function () {
  this.appMenu = "undefined" == typeof appMenu ? !1 : appMenu;
  this.Class = "TMenu";
  this.clicked = !1;
  this.clicker = null;
  this.disabled = !1;
  this.div = null;
  this.horizontal = "undefined" == typeof horizontal ? !1 : horizontal;
  this.menuItems = [];
  this.timer = null;
  this.initializing = this.initialized = !1;
  this.isTouchDevice = "ontouchstart" in document.documentElement;
  this.onClick = TEvent.find("menuClick");
  this.onHide = TEvent.find("menuHide");
  this.onShow = TEvent.find("menuShow");
};
TMenu.prototype.disable = function () {
  if (!this.disabled)
    if (
      ((this.disabled = !0),
      this.initialized || this.initialize(),
      this.initializing)
    )
      setTimeout("menu.disable()", 50);
    else
      for (var a = 0; a < this.menuItems.length; a++)
        this.menuItems[a].disable();
};
TMenu.prototype.enable = function () {
  if (this.disabled)
    if (
      ((this.disabled = !1),
      this.initialized || this.initialize(),
      this.initializing)
    )
      setTimeout("menu.enable()", 50);
    else
      for (var a = 0; a < this.menuItems.length; a++)
        this.menuItems[a].enable();
};
TMenu.prototype.hide = function (a) {
  a = "undefined" != typeof a ? a.srcElement || a.target : null;
  if (!a || "undefined" == typeof a.menuItem) {
    for (a = 0; a < this.menuItems.length; a++) this.menuItems[a].hide(!1, !0);
    this.clicked = !1;
  }
};
TMenu.prototype.initialize = function () {
  if (browser == browsers.IE && 9 > version && !bodyLoaded)
    setTimeout("menu.initialize();", 25);
  else if (!this.initialized && !this.initializing) {
    this.initializing = !0;
    if ((this.div = Html.get("mainMenu")))
      for (var a = 0; a < this.div.childNodes.length; a++)
        1 == this.div.childNodes[a].nodeType &&
          (this.menuItems[this.menuItems.length] = new TMenuItem(
            this,
            this,
            this.div.childNodes[a]
          ));
    this.isTouchDevice && !this.appMenu && (this.appMenu = !0);
    this.appMenu && addEvent(document, "click", "menu.hide(event);");
    this.initialized = !0;
    this.initializing = !1;
  }
};
TMenu.clicked = null;
TMenu.hiding = null;
TMenuItem = function (a, b, c) {
  this.Class = "TMenuItem";
  this.disabled = !1;
  this.parent = b;
  this.menu = a;
  this.menuItems = [];
  this.timer = null;
  this.a = c;
  this.a.menuItem = this;
  this.id = parseInt(c.id.substr(1));
  this.clicked = !1;
  this.div = Html.get("div" + this.id);
  this.visible = this.parent == this.menu ? !0 : !1;
  if (this.div) {
    this.div.menuItem = this;
    this.div.style.display = "none";
    document.body.appendChild(this.div);
    for (a = 0; a < this.div.childNodes.length; a++)
      1 == this.div.childNodes[a].nodeType &&
        (this.menuItems[this.menuItems.length] = new TMenuItem(
          this.menu,
          this,
          this.div.childNodes[a]
        ));
    a = measure(this.div, "border-width");
    b = measure(this.div, "padding-top");
    if (0 < a || 0 < b)
      addEvent(this.div, "mouseover", 'stopHideMenu("' + this.div.id + '");'),
        this.menu.appMenu ||
          addEvent(
            this.div,
            "mouseout",
            'hideMenu(Html.get("' + this.a.id + '"));'
          );
    this.menu.isTouchDevice
      ? ((this.href = this.a.href),
        (this.a.href = "javascript:;"),
        addEvent(this.a, "click", 'handleClick("' + this.a.id + '",event);'),
        this.appMenu || (this.a.onmouseout = function () {}))
      : addEvent(this.a, "click", "if(menu.onClick) menu.onClick(this);");
  }
};
TMenuItem.prototype.disable = function () {
  if (!this.disabled) {
    var a = this.div
      ? new Function("event", 'stopHideMenu("' + this.div.id + '");')
      : null;
    this.a.disabled = !0;
    this.a.oldHRef = this.a.href;
    this.a.href = "javascript:;";
    this.a.oldMouseOver = this.a.onmouseover;
    this.a.onmouseover = a;
    this.disabled = !0;
    Html.disable(this.a);
    for (a = 0; a < this.menuItems.length; a++) this.menuItems[a].disable();
  }
};
TMenuItem.prototype.enable = function () {
  if (this.disabled && !this.parent.disabled) {
    this.a.disabled = !1;
    this.a.href = this.a.oldHRef;
    this.a.oldHRef = void 0;
    this.a.onmouseover = this.a.oldMouseOver;
    this.a.oldMouseOver = void 0;
    this.disabled = !1;
    Html.enable(this.a);
    for (var a = 0; a < this.menuItems.length; a++) this.menuItems[a].enable();
  }
};
TMenuItem.prototype.hide = function (a, b) {
  a &&
    b &&
    Log.write(
      this.a.id + ".hide(" + valueString(a) + ", " + valueString(b) + ");"
    );
  this.timer && (clearTimeout(this.timer), (this.timer = null));
  a &&
    (this.parent != this.menu
      ? this.parent.hide(!0, !1)
      : (menu.clicker = setTimeout("menu.clicked=false;", 150)));
  "undefined" == typeof b && (b = !0);
  if (this.div && "none" != this.div.style.display) {
    this.div.style.display = "none";
    Html.removeClass(this.a, "shown");
    if (this.menu.onHide) this.menu.onHide(this);
    if (b)
      for (var c = 0; c < this.menuItems.length; c++)
        this.menuItems[c].hide(!1, !0);
  }
};
TMenuItem.prototype.show = function () {
  Log.write(this.a.id + ".show();");
  this.stopHide();
  for (var a = 0; a < this.parent.menuItems.length; a++)
    this.parent.menuItems[a] != this && this.parent.menuItems[a].hide(!1, !0);
  if (this.div && "none" == this.div.style.display) {
    var a = getLeft(this.a.parentNode),
      b = getTop(this.a),
      a = a + measure(this.a.parentNode, "margin-left");
    this.parent == menu && menu.horizontal
      ? ((a = getLeft(this.a)),
        (b += this.a.offsetHeight),
        (b += measure(menu.div, "border-bottom-width")),
        isIE && (b += measure(menu.div, "border-top-width")))
      : ((b += 3), (a += this.a.offsetWidth - 3));
    this.div.style.left = a + "px";
    this.div.style.top = b + "px";
    this.div.style.display = "block";
    Html.addClass(this.a, "shown");
    if (this.menu.onShow) this.menu.onShow(this);
    clearTimeout(this.menu.clicker);
    this.menu.clicked = !0;
    (this.parent != menu || !menu.horizontal) &&
      a + this.div.offsetWidth > document.body.offsetWidth - 20 &&
      ((a -= 2 * this.a.offsetWidth - 6), (this.div.style.left = a + "px"));
  }
};
TMenuItem.prototype.stopHide = function () {
  Log.write(this.a.id + ".stopHide();");
  this.timer && (clearTimeout(this.timer), (this.timer = null));
  if (null != TMenu.hiding && TMenu.hiding.timer)
    if ((clearTimeout(TMenu.hiding.timer), TMenu.hiding.parent == this)) {
      TMenu.hiding = null;
      for (var a = 0; a < this.menuItems.length; a++) {
        var b = this.menuItems[a];
        b.div && (b.div.style.display = "none");
      }
    } else TMenu.hiding = null;
  this.parent && this.parent != menu && this.parent.stopHide();
};
function handleClick(a, b) {
  Log.write("handleClick(" + valueString(a) + ", event);");
  if ((a = Html.get(a)) && "undefined" != typeof a.menuItem) {
    var c = a.menuItem;
    if (menu.onClick) menu.onClick(c);
    c != TMenu.clicked
      ? (TMenu.clicked = c)
      : (Log.doWrite(), (document.location.href = c.href));
  }
}
function hideMenu(a) {
  if (a && menu && menu.initialized)
    if (a.menuItem)
      (a.menuItem.timer = setTimeout('hideMenu("' + a.id + '");', 500)),
        (TMenu.hiding = a.menuItem);
    else if ("string" == typeof a) {
      var b = Html.get(a).menuItem;
      "undefined" != typeof b &&
        (Log.write("hideMenu(" + valueString(a) + ")"), b.hide(!0, !0));
    }
}
function showMenu(a, b) {
  (a = Html.get(a)) &&
    "undefined" != typeof a.menuItem &&
    ("undefined" == typeof b && (b = !0),
    Log.write(
      "showMenu(sender:" + valueString(a) + ", click:" + valueString(b) + ");"
    ),
    b || menu.clicked ? a.menuItem.show() : a.menuItem.stopHide());
}
function stopHideMenu(a) {
  (a = Html.get(a)) &&
    "undefined" != typeof a.menuItem &&
    (Log.write("stopHideMenu(" + valueString(a) + ")"), a.menuItem.stopHide());
}
var menu = new TMenu();

/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function (a, b) {
  function G(a) {
    var b = (F[a] = {});
    return (
      p.each(a.split(s), function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  function J(a, c, d) {
    if (d === b && a.nodeType === 1) {
      var e = "data-" + c.replace(I, "-$1").toLowerCase();
      d = a.getAttribute(e);
      if (typeof d == "string") {
        try {
          d =
            d === "true"
              ? !0
              : d === "false"
              ? !1
              : d === "null"
              ? null
              : +d + "" === d
              ? +d
              : H.test(d)
              ? p.parseJSON(d)
              : d;
        } catch (f) {}
        p.data(a, c, d);
      } else d = b;
    }
    return d;
  }
  function K(a) {
    var b;
    for (b in a) {
      if (b === "data" && p.isEmptyObject(a[b])) continue;
      if (b !== "toJSON") return !1;
    }
    return !0;
  }
  function ba() {
    return !1;
  }
  function bb() {
    return !0;
  }
  function bh(a) {
    return !a || !a.parentNode || a.parentNode.nodeType === 11;
  }
  function bi(a, b) {
    do a = a[b];
    while (a && a.nodeType !== 1);
    return a;
  }
  function bj(a, b, c) {
    b = b || 0;
    if (p.isFunction(b))
      return p.grep(a, function (a, d) {
        var e = !!b.call(a, d, a);
        return e === c;
      });
    if (b.nodeType)
      return p.grep(a, function (a, d) {
        return (a === b) === c;
      });
    if (typeof b == "string") {
      var d = p.grep(a, function (a) {
        return a.nodeType === 1;
      });
      if (be.test(b)) return p.filter(b, d, !c);
      b = p.filter(b, d);
    }
    return p.grep(a, function (a, d) {
      return p.inArray(a, b) >= 0 === c;
    });
  }
  function bk(a) {
    var b = bl.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement) while (b.length) c.createElement(b.pop());
    return c;
  }
  function bC(a, b) {
    return (
      a.getElementsByTagName(b)[0] ||
      a.appendChild(a.ownerDocument.createElement(b))
    );
  }
  function bD(a, b) {
    if (b.nodeType !== 1 || !p.hasData(a)) return;
    var c,
      d,
      e,
      f = p._data(a),
      g = p._data(b, f),
      h = f.events;
    if (h) {
      delete g.handle, (g.events = {});
      for (c in h)
        for (d = 0, e = h[c].length; d < e; d++) p.event.add(b, c, h[c][d]);
    }
    g.data && (g.data = p.extend({}, g.data));
  }
  function bE(a, b) {
    var c;
    if (b.nodeType !== 1) return;
    b.clearAttributes && b.clearAttributes(),
      b.mergeAttributes && b.mergeAttributes(a),
      (c = b.nodeName.toLowerCase()),
      c === "object"
        ? (b.parentNode && (b.outerHTML = a.outerHTML),
          p.support.html5Clone &&
            a.innerHTML &&
            !p.trim(b.innerHTML) &&
            (b.innerHTML = a.innerHTML))
        : c === "input" && bv.test(a.type)
        ? ((b.defaultChecked = b.checked = a.checked),
          b.value !== a.value && (b.value = a.value))
        : c === "option"
        ? (b.selected = a.defaultSelected)
        : c === "input" || c === "textarea"
        ? (b.defaultValue = a.defaultValue)
        : c === "script" && b.text !== a.text && (b.text = a.text),
      b.removeAttribute(p.expando);
  }
  function bF(a) {
    return typeof a.getElementsByTagName != "undefined"
      ? a.getElementsByTagName("*")
      : typeof a.querySelectorAll != "undefined"
      ? a.querySelectorAll("*")
      : [];
  }
  function bG(a) {
    bv.test(a.type) && (a.defaultChecked = a.checked);
  }
  function bY(a, b) {
    if (b in a) return b;
    var c = b.charAt(0).toUpperCase() + b.slice(1),
      d = b,
      e = bW.length;
    while (e--) {
      b = bW[e] + c;
      if (b in a) return b;
    }
    return d;
  }
  function bZ(a, b) {
    return (
      (a = b || a),
      p.css(a, "display") === "none" || !p.contains(a.ownerDocument, a)
    );
  }
  function b$(a, b) {
    var c,
      d,
      e = [],
      f = 0,
      g = a.length;
    for (; f < g; f++) {
      c = a[f];
      if (!c.style) continue;
      (e[f] = p._data(c, "olddisplay")),
        b
          ? (!e[f] && c.style.display === "none" && (c.style.display = ""),
            c.style.display === "" &&
              bZ(c) &&
              (e[f] = p._data(c, "olddisplay", cc(c.nodeName))))
          : ((d = bH(c, "display")),
            !e[f] && d !== "none" && p._data(c, "olddisplay", d));
    }
    for (f = 0; f < g; f++) {
      c = a[f];
      if (!c.style) continue;
      if (!b || c.style.display === "none" || c.style.display === "")
        c.style.display = b ? e[f] || "" : "none";
    }
    return a;
  }
  function b_(a, b, c) {
    var d = bP.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function ca(a, b, c, d) {
    var e = c === (d ? "border" : "content") ? 4 : b === "width" ? 1 : 0,
      f = 0;
    for (; e < 4; e += 2)
      c === "margin" && (f += p.css(a, c + bV[e], !0)),
        d
          ? (c === "content" &&
              (f -= parseFloat(bH(a, "padding" + bV[e])) || 0),
            c !== "margin" &&
              (f -= parseFloat(bH(a, "border" + bV[e] + "Width")) || 0))
          : ((f += parseFloat(bH(a, "padding" + bV[e])) || 0),
            c !== "padding" &&
              (f += parseFloat(bH(a, "border" + bV[e] + "Width")) || 0));
    return f;
  }
  function cb(a, b, c) {
    var d = b === "width" ? a.offsetWidth : a.offsetHeight,
      e = !0,
      f = p.support.boxSizing && p.css(a, "boxSizing") === "border-box";
    if (d <= 0 || d == null) {
      d = bH(a, b);
      if (d < 0 || d == null) d = a.style[b];
      if (bQ.test(d)) return d;
      (e = f && (p.support.boxSizingReliable || d === a.style[b])),
        (d = parseFloat(d) || 0);
    }
    return d + ca(a, b, c || (f ? "border" : "content"), e) + "px";
  }
  function cc(a) {
    if (bS[a]) return bS[a];
    var b = p("<" + a + ">").appendTo(e.body),
      c = b.css("display");
    b.remove();
    if (c === "none" || c === "") {
      bI = e.body.appendChild(
        bI ||
          p.extend(e.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0,
          })
      );
      if (!bJ || !bI.createElement)
        (bJ = (bI.contentWindow || bI.contentDocument).document),
          bJ.write("<!doctype html><html><body>"),
          bJ.close();
      (b = bJ.body.appendChild(bJ.createElement(a))),
        (c = bH(b, "display")),
        e.body.removeChild(bI);
    }
    return (bS[a] = c), c;
  }
  function ci(a, b, c, d) {
    var e;
    if (p.isArray(b))
      p.each(b, function (b, e) {
        c || ce.test(a)
          ? d(a, e)
          : ci(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d);
      });
    else if (!c && p.type(b) === "object")
      for (e in b) ci(a + "[" + e + "]", b[e], c, d);
    else d(a, b);
  }
  function cz(a) {
    return function (b, c) {
      typeof b != "string" && ((c = b), (b = "*"));
      var d,
        e,
        f,
        g = b.toLowerCase().split(s),
        h = 0,
        i = g.length;
      if (p.isFunction(c))
        for (; h < i; h++)
          (d = g[h]),
            (f = /^\+/.test(d)),
            f && (d = d.substr(1) || "*"),
            (e = a[d] = a[d] || []),
            e[f ? "unshift" : "push"](c);
    };
  }
  function cA(a, c, d, e, f, g) {
    (f = f || c.dataTypes[0]), (g = g || {}), (g[f] = !0);
    var h,
      i = a[f],
      j = 0,
      k = i ? i.length : 0,
      l = a === cv;
    for (; j < k && (l || !h); j++)
      (h = i[j](c, d, e)),
        typeof h == "string" &&
          (!l || g[h]
            ? (h = b)
            : (c.dataTypes.unshift(h), (h = cA(a, c, d, e, h, g))));
    return (l || !h) && !g["*"] && (h = cA(a, c, d, e, "*", g)), h;
  }
  function cB(a, c) {
    var d,
      e,
      f = p.ajaxSettings.flatOptions || {};
    for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
    e && p.extend(!0, a, e);
  }
  function cC(a, c, d) {
    var e,
      f,
      g,
      h,
      i = a.contents,
      j = a.dataTypes,
      k = a.responseFields;
    for (f in k) f in d && (c[k[f]] = d[f]);
    while (j[0] === "*")
      j.shift(),
        e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
    if (e)
      for (f in i)
        if (i[f] && i[f].test(e)) {
          j.unshift(f);
          break;
        }
    if (j[0] in d) g = j[0];
    else {
      for (f in d) {
        if (!j[0] || a.converters[f + " " + j[0]]) {
          g = f;
          break;
        }
        h || (h = f);
      }
      g = g || h;
    }
    if (g) return g !== j[0] && j.unshift(g), d[g];
  }
  function cD(a, b) {
    var c,
      d,
      e,
      f,
      g = a.dataTypes.slice(),
      h = g[0],
      i = {},
      j = 0;
    a.dataFilter && (b = a.dataFilter(b, a.dataType));
    if (g[1]) for (c in a.converters) i[c.toLowerCase()] = a.converters[c];
    for (; (e = g[++j]); )
      if (e !== "*") {
        if (h !== "*" && h !== e) {
          c = i[h + " " + e] || i["* " + e];
          if (!c)
            for (d in i) {
              f = d.split(" ");
              if (f[1] === e) {
                c = i[h + " " + f[0]] || i["* " + f[0]];
                if (c) {
                  c === !0
                    ? (c = i[d])
                    : i[d] !== !0 && ((e = f[0]), g.splice(j--, 0, e));
                  break;
                }
              }
            }
          if (c !== !0)
            if (c && a["throws"]) b = c(b);
            else
              try {
                b = c(b);
              } catch (k) {
                return {
                  state: "parsererror",
                  error: c ? k : "No conversion from " + h + " to " + e,
                };
              }
        }
        h = e;
      }
    return { state: "success", data: b };
  }
  function cL() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }
  function cM() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }
  function cU() {
    return (
      setTimeout(function () {
        cN = b;
      }, 0),
      (cN = p.now())
    );
  }
  function cV(a, b) {
    p.each(b, function (b, c) {
      var d = (cT[b] || []).concat(cT["*"]),
        e = 0,
        f = d.length;
      for (; e < f; e++) if (d[e].call(a, b, c)) return;
    });
  }
  function cW(a, b, c) {
    var d,
      e = 0,
      f = 0,
      g = cS.length,
      h = p.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        var b = cN || cU(),
          c = Math.max(0, j.startTime + j.duration - b),
          d = 1 - (c / j.duration || 0),
          e = 0,
          f = j.tweens.length;
        for (; e < f; e++) j.tweens[e].run(d);
        return (
          h.notifyWith(a, [j, d, c]),
          d < 1 && f ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: p.extend({}, b),
        opts: p.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: cN || cU(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c, d) {
          var e = p.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(e), e;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          for (; c < d; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
        },
      }),
      k = j.props;
    cX(k, j.opts.specialEasing);
    for (; e < g; e++) {
      d = cS[e].call(j, a, k, j.opts);
      if (d) return d;
    }
    return (
      cV(j, k),
      p.isFunction(j.opts.start) && j.opts.start.call(a, j),
      p.fx.timer(p.extend(i, { anim: j, queue: j.opts.queue, elem: a })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  function cX(a, b) {
    var c, d, e, f, g;
    for (c in a) {
      (d = p.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        p.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = p.cssHooks[d]);
      if (g && "expand" in g) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
    }
  }
  function cY(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = this,
      m = a.style,
      n = {},
      o = [],
      q = a.nodeType && bZ(a);
    c.queue ||
      ((j = p._queueHooks(a, "fx")),
      j.unqueued == null &&
        ((j.unqueued = 0),
        (k = j.empty.fire),
        (j.empty.fire = function () {
          j.unqueued || k();
        })),
      j.unqueued++,
      l.always(function () {
        l.always(function () {
          j.unqueued--, p.queue(a, "fx").length || j.empty.fire();
        });
      })),
      a.nodeType === 1 &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [m.overflow, m.overflowX, m.overflowY]),
        p.css(a, "display") === "inline" &&
          p.css(a, "float") === "none" &&
          (!p.support.inlineBlockNeedsLayout || cc(a.nodeName) === "inline"
            ? (m.display = "inline-block")
            : (m.zoom = 1))),
      c.overflow &&
        ((m.overflow = "hidden"),
        p.support.shrinkWrapBlocks ||
          l.done(function () {
            (m.overflow = c.overflow[0]),
              (m.overflowX = c.overflow[1]),
              (m.overflowY = c.overflow[2]);
          }));
    for (d in b) {
      f = b[d];
      if (cP.exec(f)) {
        delete b[d];
        if (f === (q ? "hide" : "show")) continue;
        o.push(d);
      }
    }
    g = o.length;
    if (g) {
      (h = p._data(a, "fxshow") || p._data(a, "fxshow", {})),
        q
          ? p(a).show()
          : l.done(function () {
              p(a).hide();
            }),
        l.done(function () {
          var b;
          p.removeData(a, "fxshow", !0);
          for (b in n) p.style(a, b, n[b]);
        });
      for (d = 0; d < g; d++)
        (e = o[d]),
          (i = l.createTween(e, q ? h[e] : 0)),
          (n[e] = h[e] || p.style(a, e)),
          e in h ||
            ((h[e] = i.start),
            q &&
              ((i.end = i.start),
              (i.start = e === "width" || e === "height" ? 1 : 0)));
    }
  }
  function cZ(a, b, c, d, e) {
    return new cZ.prototype.init(a, b, c, d, e);
  }
  function c$(a, b) {
    var c,
      d = { height: a },
      e = 0;
    b = b ? 1 : 0;
    for (; e < 4; e += 2 - b)
      (c = bV[e]), (d["margin" + c] = d["padding" + c] = a);
    return b && (d.opacity = d.width = a), d;
  }
  function da(a) {
    return p.isWindow(a)
      ? a
      : a.nodeType === 9
      ? a.defaultView || a.parentWindow
      : !1;
  }
  var c,
    d,
    e = a.document,
    f = a.location,
    g = a.navigator,
    h = a.jQuery,
    i = a.$,
    j = Array.prototype.push,
    k = Array.prototype.slice,
    l = Array.prototype.indexOf,
    m = Object.prototype.toString,
    n = Object.prototype.hasOwnProperty,
    o = String.prototype.trim,
    p = function (a, b) {
      return new p.fn.init(a, b, c);
    },
    q = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
    r = /\S/,
    s = /\s+/,
    t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^[\],:{}\s]*$/,
    x = /(?:^|:|,)(?:\s*\[)+/g,
    y = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    z = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
    A = /^-ms-/,
    B = /-([\da-z])/gi,
    C = function (a, b) {
      return (b + "").toUpperCase();
    },
    D = function () {
      e.addEventListener
        ? (e.removeEventListener("DOMContentLoaded", D, !1), p.ready())
        : e.readyState === "complete" &&
          (e.detachEvent("onreadystatechange", D), p.ready());
    },
    E = {};
  (p.fn = p.prototype = {
    constructor: p,
    init: function (a, c, d) {
      var f, g, h, i;
      if (!a) return this;
      if (a.nodeType)
        return (this.context = this[0] = a), (this.length = 1), this;
      if (typeof a == "string") {
        a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3
          ? (f = [null, a, null])
          : (f = u.exec(a));
        if (f && (f[1] || !c)) {
          if (f[1])
            return (
              (c = c instanceof p ? c[0] : c),
              (i = c && c.nodeType ? c.ownerDocument || c : e),
              (a = p.parseHTML(f[1], i, !0)),
              v.test(f[1]) && p.isPlainObject(c) && this.attr.call(a, c, !0),
              p.merge(this, a)
            );
          g = e.getElementById(f[2]);
          if (g && g.parentNode) {
            if (g.id !== f[2]) return d.find(a);
            (this.length = 1), (this[0] = g);
          }
          return (this.context = e), (this.selector = a), this;
        }
        return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
      }
      return p.isFunction(a)
        ? d.ready(a)
        : (a.selector !== b &&
            ((this.selector = a.selector), (this.context = a.context)),
          p.makeArray(a, this));
    },
    selector: "",
    jquery: "1.8.2",
    length: 0,
    size: function () {
      return this.length;
    },
    toArray: function () {
      return k.call(this);
    },
    get: function (a) {
      return a == null
        ? this.toArray()
        : a < 0
        ? this[this.length + a]
        : this[a];
    },
    pushStack: function (a, b, c) {
      var d = p.merge(this.constructor(), a);
      return (
        (d.prevObject = this),
        (d.context = this.context),
        b === "find"
          ? (d.selector = this.selector + (this.selector ? " " : "") + c)
          : b && (d.selector = this.selector + "." + b + "(" + c + ")"),
        d
      );
    },
    each: function (a, b) {
      return p.each(this, a, b);
    },
    ready: function (a) {
      return p.ready.promise().done(a), this;
    },
    eq: function (a) {
      return (a = +a), a === -1 ? this.slice(a) : this.slice(a, a + 1);
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    slice: function () {
      return this.pushStack(
        k.apply(this, arguments),
        "slice",
        k.call(arguments).join(",")
      );
    },
    map: function (a) {
      return this.pushStack(
        p.map(this, function (b, c) {
          return a.call(b, c, b);
        })
      );
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: j,
    sort: [].sort,
    splice: [].splice,
  }),
    (p.fn.init.prototype = p.fn),
    (p.extend = p.fn.extend = function () {
      var a,
        c,
        d,
        e,
        f,
        g,
        h = arguments[0] || {},
        i = 1,
        j = arguments.length,
        k = !1;
      typeof h == "boolean" && ((k = h), (h = arguments[1] || {}), (i = 2)),
        typeof h != "object" && !p.isFunction(h) && (h = {}),
        j === i && ((h = this), --i);
      for (; i < j; i++)
        if ((a = arguments[i]) != null)
          for (c in a) {
            (d = h[c]), (e = a[c]);
            if (h === e) continue;
            k && e && (p.isPlainObject(e) || (f = p.isArray(e)))
              ? (f
                  ? ((f = !1), (g = d && p.isArray(d) ? d : []))
                  : (g = d && p.isPlainObject(d) ? d : {}),
                (h[c] = p.extend(k, g, e)))
              : e !== b && (h[c] = e);
          }
      return h;
    }),
    p.extend({
      noConflict: function (b) {
        return a.$ === p && (a.$ = i), b && a.jQuery === p && (a.jQuery = h), p;
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? p.readyWait++ : p.ready(!0);
      },
      ready: function (a) {
        if (a === !0 ? --p.readyWait : p.isReady) return;
        if (!e.body) return setTimeout(p.ready, 1);
        p.isReady = !0;
        if (a !== !0 && --p.readyWait > 0) return;
        d.resolveWith(e, [p]),
          p.fn.trigger && p(e).trigger("ready").off("ready");
      },
      isFunction: function (a) {
        return p.type(a) === "function";
      },
      isArray:
        Array.isArray ||
        function (a) {
          return p.type(a) === "array";
        },
      isWindow: function (a) {
        return a != null && a == a.window;
      },
      isNumeric: function (a) {
        return !isNaN(parseFloat(a)) && isFinite(a);
      },
      type: function (a) {
        return a == null ? String(a) : E[m.call(a)] || "object";
      },
      isPlainObject: function (a) {
        if (!a || p.type(a) !== "object" || a.nodeType || p.isWindow(a))
          return !1;
        try {
          if (
            a.constructor &&
            !n.call(a, "constructor") &&
            !n.call(a.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (c) {
          return !1;
        }
        var d;
        for (d in a);
        return d === b || n.call(a, d);
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      error: function (a) {
        throw new Error(a);
      },
      parseHTML: function (a, b, c) {
        var d;
        return !a || typeof a != "string"
          ? null
          : (typeof b == "boolean" && ((c = b), (b = 0)),
            (b = b || e),
            (d = v.exec(a))
              ? [b.createElement(d[1])]
              : ((d = p.buildFragment([a], b, c ? null : [])),
                p.merge(
                  [],
                  (d.cacheable ? p.clone(d.fragment) : d.fragment).childNodes
                )));
      },
      parseJSON: function (b) {
        if (!b || typeof b != "string") return null;
        b = p.trim(b);
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
        if (w.test(b.replace(y, "@").replace(z, "]").replace(x, "")))
          return new Function("return " + b)();
        p.error("Invalid JSON: " + b);
      },
      parseXML: function (c) {
        var d, e;
        if (!c || typeof c != "string") return null;
        try {
          a.DOMParser
            ? ((e = new DOMParser()), (d = e.parseFromString(c, "text/xml")))
            : ((d = new ActiveXObject("Microsoft.XMLDOM")),
              (d.async = "false"),
              d.loadXML(c));
        } catch (f) {
          d = b;
        }
        return (
          (!d ||
            !d.documentElement ||
            d.getElementsByTagName("parsererror").length) &&
            p.error("Invalid XML: " + c),
          d
        );
      },
      noop: function () {},
      globalEval: function (b) {
        b &&
          r.test(b) &&
          (
            a.execScript ||
            function (b) {
              a.eval.call(a, b);
            }
          )(b);
      },
      camelCase: function (a) {
        return a.replace(A, "ms-").replace(B, C);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, c, d) {
        var e,
          f = 0,
          g = a.length,
          h = g === b || p.isFunction(a);
        if (d) {
          if (h) {
            for (e in a) if (c.apply(a[e], d) === !1) break;
          } else for (; f < g; ) if (c.apply(a[f++], d) === !1) break;
        } else if (h) {
          for (e in a) if (c.call(a[e], e, a[e]) === !1) break;
        } else for (; f < g; ) if (c.call(a[f], f, a[f++]) === !1) break;
        return a;
      },
      trim:
        o && !o.call("ï»¿ ")
          ? function (a) {
              return a == null ? "" : o.call(a);
            }
          : function (a) {
              return a == null ? "" : (a + "").replace(t, "");
            },
      makeArray: function (a, b) {
        var c,
          d = b || [];
        return (
          a != null &&
            ((c = p.type(a)),
            a.length == null ||
            c === "string" ||
            c === "function" ||
            c === "regexp" ||
            p.isWindow(a)
              ? j.call(d, a)
              : p.merge(d, a)),
          d
        );
      },
      inArray: function (a, b, c) {
        var d;
        if (b) {
          if (l) return l.call(b, a, c);
          (d = b.length), (c = c ? (c < 0 ? Math.max(0, d + c) : c) : 0);
          for (; c < d; c++) if (c in b && b[c] === a) return c;
        }
        return -1;
      },
      merge: function (a, c) {
        var d = c.length,
          e = a.length,
          f = 0;
        if (typeof d == "number") for (; f < d; f++) a[e++] = c[f];
        else while (c[f] !== b) a[e++] = c[f++];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        var d,
          e = [],
          f = 0,
          g = a.length;
        c = !!c;
        for (; f < g; f++) (d = !!b(a[f], f)), c !== d && e.push(a[f]);
        return e;
      },
      map: function (a, c, d) {
        var e,
          f,
          g = [],
          h = 0,
          i = a.length,
          j =
            a instanceof p ||
            (i !== b &&
              typeof i == "number" &&
              ((i > 0 && a[0] && a[i - 1]) || i === 0 || p.isArray(a)));
        if (j)
          for (; h < i; h++)
            (e = c(a[h], h, d)), e != null && (g[g.length] = e);
        else for (f in a) (e = c(a[f], f, d)), e != null && (g[g.length] = e);
        return g.concat.apply([], g);
      },
      guid: 1,
      proxy: function (a, c) {
        var d, e, f;
        return (
          typeof c == "string" && ((d = a[c]), (c = a), (a = d)),
          p.isFunction(a)
            ? ((e = k.call(arguments, 2)),
              (f = function () {
                return a.apply(c, e.concat(k.call(arguments)));
              }),
              (f.guid = a.guid = a.guid || p.guid++),
              f)
            : b
        );
      },
      access: function (a, c, d, e, f, g, h) {
        var i,
          j = d == null,
          k = 0,
          l = a.length;
        if (d && typeof d == "object") {
          for (k in d) p.access(a, c, k, d[k], 1, g, e);
          f = 1;
        } else if (e !== b) {
          (i = h === b && p.isFunction(e)),
            j &&
              (i
                ? ((i = c),
                  (c = function (a, b, c) {
                    return i.call(p(a), c);
                  }))
                : (c.call(a, e), (c = null)));
          if (c)
            for (; k < l; k++)
              c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
          f = 1;
        }
        return f ? a : j ? c.call(a) : l ? c(a[0], d) : g;
      },
      now: function () {
        return new Date().getTime();
      },
    }),
    (p.ready.promise = function (b) {
      if (!d) {
        d = p.Deferred();
        if (e.readyState === "complete") setTimeout(p.ready, 1);
        else if (e.addEventListener)
          e.addEventListener("DOMContentLoaded", D, !1),
            a.addEventListener("load", p.ready, !1);
        else {
          e.attachEvent("onreadystatechange", D),
            a.attachEvent("onload", p.ready);
          var c = !1;
          try {
            c = a.frameElement == null && e.documentElement;
          } catch (f) {}
          c &&
            c.doScroll &&
            (function g() {
              if (!p.isReady) {
                try {
                  c.doScroll("left");
                } catch (a) {
                  return setTimeout(g, 50);
                }
                p.ready();
              }
            })();
        }
      }
      return d.promise(b);
    }),
    p.each(
      "Boolean Number String Function Array Date RegExp Object".split(" "),
      function (a, b) {
        E["[object " + b + "]"] = b.toLowerCase();
      }
    ),
    (c = p(e));
  var F = {};
  (p.Callbacks = function (a) {
    a = typeof a == "string" ? F[a] || G(a) : p.extend({}, a);
    var c,
      d,
      e,
      f,
      g,
      h,
      i = [],
      j = !a.once && [],
      k = function (b) {
        (c = a.memory && b),
          (d = !0),
          (h = f || 0),
          (f = 0),
          (g = i.length),
          (e = !0);
        for (; i && h < g; h++)
          if (i[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
            c = !1;
            break;
          }
        (e = !1),
          i && (j ? j.length && k(j.shift()) : c ? (i = []) : l.disable());
      },
      l = {
        add: function () {
          if (i) {
            var b = i.length;
            (function d(b) {
              p.each(b, function (b, c) {
                var e = p.type(c);
                e === "function" && (!a.unique || !l.has(c))
                  ? i.push(c)
                  : c && c.length && e !== "string" && d(c);
              });
            })(arguments),
              e ? (g = i.length) : c && ((f = b), k(c));
          }
          return this;
        },
        remove: function () {
          return (
            i &&
              p.each(arguments, function (a, b) {
                var c;
                while ((c = p.inArray(b, i, c)) > -1)
                  i.splice(c, 1), e && (c <= g && g--, c <= h && h--);
              }),
            this
          );
        },
        has: function (a) {
          return p.inArray(a, i) > -1;
        },
        empty: function () {
          return (i = []), this;
        },
        disable: function () {
          return (i = j = c = b), this;
        },
        disabled: function () {
          return !i;
        },
        lock: function () {
          return (j = b), c || l.disable(), this;
        },
        locked: function () {
          return !j;
        },
        fireWith: function (a, b) {
          return (
            (b = b || []),
            (b = [a, b.slice ? b.slice() : b]),
            i && (!d || j) && (e ? j.push(b) : k(b)),
            this
          );
        },
        fire: function () {
          return l.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return l;
  }),
    p.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", p.Callbacks("once memory"), "resolved"],
            ["reject", "fail", p.Callbacks("once memory"), "rejected"],
            ["notify", "progress", p.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return p
                .Deferred(function (c) {
                  p.each(b, function (b, d) {
                    var f = d[0],
                      g = a[b];
                    e[d[1]](
                      p.isFunction(g)
                        ? function () {
                            var a = g.apply(this, arguments);
                            a && p.isFunction(a.promise)
                              ? a
                                  .promise()
                                  .done(c.resolve)
                                  .fail(c.reject)
                                  .progress(c.notify)
                              : c[f + "With"](this === e ? c : this, [a]);
                          }
                        : c[f]
                    );
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return a != null ? p.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          p.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[a ^ 1][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = g.fire),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = k.call(arguments),
          d = c.length,
          e = d !== 1 || (a && p.isFunction(a.promise)) ? d : 0,
          f = e === 1 ? a : p.Deferred(),
          g = function (a, b, c) {
            return function (d) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? k.call(arguments) : d),
                c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c);
            };
          },
          h,
          i,
          j;
        if (d > 1) {
          (h = new Array(d)), (i = new Array(d)), (j = new Array(d));
          for (; b < d; b++)
            c[b] && p.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .done(g(b, j, c))
                  .fail(f.reject)
                  .progress(g(b, i, h))
              : --e;
        }
        return e || f.resolveWith(j, c), f.promise();
      },
    }),
    (p.support = (function () {
      var b,
        c,
        d,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n = e.createElement("div");
      n.setAttribute("className", "t"),
        (n.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (c = n.getElementsByTagName("*")),
        (d = n.getElementsByTagName("a")[0]),
        (d.style.cssText = "top:1px;float:left;opacity:.5");
      if (!c || !c.length) return {};
      (f = e.createElement("select")),
        (g = f.appendChild(e.createElement("option"))),
        (h = n.getElementsByTagName("input")[0]),
        (b = {
          leadingWhitespace: n.firstChild.nodeType === 3,
          tbody: !n.getElementsByTagName("tbody").length,
          htmlSerialize: !!n.getElementsByTagName("link").length,
          style: /top/.test(d.getAttribute("style")),
          hrefNormalized: d.getAttribute("href") === "/a",
          opacity: /^0.5/.test(d.style.opacity),
          cssFloat: !!d.style.cssFloat,
          checkOn: h.value === "on",
          optSelected: g.selected,
          getSetAttribute: n.className !== "t",
          enctype: !!e.createElement("form").enctype,
          html5Clone:
            e.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
          boxModel: e.compatMode === "CSS1Compat",
          submitBubbles: !0,
          changeBubbles: !0,
          focusinBubbles: !1,
          deleteExpando: !0,
          noCloneEvent: !0,
          inlineBlockNeedsLayout: !1,
          shrinkWrapBlocks: !1,
          reliableMarginRight: !0,
          boxSizingReliable: !0,
          pixelPosition: !1,
        }),
        (h.checked = !0),
        (b.noCloneChecked = h.cloneNode(!0).checked),
        (f.disabled = !0),
        (b.optDisabled = !g.disabled);
      try {
        delete n.test;
      } catch (o) {
        b.deleteExpando = !1;
      }
      !n.addEventListener &&
        n.attachEvent &&
        n.fireEvent &&
        (n.attachEvent(
          "onclick",
          (m = function () {
            b.noCloneEvent = !1;
          })
        ),
        n.cloneNode(!0).fireEvent("onclick"),
        n.detachEvent("onclick", m)),
        (h = e.createElement("input")),
        (h.value = "t"),
        h.setAttribute("type", "radio"),
        (b.radioValue = h.value === "t"),
        h.setAttribute("checked", "checked"),
        h.setAttribute("name", "t"),
        n.appendChild(h),
        (i = e.createDocumentFragment()),
        i.appendChild(n.lastChild),
        (b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (b.appendChecked = h.checked),
        i.removeChild(h),
        i.appendChild(n);
      if (n.attachEvent)
        for (k in { submit: !0, change: !0, focusin: !0 })
          (j = "on" + k),
            (l = j in n),
            l ||
              (n.setAttribute(j, "return;"), (l = typeof n[j] == "function")),
            (b[k + "Bubbles"] = l);
      return (
        p(function () {
          var c,
            d,
            f,
            g,
            h = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
            i = e.getElementsByTagName("body")[0];
          if (!i) return;
          (c = e.createElement("div")),
            (c.style.cssText =
              "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px"),
            i.insertBefore(c, i.firstChild),
            (d = e.createElement("div")),
            c.appendChild(d),
            (d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (f = d.getElementsByTagName("td")),
            (f[0].style.cssText = "padding:0;margin:0;border:0;display:none"),
            (l = f[0].offsetHeight === 0),
            (f[0].style.display = ""),
            (f[1].style.display = "none"),
            (b.reliableHiddenOffsets = l && f[0].offsetHeight === 0),
            (d.innerHTML = ""),
            (d.style.cssText =
              "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
            (b.boxSizing = d.offsetWidth === 4),
            (b.doesNotIncludeMarginInBodyOffset = i.offsetTop !== 1),
            a.getComputedStyle &&
              ((b.pixelPosition =
                (a.getComputedStyle(d, null) || {}).top !== "1%"),
              (b.boxSizingReliable =
                (a.getComputedStyle(d, null) || { width: "4px" }).width ===
                "4px"),
              (g = e.createElement("div")),
              (g.style.cssText = d.style.cssText = h),
              (g.style.marginRight = g.style.width = "0"),
              (d.style.width = "1px"),
              d.appendChild(g),
              (b.reliableMarginRight = !parseFloat(
                (a.getComputedStyle(g, null) || {}).marginRight
              ))),
            typeof d.style.zoom != "undefined" &&
              ((d.innerHTML = ""),
              (d.style.cssText =
                h + "width:1px;padding:1px;display:inline;zoom:1"),
              (b.inlineBlockNeedsLayout = d.offsetWidth === 3),
              (d.style.display = "block"),
              (d.style.overflow = "visible"),
              (d.innerHTML = "<div></div>"),
              (d.firstChild.style.width = "5px"),
              (b.shrinkWrapBlocks = d.offsetWidth !== 3),
              (c.style.zoom = 1)),
            i.removeChild(c),
            (c = d = f = g = null);
        }),
        i.removeChild(n),
        (c = d = f = g = h = i = n = null),
        b
      );
    })());
  var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    I = /([A-Z])/g;
  p.extend({
    cache: {},
    deletedIds: [],
    uuid: 0,
    expando: "jQuery" + (p.fn.jquery + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0,
    },
    hasData: function (a) {
      return (
        (a = a.nodeType ? p.cache[a[p.expando]] : a[p.expando]), !!a && !K(a)
      );
    },
    data: function (a, c, d, e) {
      if (!p.acceptData(a)) return;
      var f,
        g,
        h = p.expando,
        i = typeof c == "string",
        j = a.nodeType,
        k = j ? p.cache : a,
        l = j ? a[h] : a[h] && h;
      if ((!l || !k[l] || (!e && !k[l].data)) && i && d === b) return;
      l || (j ? (a[h] = l = p.deletedIds.pop() || p.guid++) : (l = h)),
        k[l] || ((k[l] = {}), j || (k[l].toJSON = p.noop));
      if (typeof c == "object" || typeof c == "function")
        e ? (k[l] = p.extend(k[l], c)) : (k[l].data = p.extend(k[l].data, c));
      return (
        (f = k[l]),
        e || (f.data || (f.data = {}), (f = f.data)),
        d !== b && (f[p.camelCase(c)] = d),
        i ? ((g = f[c]), g == null && (g = f[p.camelCase(c)])) : (g = f),
        g
      );
    },
    removeData: function (a, b, c) {
      if (!p.acceptData(a)) return;
      var d,
        e,
        f,
        g = a.nodeType,
        h = g ? p.cache : a,
        i = g ? a[p.expando] : p.expando;
      if (!h[i]) return;
      if (b) {
        d = c ? h[i] : h[i].data;
        if (d) {
          p.isArray(b) ||
            (b in d
              ? (b = [b])
              : ((b = p.camelCase(b)),
                b in d ? (b = [b]) : (b = b.split(" "))));
          for (e = 0, f = b.length; e < f; e++) delete d[b[e]];
          if (!(c ? K : p.isEmptyObject)(d)) return;
        }
      }
      if (!c) {
        delete h[i].data;
        if (!K(h[i])) return;
      }
      g
        ? p.cleanData([a], !0)
        : p.support.deleteExpando || h != h.window
        ? delete h[i]
        : (h[i] = null);
    },
    _data: function (a, b, c) {
      return p.data(a, b, c, !0);
    },
    acceptData: function (a) {
      var b = a.nodeName && p.noData[a.nodeName.toLowerCase()];
      return !b || (b !== !0 && a.getAttribute("classid") === b);
    },
  }),
    p.fn.extend({
      data: function (a, c) {
        var d,
          e,
          f,
          g,
          h,
          i = this[0],
          j = 0,
          k = null;
        if (a === b) {
          if (this.length) {
            k = p.data(i);
            if (i.nodeType === 1 && !p._data(i, "parsedAttrs")) {
              f = i.attributes;
              for (h = f.length; j < h; j++)
                (g = f[j].name),
                  g.indexOf("data-") ||
                    ((g = p.camelCase(g.substring(5))), J(i, g, k[g]));
              p._data(i, "parsedAttrs", !0);
            }
          }
          return k;
        }
        return typeof a == "object"
          ? this.each(function () {
              p.data(this, a);
            })
          : ((d = a.split(".", 2)),
            (d[1] = d[1] ? "." + d[1] : ""),
            (e = d[1] + "!"),
            p.access(
              this,
              function (c) {
                if (c === b)
                  return (
                    (k = this.triggerHandler("getData" + e, [d[0]])),
                    k === b && i && ((k = p.data(i, a)), (k = J(i, a, k))),
                    k === b && d[1] ? this.data(d[0]) : k
                  );
                (d[1] = c),
                  this.each(function () {
                    var b = p(this);
                    b.triggerHandler("setData" + e, d),
                      p.data(this, a, c),
                      b.triggerHandler("changeData" + e, d);
                  });
              },
              null,
              c,
              arguments.length > 1,
              null,
              !1
            ));
      },
      removeData: function (a) {
        return this.each(function () {
          p.removeData(this, a);
        });
      },
    }),
    p.extend({
      queue: function (a, b, c) {
        var d;
        if (a)
          return (
            (b = (b || "fx") + "queue"),
            (d = p._data(a, b)),
            c &&
              (!d || p.isArray(c)
                ? (d = p._data(a, b, p.makeArray(c)))
                : d.push(c)),
            d || []
          );
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = p.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = p._queueHooks(a, b),
          g = function () {
            p.dequeue(a, b);
          };
        e === "inprogress" && ((e = c.shift()), d--),
          e &&
            (b === "fx" && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          p._data(a, c) ||
          p._data(a, c, {
            empty: p.Callbacks("once memory").add(function () {
              p.removeData(a, b + "queue", !0), p.removeData(a, c, !0);
            }),
          })
        );
      },
    }),
    p.fn.extend({
      queue: function (a, c) {
        var d = 2;
        return (
          typeof a != "string" && ((c = a), (a = "fx"), d--),
          arguments.length < d
            ? p.queue(this[0], a)
            : c === b
            ? this
            : this.each(function () {
                var b = p.queue(this, a, c);
                p._queueHooks(this, a),
                  a === "fx" && b[0] !== "inprogress" && p.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          p.dequeue(this, a);
        });
      },
      delay: function (a, b) {
        return (
          (a = p.fx ? p.fx.speeds[a] || a : a),
          (b = b || "fx"),
          this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
              clearTimeout(d);
            };
          })
        );
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, c) {
        var d,
          e = 1,
          f = p.Deferred(),
          g = this,
          h = this.length,
          i = function () {
            --e || f.resolveWith(g, [g]);
          };
        typeof a != "string" && ((c = a), (a = b)), (a = a || "fx");
        while (h--)
          (d = p._data(g[h], a + "queueHooks")),
            d && d.empty && (e++, d.empty.add(i));
        return i(), f.promise(c);
      },
    });
  var L,
    M,
    N,
    O = /[\t\r\n]/g,
    P = /\r/g,
    Q = /^(?:button|input)$/i,
    R = /^(?:button|input|object|select|textarea)$/i,
    S = /^a(?:rea|)$/i,
    T = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    U = p.support.getSetAttribute;
  p.fn.extend({
    attr: function (a, b) {
      return p.access(this, p.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        p.removeAttr(this, a);
      });
    },
    prop: function (a, b) {
      return p.access(this, p.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return (
        (a = p.propFix[a] || a),
        this.each(function () {
          try {
            (this[a] = b), delete this[a];
          } catch (c) {}
        })
      );
    },
    addClass: function (a) {
      var b, c, d, e, f, g, h;
      if (p.isFunction(a))
        return this.each(function (b) {
          p(this).addClass(a.call(this, b, this.className));
        });
      if (a && typeof a == "string") {
        b = a.split(s);
        for (c = 0, d = this.length; c < d; c++) {
          e = this[c];
          if (e.nodeType === 1)
            if (!e.className && b.length === 1) e.className = a;
            else {
              f = " " + e.className + " ";
              for (g = 0, h = b.length; g < h; g++)
                f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ");
              e.className = p.trim(f);
            }
        }
      }
      return this;
    },
    removeClass: function (a) {
      var c, d, e, f, g, h, i;
      if (p.isFunction(a))
        return this.each(function (b) {
          p(this).removeClass(a.call(this, b, this.className));
        });
      if ((a && typeof a == "string") || a === b) {
        c = (a || "").split(s);
        for (h = 0, i = this.length; h < i; h++) {
          e = this[h];
          if (e.nodeType === 1 && e.className) {
            d = (" " + e.className + " ").replace(O, " ");
            for (f = 0, g = c.length; f < g; f++)
              while (d.indexOf(" " + c[f] + " ") >= 0)
                d = d.replace(" " + c[f] + " ", " ");
            e.className = a ? p.trim(d) : "";
          }
        }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a,
        d = typeof b == "boolean";
      return p.isFunction(a)
        ? this.each(function (c) {
            p(this).toggleClass(a.call(this, c, this.className, b), b);
          })
        : this.each(function () {
            if (c === "string") {
              var e,
                f = 0,
                g = p(this),
                h = b,
                i = a.split(s);
              while ((e = i[f++]))
                (h = d ? h : !g.hasClass(e)),
                  g[h ? "addClass" : "removeClass"](e);
            } else if (c === "undefined" || c === "boolean") this.className && p._data(this, "__className__", this.className), (this.className = this.className || a === !1 ? "" : p._data(this, "__className__") || "");
          });
    },
    hasClass: function (a) {
      var b = " " + a + " ",
        c = 0,
        d = this.length;
      for (; c < d; c++)
        if (
          this[c].nodeType === 1 &&
          (" " + this[c].className + " ").replace(O, " ").indexOf(b) >= 0
        )
          return !0;
      return !1;
    },
    val: function (a) {
      var c,
        d,
        e,
        f = this[0];
      if (!arguments.length) {
        if (f)
          return (
            (c = p.valHooks[f.type] || p.valHooks[f.nodeName.toLowerCase()]),
            c && "get" in c && (d = c.get(f, "value")) !== b
              ? d
              : ((d = f.value),
                typeof d == "string" ? d.replace(P, "") : d == null ? "" : d)
          );
        return;
      }
      return (
        (e = p.isFunction(a)),
        this.each(function (d) {
          var f,
            g = p(this);
          if (this.nodeType !== 1) return;
          e ? (f = a.call(this, d, g.val())) : (f = a),
            f == null
              ? (f = "")
              : typeof f == "number"
              ? (f += "")
              : p.isArray(f) &&
                (f = p.map(f, function (a) {
                  return a == null ? "" : a + "";
                })),
            (c =
              p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]);
          if (!c || !("set" in c) || c.set(this, f, "value") === b)
            this.value = f;
        })
      );
    },
  }),
    p.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = a.attributes.value;
            return !b || b.specified ? a.value : a.text;
          },
        },
        select: {
          get: function (a) {
            var b,
              c,
              d,
              e,
              f = a.selectedIndex,
              g = [],
              h = a.options,
              i = a.type === "select-one";
            if (f < 0) return null;
            (c = i ? f : 0), (d = i ? f + 1 : h.length);
            for (; c < d; c++) {
              e = h[c];
              if (
                e.selected &&
                (p.support.optDisabled
                  ? !e.disabled
                  : e.getAttribute("disabled") === null) &&
                (!e.parentNode.disabled ||
                  !p.nodeName(e.parentNode, "optgroup"))
              ) {
                b = p(e).val();
                if (i) return b;
                g.push(b);
              }
            }
            return i && !g.length && h.length ? p(h[f]).val() : g;
          },
          set: function (a, b) {
            var c = p.makeArray(b);
            return (
              p(a)
                .find("option")
                .each(function () {
                  this.selected = p.inArray(p(this).val(), c) >= 0;
                }),
              c.length || (a.selectedIndex = -1),
              c
            );
          },
        },
      },
      attrFn: {},
      attr: function (a, c, d, e) {
        var f,
          g,
          h,
          i = a.nodeType;
        if (!a || i === 3 || i === 8 || i === 2) return;
        if (e && p.isFunction(p.fn[c])) return p(a)[c](d);
        if (typeof a.getAttribute == "undefined") return p.prop(a, c, d);
        (h = i !== 1 || !p.isXMLDoc(a)),
          h &&
            ((c = c.toLowerCase()),
            (g = p.attrHooks[c] || (T.test(c) ? M : L)));
        if (d !== b) {
          if (d === null) {
            p.removeAttr(a, c);
            return;
          }
          return g && "set" in g && h && (f = g.set(a, d, c)) !== b
            ? f
            : (a.setAttribute(c, d + ""), d);
        }
        return g && "get" in g && h && (f = g.get(a, c)) !== null
          ? f
          : ((f = a.getAttribute(c)), f === null ? b : f);
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e,
          f,
          g = 0;
        if (b && a.nodeType === 1) {
          d = b.split(s);
          for (; g < d.length; g++)
            (e = d[g]),
              e &&
                ((c = p.propFix[e] || e),
                (f = T.test(e)),
                f || p.attr(a, e, ""),
                a.removeAttribute(U ? e : c),
                f && c in a && (a[c] = !1));
        }
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (Q.test(a.nodeName) && a.parentNode)
              p.error("type property can't be changed");
            else if (
              !p.support.radioValue &&
              b === "radio" &&
              p.nodeName(a, "input")
            ) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
        value: {
          get: function (a, b) {
            return L && p.nodeName(a, "button")
              ? L.get(a, b)
              : b in a
              ? a.value
              : null;
          },
          set: function (a, b, c) {
            if (L && p.nodeName(a, "button")) return L.set(a, b, c);
            a.value = b;
          },
        },
      },
      propFix: {
        tabindex: "tabIndex",
        readonly: "readOnly",
        for: "htmlFor",
        class: "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable",
      },
      prop: function (a, c, d) {
        var e,
          f,
          g,
          h = a.nodeType;
        if (!a || h === 3 || h === 8 || h === 2) return;
        return (
          (g = h !== 1 || !p.isXMLDoc(a)),
          g && ((c = p.propFix[c] || c), (f = p.propHooks[c])),
          d !== b
            ? f && "set" in f && (e = f.set(a, d, c)) !== b
              ? e
              : (a[c] = d)
            : f && "get" in f && (e = f.get(a, c)) !== null
            ? e
            : a[c]
        );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var c = a.getAttributeNode("tabindex");
            return c && c.specified
              ? parseInt(c.value, 10)
              : R.test(a.nodeName) || (S.test(a.nodeName) && a.href)
              ? 0
              : b;
          },
        },
      },
    }),
    (M = {
      get: function (a, c) {
        var d,
          e = p.prop(a, c);
        return e === !0 ||
          (typeof e != "boolean" &&
            (d = a.getAttributeNode(c)) &&
            d.nodeValue !== !1)
          ? c.toLowerCase()
          : b;
      },
      set: function (a, b, c) {
        var d;
        return (
          b === !1
            ? p.removeAttr(a, c)
            : ((d = p.propFix[c] || c),
              d in a && (a[d] = !0),
              a.setAttribute(c, c.toLowerCase())),
          c
        );
      },
    }),
    U ||
      ((N = { name: !0, id: !0, coords: !0 }),
      (L = p.valHooks.button = {
        get: function (a, c) {
          var d;
          return (
            (d = a.getAttributeNode(c)),
            d && (N[c] ? d.value !== "" : d.specified) ? d.value : b
          );
        },
        set: function (a, b, c) {
          var d = a.getAttributeNode(c);
          return (
            d || ((d = e.createAttribute(c)), a.setAttributeNode(d)),
            (d.value = b + "")
          );
        },
      }),
      p.each(["width", "height"], function (a, b) {
        p.attrHooks[b] = p.extend(p.attrHooks[b], {
          set: function (a, c) {
            if (c === "") return a.setAttribute(b, "auto"), c;
          },
        });
      }),
      (p.attrHooks.contenteditable = {
        get: L.get,
        set: function (a, b, c) {
          b === "" && (b = "false"), L.set(a, b, c);
        },
      })),
    p.support.hrefNormalized ||
      p.each(["href", "src", "width", "height"], function (a, c) {
        p.attrHooks[c] = p.extend(p.attrHooks[c], {
          get: function (a) {
            var d = a.getAttribute(c, 2);
            return d === null ? b : d;
          },
        });
      }),
    p.support.style ||
      (p.attrHooks.style = {
        get: function (a) {
          return a.style.cssText.toLowerCase() || b;
        },
        set: function (a, b) {
          return (a.style.cssText = b + "");
        },
      }),
    p.support.optSelected ||
      (p.propHooks.selected = p.extend(p.propHooks.selected, {
        get: function (a) {
          var b = a.parentNode;
          return (
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
            null
          );
        },
      })),
    p.support.enctype || (p.propFix.enctype = "encoding"),
    p.support.checkOn ||
      p.each(["radio", "checkbox"], function () {
        p.valHooks[this] = {
          get: function (a) {
            return a.getAttribute("value") === null ? "on" : a.value;
          },
        };
      }),
    p.each(["radio", "checkbox"], function () {
      p.valHooks[this] = p.extend(p.valHooks[this], {
        set: function (a, b) {
          if (p.isArray(b)) return (a.checked = p.inArray(p(a).val(), b) >= 0);
        },
      });
    });
  var V = /^(?:textarea|input|select)$/i,
    W = /^([^\.]*|)(?:\.(.+)|)$/,
    X = /(?:^|\s)hover(\.\S+|)\b/,
    Y = /^key/,
    Z = /^(?:mouse|contextmenu)|click/,
    $ = /^(?:focusinfocus|focusoutblur)$/,
    _ = function (a) {
      return p.event.special.hover
        ? a
        : a.replace(X, "mouseenter$1 mouseleave$1");
    };
  (p.event = {
    add: function (a, c, d, e, f) {
      var g, h, i, j, k, l, m, n, o, q, r;
      if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(g = p._data(a)))
        return;
      d.handler && ((o = d), (d = o.handler), (f = o.selector)),
        d.guid || (d.guid = p.guid++),
        (i = g.events),
        i || (g.events = i = {}),
        (h = g.handle),
        h ||
          ((g.handle = h = function (a) {
            return typeof p != "undefined" &&
              (!a || p.event.triggered !== a.type)
              ? p.event.dispatch.apply(h.elem, arguments)
              : b;
          }),
          (h.elem = a)),
        (c = p.trim(_(c)).split(" "));
      for (j = 0; j < c.length; j++) {
        (k = W.exec(c[j]) || []),
          (l = k[1]),
          (m = (k[2] || "").split(".").sort()),
          (r = p.event.special[l] || {}),
          (l = (f ? r.delegateType : r.bindType) || l),
          (r = p.event.special[l] || {}),
          (n = p.extend(
            {
              type: l,
              origType: k[1],
              data: e,
              handler: d,
              guid: d.guid,
              selector: f,
              needsContext: f && p.expr.match.needsContext.test(f),
              namespace: m.join("."),
            },
            o
          )),
          (q = i[l]);
        if (!q) {
          (q = i[l] = []), (q.delegateCount = 0);
          if (!r.setup || r.setup.call(a, e, m, h) === !1)
            a.addEventListener
              ? a.addEventListener(l, h, !1)
              : a.attachEvent && a.attachEvent("on" + l, h);
        }
        r.add &&
          (r.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)),
          f ? q.splice(q.delegateCount++, 0, n) : q.push(n),
          (p.event.global[l] = !0);
      }
      a = null;
    },
    global: {},
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        q,
        r = p.hasData(a) && p._data(a);
      if (!r || !(m = r.events)) return;
      b = p.trim(_(b || "")).split(" ");
      for (f = 0; f < b.length; f++) {
        (g = W.exec(b[f]) || []), (h = i = g[1]), (j = g[2]);
        if (!h) {
          for (h in m) p.event.remove(a, h + b[f], c, d, !0);
          continue;
        }
        (n = p.event.special[h] || {}),
          (h = (d ? n.delegateType : n.bindType) || h),
          (o = m[h] || []),
          (k = o.length),
          (j = j
            ? new RegExp(
                "(^|\\.)" +
                  j.split(".").sort().join("\\.(?:.*\\.|)") +
                  "(\\.|$)"
              )
            : null);
        for (l = 0; l < o.length; l++)
          (q = o[l]),
            (e || i === q.origType) &&
              (!c || c.guid === q.guid) &&
              (!j || j.test(q.namespace)) &&
              (!d || d === q.selector || (d === "**" && q.selector)) &&
              (o.splice(l--, 1),
              q.selector && o.delegateCount--,
              n.remove && n.remove.call(a, q));
        o.length === 0 &&
          k !== o.length &&
          ((!n.teardown || n.teardown.call(a, j, r.handle) === !1) &&
            p.removeEvent(a, h, r.handle),
          delete m[h]);
      }
      p.isEmptyObject(m) && (delete r.handle, p.removeData(a, "events", !0));
    },
    customEvent: { getData: !0, setData: !0, changeData: !0 },
    trigger: function (c, d, f, g) {
      if (!f || (f.nodeType !== 3 && f.nodeType !== 8)) {
        var h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          q,
          r,
          s = c.type || c,
          t = [];
        if ($.test(s + p.event.triggered)) return;
        s.indexOf("!") >= 0 && ((s = s.slice(0, -1)), (i = !0)),
          s.indexOf(".") >= 0 &&
            ((t = s.split(".")), (s = t.shift()), t.sort());
        if ((!f || p.event.customEvent[s]) && !p.event.global[s]) return;
        (c =
          typeof c == "object"
            ? c[p.expando]
              ? c
              : new p.Event(s, c)
            : new p.Event(s)),
          (c.type = s),
          (c.isTrigger = !0),
          (c.exclusive = i),
          (c.namespace = t.join(".")),
          (c.namespace_re = c.namespace
            ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (m = s.indexOf(":") < 0 ? "on" + s : "");
        if (!f) {
          h = p.cache;
          for (j in h)
            h[j].events &&
              h[j].events[s] &&
              p.event.trigger(c, d, h[j].handle.elem, !0);
          return;
        }
        (c.result = b),
          c.target || (c.target = f),
          (d = d != null ? p.makeArray(d) : []),
          d.unshift(c),
          (n = p.event.special[s] || {});
        if (n.trigger && n.trigger.apply(f, d) === !1) return;
        q = [[f, n.bindType || s]];
        if (!g && !n.noBubble && !p.isWindow(f)) {
          (r = n.delegateType || s), (k = $.test(r + s) ? f : f.parentNode);
          for (l = f; k; k = k.parentNode) q.push([k, r]), (l = k);
          l === (f.ownerDocument || e) &&
            q.push([l.defaultView || l.parentWindow || a, r]);
        }
        for (j = 0; j < q.length && !c.isPropagationStopped(); j++)
          (k = q[j][0]),
            (c.type = q[j][1]),
            (o = (p._data(k, "events") || {})[c.type] && p._data(k, "handle")),
            o && o.apply(k, d),
            (o = m && k[m]),
            o &&
              p.acceptData(k) &&
              o.apply &&
              o.apply(k, d) === !1 &&
              c.preventDefault();
        return (
          (c.type = s),
          !g &&
            !c.isDefaultPrevented() &&
            (!n._default || n._default.apply(f.ownerDocument, d) === !1) &&
            (s !== "click" || !p.nodeName(f, "a")) &&
            p.acceptData(f) &&
            m &&
            f[s] &&
            ((s !== "focus" && s !== "blur") || c.target.offsetWidth !== 0) &&
            !p.isWindow(f) &&
            ((l = f[m]),
            l && (f[m] = null),
            (p.event.triggered = s),
            f[s](),
            (p.event.triggered = b),
            l && (f[m] = l)),
          c.result
        );
      }
      return;
    },
    dispatch: function (c) {
      c = p.event.fix(c || a.event);
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        l,
        m,
        n,
        o = (p._data(this, "events") || {})[c.type] || [],
        q = o.delegateCount,
        r = k.call(arguments),
        s = !c.exclusive && !c.namespace,
        t = p.event.special[c.type] || {},
        u = [];
      (r[0] = c), (c.delegateTarget = this);
      if (t.preDispatch && t.preDispatch.call(this, c) === !1) return;
      if (q && (!c.button || c.type !== "click"))
        for (f = c.target; f != this; f = f.parentNode || this)
          if (f.disabled !== !0 || c.type !== "click") {
            (h = {}), (j = []);
            for (d = 0; d < q; d++)
              (l = o[d]),
                (m = l.selector),
                h[m] === b &&
                  (h[m] = l.needsContext
                    ? p(m, this).index(f) >= 0
                    : p.find(m, this, null, [f]).length),
                h[m] && j.push(l);
            j.length && u.push({ elem: f, matches: j });
          }
      o.length > q && u.push({ elem: this, matches: o.slice(q) });
      for (d = 0; d < u.length && !c.isPropagationStopped(); d++) {
        (i = u[d]), (c.currentTarget = i.elem);
        for (
          e = 0;
          e < i.matches.length && !c.isImmediatePropagationStopped();
          e++
        ) {
          l = i.matches[e];
          if (
            s ||
            (!c.namespace && !l.namespace) ||
            (c.namespace_re && c.namespace_re.test(l.namespace))
          )
            (c.data = l.data),
              (c.handleObj = l),
              (g = (
                (p.event.special[l.origType] || {}).handle || l.handler
              ).apply(i.elem, r)),
              g !== b &&
                ((c.result = g),
                g === !1 && (c.preventDefault(), c.stopPropagation()));
        }
      }
      return t.postDispatch && t.postDispatch.call(this, c), c.result;
    },
    props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
      " "
    ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          a.which == null &&
            (a.which = b.charCode != null ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
        " "
      ),
      filter: function (a, c) {
        var d,
          f,
          g,
          h = c.button,
          i = c.fromElement;
        return (
          a.pageX == null &&
            c.clientX != null &&
            ((d = a.target.ownerDocument || e),
            (f = d.documentElement),
            (g = d.body),
            (a.pageX =
              c.clientX +
              ((f && f.scrollLeft) || (g && g.scrollLeft) || 0) -
              ((f && f.clientLeft) || (g && g.clientLeft) || 0)),
            (a.pageY =
              c.clientY +
              ((f && f.scrollTop) || (g && g.scrollTop) || 0) -
              ((f && f.clientTop) || (g && g.clientTop) || 0))),
          !a.relatedTarget &&
            i &&
            (a.relatedTarget = i === a.target ? c.toElement : i),
          !a.which &&
            h !== b &&
            (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0),
          a
        );
      },
    },
    fix: function (a) {
      if (a[p.expando]) return a;
      var b,
        c,
        d = a,
        f = p.event.fixHooks[a.type] || {},
        g = f.props ? this.props.concat(f.props) : this.props;
      a = p.Event(d);
      for (b = g.length; b; ) (c = g[--b]), (a[c] = d[c]);
      return (
        a.target || (a.target = d.srcElement || e),
        a.target.nodeType === 3 && (a.target = a.target.parentNode),
        (a.metaKey = !!a.metaKey),
        f.filter ? f.filter(a, d) : a
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: { delegateType: "focusin" },
      blur: { delegateType: "focusout" },
      beforeunload: {
        setup: function (a, b, c) {
          p.isWindow(this) && (this.onbeforeunload = c);
        },
        teardown: function (a, b) {
          this.onbeforeunload === b && (this.onbeforeunload = null);
        },
      },
    },
    simulate: function (a, b, c, d) {
      var e = p.extend(new p.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      });
      d ? p.event.trigger(e, null, b) : p.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (p.event.handle = p.event.dispatch),
    (p.removeEvent = e.removeEventListener
      ? function (a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c, !1);
        }
      : function (a, b, c) {
          var d = "on" + b;
          a.detachEvent &&
            (typeof a[d] == "undefined" && (a[d] = null), a.detachEvent(d, c));
        }),
    (p.Event = function (a, b) {
      if (this instanceof p.Event)
        a && a.type
          ? ((this.originalEvent = a),
            (this.type = a.type),
            (this.isDefaultPrevented =
              a.defaultPrevented ||
              a.returnValue === !1 ||
              (a.getPreventDefault && a.getPreventDefault())
                ? bb
                : ba))
          : (this.type = a),
          b && p.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || p.now()),
          (this[p.expando] = !0);
      else return new p.Event(a, b);
    }),
    (p.Event.prototype = {
      preventDefault: function () {
        this.isDefaultPrevented = bb;
        var a = this.originalEvent;
        if (!a) return;
        a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
      },
      stopPropagation: function () {
        this.isPropagationStopped = bb;
        var a = this.originalEvent;
        if (!a) return;
        a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0);
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = bb), this.stopPropagation();
      },
      isDefaultPrevented: ba,
      isPropagationStopped: ba,
      isImmediatePropagationStopped: ba,
    }),
    p.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (
      a,
      b
    ) {
      p.event.special[a] = {
        delegateType: b,
        bindType: b,
        handle: function (a) {
          var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj,
            g = f.selector;
          if (!e || (e !== d && !p.contains(d, e)))
            (a.type = f.origType),
              (c = f.handler.apply(this, arguments)),
              (a.type = b);
          return c;
        },
      };
    }),
    p.support.submitBubbles ||
      (p.event.special.submit = {
        setup: function () {
          if (p.nodeName(this, "form")) return !1;
          p.event.add(this, "click._submit keypress._submit", function (a) {
            var c = a.target,
              d =
                p.nodeName(c, "input") || p.nodeName(c, "button") ? c.form : b;
            d &&
              !p._data(d, "_submit_attached") &&
              (p.event.add(d, "submit._submit", function (a) {
                a._submit_bubble = !0;
              }),
              p._data(d, "_submit_attached", !0));
          });
        },
        postDispatch: function (a) {
          a._submit_bubble &&
            (delete a._submit_bubble,
            this.parentNode &&
              !a.isTrigger &&
              p.event.simulate("submit", this.parentNode, a, !0));
        },
        teardown: function () {
          if (p.nodeName(this, "form")) return !1;
          p.event.remove(this, "._submit");
        },
      }),
    p.support.changeBubbles ||
      (p.event.special.change = {
        setup: function () {
          if (V.test(this.nodeName)) {
            if (this.type === "checkbox" || this.type === "radio")
              p.event.add(this, "propertychange._change", function (a) {
                a.originalEvent.propertyName === "checked" &&
                  (this._just_changed = !0);
              }),
                p.event.add(this, "click._change", function (a) {
                  this._just_changed &&
                    !a.isTrigger &&
                    (this._just_changed = !1),
                    p.event.simulate("change", this, a, !0);
                });
            return !1;
          }
          p.event.add(this, "beforeactivate._change", function (a) {
            var b = a.target;
            V.test(b.nodeName) &&
              !p._data(b, "_change_attached") &&
              (p.event.add(b, "change._change", function (a) {
                this.parentNode &&
                  !a.isSimulated &&
                  !a.isTrigger &&
                  p.event.simulate("change", this.parentNode, a, !0);
              }),
              p._data(b, "_change_attached", !0));
          });
        },
        handle: function (a) {
          var b = a.target;
          if (
            this !== b ||
            a.isSimulated ||
            a.isTrigger ||
            (b.type !== "radio" && b.type !== "checkbox")
          )
            return a.handleObj.handler.apply(this, arguments);
        },
        teardown: function () {
          return p.event.remove(this, "._change"), !V.test(this.nodeName);
        },
      }),
    p.support.focusinBubbles ||
      p.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = 0,
          d = function (a) {
            p.event.simulate(b, a.target, p.event.fix(a), !0);
          };
        p.event.special[b] = {
          setup: function () {
            c++ === 0 && e.addEventListener(a, d, !0);
          },
          teardown: function () {
            --c === 0 && e.removeEventListener(a, d, !0);
          },
        };
      }),
    p.fn.extend({
      on: function (a, c, d, e, f) {
        var g, h;
        if (typeof a == "object") {
          typeof c != "string" && ((d = d || c), (c = b));
          for (h in a) this.on(h, c, d, a[h], f);
          return this;
        }
        d == null && e == null
          ? ((e = c), (d = c = b))
          : e == null &&
            (typeof c == "string"
              ? ((e = d), (d = b))
              : ((e = d), (d = c), (c = b)));
        if (e === !1) e = ba;
        else if (!e) return this;
        return (
          f === 1 &&
            ((g = e),
            (e = function (a) {
              return p().off(a), g.apply(this, arguments);
            }),
            (e.guid = g.guid || (g.guid = p.guid++))),
          this.each(function () {
            p.event.add(this, a, e, d, c);
          })
        );
      },
      one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function (a, c, d) {
        var e, f;
        if (a && a.preventDefault && a.handleObj)
          return (
            (e = a.handleObj),
            p(a.delegateTarget).off(
              e.namespace ? e.origType + "." + e.namespace : e.origType,
              e.selector,
              e.handler
            ),
            this
          );
        if (typeof a == "object") {
          for (f in a) this.off(f, c, a[f]);
          return this;
        }
        if (c === !1 || typeof c == "function") (d = c), (c = b);
        return (
          d === !1 && (d = ba),
          this.each(function () {
            p.event.remove(this, a, d, c);
          })
        );
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      live: function (a, b, c) {
        return p(this.context).on(a, this.selector, b, c), this;
      },
      die: function (a, b) {
        return p(this.context).off(a, this.selector || "**", b), this;
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return arguments.length === 1
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
      trigger: function (a, b) {
        return this.each(function () {
          p.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        if (this[0]) return p.event.trigger(a, b, this[0], !0);
      },
      toggle: function (a) {
        var b = arguments,
          c = a.guid || p.guid++,
          d = 0,
          e = function (c) {
            var e = (p._data(this, "lastToggle" + a.guid) || 0) % d;
            return (
              p._data(this, "lastToggle" + a.guid, e + 1),
              c.preventDefault(),
              b[e].apply(this, arguments) || !1
            );
          };
        e.guid = c;
        while (d < b.length) b[d++].guid = c;
        return this.click(e);
      },
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    }),
    p.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        (p.fn[b] = function (a, c) {
          return (
            c == null && ((c = a), (a = null)),
            arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
          );
        }),
          Y.test(b) && (p.event.fixHooks[b] = p.event.keyHooks),
          Z.test(b) && (p.event.fixHooks[b] = p.event.mouseHooks);
      }
    ),
    (function (a, b) {
      function bc(a, b, c, d) {
        (c = c || []), (b = b || r);
        var e,
          f,
          i,
          j,
          k = b.nodeType;
        if (!a || typeof a != "string") return c;
        if (k !== 1 && k !== 9) return [];
        i = g(b);
        if (!i && !d)
          if ((e = P.exec(a)))
            if ((j = e[1])) {
              if (k === 9) {
                f = b.getElementById(j);
                if (!f || !f.parentNode) return c;
                if (f.id === j) return c.push(f), c;
              } else if (
                b.ownerDocument &&
                (f = b.ownerDocument.getElementById(j)) &&
                h(b, f) &&
                f.id === j
              )
                return c.push(f), c;
            } else {
              if (e[2])
                return w.apply(c, x.call(b.getElementsByTagName(a), 0)), c;
              if ((j = e[3]) && _ && b.getElementsByClassName)
                return w.apply(c, x.call(b.getElementsByClassName(j), 0)), c;
            }
        return bp(a.replace(L, "$1"), b, c, d, i);
      }
      function bd(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return c === "input" && b.type === a;
        };
      }
      function be(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return (c === "input" || c === "button") && b.type === a;
        };
      }
      function bf(a) {
        return z(function (b) {
          return (
            (b = +b),
            z(function (c, d) {
              var e,
                f = a([], c.length, b),
                g = f.length;
              while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
            })
          );
        });
      }
      function bg(a, b, c) {
        if (a === b) return c;
        var d = a.nextSibling;
        while (d) {
          if (d === b) return -1;
          d = d.nextSibling;
        }
        return 1;
      }
      function bh(a, b) {
        var c,
          d,
          f,
          g,
          h,
          i,
          j,
          k = C[o][a];
        if (k) return b ? 0 : k.slice(0);
        (h = a), (i = []), (j = e.preFilter);
        while (h) {
          if (!c || (d = M.exec(h)))
            d && (h = h.slice(d[0].length)), i.push((f = []));
          c = !1;
          if ((d = N.exec(h)))
            f.push((c = new q(d.shift()))),
              (h = h.slice(c.length)),
              (c.type = d[0].replace(L, " "));
          for (g in e.filter)
            (d = W[g].exec(h)) &&
              (!j[g] || (d = j[g](d, r, !0))) &&
              (f.push((c = new q(d.shift()))),
              (h = h.slice(c.length)),
              (c.type = g),
              (c.matches = d));
          if (!c) break;
        }
        return b ? h.length : h ? bc.error(a) : C(a, i).slice(0);
      }
      function bi(a, b, d) {
        var e = b.dir,
          f = d && b.dir === "parentNode",
          g = u++;
        return b.first
          ? function (b, c, d) {
              while ((b = b[e])) if (f || b.nodeType === 1) return a(b, c, d);
            }
          : function (b, d, h) {
              if (!h) {
                var i,
                  j = t + " " + g + " ",
                  k = j + c;
                while ((b = b[e]))
                  if (f || b.nodeType === 1) {
                    if ((i = b[o]) === k) return b.sizset;
                    if (typeof i == "string" && i.indexOf(j) === 0) {
                      if (b.sizset) return b;
                    } else {
                      b[o] = k;
                      if (a(b, d, h)) return (b.sizset = !0), b;
                      b.sizset = !1;
                    }
                  }
              } else
                while ((b = b[e]))
                  if (f || b.nodeType === 1) if (a(b, d, h)) return b;
            };
      }
      function bj(a) {
        return a.length > 1
          ? function (b, c, d) {
              var e = a.length;
              while (e--) if (!a[e](b, c, d)) return !1;
              return !0;
            }
          : a[0];
      }
      function bk(a, b, c, d, e) {
        var f,
          g = [],
          h = 0,
          i = a.length,
          j = b != null;
        for (; h < i; h++)
          if ((f = a[h])) if (!c || c(f, d, e)) g.push(f), j && b.push(h);
        return g;
      }
      function bl(a, b, c, d, e, f) {
        return (
          d && !d[o] && (d = bl(d)),
          e && !e[o] && (e = bl(e, f)),
          z(function (f, g, h, i) {
            if (f && e) return;
            var j,
              k,
              l,
              m = [],
              n = [],
              o = g.length,
              p = f || bo(b || "*", h.nodeType ? [h] : h, [], f),
              q = a && (f || !b) ? bk(p, m, a, h, i) : p,
              r = c ? (e || (f ? a : o || d) ? [] : g) : q;
            c && c(q, r, h, i);
            if (d) {
              (l = bk(r, n)), d(l, [], h, i), (j = l.length);
              while (j--) if ((k = l[j])) r[n[j]] = !(q[n[j]] = k);
            }
            if (f) {
              j = a && r.length;
              while (j--) if ((k = r[j])) f[m[j]] = !(g[m[j]] = k);
            } else (r = bk(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : w.apply(g, r);
          })
        );
      }
      function bm(a) {
        var b,
          c,
          d,
          f = a.length,
          g = e.relative[a[0].type],
          h = g || e.relative[" "],
          i = g ? 1 : 0,
          j = bi(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          k = bi(
            function (a) {
              return y.call(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              return (
                (!g && (d || c !== l)) ||
                ((b = c).nodeType ? j(a, c, d) : k(a, c, d))
              );
            },
          ];
        for (; i < f; i++)
          if ((c = e.relative[a[i].type])) m = [bi(bj(m), c)];
          else {
            c = e.filter[a[i].type].apply(null, a[i].matches);
            if (c[o]) {
              d = ++i;
              for (; d < f; d++) if (e.relative[a[d].type]) break;
              return bl(
                i > 1 && bj(m),
                i > 1 &&
                  a
                    .slice(0, i - 1)
                    .join("")
                    .replace(L, "$1"),
                c,
                i < d && bm(a.slice(i, d)),
                d < f && bm((a = a.slice(d))),
                d < f && a.join("")
              );
            }
            m.push(c);
          }
        return bj(m);
      }
      function bn(a, b) {
        var d = b.length > 0,
          f = a.length > 0,
          g = function (h, i, j, k, m) {
            var n,
              o,
              p,
              q = [],
              s = 0,
              u = "0",
              x = h && [],
              y = m != null,
              z = l,
              A = h || (f && e.find.TAG("*", (m && i.parentNode) || i)),
              B = (t += z == null ? 1 : Math.E);
            y && ((l = i !== r && i), (c = g.el));
            for (; (n = A[u]) != null; u++) {
              if (f && n) {
                for (o = 0; (p = a[o]); o++)
                  if (p(n, i, j)) {
                    k.push(n);
                    break;
                  }
                y && ((t = B), (c = ++g.el));
              }
              d && ((n = !p && n) && s--, h && x.push(n));
            }
            s += u;
            if (d && u !== s) {
              for (o = 0; (p = b[o]); o++) p(x, q, i, j);
              if (h) {
                if (s > 0) while (u--) !x[u] && !q[u] && (q[u] = v.call(k));
                q = bk(q);
              }
              w.apply(k, q),
                y && !h && q.length > 0 && s + b.length > 1 && bc.uniqueSort(k);
            }
            return y && ((t = B), (l = z)), x;
          };
        return (g.el = 0), d ? z(g) : g;
      }
      function bo(a, b, c, d) {
        var e = 0,
          f = b.length;
        for (; e < f; e++) bc(a, b[e], c, d);
        return c;
      }
      function bp(a, b, c, d, f) {
        var g,
          h,
          j,
          k,
          l,
          m = bh(a),
          n = m.length;
        if (!d && m.length === 1) {
          h = m[0] = m[0].slice(0);
          if (
            h.length > 2 &&
            (j = h[0]).type === "ID" &&
            b.nodeType === 9 &&
            !f &&
            e.relative[h[1].type]
          ) {
            b = e.find.ID(j.matches[0].replace(V, ""), b, f)[0];
            if (!b) return c;
            a = a.slice(h.shift().length);
          }
          for (g = W.POS.test(a) ? -1 : h.length - 1; g >= 0; g--) {
            j = h[g];
            if (e.relative[(k = j.type)]) break;
            if ((l = e.find[k]))
              if (
                (d = l(
                  j.matches[0].replace(V, ""),
                  (R.test(h[0].type) && b.parentNode) || b,
                  f
                ))
              ) {
                h.splice(g, 1), (a = d.length && h.join(""));
                if (!a) return w.apply(c, x.call(d, 0)), c;
                break;
              }
          }
        }
        return i(a, m)(d, b, f, c, R.test(a)), c;
      }
      function bq() {}
      var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = !0,
        n = "undefined",
        o = ("sizcache" + Math.random()).replace(".", ""),
        q = String,
        r = a.document,
        s = r.documentElement,
        t = 0,
        u = 0,
        v = [].pop,
        w = [].push,
        x = [].slice,
        y =
          [].indexOf ||
          function (a) {
            var b = 0,
              c = this.length;
            for (; b < c; b++) if (this[b] === a) return b;
            return -1;
          },
        z = function (a, b) {
          return (a[o] = b == null || b), a;
        },
        A = function () {
          var a = {},
            b = [];
          return z(function (c, d) {
            return b.push(c) > e.cacheLength && delete a[b.shift()], (a[c] = d);
          }, a);
        },
        B = A(),
        C = A(),
        D = A(),
        E = "[\\x20\\t\\r\\n\\f]",
        F = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
        G = F.replace("w", "w#"),
        H = "([*^$|!~]?=)",
        I =
          "\\[" +
          E +
          "*(" +
          F +
          ")" +
          E +
          "*(?:" +
          H +
          E +
          "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
          G +
          ")|)|)" +
          E +
          "*\\]",
        J =
          ":(" +
          F +
          ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" +
          I +
          ")|[^:]|\\\\.)*|.*))\\)|)",
        K =
          ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
          E +
          "*((?:-\\d)?\\d*)" +
          E +
          "*\\)|)(?=[^-]|$)",
        L = new RegExp("^" + E + "+|((?:^|[^\\\\])(?:\\\\.)*)" + E + "+$", "g"),
        M = new RegExp("^" + E + "*," + E + "*"),
        N = new RegExp("^" + E + "*([\\x20\\t\\r\\n\\f>+~])" + E + "*"),
        O = new RegExp(J),
        P = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        Q = /^:not/,
        R = /[\x20\t\r\n\f]*[+~]/,
        S = /:not\($/,
        T = /h\d/i,
        U = /input|select|textarea|button/i,
        V = /\\(?!\\)/g,
        W = {
          ID: new RegExp("^#(" + F + ")"),
          CLASS: new RegExp("^\\.(" + F + ")"),
          NAME: new RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
          TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + I),
          PSEUDO: new RegExp("^" + J),
          POS: new RegExp(K, "i"),
          CHILD: new RegExp(
            "^:(only|nth|first|last)-child(?:\\(" +
              E +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              E +
              "*(?:([+-]|)" +
              E +
              "*(\\d+)|))" +
              E +
              "*\\)|)",
            "i"
          ),
          needsContext: new RegExp("^" + E + "*[>+~]|" + K, "i"),
        },
        X = function (a) {
          var b = r.createElement("div");
          try {
            return a(b);
          } catch (c) {
            return !1;
          } finally {
            b = null;
          }
        },
        Y = X(function (a) {
          return (
            a.appendChild(r.createComment("")),
            !a.getElementsByTagName("*").length
          );
        }),
        Z = X(function (a) {
          return (
            (a.innerHTML = "<a href='#'></a>"),
            a.firstChild &&
              typeof a.firstChild.getAttribute !== n &&
              a.firstChild.getAttribute("href") === "#"
          );
        }),
        $ = X(function (a) {
          a.innerHTML = "<select></select>";
          var b = typeof a.lastChild.getAttribute("multiple");
          return b !== "boolean" && b !== "string";
        }),
        _ = X(function (a) {
          return (
            (a.innerHTML =
              "<div class='hidden e'></div><div class='hidden'></div>"),
            !a.getElementsByClassName || !a.getElementsByClassName("e").length
              ? !1
              : ((a.lastChild.className = "e"),
                a.getElementsByClassName("e").length === 2)
          );
        }),
        ba = X(function (a) {
          (a.id = o + 0),
            (a.innerHTML =
              "<a name='" + o + "'></a><div name='" + o + "'></div>"),
            s.insertBefore(a, s.firstChild);
          var b =
            r.getElementsByName &&
            r.getElementsByName(o).length ===
              2 + r.getElementsByName(o + 0).length;
          return (d = !r.getElementById(o)), s.removeChild(a), b;
        });
      try {
        x.call(s.childNodes, 0)[0].nodeType;
      } catch (bb) {
        x = function (a) {
          var b,
            c = [];
          for (; (b = this[a]); a++) c.push(b);
          return c;
        };
      }
      (bc.matches = function (a, b) {
        return bc(a, null, null, b);
      }),
        (bc.matchesSelector = function (a, b) {
          return bc(b, null, null, [a]).length > 0;
        }),
        (f = bc.getText = function (a) {
          var b,
            c = "",
            d = 0,
            e = a.nodeType;
          if (e) {
            if (e === 1 || e === 9 || e === 11) {
              if (typeof a.textContent == "string") return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += f(a);
            } else if (e === 3 || e === 4) return a.nodeValue;
          } else for (; (b = a[d]); d++) c += f(b);
          return c;
        }),
        (g = bc.isXML = function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? b.nodeName !== "HTML" : !1;
        }),
        (h = bc.contains = s.contains
          ? function (a, b) {
              var c = a.nodeType === 9 ? a.documentElement : a,
                d = b && b.parentNode;
              return (
                a === d ||
                !!(d && d.nodeType === 1 && c.contains && c.contains(d))
              );
            }
          : s.compareDocumentPosition
          ? function (a, b) {
              return b && !!(a.compareDocumentPosition(b) & 16);
            }
          : function (a, b) {
              while ((b = b.parentNode)) if (b === a) return !0;
              return !1;
            }),
        (bc.attr = function (a, b) {
          var c,
            d = g(a);
          return (
            d || (b = b.toLowerCase()),
            (c = e.attrHandle[b])
              ? c(a)
              : d || $
              ? a.getAttribute(b)
              : ((c = a.getAttributeNode(b)),
                c
                  ? typeof a[b] == "boolean"
                    ? a[b]
                      ? b
                      : null
                    : c.specified
                    ? c.value
                    : null
                  : null)
          );
        }),
        (e = bc.selectors = {
          cacheLength: 50,
          createPseudo: z,
          match: W,
          attrHandle: Z
            ? {}
            : {
                href: function (a) {
                  return a.getAttribute("href", 2);
                },
                type: function (a) {
                  return a.getAttribute("type");
                },
              },
          find: {
            ID: d
              ? function (a, b, c) {
                  if (typeof b.getElementById !== n && !c) {
                    var d = b.getElementById(a);
                    return d && d.parentNode ? [d] : [];
                  }
                }
              : function (a, c, d) {
                  if (typeof c.getElementById !== n && !d) {
                    var e = c.getElementById(a);
                    return e
                      ? e.id === a ||
                        (typeof e.getAttributeNode !== n &&
                          e.getAttributeNode("id").value === a)
                        ? [e]
                        : b
                      : [];
                  }
                },
            TAG: Y
              ? function (a, b) {
                  if (typeof b.getElementsByTagName !== n)
                    return b.getElementsByTagName(a);
                }
              : function (a, b) {
                  var c = b.getElementsByTagName(a);
                  if (a === "*") {
                    var d,
                      e = [],
                      f = 0;
                    for (; (d = c[f]); f++) d.nodeType === 1 && e.push(d);
                    return e;
                  }
                  return c;
                },
            NAME:
              ba &&
              function (a, b) {
                if (typeof b.getElementsByName !== n)
                  return b.getElementsByName(name);
              },
            CLASS:
              _ &&
              function (a, b, c) {
                if (typeof b.getElementsByClassName !== n && !c)
                  return b.getElementsByClassName(a);
              },
          },
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(V, "")),
                (a[3] = (a[4] || a[5] || "").replace(V, "")),
                a[2] === "~=" && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                a[1] === "nth"
                  ? (a[2] || bc.error(a[0]),
                    (a[3] = +(a[3]
                      ? a[4] + (a[5] || 1)
                      : 2 * (a[2] === "even" || a[2] === "odd"))),
                    (a[4] = +(a[6] + a[7] || a[2] === "odd")))
                  : a[2] && bc.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b, c;
              if (W.CHILD.test(a[0])) return null;
              if (a[3]) a[2] = a[3];
              else if ((b = a[4]))
                O.test(b) &&
                  (c = bh(b, !0)) &&
                  (c = b.indexOf(")", b.length - c) - b.length) &&
                  ((b = b.slice(0, c)), (a[0] = a[0].slice(0, c))),
                  (a[2] = b);
              return a.slice(0, 3);
            },
          },
          filter: {
            ID: d
              ? function (a) {
                  return (
                    (a = a.replace(V, "")),
                    function (b) {
                      return b.getAttribute("id") === a;
                    }
                  );
                }
              : function (a) {
                  return (
                    (a = a.replace(V, "")),
                    function (b) {
                      var c =
                        typeof b.getAttributeNode !== n &&
                        b.getAttributeNode("id");
                      return c && c.value === a;
                    }
                  );
                },
            TAG: function (a) {
              return a === "*"
                ? function () {
                    return !0;
                  }
                : ((a = a.replace(V, "").toLowerCase()),
                  function (b) {
                    return b.nodeName && b.nodeName.toLowerCase() === a;
                  });
            },
            CLASS: function (a) {
              var b = B[o][a];
              return (
                b ||
                  (b = B(a, new RegExp("(^|" + E + ")" + a + "(" + E + "|$)"))),
                function (a) {
                  return b.test(
                    a.className ||
                      (typeof a.getAttribute !== n &&
                        a.getAttribute("class")) ||
                      ""
                  );
                }
              );
            },
            ATTR: function (a, b, c) {
              return function (d, e) {
                var f = bc.attr(d, a);
                return f == null
                  ? b === "!="
                  : b
                  ? ((f += ""),
                    b === "="
                      ? f === c
                      : b === "!="
                      ? f !== c
                      : b === "^="
                      ? c && f.indexOf(c) === 0
                      : b === "*="
                      ? c && f.indexOf(c) > -1
                      : b === "$="
                      ? c && f.substr(f.length - c.length) === c
                      : b === "~="
                      ? (" " + f + " ").indexOf(c) > -1
                      : b === "|="
                      ? f === c || f.substr(0, c.length + 1) === c + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function (a, b, c, d) {
              return a === "nth"
                ? function (a) {
                    var b,
                      e,
                      f = a.parentNode;
                    if (c === 1 && d === 0) return !0;
                    if (f) {
                      e = 0;
                      for (b = f.firstChild; b; b = b.nextSibling)
                        if (b.nodeType === 1) {
                          e++;
                          if (a === b) break;
                        }
                    }
                    return (e -= d), e === c || (e % c === 0 && e / c >= 0);
                  }
                : function (b) {
                    var c = b;
                    switch (a) {
                      case "only":
                      case "first":
                        while ((c = c.previousSibling))
                          if (c.nodeType === 1) return !1;
                        if (a === "first") return !0;
                        c = b;
                      case "last":
                        while ((c = c.nextSibling))
                          if (c.nodeType === 1) return !1;
                        return !0;
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                d =
                  e.pseudos[a] ||
                  e.setFilters[a.toLowerCase()] ||
                  bc.error("unsupported pseudo: " + a);
              return d[o]
                ? d(b)
                : d.length > 1
                ? ((c = [a, a, "", b]),
                  e.setFilters.hasOwnProperty(a.toLowerCase())
                    ? z(function (a, c) {
                        var e,
                          f = d(a, b),
                          g = f.length;
                        while (g--)
                          (e = y.call(a, f[g])), (a[e] = !(c[e] = f[g]));
                      })
                    : function (a) {
                        return d(a, 0, c);
                      })
                : d;
            },
          },
          pseudos: {
            not: z(function (a) {
              var b = [],
                c = [],
                d = i(a.replace(L, "$1"));
              return d[o]
                ? z(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length;
                    while (h--) if ((f = g[h])) a[h] = !(b[h] = f);
                  })
                : function (a, e, f) {
                    return (b[0] = a), d(b, null, f, c), !c.pop();
                  };
            }),
            has: z(function (a) {
              return function (b) {
                return bc(a, b).length > 0;
              };
            }),
            contains: z(function (a) {
              return function (b) {
                return (b.textContent || b.innerText || f(b)).indexOf(a) > -1;
              };
            }),
            enabled: function (a) {
              return a.disabled === !1;
            },
            disabled: function (a) {
              return a.disabled === !0;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                (b === "input" && !!a.checked) ||
                (b === "option" && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            parent: function (a) {
              return !e.pseudos.empty(a);
            },
            empty: function (a) {
              var b;
              a = a.firstChild;
              while (a) {
                if (a.nodeName > "@" || (b = a.nodeType) === 3 || b === 4)
                  return !1;
                a = a.nextSibling;
              }
              return !0;
            },
            header: function (a) {
              return T.test(a.nodeName);
            },
            text: function (a) {
              var b, c;
              return (
                a.nodeName.toLowerCase() === "input" &&
                (b = a.type) === "text" &&
                ((c = a.getAttribute("type")) == null || c.toLowerCase() === b)
              );
            },
            radio: bd("radio"),
            checkbox: bd("checkbox"),
            file: bd("file"),
            password: bd("password"),
            image: bd("image"),
            submit: be("submit"),
            reset: be("reset"),
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return (b === "input" && a.type === "button") || b === "button";
            },
            input: function (a) {
              return U.test(a.nodeName);
            },
            focus: function (a) {
              var b = a.ownerDocument;
              return (
                a === b.activeElement &&
                (!b.hasFocus || b.hasFocus()) &&
                (!!a.type || !!a.href)
              );
            },
            active: function (a) {
              return a === a.ownerDocument.activeElement;
            },
            first: bf(function (a, b, c) {
              return [0];
            }),
            last: bf(function (a, b, c) {
              return [b - 1];
            }),
            eq: bf(function (a, b, c) {
              return [c < 0 ? c + b : c];
            }),
            even: bf(function (a, b, c) {
              for (var d = 0; d < b; d += 2) a.push(d);
              return a;
            }),
            odd: bf(function (a, b, c) {
              for (var d = 1; d < b; d += 2) a.push(d);
              return a;
            }),
            lt: bf(function (a, b, c) {
              for (var d = c < 0 ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: bf(function (a, b, c) {
              for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
        (j = s.compareDocumentPosition
          ? function (a, b) {
              return a === b
                ? ((k = !0), 0)
                : (
                    !a.compareDocumentPosition || !b.compareDocumentPosition
                      ? a.compareDocumentPosition
                      : a.compareDocumentPosition(b) & 4
                  )
                ? -1
                : 1;
            }
          : function (a, b) {
              if (a === b) return (k = !0), 0;
              if (a.sourceIndex && b.sourceIndex)
                return a.sourceIndex - b.sourceIndex;
              var c,
                d,
                e = [],
                f = [],
                g = a.parentNode,
                h = b.parentNode,
                i = g;
              if (g === h) return bg(a, b);
              if (!g) return -1;
              if (!h) return 1;
              while (i) e.unshift(i), (i = i.parentNode);
              i = h;
              while (i) f.unshift(i), (i = i.parentNode);
              (c = e.length), (d = f.length);
              for (var j = 0; j < c && j < d; j++)
                if (e[j] !== f[j]) return bg(e[j], f[j]);
              return j === c ? bg(a, f[j], -1) : bg(e[j], b, 1);
            }),
        [0, 0].sort(j),
        (m = !k),
        (bc.uniqueSort = function (a) {
          var b,
            c = 1;
          (k = m), a.sort(j);
          if (k) for (; (b = a[c]); c++) b === a[c - 1] && a.splice(c--, 1);
          return a;
        }),
        (bc.error = function (a) {
          throw new Error("Syntax error, unrecognized expression: " + a);
        }),
        (i = bc.compile = function (a, b) {
          var c,
            d = [],
            e = [],
            f = D[o][a];
          if (!f) {
            b || (b = bh(a)), (c = b.length);
            while (c--) (f = bm(b[c])), f[o] ? d.push(f) : e.push(f);
            f = D(a, bn(e, d));
          }
          return f;
        }),
        r.querySelectorAll &&
          (function () {
            var a,
              b = bp,
              c = /'|\\/g,
              d = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
              e = [":focus"],
              f = [":active", ":focus"],
              h =
                s.matchesSelector ||
                s.mozMatchesSelector ||
                s.webkitMatchesSelector ||
                s.oMatchesSelector ||
                s.msMatchesSelector;
            X(function (a) {
              (a.innerHTML = "<select><option selected=''></option></select>"),
                a.querySelectorAll("[selected]").length ||
                  e.push(
                    "\\[" +
                      E +
                      "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"
                  ),
                a.querySelectorAll(":checked").length || e.push(":checked");
            }),
              X(function (a) {
                (a.innerHTML = "<p test=''></p>"),
                  a.querySelectorAll("[test^='']").length &&
                    e.push("[*^$]=" + E + "*(?:\"\"|'')"),
                  (a.innerHTML = "<input type='hidden'/>"),
                  a.querySelectorAll(":enabled").length ||
                    e.push(":enabled", ":disabled");
              }),
              (e = new RegExp(e.join("|"))),
              (bp = function (a, d, f, g, h) {
                if (!g && !h && (!e || !e.test(a))) {
                  var i,
                    j,
                    k = !0,
                    l = o,
                    m = d,
                    n = d.nodeType === 9 && a;
                  if (
                    d.nodeType === 1 &&
                    d.nodeName.toLowerCase() !== "object"
                  ) {
                    (i = bh(a)),
                      (k = d.getAttribute("id"))
                        ? (l = k.replace(c, "\\$&"))
                        : d.setAttribute("id", l),
                      (l = "[id='" + l + "'] "),
                      (j = i.length);
                    while (j--) i[j] = l + i[j].join("");
                    (m = (R.test(a) && d.parentNode) || d), (n = i.join(","));
                  }
                  if (n)
                    try {
                      return w.apply(f, x.call(m.querySelectorAll(n), 0)), f;
                    } catch (p) {
                    } finally {
                      k || d.removeAttribute("id");
                    }
                }
                return b(a, d, f, g, h);
              }),
              h &&
                (X(function (b) {
                  a = h.call(b, "div");
                  try {
                    h.call(b, "[test!='']:sizzle"), f.push("!=", J);
                  } catch (c) {}
                }),
                (f = new RegExp(f.join("|"))),
                (bc.matchesSelector = function (b, c) {
                  c = c.replace(d, "='$1']");
                  if (!g(b) && !f.test(c) && (!e || !e.test(c)))
                    try {
                      var i = h.call(b, c);
                      if (i || a || (b.document && b.document.nodeType !== 11))
                        return i;
                    } catch (j) {}
                  return bc(c, null, null, [b]).length > 0;
                }));
          })(),
        (e.pseudos.nth = e.pseudos.eq),
        (e.filters = bq.prototype = e.pseudos),
        (e.setFilters = new bq()),
        (bc.attr = p.attr),
        (p.find = bc),
        (p.expr = bc.selectors),
        (p.expr[":"] = p.expr.pseudos),
        (p.unique = bc.uniqueSort),
        (p.text = bc.getText),
        (p.isXMLDoc = bc.isXML),
        (p.contains = bc.contains);
    })(a);
  var bc = /Until$/,
    bd = /^(?:parents|prev(?:Until|All))/,
    be = /^.[^:#\[\.,]*$/,
    bf = p.expr.match.needsContext,
    bg = { children: !0, contents: !0, next: !0, prev: !0 };
  p.fn.extend({
    find: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = this;
      if (typeof a != "string")
        return p(a).filter(function () {
          for (b = 0, c = h.length; b < c; b++)
            if (p.contains(h[b], this)) return !0;
        });
      g = this.pushStack("", "find", a);
      for (b = 0, c = this.length; b < c; b++) {
        (d = g.length), p.find(a, this[b], g);
        if (b > 0)
          for (e = d; e < g.length; e++)
            for (f = 0; f < d; f++)
              if (g[f] === g[e]) {
                g.splice(e--, 1);
                break;
              }
      }
      return g;
    },
    has: function (a) {
      var b,
        c = p(a, this),
        d = c.length;
      return this.filter(function () {
        for (b = 0; b < d; b++) if (p.contains(this, c[b])) return !0;
      });
    },
    not: function (a) {
      return this.pushStack(bj(this, a, !1), "not", a);
    },
    filter: function (a) {
      return this.pushStack(bj(this, a, !0), "filter", a);
    },
    is: function (a) {
      return (
        !!a &&
        (typeof a == "string"
          ? bf.test(a)
            ? p(a, this.context).index(this[0]) >= 0
            : p.filter(a, this).length > 0
          : this.filter(a).length > 0)
      );
    },
    closest: function (a, b) {
      var c,
        d = 0,
        e = this.length,
        f = [],
        g = bf.test(a) || typeof a != "string" ? p(a, b || this.context) : 0;
      for (; d < e; d++) {
        c = this[d];
        while (c && c.ownerDocument && c !== b && c.nodeType !== 11) {
          if (g ? g.index(c) > -1 : p.find.matchesSelector(c, a)) {
            f.push(c);
            break;
          }
          c = c.parentNode;
        }
      }
      return (
        (f = f.length > 1 ? p.unique(f) : f), this.pushStack(f, "closest", a)
      );
    },
    index: function (a) {
      return a
        ? typeof a == "string"
          ? p.inArray(this[0], p(a))
          : p.inArray(a.jquery ? a[0] : a, this)
        : this[0] && this[0].parentNode
        ? this.prevAll().length
        : -1;
    },
    add: function (a, b) {
      var c =
          typeof a == "string"
            ? p(a, b)
            : p.makeArray(a && a.nodeType ? [a] : a),
        d = p.merge(this.get(), c);
      return this.pushStack(bh(c[0]) || bh(d[0]) ? d : p.unique(d));
    },
    addBack: function (a) {
      return this.add(a == null ? this.prevObject : this.prevObject.filter(a));
    },
  }),
    (p.fn.andSelf = p.fn.addBack),
    p.each(
      {
        parent: function (a) {
          var b = a.parentNode;
          return b && b.nodeType !== 11 ? b : null;
        },
        parents: function (a) {
          return p.dir(a, "parentNode");
        },
        parentsUntil: function (a, b, c) {
          return p.dir(a, "parentNode", c);
        },
        next: function (a) {
          return bi(a, "nextSibling");
        },
        prev: function (a) {
          return bi(a, "previousSibling");
        },
        nextAll: function (a) {
          return p.dir(a, "nextSibling");
        },
        prevAll: function (a) {
          return p.dir(a, "previousSibling");
        },
        nextUntil: function (a, b, c) {
          return p.dir(a, "nextSibling", c);
        },
        prevUntil: function (a, b, c) {
          return p.dir(a, "previousSibling", c);
        },
        siblings: function (a) {
          return p.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
          return p.sibling(a.firstChild);
        },
        contents: function (a) {
          return p.nodeName(a, "iframe")
            ? a.contentDocument || a.contentWindow.document
            : p.merge([], a.childNodes);
        },
      },
      function (a, b) {
        p.fn[a] = function (c, d) {
          var e = p.map(this, b, c);
          return (
            bc.test(a) || (d = c),
            d && typeof d == "string" && (e = p.filter(d, e)),
            (e = this.length > 1 && !bg[a] ? p.unique(e) : e),
            this.length > 1 && bd.test(a) && (e = e.reverse()),
            this.pushStack(e, a, k.call(arguments).join(","))
          );
        };
      }
    ),
    p.extend({
      filter: function (a, b, c) {
        return (
          c && (a = ":not(" + a + ")"),
          b.length === 1
            ? p.find.matchesSelector(b[0], a)
              ? [b[0]]
              : []
            : p.find.matches(a, b)
        );
      },
      dir: function (a, c, d) {
        var e = [],
          f = a[c];
        while (
          f &&
          f.nodeType !== 9 &&
          (d === b || f.nodeType !== 1 || !p(f).is(d))
        )
          f.nodeType === 1 && e.push(f), (f = f[c]);
        return e;
      },
      sibling: function (a, b) {
        var c = [];
        for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
        return c;
      },
    });
  var bl =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    bm = / jQuery\d+="(?:null|\d+)"/g,
    bn = /^\s+/,
    bo = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    bp = /<([\w:]+)/,
    bq = /<tbody/i,
    br = /<|&#?\w+;/,
    bs = /<(?:script|style|link)/i,
    bt = /<(?:script|object|embed|option|style)/i,
    bu = new RegExp("<(?:" + bl + ")[\\s/>]", "i"),
    bv = /^(?:checkbox|radio)$/,
    bw = /checked\s*(?:[^=]|=\s*.checked.)/i,
    bx = /\/(java|ecma)script/i,
    by = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
    bz = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      area: [1, "<map>", "</map>"],
      _default: [0, "", ""],
    },
    bA = bk(e),
    bB = bA.appendChild(e.createElement("div"));
  (bz.optgroup = bz.option),
    (bz.tbody = bz.tfoot = bz.colgroup = bz.caption = bz.thead),
    (bz.th = bz.td),
    p.support.htmlSerialize || (bz._default = [1, "X<div>", "</div>"]),
    p.fn.extend({
      text: function (a) {
        return p.access(
          this,
          function (a) {
            return a === b
              ? p.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || e).createTextNode(a)
                );
          },
          null,
          a,
          arguments.length
        );
      },
      wrapAll: function (a) {
        if (p.isFunction(a))
          return this.each(function (b) {
            p(this).wrapAll(a.call(this, b));
          });
        if (this[0]) {
          var b = p(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this;
                while (a.firstChild && a.firstChild.nodeType === 1)
                  a = a.firstChild;
                return a;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (a) {
        return p.isFunction(a)
          ? this.each(function (b) {
              p(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = p(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = p.isFunction(a);
        return this.each(function (c) {
          p(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            p.nodeName(this, "body") || p(this).replaceWith(this.childNodes);
          })
          .end();
      },
      append: function () {
        return this.domManip(arguments, !0, function (a) {
          (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(a);
        });
      },
      prepend: function () {
        return this.domManip(arguments, !0, function (a) {
          (this.nodeType === 1 || this.nodeType === 11) &&
            this.insertBefore(a, this.firstChild);
        });
      },
      before: function () {
        if (!bh(this[0]))
          return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this);
          });
        if (arguments.length) {
          var a = p.clean(arguments);
          return this.pushStack(p.merge(a, this), "before", this.selector);
        }
      },
      after: function () {
        if (!bh(this[0]))
          return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this.nextSibling);
          });
        if (arguments.length) {
          var a = p.clean(arguments);
          return this.pushStack(p.merge(this, a), "after", this.selector);
        }
      },
      remove: function (a, b) {
        var c,
          d = 0;
        for (; (c = this[d]) != null; d++)
          if (!a || p.filter(a, [c]).length)
            !b &&
              c.nodeType === 1 &&
              (p.cleanData(c.getElementsByTagName("*")), p.cleanData([c])),
              c.parentNode && c.parentNode.removeChild(c);
        return this;
      },
      empty: function () {
        var a,
          b = 0;
        for (; (a = this[b]) != null; b++) {
          a.nodeType === 1 && p.cleanData(a.getElementsByTagName("*"));
          while (a.firstChild) a.removeChild(a.firstChild);
        }
        return this;
      },
      clone: function (a, b) {
        return (
          (a = a == null ? !1 : a),
          (b = b == null ? a : b),
          this.map(function () {
            return p.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return p.access(
          this,
          function (a) {
            var c = this[0] || {},
              d = 0,
              e = this.length;
            if (a === b)
              return c.nodeType === 1 ? c.innerHTML.replace(bm, "") : b;
            if (
              typeof a == "string" &&
              !bs.test(a) &&
              (p.support.htmlSerialize || !bu.test(a)) &&
              (p.support.leadingWhitespace || !bn.test(a)) &&
              !bz[(bp.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = a.replace(bo, "<$1></$2>");
              try {
                for (; d < e; d++)
                  (c = this[d] || {}),
                    c.nodeType === 1 &&
                      (p.cleanData(c.getElementsByTagName("*")),
                      (c.innerHTML = a));
                c = 0;
              } catch (f) {}
            }
            c && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function (a) {
        return bh(this[0])
          ? this.length
            ? this.pushStack(p(p.isFunction(a) ? a() : a), "replaceWith", a)
            : this
          : p.isFunction(a)
          ? this.each(function (b) {
              var c = p(this),
                d = c.html();
              c.replaceWith(a.call(this, b, d));
            })
          : (typeof a != "string" && (a = p(a).detach()),
            this.each(function () {
              var b = this.nextSibling,
                c = this.parentNode;
              p(this).remove(), b ? p(b).before(a) : p(c).append(a);
            }));
      },
      detach: function (a) {
        return this.remove(a, !0);
      },
      domManip: function (a, c, d) {
        a = [].concat.apply([], a);
        var e,
          f,
          g,
          h,
          i = 0,
          j = a[0],
          k = [],
          l = this.length;
        if (
          !p.support.checkClone &&
          l > 1 &&
          typeof j == "string" &&
          bw.test(j)
        )
          return this.each(function () {
            p(this).domManip(a, c, d);
          });
        if (p.isFunction(j))
          return this.each(function (e) {
            var f = p(this);
            (a[0] = j.call(this, e, c ? f.html() : b)), f.domManip(a, c, d);
          });
        if (this[0]) {
          (e = p.buildFragment(a, this, k)),
            (g = e.fragment),
            (f = g.firstChild),
            g.childNodes.length === 1 && (g = f);
          if (f) {
            c = c && p.nodeName(f, "tr");
            for (h = e.cacheable || l - 1; i < l; i++)
              d.call(
                c && p.nodeName(this[i], "table")
                  ? bC(this[i], "tbody")
                  : this[i],
                i === h ? g : p.clone(g, !0, !0)
              );
          }
          (g = f = null),
            k.length &&
              p.each(k, function (a, b) {
                b.src
                  ? p.ajax
                    ? p.ajax({
                        url: b.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0,
                      })
                    : p.error("no ajax")
                  : p.globalEval(
                      (b.text || b.textContent || b.innerHTML || "").replace(
                        by,
                        ""
                      )
                    ),
                  b.parentNode && b.parentNode.removeChild(b);
              });
        }
        return this;
      },
    }),
    (p.buildFragment = function (a, c, d) {
      var f,
        g,
        h,
        i = a[0];
      return (
        (c = c || e),
        (c = (!c.nodeType && c[0]) || c),
        (c = c.ownerDocument || c),
        a.length === 1 &&
          typeof i == "string" &&
          i.length < 512 &&
          c === e &&
          i.charAt(0) === "<" &&
          !bt.test(i) &&
          (p.support.checkClone || !bw.test(i)) &&
          (p.support.html5Clone || !bu.test(i)) &&
          ((g = !0), (f = p.fragments[i]), (h = f !== b)),
        f ||
          ((f = c.createDocumentFragment()),
          p.clean(a, c, f, d),
          g && (p.fragments[i] = h && f)),
        { fragment: f, cacheable: g }
      );
    }),
    (p.fragments = {}),
    p.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        p.fn[a] = function (c) {
          var d,
            e = 0,
            f = [],
            g = p(c),
            h = g.length,
            i = this.length === 1 && this[0].parentNode;
          if (
            (i == null ||
              (i && i.nodeType === 11 && i.childNodes.length === 1)) &&
            h === 1
          )
            return g[b](this[0]), this;
          for (; e < h; e++)
            (d = (e > 0 ? this.clone(!0) : this).get()),
              p(g[e])[b](d),
              (f = f.concat(d));
          return this.pushStack(f, a, g.selector);
        };
      }
    ),
    p.extend({
      clone: function (a, b, c) {
        var d, e, f, g;
        p.support.html5Clone ||
        p.isXMLDoc(a) ||
        !bu.test("<" + a.nodeName + ">")
          ? (g = a.cloneNode(!0))
          : ((bB.innerHTML = a.outerHTML), bB.removeChild((g = bB.firstChild)));
        if (
          (!p.support.noCloneEvent || !p.support.noCloneChecked) &&
          (a.nodeType === 1 || a.nodeType === 11) &&
          !p.isXMLDoc(a)
        ) {
          bE(a, g), (d = bF(a)), (e = bF(g));
          for (f = 0; d[f]; ++f) e[f] && bE(d[f], e[f]);
        }
        if (b) {
          bD(a, g);
          if (c) {
            (d = bF(a)), (e = bF(g));
            for (f = 0; d[f]; ++f) bD(d[f], e[f]);
          }
        }
        return (d = e = null), g;
      },
      clean: function (a, b, c, d) {
        var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          q,
          r,
          s = b === e && bA,
          t = [];
        if (!b || typeof b.createDocumentFragment == "undefined") b = e;
        for (f = 0; (h = a[f]) != null; f++) {
          typeof h == "number" && (h += "");
          if (!h) continue;
          if (typeof h == "string")
            if (!br.test(h)) h = b.createTextNode(h);
            else {
              (s = s || bk(b)),
                (l = b.createElement("div")),
                s.appendChild(l),
                (h = h.replace(bo, "<$1></$2>")),
                (i = (bp.exec(h) || ["", ""])[1].toLowerCase()),
                (j = bz[i] || bz._default),
                (k = j[0]),
                (l.innerHTML = j[1] + h + j[2]);
              while (k--) l = l.lastChild;
              if (!p.support.tbody) {
                (m = bq.test(h)),
                  (n =
                    i === "table" && !m
                      ? l.firstChild && l.firstChild.childNodes
                      : j[1] === "<table>" && !m
                      ? l.childNodes
                      : []);
                for (g = n.length - 1; g >= 0; --g)
                  p.nodeName(n[g], "tbody") &&
                    !n[g].childNodes.length &&
                    n[g].parentNode.removeChild(n[g]);
              }
              !p.support.leadingWhitespace &&
                bn.test(h) &&
                l.insertBefore(b.createTextNode(bn.exec(h)[0]), l.firstChild),
                (h = l.childNodes),
                l.parentNode.removeChild(l);
            }
          h.nodeType ? t.push(h) : p.merge(t, h);
        }
        l && (h = l = s = null);
        if (!p.support.appendChecked)
          for (f = 0; (h = t[f]) != null; f++)
            p.nodeName(h, "input")
              ? bG(h)
              : typeof h.getElementsByTagName != "undefined" &&
                p.grep(h.getElementsByTagName("input"), bG);
        if (c) {
          q = function (a) {
            if (!a.type || bx.test(a.type))
              return d
                ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a)
                : c.appendChild(a);
          };
          for (f = 0; (h = t[f]) != null; f++)
            if (!p.nodeName(h, "script") || !q(h))
              c.appendChild(h),
                typeof h.getElementsByTagName != "undefined" &&
                  ((r = p.grep(
                    p.merge([], h.getElementsByTagName("script")),
                    q
                  )),
                  t.splice.apply(t, [f + 1, 0].concat(r)),
                  (f += r.length));
        }
        return t;
      },
      cleanData: function (a, b) {
        var c,
          d,
          e,
          f,
          g = 0,
          h = p.expando,
          i = p.cache,
          j = p.support.deleteExpando,
          k = p.event.special;
        for (; (e = a[g]) != null; g++)
          if (b || p.acceptData(e)) {
            (d = e[h]), (c = d && i[d]);
            if (c) {
              if (c.events)
                for (f in c.events)
                  k[f] ? p.event.remove(e, f) : p.removeEvent(e, f, c.handle);
              i[d] &&
                (delete i[d],
                j
                  ? delete e[h]
                  : e.removeAttribute
                  ? e.removeAttribute(h)
                  : (e[h] = null),
                p.deletedIds.push(d));
            }
          }
      },
    }),
    (function () {
      var a, b;
      (p.uaMatch = function (a) {
        a = a.toLowerCase();
        var b =
          /(chrome)[ \/]([\w.]+)/.exec(a) ||
          /(webkit)[ \/]([\w.]+)/.exec(a) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) ||
          /(msie) ([\w.]+)/.exec(a) ||
          (a.indexOf("compatible") < 0 &&
            /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)) ||
          [];
        return { browser: b[1] || "", version: b[2] || "0" };
      }),
        (a = p.uaMatch(g.userAgent)),
        (b = {}),
        a.browser && ((b[a.browser] = !0), (b.version = a.version)),
        b.chrome ? (b.webkit = !0) : b.webkit && (b.safari = !0),
        (p.browser = b),
        (p.sub = function () {
          function a(b, c) {
            return new a.fn.init(b, c);
          }
          p.extend(!0, a, this),
            (a.superclass = this),
            (a.fn = a.prototype = this()),
            (a.fn.constructor = a),
            (a.sub = this.sub),
            (a.fn.init = function c(c, d) {
              return (
                d && d instanceof p && !(d instanceof a) && (d = a(d)),
                p.fn.init.call(this, c, d, b)
              );
            }),
            (a.fn.init.prototype = a.fn);
          var b = a(e);
          return a;
        });
    })();
  var bH,
    bI,
    bJ,
    bK = /alpha\([^)]*\)/i,
    bL = /opacity=([^)]*)/,
    bM = /^(top|right|bottom|left)$/,
    bN = /^(none|table(?!-c[ea]).+)/,
    bO = /^margin/,
    bP = new RegExp("^(" + q + ")(.*)$", "i"),
    bQ = new RegExp("^(" + q + ")(?!px)[a-z%]+$", "i"),
    bR = new RegExp("^([-+])=(" + q + ")", "i"),
    bS = {},
    bT = { position: "absolute", visibility: "hidden", display: "block" },
    bU = { letterSpacing: 0, fontWeight: 400 },
    bV = ["Top", "Right", "Bottom", "Left"],
    bW = ["Webkit", "O", "Moz", "ms"],
    bX = p.fn.toggle;
  p.fn.extend({
    css: function (a, c) {
      return p.access(
        this,
        function (a, c, d) {
          return d !== b ? p.style(a, c, d) : p.css(a, c);
        },
        a,
        c,
        arguments.length > 1
      );
    },
    show: function () {
      return b$(this, !0);
    },
    hide: function () {
      return b$(this);
    },
    toggle: function (a, b) {
      var c = typeof a == "boolean";
      return p.isFunction(a) && p.isFunction(b)
        ? bX.apply(this, arguments)
        : this.each(function () {
            (c ? a : bZ(this)) ? p(this).show() : p(this).hide();
          });
    },
  }),
    p.extend({
      cssHooks: {
        opacity: {
          get: function (a, b) {
            if (b) {
              var c = bH(a, "opacity");
              return c === "" ? "1" : c;
            }
          },
        },
      },
      cssNumber: {
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: p.support.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (a, c, d, e) {
        if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) return;
        var f,
          g,
          h,
          i = p.camelCase(c),
          j = a.style;
        (c = p.cssProps[i] || (p.cssProps[i] = bY(j, i))),
          (h = p.cssHooks[c] || p.cssHooks[i]);
        if (d === b)
          return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
        (g = typeof d),
          g === "string" &&
            (f = bR.exec(d)) &&
            ((d = (f[1] + 1) * f[2] + parseFloat(p.css(a, c))), (g = "number"));
        if (d == null || (g === "number" && isNaN(d))) return;
        g === "number" && !p.cssNumber[i] && (d += "px");
        if (!h || !("set" in h) || (d = h.set(a, d, e)) !== b)
          try {
            j[c] = d;
          } catch (k) {}
      },
      css: function (a, c, d, e) {
        var f,
          g,
          h,
          i = p.camelCase(c);
        return (
          (c = p.cssProps[i] || (p.cssProps[i] = bY(a.style, i))),
          (h = p.cssHooks[c] || p.cssHooks[i]),
          h && "get" in h && (f = h.get(a, !0, e)),
          f === b && (f = bH(a, c)),
          f === "normal" && c in bU && (f = bU[c]),
          d || e !== b
            ? ((g = parseFloat(f)), d || p.isNumeric(g) ? g || 0 : f)
            : f
        );
      },
      swap: function (a, b, c) {
        var d,
          e,
          f = {};
        for (e in b) (f[e] = a.style[e]), (a.style[e] = b[e]);
        d = c.call(a);
        for (e in b) a.style[e] = f[e];
        return d;
      },
    }),
    a.getComputedStyle
      ? (bH = function (b, c) {
          var d,
            e,
            f,
            g,
            h = a.getComputedStyle(b, null),
            i = b.style;
          return (
            h &&
              ((d = h[c]),
              d === "" &&
                !p.contains(b.ownerDocument, b) &&
                (d = p.style(b, c)),
              bQ.test(d) &&
                bO.test(c) &&
                ((e = i.width),
                (f = i.minWidth),
                (g = i.maxWidth),
                (i.minWidth = i.maxWidth = i.width = d),
                (d = h.width),
                (i.width = e),
                (i.minWidth = f),
                (i.maxWidth = g))),
            d
          );
        })
      : e.documentElement.currentStyle &&
        (bH = function (a, b) {
          var c,
            d,
            e = a.currentStyle && a.currentStyle[b],
            f = a.style;
          return (
            e == null && f && f[b] && (e = f[b]),
            bQ.test(e) &&
              !bM.test(b) &&
              ((c = f.left),
              (d = a.runtimeStyle && a.runtimeStyle.left),
              d && (a.runtimeStyle.left = a.currentStyle.left),
              (f.left = b === "fontSize" ? "1em" : e),
              (e = f.pixelLeft + "px"),
              (f.left = c),
              d && (a.runtimeStyle.left = d)),
            e === "" ? "auto" : e
          );
        }),
    p.each(["height", "width"], function (a, b) {
      p.cssHooks[b] = {
        get: function (a, c, d) {
          if (c)
            return a.offsetWidth === 0 && bN.test(bH(a, "display"))
              ? p.swap(a, bT, function () {
                  return cb(a, b, d);
                })
              : cb(a, b, d);
        },
        set: function (a, c, d) {
          return b_(
            a,
            c,
            d
              ? ca(
                  a,
                  b,
                  d,
                  p.support.boxSizing && p.css(a, "boxSizing") === "border-box"
                )
              : 0
          );
        },
      };
    }),
    p.support.opacity ||
      (p.cssHooks.opacity = {
        get: function (a, b) {
          return bL.test(
            (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : b
            ? "1"
            : "";
        },
        set: function (a, b) {
          var c = a.style,
            d = a.currentStyle,
            e = p.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
            f = (d && d.filter) || c.filter || "";
          c.zoom = 1;
          if (b >= 1 && p.trim(f.replace(bK, "")) === "" && c.removeAttribute) {
            c.removeAttribute("filter");
            if (d && !d.filter) return;
          }
          c.filter = bK.test(f) ? f.replace(bK, e) : f + " " + e;
        },
      }),
    p(function () {
      p.support.reliableMarginRight ||
        (p.cssHooks.marginRight = {
          get: function (a, b) {
            return p.swap(a, { display: "inline-block" }, function () {
              if (b) return bH(a, "marginRight");
            });
          },
        }),
        !p.support.pixelPosition &&
          p.fn.position &&
          p.each(["top", "left"], function (a, b) {
            p.cssHooks[b] = {
              get: function (a, c) {
                if (c) {
                  var d = bH(a, b);
                  return bQ.test(d) ? p(a).position()[b] + "px" : d;
                }
              },
            };
          });
    }),
    p.expr &&
      p.expr.filters &&
      ((p.expr.filters.hidden = function (a) {
        return (
          (a.offsetWidth === 0 && a.offsetHeight === 0) ||
          (!p.support.reliableHiddenOffsets &&
            ((a.style && a.style.display) || bH(a, "display")) === "none")
        );
      }),
      (p.expr.filters.visible = function (a) {
        return !p.expr.filters.hidden(a);
      })),
    p.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (p.cssHooks[a + b] = {
        expand: function (c) {
          var d,
            e = typeof c == "string" ? c.split(" ") : [c],
            f = {};
          for (d = 0; d < 4; d++) f[a + bV[d] + b] = e[d] || e[d - 2] || e[0];
          return f;
        },
      }),
        bO.test(a) || (p.cssHooks[a + b].set = b_);
    });
  var cd = /%20/g,
    ce = /\[\]$/,
    cf = /\r?\n/g,
    cg = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    ch = /^(?:select|textarea)/i;
  p.fn.extend({
    serialize: function () {
      return p.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        return this.elements ? p.makeArray(this.elements) : this;
      })
        .filter(function () {
          return (
            this.name &&
            !this.disabled &&
            (this.checked || ch.test(this.nodeName) || cg.test(this.type))
          );
        })
        .map(function (a, b) {
          var c = p(this).val();
          return c == null
            ? null
            : p.isArray(c)
            ? p.map(c, function (a, c) {
                return { name: b.name, value: a.replace(cf, "\r\n") };
              })
            : { name: b.name, value: c.replace(cf, "\r\n") };
        })
        .get();
    },
  }),
    (p.param = function (a, c) {
      var d,
        e = [],
        f = function (a, b) {
          (b = p.isFunction(b) ? b() : b == null ? "" : b),
            (e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
        };
      c === b && (c = p.ajaxSettings && p.ajaxSettings.traditional);
      if (p.isArray(a) || (a.jquery && !p.isPlainObject(a)))
        p.each(a, function () {
          f(this.name, this.value);
        });
      else for (d in a) ci(d, a[d], c, f);
      return e.join("&").replace(cd, "+");
    });
  var cj,
    ck,
    cl = /#.*$/,
    cm = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    cn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    co = /^(?:GET|HEAD)$/,
    cp = /^\/\//,
    cq = /\?/,
    cr = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    cs = /([?&])_=[^&]*/,
    ct = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    cu = p.fn.load,
    cv = {},
    cw = {},
    cx = ["*/"] + ["*"];
  try {
    ck = f.href;
  } catch (cy) {
    (ck = e.createElement("a")), (ck.href = ""), (ck = ck.href);
  }
  (cj = ct.exec(ck.toLowerCase()) || []),
    (p.fn.load = function (a, c, d) {
      if (typeof a != "string" && cu) return cu.apply(this, arguments);
      if (!this.length) return this;
      var e,
        f,
        g,
        h = this,
        i = a.indexOf(" ");
      return (
        i >= 0 && ((e = a.slice(i, a.length)), (a = a.slice(0, i))),
        p.isFunction(c)
          ? ((d = c), (c = b))
          : c && typeof c == "object" && (f = "POST"),
        p
          .ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c,
            complete: function (a, b) {
              d && h.each(d, g || [a.responseText, b, a]);
            },
          })
          .done(function (a) {
            (g = arguments),
              h.html(e ? p("<div>").append(a.replace(cr, "")).find(e) : a);
          }),
        this
      );
    }),
    p.each(
      "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(
        " "
      ),
      function (a, b) {
        p.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    p.each(["get", "post"], function (a, c) {
      p[c] = function (a, d, e, f) {
        return (
          p.isFunction(d) && ((f = f || e), (e = d), (d = b)),
          p.ajax({ type: c, url: a, data: d, success: e, dataType: f })
        );
      };
    }),
    p.extend({
      getScript: function (a, c) {
        return p.get(a, b, c, "script");
      },
      getJSON: function (a, b, c) {
        return p.get(a, b, c, "json");
      },
      ajaxSetup: function (a, b) {
        return (
          b ? cB(a, p.ajaxSettings) : ((b = a), (a = p.ajaxSettings)),
          cB(a, b),
          a
        );
      },
      ajaxSettings: {
        url: ck,
        isLocal: cn.test(cj[1]),
        global: !0,
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        processData: !0,
        async: !0,
        accepts: {
          xml: "application/xml, text/xml",
          html: "text/html",
          text: "text/plain",
          json: "application/json, text/javascript",
          "*": cx,
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: { xml: "responseXML", text: "responseText" },
        converters: {
          "* text": a.String,
          "text html": !0,
          "text json": p.parseJSON,
          "text xml": p.parseXML,
        },
        flatOptions: { context: !0, url: !0 },
      },
      ajaxPrefilter: cz(cv),
      ajaxTransport: cz(cw),
      ajax: function (a, c) {
        function y(a, c, f, i) {
          var k,
            s,
            t,
            u,
            w,
            y = c;
          if (v === 2) return;
          (v = 2),
            h && clearTimeout(h),
            (g = b),
            (e = i || ""),
            (x.readyState = a > 0 ? 4 : 0),
            f && (u = cC(l, x, f));
          if ((a >= 200 && a < 300) || a === 304)
            l.ifModified &&
              ((w = x.getResponseHeader("Last-Modified")),
              w && (p.lastModified[d] = w),
              (w = x.getResponseHeader("Etag")),
              w && (p.etag[d] = w)),
              a === 304
                ? ((y = "notmodified"), (k = !0))
                : ((k = cD(l, u)),
                  (y = k.state),
                  (s = k.data),
                  (t = k.error),
                  (k = !t));
          else {
            t = y;
            if (!y || a) (y = "error"), a < 0 && (a = 0);
          }
          (x.status = a),
            (x.statusText = (c || y) + ""),
            k ? o.resolveWith(m, [s, y, x]) : o.rejectWith(m, [x, y, t]),
            x.statusCode(r),
            (r = b),
            j &&
              n.trigger("ajax" + (k ? "Success" : "Error"), [x, l, k ? s : t]),
            q.fireWith(m, [x, y]),
            j &&
              (n.trigger("ajaxComplete", [x, l]),
              --p.active || p.event.trigger("ajaxStop"));
        }
        typeof a == "object" && ((c = a), (a = b)), (c = c || {});
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = p.ajaxSetup({}, c),
          m = l.context || l,
          n = m !== l && (m.nodeType || m instanceof p) ? p(m) : p.event,
          o = p.Deferred(),
          q = p.Callbacks("once memory"),
          r = l.statusCode || {},
          t = {},
          u = {},
          v = 0,
          w = "canceled",
          x = {
            readyState: 0,
            setRequestHeader: function (a, b) {
              if (!v) {
                var c = a.toLowerCase();
                (a = u[c] = u[c] || a), (t[a] = b);
              }
              return this;
            },
            getAllResponseHeaders: function () {
              return v === 2 ? e : null;
            },
            getResponseHeader: function (a) {
              var c;
              if (v === 2) {
                if (!f) {
                  f = {};
                  while ((c = cm.exec(e))) f[c[1].toLowerCase()] = c[2];
                }
                c = f[a.toLowerCase()];
              }
              return c === b ? null : c;
            },
            overrideMimeType: function (a) {
              return v || (l.mimeType = a), this;
            },
            abort: function (a) {
              return (a = a || w), g && g.abort(a), y(0, a), this;
            },
          };
        o.promise(x),
          (x.success = x.done),
          (x.error = x.fail),
          (x.complete = q.add),
          (x.statusCode = function (a) {
            if (a) {
              var b;
              if (v < 2) for (b in a) r[b] = [r[b], a[b]];
              else (b = a[x.status]), x.always(b);
            }
            return this;
          }),
          (l.url = ((a || l.url) + "")
            .replace(cl, "")
            .replace(cp, cj[1] + "//")),
          (l.dataTypes = p
            .trim(l.dataType || "*")
            .toLowerCase()
            .split(s)),
          l.crossDomain == null &&
            ((i = ct.exec(l.url.toLowerCase()) || !1),
            (l.crossDomain =
              i &&
              i.join(":") + (i[3] ? "" : i[1] === "http:" ? 80 : 443) !==
                cj.join(":") + (cj[3] ? "" : cj[1] === "http:" ? 80 : 443))),
          l.data &&
            l.processData &&
            typeof l.data != "string" &&
            (l.data = p.param(l.data, l.traditional)),
          cA(cv, l, c, x);
        if (v === 2) return x;
        (j = l.global),
          (l.type = l.type.toUpperCase()),
          (l.hasContent = !co.test(l.type)),
          j && p.active++ === 0 && p.event.trigger("ajaxStart");
        if (!l.hasContent) {
          l.data &&
            ((l.url += (cq.test(l.url) ? "&" : "?") + l.data), delete l.data),
            (d = l.url);
          if (l.cache === !1) {
            var z = p.now(),
              A = l.url.replace(cs, "$1_=" + z);
            l.url =
              A + (A === l.url ? (cq.test(l.url) ? "&" : "?") + "_=" + z : "");
          }
        }
        ((l.data && l.hasContent && l.contentType !== !1) || c.contentType) &&
          x.setRequestHeader("Content-Type", l.contentType),
          l.ifModified &&
            ((d = d || l.url),
            p.lastModified[d] &&
              x.setRequestHeader("If-Modified-Since", p.lastModified[d]),
            p.etag[d] && x.setRequestHeader("If-None-Match", p.etag[d])),
          x.setRequestHeader(
            "Accept",
            l.dataTypes[0] && l.accepts[l.dataTypes[0]]
              ? l.accepts[l.dataTypes[0]] +
                  (l.dataTypes[0] !== "*" ? ", " + cx + "; q=0.01" : "")
              : l.accepts["*"]
          );
        for (k in l.headers) x.setRequestHeader(k, l.headers[k]);
        if (!l.beforeSend || (l.beforeSend.call(m, x, l) !== !1 && v !== 2)) {
          w = "abort";
          for (k in { success: 1, error: 1, complete: 1 }) x[k](l[k]);
          g = cA(cw, l, c, x);
          if (!g) y(-1, "No Transport");
          else {
            (x.readyState = 1),
              j && n.trigger("ajaxSend", [x, l]),
              l.async &&
                l.timeout > 0 &&
                (h = setTimeout(function () {
                  x.abort("timeout");
                }, l.timeout));
            try {
              (v = 1), g.send(t, y);
            } catch (B) {
              if (v < 2) y(-1, B);
              else throw B;
            }
          }
          return x;
        }
        return x.abort();
      },
      active: 0,
      lastModified: {},
      etag: {},
    });
  var cE = [],
    cF = /\?/,
    cG = /(=)\?(?=&|$)|\?\?/,
    cH = p.now();
  p.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = cE.pop() || p.expando + "_" + cH++;
      return (this[a] = !0), a;
    },
  }),
    p.ajaxPrefilter("json jsonp", function (c, d, e) {
      var f,
        g,
        h,
        i = c.data,
        j = c.url,
        k = c.jsonp !== !1,
        l = k && cG.test(j),
        m =
          k &&
          !l &&
          typeof i == "string" &&
          !(c.contentType || "").indexOf("application/x-www-form-urlencoded") &&
          cG.test(i);
      if (c.dataTypes[0] === "jsonp" || l || m)
        return (
          (f = c.jsonpCallback = p.isFunction(c.jsonpCallback)
            ? c.jsonpCallback()
            : c.jsonpCallback),
          (g = a[f]),
          l
            ? (c.url = j.replace(cG, "$1" + f))
            : m
            ? (c.data = i.replace(cG, "$1" + f))
            : k && (c.url += (cF.test(j) ? "&" : "?") + c.jsonp + "=" + f),
          (c.converters["script json"] = function () {
            return h || p.error(f + " was not called"), h[0];
          }),
          (c.dataTypes[0] = "json"),
          (a[f] = function () {
            h = arguments;
          }),
          e.always(function () {
            (a[f] = g),
              c[f] && ((c.jsonpCallback = d.jsonpCallback), cE.push(f)),
              h && p.isFunction(g) && g(h[0]),
              (h = g = b);
          }),
          "script"
        );
    }),
    p.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /javascript|ecmascript/ },
      converters: {
        "text script": function (a) {
          return p.globalEval(a), a;
        },
      },
    }),
    p.ajaxPrefilter("script", function (a) {
      a.cache === b && (a.cache = !1),
        a.crossDomain && ((a.type = "GET"), (a.global = !1));
    }),
    p.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var c,
          d = e.head || e.getElementsByTagName("head")[0] || e.documentElement;
        return {
          send: function (f, g) {
            (c = e.createElement("script")),
              (c.async = "async"),
              a.scriptCharset && (c.charset = a.scriptCharset),
              (c.src = a.url),
              (c.onload = c.onreadystatechange = function (a, e) {
                if (e || !c.readyState || /loaded|complete/.test(c.readyState))
                  (c.onload = c.onreadystatechange = null),
                    d && c.parentNode && d.removeChild(c),
                    (c = b),
                    e || g(200, "success");
              }),
              d.insertBefore(c, d.firstChild);
          },
          abort: function () {
            c && c.onload(0, 1);
          },
        };
      }
    });
  var cI,
    cJ = a.ActiveXObject
      ? function () {
          for (var a in cI) cI[a](0, 1);
        }
      : !1,
    cK = 0;
  (p.ajaxSettings.xhr = a.ActiveXObject
    ? function () {
        return (!this.isLocal && cL()) || cM();
      }
    : cL),
    (function (a) {
      p.extend(p.support, { ajax: !!a, cors: !!a && "withCredentials" in a });
    })(p.ajaxSettings.xhr()),
    p.support.ajax &&
      p.ajaxTransport(function (c) {
        if (!c.crossDomain || p.support.cors) {
          var d;
          return {
            send: function (e, f) {
              var g,
                h,
                i = c.xhr();
              c.username
                ? i.open(c.type, c.url, c.async, c.username, c.password)
                : i.open(c.type, c.url, c.async);
              if (c.xhrFields) for (h in c.xhrFields) i[h] = c.xhrFields[h];
              c.mimeType &&
                i.overrideMimeType &&
                i.overrideMimeType(c.mimeType),
                !c.crossDomain &&
                  !e["X-Requested-With"] &&
                  (e["X-Requested-With"] = "XMLHttpRequest");
              try {
                for (h in e) i.setRequestHeader(h, e[h]);
              } catch (j) {}
              i.send((c.hasContent && c.data) || null),
                (d = function (a, e) {
                  var h, j, k, l, m;
                  try {
                    if (d && (e || i.readyState === 4)) {
                      (d = b),
                        g &&
                          ((i.onreadystatechange = p.noop), cJ && delete cI[g]);
                      if (e) i.readyState !== 4 && i.abort();
                      else {
                        (h = i.status),
                          (k = i.getAllResponseHeaders()),
                          (l = {}),
                          (m = i.responseXML),
                          m && m.documentElement && (l.xml = m);
                        try {
                          l.text = i.responseText;
                        } catch (a) {}
                        try {
                          j = i.statusText;
                        } catch (n) {
                          j = "";
                        }
                        !h && c.isLocal && !c.crossDomain
                          ? (h = l.text ? 200 : 404)
                          : h === 1223 && (h = 204);
                      }
                    }
                  } catch (o) {
                    e || f(-1, o);
                  }
                  l && f(h, j, l, k);
                }),
                c.async
                  ? i.readyState === 4
                    ? setTimeout(d, 0)
                    : ((g = ++cK),
                      cJ && (cI || ((cI = {}), p(a).unload(cJ)), (cI[g] = d)),
                      (i.onreadystatechange = d))
                  : d();
            },
            abort: function () {
              d && d(0, 1);
            },
          };
        }
      });
  var cN,
    cO,
    cP = /^(?:toggle|show|hide)$/,
    cQ = new RegExp("^(?:([-+])=|)(" + q + ")([a-z%]*)$", "i"),
    cR = /queueHooks$/,
    cS = [cY],
    cT = {
      "*": [
        function (a, b) {
          var c,
            d,
            e = this.createTween(a, b),
            f = cQ.exec(b),
            g = e.cur(),
            h = +g || 0,
            i = 1,
            j = 20;
          if (f) {
            (c = +f[2]), (d = f[3] || (p.cssNumber[a] ? "" : "px"));
            if (d !== "px" && h) {
              h = p.css(e.elem, a, !0) || c || 1;
              do (i = i || ".5"), (h = h / i), p.style(e.elem, a, h + d);
              while (i !== (i = e.cur() / g) && i !== 1 && --j);
            }
            (e.unit = d),
              (e.start = h),
              (e.end = f[1] ? h + (f[1] + 1) * c : c);
          }
          return e;
        },
      ],
    };
  (p.Animation = p.extend(cW, {
    tweener: function (a, b) {
      p.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
      var c,
        d = 0,
        e = a.length;
      for (; d < e; d++) (c = a[d]), (cT[c] = cT[c] || []), cT[c].unshift(b);
    },
    prefilter: function (a, b) {
      b ? cS.unshift(a) : cS.push(a);
    },
  })),
    (p.Tween = cZ),
    (cZ.prototype = {
      constructor: cZ,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || "swing"),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (p.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = cZ.propHooks[this.prop];
        return a && a.get ? a.get(this) : cZ.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = cZ.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b = p.easing[this.easing](
                a,
                this.options.duration * a,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : cZ.propHooks._default.set(this),
          this
        );
      },
    }),
    (cZ.prototype.init.prototype = cZ.prototype),
    (cZ.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return a.elem[a.prop] == null ||
            (!!a.elem.style && a.elem.style[a.prop] != null)
            ? ((b = p.css(a.elem, a.prop, !1, "")), !b || b === "auto" ? 0 : b)
            : a.elem[a.prop];
        },
        set: function (a) {
          p.fx.step[a.prop]
            ? p.fx.step[a.prop](a)
            : a.elem.style &&
              (a.elem.style[p.cssProps[a.prop]] != null || p.cssHooks[a.prop])
            ? p.style(a.elem, a.prop, a.now + a.unit)
            : (a.elem[a.prop] = a.now);
        },
      },
    }),
    (cZ.propHooks.scrollTop = cZ.propHooks.scrollLeft = {
      set: function (a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
      },
    }),
    p.each(["toggle", "show", "hide"], function (a, b) {
      var c = p.fn[b];
      p.fn[b] = function (d, e, f) {
        return d == null ||
          typeof d == "boolean" ||
          (!a && p.isFunction(d) && p.isFunction(e))
          ? c.apply(this, arguments)
          : this.animate(c$(b, !0), d, e, f);
      };
    }),
    p.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(bZ)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = p.isEmptyObject(a),
          f = p.speed(b, c, d),
          g = function () {
            var b = cW(this, p.extend({}, a), f);
            e && b.stop(!0);
          };
        return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
      },
      stop: function (a, c, d) {
        var e = function (a) {
          var b = a.stop;
          delete a.stop, b(d);
        };
        return (
          typeof a != "string" && ((d = c), (c = a), (a = b)),
          c && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              c = a != null && a + "queueHooks",
              f = p.timers,
              g = p._data(this);
            if (c) g[c] && g[c].stop && e(g[c]);
            else for (c in g) g[c] && g[c].stop && cR.test(c) && e(g[c]);
            for (c = f.length; c--; )
              f[c].elem === this &&
                (a == null || f[c].queue === a) &&
                (f[c].anim.stop(d), (b = !1), f.splice(c, 1));
            (b || !d) && p.dequeue(this, a);
          })
        );
      },
    }),
    p.each(
      {
        slideDown: c$("show"),
        slideUp: c$("hide"),
        slideToggle: c$("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        p.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (p.speed = function (a, b, c) {
      var d =
        a && typeof a == "object"
          ? p.extend({}, a)
          : {
              complete: c || (!c && b) || (p.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !p.isFunction(b) && b),
            };
      d.duration = p.fx.off
        ? 0
        : typeof d.duration == "number"
        ? d.duration
        : d.duration in p.fx.speeds
        ? p.fx.speeds[d.duration]
        : p.fx.speeds._default;
      if (d.queue == null || d.queue === !0) d.queue = "fx";
      return (
        (d.old = d.complete),
        (d.complete = function () {
          p.isFunction(d.old) && d.old.call(this),
            d.queue && p.dequeue(this, d.queue);
        }),
        d
      );
    }),
    (p.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
    }),
    (p.timers = []),
    (p.fx = cZ.prototype.init),
    (p.fx.tick = function () {
      var a,
        b = p.timers,
        c = 0;
      for (; c < b.length; c++)
        (a = b[c]), !a() && b[c] === a && b.splice(c--, 1);
      b.length || p.fx.stop();
    }),
    (p.fx.timer = function (a) {
      a() &&
        p.timers.push(a) &&
        !cO &&
        (cO = setInterval(p.fx.tick, p.fx.interval));
    }),
    (p.fx.interval = 13),
    (p.fx.stop = function () {
      clearInterval(cO), (cO = null);
    }),
    (p.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (p.fx.step = {}),
    p.expr &&
      p.expr.filters &&
      (p.expr.filters.animated = function (a) {
        return p.grep(p.timers, function (b) {
          return a === b.elem;
        }).length;
      });
  var c_ = /^(?:body|html)$/i;
  (p.fn.offset = function (a) {
    if (arguments.length)
      return a === b
        ? this
        : this.each(function (b) {
            p.offset.setOffset(this, a, b);
          });
    var c,
      d,
      e,
      f,
      g,
      h,
      i,
      j = { top: 0, left: 0 },
      k = this[0],
      l = k && k.ownerDocument;
    if (!l) return;
    return (d = l.body) === k
      ? p.offset.bodyOffset(k)
      : ((c = l.documentElement),
        p.contains(c, k)
          ? (typeof k.getBoundingClientRect != "undefined" &&
              (j = k.getBoundingClientRect()),
            (e = da(l)),
            (f = c.clientTop || d.clientTop || 0),
            (g = c.clientLeft || d.clientLeft || 0),
            (h = e.pageYOffset || c.scrollTop),
            (i = e.pageXOffset || c.scrollLeft),
            { top: j.top + h - f, left: j.left + i - g })
          : j);
  }),
    (p.offset = {
      bodyOffset: function (a) {
        var b = a.offsetTop,
          c = a.offsetLeft;
        return (
          p.support.doesNotIncludeMarginInBodyOffset &&
            ((b += parseFloat(p.css(a, "marginTop")) || 0),
            (c += parseFloat(p.css(a, "marginLeft")) || 0)),
          { top: b, left: c }
        );
      },
      setOffset: function (a, b, c) {
        var d = p.css(a, "position");
        d === "static" && (a.style.position = "relative");
        var e = p(a),
          f = e.offset(),
          g = p.css(a, "top"),
          h = p.css(a, "left"),
          i =
            (d === "absolute" || d === "fixed") &&
            p.inArray("auto", [g, h]) > -1,
          j = {},
          k = {},
          l,
          m;
        i
          ? ((k = e.position()), (l = k.top), (m = k.left))
          : ((l = parseFloat(g) || 0), (m = parseFloat(h) || 0)),
          p.isFunction(b) && (b = b.call(a, c, f)),
          b.top != null && (j.top = b.top - f.top + l),
          b.left != null && (j.left = b.left - f.left + m),
          "using" in b ? b.using.call(a, j) : e.css(j);
      },
    }),
    p.fn.extend({
      position: function () {
        if (!this[0]) return;
        var a = this[0],
          b = this.offsetParent(),
          c = this.offset(),
          d = c_.test(b[0].nodeName) ? { top: 0, left: 0 } : b.offset();
        return (
          (c.top -= parseFloat(p.css(a, "marginTop")) || 0),
          (c.left -= parseFloat(p.css(a, "marginLeft")) || 0),
          (d.top += parseFloat(p.css(b[0], "borderTopWidth")) || 0),
          (d.left += parseFloat(p.css(b[0], "borderLeftWidth")) || 0),
          { top: c.top - d.top, left: c.left - d.left }
        );
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent || e.body;
          while (a && !c_.test(a.nodeName) && p.css(a, "position") === "static")
            a = a.offsetParent;
          return a || e.body;
        });
      },
    }),
    p.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (
      a,
      c
    ) {
      var d = /Y/.test(c);
      p.fn[a] = function (e) {
        return p.access(
          this,
          function (a, e, f) {
            var g = da(a);
            if (f === b)
              return g ? (c in g ? g[c] : g.document.documentElement[e]) : a[e];
            g
              ? g.scrollTo(d ? p(g).scrollLeft() : f, d ? f : p(g).scrollTop())
              : (a[e] = f);
          },
          a,
          e,
          arguments.length,
          null
        );
      };
    }),
    p.each({ Height: "height", Width: "width" }, function (a, c) {
      p.each({ padding: "inner" + a, content: c, "": "outer" + a }, function (
        d,
        e
      ) {
        p.fn[e] = function (e, f) {
          var g = arguments.length && (d || typeof e != "boolean"),
            h = d || (e === !0 || f === !0 ? "margin" : "border");
          return p.access(
            this,
            function (c, d, e) {
              var f;
              return p.isWindow(c)
                ? c.document.documentElement["client" + a]
                : c.nodeType === 9
                ? ((f = c.documentElement),
                  Math.max(
                    c.body["scroll" + a],
                    f["scroll" + a],
                    c.body["offset" + a],
                    f["offset" + a],
                    f["client" + a]
                  ))
                : e === b
                ? p.css(c, d, e, h)
                : p.style(c, d, e, h);
            },
            c,
            g ? e : b,
            g,
            null
          );
        };
      });
    }),
    (a.jQuery = a.$ = p),
    typeof define == "function" &&
      define.amd &&
      define.amd.jQuery &&
      define("jquery", [], function () {
        return p;
      });
})(window);
/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.core.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function (a, b) {
  function c(b, c) {
    var e = b.nodeName.toLowerCase();
    if ("area" === e) {
      var f = b.parentNode,
        g = f.name,
        h;
      return !b.href || !g || f.nodeName.toLowerCase() !== "map"
        ? !1
        : ((h = a("img[usemap=#" + g + "]")[0]), !!h && d(h));
    }
    return (
      (/input|select|textarea|button|object/.test(e)
        ? !b.disabled
        : "a" == e
        ? b.href || c
        : c) && d(b)
    );
  }
  function d(b) {
    return !a(b)
      .parents()
      .andSelf()
      .filter(function () {
        return (
          a.curCSS(this, "visibility") === "hidden" ||
          a.expr.filters.hidden(this)
        );
      }).length;
  }
  a.ui = a.ui || {};
  if (a.ui.version) return;
  a.extend(a.ui, {
    version: "1.8.21",
    keyCode: {
      ALT: 18,
      BACKSPACE: 8,
      CAPS_LOCK: 20,
      COMMA: 188,
      COMMAND: 91,
      COMMAND_LEFT: 91,
      COMMAND_RIGHT: 93,
      CONTROL: 17,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      INSERT: 45,
      LEFT: 37,
      MENU: 93,
      NUMPAD_ADD: 107,
      NUMPAD_DECIMAL: 110,
      NUMPAD_DIVIDE: 111,
      NUMPAD_ENTER: 108,
      NUMPAD_MULTIPLY: 106,
      NUMPAD_SUBTRACT: 109,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SHIFT: 16,
      SPACE: 32,
      TAB: 9,
      UP: 38,
      WINDOWS: 91,
    },
  }),
    a.fn.extend({
      propAttr: a.fn.prop || a.fn.attr,
      _focus: a.fn.focus,
      focus: function (b, c) {
        return typeof b == "number"
          ? this.each(function () {
              var d = this;
              setTimeout(function () {
                a(d).focus(), c && c.call(d);
              }, b);
            })
          : this._focus.apply(this, arguments);
      },
      scrollParent: function () {
        var b;
        return (
          (a.browser.msie && /(static|relative)/.test(this.css("position"))) ||
          /absolute/.test(this.css("position"))
            ? (b = this.parents()
                .filter(function () {
                  return (
                    /(relative|absolute|fixed)/.test(
                      a.curCSS(this, "position", 1)
                    ) &&
                    /(auto|scroll)/.test(
                      a.curCSS(this, "overflow", 1) +
                        a.curCSS(this, "overflow-y", 1) +
                        a.curCSS(this, "overflow-x", 1)
                    )
                  );
                })
                .eq(0))
            : (b = this.parents()
                .filter(function () {
                  return /(auto|scroll)/.test(
                    a.curCSS(this, "overflow", 1) +
                      a.curCSS(this, "overflow-y", 1) +
                      a.curCSS(this, "overflow-x", 1)
                  );
                })
                .eq(0)),
          /fixed/.test(this.css("position")) || !b.length ? a(document) : b
        );
      },
      zIndex: function (c) {
        if (c !== b) return this.css("zIndex", c);
        if (this.length) {
          var d = a(this[0]),
            e,
            f;
          while (d.length && d[0] !== document) {
            e = d.css("position");
            if (e === "absolute" || e === "relative" || e === "fixed") {
              f = parseInt(d.css("zIndex"), 10);
              if (!isNaN(f) && f !== 0) return f;
            }
            d = d.parent();
          }
        }
        return 0;
      },
      disableSelection: function () {
        return this.bind(
          (a.support.selectstart ? "selectstart" : "mousedown") +
            ".ui-disableSelection",
          function (a) {
            a.preventDefault();
          }
        );
      },
      enableSelection: function () {
        return this.unbind(".ui-disableSelection");
      },
    }),
    a.each(["Width", "Height"], function (c, d) {
      function h(b, c, d, f) {
        return (
          a.each(e, function () {
            (c -= parseFloat(a.curCSS(b, "padding" + this, !0)) || 0),
              d &&
                (c -=
                  parseFloat(a.curCSS(b, "border" + this + "Width", !0)) || 0),
              f && (c -= parseFloat(a.curCSS(b, "margin" + this, !0)) || 0);
          }),
          c
        );
      }
      var e = d === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
        f = d.toLowerCase(),
        g = {
          innerWidth: a.fn.innerWidth,
          innerHeight: a.fn.innerHeight,
          outerWidth: a.fn.outerWidth,
          outerHeight: a.fn.outerHeight,
        };
      (a.fn["inner" + d] = function (c) {
        return c === b
          ? g["inner" + d].call(this)
          : this.each(function () {
              a(this).css(f, h(this, c) + "px");
            });
      }),
        (a.fn["outer" + d] = function (b, c) {
          return typeof b != "number"
            ? g["outer" + d].call(this, b)
            : this.each(function () {
                a(this).css(f, h(this, b, !0, c) + "px");
              });
        });
    }),
    a.extend(a.expr[":"], {
      data: function (b, c, d) {
        return !!a.data(b, d[3]);
      },
      focusable: function (b) {
        return c(b, !isNaN(a.attr(b, "tabindex")));
      },
      tabbable: function (b) {
        var d = a.attr(b, "tabindex"),
          e = isNaN(d);
        return (e || d >= 0) && c(b, !e);
      },
    }),
    a(function () {
      var b = document.body,
        c = b.appendChild((c = document.createElement("div")));
      c.offsetHeight,
        a.extend(c.style, {
          minHeight: "100px",
          height: "auto",
          padding: 0,
          borderWidth: 0,
        }),
        (a.support.minHeight = c.offsetHeight === 100),
        (a.support.selectstart = "onselectstart" in c),
        (b.removeChild(c).style.display = "none");
    }),
    a.extend(a.ui, {
      plugin: {
        add: function (b, c, d) {
          var e = a.ui[b].prototype;
          for (var f in d)
            (e.plugins[f] = e.plugins[f] || []), e.plugins[f].push([c, d[f]]);
        },
        call: function (a, b, c) {
          var d = a.plugins[b];
          if (!d || !a.element[0].parentNode) return;
          for (var e = 0; e < d.length; e++)
            a.options[d[e][0]] && d[e][1].apply(a.element, c);
        },
      },
      contains: function (a, b) {
        return document.compareDocumentPosition
          ? a.compareDocumentPosition(b) & 16
          : a !== b && a.contains(b);
      },
      hasScroll: function (b, c) {
        if (a(b).css("overflow") === "hidden") return !1;
        var d = c && c === "left" ? "scrollLeft" : "scrollTop",
          e = !1;
        return b[d] > 0 ? !0 : ((b[d] = 1), (e = b[d] > 0), (b[d] = 0), e);
      },
      isOverAxis: function (a, b, c) {
        return a > b && a < b + c;
      },
      isOver: function (b, c, d, e, f, g) {
        return a.ui.isOverAxis(b, d, f) && a.ui.isOverAxis(c, e, g);
      },
    });
})(jQuery);
/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.widget.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function (a, b) {
  if (a.cleanData) {
    var c = a.cleanData;
    a.cleanData = function (b) {
      for (var d = 0, e; (e = b[d]) != null; d++)
        try {
          a(e).triggerHandler("remove");
        } catch (f) {}
      c(b);
    };
  } else {
    var d = a.fn.remove;
    a.fn.remove = function (b, c) {
      return this.each(function () {
        return (
          c ||
            ((!b || a.filter(b, [this]).length) &&
              a("*", this)
                .add([this])
                .each(function () {
                  try {
                    a(this).triggerHandler("remove");
                  } catch (b) {}
                })),
          d.call(a(this), b, c)
        );
      });
    };
  }
  (a.widget = function (b, c, d) {
    var e = b.split(".")[0],
      f;
    (b = b.split(".")[1]),
      (f = e + "-" + b),
      d || ((d = c), (c = a.Widget)),
      (a.expr[":"][f] = function (c) {
        return !!a.data(c, b);
      }),
      (a[e] = a[e] || {}),
      (a[e][b] = function (a, b) {
        arguments.length && this._createWidget(a, b);
      });
    var g = new c();
    (g.options = a.extend(!0, {}, g.options)),
      (a[e][b].prototype = a.extend(
        !0,
        g,
        {
          namespace: e,
          widgetName: b,
          widgetEventPrefix: a[e][b].prototype.widgetEventPrefix || b,
          widgetBaseClass: f,
        },
        d
      )),
      a.widget.bridge(b, a[e][b]);
  }),
    (a.widget.bridge = function (c, d) {
      a.fn[c] = function (e) {
        var f = typeof e == "string",
          g = Array.prototype.slice.call(arguments, 1),
          h = this;
        return (
          (e = !f && g.length ? a.extend.apply(null, [!0, e].concat(g)) : e),
          f && e.charAt(0) === "_"
            ? h
            : (f
                ? this.each(function () {
                    var d = a.data(this, c),
                      f = d && a.isFunction(d[e]) ? d[e].apply(d, g) : d;
                    if (f !== d && f !== b) return (h = f), !1;
                  })
                : this.each(function () {
                    var b = a.data(this, c);
                    b
                      ? b.option(e || {})._init()
                      : a.data(this, c, new d(e, this));
                  }),
              h)
        );
      };
    }),
    (a.Widget = function (a, b) {
      arguments.length && this._createWidget(a, b);
    }),
    (a.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      options: { disabled: !1 },
      _createWidget: function (b, c) {
        a.data(c, this.widgetName, this),
          (this.element = a(c)),
          (this.options = a.extend(
            !0,
            {},
            this.options,
            this._getCreateOptions(),
            b
          ));
        var d = this;
        this.element.bind("remove." + this.widgetName, function () {
          d.destroy();
        }),
          this._create(),
          this._trigger("create"),
          this._init();
      },
      _getCreateOptions: function () {
        return a.metadata && a.metadata.get(this.element[0])[this.widgetName];
      },
      _create: function () {},
      _init: function () {},
      destroy: function () {
        this.element.unbind("." + this.widgetName).removeData(this.widgetName),
          this.widget()
            .unbind("." + this.widgetName)
            .removeAttr("aria-disabled")
            .removeClass(
              this.widgetBaseClass + "-disabled " + "ui-state-disabled"
            );
      },
      widget: function () {
        return this.element;
      },
      option: function (c, d) {
        var e = c;
        if (arguments.length === 0) return a.extend({}, this.options);
        if (typeof c == "string") {
          if (d === b) return this.options[c];
          (e = {}), (e[c] = d);
        }
        return this._setOptions(e), this;
      },
      _setOptions: function (b) {
        var c = this;
        return (
          a.each(b, function (a, b) {
            c._setOption(a, b);
          }),
          this
        );
      },
      _setOption: function (a, b) {
        return (
          (this.options[a] = b),
          a === "disabled" &&
            this.widget()
              [b ? "addClass" : "removeClass"](
                this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled"
              )
              .attr("aria-disabled", b),
          this
        );
      },
      enable: function () {
        return this._setOption("disabled", !1);
      },
      disable: function () {
        return this._setOption("disabled", !0);
      },
      _trigger: function (b, c, d) {
        var e,
          f,
          g = this.options[b];
        (d = d || {}),
          (c = a.Event(c)),
          (c.type = (b === this.widgetEventPrefix
            ? b
            : this.widgetEventPrefix + b
          ).toLowerCase()),
          (c.target = this.element[0]),
          (f = c.originalEvent);
        if (f) for (e in f) e in c || (c[e] = f[e]);
        return (
          this.element.trigger(c, d),
          !(
            (a.isFunction(g) && g.call(this.element[0], c, d) === !1) ||
            c.isDefaultPrevented()
          )
        );
      },
    });
})(jQuery);
/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.mouse.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function (a, b) {
  var c = !1;
  a(document).mouseup(function (a) {
    c = !1;
  }),
    a.widget("ui.mouse", {
      options: { cancel: ":input,option", distance: 1, delay: 0 },
      _mouseInit: function () {
        var b = this;
        this.element
          .bind("mousedown." + this.widgetName, function (a) {
            return b._mouseDown(a);
          })
          .bind("click." + this.widgetName, function (c) {
            if (!0 === a.data(c.target, b.widgetName + ".preventClickEvent"))
              return (
                a.removeData(c.target, b.widgetName + ".preventClickEvent"),
                c.stopImmediatePropagation(),
                !1
              );
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.unbind("." + this.widgetName),
          a(document)
            .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
            .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function (b) {
        if (c) return;
        this._mouseStarted && this._mouseUp(b), (this._mouseDownEvent = b);
        var d = this,
          e = b.which == 1,
          f =
            typeof this.options.cancel == "string" && b.target.nodeName
              ? a(b.target).closest(this.options.cancel).length
              : !1;
        if (!e || f || !this._mouseCapture(b)) return !0;
        (this.mouseDelayMet = !this.options.delay),
          this.mouseDelayMet ||
            (this._mouseDelayTimer = setTimeout(function () {
              d.mouseDelayMet = !0;
            }, this.options.delay));
        if (this._mouseDistanceMet(b) && this._mouseDelayMet(b)) {
          this._mouseStarted = this._mouseStart(b) !== !1;
          if (!this._mouseStarted) return b.preventDefault(), !0;
        }
        return (
          !0 === a.data(b.target, this.widgetName + ".preventClickEvent") &&
            a.removeData(b.target, this.widgetName + ".preventClickEvent"),
          (this._mouseMoveDelegate = function (a) {
            return d._mouseMove(a);
          }),
          (this._mouseUpDelegate = function (a) {
            return d._mouseUp(a);
          }),
          a(document)
            .bind("mousemove." + this.widgetName, this._mouseMoveDelegate)
            .bind("mouseup." + this.widgetName, this._mouseUpDelegate),
          b.preventDefault(),
          (c = !0),
          !0
        );
      },
      _mouseMove: function (b) {
        return !a.browser.msie || document.documentMode >= 9 || !!b.button
          ? this._mouseStarted
            ? (this._mouseDrag(b), b.preventDefault())
            : (this._mouseDistanceMet(b) &&
                this._mouseDelayMet(b) &&
                ((this._mouseStarted =
                  this._mouseStart(this._mouseDownEvent, b) !== !1),
                this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)),
              !this._mouseStarted)
          : this._mouseUp(b);
      },
      _mouseUp: function (b) {
        return (
          a(document)
            .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
            .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            b.target == this._mouseDownEvent.target &&
              a.data(b.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(b)),
          !1
        );
      },
      _mouseDistanceMet: function (a) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - a.pageX),
            Math.abs(this._mouseDownEvent.pageY - a.pageY)
          ) >= this.options.distance
        );
      },
      _mouseDelayMet: function (a) {
        return this.mouseDelayMet;
      },
      _mouseStart: function (a) {},
      _mouseDrag: function (a) {},
      _mouseStop: function (a) {},
      _mouseCapture: function (a) {
        return !0;
      },
    });
})(jQuery);
/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.position.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function (a, b) {
  a.ui = a.ui || {};
  var c = /left|center|right/,
    d = /top|center|bottom/,
    e = "center",
    f = {},
    g = a.fn.position,
    h = a.fn.offset;
  (a.fn.position = function (b) {
    if (!b || !b.of) return g.apply(this, arguments);
    b = a.extend({}, b);
    var h = a(b.of),
      i = h[0],
      j = (b.collision || "flip").split(" "),
      k = b.offset ? b.offset.split(" ") : [0, 0],
      l,
      m,
      n;
    return (
      i.nodeType === 9
        ? ((l = h.width()), (m = h.height()), (n = { top: 0, left: 0 }))
        : i.setTimeout
        ? ((l = h.width()),
          (m = h.height()),
          (n = { top: h.scrollTop(), left: h.scrollLeft() }))
        : i.preventDefault
        ? ((b.at = "left top"),
          (l = m = 0),
          (n = { top: b.of.pageY, left: b.of.pageX }))
        : ((l = h.outerWidth()), (m = h.outerHeight()), (n = h.offset())),
      a.each(["my", "at"], function () {
        var a = (b[this] || "").split(" ");
        a.length === 1 &&
          (a = c.test(a[0])
            ? a.concat([e])
            : d.test(a[0])
            ? [e].concat(a)
            : [e, e]),
          (a[0] = c.test(a[0]) ? a[0] : e),
          (a[1] = d.test(a[1]) ? a[1] : e),
          (b[this] = a);
      }),
      j.length === 1 && (j[1] = j[0]),
      (k[0] = parseInt(k[0], 10) || 0),
      k.length === 1 && (k[1] = k[0]),
      (k[1] = parseInt(k[1], 10) || 0),
      b.at[0] === "right" ? (n.left += l) : b.at[0] === e && (n.left += l / 2),
      b.at[1] === "bottom" ? (n.top += m) : b.at[1] === e && (n.top += m / 2),
      (n.left += k[0]),
      (n.top += k[1]),
      this.each(function () {
        var c = a(this),
          d = c.outerWidth(),
          g = c.outerHeight(),
          h = parseInt(a.curCSS(this, "marginLeft", !0)) || 0,
          i = parseInt(a.curCSS(this, "marginTop", !0)) || 0,
          o = d + h + (parseInt(a.curCSS(this, "marginRight", !0)) || 0),
          p = g + i + (parseInt(a.curCSS(this, "marginBottom", !0)) || 0),
          q = a.extend({}, n),
          r;
        b.my[0] === "right"
          ? (q.left -= d)
          : b.my[0] === e && (q.left -= d / 2),
          b.my[1] === "bottom"
            ? (q.top -= g)
            : b.my[1] === e && (q.top -= g / 2),
          f.fractions ||
            ((q.left = Math.round(q.left)), (q.top = Math.round(q.top))),
          (r = { left: q.left - h, top: q.top - i }),
          a.each(["left", "top"], function (c, e) {
            a.ui.position[j[c]] &&
              a.ui.position[j[c]][e](q, {
                targetWidth: l,
                targetHeight: m,
                elemWidth: d,
                elemHeight: g,
                collisionPosition: r,
                collisionWidth: o,
                collisionHeight: p,
                offset: k,
                my: b.my,
                at: b.at,
              });
          }),
          a.fn.bgiframe && c.bgiframe(),
          c.offset(a.extend(q, { using: b.using }));
      })
    );
  }),
    (a.ui.position = {
      fit: {
        left: function (b, c) {
          var d = a(window),
            e =
              c.collisionPosition.left +
              c.collisionWidth -
              d.width() -
              d.scrollLeft();
          b.left =
            e > 0
              ? b.left - e
              : Math.max(b.left - c.collisionPosition.left, b.left);
        },
        top: function (b, c) {
          var d = a(window),
            e =
              c.collisionPosition.top +
              c.collisionHeight -
              d.height() -
              d.scrollTop();
          b.top =
            e > 0
              ? b.top - e
              : Math.max(b.top - c.collisionPosition.top, b.top);
        },
      },
      flip: {
        left: function (b, c) {
          if (c.at[0] === e) return;
          var d = a(window),
            f =
              c.collisionPosition.left +
              c.collisionWidth -
              d.width() -
              d.scrollLeft(),
            g =
              c.my[0] === "left"
                ? -c.elemWidth
                : c.my[0] === "right"
                ? c.elemWidth
                : 0,
            h = c.at[0] === "left" ? c.targetWidth : -c.targetWidth,
            i = -2 * c.offset[0];
          b.left +=
            c.collisionPosition.left < 0 ? g + h + i : f > 0 ? g + h + i : 0;
        },
        top: function (b, c) {
          if (c.at[1] === e) return;
          var d = a(window),
            f =
              c.collisionPosition.top +
              c.collisionHeight -
              d.height() -
              d.scrollTop(),
            g =
              c.my[1] === "top"
                ? -c.elemHeight
                : c.my[1] === "bottom"
                ? c.elemHeight
                : 0,
            h = c.at[1] === "top" ? c.targetHeight : -c.targetHeight,
            i = -2 * c.offset[1];
          b.top +=
            c.collisionPosition.top < 0 ? g + h + i : f > 0 ? g + h + i : 0;
        },
      },
    }),
    a.offset.setOffset ||
      ((a.offset.setOffset = function (b, c) {
        /static/.test(a.curCSS(b, "position")) &&
          (b.style.position = "relative");
        var d = a(b),
          e = d.offset(),
          f = parseInt(a.curCSS(b, "top", !0), 10) || 0,
          g = parseInt(a.curCSS(b, "left", !0), 10) || 0,
          h = { top: c.top - e.top + f, left: c.left - e.left + g };
        "using" in c ? c.using.call(b, h) : d.css(h);
      }),
      (a.fn.offset = function (b) {
        var c = this[0];
        return !c || !c.ownerDocument
          ? null
          : b
          ? a.isFunction(b)
            ? this.each(function (c) {
                a(this).offset(b.call(this, c, a(this).offset()));
              })
            : this.each(function () {
                a.offset.setOffset(this, b);
              })
          : h.call(this);
      })),
    (function () {
      var b = document.getElementsByTagName("body")[0],
        c = document.createElement("div"),
        d,
        e,
        g,
        h,
        i;
      (d = document.createElement(b ? "div" : "body")),
        (g = {
          visibility: "hidden",
          width: 0,
          height: 0,
          border: 0,
          margin: 0,
          background: "none",
        }),
        b &&
          a.extend(g, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px",
          });
      for (var j in g) d.style[j] = g[j];
      d.appendChild(c),
        (e = b || document.documentElement),
        e.insertBefore(d, e.firstChild),
        (c.style.cssText =
          "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;"),
        (h = a(c)
          .offset(function (a, b) {
            return b;
          })
          .offset()),
        (d.innerHTML = ""),
        e.removeChild(d),
        (i = h.top + h.left + (b ? 2e3 : 0)),
        (f.fractions = i > 21 && i < 22);
    })();
})(jQuery);
/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.draggable.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function (a, b) {
  a.widget("ui.draggable", a.ui.mouse, {
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
    },
    _create: function () {
      this.options.helper == "original" &&
        !/^(?:r|a|f)/.test(this.element.css("position")) &&
        (this.element[0].style.position = "relative"),
        this.options.addClasses && this.element.addClass("ui-draggable"),
        this.options.disabled && this.element.addClass("ui-draggable-disabled"),
        this._mouseInit();
    },
    destroy: function () {
      if (!this.element.data("draggable")) return;
      return (
        this.element
          .removeData("draggable")
          .unbind(".draggable")
          .removeClass(
            "ui-draggable ui-draggable-dragging ui-draggable-disabled"
          ),
        this._mouseDestroy(),
        this
      );
    },
    _mouseCapture: function (b) {
      var c = this.options;
      return this.helper || c.disabled || a(b.target).is(".ui-resizable-handle")
        ? !1
        : ((this.handle = this._getHandle(b)),
          this.handle
            ? (c.iframeFix &&
                a(c.iframeFix === !0 ? "iframe" : c.iframeFix).each(
                  function () {
                    a(
                      '<div class="ui-draggable-iframeFix" style="background: #fff;"></div>'
                    )
                      .css({
                        width: this.offsetWidth + "px",
                        height: this.offsetHeight + "px",
                        position: "absolute",
                        opacity: "0.001",
                        zIndex: 1e3,
                      })
                      .css(a(this).offset())
                      .appendTo("body");
                  }
                ),
              !0)
            : !1);
    },
    _mouseStart: function (b) {
      var c = this.options;
      return (
        (this.helper = this._createHelper(b)),
        this.helper.addClass("ui-draggable-dragging"),
        this._cacheHelperProportions(),
        a.ui.ddmanager && (a.ui.ddmanager.current = this),
        this._cacheMargins(),
        (this.cssPosition = this.helper.css("position")),
        (this.scrollParent = this.helper.scrollParent()),
        (this.offset = this.positionAbs = this.element.offset()),
        (this.offset = {
          top: this.offset.top - this.margins.top,
          left: this.offset.left - this.margins.left,
        }),
        a.extend(this.offset, {
          click: {
            left: b.pageX - this.offset.left,
            top: b.pageY - this.offset.top,
          },
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset(),
        }),
        (this.originalPosition = this.position = this._generatePosition(b)),
        (this.originalPageX = b.pageX),
        (this.originalPageY = b.pageY),
        c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt),
        c.containment && this._setContainment(),
        this._trigger("start", b) === !1
          ? (this._clear(), !1)
          : (this._cacheHelperProportions(),
            a.ui.ddmanager &&
              !c.dropBehaviour &&
              a.ui.ddmanager.prepareOffsets(this, b),
            this._mouseDrag(b, !0),
            a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b),
            !0)
      );
    },
    _mouseDrag: function (b, c) {
      (this.position = this._generatePosition(b)),
        (this.positionAbs = this._convertPositionTo("absolute"));
      if (!c) {
        var d = this._uiHash();
        if (this._trigger("drag", b, d) === !1) return this._mouseUp({}), !1;
        this.position = d.position;
      }
      if (!this.options.axis || this.options.axis != "y")
        this.helper[0].style.left = this.position.left + "px";
      if (!this.options.axis || this.options.axis != "x")
        this.helper[0].style.top = this.position.top + "px";
      return a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1;
    },
    _mouseStop: function (b) {
      var c = !1;
      a.ui.ddmanager &&
        !this.options.dropBehaviour &&
        (c = a.ui.ddmanager.drop(this, b)),
        this.dropped && ((c = this.dropped), (this.dropped = !1));
      var d = this.element[0],
        e = !1;
      while (d && (d = d.parentNode)) d == document && (e = !0);
      if (!e && this.options.helper === "original") return !1;
      if (
        (this.options.revert == "invalid" && !c) ||
        (this.options.revert == "valid" && c) ||
        this.options.revert === !0 ||
        (a.isFunction(this.options.revert) &&
          this.options.revert.call(this.element, c))
      ) {
        var f = this;
        a(this.helper).animate(
          this.originalPosition,
          parseInt(this.options.revertDuration, 10),
          function () {
            f._trigger("stop", b) !== !1 && f._clear();
          }
        );
      } else this._trigger("stop", b) !== !1 && this._clear();
      return !1;
    },
    _mouseUp: function (b) {
      return (
        this.options.iframeFix === !0 &&
          a("div.ui-draggable-iframeFix").each(function () {
            this.parentNode.removeChild(this);
          }),
        a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b),
        a.ui.mouse.prototype._mouseUp.call(this, b)
      );
    },
    cancel: function () {
      return (
        this.helper.is(".ui-draggable-dragging")
          ? this._mouseUp({})
          : this._clear(),
        this
      );
    },
    _getHandle: function (b) {
      var c =
        !this.options.handle || !a(this.options.handle, this.element).length
          ? !0
          : !1;
      return (
        a(this.options.handle, this.element)
          .find("*")
          .andSelf()
          .each(function () {
            this == b.target && (c = !0);
          }),
        c
      );
    },
    _createHelper: function (b) {
      var c = this.options,
        d = a.isFunction(c.helper)
          ? a(c.helper.apply(this.element[0], [b]))
          : c.helper == "clone"
          ? this.element.clone().removeAttr("id")
          : this.element;
      return (
        d.parents("body").length ||
          d.appendTo(
            c.appendTo == "parent" ? this.element[0].parentNode : c.appendTo
          ),
        d[0] != this.element[0] &&
          !/(fixed|absolute)/.test(d.css("position")) &&
          d.css("position", "absolute"),
        d
      );
    },
    _adjustOffsetFromHelper: function (b) {
      typeof b == "string" && (b = b.split(" ")),
        a.isArray(b) && (b = { left: +b[0], top: +b[1] || 0 }),
        "left" in b && (this.offset.click.left = b.left + this.margins.left),
        "right" in b &&
          (this.offset.click.left =
            this.helperProportions.width - b.right + this.margins.left),
        "top" in b && (this.offset.click.top = b.top + this.margins.top),
        "bottom" in b &&
          (this.offset.click.top =
            this.helperProportions.height - b.bottom + this.margins.top);
    },
    _getParentOffset: function () {
      this.offsetParent = this.helper.offsetParent();
      var b = this.offsetParent.offset();
      this.cssPosition == "absolute" &&
        this.scrollParent[0] != document &&
        a.ui.contains(this.scrollParent[0], this.offsetParent[0]) &&
        ((b.left += this.scrollParent.scrollLeft()),
        (b.top += this.scrollParent.scrollTop()));
      if (
        this.offsetParent[0] == document.body ||
        (this.offsetParent[0].tagName &&
          this.offsetParent[0].tagName.toLowerCase() == "html" &&
          a.browser.msie)
      )
        b = { top: 0, left: 0 };
      return {
        top:
          b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left:
          b.left +
          (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
      };
    },
    _getRelativeOffset: function () {
      if (this.cssPosition == "relative") {
        var a = this.element.position();
        return {
          top:
            a.top -
            (parseInt(this.helper.css("top"), 10) || 0) +
            this.scrollParent.scrollTop(),
          left:
            a.left -
            (parseInt(this.helper.css("left"), 10) || 0) +
            this.scrollParent.scrollLeft(),
        };
      }
      return { top: 0, left: 0 };
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
      };
    },
    _cacheHelperProportions: function () {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight(),
      };
    },
    _setContainment: function () {
      var b = this.options;
      b.containment == "parent" && (b.containment = this.helper[0].parentNode);
      if (b.containment == "document" || b.containment == "window")
        this.containment = [
          b.containment == "document"
            ? 0
            : a(window).scrollLeft() -
              this.offset.relative.left -
              this.offset.parent.left,
          b.containment == "document"
            ? 0
            : a(window).scrollTop() -
              this.offset.relative.top -
              this.offset.parent.top,
          (b.containment == "document" ? 0 : a(window).scrollLeft()) +
            a(b.containment == "document" ? document : window).width() -
            this.helperProportions.width -
            this.margins.left,
          (b.containment == "document" ? 0 : a(window).scrollTop()) +
            (a(b.containment == "document" ? document : window).height() ||
              document.body.parentNode.scrollHeight) -
            this.helperProportions.height -
            this.margins.top,
        ];
      if (
        !/^(document|window|parent)$/.test(b.containment) &&
        b.containment.constructor != Array
      ) {
        var c = a(b.containment),
          d = c[0];
        if (!d) return;
        var e = c.offset(),
          f = a(d).css("overflow") != "hidden";
        (this.containment = [
          (parseInt(a(d).css("borderLeftWidth"), 10) || 0) +
            (parseInt(a(d).css("paddingLeft"), 10) || 0),
          (parseInt(a(d).css("borderTopWidth"), 10) || 0) +
            (parseInt(a(d).css("paddingTop"), 10) || 0),
          (f ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) -
            (parseInt(a(d).css("borderLeftWidth"), 10) || 0) -
            (parseInt(a(d).css("paddingRight"), 10) || 0) -
            this.helperProportions.width -
            this.margins.left -
            this.margins.right,
          (f ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) -
            (parseInt(a(d).css("borderTopWidth"), 10) || 0) -
            (parseInt(a(d).css("paddingBottom"), 10) || 0) -
            this.helperProportions.height -
            this.margins.top -
            this.margins.bottom,
        ]),
          (this.relative_container = c);
      } else
        b.containment.constructor == Array &&
          (this.containment = b.containment);
    },
    _convertPositionTo: function (b, c) {
      c || (c = this.position);
      var d = b == "absolute" ? 1 : -1,
        e = this.options,
        f =
          this.cssPosition == "absolute" &&
          (this.scrollParent[0] == document ||
            !a.ui.contains(this.scrollParent[0], this.offsetParent[0]))
            ? this.offsetParent
            : this.scrollParent,
        g = /(html|body)/i.test(f[0].tagName);
      return {
        top:
          c.top +
          this.offset.relative.top * d +
          this.offset.parent.top * d -
          (a.browser.safari &&
          a.browser.version < 526 &&
          this.cssPosition == "fixed"
            ? 0
            : (this.cssPosition == "fixed"
                ? -this.scrollParent.scrollTop()
                : g
                ? 0
                : f.scrollTop()) * d),
        left:
          c.left +
          this.offset.relative.left * d +
          this.offset.parent.left * d -
          (a.browser.safari &&
          a.browser.version < 526 &&
          this.cssPosition == "fixed"
            ? 0
            : (this.cssPosition == "fixed"
                ? -this.scrollParent.scrollLeft()
                : g
                ? 0
                : f.scrollLeft()) * d),
      };
    },
    _generatePosition: function (b) {
      var c = this.options,
        d =
          this.cssPosition == "absolute" &&
          (this.scrollParent[0] == document ||
            !a.ui.contains(this.scrollParent[0], this.offsetParent[0]))
            ? this.offsetParent
            : this.scrollParent,
        e = /(html|body)/i.test(d[0].tagName),
        f = b.pageX,
        g = b.pageY;
      if (this.originalPosition) {
        var h;
        if (this.containment) {
          if (this.relative_container) {
            var i = this.relative_container.offset();
            h = [
              this.containment[0] + i.left,
              this.containment[1] + i.top,
              this.containment[2] + i.left,
              this.containment[3] + i.top,
            ];
          } else h = this.containment;
          b.pageX - this.offset.click.left < h[0] &&
            (f = h[0] + this.offset.click.left),
            b.pageY - this.offset.click.top < h[1] &&
              (g = h[1] + this.offset.click.top),
            b.pageX - this.offset.click.left > h[2] &&
              (f = h[2] + this.offset.click.left),
            b.pageY - this.offset.click.top > h[3] &&
              (g = h[3] + this.offset.click.top);
        }
        if (c.grid) {
          var j = c.grid[1]
            ? this.originalPageY +
              Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1]
            : this.originalPageY;
          g = h
            ? j - this.offset.click.top < h[1] ||
              j - this.offset.click.top > h[3]
              ? j - this.offset.click.top < h[1]
                ? j + c.grid[1]
                : j - c.grid[1]
              : j
            : j;
          var k = c.grid[0]
            ? this.originalPageX +
              Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0]
            : this.originalPageX;
          f = h
            ? k - this.offset.click.left < h[0] ||
              k - this.offset.click.left > h[2]
              ? k - this.offset.click.left < h[0]
                ? k + c.grid[0]
                : k - c.grid[0]
              : k
            : k;
        }
      }
      return {
        top:
          g -
          this.offset.click.top -
          this.offset.relative.top -
          this.offset.parent.top +
          (a.browser.safari &&
          a.browser.version < 526 &&
          this.cssPosition == "fixed"
            ? 0
            : this.cssPosition == "fixed"
            ? -this.scrollParent.scrollTop()
            : e
            ? 0
            : d.scrollTop()),
        left:
          f -
          this.offset.click.left -
          this.offset.relative.left -
          this.offset.parent.left +
          (a.browser.safari &&
          a.browser.version < 526 &&
          this.cssPosition == "fixed"
            ? 0
            : this.cssPosition == "fixed"
            ? -this.scrollParent.scrollLeft()
            : e
            ? 0
            : d.scrollLeft()),
      };
    },
    _clear: function () {
      this.helper.removeClass("ui-draggable-dragging"),
        this.helper[0] != this.element[0] &&
          !this.cancelHelperRemoval &&
          this.helper.remove(),
        (this.helper = null),
        (this.cancelHelperRemoval = !1);
    },
    _trigger: function (b, c, d) {
      return (
        (d = d || this._uiHash()),
        a.ui.plugin.call(this, b, [c, d]),
        b == "drag" && (this.positionAbs = this._convertPositionTo("absolute")),
        a.Widget.prototype._trigger.call(this, b, c, d)
      );
    },
    plugins: {},
    _uiHash: function (a) {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs,
      };
    },
  }),
    a.extend(a.ui.draggable, { version: "1.8.21" }),
    a.ui.plugin.add("draggable", "connectToSortable", {
      start: function (b, c) {
        var d = a(this).data("draggable"),
          e = d.options,
          f = a.extend({}, c, { item: d.element });
        (d.sortables = []),
          a(e.connectToSortable).each(function () {
            var c = a.data(this, "sortable");
            c &&
              !c.options.disabled &&
              (d.sortables.push({
                instance: c,
                shouldRevert: c.options.revert,
              }),
              c.refreshPositions(),
              c._trigger("activate", b, f));
          });
      },
      stop: function (b, c) {
        var d = a(this).data("draggable"),
          e = a.extend({}, c, { item: d.element });
        a.each(d.sortables, function () {
          this.instance.isOver
            ? ((this.instance.isOver = 0),
              (d.cancelHelperRemoval = !0),
              (this.instance.cancelHelperRemoval = !1),
              this.shouldRevert && (this.instance.options.revert = !0),
              this.instance._mouseStop(b),
              (this.instance.options.helper = this.instance.options._helper),
              d.options.helper == "original" &&
                this.instance.currentItem.css({ top: "auto", left: "auto" }))
            : ((this.instance.cancelHelperRemoval = !1),
              this.instance._trigger("deactivate", b, e));
        });
      },
      drag: function (b, c) {
        var d = a(this).data("draggable"),
          e = this,
          f = function (b) {
            var c = this.offset.click.top,
              d = this.offset.click.left,
              e = this.positionAbs.top,
              f = this.positionAbs.left,
              g = b.height,
              h = b.width,
              i = b.top,
              j = b.left;
            return a.ui.isOver(e + c, f + d, i, j, g, h);
          };
        a.each(d.sortables, function (f) {
          (this.instance.positionAbs = d.positionAbs),
            (this.instance.helperProportions = d.helperProportions),
            (this.instance.offset.click = d.offset.click),
            this.instance._intersectsWith(this.instance.containerCache)
              ? (this.instance.isOver ||
                  ((this.instance.isOver = 1),
                  (this.instance.currentItem = a(e)
                    .clone()
                    .removeAttr("id")
                    .appendTo(this.instance.element)
                    .data("sortable-item", !0)),
                  (this.instance.options._helper = this.instance.options.helper),
                  (this.instance.options.helper = function () {
                    return c.helper[0];
                  }),
                  (b.target = this.instance.currentItem[0]),
                  this.instance._mouseCapture(b, !0),
                  this.instance._mouseStart(b, !0, !0),
                  (this.instance.offset.click.top = d.offset.click.top),
                  (this.instance.offset.click.left = d.offset.click.left),
                  (this.instance.offset.parent.left -=
                    d.offset.parent.left - this.instance.offset.parent.left),
                  (this.instance.offset.parent.top -=
                    d.offset.parent.top - this.instance.offset.parent.top),
                  d._trigger("toSortable", b),
                  (d.dropped = this.instance.element),
                  (d.currentItem = d.element),
                  (this.instance.fromOutside = d)),
                this.instance.currentItem && this.instance._mouseDrag(b))
              : this.instance.isOver &&
                ((this.instance.isOver = 0),
                (this.instance.cancelHelperRemoval = !0),
                (this.instance.options.revert = !1),
                this.instance._trigger(
                  "out",
                  b,
                  this.instance._uiHash(this.instance)
                ),
                this.instance._mouseStop(b, !0),
                (this.instance.options.helper = this.instance.options._helper),
                this.instance.currentItem.remove(),
                this.instance.placeholder && this.instance.placeholder.remove(),
                d._trigger("fromSortable", b),
                (d.dropped = !1));
        });
      },
    }),
    a.ui.plugin.add("draggable", "cursor", {
      start: function (b, c) {
        var d = a("body"),
          e = a(this).data("draggable").options;
        d.css("cursor") && (e._cursor = d.css("cursor")),
          d.css("cursor", e.cursor);
      },
      stop: function (b, c) {
        var d = a(this).data("draggable").options;
        d._cursor && a("body").css("cursor", d._cursor);
      },
    }),
    a.ui.plugin.add("draggable", "opacity", {
      start: function (b, c) {
        var d = a(c.helper),
          e = a(this).data("draggable").options;
        d.css("opacity") && (e._opacity = d.css("opacity")),
          d.css("opacity", e.opacity);
      },
      stop: function (b, c) {
        var d = a(this).data("draggable").options;
        d._opacity && a(c.helper).css("opacity", d._opacity);
      },
    }),
    a.ui.plugin.add("draggable", "scroll", {
      start: function (b, c) {
        var d = a(this).data("draggable");
        d.scrollParent[0] != document &&
          d.scrollParent[0].tagName != "HTML" &&
          (d.overflowOffset = d.scrollParent.offset());
      },
      drag: function (b, c) {
        var d = a(this).data("draggable"),
          e = d.options,
          f = !1;
        if (
          d.scrollParent[0] != document &&
          d.scrollParent[0].tagName != "HTML"
        ) {
          if (!e.axis || e.axis != "x")
            d.overflowOffset.top + d.scrollParent[0].offsetHeight - b.pageY <
            e.scrollSensitivity
              ? (d.scrollParent[0].scrollTop = f =
                  d.scrollParent[0].scrollTop + e.scrollSpeed)
              : b.pageY - d.overflowOffset.top < e.scrollSensitivity &&
                (d.scrollParent[0].scrollTop = f =
                  d.scrollParent[0].scrollTop - e.scrollSpeed);
          if (!e.axis || e.axis != "y")
            d.overflowOffset.left + d.scrollParent[0].offsetWidth - b.pageX <
            e.scrollSensitivity
              ? (d.scrollParent[0].scrollLeft = f =
                  d.scrollParent[0].scrollLeft + e.scrollSpeed)
              : b.pageX - d.overflowOffset.left < e.scrollSensitivity &&
                (d.scrollParent[0].scrollLeft = f =
                  d.scrollParent[0].scrollLeft - e.scrollSpeed);
        } else {
          if (!e.axis || e.axis != "x")
            b.pageY - a(document).scrollTop() < e.scrollSensitivity
              ? (f = a(document).scrollTop(
                  a(document).scrollTop() - e.scrollSpeed
                ))
              : a(window).height() - (b.pageY - a(document).scrollTop()) <
                  e.scrollSensitivity &&
                (f = a(document).scrollTop(
                  a(document).scrollTop() + e.scrollSpeed
                ));
          if (!e.axis || e.axis != "y")
            b.pageX - a(document).scrollLeft() < e.scrollSensitivity
              ? (f = a(document).scrollLeft(
                  a(document).scrollLeft() - e.scrollSpeed
                ))
              : a(window).width() - (b.pageX - a(document).scrollLeft()) <
                  e.scrollSensitivity &&
                (f = a(document).scrollLeft(
                  a(document).scrollLeft() + e.scrollSpeed
                ));
        }
        f !== !1 &&
          a.ui.ddmanager &&
          !e.dropBehaviour &&
          a.ui.ddmanager.prepareOffsets(d, b);
      },
    }),
    a.ui.plugin.add("draggable", "snap", {
      start: function (b, c) {
        var d = a(this).data("draggable"),
          e = d.options;
        (d.snapElements = []),
          a(
            e.snap.constructor != String
              ? e.snap.items || ":data(draggable)"
              : e.snap
          ).each(function () {
            var b = a(this),
              c = b.offset();
            this != d.element[0] &&
              d.snapElements.push({
                item: this,
                width: b.outerWidth(),
                height: b.outerHeight(),
                top: c.top,
                left: c.left,
              });
          });
      },
      drag: function (b, c) {
        var d = a(this).data("draggable"),
          e = d.options,
          f = e.snapTolerance,
          g = c.offset.left,
          h = g + d.helperProportions.width,
          i = c.offset.top,
          j = i + d.helperProportions.height;
        for (var k = d.snapElements.length - 1; k >= 0; k--) {
          var l = d.snapElements[k].left,
            m = l + d.snapElements[k].width,
            n = d.snapElements[k].top,
            o = n + d.snapElements[k].height;
          if (
            !(
              (l - f < g && g < m + f && n - f < i && i < o + f) ||
              (l - f < g && g < m + f && n - f < j && j < o + f) ||
              (l - f < h && h < m + f && n - f < i && i < o + f) ||
              (l - f < h && h < m + f && n - f < j && j < o + f)
            )
          ) {
            d.snapElements[k].snapping &&
              d.options.snap.release &&
              d.options.snap.release.call(
                d.element,
                b,
                a.extend(d._uiHash(), { snapItem: d.snapElements[k].item })
              ),
              (d.snapElements[k].snapping = !1);
            continue;
          }
          if (e.snapMode != "inner") {
            var p = Math.abs(n - j) <= f,
              q = Math.abs(o - i) <= f,
              r = Math.abs(l - h) <= f,
              s = Math.abs(m - g) <= f;
            p &&
              (c.position.top =
                d._convertPositionTo("relative", {
                  top: n - d.helperProportions.height,
                  left: 0,
                }).top - d.margins.top),
              q &&
                (c.position.top =
                  d._convertPositionTo("relative", { top: o, left: 0 }).top -
                  d.margins.top),
              r &&
                (c.position.left =
                  d._convertPositionTo("relative", {
                    top: 0,
                    left: l - d.helperProportions.width,
                  }).left - d.margins.left),
              s &&
                (c.position.left =
                  d._convertPositionTo("relative", { top: 0, left: m }).left -
                  d.margins.left);
          }
          var t = p || q || r || s;
          if (e.snapMode != "outer") {
            var p = Math.abs(n - i) <= f,
              q = Math.abs(o - j) <= f,
              r = Math.abs(l - g) <= f,
              s = Math.abs(m - h) <= f;
            p &&
              (c.position.top =
                d._convertPositionTo("relative", { top: n, left: 0 }).top -
                d.margins.top),
              q &&
                (c.position.top =
                  d._convertPositionTo("relative", {
                    top: o - d.helperProportions.height,
                    left: 0,
                  }).top - d.margins.top),
              r &&
                (c.position.left =
                  d._convertPositionTo("relative", { top: 0, left: l }).left -
                  d.margins.left),
              s &&
                (c.position.left =
                  d._convertPositionTo("relative", {
                    top: 0,
                    left: m - d.helperProportions.width,
                  }).left - d.margins.left);
          }
          !d.snapElements[k].snapping &&
            (p || q || r || s || t) &&
            d.options.snap.snap &&
            d.options.snap.snap.call(
              d.element,
              b,
              a.extend(d._uiHash(), { snapItem: d.snapElements[k].item })
            ),
            (d.snapElements[k].snapping = p || q || r || s || t);
        }
      },
    }),
    a.ui.plugin.add("draggable", "stack", {
      start: function (b, c) {
        var d = a(this).data("draggable").options,
          e = a.makeArray(a(d.stack)).sort(function (b, c) {
            return (
              (parseInt(a(b).css("zIndex"), 10) || 0) -
              (parseInt(a(c).css("zIndex"), 10) || 0)
            );
          });
        if (!e.length) return;
        var f = parseInt(e[0].style.zIndex) || 0;
        a(e).each(function (a) {
          this.style.zIndex = f + a;
        }),
          (this[0].style.zIndex = f + e.length);
      },
    }),
    a.ui.plugin.add("draggable", "zIndex", {
      start: function (b, c) {
        var d = a(c.helper),
          e = a(this).data("draggable").options;
        d.css("zIndex") && (e._zIndex = d.css("zIndex")),
          d.css("zIndex", e.zIndex);
      },
      stop: function (b, c) {
        var d = a(this).data("draggable").options;
        d._zIndex && a(c.helper).css("zIndex", d._zIndex);
      },
    });
})(jQuery);
/*! jQuery UI - v1.8.21 - 2012-06-05
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.effects.core.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
jQuery.effects ||
  (function (a, b) {
    function c(b) {
      var c;
      return b && b.constructor == Array && b.length == 3
        ? b
        : (c = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(
            b
          ))
        ? [parseInt(c[1], 10), parseInt(c[2], 10), parseInt(c[3], 10)]
        : (c = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(
            b
          ))
        ? [
            parseFloat(c[1]) * 2.55,
            parseFloat(c[2]) * 2.55,
            parseFloat(c[3]) * 2.55,
          ]
        : (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b))
        ? [parseInt(c[1], 16), parseInt(c[2], 16), parseInt(c[3], 16)]
        : (c = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b))
        ? [
            parseInt(c[1] + c[1], 16),
            parseInt(c[2] + c[2], 16),
            parseInt(c[3] + c[3], 16),
          ]
        : (c = /rgba\(0, 0, 0, 0\)/.exec(b))
        ? e.transparent
        : e[a.trim(b).toLowerCase()];
    }
    function d(b, d) {
      var e;
      do {
        e = a.curCSS(b, d);
        if ((e != "" && e != "transparent") || a.nodeName(b, "body")) break;
        d = "backgroundColor";
      } while ((b = b.parentNode));
      return c(e);
    }
    function h() {
      var a = document.defaultView
          ? document.defaultView.getComputedStyle(this, null)
          : this.currentStyle,
        b = {},
        c,
        d;
      if (a && a.length && a[0] && a[a[0]]) {
        var e = a.length;
        while (e--)
          (c = a[e]),
            typeof a[c] == "string" &&
              ((d = c.replace(/\-(\w)/g, function (a, b) {
                return b.toUpperCase();
              })),
              (b[d] = a[c]));
      } else for (c in a) typeof a[c] == "string" && (b[c] = a[c]);
      return b;
    }
    function i(b) {
      var c, d;
      for (c in b)
        (d = b[c]),
          (d == null ||
            a.isFunction(d) ||
            c in g ||
            /scrollbar/.test(c) ||
            (!/color/i.test(c) && isNaN(parseFloat(d)))) &&
            delete b[c];
      return b;
    }
    function j(a, b) {
      var c = { _: 0 },
        d;
      for (d in b) a[d] != b[d] && (c[d] = b[d]);
      return c;
    }
    function k(b, c, d, e) {
      typeof b == "object" && ((e = c), (d = null), (c = b), (b = c.effect)),
        a.isFunction(c) && ((e = c), (d = null), (c = {}));
      if (typeof c == "number" || a.fx.speeds[c]) (e = d), (d = c), (c = {});
      return (
        a.isFunction(d) && ((e = d), (d = null)),
        (c = c || {}),
        (d = d || c.duration),
        (d = a.fx.off
          ? 0
          : typeof d == "number"
          ? d
          : d in a.fx.speeds
          ? a.fx.speeds[d]
          : a.fx.speeds._default),
        (e = e || c.complete),
        [b, c, d, e]
      );
    }
    function l(b) {
      return !b || typeof b == "number" || a.fx.speeds[b]
        ? !0
        : typeof b == "string" && !a.effects[b]
        ? !0
        : !1;
    }
    (a.effects = {}),
      a.each(
        [
          "backgroundColor",
          "borderBottomColor",
          "borderLeftColor",
          "borderRightColor",
          "borderTopColor",
          "borderColor",
          "color",
          "outlineColor",
        ],
        function (b, e) {
          a.fx.step[e] = function (a) {
            a.colorInit ||
              ((a.start = d(a.elem, e)),
              (a.end = c(a.end)),
              (a.colorInit = !0)),
              (a.elem.style[e] =
                "rgb(" +
                Math.max(
                  Math.min(
                    parseInt(a.pos * (a.end[0] - a.start[0]) + a.start[0], 10),
                    255
                  ),
                  0
                ) +
                "," +
                Math.max(
                  Math.min(
                    parseInt(a.pos * (a.end[1] - a.start[1]) + a.start[1], 10),
                    255
                  ),
                  0
                ) +
                "," +
                Math.max(
                  Math.min(
                    parseInt(a.pos * (a.end[2] - a.start[2]) + a.start[2], 10),
                    255
                  ),
                  0
                ) +
                ")");
          };
        }
      );
    var e = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
        transparent: [255, 255, 255],
      },
      f = ["add", "remove", "toggle"],
      g = {
        border: 1,
        borderBottom: 1,
        borderColor: 1,
        borderLeft: 1,
        borderRight: 1,
        borderTop: 1,
        borderWidth: 1,
        margin: 1,
        padding: 1,
      };
    (a.effects.animateClass = function (b, c, d, e) {
      return (
        a.isFunction(d) && ((e = d), (d = null)),
        this.queue(function () {
          var g = a(this),
            k = g.attr("style") || " ",
            l = i(h.call(this)),
            m,
            n = g.attr("class") || "";
          a.each(f, function (a, c) {
            b[c] && g[c + "Class"](b[c]);
          }),
            (m = i(h.call(this))),
            g.attr("class", n),
            g.animate(j(l, m), {
              queue: !1,
              duration: c,
              easing: d,
              complete: function () {
                a.each(f, function (a, c) {
                  b[c] && g[c + "Class"](b[c]);
                }),
                  typeof g.attr("style") == "object"
                    ? ((g.attr("style").cssText = ""),
                      (g.attr("style").cssText = k))
                    : g.attr("style", k),
                  e && e.apply(this, arguments),
                  a.dequeue(this);
              },
            });
        })
      );
    }),
      a.fn.extend({
        _addClass: a.fn.addClass,
        addClass: function (b, c, d, e) {
          return c
            ? a.effects.animateClass.apply(this, [{ add: b }, c, d, e])
            : this._addClass(b);
        },
        _removeClass: a.fn.removeClass,
        removeClass: function (b, c, d, e) {
          return c
            ? a.effects.animateClass.apply(this, [{ remove: b }, c, d, e])
            : this._removeClass(b);
        },
        _toggleClass: a.fn.toggleClass,
        toggleClass: function (c, d, e, f, g) {
          return typeof d == "boolean" || d === b
            ? e
              ? a.effects.animateClass.apply(this, [
                  d ? { add: c } : { remove: c },
                  e,
                  f,
                  g,
                ])
              : this._toggleClass(c, d)
            : a.effects.animateClass.apply(this, [{ toggle: c }, d, e, f]);
        },
        switchClass: function (b, c, d, e, f) {
          return a.effects.animateClass.apply(this, [
            { add: c, remove: b },
            d,
            e,
            f,
          ]);
        },
      }),
      a.extend(a.effects, {
        version: "1.8.21",
        save: function (a, b) {
          for (var c = 0; c < b.length; c++)
            b[c] !== null && a.data("ec.storage." + b[c], a[0].style[b[c]]);
        },
        restore: function (a, b) {
          for (var c = 0; c < b.length; c++)
            b[c] !== null && a.css(b[c], a.data("ec.storage." + b[c]));
        },
        setMode: function (a, b) {
          return b == "toggle" && (b = a.is(":hidden") ? "show" : "hide"), b;
        },
        getBaseline: function (a, b) {
          var c, d;
          switch (a[0]) {
            case "top":
              c = 0;
              break;
            case "middle":
              c = 0.5;
              break;
            case "bottom":
              c = 1;
              break;
            default:
              c = a[0] / b.height;
          }
          switch (a[1]) {
            case "left":
              d = 0;
              break;
            case "center":
              d = 0.5;
              break;
            case "right":
              d = 1;
              break;
            default:
              d = a[1] / b.width;
          }
          return { x: d, y: c };
        },
        createWrapper: function (b) {
          if (b.parent().is(".ui-effects-wrapper")) return b.parent();
          var c = {
              width: b.outerWidth(!0),
              height: b.outerHeight(!0),
              float: b.css("float"),
            },
            d = a("<div></div>")
              .addClass("ui-effects-wrapper")
              .css({
                fontSize: "100%",
                background: "transparent",
                border: "none",
                margin: 0,
                padding: 0,
              }),
            e = document.activeElement;
          try {
            e.id;
          } catch (f) {
            e = document.body;
          }
          return (
            b.wrap(d),
            (b[0] === e || a.contains(b[0], e)) && a(e).focus(),
            (d = b.parent()),
            b.css("position") == "static"
              ? (d.css({ position: "relative" }),
                b.css({ position: "relative" }))
              : (a.extend(c, {
                  position: b.css("position"),
                  zIndex: b.css("z-index"),
                }),
                a.each(["top", "left", "bottom", "right"], function (a, d) {
                  (c[d] = b.css(d)),
                    isNaN(parseInt(c[d], 10)) && (c[d] = "auto");
                }),
                b.css({
                  position: "relative",
                  top: 0,
                  left: 0,
                  right: "auto",
                  bottom: "auto",
                })),
            d.css(c).show()
          );
        },
        removeWrapper: function (b) {
          var c,
            d = document.activeElement;
          return b.parent().is(".ui-effects-wrapper")
            ? ((c = b.parent().replaceWith(b)),
              (b[0] === d || a.contains(b[0], d)) && a(d).focus(),
              c)
            : b;
        },
        setTransition: function (b, c, d, e) {
          return (
            (e = e || {}),
            a.each(c, function (a, c) {
              var f = b.cssUnit(c);
              f[0] > 0 && (e[c] = f[0] * d + f[1]);
            }),
            e
          );
        },
      }),
      a.fn.extend({
        effect: function (b, c, d, e) {
          var f = k.apply(this, arguments),
            g = { options: f[1], duration: f[2], callback: f[3] },
            h = g.options.mode,
            i = a.effects[b];
          return a.fx.off || !i
            ? h
              ? this[h](g.duration, g.callback)
              : this.each(function () {
                  g.callback && g.callback.call(this);
                })
            : i.call(this, g);
        },
        _show: a.fn.show,
        show: function (a) {
          if (l(a)) return this._show.apply(this, arguments);
          var b = k.apply(this, arguments);
          return (b[1].mode = "show"), this.effect.apply(this, b);
        },
        _hide: a.fn.hide,
        hide: function (a) {
          if (l(a)) return this._hide.apply(this, arguments);
          var b = k.apply(this, arguments);
          return (b[1].mode = "hide"), this.effect.apply(this, b);
        },
        __toggle: a.fn.toggle,
        toggle: function (b) {
          if (l(b) || typeof b == "boolean" || a.isFunction(b))
            return this.__toggle.apply(this, arguments);
          var c = k.apply(this, arguments);
          return (c[1].mode = "toggle"), this.effect.apply(this, c);
        },
        cssUnit: function (b) {
          var c = this.css(b),
            d = [];
          return (
            a.each(["em", "px", "%", "pt"], function (a, b) {
              c.indexOf(b) > 0 && (d = [parseFloat(c), b]);
            }),
            d
          );
        },
      }),
      (a.easing.jswing = a.easing.swing),
      a.extend(a.easing, {
        def: "easeOutQuad",
        swing: function (b, c, d, e, f) {
          return a.easing[a.easing.def](b, c, d, e, f);
        },
        easeInQuad: function (a, b, c, d, e) {
          return d * (b /= e) * b + c;
        },
        easeOutQuad: function (a, b, c, d, e) {
          return -d * (b /= e) * (b - 2) + c;
        },
        easeInOutQuad: function (a, b, c, d, e) {
          return (b /= e / 2) < 1
            ? (d / 2) * b * b + c
            : (-d / 2) * (--b * (b - 2) - 1) + c;
        },
        easeInCubic: function (a, b, c, d, e) {
          return d * (b /= e) * b * b + c;
        },
        easeOutCubic: function (a, b, c, d, e) {
          return d * ((b = b / e - 1) * b * b + 1) + c;
        },
        easeInOutCubic: function (a, b, c, d, e) {
          return (b /= e / 2) < 1
            ? (d / 2) * b * b * b + c
            : (d / 2) * ((b -= 2) * b * b + 2) + c;
        },
        easeInQuart: function (a, b, c, d, e) {
          return d * (b /= e) * b * b * b + c;
        },
        easeOutQuart: function (a, b, c, d, e) {
          return -d * ((b = b / e - 1) * b * b * b - 1) + c;
        },
        easeInOutQuart: function (a, b, c, d, e) {
          return (b /= e / 2) < 1
            ? (d / 2) * b * b * b * b + c
            : (-d / 2) * ((b -= 2) * b * b * b - 2) + c;
        },
        easeInQuint: function (a, b, c, d, e) {
          return d * (b /= e) * b * b * b * b + c;
        },
        easeOutQuint: function (a, b, c, d, e) {
          return d * ((b = b / e - 1) * b * b * b * b + 1) + c;
        },
        easeInOutQuint: function (a, b, c, d, e) {
          return (b /= e / 2) < 1
            ? (d / 2) * b * b * b * b * b + c
            : (d / 2) * ((b -= 2) * b * b * b * b + 2) + c;
        },
        easeInSine: function (a, b, c, d, e) {
          return -d * Math.cos((b / e) * (Math.PI / 2)) + d + c;
        },
        easeOutSine: function (a, b, c, d, e) {
          return d * Math.sin((b / e) * (Math.PI / 2)) + c;
        },
        easeInOutSine: function (a, b, c, d, e) {
          return (-d / 2) * (Math.cos((Math.PI * b) / e) - 1) + c;
        },
        easeInExpo: function (a, b, c, d, e) {
          return b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c;
        },
        easeOutExpo: function (a, b, c, d, e) {
          return b == e ? c + d : d * (-Math.pow(2, (-10 * b) / e) + 1) + c;
        },
        easeInOutExpo: function (a, b, c, d, e) {
          return b == 0
            ? c
            : b == e
            ? c + d
            : (b /= e / 2) < 1
            ? (d / 2) * Math.pow(2, 10 * (b - 1)) + c
            : (d / 2) * (-Math.pow(2, -10 * --b) + 2) + c;
        },
        easeInCirc: function (a, b, c, d, e) {
          return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c;
        },
        easeOutCirc: function (a, b, c, d, e) {
          return d * Math.sqrt(1 - (b = b / e - 1) * b) + c;
        },
        easeInOutCirc: function (a, b, c, d, e) {
          return (b /= e / 2) < 1
            ? (-d / 2) * (Math.sqrt(1 - b * b) - 1) + c
            : (d / 2) * (Math.sqrt(1 - (b -= 2) * b) + 1) + c;
        },
        easeInElastic: function (a, b, c, d, e) {
          var f = 1.70158,
            g = 0,
            h = d;
          if (b == 0) return c;
          if ((b /= e) == 1) return c + d;
          g || (g = e * 0.3);
          if (h < Math.abs(d)) {
            h = d;
            var f = g / 4;
          } else var f = (g / (2 * Math.PI)) * Math.asin(d / h);
          return (
            -(
              h *
              Math.pow(2, 10 * (b -= 1)) *
              Math.sin(((b * e - f) * 2 * Math.PI) / g)
            ) + c
          );
        },
        easeOutElastic: function (a, b, c, d, e) {
          var f = 1.70158,
            g = 0,
            h = d;
          if (b == 0) return c;
          if ((b /= e) == 1) return c + d;
          g || (g = e * 0.3);
          if (h < Math.abs(d)) {
            h = d;
            var f = g / 4;
          } else var f = (g / (2 * Math.PI)) * Math.asin(d / h);
          return (
            h *
              Math.pow(2, -10 * b) *
              Math.sin(((b * e - f) * 2 * Math.PI) / g) +
            d +
            c
          );
        },
        easeInOutElastic: function (a, b, c, d, e) {
          var f = 1.70158,
            g = 0,
            h = d;
          if (b == 0) return c;
          if ((b /= e / 2) == 2) return c + d;
          g || (g = e * 0.3 * 1.5);
          if (h < Math.abs(d)) {
            h = d;
            var f = g / 4;
          } else var f = (g / (2 * Math.PI)) * Math.asin(d / h);
          return b < 1
            ? -0.5 *
                h *
                Math.pow(2, 10 * (b -= 1)) *
                Math.sin(((b * e - f) * 2 * Math.PI) / g) +
                c
            : h *
                Math.pow(2, -10 * (b -= 1)) *
                Math.sin(((b * e - f) * 2 * Math.PI) / g) *
                0.5 +
                d +
                c;
        },
        easeInBack: function (a, c, d, e, f, g) {
          return (
            g == b && (g = 1.70158), e * (c /= f) * c * ((g + 1) * c - g) + d
          );
        },
        easeOutBack: function (a, c, d, e, f, g) {
          return (
            g == b && (g = 1.70158),
            e * ((c = c / f - 1) * c * ((g + 1) * c + g) + 1) + d
          );
        },
        easeInOutBack: function (a, c, d, e, f, g) {
          return (
            g == b && (g = 1.70158),
            (c /= f / 2) < 1
              ? (e / 2) * c * c * (((g *= 1.525) + 1) * c - g) + d
              : (e / 2) * ((c -= 2) * c * (((g *= 1.525) + 1) * c + g) + 2) + d
          );
        },
        easeInBounce: function (b, c, d, e, f) {
          return e - a.easing.easeOutBounce(b, f - c, 0, e, f) + d;
        },
        easeOutBounce: function (a, b, c, d, e) {
          return (b /= e) < 1 / 2.75
            ? d * 7.5625 * b * b + c
            : b < 2 / 2.75
            ? d * (7.5625 * (b -= 1.5 / 2.75) * b + 0.75) + c
            : b < 2.5 / 2.75
            ? d * (7.5625 * (b -= 2.25 / 2.75) * b + 0.9375) + c
            : d * (7.5625 * (b -= 2.625 / 2.75) * b + 0.984375) + c;
        },
        easeInOutBounce: function (b, c, d, e, f) {
          return c < f / 2
            ? a.easing.easeInBounce(b, c * 2, 0, e, f) * 0.5 + d
            : a.easing.easeOutBounce(b, c * 2 - f, 0, e, f) * 0.5 + e * 0.5 + d;
        },
      });
  })(jQuery);
/*
 *	jQuery carouFredSel 5.6.4
 *	Demo's and documentation:
 *	caroufredsel.frebsite.nl
 *
 *	Copyright (c) 2012 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */

eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < a ? "" : e(parseInt(c / a))) +
        ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if (!"".replace(/^/, String)) {
      while (c--) r[e(c)] = k[c] || e(c);
      k = [
        function (e) {
          return r[e];
        },
      ];
      e = function () {
        return "\\w+";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    "(H($){8($.1P.1J)J;$.1P.1J=H(y,z){8(1g.V==0){1e(N,'5s 4q 6u 1m \"'+1g.3U+'\".');J 1g}8(1g.V>1){J 1g.1K(H(){$(1g).1J(y,z)})}F A=1g,$19=1g[0];8(A.1r('4r')){F B=A.1D('34','3w');A.X('34',['5t',[N]])}Q{F B=O}A.3V=H(o,b,c){o=3W($19,o);F e=['G','1n','T','17','1a','1b'];1m(F a=0,l=e.V;a<l;a++){o[e[a]]=3W($19,o[e[a]])}8(K o.1n=='13'){8(o.1n<=50)o.1n={'G':o.1n};Q o.1n={'1j':o.1n}}Q{8(K o.1n=='1k')o.1n={'1G':o.1n}}8(K o.G=='13')o.G={'P':o.G};Q 8(o.G=='1d')o.G={'P':o.G,'S':o.G,'1l':o.G};8(K o.G!='1o')o.G={};8(b)2u=$.25(N,{},$.1P.1J.4s,o);7=$.25(N,{},$.1P.1J.4s,o);8(K 7.G.12!='1o')7.G.12={};8(7.G.2J==0&&K c=='13'){7.G.2J=c}C.4t=(7.2K);C.2k=(7.2k=='4u'||7.2k=='1t')?'1a':'17';F f=[['S','35','26','1l','5u','2L','1t','2M','1E',0,1,2,3],['1l','5u','2L','S','35','26','2M','1t','3X',3,2,1,0]];F g=f[0].V,5v=(7.2k=='2N'||7.2k=='1t')?0:1;7.d={};1m(F d=0;d<g;d++){7.d[f[0][d]]=f[5v][d]}F h=A.11();1x(K 7.G.P){W'1o':7.G.12.2O=7.G.P.2O;7.G.12.27=7.G.P.27;7.G.P=O;18;W'1k':8(7.G.P=='1d'){7.G.12.1d=N}Q{7.G.12.2l=7.G.P}7.G.P=O;18;W'H':7.G.12.2l=7.G.P;7.G.P=O;18}8(K 7.G.1v=='1y'){7.G.1v=(h.1v(':2P').V>0)?':P':'*'}8(7[7.d['S']]=='T'){7[7.d['S']]=3x(h,7,'26')}8(3Y(7[7.d['S']])&&!7.2K){7[7.d['S']]=3Z(36($1A.3a(),7,'35'),7[7.d['S']]);C.4t=N}8(7[7.d['1l']]=='T'){7[7.d['1l']]=3x(h,7,'2L')}8(!7.G[7.d['S']]){8(7.2K){1e(N,'5w a '+7.d['S']+' 1m 6v G!');7.G[7.d['S']]=3x(h,7,'26')}Q{7.G[7.d['S']]=(4v(h,7,'26'))?'1d':h[7.d['26']](N)}}8(!7.G[7.d['1l']]){7.G[7.d['1l']]=(4v(h,7,'2L'))?'1d':h[7.d['2L']](N)}8(!7[7.d['1l']]){7[7.d['1l']]=7.G[7.d['1l']]}8(!7.G.P&&!7.2K){8(7.G[7.d['S']]=='1d'){7.G.12.1d=N}8(!7.G.12.1d){8(K 7[7.d['S']]=='13'){7.G.P=1L.3y(7[7.d['S']]/7.G[7.d['S']])}Q{F i=36($1A.3a(),7,'35');7.G.P=1L.3y(i/7.G[7.d['S']]);7[7.d['S']]=7.G.P*7.G[7.d['S']];8(!7.G.12.2l)7.1B=O}8(7.G.P=='6w'||7.G.P<1){1e(N,'28 a 4w 13 3z P G: 5w 41 \"1d\".');7.G.12.1d=N}}}8(!7[7.d['S']]){7[7.d['S']]='1d';8(!7.2K&&7.G.1v=='*'&&!7.G.12.1d&&7.G[7.d['S']]!='1d'){7[7.d['S']]=7.G.P*7.G[7.d['S']];7.1B=O}}8(7.G.12.1d){7.3A=(7[7.d['S']]=='1d')?36($1A.3a(),7,'35'):7[7.d['S']];8(7.1B===O){7[7.d['S']]='1d'}7.G.P=2Q(h,7,0)}Q 8(7.G.1v!='*'){7.G.12.42=7.G.P;7.G.P=3B(h,7,0)}8(K 7.1B=='1y'){7.1B=(7[7.d['S']]=='1d')?O:'4x'}7.G.P=2R(7.G.P,7,7.G.12.2l,$19);7.G.12.2m=7.G.P;7.1u=O;8(7.2K){8(!7.G.12.2O)7.G.12.2O=7.G.P;8(!7.G.12.27)7.G.12.27=7.G.P;7.1B=O;7.1i=[0,0,0,0];F j=$1A.1W(':P');8(j)$1A.3b();F k=3Z(36($1A.3a(),7,'35'),7[7.d['S']]);8(K 7[7.d['S']]=='13'&&k<7[7.d['S']]){k=7[7.d['S']]}8(j)$1A.3c();F m=4y(1L.2v(k/7.G[7.d['S']]),7.G.12);8(m>h.V){m=h.V}F n=1L.3y(k/m),4z=7[7.d['1l']],5x=3Y(4z);h.1K(H(){F a=$(1g),4A=n-5y(a,7,'6x');a[7.d['S']](4A);8(5x){a[7.d['1l']](3Z(4A,4z))}});7.G.P=m;7.G[7.d['S']]=n;7[7.d['S']]=m*n}Q{7.1i=5z(7.1i);8(7.1B=='2M')7.1B='1t';8(7.1B=='4B')7.1B='2N';1x(7.1B){W'4x':W'1t':W'2N':8(7[7.d['S']]!='1d'){F p=43(3d(h,7),7);7.1u=N;7.1i[7.d[1]]=p[1];7.1i[7.d[3]]=p[0]}18;2w:7.1B=O;7.1u=(7.1i[0]==0&&7.1i[1]==0&&7.1i[2]==0&&7.1i[3]==0)?O:N;18}}8(K 7.2n=='1s'&&7.2n)7.2n='6y'+A.6z('6A');8(K 7.G.3e!='13')7.G.3e=7.G.P;8(K 7.1n.1j!='13')7.1n.1j=5A;8(K 7.1n.G=='1y')7.1n.G=(7.G.12.1d||7.G.1v!='*')?'P':7.G.P;7.T=3C($19,7.T,'T');7.17=3C($19,7.17);7.1a=3C($19,7.1a);7.1b=3C($19,7.1b,'1b');7.T=$.25(N,{},7.1n,7.T);7.17=$.25(N,{},7.1n,7.17);7.1a=$.25(N,{},7.1n,7.1a);7.1b=$.25(N,{},7.1n,7.1b);8(K 7.1b.44!='1s')7.1b.44=O;8(K 7.1b.3f!='H'&&7.1b.3f!==O)7.1b.3f=$.1P.1J.5B;8(K 7.T.1H!='1s')7.T.1H=N;8(K 7.T.4C!='13')7.T.4C=0;8(K 7.T.45=='1y')7.T.45=N;8(K 7.T.4D!='1s')7.T.4D=N;8(K 7.T.3g!='13')7.T.3g=(7.T.1j<10)?6B:7.T.1j*5;8(7.29){7.29=4E(7.29)}8(I.1e){1e(I,'3h S: '+7.S);1e(I,'3h 1l: '+7.1l);8(7.3A)1e(I,'6C '+7.d['S']+': '+7.3A);1e(I,'5C 6D: '+7.G.S);1e(I,'5C 6E: '+7.G.1l);1e(I,'46 3z G P: '+7.G.P);8(7.T.1H)1e(I,'46 3z G 4F 6F: '+7.T.G);8(7.17.Y)1e(I,'46 3z G 4F 4G: '+7.17.G);8(7.1a.Y)1e(I,'46 3z G 4F 5D: '+7.1a.G)}};A.5E=H(){A.1r('4r',N);F a={'4H':A.16('4H'),'4I':A.16('4I'),'3D':A.16('3D'),'2M':A.16('2M'),'2N':A.16('2N'),'4B':A.16('4B'),'1t':A.16('1t'),'S':A.16('S'),'1l':A.16('1l'),'4J':A.16('4J'),'1E':A.16('1E'),'3X':A.16('3X'),'4K':A.16('4K')};1x(a.3D){W'4L':F b='4L';18;W'5F':F b='5F';18;2w:F b='6G'}$1A.16(a).16({'6H':'2P','3D':b});A.1r('5G',a).16({'4H':'1t','4I':'47','3D':'4L','2M':0,'1t':0,'4J':0,'1E':0,'3X':0,'4K':0});8(7.1u){A.11().1K(H(){F m=2o($(1g).16(7.d['1E']));8(2p(m))m=0;$(1g).1r('1R',m)})}};A.5H=H(){A.4M();A.14(L('4N',I),H(e,a){e.1h();8(!C.20){8(7.T.Y){7.T.Y.2S(2q('48',I))}}C.20=N;8(7.T.1H){7.T.1H=O;A.X(L('2T',I),a)}J N});A.14(L('4O',I),H(e){e.1h();8(C.1S){3E(R)}J N});A.14(L('2T',I),H(e,a,b){e.1h();1F=3i(1F);8(a&&C.1S){R.20=N;F c=2x()-R.2U;R.1j-=c;8(R.1p)R.1p.1j-=c;8(R.1Q)R.1Q.1j-=c;3E(R,O)}8(!C.1X&&!C.1S){8(b)1F.3F+=2x()-1F.2U}8(!C.1X){8(7.T.Y){7.T.Y.2S(2q('5I',I))}}C.1X=N;8(7.T.5J){F d=7.T.3g-1F.3F,3G=3H-1L.2v(d*3H/7.T.3g);7.T.5J.1z($19,3G,d)}J N});A.14(L('1H',I),H(e,b,c,d){e.1h();1F=3i(1F);F v=[b,c,d],t=['1k','13','1s'],a=2V(v,t);F b=a[0],c=a[1],d=a[2];8(b!='17'&&b!='1a')b=C.2k;8(K c!='13')c=0;8(K d!='1s')d=O;8(d){C.20=O;7.T.1H=N}8(!7.T.1H){e.21();J 1e(I,'3h 48: 28 2W.')}8(C.1X){8(7.T.Y){7.T.Y.2y(2q('48',I));7.T.Y.2y(2q('5I',I))}}C.1X=O;1F.2U=2x();F f=7.T.3g+c;3I=f-1F.3F;3G=3H-1L.2v(3I*3H/f);1F.T=6I(H(){8(7.T.5K){7.T.5K.1z($19,3G,3I)}8(C.1S){A.X(L('1H',I),b)}Q{A.X(L(b,I),7.T)}},3I);8(7.T.5L){7.T.5L.1z($19,3G,3I)}J N});A.14(L('2X',I),H(e){e.1h();8(R.20){R.20=O;C.1X=O;C.1S=N;R.2U=2x();2a(R)}Q{A.X(L('1H',I))}J N});A.14(L('17',I)+' '+L('1a',I),H(e,b,f,g){e.1h();8(C.20||A.1W(':2P')){e.21();J 1e(I,'3h 48 6J 2P: 28 2W.')}8(7.G.3e>=M.U){e.21();J 1e(I,'28 5M G ('+M.U+', '+7.G.3e+' 5N): 28 2W.')}F v=[b,f,g],t=['1o','13/1k','H'],a=2V(v,t);F b=a[0],f=a[1],g=a[2];F h=e.4P.1c(I.3j.3J.V);8(K b!='1o'||b==2b)b=7[h];8(K g=='H')b.22=g;8(K f!='13'){8(7.G.1v!='*'){f='P'}Q{F i=[f,b.G,7[h].G];1m(F a=0,l=i.V;a<l;a++){8(K i[a]=='13'||i[a]=='5O'||i[a]=='P'){f=i[a];18}}}1x(f){W'5O':e.21();J A.1D(h+'6K',[b,g]);18;W'P':8(!7.G.12.1d&&7.G.1v=='*'){f=7.G.P}18}}8(R.20){A.X(L('2X',I));A.X(L('3k',I),[h,[b,f,g]]);e.21();J 1e(I,'3h 6L 2W.')}8(b.1j>0){8(C.1S){8(b.3k)A.X(L('3k',I),[h,[b,f,g]]);e.21();J 1e(I,'3h 6M 2W.')}}8(b.4Q&&!b.4Q.1z($19)){e.21();J 1e(I,'6N \"4Q\" 6O O.')}1F.3F=0;A.X(L('5P'+h,I),[b,f]);8(7.29){F s=7.29,c=[b,f];1m(F j=0,l=s.V;j<l;j++){F d=h;8(!s[j][2])d=(d=='17')?'1a':'17';8(!s[j][1])c[0]=s[j][0].1D('34',['5Q',d]);c[1]=f+s[j][3];s[j][0].X('34',['5P'+d,c])}}J N});A.14(L('6P',I),H(e,f,g){e.1h();F h=A.11();8(!7.1M){8(M.Z==0){8(7.3l){A.X(L('1a',I),M.U-1)}J e.21()}}8(7.1u)1N(h,7);8(K g!='13'){8(7.G.12.1d){g=4a(h,7,M.U-1)}Q 8(7.G.1v!='*'){F i=(K f.G=='13')?f.G:4R(A,7);g=5R(h,7,M.U-1,i)}Q{g=7.G.P}g=4b(g,7,f.G,$19)}8(!7.1M){8(M.U-g<M.Z){g=M.U-M.Z}}7.G.12.2m=7.G.P;8(7.G.12.1d){F j=2Q(h,7,M.U-g);8(7.G.P+g<=j&&g<M.U){g++;j=2Q(h,7,M.U-g)}7.G.P=2R(j,7,7.G.12.2l,$19)}Q 8(7.G.1v!='*'){F j=3B(h,7,M.U-g);7.G.P=2R(j,7,7.G.12.2l,$19)}8(7.1u)1N(h,7,N);8(g==0){e.21();J 1e(I,'0 G 41 1n: 28 2W.')}1e(I,'5S '+g+' G 4G.');M.Z+=g;23(M.Z>=M.U){M.Z-=M.U}8(!7.1M){8(M.Z==0&&f.4c)f.4c.1z($19);8(!7.3l)2z(7,M.Z,I)}A.11().1c(M.U-g,M.U).6Q(A);8(M.U<7.G.P+g){A.11().1c(0,(7.G.P+g)-M.U).4d(N).3K(A)}F h=A.11(),2r=5T(h,7,g),1T=5U(h,7),2c=h.1O(g-1),2d=2r.2Y(),2A=1T.2Y();8(7.1u)1N(h,7);8(7.1B){F p=43(1T,7),k=p[0],2s=p[1]}Q{F k=0,2s=0}F l=(k<0)?7.1i[7.d[3]]:0;8(f.1I=='5V'&&7.G.P<g){F m=h.1c(7.G.12.2m,g),4e=7.G[7.d['S']];m.1K(H(){F a=$(1g);a.1r('4f',a.1W(':2P')).3b()});7.G[7.d['S']]='1d'}Q{F m=O}F n=3m(h.1c(0,g),7,'S'),2e=4g(2B(1T,7,N),7,!7.1u);8(m)7.G[7.d['S']]=4e;8(7.1u){1N(h,7,N);8(2s>=0){1N(2d,7,7.1i[7.d[1]])}1N(2c,7,7.1i[7.d[3]])}8(7.1B){7.1i[7.d[1]]=2s;7.1i[7.d[3]]=k}F o={},1w=f.1j;8(f.1I=='47')1w=0;Q 8(1w=='T')1w=7.1n.1j/7.1n.G*g;Q 8(1w<=0)1w=0;Q 8(1w<10)1w=n/1w;R=24(1w,f.1G);8(7[7.d['S']]=='1d'||7[7.d['1l']]=='1d'){R.1f.1q([$1A,2e])}8(7.1u){F q=7.1i[7.d[3]];8(2A.4S(2c).V){F r={};r[7.d['1E']]=2c.1r('1R');8(k<0)2c.16(r);Q R.1f.1q([2c,r])}8(2A.4S(2d).V){F s={};s[7.d['1E']]=2d.1r('1R');R.1f.1q([2d,s])}8(2s>=0){F t={};t[7.d['1E']]=2A.1r('1R')+7.1i[7.d[1]];R.1f.1q([2A,t])}}Q{F q=0}o[7.d['1t']]=q;F u=[2r,1T,2e,1w];8(f.2f)f.2f.3L($19,u);1Y.2f=3M(1Y.2f,$19,u);1x(f.1I){W'2C':W'2g':W'2D':W'2h':R.1p=24(R.1j,R.1G);R.1Q=24(R.1j,R.1G);R.1j=0;18}1x(f.1I){W'2g':W'2D':W'2h':F v=A.4d().3K($1A);18}1x(f.1I){W'2h':v.11().1c(0,g).1U();W'2g':W'2D':v.11().1c(7.G.P).1U();18}1x(f.1I){W'2C':R.1p.1f.1q([A,{'2i':0}]);18;W'2g':v.16({'2i':0});R.1p.1f.1q([A,{'S':'+=0'},H(){v.1U()}]);R.1Q.1f.1q([v,{'2i':1}]);18;W'2D':R=4T(R,A,v,7,N);18;W'2h':R=4U(R,A,v,7,N,g);18}F w=H(){F b=7.G.P+g-M.U;8(b>0){A.11().1c(M.U).1U();2r=$(A.11().1c(M.U-(7.G.P-b)).4h().5W(A.11().1c(0,b).4h()))}8(m){m.1K(H(){F a=$(1g);8(!a.1r('4f'))a.3c()})}8(7.1u){F c=A.11().1O(7.G.P+g-1);c.16(7.d['1E'],c.1r('1R'))}R.1f=[];8(R.1p)R.1p=24(R.4V,R.1G);F d=H(){1x(f.1I){W'2C':W'2g':A.16('1v','');18}R.1Q=24(0,2b);C.1S=O;F a=[2r,1T,2e];8(f.22)f.22.3L($19,a);1Y.22=3M(1Y.22,$19,a);8(1V.V){A.X(L(1V[0][0],I),1V[0][1]);1V.5X()}8(!C.1X)A.X(L('1H',I))};1x(f.1I){W'2C':R.1p.1f.1q([A,{'2i':1},d]);2a(R.1p);18;W'2h':R.1p.1f.1q([A,{'S':'+=0'},d]);2a(R.1p);18;2w:d();18}};R.1f.1q([A,o,w]);C.1S=N;A.16(7.d['1t'],-(n-l));1F=3i(1F);2a(R);4W(7.2n,A.1D(L('3w',I)));A.X(L('2E',I),[O,2e]);J N});A.14(L('6R',I),H(e,f,g){e.1h();F h=A.11();8(!7.1M){8(M.Z==7.G.P){8(7.3l){A.X(L('17',I),M.U-1)}J e.21()}}8(7.1u)1N(h,7);8(K g!='13'){8(7.G.1v!='*'){F i=(K f.G=='13')?f.G:4R(A,7);g=5Y(h,7,0,i)}Q{g=7.G.P}g=4b(g,7,f.G,$19)}F j=(M.Z==0)?M.U:M.Z;8(!7.1M){8(7.G.12.1d){F k=2Q(h,7,g),i=4a(h,7,j-1)}Q{F k=7.G.P,i=7.G.P}8(g+k>j){g=j-i}}7.G.12.2m=7.G.P;8(7.G.12.1d){F k=4X(h,7,g,j);23(7.G.P-g>=k&&g<M.U){g++;k=4X(h,7,g,j)}7.G.P=2R(k,7,7.G.12.2l,$19)}Q 8(7.G.1v!='*'){F k=3B(h,7,g);7.G.P=2R(k,7,7.G.12.2l,$19)}8(7.1u)1N(h,7,N);8(g==0){e.21();J 1e(I,'0 G 41 1n: 28 2W.')}1e(I,'5S '+g+' G 5D.');M.Z-=g;23(M.Z<0){M.Z+=M.U}8(!7.1M){8(M.Z==7.G.P&&f.4c)f.4c.1z($19);8(!7.3l)2z(7,M.Z,I)}8(M.U<7.G.P+g){A.11().1c(0,(7.G.P+g)-M.U).4d(N).3K(A)}F h=A.11(),2r=4Y(h,7),1T=4Z(h,7,g),2c=h.1O(g-1),2d=2r.2Y(),2A=1T.2Y();8(7.1u)1N(h,7);8(7.1B){F p=43(1T,7),l=p[0],2s=p[1]}Q{F l=0,2s=0}8(f.1I=='5V'&&7.G.12.2m<g){F m=h.1c(7.G.12.2m,g),4e=7.G[7.d['S']];m.1K(H(){F a=$(1g);a.1r('4f',a.1W(':2P')).3b()});7.G[7.d['S']]='1d'}Q{F m=O}F n=3m(h.1c(0,g),7,'S'),2e=4g(2B(1T,7,N),7,!7.1u);8(m)7.G[7.d['S']]=4e;8(7.1B){8(7.1i[7.d[1]]<0){7.1i[7.d[1]]=0}}8(7.1u){1N(h,7,N);1N(2d,7,7.1i[7.d[1]])}8(7.1B){7.1i[7.d[1]]=2s;7.1i[7.d[3]]=l}F o={},1w=f.1j;8(f.1I=='47')1w=0;Q 8(1w=='T')1w=7.1n.1j/7.1n.G*g;Q 8(1w<=0)1w=0;Q 8(1w<10)1w=n/1w;R=24(1w,f.1G);8(7[7.d['S']]=='1d'||7[7.d['1l']]=='1d'){R.1f.1q([$1A,2e])}8(7.1u){F q=2A.1r('1R');8(2s>=0){q+=7.1i[7.d[1]]}2A.16(7.d['1E'],q);8(2c.4S(2d).V){F r={};r[7.d['1E']]=2d.1r('1R');R.1f.1q([2d,r])}F s=2c.1r('1R');8(l>=0){s+=7.1i[7.d[3]]}F t={};t[7.d['1E']]=s;R.1f.1q([2c,t])}o[7.d['1t']]=-n;8(l<0){o[7.d['1t']]+=l}F u=[2r,1T,2e,1w];8(f.2f)f.2f.3L($19,u);1Y.2f=3M(1Y.2f,$19,u);1x(f.1I){W'2C':W'2g':W'2D':W'2h':R.1p=24(R.1j,R.1G);R.1Q=24(R.1j,R.1G);R.1j=0;18}1x(f.1I){W'2g':W'2D':W'2h':F v=A.4d().3K($1A);18}1x(f.1I){W'2h':v.11().1c(7.G.12.2m).1U();18;W'2g':W'2D':v.11().1c(0,g).1U();v.11().1c(7.G.P).1U();18}1x(f.1I){W'2C':R.1p.1f.1q([A,{'2i':0}]);18;W'2g':v.16({'2i':0});R.1p.1f.1q([A,{'S':'+=0'},H(){v.1U()}]);R.1Q.1f.1q([v,{'2i':1}]);18;W'2D':R=4T(R,A,v,7,O);18;W'2h':R=4U(R,A,v,7,O,g);18}F w=H(){F b=7.G.P+g-M.U,5Z=(7.1u)?7.1i[7.d[3]]:0;A.16(7.d['1t'],5Z);8(b>0){A.11().1c(M.U).1U()}F c=A.11().1c(0,g).3K(A).2Y();8(b>0){1T=3d(h,7)}8(m){m.1K(H(){F a=$(1g);8(!a.1r('4f'))a.3c()})}8(7.1u){8(M.U<7.G.P+g){F d=A.11().1O(7.G.P-1);d.16(7.d['1E'],d.1r('1R')+7.1i[7.d[3]])}c.16(7.d['1E'],c.1r('1R'))}R.1f=[];8(R.1p)R.1p=24(R.4V,R.1G);F e=H(){1x(f.1I){W'2C':W'2g':A.16('1v','');18}R.1Q=24(0,2b);C.1S=O;F a=[2r,1T,2e];8(f.22)f.22.3L($19,a);1Y.22=3M(1Y.22,$19,a);8(1V.V){A.X(L(1V[0][0],I),1V[0][1]);1V.5X()}8(!C.1X)A.X(L('1H',I))};1x(f.1I){W'2C':R.1p.1f.1q([A,{'2i':1},e]);2a(R.1p);18;W'2h':R.1p.1f.1q([A,{'S':'+=0'},e]);2a(R.1p);18;2w:e();18}};R.1f.1q([A,o,w]);C.1S=N;1F=3i(1F);2a(R);4W(7.2n,A.1D(L('3w',I)));A.X(L('2E',I),[O,2e]);J N});A.14(L('2Z',I),H(e,b,c,d,f,g,h){e.1h();F v=[b,c,d,f,g,h],t=['1k/13/1o','13','1s','1o','1k','H'],a=2V(v,t);F f=a[3],g=a[4],h=a[5];b=3n(a[0],a[1],a[2],M,A);8(b==0)J;8(K f!='1o')f=O;8(C.1S){8(K f!='1o'||f.1j>0)J O}8(g!='17'&&g!='1a'){8(7.1M){8(b<=M.U/2)g='1a';Q g='17'}Q{8(M.Z==0||M.Z>b)g='1a';Q g='17'}}8(g=='17')b=M.U-b;A.X(L(g,I),[f,b,h]);J N});A.14(L('6S',I),H(e,a,b){e.1h();F c=A.1D(L('3N',I));J A.1D(L('51',I),[c-1,a,'17',b])});A.14(L('6T',I),H(e,a,b){e.1h();F c=A.1D(L('3N',I));J A.1D(L('51',I),[c+1,a,'1a',b])});A.14(L('51',I),H(e,a,b,c,d){e.1h();8(K a!='13')a=A.1D(L('3N',I));F f=7.1b.G||7.G.P,27=1L.2v(M.U/f)-1;8(a<0)a=27;8(a>27)a=0;J A.1D(L('2Z',I),[a*f,0,N,b,c,d])});A.14(L('60',I),H(e,s){e.1h();8(s)s=3n(s,0,N,M,A);Q s=0;s+=M.Z;8(s!=0){23(s>M.U)s-=M.U;A.6U(A.11().1c(s,M.U))}J N});A.14(L('29',I),H(e,s){e.1h();8(s)s=4E(s);Q 8(7.29)s=7.29;Q J 1e(I,'5s 6V 41 29.');F n=A.1D(L('3w',I)),x=N;1m(F j=0,l=s.V;j<l;j++){8(!s[j][0].1D(L('2Z',I),[n,s[j][3],N])){x=O}}J x});A.14(L('3k',I),H(e,a,b){e.1h();8(K a=='H'){a.1z($19,1V)}Q 8(31(a)){1V=a}Q 8(K a!='1y'){1V.1q([a,b])}J 1V});A.14(L('6W',I),H(e,b,c,d,f){e.1h();F v=[b,c,d,f],t=['1k/1o','1k/13/1o','1s','13'],a=2V(v,t);F b=a[0],c=a[1],d=a[2],f=a[3];8(K b=='1o'&&K b.3o=='1y')b=$(b);8(K b=='1k')b=$(b);8(K b!='1o'||K b.3o=='1y'||b.V==0)J 1e(I,'28 a 4w 1o.');8(K c=='1y')c='4i';8(7.1u){b.1K(H(){F m=2o($(1g).16(7.d['1E']));8(2p(m))m=0;$(1g).1r('1R',m)})}F g=c,3O='3O';8(c=='4i'){8(d){8(M.Z==0){c=M.U-1;3O='61'}Q{c=M.Z;M.Z+=b.V}8(c<0)c=0}Q{c=M.U-1;3O='61'}}Q{c=3n(c,f,d,M,A)}8(g!='4i'&&!d){8(c<M.Z)M.Z+=b.V}8(M.Z>=M.U)M.Z-=M.U;F h=A.11().1O(c);8(h.V){h[3O](b)}Q{A.62(b)}M.U=A.11().V;F i=A.1D('52');3p(7,M.U,I);2z(7,M.Z,I);A.X(L('53',I));A.X(L('2E',I),[N,i]);J N});A.14(L('63',I),H(e,c,d,f){e.1h();F v=[c,d,f],t=['1k/13/1o','1s','13'],a=2V(v,t);c=a[0];d=a[1];f=a[2];F g=O;8(c 64 $&&c.V>1){h=$();c.1K(H(i,a){F b=A.X(L('63',I),[$(1g),d,f]);8(b)h=h.6X(b)});J h}8(K c=='1y'||c=='4i'){h=A.11().2Y()}Q{c=3n(c,f,d,M,A);F h=A.11().1O(c);8(h.V){8(c<M.Z)M.Z-=h.V}}8(h&&h.V){h.6Y();M.U=A.11().V;F j=A.1D('52');3p(7,M.U,I);2z(7,M.Z,I);A.X(L('2E',I),[N,j])}J h});A.14(L('2f',I)+' '+L('22',I),H(e,a){e.1h();F b=e.4P.1c(I.3j.3J.V);8(31(a))1Y[b]=a;8(K a=='H')1Y[b].1q(a);J 1Y[b]});A.14(L('3w',I),H(e,a){e.1h();8(M.Z==0)F b=0;Q F b=M.U-M.Z;8(K a=='H')a.1z($19,b);J b});A.14(L('3N',I),H(e,a){e.1h();F b=7.1b.G||7.G.P;F c=1L.2v(M.U/b-1);8(M.Z==0)F d=0;Q 8(M.Z<M.U%b)F d=0;Q 8(M.Z==b&&!7.1M)F d=c;Q F d=1L.6Z((M.U-M.Z)/b);8(d<0)d=0;8(d>c)d=c;8(K a=='H')a.1z($19,d);J d});A.14(L('70',I),H(e,a){e.1h();$i=3d(A.11(),7);8(K a=='H')a.1z($19,$i);J $i});A.14(L('1c',I),H(e,f,l,b){e.1h();8(M.U==0)J O;F v=[f,l,b],t=['13','13','H'],a=2V(v,t);f=(K a[0]=='13')?a[0]:0;l=(K a[1]=='13')?a[1]:M.U;b=a[2];f+=M.Z;l+=M.Z;23(f>M.U){f-=M.U}23(l>M.U){l-=M.U}23(f<0){f+=M.U}23(l<0){l+=M.U}F c=A.11();8(l>f){F d=c.1c(f,l)}Q{F d=$(c.1c(f,M.U).4h().5W(c.1c(0,l).4h()))}8(K b=='H')b.1z($19,d);J d});A.14(L('1X',I)+' '+L('20',I)+' '+L('1S',I),H(e,a){e.1h();F b=e.4P.1c(I.3j.3J.V);8(K a=='H')a.1z($19,C[b]);J C[b]});A.14(L('5Q',I),H(e,a,b,c){e.1h();F d=O;8(K a=='H'){a.1z($19,7)}Q 8(K a=='1o'){2u=$.25(N,{},2u,a);8(b!==O)d=N;Q 7=$.25(N,{},7,a)}Q 8(K a!='1y'){8(K b=='H'){F f=4j('7.'+a);8(K f=='1y')f='';b.1z($19,f)}Q 8(K b!='1y'){8(K c!=='1s')c=N;4j('2u.'+a+' = b');8(c!==O)d=N;Q 4j('7.'+a+' = b')}Q{J 4j('7.'+a)}}8(d){1N(A.11(),7);A.3V(2u);A.54();F g=3P(A,7,O);A.X(L('2E',I),[N,g])}J 7});A.14(L('53',I),H(e,a,b){e.1h();8(K a=='1y'||a.V==0)a=$('71');Q 8(K a=='1k')a=$(a);8(K a!='1o')J 1e(I,'28 a 4w 1o.');8(K b!='1k'||b.V==0)b='a.65';a.72(b).1K(H(){F h=1g.66||'';8(h.V>0&&A.11().68($(h))!=-1){$(1g).1Z('55').55(H(e){e.2j();A.X(L('2Z',I),h)})}});J N});A.14(L('2E',I),H(e,b,c){e.1h();8(!7.1b.1C)J;8(b){F d=7.1b.G||7.G.P,l=1L.2v(M.U/d);8(7.1b.3f){7.1b.1C.11().1U();7.1b.1C.1K(H(){1m(F a=0;a<l;a++){F i=A.11().1O(3n(a*d,0,N,M,A));$(1g).62(7.1b.3f(a+1,i))}})}7.1b.1C.1K(H(){$(1g).11().1Z(7.1b.3q).1K(H(a){$(1g).14(7.1b.3q,H(e){e.2j();A.X(L('2Z',I),[a*d,0,N,7.1b])})})})}7.1b.1C.1K(H(){$(1g).11().2y(2q('69',I)).1O(A.1D(L('3N',I))).2S(2q('69',I))});J N});A.14(L('52',I),H(e){F a=A.11(),3Q=7.G.P;8(7.G.12.1d)3Q=2Q(a,7,0);Q 8(7.G.1v!='*')3Q=3B(a,7,0);8(!7.1M&&M.Z!=0&&3Q>M.Z){8(7.G.12.1d){F b=4a(a,7,M.Z)-M.Z}Q 8(7.G.1v!='*'){F b=6a(a,7,M.Z)-M.Z}Q{b=7.G.P-M.Z}1e(I,'73 74-1M: 75 '+b+' G 4G.');A.X('17',b)}7.G.P=2R(3Q,7,7.G.12.2l,$19);J 3P(A,7)});A.14(L('5t',I),H(e,a){e.1h();1F=3i(1F);A.1r('4r',O);A.X(L('4O',I));8(a){A.X(L('60',I))}8(7.1u){1N(A.11(),7)}A.16(A.1r('5G'));A.4M();A.56();$1A.76(A);J N});A.14('34',H(e,n,o){e.1h();J A.1D(L(n,I),o)})};A.4M=H(){A.1Z(L('',I));A.1Z(L('',I,O));A.1Z('34')};A.54=H(){A.56();3p(7,M.U,I);2z(7,M.Z,I);8(7.T.2t){F c=3r(7.T.2t);$1A.14(L('4k',I,O),H(){A.X(L('2T',I),c)}).14(L('4l',I,O),H(){A.X(L('2X',I))})}8(7.T.Y){7.T.Y.14(L(7.T.3q,I,O),H(e){e.2j();F a=O,c=2b;8(C.1X){a='1H'}Q 8(7.T.45){a='2T';c=3r(7.T.45)}8(a){A.X(L(a,I),c)}})}8(7.17.Y){7.17.Y.14(L(7.17.3q,I,O),H(e){e.2j();A.X(L('17',I))});8(7.17.2t){F c=3r(7.17.2t);7.17.Y.14(L('4k',I,O),H(){A.X(L('2T',I),c)}).14(L('4l',I,O),H(){A.X(L('2X',I))})}}8(7.1a.Y){7.1a.Y.14(L(7.1a.3q,I,O),H(e){e.2j();A.X(L('1a',I))});8(7.1a.2t){F c=3r(7.1a.2t);7.1a.Y.14(L('4k',I,O),H(){A.X(L('2T',I),c)}).14(L('4l',I,O),H(){A.X(L('2X',I))})}}8($.1P.2F){8(7.17.2F){8(!C.57){C.57=N;$1A.2F(H(e,a){8(a>0){e.2j();F b=59(7.17.2F);A.X(L('17',I),b)}})}}8(7.1a.2F){8(!C.5a){C.5a=N;$1A.2F(H(e,a){8(a<0){e.2j();F b=59(7.1a.2F);A.X(L('1a',I),b)}})}}}8($.1P.3R){F d=(7.17.5b)?H(){A.X(L('17',I))}:2b,3S=(7.1a.5b)?H(){A.X(L('1a',I))}:2b;8(3S||3S){8(!C.3R){C.3R=N;F f={'77':30,'78':30,'79':N};1x(7.2k){W'4u':W'6b':f.7a=d;f.7b=3S;18;2w:f.7c=3S;f.7d=d}$1A.3R(f)}}}8(7.1b.1C){8(7.1b.2t){F c=3r(7.1b.2t);7.1b.1C.14(L('4k',I,O),H(){A.X(L('2T',I),c)}).14(L('4l',I,O),H(){A.X(L('2X',I))})}}8(7.17.2G||7.1a.2G){$(3T).14(L('6c',I,O,N,N),H(e){F k=e.6d;8(k==7.1a.2G){e.2j();A.X(L('1a',I))}8(k==7.17.2G){e.2j();A.X(L('17',I))}})}8(7.1b.44){$(3T).14(L('6c',I,O,N,N),H(e){F k=e.6d;8(k>=49&&k<58){k=(k-49)*7.G.P;8(k<=M.U){e.2j();A.X(L('2Z',I),[k,0,N,7.1b])}}})}8(7.T.1H){A.X(L('1H',I),7.T.4C)}8(C.4t){F g=$(3s),5c=g.S(),5d=g.1l();g.14(L('7e',I,O,N,N),H(e){8(g.S()!=5c||g.1l()!=5d){A.X(L('4O',I));8(7.T.4D&&!C.1X){A.X(L('1H',I))}1N(A.11(),7);A.3V(2u);F a=3P(A,7,O);3p(7,M.U,I);2z(7,M.Z,I);A.X(L('2E',I),[N,a]);5c=g.S();5d=g.1l()}})}};A.56=H(){F a=L('',I),3t=L('',I,O);5e=L('',I,O,N,N);$(3T).1Z(5e);$(3s).1Z(5e);$1A.1Z(3t);8(7.T.Y)7.T.Y.1Z(3t);8(7.17.Y)7.17.Y.1Z(3t);8(7.1a.Y)7.1a.Y.1Z(3t);8(7.1b.1C){7.1b.1C.1Z(3t);8(7.1b.3f){7.1b.1C.11().1U()}}3p(7,'3b',I);2z(7,'2y',I)};F C={'2k':'1a','1X':N,'1S':O,'20':O,'5a':O,'57':O,'3R':O},M={'U':A.11().V,'Z':0},1F={'7f':2b,'T':2b,'3k':2b,'2U':2x(),'3F':0},R={'20':O,'1j':0,'2U':0,'1G':'','1f':[]},1Y={'2f':[],'22':[]},1V=[],I=$.25(N,{},$.1P.1J.6e,z),7={},2u=y,$1A=A.7g('<'+I.5f.4q+' 7h=\"'+I.5f.6f+'\" />').3a();I.3U=A.3U;I.4m=$.1P.1J.4m++;A.3V(2u,N,B);A.5E();A.5H();A.54();8(31(7.G.2J)){F D=7.G.2J}Q{F D=[];8(7.G.2J!=0){D.1q(7.G.2J)}}8(7.2n){D.7i(6g(7.2n))}8(D.V>0){1m(F a=0,l=D.V;a<l;a++){F s=D[a];8(s==0){5g}8(s===N){s=3s.7j.66;8(s.V<1){5g}}Q 8(s==='6h'){s=1L.3y(1L.6h()*M.U)}8(A.1D(L('2Z',I),[s,0,N,{1I:'47'}])){18}}}F E=3P(A,7,O),6i=3d(A.11(),7);8(7.6j){7.6j.1z($19,6i,E)}A.X(L('2E',I),[N,E]);A.X(L('53',I));J A};$.1P.1J.4m=1;$.1P.1J.4s={'29':O,'3l':N,'1M':N,'2K':O,'2k':'1t','G':{'2J':0},'1n':{'1G':'7k','1j':5A,'2t':O,'2F':O,'5b':O,'3q':'55','3k':O}};$.1P.1J.6e={'1e':O,'3j':{'3J':'','6k':'7l'},'5f':{'4q':'7m','6f':'7n'},'5h':{}};$.1P.1J.5B=H(a,b){J'<a 7o=\"#\"><6l>'+a+'</6l></a>'};H 24(d,e){J{1f:[],1j:d,4V:d,1G:e,2U:2x()}}H 2a(s){8(K s.1p=='1o'){2a(s.1p)}1m(F a=0,l=s.1f.V;a<l;a++){F b=s.1f[a];8(!b)5g;8(b[3])b[0].4N();b[0].6m(b[1],{6n:b[2],1j:s.1j,1G:s.1G})}8(K s.1Q=='1o'){2a(s.1Q)}}H 3E(s,c){8(K c!='1s')c=N;8(K s.1p=='1o'){3E(s.1p,c)}1m(F a=0,l=s.1f.V;a<l;a++){F b=s.1f[a];b[0].4N(N);8(c){b[0].16(b[1]);8(K b[2]=='H')b[2]()}}8(K s.1Q=='1o'){3E(s.1Q,c)}}H 3i(t){8(t.T)7p(t.T);J t}H 3M(b,t,c){8(b.V){1m(F a=0,l=b.V;a<l;a++){b[a].3L(t,c)}}J[]}H 7q(a,c,x,d,f){F o={'1j':d,'1G':a.1G};8(K f=='H')o.6n=f;c.6m({2i:x},o)}H 4T(a,b,c,o,d){F e=2B(4Y(b.11(),o),o,N)[0],5i=2B(c.11(),o,N)[0],4n=(d)?-5i:e,2H={},3u={};2H[o.d['S']]=5i;2H[o.d['1t']]=4n;3u[o.d['1t']]=0;a.1p.1f.1q([b,{'2i':1}]);a.1Q.1f.1q([c,3u,H(){$(1g).1U()}]);c.16(2H);J a}H 4U(a,b,c,o,d,n){F e=2B(4Z(b.11(),o,n),o,N)[0],5j=2B(c.11(),o,N)[0],4n=(d)?-5j:e,2H={},3u={};2H[o.d['S']]=5j;2H[o.d['1t']]=0;3u[o.d['1t']]=4n;a.1Q.1f.1q([c,3u,H(){$(1g).1U()}]);c.16(2H);J a}H 3p(o,t,c){8(t=='3c'||t=='3b'){F f=t}Q 8(o.G.3e>=t){1e(c,'28 5M G: 7r 7s ('+t+' G, '+o.G.3e+' 5N).');F f='3b'}Q{F f='3c'}F s=(f=='3c')?'2y':'2S',h=2q('2P',c);8(o.T.Y)o.T.Y[f]()[s](h);8(o.17.Y)o.17.Y[f]()[s](h);8(o.1a.Y)o.1a.Y[f]()[s](h);8(o.1b.1C)o.1b.1C[f]()[s](h)}H 2z(o,f,c){8(o.1M||o.3l)J;F a=(f=='2y'||f=='2S')?f:O,4o=2q('7t',c);8(o.T.Y&&a){o.T.Y[a](4o)}8(o.17.Y){F b=a||(f==0)?'2S':'2y';o.17.Y[b](4o)}8(o.1a.Y){F b=a||(f==o.G.P)?'2S':'2y';o.1a.Y[b](4o)}}H 3W(a,b){8(K b=='H')b=b.1z(a);8(K b=='1y')b={};J b}H 3C(a,b,c){8(K c!='1k')c='';b=3W(a,b);8(K b=='1k'){F d=5k(b);8(d==-1)b=$(b);Q b=d}8(c=='1b'){8(K b=='1s')b={'44':b};8(K b.3o!='1y')b={'1C':b};8(K b.1C=='H')b.1C=b.1C.1z(a);8(K b.1C=='1k')b.1C=$(b.1C);8(K b.G!='13')b.G=O}Q 8(c=='T'){8(K b.3o!='1y')b={'Y':b};8(K b=='1s')b={'1H':b};8(K b=='13')b={'3g':b};8(K b.Y=='H')b.Y=b.Y.1z(a);8(K b.Y=='1k')b.Y=$(b.Y)}Q{8(K b.3o!='1y')b={'Y':b};8(K b=='13')b={'2G':b};8(K b.Y=='H')b.Y=b.Y.1z(a);8(K b.Y=='1k')b.Y=$(b.Y);8(K b.2G=='1k')b.2G=5k(b.2G)}J b}H 3n(a,b,c,d,e){8(K a=='1k'){8(2p(a))a=$(a);Q a=2o(a)}8(K a=='1o'){8(K a.3o=='1y')a=$(a);a=e.11().68(a);8(a==-1)a=0;8(K c!='1s')c=O}Q{8(K c!='1s')c=N}8(2p(a))a=0;Q a=2o(a);8(2p(b))b=0;Q b=2o(b);8(c){a+=d.Z}a+=b;8(d.U>0){23(a>=d.U){a-=d.U}23(a<0){a+=d.U}}J a}H 4a(i,o,s){F t=0,x=0;1m(F a=s;a>=0;a--){F j=i.1O(a);t+=(j.1W(':P'))?j[o.d['26']](N):0;8(t>o.3A)J x;8(a==0)a=i.V;x++}}H 6a(i,o,s){J 5l(i,o.G.1v,o.G.12.42,s)}H 5R(i,o,s,m){J 5l(i,o.G.1v,m,s)}H 5l(i,f,m,s){F t=0,x=0;1m(F a=s,l=i.V;a>=0;a--){x++;8(x==l)J x;F j=i.1O(a);8(j.1W(f)){t++;8(t==m)J x}8(a==0)a=l}}H 4R(a,o){J o.G.12.42||a.11().1c(0,o.G.P).1v(o.G.1v).V}H 2Q(i,o,s){F t=0,x=0;1m(F a=s,l=i.V-1;a<=l;a++){F j=i.1O(a);t+=(j.1W(':P'))?j[o.d['26']](N):0;8(t>o.3A)J x;x++;8(x==l+1)J x;8(a==l)a=-1}}H 4X(i,o,s,l){F v=2Q(i,o,s);8(!o.1M){8(s+v>l)v=l-s}J v}H 3B(i,o,s){J 5m(i,o.G.1v,o.G.12.42,s,o.1M)}H 5Y(i,o,s,m){J 5m(i,o.G.1v,m+1,s,o.1M)-1}H 5m(i,f,m,s,c){F t=0,x=0;1m(F a=s,l=i.V-1;a<=l;a++){x++;8(x==l)J x;F j=i.1O(a);8(j.1W(f)){t++;8(t==m)J x}8(a==l)a=-1}}H 3d(i,o){J i.1c(0,o.G.P)}H 5T(i,o,n){J i.1c(n,o.G.12.2m+n)}H 5U(i,o){J i.1c(0,o.G.P)}H 4Y(i,o){J i.1c(0,o.G.12.2m)}H 4Z(i,o,n){J i.1c(n,o.G.P+n)}H 1N(i,o,m){F x=(K m=='1s')?m:O;8(K m!='13')m=0;i.1K(H(){F j=$(1g);F t=2o(j.16(o.d['1E']));8(2p(t))t=0;j.1r('6o',t);j.16(o.d['1E'],((x)?j.1r('6o'):m+j.1r('1R')))})}H 3P(a,o,p){F b=a.3a(),$i=a.11(),$v=3d($i,o),4p=4g(2B($v,o,N),o,p);b.16(4p);8(o.1u){F p=o.1i,r=p[o.d[1]];8(o.1B){8(r<0)r=0}F c=$v.2Y();c.16(o.d['1E'],c.1r('1R')+r);a.16(o.d['2M'],p[o.d[0]]);a.16(o.d['1t'],p[o.d[3]])}a.16(o.d['S'],4p[o.d['S']]+(3m($i,o,'S')*2));a.16(o.d['1l'],5n($i,o,'1l'));J 4p}H 2B(i,o,a){F b=3m(i,o,'S',a),6p=5n(i,o,'1l',a);J[b,6p]}H 5n(i,o,a,b){8(K b!='1s')b=O;8(K o[o.d[a]]=='13'&&b)J o[o.d[a]];8(K o.G[o.d[a]]=='13')J o.G[o.d[a]];F c=(a.5o().32('S')>-1)?'26':'2L';J 3x(i,o,c)}H 3x(i,o,b){F s=0;1m(F a=0,l=i.V;a<l;a++){F j=i.1O(a);F m=(j.1W(':P'))?j[o.d[b]](N):0;8(s<m)s=m}J s}H 36(b,o,c){8(!b.1W(':P'))J 0;F d=b[o.d[c]](),5p=(o.d[c].5o().32('S')>-1)?['7u','7v']:['7w','7x'];1m(F a=0,l=5p.V;a<l;a++){F m=2o(b.16(5p[a]));d-=(2p(m))?0:m}J d}H 3m(i,o,b,c){8(K c!='1s')c=O;8(K o[o.d[b]]=='13'&&c)J o[o.d[b]];8(K o.G[o.d[b]]=='13')J o.G[o.d[b]]*i.V;F d=(b.5o().32('S')>-1)?'26':'2L',s=0;1m(F a=0,l=i.V;a<l;a++){F j=i.1O(a);s+=(j.1W(':P'))?j[o.d[d]](N):0}J s}H 4v(i,o,b){F s=O,v=O;1m(F a=0,l=i.V;a<l;a++){F j=i.1O(a);F c=(j.1W(':P'))?j[o.d[b]](N):0;8(s===O)s=c;Q 8(s!=c)v=N;8(s==0)v=N}J v}H 5y(i,o,d){J i[o.d['7y'+d]](N)-36(i,o,'7z'+d)}H 3Y(x){J(K x=='1k'&&x.1c(-1)=='%')}H 3Z(s,o){8(3Y(o)){o=o.1c(0,-1);8(2p(o))J s;s*=o/3H}J s}H L(n,c,a,b,d){8(K a!='1s')a=N;8(K b!='1s')b=N;8(K d!='1s')d=O;8(a)n=c.3j.3J+n;8(b)n=n+'.'+c.3j.6k;8(b&&d)n+=c.4m;J n}H 2q(n,c){J(K c.5h[n]=='1k')?c.5h[n]:n}H 4g(a,o,p){8(K p!='1s')p=N;F b=(o.1u&&p)?o.1i:[0,0,0,0];F c={};c[o.d['S']]=a[0]+b[1]+b[3];c[o.d['1l']]=a[1]+b[0]+b[2];J c}H 2V(c,d){F e=[];1m(F a=0,6q=c.V;a<6q;a++){1m(F b=0,6r=d.V;b<6r;b++){8(d[b].32(K c[a])>-1&&K e[b]=='1y'){e[b]=c[a];18}}}J e}H 5z(p){8(K p=='1y')J[0,0,0,0];8(K p=='13')J[p,p,p,p];Q 8(K p=='1k')p=p.3v('7A').6s('').3v('7B').6s('').3v(' ');8(!31(p)){J[0,0,0,0]}1m(F i=0;i<4;i++){p[i]=2o(p[i])}1x(p.V){W 0:J[0,0,0,0];W 1:J[p[0],p[0],p[0],p[0]];W 2:J[p[0],p[1],p[0],p[1]];W 3:J[p[0],p[1],p[2],p[1]];2w:J[p[0],p[1],p[2],p[3]]}}H 43(a,o){F x=(K o[o.d['S']]=='13')?1L.2v(o[o.d['S']]-3m(a,o,'S')):0;1x(o.1B){W'1t':J[0,x];W'2N':J[x,0];W'4x':2w:J[1L.2v(x/2),1L.3y(x/2)]}}H 4b(x,o,a,b){F v=x;8(K a=='H'){v=a.1z(b,v)}Q 8(K a=='1k'){F p=a.3v('+'),m=a.3v('-');8(m.V>p.V){F c=N,5q=m[0],2I=m[1]}Q{F c=O,5q=p[0],2I=p[1]}1x(5q){W'7C':v=(x%2==1)?x-1:x;18;W'7D':v=(x%2==0)?x-1:x;18;2w:v=x;18}2I=2o(2I);8(!2p(2I)){8(c)2I=-2I;v+=2I}}8(K v!='13')v=1;8(v<1)v=1;J v}H 2R(x,o,a,b){J 4y(4b(x,o,a,b),o.G.12)}H 4y(v,i){8(K i.2O=='13'&&v<i.2O)v=i.2O;8(K i.27=='13'&&v>i.27)v=i.27;8(v<1)v=1;J v}H 4E(s){8(!31(s))s=[[s]];8(!31(s[0]))s=[s];1m(F j=0,l=s.V;j<l;j++){8(K s[j][0]=='1k')s[j][0]=$(s[j][0]);8(K s[j][1]!='1s')s[j][1]=N;8(K s[j][2]!='1s')s[j][2]=N;8(K s[j][3]!='13')s[j][3]=0}J s}H 5k(k){8(k=='2N')J 39;8(k=='1t')J 37;8(k=='4u')J 38;8(k=='6b')J 40;J-1}H 4W(n,v){8(n)3T.2n=n+'='+v+'; 7E=/'}H 6g(n){n+='=';F b=3T.2n.3v(';');1m(F a=0,l=b.V;a<l;a++){F c=b[a];23(c.7F(0)==' '){c=c.1c(1)}8(c.32(n)==0){J c.1c(n.V)}}J 0}H 3r(p){8(p&&K p=='1k'){F i=(p.32('7G')>-1)?N:O,r=(p.32('2X')>-1)?N:O}Q{F i=r=O}J[i,r]}H 59(a){J(K a=='13')?a:2b}H 31(a){J K(a)=='1o'&&(a 64 7H)}H 2x(){J 7I 7J().2x()}H 1e(d,m){8(K d=='1o'){F s=' ('+d.3U+')';d=d.1e}Q{F s=''}8(!d)J O;8(K m=='1k')m='1J'+s+': '+m;Q m=['1J'+s+':',m];8(3s.5r&&3s.5r.6t)3s.5r.6t(m);J O}$.1P.65=H(o,c){J 1g.1J(o,c)};$.25($.1G,{'7K':H(t){F a=t*t;J t*(-a*t+4*a-6*t+4)},'7L':H(t){J t*(4*t*t-9*t+6)},'7M':H(t){F a=t*t;J t*(33*a*a-7N*a*t+7O*a-67*t+15)}})})(7P);",
    62,
    486,
    "|||||||opts|if|||||||||||||||||||||||||||||||||var|items|function|conf|return|typeof|cf_e|itms|true|false|visible|else|scrl|width|auto|total|length|case|trigger|button|first||children|visibleConf|number|bind||css|prev|break|tt0|next|pagination|slice|variable|debug|anims|this|stopPropagation|padding|duration|string|height|for|scroll|object|pre|push|data|boolean|left|usePadding|filter|a_dur|switch|undefined|call|wrp|align|container|triggerHandler|marginRight|tmrs|easing|play|fx|carouFredSel|each|Math|circular|sz_resetMargin|eq|fn|post|cfs_origCssMargin|isScrolling|c_new|remove|queu|is|isPaused|clbk|unbind|isStopped|stopImmediatePropagation|onAfter|while|sc_setScroll|extend|outerWidth|max|Not|synchronise|sc_startScroll|null|l_cur|l_old|w_siz|onBefore|crossfade|uncover|opacity|preventDefault|direction|adjust|old|cookie|parseInt|isNaN|cf_c|c_old|pR|pauseOnHover|opts_orig|ceil|default|getTime|removeClass|nv_enableNavi|l_new|ms_getSizes|fade|cover|updatePageStatus|mousewheel|key|css_o|adj|start|responsive|outerHeight|top|right|min|hidden|gn_getVisibleItemsNext|cf_getItemsAdjust|addClass|pause|startTime|cf_sortParams|scrolling|resume|last|slideTo||is_array|indexOf||_cfs_triggerEvent|innerWidth|ms_getTrueInnerSize||||parent|hide|show|gi_getCurrentItems|minimum|anchorBuilder|pauseDuration|Carousel|sc_clearTimers|events|queue|infinite|ms_getTotalSize|gn_getItemIndex|jquery|nv_showNavi|event|bt_pauseOnHoverConfig|window|ns2|ani_o|split|currentPosition|ms_getTrueLargestSize|floor|of|maxDimention|gn_getVisibleItemsNextFilter|go_getNaviObject|position|sc_stopScroll|timePassed|perc|100|dur2|prefix|appendTo|apply|sc_callCallbacks|currentPage|before|sz_setSizes|vI|touchwipe|wN|document|selector|_cfs_init|go_getObject|marginBottom|ms_isPercentage|ms_getPercentage||to|org|cf_getAlignPadding|keys|pauseOnEvent|Number|none|stopped||gn_getVisibleItemsPrev|cf_getAdjust|onEnd|clone|orgW|isHidden|cf_mapWrapperSizes|get|end|eval|mouseenter|mouseleave|serialNumber|cur_l|di|sz|element|cfs_isCarousel|defaults|upDateOnWindowResize|up|ms_hasVariableSizes|valid|center|cf_getItemAdjustMinMax|seco|nw|bottom|delay|pauseOnResize|cf_getSynchArr|scrolled|backward|textAlign|float|marginTop|marginLeft|absolute|_cfs_unbind_events|stop|finish|type|conditions|gn_getVisibleOrg|not|fx_cover|fx_uncover|orgDuration|cf_setCookie|gn_getVisibleItemsNextTestCircular|gi_getOldItemsNext|gi_getNewItemsNext||slideToPage|updateSizes|linkAnchors|_cfs_bind_buttons|click|_cfs_unbind_buttons|mousewheelPrev||bt_mousesheelNumber|mousewheelNext|wipe|_windowWidth|_windowHeight|ns3|wrapper|continue|classnames|new_w|old_w|cf_getKeyCode|gn_getItemsPrevFilter|gn_getItemsNextFilter|ms_getLargestSize|toLowerCase|arr|sta|console|No|destroy|innerHeight|dx|Set|secp|ms_getPaddingBorderMargin|cf_getPadding|500|pageAnchorBuilder|Item|forward|_cfs_build|fixed|cfs_origCss|_cfs_bind_events|paused|onPausePause|onPauseEnd|onPauseStart|enough|needed|page|slide_|configuration|gn_getScrollItemsPrevFilter|Scrolling|gi_getOldItemsPrev|gi_getNewItemsPrev|directscroll|concat|shift|gn_getScrollItemsNextFilter|new_m|jumpToStart|after|append|removeItem|instanceof|caroufredsel|hash||index|selected|gn_getVisibleItemsPrevFilter|down|keyup|keyCode|configs|classname|cf_readCookie|random|itm|onCreate|namespace|span|animate|complete|cfs_tempCssMargin|s2|l1|l2|join|log|found|the|Infinity|Width|caroufredsel_cookie_|attr|id|2500|Available|widths|heights|automatically|relative|overflow|setTimeout|or|Page|resumed|currently|Callback|returned|slide_prev|prependTo|slide_next|prevPage|nextPage|prepend|carousel|insertItem|add|detach|round|currentVisible|body|find|Preventing|non|sliding|replaceWith|min_move_x|min_move_y|preventDefaultEvents|wipeUp|wipeDown|wipeLeft|wipeRight|resize|timer|wrap|class|unshift|location|swing|cfs|div|caroufredsel_wrapper|href|clearTimeout|fx_fade|hiding|navigation|disabled|paddingLeft|paddingRight|paddingTop|paddingBottom|outer|inner|px|em|even|odd|path|charAt|immediate|Array|new|Date|quadratic|cubic|elastic|106|126|jQuery".split(
      "|"
    ),
    0,
    {}
  )
);
var JQ = {};
JQ.query = jQuery.noConflict(!0);

var Dirk;
(function (c) {
  (function (d) {
    function c(a) {
      var b = JQ.query("#" + a);
      a = b.find(".email").val();
      null != a &&
        0 != a.length &&
        ((a = new Url("misc/specific/inschrijvenNieuwsbrief.aspx").add(
          "email",
          a
        )),
        JQ.query.ajax(a.toString()).done(function (a) {
          null == a && alert("aanmelden mislukt");
          "True" == a &&
            (b.find(".email").hide(),
            b.find(".email_success").show(),
            b.find(".submitButton").hide(),
            setCookie("dirk.nieuwsbrief", a));
        }));
    }
    d.aanmelden = c;
    d.closePopup = function () {
      JQ.query("#nieuwsbrief_popup").hide();
      setCookie("dirk.nieuwsbrief", "True");
    };
    d.keyUp = function (a, b) {
      13 == (a.keyCode ? a.keyCode : a.which) && c(b);
    };
    JQ.query(document).ready(function () {
      var a = getCookie("dirk.nieuwsbrief");
      (null != a && 0 != a.length) ||
        setTimeout(function () {
          JQ.query("#nieuwsbrief_popup").show();
        }, 2e4);
    });
  })(c.Nieuwsbrief || (c.Nieuwsbrief = {}));
})(Dirk || (Dirk = {}));

var wizTypes = "text password textarea select-one radio file number email tel".split(
    " "
  ),
  wizards = [],
  wizardFields = "add async checkLoad checksOut Class dispose function getColumns getElements getRows guid hideErrors index initialized initializing isChanged isChanging keys name onChange onError post postPage refresh replacements post tables toString".split(
    " "
  );
TWizard = function (a, b, c) {
  "undefined" == typeof c && (c = !1);
  this.async = c;
  this.changeTimeout = 1e3;
  this.Class = "TWizard";
  this.guid = b;
  this.index = wizards.length;
  this.initializing = !0;
  this.keys = [];
  this.name = a;
  this.onError = this.onChange = null;
  this.postPage = "misc/postWizard.aspx";
  this.replacements = [];
  this.tables = [];
  wizards[this.index] = this;
  wizards[this.name] = this;
  addEvent(window, "unload", "wizards[" + this.index + "].dispose();");
};
TWizard.prototype.add = function (a) {
  if ("undefined" == typeof this.tables[a]) {
    var b = this.tables.length,
      c = new TTable(this, a, b);
    this.tables[b] = c;
    this.tables[a] = c;
    -1 == wizardFields.indexOf(a) && (this[a] = c);
    return c;
  }
  throw Error("This table already exists in the collection.");
};
TWizard.prototype.checksOut = function () {
  for (var a = 0; a < this.tables.length; a++)
    if (!this.tables[a].checksOut()) return !1;
  return !0;
};
TWizard.prototype.dispose = function () {
  for (var a = 0; a < this.tables.length; a++)
    this.tables[a].dispose(), (this.tables[a] = null);
  this.onChange = null;
  this.tables = [];
  wizards[this.index] = null;
};
TWizard.prototype.getColumns = function (a, b) {
  for (
    var c = a.documentElement
        .getElementsByTagName("declaration")[0]
        .getElementsByTagName("table"),
      d = 0;
    d < c.length;
    d++
  ) {
    var e = c[d];
    if (e.getAttribute("name") == b) return e.getElementsByTagName("column");
  }
  return null;
};
TWizard.prototype.getElements = function () {
  for (var a = 0; a < this.tables.length; a++)
    for (var b = this.tables[a], c = 0; c < b.rows.length; c++)
      b.rows[c].getElements();
};
TWizard.prototype.getRows = function (a, b) {
  for (var c = [], d = 0; d < a.documentElement.childNodes.length; d++) {
    var e = a.documentElement.childNodes[d];
    e.nodeType == ntElement && e.nodeName == b && c.add(e);
  }
  return c;
};
TWizard.prototype.hideErrors = function () {
  for (var a = 0; a < this.tables.length; a++) this.tables[a].hideErrors();
};
TWizard.prototype.initialized = function (a) {
  "undefined" != typeof a && (this.postPage = a);
  this.initializing = !1;
};
TWizard.prototype.isChanged = function () {
  for (var a = 0; a < this.tables.length; a++)
    if (this.tables[a].isChanged()) return !0;
  return !1;
};
TWizard.prototype.isChanging = function () {
  for (var a = 0; a < this.tables.length; a++)
    if (this.tables[a].isChanging()) return !0;
  return !1;
};
TWizard.prototype.post = function (a, b) {
  var c = this;
  if (this.initializing) return !0;
  try {
    var d = b ? " for field '" + b.name + "'" : "",
      e = new Url(this.postPage),
      e = e.add("steID", steID),
      e = e.add("catID", catID),
      e = e.add("guid", this.guid);
    if (c.async)
      return (
        console.log("Wizard async request" + d + "."),
        e.async("post", a, function (a) {
          console.log("Wizard async result" + d + ".");
          if (200 == a.status) c.refresh(a.responseXML, b || null);
          else {
            if (null != c.onError) c.onError(a);
            console.log(a);
          }
        }),
        !0
      );
    console.log("Wizard sync request" + d + ".");
    var g = e.request("post", a, !0, !1);
    if ("boolean" == typeof g) {
      if (null != c.onError) c.onError(response);
      return !1;
    }
    c.refresh(g, b || null);
    return !0;
  } catch (f) {
    return Log.error(f), console.log(f), !1;
  }
};
TWizard.prototype.refresh = function (a, b) {
  var c = [];
  this.initializing = !0;
  try {
    for (var d = 0; d < this.tables.length; d++) {
      for (
        var e = this.tables[d],
          g = this.getRows(a, e.name),
          f = this.getColumns(a, e.name),
          h = 0;
        h < g.length;
        h++
      ) {
        var p = g[h],
          r = null;
        if ("deleted" != p.parentNode.nodeName)
          for (
            var r = h >= e.rows.length ? e.addRow() : e.rows[h], l = 0;
            l < f.length;
            l++
          ) {
            var m = f[l],
              k = r.fields[m.getAttribute("name")],
              n = p.getElementsByTagName(m.getAttribute("name"))[0],
              q = null != n ? fromXml(n.text || n.textContent, k.type) : null,
              u = null != n ? null != n.getAttribute("original") : !1,
              v = parseInt(m.getAttribute("error"));
            if (!isSame(q, k.FValue)) {
              var t = k.FValue;
              k.value(q);
              k != b
                ? c.add({ field: k, oldValue: t })
                : c.insert(0, { field: k, oldValue: t });
              k.updateElements(q);
            }
            k.setChanged(u);
            v == h && (k.error = !0);
          }
      }
      for (; e.rows.length > g.length; ) e.rows.length--;
      e.row >= e.rows.length && (e.row = e.rows.length - 1);
      e.bof = 0 >= e.row;
      e.eof = e.row == e.rows.length - 1;
    }
  } finally {
    this.initializing = !1;
    for (d = 0; d < c.length; d++)
      (k = c[d].field), (t = c[d].oldValue), k.fireOnChange(t);
    b && (b.isChanging = !1);
  }
};
TWizard.prototype.toString = function (a, b, c) {
  if (null == a) return b == dtBoolean ? Boolean.formatString(null, c) : "";
  switch (b) {
    case dtInteger:
    case dtLong:
      return String(a);
    case dtDecimal:
    case dtDouble:
      return "undefined" != typeof c
        ? a.formatString(c)
        : a.formatString("0.########");
    case dtPercentage:
      return "undefined" != typeof c
        ? a.formatString(c)
        : a.formatString("0.########") + "%";
    case dtMoney:
      return "undefined" != typeof c
        ? a.formatString(c)
        : a.formatString("0.00");
    case dtDateTime:
      return "undefined" != typeof c
        ? (null == c || "" == c
            ? (c = "g")
            : 1 < c.length &&
              ((c = c.replace(/d/gi, "D")),
              (c = c.replace(/m/g, "N")),
              (c = c.replace(/y/gi, "Y")),
              (c = c.replace(/h/gi, "H")),
              (c = c.replace(/s/gi, "S")),
              (c = c.replace(/\//gi, "-"))),
          a.formatString(c))
        : "000000" == a.formatString("HHnnss")
        ? a.formatString("d")
        : a.formatString("g");
    case dtString:
    case dtGuid:
      return String(a);
    case dtBoolean:
      return a.formatString(c);
  }
};
var tableFields = "addColumn addRow bof canSave checksOut Class clear columns current disable dispose enable eof find first function getRow getValues gotoRow hideErrors index initialize isChanged isChanging last name next prior onChange owner removeRow removeRowAt row Rows rows setRow wizard xml".split(
    " "
  ),
  formatable = [
    dtBoolean,
    dtDecimal,
    dtDouble,
    dtMoney,
    dtPercentage,
    dtDateTime,
  ];
TTable = function (a, b, c) {
  this.bof = !0;
  this.Class = "TTable";
  this.columns = [];
  this.eof = !0;
  this.index = c;
  this.name = b;
  this.onChange = [];
  this.owner = a;
  this.row = -1;
  this.rows = [];
  this.wizard = a;
  this.setRow = function () {
    var a = this.current();
    if (null == a)
      for (var b = 0; b < this.columns.length; b++)
        (a = this.columns[b]),
          -1 == tableFields.indexOf(a.name) && (this[a.name] = null);
    else
      for (b = 0; b < a.fields.length; b++) {
        var c = a.fields[b];
        -1 == tableFields.indexOf(c.name) && (this[c.name] = c);
      }
  };
};
TTable.prototype.addColumn = function (a, b) {
  if ("undefined" == typeof this.columns[a]) {
    var c = this.columns.length,
      d = new TColumn(this, a, b, c);
    this.columns[c] = d;
    return (this.columns[a] = d);
  }
  throw Error("This column already exists in the collection.");
};
TTable.prototype.addRow = function () {
  this.bof && this.eof && (this.bof = !1);
  this.eof = !1;
  this.row = this.rows.length;
  var a = this.getValues(arguments),
    a = new TRow(this, this.row, a);
  a.addFields();
  a.getElements();
  this.setRow();
  return a;
};
TTable.prototype.canSave = function () {
  if (0 == this.rows.length) return !1;
  for (var a = 0; a < this.rows.length; a++)
    if (0 < this.rows[a].canSave().length) return !1;
  return !0;
};
TTable.prototype.checksOut = function () {
  for (var a = this.current(), b = this.first(), c = !0; !this.eof; )
    b.checksOut() || (c = !1), (b = this.next());
  a.setCurrent();
  return c;
};
TTable.prototype.clear = function () {
  this.wizard.post(this.xml("clear"));
  this.rows.clear();
};
TTable.prototype.current = function () {
  return -1 < this.row ? this.rows[this.row] : null;
};
TTable.prototype.disable = function () {
  for (var a = 0; a < this.rows.length; a++) this.rows[a].disable();
};
TTable.prototype.dispose = function () {
  for (var a = 0; a < this.rows.length; a++)
    this.rows[a].dispose(), (this.rows[a] = null);
  for (a = 0; a < this.columns.length; a++)
    this.columns[a].dispose(), (this.columns[a] = null);
  for (a = 0; a < this.onChange.length; a++) this.onChange[a] = null;
  this.columns = [];
  this.onChange = [];
  this.owner = null;
  this.rows = [];
  this.wizard = null;
};
TTable.prototype.enable = function () {
  for (var a = 0; a < this.rows.length; a++) this.rows[a].enable();
};
TTable.prototype.find = function (a, b) {
  return this.getRow(a, b);
};
TTable.prototype.fireOnChange = function (a, b, c) {
  for (var d = 0; d < this.onChange.length; d++) this.onChange[d](a, b, c);
};
TTable.prototype.first = function () {
  if (0 == this.rows.length) return null;
  this.bof = !0;
  this.eof = !1;
  this.row = 0;
  this.setRow();
  return this.current();
};
TTable.prototype.getRow = function (a, b) {
  for (var c = 0; c < this.rows.length; c++)
    if (this.rows[c].fields[a].FValue == b) return this.rows[c];
  return null;
};
TTable.prototype.getValues = function (a) {
  return "undefined" == typeof a ||
    null == a ||
    "undefined" == typeof a.length ||
    0 == a.length
    ? []
    : 1 == a.length && "undefined" != typeof a[0].length
    ? a[0]
    : a;
};
TTable.prototype.gotoRow = function (a, b) {
  if ("undefined" == typeof b && "number" == typeof a) {
    if (0 <= a && a < this.rows.length)
      return (
        (this.row = a),
        (this.bof = 0 >= a),
        (this.eof = a == this.rows.length - 1),
        this.setRow(),
        !0
      );
    throw Error(
      "Illegal call to TTable.gotoRow( index ). The index was out of range."
    );
  }
  for (var c = 0; c < this.rows.length; c++)
    if (this.rows[c].fields[a].FValue == b)
      return (
        (this.bof = 0 >= c),
        (this.eof = c == this.rows.length - 1),
        (this.row = c),
        this.setRow(),
        !0
      );
  return !1;
};
TTable.prototype.hideErrors = function () {
  for (var a = 0; a < this.rows.length; a++) this.rows[a].hideErrors();
};
TTable.prototype.initialize = function () {
  for (var a = 0; a < this.rows.length; a++) this.rows[a].initialize();
};
TTable.prototype.isChanged = function () {
  for (var a = 0; a < this.rows.length; a++)
    if (this.rows[a].isChanged()) return !0;
  return !1;
};
TTable.prototype.isChanging = function () {
  for (var a = 0; a < this.rows.length; a++)
    if (this.rows[a].isChanging()) return !0;
  return !1;
};
TTable.prototype.last = function () {
  if (0 == this.rows.length) return null;
  this.bof = !1;
  this.eof = !0;
  this.row = this.rows.length - 1;
  this.setRow();
  return this.current();
};
TTable.prototype.next = function () {
  if (0 == this.rows.length) return null;
  this.row == this.rows.length - 1
    ? ((this.bof = !1), (this.eof = !0))
    : this.row++;
  this.setRow();
  return this.current();
};
TTable.prototype.prior = function () {
  if (0 == this.rows.length) return null;
  0 == this.row ? ((this.bof = !0), (this.eof = !1)) : this.row--;
  this.setRow();
  return this.current();
};
TTable.prototype.removeRow = function (a) {
  if (!this.rows.contains(a))
    throw Error(
      'Illegal call to method "removeRow". The specified row is not part of the table.'
    );
  for (var b = a.index; b < this.rows.length - 1; b++)
    (this.rows[b] = this.rows[b + 1]),
      (this.rows[b].index = b),
      this.rows[b].updateElements();
  a.clear();
  this.rows.length--;
  this.row >= this.rows.length && (this.row = this.rows.length - 1);
  this.bof = 0 >= this.row;
  this.eof = this.row == this.rows.length - 1;
  this.wizard.post(a.xml("delete"));
  this.setRow();
};
TTable.prototype.removeRowAt = function (a) {
  if (0 <= a && a < this.rows.length) this.removeRow(this.rows[a]);
  else
    throw Error(
      'Illegal call to method "removeRowAt". Index out of range ("' + a + '").'
    );
};
TTable.prototype.Rows = function (a) {
  "undefined" == typeof a && (a = 0);
  if (0 > a)
    throw Error(
      'Illegal call to method "Rows( index )". Index out of range ("' +
        a +
        '").'
    );
  for (; a >= this.rows.length; ) this.addRow();
  return this.rows[a];
};
TTable.prototype.xml = function (a) {
  return (
    "<" +
    this.wizard.name +
    ("undefined" != typeof a ? ' action="' + a + '"' : "") +
    ">\r\n\t<" +
    this.name +
    "/>\r\n</" +
    this.wizard.name +
    ">"
  );
};
TColumn = function (a, b, c, d) {
  this.checks = [];
  this.Class = "TColumn";
  this.elements = [];
  this.index = d;
  this.name = b;
  this.onChange = [];
  this.table = this.owner = a;
  this.type = c;
  this.wizard = a.wizard;
  a.initialize();
};
TColumn.prototype.change = function (a, b) {
  return null != this.owner.current()
    ? this.owner.current().fields[this.index].change(a, b)
    : (b.returnValue = !1);
};
TColumn.prototype.dispose = function () {
  for (var a = 0; a < this.checks.length; a++)
    this.checks[a].dispose(), (this.checks[a] = null);
  for (a = 0; a < this.elements.length; a++) this.elements[a] = null;
  for (a = 0; a < this.onChange.length; a++) this.onChange[a] = null;
  this.checks = [];
  this.elements = [];
  this.onChange = [];
  this.wizard = this.table = this.owner = null;
};
TColumn.prototype.fireOnChange = function (a, b, c) {
  for (var d = 0; d < this.onChange.length; d++) this.onChange[d](a, b, c);
};
TColumn.prototype.value = function (a) {
  if (null != this.owner.current()) {
    if ("undefined" == typeof a)
      return this.owner.current().fields[this.index].FValue;
    this.owner.current().fields[this.index].value(a);
  }
};
TCheck = function (a, b, c) {
  this.eval = null;
  this.message = b;
  this.owner = a;
  this.regex = null;
  this.wizard = a.wizard;
  a = typeof c;
  "string" == a
    ? (this.eval = c)
    : "undefined" != a && null != c && (this.regex = c);
};
TCheck.prototype.dispose = function () {
  this.wizard = this.owner = this.regex = null;
};
TCheck.prototype.test = function (a) {
  if (this.eval) {
    var b = this.eval;
    b.contains("field")
      ? ((b = b.replace(/\bfield\b/gi, "arguments[0]")),
        (b = b.replace(/\bfield$/gi, "arguments[0]")),
        (b = b.replace(/^field\b/gi, "arguments[0]")),
        (b = b.replace(/^field$/gi, "arguments[0]")))
      : ((a = this.toJs(a)),
        (b = b.replace(/\bthis\b/gi, a)),
        (b = b.replace(/\bthis$/gi, a)),
        (b = b.replace(/^this\b/gi, a)),
        (b = b.replace(/^this$/gi, a)));
    return 1 == eval(b);
  }
  if (this.regex) {
    var b = void 0,
      c = "null";
    if (a.type == dtDateTime) b = "DD-MM-YYYY HH:NN:SS";
    else if (
      a.type == dtDecimal ||
      a.type == dtDouble ||
      a.type == dtMoney ||
      a.type == dtPercentage
    )
      b = "0.0";
    null != a.value && (c = this.wizard.toString(a.value(), a.type, b));
    return new RegExp(
      this.regex.source,
      this.regex.ignoreCase ? "ig" : "g"
    ).test(c);
  }
  return null != a.value();
};
TCheck.prototype.toJs = function (a) {
  var b = a.value();
  if (null == b) return "null";
  switch (a.type) {
    case dtInteger:
    case dtLong:
      return String(b);
    case dtDecimal:
    case dtDouble:
    case dtPercentage:
    case dtMoney:
      return b.formatString("0.");
    case dtDateTime:
      return b.jsDate();
    case dtBoolean:
      return b ? "true" : "false";
    default:
      return String(b).toJs();
  }
};
var rowFields = "addFields canSave checksOut Class clear disable dispose enable fields function getElements hideErrors index initialize isChanged isChanging owner setCurrent table updateElements wizard xml".split(
  " "
);
TRow = function (a, b, c) {
  this.Class = "TRow";
  this.fields = [];
  this.index = b;
  this.table = this.owner = a;
  this.wizard = a.wizard;
  a.rows[b] = this;
  this.initialize();
  if ("undefined" != typeof c) {
    for (a = 0; a < this.owner.columns.length; a++)
      if (a < c.length)
        this.fields[a].FValue = convert(c[a], this.owner.columns[a].type);
      else break;
    if (
      !this.wizard.initializing &&
      ((c = this.xml()),
      this.clear(),
      this.wizard.post(c),
      this.wizard.onChange)
    )
      this.wizard.onChange(this.wizard, null, null);
  }
};
TRow.prototype.addFields = function () {
  for (var a = 0; a < this.fields.length; a++) {
    var b = this.fields[a];
    -1 == rowFields.indexOf(b.name) && (this[b.name] = b);
  }
};
TRow.prototype.canSave = function () {
  this.hideErrors();
  this.setCurrent();
  this.wizard.post(this.xml("canSave"));
  for (var a = [], b = 0; b < this.fields.length; b++) {
    var c = this.fields[b];
    c.checksOut()
      ? c.error && !a.contains(c) && (a.add(c), (c.error = !1))
      : a.add(c);
  }
  return a;
};
TRow.prototype.checksOut = function () {
  for (var a = !1, b = 0; b < this.fields.length; b++)
    this.fields[b].checksOut() || ((a = !0), this.fields[b].showError());
  return !a;
};
TRow.prototype.clear = function () {
  for (var a = 0; a < this.fields.length; a++) {
    var b = this.fields[a];
    b.FValue = null;
    b.updateElements(null);
  }
};
TRow.prototype.disable = function () {
  for (var a = 0; a < this.fields.length; a++) this.fields[a].disable();
};
TRow.prototype.dispose = function () {
  for (var a = 0; a < this.fields.length; a++)
    this.fields[a].dispose(), (this.fields[a] = null);
  this.fields = [];
  this.wizard = this.table = this.owner = null;
};
TRow.prototype.enable = function () {
  for (var a = 0; a < this.fields.length; a++) this.fields[a].enable();
};
TRow.prototype.getElements = function () {
  for (var a = 0; a < this.fields.length; a++) {
    var b = this.fields[a],
      c = b.getElements();
    b.getLabels();
    b.createDateInput();
    c.disabled && (b.disabled = !0);
    b.changed = c.changed;
  }
};
TRow.prototype.hideErrors = function () {
  for (var a = 0; a < this.fields.length; a++) this.fields[a].hideErrors();
};
TRow.prototype.initialize = function () {
  for (var a = this.fields.length; a < this.owner.columns.length; a++) {
    var b = new TField(this, this.owner.columns[a]);
    this.fields[b.index] = b;
    this.fields[b.name] = b;
  }
};
TRow.prototype.isChanged = function () {
  for (var a = 0; a < this.fields.length; a++)
    if (this.fields[a].isChanged()) return !0;
  return !1;
};
TRow.prototype.isChanging = function () {
  for (var a = 0; a < this.fields.length; a++)
    if (this.fields[a].isChanging)
      return console.log("field[" + this.fields[a].name + "].isChanging"), !0;
  return !1;
};
TRow.prototype.setCurrent = function () {
  return this.table.gotoRow(this.index);
};
TRow.prototype.updateElements = function () {
  for (var a = 0; a < this.fields.length; a++)
    for (var b = this.fields[a], c = 0; c < b.elements.length; c++) {
      var d = b.elements[c];
      if (d.id.startsWith("lbl"))
        d.id =
          "lbl" +
          this.wizard.name.capitalize() +
          "_" +
          this.table.name +
          "_" +
          b.name +
          "_" +
          this.index;
      else if (d.id.startsWith("btn"))
        d.id =
          "btn" +
          this.wizard.name.capitalize() +
          "_" +
          this.table.name +
          "_" +
          b.name +
          "_" +
          this.index;
      else {
        var e = "",
          g = d.name.split(/_/gi);
        4 < g.length && (e = "_" + g[4]);
        d.name =
          this.wizard.name +
          "_" +
          this.table.name +
          "_" +
          b.name +
          "_" +
          this.index +
          e;
        d.id =
          4 < g.length
            ? "edt" +
              this.wizard.name.capitalize() +
              "_" +
              this.table.name +
              "_" +
              b.name +
              "_" +
              this.index +
              "_" +
              d.value +
              "_" +
              e
            : "edt" +
              this.wizard.name.capitalize() +
              "_" +
              this.table.name +
              "_" +
              b.name +
              "_" +
              this.index;
      }
      d.onblur &&
        (d.onblur = new Function(
          this.wizard.name +
            "." +
            this.table.name +
            ".Rows(" +
            this.index +
            ').fields["' +
            b.name +
            '"].blur( this, event );'
        ));
      d.onchange &&
        (d.onchange = new Function(
          this.wizard.name +
            "." +
            this.table.name +
            ".Rows(" +
            this.index +
            ').fields["' +
            b.name +
            '"].change( this, event );'
        ));
      d.onfocus &&
        (d.onfocus = new Function(
          this.wizard.name +
            "." +
            this.table.name +
            ".Rows(" +
            this.index +
            ').fields["' +
            b.name +
            '"].focus( this, event );'
        ));
    }
};
TRow.prototype.xml = function (a) {
  a =
    "<" +
    this.wizard.name +
    ("undefined" != typeof a ? ' action="' + a + '"' : "") +
    ">\r\n\t<" +
    this.table.name +
    ' index="' +
    this.index +
    '">';
  for (var b = 0; b < this.fields.length; b++)
    null != this.fields[b].FValue &&
      (a +=
        "\r\n\t\t<" +
        this.fields[b].column.name +
        "" +
        (null == this.fields[b].FValue
          ? "/>\n"
          : ">" +
            toXml(this.fields[b].FValue, this.fields[b].type) +
            "</" +
            this.fields[b].column.name +
            ">"));
  return (a +=
    "\r\n\t</" + this.table.name + ">\r\n</" + this.wizard.name + ">");
};
TField = function (a, b) {
  this.changing = this.changed = !1;
  this.changeParams = this.changingElement = null;
  this.Class = "TField";
  this.column = b;
  this.FDateInput = null;
  this.disabled = !1;
  this.elements = [];
  this.exError = this.errorsShown = this.error = !1;
  this.index = b.index;
  this.isChanging = !1;
  this.message = null;
  this.name = b.name;
  this.owner = a;
  this.replaced = !1;
  this.row = a;
  this.spans = [];
  this.stoppedChange = !1;
  this.table = a.table;
  this.timers = [];
  this.type = b.type;
  this.FValue = null;
  this.FNewValue = void 0;
  this.wizard = a.wizard;
  this.onblur = this.getEvent("blur");
  this.onchange = this.getEvent("change");
  this.onfocus = this.getEvent("focus");
};
TField.prototype.blur = function (a, b) {
  if (null != this.onblur) this.onblur(this, a, b);
  "select-one" != a.type && Element.removeClassName(a, "focused");
  this.stoppedChange &&
    0 == this.timers.length &&
    this.changeParams &&
    ((a = this.changeParams.sender),
    (b = this.changeParams.event),
    this.change(a, b));
  this.stoppedChange = !1;
};
TField.prototype.change = function (a, b) {
  var c = this;
  if (!c.changing) {
    b && "undefined" != typeof b.type && (b.cancelBubble = !0);
    if (!c.wizard.async) return c.doChange(a, b);
    c.clearTimers();
    c.isChanging = !0;
    c.stoppedChange = !1;
    c.changeParams = { sender: a, event: b };
    c.timers.push(
      setTimeout(function () {
        c.doChange(a, b);
      }, c.wizard.changeTimeout)
    );
  }
};
TField.prototype.doChange = function (a, b) {
  if (!this.changing) {
    this.timers.shift();
    this.changing = !0;
    var c;
    try {
      if ("undefined" != typeof a.DateInput) c = a.DateInput.date();
      else if (wizTypes.contains(a.type)) c = a.value;
      else if ("checkbox" == a.type) c = a.checked;
      else throw Error("Illegal sender: " + a.type);
      if ("t" == a.format)
        if (null != this.dateInput()) {
          var d = this.dateInput().date(),
            e = c;
          if (null != e && "" != e)
            var g = isTime(e),
              e = 0 != g ? g : convert(e, this.type);
          else e = new Date(1900, 0, 1, 0, 0);
          c =
            null == d
              ? new Date(1900, 0, 1, 0, 0).integrateTime(e)
              : d.integrateTime(e);
        } else c = isTime(c);
      this.changingElement = a;
      this.value(c);
      c = convert(c, this.type);
      isSame(this.FValue, c) && (this.format(a), this.updateElements(c, a));
      return !0;
    } catch (f) {
      return (
        Log.error(f),
        console.log(f),
        f.description
          ? alert(f.description)
          : f.message
          ? alert(f.message)
          : alert(f),
        -1 < window.navigator.appVersion.indexOf("MSIE")
          ? (a.select
              ? a.select()
              : a.focus
              ? a.focus()
              : this.correct(a, this.FValue),
            (b.returnValue = !1))
          : this.correct(a, this.FValue),
        !1
      );
    } finally {
      this.changing = !1;
    }
  }
};
TField.prototype.checksOut = function () {
  for (var a = 0; a < this.column.checks.length; a++) {
    var b = this.column.checks[a];
    if (!b.test(this))
      return (
        null == this.message
          ? ((this.message = b.message),
            this.changing && this.updateErrors(this.message))
          : this.errorsShown && this.updateErrors(b.message),
        !1
      );
  }
  return this.exError ? !1 : !0;
};
TField.prototype.clearError = function () {
  this.exError = !1;
  this.hideErrors();
};
TField.prototype.clearTimers = function () {
  if (!this.wizard.async) return !1;
  for (var a = !1; this.timers.length; )
    (a = !0), clearTimeout(this.timers.shift());
  return a;
};
TField.prototype.correct = function (a, b) {
  switch (a.type) {
    case "checkbox":
      a.checked = b ? !0 : !1;
      break;
    case "radio":
      a.checked = !1;
      for (var c = 0; c < this.elements.length; c++) {
        var d = this.elements[c];
        if (isSame(d.value, b, this.type)) {
          d.checked = !0;
          return;
        }
      }
      break;
    default:
      a.value = this.wizard.toString(b, this.type, a.format);
  }
};
TField.prototype.createDateInput = function () {
  if (this.column.type == dtDateTime) {
    var a = this.getName(),
      b = a.capitalize(),
      c = Html.get("edt" + b),
      b = Html.get("btn" + b);
    if (c && b) {
      var d = 1 == c.getAttribute("data-date-only") ? AllowTime.dontShow : !0;
      window[a] = new TDateInput(a, c, b, d);
    }
  }
};
TField.prototype.dateInput = function () {
  if (null == this.FDateInput) {
    this.FDateInput = "no";
    for (var a = 0; a < this.elements.length; a++)
      "undefined" != typeof this.elements[a].DateInput &&
        (this.FDateInput = this.elements[a].DateInput);
  }
  return "no" == this.FDateInput ? null : this.FDateInput;
};
TField.prototype.disable = function () {
  if (!this.disabled) {
    this.disabled = !0;
    for (var a = 0; a < this.elements.length; a++) {
      var b = this.elements[a],
        c = null;
      if ("checkbox" == b.type)
        for (c = b.nextSibling; c && "LABEL" != c.nodeName; ) c = c.nextSibling;
      b.disabled = !0;
      Html.addClass(b, "disabled");
      c && ((c.disabled = !0), Html.addClass(c, "disabled"));
    }
  }
};
TField.prototype.dispose = function () {
  for (var a = 0; a < this.elements.length; a++)
    (this.elements[a].field = null), (this.elements[a] = null);
  for (a = 0; a < this.spans.length; a++) this.spans[a] = null;
  this.dateInput = this.column = null;
  this.elements = [];
  this.row = this.owner = null;
  this.spans = [];
  this.onfocus = this.onchange = this.onblur = this.wizard = this.table = null;
};
TField.prototype.enable = function () {
  if (this.disabled) {
    this.disabled = !1;
    for (var a = 0; a < this.elements.length; a++) {
      var b = this.elements[a],
        c = null;
      if ("checkbox" == b.type)
        for (c = b.nextSibling; c && "LABEL" != c.nodeName; ) c = c.nextSibling;
      b.disabled = !1;
      Html.removeClass(b, "disabled");
      c && ((c.disabled = !1), Html.removeClass(c, "disabled"));
    }
  }
};
TField.prototype.fireOnChange = function (a) {
  this.errorsShown && this.checksOut() && this.hideErrors();
  this.wizard.onChange &&
    (this.table.setRow(),
    this.wizard.onChange(this.wizard, this, a, this.changingElement));
  this.column.fireOnChange(this, a, this.changingElement);
  this.table.fireOnChange(this, a, this.changingElement);
  if (null != this.onchange) this.onchange(this, a, this.changingElement);
  this.changingElement = null;
};
TField.prototype.focus = function (a, b) {
  if (0 == arguments.length)
    for (var c = 0; c < this.elements.length; c++) {
      var d = this.elements[c];
      if (d.select && "select-one" != d.type) {
        d.select();
        break;
      }
      if (d.focus) {
        d.focus();
        break;
      }
    }
  else {
    this.clearTimers() && (this.stoppedChange = !0);
    if (null != this.onfocus) this.onfocus(this, a, b);
    "select-one" != a.type && Element.addClassName(a, "focused");
  }
};
TField.prototype.format = function (a) {
  if (null != this.FValue) {
    var b =
      "undefined" != typeof a.format
        ? a.format
        : this.type == dtDouble || this.type == dtDecimal
        ? "0.########"
        : this.type == dtMoney
        ? "0.00"
        : this.type == dtPercentage
        ? "0.########%"
        : null;
    if (formatable.contains(this.type) && b) {
      var c = this.FValue.formatString(b);
      "t" != b ||
      (null != this.FValue && "000000" != this.FValue.formatString("HHnnss"))
        ? "d" != b ||
          (null != this.FValue &&
            "19000101" != this.FValue.formatString("yyyymmmdd"))
          ? (a.value = c)
          : (a.value = "")
        : (a.value = "");
    }
  }
};
TField.prototype.getElements = function () {
  for (
    var a = !1, b = !1, c = 0, d = this.getName(), e = 0;
    e < this.elements.length;
    e++
  )
    this.elements[e].field = null;
  this.elements = [];
  for (this.spans = []; ; ) {
    var e = d + (0 == c ? "" : "_" + c),
      g = document.getElementsByName(e);
    if (0 == g.length) break;
    e = Html.get("btn" + e.capitalize());
    null != e && (this.elements.add(e), (e.field = this));
    for (e = 0; e < g.length; e++) {
      var f = g[e],
        h = "undefined" != typeof f.type ? f.type : null;
      f.disabled && (a = !0);
      Html.hasClass(f, "changed") && (b = !0);
      this.elements.add(f);
      f.field = this;
      ("text" != h && "select-one" != h) ||
        !formatable.contains(this.type) ||
        "" == f.title ||
        "undefined" != typeof f.format ||
        ((f.format = f.title), (f.title = ""));
    }
    c++;
  }
  return { disabled: a, changed: b };
};
TField.prototype.getEvent = function (a) {
  a = a.capitalize();
  return TEvent.find(
    this.wizard.name +
      "_" +
      this.table.name +
      "_" +
      this.row.index +
      "_" +
      this.name +
      a,
    this.wizard.name + "_" + this.table.name + "_" + this.name + a,
    this.table.name + "_" + this.name + a,
    this.name + a,
    this.wizard.name + "_" + this.table.name + a,
    this.wizard.name + a,
    "field" + a
  );
};
TField.prototype.getLabels = function () {
  for (
    var a = "lbl" + this.getName().capitalize(),
      b = document.getElementsByTagName("SPAN"),
      c = 0;
    c < b.length;
    c++
  ) {
    var d = b[c];
    d.id == a &&
      (this.elements.add(d),
      (d.field = this),
      "undefined" == typeof d.toHtml &&
        ((d.toHtml = "1" == d.lang), d.removeAttribute("lang")),
      "" != d.title &&
        "undefined" == typeof d.format &&
        ((d.format = d.title), (d.title = "")));
  }
};
TField.prototype.getName = function (a) {
  return (
    this.wizard.name +
    "_" +
    this.table.name +
    "_" +
    this.name +
    "_" +
    this.row.index
  );
};
TField.prototype.handleReplacements = function (a) {
  var b = [];
  if (
    !this.replaced &&
    ((this.replaced = !0),
    (b = a ? a.match(/\[[A-Z]+\]/g) : []),
    null != b && b.length)
  )
    for (var c = 0; c < b.length; c++)
      this.wizard.keys.contains(b[c]) ||
        this.wizard.keys.add(b[c].replace(/[\[\]]/g, ""));
  b = this.wizard.keys;
  for (c = 0; c < b.length; c++)
    a = a.replace("[" + b[c] + "]", this.wizard.replacements[b[c]] || "");
  return a;
};
TField.prototype.hideErrors = function () {
  this.errorsShown = this.error = !1;
  this.exError || (this.message = null);
  for (var a = 0; a < this.spans.length; a++)
    this.spans[a].style.display = "none";
  for (a = 0; a < this.elements.length; a++)
    Element.removeClassName(this.elements[a], "wrong");
};
TField.prototype.isChanged = function () {
  return this.changed;
};
TField.prototype.isVisible = function () {
  for (var a = 0; a < this.elements.length; a++) {
    var b = Element.getStyle(this.elements[a], "display"),
      c = Element.getStyle(this.elements[a], "visibility");
    if ("none" != b && "hidden" != c) return !0;
  }
  return !1;
};
TField.prototype.setChanged = function (a) {
  this.changed = a;
  for (var b = 0; b < this.elements.length; b++) {
    var c = this.elements[b],
      d = null;
    if ("checkbox" == c.type || "radio" == c.type)
      for (d = c.nextSibling; d && "LABEL" != d.nodeName; ) d = d.nextSibling;
    "BUTTON" != c.nodeName &&
      (a ? Html.addClass(c, "changed") : Html.removeClass(c, "changed"),
      "SPAN" == c.nodeName &&
        this.type == dtBoolean &&
        (null == this.value()
          ? (Html.removeClass(c, "false"),
            Html.removeClass(c, "true"),
            Html.addClass(c, "null"))
          : this.value()
          ? (Html.removeClass(c, "false"),
            Html.removeClass(c, "null"),
            Html.addClass(c, "true"))
          : (Html.removeClass(c, "true"),
            Html.removeClass(c, "null"),
            Html.addClass(c, "false"))));
    d && (a ? Html.addClass(d, "changed") : Html.removeClass(d, "changed"));
  }
};
TField.prototype.showError = function (a) {
  if (!this.errorsShown) {
    this.message && "undefined" == typeof a && (a = this.message);
    this.changing && ((this.exError = !0), (this.message = a));
    a = this.handleReplacements(a);
    for (var b = 0; b < this.elements.length; b++) {
      var c = this.elements[b];
      Element.addClassName(c, "wrong");
      if (
        !(
          ("undefined" != typeof c.type &&
            "radio" == c.type &&
            b < this.elements.length - 1) ||
          (c.type && "button" == c.type)
        )
      )
        if (b > this.spans.length - 1) {
          var d = c.parentNode,
            e = document.createElement("DIV");
          "undefined" != typeof c.type &&
            "radio" == c.type &&
            (d = d.parentNode);
          e.id = "spnError" + this.name.capitalize() + "_" + b;
          e.className = "error";
          e.innerHTML = String(a).htmlEncode();
          e.style.display = "block";
          e.style.clear = "both";
          this.type == dtDateTime &&
            "TD" == d.nodeName &&
            (d = c.parentNode.parentNode.parentNode.parentNode.parentNode);
          this.spans.add(d.appendChild(e));
          this.errorsShown = !0;
        } else
          "none" == this.spans[b].style.display &&
            ((this.spans[b].style.display = "block"),
            (this.spans[b].innerHTML = String(a).htmlEncode()),
            (this.errorsShown = !0));
    }
  }
};
TField.prototype.updateElement = function (a, b) {
  if (!a.id.startsWith("btn"))
    if ("checkbox" == a.type) a.checked = b ? !0 : !1;
    else if ("radio" == a.type) a.checked = convert(a.value, this.type) == b;
    else if (a.type && "button" != a.type)
      (a.value = this.wizard.toString(b, this.type, a.format)),
        "undefined" != typeof a.DateInput && a.DateInput.setDate(b);
    else {
      var c = this.wizard.toString(b, this.type, a.format);
      a.innerHTML = a.toHtml ? Html.toHtml(c) : c;
    }
};
TField.prototype.updateElements = function (a, b) {
  for (var c = 0; c < this.elements.length; c++) {
    var d = this.elements[c];
    d != b && this.updateElement(d, a);
  }
};
TField.prototype.updateErrors = function (a) {
  this.message = a;
  a = this.handleReplacements(a);
  for (var b = 0; b < this.spans.length; b++)
    this.spans[b].innerHTML = String(a).htmlEncode();
};
TField.prototype.value = function (a) {
  if ("undefined" == typeof a)
    return (
      (a = this.FValue),
      void 0 != this.FNewValue && (a = this.FNewValue),
      this.type == dtDateTime && null !== a ? new Date(a) : a
    );
  var b = this.FValue;
  a = convert(a, this.type);
  isSame(b, a) ||
    ((this.FNewValue = a),
    this.wizard.initializing
      ? ((this.FValue = a), (this.FNewValue = void 0))
      : this.wizard.post(this.xml(a), this));
};
TField.prototype.xml = function (a) {
  return (
    "<" +
    this.wizard.name +
    ">\r\n\t<" +
    this.table.name +
    ' index="' +
    this.row.index +
    '">\r\n\t\t<' +
    this.name +
    (null == a
      ? "/>\r\n"
      : ">" + toXml(a, this.type) + "</" + this.name + ">\r\n") +
    "\t</" +
    this.table.name +
    ">\r\n</" +
    this.wizard.name +
    ">"
  );
};
var Wizards;
(function (a) {
  a.initialized = !1;
  a.getElements = function () {
    for (var a = 0; a < wizards.length; a++) wizards[a].getElements();
  };
  a.init = function (b) {
    for (var c = 0; c < b.length; c++) {
      for (
        var d = b[c],
          e = d[0],
          g = d[3],
          e = (window[e] = new TWizard(e, d[1], d[4])),
          f = 0;
        f < g.length;
        f++
      ) {
        for (
          var h = g[f], p = e.add(h[0]), r = h[1], h = h[2] || [], l = 0;
          l < r.length;
          l++
        )
          for (
            var m = r[l], k = m[2] || [], m = p.addColumn(m[0], m[1]), n = 0;
            n < k.length;
            n++
          ) {
            var q = k[n];
            m.checks.add(new TCheck(m, q[0], q[1]));
          }
        for (l = 0; l < h.length; l++) p.addRow(h[l]);
        p.first();
      }
      e.initialized(d[2]);
    }
    a.initialized = !0;
  };
})(Wizards || (Wizards = {}));

KeyStroke = function (a, b, c, e, d) {
  this.Class = "KeyStroke";
  this.keyCode = parseInt(a);
  this.ext = d || !1;
  this.altKey = b || !1;
  this.ctrlKey = c || !1;
  this.shiftKey = e || !1;
  if (this.ctrlKey)
    switch (this.keyCode) {
      case 11:
        this.keyCode = 75;
        break;
      case 13:
        this.ctrlKey = !1;
        break;
      case 21:
        this.keyCode = 85;
    }
  isNaN(this.keyCode) && (this.keyCode = 0);
  if ("string" == typeof a)
    for (
      a = a.split(/\s*\+\s*/gi), b = 0;
      b < a.length && 0 == this.keyCode;
      b++
    )
      (c = a[b]),
        "alt" == c.toLowerCase()
          ? 1 == a.length
            ? ((this.keyCode = 18), (this.ext = !0))
            : (this.altKey = !0)
          : "ctrl" == c.toLowerCase()
          ? 1 == a.length
            ? ((this.keyCode = 16), (this.ext = !0))
            : (this.ctrlKey = !0)
          : "shift" == c.toLowerCase()
          ? 1 == a.length
            ? ((this.keyCode = 17), (this.ext = !0))
            : (this.shiftKey = !0)
          : 1 < c.length
          ? ((this.ext = !0), (this.keyCode = KeyStroke.find(c)))
          : (this.keyCode = c.charCodeAt(0));
};
KeyStroke.prototype.contains = function (a) {
  if (1 < arguments.length) {
    for (var b = 0; b < arguments.length; b++)
      if (this.contains(arguments[b])) return !0;
    return !1;
  }
  a && "KeyStroke" != Object.getClass(a) && (a = KeyStroke.create(a));
  a = a.toString();
  var c = this.toString(),
    b = c.startsWith(a + "+"),
    e = c.endsWith("+" + a),
    d = c == a,
    c = c.contains("+" + a + "+");
  return b || e || d || c;
};
KeyStroke.prototype.equalTo = function (a) {
  if (1 < arguments.length) {
    for (var b = 0; b < arguments.length; b++)
      if (this.equalTo(arguments[b])) return !0;
    return !1;
  }
  return a && "KeyStroke" != Object.getClass(a)
    ? ((a = KeyStroke.create(a)), this.equalTo(a))
    : this.toString() == a.toString();
};
KeyStroke.prototype.isVisible = function () {
  return (
    this.equalTo("Shift+Ins") ||
    this.equalTo("Ctrl+V") ||
    this.equalTo("Ctrl+X") ||
    this.equalTo("Ctrl+Z") ||
    (!this.equalTo("Ctrl", "Shift", "Alt") &&
      !this.contains(
        "Home",
        "Up",
        "PgUp",
        "Left",
        "Right",
        "End",
        "Down",
        "PgDn",
        "Tab",
        "Ins",
        "Pauze",
        "CapsLock",
        "Esc",
        "NumLock",
        "ScrollLock",
        "F1",
        "F2",
        "F3",
        "F4",
        "F5",
        "F6",
        "F7",
        "F8",
        "F9",
        "F10",
        "F11",
        "F12"
      ) &&
      !this.ctrlKey)
  );
};
KeyStroke.prototype.toString = function () {
  var a = "";
  if (0 == this.keyCode) return "KeyStroke[\\0]";
  this.ctrlKey && 17 != this.keyCode && (a += "Ctrl+");
  this.shiftKey && 16 != this.keyCode && (a += "Shift+");
  this.altKey && 18 != this.keyCode && (a += "Alt+");
  switch (this.keyCode) {
    case 8:
      a += "BackSp";
      break;
    case 9:
      a += "Tab";
      break;
    case 11:
      a += "K";
      break;
    case 13:
      a += "Return";
      break;
    case 27:
      a += "Esc";
      break;
    case 32:
      a += "Space";
      break;
    default:
      if (isNaN(Number(this.keyCode))) a += this.keyCode;
      else
        var b = String.fromCharCode(this.keyCode),
          a =
            48 <= this.keyCode && 57 >= this.keyCode
              ? a + b
              : 65 <= this.keyCode && 90 >= this.keyCode
              ? a + b
              : this.ext
              ? a + KeyStroke.find(this.keyCode)
              : 97 <= this.keyCode && 122 >= this.keyCode
              ? a + b.toUpperCase()
              : a + ("'" + b + "'");
  }
  return a;
};
KeyStroke.extended = [
  { code: 8, key: "BackSp" },
  { code: 9, key: "Tab" },
  { code: 11, key: "Ctrl+K" },
  { code: 13, key: "Return" },
  { code: 16, key: "Shift" },
  { code: 17, key: "Ctrl" },
  { code: 18, key: "Alt" },
  { code: 19, key: "Pauze" },
  { code: 20, key: "CapsLock" },
  { code: 21, key: "Ctrl+U" },
  { code: 27, key: "Esc" },
  { code: 32, key: "Space" },
  { code: 33, key: "PgUp" },
  { code: 34, key: "PgDn" },
  { code: 35, key: "End" },
  { code: 36, key: "Home" },
  { code: 37, key: "Left" },
  { code: 38, key: "Up" },
  { code: 39, key: "Right" },
  { code: 40, key: "Down" },
  { code: 45, key: "Ins" },
  { code: 46, key: "Del" },
  { code: 106, key: "Num*" },
  { code: 107, key: "Num+" },
  { code: 109, key: "Num-" },
  { code: 111, key: "Num/" },
  { code: 112, key: "F1" },
  { code: 113, key: "F2" },
  { code: 114, key: "F3" },
  { code: 115, key: "F4" },
  { code: 116, key: "F5" },
  { code: 117, key: "F6" },
  { code: 118, key: "F7" },
  { code: 119, key: "F8" },
  { code: 120, key: "F9" },
  { code: 121, key: "F10" },
  { code: 122, key: "F11" },
  { code: 123, key: "F12" },
  { code: 144, key: "NumLock" },
  { code: 145, key: "ScrollLock" },
  { code: 186, key: "';'" },
  { code: 187, key: "'='" },
  { code: 188, key: "','" },
  { code: 189, key: "'-'" },
  { code: 190, key: "'.'" },
  { code: 191, key: "'/'" },
  { code: 192, key: "'`'" },
  { code: 219, key: "'['" },
  { code: 220, key: "'\\'" },
  { code: 221, key: "']'" },
  { code: 222, key: "'''" },
];
KeyStroke.create = function (a, b, c, e) {
  if (0 == arguments.length) return new KeyStroke(0);
  var d = 0,
    f = !1,
    g = !1,
    h = !1,
    k = null;
  if ("string" == typeof a) return new KeyStroke(a);
  if ("KeyStroke" == Object.getClass(a)) return a;
  "object" == typeof a &&
    ("undefined" != typeof a.charCode && 0 < a.charCode
      ? (d = a.charCode)
      : "undefined" != typeof a.keyCode && (d = a.keyCode),
    "undefined" != typeof a.altKey && (f = a.altKey),
    "undefined" != typeof a.ctrlKey && (g = a.ctrlKey),
    "undefined" != typeof a.shiftKey && (h = a.shiftKey),
    "undefined" != typeof a.type && (k = a.type));
  "number" == typeof a && (d = a);
  "boolean" == typeof b && (f = b);
  "boolean" == typeof c && (g = c);
  "boolean" == typeof e && (h = e);
  return new KeyStroke(d, f, g, h, "keyup" == k || "keydown" == k);
};
KeyStroke.equal = function (a, b) {
  a = KeyStroke.create(a);
  if ("KeyStroke" == Object.getClass(a)) return a.equalTo(b);
  b = KeyStroke.create(b);
  return "KeyStroke" == Object.getClass(b) ? b.equalTo(b) : !1;
};
KeyStroke.find = function (a) {
  if ("string" == typeof a) {
    for (var b = 0; b < KeyStroke.extended.length; b++)
      if (KeyStroke.extended[b].key.toLowerCase() == a.toLowerCase())
        return KeyStroke.extended[b].code;
    return '"' + a + '"';
  }
  if ("number" == typeof a) {
    for (b = 0; b < KeyStroke.extended.length; b++)
      if (KeyStroke.extended[b].code == a) return KeyStroke.extended[b].key;
    return "#" + a;
  }
};

var ShoppingList = {
  lightBox: null,
  add: function (a, b) {
    var c = List.Groceries.find("ID", a);
    null == c
      ? (c = List.Groceries.addRow(a, null, b, 1))
      : c.Quantity.value(c.Quantity.value() + 1);
    ShoppingList.createOrUpdate(c);
  },
  addText: function () {
    var a = JQ.query("#addText"),
      b = a.val();
    if (b != a[0].defaultValue && "" != b) {
      var c = ShoppingList.createListItemID(b),
        e = List.Groceries.find("CustomID", c);
      null == e
        ? (e = List.Groceries.addRow(null, c, b, 1))
        : e.Quantity.value(e.Quantity.value() + 1);
      a.val("");
      ShoppingList.createOrUpdate(e);
    }
  },
  setParent: function (a, b) {
    var c = List.Groceries.find("ID", a);
    null != c && c.ParentID.value(b);
  },
  blur: function (a, b) {
    a.value || (a.value = a.defaultValue);
  },
  closeMail: function () {
    ShoppingList.lightBox.hide();
  },
  clear: function () {
    confirm("Weet u zeker dat u uw boodschappenlijstje geheel wilt legen?!") &&
      (ShoppingList.Groceries.clear(), JQ.query("#list div").remove());
  },
  createListItemID: function (a) {
    return a.toString().replace(/[^A-Za-z0-9]/g, "_");
  },
  createImage: function (a, b) {
    b = new Url(b);
    b = b.add("width", 80);
    b = b.add("height", 80);
    a.Image.value(b);
    return '<img src="' + b + '"/>';
  },
  createOrUpdate: function (a) {
    var b = a.ID.value(),
      c = a.Text.value(),
      e = a.Quantity.value(),
      d = JQ.query("#o_" + b + " div.image");
    d.length
      ? ((d = d.css("background-image")),
        "none" != d
          ? ((d = d.replace(/(url\(["']?)([^"'\)]+)(["']?\))/gi, "$2")),
            (d = ShoppingList.createImage(a, d)))
          : (d = null))
      : ((d = JQ.query("#o_" + b + " img")),
        (d = d.length ? ShoppingList.createImage(a, d) : null));
    a = ShoppingList.createListItemID(b || c);
    b = JQ.query("#g_" + a);
    0 == b.length &&
      (b = JQ.query(
        '<div id="g_' +
          a +
          '" class="listItem"> \r\n\t\t\t\t\t\t\t\t\t<div class="image">' +
          (null != d ? d : "") +
          '</div>\r\n\t\t\t\t\t\t\t\t\t<div class="amount"><span>_</span>x</div> \r\n\t\t\t\t\t\t\t\t\t<div class="name">' +
          c +
          "</div> \r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(ShoppingList.remove('" +
          a +
          '\'))" class="remove"/> \r\n\t\t\t\t\t\t\t\t </div>'
      ).appendTo("#list"));
    JQ.query("span", b).text(e);
  },
  focus: function (a, b) {
    a.value = "";
  },
  keyPress: function (a, b) {
    KeyStroke.create(b).equalTo("Return") && ShoppingList.addText();
  },
  print: function () {
    var a = Url.current.replacePage("aanbiedingen", !0);
    window.open(a.add("a", "print").add("groceries", !0));
    return !1;
  },
  remove: function (a) {
    var b,
      c = JQ.query("#g_" + ShoppingList.createListItemID(a)),
      e = null;
    /^\d+$/.test(a) &&
      ((e = parseInt(a, 10)),
      ShoppingList.removeChildren(e),
      (b = List.Groceries.find("ID", e)));
    b ||
      (b = List.Groceries.find("CustomID", ShoppingList.createListItemID(a)));
    if (b) {
      a = b.Quantity.value();
      if (1 < a) {
        b.Quantity.value(a - 1);
        ShoppingList.createOrUpdate(b);
        return;
      }
      List.Groceries.removeRow(b);
    }
    c.remove();
  },
  removeChildren: function (a) {
    for (; null != (child = List.Groceries.find("ParentID", a)); )
      null != child.ID.value()
        ? ShoppingList.remove(child.ID.value())
        : ShoppingList.remove(child.CustomID.value());
  },
  send: function () {
    ShoppingList.lightBox ||
      (ShoppingList.lightBox = new TLightBox("sendMail", 1001, 200, !0));
    ShoppingList.lightBox.show();
    return !1;
  },
  sendMail: function () {
    var a = JQ.query("#name").val(),
      b = JQ.query("#mail").val();
    if (isEmail(b)) {
      var c = Url.current,
        c = c.add("a", "send"),
        c = c.add("groceries", !0),
        c = c.add("mail", b),
        c = c.add("name", a);
      0 != c.request("GET", null, !1, !1) &&
        (alert("Uw boodschappenlijstje is naar u toe gemaild."),
        ShoppingList.lightBox.hide());
    } else alert("Uw e-mailadres is niet correct."), JQ.query("#mail").focus();
  },
  toggle: function () {
    JQ.query("#toggle").toggle();
  },
};

function frmSearchSubmit(c, d) {
  var b = c.elements.edtSearchAll,
    a = c.elements.edtSearchExact,
    f = c.elements.edtSearchAtLeastOne,
    g = c.elements.edtSearchWithout,
    e = c.elements.edtSearchText;
  if (e) {
    if (!e.value || getMessage("Search") == e.value)
      return (
        (a = getMessage("NoSearchWords") || noSearchText[Languages.current]),
        alert(a),
        e.focus(),
        (d.returnValue = !1)
      );
    a = allowedWords(e.value);
    if (0 == a.length)
      return (
        (a =
          getMessage("IllegalSearchWords") ||
          illegalSearchWords[Languages.current]),
        alert(a),
        e.focus(),
        (d.returnValue = !1)
      );
    e.value = a.join(" ");
  } else if (b) {
    if (!(b.value || a.value || f.value || g.value))
      return (
        (a = getMessage("NoSearchWords") || noSearchText[Languages.current]),
        alert(a),
        b.focus(),
        (d.returnValue = !1)
      );
    if (b.value) {
      a = allowedWords(b.value);
      if (0 == a.length)
        return (
          (a =
            getMessage("IllegalSearchWords") ||
            illegalSearchWords[Languages.current]),
          alert(a),
          b.focus(),
          (d.returnValue = !1)
        );
      b.value = a.join(" ");
    }
    if (f.value) {
      a = allowedWords(f.value);
      if (0 == a.length)
        return (
          (a =
            getMessage("IllegalSearchWords") ||
            illegalSearchWords[Languages.current]),
          alert(a),
          f.focus(),
          (d.returnValue = !1)
        );
      f.value = a.join(" ");
    }
    if (g.value) {
      a = allowedWords(g.value);
      if (0 == a.length)
        return (
          (a =
            getMessage("IllegalSearchWords") ||
            illegalSearchWords[Languages.current]),
          alert(a),
          g.focus(),
          (d.returnValue = !1)
        );
      g.value = a.join(" ");
    }
  }
  return !0;
}
function allowedWords(c) {
  var d = [];
  c = String(c.trim()).split(/[\s",]+/gi);
  for (var b = 0; b < c.length; b++)
    c[b].length >= sw.minSearchLen && (d[d.length] = c[b]);
  return d;
}
function checkFiles() {
  for (
    var c = Html.get("cbElement2"),
      d = document.getElementsByName("cbElement"),
      b = !0,
      a = 0;
    a < d.length && b;
    a++
  )
    d.checked && (b = !1);
  null != c && b && (c.checked = !0);
}

/*
page: http://www.dirk.nl/
url: https://d2o1gng8t1pk49.cloudfront.net/js/62881218/26b5aa86f4c864a7a16aa712aea26441.0413.js
*/
