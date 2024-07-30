/*
 Highcharts JS v8.2.0 (2020-08-20)

 Accessibility module

 (c) 2010-2019 Highsoft AS
 Author: Oystein Moseng

 License: www.highcharts.com/license
*/
(function (a) { "object" === typeof module && module.exports ? (a["default"] = a, module.exports = a) : "function" === typeof define && define.amd ? define("highcharts/modules/accessibility", ["highcharts"], function (r) { a(r); a.Highcharts = r; return a }) : a("undefined" !== typeof Highcharts ? Highcharts : void 0) })(function (a) {
    function r(a, h, q, n) { a.hasOwnProperty(h) || (a[h] = n.apply(null, q)) } a = a ? a._modules : {}; r(a, "Accessibility/Utils/HTMLUtilities.js", [a["Core/Utilities.js"], a["Core/Globals.js"]], function (a, h) {
        function m(a) {
            return a.replace(/&/g,
                "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
        } var n = a.merge, p = h.win, l = p.document; return {
            addClass: function (a, l) { a.classList ? a.classList.add(l) : 0 > a.className.indexOf(l) && (a.className += l) }, escapeStringForHTML: m, getElement: function (a) { return l.getElementById(a) }, getFakeMouseEvent: function (a) {
                if ("function" === typeof p.MouseEvent) return new p.MouseEvent(a); if (l.createEvent) {
                    var g = l.createEvent("MouseEvent"); if (g.initMouseEvent) return g.initMouseEvent(a,
                        !0, !0, p, "click" === a ? 1 : 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), g
                } return { type: a }
            }, removeElement: function (a) { a && a.parentNode && a.parentNode.removeChild(a) }, reverseChildNodes: function (a) { for (var l = a.childNodes.length; l--;)a.appendChild(a.childNodes[l]) }, setElAttrs: function (a, l) { Object.keys(l).forEach(function (k) { var e = l[k]; null === e ? a.removeAttribute(k) : (e = m("" + e), a.setAttribute(k, e)) }) }, stripHTMLTagsFromString: function (a) { return "string" === typeof a ? a.replace(/<\/?[^>]+(>|$)/g, "") : a }, visuallyHideElement: function (a) {
                n(!0,
                    a.style, { position: "absolute", width: "1px", height: "1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(1px, 1px, 1px, 1px)", marginTop: "-3px", "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)", filter: "alpha(opacity=1)", opacity: "0.01" })
            }
        }
    }); r(a, "Accessibility/Utils/ChartUtilities.js", [a["Accessibility/Utils/HTMLUtilities.js"], a["Core/Utilities.js"]], function (a, h) {
        function m(e) { if (e.points && e.points.length && e.points[0].graphic) return e.points[0].graphic.element } function n(e) {
            var d = m(e);
            return d && d.parentNode || e.graph && e.graph.element || e.group && e.group.element
        } function p(e, d) { d.setAttribute("aria-hidden", !1); d !== e.renderTo && d.parentNode && (Array.prototype.forEach.call(d.parentNode.childNodes, function (b) { b.hasAttribute("aria-hidden") || b.setAttribute("aria-hidden", !0) }), p(e, d.parentNode)) } var l = a.stripHTMLTagsFromString, g = h.defined, x = h.find, k = h.fireEvent; return {
            getChartTitle: function (e) { return l(e.options.title.text || e.langFormat("accessibility.defaultChartTitle", { chart: e })) }, getAxisDescription: function (e) {
                return l(e &&
                    (e.userOptions && e.userOptions.accessibility && e.userOptions.accessibility.description || e.axisTitle && e.axisTitle.textStr || e.options.id || e.categories && "categories" || e.dateTime && "Time" || "values"))
            }, getPointFromXY: function (e, d, b) { for (var f = e.length, c; f--;)if (c = x(e[f].points || [], function (c) { return c.x === d && c.y === b })) return c }, getSeriesFirstPointElement: m, getSeriesFromName: function (e, d) { return d ? (e.series || []).filter(function (b) { return b.name === d }) : e.series }, getSeriesA11yElement: n, unhideChartElementFromAT: p,
            hideSeriesFromAT: function (e) { (e = n(e)) && e.setAttribute("aria-hidden", !0) }, scrollToPoint: function (e) { var d = e.series.xAxis, b = e.series.yAxis, f = (null === d || void 0 === d ? 0 : d.scrollbar) ? d : b; if ((d = null === f || void 0 === f ? void 0 : f.scrollbar) && g(d.to) && g(d.from)) { b = d.to - d.from; if (g(f.dataMin) && g(f.dataMax)) { var c = f.toPixels(f.dataMin), w = f.toPixels(f.dataMax); e = (f.toPixels(e["xAxis" === f.coll ? "x" : "y"] || 0) - c) / (w - c) } else e = 0; d.updatePosition(e - b / 2, e + b / 2); k(d, "changed", { from: d.from, to: d.to, trigger: "scrollbar", DOMEvent: null }) } }
        }
    });
    r(a, "Accessibility/KeyboardNavigationHandler.js", [a["Core/Utilities.js"]], function (a) {
        function m(a, m) { this.chart = a; this.keyCodeMap = m.keyCodeMap || []; this.validate = m.validate; this.init = m.init; this.terminate = m.terminate; this.response = { success: 1, prev: 2, next: 3, noHandler: 4, fail: 5 } } var q = a.find; m.prototype = {
            run: function (a) {
                var m = a.which || a.keyCode, l = this.response.noHandler, g = q(this.keyCodeMap, function (a) { return -1 < a[0].indexOf(m) }); g ? l = g[1].call(this, m, a) : 9 === m && (l = this.response[a.shiftKey ? "prev" : "next"]);
                return l
            }
        }; return m
    }); r(a, "Accessibility/Utils/EventProvider.js", [a["Core/Globals.js"], a["Core/Utilities.js"]], function (a, h) { var m = h.addEvent; h = h.extend; var n = function () { this.eventRemovers = [] }; h(n.prototype, { addEvent: function () { var h = m.apply(a, arguments); this.eventRemovers.push(h); return h }, removeAddedEvents: function () { this.eventRemovers.forEach(function (a) { a() }); this.eventRemovers = [] } }); return n }); r(a, "Accessibility/Utils/DOMElementProvider.js", [a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/Utils/HTMLUtilities.js"]],
        function (a, h, q) { var m = a.win.document; a = h.extend; var p = q.removeElement; q = function () { this.elements = [] }; a(q.prototype, { createElement: function () { var a = m.createElement.apply(m, arguments); this.elements.push(a); return a }, destroyCreatedElements: function () { this.elements.forEach(function (a) { p(a) }); this.elements = [] } }); return q }); r(a, "Accessibility/AccessibilityComponent.js", [a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/Utils/HTMLUtilities.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/Utils/EventProvider.js"],
        a["Accessibility/Utils/DOMElementProvider.js"]], function (a, h, q, n, p, l) {
            function g() { } var m = a.win, k = m.document; a = h.extend; var e = h.fireEvent, d = h.merge, b = q.removeElement, f = q.getFakeMouseEvent, c = n.unhideChartElementFromAT; g.prototype = {
                initBase: function (b) { this.chart = b; this.eventProvider = new p; this.domElementProvider = new l; this.keyCodes = { left: 37, right: 39, up: 38, down: 40, enter: 13, space: 32, esc: 27, tab: 9 } }, addEvent: function () { return this.eventProvider.addEvent.apply(this.eventProvider, arguments) }, createElement: function () {
                    return this.domElementProvider.createElement.apply(this.domElementProvider,
                        arguments)
                }, fireEventOnWrappedOrUnwrappedElement: function (b, c) { var d = c.type; k.createEvent && (b.dispatchEvent || b.fireEvent) ? b.dispatchEvent ? b.dispatchEvent(c) : b.fireEvent(d, c) : e(b, d, c) }, fakeClickEvent: function (b) { if (b) { var c = f("click"); this.fireEventOnWrappedOrUnwrappedElement(b, c) } }, addProxyGroup: function (b) { this.createOrUpdateProxyContainer(); var c = this.createElement("div"); Object.keys(b || {}).forEach(function (d) { null !== b[d] && c.setAttribute(d, b[d]) }); this.chart.a11yProxyContainer.appendChild(c); return c },
                createOrUpdateProxyContainer: function () { var b = this.chart, c = b.renderer.box; b.a11yProxyContainer = b.a11yProxyContainer || this.createProxyContainerElement(); c.nextSibling !== b.a11yProxyContainer && b.container.insertBefore(b.a11yProxyContainer, c.nextSibling) }, createProxyContainerElement: function () { var b = k.createElement("div"); b.className = "highcharts-a11y-proxy-container"; return b }, createProxyButton: function (b, f, a, e, k) {
                    var w = b.element, t = this.createElement("button"), l = d({ "aria-label": w.getAttribute("aria-label") },
                        a); Object.keys(l).forEach(function (b) { null !== l[b] && t.setAttribute(b, l[b]) }); t.className = "highcharts-a11y-proxy-button"; k && this.addEvent(t, "click", k); this.setProxyButtonStyle(t); this.updateProxyButtonPosition(t, e || b); this.proxyMouseEventsForButton(w, t); f.appendChild(t); l["aria-hidden"] || c(this.chart, t); return t
                }, getElementPosition: function (b) {
                    var c = b.element; return (b = this.chart.renderTo) && c && c.getBoundingClientRect ? (c = c.getBoundingClientRect(), b = b.getBoundingClientRect(), {
                        x: c.left - b.left, y: c.top - b.top,
                        width: c.right - c.left, height: c.bottom - c.top
                    }) : { x: 0, y: 0, width: 1, height: 1 }
                }, setProxyButtonStyle: function (b) { d(!0, b.style, { "border-width": 0, "background-color": "transparent", cursor: "pointer", outline: "none", opacity: .001, filter: "alpha(opacity=1)", "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=1)", zIndex: 999, overflow: "hidden", padding: 0, margin: 0, display: "block", position: "absolute" }) }, updateProxyButtonPosition: function (b, c) {
                    c = this.getElementPosition(c); d(!0, b.style, {
                        width: (c.width || 1) + "px", height: (c.height ||
                            1) + "px", left: (c.x || 0) + "px", top: (c.y || 0) + "px"
                    })
                }, proxyMouseEventsForButton: function (b, c) { var d = this; "click touchstart touchend touchcancel touchmove mouseover mouseenter mouseleave mouseout".split(" ").forEach(function (f) { var a = 0 === f.indexOf("touch"); d.addEvent(c, f, function (c) { var f = a ? d.cloneTouchEvent(c) : d.cloneMouseEvent(c); b && d.fireEventOnWrappedOrUnwrappedElement(b, f); c.stopPropagation(); c.preventDefault() }) }) }, cloneMouseEvent: function (b) {
                    if ("function" === typeof m.MouseEvent) return new m.MouseEvent(b.type,
                        b); if (k.createEvent) { var c = k.createEvent("MouseEvent"); if (c.initMouseEvent) return c.initMouseEvent(b.type, b.bubbles, b.cancelable, b.view || m, b.detail, b.screenX, b.screenY, b.clientX, b.clientY, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, b.relatedTarget), c } return f(b.type)
                }, cloneTouchEvent: function (b) {
                    var c = function (b) { for (var c = [], d = 0; d < b.length; ++d) { var f = b.item(d); f && c.push(f) } return c }; if ("function" === typeof m.TouchEvent) return c = new m.TouchEvent(b.type, {
                        touches: c(b.touches), targetTouches: c(b.targetTouches),
                        changedTouches: c(b.changedTouches), ctrlKey: b.ctrlKey, shiftKey: b.shiftKey, altKey: b.altKey, metaKey: b.metaKey, bubbles: b.bubbles, cancelable: b.cancelable, composed: b.composed, detail: b.detail, view: b.view
                    }), b.defaultPrevented && c.preventDefault(), c; c = this.cloneMouseEvent(b); c.touches = b.touches; c.changedTouches = b.changedTouches; c.targetTouches = b.targetTouches; return c
                }, destroyBase: function () { b(this.chart.a11yProxyContainer); this.domElementProvider.destroyCreatedElements(); this.eventProvider.removeAddedEvents() }
            };
            a(g.prototype, { init: function () { }, getKeyboardNavigation: function () { }, onChartUpdate: function () { }, onChartRender: function () { }, destroy: function () { } }); return g
        }); r(a, "Accessibility/KeyboardNavigation.js", [a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/Utils/HTMLUtilities.js"], a["Accessibility/Utils/EventProvider.js"]], function (a, h, q, n) {
            function m(d, b) { this.init(d, b) } var l = a.doc, g = a.win, x = h.addEvent, k = h.fireEvent, e = q.getElement; x(l, "keydown", function (d) {
                27 === (d.which || d.keyCode) && a.charts &&
                a.charts.forEach(function (b) { b && b.dismissPopupContent && b.dismissPopupContent() })
            }); a.Chart.prototype.dismissPopupContent = function () { var d = this; k(this, "dismissPopupContent", {}, function () { d.tooltip && d.tooltip.hide(0); d.hideExportMenu() }) }; m.prototype = {
                init: function (d, b) {
                    var f = this, c = this.eventProvider = new n; this.chart = d; this.components = b; this.modules = []; this.currentModuleIx = 0; this.update(); c.addEvent(this.tabindexContainer, "keydown", function (b) { return f.onKeydown(b) }); c.addEvent(this.tabindexContainer,
                        "focus", function (b) { return f.onFocus(b) }); c.addEvent(l, "mouseup", function () { return f.onMouseUp() }); c.addEvent(d.renderTo, "mousedown", function () { f.isClickingChart = !0 }); c.addEvent(d.renderTo, "mouseover", function () { f.pointerIsOverChart = !0 }); c.addEvent(d.renderTo, "mouseout", function () { f.pointerIsOverChart = !1 }); this.modules.length && this.modules[0].init(1)
                }, update: function (d) {
                    var b = this.chart.options.accessibility; b = b && b.keyboardNavigation; var f = this.components; this.updateContainerTabindex(); b && b.enabled &&
                        d && d.length ? (this.modules = d.reduce(function (b, d) { d = f[d].getKeyboardNavigation(); return b.concat(d) }, []), this.updateExitAnchor()) : (this.modules = [], this.currentModuleIx = 0, this.removeExitAnchor())
                }, onFocus: function (d) { var b, f = this.chart; d = d.relatedTarget && f.container.contains(d.relatedTarget); this.isClickingChart || d || (null === (b = this.modules[0]) || void 0 === b ? void 0 : b.init(1)) }, onMouseUp: function () {
                    delete this.isClickingChart; if (!this.keyboardReset && !this.pointerIsOverChart) {
                        var d = this.chart, b = this.modules &&
                            this.modules[this.currentModuleIx || 0]; b && b.terminate && b.terminate(); d.focusElement && d.focusElement.removeFocusBorder(); this.currentModuleIx = 0; this.keyboardReset = !0
                    }
                }, onKeydown: function (d) { d = d || g.event; var b, f = this.modules && this.modules.length && this.modules[this.currentModuleIx]; this.keyboardReset = !1; if (f) { var c = f.run(d); c === f.response.success ? b = !0 : c === f.response.prev ? b = this.prev() : c === f.response.next && (b = this.next()); b && (d.preventDefault(), d.stopPropagation()) } }, prev: function () { return this.move(-1) },
                next: function () { return this.move(1) }, move: function (d) { var b = this.modules && this.modules[this.currentModuleIx]; b && b.terminate && b.terminate(d); this.chart.focusElement && this.chart.focusElement.removeFocusBorder(); this.currentModuleIx += d; if (b = this.modules && this.modules[this.currentModuleIx]) { if (b.validate && !b.validate()) return this.move(d); if (b.init) return b.init(d), !0 } this.currentModuleIx = 0; 0 < d ? (this.exiting = !0, this.exitAnchor.focus()) : this.tabindexContainer.focus(); return !1 }, updateExitAnchor: function () {
                    var d =
                        e("highcharts-end-of-chart-marker-" + this.chart.index); this.removeExitAnchor(); d ? (this.makeElementAnExitAnchor(d), this.exitAnchor = d) : this.createExitAnchor()
                }, updateContainerTabindex: function () { var d = this.chart.options.accessibility; d = d && d.keyboardNavigation; d = !(d && !1 === d.enabled); var b = this.chart, f = b.container; b.renderTo.hasAttribute("tabindex") && (f.removeAttribute("tabindex"), f = b.renderTo); this.tabindexContainer = f; var c = f.getAttribute("tabindex"); d && !c ? f.setAttribute("tabindex", "0") : d || b.container.removeAttribute("tabindex") },
                makeElementAnExitAnchor: function (d) { var b = this.tabindexContainer.getAttribute("tabindex") || 0; d.setAttribute("class", "highcharts-exit-anchor"); d.setAttribute("tabindex", b); d.setAttribute("aria-hidden", !1); this.addExitAnchorEventsToEl(d) }, createExitAnchor: function () { var d = this.chart, b = this.exitAnchor = l.createElement("div"); d.renderTo.appendChild(b); this.makeElementAnExitAnchor(b) }, removeExitAnchor: function () {
                    this.exitAnchor && this.exitAnchor.parentNode && (this.exitAnchor.parentNode.removeChild(this.exitAnchor),
                        delete this.exitAnchor)
                }, addExitAnchorEventsToEl: function (d) { var b = this.chart, f = this; this.eventProvider.addEvent(d, "focus", function (c) { c = c || g.event; c.relatedTarget && b.container.contains(c.relatedTarget) || f.exiting ? f.exiting = !1 : (f.tabindexContainer.focus(), c.preventDefault(), f.modules && f.modules.length && (f.currentModuleIx = f.modules.length - 1, (c = f.modules[f.currentModuleIx]) && c.validate && !c.validate() ? f.prev() : c && c.init(-1))) }) }, destroy: function () {
                    this.removeExitAnchor(); this.eventProvider.removeAddedEvents();
                    this.chart.container.removeAttribute("tabindex")
                }
            }; return m
        }); r(a, "Accessibility/Components/LegendComponent.js", [a["Core/Globals.js"], a["Core/Legend.js"], a["Core/Utilities.js"], a["Accessibility/AccessibilityComponent.js"], a["Accessibility/KeyboardNavigationHandler.js"], a["Accessibility/Utils/HTMLUtilities.js"]], function (a, h, q, n, p, l) {
            function g(b) { var c = b.legend && b.legend.allItems, d = b.options.legend.accessibility || {}; return !(!c || !c.length || b.colorAxis && b.colorAxis.length || !1 === d.enabled) } var m = q.addEvent,
                k = q.extend, e = q.find, d = q.fireEvent, b = l.stripHTMLTagsFromString, f = l.removeElement; a.Chart.prototype.highlightLegendItem = function (b) { var c = this.legend.allItems, a = this.highlightedLegendItemIx; if (c[b]) { c[a] && d(c[a].legendGroup.element, "mouseout"); a = this.legend; var f = a.allItems[b].pageIx, e = a.currentPage; "undefined" !== typeof f && f + 1 !== e && a.scroll(1 + f - e); this.setFocusToElement(c[b].legendItem, c[b].a11yProxyElement); d(c[b].legendGroup.element, "mouseover"); return !0 } return !1 }; m(h, "afterColorizeItem", function (b) {
                    var c =
                        b.item; this.chart.options.accessibility.enabled && c && c.a11yProxyElement && c.a11yProxyElement.setAttribute("aria-pressed", b.visible ? "false" : "true")
                }); a = function () { }; a.prototype = new n; k(a.prototype, {
                    init: function () {
                        var b = this; this.proxyElementsList = []; this.recreateProxies(); this.addEvent(h, "afterScroll", function () { this.chart === b.chart && (b.updateProxiesPositions(), b.updateLegendItemProxyVisibility(), this.chart.highlightLegendItem(b.highlightedLegendItemIx)) }); this.addEvent(h, "afterPositionItem", function (c) {
                            this.chart ===
                            b.chart && this.chart.renderer && b.updateProxyPositionForItem(c.item)
                        })
                    }, updateLegendItemProxyVisibility: function () { var b = this.chart.legend, d = b.currentPage || 1, a = b.clipHeight || 0; (b.allItems || []).forEach(function (c) { var f = c.pageIx || 0, e = c._legendItemPos ? c._legendItemPos[1] : 0, k = c.legendItem ? Math.round(c.legendItem.getBBox().height) : 0; f = e + k - b.pages[f] > a || f !== d - 1; c.a11yProxyElement && (c.a11yProxyElement.style.visibility = f ? "hidden" : "visible") }) }, onChartRender: function () {
                        g(this.chart) ? this.updateProxiesPositions() :
                        this.removeProxies()
                    }, updateProxiesPositions: function () { for (var b = 0, d = this.proxyElementsList; b < d.length; b++) { var a = d[b]; this.updateProxyButtonPosition(a.element, a.posElement) } }, updateProxyPositionForItem: function (b) { var c = e(this.proxyElementsList, function (c) { return c.item === b }); c && this.updateProxyButtonPosition(c.element, c.posElement) }, recreateProxies: function () { this.removeProxies(); g(this.chart) && (this.addLegendProxyGroup(), this.proxyLegendItems(), this.updateLegendItemProxyVisibility()) }, removeProxies: function () {
                        f(this.legendProxyGroup);
                        this.proxyElementsList = []
                    }, addLegendProxyGroup: function () { var b = this.chart.options.accessibility, d = this.chart.langFormat("accessibility.legend.legendLabel", {}); this.legendProxyGroup = this.addProxyGroup({ "aria-label": d, role: "all" === b.landmarkVerbosity ? "region" : null }) }, proxyLegendItems: function () { var b = this; (this.chart.legend && this.chart.legend.allItems || []).forEach(function (c) { c.legendItem && c.legendItem.element && b.proxyLegendItem(c) }) }, proxyLegendItem: function (c) {
                        if (c.legendItem && c.legendGroup) {
                            var d =
                                this.chart.langFormat("accessibility.legend.legendItem", { chart: this.chart, itemName: b(c.name) }), a = c.legendGroup.div ? c.legendItem : c.legendGroup; c.a11yProxyElement = this.createProxyButton(c.legendItem, this.legendProxyGroup, { tabindex: -1, "aria-pressed": !c.visible, "aria-label": d }, a); this.proxyElementsList.push({ item: c, element: c.a11yProxyElement, posElement: a })
                        }
                    }, getKeyboardNavigation: function () {
                        var b = this.keyCodes, d = this; return new p(this.chart, {
                            keyCodeMap: [[[b.left, b.right, b.up, b.down], function (b) {
                                return d.onKbdArrowKey(this,
                                    b)
                            }], [[b.enter, b.space], function () { return d.onKbdClick(this) }]], validate: function () { return d.shouldHaveLegendNavigation() }, init: function (b) { return d.onKbdNavigationInit(b) }
                        })
                    }, onKbdArrowKey: function (b, d) {
                        var c = this.keyCodes, a = b.response, f = this.chart, e = f.options.accessibility, k = f.legend.allItems.length; d = d === c.left || d === c.up ? -1 : 1; return f.highlightLegendItem(this.highlightedLegendItemIx + d) ? (this.highlightedLegendItemIx += d, a.success) : 1 < k && e.keyboardNavigation.wrapAround ? (b.init(d), a.success) : a[0 < d ?
                            "next" : "prev"]
                    }, onKbdClick: function (b) { var c = this.chart.legend.allItems[this.highlightedLegendItemIx]; c && c.a11yProxyElement && d(c.a11yProxyElement, "click"); return b.response.success }, shouldHaveLegendNavigation: function () { var b = this.chart, d = b.colorAxis && b.colorAxis.length, a = (b.options.legend || {}).accessibility || {}; return !!(b.legend && b.legend.allItems && b.legend.display && !d && a.enabled && a.keyboardNavigation && a.keyboardNavigation.enabled) }, onKbdNavigationInit: function (b) {
                        var c = this.chart, d = c.legend.allItems.length -
                            1; b = 0 < b ? 0 : d; c.highlightLegendItem(b); this.highlightedLegendItemIx = b
                    }
                }); return a
        }); r(a, "Accessibility/Components/MenuComponent.js", [a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/AccessibilityComponent.js"], a["Accessibility/KeyboardNavigationHandler.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/Utils/HTMLUtilities.js"]], function (a, h, q, n, p, l) {
            function g(d) { return d.exportSVGElements && d.exportSVGElements[0] } h = h.extend; var m = p.unhideChartElementFromAT, k = l.removeElement,
                e = l.getFakeMouseEvent; a.Chart.prototype.showExportMenu = function () { var d = g(this); if (d && (d = d.element, d.onclick)) d.onclick(e("click")) }; a.Chart.prototype.hideExportMenu = function () { var d = this.exportDivElements; d && this.exportContextMenu && (d.forEach(function (b) { if ("highcharts-menu-item" === b.className && b.onmouseout) b.onmouseout(e("mouseout")) }), this.highlightedExportItemIx = 0, this.exportContextMenu.hideMenu(), this.container.focus()) }; a.Chart.prototype.highlightExportItem = function (d) {
                    var b = this.exportDivElements &&
                        this.exportDivElements[d], a = this.exportDivElements && this.exportDivElements[this.highlightedExportItemIx]; if (b && "LI" === b.tagName && (!b.children || !b.children.length)) { var c = !!(this.renderTo.getElementsByTagName("g")[0] || {}).focus; b.focus && c && b.focus(); if (a && a.onmouseout) a.onmouseout(e("mouseout")); if (b.onmouseover) b.onmouseover(e("mouseover")); this.highlightedExportItemIx = d; return !0 } return !1
                }; a.Chart.prototype.highlightLastExportItem = function () {
                    var d; if (this.exportDivElements) for (d = this.exportDivElements.length; d--;)if (this.highlightExportItem(d)) return !0;
                    return !1
                }; a = function () { }; a.prototype = new q; h(a.prototype, {
                    init: function () { var d = this.chart, b = this; this.addEvent(d, "exportMenuShown", function () { b.onMenuShown() }); this.addEvent(d, "exportMenuHidden", function () { b.onMenuHidden() }) }, onMenuHidden: function () { var d = this.chart.exportContextMenu; d && d.setAttribute("aria-hidden", "true"); this.isExportMenuShown = !1; this.setExportButtonExpandedState("false") }, onMenuShown: function () {
                        var d = this.chart, b = d.exportContextMenu; b && (this.addAccessibleContextMenuAttribs(),
                            m(d, b)); this.isExportMenuShown = !0; this.setExportButtonExpandedState("true")
                    }, setExportButtonExpandedState: function (d) { var b = this.exportButtonProxy; b && b.setAttribute("aria-expanded", d) }, onChartRender: function () {
                        var d = this.chart, b = d.options.accessibility; k(this.exportProxyGroup); var a = d.options.exporting, c = g(d); a && !1 !== a.enabled && a.accessibility && a.accessibility.enabled && c && c.element && (this.exportProxyGroup = this.addProxyGroup("all" === b.landmarkVerbosity ? {
                            "aria-label": d.langFormat("accessibility.exporting.exportRegionLabel",
                                { chart: d }), role: "region"
                        } : {}), b = g(this.chart), this.exportButtonProxy = this.createProxyButton(b, this.exportProxyGroup, { "aria-label": d.langFormat("accessibility.exporting.menuButtonLabel", { chart: d }), "aria-expanded": "false" }))
                    }, addAccessibleContextMenuAttribs: function () {
                        var d = this.chart, b = d.exportDivElements; b && b.length && (b.forEach(function (b) { "LI" !== b.tagName || b.children && b.children.length ? b.setAttribute("aria-hidden", "true") : b.setAttribute("tabindex", -1) }), b = b[0].parentNode, b.removeAttribute("aria-hidden"),
                            b.setAttribute("aria-label", d.langFormat("accessibility.exporting.chartMenuLabel", { chart: d })))
                    }, getKeyboardNavigation: function () {
                        var d = this.keyCodes, b = this.chart, a = this; return new n(b, {
                            keyCodeMap: [[[d.left, d.up], function () { return a.onKbdPrevious(this) }], [[d.right, d.down], function () { return a.onKbdNext(this) }], [[d.enter, d.space], function () { return a.onKbdClick(this) }]], validate: function () { return b.exportChart && !1 !== b.options.exporting.enabled && !1 !== b.options.exporting.accessibility.enabled }, init: function () {
                                var c =
                                    a.exportButtonProxy, d = b.exportingGroup; d && c && b.setFocusToElement(d, c)
                            }, terminate: function () { b.hideExportMenu() }
                        })
                    }, onKbdPrevious: function (d) { var b = this.chart, a = b.options.accessibility; d = d.response; for (var c = b.highlightedExportItemIx || 0; c--;)if (b.highlightExportItem(c)) return d.success; return a.keyboardNavigation.wrapAround ? (b.highlightLastExportItem(), d.success) : d.prev }, onKbdNext: function (d) {
                        var b = this.chart, a = b.options.accessibility; d = d.response; for (var c = (b.highlightedExportItemIx || 0) + 1; c < b.exportDivElements.length; ++c)if (b.highlightExportItem(c)) return d.success;
                        return a.keyboardNavigation.wrapAround ? (b.highlightExportItem(0), d.success) : d.next
                    }, onKbdClick: function (d) { var b = this.chart, a = b.exportDivElements[b.highlightedExportItemIx], c = g(b).element; this.isExportMenuShown ? this.fakeClickEvent(a) : (this.fakeClickEvent(c), b.highlightExportItem(0)); return d.response.success }
                }); return a
        }); r(a, "Accessibility/Components/SeriesComponent/SeriesKeyboardNavigation.js", [a["Core/Chart/Chart.js"], a["Core/Globals.js"], a["Core/Series/Point.js"], a["Core/Utilities.js"], a["Accessibility/KeyboardNavigationHandler.js"],
        a["Accessibility/Utils/EventProvider.js"], a["Accessibility/Utils/ChartUtilities.js"]], function (a, h, q, n, p, l, g) {
            function m(b) { var c = b.index, d = b.series.points, a = d.length; if (d[c] !== b) for (; a--;) { if (d[a] === b) return a } else return c } function k(b) {
                var c = b.chart.options.accessibility.keyboardNavigation.seriesNavigation, d = b.options.accessibility || {}, a = d.keyboardNavigation; return a && !1 === a.enabled || !1 === d.enabled || !1 === b.options.enableMouseTracking || !b.visible || c.pointNavigationEnabledThreshold && c.pointNavigationEnabledThreshold <=
                    b.points.length
            } function e(b) { var c = b.series.chart.options.accessibility; return b.isNull && c.keyboardNavigation.seriesNavigation.skipNullPoints || !1 === b.visible || k(b.series) } function d(b, d, a, e) { var f = Infinity, k = d.points.length, l = function (b) { return !(c(b.plotX) && c(b.plotY)) }; if (!l(b)) { for (; k--;) { var t = d.points[k]; if (!l(t) && (t = (b.plotX - t.plotX) * (b.plotX - t.plotX) * (a || 1) + (b.plotY - t.plotY) * (b.plotY - t.plotY) * (e || 1), t < f)) { f = t; var g = k } } return c(g) ? d.points[g] : void 0 } } function b(b) {
                var c = !1; delete b.highlightedPoint;
                return c = b.series.reduce(function (b, c) { return b || c.highlightFirstValidPoint() }, !1)
            } function f(b, c) { this.keyCodes = c; this.chart = b } var c = n.defined; n = n.extend; var w = g.getPointFromXY, A = g.getSeriesFromName, z = g.scrollToPoint; h.Series.prototype.keyboardMoveVertical = !0;["column", "pie"].forEach(function (b) { h.seriesTypes[b] && (h.seriesTypes[b].prototype.keyboardMoveVertical = !1) }); q.prototype.highlight = function () {
                var b = this.series.chart; if (this.isNull) b.tooltip && b.tooltip.hide(0); else this.onMouseOver(); z(this);
                this.graphic && b.setFocusToElement(this.graphic); b.highlightedPoint = this; return this
            }; a.prototype.highlightAdjacentPoint = function (b) {
                var c = this.series, d = this.highlightedPoint, a = d && m(d) || 0, f = d && d.series.points, v = this.series && this.series[this.series.length - 1]; v = v && v.points && v.points[v.points.length - 1]; if (!c[0] || !c[0].points) return !1; if (d) { if (c = c[d.series.index + (b ? 1 : -1)], a = f[a + (b ? 1 : -1)], !a && c && (a = c.points[b ? 0 : c.points.length - 1]), !a) return !1 } else a = b ? c[0].points[0] : v; return e(a) ? (c = a.series, k(c) ? this.highlightedPoint =
                    b ? c.points[c.points.length - 1] : c.points[0] : this.highlightedPoint = a, this.highlightAdjacentPoint(b)) : a.highlight()
            }; h.Series.prototype.highlightFirstValidPoint = function () { var b = this.chart.highlightedPoint, c = (b && b.series) === this ? m(b) : 0; b = this.points; var d = b.length; if (b && d) { for (var a = c; a < d; ++a)if (!e(b[a])) return b[a].highlight(); for (; 0 <= c; --c)if (!e(b[c])) return b[c].highlight() } return !1 }; a.prototype.highlightAdjacentSeries = function (b) {
                var c, a = this.highlightedPoint; var f = (c = this.series && this.series[this.series.length -
                    1]) && c.points && c.points[c.points.length - 1]; if (!this.highlightedPoint) return c = b ? this.series && this.series[0] : c, (f = b ? c && c.points && c.points[0] : f) ? f.highlight() : !1; c = this.series[a.series.index + (b ? -1 : 1)]; if (!c) return !1; f = d(a, c, 4); if (!f) return !1; if (k(c)) return f.highlight(), b = this.highlightAdjacentSeries(b), b ? b : (a.highlight(), !1); f.highlight(); return f.series.highlightFirstValidPoint()
            }; a.prototype.highlightAdjacentPointVertical = function (b) {
                var a = this.highlightedPoint, d = Infinity, f; if (!c(a.plotX) || !c(a.plotY)) return !1;
                this.series.forEach(function (l) { k(l) || l.points.forEach(function (k) { if (c(k.plotY) && c(k.plotX) && k !== a) { var v = k.plotY - a.plotY, g = Math.abs(k.plotX - a.plotX); g = Math.abs(v) * Math.abs(v) + g * g * 4; l.yAxis && l.yAxis.reversed && (v *= -1); !(0 >= v && b || 0 <= v && !b || 5 > g || e(k)) && g < d && (d = g, f = k) } }) }); return f ? f.highlight() : !1
            }; n(f.prototype, {
                init: function () {
                    var c = this, a = this.chart, d = this.eventProvider = new l; d.addEvent(h.Series, "destroy", function () { return c.onSeriesDestroy(this) }); d.addEvent(a, "afterDrilldown", function () {
                        b(this);
                        this.focusElement && this.focusElement.removeFocusBorder()
                    }); d.addEvent(a, "drilldown", function (b) { b = b.point; var a = b.series; c.lastDrilledDownPoint = { x: b.x, y: b.y, seriesName: a ? a.name : "" } }); d.addEvent(a, "drillupall", function () { setTimeout(function () { c.onDrillupAll() }, 10) })
                }, onDrillupAll: function () { var b = this.lastDrilledDownPoint, a = this.chart, d = b && A(a, b.seriesName), f; b && d && c(b.x) && c(b.y) && (f = w(d, b.x, b.y)); a.container && a.container.focus(); f && f.highlight && f.highlight(); a.focusElement && a.focusElement.removeFocusBorder() },
                getKeyboardNavigationHandler: function () { var b = this, c = this.keyCodes, a = this.chart, d = a.inverted; return new p(a, { keyCodeMap: [[d ? [c.up, c.down] : [c.left, c.right], function (c) { return b.onKbdSideways(this, c) }], [d ? [c.left, c.right] : [c.up, c.down], function (c) { return b.onKbdVertical(this, c) }], [[c.enter, c.space], function () { a.highlightedPoint && a.highlightedPoint.firePointEvent("click"); return this.response.success }]], init: function (c) { return b.onHandlerInit(this, c) }, terminate: function () { return b.onHandlerTerminate() } }) },
                onKbdSideways: function (b, c) { var a = this.keyCodes; return this.attemptHighlightAdjacentPoint(b, c === a.right || c === a.down) }, onKbdVertical: function (b, c) { var a = this.chart, d = this.keyCodes; c = c === d.down || c === d.right; d = a.options.accessibility.keyboardNavigation.seriesNavigation; if (d.mode && "serialize" === d.mode) return this.attemptHighlightAdjacentPoint(b, c); a[a.highlightedPoint && a.highlightedPoint.series.keyboardMoveVertical ? "highlightAdjacentPointVertical" : "highlightAdjacentSeries"](c); return b.response.success },
                onHandlerInit: function (c, a) { var d = this.chart; if (0 < a) b(d); else { a = d.series.length; for (var f; a-- && !(d.highlightedPoint = d.series[a].points[d.series[a].points.length - 1], f = d.series[a].highlightFirstValidPoint());); } return c.response.success }, onHandlerTerminate: function () { var b, c, a = this.chart, d = a.highlightedPoint; null === (b = a.tooltip) || void 0 === b ? void 0 : b.hide(0); null === (c = null === d || void 0 === d ? void 0 : d.onMouseOut) || void 0 === c ? void 0 : c.call(d); delete a.highlightedPoint }, attemptHighlightAdjacentPoint: function (b,
                    c) { var a = this.chart, d = a.options.accessibility.keyboardNavigation.wrapAround; return a.highlightAdjacentPoint(c) ? b.response.success : d ? b.init(c ? 1 : -1) : b.response[c ? "next" : "prev"] }, onSeriesDestroy: function (b) { var c = this.chart; c.highlightedPoint && c.highlightedPoint.series === b && (delete c.highlightedPoint, c.focusElement && c.focusElement.removeFocusBorder()) }, destroy: function () { this.eventProvider.removeAddedEvents() }
            }); return f
        }); r(a, "Accessibility/Components/AnnotationsA11y.js", [a["Accessibility/Utils/HTMLUtilities.js"]],
            function (a) {
                function m(a) { return (a.annotations || []).reduce(function (a, e) { var d; !1 !== (null === (d = e.options) || void 0 === d ? void 0 : d.visible) && (a = a.concat(e.labels)); return a }, []) } function q(a) { var k, e, d, b, f = null === (e = null === (k = a.options) || void 0 === k ? void 0 : k.accessibility) || void 0 === e ? void 0 : e.description; return f ? f : (null === (b = null === (d = a.graphic) || void 0 === d ? void 0 : d.text) || void 0 === b ? void 0 : b.textStr) || "" } function n(a) {
                    var k, e, d = null === (e = null === (k = a.options) || void 0 === k ? void 0 : k.accessibility) || void 0 ===
                        e ? void 0 : e.description; if (d) return d; k = a.chart; e = q(a); d = a.points.filter(function (b) { return !!b.graphic }).map(function (b) { var c, a; if (!(a = null === (c = null === b || void 0 === b ? void 0 : b.accessibility) || void 0 === c ? void 0 : c.valueDescription)) { var d, f; a = (null === (f = null === (d = null === b || void 0 === b ? void 0 : b.graphic) || void 0 === d ? void 0 : d.element) || void 0 === f ? void 0 : f.getAttribute("aria-label")) || "" } b = (null === b || void 0 === b ? void 0 : b.series.name) || ""; return (b ? b + ", " : "") + "data point " + a }).filter(function (b) { return !!b });
                    var b = d.length; a = "accessibility.screenReaderSection.annotations.description" + (1 < b ? "MultiplePoints" : b ? "SinglePoint" : "NoPoints"); e = { annotationText: e, numPoints: b, annotationPoint: d[0], additionalAnnotationPoints: d.slice(1) }; return k.langFormat(a, e)
                } function p(a) { return m(a).map(function (a) { return (a = l(g(n(a)))) ? "<li>" + a + "</li>" : "" }) } var l = a.escapeStringForHTML, g = a.stripHTMLTagsFromString; return {
                    getAnnotationsInfoHTML: function (a) { var k = a.annotations; return k && k.length ? "<ul>" + p(a).join(" ") + "</ul>" : "" }, getAnnotationLabelDescription: n,
                    getAnnotationListItems: p, getPointAnnotationTexts: function (a) { var k = m(a.series.chart).filter(function (e) { return -1 < e.points.indexOf(a) }); return k.length ? k.map(function (a) { return "" + q(a) }) : [] }
                }
            }); r(a, "Accessibility/Components/SeriesComponent/SeriesDescriber.js", [a["Core/Utilities.js"], a["Accessibility/Components/AnnotationsA11y.js"], a["Accessibility/Utils/HTMLUtilities.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Core/Tooltip.js"]], function (a, h, q, n, p) {
                function l(b) {
                    var c = b.index; return b.series &&
                        b.series.data && D(c) ? C(b.series.data, function (b) { return !!(b && "undefined" !== typeof b.index && b.index > c && b.graphic && b.graphic.element) }) || null : null
                } function g(b) { var c = b.chart.options.accessibility.series.pointDescriptionEnabledThreshold; return !!(!1 !== c && b.points && b.points.length >= c) } function m(b) { var c = b.options.accessibility || {}; return !g(b) && !c.exposeAsGroupOnly } function k(b) {
                    var c = b.chart.options.accessibility.keyboardNavigation.seriesNavigation; return !(!b.points || !(b.points.length < c.pointNavigationEnabledThreshold ||
                        !1 === c.pointNavigationEnabledThreshold))
                } function e(b, c) { var a = b.series.chart, d = a.options.accessibility.point || {}; b = b.series.tooltipOptions || {}; a = a.options.lang; return v(c) ? I(c, d.valueDecimals || b.valueDecimals || -1, a.decimalPoint, a.accessibility.thousandsSep || a.thousandsSep) : c } function d(b) { var c = (b.options.accessibility || {}).description; return c && b.chart.langFormat("accessibility.series.description", { description: c, series: b }) || "" } function b(b, c) {
                    return b.chart.langFormat("accessibility.series." + c +
                        "Description", { name: J(b[c]), series: b })
                } function f(b) { var c = b.series, a = c.chart, d = a.options.accessibility.point || {}; if (c.xAxis && c.xAxis.dateTime) return c = p.prototype.getXDateFormat.call({ getDateFormat: p.prototype.getDateFormat, chart: a }, b, a.options.tooltip, c.xAxis), d = d.dateFormatter && d.dateFormatter(b) || d.dateFormat || c, a.time.dateFormat(d, b.x, void 0) } function c(b) {
                    var c = f(b), a = (b.series.xAxis || {}).categories && D(b.category) && ("" + b.category).replace("<br/>", " "), d = b.id && 0 > b.id.indexOf("highcharts-"), e =
                        "x, " + b.x; return b.name || c || a || (d ? b.id : e)
                } function w(b, c, a) { var d = c || "", f = a || ""; return b.series.pointArrayMap.reduce(function (c, a) { c += c.length ? ", " : ""; var k = e(b, y(b[a], b.options[a])); return c + (a + ": " + d + k + f) }, "") } function A(b) {
                    var c = b.series, a = c.chart.options.accessibility.point || {}, d = c.tooltipOptions || {}, f = a.valuePrefix || d.valuePrefix || ""; a = a.valueSuffix || d.valueSuffix || ""; d = e(b, b["undefined" !== typeof b.value ? "value" : "y"]); return b.isNull ? c.chart.langFormat("accessibility.series.nullPointValue", { point: b }) :
                        c.pointArrayMap ? w(b, f, a) : f + d + a
                } function z(b) { var a = b.series, d = a.chart, f = d.options.accessibility.point.valueDescriptionFormat, e = (a = y(a.xAxis && a.xAxis.options.accessibility && a.xAxis.options.accessibility.enabled, !d.angular)) ? c(b) : ""; b = { point: b, index: D(b.index) ? b.index + 1 : "", xDescription: e, value: A(b), separator: a ? ", " : "" }; return u(f, b, d) } function t(b) {
                    var c = b.series, a = c.chart, d = z(b), f = b.options && b.options.accessibility && b.options.accessibility.description; f = f ? " " + f : ""; c = 1 < a.series.length && c.name ? " " + c.name +
                        "." : ""; a = b.series.chart; var e = H(b), k = { point: b, annotations: e }; a = e.length ? a.langFormat("accessibility.series.pointAnnotationsDescription", k) : ""; b.accessibility = b.accessibility || {}; b.accessibility.valueDescription = d; return d + f + c + (a ? " " + a : "")
                } function r(b) {
                    var c = m(b), a = k(b); (c || a) && b.points.forEach(function (b) {
                        var a; if (!(a = b.graphic && b.graphic.element) && (a = b.series && b.series.is("sunburst"), a = b.isNull && !a)) {
                            var d = b.series, f = l(b); d = (a = f && f.graphic) ? a.parentGroup : d.graph || d.group; f = f ? {
                                x: y(b.plotX, f.plotX,
                                    0), y: y(b.plotY, f.plotY, 0)
                            } : { x: y(b.plotX, 0), y: y(b.plotY, 0) }; f = b.series.chart.renderer.rect(f.x, f.y, 1, 1); f.attr({ "class": "highcharts-a11y-dummy-point", fill: "none", opacity: 0, "fill-opacity": 0, "stroke-opacity": 0 }); d && d.element ? (b.graphic = f, b.hasDummyGraphic = !0, f.add(d), d.element.insertBefore(f.element, a ? a.element : null), a = f.element) : a = void 0
                        } a && (a.setAttribute("tabindex", "-1"), a.style.outline = "0", c ? (f = b.series, d = f.chart.options.accessibility.point || {}, f = f.options.accessibility || {}, b = F(G(f.pointDescriptionFormatter &&
                            f.pointDescriptionFormatter(b) || d.descriptionFormatter && d.descriptionFormatter(b) || t(b))), a.setAttribute("role", "img"), a.setAttribute("aria-label", b)) : a.setAttribute("aria-hidden", !0))
                    })
                } function B(a) {
                    var c = a.chart, f = c.types || [], e = d(a), k = function (b) { return c[b] && 1 < c[b].length && a[b] }, l = b(a, "xAxis"), v = b(a, "yAxis"), g = { name: a.name || "", ix: a.index + 1, numSeries: c.series && c.series.length, numPoints: a.points && a.points.length, series: a }; f = 1 < f.length ? "Combination" : ""; return (c.langFormat("accessibility.series.summary." +
                        a.type + f, g) || c.langFormat("accessibility.series.summary.default" + f, g)) + (e ? " " + e : "") + (k("yAxis") ? " " + v : "") + (k("xAxis") ? " " + l : "")
                } var C = a.find, u = a.format, v = a.isNumber, I = a.numberFormat, y = a.pick, D = a.defined, H = h.getPointAnnotationTexts, F = q.escapeStringForHTML, K = q.reverseChildNodes, G = q.stripHTMLTagsFromString, J = n.getAxisDescription, L = n.getSeriesFirstPointElement, M = n.getSeriesA11yElement, N = n.unhideChartElementFromAT; return {
                    describeSeries: function (b) {
                        var a = b.chart, c = L(b), d = M(b), f = a.is3d && a.is3d(); if (d) {
                            d.lastChild !==
                            c || f || K(d); r(b); N(a, d); f = b.chart; a = f.options.chart || {}; c = 1 < f.series.length; f = f.options.accessibility.series.describeSingleSeries; var e = (b.options.accessibility || {}).exposeAsGroupOnly; a.options3d && a.options3d.enabled && c || !(c || f || e || g(b)) ? d.setAttribute("aria-label", "") : (a = b.chart.options.accessibility, c = a.landmarkVerbosity, (b.options.accessibility || {}).exposeAsGroupOnly ? d.setAttribute("role", "img") : "all" === c && d.setAttribute("role", "region"), d.setAttribute("tabindex", "-1"), d.style.outline = "0", d.setAttribute("aria-label",
                                F(G(a.series.descriptionFormatter && a.series.descriptionFormatter(b) || B(b)))))
                        }
                    }, defaultPointDescriptionFormatter: t, defaultSeriesDescriptionFormatter: B, getPointA11yTimeDescription: f, getPointXDescription: c, getPointValue: A, getPointValueDescription: z
                }
            }); r(a, "Accessibility/Utils/Announcer.js", [a["Core/Globals.js"], a["Accessibility/Utils/DOMElementProvider.js"], a["Accessibility/Utils/HTMLUtilities.js"]], function (a, h, q) {
                var m = q.visuallyHideElement; q = function () {
                    function a(a, g) {
                        this.chart = a; this.domElementProvider =
                            new h; this.announceRegion = this.addAnnounceRegion(g)
                    } a.prototype.destroy = function () { this.domElementProvider.destroyCreatedElements() }; a.prototype.announce = function (a) { var l = this; this.announceRegion.innerHTML = a; this.clearAnnouncementRegionTimer && clearTimeout(this.clearAnnouncementRegionTimer); this.clearAnnouncementRegionTimer = setTimeout(function () { l.announceRegion.innerHTML = ""; delete l.clearAnnouncementRegionTimer }, 1E3) }; a.prototype.addAnnounceRegion = function (a) {
                        var l = this.chart.renderTo, h = this.domElementProvider.createElement("div");
                        h.setAttribute("aria-hidden", !1); h.setAttribute("aria-live", a); m(h); l.insertBefore(h, l.firstChild); return h
                    }; return a
                }(); return a.Announcer = q
            }); r(a, "Accessibility/Components/SeriesComponent/NewDataAnnouncer.js", [a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/Components/SeriesComponent/SeriesDescriber.js"], a["Accessibility/Utils/Announcer.js"], a["Accessibility/Utils/EventProvider.js"]], function (a, h, q, n, p, l) {
                function g(b) {
                    var a = b.series.data.filter(function (a) {
                        return b.x ===
                            a.x && b.y === a.y
                    }); return 1 === a.length ? a[0] : b
                } function m(b, a) { var c = (b || []).concat(a || []).reduce(function (b, a) { b[a.name + a.index] = a; return b }, {}); return Object.keys(c).map(function (b) { return c[b] }) } var k = h.extend, e = h.defined, d = q.getChartTitle, b = n.defaultPointDescriptionFormatter, f = n.defaultSeriesDescriptionFormatter; h = function (b) { this.chart = b }; k(h.prototype, {
                    init: function () {
                        var b = this.chart, a = b.options.accessibility.announceNewData.interruptUser ? "assertive" : "polite"; this.lastAnnouncementTime = 0; this.dirty =
                            { allSeries: {} }; this.eventProvider = new l; this.announcer = new p(b, a); this.addEventListeners()
                    }, destroy: function () { this.eventProvider.removeAddedEvents(); this.announcer.destroy() }, addEventListeners: function () {
                        var b = this, d = this.chart, f = this.eventProvider; f.addEvent(d, "afterDrilldown", function () { b.lastAnnouncementTime = 0 }); f.addEvent(a.Series, "updatedData", function () { b.onSeriesUpdatedData(this) }); f.addEvent(d, "afterAddSeries", function (a) { b.onSeriesAdded(a.series) }); f.addEvent(a.Series, "addPoint", function (a) { b.onPointAdded(a.point) });
                        f.addEvent(d, "redraw", function () { b.announceDirtyData() })
                    }, onSeriesUpdatedData: function (b) { var a = this.chart; b.chart === a && a.options.accessibility.announceNewData.enabled && (this.dirty.hasDirty = !0, this.dirty.allSeries[b.name + b.index] = b) }, onSeriesAdded: function (b) { this.chart.options.accessibility.announceNewData.enabled && (this.dirty.hasDirty = !0, this.dirty.allSeries[b.name + b.index] = b, this.dirty.newSeries = e(this.dirty.newSeries) ? void 0 : b) }, onPointAdded: function (b) {
                        var a = b.series.chart; this.chart === a && a.options.accessibility.announceNewData.enabled &&
                            (this.dirty.newPoint = e(this.dirty.newPoint) ? void 0 : b)
                    }, announceDirtyData: function () { var b = this; if (this.chart.options.accessibility.announceNewData && this.dirty.hasDirty) { var a = this.dirty.newPoint; a && (a = g(a)); this.queueAnnouncement(Object.keys(this.dirty.allSeries).map(function (a) { return b.dirty.allSeries[a] }), this.dirty.newSeries, a); this.dirty = { allSeries: {} } } }, queueAnnouncement: function (b, a, d) {
                        var c = this, f = this.chart.options.accessibility.announceNewData; if (f.enabled) {
                            var e = +new Date; f = Math.max(0,
                                f.minAnnounceInterval - (e - this.lastAnnouncementTime)); b = m(this.queuedAnnouncement && this.queuedAnnouncement.series, b); if (a = this.buildAnnouncementMessage(b, a, d)) this.queuedAnnouncement && clearTimeout(this.queuedAnnouncementTimer), this.queuedAnnouncement = { time: e, message: a, series: b }, this.queuedAnnouncementTimer = setTimeout(function () { c && c.announcer && (c.lastAnnouncementTime = +new Date, c.announcer.announce(c.queuedAnnouncement.message), delete c.queuedAnnouncement, delete c.queuedAnnouncementTimer) }, f)
                        }
                    }, buildAnnouncementMessage: function (c,
                        e, k) { var l = this.chart, g = l.options.accessibility.announceNewData; if (g.announcementFormatter && (c = g.announcementFormatter(c, e, k), !1 !== c)) return c.length ? c : null; c = a.charts && 1 < a.charts.length ? "Multiple" : "Single"; c = e ? "newSeriesAnnounce" + c : k ? "newPointAnnounce" + c : "newDataAnnounce"; g = d(l); return l.langFormat("accessibility.announceNewData." + c, { chartTitle: g, seriesDesc: e ? f(e) : null, pointDesc: k ? b(k) : null, point: k, series: e }) }
                }); return h
            }); r(a, "Accessibility/Components/SeriesComponent/ForcedMarkers.js", [a["Core/Globals.js"],
            a["Core/Utilities.js"]], function (a, h) {
                function m(a) { p(!0, a, { marker: { enabled: !0, states: { normal: { opacity: 0 } } } }) } var n = h.addEvent, p = h.merge; return function () {
                    n(a.Series, "render", function () {
                        var a = this.options, g = !1 !== (this.options.accessibility && this.options.accessibility.enabled); if (g = this.chart.options.accessibility.enabled && g) g = this.chart.options.accessibility, g = this.points.length < g.series.pointDescriptionEnabledThreshold || !1 === g.series.pointDescriptionEnabledThreshold; if (g) {
                            if (a.marker && !1 === a.marker.enabled &&
                                (this.a11yMarkersForced = !0, m(this.options)), this._hasPointMarkers && this.points && this.points.length) for (a = this.points.length; a--;) { g = this.points[a]; var h = g.options; delete g.hasForcedA11yMarker; h.marker && (h.marker.enabled ? (p(!0, h.marker, { states: { normal: { opacity: h.marker.states && h.marker.states.normal && h.marker.states.normal.opacity || 1 } } }), g.hasForcedA11yMarker = !1) : (m(h), g.hasForcedA11yMarker = !0)) }
                        } else this.a11yMarkersForced && (delete this.a11yMarkersForced, (a = this.resetA11yMarkerOptions) && p(!0, this.options,
                            { marker: { enabled: a.enabled, states: { normal: { opacity: a.states && a.states.normal && a.states.normal.opacity } } } }))
                    }); n(a.Series, "afterSetOptions", function (a) { this.resetA11yMarkerOptions = p(a.options.marker || {}, this.userOptions.marker || {}) }); n(a.Series, "afterRender", function () {
                        if (this.chart.styledMode) {
                            if (this.markerGroup) this.markerGroup[this.a11yMarkersForced ? "addClass" : "removeClass"]("highcharts-a11y-markers-hidden"); this._hasPointMarkers && this.points && this.points.length && this.points.forEach(function (a) {
                                a.graphic &&
                                (a.graphic[a.hasForcedA11yMarker ? "addClass" : "removeClass"]("highcharts-a11y-marker-hidden"), a.graphic[!1 === a.hasForcedA11yMarker ? "addClass" : "removeClass"]("highcharts-a11y-marker-visible"))
                            })
                        }
                    })
                }
            }); r(a, "Accessibility/Components/SeriesComponent/SeriesComponent.js", [a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/AccessibilityComponent.js"], a["Accessibility/Components/SeriesComponent/SeriesKeyboardNavigation.js"], a["Accessibility/Components/SeriesComponent/NewDataAnnouncer.js"], a["Accessibility/Components/SeriesComponent/ForcedMarkers.js"],
            a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/Components/SeriesComponent/SeriesDescriber.js"], a["Core/Tooltip.js"]], function (a, h, q, n, p, l, g, x, k) {
                h = h.extend; var e = g.hideSeriesFromAT, d = x.describeSeries; a.SeriesAccessibilityDescriber = x; l(); a = function () { }; a.prototype = new q; h(a.prototype, {
                    init: function () {
                        this.newDataAnnouncer = new p(this.chart); this.newDataAnnouncer.init(); this.keyboardNavigation = new n(this.chart, this.keyCodes); this.keyboardNavigation.init(); this.hideTooltipFromATWhenShown();
                        this.hideSeriesLabelsFromATWhenShown()
                    }, hideTooltipFromATWhenShown: function () { var b = this; this.addEvent(k, "refresh", function () { this.chart === b.chart && this.label && this.label.element && this.label.element.setAttribute("aria-hidden", !0) }) }, hideSeriesLabelsFromATWhenShown: function () { this.addEvent(this.chart, "afterDrawSeriesLabels", function () { this.series.forEach(function (b) { b.labelBySeries && b.labelBySeries.attr("aria-hidden", !0) }) }) }, onChartRender: function () {
                        this.chart.series.forEach(function (b) {
                            !1 !== (b.options.accessibility &&
                                b.options.accessibility.enabled) && b.visible ? d(b) : e(b)
                        })
                    }, getKeyboardNavigation: function () { return this.keyboardNavigation.getKeyboardNavigationHandler() }, destroy: function () { this.newDataAnnouncer.destroy(); this.keyboardNavigation.destroy() }
                }); return a
            }); r(a, "Accessibility/Components/ZoomComponent.js", [a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/AccessibilityComponent.js"], a["Accessibility/KeyboardNavigationHandler.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/Utils/HTMLUtilities.js"]],
                function (a, h, q, n, p, l) {
                    var g = h.extend, m = h.pick, k = p.unhideChartElementFromAT, e = l.setElAttrs, d = l.removeElement; a.Axis.prototype.panStep = function (b, a) { var c = a || 3; a = this.getExtremes(); var d = (a.max - a.min) / c * b; c = a.max + d; d = a.min + d; var f = c - d; 0 > b && d < a.dataMin ? (d = a.dataMin, c = d + f) : 0 < b && c > a.dataMax && (c = a.dataMax, d = c - f); this.setExtremes(d, c) }; a = function () { }; a.prototype = new q; g(a.prototype, {
                        init: function () {
                            var b = this, a = this.chart;["afterShowResetZoom", "afterDrilldown", "drillupall"].forEach(function (c) {
                                b.addEvent(a,
                                    c, function () { b.updateProxyOverlays() })
                            })
                        }, onChartUpdate: function () { var b = this.chart, a = this; b.mapNavButtons && b.mapNavButtons.forEach(function (c, d) { k(b, c.element); a.setMapNavButtonAttrs(c.element, "accessibility.zoom.mapZoom" + (d ? "Out" : "In")) }) }, setMapNavButtonAttrs: function (b, a) { var c = this.chart; a = c.langFormat(a, { chart: c }); e(b, { tabindex: -1, role: "button", "aria-label": a }) }, onChartRender: function () { this.updateProxyOverlays() }, updateProxyOverlays: function () {
                            var b = this.chart; d(this.drillUpProxyGroup); d(this.resetZoomProxyGroup);
                            b.resetZoomButton && this.recreateProxyButtonAndGroup(b.resetZoomButton, "resetZoomProxyButton", "resetZoomProxyGroup", b.langFormat("accessibility.zoom.resetZoomButton", { chart: b })); b.drillUpButton && this.recreateProxyButtonAndGroup(b.drillUpButton, "drillUpProxyButton", "drillUpProxyGroup", b.langFormat("accessibility.drillUpButton", { chart: b, buttonText: b.getDrilldownBackText() }))
                        }, recreateProxyButtonAndGroup: function (b, a, c, e) {
                            d(this[c]); this[c] = this.addProxyGroup(); this[a] = this.createProxyButton(b, this[c],
                                { "aria-label": e, tabindex: -1 })
                        }, getMapZoomNavigation: function () { var b = this.keyCodes, a = this.chart, c = this; return new n(a, { keyCodeMap: [[[b.up, b.down, b.left, b.right], function (b) { return c.onMapKbdArrow(this, b) }], [[b.tab], function (b, a) { return c.onMapKbdTab(this, a) }], [[b.space, b.enter], function () { return c.onMapKbdClick(this) }]], validate: function () { return !!(a.mapZoom && a.mapNavButtons && a.mapNavButtons.length) }, init: function (b) { return c.onMapNavInit(b) } }) }, onMapKbdArrow: function (b, a) {
                            var c = this.keyCodes; this.chart[a ===
                                c.up || a === c.down ? "yAxis" : "xAxis"][0].panStep(a === c.left || a === c.up ? -1 : 1); return b.response.success
                        }, onMapKbdTab: function (b, a) { var c = this.chart; b = b.response; var d = (a = a.shiftKey) && !this.focusedMapNavButtonIx || !a && this.focusedMapNavButtonIx; c.mapNavButtons[this.focusedMapNavButtonIx].setState(0); if (d) return c.mapZoom(), b[a ? "prev" : "next"]; this.focusedMapNavButtonIx += a ? -1 : 1; a = c.mapNavButtons[this.focusedMapNavButtonIx]; c.setFocusToElement(a.box, a.element); a.setState(2); return b.success }, onMapKbdClick: function (b) {
                            this.fakeClickEvent(this.chart.mapNavButtons[this.focusedMapNavButtonIx].element);
                            return b.response.success
                        }, onMapNavInit: function (b) { var a = this.chart, c = a.mapNavButtons[0], d = a.mapNavButtons[1]; c = 0 < b ? c : d; a.setFocusToElement(c.box, c.element); c.setState(2); this.focusedMapNavButtonIx = 0 < b ? 0 : 1 }, simpleButtonNavigation: function (b, a, c) {
                            var d = this.keyCodes, e = this, f = this.chart; return new n(f, {
                                keyCodeMap: [[[d.tab, d.up, d.down, d.left, d.right], function (b, a) { return this.response[b === d.tab && a.shiftKey || b === d.left || b === d.up ? "prev" : "next"] }], [[d.space, d.enter], function () {
                                    var b = c(this, f); return m(b,
                                        this.response.success)
                                }]], validate: function () { return f[b] && f[b].box && e[a] }, init: function () { f.setFocusToElement(f[b].box, e[a]) }
                            })
                        }, getKeyboardNavigation: function () { return [this.simpleButtonNavigation("resetZoomButton", "resetZoomProxyButton", function (b, a) { a.zoomOut() }), this.simpleButtonNavigation("drillUpButton", "drillUpProxyButton", function (b, a) { a.drillUp(); return b.response.prev }), this.getMapZoomNavigation()] }
                    }); return a
                }); r(a, "Accessibility/Components/RangeSelectorComponent.js", [a["Core/Globals.js"],
                a["Core/Utilities.js"], a["Accessibility/AccessibilityComponent.js"], a["Accessibility/KeyboardNavigationHandler.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/Utils/HTMLUtilities.js"]], function (a, h, q, n, p, l) {
                    h = h.extend; var g = p.unhideChartElementFromAT, m = l.setElAttrs; a.Chart.prototype.highlightRangeSelectorButton = function (a) {
                        var e = this.rangeSelector.buttons, d = this.highlightedRangeSelectorItemIx; "undefined" !== typeof d && e[d] && e[d].setState(this.oldRangeSelectorItemState || 0); this.highlightedRangeSelectorItemIx =
                            a; return e[a] ? (this.setFocusToElement(e[a].box, e[a].element), this.oldRangeSelectorItemState = e[a].state, e[a].setState(2), !0) : !1
                    }; a = function () { }; a.prototype = new q; h(a.prototype, {
                        onChartUpdate: function () {
                            var a = this.chart, e = this, d = a.rangeSelector; d && (d.buttons && d.buttons.length && d.buttons.forEach(function (b) { g(a, b.element); e.setRangeButtonAttrs(b) }), d.maxInput && d.minInput && ["minInput", "maxInput"].forEach(function (b, f) {
                                if (b = d[b]) g(a, b), e.setRangeInputAttrs(b, "accessibility.rangeSelector." + (f ? "max" : "min") +
                                    "InputLabel")
                            }))
                        }, setRangeButtonAttrs: function (a) { var e = this.chart; e = e.langFormat("accessibility.rangeSelector.buttonText", { chart: e, buttonText: a.text && a.text.textStr }); m(a.element, { tabindex: -1, role: "button", "aria-label": e }) }, setRangeInputAttrs: function (a, e) { var d = this.chart; m(a, { tabindex: -1, role: "textbox", "aria-label": d.langFormat(e, { chart: d }) }) }, getRangeSelectorButtonNavigation: function () {
                            var a = this.chart, e = this.keyCodes, d = this; return new n(a, {
                                keyCodeMap: [[[e.left, e.right, e.up, e.down], function (b) {
                                    return d.onButtonNavKbdArrowKey(this,
                                        b)
                                }], [[e.enter, e.space], function () { return d.onButtonNavKbdClick(this) }]], validate: function () { return a.rangeSelector && a.rangeSelector.buttons && a.rangeSelector.buttons.length }, init: function (b) { var d = a.rangeSelector.buttons.length - 1; a.highlightRangeSelectorButton(0 < b ? 0 : d) }
                            })
                        }, onButtonNavKbdArrowKey: function (a, e) {
                            var d = a.response, b = this.keyCodes, f = this.chart, c = f.options.accessibility.keyboardNavigation.wrapAround; e = e === b.left || e === b.up ? -1 : 1; return f.highlightRangeSelectorButton(f.highlightedRangeSelectorItemIx +
                                e) ? d.success : c ? (a.init(e), d.success) : d[0 < e ? "next" : "prev"]
                        }, onButtonNavKbdClick: function (a) { a = a.response; var e = this.chart; 3 !== e.oldRangeSelectorItemState && this.fakeClickEvent(e.rangeSelector.buttons[e.highlightedRangeSelectorItemIx].element); return a.success }, getRangeSelectorInputNavigation: function () {
                            var a = this.chart, e = this.keyCodes, d = this; return new n(a, {
                                keyCodeMap: [[[e.tab, e.up, e.down], function (b, a) { return d.onInputKbdMove(this, b === e.tab && a.shiftKey || b === e.up ? -1 : 1) }]], validate: function () {
                                    return a.rangeSelector &&
                                        a.rangeSelector.inputGroup && "hidden" !== a.rangeSelector.inputGroup.element.getAttribute("visibility") && !1 !== a.options.rangeSelector.inputEnabled && a.rangeSelector.minInput && a.rangeSelector.maxInput
                                }, init: function (b) { d.onInputNavInit(b) }, terminate: function () { d.onInputNavTerminate() }
                            })
                        }, onInputKbdMove: function (a, e) { var d = this.chart; a = a.response; var b = d.highlightedInputRangeIx += e; if (1 < b || 0 > b) return a[0 < e ? "next" : "prev"]; d.rangeSelector[b ? "maxInput" : "minInput"].focus(); return a.success }, onInputNavInit: function (a) {
                            var e =
                                this.chart; a = 0 < a ? 0 : 1; e.highlightedInputRangeIx = a; e.rangeSelector[a ? "maxInput" : "minInput"].focus()
                        }, onInputNavTerminate: function () { var a = this.chart.rangeSelector || {}; a.maxInput && a.hideInput("max"); a.minInput && a.hideInput("min") }, getKeyboardNavigation: function () { return [this.getRangeSelectorButtonNavigation(), this.getRangeSelectorInputNavigation()] }
                    }); return a
                }); r(a, "Accessibility/Components/InfoRegionsComponent.js", [a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/AccessibilityComponent.js"],
                a["Accessibility/Utils/Announcer.js"], a["Accessibility/Components/AnnotationsA11y.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/Utils/HTMLUtilities.js"]], function (a, h, q, n, p, l, g) {
                    function m(b) { return b.replace(/&lt;(h[1-7]|p|div|ul|ol|li)&gt;/g, "<$1>").replace(/&lt;&#x2F;(h[1-7]|p|div|ul|ol|li|a|button)&gt;/g, "</$1>").replace(/&lt;(div|a|button) id=&quot;([a-zA-Z\-0-9#]*?)&quot;&gt;/g, '<$1 id="$2">') } var k = a.doc, e = h.extend, d = h.format, b = h.pick, f = p.getAnnotationsInfoHTML, c = l.unhideChartElementFromAT,
                        w = l.getChartTitle, r = l.getAxisDescription, z = g.addClass, t = g.setElAttrs, E = g.escapeStringForHTML, B = g.stripHTMLTagsFromString, C = g.getElement, u = g.visuallyHideElement; a.Chart.prototype.getTypeDescription = function (b) {
                            var a = b[0], c = this.series && this.series[0] || {}; c = { numSeries: this.series.length, numPoints: c.points && c.points.length, chart: this, mapTitle: c.mapTitle }; if (!a) return this.langFormat("accessibility.chartTypes.emptyChart", c); if ("map" === a) return c.mapTitle ? this.langFormat("accessibility.chartTypes.mapTypeDescription",
                                c) : this.langFormat("accessibility.chartTypes.unknownMap", c); if (1 < this.types.length) return this.langFormat("accessibility.chartTypes.combinationChart", c); b = b[0]; a = this.langFormat("accessibility.seriesTypeDescriptions." + b, c); var d = this.series && 2 > this.series.length ? "Single" : "Multiple"; return (this.langFormat("accessibility.chartTypes." + b + d, c) || this.langFormat("accessibility.chartTypes.default" + d, c)) + (a ? " " + a : "")
                        }; h = function () { }; h.prototype = new q; e(h.prototype, {
                            init: function () {
                                var b = this.chart, a = this;
                                this.initRegionsDefinitions(); this.addEvent(b, "afterGetTable", function (b) { a.onDataTableCreated(b) }); this.addEvent(b, "afterViewData", function (b) { a.dataTableDiv = b; setTimeout(function () { a.focusDataTable() }, 300) }); this.announcer = new n(b, "assertive")
                            }, initRegionsDefinitions: function () {
                                var b = this; this.screenReaderSections = {
                                    before: {
                                        element: null, buildContent: function (a) { var c = a.options.accessibility.screenReaderSection.beforeChartFormatter; return c ? c(a) : b.defaultBeforeChartFormatter(a) }, insertIntoDOM: function (b,
                                            a) { a.renderTo.insertBefore(b, a.renderTo.firstChild) }, afterInserted: function () { "undefined" !== typeof b.sonifyButtonId && b.initSonifyButton(b.sonifyButtonId); "undefined" !== typeof b.dataTableButtonId && b.initDataTableButton(b.dataTableButtonId) }
                                    }, after: { element: null, buildContent: function (a) { var c = a.options.accessibility.screenReaderSection.afterChartFormatter; return c ? c(a) : b.defaultAfterChartFormatter() }, insertIntoDOM: function (b, a) { a.renderTo.insertBefore(b, a.container.nextSibling) } }
                                }
                            }, onChartRender: function () {
                                var b =
                                    this; this.linkedDescriptionElement = this.getLinkedDescriptionElement(); this.setLinkedDescriptionAttrs(); Object.keys(this.screenReaderSections).forEach(function (a) { b.updateScreenReaderSection(a) })
                            }, getLinkedDescriptionElement: function () { var b = this.chart.options.accessibility.linkedDescription; if (b) { if ("string" !== typeof b) return b; b = d(b, this.chart); b = k.querySelectorAll(b); if (1 === b.length) return b[0] } }, setLinkedDescriptionAttrs: function () {
                                var b = this.linkedDescriptionElement; b && (b.setAttribute("aria-hidden",
                                    "true"), z(b, "highcharts-linked-description"))
                            }, updateScreenReaderSection: function (b) { var a = this.chart, d = this.screenReaderSections[b], e = d.buildContent(a), f = d.element = d.element || this.createElement("div"), l = f.firstChild || this.createElement("div"); this.setScreenReaderSectionAttribs(f, b); l.innerHTML = e; f.appendChild(l); d.insertIntoDOM(f, a); u(l); c(a, l); d.afterInserted && d.afterInserted() }, setScreenReaderSectionAttribs: function (b, a) {
                                var c = this.chart, d = c.langFormat("accessibility.screenReaderSection." + a + "RegionLabel",
                                    { chart: c }); t(b, { id: "highcharts-screen-reader-region-" + a + "-" + c.index, "aria-label": d }); b.style.position = "relative"; "all" === c.options.accessibility.landmarkVerbosity && d && b.setAttribute("role", "region")
                            }, defaultBeforeChartFormatter: function () {
                                var b, c = this.chart, d = c.options.accessibility.screenReaderSection.beforeChartFormat, e = this.getAxesDescription(), l = c.sonify && (null === (b = c.options.sonification) || void 0 === b ? void 0 : b.enabled); b = "highcharts-a11y-sonify-data-btn-" + c.index; var k = "hc-linkto-highcharts-data-table-" +
                                    c.index, g = f(c), h = c.langFormat("accessibility.screenReaderSection.annotations.heading", { chart: c }); e = { chartTitle: w(c), typeDescription: this.getTypeDescriptionText(), chartSubtitle: this.getSubtitleText(), chartLongdesc: this.getLongdescText(), xAxisDescription: e.xAxis, yAxisDescription: e.yAxis, playAsSoundButton: l ? this.getSonifyButtonText(b) : "", viewTableButton: c.getCSV ? this.getDataTableButtonText(k) : "", annotationsTitle: g ? h : "", annotationsList: g }; c = a.i18nFormat(d, e, c); this.dataTableButtonId = k; this.sonifyButtonId =
                                        b; return m(E(c)).replace(/<(\w+)[^>]*?>\s*<\/\1>/g, "")
                            }, defaultAfterChartFormatter: function () { var b = this.chart, c = b.options.accessibility.screenReaderSection.afterChartFormat, d = { endOfChartMarker: this.getEndOfChartMarkerText() }; b = a.i18nFormat(c, d, b); return m(E(b)).replace(/<(\w+)[^>]*?>\s*<\/\1>/g, "") }, getLinkedDescription: function () { var b = this.linkedDescriptionElement; return B(b && b.innerHTML || "") }, getLongdescText: function () {
                                var b = this.chart.options, a = b.caption; a = a && a.text; var c = this.getLinkedDescription();
                                return b.accessibility.description || c || a || ""
                            }, getTypeDescriptionText: function () { var b = this.chart; return b.types ? b.options.accessibility.typeDescription || b.getTypeDescription(b.types) : "" }, getDataTableButtonText: function (b) { var a = this.chart; a = a.langFormat("accessibility.table.viewAsDataTableButtonText", { chart: a, chartTitle: w(a) }); return '<button id="' + b + '">' + a + "</button>" }, getSonifyButtonText: function (b) {
                                var a, c = this.chart; if (!1 === (null === (a = c.options.sonification) || void 0 === a ? void 0 : a.enabled)) return "";
                                a = c.langFormat("accessibility.sonification.playAsSoundButtonText", { chart: c, chartTitle: w(c) }); return '<button id="' + b + '">' + a + "</button>"
                            }, getSubtitleText: function () { var b = this.chart.options.subtitle; return B(b && b.text || "") }, getEndOfChartMarkerText: function () { var b = this.chart, a = b.langFormat("accessibility.screenReaderSection.endOfChartMarker", { chart: b }); return '<div id="highcharts-end-of-chart-marker-' + b.index + '">' + a + "</div>" }, onDataTableCreated: function (b) {
                                var a = this.chart; a.options.accessibility.enabled &&
                                    (this.viewDataTableButton && this.viewDataTableButton.setAttribute("aria-expanded", "true"), b.html = b.html.replace("<table ", '<table tabindex="-1" summary="' + a.langFormat("accessibility.table.tableSummary", { chart: a }) + '"'))
                            }, focusDataTable: function () { var b = this.dataTableDiv; (b = b && b.getElementsByTagName("table")[0]) && b.focus && b.focus() }, initSonifyButton: function (b) {
                                var a = this, c = this.sonifyButton = C(b), d = this.chart, e = function (b) {
                                    null === c || void 0 === c ? void 0 : c.setAttribute("aria-hidden", "true"); null === c || void 0 ===
                                        c ? void 0 : c.setAttribute("aria-label", ""); b.preventDefault(); b.stopPropagation(); b = d.langFormat("accessibility.sonification.playAsSoundClickAnnouncement", { chart: d }); a.announcer.announce(b); setTimeout(function () { null === c || void 0 === c ? void 0 : c.removeAttribute("aria-hidden"); null === c || void 0 === c ? void 0 : c.removeAttribute("aria-label"); d.sonify && d.sonify() }, 1E3)
                                }; c && d && (t(c, { tabindex: "-1" }), c.onclick = function (b) {
                                    var a; ((null === (a = d.options.accessibility) || void 0 === a ? void 0 : a.screenReaderSection.onPlayAsSoundClick) ||
                                        e).call(this, b, d)
                                })
                            }, initDataTableButton: function (b) { var a = this.viewDataTableButton = C(b), c = this.chart; b = b.replace("hc-linkto-", ""); a && (t(a, { tabindex: "-1", "aria-expanded": !!C(b) }), a.onclick = c.options.accessibility.screenReaderSection.onViewDataTableClick || function () { c.viewData() }) }, getAxesDescription: function () {
                                var a = this.chart, c = function (c, d) { c = a[c]; return 1 < c.length || c[0] && b(c[0].options.accessibility && c[0].options.accessibility.enabled, d) }, d = !!a.types && 0 > a.types.indexOf("map"), e = !!a.hasCartesianSeries,
                                f = c("xAxis", !a.angular && e && d); c = c("yAxis", e && d); d = {}; f && (d.xAxis = this.getAxisDescriptionText("xAxis")); c && (d.yAxis = this.getAxisDescriptionText("yAxis")); return d
                            }, getAxisDescriptionText: function (b) { var a = this, c = this.chart, d = c[b]; return c.langFormat("accessibility.axis." + b + "Description" + (1 < d.length ? "Plural" : "Singular"), { chart: c, names: d.map(function (b) { return r(b) }), ranges: d.map(function (b) { return a.getAxisRangeDescription(b) }), numAxes: d.length }) }, getAxisRangeDescription: function (b) {
                                var a = b.options ||
                                    {}; return a.accessibility && "undefined" !== typeof a.accessibility.rangeDescription ? a.accessibility.rangeDescription : b.categories ? this.getCategoryAxisRangeDesc(b) : !b.dateTime || 0 !== b.min && 0 !== b.dataMin ? this.getAxisFromToDescription(b) : this.getAxisTimeLengthDesc(b)
                            }, getCategoryAxisRangeDesc: function (b) { var a = this.chart; return b.dataMax && b.dataMin ? a.langFormat("accessibility.axis.rangeCategories", { chart: a, axis: b, numCategories: b.dataMax - b.dataMin + 1 }) : "" }, getAxisTimeLengthDesc: function (b) {
                                var a = this.chart,
                                c = {}, d = "Seconds"; c.Seconds = ((b.max || 0) - (b.min || 0)) / 1E3; c.Minutes = c.Seconds / 60; c.Hours = c.Minutes / 60; c.Days = c.Hours / 24;["Minutes", "Hours", "Days"].forEach(function (b) { 2 < c[b] && (d = b) }); var e = c[d].toFixed("Seconds" !== d && "Minutes" !== d ? 1 : 0); return a.langFormat("accessibility.axis.timeRange" + d, { chart: a, axis: b, range: e.replace(".0", "") })
                            }, getAxisFromToDescription: function (b) {
                                var a = this.chart, c = a.options.accessibility.screenReaderSection.axisRangeDateFormat, d = function (d) {
                                    return b.dateTime ? a.time.dateFormat(c,
                                        b[d]) : b[d]
                                }; return a.langFormat("accessibility.axis.rangeFromTo", { chart: a, axis: b, rangeFrom: d("min"), rangeTo: d("max") })
                            }, destroy: function () { var b; null === (b = this.announcer) || void 0 === b ? void 0 : b.destroy() }
                        }); return h
                }); r(a, "Accessibility/Components/ContainerComponent.js", [a["Core/Globals.js"], a["Core/Utilities.js"], a["Accessibility/Utils/HTMLUtilities.js"], a["Accessibility/Utils/ChartUtilities.js"], a["Accessibility/AccessibilityComponent.js"]], function (a, h, q, n, p) {
                    var l = a.win.document; a = h.extend; var g =
                        q.stripHTMLTagsFromString, m = n.unhideChartElementFromAT, k = n.getChartTitle; q = function () { }; q.prototype = new p; a(q.prototype, {
                            onChartUpdate: function () { this.handleSVGTitleElement(); this.setSVGContainerLabel(); this.setGraphicContainerAttrs(); this.setRenderToAttrs(); this.makeCreditsAccessible() }, handleSVGTitleElement: function () {
                                var a = this.chart, d = "highcharts-title-" + a.index, b = g(a.langFormat("accessibility.svgContainerTitle", { chartTitle: k(a) })); if (b.length) {
                                    var f = this.svgTitleElement = this.svgTitleElement ||
                                        l.createElementNS("http://www.w3.org/2000/svg", "title"); f.textContent = b; f.id = d; a.renderTo.insertBefore(f, a.renderTo.firstChild)
                                }
                            }, setSVGContainerLabel: function () { var a = this.chart, d = g(a.langFormat("accessibility.svgContainerLabel", { chartTitle: k(a) })); a.renderer.box && d.length && a.renderer.box.setAttribute("aria-label", d) }, setGraphicContainerAttrs: function () { var a = this.chart, d = a.langFormat("accessibility.graphicContainerLabel", { chartTitle: k(a) }); d.length && a.container.setAttribute("aria-label", d) }, setRenderToAttrs: function () {
                                var a =
                                    this.chart; "disabled" !== a.options.accessibility.landmarkVerbosity ? a.renderTo.setAttribute("role", "region") : a.renderTo.removeAttribute("role"); a.renderTo.setAttribute("aria-label", a.langFormat("accessibility.chartContainerLabel", { title: k(a), chart: a }))
                            }, makeCreditsAccessible: function () { var a = this.chart, d = a.credits; d && (d.textStr && d.element.setAttribute("aria-label", g(a.langFormat("accessibility.credits", { creditsStr: d.textStr }))), m(a, d.element)) }, destroy: function () {
                                this.chart.renderTo.setAttribute("aria-hidden",
                                    !0)
                            }
                        }); return q
                }); r(a, "Accessibility/HighContrastMode.js", [a["Core/Globals.js"]], function (a) {
                    var h = a.isMS, m = a.win, n = m.document; return {
                        isHighContrastModeActive: function () {
                            var a = /(Edg)/.test(m.navigator.userAgent); if (m.matchMedia && a) return m.matchMedia("(-ms-high-contrast: active)").matches; if (h && m.getComputedStyle) {
                                a = n.createElement("div"); a.style.backgroundImage = "url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)"; n.body.appendChild(a); var l = (a.currentStyle || m.getComputedStyle(a)).backgroundImage;
                                n.body.removeChild(a); return "none" === l
                            } return !1
                        }, setHighContrastTheme: function (a) { a.highContrastModeActive = !0; var l = a.options.accessibility.highContrastTheme; a.update(l, !1); a.series.forEach(function (a) { var g = l.plotOptions[a.type] || {}; a.update({ color: g.color || "windowText", colors: [g.color || "windowText"], borderColor: g.borderColor || "window" }); a.points.forEach(function (a) { a.options && a.options.color && a.update({ color: g.color || "windowText", borderColor: g.borderColor || "window" }, !1) }) }); a.redraw() }
                    }
                }); r(a, "Accessibility/HighContrastTheme.js",
                    [], function () {
                        return {
                            chart: { backgroundColor: "window" }, title: { style: { color: "windowText" } }, subtitle: { style: { color: "windowText" } }, colorAxis: { minColor: "windowText", maxColor: "windowText", stops: [] }, colors: ["windowText"], xAxis: { gridLineColor: "windowText", labels: { style: { color: "windowText" } }, lineColor: "windowText", minorGridLineColor: "windowText", tickColor: "windowText", title: { style: { color: "windowText" } } }, yAxis: {
                                gridLineColor: "windowText", labels: { style: { color: "windowText" } }, lineColor: "windowText", minorGridLineColor: "windowText",
                                tickColor: "windowText", title: { style: { color: "windowText" } }
                            }, tooltip: { backgroundColor: "window", borderColor: "windowText", style: { color: "windowText" } }, plotOptions: {
                                series: { lineColor: "windowText", fillColor: "window", borderColor: "windowText", edgeColor: "windowText", borderWidth: 1, dataLabels: { connectorColor: "windowText", color: "windowText", style: { color: "windowText", textOutline: "none" } }, marker: { lineColor: "windowText", fillColor: "windowText" } }, pie: { color: "window", colors: ["window"], borderColor: "windowText", borderWidth: 1 },
                                boxplot: { fillColor: "window" }, candlestick: { lineColor: "windowText", fillColor: "window" }, errorbar: { fillColor: "window" }
                            }, legend: { backgroundColor: "window", itemStyle: { color: "windowText" }, itemHoverStyle: { color: "windowText" }, itemHiddenStyle: { color: "#555" }, title: { style: { color: "windowText" } } }, credits: { style: { color: "windowText" } }, labels: { style: { color: "windowText" } }, drilldown: { activeAxisLabelStyle: { color: "windowText" }, activeDataLabelStyle: { color: "windowText" } }, navigation: {
                                buttonOptions: {
                                    symbolStroke: "windowText",
                                    theme: { fill: "window" }
                                }
                            }, rangeSelector: { buttonTheme: { fill: "window", stroke: "windowText", style: { color: "windowText" }, states: { hover: { fill: "window", stroke: "windowText", style: { color: "windowText" } }, select: { fill: "#444", stroke: "windowText", style: { color: "windowText" } } } }, inputBoxBorderColor: "windowText", inputStyle: { backgroundColor: "window", color: "windowText" }, labelStyle: { color: "windowText" } }, navigator: {
                                handles: { backgroundColor: "window", borderColor: "windowText" }, outlineColor: "windowText", maskFill: "transparent",
                                series: { color: "windowText", lineColor: "windowText" }, xAxis: { gridLineColor: "windowText" }
                            }, scrollbar: { barBackgroundColor: "#444", barBorderColor: "windowText", buttonArrowColor: "windowText", buttonBackgroundColor: "window", buttonBorderColor: "windowText", rifleColor: "windowText", trackBackgroundColor: "window", trackBorderColor: "windowText" }
                        }
                    }); r(a, "Accessibility/Options/Options.js", [], function () {
                        return {
                            accessibility: {
                                enabled: !0, screenReaderSection: {
                                    beforeChartFormat: "<h5>{chartTitle}</h5><div>{typeDescription}</div><div>{chartSubtitle}</div><div>{chartLongdesc}</div><div>{playAsSoundButton}</div><div>{viewTableButton}</div><div>{xAxisDescription}</div><div>{yAxisDescription}</div><div>{annotationsTitle}{annotationsList}</div>",
                                    afterChartFormat: "{endOfChartMarker}", axisRangeDateFormat: "%Y-%m-%d %H:%M:%S"
                                }, series: { describeSingleSeries: !1, pointDescriptionEnabledThreshold: 200 }, point: { valueDescriptionFormat: "{index}. {xDescription}{separator}{value}." }, landmarkVerbosity: "all", linkedDescription: '*[data-highcharts-chart="{index}"] + .highcharts-description', keyboardNavigation: {
                                    enabled: !0, focusBorder: { enabled: !0, hideBrowserFocusOutline: !0, style: { color: "#335cad", lineWidth: 2, borderRadius: 3 }, margin: 2 }, order: ["series", "zoom", "rangeSelector",
                                        "legend", "chartMenu"], wrapAround: !0, seriesNavigation: { skipNullPoints: !0, pointNavigationEnabledThreshold: !1 }
                                }, announceNewData: { enabled: !1, minAnnounceInterval: 5E3, interruptUser: !1 }
                            }, legend: { accessibility: { enabled: !0, keyboardNavigation: { enabled: !0 } } }, exporting: { accessibility: { enabled: !0 } }
                        }
                    }); r(a, "Accessibility/Options/LangOptions.js", [], function () {
                        return {
                            accessibility: {
                                defaultChartTitle: "Chart", chartContainerLabel: "{title}. Highcharts interactive chart.", svgContainerLabel: "Interactive chart", drillUpButton: "{buttonText}",
                                credits: "Chart credits: {creditsStr}", thousandsSep: ",", svgContainerTitle: "", graphicContainerLabel: "", screenReaderSection: { beforeRegionLabel: "Chart screen reader information.", afterRegionLabel: "", annotations: { heading: "Chart annotations summary", descriptionSinglePoint: "{annotationText}. Related to {annotationPoint}", descriptionMultiplePoints: "{annotationText}. Related to {annotationPoint}{ Also related to, #each(additionalAnnotationPoints)}", descriptionNoPoints: "{annotationText}" }, endOfChartMarker: "End of interactive chart." },
                                sonification: { playAsSoundButtonText: "Play as sound, {chartTitle}", playAsSoundClickAnnouncement: "Play" }, legend: { legendLabel: "Toggle series visibility", legendItem: "Hide {itemName}" }, zoom: { mapZoomIn: "Zoom chart", mapZoomOut: "Zoom out chart", resetZoomButton: "Reset zoom" }, rangeSelector: { minInputLabel: "Select start date.", maxInputLabel: "Select end date.", buttonText: "Select range {buttonText}" }, table: { viewAsDataTableButtonText: "View as data table, {chartTitle}", tableSummary: "Table representation of chart." },
                                announceNewData: { newDataAnnounce: "Updated data for chart {chartTitle}", newSeriesAnnounceSingle: "New data series: {seriesDesc}", newPointAnnounceSingle: "New data point: {pointDesc}", newSeriesAnnounceMultiple: "New data series in chart {chartTitle}: {seriesDesc}", newPointAnnounceMultiple: "New data point in chart {chartTitle}: {pointDesc}" }, seriesTypeDescriptions: {
                                    boxplot: "Box plot charts are typically used to display groups of statistical data. Each data point in the chart can have up to 5 values: minimum, lower quartile, median, upper quartile, and maximum.",
                                    arearange: "Arearange charts are line charts displaying a range between a lower and higher value for each point.", areasplinerange: "These charts are line charts displaying a range between a lower and higher value for each point.", bubble: "Bubble charts are scatter charts where each data point also has a size value.", columnrange: "Columnrange charts are column charts displaying a range between a lower and higher value for each point.", errorbar: "Errorbar series are used to display the variability of the data.",
                                    funnel: "Funnel charts are used to display reduction of data in stages.", pyramid: "Pyramid charts consist of a single pyramid with item heights corresponding to each point value.", waterfall: "A waterfall chart is a column chart where each column contributes towards a total end value."
                                }, chartTypes: {
                                    emptyChart: "Empty chart", mapTypeDescription: "Map of {mapTitle} with {numSeries} data series.", unknownMap: "Map of unspecified region with {numSeries} data series.", combinationChart: "Combination chart with {numSeries} data series.",
                                    defaultSingle: "Chart with {numPoints} data {#plural(numPoints, points, point)}.", defaultMultiple: "Chart with {numSeries} data series.", splineSingle: "Line chart with {numPoints} data {#plural(numPoints, points, point)}.", splineMultiple: "Line chart with {numSeries} lines.", lineSingle: "Line chart with {numPoints} data {#plural(numPoints, points, point)}.", lineMultiple: "Line chart with {numSeries} lines.", columnSingle: "Bar chart with {numPoints} {#plural(numPoints, bars, bar)}.", columnMultiple: "Bar chart with {numSeries} data series.",
                                    barSingle: "Bar chart with {numPoints} {#plural(numPoints, bars, bar)}.", barMultiple: "Bar chart with {numSeries} data series.", pieSingle: "Pie chart with {numPoints} {#plural(numPoints, slices, slice)}.", pieMultiple: "Pie chart with {numSeries} pies.", scatterSingle: "Scatter chart with {numPoints} {#plural(numPoints, points, point)}.", scatterMultiple: "Scatter chart with {numSeries} data series.", boxplotSingle: "Boxplot with {numPoints} {#plural(numPoints, boxes, box)}.", boxplotMultiple: "Boxplot with {numSeries} data series.",
                                    bubbleSingle: "Bubble chart with {numPoints} {#plural(numPoints, bubbles, bubble)}.", bubbleMultiple: "Bubble chart with {numSeries} data series."
                                }, axis: {
                                    xAxisDescriptionSingular: "The chart has 1 X axis displaying {names[0]}. {ranges[0]}", xAxisDescriptionPlural: "The chart has {numAxes} X axes displaying {#each(names, -1) }and {names[-1]}.", yAxisDescriptionSingular: "The chart has 1 Y axis displaying {names[0]}. {ranges[0]}", yAxisDescriptionPlural: "The chart has {numAxes} Y axes displaying {#each(names, -1) }and {names[-1]}.",
                                    timeRangeDays: "Range: {range} days.", timeRangeHours: "Range: {range} hours.", timeRangeMinutes: "Range: {range} minutes.", timeRangeSeconds: "Range: {range} seconds.", rangeFromTo: "Range: {rangeFrom} to {rangeTo}.", rangeCategories: "Range: {numCategories} categories."
                                }, exporting: { chartMenuLabel: "Chart menu", menuButtonLabel: "View chart menu", exportRegionLabel: "Chart menu" }, series: {
                                    summary: {
                                        "default": "{name}, series {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.", defaultCombination: "{name}, series {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.",
                                        line: "{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.", lineCombination: "{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.", spline: "{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.", splineCombination: "{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.", column: "{name}, bar series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bars, bar)}.",
                                        columnCombination: "{name}, series {ix} of {numSeries}. Bar series with {numPoints} {#plural(numPoints, bars, bar)}.", bar: "{name}, bar series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bars, bar)}.", barCombination: "{name}, series {ix} of {numSeries}. Bar series with {numPoints} {#plural(numPoints, bars, bar)}.", pie: "{name}, pie {ix} of {numSeries} with {numPoints} {#plural(numPoints, slices, slice)}.", pieCombination: "{name}, series {ix} of {numSeries}. Pie with {numPoints} {#plural(numPoints, slices, slice)}.",
                                        scatter: "{name}, scatter plot {ix} of {numSeries} with {numPoints} {#plural(numPoints, points, point)}.", scatterCombination: "{name}, series {ix} of {numSeries}, scatter plot with {numPoints} {#plural(numPoints, points, point)}.", boxplot: "{name}, boxplot {ix} of {numSeries} with {numPoints} {#plural(numPoints, boxes, box)}.", boxplotCombination: "{name}, series {ix} of {numSeries}. Boxplot with {numPoints} {#plural(numPoints, boxes, box)}.", bubble: "{name}, bubble series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bubbles, bubble)}.",
                                        bubbleCombination: "{name}, series {ix} of {numSeries}. Bubble series with {numPoints} {#plural(numPoints, bubbles, bubble)}.", map: "{name}, map {ix} of {numSeries} with {numPoints} {#plural(numPoints, areas, area)}.", mapCombination: "{name}, series {ix} of {numSeries}. Map with {numPoints} {#plural(numPoints, areas, area)}.", mapline: "{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}.", maplineCombination: "{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}.",
                                        mapbubble: "{name}, bubble series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bubbles, bubble)}.", mapbubbleCombination: "{name}, series {ix} of {numSeries}. Bubble series with {numPoints} {#plural(numPoints, bubbles, bubble)}."
                                    }, description: "{description}", xAxisDescription: "X axis, {name}", yAxisDescription: "Y axis, {name}", nullPointValue: "No value", pointAnnotationsDescription: "{Annotation: #each(annotations). }"
                                }
                            }
                        }
                    }); r(a, "Accessibility/Options/DeprecatedOptions.js", [a["Core/Utilities.js"]],
                        function (a) {
                            function h(a, e, d) { for (var b, f = 0; f < e.length - 1; ++f)b = e[f], a = a[b] = r(a[b], {}); a[e[e.length - 1]] = d } function m(a, e, d, b) { function f(b, a) { return a.reduce(function (b, a) { return b[a] }, b) } var c = f(a.options, e), l = f(a.options, d); Object.keys(b).forEach(function (f) { var k, m = c[f]; "undefined" !== typeof m && (h(l, b[f], m), g(32, !1, a, (k = {}, k[e.join(".") + "." + f] = d.join(".") + "." + b[f].join("."), k))) }) } function n(a) {
                                var e = a.options.chart || {}, d = a.options.accessibility || {};["description", "typeDescription"].forEach(function (b) {
                                    var f;
                                    e[b] && (d[b] = e[b], g(32, !1, a, (f = {}, f["chart." + b] = "use accessibility." + b, f)))
                                })
                            } function p(a) { a.axes.forEach(function (e) { (e = e.options) && e.description && (e.accessibility = e.accessibility || {}, e.accessibility.description = e.description, g(32, !1, a, { "axis.description": "use axis.accessibility.description" })) }) } function l(a) {
                                var e = {
                                    description: ["accessibility", "description"], exposeElementToA11y: ["accessibility", "exposeAsGroupOnly"], pointDescriptionFormatter: ["accessibility", "pointDescriptionFormatter"], skipKeyboardNavigation: ["accessibility",
                                        "keyboardNavigation", "enabled"]
                                }; a.series.forEach(function (d) { Object.keys(e).forEach(function (b) { var f, c = d.options[b]; "undefined" !== typeof c && (h(d.options, e[b], "skipKeyboardNavigation" === b ? !c : c), g(32, !1, a, (f = {}, f["series." + b] = "series." + e[b].join("."), f))) }) })
                            } var g = a.error, r = a.pick; return function (a) {
                                n(a); p(a); a.series && l(a); m(a, ["accessibility"], ["accessibility"], {
                                    pointDateFormat: ["point", "dateFormat"], pointDateFormatter: ["point", "dateFormatter"], pointDescriptionFormatter: ["point", "descriptionFormatter"],
                                    pointDescriptionThreshold: ["series", "pointDescriptionEnabledThreshold"], pointNavigationThreshold: ["keyboardNavigation", "seriesNavigation", "pointNavigationEnabledThreshold"], pointValueDecimals: ["point", "valueDecimals"], pointValuePrefix: ["point", "valuePrefix"], pointValueSuffix: ["point", "valueSuffix"], screenReaderSectionFormatter: ["screenReaderSection", "beforeChartFormatter"], describeSingleSeries: ["series", "describeSingleSeries"], seriesDescriptionFormatter: ["series", "descriptionFormatter"], onTableAnchorClick: ["screenReaderSection",
                                        "onViewDataTableClick"], axisRangeDateFormat: ["screenReaderSection", "axisRangeDateFormat"]
                                }); m(a, ["accessibility", "keyboardNavigation"], ["accessibility", "keyboardNavigation", "seriesNavigation"], { skipNullPoints: ["skipNullPoints"], mode: ["mode"] }); m(a, ["lang", "accessibility"], ["lang", "accessibility"], {
                                    legendItem: ["legend", "legendItem"], legendLabel: ["legend", "legendLabel"], mapZoomIn: ["zoom", "mapZoomIn"], mapZoomOut: ["zoom", "mapZoomOut"], resetZoomButton: ["zoom", "resetZoomButton"], screenReaderRegionLabel: ["screenReaderSection",
                                        "beforeRegionLabel"], rangeSelectorButton: ["rangeSelector", "buttonText"], rangeSelectorMaxInput: ["rangeSelector", "maxInputLabel"], rangeSelectorMinInput: ["rangeSelector", "minInputLabel"], svgContainerEnd: ["screenReaderSection", "endOfChartMarker"], viewAsDataTable: ["table", "viewAsDataTableButtonText"], tableSummary: ["table", "tableSummary"]
                                })
                            }
                        }); r(a, "Accessibility/A11yI18n.js", [a["Core/Globals.js"], a["Core/Utilities.js"]], function (a, h) {
                            function m(a, g) {
                                var h = a.indexOf("#each("), k = a.indexOf("#plural("), e = a.indexOf("["),
                                d = a.indexOf("]"); if (-1 < h) { e = a.slice(h).indexOf(")") + h; var b = a.substring(0, h); k = a.substring(e + 1); e = a.substring(h + 6, e).split(","); h = Number(e[1]); a = ""; if (g = g[e[0]]) for (h = isNaN(h) ? g.length : h, h = 0 > h ? g.length + h : Math.min(h, g.length), e = 0; e < h; ++e)a += b + g[e] + k; return a.length ? a : "" } if (-1 < k) {
                                    b = a.slice(k).indexOf(")") + k; a = a.substring(k + 8, b).split(","); switch (Number(g[a[0]])) { case 0: a = p(a[4], a[1]); break; case 1: a = p(a[2], a[1]); break; case 2: a = p(a[3], a[1]); break; default: a = a[1] }a ? (g = a, g = g.trim && g.trim() || g.replace(/^\s+|\s+$/g,
                                        "")) : g = ""; return g
                                } return -1 < e ? (k = a.substring(0, e), a = Number(a.substring(e + 1, d)), g = g[k], !isNaN(a) && g && (0 > a ? (b = g[g.length + a], "undefined" === typeof b && (b = g[0])) : (b = g[a], "undefined" === typeof b && (b = g[g.length - 1]))), "undefined" !== typeof b ? b : "") : "{" + a + "}"
                            } var n = h.format, p = h.pick; a.i18nFormat = function (a, g, h) {
                                var k = function (a, b) { a = a.slice(b || 0); var c = a.indexOf("{"), d = a.indexOf("}"); if (-1 < c && d > c) return { statement: a.substring(c + 1, d), begin: b + c + 1, end: b + d } }, e = [], d = 0; do {
                                    var b = k(a, d); var f = a.substring(d, b && b.begin -
                                        1); f.length && e.push({ value: f, type: "constant" }); b && e.push({ value: b.statement, type: "statement" }); d = b ? b.end + 1 : d + 1
                                } while (b); e.forEach(function (a) { "statement" === a.type && (a.value = m(a.value, g)) }); return n(e.reduce(function (a, b) { return a + b.value }, ""), g, h)
                            }; a.Chart.prototype.langFormat = function (h, g) { h = h.split("."); for (var l = this.options.lang, k = 0; k < h.length; ++k)l = l && l[h[k]]; return "string" === typeof l ? a.i18nFormat(l, g, this) : "" }
                        }); r(a, "Accessibility/FocusBorder.js", [a["Core/Globals.js"], a["Core/Renderer/SVG/SVGElement.js"],
                        a["Core/Renderer/SVG/SVGLabel.js"], a["Core/Utilities.js"]], function (a, h, q, n) {
                            function m(a) { if (!a.focusBorderDestroyHook) { var b = a.destroy; a.destroy = function () { var c, d; null === (d = null === (c = a.focusBorder) || void 0 === c ? void 0 : c.destroy) || void 0 === d ? void 0 : d.call(c); return b.apply(a, arguments) }; a.focusBorderDestroyHook = b } } function l(a) {
                                for (var b = [], c = 1; c < arguments.length; c++)b[c - 1] = arguments[c]; a.focusBorderUpdateHooks || (a.focusBorderUpdateHooks = {}, d.forEach(function (c) {
                                    c += "Setter"; var d = a[c] || a._defaultSetter;
                                    a.focusBorderUpdateHooks[c] = d; a[c] = function () { var c = d.apply(a, arguments); a.addFocusBorder.apply(a, b); return c }
                                }))
                            } function g(a) { a.focusBorderUpdateHooks && (Object.keys(a.focusBorderUpdateHooks).forEach(function (b) { var c = a.focusBorderUpdateHooks[b]; c === a._defaultSetter ? delete a[b] : a[b] = c }), delete a.focusBorderUpdateHooks) } var r = n.addEvent, k = n.extend, e = n.pick, d = "x y transform width height r d stroke-width".split(" "); k(h.prototype, {
                                addFocusBorder: function (b, d) {
                                    this.focusBorder && this.removeFocusBorder();
                                    var c = this.getBBox(), f = e(b, 3); c.x += this.translateX ? this.translateX : 0; c.y += this.translateY ? this.translateY : 0; var g = c.x - f, h = c.y - f, k = c.width + 2 * f, n = c.height + 2 * f, p = this instanceof q; if ("text" === this.element.nodeName || p) {
                                        var r = !!this.rotation; if (p) var u = { x: r ? 1 : 0, y: 0 }; else g = u = 0, "middle" === this.attr("text-anchor") ? (u = a.isFirefox && this.rotation ? .25 : .5, g = a.isFirefox && !this.rotation ? .75 : .5) : this.rotation ? u = .25 : g = .75, u = { x: u, y: g }; g = +this.attr("x") - c.width * u.x - f; h = +this.attr("y") - c.height * u.y - f; p && r && (p = k, k = n,
                                            n = p, g = +this.attr("x") - c.height * u.x - f, h = +this.attr("y") - c.width * u.y - f)
                                    } this.focusBorder = this.renderer.rect(g, h, k, n, parseInt((d && d.borderRadius || 0).toString(), 10)).addClass("highcharts-focus-border").attr({ zIndex: 99 }).add(this.parentGroup); this.renderer.styledMode || this.focusBorder.attr({ stroke: d && d.stroke, "stroke-width": d && d.strokeWidth }); l(this, b, d); m(this)
                                }, removeFocusBorder: function () {
                                    g(this); this.focusBorderDestroyHook && (this.destroy = this.focusBorderDestroyHook, delete this.focusBorderDestroyHook);
                                    this.focusBorder && (this.focusBorder.destroy(), delete this.focusBorder)
                                }
                            }); a.Chart.prototype.renderFocusBorder = function () { var a = this.focusElement, d = this.options.accessibility.keyboardNavigation.focusBorder; a && (a.removeFocusBorder(), d.enabled && a.addFocusBorder(d.margin, { stroke: d.style.color, strokeWidth: d.style.lineWidth, borderRadius: d.style.borderRadius })) }; a.Chart.prototype.setFocusToElement = function (a, d) {
                                var b = this.options.accessibility.keyboardNavigation.focusBorder; (d = d || a.element) && d.focus && (d.hcEvents &&
                                    d.hcEvents.focusin || r(d, "focusin", function () { }), d.focus(), b.hideBrowserFocusOutline && (d.style.outline = "none")); this.focusElement && this.focusElement.removeFocusBorder(); this.focusElement = a; this.renderFocusBorder()
                            }
                        }); r(a, "Accessibility/Accessibility.js", [a["Accessibility/Utils/ChartUtilities.js"], a["Core/Globals.js"], a["Accessibility/KeyboardNavigationHandler.js"], a["Core/Options.js"], a["Core/Series/Point.js"], a["Core/Utilities.js"], a["Accessibility/AccessibilityComponent.js"], a["Accessibility/KeyboardNavigation.js"],
                        a["Accessibility/Components/LegendComponent.js"], a["Accessibility/Components/MenuComponent.js"], a["Accessibility/Components/SeriesComponent/SeriesComponent.js"], a["Accessibility/Components/ZoomComponent.js"], a["Accessibility/Components/RangeSelectorComponent.js"], a["Accessibility/Components/InfoRegionsComponent.js"], a["Accessibility/Components/ContainerComponent.js"], a["Accessibility/HighContrastMode.js"], a["Accessibility/HighContrastTheme.js"], a["Accessibility/Options/Options.js"], a["Accessibility/Options/LangOptions.js"],
                        a["Accessibility/Options/DeprecatedOptions.js"]], function (a, h, q, n, p, l, g, r, k, e, d, b, f, c, w, A, z, t, E, B) {
                            function m(a) { this.init(a) } var u = l.addEvent, v = l.extend, x = l.fireEvent, y = l.merge, D = h.win.document; y(!0, n.defaultOptions, t, { accessibility: { highContrastTheme: z }, lang: E }); h.A11yChartUtilities = a; h.KeyboardNavigationHandler = q; h.AccessibilityComponent = g; m.prototype = {
                                init: function (a) {
                                    this.chart = a; D.addEventListener && a.renderer.isSVG ? (B(a), this.initComponents(), this.keyboardNavigation = new r(a, this.components),
                                        this.update()) : a.renderTo.setAttribute("aria-hidden", !0)
                                }, initComponents: function () { var a = this.chart, g = a.options.accessibility; this.components = { container: new w, infoRegions: new c, legend: new k, chartMenu: new e, rangeSelector: new f, series: new d, zoom: new b }; g.customComponents && v(this.components, g.customComponents); var h = this.components; this.getComponentOrder().forEach(function (b) { h[b].initBase(a); h[b].init() }) }, getComponentOrder: function () {
                                    if (!this.components) return []; if (!this.components.series) return Object.keys(this.components);
                                    var a = Object.keys(this.components).filter(function (a) { return "series" !== a }); return ["series"].concat(a)
                                }, update: function () {
                                    var a = this.components, b = this.chart, c = b.options.accessibility; x(b, "beforeA11yUpdate"); b.types = this.getChartTypes(); this.getComponentOrder().forEach(function (c) { a[c].onChartUpdate(); x(b, "afterA11yComponentUpdate", { name: c, component: a[c] }) }); this.keyboardNavigation.update(c.keyboardNavigation.order); !b.highContrastModeActive && A.isHighContrastModeActive() && A.setHighContrastTheme(b);
                                    x(b, "afterA11yUpdate", { accessibility: this })
                                }, destroy: function () { var a = this.chart || {}, b = this.components; Object.keys(b).forEach(function (a) { b[a].destroy(); b[a].destroyBase() }); this.keyboardNavigation && this.keyboardNavigation.destroy(); a.renderTo && a.renderTo.setAttribute("aria-hidden", !0); a.focusElement && a.focusElement.removeFocusBorder() }, getChartTypes: function () { var a = {}; this.chart.series.forEach(function (b) { a[b.type] = 1 }); return Object.keys(a) }
                            }; h.Chart.prototype.updateA11yEnabled = function () {
                                var a =
                                    this.accessibility, b = this.options.accessibility; b && b.enabled ? a ? a.update() : this.accessibility = new m(this) : a ? (a.destroy && a.destroy(), delete this.accessibility) : this.renderTo.setAttribute("aria-hidden", !0)
                            }; u(h.Chart, "render", function (a) { this.a11yDirty && this.renderTo && (delete this.a11yDirty, this.updateA11yEnabled()); var b = this.accessibility; b && b.getComponentOrder().forEach(function (a) { b.components[a].onChartRender() }) }); u(h.Chart, "update", function (a) {
                                if (a = a.options.accessibility) a.customComponents &&
                                    (this.options.accessibility.customComponents = a.customComponents, delete a.customComponents), y(!0, this.options.accessibility, a), this.accessibility && this.accessibility.destroy && (this.accessibility.destroy(), delete this.accessibility); this.a11yDirty = !0
                            }); u(p, "update", function () { this.series.chart.accessibility && (this.series.chart.a11yDirty = !0) });["addSeries", "init"].forEach(function (a) { u(h.Chart, a, function () { this.a11yDirty = !0 }) });["update", "updatedData", "remove"].forEach(function (a) {
                                u(h.Series, a, function () {
                                    this.chart.accessibility &&
                                    (this.chart.a11yDirty = !0)
                                })
                            });["afterDrilldown", "drillupall"].forEach(function (a) { u(h.Chart, a, function () { this.accessibility && this.accessibility.update() }) }); u(h.Chart, "destroy", function () { this.accessibility && this.accessibility.destroy() })
                        }); r(a, "masters/modules/accessibility.src.js", [], function () { })
});
//# sourceMappingURL=accessibility.js.map