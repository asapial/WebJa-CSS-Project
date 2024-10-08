/**
 * Minified by jsDelivr using UglifyJS v3.4.5.
 * Original file: /npm/turndown-plugin-gfm@1.0.2/dist/turndown-plugin-gfm.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var turndownPluginGfm = function (e) {
    "use strict";
    var o = /highlight-(?:text|source)-([a-z0-9]+)/;

    function t(e) {
        e.addRule("highlightedCodeBlock", {
            filter: function (e) {
                var t = e.firstChild;
                return "DIV" === e.nodeName && o.test(e.className) && t && "PRE" === t.nodeName;
            },
            replacement: function (e, t, n) {
                var r = ((t.className || "").match(o) || [null, ""])[1];
                return "\n\n" + n.fence + r + "\n" + t.firstChild.textContent + "\n" + n.fence + "\n\n";
            }
        });
    }

    function n(e) {
        e.addRule("strikethrough", {
            filter: ["del", "s", "strike"],
            replacement: function (e) {
                return "~" + e + "~";
            }
        });
    }

    var r = Array.prototype.indexOf,
        i = Array.prototype.every,
        a = {};

    function l(e) {
        var t, n, r = e.parentNode;
        return "THEAD" === r.nodeName || r.firstChild === e && ("TABLE" === r.nodeName || (n = (t = r).previousSibling, "TBODY" === t.nodeName && (!n || "THEAD" === n.nodeName && /^\s*$/i.test(n.textContent)))) && i.call(e.childNodes, function (e) {
            return "TH" === e.nodeName;
        });
    }

    function c(e, t) {
        var n = " ";
        return 0 === r.call(t.parentNode.childNodes, t) && (n = "| "), n + e + " |";
    }

    function u(e) {
        for (var t in e.keep(function (e) {
            return "TABLE" === e.nodeName && !l(e.rows[0]);
        }), a) e.addRule(t, a[t]);
    }

    function d(e) {
        e.addRule("taskListItems", {
            filter: function (e) {
                return "checkbox" === e.type && "LI" === e.parentNode.nodeName;
            },
            replacement: function (e, t) {
                return (t.checked ? "[x]" : "[ ]") + " ";
            }
        });
    }

    return a.tableCell = {
        filter: ["th", "td"],
        replacement: function (e, t) {
            return c(e, t);
        }
    }, a.tableRow = {
        filter: "tr",
        replacement: function (e, t) {
            var n = "",
                r = {
                    left: ":--",
                    right: "--:",
                    center: ":-:"
                };
            if (l(t)) for (var o = 0; o < t.childNodes.length; o++) {
                var i = "---",
                    a = (t.childNodes[o].getAttribute("align") || "").toLowerCase();
                a && (i = r[a] || i), n += c(i, t.childNodes[o]);
            }
            return "\n" + e + (n ? "\n" + n : "");
        }
    }, a.table = {
        filter: function (e) {
            return "TABLE" === e.nodeName && l(e.rows[0]);
        },
        replacement: function (e) {
            return "\n\n" + (e = e.replace("\n\n", "\n")) + "\n\n";
        }
    }, a.tableSection = {
        filter: ["thead", "tbody", "tfoot"],
        replacement: function (e) {
            return e;
        }
    }, e.gfm = function (e) {
        e.use([t, n, u, d]);
    }, e.highlightedCodeBlock = t, e.strikethrough = n, e.tables = u, e.taskListItems = d, e;
}({});
//# sourceMappingURL=/sm/a70bbcd644020ee83744344e95321f95dc583fd53012b7f825e9bdf3ed5943d0.map
