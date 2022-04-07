var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import React, { useContext, useState, useRef, useEffect } from "react";
class VisibilityChangeListener {
  constructor() {
    __publicField(this, "queue");
    this.queue = {};
    this.subscribeVisibilityChange();
  }
  subscribeVisibilityChange() {
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        Object.keys(this.queue).forEach((key) => {
          this.queue[key]();
        });
      }
    });
  }
  addSubscribe(key, callback) {
    this.queue[key] = callback;
  }
  removeSubscribe(key) {
    delete this.queue[key];
  }
  hasSubscribe(key) {
    return !!this.queue[key];
  }
}
class Query {
  constructor() {
    __publicField(this, "cacheList");
    __publicField(this, "focusHandle");
    this.cacheList = {};
    this.focusHandle = new VisibilityChangeListener();
  }
  setCache(key, cache) {
    if (this.cacheList[key]) {
      this.updateCache(key, cache);
    } else {
      this.cacheList[key] = __spreadProps(__spreadValues({}, cache), {
        timer: this.setTimeOutToClear(cache.cacheTime, key)
      });
    }
  }
  getCache(key) {
    return __spreadValues({}, this.cacheList[key]);
  }
  updateCache(key, cache) {
    const timer = this.cacheList[key].timer;
    this.clearTimeOut(timer);
    this.cacheList[key] = __spreadProps(__spreadValues({}, cache), {
      timer: this.setTimeOutToClear(cache.cacheTime, key)
    });
  }
  clearCache(key) {
    delete this.cacheList[key];
  }
  setTimeOutToClear(timeout, key) {
    return setTimeout(() => {
      this.clearCache(key);
    }, timeout);
  }
  clearTimeOut(timer) {
    clearTimeout(timer);
  }
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = React, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if (typeof Symbol === "function" && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, k) {
  var b, d = {}, e = null, l = null;
  k !== void 0 && (e = "" + k);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (l = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: g, type: c, key: e, ref: l, props: d, _owner: m.current };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const context = React.createContext({});
function ReactQueryProvider({
  children
}) {
  const queryRef = React.useRef(new Query());
  return /* @__PURE__ */ jsx(context.Provider, {
    value: queryRef.current,
    children
  });
}
function replaceEqualDeep(a, b) {
  if (a === b) {
    return a;
  }
  const array = Array.isArray(a) && Array.isArray(b);
  if (array || isPlainObject(a) && isPlainObject(b)) {
    const aSize = array ? a.length : Object.keys(a).length;
    const bItems = array ? b : Object.keys(b);
    const bSize = bItems.length;
    const copy = array ? [] : {};
    let equalItems = 0;
    for (let i = 0; i < bSize; i++) {
      const key = array ? i : bItems[i];
      copy[key] = replaceEqualDeep(a[key], b[key]);
      if (copy[key] === a[key]) {
        equalItems++;
      }
    }
    return aSize === bSize && equalItems === aSize ? a : copy;
  }
  return b;
}
function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }
  const ctor = o.constructor;
  if (typeof ctor === "undefined") {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
const DEFAULT_CACHE_TIME = 20 * 1e3;
const RETRY_DELAY = 3 * 1e3;
const useQuery = (key, func, options) => {
  const query = useContext(context);
  const [isLoading, setIsLoading] = useState(!!!query.getCache(key));
  const [isError, setIsError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState();
  const retryRef = useRef(0);
  useEffect(() => {
    fetchDataFromCache(key);
    onFocus2Fetch(key);
  }, []);
  useEffect(() => {
    if (options == null ? void 0 : options.refetchOnWindowFocus) {
      onFocus2Fetch(key);
    } else {
      query.focusHandle.hasSubscribe(key) && query.focusHandle.removeSubscribe(key);
    }
  }, [options.refetchOnWindowFocus]);
  const fetchDataFromServe = async (key2) => {
    setIsFetching(true);
    try {
      const data2 = await func();
      setIsLoading(false);
      setIsFetching(false);
      if (!replaceEqualDeep(data2, query.getCache(key2))) {
        setData(data2);
      }
      query.setCache(key2, __spreadProps(__spreadValues({
        data: data2
      }, options), {
        cacheTime: (options == null ? void 0 : options.cacheTime) || DEFAULT_CACHE_TIME
      }));
      retryRef.current = 0;
    } catch (error) {
      if (options.retry && options.retry > retryRef.current) {
        setTimeout(() => {
          fetchDataFromServe(key2);
          retryRef.current += 1;
        }, options.retryTime || RETRY_DELAY);
      }
      setIsError(true);
    }
  };
  const fetchDataFromCache = (key2) => {
    const cache = query.getCache(key2);
    if (cache) {
      setData(cache.data);
      fetchDataFromServe(key2);
    } else {
      setIsLoading(true);
      fetchDataFromServe(key2);
    }
  };
  const onFocus2Fetch = (key2) => {
    query.focusHandle.addSubscribe(key2, () => fetchDataFromCache(key2));
  };
  return {
    isLoading,
    isError,
    isFetching,
    data
  };
};
export { ReactQueryProvider, useQuery };
