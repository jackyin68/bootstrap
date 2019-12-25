/*!
  * Bootstrap selector-engine.js v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./polyfill.js')) :
  typeof define === 'function' && define.amd ? define(['./polyfill.js'], factory) :
  (global = global || self, global.SelectorEngine = factory(global.Polyfill));
}(this, (function (polyfill_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var makeArray = function makeArray(nodeList) {
    if (!nodeList) {
      return [];
    }

    return [].slice.call(nodeList);
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NODE_TEXT = 3;
  var SelectorEngine = {
    matches: function matches(element, selector) {
      return element.matches(selector);
    },
    find: function find(selector, element) {
      if (element === void 0) {
        element = document.documentElement;
      }

      return polyfill_js.find.call(element, selector);
    },
    findOne: function findOne(selector, element) {
      if (element === void 0) {
        element = document.documentElement;
      }

      return polyfill_js.findOne.call(element, selector);
    },
    children: function children(element, selector) {
      var _this = this;

      var children = makeArray(element.children);
      return children.filter(function (child) {
        return _this.matches(child, selector);
      });
    },
    parents: function parents(element, selector) {
      var parents = [];
      var ancestor = element.parentNode;

      while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
        if (this.matches(ancestor, selector)) {
          parents.push(ancestor);
        }

        ancestor = ancestor.parentNode;
      }

      return parents;
    },
    closest: function closest(element, selector) {
      return element.closest(selector);
    },
    prev: function prev(element, selector) {
      var previous = element.previousElementSibling;

      while (previous) {
        if (this.matches(previous, selector)) {
          return [previous];
        }

        previous = previous.previousElementSibling;
      }

      return [];
    },
    next: function next(element, selector) {
      var next = element.nextElementSibling;

      while (next) {
        if (this.matches(next, selector)) {
          return [next];
        }

        next = next.nextElementSibling;
      }

      return [];
    }
  };

  return SelectorEngine;

})));
//# sourceMappingURL=selector-engine.js.map
