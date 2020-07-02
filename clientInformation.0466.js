"use strict";
var CLX;
if (!CLX) {
  CLX = {};
}
if (!CLX.$) {
  CLX.$ = jQuery;
}
CLX.A = function (d) {
  var b,
    c = String(d || "clxid_"),
    e = 0,
    a = function (f) {
      if (f) {
        e += 1;
      }
      return c + e;
    };
  b = {
    currId: function () {
      return a(false);
    },
    nextId: function () {
      return a(true);
    },
  };
  return b;
};
CLX.B = function (a) {
  return a && typeof a === "object" && a.constructor === Array;
};
CLX.C = function (a) {
  return a && typeof a === "object" && a.constructor !== Array;
};
CLX.D = {
  AMOUNT_INPUT: "clx-amount-input",
  AMOUNT_INPUT_TEXT: "clx-amount-input-text",
  BADGE: "clx-badge",
  BADGE_VALUE: "badge",
  BADGE_HOLDER: "clx-badge-holder",
  BUSY: "busy",
  BREADCRUMB: "clx-breadcrumb",
  BREADCRUMB_ITEMS: "clx-breadcrumb-items",
  BREADCRUMB_ITEM: "clx-breadcrumb-item",
  BREADCRUMB_ITEM_CONTENT: "clx-breadcrumb-item-content",
  BREADCRUMB_ITEM_CONTENT_WIDE: "clx-breadcrumb-content-wide",
  BREADCRUMB_ITEM_ICON: "clx-breadcrumb-item-icon",
  BREADCRUMB_ITEM_TEXT: "clx-breadcrumb-item-text",
  BREADCRUMB_ITEM_TEXT_RIGHT: "clx-breadcrumb-item-text-right",
  BREADCRUMB_ITEM_TEXT_LEFT: "clx-breadcrumb-item-text-left",
  BREADCRUMB_ITEM_TEXT_EMPTY: "clx-breadcrumb-item-text-empty",
  BREADCRUMB_ITEM_TEXT_NO_LEFT: "clx-breadcrumb-item-text-no-left",
  BREADCRUMB_ITEM_TEXT_FULL_WIDTH: "clx-breadcrumb-item-text-full-width",
  BREADCRUMB_ITEM_RIGHT: "clx-breadcrumb-item-right",
  BREADCRUMB_ICON_HIDDEN: "clx-breadcrum-icon-hidden",
  BREADCRUMB_ITEM_COUNT: "clx-breadcrumb-item-count",
  BREADCRUMB_ITEM_POSITION: "clx-breadcrumb-item-position",
  BREADCRUMB_ITEM_ACTIVE: "clx-breadcrumb-item-active",
  BREADCRUMB_TOOLBAR: "clx-breadcrumb-toolbar",
  BUTTON: "clx-button",
  BUTTON_ICON: "clx-button-icon",
  BUTTON_LABEL: "clx-button-label",
  BUTTON_ACTIVE: "clx-button-active",
  BUTTON_KIND_ICON: "clx-button-kind-icon",
  BUTTON_KIND_TEXT: "clx-button-kind-text",
  BUTTON_KIND_ICON_TEXT: "clx-button-kind-icon-text",
  BUTTON_GROUP_COMPONENT: "clx-button-group-component",
  CHECKBOX: "clx-checkbox",
  CHECKBOX_ICON_SEL: "clx-checkbox-icon-sel",
  CHECKBOX_ICON_DES: "clx-checkbox-icon-des",
  CHECKBOX_INPUT: "clx-checkbox-input",
  CHECKBOX_LABEL: "clx-checkbox-label",
  CHECKBOX_WITHOUT_TEXT: "clx-checkbox-without-text",
  CALENDAR_PREV_MONTH: "clx-calendar-prev-month",
  CALENDAR_NEXT_MONTH: "clx-calendar-next-month",
  CALENDAR_PREV_YEAR: "clx-calendar-prev-year",
  CALENDAR_NEXT_YEAR: "clx-calendar-next-year",
  CALENDAR_MONTH_DISPLAY: "clx-calendar-month-display",
  CALENDAR_YEAR_DISPLAY: "clx-calendar-year-display",
  CALENDAR_PREV_BUTTON: "clx-calendar-prev-button",
  CALENDAR_NEXT_BUTTON: "clx-calendar-next-button",
  CALENDAR_DAY: "clx-calendar-day",
  CALENDAR_DAYS: "clx-calendar-days",
  CALENDAR_DAYS_OF_WEEK: "clx-calendar-days-of-week",
  CALENDAR_DAY_TODAY: "clx-calendar-day-today",
  CALENDAR_DAY_ENABLED: "clx-calendar-day-enabled",
  CALENDAR_DAY_DISABLED: "clx-calendar-day-disabled",
  CALENDAR_DAY_OTHER_MONTH: "clx-calendar-day-other-month",
  CALENDAR_DAY_SELECTED: "clx-calendar-day-selected",
  CATALOG: "clx-catalog",
  CATALOG_ITEM: "clx-catalog-item",
  CATALOG_ITEM_ICON: "clx-catalog-item-icon",
  CATALOG_ITEM_ICON_SINGLE_SEL: "clx-catalog-item-icon-single-sel",
  CATALOG_ITEM_ICON_SINGLE_DES: "clx-catalog-item-icon-single-des",
  CATALOG_ITEM_ICON_MULTI_SEL: "clx-catalog-item-icon-multi-sel",
  CATALOG_ITEM_ICON_MULTI_DES: "clx-catalog-item-icon-multi-des",
  CATALOG_ITEM_ICON_EDIT: "clx-catalog-item-icon-edit",
  CATALOG_ITEM_ICON_DEFAULT_SEL: "clx-catalog-item-icon-default-sel",
  CATALOG_ITEM_ICON_DEFAULT_DESEL: "clx-catalog-item-icon-default-desel",
  CATALOG_ITEM_COMPONENT: "clx-catalog-item-component",
  CATALOG_ITEM_CONTENT: "clx-catalog-item-content",
  CATALOG_ITEM_TEXT: "clx-catalog-item-text",
  CATALOG_ITEM_TEXT_FULL_WIDTH: "clx-catalog-item-text-full-width",
  CONTEXT_MENU: "clx-context-menu",
  CONTEXT_MENU_BUTTON: "clx-context-menu-button",
  COLLAPSE: "clx-collapse",
  COLLAPSE_ALL: "headingCollapseAll",
  CONTAINER: "clx-container",
  CONTAINER_HEADING: "clx-container-heading",
  CONTAINER_CONTENT: "clx-container-content",
  CONTAINER_CONTENT_WRAP: "clx-container-content-wrap",
  CONTAINER_FOOTER: "clx-container-footer",
  DATE_INPUT_ACTION_ICON: "clx-date-input-icon",
  DATE_INPUT_ENTRY: "clx-date-input-entry",
  DATE_INPUT_HEADING_ICON: "headingDateInput",
  DETAIL_GRID: "clx-detail-grid",
  DETAIL_ROW: "clx-detail-row",
  DETAIL_ROW_SMALL: "clx-detail-row-small",
  DETAIL_ROW_LABEL: "clx-detail-row-label",
  DETAIL_ROW_VALUE: "clx-detail-row-value",
  DETAIL_LIST_ITEM: "clx-detail-list-item",
  DETAIL_LIST_ITEM_ICON: "clx-detail-list-item-icon",
  DETAIL_LIST_ITEM_TEXT: "clx-detail-list-item-text",
  DETAIL_LIST_ITEM_BUTTON: "clx-detail-list-item-right",
  DISPLAY_NONE: "displayNone",
  ENABLED_PLACEHOLDER: "clx-enabled-placeholder",
  EXPAND: "clx-expand",
  EXPAND_ALL: "headingExpandAll",
  EXPANDED: "clx-expanded",
  HEADING_BODY: "clx-heading-body",
  HEADING_CHILDREN: "clx-heading-children",
  HEADING_CONTAINS_TABBAR: "clx-heading-contains-tabs",
  HEADING_CONTAINS_TABBAR_BOTTOM: "clx-heading-contains-tabs-bottom",
  HEADING_ICON: "clx-heading-icon",
  HEADING_TABBAR: "clx-heading-tabbar",
  HEADING_TABBAR_BOTTOM: "clx-heading-tabbar-bottom",
  HEADING_TITLE: "clx-heading-title",
  HEADING_SUBTITLE: "clx-heading-subtitle",
  HEADING_TOGGLEBAR: "clx-heading-togglebar",
  HEADING_TOOLBAR: "clx-heading-toolbar",
  HEADING_INTERACTIVE: "clx-heading-interactive",
  HIGHLIGHTED: "clx-highlighted",
  INPUT_ROW: "clx-input-row",
  INPUT_ROW_LABEL: "clx-input-row-label",
  INPUT_ROW_INPUT: "clx-input-row-input",
  LIST_GROUP: "clx-list-group",
  LIST_ITEM: "clx-list-item",
  LIST_ITEM_LEFT: "clx-list-item-left",
  LIST_ITEM_EDIT: "clx-list-item-edit",
  LIST_ITEM_ICON: "clx-list-item-icon",
  LIST_ITEM_CONTENT: "clx-list-item-content",
  LIST_ITEM_SELECT_ACTION: "clx-list-item-select-action",
  LIST_ITEM_DELETE_ACTION: "clx-list-item-delete-action",
  LIST_ITEM_SINGLESELECT_ACTION: "clx-list-item-singleselect-action",
  LIST_ITEM_MULTISELECT_ACTION: "clx-list-item-multiselect-action",
  MESSAGE_CONTENT: "clx-message-content",
  MESSAGE_ROW: "clx-message-row",
  MESSAGE_ROW_ICON: "clx-message-row-icon",
  MESSAGE_ROW_ICON_ERROR: "headingMessageOverlayInfoError",
  MESSAGE_ROW_ICON_WARNING: "headingMessageOverlayInfoWarning",
  MESSAGE_ROW_ICON_INFO: "headingMessageOverlayInfo",
  MESSAGE_ROW_LABEL: "clx-message-row-label",
  MESSAGE_ROW_VALUE: "clx-message-row-value",
  OPTION_BUTTON: "clx-option-button",
  OPTION_BUTTON_BUTTON: "clx-option-button-button",
  OVERLAY: "clx-overlay",
  OVERLAY_BRIGHT: "clx-overlay-bright",
  OVERLAY_COMPONENT: "clx-overlay-component",
  OVERLAY_EXPAND_ICON: "clx-overlay-expand-icon",
  PAGE_HEADING: "mastheadPanel",
  PLACEHOLDER: "clx-placeholder",
  POPUP: "clx-popup",
  POPUP_CONTENT: "clx-popup-content",
  POPUP_DIALOG_SMALL: "clx-popup-dialog-small",
  POPUP_DIALOG_LARGE: "clx-popup-dialog-large",
  POPUP_HEADING: "clx-popup-heading",
  PRODUCT_VISUALIZATION_1: "clx-prod-vis-option1",
  PRODUCT_VISUALIZATION_2: "clx-prod-vis-option2",
  PRODUCT_VISUALIZATION_3: "clx-prod-vis-option3",
  PROGRESS_NAV: "clx-progress-nav",
  PROGRESS_NAV_ITEM: "clx-progress-nav-item",
  PROGRESS_NAV_ITEM_ENABLED: "clx-progress-nav-item-enabled",
  PROGRESS_NAV_ITEM_ACTIVE: "clx-progress-nav-item-active",
  RECORD_INPUT_SELECT: "clx-record-input-select",
  SLIDER: "clx-slider",
  SLIDER_SCALE: "clx-slider-scale",
  SLIDER_HANDLE: "clx-slider-handle",
  SLIDER_VALUE: "clx-slider-value",
  TABS: "clx-tabs",
  TEXT_AREA: "clx-text-area",
  TEXT_INPUT: "clx-text-input",
  TEXT_INPUT_ACTION: "clx-text-input-action",
  TEXT_INPUT_ACTION_COUNT: "clx-text-input-action-count",
  TEXT_INPUT_ACTION_HOLDER: "clx-text-input-action-holder",
  TEXT_INPUT_ACTION_ICON: "clx-text-input-action-icon",
  TEXT_INPUT_EXPAND_ACTION: "clx-text-input-expand-action",
  TEXT_INPUT_FOCUS: "clx-text-input-focus",
  TEXT_INPUT_GROUP: "clx-text-input-group",
  TEXT_INPUT_HOVER: "clx-text-input-hover",
  TEXT_INPUT_EMPTY: "clx-text-input-empty",
  TEXT_INPUT_NONEMPTY: "clx-text-input-nonempty",
  TEXT_INPUT_READ_ONLY: "clx-text-input-read-only",
  TEXT_INPUT_RESET: "clx-text-input-reset",
  TEXT_INPUT_ROW: "clx-text-input-row",
  TEXT_INPUT_SPLIT_INLINE: "clx-text-input-split-inline",
  TEXT_INPUT_SEPARATOR: "clx-text-input-separator",
  TEXT_INPUT_SEPARATOR_CONTENT: "clx-text-input-separator-content",
  TEXT_INPUT_DISABLED: " clx-text-input-disabled",
  TEXT_INPUT_HOLDER: "clx-text-input-holder",
  TEXT_ITEM_TEXT: "clx-text-item-text",
  TEXT_ITEM_INPUT: "clx-text-item-input",
  TEXT_ITEM_INPUT_HOLDER: "clx-text-item-input-holder",
  TOOLBAR_COMPONENT: "clx-toolbar-component",
  ZEBRA_STRIPE: "clx-zebra-stripe",
  QUESTIONNAIRE_QUESTION: "clx-questionnaire-question",
  QUESTIONNAIRE_ANSWERS_COMPONENT: "clx-questionnaire-answer-component",
  QUESTIONNAIRE_VERTICAL_QUESTION: "clx-questionnaire-vertical-question",
  QUESTIONNAIRE_VERTICAL_ANSWERS_COMPONENT:
    "clx-questionnaire-vertical-component",
  RISKPROFILE_HEADER: "clx-riskProfile-header",
  RISKPROFILE_NAME: "clx-riskProfile-name",
  RISKPROFILE_SAFETY: "clx-riskProfile-safety",
  RISKPROFILE_RISK: "clx-riskProfile-risk",
  RISKPROFILE_CHART: "clx-riskProfile-chart",
  RISKPROFILE_TEXT: "clx-riskProfile-text",
  INVESTMENT_GOAL_TITLE: "clx-investment-goal-title",
  INVESTMENT_GOAL_IMAGE: "clx-investment-goal-image",
  INVESTMENT_GOAL_ICON: "clx-investment-goal-icon",
  VERTICAL: "clx-vertical",
  RECOMMENDATION_COLUMN_COMPONENT: "clx-recommendation-column-component",
  RECOMMENDATION_ICON: "clx-recommendation-icon",
};
CLX.E = {
  ACTION: "action",
  ACTIVE: "active",
  ALLOW_DEACTIVATE: "allowDeactivate",
  ALWAYS_SELECTABLE_DATES: "alwaysSelectableDates",
  ANIMATION_COMPLETE: "animation.complete",
  ANIMATION_DURATION: "animation.duration",
  ANIMATION_EASING: "animation.easing",
  ARIA_AUTOCOMPLETE: "aria-autocomplete",
  ARIA_CHECKED: "aria-checked",
  ARIA_CONTROLS: "aria-controls",
  ARIA_DISABLED: "aria-disabled",
  ARIA_EXPANDED: "aria-expanded",
  ARIA_HIDDEN: "aria-hidden",
  ARIA_LABEL: "aria-label",
  ARIA_LABELLEDBY: "aria-labelledby",
  ARIA_OWNS: "aria-owns",
  ARIA_READONLY: "aria-readonly",
  ARIA_REQUIRED: "aria-required",
  ARIA_ROLE: "aria-role",
  AUTOROWS: "autorows",
  AUTO_SELECT_IF_SINGLE_RECORD: "autoSelectIfSingleRecord",
  BUTTONS: "buttons",
  BUTTON_LABEL: "buttonLabel",
  CATEGORIES: "categories",
  CHART_TYPE: "chartType",
  CLASS: "class",
  CLOSE: "close",
  COLLAPSED: "collapsed",
  COMPONENT: "component",
  CONTAINER: "container",
  CONTENT: "content",
  COUNTER: "counter",
  CURRENT_MONTH: "currentMonth",
  CURRENT_YEAR: "currentYear",
  CSS: "css",
  DATA: "data",
  DATA_ACTION: "data-action",
  DATA_ACTIVE: "data-active",
  DATA_ALLOW_DEACTIVATE: "data-allow-deactivate",
  DATA_ANIMATION_DURATION: "data-animation-duration",
  DATA_ANIMATION_EASING: "data-animation-easing",
  DATA_AUTOROWS: "data-autorows",
  DATA_BUTTON_LABEL: "data-button-label",
  DATA_CLOSE: "data-close",
  DATA_COLLAPSED: "data-collapsed",
  DATA_COMP: "data-comp",
  DATA_DECIMAL_PLACES: "data-decimal-places",
  DATA_DESCRIPTION: "data-description",
  DATA_EDIT_INDEX: "data-edit-index",
  DATA_HEADING: "data-heading",
  DATA_ICON: "data-icon",
  DATA_KEYFILTER: "data-keyfilter",
  DATA_LOOK: "data-look",
  DATA_MODE: "data-mode",
  DATA_NAME: "data-name",
  DATA_OVERLAY_DEFAULT_KEYS_OFF: "data-overlay-default-keys-off",
  DATA_OVERLAY_HIDE_ON_BLUR: "data-overlay-hide-on-blur",
  DATA_PLACEHOLDER: "data-placeholder",
  DATA_POSITION: "data-position",
  DATA_ROWLABEL: "data-rowlabel",
  DATA_ROWS: "data-rows",
  DATA_SINGLESELECT: "data-singleselect",
  DATA_SORT: "data-sort",
  DATA_SPLIT: "data-split",
  DATA_SYNC: "data-sync",
  DATA_TEXT: "data-text",
  DATA_TYPE: "data-type",
  DATA_VALUE: "data-value",
  DATE_SELECTABLE_CALLBACK: "dateSelectableCallback",
  DECIMAL_PLACES: "decimalPlaces",
  DEFAULT_OPTION: "defaultOption",
  DELETABLE: "deletable",
  DELETED: "deleted",
  DESCRIPTION: "description",
  DISABLED: "disabled",
  DISABLED_DAYS_OF_WEEK: "disabledDaysOfWeek",
  DISABLED_DATES: "disabledDates",
  EDIT_INDEX: "editIndex",
  EDITED: "edited",
  EDITABLE: "editable",
  EVENT: "event",
  ELEMENT: "element",
  ENABLED: "enabled",
  EXPANDED: "expanded",
  FIRST_DAY_OF_WEEK: "firstDayOfWeek",
  FIXED_DATA: "fixedData",
  FOOTER: "footer",
  FOR: "for",
  FORMAT: "format",
  GRID: "grid",
  GROUPS: "groups",
  GROUPING_OPTION: "groupingOption",
  GROUPING_ID: "groupingId",
  GROUPING_ITEM: "groupingItem",
  HEADING: "heading",
  HEADING_TABS_BOTTOM: "headingTabsBottom",
  HIDDEN: "hidden",
  ICON: "icon",
  ID: "id",
  IDENTIFY: "identify",
  INTERACTIVE: "interactive",
  KEEP_POSITION_ON_REATTACH: "keepPositionOnReattach",
  KEYFILTER: "keyfilter",
  LABEL: "label",
  LABEL_FORMATTER: "labelFormatter",
  LABELLEDBY: "labelledby",
  LAYOUT: "layout",
  LAYOUT_TYPE: "layoutType",
  LEGEND_TITLE: "legendTitle",
  LEGEND_VISIBILITY: "legendVisibility",
  LOOK: "look",
  MIN_DATE: "minDate",
  MIN_VALUE: "minValue",
  MAX_DATE: "maxDate",
  MAXLENGTH: "maxlength",
  MAX_VALUE: "maxValue",
  MODE: "mode",
  MULTISELECT: "multiselect",
  NAME: "name",
  NEGATIVE_VALUE_ALLOWED: "negativeValueAllowed",
  OVERLAY: "overlay",
  OVERLAY_DEFAULT_KEYS_OFF: "overlayDefaultKeysOff",
  OVERLAY_HIDE_ON_BLUR: "overlayHideOnBlur",
  OVERLAY_HIDE_ON_CLICK: "overlayHideOnClick",
  OPTIONS: "options",
  OPTION: "option",
  PARENT: "parent",
  PARSE: "parse",
  PLACEHOLDER: "placeholder",
  POSITION: "position",
  PREVIOUS_ACTIVE_STEP: "previousActiveStep",
  READONLY: "readonly",
  REC: "rec",
  RECORD: "record",
  RECORDS: "records",
  REQUIRED: "required",
  ROLE: "role",
  ROUND: "round",
  ROW: "row",
  ROWS: "rows",
  SELECTABLE: "selectable",
  SELECTED_DATE: "selectedDate",
  SELECTED_EDITABLE: "selectedEditable",
  SELECTED_DEFAULT: "selectedDefault",
  SELECTED_VALUE: "selectedValue",
  SEPARATOR: "separator",
  SET_DEFAULT_OPTION: "setDefaultOption",
  SEVERITY: "severity",
  SINGLESELECT: "singleselect",
  SORT: "sort",
  SORT_INDEX: "sortIndex",
  SPLIT: "split",
  SPLIT_ON_PASTE: "splitOnPaste",
  STACKING_TYPE: "stackingType",
  SYNC: "sync",
  TABINDEX: "tabindex",
  TEXT: "text",
  TITLE: "title",
  SUBTITLE: "subtitle",
  TOOLBAR: "toolbar",
  TOOLTIP_FORMATTER: "tooltipFormatter",
  TOTAL: "total",
  TYPE: "type",
  VALUE: "value",
  VALUE_TO_SUBMIT: "valueToSubmit",
  VERTICAL: "vertical",
  WRAP: "wrap",
  ZEBRA: "zebra",
};
CLX.F = {
  OBJECT: "object",
  BOOLEAN: "boolean",
  NUMBER: "number",
  STRING: "string",
  STRING_SET: "stringset",
  FUNCTION: "function",
  COMPONENT: "component",
  LAYOUT: "layout",
  ELEMENT: "element",
};
CLX.G = function IdsFactory() {
  var c,
    d = "_",
    b = "cid" + d,
    a = CLX.A(b),
    e = function (g, f) {
      return f ? g + d + f : g;
    };
  c = {
    currId: function (f) {
      return e(a.currId(), f);
    },
    nextId: function (f) {
      return e(a.nextId(), f);
    },
  };
  return c;
};
CLX.H = {
  ALL_SELECTOR: "*",
  BODY_SELECTOR: "body",
  FORM_SELECTOR: "form",
  INPUT_SELECTOR: "input, select, textarea",
  INPUT_NON_TOGGLE_SELECTOR: "input:not(:checkbox, :radio), select, textarea",
  TEXTAREA_SELECTOR: "textarea",
  INPUT_TOGGLE_SELECTOR: "input:checkbox,input:radio",
  INPUT_FIELD_SELECTOR:
    "input:text,input:[type=number],input:[type=tel],input:[type=email],input:password,textarea",
  BUTTON_SELECTOR: ":button",
  CHECKBOX_SELECTOR: "input[type=checkbox]",
  TEXT_INPUT_SELECTOR: "input:text",
  NUMBER_INPUT_SELECTOR: "input:[type=number]",
  TELEPHONE_INPUT_SELECTOR: "input:[type=tel]",
  EMAIL_INPUT_SELECTOR: "input:[type=email]",
  PASSWORD_INPUT_SELECTOR: "input:password",
  CHECKED_INPUT_SELECTOR: "input:checked",
  EMPTY_SELECTOR: ":empty",
  HIDDEN_SELECTOR: ":hidden",
  VISIBLE_SELECTOR: ":visible",
  FOCUS_SELECTOR: ":focus",
  VISIBLE_INPUT_SELECTOR: "input:visible",
  SELECTED_OPTION_SELECTOR: "option:selected",
  OPTION_SELECTOR: "option",
  SELECT_SELECTOR: "select",
  CUSTOM_SELECTBOX_SUFFIX_SELECTOR: "Select",
  RADIO_SELECTOR: "input[type=radio]",
  TABINDEX_SELECTOR: "[tabindex]",
  ID_SELECTOR: "[id]",
  TABBABLES_SELECTOR: "a, select, input, button, textarea",
  ALL_TABBABLES: "[tabindex], a, select, input, button, textarea",
  LABEL_SELECTOR: "label",
  DIV_SELECTOR: "div",
  A_SELECTOR: "a",
  TABLE_SELECTOR: "table",
  THEAD_SELECTOR: "thead",
  TBODY_SELECTOR: "tbody",
  TH_SELECTOR: "th",
  TR_SELECTOR: "tr",
  TBODY_ROW_SELECTOR: "tbody tr",
  VIDEO: "video",
  LAST_VIDEO_SOURCE: "video source:last-child",
  TEXT_PARENTS: "div,span,a,p,label,th,td,h1,h2,h3,h4,h5,h6,li,button,option",
  FOOTER_CELL_SELECTOR: "tfoot > tr > td",
  DETAIL_ROW_SELECTOR: ".detailRow",
  TD_SELECTOR: "td",
  COL_SELECTOR: "col",
};
CLX.I = (function () {
  var c,
    b = /\W*function\s+([\w\$]+)?\(/,
    e = function (f) {
      return typeof f === "function";
    },
    d = function (g) {
      if (e(g)) {
        var f = g.name || g.id,
          h;
        if (!f) {
          h = b.exec(g.toString());
          f = h && h[1];
        }
        if (!g.id) {
          g.id = f;
        }
        return f;
      }
    },
    a = {};
  c = {
    get: function (h) {
      var g, f;
      if (e(h)) {
        g = h;
        h = d(h);
      }
      f = a[h];
      if (f === undefined && g) {
        if (!h) {
          throw new Error(
            "Singleton factory function must have a unique name between its 'function' keyword and the following parenthesis '(' - cannot use anonymous function expression"
          );
        }
        f = g();
        a[h] = f;
      }
      return f;
    },
    has: function (f) {
      if (e(f)) {
        f = d(f);
      }
      return a[f] !== undefined;
    },
    add: function (g, f) {
      if (e(g)) {
        g = d(g);
      }
      if (c.has(g)) {
        throw new Error("Singleton instance already created: " + g);
      }
      a[g] = f;
      return f;
    },
  };
  return c;
})();
CLX.J = function (b, a) {
  if (a !== null && a !== undefined) {
    if (CLX.B(a)) {
      Array.prototype.push.apply(b, a);
    } else {
      if (CLX.C(a) && a.hasOwnProperty("length")) {
        if (a.length) {
          CLX.$.each(a, function (c, d) {
            CLX.J(b, d);
          });
        }
      } else {
        b.push(a);
      }
    }
  }
};
CLX.K = function (b, c) {
  var a = CLX.$("<div/>");
  if (b) {
    a.addClass(CLX.B(b) ? b.join(" ") : b);
  }
  if (c) {
    a.attr("id", c);
  }
  return a;
};
CLX.L = function (b, a) {
  return b.get(a);
};
CLX.M = function (a) {
  return a && typeof a === "function";
};
CLX.N = function (a) {
  return a && /[^\f\n\r\t\u000B\u0020\u00A0\u2028\u2029]+/.test(a);
};
CLX.O = function (a) {
  return typeof a === "string";
};
CLX.P = function (a, b) {
  return CLX.C(a) && CLX.$.each(a, b);
};
CLX.Q = function (a) {
  return a + "PropertyChanged";
};
CLX.R = function (b, a, d, c) {
  b.set(a, d, c);
};
CLX.S = {
  BUTTON: "clx-button",
  BUTTON_GROUP: "clx-button-group",
  CALENDAR: "clx-calendar",
  CALLBACK: "clx-callback",
  CATALOG: "clx-catalog",
  CHART: "clx-chart",
  CHECKBOX: "clx-checkbox",
  CLICK_DISTANCE: "clx-click-distance",
  CONTAINER: "clx-container",
  COMPONENT: "clx-component",
  COUNT: "clx-count",
  DRAGGING: "clx-dragging",
  HEADING: "clx-heading",
  INDEX: "clx-index",
  INPUT: "clx-input",
  ITEMS: "clx-items",
  LIST: "clx-list",
  OVERLAY_FOCUS_HANDLER: "clx-overlay-focus-handler",
  POPUP: "clx-popup",
  PROPERTY_CHANGED: "clx-property-changed",
  RECORD: "clx-record",
  TIME: "clx-time",
  TOOLBAR: "clx-toolbar",
};
CLX.T = function () {
  return CLX.I.get(CLX.G);
};
CLX.U = function (b) {
  if (arguments.length === 1 && CLX.B(b)) {
    return b;
  }
  var a = [],
    c;
  for (c = 0; c < arguments.length; c += 1) {
    CLX.J(a, arguments[c]);
  }
  return a;
};
CLX.V = function (g, f, e) {
  var a = -1,
    b = e ? String(f) : null,
    c,
    d;
  if (g && g.length && (f || f === 0)) {
    for (d = 0; d < g.length; d += 1) {
      c = g[d];
      if (c === f || (e && String(c) === b)) {
        a = d;
        break;
      }
    }
  }
  return a;
};
CLX.W = function (a, b) {
  var c = a ? a.substring(0, 1) : "";
  c = b ? c.toLowerCase() : c.toUpperCase();
  return a && a.length > 1 ? c + a.substring(1) : c;
};
CLX.X = function (e, f) {
  var b = this,
    d,
    a,
    c,
    g = CLX.E;
  if (CLX.N(e)) {
    d = CLX.L(b, g.CSS);
    a = CLX.B(d);
    if (a) {
      d = d.join(" ");
    }
    c = CLX.K();
    if (CLX.N(d)) {
      c.addClass(d);
    }
    d = c.addClass(e).attr(g.CLASS);
    if (a) {
      d = (d || "").split(/\s/);
    }
    CLX.R(b, g.CSS, d, f);
  }
  return b;
};
CLX.Y = function (b, a, c) {
  CLX.P(c.getDescriptor(), function (d, f) {
    if (CLX.C(f) && !f.skipChangeEventOnAttach) {
      var e = c[CLX.Q(d)];
      if (CLX.M(e)) {
        e({ name: d, value: CLX.L(a, d), data: { element: b, component: a } });
      }
    }
  });
};
CLX.Z = function (a) {
  if (a) {
    if (CLX.O(a)) {
      a = CLX.$(a);
    }
    if (a.is(CLX.H.ALL_TABBABLES)) {
      a = a[0];
    } else {
      a = a.find(CLX.H.ALL_TABBABLES)[0];
    }
    if (a) {
      a.focus();
    }
  }
};
CLX.Aa = function (d, e) {
  var b = this,
    c,
    a,
    f = CLX.E;
  if (CLX.N(d)) {
    c = CLX.L(b, f.CSS);
    a = CLX.B(c);
    if (a) {
      c = c.join(" ");
    }
    if (CLX.N(c)) {
      c = CLX.K().addClass(c).removeClass(d).attr(f.CLASS);
      if (a) {
        c = (c || "").split(/\s/);
      }
      CLX.R(b, f.CSS, c, e);
    }
  }
  return b;
};
CLX.Ab = function (c, f, a, g) {
  var e,
    h,
    i,
    b = CLX.F,
    d = CLX.E;
  e = a.getElementProperties(c);
  CLX.P(e, function (l, o) {
    if (e.hasOwnProperty(l) && o !== undefined && o !== null) {
      var p = o,
        k,
        m,
        n,
        j;
      k = CLX.L(f, l);
      m = a[l];
      n = m && m.type === b.STRING_SET;
      if (n) {
        j = CLX.B(k);
        if (j) {
          k = k.join(" ");
        }
        p = CLX.K()
          .addClass((k ? k + " " : "") + o)
          .attr(d.CLASS);
        if (j) {
          p = (p || "").split(/\s/);
        }
      }
      if (n || !g || k === undefined || k === null) {
        CLX.R(f, l, p, true);
      }
    }
  });
  if (c.is(CLX.H.TEXTAREA_SELECTOR)) {
    h = c.text();
    if (CLX.N(h)) {
      i = CLX.L(f, d.TEXT);
      if (!g || i === undefined || i === null) {
        CLX.R(f, d.TEXT, h, true);
      }
    }
  }
  CLX.P(a, function (j, l) {
    if (CLX.C(l)) {
      var k = CLX.L(f, j);
      if (k === undefined || k === null) {
        CLX.R(f, j, l.defaultValue, true);
      }
    }
  });
};
CLX.Ac = function (a) {
  return typeof a === "boolean";
};
CLX.Ad = function (d) {
  var c, a, b;
  if (!d || !/^[a-zA-Z0-9]+$/.test(d)) {
    return false;
  }
  for (b = 0; b < d.length; b += 1) {
    a = /[A-Z]/.test(d.charAt(b));
    if (a) {
      if (c) {
        return false;
      }
    }
    c = a;
  }
  return true;
};
CLX.Ae = function (d) {
  var c,
    b = CLX.E.ID,
    a = CLX.D.BUSY;
  c = CLX.$("#" + d)
    .clone()
    .removeAttr(b);
  if (!c.length) {
    throw new Error("Element not found in DOM: id=" + d);
  }
  c.removeClass(a);
  c.find("*").removeClass(a);
  return c;
};
CLX.Af = function (e, b) {
  var a = "",
    g,
    d,
    c,
    f = /[^a-zA-Z0-9]/;
  if (e) {
    e = String(e);
    g = e.toLowerCase().split(f);
    for (c = 0; c < g.length; c += 1) {
      d = g[c];
      if (d) {
        if (b || c) {
          a += d.charAt(0).toUpperCase();
          if (d.length > 1) {
            a += d.substring(1);
          }
        } else {
          a += d;
        }
      }
    }
  }
  return a;
};
CLX.Ag = {
  ACCOUNT_INPUT: "accountInput",
  AMOUNT_INPUT: "amountInput",
  BADGE: "badge",
  BACKLINK: "backlink",
  BREADCRUMB: "breadcrumb",
  BUTTON: "button",
  BUTTON_GROUP: "buttonGroup",
  CALENDAR: "calendar",
  CATALOG: "catalog",
  CHART: "chart",
  COMPONENT: "component",
  CONTAINER: "container",
  CONTEXT_MENU: "contextMenu",
  CURRENCY_INPUT: "currencyInput",
  DATE_INPUT: "dateInput",
  DETAIL_ITEM: "detailItem",
  HEADING: "heading",
  LIST: "list",
  LIST_ITEM: "listItem",
  MARKET_PLACE_INPUT: "marketPlaceInput",
  MESSAGE: "message",
  OPTION_BUTTON: "optionButton",
  OPTION_INPUT: "optionInput",
  OVERLAY: "overlay",
  POPUP: "popup",
  PORTFOLIO_GROUP_INPUT: "portfolioGroupInput",
  PROGRESS_NAV: "progressNav",
  RECORD_INPUT: "recordInput",
  SECURITY_LISTING_INPUT: "securityListingInput",
  SECURITY_TYPE_INPUT: "securityTypeInput",
  SLIDER: "slider",
  STATIC: "static",
  TEXT_INPUT: "textInput",
  TEXT_ITEM: "textItem",
  TOOLBAR: "toolbar",
};
CLX.Ah = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46,
};
CLX.Ai = (function () {
  var b,
    a,
    c = function () {
      a = CLX.Ae("overlayTemplate");
    };
  b = {
    clone: function () {
      if (!a || !a.length) {
        c();
      }
      return a.clone();
    },
    updateOverlayElement: function (e, d) {
      var f,
        g = CLX.D;
      e.children("." + g.OVERLAY).remove();
      if (d) {
        f = b.clone();
        e.append(f);
        d.attach(f);
      }
    },
  };
  return b;
})();
CLX.Aj = function (l) {
  var h,
    g = CLX.F,
    m = function (o) {
      var n;
      if (CLX.O(o)) {
        CLX.$.each(g, function (p, q) {
          if (o.toLowerCase() === String(q).toLowerCase()) {
            n = true;
            return false;
          }
        });
      }
      return n;
    },
    k = function (n) {
      if (n) {
        CLX.$.extend(this, n || {});
      }
      return this;
    },
    d = function (s, o, r, p, q) {
      var n = CLX.Ac(p) ? r : p || r;
      if (!s || !r) {
        throw new Error('Property descriptor must have a "type" and a "name"');
      }
      if (!m(s)) {
        throw new Error("Invalid property data type: " + s);
      }
      this[r] = {
        type: s,
        defaultValue: o,
        name: r,
        attributes: CLX.B(n) ? n : [n],
        skipChangeEventOnAttach: CLX.Ac(p) ? p : !!q,
      };
      return this;
    },
    e = function (n, p, o) {
      throw new Error(
        "AttrParseError(name=" + n + ", value=" + p + ", type=" + o + ")"
      );
    },
    i = function (p, r, q) {
      var o = true,
        n;
      if (String(p).indexOf("-") !== -1) {
        n = String(r).toLowerCase();
        if (n === "true" || n === "false") {
          o = n === "true";
        } else {
          e(p, r, q);
        }
      }
      return o;
    },
    b = function (p, r, q) {
      var n,
        o = String(r);
      if (CLX.N(o)) {
        n = Number(o);
        if (!isFinite(n)) {
          e(p, r, q);
        }
      }
      return n;
    },
    j = function (n, p, o) {
      return String(p);
    },
    a = function (p, r, q) {
      var o, n;
      if (r !== undefined && r !== null) {
        n = String(q).toLowerCase();
        if (n === g.BOOLEAN) {
          o = i(p, r, q);
        } else {
          if (n === g.NUMBER) {
            o = b(p, r, q);
          } else {
            o = j(p, r, q);
          }
        }
      }
      return o;
    },
    c = function (o) {
      var n = {};
      if (o) {
        CLX.$.each(this, function (p, q) {
          if (CLX.C(q)) {
            CLX.$.each(q.attributes, function (s, r) {
              var u,
                t = String(r);
              if (o.is("[" + t + "]")) {
                u = a(t, o.attr(t), q.type);
                if (u !== undefined && u !== null) {
                  n[q.name] = u;
                }
              }
              return u === undefined || u === null;
            });
          }
        });
      }
      return n;
    },
    f = function () {
      var n = [],
        o = CLX.F.COMPONENT;
      CLX.$.each(this, function (p, q) {
        if (CLX.C(q) && q.type === o) {
          n.push(p);
        }
      });
      return n;
    };
  h = {
    add: k,
    def: d,
    getElementProperties: c,
    getNestedComponentPropertyNames: f,
  };
  if (l) {
    h.add(l);
  }
  return h;
};
CLX.Ak = function (c, b, a) {
  return CLX.V(c, b, a) !== -1;
};
CLX.Al = function (b, a) {
  return CLX.$.each(CLX.U(b), a);
};
CLX.Am = function () {
  var a = this;
  CLX.Z(a && a.getElement());
};
CLX.An = function () {
  var b = this,
    c,
    d,
    a,
    g,
    e,
    f = CLX.E;
  c = CLX.L(b, f.CSS) || "";
  if (CLX.B(c)) {
    c = c.join(" ");
  }
  d = CLX.L(b, f.DISABLED) ? " " + f.DISABLED : "";
  a = CLX.L(b, f.READONLY) ? " " + f.READONLY : "";
  g = CLX.L(b, f.REQUIRED) ? " " + f.REQUIRED : "";
  e = CLX.L(b, f.LOOK);
  e = !e ? "" : " " + e;
  c += d + a + g + e;
  return CLX.K().addClass(c).attr(f.CLASS);
};
CLX.Ao = function (e) {
  var c = this,
    b = false,
    d,
    a;
  if (CLX.N(e)) {
    d = CLX.L(c, CLX.E.CSS);
    a = CLX.B(d);
    if (a) {
      d = d.join(" ");
    }
    if (CLX.N(d)) {
      b = CLX.K().addClass(d).hasClass(e);
    }
  }
  return b;
};
CLX.Ap = function () {
  var a = this,
    c = a.getElement(),
    b = CLX.E.HIDDEN;
  CLX.X.call(a, CLX.D.DISPLAY_NONE);
  if (CLX.Ac(CLX.L(a, b))) {
    CLX.R(a, b, true);
  }
  if (c) {
    c.hide();
  }
  return a;
};
CLX.Aq = function () {
  var a = this,
    c = a.getElement(),
    b = CLX.E.HIDDEN;
  CLX.Aa.call(a, CLX.D.DISPLAY_NONE, true);
  if (CLX.Ac(CLX.L(a, b))) {
    CLX.R(a, b, false);
  }
  if (c) {
    c.show();
  }
  return a;
};
CLX.Ar = function (e, f) {
  var b = this,
    d,
    a,
    c,
    g = CLX.E;
  if (CLX.N(e)) {
    d = CLX.L(b, g.CSS);
    a = CLX.B(d);
    if (a) {
      d = d.join(" ");
    }
    c = CLX.K();
    if (CLX.N(d)) {
      c.addClass(d);
    }
    d = c.toggleClass(e).attr(g.CLASS);
    if (a) {
      d = (d || "").split(/\s/);
    }
    CLX.R(b, g.CSS, d, f);
  }
  return b;
};
CLX.As = function (a, d) {
  var c = function () {
      return;
    },
    b;
  c.prototype = a;
  b = new c();
  if (!d) {
    b.parent = a;
  }
  return b;
};
CLX.At = (function () {
  return document && document.body && document.body.style.position;
})();
CLX.Au = (function () {
  var f = [],
    l = [],
    i = [],
    e = "__proto__",
    a =
      Object.getPrototypeOf ||
      function (n) {
        return n[e];
      },
    c,
    m = function (n, o) {
      if (typeof o === "object") {
        o = o.valueOf();
      }
      if (typeof n === "object") {
        n = n.valueOf();
      }
      return o === n;
    },
    g = function (o, n) {
      var q = a(o),
        p = a(n);
      if (o.constructor === n.constructor) {
        return true;
      }
      if (q && q.constructor === null) {
        q = null;
      }
      if (p && p.constructor === null) {
        p = null;
      }
      if (
        (q === null && p === Object.prototype) ||
        (p === null && q === Object.prototype)
      ) {
        return true;
      }
      return false;
    },
    h = function (n) {
      return n.flags || n.toString().match(/[gimuy]*$/)[0];
    },
    k = {
      string: m,
      boolean: m,
      number: m,
      null: m,
      undefined: m,
      symbol: m,
      date: m,
      nan: function () {
        return true;
      },
      regexp: function (n, o) {
        return o.source === n.source && h(o) === h(n);
      },
      function: function () {
        var n = f[f.length - 1];
        return n !== Object && n !== undefined;
      },
      array: function (o, q) {
        var t, r, n, p, u, s;
        n = q.length;
        if (n !== o.length) {
          return false;
        }
        l.push(q);
        i.push(o);
        for (t = 0; t < n; t++) {
          p = false;
          for (r = 0; r < l.length; r++) {
            u = l[r] === q[t];
            s = i[r] === o[t];
            if (u || s) {
              if (q[t] === o[t] || (u && s)) {
                p = true;
              } else {
                l.pop();
                i.pop();
                return false;
              }
            }
          }
          if (!p && !c(q[t], o[t])) {
            l.pop();
            i.pop();
            return false;
          }
        }
        l.pop();
        i.pop();
        return true;
      },
      set: function (n, o) {
        var p,
          q = true;
        if (o.size !== n.size) {
          return false;
        }
        o.forEach(function (r) {
          p = false;
          n.forEach(function (s) {
            if (c(s, r)) {
              p = true;
            }
          });
          if (!p) {
            q = false;
          }
        });
        return q;
      },
      map: function (n, o) {
        var p,
          q = true;
        if (o.size !== n.size) {
          return false;
        }
        o.forEach(function (r, s) {
          p = false;
          n.forEach(function (u, t) {
            if (c([u, t], [r, s])) {
              p = true;
            }
          });
          if (!p) {
            q = false;
          }
        });
        return q;
      },
      object: function (s, t) {
        var p,
          o,
          r,
          q,
          v,
          w = true,
          n = [],
          u = [];
        if (g(t, s) === false) {
          return false;
        }
        f.push(t.constructor);
        l.push(t);
        i.push(s);
        for (p in t) {
          if (t[p] !== undefined) {
            r = false;
            for (o = 0; o < l.length; o++) {
              q = l[o] === t[p];
              v = i[o] === s[p];
              if (q || v) {
                if (t[p] === s[p] || (q && v)) {
                  r = true;
                } else {
                  w = false;
                  break;
                }
              }
            }
            n.push(p);
            if (!r && !c(t[p], s[p])) {
              w = false;
              break;
            }
          }
        }
        l.pop();
        i.pop();
        f.pop();
        for (p in s) {
          if (s[p] !== undefined) {
            u.push(p);
          }
        }
        return w && c(n.sort(), u.sort());
      },
    },
    d = Object.prototype.toString,
    b = function (p) {
      if (p === undefined) {
        return "undefined";
      }
      if (p === null) {
        return "null";
      }
      var n = d.call(p).match(/^\[object\s(.*)\]$/),
        o = n && n[1];
      switch (o) {
        case "Number":
          if (isNaN(p)) {
            return "nan";
          }
          return "number";
        case "String":
        case "Boolean":
        case "Array":
        case "Set":
        case "Map":
        case "Date":
        case "RegExp":
        case "Function":
        case "Symbol":
          return o.toLowerCase();
      }
      if (typeof p === "object") {
        return "object";
      }
    },
    j = function (o, n) {
      var p = b(o);
      return b(n) === p && k[p](n, o);
    };
  c = function (o, n) {
    if (arguments.length < 2) {
      return true;
    }
    return (
      (o === n || j(o, n)) &&
      (arguments.length === 2 || c.apply(this, [].slice.call(arguments, 1)))
    );
  };
  return c;
})();
CLX.Av = function (b, a) {
  return window.setTimeout(b, a || 0);
};
CLX.Aw = function (a) {
  return !a || /^[\f\n\r\t\u000B\u0020\u00A0\u2028\u2029]+$/.test(a);
};
CLX.Ax = function (a) {
  return CLX.C(a) && CLX.M(a.attach);
};
CLX.Ay = function (b) {
  var a = CLX.H;
  return b && b.is(a.INPUT_SELECTOR + "," + a.BUTTON_SELECTOR);
};
CLX.Az = function (c, a, b) {
  if (CLX.N(a) && CLX.M(b)) {
    c[CLX.Q(a)] = b;
  } else {
    throw new Error(
      "Illegal argument to onPropertyChanged: name=" + a + ", handler=" + b
    );
  }
};
CLX.Ba = function (b) {
  var d, a, c;
  b = b || "";
  d = CLX.Ad(b) ? b : CLX.Af(b);
  a = CLX.W(d);
  if (/^Is[A-Z0-9]/.test(a) || /^Has[A-Z0-9]/.test(a)) {
    c = a[0].toLowerCase() + a.substring(1);
  } else {
    c = "get" + a;
  }
  return [c, "set" + a];
};
CLX.Bb = function (c, a, b) {
  var e,
    d,
    h = CLX.E,
    g = CLX.D,
    f = CLX.S;
  a.load(c);
  if (!CLX.L(a, h.ID)) {
    CLX.R(a, h.ID, CLX.T().nextId(a.getName()), true);
  }
  CLX.Aa.call(a, g.BUSY, true);
  c.removeClass(g.BUSY);
  e = a.getRenderer();
  d = e.paint(c, a);
  if (d) {
    d.data(f.COMPONENT, a);
    CLX.Ab(d, a, e.getDescriptor(), true);
    CLX.Y(d, a, e);
    e.attachChildren(d, a, b);
    b.offdom.push(function () {
      if (c !== d) {
        c.replaceWith(d);
      }
    });
    b.indom.push(function () {
      e.addEventHandlers(d, a);
    });
  }
  return d;
};
CLX.Bc = function (b, d, a) {
  if (b) {
    var c = a.getRenderer();
    if (CLX.M(c.detachChildren)) {
      c.detachChildren(b, a);
    }
    if (d) {
      b.replaceWith(d);
    }
  }
  return null;
};
CLX.Bd = function (b, a, c) {
  if (c === null || c === undefined) {
    b.removeAttr(String(a));
  } else {
    b.attr(String(a), String(c));
  }
};
CLX.Be = {
  BLUR: "blur",
  CLICK: "click",
  COLLAPSED: "collapsed",
  DOWN: "down",
  END: "end",
  ENTER: "enter",
  ESC: "esc",
  EXPANDED: "expanded",
  FOCUS: "focus",
  HOME: "home",
  KEY: "key",
  OUT: "out",
  PASTE: "paste",
  PAGE_DOWN: "pagedown",
  PAGE_UP: "pageup",
  SPACE: "space",
  TAB: "tab",
  UP: "up",
};
CLX.Bf = function ComponentRendererFactory() {
  var f = {},
    d = CLX.F,
    g = CLX.E,
    a = CLX.S,
    e = CLX.H,
    i = CLX.Ah,
    c = function (o, l, n) {
      var k = o.data.element,
        q = o.value,
        p,
        m;
      if (q === undefined || q === null) {
        CLX.Bd(k, l, null);
        CLX.Bd(k, n, null);
      } else {
        if (CLX.Ay(k)) {
          CLX.Bd(k, l, q ? "" : null);
        }
        CLX.Bd(k, n, !!q);
      }
      p = o.data.component.getRenderer();
      m = p[CLX.Q(g.CSS)];
      m(o);
    },
    h = function (m, l) {
      var k = CLX.L(l, g.OVERLAY);
      if (k) {
        CLX.R(k, g.PARENT, l);
      }
      CLX.Ai.updateOverlayElement(m, k);
    },
    b = function (l, k, n) {
      var m = l.data(a.OVERLAY_FOCUS_HANDLER);
      if (n) {
        l.on("blur", CLX.H.ALL_TABBABLES, function (q) {
          var p = CLX.L(k, g.OVERLAY),
            o;
          if (p) {
            o = CLX.L(k, g.OVERLAY_HIDE_ON_BLUR);
            if (o) {
              CLX.Av(function () {
                var r = CLX.$(e.BODY_SELECTOR).find(e.FOCUS_SELECTOR);
                if (r.length && !CLX.$.contains(l[0], r[0])) {
                  CLX.R(p, g.EXPANDED, false);
                }
              });
            }
          }
        });
        if (!m) {
          m = function (p) {
            if (CLX.L(k, g.OVERLAY_HIDE_ON_BLUR)) {
              var o = CLX.L(k, g.OVERLAY);
              if (
                o &&
                !(p.target === l[0]) &&
                CLX.$(p.target).parents().index(l) === -1
              ) {
                CLX.R(o, g.EXPANDED, false);
              }
            }
          };
          l.data(a.OVERLAY_FOCUS_HANDLER, m);
        }
        CLX.$(document).on("click", m);
      } else {
        if (m) {
          CLX.$(document).off("click", m);
          l.data(a.OVERLAY_FOCUS_HANDLER, null);
        }
      }
    },
    j = CLX.Aj();
  j.def(d.STRING, null, g.ID);
  j.def(d.STRING, null, g.NAME, [g.NAME, g.DATA_NAME]);
  j.def(d.STRING, null, g.TITLE, [g.TITLE, g.ARIA_LABEL]);
  j.def(d.STRING, null, g.LABEL, g.ARIA_LABEL);
  j.def(d.STRING, null, g.LABELLEDBY, g.ARIA_LABELLEDBY);
  j.def(d.STRING_SET, null, g.CSS, g.CLASS);
  j.def(d.STRING, null, g.ROLE, [g.ROLE, g.ARIA_ROLE]);
  j.def(d.STRING, null, g.LOOK, g.DATA_LOOK);
  j.def(d.BOOLEAN, null, g.HIDDEN, [g.HIDDEN, g.ARIA_HIDDEN]);
  j.def(d.BOOLEAN, null, g.DISABLED, [g.DISABLED, g.ARIA_DISABLED]);
  j.def(d.BOOLEAN, null, g.READONLY, [g.READONLY, g.ARIA_READONLY]);
  j.def(d.BOOLEAN, null, g.REQUIRED, [g.REQUIRED, g.ARIA_REQUIRED]);
  j.def(d.NUMBER, null, g.TABINDEX);
  j.def(d.OBJECT, null, g.PARENT, [], true);
  j.def(d.OBJECT, null, g.CONTAINER, [], true);
  j.def(d.COMPONENT, null, g.OVERLAY, [], true);
  j.def(
    d.BOOLEAN,
    null,
    g.OVERLAY_HIDE_ON_BLUR,
    g.DATA_OVERLAY_HIDE_ON_BLUR,
    true
  );
  j.def(
    d.BOOLEAN,
    null,
    g.OVERLAY_DEFAULT_KEYS_OFF,
    g.DATA_OVERLAY_DEFAULT_KEYS_OFF,
    true
  );
  f.getDescriptor = function () {
    return j;
  };
  f.getName = function () {
    return CLX.Ag.COMPONENT;
  };
  f.init = function (k) {
    k.getCss = CLX.An;
    k.show = CLX.Aq;
    k.hide = CLX.Ap;
    k.hasClass = CLX.Ao;
    k.addClass = CLX.X;
    k.removeClass = CLX.Aa;
    k.toggleClass = CLX.Ar;
    k.focus = CLX.Am;
  };
  f.paint = function (l, k) {
    return l;
  };
  f.attach = function (m, k, l) {
    return CLX.Bb(m, k, l);
  };
  f.detach = function (l, m, k) {
    return CLX.Bc(l, m, k);
  };
  f.attachChildren = function (m, k, l) {
    return;
  };
  f.detachChildren = function (m, l) {
    var k = CLX.L(l, g.OVERLAY);
    if (k) {
      k.detach();
    }
    b(m, l, false);
  };
  f.addEventHandlers = function (l, k) {
    h(l, k);
    b(l, k, true);
    l.keydown(function (n) {
      if (!CLX.L(k, g.OVERLAY_DEFAULT_KEYS_OFF)) {
        var m = CLX.L(k, g.OVERLAY);
        if (m && n.charCode === 0) {
          if ((n.keyCode === i.UP && n.altKey) || n.keyCode === i.ESC) {
            CLX.R(m, g.EXPANDED, false);
            k.focus();
          } else {
            if (n.keyCode === i.DOWN && n.altKey) {
              CLX.R(m, g.EXPANDED, true);
            }
          }
        }
      }
    });
  };
  CLX.Az(f, g.ID, function (l) {
    var k = l.data.element,
      m = l.value;
    CLX.Bd(k, g.ID, m);
  });
  CLX.Az(f, g.NAME, function (l) {
    var k = l.data.element,
      m = l.value;
    if (CLX.Ay(k)) {
      CLX.Bd(k, g.NAME, m);
    } else {
      CLX.Bd(k, g.DATA_NAME, m);
    }
  });
  CLX.Az(f, g.TITLE, function (l) {
    var k = l.data.element,
      m = l.value;
    if (k.is(e.INPUT_SELECTOR)) {
      CLX.Bd(k, g.TITLE, m);
    } else {
      CLX.Bd(k, g.ARIA_LABEL, m);
    }
  });
  CLX.Az(f, g.LABEL, function (l) {
    var k = l.data.element;
    CLX.Bd(k, g.ARIA_LABEL, l.value);
  });
  CLX.Az(f, g.LABELLEDBY, function (l) {
    var k = l.data.element;
    CLX.Bd(k, g.ARIA_LABELLEDBY, l.value);
  });
  CLX.Az(f, g.CSS, function (m) {
    var l = m.data.element,
      k = m.data.component;
    CLX.Bd(l, g.CLASS, k.getCss());
  });
  CLX.Az(f, g.ROLE, function (l) {
    var k = l.data.element;
    CLX.Bd(k, g.ROLE, l.value);
    CLX.Bd(k, g.ARIA_ROLE, l.value);
  });
  CLX.Az(f, g.LOOK, function (l) {
    var m = l.data.component.getRenderer(),
      k;
    k = m[CLX.Q(g.CSS)];
    k(l);
  });
  CLX.Az(f, g.HIDDEN, function (l) {
    var k = l.data.element,
      m = l.value;
    if (m !== undefined && m !== null) {
      if (m) {
        k.hide();
      } else {
        k.show();
      }
      CLX.Bd(k, g.HIDDEN, m ? "" : null);
      CLX.Bd(k, g.ARIA_HIDDEN, !!m);
    }
  });
  CLX.Az(f, g.DISABLED, function (k) {
    c(k, g.DISABLED, g.ARIA_DISABLED);
  });
  CLX.Az(f, g.READONLY, function (k) {
    c(k, g.READONLY, g.ARIA_READONLY);
  });
  CLX.Az(f, g.REQUIRED, function (k) {
    c(k, g.REQUIRED, g.ARIA_REQUIRED);
  });
  CLX.Az(f, g.TABINDEX, function (l) {
    var k = l.data.element;
    CLX.Bd(k, g.TABINDEX, l.value);
  });
  CLX.Az(f, g.OVERLAY, function (l) {
    var k = l.old;
    if (k) {
      CLX.R(k, g.PARENT, null);
      k.detach();
    }
    h(l.data.element, l.data.component);
  });
  return f;
};
CLX.Bg = (function () {
  var g = {},
    c = function (i) {
      return i !== undefined && i !== null;
    },
    h = function (i) {
      return function () {
        var j = Array.prototype.slice.call(arguments, 0);
        j.unshift(this);
        return i.apply(this, j);
      };
    },
    a = function (m, k, j) {
      var i, l;
      l = m.get(k);
      if (l === undefined) {
        l = m.get(CLX.W(k, false));
        if (l === undefined) {
          l = m.get(CLX.W(k, true));
        }
      }
      if (CLX.C(l) || CLX.B(l)) {
        i = j.create(l);
      }
      return i;
    },
    b = function (j, i) {
      return function () {
        return a(this, j, i);
      };
    },
    f = function (i) {
      return function () {
        return this.get(i);
      };
    },
    d = function (i) {
      return function (l, k, j) {
        return this.set(i, l, k, j);
      };
    },
    e = function (k, j) {
      var i = j;
      if (j !== undefined && j !== null) {
        if (!CLX.C(j)) {
          j = { value: j };
        }
        i = CLX.Bg.dataRecordFactoryWrap(k, j);
      }
      return i;
    };
  g.DOT = ".";
  g.GUI_CONFIG = "GuiConfig";
  g.GUI_PREFERENCES = "GuiPreferences";
  g.getAlternativeNames = function (j, l, i) {
    var k = i && i[j];
    if (!k && CLX.M(l)) {
      k = l(j);
      if (CLX.B(k)) {
        k = k.length ? k : [j];
      } else {
        k = [k || j];
      }
      if (i) {
        i[j] = k;
      }
    }
    return k;
  };
  g.getValue = function (l, n, j) {
    var t = this,
      r = String(l),
      q,
      s,
      i,
      k,
      p,
      o,
      m;
    if (t && c(l)) {
      q = /\(\)$/.test(r);
      p = q ? r.substring(0, r.length - 2) : r;
      s = t[p];
      if (!c(s) && n) {
        i = CLX.Bg.getAlternativeNames(p, n, j);
        CLX.$.each(i, function (u, v) {
          if (v !== p) {
            s = t[v];
          }
          return !c(s);
        });
      }
      if (c(s)) {
        if (CLX.M(s) && q) {
          s = s.call(t);
        }
      } else {
        k = r.indexOf(CLX.Bg.DOT);
        if (k !== -1) {
          p = r.substring(0, k);
          o = r.substring(k + 1);
          q = /\(\)$/.test(p);
          if (q) {
            p = p.substring(0, p.length - 2);
          }
          m = t[p];
          if (CLX.M(m) && q) {
            m = m.call(t);
          }
          s = !c(m) ? undefined : CLX.Bg.getValue.call(m, o, n, j);
          if (!c(s) && n) {
            i = CLX.Bg.getAlternativeNames(p, n, j);
            CLX.$.each(i, function (u, v) {
              if (v !== p) {
                m = t[v];
                if (CLX.M(m) && q) {
                  m = m.call(t);
                }
                s = !c(m) ? undefined : CLX.Bg.getValue.call(m, o, n, j);
              }
              return !c(s);
            });
          }
        }
      }
    }
    return s;
  };
  g.setValue = function (t, n, k, r, o, i) {
    var l = this,
      u = String(n),
      q = String(k),
      j,
      s,
      m,
      p;
    if (l && q) {
      j = q.indexOf(CLX.Bg.DOT);
      if (j !== -1) {
        s = q.substring(0, j);
        if (!l[s]) {
          l[s] = {};
        }
        CLX.Bg.setValue.call(l[s], t, u, q.substring(j + 1), r, o, i);
      } else {
        m = l[q];
        if (!CLX.Au(r, m)) {
          l[q] = r;
          p = (CLX.C(o) && i) || (CLX.Ac(o) && o);
          o = CLX.C(o) ? o : undefined;
          if (!p && CLX.M(t.changeCallbacks && t.changeCallbacks.fire)) {
            t.changeCallbacks.fire({
              object: t,
              name: u,
              value: r,
              old: m,
              data: o,
            });
          }
        }
      }
    }
    return t;
  };
  g.addAccessorMethods = function (j, l, i) {
    if (CLX.Aw(j)) {
      throw new Error("Property name cannot be blank");
    }
    if (j === String(undefined)) {
      throw new Error(
        'Property name cannot be "undefined" - please check if a property name definition is missing'
      );
    }
    var k = CLX.Ba(j);
    if (CLX.M(l)) {
      this[k[0]] = h(l);
    } else {
      if (i) {
        this[k[0]] = b(j, i);
      } else {
        this[k[0]] = f(j);
      }
    }
    if (!l) {
      this[k[1]] = d(j);
    }
  };
  g.dataRecordFactoryWrap = function (j, i) {
    var k;
    if (i.hasOwnProperty("rec") && CLX.C(i.rec) && CLX.M(i.get)) {
      i = i.rec;
    }
    k = CLX.As(j, true);
    k.rec = i;
    return k;
  };
  g.dataRecordFactoryCreate = function (m, l) {
    var i,
      j = CLX.B(l),
      k = Array.prototype.slice.call(arguments, 1);
    if (j || k.length > 1) {
      i = CLX.$.map(j ? l : k, function (n) {
        return e(m, n);
      });
    } else {
      i = e(m, l);
    }
    return i;
  };
  return g;
})();
CLX.Bh = function I18nFactory() {
  var a = {},
    b = {
      get: function (e) {
        var d, c;
        if (CLX.N(e)) {
          d = a[e];
          if (d === undefined) {
            c = CLX.$("#" + e);
            if (c.length) {
              d = a[e] = c.html();
            } else {
              d = e;
            }
          }
        }
        return d;
      },
    };
  return b;
};
CLX.Bi = function (b, c, d) {
  var a;
  if (CLX.M(c)) {
    a = c;
  } else {
    if (CLX.B(c)) {
      a = function (e) {
        if (CLX.Ak(c, e.action)) {
          d.apply(this, arguments);
        }
      };
    } else {
      a = function (e) {
        if (e.action === c) {
          d.apply(this, arguments);
        }
      };
    }
  }
  b.actionCallbacks.add(a);
  return a;
};
CLX.Bj = function (c, b, d) {
  var a;
  if (CLX.M(b)) {
    a = b;
  } else {
    if (CLX.B(b)) {
      a = function (e) {
        if (CLX.Ak(b, e.name)) {
          d.apply(this, arguments);
        }
      };
    } else {
      a = function (e) {
        if (e.name === b) {
          d.apply(this, arguments);
        }
      };
    }
  }
  c.properties.changeCallbacks.add(a);
  return a;
};
CLX.Bk = function (b, c, d) {
  if (b.childChangeCallbacks) {
    var a;
    if (CLX.M(c)) {
      a = c;
    } else {
      if (CLX.B(c)) {
        a = function (e) {
          if (CLX.Ak(c, e.name)) {
            d.apply(this, arguments);
          }
        };
      } else {
        a = function (e) {
          if (e.name === c) {
            d.apply(this, arguments);
          }
        };
      }
    }
    b.childChangeCallbacks.add(a);
    return a;
  }
};
CLX.Bl = function (b, a) {
  var c = b;
  if (!b && !a) {
    throw new Error(
      "Missing target DOM element or a target DOM element selector"
    );
  }
  if (CLX.O(b)) {
    c = CLX.$(b);
    if (c.length !== 1) {
      if (a) {
        c = null;
      } else {
        throw new Error(
          "Selector " + b + " selects " + c.length + " elements, expected 1"
        );
      }
    }
  } else {
    if (c.length !== 1) {
      if (a) {
        c = null;
      } else {
        throw new Error(
          "Tried to access " + c.length + " elements, expected 1"
        );
      }
    }
  }
  return c;
};
CLX.Bm = function (b, a, c) {
  b.attachedToElement = a;
  b.placeholderElement = a ? c : null;
  return b.component;
};
CLX.Bn = function (b, c, a) {
  b.actionCallbacks.fire(
    CLX.C(c) ? c : { component: b, action: c, name: a || CLX.L(b, CLX.E.NAME) }
  );
};
CLX.Bo = function (a, b) {
  if (a.childChangeCallbacks) {
    a.childChangeCallbacks.fire(b);
  }
};
CLX.Bp = function (c, b, d) {
  var a;
  CLX.Al(b, function (g, f) {
    var e = CLX.L(c, f);
    CLX.Al(e, function (i, h) {
      if (CLX.Ax(h)) {
        a = d(h);
        return a;
      }
    });
    return a;
  });
};
CLX.Bq = function () {
  var b, a;
  b = document.body.style.position;
  a = b === "relative" ? "static" : "relative";
  document.body.style.position = b;
  CLX.Av(function () {
    document.body.style.position = a;
    CLX.Av(function () {
      document.body.style.position = CLX.At;
    });
  });
};
CLX.Br = function (a, b) {
  a.actionCallbacks.remove(b);
};
CLX.Bs = function (a, b) {
  a.properties.changeCallbacks.remove(b);
};
CLX.Bt = function (a, b) {
  if (a.childChangeCallbacks) {
    a.childChangeCallbacks.remove(b);
  }
};
CLX.Bu = function (j, d, g) {
  var a = [],
    i = CLX.E,
    b = CLX.Be,
    e =
      g ||
      (function () {
        var l = {};
        l[b.FOCUS] = true;
        l[b.CLICK] = true;
        l[b.ENTER] = true;
        l[b.ESC] = true;
        return l;
      })(),
    c = function (n, l) {
      var m;
      CLX.$.each(a, function (o, p) {
        if (n === p.component) {
          m = p;
          if (l) {
            a.splice(o, 1);
          }
          return false;
        }
      });
      return m;
    },
    k = function (n) {
      if (n && !c(n)) {
        var l, m;
        l = function (o) {
          if (e[o && o.action]) {
            CLX.Bn(j, o);
          }
        };
        m = function (o) {
          CLX.Bo(j, o);
        };
        a.push({ component: n, actionCallback: l, changeCallback: m });
        CLX.Bi(n, l);
        CLX.Bj(n, m);
        CLX.Bk(n, m);
        CLX.R(n, i.PARENT, j);
        CLX.R(n, i.CONTAINER, CLX.L(j, i.CONTAINER) || j);
      }
    },
    h = function (m) {
      var l = c(m, true);
      if (l) {
        CLX.Br(m, l.actionCallback);
        CLX.Bs(m, l.changeCallback);
        CLX.Bt(m, l.changeCallback);
        CLX.R(m, i.PARENT, null);
        CLX.R(m, i.CONTAINER, null);
      }
    },
    f = function (l) {
      if (l.name === i.CONTAINER) {
        CLX.Bp(j, d, function (m) {
          CLX.R(m, i.CONTAINER, l.value || j);
        });
      } else {
        if (CLX.Ak(d, l.name, true)) {
          CLX.Al(l.old, function (m, n) {
            if (CLX.Ax(n)) {
              h(n);
            }
          });
          CLX.Al(l.value, function (m, n) {
            if (CLX.Ax(n)) {
              k(n);
            }
          });
        }
      }
    };
  CLX.Bj(j, f);
  if (!j.childChangeCallbacks) {
    j.childChangeCallbacks = CLX.$.Callbacks();
  }
  CLX.Bp(j, d, k);
};
CLX.Bv = ", ";
CLX.Bw = {
  AJAX_TIMEOUT: "ajaxConfig.ajaxTimeout",
  SHOW_FULL_ADDRES: "show.fullAddress",
  SHOW_MARKET_VALUE_ACCRD_INT_WHEN_INTEREST_ON_POSITIONS:
    "show.marketValueAccrdIntWhenInterestOnPositions",
  SHOW_ORDERS_IN_PORTFOLIO: "show.ordersInPortfolio",
  SHOW_PAYMENTS_IN_PORTFOLIO: "show.paymentsInPortfolio",
  SHOW_POPUP_WHEN_TIMEOUT: "show.showPopupBehindWhenTimeout",
  SHOW_CREDITS_LIMITS_ON_PORTFOLIO_OVERVIEW:
    "show.creditsLimitsOnPortfolioOverview",
  SHOW_CREDIT_ALIAS_OR_NUMBER_DESCRIPTION:
    "show.showCreditAliasOrNumberDescription",
  SHOW_DOCUMENT_GROUPED_CATEGORIES: "show.documentGroupedCategories",
  SHOW_WARNING_FOR_NON_DEFAULT_MARKETPLACE:
    "show.warningForNonDefaultMarketplace",
  SHOW_WARNING_FOR_NON_DEFAULT_DEPOT: "show.warningForNonDefaultTradingDepot",
  SHOW_MARKETINFO_BTN_ON_BROKEXEC_INFO: "show.marketInfoButtonOnBrokExecInfo",
  SHOW_PRINT_BTN_ON_BROKEXEC_INFO: "show.printButtonOnBrokExecInfo",
  SHOW_BACK_TO_PORTFOLIO_BUTTON: "show.backToPortfolioButton",
  SHOW_USER_FLY_OUT: "show.userInfoFlyOut",
  SHOW_CURRENCY_ACCOUNTS_OVERVIEW: "drilldown.showCurrencyAccountsOverview",
  SHOW_FORECAST_VIEW: "show.showForecastView",
  SHOW_INVESTMENT_PORTFOLIOS_OVERVIEW:
    "drilldown.showInvestmentPortfoliosOverview",
  SINGLE_PORTFOLIO_AUTO_DRILLDOWN: "drilldown.singlePortfolioAutoDrilldown",
  SINGLE_FILE_EXCHANGE_DRILLDOWN: "drilldown.singleFileExchangeAutoDrilldown",
  SHOW_PORTFOLIO_OVERVIEW_CHART: "show.showPortfolioOverviewChart",
  SHOW_PORTFOLIO_POSITIONS_CHART: "show.showPortfolioPositionsChart",
  SHOW_NET_MONEY_FLOW_CHART: "show.showNetMoneyFlowChart",
  SHOW_COLUMN_VISIBILITY: "show.columnVisibility",
  SHOW_TWO_LEVEL_POSITION_GROUPING: "show.twoLevelPositionGrouping",
  TOTAL_LABEL_ON_TWO_LEVEL_GROUPING: "show.totalLabelOnTwoLevelGrouping",
  SHOW_PERCENTAGE_WITH_PROFIT_VALUES_ON_POSITION_DETAIL:
    "show.percentageWithProfitValuesOnPositionDetail",
  SHOW_ACCOUNTS_IN_PORTFOLIO_OVERVIEW_CHART:
    "show.showAccountsInPortfolioOverviewChart",
  SHOW_LOGIN_COLOR_SCHEME: "show.loginColorScheme",
  SHOW_ONLY_PORT_CURRENCY_VALUES_ON_POSITION_DETAIL:
    "show.onlyPortCurrencyValuesOnPositionDetail",
  SHOW_BENIFICIARY_ADDRESS_FOR_PAYMENT_SLIPS:
    "show.showBenificiaryAddressForPaymentsSlips",
  SHOW_PAYMENT_ADDITIONAL_FEES_WARNING: "show.paymentAdditionalFeesWarning",
  SHOW_BROKERAGE_CANCELATION_OK_INFO: "show.brokerageCancellationOkInfo",
  SHOW_BROKERAGE_ORDER_ENTERED_BY: "show.brokerageOrderEnteredBy",
  SHOW_STANDING_ORDER_QUICK_PAYMENT_BUTTON:
    "show.showStandingOrderQuickPAyment",
  SHOW_LONG_EXCHANGE_NAME: "show.showLongExchangeName",
  SHOW_BROKERAGE_STOP_BUY: "show.brokerageStopBuy",
  SHOW_TOTALS_HEADER_ON_FINANCES_OVERVIEW:
    "show.totalsHeaderOnFinancesOverview",
  SHOW_TOTAL_GAIN_ON_POSITIONS_OVERVIEW: "show.totalGainOnPositionsOverview",
  SHOW_DEPOT_AS_PORTFOLIO: "show.depotAsPortfolio",
  SHOW_MOBILE_NOTICES: "show.showMobileNotices",
  CHART_POSITION_CHART_BY_ENABLED: "chart.position.chartByEnabled",
  CHART_POSITION_CHART_WIDTH: "chart.position.chartWidth",
  CHART_POSITION_LEGEND_TITLE: "chart.position.legendTitle",
  CHART_POSITION_MINOR_TICK_INTERVAL: "chart.position.minorTickInterval",
  CHART_POSITION_MAX_BAR_WIDTH: "chart.position.maxBarWidth",
  CHART_POSITION_MIN_BAR_WIDTH: "chart.position.minBarWidth",
  CHART_POSITION_XAXIS_GRID_LINE_WIDTH: "chart.position.xAxisGridLineWidth",
  CHART_POSITION_LEGEND_USE_HTML: "chart.position.legendUseHtml",
  CHART_POSITION_LABEL_USE_HTML: "chart.position.labelUseHtml",
  CHART_POSITION_LEGEND_SYMBOL_RADIUS: "chart.position.symbolRadius",
  CHART_POSITION_LEGEND_SYMBOL_WIDTH: "chart.position.symbolWidth",
  CHART_POSITION_YAXIS_TICK_INTERVAL: "chart.position.yAxisTickInterval",
  CHART_POSITION_WIDTH: "chart.position.width",
  CHART_POSITION_XAXIS_TICK_WIDTH: "chart.position.tickWidth",
  CHART_POSITION_SHOW_DATA_LABELS: "chart.position.showDataLabels",
  CHART_POSITION_SHOW_LEGEND: "chart.position.showLegend",
  CHART_POSITION_SHOW_TITLE: "chart.position.showTitle",
  CHART_POSITION_SHOW_TOOLTIP: "chart.position.showTooltip",
  CHART_POSITION_TOOLTIP_FOLLOW_POINTER: "chart.position.tooltipFollowPointer",
  CHART_POSITION_TYPE: "chart.position.type",
  CHART_POSITION_XAXIS_LABEL_ALIGN: "chart.position.xAxisLabelAlign",
  CHART_OVERVIEW_SHOW_DATA_LABELS: "chart.overview.showDataLabels",
  CHART_POSITION_SHOW_STACK_LABELS: "chart.position.showStackLabels",
  CHART_OVERVIEW_SHOW_LEGEND: "chart.overview.showLegend",
  CHART_OVERVIEW_SHOW_TITLE: "chart.overview.showTitle",
  CHART_OVERVIEW_SHOW_TOOLTIP: "chart.overview.showTooltip",
  CHART_OVERVIEW_TYPE: "chart.overview.type",
  CHART_OVERVIEW_LEGEND_LAYOUT: "chart.overview.legendLayout",
  CHART_OVERVIEW_LEGEND_REVERSED: "chart.overview.legendReversed",
  CHART_OVERVIEW_YAXIS_MAX: "chart.overview.yAxisMax",
  CHART_OVERVIEW_YAXIS_LABELS_STAGGER_LINES:
    "chart.overview.yAxisLabelsStaggerLines",
  CHART_OVERVIEW_XAXIS_TICK_INTERVAL: "chart.overview.xAxisTickInterval",
  CHART_OVERVIEW_YAXIS_TICK_INTERVAL: "chart.overview.yAxisTickInterval",
  CHART_OVERVIEW_XAXIS_LABELS_ENABLED: "chart.overview.xAxisLabelsEnabled",
  CHART_OVERVIEW_XAXIS_TICK_LENGTH: "chart.overview.xAxisTickLength",
  CHART_OVERVIEW_XAXIS_LINE_WIDTH: "chart.overview.xAxisLineWidth",
  CHART_OVERVIEW_XAXIS_GRID_LINE_WIDTH: "chart.overview.xAxisGridLineWidth",
  CHART_OVERVIEW_YAXIS_GRID_LINE_WIDTH: "chart.overview.yAxisGridLineWidth",
  CHART_OVERVIEW_HEIGHT: "chart.overview.chartHeight",
  CHART_POSITION_HEIGHT: "chart.position.chartHeight",
  CHART_POSITION_XAXIS_LABEL_TRIM: "chart.position.xAxisLabelTrim",
  CHART_POSITION_MIN_POINT_LENGTH: "chart.position.minPointLength",
  CHART_HEIGHT_SCALE_FACTOR: "chart.position.chartHeightScaleFactor",
  CHART_POSITION_MARGIN_RIGHT: "chart.position.marginRight",
  CHART_LEGEND_VERTICAL_OFFSET: "chart.position.legendVerticalOffset",
  CHART_OVERVIEW_PLOT_DATA_LABELS_XAXIS: "chart.overview.xAxisDataLabels",
  CHART_OVERVIEW_PLOT_DATA_LABELS_YAXIS: "chart.overview.yAxisDataLabels",
  CHART_PORTFOLIO_WIDGET_XAXIS_GRID_LINE_WIDTH:
    "chart.portfolioWidget.xAxisGridLineWidth",
  CHART_PORTFOLIO_WIDGET_MAX_BAR_WIDTH: "chart.portfolioWidget.maxBarWidth",
  CHART_PORTFOLIO_WIDGET_Y_AXIS_LABELS_ENABLED:
    "chart.portfolioWidget.yAxisLabelsDisplayed",
  CHART_PORTFOLIO_WIDGET_GROUP_PORTFOLIOS:
    "chart.portfolioWidget.groupPortfolios",
  CHART_SORT_CURRENCY_LEGEND: "chart.position.sortCurrencyLegend",
  CHART_TOP_CURRENCIES: "chart.position.topCurrencies",
  CHART_THOUSANDS_SEPARATOR_LABELS_FORMATTER:
    "chart.position.thousandsSeparatorLabelsFormatter",
  CHART_PERFORMANCE_SHOW_ACCUMULATED_PERF:
    "chart.performance.showAccumulatedPerf",
  CHART_PERFORMANCE_SHOW_LEGEND: "chart.performance.showLegend",
  CHART_PERFORMANCE_SHOW_TITLE: "chart.performance.showTitle",
  CHART_PERFORMANCE_SHOW_TOOLTIP: "chart.performance.showTooltip",
  MARKET_INFO_SECURITY_DETAILS_URL: "marketInfo.securityDetailsUrl",
  MARKET_INFO_SECURITY_VALUE_URL: "marketInfo.securityValueUrl",
  MARKET_INFO_USE_ROLOTEC: "marketInfo.useRolotec",
  MARKET_INFO_CONTRACT_USE_ROLOTEC: "marketInfo.useContractOnlyHash",
  MARKET_VALUES_URL: "marketValues.marketValuesUrl",
  MARKET_VALUES_TIMEOUT: "marketValues.marketValuesTimeout",
  FIVE_TRADE_URL: "fiveTrade.fiveTradeUrl",
  ROUND_INVESTMENT_PORTFOLIO_POSITIONS_ALLOC_COL_TOTAL:
    "show.roundInvestmentPortfolioPositionsAllocColumnTotal",
  SHOW_SECURITY_ASSET_CATEGORY_DESCRIPTION:
    "show.securityAssetCategoryDescription",
  SHOW_ONLY_PAGE_TITLES_IN_BREADCRUMB: "breadcrumb.showOnlyPageTitles",
  SHOW_HOME_BREADCRUMB: "breadcrumb.showHomeBreadcrumb",
  SHOW_STARTPAGE_HOME_BREADCRUMB: "breadcrumb.showStartpageHomeBreadcrumb",
  USE_BREADCRUMB_TEXT_DIVIDER: "breadcrumb.useDefinedDivider",
  SHOW_ICONS_IN_BREADCRUMB: "breadcrumb.showIcons",
  SHOW_TAB_TITLES_IN_BREADCRUMB: "breadcrumb.showTabTitles",
  TABS_AS_BREADCRUMBS: "breadcrumb.tabsAsBreadcrumbs",
  ADDITIONAL_FIRST_LINE_TEXT_IN_ACCOUNT_BREADCRUMB:
    "breadcrumb.additionalFirstLineTextInAccountBreadcrumb",
  POPULATE_RIGHT_SIDE_OF_ACCOUNT_BREADCRUMB:
    "breadcrumb.populateRightSideOfAccountBreadrcrumb",
  USE_BACKLINK_FORM: "breadcrumb.useBacklinkForm",
  CUT_DECIMALS_FROM_PORTOFLIO_MARKET_VALUE:
    "breadcrumb.cutDecimalsFromPortfolioMarketValue",
  SELECTOR_ACCNO_CURR_SEPARATE_COL: "selectors.accNoAndCurrSeparateCol",
  SELECTOR_PORTNO_CURR_SEPARATE_COL: "selectors.portNoAndCurrSeparateCol",
  SELECTOR_REMOVE_NEXT_90_DAYS_FILTER_IN_ACCOUNTS_TAB:
    "selectors.removeNext90DaysFilterInAccountsTab",
  SELECTOR_ADD_NEXT_90_DAYS_FILTER_IN_FORECAST_TAB:
    "selectors.addNext90DaysFilterInForecastTab",
  SELECTOR_ADD_CURRENT_YEAR_FILTER_IN_FORECASE_TAB:
    "selectors.addCurrentYearFilterInForecastTab",
  SELECTOR_REMOVE_EDIT_FILTER_BUTTON_IN_ACCOUNT_STATEMENT:
    "selectors.removeEditFilterButtonInAccountStatement",
  SHOW_PERS_SETTINGS_DESC_VAL_BY_PRIORITY: "show.persSettingsDescValByPriority",
  SHOW_LEGEND_COLORS: "show.legendColors",
  SHOW_PRIMARY_BUTTON: "show.primaryButton",
  SHOW_BORDER_COLOR: "show.borderColor",
  SHOW_HOVER_COLOR: "show.hoverColor",
  SHOW_NEW_MESSAGE_BUTTON: "show.newMessageButton",
  SHOW_CHART_BY_DROPDOWN: "show.chartByDropdown",
  SHOW_ACCOUNT_IN_IBAN: "show.accountIban",
  SHOW_ZEBRA_STRIPES: "show.zebraStripes",
  SHOW_VERTICAL_LINE: "show.verticalLine",
  SHOW_LEGEND_EVENT: "show.legendEvent",
  SHOW_DEBIT_NOTE: "show.showDebitNote",
  HIDE_DENY_STORD_DEBIT_ACCOUNTS: "show.hideDenyStordDebitAccounts",
  SHOW_QUICK_TRADE_SECU_TEXT_INPUT: "show.quickTradeSecuTextInput",
  SHOW_QUICK_BENEFICIARY_DETAIL_INPUT: "show.quickBeneficiaryDetailInput",
  SHOW_PERS_SETTINGS_DESC_CURR_BY_PROD_NUM:
    "show.persSettingsDescCurrByProdNum",
  SHOW_ACCOUNT_TYPE_DESC_ONLY: "show.accountTypeDescOnly",
  SHOW_GROUP_ACCOUNT_BY_CUSTOMER: "show.groupAccountByCustomer",
  SHOW_DROP_DOWN_CLEAR_SELECTION_ON_FOCUS: "show.dropDownClearSelectionOnFocus",
  SHOW_CHANGE_PORT_PERF_DETAIL_TABLE_AND_CHART:
    "show.changePortPerfDetailTableAndChart",
  SHOW_MANDATORY_DEBIT_REFERENCE: "show.mandatoryDebitReference",
  SHOW_ORIGIN_FIELD_IN_PAYMENT_DETAILS: "show.showOriginFieldInPaymentDetails",
  INVESTMENT_PORTFOLIO_POSITIONS_DEFAULT_FILTER_ALL:
    "show.investmentPortfolioPositionsDefaultFilterAll",
  SHOW_INVESTMENT_PORTFOLIO_POSITIONS_DEFAULT_FILTER_ALL_EAM:
    "show.showInvestmentPortfolioPositionsDefaultFilterAllEAM",
  INVESTMENT_PORTFOLIO_POSITIONS_CHART_INITIALLY_VISIBLE:
    "show.investmentPortfolioPositionsChartInitiallyVisible",
  INVESTMENT_PORTFOLIO_POSITIONS_HAS_PENDING_ORDERS_DECORATES_CURRENCY_COL:
    "show.investmentPortfolioPositionsHasPendingOrdersDecoratesCurrencyCol",
  INVESTMENT_PORTFOLIO_POSITIONS_COLORED_GAINS_AND_LOSSES:
    "show.investmentPortfolioPositionsColoredGainsAndLosses",
  INVESTMENT_PORTFOLIO_POSITIONS_BUY_SELL:
    "show.investmentPortfolioPositionsBuySell",
  SHOW_INVESTMENT_PORTFOLIOS_CURRENCY: "show.showInvestmentPortfoliosCurrency",
  SELECT_PRIVATE_BANKING_PAYMENT_STATUSES:
    "show.selectPrivateBankingPaymentStatuses",
  ACCOUNT_TRANSACTIONS_AS_DEFAULT_VIEW: "show.accountTransactionsAsDefaultView",
  SHOW_ACCOUNT_ESR_DETAILS: "show.accountEsrDetails",
  SALARY_FLAG_IN_INTERNATIONAL_PAYMENTS: "show.showSalaryFlaginInternational",
  SALARY_FLAG_IN_ORANGE_PAYMENTS: "show.showSalaryFlagInOrange",
  MANUAL_UK_PAYMENT_SWITCH_SUGGESTION: "show.manualUkPaymentSwitchSuggestion",
  USE_PROD_NO_FORM: "show.useProdNoForm",
  USE_STRICT_INPUT_NUMBER_FORMATING: "show.useStrictNumberFormatting",
  FORMAT_PROD_NO_FORM: "show.formatProdNoForm",
  SHOW_PAYMENT_FEE: "show.showPaymentFee",
  SHOW_PAYMENT_OCCURENCES_WITH_VALID_UNTIL:
    "show.showPaymentOccurencesWithValidUntil",
  SHOW_TRIPLE_A_QUANTITY: "show.showTripleAQuantity",
  SHOW_PERS_SETTINGS_FINANCES_SWITCH_LINES:
    "show.personalSettingsFinancesSwitchLines",
  SHOW_INCLUDE_CONTENTS_ON_ALERTING_ENTRY:
    "show.includeContentsOnAlertingEntry",
  SHOW_PORTFOLIO_ZERO_ACCRUED_INTEREST: "show.portfolioZeroAccruedInterest",
  SHOW_PORTFOLIO_NULL_MARKET_VALUE: "show.portfolioNullMarketValue",
  SHOW_PORTFOLIO_ERROR_POPUP_LOGOUT_BTN: "show.portfolioErrorPopupLogoutBtn",
  SHOW_PORTFOLIO_MANAGEMENT_TYPE_AND_GOAL_IN_HEADER:
    "show.portfolioManagementTypeAndGoalInHeader",
  SHOW_PORTFOLIO_OVERVIEW_VIEWS: "show.portfolioOverviewViews",
  SHOW_PORTFOLIO_MARKET_VALUE_CONTAINS_ACCRUED_INTEREST:
    "show.portfolioMarketValueContainsAccruedInterest",
  SHOW_ADD_INTEREST_TO_PRODUCT_VALUE: "show.addInterestToProductValue",
  SHOW_INFO_FOR_MISSING_PAYEE_REFERENCE_FOR_INTERNATIONAL_PAYMENTS:
    "showInfoForMissingPayeeReferenceForInternationalPayments",
  HEADINGS_USE_TABS: "components.headingsUseTabs",
  HEADING_TABS_BELOW: "components.headingTabsBelow",
  HEADING_CONTAINS_CONTEXT_MENU: "components.contextMenuInHeading",
  BUTTONS_IN_HEADING: "show.buttonsInHeading",
  SHOW_PERFORMANCE_VIEW: "show.performanceView",
  SHOW_PERFORMANCE_DATA_USE_MONEY_INSTEAD_OF_TIME:
    "show.performanceDataPercentageUseMoneyInsteadOfTime",
  SHOW_PORTFOLIO_PERFORMANCE_INDEX: "show.showPortfolioPerformanceIndex",
  SHOW_MOBILE_FAVOURITES_ELLIPSIS_LOCATION:
    "show.showMobileFavouritesEllipsisLocation",
  USE_FAVOURITE_LABEL_PROD_NO_FORM: "show.useFavouriteLabelProdNoForm",
  SHOW_PAYM_MESSAGE_EXCHANGE_WARNING_AS_IN_DESKTOP:
    "show.showPaymMessageExchangeWarningAsInDesktop",
  SHOW_ACCOUNT_INPUT_TEXT_SECOND_LINE_DESCRIPTION:
    "show.accountInputTextSecondLineDescription",
  SHOW_ACCOUNT_NUMBER_FIRST_IN_MOBILE_ACCOUNT_PICKER:
    "show.accountNumberFirstInMobileAccountPicker",
  SHOW_PRODUCT_NUMBER_IN_ACCOUNT_LIST_MOBILE:
    "show.accountProductNumberInAccountListMobile",
  SHOW_PORTFOLIO_INSTRUMENT_TITLE: "show.portfolioInstrumentTitle",
  SHOW_AMOUNT_GROUPING_IN_CSV_EXPORT: "show.amountGroupingInCsvExport",
  SHOW_BALANCE_LEFT_ACCOUNT_DETAIL_RIGHT_PICKER:
    "show.balanceLeftAccountDetailRightPicker",
  SHOW_MOBILE_ACCOUNT_PICKER_SECOND_LINE: "show.mobileAccountPickerSecondLine",
  DASHBOARD_RESPONSIVE_WIDGET_WIDTH: "dashboard.responsiveWidgetWidth",
  DASHBOARD_WIDGET_FILTER_IN_WIDGET: "dashboard.widgetFilterInWidget",
  DASHBOARD_WIDGET_FILTER_IN_OPTIPASS_WIDGET:
    "dashboard.widgetFilterInOptipassWidget",
  DASHBOARD_WIDGET_FILTER_IN_WIDGET_PERSISTENCY:
    "dashboard.widgetFilterInWidgetPersistency",
  DASHBOARD_UNIQUE_WIDGETS: "dashboard.uniqueWidgets",
  DASHBOARD_WIDGET_COLORS: "dashboard.widgetColors",
  DASHBOARD_WIDGET_WIDTH: "dashboard.dashboardWidgetWidth",
  DASHBOARD_WIDGET_MARGIN: "dashboard.dashboardWidgetMargin",
  DASHBOARD_USE_PERFECT_SCROLLBAR: "dashboard.usePerfectScrollbar",
  DASHBOARD_SHOW_TOOL_TIP: "dashboard.showTooltip",
  DASHBOARD_WIDGET_ACCOUNT_BOOKINGS_GROUPED:
    "dashboard.widgetAccountBookingsGrouped",
  DASHBOARD_WIDGET_ACCOUNTS_GROUPED: "dashboard.widgetAccountsGrouped",
  DASHBOARD_WIDGET_ALERTS_GROUPED: "dashboard.widgetAlertsGrouped",
  DASHBOARD_SHOW_NEW_ALERT_BUTTON: "dashboard.showNewAlertButton",
  DASHBOARD_WIDGET_CREDITCARDS_GROUPED: "dashboard.widgetCreditCardsGrouped",
  DASHBOARD_WIDGET_CREDITCARDSTRX_GROUPED:
    "dashboard.widgetCreditCardsTrxGrouped",
  DASHBOARD_WIDGET_MAILBOX_GROUPED: "dashboard.widgetMailboxGrouped",
  DASHBOARD_WIDGET_ORDERBOOK_GROUPED: "dashboard.widgetOrderbookGrouped",
  DASHBOARD_WIDGET_PAYMENTS_GROUPED: "dashboard.widgetPaymentsGrouped",
  DASHBOARD_WIDGET_PAYMENTS_SHOW_BULK_PAYMENTS:
    "dashboard.widgetPaymentsShowBulkPayments",
  DASHBOARD_WIDGET_PAYMENTS_SHOW_SCANNED: "dashboard.widgetPaymentsShowScanned",
  DASHBOARD_WIDGET_PAYMENTS_SHOW_STANDING_ORDERS:
    "dashboard.widgetPaymentsShowStandingOrders",
  DASHBOARD_WIDGET_PAYMENTS_SORT_ASCENDING:
    "dashboard.widgetPaymentsSortAscending",
  DASHBOARD_WIDGET_PORTFOLIO_POSITIONS_GROUPED:
    "dashboard.widgetPortfolioPositionsGrouped",
  DASHBOARD_WIDGET_PORTFOLIO_POSITIONS_ASSET_CLASS_GROUPING:
    "dashboard.widgetPortfolioPositionsAssetClassGrouping",
  DASHBOARD_WIDGET_PORTFOLIOS_GROUPED: "dashboard.widgetPortfoliosGrouped",
  DASHBOARD_WIDGET_PORTFOLIOS_ONLY_SECURITIES_DEFAULT:
    "dashboard.widgetPortfoliosOnlySecuritiesDefault",
  DASHBOARD_WIDGET_PORTFOLIOS_ONLY_SECURITIES_CONFIG:
    "dashboard.widgetPortfoliosOnlySecuritiesConfig",
  DASHBOARD_WIDGET_STREAM_GROUPED: "dashboard.widgetStreamGrouped",
  DASHBOARD_WIDGET_QUICK_PAYMENT_SCANNING:
    "dashboard.widgetQuickPaymentScanning",
  DASHBOARD_WIDGET_QUICK_TRADE_RADIO_BUTTONS:
    "dashboard.widgetQuickTradeRadioButtons",
  CAMPAIGNER_BANNER_URI: "campaigner.bannerUri",
  CAMPAIGNER_SHOW_CLOSE_BUTTON_IN_POPUP: "campaigner.showCloseButtonInPopup",
  CAMPAIGNER_SHOW_CLOSE_ICON_IN_POPUP: "campaigner.showCloseIconInPopup",
  CAMPAIGNER_SHOW_THIRD_PARTY_POPUP_TITLE:
    "campaigner.showThirdPartyPopupTitle",
  SHOW_AMOUNT_IN_CUSTOMER_CURRENCY_FOR_MIXED_CURRENCIES_ON_BULK_OVERVIEW:
    "show.amountInCustomerCurrencyForMixedCurrenciesOnBulkOverview",
  SHOW_PORTFOLIO_CASH_POSITIONS_MISSING_DETAILS:
    "show.showPortfolioCashPositionsMissingDetails",
  SHOW_DETAILED_ACC_TRANSFER_ACCOUNTS_DESCRIPTIONS:
    "show.detailedAccTransferAccountsDescriptions",
  SHOW_MULTILINE_BENEFICIARY_NAME_AND_ACCOUNT:
    "show.showMultilineBeneficiaryNameAndAccount",
  SHOW_PRODUCT_SELECTION_ON_ALERTING_FILTER:
    "show.showProductSelectionOnAlertingFilter",
  SHOW_NEW_TEMPLATE_OVERLAY: "show.showNewTemplateOverlay",
  SHOW_ACCOUNT_NUMBER_INSTEAD_DESCRIPTION:
    "show.accountNumberInsteadDescription",
  SHOW_PORTFOLIO_PERF_FOR_CURRENT_YEAR_ONLY:
    "show.showPortfolioPerfForCurrentYearOnly",
  SHOW_PENDING_ORDERS_ICON: "show.pendingOrdersIcon",
  SHOW_PAYMENT_CHARGES_WARNING: "show.showPaymentChargesWarning",
  SHOW_SCANNED_PAYMENTS_IN_OVERVIEW: "show.showScannedPaymentsInOverview",
  SHOW_STANDING_ORDERS_IN_OVERVIEW: "show.showStandingOrdersInOverview",
  SHOW_NEW_EBILL_IN_OVERVIEW: "show.showNewEbillInOverview",
  SHOW_CONTRACT_OWNER_FIRST_IN_CUSTOMER_DROPDOWN:
    "show.showContractOwnerFirstInDropDown",
  SHOW_ORDER_ALREADY_EXECUTED: "show.showOrderAlreadyExecuted",
  SHOW_TRIPLE_A_VALUATION_BUTTON: "show.showTripleAValuationButton",
  SHOW_DETAIL_TEXT_FOR_TRANSACTION_TYPE:
    "show.showDetailTextForTransactionType",
  SHOW_PRFT_SINCE_INIT_INVESTMENT:
    "show.showPrftSinceInitInvestOnPositionDetail",
  SHOW_KEEP_TABLE_SELECTION: "show.keepTableSelection",
  SHOW_CENSOR_PHONE_NUMBER: "show.showCensorPhoneNumber",
  SHOW_NON_FORMATTED_BANK_CLEARING: "show.nonFormattedBankClearing",
  DISPLAY_BANK_NAME_ONLY: "show.displayBankNameOnly",
  SHOW_UNREAD_MESSAGES: "show.unreadMessages",
  SHOW_MESSAGES_DISCLAIMERS: "show.showMessageDisclaimers",
  SHOW_NEW_MESSAGE_HEADER_ADDITIONAL_INFORMATION:
    "show.showNewMessageHeaderAdditionalInformation",
  SHOW_MESSAGE_SEARCH_FROM_AND_TO_AS_MULTISELECT:
    "show.showMessageSearchFromAndToAsMultiselect",
  SHOW_UNREAD_DOCUMENTS: "show.unreadDocuments",
  STANDING_ORDER_OVERVIEW_DEFAULT_FILTER_ALL_ACTIVE:
    "show.standingOrderOverviewDefaultFilterAllActive",
  STANDING_ORDER_OVERVIEW_BASIC_QUICK_FILTER_ONLY:
    "show.standingOrderOverviewBasicQuickFilterOnly",
  STANDING_ORDER_OVERVIEW_QUICK_FILTER_BASED_ON_STATES:
    "show.standingOrderOverviewQuickFilterBasedOnStates",
  STANDING_ORDER_OVERVIEW_ADDITIONAL_SORT_BY_BENEF:
    "show.standingOrderOverviewAdditionalSortByBeneficiary",
  STANDING_ORDERS_OVERVIEW_STATE_WITH_PAYM_STATUS:
    "show.standingOrdersOverviewStateWithPaymStatus",
  STANDING_ORDER_CURRENCY_LIST_FROM_TEMPLATE:
    "show.standingOrderCurrencyListFromTemplate",
  SHOW_ALERT_DELIVERY_TYPE: "show.showAlertDeliveryType",
  SHOW_PRODUCT_NUMBER_AND_ALIAS_IN_TABLE:
    "show.showProductNumberAndAliasInTable",
  SHOW_DEFAULT_FILTER_CHANGE_WARNING: "filters.showDefaultFilterChangeWarning",
  SHOW_FULL_PORTFOLIO_DETAILS_INPUT_FIELD:
    "filters.showFullPortfolioInputFieldDescription",
  USE_RELATIVE_DATES_IN_SEARCH_FILTER: "filters.relativeDatesInSearch",
  DEFAULT_ALL_PAYMENT_LIST_OPTIONS_FILTER:
    "filters.paymentListOptionsDefaultAllPayment",
  USE_ALTERNATIVE_FILTERS: "filters.alternativeFiltersEnabled",
  USE_FORECAST_VIEW_FILTERS: "filters.forecastViewFiltersEnabled",
  USE_FORECAST_VIEW_FILTERS_EXCLUDE_CURRENT_DAY:
    "filters.forecastViewFiltersExcludeCurrentDay",
  SHOW_SET_DEFAULT_BUTTON: "filters.showSetDefaultButton",
  BROKERAGE_OVERVIEW_DEFAULT_FILTER: "filters.brokerageOverviewDefaultState",
  CUSTOMER_REQUEST_ACCO_SPEC_DEPOT: "filters.customerRequestAccoSpecDepot",
  BROKERAGE_OVERVIEW_SHOW_LAST_N_AND_OPEN: "filters.showLastNAndOpenOrderbook",
  BROKERAGE_OVERVIEW_SHOW_LAST_N_FROM_PREFERENCES:
    "filters.showLastNFromPreferences",
  DEFAULT_PAYMENT_EBILL_FILTER: "filters.defaultPaymentEbillFilter",
  SHOW_COLLAPS_EXPAND_GROUP_ICON_FOR_ADVANCE_PAYMENT_OPTION:
    "show.showCollapsExpandGroupIconForAdvancePaymentOption",
  SHOW_CUSTOM_DEFAULT_DEBIT_NOTE_SETTINGS_ON_SALARY_CHECKBOX:
    "show.customDefaultDebitNoteSettingsOnSalaryCheckbox",
  SORT_CUSTOMER_DROPDOWN: "show.sortCustomerDropdown",
  ACCOUNT_ORDER_TYPE_SORT_BY_SORT_CODE:
    "filters.accountOrderTypeSortBySortCode",
  THROUGH_USERINFO_FLYOUT_ADDRESS_CHANGE_ENABLED:
    "show.throughUserInfoFlyoutAddressChangeEnabled",
  FULL_ADDRESS_FLYOUT_ADDRESS: "show.fullAddressUserInfoFlyoutAddress",
  SHOW_CURRENCIES_WITH_PAYMENT_REASON_EXPLAINED:
    "show.currenciesWithPaymentReasonExplained",
  SHOW_MESSAGES_SIMPLIFIED_ALERTS: "show.messagesSimplifiedAlerts",
  SHOW_ORIGINAL_MESSAGE_IN_REPLY: "show.originalMessageInReply",
  SHOW_IS_EUR_ALLOWED_ORANGE: "show.eurAllowedOrange",
  SHOW_RUNNING_INSIDE_IFRAME: "show.runEBANInsideAnIframe",
  ALLOW_EMBEDDING_IN_IFRAME: "show.allowEmbeddingInIframe",
  LOGIN_CONFIG_ALLOW_EMBEDDING_IN_IFRAME: "allowEmbeddingInIframe",
  EMBEDDING_IN_IFRAME_DOMAIN_URL: "show.embeddingInIframeDomainUrl",
  LOGIN_CONFIG_EMBEDDING_IN_IFRAME_DOMAIN_URL: "embeddingInIframeDomainUrl",
  USE_NEW_PERMISSION_MODEL: "show.useNewPermissionModel",
  SHOW_STANDING_ORDERS_ADDITIONAL_PAYMENT_REFERENCE:
    "show.showStandingOrdersAdditionalPaymentReference",
  SHOW_STANDING_ORDERS_FIRST_PAYMENT_AMOUNT:
    "show.showStandingOrdersFirstPaymentAmount",
  SHOW_STANDING_ORDERS_LAST_PAYMENT_AMOUNT:
    "show.showStandingOrdersLastPaymentAmount",
  SHOW_STANDING_ORDERS_ENTRY_CANCEL_BUTTON:
    "show.showStandingOrdersEntryCancelButton",
  USE_ALTERNATE_TRANSLATIONS_FOR_STANDING_ORDERS_ENTRY_NEXT_BUTTON:
    "show.useAlternateTranslationsForStandingOrdersEntryNextButton",
  SHOW_PRODUCT_PORTFOLIO_SCREEN_TITLE_CUSTOMER_NAME:
    "show.productPortfolioScreenTitleCustomerName",
  STANDING_ORDERS_ALWAYS_ACTIVE: "show.standingOrdersAlwaysActive",
  SHOW_BANK_INTERMEDIARY: "show.intPaymentBankIntermediary",
  SHOW_INT_PAYMENT_BANK_IDENTIFICATION_BICSWIFT:
    "show.intPaymentBankIdentificationBicSwift",
  SHOW_INT_PAYMENT_BANK_IDENTIFICATION_NATIONAL_BANK_CODE:
    "show.intPaymentBankIdentificationNationalBankCode",
  SHOW_STANDING_ORDERS_INT_PAYMENT_BANK_REFERENCE_FIELD:
    "show.showStandingOrdersIntPaymentBankReferenceField",
  SHOW_STANDING_ORDERS_INT_PAYMENT_YOUR_REFERENCE_FIELD:
    "show.showStandingOrdersIntPaymentYourReferenceField",
  USE_ALTERNATE_TRANSLATIONS_FOR_STANDING_ORDERS_BUTTON_PAYM_ENTRY_POPUP_SAVE:
    "show.useAlternateTranslationsForStandingOrdersbuttonPaymEntryPopupSave",
  USE_ALTERNATE_TRANSLATIONS_FOR_STANDING_ORDERS_BUTTON_PAYM_ENTRY_POPUP_BACK:
    "show.useAlternateTranslationsForStandingOrdersbuttonPaymEntryPopupBack",
  SHOW_COLLECTIVE_BOOKINGS_TOGGLE_IN_CONTEXT:
    "show.showCollectiveBookingsToggleInContext",
  STANDING_ORDERS_ALWAYS_BEFORE_HOLIDAY:
    "show.standingOrdersAlwaysBeforeHoliday",
  STANDING_ORDERS_FREQUENCY_DEFAULT_MONTHLY:
    "show.standingOrdersFrequencyDefaultMonthly",
  SHOW_STANDING_ORDERS_DEBIT_NOTE: "show.showStandingOrdersDebitNote",
  SHOW_DELETE_CONFIRMATION_WITH_DETAILS_FOR_SO:
    "show.showDeleteConfirmationWithDetailsForStandingOrder",
  BATCH_EXECUTE_PARTIAL_PAYMENTS: "payment.batchExecutePartialPayments",
  HIDE_MULTIPLE_DEBIT_NOTE: "show.hideMultipleDebitNote",
  SHOW_PHONE_PAYMENT_RECOGNITION_SCAN_TAB:
    "payment.showPhonePaymentRecognitionScanTab",
  INITIAL_PAYMENT_RECOGNITION_SCAN_TAB:
    "payment.initialPaymentRecognitionScanTab",
  SHOW_PAYMENT_TYPE_IN_BENEFICIARY_LOOKUP:
    "payment.showPaymentTypeInBeneficiaryLookup",
  SWIFT_WITH_NCC_COUNTRIES: "payment.swiftWithNccCountries",
  ON_CONFIRM_PAYMENT_MOBILE_SHOW_NEWLY_CREATED:
    "payment.onConfirmPaymentMobileShowNewlyCreated",
  SHOW_VALUE_DATE: "payment.showValueDate",
  MAX_INTEGER_AMOUNT_LENGTH: "payment.maxIntegerAmountLength",
  EXECUTION_DATE_TODAY_UNSUPPORTED: "payment.executionDateTodayUnsupported",
  ENABLED_HOLIDAYS_AND_WEEKENDS_IN_SO_DATE_PICKER:
    "payment.enabledHolidaysAndWeekendsInSoDatePicker",
  SHOW_ACCO_DETAILS_INTEREST: "show.showAccoDetailsInterest",
  SHOW_ONLINE_SERVICES_PAYMENT_SETTINGS:
    "show.showOnlineServicesPaymentSettings",
  SHOW_ALERT_CONFIRMATION_CB: "show.showAlertConfirmationCheckBox",
  SHOW_BROKERAGE_CONFIRMATION_CB: "show.showBrokerageConfirmationCheckBox",
  SHOW_CREDIT_RETIREMENT_ACCOUNT_WARNING:
    "show.showCreditRetirementAccountWarning",
  SPECIAL_ACCOUNT_FILTER: "show.specialAccountFilter",
  SHOW_NEW_VOTING_TEMPLATE: "show.showVotingTemplate",
  SHOW_VOTING_MODULE: "show.showVotingModule",
  SHOW_MOBILE_NON_VOTING_MESSAGES: "show.mobileNonVotingMessages",
  SHOW_MOBILE_VOTING_MESSAGE_DIRECT_REPLY:
    "show.mobileVotingMessageDirectReply",
  SHOW_MOBILE_VOTING_MESSAGE_REPLY_ATTACHMENT:
    "show.mobileVotingMessageReplyAttachment",
  SHOW_MOBILE_VOTING_MESSAGE_NO_PRESET: "show.mobileVotingMessageNoPreset",
  SHOW_VOTING_FILTER: "show.showVotingFilter",
  SHOW_LOGOUT_INSTEAD_MOBILE_MENU: "show.logoutInsteadMobileMenu",
  SHOW_NEW_SUB_TITLE: "show.showNewSubTitle",
  SHOW_EXPANDED_DETAIL: "show.showExpandedDetail",
  SHOW_CUSTOMERCARE_DOCUMENT_ATTACH_ICON:
    "show.showCustomercareDocumentAttachIcon",
  SHOW_CUSTOMERCARE_DOCUMENT_UNREAD_ICON:
    "show.customerCareDocumentUnreadMessagesIcon",
  SHOW_CUSTOMERCARE_MESSAGE_UNREAD_ICON:
    "show.customerCareMessageUnreadMessagesIcon",
  SHOW_CUSTOM_HEADER_PORTFOLIO_POSITIONS_MOBILE_COMPONENT:
    "show.customHeaderPortfolioPositionsMobileComponent",
  SHOW_DISABLE_DYNAMIC_HEADER_IN_ASSET_INFO:
    "show.disableDynamicHeaderInAssetInfo",
  SHOW_PRODUCT_VISUALIZATION_CONFIG: "show.productVisualizationConfig",
  SHOW_MESSAGE_TIMESTAMP: "show.messageTimestamp",
  MOBILE_PREFERENCE_RESET_REDIRECT_TO_FAVOURITES:
    "show.mobilePreferenceResetRedirectToFavourites",
  SHOW_AMMEND_BUTTONS_ON_PORT_PENDING_PAYMENTS:
    "show.ammendButtonsOnPortPendingPaym",
  SHOW_ADVISOR_TARGET_INFO: "show.showAdvisorTargetInfo",
  SHOW_ADVISOR_ROLE: "show.advisorRole",
  SHOW_EXPORT_BUTTON: "show.showExportButton",
  SHOW_EDIT_ACCOUNT_BUTTON: "show.showEditAccountButton",
  SHOW_PORTFOLIO_MONTHLY_DEFAULT: "show.showPortfolioMonthlyDefault",
  SHOW_MESSAGE_MOVE_BUTTON: "show.showMessageMoveButton",
  SHOW_PORTFOLIO_TRANSACTION_DEFAULT: "show.showPortfolioTransactionDefault",
  SHOW_BENEFICIARY_TEXT_ON_ACC_TRANSFER: "show.beneficiaryTextOnAccTransfer",
  SHOW_POSITION_LABEL_NUMBER: "show.showPositionLabelNumber",
  SHOW_TOOLTIP_SUFFIX_VALUE: "show.showTooltipSuffixValue",
  SHOW_All_TRANSACTION_OPTION: "show.showAllTransactionOption",
  SHOW_VOTING_SUBJECT: "show.showVotingSubject",
  SHOW_MESSAGE_SENT_OK_BUTTON: "show.showMessageSentOkButton",
  SHOW_TRANSFER_OR_EXECUTION_DATE_ON_PAYMENT_TEMPLATE:
    "show.showTransferOrExecutionDatePaymentTemplate",
  SHOW_ONLINE_REQUEST_AUTHORISATION_DEFAULT:
    "show.onlineRequestDefaultAuthorisations",
  SHOW_ALLWAYS_FOUR_STEPS_VIEW_IN_MANAGE_MOBILE_TABLET_ACCESS_SCREEN:
    "show.allwaysFourStepsViewInManageMobileTabletAccessScreen",
  SHOW_MOBILE_CASH_TRANSACTION_DETAILS_AS_DESKTOP:
    "show.showMobileCashTransactionDetailsAsDesktop",
  SHOW_PORTFOLIO_TRANSACTIONS_LAST_N_YEARS:
    "show.showPortfolioTransactionsLastNYears",
  SHOW_TRANSACTIONS_FILTER_PRESET_ALL: "show.showTransactionFilterPresetAll",
  FILTERS_SHOW_PORTFOLIO_DATE_RANGE_SELECT_BOX:
    "filters.showPortfolioTrxDateRangeSelectBox",
  FILTERS_SHOW_PORTFOLIO_TRX_ORDER_TYPE: "filters.showPortfolioTrxOrderType",
  FILTERS_SHOW_PORTFOLIO_TRX_PROD_TYPE: "filters.showPortfolioTrxProdType",
  FILTERS_SHOW_PORTFOLIO_TRX_SYMBOL: "filters.showPortfolioTrxSymbol",
  FILTERS_SHOW_PORTFOLIO_TRX_ACCOUNT: "filters.showPortfolioTrxAccount",
  FILTERS_SHOW_PORTFOLIO_TRX_SECU_TYPE: "filters.showPortfolioTrxSecuType",
  FILTERS_SHOW_PORTFOLIO_TRX_EXCHANGE: "filters.showPortfolioTrxExchange",
  FILTERS_SHOW_PORTFOLIO_TRX_VALUE_PORT_CURR:
    "filters.showPortfolioTrxValuePortCurr",
  FILTERS_SHOW_DOCUMENT_EAM_ADVISORS: "filters.showDocumentEamAdvisors",
  FILTERS_SHOW_FOREX_LAST_MODIFIED: "filters.showForexLastModified",
  FILTERS_MESSAGES_ONLY_BY_FOLDER: "filters.filterMessagesOnlyByFolder",
  FILTERS_SHOW_ALERT_VALID_UNTIL_TODAY: "filters.showAlertValidUntilToday",
  MOBILE_SKIP_TEMPLATE_GROUP_SCREEN: "show.mobileSkipTemplateGroupScreen",
  SHOW_MOBILE_PAYMENT_TEMPLATE_OVERVIEW_COUNTER:
    "show.showMobilePaymentTemplateOverviewCounter",
  USE_FIX_HEADING_TEXT_LABEL: "show.useFixHeadingTextLabel",
  SHOW_RIB_NUMBER_IN_ACCOUNT_DETAILS: "show.ribNumberInAccountDetails",
  SHOW_ACCOUNT_OWNERS: "show.accountOwners",
  USE_MARKETPLACE_FILTER_FOR_BUY: "show.useMarketplaceFilterForBuy",
  SHOW_HOLDING_SUM: "show.showHoldingSum",
  SHOW_HOLDING_ALL_DECIMAL_PLACES: "show.showHoldingAllDecimalPlaces",
  SHOW_SECURITY_PHONE_BUTTON: "show.securityPhoneButton",
  MOBILE_ACCOUNT_TRANSFER_FILTERED_CREDIT_ACCOUNTS_LIST:
    "show.mobileAccountTransferFilteredCreditAccountsList",
  SHOW_CURRENCY_IN_AMOUNT_LABEL: "show.showCurrencyInAmountLabel",
  USE_ALTERNATE_TRANSLATION_FOR_DEBITE_MANDATE_CANCEL_BUTTON:
    "show.useAlternateTranslationForDebitMandateCancelButton",
  SHOW_COUNTER_OF_TEMPLATE_GROUPS: "show.counterOfTemplateGroups",
  SHOW_CUSTOM_ACCOUNT_TRANSFER_LABELS: "show.customAccountTransferLabels",
  SHOW_MONTHLY_CHART_WIDTH: "show.showMonthlyChartWidth",
  MOBILE_CONSIDER_MISSED_DEADLINE_PAYM_EXECUTE_DATE_AS_WARNING:
    "show.mobileConsiderMissedDeadlinePaymExecuteDateAsWarning",
  MOBILE_POSITION_DETAIL_HEADER_CLICKABLE:
    "show.mobilePositionDetailHeaderClickable",
  SHOW_EXPORT_ACCOUNT_DETAILS_WITHOUT_BALANCE:
    "show.exportAccountDetailsWithoutBalance",
  SHOW_EXPORT_ACCOUNT_DETAILS_WITH_BALANCE:
    "show.exportAccountDetailsWithBalance",
  SHOW_NOTIFY_BY_SMS: "show.showNotifyBySms",
  SHOW_MESSAGE_SECTION_DEFAULT: "show.showMessageSectionDefault",
  MOBILE_CASH_TRANSACTIONS_DISPLAY_ACCOUNT_TYPE:
    "show.mobileCashTransactionsDisplayAccountType",
  MOBILE_USE_THREE_LINES_COMPONENT: "show.mobileUseThreeLinesComponent",
  PORTFOLIO_GROUPPOSITION_INCLUDE_DERIVATES:
    "show.portfolioGroupPositionIncludeDerivates",
  USE_CASH_HEADER: "show.useCashNavigationHeader",
  PARSE_MARKET_VALUE_DATA: "show.parseMarketValueData",
  SHOW_PORTFOLIO_POSITIONS_MARKET_VALUE_TOTAL:
    "show.showPortfolioPositionsMarketValueLocalCurrency",
  SHOW_CURRENCY_IN_PORTFOLIO_POSITIONS_TOTAL_MARKET_VALUE_REF_CURRENCY:
    "show.showCurrencyInPortfolioPositionsTotalMarketValueRefCurrency",
  SHOW_IDENTICAL_CURRENCY: "show.showIdenticalCurrency",
  SHOW_EXPORT_RIB: "show.exportRib",
  MOBILE_USE_QUICK_PAYMENT_FORM: "show.mobileUseQuickPaymentForm",
  SHOW_ACCOUNT_DETAILS_MOBILE_USING_TWO_LINES_COMPONENT:
    "show.accountDetailsMobileUsingTwoLinesComponent",
  SHOW_GENERAL_CONFIRM_POPUP_ALWAYS_AS_POPUP:
    "show.generalConfirmPopupAlwaysAsPopup",
  SHOW_CURRENCY_ON_THE_RIGHT_SIDE_OF_VALUE:
    "show.currencyOnTheRightSideOfValue",
  SHOW_ATTACHMENTS_WARNING: "show.showAttachmentsWarning",
  SHOW_MESSAGE_WARNING_ICON: "show.showMessageWarningIcon",
  SHOW_MONTHLY_PERF_PLOT_LINE: "show.showMonthlyPerfPlotLine",
  SHOW_HIDE_PULLDOWN: "show.showHidePulldown",
  SHOW_ACTIVE_SECURITY_TYPES: "show.showActiveSecurityTypes",
  SHOW_FORMAT_DOCUMENTS_OVERVIEW_PORTFOLIO_STATEMENT_ON_DEMAND_ROW:
    "show.formatDocumentsOverviewPortfolioStatementOnDemandRow",
  SHOW_VALID_UNTIL_DATE_BY_TYPE: "show.showValidUntilDateByType",
  WARN_IF_VALID_UNTIL_TODAY: "show.warnIfValidUntilToday",
  SHOW_BANK_SEARCH_FIX_COL: "show.showBankSearchFixCol",
  SHOW_MOBILE_ACCESS_HINT: "show.showMobileAccessHint",
  SHOW_EDITABLE_FIELDS_ON_PAYMENT_AMEND: "show.editableFieldsOnPaymentAmend",
  FINANCES_OVERVIEW_ACCOUNTS_DESCRIPTION_ORDER_OVERRIDE:
    "show.financesOverviewAccountsDescriptionOrderOverride",
  HIDE_PAYMENT_DEBIT_NOTE: "show.hidePaymentDebitNote",
  SHOW_MOBILE_MESSAGE_SEND_LINK_OVERVIEW: "show.mobileMessageSendLinkOverview",
  SHOW_FORMATED_ACCOUNT_NUMBER_BCI: "show.formatedAccountNumberBci",
  SHOW_DOCUMENTS_VISIBLE_COLS: "show.showDocumentsVisibleCols",
  SHOW_DOCUMENTS_CUSTOMER_SEARCH_INPUT: "show.showDocumentCustomerSearchInput",
  SHOW_PORTFOLIO_BLOCKED_ICON: "show.portfolioBlockedIcon",
  COMPARE_STANDING_ORDER_DEBIT_ACCOUNT_CURRENCY:
    "show.compareStandingOrderDebitAccountCurrency",
  IPAD_HIDE_NEW_MESSAGE_ATTACHMENT: "show.iPadHideNewMessageAttachment",
  MOBILE_FAVOURITES_LABEL_MAX_CHARS: "show.mobileFavouritesLabelMaxChars",
  SHOW_EXCLAMATION_ICON: "show.exclamationIcon",
  SHOW_PARTIALLY_DELETED_PAYMENT_ICON: "show.partiallyDeletedPaymentIcon",
  SHOW_PORTFOLIO_OVERVIEW_CHART_BY_DEFAULT_EAM:
    "show.showPortfolioOverviewChartByDefaultEAM",
  SHOW_RESOURCE_CODE_LABEL: "show.resourceCodeLabel",
  SHOW_NEW_PAYMENT_FORM: "show.newPaymentForm",
  SHOW_SINGLE_LINE_INTERNATIONAL_PAYMENT_REFERENCE:
    "show.singleLineInternationalPaymentReference",
  SHOW_PAYMENTS_SUMMARY: "show.paymentsSummary",
  SHOW_REFRESH_BUTTON_IN_OVERVIEWS: "show.refreshButtonInOverviews",
  HIDE_UK_UNSUPPORTED_PAYMENT_TYPES: "show.hideUkUnsupportedPaymentTypes",
  HIDE_TEMPLATE_GROUPS_TRANSLATIONS: "show.hideTemplateGroupTranslations",
  SHOW_SPINNER_WHEEL: "show.showSpinnerWheel",
  SHOW_DEBIT_ACCOUNT_FORMAT_SPEC: "show.showDebitAccountFormatSpec",
  MOBILE_SHOW_FINANCES_PAGE: "show.mobileShowFinancesPage",
  SHOW_DELETE_CONFIRMATION_WITH_DETAILS_FOR_PAYMENTS:
    "show.deleteConfirmationWithDetailsForPayments",
  USE_ALTERNATE_TRANSLATIONS_FOR_STANDING_ORDER_STATUSES:
    "show.useAlternateTranslationsForStandingOrderStatuses",
  REDUCED_STANDING_ORDER_AMENDMENT: "show.reducedStandingOrderAmendment",
  SHOW_MORE_DETAILS_FOR_PENDING_PAYMENTS_COUNTER:
    "show.showMoreDetailsForPendingPaymentsCounter",
  SHOW_PENDING_PAYMENTS_COUNTER_IN_FOOTER:
    "show.showPendingPaymentsCounterInFooter",
  SHOW_MIN_MAX_AMOUNT_WARNING: "show.showMinMaxAmountWarning",
  SHOW_CONTACT_SCREEN_LIGHT_WEIGHT: "show.contactScreenLightWeight",
  SHOW_MESSAGE_BODY: "show.showBodyMessage",
  HIDE_PERFORMANCE_DETAILED_HEADER: "show.hidePerformanceDetailedHeader",
  CUSTOMER_NAME_MAX_LEN: "show.customerNameMaxLen",
  SHOW_CUSTOMER_NAME_IN_MAX_2_LINES: "show.showCustomerNameInMax2Lines",
  HIDE_PAYMENT_MESSAGES_IN_NEW_PAYMENT_FORM:
    "show.hidePaymentMessagesInNewPaymentForm",
  USE_GROUPING: "show.useGrouping",
  SHOW_ERROR_TEXT: "show.showErrorText",
  HIDE_BUTTONS_IF_PAYMENT_NOT_EXIST: "show.hideButtonsIfPaymentNotExist",
  HIDE_CUSTOMER_REQUEST_PAYING_SLIP: "show.hideCustomerRequestOrangePayingSlip",
  HIDE_ORDER_AUTHORIZATION_TRADE_SECURITIES:
    "show.hideOrderAuthorizationTradeSecurities",
  HIDE_FILE_EXCHANGE_ACCOUNT: "show.hideFileExchangeAccount",
  HIDE_FILE_EXCHANGE_POST: "show.hideFileExchangePost",
  HIDE_FILE_EXCHANGE_CURRENCY: "show.hideFileExchangeCurrency",
  HIDE_FILE_EXCHANGE_AMOUNT: "show.hideFileExchangeAmount",
  CONSISTENT_MAXLENGTH_OF_PAYMENT_FIELDS:
    "show.consistentMaxLengthOfPaymentFields",
  SET_AN_ALERT_ON_PORTFOLIO_POSITIONS_CONTEXT_MENU:
    "show.setAnAlertOnPortfolioPositionsContextMenu",
  SET_AN_ALERT_ON_PAYMENTS_OVERVIEW_CONTEXT_MENU:
    "show.setAnAlertOnPaymentsOverviewContextMenu",
  SHOW_N_LAST_ACCOUNT_TRANSACTIONS: "show.showNLastAccountTransactions",
  FORMAT_SORT_CODE: "show.formatSortCode",
  DISPLAY_SHOW_PREVIEW_CONTEXT_MENU_ITEM:
    "show.displayShowPreviewContextMenuItem",
  SHOW_PORTFOLIO_STATEMENT_ON_DEMAND_MENU_ITEM:
    "show.portfolioStatementOnDemandMenuItem",
  USE_THIRD_PARTY_WIDGET_POPUP_DEFAULT_HEIGHT:
    "show.useThirdPartyWidgetPopupDefaultHeight",
  SHOW_POSITIONS_NEW_MARKET_VALUE: "show.positionsNewMarketValue",
  DATA_LABELS_THE_SAME_COLOR: "chart.position.dataLabelsTheSameColor",
  SHOW_TOGGLE_BUTTON: "show.showToggleButton",
  CURRENCY_FILTER_BROK_OVERVIEW: "filters.currencyFilterBrokOverview",
  SHOW_QUICKPAYMENT_DESTINATION_DROPDOWN_FOR_UK_IBAN:
    "show.showQuickPaymentDestinationDropdownForUkIban",
  SHOW_DEBIT_ACCOUNT_EBILL: "show.showDebitAccountEBill",
  HIDE_SINGLE_PAYMENT_REFERENCE_FIELD_MANDATORY:
    "show.hideSinglePaymentReferenceFieldMandatory",
  DISPLAY_PRODUCT_NUM_AND_ALIAS: "show.displayProductNumAndAlias",
  SHORT_MONTH_NAMES_IN_DATEPICKER: "show.shortMonthNamesInDatepicker",
  SHOW_BULK_CHANGE_BENEFICIARY_REFERENCE_FOR_TEMPLATE:
    "show.showBulkChangeBeneficiaryReferenceForTemplate",
  USE_CUSTOMIZED_PAYMENT_ENTRY_IN_MOBILE_BANKING:
    "show.useCustomizedPaymentEntryInMobileBanking",
  SHOW_MOBILE_BANKING_ACCOUNT_TRANSFER_MESSAGE_ON_ONE_LINE:
    "show.showMobileBankingAccountTransferMessageOnOneLine",
  SHOW_NEW_PAYMENT_BREADCRUMB_WHEN_COPY_PAYMENT:
    "show.showNewPaymentBreadcrumbWhenCopyPayment",
  USE_MARKETPLACE_ALIAS_INSTEAD_OF_CODE:
    "show.useMarketplaceAliasInsteadOfCode",
  MOBILE_CUSTODY_ACCOUNT_POSITION_LONG_TEXT:
    "show.mobileCustodyAccountPositionLongText",
  SHOW_PORTFOLIO_STATEMENT_ON_DEMAND_DATE_SET_TO_PREVIOUS_DAY:
    "show.portfolioStatementOnDemandDateSetToPreviousDay",
  USE_NMF_INSTEAD_OF_INVEST_WITHDRAW:
    "show.useNetMoneyFlowInsteadOfInvestWithdraw",
  Y_AXIS_MAX_100: "show.yAxisMax100",
  SHOW_ALIAS_RUBRIK: "show.showAliasRubrik",
  PENDING_PAYMENTS_SORT_ORDER_ASC: "show.pendingPaymentsSortOrderAsc",
  ARE_PORTFOLIO_CHARTS_ENABLED_FOR_MOBILE_BANKING:
    "show.arePortfolioChartsEnabledForMobileBanking",
  SHOW_POSTAL_ACCOUNT_DETAIL: "show.showPostalAccountDetail",
  SHOW_SALARY_FLAG_ON_STANDING_ORDER: "show.showSalaryFlagOnStandingOrder",
  VALIDATE_BALANCE_AMOUNT_FIELD: "show.validateBalanceAmountField",
  DO_TRIPLE_A_INITIAL_BACKGROUND_CALL: "show.doTripleAInitialBackgroundCall",
  SHOW_CUSTODY_ACCOUNT_DATA: "show.custodyAccountData",
  QUICK_FILTER_ALLOW_DUPLICATES: "filters.quickFilterAllowDuplicates",
  SHOW_EMPTY_VALIDATION: "show.showEmptyValidation",
  SHOW_HIDE_SELLABLE_SECURITY: "show.showHideSellableSecurity",
  MOBILE_SHOW_FROM_AND_TO_FIELDS: "show.mobileShowFromAndToFields",
  SHOW_SECURE_MESSAGING_MESSAGE_IMPORTANCE_COLUMN:
    "show.secureMessagingMessageImportanceColumn",
  FILTERS_HIDE_QUICK_FILTER_ON_BLUR: "filters.hideQuickFilterOnBlur",
  FILTERS_INCLUDE_DELETED_IN_ALL: "filters.includeDeletedInAll",
  USE_ADDITIONAL_DETAILS: "show.useAdditionalDetails",
  SHOW_PERCENTAGE_AS_THREE_DECIMAL_PLACES:
    "show.showPercentageInThreeDecimalPlaces",
  SHOW_ACCOUNT_NUMBER_NO_FORMAT: "show.showAccountNumberNoFormat",
  SHOW_EACH_TOTAL_AMOUNT_CURRENCY: "show.showEachTotalAmountCurrency",
  FILTERS_APPLY_NAME_VALIDATION_ON_BLUR: "filters.applyNameValidationOnBlur",
  FILTERS_SHOW_DIVIDER_BEFORE_CUSTOM_FILTERS_IN_QUICKFILTER:
    "filters.showDividerBeforeCustomFiltersInQuickFilter",
  SET_DEFAULT_QUICK_FILTER_VALUE_AFTER_RESET:
    "filters.setDefaultQuickFilterValueAfterReset",
  SHOW_LAST_N_DOCUMENTS_OPTION_IN_DOCUMENT_SEARCH:
    "filters.showLastNDocumentsOptionInDocumentSearch",
  SECURE_MESSAGING_USE_NUMERIC_DATE_TIME:
    "show.secureMessagingUseNumericDateTime",
  SHOW_SIMPLIFIED_TEXT_DESC_ON_PORTFOLIO_STATEMENT_ON_DEMAND:
    "show.simplifiedTextDescOnPortfolioStatementOnDemand",
  SHOW_MOBILE_ACCESS_DIALOG_PHONE_NUMBER:
    "show.showMobileAccessDialogPhoneNumber",
  USE_ACCOUNT_FOR_QUICK_FILTER_LABEL: "show.useAccountForQuickFilter",
  MOBILE_SHOW_HOLDER_FIELD_ON_TRANSACTIONS_DETAILS:
    "show.mobileShowHolderFieldOnTransactionsDetails",
  DISPLAY_EMPTY_STANDING_ORDER_FINAL_AMOUNT:
    "show.displayEmptyStandingOrderFinalAmount",
  ONLINE_SERVICES_DROPDOWN_ALIGN: "show.onlineServicesDropdownAlign",
  MOBILE_SHOW_GENERAL_ERROR_TEXT_ON_MESSAGES:
    "show.mobileShowGeneralErrorTextOnMessages",
  SHOW_WEEKENDS_STANDING_ORDER_FINAL_PAYMENT_DATE:
    "show.showWeekendsStandingOrderFinalPaymentDate",
  SHOW_BANK_NAME_WITHOUT_ADDRESS_DATA_ON_INT_PAYMENTS_ADDRESS_ONLY_MODE:
    "show.showBankNameWithoutAddressDataOnIntPaymentsAddressOnlyMode",
  PREPEND_ZEROES_TO_SWISS_NATIONAL_BANK_CODE:
    "show.prependZeroesToSwissNationalBankCode",
  SHOW_ADVANCED_OPTIONS_ON_ACC_TRANSFER_TEMPLATE:
    "show.showAdvancedOptionsOnAccountTransferTemplate",
  SHOW_CANCEL_PENDING_STATUS_ON_PORTFOLIO_OPEN_ORDERS:
    "show.showCancelPendingStatusOnPortfolioOpenOrders",
  SHOW_COUNTER_FOR_STANDING_ORDER_FAVOURITE_ITEM:
    "show.showCounterForStandingOrdersFavouriteItem",
  SHOW_EXECUTED_STATUS_ON_PORTFOLIO_OPEN_ORDERS:
    "show.showExecutedStatusOnPortfolioOpenOrders",
  USE_CATEGORY_AS_QUICK_FILTERS: "filters.categoryAsQuickFiltersEnabled",
  SHOW_ALL_ORDERS_STATUS_ON_PORTFOLIO_OPEN_ORDERS:
    "show.showAllOrdersStatusOnPortfolioOpenOrders",
  SHOW_PLACED_STATUS_ON_PORTFOLIO_OPEN_ORDERS:
    "show.showPlacedStatusOnPortfolioOpenOrders",
  SHOW_TRANSMITTED_STATUS_ON_PORTFOLIO_OPEN_ORDERS:
    "show.showTransmittedStatusOnPortfolioOpenOrders",
  SHOW_BENEFICIARY_BANK_NAME_WITH_ADDRESS:
    "show.showBeneficiaryBankNameWithAddress",
  SHOW_ONLINE_REQUEST_OPENINGS_DEFAULT: "show.onlineRequestDefaultOpenings",
  USE_FILTER_ALL_CUSTOMERS: "show.useFilterAllCustomers",
  HIDE_EXECUTION_DATE_STANDING_ORDER: "show.hideExecutionDate",
  HIDE_SALARY_PAYMENT_ROW: "show.hideSalaryPaymentRow",
  SHOW_REPORT_ORDERS_IN_DOCUMENTS_OVERVIEW:
    "show.reportOrdersInDocumentsOverview",
  SHOW_ACCOUNT_STATEMENTS_IN_MOBILE: "show.showAccountStatementsInMobile",
  SHOW_ALL_PORTFOLIOS_FROM_ALL_CUSTOMERS:
    "show.showAllPortfoliosFromAllCustomers",
  MOBILE_BANK_NATIONAL_CODE_ENABLED: "show.mobileBankNationalCodeEnabled",
  SHOW_COLLECTIVE_BUTTONS_CONDITIONALLY: "show.collectiveButtonsConditionally",
  SHOW_COLLECTIVE_BUY_SELL_AUTOALLOCATE_BUTTON:
    "show.showCollectiveBuySellAutoAllocateButton",
  SHOW_FX_ACCOUNT_TRANSFER: "show.showFxAccountTransfer",
  SHOW_SYMBOL_ISIN_SECU_NO_FIELD_FILTER: "show.showSymbolIsinSecuNoFieldFilter",
  LIMIT_INT_PAYMENT_BANK_REFERENCE: "show.intPaymentBankReferenceInputLimit",
  SHOW_ADVISOR_IN_PORTAL_APP: "show.advisorInPortalApp",
  HIDE_DELETED_PAYMENTS: "show.hideDeletedPayments",
  HIDE_MARKET_VALUE_ACCRD_INT_WHEN_NO_INTEREST_ON_POSITIONS:
    "show.hideMarketValueAccrdIntWhenNoInterestOnPositions",
  CREATE_PAYMENT_FROM_DETAILS_AS_BUTTONS:
    "show.createPaymentFromDetailsAsButtons",
  SHOW_PRODUCT_VALUE_C_CURR: "show.useProductValueCCurr",
  SHOW_PRO_MEMORIA: "show.showProMemoria",
  HIDE_LOGOUT_BTN_ERROR_POPUP_ACCESS_DENIED:
    "show.hideLogoutBtnErrorPopupAccessDenied",
  USE_ATTACHMENT_CONTENT_DISPOSITION_FOR_PDF:
    "show.useAttachmentContentDispositionForPdf",
  DATA_LABELS_ENABLED: "chart.portfolioWidget.dataLabelsEnabled",
  SHOW_AUTHORIZATION_MENU_TOP: "show.showAuthorizationMenuTop",
  USE_TRADING_SECURITIES: "show.useTradingSecurities",
  USE_PORTFOLIO_ACCOUNTS_FOR_BROKERAGE_ENTRY:
    "show.usePortfolioAccountsForBrokerageEntry",
  USE_PORTFOLIO_ACCOUNTS_FOR_BROKERAGE_ENTRY_EAM:
    "show.usePortfolioAccountsForEamBrokerageEntry",
  SHOW_MARKET_VALUE_AND_ACCRUED_INTEREST_SUMS_SEPARATED:
    "show.showMarketValueAndAccruedInterestSumsSeparated",
  CUT_TRAILING_ZEROS: "show.cutTrailingZeros",
  USE_COST_PRICE_NET_OR_GROSS: "show.useCostPriceNetOrGross",
  HIDE_SUBMITTED_PAYMENTS: "show.hideSubmittedPayments",
  DISPLAY_BROKERAGE_ORDER_STATUS_AND_CANCEL_STATUS:
    "show.displayBrokerageOrderStatusAndCancelStatus",
  SHOW_ALLOW_STOP_ORDER: "show.showAllowStopOrder",
  DISPLAY_BROKERAGE_ORDER_CANCEL_STATUS_AS_ICON:
    "show.displayBrokerageOrderCancelStatusAsIcon",
  SKIP_CREDIT_CARDS_OVERVIEW: "show.skipCreditCardsOverview",
  SHOW_SHORTER_LENGTH_PAYMENT_BENEFICIARY_FIELDS:
    "show.useShorterLengthPaymentBeneficiaryFields",
  SHOW_CUSTOM_PERSONAL_SETTINGS_PAYMENT_SETTINGS:
    "show.customPersonalSettingsPaymentSettings",
  HIDE_BJB_UNSUPPORTED_CHARGES_TYPES: "show.hideBjbUnsupportedChargesTypes",
  SHOW_DATE_INPUT_TITLE_FILTER_POPOPU: "show.showDateInputTitleInFilterPopup",
  PARTIALLY_EXECUTED_ORDER_CANCELLATION_WARNING:
    "show.partiallyExecutedOrderCancellationWarning",
  HIDE_PAYMENT_YOUR_REFERENCE: "show.hidePaymentYourReferenceField",
  SHOW_ORIGINAL_PAYMENT_STATUS_SUMMAY_DETAILS:
    "show.showOriginalPaymentStatusSummaryDetails",
  HIDE_CUSTOMER_REQUEST_DEBIT_ACCOUNT_FIELD:
    "show.hideCustomerRequestDebitAccount",
  HIDE_ALERT_QUICK_FILTERS: "show.hideAlertQuickFilters",
  ALL_PAYMENTS_TO_PAYMENT_OVERVIEW_REDIRECT:
    "payment.allPaymentsToPaymentOverviewRedirect",
  ACC_TRANSFER_TO_PAYMENT_OVERVIEW_REDIRECT:
    "show.accountTransferToPaymentOverviewRedirect",
  ACC_TRANSFER_TEMPLATE_TO_TEMPLATE_OVERVIEW_REDIRECT:
    "show.accountTransferTemplateToTemplateOverviewRedirect",
  NC_PAYMENT_TEMPLATE_TO_TEMPLATE_OVERVIEW_REDIRECT:
    "show.ncPaymentTemplateToTemplateOverviewRedirect",
  INT_PAYMENT_TO_PAYMENT_OVERVIEW_REDIRECT:
    "show.intPaymentToPaymentOverviewRedirect",
  NC_PAYMENT_TO_PAYMENT_OVERVIEW_REDIRECT:
    "show.ncPaymentToPaymentOverviewRedirect",
  SHOW_OVERLAP_VALIDATION: "show.showOverlapValidation",
  SHOW_SIMPLE_TEMPLATE_DROPDOWN_FOOTER: "show.showSimpleTemplateDropdownFooter",
  USE_ALERTING_MULTIACTION_BREADCRUMB: "show.useAlertingMultiactionBreadcrumb",
  SAME_VALIDATION_FIELDS_FOR_TEMPLATE_AND_PAYMENT:
    "show.sameValidationFieldsForPaymentAndTemplate",
  SHOW_PORTFOLIO_OPTIONS_WIDGET_DASHBOARD:
    "show.showPortfolioOptionsWidgetDashboard",
  SHOW_INT_PAYMENT_BANK_REFERENCE_FIELD:
    "show.showIntPaymentBankReferenceField",
  SHOW_PORTFOLIO_TOTAL_OVERVIEW: "show.showPortfolioTotalOverview",
  TOGGLE_SETTINGS_INFO_PANELS_ON_LOAD: "show.toggleSettingsInfoPanelsOnLoad",
  SHOW_CONSOLIDATION_CURRENCY_SETTINGS: "show.consolidationCurrencySettings",
  SHOW_MARKET_DATA_IN_POPUP: "show.marketDataInPopup",
  SHOW_BALANCE_COLUMN_WHEN_SORT: "show.showBalanceColumnWhenSort",
  SHOW_BUDGET_ENTRY_ON_FORECAST: "show.showBudgetEntryOnForecast",
  HIDE_PERSONAL_DATA: "show.personalDataAnonymize",
  SHOW_CUSTOM_PERSONAL_SETTINGS_MENU: "show.customPersonalSettingsMenu",
  ALWAYS_SORT_DEBIT_AND_CREDIT_ACCOUNT_LIST:
    "show.alwaysSortDebitAndCreditAccountList",
  SHOW_SECU_INTEREST_FRQ: "show.showSecuInterestFrq",
  SHOW_MESSAGE_BREADCRUMB_FROM_DASHBOARD:
    "show.showMessageBreadcrumbFromDashboard",
  SHOW_ALERT_NOTE_MESSAGE: "show.showAlertNoteMessage",
  USE_OTHER_NUMBER_OF_MINIMUM_SLIPS: "show.useNumberOfSlipsDefaultLimit",
  CURRENCY_ACCOUNT_DEFAULT_FILTER:
    "filters.currencyAccountOverviewDefaultState",
  USE_ADVISOR_DIRECT_PHONE_NUMBER: "show.useAdvisorDirectPhoneNumber",
  USE_VZ_HEADER_COMPONENTS: "show.useVzHeaderComponents",
  USE_VZ_HEADING: "show.useVzHeading",
  PDF_EXPORT_REC_DETAILS_ON_OVERVIEW_PAGE:
    "drilldown.pdfExportRecDetailsOnOverviewPage",
  ALL_BILLERS_DEFAULT_FILTER: "filters.allBillersDefaultFilter",
  BROKERAGE_DISABLE_EXCHANGE_ON_BUY_ENTRY:
    "show.brokerageDisableExchangeOnBuyEntry",
  BROKERAGE_ERRORS_INLINE: "show.brokerageErrorsInline",
  BROKERAGE_MAX_NUMBER_OF_DAYS_FOR_VALID_UNTIL_DATE:
    "show.brokerageMaxNumberOfDaysForValidUntilDate",
  OMIT_OPEN_EBILL_SEARCH_FILTER: "filters.omitOpenEbillSearchFilter",
  SHOW_PDF_CHART: "show.showPdfChart",
  SHOW_MISSING_VALUE_INSTEAD_OF_ERROR_IN_FILTER_VALIDATION_MESSAGE:
    "show.missingValueInsteadOfErrorInFilterValidationMessage",
  SHOW_DTA_BUTTONS: "show.showDTAButtons",
  SHOW_MESSAGE_REPLY_AVAILABLE_RESTRICTION:
    "show.messageReplyAvailableRestriction",
  SHOW_URL_IN_THIRD_PARTY_WIDGET: "show.showUrlInThirdPartyWidget",
  HIDE_PHONE_DETAILS: "show.hidePhoneDetailsView",
  SHOW_USER_CUSTOMER_DATA: "show.showUserCustomerData",
  SHOW_INT_BEN_REFERENCE_IN_THREE_LINES: "show.showIntBenReferenceInThreeLines",
  USE_LABEL_NAMES_FROM_PAYM_ENTRY_SCREEN:
    "show.useLabelNamesFromPaymEntryScreen",
  LEGEND_ALIGN_CENTER: "chart.position.legendAlignCenter",
  SHOW_FIRST_DATE_FOR_STANDING_ORDER_BY_DEFAULT:
    "show.showFirstDateForStandingOrderByDefault",
  SHOW_ALTERNATIVE_FIELDS_ON_BROKERAGE_CONFIRMATION_POPUP:
    "show.showAlternativeFieldsOnBrokerageConfirmationPopup",
  SHOW_ALL_BROKERAGE_TYPES_IN_FILTER: "show.showAllBrokerageTypesInFilter",
  SHOW_STOP_LIMIT_ORDER_TYPE: "show.showStopLimitOrderType",
  QUICK_FILTER_CUSTOMER_SELECT_INPUT_DISPLAY:
    "filters.customerSelectInputDisplay",
  USE_CUSTOMER_NO_FORMATTING_WITH_DOT: "show.useCustomerNoFormattingWithDot",
  SHOW_WIDGET_PAYMENT_AMOUNT: "show.showWidgetPaymentAmount",
  SHOW_BUDGET_ENTRIES_TOGGLE_BUTTON: "show.showBudgetEntriesToggleButton",
  SHOW_PORTFOLIO_AS_MULTILINE_ROW: "show.showPortfolioAsMultilineRow",
  IGNORE_NOTIFICATIONS_FOR_FIRST_VIEW_ON_MOBILE:
    "show.ignoreNotificationsForFirstViewOnMobile",
  READ_NAME_FROM_ADDITIONAL_FIELDS: "show.readNameFromAdditionalFields",
  SHOW_CLEAR_BANK_NAME_ON_BANK_IDENTIFICATION_CHANGE:
    "show.clearBankNameOnBankIdentificationChange",
  SHOW_CLIENT_NAME_ON_PORTFOLIO_OVERVIEW_SCREEN_WITH_ONE_PORTFOLIO:
    "show.showClientNameOnPortfolioOverviewScreenWithOnePortfolio",
  HIDE_STATUS_FIELD_IN_MOBILE: "show.hideStatusFieldInMobile",
  HIDE_PAYMENT_SO_ENTRY_STATUS: "show.hidePaymentStandingOrdersEntryStatus",
  SHOW_CONTEXT_MENU_CSV_OPTION: "show.showContextMenuCSVOption",
  SHOW_CONTEXT_MENU_PDF_OPTION: "show.showContextMenuPDFOption",
  COPY_VALUES_FROM_THE_MAIN_FORM: "show.copyValuesFromTheMainForm",
  SHOW_FULL_COUNTRY_NAME: "show.showFullCountryName",
  EXPORT_MATURITY_ANALYSIS: "show.exportMaturityAnalysis",
  DRILLDOWN_TO_SALARY_TRANSACTION_DETAILS:
    "drilldown.drillDownToSalaryTransactionDetails",
  SHOW_QUANTITY_NEGATIVE_VALUES: "show.showQuantityNegativeValues",
  SHOW_CUSTOMER_AMOUNT_NOTICE_AMOUNT_ROW: "show.customerAmountNoticeAmountRow",
  MESSAGE_OVERLAY_POSITION: "show.messageOverlayPosition",
  CUSTOMER_PERFORMANCE_CURRENT_FILTER_BY_DEFAULT:
    "show.customerPerformanceCurrentFilterByDefault",
  SHOW_CUSTOMER_PERFORMANCE: "show.showCustomerPerformance",
  SHOW_CATEGORY_SEARCH_INPUT: "show.showCategorySearchInput",
  SHOW_TEMPLATE_GROUP: "show.showTemplateGroup",
  MOBILE_PREFERENCE_RESET_STAY_ON_PAGE: "show.mobilePreferenceResetStayOnPage",
  SECURITY_TYPES_CATEGORIZATION_LEVEL: "show.securityTypesCategorizationLevel",
  CHANGES_SAVED_POPUP_REQUIRED: "show.changesSavedPopupRequired",
  SHOW_CUSTOM_EXTENDED_GRAPH: "show.customExtendedGraph",
  DISPLAY_PAYMENTS_OVERVIEW_WITH_DEFAULT_FILTER:
    "show.displayPaymentsOverviewWithDefaultFilter",
  USE_GEODIST_DESCRIPTION_FOR_POSITIONS_GRAPH_GROUPING:
    "show.useGeodistDescriptionForPositionsGraphGrouping",
  HIDE_GROUPING_HEADER_COLUMNS: "show.hideGroupingHeaderColumns",
  SET_SHARED_CHARGES_IF_SEPA: "show.setSharedChargesIfSEPA",
  SHOW_FEES_ADDITION_IN_SEPA_MESSAGE: "show.showFeesAdditionInSEPAMessage",
  SHOW_CUSTOM_TEXT_AREA_ROWS_NUMBER: "show.customTextAreaRowsNumber",
  SHOW_INFO_NOTICES_ACK_CHECKBOX: "show.showInfoNoticesAckCheckbox",
  SHOW_BENEFICIARY_NAME_AND_ADDRESS_IN_PAYMENT_TEMPLATE_EXECUTE:
    "show.showBeneficiaryNameAndAdressInPaymentTemplateExecute",
  SHOW_FORMAT_GAIN_LOSS_PERFCENT_AND_CURR_AS_PROFIT_INITIAL_INVESTMENT:
    "show.showFormatGainLossPercentAndCurrAsProfitInitialInvestment",
  SHOW_GAIN_LOSS_PERCENT_GRANT_TOTAL: "show.showGainLossPercentGrandTotal",
  SHOW_UNCENSORED_EMAIL_ADDRESS: "show.showUnCensoredEmailAddress",
  USE_DEFAULT_DISPLAY_FORMAT: "show.useDefaultDisplayFormat",
  USE_DEBIT_ACCOUNT_SELECTED_VALUE: "show.useDebitAccountSelectedValue",
  SHOW_OPTIPASS_WIDGET_WITHNODATA: "showOptipassWidgetWithNoData",
  SHOW_DROPDOWN_AS_LABEL_IF_SINGLE_RECORD:
    "filters.showDropdownAsLabelIfSingleRecord",
  CURRENT_PORTFOLIO_GROUP_AUTO_DRILLDOWN:
    "drilldown.currentPortfolioGroupAutoDrilldown",
  USE_PORTFOLIO_DISCLAIMER_DATE_COMBINATION:
    "show.usePortfolioDisclaimerDateCombination",
  SHOW_UNAUTHORIZED_PAYMENT_ICON_FOR_EXECUTION_AND_STATUS_COL:
    "show.showUnauthorizedPaymentIconForExecutionAndStatusCol",
};
CLX.Bx = function () {
  return CLX.I.get(CLX.Bf);
};
CLX.By = function () {
  var a = {
    get: function (b) {
      return CLX.Bg.getValue.call(CLX[CLX.Bg.GUI_CONFIG], b);
    },
  };
  return a;
};
CLX.Bz = function (a, c) {
  var b = a ? CLX.As(a, true) : {};
  if (CLX.B(c)) {
    CLX.$.each(c, function (d, e) {
      CLX.Bg.addAccessorMethods.call(b, e);
    });
  } else {
    if (CLX.C(c) || (CLX.Ac(c) && c)) {
      CLX.$.each(CLX.C(c) ? c : b, function (d, e) {
        if (!CLX.M(e)) {
          CLX.Bg.addAccessorMethods.call(b, d);
        }
      });
    }
  }
  b.get = function (e, g, d) {
    var f = this;
    return CLX.Bg.getValue.call(f, e, g, d);
  };
  b.set = function (e, h, g, f) {
    var d = this;
    return CLX.Bg.setValue.call(d, d, e, e, h, g, f);
  };
  if (!a || !a.changeCallbacks || !CLX.M(a.changeCallbacks.fire)) {
    b.changeCallbacks = CLX.$.Callbacks();
  }
  return b;
};
CLX.Ca = {
  YES: "yes",
  NO: "no",
  DECIMAL: "decimalFormatPattern",
  NO_DECIMAL: "nodecimalFormatPattern",
  FULL_MONTH_NAMES: "fullMonthNamesFormatPattern",
  SHORT_MONTH_NAMES: "shortMonthNamesFormatPattern",
  FULL_DAY_NAMES: "fullDayNamesFormatPattern",
  SHORT_DAY_NAMES: "shortDayNamesFormatPattern",
  DATE: "dateFormatPattern",
  TIME: "timeFormatPattern",
  OUT_OF_OFFICE_DATE: "outOfOfficeDateFormatPattern",
  CASH_AMOUNTS: "cashAmountsFormatPattern",
  FUNDS_QUANTITIES: "fundsQuantFormatPattern",
  BONDS_NOM_QUANT: "bondsNomQuantFormatPattern",
  BONDS_PIECE_QUANT: "bondsPieceQuantFormatPattern",
  EQUITY_QUANTITIES: "equityQuantFormatPattern",
  EXCHANGE_RATES: "exchangeRatesFormatPattern",
  FOREX_RATES: "forexRatesFormatPattern",
  DEPOSIT_LOAN: "depositLoanFormatPattern",
  MARKET_SECURITY: "marketSecFormatPattern",
  MARKET_VALUES: "marketValuesFormatPattern",
  YIELD_PORT_PERC: "yieldPortPercFormatPattern",
  NO_DECIMALS_FORMAT: "noDecimalsFormatPattern",
  DEFAULT: "decimalFormatPattern",
};
CLX.Cb = "&nbsp;";
CLX.Cc = function () {
  return CLX.I.get(CLX.Bh);
};
CLX.Cd = function (c, a, d) {
  var b = c[a];
  if (!b) {
    c[a] = d;
  } else {
    if (!CLX.B(b)) {
      b = [b];
      c[a] = b;
    }
    b.push(d);
  }
};
CLX.Ce = function (b, a) {
  return CLX.U(b).join(a || ",");
};
CLX.Cf = function (b, g, c) {
  var j,
    f,
    k,
    e,
    d,
    h,
    i = CLX.E,
    a = CLX.S;
  e = CLX.Bl(g);
  j = b.component;
  f = e.data(a.COMPONENT);
  if (f) {
    if (f !== j) {
      d = e.attr(i.ID);
      throw new Error(
        "Cannot attach component(id=" +
          CLX.L(j, i.ID) +
          ") to element(id=" +
          d +
          "): attached-component-id=" +
          CLX.L(f, i.ID) +
          " => detach the old component first, e.g. " +
          (d ? 'CLX.$("#' + d + '")' : "element") +
          '.data("' +
          a.COMPONENT +
          '").detach()'
      );
    }
    return;
  }
  if (!e.is(CLX.H.BODY_SELECTOR)) {
    k = e.clone();
    k.removeClass(CLX.D.BUSY);
  }
  if (b.attachedToElement) {
    j.detach();
  }
  h = !c;
  c = c || { offdom: [], indom: [] };
  CLX.Bm(b, b.renderer.attach(e, j, c), k || null);
  if (h) {
    c.offdom.reverse();
    c.indom.reverse();
    CLX.$.each(CLX.U(c.offdom, c.indom), function (l, m) {
      m();
    });
    CLX.Bq();
  }
  return b.component;
};
CLX.Cg = function (a) {
  if (a.attachedToElement) {
    CLX.Bm(
      a,
      a.renderer.detach(a.attachedToElement, a.placeholderElement, a.component)
    );
  }
  return a.component;
};
CLX.Ch = function (b, a) {
  if (b.attachedToElement) {
    throw new Error("Cannot load properties for an attached component");
  }
  CLX.Ab(CLX.Bl(a), b.component, b.renderer.getDescriptor());
  return b.component;
};
CLX.Ci = function (e, d) {
  var a,
    c,
    b,
    f = CLX.E;
  a = d && d[f.DATA] && d[f.DATA].firedByRenderer;
  if (e.attachedToElement && !a) {
    c = d.name && e.renderer[CLX.Q(d.name)];
    if (CLX.M(c)) {
      b = CLX.$.extend({}, d);
      b[f.DATA] = CLX.$.extend({}, d[f.DATA] || {});
      b[f.DATA][f.ELEMENT] = e.attachedToElement;
      b[f.DATA][f.COMPONENT] = e.component;
      c(b);
    }
  }
};
CLX.Cj = function (a) {
  var b;
  if (a.attachedToElement) {
    b = a.placeholderElement;
    a.component.detach().attach(b);
  }
  return a.component;
};
CLX.Ck = function (h, g) {
  var c = 1,
    f = 3,
    e = 5,
    b = 8,
    d = 10,
    a;
  if (h === c) {
    a = g % (g % 100 === 0 ? 400 : 4) === 0 ? 29 : 28;
  } else {
    a = h === f || h === e || h === b || h === d ? 30 : 31;
  }
  return a;
};
CLX.Cl = function (b, a) {
  var c;
  if (b !== null && b !== undefined) {
    for (c in b) {
      if (b.hasOwnProperty(c) && b[c] === a) {
        return true;
      }
    }
  }
  return false;
};
CLX.Cm = function (a, b) {
  var c = {
    element: b || (CLX.M(a.getElement) ? a.getElement() : null),
    component: a,
  };
  return c;
};
CLX.Cn = function (a) {
  return typeof a === "number";
};
CLX.Co = function (a) {
  return a.data.component.reattach();
};
CLX.Cp = {
  BUTTON: "button",
  RESET: "reset",
  SUBMIT: "submit",
  TOGGLE: "toggle",
  CHECKBOX: "checkbox",
  RADIO: "radio",
};
CLX.Cq = {
  BUTTON_GROUP: "buttonGroupLayout",
  CONTAINER: "containerLayout",
  DETAIL_ROW: "detailRowLayout",
  INPUT_ROW: "inputRowLayout",
  TOOLBAR: "toolbarLayout",
  PIE_CHART_LEGEND_ROW: "pieChartLegendRowLayout",
  QUESTIONNAIRE_ROW: "questionnaireRowLayout",
  QUESTIONNAIRE_VERTICAL_ROW: "questionnaireVerticalRowLayout",
  RISK_PROFILE: "riskProfileLayout",
  INVESTMENT_GOAL_ROW: "investmentGoalRowLayout",
  RECOMMENDATION: "recommendationLayout",
  RECOMMENDATION_CHART_LEGEND: "recommendationChartLegendLayout",
};
CLX.Cr = function (e, b, a) {
  var c,
    g = CLX.E,
    d = {
      component: null,
      renderer: e,
      componentPropertyNames: null,
      componentMap: null,
      placeholderElement: null,
      attachedToElement: null,
    },
    f = function () {
      CLX.Bj(c, function (h) {
        CLX.Ci(d, h);
      });
      if (CLX.M(e.getDescriptor) && e.getDescriptor()) {
        d.componentPropertyNames = e
          .getDescriptor()
          .getNestedComponentPropertyNames();
        CLX.Bu(c, d.componentPropertyNames);
      }
      if (CLX.M(e.init)) {
        e.init(c);
      }
    };
  if (!e) {
    throw new Error("Component requires a specific Renderer implementation");
  }
  c = d.component = CLX.C(a) ? CLX.As(a, true) : {};
  c.properties = CLX.Bz(CLX.C(b) ? b : null, e.getDescriptor());
  c.actionCallbacks = CLX.$.Callbacks();
  c.get = function (i) {
    var h = this;
    return h.properties.get(i);
  };
  c.set = function (i, k, j) {
    var h = this;
    h.properties.set(i, k, CLX.Cm(h), j);
  };
  c.getRenderer = function () {
    return d.renderer;
  };
  c.getName = function () {
    return d.renderer.getName();
  };
  c.getElement = function () {
    return d.attachedToElement;
  };
  c.getComponentMap = function (i, h) {
    if (!i || !d.componentMap) {
      var j = CLX.C(h) ? h : {};
      CLX.Bp(c, d.componentPropertyNames, function (m) {
        var k = CLX.L(m, g.NAME),
          l = m.getComponentMap;
        if (CLX.N(k)) {
          CLX.Cd(j, k, m);
        }
        if (l) {
          l(i, j);
        }
      });
      d.componentMap = j;
    }
    return CLX.As(d.componentMap, true);
  };
  c.attach = function (i, h) {
    return CLX.Cf(d, i, h);
  };
  c.detach = function () {
    return CLX.Cg(d);
  };
  c.reattach = function () {
    return CLX.Cj(d);
  };
  c.load = function (h) {
    return CLX.Ch(d, h);
  };
  f();
  return c;
};
CLX.Cs = function FormatFactory() {
  var T,
    ab = CLX.Cc(),
    q = ".",
    au = ".",
    ae = ":",
    s = " ",
    aC = "...",
    am = CLX.Bv,
    ax = "<br>",
    k = CLX.Cb,
    ar = new RegExp(k, "g"),
    a = 100,
    ag = CLX.$("#" + CLX.Ca.DATE).text(),
    C = CLX.$("#" + CLX.Ca.TIME).text(),
    y = /^(\d+)(\W+)([0-9A-Za-z\u00C0-\u00FF]+)(\W+)(\d+)/,
    X = /^\d+(\D*)\d+[\w\W]*/,
    W = /(\: *\d{2} *)([a-z]+)([\-\+]\d+)? *\(?([a-z ]+)?/i,
    aq = /^(9+)(\D?)(9+)(\D*)(\d*)/,
    aa = /[\d\.\-]/g,
    w = /^[\d\.\-]+$/g,
    af = /^(\d{1,2})[.:]?(\d{0,2})[.:]?(\d{0,2})/,
    ao = /^\s?(\d{1,2})\W+([0-9A-Za-z\u00C0-\u00FF]+)\W+(\d{2,4})?\s?$/,
    F = /^\s?(\d{2})(\d{2})(\d{2,4})\s?$/,
    B = /^\s?(\d{4})(\d{2})(\d{2})\s?$/,
    N = {},
    o = {},
    t = {},
    v = {},
    J = {},
    E,
    aG,
    aw,
    D,
    d,
    ak,
    S,
    ad,
    e,
    O,
    g,
    G = function (aH) {
      var aI = CLX.$("#" + aH).text();
      return (aI && aI.split(" ")) || [];
    },
    f = function () {
      var aH = y.exec(ag);
      if (aH && aH.length > 5) {
        E = aH[1].length === 2;
        S = aH[2].replace(" ", k);
        e = Number(aH[3]);
        O = aH[4].replace(" ", k);
        g = aH[5].length === 4;
      } else {
        E = true;
        S = ".";
        e = 2;
        O = ".";
        g = true;
      }
    },
    ay = function () {
      var aH = X.exec(C);
      if (aH === null) {
        ad = ae;
        aG = true;
      } else {
        ad = aH[1] || ae;
        aG = true;
      }
    },
    aF = function (aH) {
      return CLX.$("#" + aH).text() || Number(9999.5).toLocaleString();
    },
    l = function (aH) {
      var aI = aq.exec(aF(aH));
      if (aI === null) {
        v[aH] = q;
      } else {
        o[aH] = aI[2];
        t[aH] = aI[3].length;
        if (t < 2) {
          t[aH] = 0;
        }
        v[aH] = aI[4] || q;
        J[aH] = aI[5].length;
      }
    },
    K = function (aH) {
      return v[aH] ? v[aH].charAt(0) : q;
    },
    U = function (aK, aH) {
      if (aK) {
        var aI = String(aK),
          aJ = aI.indexOf(K(aH));
        return aJ === -1 ? 0 : aI.length - aJ - 1;
      }
      return 0;
    },
    aE = function (aH) {
      return ab.get(aH && Number(aH) !== 0 ? CLX.Ca.YES : CLX.Ca.NO);
    },
    u = function (aJ, aI) {
      aI = aI || CLX.Ca.DEFAULT;
      var aH = "",
        aN,
        aM,
        aL,
        aK;
      if (!t[aI]) {
        l(aI);
      }
      if (aJ && aJ.length > 0) {
        aM = 0;
        if (aJ.charAt(0) === "-") {
          aH = "-";
          aM = 1;
        }
        aL = v[aI] ? aJ.indexOf(v[aI]) : -1;
        if (aL === -1) {
          aL = aJ.length;
        }
        aK = aL - aM;
        if (aK) {
          if (o[aI] && t[aI]) {
            aN = aK % t[aI] || t[aI];
            aN += aM;
            while (aM < aL) {
              aH += aJ.substring(aM, aN);
              aM = aN;
              aN += t[aI];
              if (aM < aL) {
                aH += o[aI];
              }
            }
          } else {
            aH += aJ.substring(aM, aM + aK);
          }
        }
        if (aL < aJ.length) {
          aH += K(aI);
          aL += 1;
          if (aL < aJ.length) {
            aH += aJ.substring(aL);
          }
        }
      }
      return aH;
    },
    az = function (aH, aI, aJ) {
      if (aI) {
        if (aH) {
          aH += (aJ || " ") + aI;
        } else {
          aH = aI;
        }
      }
      return aH || "";
    },
    n = function (aM, aK, aI, aJ) {
      var aN = "",
        aL,
        aO,
        aH;
      if (aM !== null && aM !== undefined) {
        aL = Number(aM);
        if (isFinite(aL)) {
          aK = CLX.Cn(aK) ? aK : 0;
          aO = Math.pow(10, aK);
          aL = ((aL < 0 ? -1 : 1) * Math.round(Math.abs(aL * aO))) / aO;
          aH = aJ ? Number(aL.toFixed(aK)).toString() : aL.toFixed(aK);
          aN = u(aH, aI);
        }
      }
      return aN;
    },
    Q = function (aJ, aH, aI) {
      aH = aH || CLX.Ca.DEFAULT;
      if (!J[aH]) {
        l(aH);
      }
      return n(aJ, J[aH], aH, aI);
    },
    H = function (aI, aK) {
      aI = aI || CLX.Ca.DEFAULT;
      var aJ = aK ? "+/-" : "",
        aH = N[aI + aJ];
      if (!aH) {
        aH = new RegExp(
          "[\\d" + (o[aI] || "") + (K(aI) || q) + (aK ? "\\-" : "") + "]"
        );
        N[aI + aJ] = aH;
      }
      return aH;
    },
    p = function (aJ, aI) {
      var aH = aJ;
      if (aJ && o) {
        aI = aI || CLX.Ca.DEFAULT;
        aH = String(aJ).replace(new RegExp("[" + o[aI] + "]", "g"), "");
      }
      return aH;
    },
    V = function (aI, aH) {
      aH = aH || CLX.Ca.DEFAULT;
      if (aI && K(aH)) {
        aI = aI.replace(new RegExp("[" + K(aH) + "]", "g"), q);
      }
      aI = p(aI, aH);
      return aI && isFinite(aI);
    },
    Y = function (aK, aI) {
      var aH = null,
        aJ;
      if (CLX.N(aK)) {
        aK = p(aK);
        aI = aI || CLX.Ca.DEFAULT;
        if (aK && v[aI]) {
          aK = aK.replace(new RegExp("[" + v[aI] + "]", "g"), q);
        }
        if (aK) {
          if (
            CLX.By().get(CLX.Bw.USE_STRICT_INPUT_NUMBER_FORMATING) &&
            aK.match(w) === null
          ) {
            aK = "";
          }
          aJ = aK.match(aa);
          aK = aJ ? aJ.join("") : null;
          if (CLX.N(aK)) {
            aH = Number(aK);
            if (!isFinite(aH)) {
              aH = null;
            }
          }
        }
      }
      return aH;
    },
    I = function (aH) {
      return aH < 10 ? "0" + aH : String(aH);
    },
    i = function (aI) {
      var aH;
      if (aI) {
        if (CLX.Cn(aI) || CLX.O(aI)) {
          aI = new Date(aI);
        }
        aH =
          I(aI.getDate()) + au + I(aI.getMonth() + 1) + au + aI.getFullYear();
      }
      return aH || "";
    },
    L = function (aJ, aI) {
      var aH;
      if (CLX.B(aJ)) {
        aH = CLX.Ce(aJ, aI && CLX.O(aI) ? aI : ax);
      } else {
        aH = aJ;
      }
      return aH;
    },
    Z = function (aP, aJ, aO, aQ) {
      var aL = 0,
        aH = 0,
        aN = 47,
        aM = 47,
        aI = 0,
        aK = "";
      if (CLX.B(aP)) {
        if (aO) {
          if (aQ) {
            aN = aQ;
            aM = aQ;
          }
          for (aL = 0; aL < aP.length; aL += 1) {
            aN = aM;
            aI = 0;
            aK = "";
            if (aP[aL] && aP[aL].length > aN) {
              for (aH = 0; aH < Math.floor(aP[aL].length / aM); aH += 1) {
                aK += aP[aL].substr(aI, aN) + (CLX.O(aJ) ? aJ : ax);
                aI = aN;
                aN += aM;
              }
              if (aP[aL].length / aM > Math.floor(aP[aL].length / aM)) {
                aK += aP[aL].substr(aI, aP[aL].length);
              }
              aP[aL] = aK;
            }
          }
        }
        aP = CLX.$.grep(aP, function (aR) {
          return !!aR;
        });
      }
      return L(aP, aJ);
    },
    ah = function (aL, aJ, aK) {
      var aI = L(aL, am),
        aH;
      if (aJ) {
        aH = String(aL).length;
        if (aH > aJ + aC.length / 2) {
          if (!aK) {
            aI = aL.substring(0, aJ) + aC;
          } else {
            if (aK > 0) {
              aI = aC + aL.substring(aH - aJ, aH);
            } else {
              aI = aL.substring(0, aJ / 2) + aC + aL.substring(aH - aJ / 2, aH);
            }
          }
        }
      }
      return aI;
    },
    b = function (aJ, aK) {
      var aL, aH, aM, aI;
      if (CLX.Cn(aJ) || CLX.O(aJ)) {
        aJ = new Date(aJ);
      }
      aL = aJ.getDate();
      aI = aJ.getDay();
      aI = aI === 0 ? 6 : aI - 1;
      aM = aJ.getFullYear();
      aH = aJ.getMonth();
      aK = aK.replace(/yyyy/g, aM);
      aK = aK.replace(/yy/g, String(aM).substr(2));
      aK = aK.replace(/dd/g, I(aL));
      aK = aK.replace(/d/g, aL);
      aK = aK.replace(/mm/g, I(aH + 1));
      aK = aK.replace(/MMMM/g, aw[aH]);
      aK = aK.replace(/MMM/g, D[aH]);
      aK = aK.replace(/DDDD/g, d[aI]);
      aK = aK.replace(/DDD/g, ak[aI]);
      return aK;
    },
    M = function (aJ) {
      var aK, aI, aL, aH;
      if (CLX.Cn(aJ) || CLX.O(aJ)) {
        aJ = new Date(aJ);
      }
      if (aJ && S) {
        aK = aJ.getDate();
        aH = E ? I(aK) : aK;
        aH += S;
        aI = aJ.getMonth();
        aH += e ? I(aI + 1) : D[aI];
        aH += O;
        aL = aJ.getFullYear();
        aH += g ? aL : String(aL).substring(2);
      } else {
        aH = i(aJ);
      }
      return aH || "";
    },
    ai = function (aH) {
      return M(aH).replace(ar, " ");
    },
    A = function (aJ, aK) {
      var aM,
        aI = "",
        aH,
        aL = aJ.getTimezoneOffset() * -1;
      aH = aL > 0 ? "+" : "";
      aH += I(aL / 60) + I(aL % 60) + " ";
      aM = W.exec(aJ.toString()) || [];
      if (aK) {
        if (!aM[3]) {
          aM[4] = aM[2];
        }
        aI = aM[4] || "";
        if (aL === 0) {
          return aI || " GMT";
        }
      }
      return " GMT " + aH + aI;
    },
    P = function (aI, aJ) {
      var aH;
      if (aI) {
        aH =
          I(aI.getHours()) + ae + I(aI.getMinutes() + 1) + aJ
            ? ae + aI.getSeconds()
            : "";
      }
      return aH || "";
    },
    aj = function (aK, aN, aJ) {
      var aM, aI, aL, aH;
      if (CLX.Cn(aK) || CLX.O(aK)) {
        aK = new Date(aK);
      }
      if (aK && ad) {
        aM = aK.getHours();
        aH = aG ? I(aM) : aM;
        aH += ad;
        aI = aK.getMinutes();
        aH += aG ? I(aI) : aI;
        if (aN) {
          aL = aK.getSeconds();
          aH += aG ? I(aL) : aL;
        }
        if (aJ) {
          aH += A(aK, false);
        }
      } else {
        aH = P(aK, aN);
      }
      return aH || "";
    },
    j = function (aK, aO, aJ) {
      var aM, aI, aL, aN, aH;
      if (CLX.Cn(aK) || CLX.O(aK)) {
        aK = new Date(aK);
      }
      if (aK && ad) {
        aM = aK.getHours();
        aH = aG ? I(aM) : aM;
        aH += ad;
        aI = aK.getMinutes();
        aH += aG ? I(aI) : aI;
        aH += ad;
        if (aO) {
          aL = aK.getSeconds();
          aH += aG ? I(aL) : aL;
        }
        if (aJ) {
          aH += ".";
          aN = aK.getMilliseconds();
          aH += aG ? I(aN) : aN;
        }
      } else {
        aH = P(aK, aO);
      }
      return aH || "";
    },
    aB = function (aI, aJ, aH) {
      return az(M(aI), j(aI, aJ, aH), s);
    },
    c = function (aI, aJ, aH) {
      return az(M(aI), aj(aI, aJ, aH), s);
    },
    z = function (aI, aJ, aH) {
      return az(i(aI), aj(aI, aJ, aH), s);
    },
    ap = function (aJ) {
      var aH, aI;
      if (aJ) {
        aH = Number(aJ);
        if (isFinite(aH)) {
          aH = aH > 0 && aH < 13 ? aH - 1 : undefined;
        } else {
          if (D) {
            aJ = aJ.toLowerCase();
            for (aI = 0; aI < D.length; aI += 1) {
              if (aJ.indexOf(D[aI].toLowerCase()) === 0) {
                aH = aI;
                break;
              }
            }
          }
        }
      }
      return aH;
    },
    al = function (aO) {
      var aP, aK, aJ, aM, aH, aN, aL, aI;
      aL = ao.exec(aO);
      if (!aL) {
        aL = B.exec(aO);
        if (aL && aL.length === 4 && Number(aL[2]) < 13) {
          aI = aL[1];
          aL[1] = aL[3];
          aL[3] = aI;
        } else {
          aL = F.exec(aO);
        }
      }
      if (aL && aL.length > 2) {
        aK = Number(aL[1]);
        if (aK && aK < 32) {
          aJ = ap(aL[2]);
          if (aJ || aJ === 0) {
            aH = new Date();
            aN = aH.getFullYear();
            aM = Number(aL[3]) || aN;
            if (aM < 100) {
              aM += 2000;
              if (aM - aN > 50) {
                aM -= 100;
              }
            }
            if (CLX.Ck(aJ, aM) >= aK) {
              if (Math.abs(aM - aN) < a) {
                aP = new Date(aM, aJ, aK);
              }
            }
          }
        }
      }
      return aP;
    },
    aD = function (aK) {
      var aH, aJ, aM, aI, aL;
      aL = af.exec(aK);
      if (aL && aL.length > 2 && aL[1]) {
        aJ = Number(aL[1]);
        if (aJ < 24) {
          aH = new Date();
          aH.setHours(aJ, 0, 0, 0);
          aM = Number(aL[2]) || 0;
          aH.setMinutes(aM < 60 ? aM : 0);
          aI = Number(aL[3]) || 0;
          aH.setSeconds(aI < 60 ? aI : 0);
        }
      }
      return aH;
    },
    av = function () {
      return aw;
    },
    r = function (aH) {
      return aw[aH];
    },
    an = function () {
      return D;
    },
    m = function (aH) {
      return D[aH];
    },
    R = function () {
      return ak;
    },
    aA = function (aH, aI) {
      var aJ;
      if (CLX.Cn(aH)) {
        aJ = aH;
      } else {
        if (CLX.M(aH && aH.getMonth)) {
          aJ = aH.getMonth();
        }
      }
      return (aI ? D : aw)[aJ] || "";
    },
    x = function (aH) {
      return aA(aH, CLX.By().get(CLX.Bw.SHORT_MONTH_NAMES_IN_DATEPICKER));
    },
    ac = function (aI, aJ) {
      var aH;
      if (CLX.Cn(aI)) {
        aH = aI;
      } else {
        if (CLX.M(aI.getDay)) {
          aH = aI.getDay();
        }
      }
      aH = aH === 0 ? 6 : aH - 1;
      if (aJ) {
        return ak[aH] || "";
      }
      return d[aH] || "";
    },
    h = function (aH) {
      return ac(aH, true);
    },
    at = function (aH) {
      return CLX.M(aH && aH.getFullYear) ? aH.getFullYear() : "";
    };
  f();
  ay();
  aw = G(CLX.Ca.FULL_MONTH_NAMES);
  D = G(CLX.Ca.SHORT_MONTH_NAMES);
  d = G(CLX.Ca.FULL_DAY_NAMES);
  ak = G(CLX.Ca.SHORT_DAY_NAMES);
  T = {
    formatBoolean: aE,
    getDecimalSeparator: K,
    getDecimalPlaces: U,
    formatString: ah,
    formatMultiLineString: L,
    formatCompactMultiLineString: Z,
    formatFullName: az,
    formatNumber: n,
    formatNumberWithPattern: Q,
    getNumberCharFilter: H,
    removeGroupingSeparator: p,
    isNumber: V,
    parseNumber: Y,
    formatNumericDateToken: I,
    formatNumericDate: i,
    formatDateWithPattern: b,
    formatDate: M,
    formatInputDate: ai,
    formatTime: aj,
    formatDateTime: c,
    formatTimeStampWithMillisecond: aB,
    formatNumericDateTime: z,
    parseDate: al,
    parseTime: aD,
    getFullMonthNames: av,
    getFullMonthName: r,
    getShortMonthNames: an,
    getShortMonthName: m,
    getShortDayNames: R,
    formatMonthName: aA,
    formatCalendarMonthName: x,
    formatCalendarDayName: ac,
    formatShortCalendarDayName: h,
    formatYear: at,
    reformatNumberString: u,
    formatDecimal: function (aK, aH, aJ, aI) {
      var aL = T.getDecimalPlaces(aK),
        aM;
      aI = aI || CLX.Ca.DEFAULT;
      if (!J[aI]) {
        l(aI);
      }
      if ((aJ || aJ === 0) && aL > aJ) {
        aM = aJ;
      } else {
        if ((aH || aH === 0) && aL < aH) {
          aM = aH;
        } else {
          aM = aL;
        }
      }
      if (J[aI] !== 0) {
        aM = J[aI];
        return n(aK, aM, aI);
      }
      return n(aK, aM);
    },
    localeDecimalPlaces: function (aH) {
      aH = aH || CLX.Ca.DEFAULT;
      if (!J[aH]) {
        l(aH);
      }
      return J[aH];
    },
  };
  return T;
};
CLX.Ct = {
  CONTAINER: "container",
  CONTAINER_FLUID: "container-fluid",
  ROW: "row",
  XS_0: "hidden-xs",
  XS_1: "col-xs-1",
  XS_2: "col-xs-2",
  XS_3: "col-xs-3",
  XS_4: "col-xs-4",
  XS_5: "col-xs-5",
  XS_6: "col-xs-6",
  XS_7: "col-xs-7",
  XS_8: "col-xs-8",
  XS_9: "col-xs-9",
  XS_10: "col-xs-10",
  XS_11: "col-xs-11",
  XS_12: "col-xs-12",
  XS_PULL_0: "col-xs-pull-0",
  XS_PULL_1: "col-xs-pull-1",
  XS_PULL_2: "col-xs-pull-2",
  XS_PULL_3: "col-xs-pull-3",
  XS_PULL_4: "col-xs-pull-4",
  XS_PULL_5: "col-xs-pull-5",
  XS_PULL_6: "col-xs-pull-6",
  XS_PULL_7: "col-xs-pull-7",
  XS_PULL_8: "col-xs-pull-8",
  XS_PULL_9: "col-xs-pull-9",
  XS_PULL_10: "col-xs-pull-10",
  XS_PULL_11: "col-xs-pull-11",
  XS_PULL_12: "col-xs-pull-12",
  XS_PUSH_0: "col-xs-push-0",
  XS_PUSH_1: "col-xs-push-1",
  XS_PUSH_2: "col-xs-push-2",
  XS_PUSH_3: "col-xs-push-3",
  XS_PUSH_4: "col-xs-push-4",
  XS_PUSH_5: "col-xs-push-5",
  XS_PUSH_6: "col-xs-push-6",
  XS_PUSH_7: "col-xs-push-7",
  XS_PUSH_8: "col-xs-push-8",
  XS_PUSH_9: "col-xs-push-9",
  XS_PUSH_10: "col-xs-push-10",
  XS_PUSH_11: "col-xs-push-11",
  XS_PUSH_12: "col-xs-push-12",
  XS_OFFSET_0: "col-xs-offset-0",
  XS_OFFSET_1: "col-xs-offset-1",
  XS_OFFSET_2: "col-xs-offset-2",
  XS_OFFSET_3: "col-xs-offset-3",
  XS_OFFSET_4: "col-xs-offset-4",
  XS_OFFSET_5: "col-xs-offset-5",
  XS_OFFSET_6: "col-xs-offset-6",
  XS_OFFSET_7: "col-xs-offset-7",
  XS_OFFSET_8: "col-xs-offset-8",
  XS_OFFSET_9: "col-xs-offset-9",
  XS_OFFSET_10: "col-xs-offset-10",
  XS_OFFSET_11: "col-xs-offset-11",
  XS_OFFSET_12: "col-xs-offset-12",
  SM_0: "hidden-sm",
  SM_1: "col-sm-1",
  SM_2: "col-sm-2",
  SM_3: "col-sm-3",
  SM_4: "col-sm-4",
  SM_5: "col-sm-5",
  SM_6: "col-sm-6",
  SM_7: "col-sm-7",
  SM_8: "col-sm-8",
  SM_9: "col-sm-9",
  SM_10: "col-sm-10",
  SM_11: "col-sm-11",
  SM_12: "col-sm-12",
  SM_PULL_0: "col-sm-pull-0",
  SM_PULL_1: "col-sm-pull-1",
  SM_PULL_2: "col-sm-pull-2",
  SM_PULL_3: "col-sm-pull-3",
  SM_PULL_4: "col-sm-pull-4",
  SM_PULL_5: "col-sm-pull-5",
  SM_PULL_6: "col-sm-pull-6",
  SM_PULL_7: "col-sm-pull-7",
  SM_PULL_8: "col-sm-pull-8",
  SM_PULL_9: "col-sm-pull-9",
  SM_PULL_10: "col-sm-pull-10",
  SM_PULL_11: "col-sm-pull-11",
  SM_PULL_12: "col-sm-pull-12",
  SM_PUSH_0: "col-sm-push-0",
  SM_PUSH_1: "col-sm-push-1",
  SM_PUSH_2: "col-sm-push-2",
  SM_PUSH_3: "col-sm-push-3",
  SM_PUSH_4: "col-sm-push-4",
  SM_PUSH_5: "col-sm-push-5",
  SM_PUSH_6: "col-sm-push-6",
  SM_PUSH_7: "col-sm-push-7",
  SM_PUSH_8: "col-sm-push-8",
  SM_PUSH_9: "col-sm-push-9",
  SM_PUSH_10: "col-sm-push-10",
  SM_PUSH_11: "col-sm-push-11",
  SM_PUSH_12: "col-sm-push-12",
  SM_OFFSET_0: "col-sm-offset-0",
  SM_OFFSET_1: "col-sm-offset-1",
  SM_OFFSET_2: "col-sm-offset-2",
  SM_OFFSET_3: "col-sm-offset-3",
  SM_OFFSET_4: "col-sm-offset-4",
  SM_OFFSET_5: "col-sm-offset-5",
  SM_OFFSET_6: "col-sm-offset-6",
  SM_OFFSET_7: "col-sm-offset-7",
  SM_OFFSET_8: "col-sm-offset-8",
  SM_OFFSET_9: "col-sm-offset-9",
  SM_OFFSET_10: "col-sm-offset-10",
  SM_OFFSET_11: "col-sm-offset-11",
  SM_OFFSET_12: "col-sm-offset-12",
  MD_0: "hidden-md",
  MD_1: "col-md-1",
  MD_2: "col-md-2",
  MD_3: "col-md-3",
  MD_4: "col-md-4",
  MD_5: "col-md-5",
  MD_6: "col-md-6",
  MD_7: "col-md-7",
  MD_8: "col-md-8",
  MD_9: "col-md-9",
  MD_10: "col-md-10",
  MD_11: "col-md-11",
  MD_12: "col-md-12",
  MD_PULL_0: "col-md-pull-0",
  MD_PULL_1: "col-md-pull-1",
  MD_PULL_2: "col-md-pull-2",
  MD_PULL_3: "col-md-pull-3",
  MD_PULL_4: "col-md-pull-4",
  MD_PULL_5: "col-md-pull-5",
  MD_PULL_6: "col-md-pull-6",
  MD_PULL_7: "col-md-pull-7",
  MD_PULL_8: "col-md-pull-8",
  MD_PULL_9: "col-md-pull-9",
  MD_PULL_10: "col-md-pull-10",
  MD_PULL_11: "col-md-pull-11",
  MD_PULL_12: "col-md-pull-12",
  MD_PUSH_0: "col-md-push-0",
  MD_PUSH_1: "col-md-push-1",
  MD_PUSH_2: "col-md-push-2",
  MD_PUSH_3: "col-md-push-3",
  MD_PUSH_4: "col-md-push-4",
  MD_PUSH_5: "col-md-push-5",
  MD_PUSH_6: "col-md-push-6",
  MD_PUSH_7: "col-md-push-7",
  MD_PUSH_8: "col-md-push-8",
  MD_PUSH_9: "col-md-push-9",
  MD_PUSH_10: "col-md-push-10",
  MD_PUSH_11: "col-md-push-11",
  MD_PUSH_12: "col-md-push-12",
  MD_OFFSET_0: "col-md-offset-0",
  MD_OFFSET_1: "col-md-offset-1",
  MD_OFFSET_2: "col-md-offset-2",
  MD_OFFSET_3: "col-md-offset-3",
  MD_OFFSET_4: "col-md-offset-4",
  MD_OFFSET_5: "col-md-offset-5",
  MD_OFFSET_6: "col-md-offset-6",
  MD_OFFSET_7: "col-md-offset-7",
  MD_OFFSET_8: "col-md-offset-8",
  MD_OFFSET_9: "col-md-offset-9",
  MD_OFFSET_10: "col-md-offset-10",
  MD_OFFSET_11: "col-md-offset-11",
  MD_OFFSET_12: "col-md-offset-12",
  LG_0: "hidden-lg",
  LG_1: "col-lg-1",
  LG_2: "col-lg-2",
  LG_3: "col-lg-3",
  LG_4: "col-lg-4",
  LG_5: "col-lg-5",
  LG_6: "col-lg-6",
  LG_7: "col-lg-7",
  LG_8: "col-lg-8",
  LG_9: "col-lg-9",
  LG_10: "col-lg-10",
  LG_11: "col-lg-11",
  LG_12: "col-lg-12",
  LG_PULL_0: "col-lg-pull-0",
  LG_PULL_1: "col-lg-pull-1",
  LG_PULL_2: "col-lg-pull-2",
  LG_PULL_3: "col-lg-pull-3",
  LG_PULL_4: "col-lg-pull-4",
  LG_PULL_5: "col-lg-pull-5",
  LG_PULL_6: "col-lg-pull-6",
  LG_PULL_7: "col-lg-pull-7",
  LG_PULL_8: "col-lg-pull-8",
  LG_PULL_9: "col-lg-pull-9",
  LG_PULL_10: "col-lg-pull-10",
  LG_PULL_11: "col-lg-pull-11",
  LG_PULL_12: "col-lg-pull-12",
  LG_PUSH_0: "col-lg-push-0",
  LG_PUSH_1: "col-lg-push-1",
  LG_PUSH_2: "col-lg-push-2",
  LG_PUSH_3: "col-lg-push-3",
  LG_PUSH_4: "col-lg-push-4",
  LG_PUSH_5: "col-lg-push-5",
  LG_PUSH_6: "col-lg-push-6",
  LG_PUSH_7: "col-lg-push-7",
  LG_PUSH_8: "col-lg-push-8",
  LG_PUSH_9: "col-lg-push-9",
  LG_PUSH_10: "col-lg-push-10",
  LG_PUSH_11: "col-lg-push-11",
  LG_PUSH_12: "col-lg-push-12",
  LG_OFFSET_0: "col-lg-offset-0",
  LG_OFFSET_1: "col-lg-offset-1",
  LG_OFFSET_2: "col-lg-offset-2",
  LG_OFFSET_3: "col-lg-offset-3",
  LG_OFFSET_4: "col-lg-offset-4",
  LG_OFFSET_5: "col-lg-offset-5",
  LG_OFFSET_6: "col-lg-offset-6",
  LG_OFFSET_7: "col-lg-offset-7",
  LG_OFFSET_8: "col-lg-offset-8",
  LG_OFFSET_9: "col-lg-offset-9",
  LG_OFFSET_10: "col-lg-offset-10",
  LG_OFFSET_11: "col-lg-offset-11",
  LG_OFFSET_12: "col-lg-offset-12",
  VISIBLE_XS: "visible-xs",
  VISIBLE_XS_BLOCK: "visible-xs-block",
  VISIBLE_XS_INLINE: "visible-xs-inline",
  VISIBLE_XS_INLINE_BLOCK: "visible-xs-inline-block",
  VISIBLE_SM: "visible-sm",
  VISIBLE_SM_BLOCK: "visible-sm-block",
  VISIBLE_SM_INLINE: "visible-sm-inline",
  VISIBLE_SM_INLINE_BLOCK: "visible-sm-inline-block",
  VISIBLE_MD: "visible-md",
  VISIBLE_MD_BLOCK: "visible-md-block",
  VISIBLE_MD_INLINE: "visible-md-inline",
  VISIBLE_MD_INLINE_BLOCK: "visible-md-inline-block",
  VISIBLE_LG: "visible-lg",
  VISIBLE_LG_BLOCK: "visible-lg-block",
  VISIBLE_LG_INLINE: "visible-lg-inline",
  VISIBLE_LG_INLINE_BLOCK: "visible-lg-inline-block",
  VISIBLE_PRINT: "visible-print",
  VISIBLE_PRINT_BLOCK: "visible-print-block",
  VISIBLE_PRINT_INLINE: "visible-print-inline",
  VISIBLE_PRINT_INLINE_BLOCK: "visible-print-inline-block",
  HIDDEN_XS: "hidden-xs",
  HIDDEN_SM: "hidden-sm",
  HIDDEN_MD: "hidden-md",
  HIDDEN_LG: "hidden-lg",
  HIDDEN_PRINT: "hidden-print",
  EMBED_RESPONSIVE: "embed-responsive",
  EMBED_RESPONSIVE_16BY9: "embed-responsive-16by9",
  EMBED_RESPONSIVE_4BY3: "embed-responsive-4by3",
  CENTER_BLOCK: "center-block",
  PULL_RIGHT: "pull-right",
  PULL_LEFT: "pull-left",
  HIDE: "hide",
  SHOW: "show",
  INVISIBLE: "invisible",
  TEXT_HIDE: "text-hide",
  HIDDEN: "hidden",
  AFFIX: "affix",
};
CLX.Cu = {
  TEXTFIELD: "textfield",
  TEXTAREA: "textarea",
  BUTTON: "button",
  COMBOBOX: "combobox",
  LISTBOX: "listbox",
  OPTION: "option",
  MENUITEM: "menuitem",
  GRID: "grid",
  ROW: "row",
  SEARCH: "search",
  SEPARATOR: "separator",
  selector: function (a) {
    return '[role="' + a + '"]';
  },
};
CLX.Cv = function StaticRenderer() {
  var b = CLX.As(CLX.Bx()),
    a = CLX.F,
    g = CLX.E,
    f = CLX.D,
    d,
    e = function () {
      d = CLX.Ae("staticTemplate");
    },
    c = CLX.Aj(CLX.Bx().getDescriptor());
  c.def(a.ELEMENT, null, g.CONTENT, [], true);
  e();
  b.getDescriptor = function () {
    return c;
  };
  b.getName = function () {
    return CLX.Ag.STATIC;
  };
  b.paint = function (i, h) {
    var j = d.clone(),
      k = CLX.L(h, g.CONTENT);
    if (k || k === 0 || k === false) {
      j.append(k);
    }
    return b.parent.paint(j, h);
  };
  b.detachChildren = function (i, h) {
    var j = CLX.L(h, g.CONTENT);
    if (j && CLX.M(j.removeClass)) {
      j.removeClass(f.BUSY);
      j.find("*").removeClass(f.BUSY);
    }
    b.parent.detachChildren(i, h);
  };
  b.addEventHandlers = function (i, h) {
    i.press(function (k) {
      var l = CLX.$(this),
        j;
      j = l.attr(g.NAME) || l.attr(g.DATA_NAME) || l.data(g.NAME);
      CLX.Bn(h, CLX.Be.CLICK, j);
      k.preventDefault();
    });
    b.parent.addEventHandlers(i, h);
  };
  CLX.Az(b, g.CONTENT, CLX.Co);
  return b;
};
CLX.Cw = function () {
  var f,
    b = "BENCHMARK_KEY",
    a = /^[A-Z]+[A-Z0-9]*(_[A-Z0-9]+)*$/,
    h = "_",
    i = 2,
    g = 63,
    c = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$",
    d = 131,
    e = /\d/;
  f = {
    convert: function (q) {
      var v = q,
        l,
        o,
        u,
        m,
        p,
        n,
        r,
        k,
        t,
        s;
      if (a.test(q)) {
        l = "";
        o = 0;
        u = q.split(h);
        for (p = 0; p < u.length; p += 1) {
          m = u[p];
          r = m.length;
          if (r === 1) {
            l += m;
          } else {
            l += m.charAt(0);
            if (r > i) {
              l += m.substring(1, i).toLowerCase();
              for (n = i; n < r; n += 1) {
                k = m.charAt(n);
                if (e.test(k)) {
                  l += k;
                } else {
                  if (!o) {
                    o = k.charCodeAt(0);
                  } else {
                    o *= d;
                    o += k.charCodeAt(0);
                    o &= o;
                  }
                }
              }
            } else {
              l += m.substring(1).toLowerCase();
            }
          }
        }
        if (q.length > l.length + (o ? 3 : 1)) {
          if (o) {
            t = (o >> 6) & g;
            s = o & g;
            l += c.charAt(t);
            l += c.charAt(s);
          }
          v = l;
        }
      }
      return v;
    },
    getBenchmark: function () {
      return f.convert(b);
    },
  };
  return f;
};
CLX.Cx = function (c, b) {
  var a = { json: c, inputId: b, paramName: b };
  return a;
};
CLX.Cy = function (e, c) {
  var d, a, b;
  if (c !== undefined && c !== null) {
    d = String(c);
    if (CLX.Cl(e, d)) {
      return d;
    }
    if (e.hasOwnProperty(d)) {
      return e[d];
    }
    a = d.toLowerCase();
    if (CLX.Cl(e, a)) {
      return a;
    }
    if (e.hasOwnProperty(a)) {
      return e[a];
    }
    b = d.toUpperCase();
    if (CLX.Cl(e, b)) {
      return b;
    }
    if (e.hasOwnProperty(b)) {
      return e[b];
    }
    if (d.indexOf("-") !== -1) {
      return CLX.Cy(e, d.replace(/-/g, "_"));
    }
  }
  return null;
};
CLX.Cz = function (e) {
  var b,
    a = /(\w{4})(\w{4})(\w{4})(\w{3,4})(\w{0,4})(\w{0,4})(\w{0,4})(\w{0,4})(\w{0,2})/,
    d,
    c;
  if (e) {
    e = e.replace(/\W/g, "").replace(/[_]/g, "");
    d = a.exec(e);
    if (d && d.length > 1) {
      b = d[1];
      for (c = 2; c < d.length; c++) {
        if (d[c]) {
          b += d[c];
        }
      }
    }
  }
  return b;
};
CLX.Da = CLX.Cw();
CLX.Db = function (a) {
  var d,
    g = CLX.E,
    f = CLX.D,
    c = CLX.Ct,
    b,
    e = function () {
      b = CLX.Ae("containerLayoutTemplate");
    };
  e();
  d = {
    getName: function () {
      return CLX.Cq.CONTAINER;
    },
    attach: function (h, n, o, m) {
      var l = CLX.Aw(n.attr(g.ROLE)),
        j,
        i,
        k;
      if (CLX.C(a)) {
        i = a[g.ZEBRA];
        k = a[g.GRID];
      }
      if (k) {
        n.addClass(c.CONTAINER_FLUID);
      }
      CLX.$.each(o, function (p, q) {
        if (q) {
          var r = b.clone(),
            s;
          if (k) {
            r.addClass(c.ROW);
          }
          n.append(r);
          if (i && p % 2 !== 0) {
            CLX.X.call(q, f.ZEBRA_STRIPE);
          } else {
            CLX.Aa.call(q, f.ZEBRA_STRIPE);
          }
          q.attach(r, m);
          s = q.getElement();
          if (l && s && CLX.Aw(s.attr(g.ROLE))) {
            s.attr(g.ROLE, CLX.Cu.ROW);
            j = true;
          }
        }
      });
      if (l && j) {
        n.attr(g.ROLE, CLX.Cu.GRID);
      }
    },
  };
  return d;
};
CLX.Dc = { IBAN: "IBAN", SPEC: "SPEC" };
CLX.Dd = ".";
CLX.De = function () {
  return "";
};
CLX.Df = function () {
  return CLX.I.get(CLX.Cs);
};
CLX.Dg = "<br>";
CLX.Dh = "js";
CLX.Di = function () {
  var a = {
    get: function (b) {
      return CLX.Bg.getValue.call(CLX[CLX.Bg.GUI_PREFERENCES], b);
    },
  };
  return a;
};
CLX.Dj = " ";
CLX.Dk = function (a) {
  var b = CLX.I.get(CLX.Cv);
  return CLX.Cr(b, a);
};
CLX.Dl = {
  PERSON_LOGOUT_TIMEOUT: CLX.Cx("PERSON_LOGOUT_TIMEOUT", "logoutTimeout"),
  DEFAULT_ROWCOUNT: CLX.Cx("DEFAULT_ROWCOUNT", "defaultRowCount"),
  DEFAULT_BOOKINGS: CLX.Cx("DEFAULT_BOOKINGS", "defaultBookings"),
  DEFAULT_PAYMENTS: CLX.Cx("DEFAULT_PAYMENTS", "defaultPayments"),
  DEFAULT_BOOKING_DETAILS: CLX.Cx(
    "DEFAULT_BOOKING_DETAILS",
    "defaultBookingDetails"
  ),
  DEFAULT_ROWCOUNT_MOBILE: CLX.Cx("DEFAULT_ROWCOUNT_MOBILE"),
  BALANCE_COLUMN_ONE: CLX.Cx("BALANCE_COLUMN_ONE", "accountBalanceOne"),
  BALANCE_COLUMN_TWO: CLX.Cx("BALANCE_COLUMN_TWO", "accountBalanceTwo"),
  CONTRACT_MTAN_SIGN_LEVEL: CLX.Cx(
    "CONTRACT_MTAN_SIGN_LEVEL",
    "paymentSignLevel"
  ),
  CONTRACT_MTAN_SIGN_AMOUNT: CLX.Cx(
    "CONTRACT_MTAN_SIGN_AMOUNT",
    "paymentSignAmount"
  ),
  DISPLAY_FORMAT: CLX.Cx("DISPLAY_FORMAT"),
  ADVISOR_ADDRESS: CLX.Cx("ADVISOR_ADDRESS"),
  ADVISOR_NAME: CLX.Cx("ADVISOR_NAME"),
  INIT_MOBILE_ROW_COUNT: CLX.Cx("INIT_MOBILE_ROW_COUNT"),
  USE_PERSONALIZED_MESSAGING: CLX.Cx("USE_PERSONALIZED_MESSAGING"),
  HIDE_ACCOUNT_GRAPHIC: CLX.Cx("HIDE_ACCOUNT_GRAPHIC", "hideAccountGraphic"),
  HIDE_PORTFOLIO_GRAPHIC: CLX.Cx(
    "HIDE_PORTFOLIO_GRAPHIC",
    "hidePortfolioGraphic"
  ),
  HIDE_WEALTH_OVERVIEW_GRAPHIC: CLX.Cx(
    "HIDE_WEALTH_OVERVIEW_GRAPHIC",
    "hideWealthOverviewGraphic"
  ),
  HIDE_PAYMENT_RECOGNITION_TABLE_PAYMENTS: CLX.Cx(
    "HIDE_PAYMENT_RECOGNITION_TABLE_PAYMENTS",
    "hidePaymentRecognitionTablePayments"
  ),
  SCAN_PAYMENT_PROCESS_RIGHT_AWAY: CLX.Cx(
    "SCAN_PAYMENT_PROCESS_RIGHT_AWAY",
    "scanPaymentProcessRightAway"
  ),
  IS_REGISTERED_FOR_MOBILE: CLX.Cx("IS_REGISTERED_FOR_MOBILE"),
  DEFAULT_MESSAGE_ALERT_ID: CLX.Cx("DEFAULT_MESSAGE_ALERT_ID", "alrtId"),
  FILTER_ASSET_POSITIONS_FROM_A_GRAPH: CLX.Cx(
    "FILTER_ASSET_POSITIONS_FROM_A_GRAPH"
  ),
  PAYMENT_FILE_FORMAT: CLX.Cx("PAYMENT_FILE_FORMAT", "paymentFileFormat"),
};
CLX.Dm = function (e, b) {
  var a = e,
    d,
    c,
    f;
  if (a && (b || b === 0)) {
    if (CLX.B(b)) {
      for (c = 0; c < b.length; c += 1) {
        f = String(b[c]);
        a = a.replace("{" + c + "}", f);
        a = a.replace("{" + c + ":lower}", f.toLowerCase());
        a = a.replace("{" + c + ":upper}", f.toUpperCase());
      }
    } else {
      if (CLX.C(b)) {
        for (d in b) {
          if (b.hasOwnProperty(d)) {
            f = String(b[d]);
            a = a.replace("{" + d + "}", f);
            a = a.replace("{" + d + ":lower}", f);
            a = a.replace("{" + d + ":upper}", f);
          }
        }
      } else {
        for (c = 1; c < arguments.length; c += 1) {
          f = String(arguments[c]);
          a = a.replace("{" + (c - 1) + "}", f);
          a = a.replace("{" + (c - 1) + ":lower}", f.toLowerCase());
          a = a.replace("{" + (c - 1) + ":upper}", f.toUpperCase());
        }
      }
    }
  }
  return a;
};
CLX.Dn = function (a) {
  return a.getAvailableProductValue();
};
CLX.Do = function (b, a) {
  var c = CLX.L(b, a);
  return !!c;
};
CLX.Dp = function (h) {
  var i = [],
    g,
    j,
    d,
    c,
    f = CLX.E,
    b = CLX.D,
    a = CLX.S,
    e = CLX.Cp;
  c = CLX.L(h, f.NAME);
  if (CLX.N(c)) {
    g = CLX.L(h, f.TYPE);
    j = g === e.TOGGLE ? "button" : "input";
    d = g === e.TOGGLE ? b.BUTTON : b.CHECKBOX;
    CLX.$(document)
      .find(j + '[name="' + c + '"]')
      .each(function (l, m) {
        var k = CLX.$(m)
          .closest("." + d)
          .data(a.COMPONENT);
        if (k && CLX.L(k, f.TYPE) === g) {
          i.push(k);
        }
      });
  }
  if (!CLX.Ak(i, h)) {
    i.push(h);
  }
  return i;
};
CLX.Dq = function (a) {
  return CLX.$.isFunction(a.getCustomerName) ? a.getCustomerName() : "";
};
CLX.Dr = function (a) {
  return a.getDescription();
};
CLX.Ds = function (b, a, c) {
  return CLX.Cy(c, CLX.L(b, a));
};
CLX.Dt = function (b, a) {
  var c = Number(CLX.L(b, a));
  return isFinite(c) ? c : null;
};
CLX.Du = function (a) {
  return a.getPortDescription();
};
CLX.Dv = function (a) {
  return a.getProdDescription();
};
CLX.Dw = function (a) {
  return a.getProductDescription();
};
CLX.Dx = function (a) {
  return a.getProductValue();
};
CLX.Dy = function (a) {
  return a.getSettDescription();
};
CLX.Dz = function (b, a) {
  var c = CLX.L(b, a);
  return c === undefined || c === null ? c : String(c);
};
CLX.Ea = function (a) {
  return a.getTypeDescription();
};
CLX.Eb = function (a) {
  return !!a.getElement();
};
CLX.Ec = function (a) {
  a.setHours(0);
  a.setMinutes(0);
  a.setSeconds(0);
  a.setMilliseconds(0);
  return a;
};
CLX.Ed = function (a) {
  return a
    ? a.replace(
        /^[\f\n\r\t\u000B\u0020\u00A0\u2028\u2029]+|[\f\n\r\t\u000B\u0020\u00A0\u2028\u2029]+$/g,
        ""
      )
    : a;
};
CLX.Ee = function (i, e) {
  var d = 15,
    h = /^[a-z]{2}\d{2}[0-9a-z]{11,}$/i,
    b = { GB: 22, CH: 21, LI: 21, DE: 22, AT: 20, FR: 27 },
    g = function (m) {
      var j, p, o, l, k, n;
      p = m.substr(0, 2);
      o = m.substring(4) + p;
      o = o.toUpperCase();
      j = "";
      l = 0;
      k = "A";
      for (n = 0; n < o.length; n++) {
        if (isNaN(o.charAt(n))) {
          l = o.charCodeAt(n) - k.charCodeAt(0) + 10;
          j += l;
        } else {
          j += o.charAt(n);
        }
      }
      return j + "00";
    },
    c = function (j) {
      return j.substr(2, 2);
    },
    f = function (k, p) {
      var n = k.length,
        m = "",
        o = 0,
        j = 0,
        l,
        q;
      while (o < n) {
        l = 9 - m.length;
        if (o + l <= n) {
          q = k.substring(o, o + l);
        } else {
          q = k.substring(o);
        }
        q = m.concat(q);
        j = Number(q) % 97;
        o += l;
        m = j.toString();
      }
      return Number(p) === 98 - j;
    },
    a;
  i = CLX.Cz(i);
  if (!i || i === null || i.length === 0) {
    return false;
  }
  if (i.length < d) {
    return false;
  }
  a = i.substr(0, 2).toUpperCase();
  if (!i.match(h)) {
    return false;
  }
  if (b[a] && i.length !== b[a]) {
    return false;
  }
  if (e !== true && f(g(i), c(i)) !== true) {
    return false;
  }
  return true;
};
CLX.Ef = function ButtonRenderer() {
  var i = CLX.As(CLX.Bx()),
    w = CLX.Be,
    d = CLX.F,
    h = CLX.E,
    t = CLX.D,
    e = CLX.H,
    q = CLX.Cp,
    D = [t.BUTTON_KIND_ICON, t.BUTTON_KIND_TEXT, t.BUTTON_KIND_ICON_TEXT].join(
      " "
    ),
    l = CLX.Ah,
    j = (function () {
      var A = {};
      A[l.ESC] = w.ESC;
      A[l.UP] = w.UP;
      A[l.DOWN] = w.DOWN;
      A[l.PAGE_UP] = w.PAGE_UP;
      A[l.PAGE_DOWN] = w.PAGE_DOWN;
      return A;
    })(),
    B,
    f,
    p,
    c = function () {
      B = CLX.Ae("buttonTemplate");
      f = CLX.Ae("buttonContentTemplate");
      p = CLX.Ae("checkboxTemplate");
      p.find(e.INPUT_SELECTOR).removeAttr(h.ID + " " + h.ARIA_LABEL);
      p.find(e.LABEL_SELECTOR).removeAttr(h.FOR);
    },
    y = function (A) {
      return CLX.Ds(A, h.TYPE, q) || q.BUTTON;
    },
    k = function (G, A) {
      var H = B.clone(),
        C;
      C = H.find('button[type="' + y(A) + '"]');
      if (!C.length) {
        C = H.find('button[type="button"]');
      }
      C.siblings().remove();
      C.append(f.clone().children());
      return H;
    },
    a = function (C, A) {
      var G = p.clone(),
        H = CLX.T().nextId(A.getName());
      G.find(
        y(A) === q.CHECKBOX ? e.RADIO_SELECTOR : e.CHECKBOX_SELECTOR
      ).remove();
      G.find("." + t.CHECKBOX_INPUT).attr(h.ID, H);
      G.find("." + t.CHECKBOX_LABEL).attr(h.FOR, H);
      if (CLX.Aw(CLX.L(A, h.TEXT))) {
        G.addClass(t.CHECKBOX_WITHOUT_TEXT);
      }
      return G;
    },
    n = function (H) {
      var C = "",
        G = y(H),
        I,
        A;
      if (G !== q.CHECKBOX && G !== q.RADIO) {
        I = CLX.N(CLX.L(H, h.TEXT));
        A = CLX.N(CLX.L(H, h.ICON));
        if (I && A) {
          C = t.BUTTON_KIND_ICON_TEXT;
        } else {
          if (I) {
            C = t.BUTTON_KIND_TEXT;
          } else {
            C = t.BUTTON_KIND_ICON;
          }
        }
      }
      return C;
    },
    s = function (C, A) {
      C.removeClass(D);
      C.addClass(n(A));
    },
    v = function (C, A) {
      var G = C.children().not("." + t.OVERLAY);
      return G.filter(A).add(G.find(A));
    },
    z = function (H, C) {
      var A = v(H, "." + t.BUTTON_LABEL),
        J,
        G,
        I;
      J = CLX.L(C, h.TEXT);
      G = CLX.N(J);
      if (G) {
        A.text(J).show();
      } else {
        A.text("");
        I = y(C);
        if (I !== q.CHECKBOX && I !== q.RADIO) {
          A.hide();
        }
      }
      s(H, C);
      return G;
    },
    b = function (H, G) {
      var I = v(H, "." + t.BUTTON_ICON),
        C,
        A;
      C = CLX.L(G, h.ICON);
      A = CLX.N(C);
      I.attr(h.CLASS, t.BUTTON_ICON);
      if (A) {
        I.addClass(C).show();
      } else {
        I.hide();
      }
      s(H, G);
      return A;
    },
    g = function (C) {
      var H = y(C),
        I,
        G,
        A;
      if (H === q.TOGGLE || H === q.RADIO) {
        I = CLX.L(C, h.ACTIVE);
        G = CLX.L(C, h.SELECTED_VALUE);
        A = CLX.Dp(C);
        if (!I) {
          CLX.Al(A, function (J, K) {
            if (CLX.L(K, h.ACTIVE)) {
              G = CLX.L(K, h.SELECTED_VALUE);
              return false;
            }
          });
        }
        CLX.Al(A, function (J, K) {
          CLX.R(K, h.SELECTED_VALUE, G);
        });
      }
    },
    r = function (A) {
      var C = y(A),
        H,
        G;
      if (C === q.CHECKBOX || C === q.RADIO || C === q.TOGGLE) {
        H = CLX.L(A, h.ACTIVE);
        G = CLX.L(A, h.VALUE);
        if (G === undefined || G === null) {
          CLX.R(A, h.SELECTED_VALUE, H);
        } else {
          if (H) {
            CLX.R(A, h.SELECTED_VALUE, G);
          } else {
            if (G === CLX.L(A, h.SELECTED_VALUE)) {
              CLX.R(A, h.SELECTED_VALUE, null);
            }
          }
        }
        if (CLX.Eb(A)) {
          g(A);
        }
      }
    },
    x = function (G, C) {
      var H, I, A;
      if (G) {
        H = y(C);
        I = CLX.L(C, h.ACTIVE);
        if (H === q.CHECKBOX || H === q.RADIO) {
          A = v(G, "." + t.CHECKBOX_INPUT);
          A.prop("checked", !!I);
          A.attr(h.ARIA_CHECKED, String(!!I));
        } else {
          if (H === q.TOGGLE) {
            G.attr(h.ARIA_CHECKED, String(!!I));
          }
          if (I) {
            G.addClass(t.BUTTON_ACTIVE);
          } else {
            G.removeClass(t.BUTTON_ACTIVE);
          }
        }
      }
      r(C);
    },
    F = function (C, A) {
      var G = y(A);
      return v(
        C,
        G === q.CHECKBOX || G === q.RADIO ? "input" : e.BUTTON_SELECTOR
      );
    },
    o = function (C, A) {
      var H,
        G = y(A);
      if (G === q.TOGGLE || G === q.CHECKBOX || G === q.RADIO) {
        if (G === q.TOGGLE) {
          H = CLX.L(A, h.ACTIVE);
          if (!H || CLX.L(A, h.ALLOW_DEACTIVATE)) {
            H = !H;
          }
        } else {
          H = v(C, e.INPUT_SELECTOR).prop("checked");
        }
        CLX.R(A, h.ACTIVE, H);
      }
    },
    E = function (H, L, A, M) {
      var I = CLX.$(A.target),
        J = I.is("div"),
        K = y(L),
        C,
        G;
      G = CLX.L(L, h.OVERLAY);
      if (A.keyCode === CLX.Ah.SPACE && J) {
        A.preventDefault();
      }
      if (CLX.L(L, h.READONLY) || CLX.L(L, h.DISABLED)) {
        A.preventDefault();
        if (!CLX.L(L, h.DISABLED)) {
          CLX.Bn(L, w.CLICK);
        }
        return;
      }
      if (A.type === "click") {
        if (I.is(e.LABEL_SELECTOR)) {
          return;
        }
        if (
          G &&
          (A.target === G.getElement()[0] ||
            I.parents().index(G.getElement()) !== -1)
        ) {
          return;
        }
      }
      if (A.keyCode === CLX.Ah.SPACE && (I.is("input") || I.is("button"))) {
        return;
      }
      if (J) {
        F(H, L).trigger("click", [J]);
        return;
      }
      C = function () {
        o(H, L);
        CLX.Bn(L, w.CLICK);
      };
      if (M && (K === q.CHECKBOX || K === q.RADIO)) {
        CLX.Av(C);
      } else {
        C();
      }
    },
    u = function (C) {
      var A = C.data.component,
        G = CLX.L(A, h.VALUE);
      if (G === undefined || G === null) {
        G = true;
      }
      CLX.R(A, h.ACTIVE, CLX.L(A, h.SELECTED_VALUE) === G);
    },
    m = CLX.Aj(CLX.Bx().getDescriptor());
  m.def(d.STRING, q.BUTTON, h.TYPE, [h.TYPE, h.DATA_TYPE], true);
  m.def(d.STRING, null, h.TEXT, h.DATA_TEXT);
  m.def(d.STRING, null, h.ICON, h.DATA_ICON);
  m.def(d.BOOLEAN, false, h.ACTIVE, h.DATA_ACTIVE);
  m.def(d.BOOLEAN, false, h.ALLOW_DEACTIVATE, h.DATA_ALLOW_DEACTIVATE);
  m.def(d.STRING, null, h.VALUE, [h.VALUE, h.DATA_VALUE]);
  m.def(d.STRING, null, h.SELECTED_VALUE, []);
  c();
  i.getDescriptor = function () {
    return m;
  };
  i.getName = function () {
    return CLX.Ag.BUTTON;
  };
  i.init = function (A) {
    i.parent.init(A);
    var C = A.getCss;
    A.getCss = function () {
      var G = CLX.L(A, h.ACTIVE);
      return C.call(A) + " " + n(A) + (G ? " " + t.BUTTON_ACTIVE : "");
    };
    r(A);
  };
  i.paint = function (C, A) {
    var H,
      G = y(A);
    if (G === q.CHECKBOX || G === q.RADIO) {
      H = a(C, A);
    } else {
      H = k(C, A);
    }
    return i.parent.paint(H, A);
  };
  i.attach = function (H, C, G) {
    var A = i.parent.attach(H, C, G);
    G.indom.push(function () {
      g(C);
    });
    return A;
  };
  i.addEventHandlers = function (C, A) {
    C.keydown(function (G) {
      var H = G.charCode === 0 && j[G.keyCode];
      if (H) {
        G.preventDefault();
        CLX.Bn(A, H);
      }
    });
    C.press(function (I, H) {
      if (I.charCode === 0 && l.ENTER === I.keyCode) {
        var G = y(A);
        if (G === q.CHECKBOX || G === q.RADIO || G === q.TOGGLE) {
          I.preventDefault();
          CLX.Bn(A, w.ENTER);
          return;
        }
      }
      E(C, A, I, H);
    });
    C.focus(function (G) {
      CLX.Bn(A, w.FOCUS);
    });
    C.find("input").focus(function (G) {
      C.focus();
    });
    i.parent.addEventHandlers(C, A);
  };
  CLX.Az(i, h.TYPE, CLX.Co);
  CLX.Az(i, h.NAME, function (C) {
    var A = i.parent[CLX.Q(h.NAME)];
    A(C);
    C.data.element = F(C.data.element, C.data.component);
    A(C);
  });
  CLX.Az(i, h.TEXT, function (A) {
    z(A.data.element, A.data.component);
  });
  CLX.Az(i, h.ICON, function (A) {
    b(A.data.element, A.data.component);
  });
  CLX.Az(i, h.ACTIVE, function (A) {
    x(A.data.element, A.data.component);
  });
  CLX.Az(i, h.VALUE, u);
  CLX.Az(i, h.SELECTED_VALUE, u);
  return i;
};
CLX.Eg = function (b, a) {
  return function (d) {
    var c, e;
    e = b && !CLX.C(b[d]) && !CLX.M(b[d]) && b[d];
    c = [d].concat(e || []);
    return a ? c : c.concat(CLX.$.map(c, CLX.Da.convert));
  };
};
CLX.Eh = function ContainerRenderer() {
  var d = CLX.As(CLX.Bx()),
    b = CLX.F,
    h = CLX.E,
    g = CLX.D,
    c,
    f = function () {
      c = CLX.Ae("containerTemplate");
    },
    a = function (j, i) {
      var k = CLX.L(i, h.HEADING),
        l;
      if (k) {
        l = CLX.Do(i, h.COLLAPSED);
        CLX.R(k, h.COLLAPSED, l);
      }
    },
    e = CLX.Aj(CLX.Bx().getDescriptor());
  e.def(b.COMPONENT, null, h.HEADING, [], true);
  e.def(b.COMPONENT, null, h.FOOTER, [], true);
  e.def(b.COMPONENT, null, h.CONTENT, [], true);
  e.def(b.LAYOUT, null, h.LAYOUT, [], true);
  e.def(b.FUNCTION, null, h.WRAP, [], true);
  e.def(b.BOOLEAN, null, h.COLLAPSED, h.DATA_COLLAPSED, true);
  e.def(b.NUMBER, null, h.ANIMATION_DURATION, h.DATA_ANIMATION_DURATION, true);
  e.def(b.STRING, null, h.ANIMATION_EASING, h.DATA_ANIMATION_EASING, true);
  e.def(b.FUNCTION, null, h.ANIMATION_COMPLETE, [], true);
  f();
  d.getDescriptor = function () {
    return e;
  };
  d.getName = function () {
    return CLX.Ag.CONTAINER;
  };
  d.paint = function (j, i) {
    var k = CLX.L(i, h.HEADING),
      l = CLX.L(i, h.FOOTER);
    return d.parent.paint(k || l ? c.clone() : j, i);
  };
  d.attachChildren = function (m, q, j) {
    var u, o, r, k, p, s, l, i, t, n;
    k = m.children("." + g.CONTAINER_HEADING);
    u = CLX.L(q, h.HEADING);
    if (u) {
      a(m, q);
      u.attach(k, j);
    } else {
      k.hide();
    }
    s = m.children("." + g.CONTAINER_FOOTER);
    r = CLX.L(q, h.FOOTER);
    if (r) {
      r.attach(s, j);
      if (CLX.Do(q, h.COLLAPSED)) {
        r.hide();
      }
    } else {
      s.hide();
    }
    p = m.children("." + g.CONTAINER_CONTENT);
    if (!p.length) {
      p = m;
    }
    o = CLX.L(q, h.CONTENT) || [];
    if (!CLX.B(o)) {
      o = [o];
    }
    if (o.length) {
      o = CLX.$.map(o, function (v) {
        return CLX.Ax(v) ? v : CLX.Dk({ content: v });
      });
      n = CLX.L(q, h.LAYOUT);
      if (!n) {
        t = {};
        t[h.ZEBRA] = true;
        n = CLX.Db(t);
        CLX.R(q, h.LAYOUT, n, true);
      }
      p.empty();
      l = p;
      i = CLX.L(q, h.WRAP);
      if (CLX.M(i)) {
        l = i(q, l, o);
      }
      n.attach(q, l, o, j);
      if (!l.children().length || CLX.Do(q, h.COLLAPSED)) {
        p.hide();
      }
    } else {
      p.hide();
    }
    d.parent.attachChildren(m, q, j);
  };
  d.detachChildren = function (k, j) {
    var m, i, n, l;
    m = CLX.L(j, h.HEADING);
    if (m) {
      m.detach();
    }
    n = CLX.L(j, h.FOOTER);
    if (n) {
      n.detach();
    }
    i = CLX.L(j, h.CONTENT);
    l = CLX.L(j, h.LAYOUT);
    if (CLX.M(l && l.detach)) {
      l.detach(j, i);
    } else {
      CLX.Al(i, function (o, p) {
        if (p && CLX.M(p.detach)) {
          p.detach();
        }
      });
    }
    d.parent.detachChildren(k, j);
  };
  CLX.Az(d, h.CONTENT, CLX.Co);
  CLX.Az(d, h.LAYOUT, CLX.Co);
  CLX.Az(d, h.WRAP, CLX.Co);
  CLX.Az(d, h.FOOTER, CLX.Co);
  CLX.Az(d, h.HEADING, function (i) {
    a(i.data.element, i.data.component);
    return CLX.Co(i);
  });
  CLX.Az(d, h.COLLAPSED, function (i) {
    var p, m, l, k, o, j, t, n, q, s, r;
    p = i.data.component;
    m = i.data.element;
    l = CLX.Do(p, h.COLLAPSED);
    k = CLX.Dt(p, h.ANIMATION_DURATION);
    o = CLX.Dz(p, h.ANIMATION_EASING);
    j = CLX.L(p, h.ANIMATION_COMPLETE);
    if (CLX.L(p, h.HEADING) || CLX.L(p, h.FOOTER)) {
      t = m.children("." + g.CONTAINER_HEADING);
      n = m.children("." + g.CONTAINER_CONTENT);
      q = m.children("." + g.CONTAINER_FOOTER);
      a(m, p);
      CLX.Bd(t, h.ARIA_EXPANDED, !l);
      if (l) {
        q.hide();
      }
    } else {
      n = m;
    }
    r = function () {
      if (l) {
        n.hide();
      } else {
        n.show();
        if (q) {
          q.show();
        }
      }
      if (j) {
        var u = { component: p, collapsed: l };
        if (CLX.M(j)) {
          j(u);
        } else {
          if (CLX.C(j) && CLX.M(j.fire)) {
            j.fire(u);
          }
        }
      }
    };
    s = l ? n.slideUp : n.slideDown;
    s.call(n, { duration: k, easing: o, complete: r });
  });
  return d;
};
CLX.Ei = function (a) {
  var b = {
    create: function () {
      var c = this,
        d = Array.prototype.slice.call(arguments, 0);
      d.unshift(a);
      return CLX.Bg.dataRecordFactoryCreate.apply(c, d);
    },
  };
  a.factory = b;
  return b;
};
CLX.Ej = function FormatAssetFactory() {
  var G,
    o = CLX.Df(),
    aw = CLX.By(),
    x = CLX.By().get(CLX.Bw.SHOW_HOLDING_ALL_DECIMAL_PLACES),
    U = CLX.Cc(),
    al = CLX.Bv,
    ay = "salaryPaymentTranslation",
    v = "CurrencyDecimalPlaces",
    I = CLX[v] || { DEFAULT: 2 },
    H = aw.get(CLX.Bw.SHOW_FORMATED_ACCOUNT_NUMBER_BCI),
    J = CLX.$("#broPieceTranslation").text(),
    V = CLX.$("#accountNumberFormatPattern").text(),
    aj = "{0} {1}",
    ah = CLX.$("#amountWithCurrencyPattern").text() || aj,
    u = /(\w{4})(\w{4})(\w{4})(\w{3,4})(\w{0,4})(\w{0,4})(\w{0,4})(\w{0,4})(\w{0,2})/,
    aH = /^[a-z]{2}\d{2}[0-9a-z]{11,}$/i,
    E = /([1-9]\d*)?[\d\.]{8}$/,
    c = /([1-9]\d*)?[\d\.]{12}$/,
    w = /([1-9]\d*)?[\d\.]{11}$/,
    ar = /^[A-Z0-9]{8}(\d{6})/,
    ak = 15,
    ab = 45,
    d = CLX.Cb,
    aA = CLX.Dg,
    l = " - ",
    Q = "%",
    an = "00000000",
    aI = "CORI_ALIAS",
    C = { UK: 22, CH: 21, LI: 21, DE: 22, AT: 20, FR: 27 },
    L = {
      ANNUALLY: 1,
      SEMI_ANNUALLY: 2,
      TRIMESTRIALLY: 3,
      QUARTERLY: 4,
      BIMONTHLY: 6,
      MONTHLY: 9,
    },
    n = (function () {
      var P = {};
      P[L.ANNUALLY] = "interestFrequencyAnnually";
      P[L.SEMI_ANNUALLY] = "interestFrequencySemiAnnually";
      P[L.TRIMESTRIALLY] = "interestFrequencyTrimestrially";
      P[L.QUARTERLY] = "interestFrequencyQuarterly";
      P[L.BIMONTHLY] = "interestFrequencyBimonthly";
      P[L.MONTHLY] = "interestFrequencyMonthly";
      return P;
    })(),
    B = " / ",
    b = "closedAccountQualification",
    af = CLX.$("#" + b).text(),
    ac = CLX.By(),
    Z = CLX.Bw,
    a = ac.get(Z.USE_PROD_NO_FORM),
    aD = ac.get(Z.FORMAT_PROD_NO_FORM),
    ap = ac.get(CLX.Bw.SHOW_ACCOUNT_NUMBER_NO_FORMAT),
    O = ac.get(Z.SELECTOR_ACCNO_CURR_SEPARATE_COL),
    A = ac.get(Z.SHOW_PRODUCT_VISUALIZATION_CONFIG),
    ad = ac.get(Z.SELECTOR_PORTNO_CURR_SEPARATE_COL),
    h = ac.get(Z.SHOW_TRIPLE_A_QUANTITY),
    aB = ac.get(Z.SHOW_ADD_INTEREST_TO_PRODUCT_VALUE),
    ai = ac.get(Z.SHOW_ACCOUNT_INPUT_TEXT_SECOND_LINE_DESCRIPTION),
    M = CLX.By().get(Z.SHOW_PERFORMANCE_DATA_USE_MONEY_INSTEAD_OF_TIME),
    Y = aw.get(CLX.Bw.SHOW_ACCOUNT_OWNERS),
    at = ac.get(CLX.Bw.MARKET_INFO_CONTRACT_USE_ROLOTEC),
    q = CLX.By().get(CLX.Bw.SHOW_QUANTITY_NEGATIVE_VALUES),
    W = CLX.By().get(
      CLX.Bw
        .SHOW_FORMAT_GAIN_LOSS_PERFCENT_AND_CURR_AS_PROFIT_INITIAL_INVESTMENT
    ),
    D = 6,
    g = "marketInfoUrl",
    p = "rolotecLangId",
    z = "rolotecHashValue",
    ao = "rolotecContractHashValue",
    ax = function (aK) {
      var P = aK ? I[aK] : null;
      return P || P === 0 ? P : I.DEFAULT;
    },
    aC = function (P, aK, aL) {
      return o.formatFullName(P, aK, aL);
    },
    e = function (P) {
      return P.getProdDescription() || "";
    },
    X = function (aL, P, aK) {
      aK = aK || CLX.Ca.DEFAULT;
      var aM = ax(P);
      if (aM === I.DEFAULT) {
        aM = o.localeDecimalPlaces(aK);
      }
      return aL === null || aL === undefined ? "" : o.formatNumber(aL, aM, aK);
    },
    ag = function (P) {
      return o.formatInputDate(P);
    },
    aF = function (aK, P) {
      return aK && P ? CLX.Dm(ah, [P, aK]) : aK;
    },
    K = function (aK, P) {
      var aL = Math.max(o.getDecimalPlaces(aK), ax(P));
      return o.formatNumber(aK, aL);
    },
    F = function (aK) {
      if (h) {
        aK = Number(aK);
        var P = D;
        return aK
          ? o.formatNumber(q ? aK : Math.abs(aK), P, undefined, true)
          : "";
      }
      return aK ? o.formatNumber(Math.abs(aK), 0) : "";
    },
    j = function (aM) {
      var P, aL, aK;
      if (aM) {
        aM = aM.replace(/\W/g, "").replace(/[_]/g, "");
        aL = u.exec(aM);
        if (aL && aL.length > 1) {
          P = aL[1];
          for (aK = 2; aK < aL.length; aK += 1) {
            if (aL[aK]) {
              P += aL[aK];
            }
          }
        }
      }
      return P;
    },
    az = function (aL) {
      var P,
        aK = 0;
      if (aL) {
        aL = aL.toUpperCase();
        while (aK < aL.length) {
          if (aK === 0) {
            P = "";
          } else {
            P += " ";
          }
          P += aL.substring(aK, aK + 4 > aL.length ? aL.length : aK + 4);
          aK += 4;
        }
      }
      return P;
    },
    y = function (aL) {
      var P,
        aK = 0;
      if (aL) {
        aL = aL.toUpperCase();
        while (aK < aL.length) {
          if (aK === 0) {
            P = "";
          } else {
            P += " ";
          }
          if (aK < 10) {
            P += aL.substring(aK, aK + 5 > aL.length ? aL.length : aK + 5);
            aK += 5;
          } else {
            P += aL.substring(aK, aK + 11 > aL.length ? aL.length : aK + 11);
            aK += 11;
          }
        }
      }
      return P;
    },
    au = function (aK) {
      var P;
      if (Y) {
        P = aK.getDescription() || aK.getCustomerName();
      } else {
        P = aK ? aK.getCustomerName() : null;
      }
      return P;
    },
    t = function (aN) {
      var P, aL, aP, aM, aK, aO;
      aL = aN.substr(0, 4);
      aP = aN.substring(4) + aL;
      aP = aP.toUpperCase();
      P = "";
      aM = 0;
      aK = "A";
      for (aO = 0; aO < aP.length; aO += 1) {
        if (isNaN(aP.charAt(aO))) {
          aM = aP.charCodeAt(aO) - aK.charCodeAt(0) + 10;
          P += aM;
        } else {
          P += aP.charAt(aO);
        }
      }
      return P;
    },
    am = function (aK) {
      var aN = aK.length,
        aM = "",
        aO = 0,
        P = 0,
        aL,
        aP;
      while (aO < aN) {
        aL = 9 - aM.length;
        if (aO + aL <= aN) {
          aP = aK.substring(aO, aO + aL);
        } else {
          aP = aK.substring(aO);
        }
        aP = aM.concat(aP);
        P = Number(aP) % 97;
        aO += aL;
        aM = P.toString();
      }
      return P;
    },
    i = function (P) {
      P = j(P);
      if (!P || P.length < ak || !P.match(aH)) {
        return false;
      }
      var aK = P.substr(0, 2).toUpperCase();
      if (C[aK] && P.length !== C[aK]) {
        return false;
      }
      return am(t(P)) === 1;
    },
    f = function (P) {
      if (P && V.length > 0) {
        P = P.replace(new RegExp(V, "g"), ".");
      }
      return P || "";
    },
    R = function (P) {
      if (P) {
        P = P.toString().replace(/[\. ,:\-]+/g, "");
      }
      return P;
    },
    N = function (P) {
      var aK;
      if (P) {
        P = P.toString().replace(/\s/g, "");
        P = P.toString().replace(/\./g, "");
        if (ap === true) {
          return R(P);
        }
        if (P.length <= 8) {
          aK = E.exec(an + P);
        } else {
          if (H) {
            aK = w.exec(P);
          } else {
            aK = c.exec(an + P);
          }
        }
      }
      return aK && aK.length ? f(aK[0]) : f(P);
    },
    aE = function (P) {
      return P.getLoanInterestRate() && P.getTypeCd() !== "FIXED_TERM_DEPOSIT"
        ? U.get("i18n_loan_and_mortgage_rate") +
            " " +
            P.getLoanInterestRate() +
            " %"
        : "";
    },
    ae = function (P) {
      return aE(P);
    },
    aa = function (aL) {
      var P, aK;
      P = aL.getTotalDeposits() || 0;
      aK = aL.getTotalWithdrawals() || 0;
      return P - aK;
    },
    aq = function (P) {
      return P.getProdTypeCode() === "ACCO"
        ? P.getProdDescription()
        : P.getOwnerName();
    },
    k = function (P) {
      return (
        (P.getCustodyAccountId && P.getCustodyAccountId()) ||
        (P.getType && P.getType() === "CUSTODY_ACCOUNT")
      );
    },
    m = function (aM) {
      var P,
        aK = CLX.Di(),
        aL;
      aL = aK && aK.get(CLX.Dl.DISPLAY_FORMAT.json);
      if (
        (!aL && aw.get(CLX.Bw.USE_DEFAULT_DISPLAY_FORMAT)) ||
        (aL && aL === CLX.Dc.SPEC)
      ) {
        if (aM.getFormattedNumber && aM.getFormattedNumber()) {
          if (a) {
            return aM.getFormattedNumber();
          }
          if (CLX.Ee(aM.getFormattedNumber(), false)) {
            P = aM.getNumber();
          } else {
            P = aM.getFormattedNumber();
          }
        }
        if (!P && aM.getNumber && aM.getNumber()) {
          P = aM.getNumber();
        }
        if (k(aM)) {
          P = R(aM.getFormattedNumber());
        } else {
          P = N(P);
        }
      } else {
        if (aM.getIban && aM.getIban() && i(aM.getIban(), false)) {
          P = az(j(aM.getIban()));
        } else {
          if (aM.getFormattedNumber && aM.getFormattedNumber()) {
            if (i(aM.getFormattedNumber(), false) && aD) {
              P = az(aM.getFormattedNumber());
            } else {
              if (k(aM)) {
                P = R(aM.getFormattedNumber());
              } else {
                P = aM.getFormattedNumber();
              }
            }
          } else {
            P = aM.getNumber();
          }
        }
      }
      return P;
    },
    T = function (aM) {
      var P,
        aK = CLX.Di(),
        aL;
      aL = aK && aK.get(CLX.Dl.DISPLAY_FORMAT.json);
      if (aL && CLX.Dc && aL === CLX.Dc.SPEC) {
        if (aM.getRefProdNoForm && aM.getRefProdNoForm()) {
          if (a) {
            return aM.getRefProdNoForm();
          }
          if (CLX.Ee(aM.getRefProdNoForm(), false)) {
            P = aM.getRefProdNo();
          } else {
            P = aM.getRefProdNoForm();
          }
        }
        if (!P && aM.getRefProdNo && aM.getRefProdNo()) {
          P = aM.getRefProdNo();
        }
        if (k(aM)) {
          P = R(aM.getRefProdNoForm());
        } else {
          P = N(P);
        }
      } else {
        if (
          aM.getRefProdIban &&
          aM.getRefProdIban() &&
          i(aM.getRefProdIban(), false)
        ) {
          P = az(j(aM.getRefProdIban()));
        } else {
          if (aM.getRefProdNoForm && aM.getRefProdNoForm()) {
            if (i(aM.getRefProdNoForm(), false) && aD) {
              P = az(aM.getRefProdNoForm());
            } else {
              if (k(aM)) {
                P = R(aM.getRefProdNoForm());
              } else {
                P = aM.getRefProdNoForm();
              }
            }
          } else {
            P = aM.getRefProdNo();
          }
        }
      }
      return P;
    },
    r = function (aM, P) {
      var aK,
        aL = P || ab;
      if (aM.isCurrencyAccount && aM.isCurrencyAccount()) {
        aK = G.productAccountScreenTitle(aM);
      } else {
        aK = aM.getTitle();
      }
      return o.formatString(aK, aL);
    },
    s = function (aK) {
      var P;
      if (aK.getCollectiveBookingTransactionDetails) {
        P = aK.getCollectiveBookingTransactionDetails();
      } else {
        P = [aK.rec];
      }
      if (P) {
        return true;
      }
      return false;
    },
    av = function (P) {
      var aK = ar.exec(P);
      return aK && aK.length > 1 ? aK[1] : null;
    },
    aG = function (P) {
      if (A === 5) {
        return P.getPortDescription ? (CLX.Aw(CLX.Du(P)) ? "" : CLX.Du(P)) : "";
      }
      return G.productNumberVisualizationSecondLineLeft(P);
    },
    aJ = function (aM, aK, P) {
      var aL;
      if (!aM || !P) {
        return "";
      }
      if (aK) {
        aL = P;
        aM = K(aM, aL);
      } else {
        aL = J;
        aM = o.formatNumber(aM, o.getDecimalPlaces(aM));
      }
      return aM + " " + aL;
    },
    S = function (aL) {
      var aK,
        P = CLX.O(aL.getCustomerNo()) && aL.getCustomerNo();
      if (
        aL.getCustomerNo() &&
        aw.get(CLX.Bw.USE_CUSTOMER_NO_FORMATTING_WITH_DOT)
      ) {
        if (P && P.length < 8) {
          for (aK = 0; aK < 8 - P.length; aK++) {
            P = "0" + P;
          }
        }
        P = P.substring(0, 4) + CLX.Dd + P.substring(4, 8);
      }
      return P;
    };
  G = {
    getCustomerInputDescription: (function () {
      var P = { customerName: CLX.Dq, customerNo: S };
      return (
        P[ac.get(CLX.Bw.QUICK_FILTER_CUSTOMER_SELECT_INPUT_DISPLAY)] || CLX.Dq
      );
    })(),
    getFormattedNumber: m,
    getBookingTextForWidget: function (aK) {
      var P = aK.getBookingText();
      if (aK.isSalaryPayment() && !P) {
        return U.get(ay);
      }
      if (CLX.B(aK.getBookingText())) {
        return aK.getBookingText()[0];
      }
      return aK.getBookingText();
    },
    checkIsCollectiveAsIndividual: function (P) {
      return s(P);
    },
    getBookingText2: function (P) {
      if (!s(P)) {
        if (P.isSalaryPayment()) {
          return null;
        }
        return P.getBookingText2();
      }
    },
    getRefProdNoForm: T,
    getLoanInterestRate: ae,
    getNetMoneyFlow: aa,
    formatDocumentOwner: aq,
    accountNumber: function (aK, P) {
      if (!P && aK && aK.getIban()) {
        return G.formatIBAN(aK.getIban());
      }
      return aK ? G.formatAccountNumber(aK.getNumber()) : "";
    },
    accountIBAN: function (P) {
      return G.formatIBAN(P.getIban());
    },
    accountOwnerFullAddress: function (P) {
      return CLX.Ce(
        [P.getCustAddrName(), P.getCustAddrStreet(), P.getAddrZipCodeAndCity()],
        CLX.Bv
      );
    },
    accountMaturityDate: function (P) {
      return o.formatDate(P.getMaturityDate());
    },
    alias: function (P) {
      if (P.val(aI)) {
        return P.val(aI);
      }
      return P.getAlias && P.getAlias();
    },
    aliasOrNumber: function (P) {
      return G.alias(P) || m(P);
    },
    aliasOrNumberAndName: function (P) {
      return (G.alias(P) || m(P)) + " / " + aC(P.getCustomerName());
    },
    aliasOrRubrik: function (P) {
      return (P.getAliasOrRubrikOrEmpty && P.getAliasOrRubrikOrEmpty()) || "";
    },
    rubrik: function (aK) {
      var P = aK.getAliasOrRubrik && aK.getAliasOrRubrik();
      return P || "";
    },
    customer: function (P) {
      if (P.getCustomerSurname()) {
        if (P.getCustomerName()) {
          return P.getCustomerSurname() + " " + P.getCustomerName();
        }
        return P.getCustomerSurname();
      }
      if (P.getCustomerName()) {
        return P.getCustomerName();
      }
      return "";
    },
    accountProductDescription: function (P) {
      return P.getAccoDescription() || "";
    },
    aliasOrName: function (aN, aK) {
      var P, aL, aM;
      if (aN) {
        aL = aN.getAlias();
        if (aL) {
          P = G.formatAlias(aL, aK);
        } else {
          P = aN.getCustomerName();
          aM = aN.getType();
          if (aM) {
            P += al + aM;
          }
          if (aK) {
            P = o.formatString(P, aK);
          }
        }
        if (aN.isProductClosed && aN.isProductClosed()) {
          P += " " + af;
        }
      }
      return P || "";
    },
    aliasOrRubricOrName: function (aM, aK) {
      var P, aN, aL;
      if (aM) {
        aN = G.rubrik(aM);
        if (aN) {
          P = G.formatAlias(aN, aK);
        } else {
          P = aM.getCustomerName();
          aL = aM.getType();
          if (aL) {
            P += al + aL;
          }
          if (aK) {
            P = o.formatString(P, aK);
          }
        }
        if (aM.isProductClosed && aM.isProductClosed()) {
          P += " " + af;
        }
      }
      return P || "";
    },
    aliasOrPortNumber: function (aK) {
      var P = aK.getAlias && aK.getAlias();
      return P || a ? aK.getFormattedPortNumber() : N(aK.getPortNumber());
    },
    number: function (P) {
      return m(P);
    },
    availableBalance: function (P) {
      return X(P.getAvailableProductValue(), P.getCurrency());
    },
    currency: function (P) {
      return P.getCurrency();
    },
    currentBalance: function (aL, aK) {
      var P = aL.getProductValue
        ? G.getProductValueOptAccrInterest(aL)
        : aL.getCurrentBalance();
      return X(P, aL.getCurrency(), aK);
    },
    currentBalanceAmountWithoutFormatting: function (P) {
      return P.getProductValue
        ? G.getProductValueOptAccrInterest(P)
        : P.getCurrentBalance();
    },
    currencyDecimalPlaces: ax,
    ammountWithCurrency: function (aK, P) {
      return aK ? aF(G.currentBalance(aK, P), aK.getCurrency()) : "";
    },
    loanCostValue: function (aL, aK) {
      var P = aL.getLoanCostValue();
      return X(P, aL.getCurrency(), aK);
    },
    marketValueCCurr: function (aL, aK) {
      var P = aL.getCuavMarketValueC();
      if (CLX.M(aL.getPortCurrency)) {
        return X(P, aL.getPortCurrency(), aK);
      }
      if (CLX.M(aL.getDisplayCurr)) {
        return X(P, aL.getDisplayCurr(), aK);
      }
      if (CLX.M(aL.getCurrency)) {
        return X(P, aL.getCurrency(), aK);
      }
      return "";
    },
    marketValueCCurrFixedTerm: function (aL, aK) {
      var P = aL.getCuavMarketValueC();
      if (CLX.M(aL.getPortCurrency)) {
        return X(P, aL.getPortCurrency(), aK);
      }
      if (CLX.M(aL.getDisplayCurr)) {
        return X(P, aL.getDisplayCurr(), aK);
      }
      if (CLX.M(aL.getCurrency)) {
        return X(P, aL.getCurrency(), aK);
      }
      return "";
    },
    loanValue: function (aL, aK) {
      var P = aL.getLoanValue();
      if (CLX.M(aL.getCurrency)) {
        return X(P, aL.getCurrency(), aK);
      }
      if (CLX.M(aL.getDisplayCurr)) {
        return X(P, aL.getDisplayCurr(), aK);
      }
      if (CLX.M(aL.getPortCurrency)) {
        return X(P, aL.getPortCurrency(), aK);
      }
      return "";
    },
    fixedTermDepositValue: function (aL, aK) {
      var P = aL.getLoanValue();
      if (CLX.M(aL.getCurrency)) {
        return X(P, aL.getCurrency(), aK);
      }
      if (CLX.M(aL.getDisplayCurr)) {
        return X(P, aL.getDisplayCurr(), aK);
      }
      if (CLX.M(aL.getPortCurrency)) {
        return X(P, aL.getPortCurrency(), aK);
      }
      return "";
    },
    fullName: function (P) {
      return aC(P.getName(), P.getSurname());
    },
    typeDescription: function (P) {
      return P.getTypeDescription() || "";
    },
    id: function (P) {
      return P.getId();
    },
    marketPlace: function (aM) {
      var P = [],
        aK = aM.getMarketShortDescription(),
        aL = aM.getDescription();
      if (aK) {
        P.push(aK);
      }
      if (aL) {
        P.push(aL);
      }
      return P.join(" / ") || "";
    },
    securityListingAlias: function (aM) {
      var aK = [],
        aL = aM.getMarketShortDescription(),
        P = aM.getCurrencyCode();
      if (aL) {
        aK.push(aL);
      }
      if (P) {
        aK.push(P);
      }
      return aK.join(" - ") || "";
    },
    securityListing: function (aM) {
      var P = [],
        aK = G.securityListingAlias(aM),
        aL = aM.getMarketPlace();
      if (aK) {
        P.push(aK);
      }
      if (aL) {
        P.push(aL);
      }
      return P.join(" / ") || "";
    },
    formatSecurityDetailsUrl: function (aK, aQ, aS, aT, aM, aN, aL, aP) {
      var P = aP || ac.get(Z.MARKET_INFO_SECURITY_DETAILS_URL),
        aR = U.get("rolotecLangId"),
        aO = U.get("rolotecHashValue");
      if (!aQ) {
        P = P.replace("/details?q=", "/search/simple?term=");
        P = P.replace(",{maplCd}", "");
      } else {
        P = P.replace("{maplCd}", aQ);
      }
      P = P.replace("{secuNo}", aK || "");
      P = P.replace("{isin}", aM || "");
      P = P.replace("{secuType}", aN || "");
      P = P.replace("{userId}", aL || "");
      P = P.replace("{currMnemonic}", aS || "");
      P = P.replace("{currCdExt}", aT || "");
      P = P.replace("{hashValue}", aO);
      P = P.replace("{langId}", aR);
      return P;
    },
    positionSymbol: function (aK) {
      var P = aK.getSymbol();
      return CLX.N(P) ? P : null;
    },
    positionTitle: function (aM, P) {
      var aK = r(aM),
        aL = P || ab;
      return o.formatString(aK, aL);
    },
    positionHolding: function (aK) {
      var P = aK.getHolding();
      return aJ(P, aK.hasNominalValue(), aK.getCurrency());
    },
    positionBlockedQuantity: function (aK) {
      var P = aK.getBlockedQuantity();
      return aJ(P, aK.hasNominalValue(), aK.getCurrency());
    },
    positionPendingQuantity: function (aK) {
      var P = aK.getPendingQuantity();
      return aJ(P, aK.hasNominalValue(), aK.getCurrency());
    },
    positionPriceFrom: function (aK) {
      var P;
      if (aK.getPrice()) {
        P = o.formatDate(aK.getPriceFrom());
      }
      return P;
    },
    positionCurrentPrice: function (aK) {
      var P;
      if (aK.getPrice()) {
        P =
          G.formatPrice(
            aK.getPrice(),
            aK.getCurrency(),
            aK.hasNominalValue()
          ) || "";
        P += aK.hasNominalValue() ? " % " : "";
      }
      return P;
    },
    positionPurchasePrice: function (P) {
      return G.formatPrice(
        P.getPurchasePrice(),
        P.getCurrency(),
        P.isNominalCurrency()
      );
    },
    positionPurchaseValue: function (aM) {
      var aL,
        P = aM.getPurchaseValuePortCurr(),
        aK = aM.getPurchaseValue();
      if (P && aK && aM.getCurrency() !== aM.getProdValueCurrency()) {
        aL =
          G.formatPrice(P, aM.getProdValueCurrency(), aM.isNominalCurrency()) +
          " / " +
          G.formatPrice(aK, aM.getCurrency(), aM.isNominalCurrency());
      } else {
        if (P) {
          aL = G.formatPrice(
            P,
            aM.getProdValueCurrency(),
            aM.isNominalCurrency()
          );
        } else {
          if (aK) {
            aL = G.formatPrice(aK, aM.getCurrency(), aM.isNominalCurrency());
          }
        }
      }
      return aL;
    },
    positionCostPriceNetOrGross: function (aL) {
      var P = aL.getCostPriceGross() || aL.getCostPriceNet(),
        aK = aL.getCurrency();
      return G.formatAmountWithCurrency(P, aK);
    },
    positionMaturityDate: function (P) {
      return o.formatDate(P.getMaturityDate());
    },
    positionFinalMaturity: function (aK) {
      var P = aK.getYieldToMaturity();
      return P ? G.formatPercentage(P * 100) + " %" : null;
    },
    positionTimeToMaturity: function (aK) {
      var P = aK.getTimeToMaturity();
      if (P === 1) {
        P = String(P) + " " + U.get("i18n_day");
      } else {
        if (P > 1) {
          P = String(P) + " " + U.get("i18n_days");
        }
      }
      return P;
    },
    positionPurchaseExchangeRate: function (aK) {
      var P = aK.getExchangeRatePurchaseValue();
      if (Number(aK.getExchangeRatePurchaseValue()) === 1) {
        return "";
      }
      if (!P) {
        return null;
      }
      return o.formatNumber(P, 5);
    },
    positionPurchaseExchangeRateAndCurr: function (aK) {
      var P = aK.getExchangeRatePurchaseValue();
      if (!P) {
        return null;
      }
      if (Number(P) === 1) {
        return "";
      }
      if (!aK.getCurrency() || !aK.getProdValueCurrency()) {
        return o.formatNumber(P, 5);
      }
      return (
        aK.getCurrency() +
        "/" +
        aK.getProdValueCurrency() +
        " " +
        o.formatNumber(P, 5)
      );
    },
    positionExchangeRateCol: function (P) {
      if (Number(P.getExchangeRate()) === 1) {
        return "";
      }
      return o.formatNumber(P.getExchangeRate(), 5);
    },
    positionExchangeRate: function (aK) {
      var P = aK.getExchangeRate();
      if (!P) {
        return null;
      }
      return (
        aK.getCurrency() +
        "/" +
        aK.getProdValueCurrency() +
        " " +
        o.formatNumber(P, 5)
      );
    },
    positionExchangeRateProfitPortCurr: function (aM) {
      var aL,
        aK = aM.getExchangeRateProfit(),
        P = aM.getPurchaseValuePortCurr();
      if (aK && P) {
        aL = (P * aK) / 100;
        aL = G.formatCurrencyAmount(aM.getProdValueCurrency(), aL);
      }
      return aL;
    },
    positionExchangeRateProfitPercent: function (aL) {
      var aK,
        P = aL.getExchangeRateProfit();
      if (P < 0.01 && P > -0.01) {
        aK = "< 0.01%";
      } else {
        if (P) {
          aK = o.formatNumber(aL.getExchangeRateProfit(), 2) + " %";
        }
      }
      return aK;
    },
    positionExchangeRateProfit: function (aM) {
      var P, aL, aK;
      aL = G.positionExchangeRateProfitPercent(aM);
      aK = G.positionExchangeRateProfitPortCurr(aM);
      if (!ac.get(Z.SHOW_PERCENTAGE_WITH_PROFIT_VALUES_ON_POSITION_DETAIL)) {
        return aK;
      }
      if (aL && aK) {
        P = aL + " / " + aK;
      } else {
        if (aL) {
          P = aL;
        } else {
          if (aK) {
            P = aK;
          }
        }
      }
      return P;
    },
    positionProfitAbsolute: function (aM) {
      var aL,
        aK,
        P = 0;
      aK = aM.getProfitPortCurr();
      aL = (aM.getExchangeRateProfit() * aM.getPurchaseValuePortCurr()) / 100;
      if (aK) {
        P = P + aK;
      }
      if (aL && !aM.getNrMarketProfitPortCurr()) {
        P = P + aL;
      }
      if (!P || P === 0) {
        return null;
      }
      return G.formatCurrencyAmount(aM.getProdValueCurrency(), P);
    },
    positionProfitPercent: function (aL) {
      var P = aL.getAbsoluteProfitPercent(),
        aK;
      if (ac.get(Z.SHOW_ONLY_PORT_CURRENCY_VALUES_ON_POSITION_DETAIL)) {
        aK =
          100 *
            ((((aL.getPrice() * (aL.getExchangeRate() || 1)) /
              aL.getPurchasePrice()) *
              aL.getPurchaseValuePortCurr()) /
              aL.getPurchaseValue()) -
          1;
        return o.formatNumber(aK, 2) + "%";
      }
      if (!P || P === 0) {
        return null;
      }
      if (P < 0.01 && P > -0.01) {
        return "< 0.01%";
      }
      return o.formatNumber(P, 2) + " %";
    },
    positionRateChangePercent: function (P) {
      var aK = P.getRateChangePercent();
      if (!aK || aK === 0) {
        return null;
      }
      if (aK < 0.01 && aK > -0.01) {
        return "0.01 %";
      }
      return o.formatNumber(aK, 2) + " %";
    },
    positionMarketValueSubtractCostValueWithOutCurrency: function (aM) {
      var aK = aM.getCuavMarketValueC(),
        aL = aM.getCostValueCurr(),
        P = 0;
      if (aK && aL) {
        P = aK - aL;
      }
      if (P === 0) {
        return null;
      }
      return P;
    },
    positionMarketValueSubtractCostValue: function (P) {
      return G.formatCurrencyAmount(
        P.getProdValueCurrency(),
        G.positionMarketValueSubtractCostValueWithOutCurrency(P)
      );
    },
    positionProfit: function (aM) {
      var P, aL, aK;
      if (ac.get(Z.SHOW_PRFT_SINCE_INIT_INVESTMENT)) {
        if (W) {
          aL = G.positionRateChangePercent(aM);
          aK = G.positionMarketValueSubtractCostValue(aM);
        } else {
          aL = G.positionProfitPercent(aM);
          aK = G.positionProfitAbsolute(aM);
        }
        if (aK && aL) {
          P = aL + " / " + aK;
        } else {
          if (aK) {
            P = aK;
          } else {
            if (aL) {
              P = aL;
            }
          }
        }
      }
      return P;
    },
    positionMarketProfitPercent: function (aL) {
      var P,
        aK = aL.getMarketProfit();
      if (aK && aK < 0.01 && aK > -0.01) {
        P = "< 0.01%";
      } else {
        if (aK) {
          P = o.formatNumber(aK, 2) + " %";
        }
      }
      return P;
    },
    positionMarketProfitPortCurr: function (aL) {
      var P,
        aK = aL.getMarketProfitPortCurr();
      if (aK) {
        P = G.formatCurrencyAmount(aL.getProdValueCurrency(), aK);
      }
      return P;
    },
    positionMarketProfit: function (aM) {
      var P, aL, aK;
      aL = G.positionMarketProfitPercent(aM);
      aK = G.positionMarketProfitPortCurr(aM);
      if (!ac.get(Z.SHOW_PERCENTAGE_WITH_PROFIT_VALUES_ON_POSITION_DETAIL)) {
        return aK;
      }
      if (aL && aK) {
        P = aL + " / " + aK;
      } else {
        if (aL) {
          P = aL;
        } else {
          if (aK) {
            P = aK;
          }
        }
      }
      return P;
    },
    positionPortfolioPercentage: function (aM) {
      var aK, aL, P;
      aK = aM.getMarketValue();
      if (aM.getAccruedInterestPortCurr()) {
        aK += aM.getAccruedInterestPortCurr();
      }
      aL = aM.getPortValuePortCurr();
      if (aM.getPortAccruedInterestPortCurr()) {
        aL += aM.getPortAccruedInterestPortCurr();
      }
      if (!aK || !aL) {
        return "";
      }
      P = (aK / aL) * 100;
      if (P < 0.01 && P > -0.01 && P !== 0) {
        return "< 0.01%";
      }
      return o.formatNumber((aK / aL) * 100, 2) + " %";
    },
    positionPortfolioTotalValue: function (aM) {
      var aL,
        aK,
        P = 0;
      aK = aM.getMarketValue();
      aL = aM.getAccruedInterestPortCurr();
      if (aL) {
        P += aL;
      }
      if (aK) {
        P += aK;
      }
      if (!P || P === 0) {
        return null;
      }
      return G.formatCurrencyAmount(aM.getPortCurrency(), P);
    },
    positionInterest: function (P) {
      if (P.getAccruedInterestPortCurr()) {
        return G.formatCurrencyAmount(
          P.getPortCurrency(),
          P.getAccruedInterestPortCurr()
        );
      }
      return null;
    },
    positionInterestRate: function (aK) {
      var P = aK.getInterestRate();
      return P ? P + "%" : null;
    },
    positionInterestFrequency: function (aK) {
      var P = aK.getInterestFrequency();
      return n[P] ? U.get(n[P]) : P;
    },
    positionMarketValue: function (aM) {
      var aL,
        P,
        aN = aM.getCurrency(),
        aK = aM.getProdValueCurrency();
      aL = G.formatCurrencyAmount(aN, aM.getBalance());
      P = G.formatCurrencyAmount(aK, aM.getMarketValue());
      if (aN === aK) {
        return aL;
      }
      if (ac.get(Z.SHOW_ONLY_PORT_CURRENCY_VALUES_ON_POSITION_DETAIL)) {
        return ac.formatCurrencyAmount(
          aK,
          (aM.getMarketValue() * aM.getPurchaseValuePortCurr()) /
            aM.getPurchaseValue()
        );
      }
      if (!aL) {
        return P;
      }
      if (!P) {
        return aL;
      }
      return P + " / " + aL;
    },
    positionMarketValuePositionCurr: function (P) {
      return G.formatAmount(P.getAccountBalance(), P.getCurrency());
    },
    positionMarketValuePortfolioCurr: function (P) {
      return G.formatAmount(P.getMarketValue(), P.getCurrency());
    },
    positionEndYearProfit: function (aK) {
      var P = aK.getEndYearProfitPercentage();
      if (!P) {
        return null;
      }
      if (P < 0.01 && P > -0.01) {
        P = "< 0.01";
      }
      return P + " %";
    },
    previousDayClosing: function (aM) {
      var aK, P, aL;
      aK = aM.getRate();
      P = aM.getRateUnit();
      aL = o.formatDate(new Date(aM.getRateDate()));
      return X(aK, P) + " " + P + " (" + aL + ")";
    },
    lastTraded: function (aM) {
      var aK, P, aL;
      aK = aM.getRate();
      P = aM.getRateUnit();
      aL = o.formatNumericDateTime(new Date(aM.getRateDate()));
      return X(aK, P) + " " + P + " (" + aL + ")";
    },
    currentValue: function (aL) {
      var aK, P;
      aK = aL.getRate();
      P = aL.getRateUnit();
      return X(aK, P) + " " + P;
    },
    roundLot: function (aL) {
      var aK = aL.getRoundLot(),
        P = aL.isAmountUnitPiece() ? J : aL.getCurrencyCode();
      if (aK === 0 && aL.getNominalFlag() === 1) {
        aK = aL.getNominalValue();
      }
      return o.formatNumber(aK, o.getDecimalPlaces(aK)) + " " + P;
    },
    tradeUnit: function (aL) {
      var P = aL.getTradeUnit(),
        aK = aL.isAmountUnitPiece() ? J : aL.getCurrencyCode();
      return o.formatNumber(P, o.getDecimalPlaces(P)) + " " + aK;
    },
    formatNumber: o.formatNumber,
    formatNumberWithPattern: o.formatNumberWithPattern,
    formatFullName: aC,
    formatFullNameAccOwners: e,
    formatQuantity: F,
    formatAmount: X,
    formatInputDate: ag,
    formatAmountWithCurrency: function (aK, P, aL) {
      return aF(X(aK, P, aL), P);
    },
    getAmountWithCurrency: function (aK, P) {
      return aF(aK, P);
    },
    formatAmountWithoutRounding: K,
    accoountSelectLongText: function (P) {
      var aL, aM, aO, aN, aK, aP;
      aL = P.getAlias();
      aK = aC(P.getCustName(), P.getCustSurname());
      aO = G.currency(P);
      aN = G.currentBalance(P);
      aM = m(P);
      aP = aM + " - " + aO + " - " + aL + " - " + aK + " - " + aN;
      return [aP, aP];
    },
    accountSelectColumnsText: function (P) {
      var aO, aL, aN, aM, aK, aQ, aP;
      aO = P.getAliasOrProductDescriptionName
        ? P.getAliasOrProductDescriptionName()
        : P.getAlias() ||
          P.getDescription() ||
          P.getProductName() ||
          P.getActtDescription();
      aO = aO ? " - " + aO : "";
      aK = P.getCustomerName ? P.getCustomerName() : "";
      aN = G.currency(P);
      aM = G.currentBalance(P);
      aL = m(P);
      aP = aL + aO;
      aQ = aL + " - " + aN + aO + " - " + aK + " - " + aM;
      return [aQ, aP, aK, aN, aM];
    },
    accountSelectColumnsForOldComp: function (P) {
      var aL = CLX.$.merge([], G.accountSelectColumnsText(P)),
        aK;
      aK = aL[2];
      aL[2] = aL[3];
      aL[3] = aK;
      return aL;
    },
    accountTypeDescription: function (aN, aK) {
      var P, aL, aM;
      if (aN) {
        aM = aN.getType();
        if (aM) {
          P = aM;
        } else {
          aL = aN.getAlias();
          if (aL) {
            P = G.formatAlias(aL, aK);
          } else {
            P = aN.getCustomerName();
          }
        }
      }
      if (aN.isProductClosed()) {
        P += " " + af;
      }
      return P || "";
    },
    accountTitle: function (aL) {
      var aK =
          G.formatAlias(aL.getAlias()) ||
          G.accountNumberBySetting(undefined, aL) ||
          G.formatAccountNumber(aL.getNumber()),
        P = aL.getType();
      return P ? aK + l + P : aK;
    },
    accountNumberBySetting: function (aL, aK) {
      var P;
      if (aL) {
        P = aL.getDisplayFormat();
      }
      if (P && P === CLX.Dc.SPEC) {
        return aK.getNumber();
      }
      if (CLX.M(aK.getIban) && aK.getIban()) {
        return G.formatIBAN(aK.getIban());
      }
      if (CLX.Ee(aK.getFormattedNumber(), false)) {
        return G.formatIBAN(aK.getFormattedNumber());
      }
      return aK.getFormattedNumber();
    },
    portfolioSelectLongText: function (P) {
      var aL, aM, aO, aN, aK, aP;
      aL = P.getAlias();
      aK = aC(P.getCustomerName());
      aO = P.getCurrency();
      aN = X(G.getProductValueOptAccrInterest(P));
      aM = m(P);
      aP = aM + " - " + aO + " - " + aL + " - " + aK + " - " + aN;
      return [aP, aP];
    },
    portfolioSelectColumnsText: function (P) {
      var aO, aL, aN, aM, aK, aQ, aP;
      if (P.getAliasOrProductDescriptionName) {
        aO = P.getAliasOrProductDescriptionName();
      }
      aO = aO || P.getAlias();
      if (!aO || CLX.$.trim(aO) === "") {
        aO = P.getDescription() || G.getProductDesc(P);
      }
      aO = aO ? " - " + aO : "";
      aK = P.getCustomerName ? P.getCustomerName() : "";
      aN = P.getCurrency();
      aM = X(G.getProductValueOptAccrInterest(P));
      aL = m(P);
      aP = aL + aO;
      aQ = aL + " - " + aN + aO + " - " + aK + " - " + aM;
      return [aQ, aP, aK, aN, aM];
    },
    portfolioNumberAndAliasOrRubric: function (aL) {
      var P = G.aliasOrRubrik(aL) || "",
        aK = ab;
      if (P && o && o.formatString) {
        P = o.formatString(P, aK);
      }
      return m(aL) + (P ? l + P : "");
    },
    portfolioSelectColumnsFirstLine: function (P) {
      return [
        G.portfolioSelectColumnsText(P)[1],
        G.portfolioSelectColumnsText(P)[3],
      ];
    },
    portfolioSelectColumnsSecondLine: function (P) {
      return [
        G.portfolioSelectColumnsText(P)[2],
        G.portfolioSelectColumnsText(P)[4],
      ];
    },
    portfolioSelectColumnsInputText: function (P) {
      return G.portfolioSelectColumnsText(P)[0];
    },
    productShortDescription: function (aK) {
      var aN,
        aL,
        P = "",
        aM = " / ";
      if (aK) {
        if (A && A === 3) {
          aM = " - ";
          P = m(aK);
          if (G.currency(aK)) {
            P += aM + G.currency(aK);
          }
          if (G.rubrik(aK)) {
            P += aM + G.rubrik(aK);
          }
        } else {
          if (A && A === 2) {
            aM = " - ";
            P = m(aK);
            if (G.currency(aK)) {
              P += aM + G.currency(aK);
            }
            if (G.aliasOrName(aK)) {
              P += aM + G.aliasOrName(aK);
            }
          } else {
            aN = G.aliasOrNumber(aK) || "";
            if (aN) {
              P = aN;
            }
            aL = G.ammountWithCurrency(aK) || "";
            if (aL) {
              if (P) {
                P = P + aM + aL;
              } else {
                P = aL;
              }
            }
            if (O) {
              return G.accountSelectColumnsText(aK)[0];
            }
          }
        }
        return P;
      }
      return "";
    },
    productFullDescription: function (aK) {
      var aP,
        aN,
        aM,
        aL,
        P = "",
        aO = " / ";
      if (aK) {
        if (A && A === 3) {
          aO = " - ";
          P = m(aK);
          if (G.currency(aK)) {
            P += aO + G.currency(aK);
          }
          if (G.rubrik(aK)) {
            P += aO + G.rubrik(aK);
          }
          if (G.currentBalance(aK)) {
            P += aO + G.currentBalance(aK);
          }
          aM = CLX.Ea(aK);
          if (aM && aM !== G.rubrik(aK)) {
            P += aO + CLX.Ea(aK);
          }
        } else {
          if (A && A === 2) {
            aO = " - ";
            P = m(aK);
            if (G.currency(aK)) {
              P += aO + G.currency(aK);
            }
            if (G.aliasOrRubricOrName(aK)) {
              P += aO + G.aliasOrRubricOrName(aK);
            }
            if (G.customerName(aK)) {
              P += aO + G.customerName(aK);
            }
            if (G.currentBalance(aK)) {
              P += aO + G.currentBalance(aK);
            }
          } else {
            aP = G.aliasOrNumber(aK) || "";
            if (aP) {
              P = aP;
            }
            aN = G.ammountWithCurrency(aK) || "";
            if (aN) {
              if (P) {
                P = P + aO + aN;
              } else {
                P = aN;
              }
            }
            aM =
              (aK.getProductDescription && aK.getProductDescription()) ||
              (aK.getTypeDescription && aK.getTypeDescription()) ||
              "";
            if (aM) {
              if (P) {
                P = P + aO + aM;
              } else {
                P = aM;
              }
            }
            aL = aK.getCustomerName ? aK.getCustomerName() : "";
            if (aL) {
              if (P) {
                P = P + aO + aL;
              } else {
                P = aL;
              }
            }
            if (O) {
              return G.accountSelectColumnsText(aK)[0];
            }
          }
        }
        return P;
      }
      return "";
    },
    productFullDescriptionWithAccType: function (aK) {
      var aP,
        aN,
        aM,
        aL,
        P = "",
        aO = " / ";
      if (aK) {
        if (A && A === 5) {
          aP = G.aliasOrNumber(aK) || "";
          if (aP) {
            P = aP;
          }
          aL = aK.getProdDescription ? aK.getProdDescription() : "";
          if (aL) {
            if (P) {
              P = P + aO + aL;
            } else {
              P = aL;
            }
          }
        } else {
          if (A && A === 3) {
            aO = " - ";
            P = m(aK);
            if (G.currency(aK)) {
              P += aO + G.currency(aK);
            }
            if (G.rubrik(aK)) {
              P += aO + G.rubrik(aK);
            }
            if (G.currentBalance(aK)) {
              P += aO + G.currentBalance(aK);
            }
            aM = CLX.Ea(aK);
            if (aM && aM !== G.rubrik(aK)) {
              P += aO + CLX.Ea(aK);
            }
          } else {
            if (A && A === 2) {
              aO = " - ";
              P = m(aK);
              if (G.currency(aK)) {
                P += aO + G.currency(aK);
              }
              if (G.aliasOrName(aK)) {
                P += aO + G.aliasOrName(aK);
              }
              if (G.customerName(aK)) {
                P += aO + G.formatFullNameAccOwners(aK);
              }
              if (G.currentBalance(aK)) {
                P += aO + G.currentBalance(aK);
              }
            } else {
              aP = G.aliasOrNumber(aK) || "";
              if (aP) {
                P = aP;
              }
              aN = G.ammountWithCurrency(aK) || "";
              if (aN) {
                if (P) {
                  P = P + aO + aN;
                } else {
                  P = aN;
                }
              }
              aM = (aK.getTypeDescription && aK.getTypeDescription()) || "";
              if (aM) {
                if (P) {
                  P = P + aO + aM;
                } else {
                  P = aM;
                }
              }
              aL = aK.getProdDescription ? aK.getProdDescription() : "";
              if (aL) {
                if (P) {
                  P = P + aO + aL;
                } else {
                  P = aL;
                }
              }
              if (O) {
                return G.accountSelectColumnsText(aK)[0];
              }
            }
          }
        }
        return P;
      }
      return "";
    },
    productFullDescriptionWithAccTypeNoOwners: function (aK) {
      var aP,
        aN,
        aM,
        aL,
        P = "",
        aO = " / ";
      if (aK) {
        if (A && A === 5) {
          aP = G.aliasOrNumber(aK) || "";
          if (aP) {
            P = aP;
          }
          aL = aK.getProdDescription ? aK.getProdDescription() : "";
          if (aL) {
            if (P) {
              P = P + aO + aL;
            } else {
              P = aL;
            }
          }
        } else {
          if (A && A === 3) {
            aO = " - ";
            P = m(aK);
            if (G.currency(aK)) {
              P += aO + G.currency(aK);
            }
            if (G.rubrik(aK)) {
              P += aO + G.rubrik(aK);
            }
            if (G.currentBalance(aK)) {
              P += aO + G.currentBalance(aK);
            }
            aM = CLX.Ea(aK);
            if (aM && aM !== G.rubrik(aK)) {
              P += aO + CLX.Ea(aK);
            }
          } else {
            if (A && A === 2) {
              aO = " - ";
              P = m(aK);
              if (G.currency(aK)) {
                P += aO + G.currency(aK);
              }
              if (G.aliasOrName(aK)) {
                P += aO + G.aliasOrName(aK);
              }
              if (G.customerName(aK)) {
                P += aO + G.formatFullNameAccOwners(aK);
              }
              if (G.currentBalance(aK)) {
                P += aO + G.currentBalance(aK);
              }
            } else {
              aP = G.aliasOrNumber(aK) || "";
              if (aP) {
                P = aP;
              }
              aN = G.ammountWithCurrency(aK) || "";
              if (aN) {
                if (P) {
                  P = P + aO + aN;
                } else {
                  P = aN;
                }
              }
              aM = (aK.getTypeDescription && aK.getTypeDescription()) || "";
              if (aM) {
                if (P) {
                  P = P + aO + aM;
                } else {
                  P = aM;
                }
              }
              aL = aK.getAccoDescription() || "";
              if (aL) {
                if (P) {
                  P = P + aO + aL;
                } else {
                  P = aL;
                }
              }
              if (O) {
                return G.accountSelectColumnsText(aK)[0];
              }
            }
          }
        }
        return P;
      }
      return "";
    },
    getPerformanceRate: function (P) {
      return M ? P.getPerformanceMoney() : P.getPerformanceTime();
    },
    getPerformanceRateCumulated: function (P) {
      return M
        ? P.getPerformanceMoneyCumulated()
        : P.getPerformanceTimeCumulated();
    },
    getPerfPortfolioIndex: function (P) {
      return P.getPerfPortfolioIndex();
    },
    formatPerformance: function (aL) {
      var P = "",
        aK = G.getPerformanceRate(aL);
      if (aK) {
        P = G.formatNumber(aK, 2) + "%";
        if (aK >= 0) {
          P = "+" + P;
        }
      }
      return P;
    },
    getBriefAccountDescription: function (aK) {
      var P, aL, aM;
      if (aK) {
        aL = aK.getAlias();
        if (aL) {
          P = o.formatString(aL, ab);
        } else {
          P = aK.getCustomerName();
          aM = m(aK);
          if (P) {
            if (aK) {
              P += " " + aM;
            }
          } else {
            if (aM) {
              P = aM;
            } else {
              P = "";
            }
          }
        }
        if (aK.isProductClosed()) {
          P += " " + af;
        }
      }
      return P || "";
    },
    getCuacDescriptionAndNo: function (aM) {
      var aL = aM.getProductDesc(),
        aK = a ? aM.getFormattedNumber() : aM.getProductNumber(),
        P = "";
      if (aL) {
        P = aL;
        if (aK) {
          P = P + " " + aK;
        }
      } else {
        P = aK;
      }
      return P;
    },
    getAccountFullDescription: function (aP) {
      var P = "",
        aO,
        aM,
        aK,
        aL,
        aN = " / ";
      aO = (aP.getFormattedNumber && aP.getFormattedNumber()) || "";
      if (aO) {
        P = aO + aN;
      }
      aK =
        (aP.getProductDescription && aP.getProductDescription()) ||
        G.rubrik(aP) ||
        (aP.getProductName && aP.getProductName()) ||
        "";
      if (aK) {
        P = P + aK + aN;
      }
      aM = G.ammountWithCurrency(aP) || "";
      if (aM) {
        P = P + aM + aN;
      }
      aL = (aP.getCustomerName && aP.getCustomerName()) || "";
      if (aL) {
        P = P + aL;
      }
      return P;
    },
    formatPrice: function (aM, P, aK, aN) {
      var aO = aK || !P,
        aL = x ? o.getDecimalPlaces(aM) : 2;
      if (aO) {
        if (aM && aM.toFixed) {
          return aM.toFixed(aL);
        }
        return aM;
      }
      return G.formatAmountWithCurrency(aM, P, aN);
    },
    formatFxRate: function (P) {
      return o.formatNumberWithPattern(P, CLX.Ca.EXCHANGE_RATES);
    },
    formatAccountNumber: N,
    prodNumberFormattedNotIban: function (P) {
      if (a && P.getFormattedNumber && P.getFormattedNumber()) {
        return P.getFormattedNumber();
      }
      return N(P.getNumber());
    },
    prodNoAndAliasOrProdDescName: function (aK) {
      var aL,
        aN,
        aM = " - ",
        P = "";
      aN = m(aK);
      if (aN) {
        P = aN;
      }
      aL = aK.getAliasOrProductDescriptionName
        ? aK.getAliasOrProductDescriptionName()
        : aK.getAlias() ||
          aK.getDescription() ||
          (aK.getProductDescription ? aK.getProductDescription() : undefined) ||
          (aK.getProductName ? aK.getProductName() : "");
      if (aL) {
        P = P + aM + aL;
      }
      return P;
    },
    getProductDesc: function (P) {
      var aK;
      if (P.getProductDesc) {
        aK = P.getProductDesc();
      } else {
        if (P.getProductDescription) {
          aK = P.getProductDescription();
        }
      }
      return aK;
    },
    prodDescTableColumn1stLine: function (P) {
      var aK = "",
        aL = m(P) || "";
      switch (A) {
        case 3:
          aK = aL + (G.getProductDesc(P) ? " " + G.getProductDesc(P) : "");
          break;
        case 2:
          aK = aL;
          break;
        default:
          aK = G.aliasOrNumber(P);
      }
      return aK;
    },
    prodDescTableColumn2ndLine: function (P) {
      var aK = "";
      switch (A) {
        case 3:
          if (P.getIban && P.getIban()) {
            aK = G.accountIBAN(P);
          }
          break;
        case 2:
          aK = G.alias(P) || P.getProductDescription();
          break;
        default:
          if (P.getProductDescription && P.getProductDescription()) {
            aK = P.getProductDescription();
          }
      }
      return aK;
    },
    accountSelectorFormat: function (aK) {
      var P;
      if (O) {
        P = G.accountSelectColumnsText(aK);
      } else {
        P = G.accoountSelectLongText(aK);
      }
      return P;
    },
    portfolioSelectorFormat: function (aK) {
      var P;
      if (ad) {
        P = G.portfolioSelectColumnsText(aK);
      } else {
        P = G.portfolioSelectLongText(aK);
      }
      return P;
    },
    formatManagementTypeAndGoal: function (aL, aK) {
      var P;
      if (aL) {
        P = aL;
      }
      if (aK) {
        P += aL ? B + aK : aK;
      }
      return P;
    },
    formatSortCode: function (aM) {
      var P,
        aK = /(\d\d)(\d\d)(\d\d)$/,
        aL;
      aL = aK.exec("000000" + CLX.Ed(String(aM)));
      if (aL && aL.length === 4) {
        P = aL[1] + "-" + aL[2] + "-" + aL[3];
      }
      return CLX.N(P) && CLX.N(aM) ? P : aM ? String(aM) : "";
    },
    formatIBAN: az,
    formatRIB: y,
    accountCustomers: au,
    formatBicSwiftCode: function (P) {
      return P;
    },
    formatBankInternationalCode: function (P) {
      return P;
    },
    formatVerifyChallenge: function (aM) {
      var P,
        aK = /(\d\d\d\d)(\d\d\d\d)$/,
        aL;
      aL = aK.exec(aM);
      if (aL && aL.length === 3) {
        P = aL[1] + " " + aL[2];
      }
      return P;
    },
    formatReferenceNumber: function (aM) {
      var P = aM,
        aL,
        aK;
      if (aM && aM.length > 0) {
        aM = aM.replace(/\s/g, "");
        if (aM.length > 0) {
          while (aM.length < 27) {
            aM = "0" + aM;
          }
          aL = aM.length % 5;
          aK = aL;
          if (aM.length > aL) {
            P = aM.substring(0, aL);
            while (aK < aM.length) {
              P += " ";
              P += aM.substring(aK, aK + 5 > aM.length ? aM.length : aK + 5);
              aK += 5;
            }
          }
        }
      }
      return P;
    },
    formatPhoneNumber: function (aL) {
      var P,
        aO = aL.length() - 4,
        aK,
        aM,
        aN = "...";
      if (aL !== null) {
        if (aO > 0) {
          aK = aL.substring(aO);
          aM = aL.substring(0, 4);
        }
        P = aM + aN + aK;
      }
      return P;
    },
    formatPcNo: function (aM) {
      var P,
        aK = /(\d\d)([\d]{1,6})(\d)/,
        aL;
      aM = aM.replace(/-/g, "");
      aL = aK.exec(CLX.Ed(String(aM)));
      if (aL && aL.length === 4) {
        P = aL[1] + "-" + aL[2] + "-" + aL[3];
      }
      return CLX.N(P) && CLX.N(aM) ? P : aM ? String(aM) : "";
    },
    formatAddrZipCodeAndCity: function (aK, aM, aL) {
      var P;
      if (!aL) {
        aL = " ";
      }
      P = aK + aL + aM;
      return P;
    },
    formatAlias: function (aK, P) {
      var aL = P || ab;
      return aK ? o.formatString(aK, aL) : null;
    },
    formatCurrencyAmount: function (P, aL, aK) {
      P = P || "";
      aL = X(aL, P, aK);
      return aL && P ? CLX.Dm(ah, [P, aL]) : aL;
    },
    formatPositionTitle: function (aM, P) {
      var aK = G.getPositionTitle(aM),
        aL = P || ab;
      return o.formatString(aK, aL);
    },
    formatPositionType: function (aK, P) {
      return aK.isCurrencyAccount() && P ? P : o.formatString(aK.getType());
    },
    formatPositionAssetClass: function (aK, P) {
      return aK.isCurrencyAccount() && P
        ? P
        : o.formatString(aK.getAssetClass());
    },
    formatPositionSubAssetClass: function (aK, P) {
      return aK.isCurrencyAccount() && P
        ? P
        : o.formatString(aK.getSubAssetClass());
    },
    formatCurrencyPrice: function (aK, P) {
      aK = G.formatPrice(aK);
      return aK ? aK + d + (P || "") : null;
    },
    formatBIC: function (P) {
      if (P && P.substring(8, 11) === "XXX") {
        return P.substring(0, 8);
      }
      return P;
    },
    formatPercentage: function (P) {
      return o.formatNumber(P, 1);
    },
    formatChartPercentage: function (P) {
      return G.formatPercentage(P) + Q;
    },
    formatCustomerNo: function (P) {
      return S(P);
    },
    advisor: function (aK) {
      var P = aK ? aK.getName() : "",
        aL = aK ? aK.getRole() : "";
      if (aL && aw.get(CLX.Bw.SHOW_ADVISOR_ROLE)) {
        P += al + aL;
      }
      return P;
    },
    trimConvertedAmount: function (aL, aK) {
      var P = aL;
      if (aL) {
        P = Math.floor(P);
      }
      return P;
    },
    bankCode: function (aL) {
      var P, aK;
      if (aL) {
        if (aL.isUkBank()) {
          aK = aL.getIban();
          P = aK ? av(aK) : aL.getBankCode();
        } else {
          P = aL.getBankCode();
        }
      }
      return P || "";
    },
    accountBankCode: function (aL) {
      var P,
        aK = G.bankCode(aL);
      if (aK) {
        P = aL.isUkBank() ? G.formatSortCode(aK) : aK;
      }
      return P;
    },
    briefDepotDescription: function (aL) {
      var P, aK;
      if (aL) {
        P = aL.getCustomerName();
        aK = aL.getProductNumber();
        if (P) {
          if (aK) {
            P += " - " + aK;
          }
        } else {
          if (aK) {
            P = aK;
          } else {
            P = "";
          }
        }
      }
      return P || "";
    },
    accountDescription: function (aM, aN) {
      var P = G.getBriefAccountDescription(aM),
        aK,
        aL;
      if (aM && (!aN || aN.getTime() >= CLX.Ec(new Date()))) {
        aK = aM.getCurrency();
        aL = CLX.Dx(aM);
        if (aK && (aL || aL === 0)) {
          P += " / " + X(aL, aK) + " " + aK;
        }
      }
      return P;
    },
    productCurrencyAndAmount: function (aM) {
      var P = "",
        aK,
        aL;
      if (aM) {
        aK = aM.getCurrency() || "";
        aL = aM.getProductValue() || "";
        if (aK && (aL || aL === 0)) {
          P = aK + " " + X(aL, aK);
        }
      }
      return P;
    },
    accountDescriptionForTrading: function (aN, aO) {
      var aK = G.getBriefAccountDescription(aN),
        aL,
        aM,
        P;
      if (aN && (!aO || aO.getTime() >= CLX.Ec(new Date()))) {
        aL = aN.getCurrency();
        aM = CLX.Dx(aN);
        P = CLX.Dn(aN);
        if (aL && (aM || aM === 0)) {
          aK += " " + X(aM, aL);
          if (P || P === 0) {
            aK += " / " + X(P, aL);
          }
          aK += " " + aL;
        }
      }
      return aK;
    },
    fullAccountDescription: function (aL, aM) {
      var P = G.aliasOrName(aL),
        aK;
      if (aM && aL && !aL.getAlias()) {
        aK = aL.getDescription();
        if (CLX.N(aK)) {
          P += aA + "(" + aK + ")";
        }
      }
      return P;
    },
    portfolioDescription: function (P) {
      return P.getCustomerName() + " - " + P.getFormattedNumber();
    },
    isPortfolioBlocked: function (P) {
      return !(P.isInAllowed() && P.isOutAllowed());
    },
    formatCard: function (P) {
      return P.getName() + " " + P.getNumber();
    },
    formatAddress: function (aL, P) {
      var aK = aL.getAddress(false);
      return aK.length > 0 ? CLX.Ce(aK, P ? aA : al) : "";
    },
    currencyDescription: function (P) {
      return P.getIsoCode();
    },
    currencyDescriptionSecondLine: function (P) {
      return P.getDescription();
    },
    customerId: function (P) {
      return P.getCustomerId() || "";
    },
    customerName: function (P) {
      return P.getCustomerName() || "";
    },
    getPositionTitle: function (aK) {
      var P;
      if (aK.isCurrencyAccount()) {
        P = G.accountTitle(aK);
      } else {
        P = aK.getTitle();
      }
      return P;
    },
    getProductReadOnlyDescription: function (aK) {
      var aO,
        aN,
        aM,
        aL,
        P = [];
      if (aK) {
        aO = G.aliasOrNumber(aK) || "";
        if (aO) {
          P.push(aO);
        }
        aN = G.productCurrencyAndAmount(aK) || "";
        if (aN) {
          P.push(aN);
        }
        aM = aK.getTypeDescription ? aK.getTypeDescription() : "";
        if (aM) {
          P.push(aM);
        }
        aL = aK.getCustomerName ? aK.getCustomerName() : "";
        if (aL) {
          P.push(aL);
        }
        return CLX.Ce(P, " / ");
      }
      return "";
    },
    getDefultQuantityDecimalPlaces: function () {
      return D;
    },
    getProductValueOptAccrInterest: function (aK) {
      var P = aK.getProductValue();
      if (aB && aK.getValueInclInterest) {
        P = aK.getValueInclInterest();
      }
      return P;
    },
    productAccountScreenTitle: function (P) {
      var aK = CLX.De();
      if (A) {
        switch (A) {
          case 6:
            aK = G.aliasOrNumber(P) + " " + P.getCurrency() + " " + P.getType();
            break;
          case 4:
            aK = P.getPortDescription
              ? P.getPortDescription()
              : G.aliasOrNumber(P);
            break;
          case 3:
            aK = m(P) + (G.rubrik(P) ? " - " + G.rubrik(P) : "");
            break;
          case 2:
            aK = G.rubrik(P) || P.getTypeDescription();
            break;
          default:
            aK = G.aliasOrNumber(P) + " " + (P.getDescription() || "");
            break;
        }
      }
      return aK;
    },
    productDebitCardsScreenTitle: function (P) {
      return (P.getTypeDescription() || "") + " " + G.aliasOrNumber(P);
    },
    productPortfolioScreenTitle: function (P) {
      var aK = CLX.De();
      if (A) {
        switch (A) {
          case 3:
            aK = m(P) + (G.rubrik(P) ? " - " + G.rubrik(P) : "");
            break;
          case 2:
            aK = U.get("i18n_ipp_heading") + " " + G.aliasOrNumber(P);
            break;
          default:
            aK = G.aliasOrNumber(P);
            break;
        }
      }
      return aK;
    },
    productNumberVisualizationFirstLineLeft: function (P) {
      var aK = CLX.De;
      if (A) {
        switch (A) {
          case 4:
            aK = G.productPortfolioScreenTitle(P);
            break;
          case 3:
            aK = m(P);
            break;
          case 2:
            aK = G.prodNoAndAliasOrProdDescName(P);
            break;
          default:
            aK = G.aliasOrNumber(P);
            break;
        }
      }
      return aK;
    },
    productNumberVisualizationFirstLineRight: function (P) {
      var aK = "";
      if (A) {
        switch (A) {
          case 6:
            aK = P.getCurrency();
            break;
          case 3:
            aK = G.rubrik(P);
            break;
          case 2:
            aK = G.currency(P);
            break;
          default:
            aK = ai ? CLX.Dq(P) : "";
            if (Y && CLX.Dr(P)) {
              aK = CLX.Dr(P);
            } else {
              if (ai) {
                CLX.Dq(P);
              } else {
                aK = "";
              }
            }
            break;
        }
      }
      return aK;
    },
    productNumberVisualizationSecondLineLeft: function (P) {
      var aK = CLX.De;
      if (A) {
        switch (A) {
          case 6:
            aK = CLX.Dv(P) || CLX.De();
            break;
          case 3:
            aK = CLX.Ea(P);
            break;
          case 2:
            aK = CLX.Dq(P);
            break;
          default:
            aK = CLX.Dw(P) || CLX.Ea(P);
            break;
        }
      }
      return aK;
    },
    productNumberVisualizationSecondLineRight: function (aK, P) {
      var aL = CLX.De;
      if (A) {
        switch (A) {
          case 5:
            aL = G.ammountWithCurrency(aK, P) || "";
            break;
          case 3:
            aL = G.ammountWithCurrency(aK);
            break;
          case 2:
            aL = G.currentBalance(aK);
            break;
          default:
            aL = G.ammountWithCurrency(aK);
            break;
        }
      }
      return aL;
    },
    formatAccountBreadcrumb: function (aM, aL, aQ) {
      var aN = [],
        aP,
        aR,
        P,
        aK,
        aO = ac.get(Z.POPULATE_RIGHT_SIDE_OF_ACCOUNT_BREADCRUMB);
      aR = G.productNumberVisualizationFirstLineRight(aM);
      aP =
        (aL
          ? aL + CLX.Dj + G.productNumberVisualizationFirstLineLeft(aM)
          : G.productNumberVisualizationFirstLineLeft(aM)) +
        (aO ? "" : aR ? CLX.Dj + aR : "");
      aK = G.productNumberVisualizationSecondLineRight(aM, aQ);
      P = aG(aM) + (aO ? "" : aK ? CLX.Dj + aK : "");
      aN.push(aP, P);
      if (aO) {
        aN.push(aR, aK);
      }
      return aN;
    },
    formatAccountBreadcrumbWithAccType: function (aQ, aK) {
      var aM = [],
        P,
        aL,
        aP,
        aO,
        aN = ac.get(Z.POPULATE_RIGHT_SIDE_OF_ACCOUNT_BREADCRUMB);
      aL = G.productNumberVisualizationFirstLineRight(aQ);
      P =
        (aK
          ? aK + CLX.Dj + G.productNumberVisualizationFirstLineLeft(aQ)
          : G.productNumberVisualizationFirstLineLeft(aQ)) +
        (aN ? "" : aL ? CLX.Dj + aL : "");
      aO = G.productNumberVisualizationSecondLineRight(aQ);
      aP = CLX.Ea(aQ) || "";
      aM.push(P, aP);
      if (aN) {
        aM.push(aL, aO);
      }
      return aM;
    },
    formatDebitCardsDetailBreadcrumb: function (aP, aK) {
      var aM = [],
        P,
        aL,
        aO,
        aN = ac.get(Z.POPULATE_RIGHT_SIDE_OF_ACCOUNT_BREADCRUMB);
      aL =
        (aK
          ? aK + CLX.Dj + G.productNumberVisualizationFirstLineLeft(aP)
          : G.productNumberVisualizationFirstLineLeft(aP)) +
        (aN ? "" : aL ? CLX.Dj + aL : "");
      P = CLX.Ea(aP);
      aO = CLX.Dy(aP);
      aM.push(P, aO);
      if (aN) {
        aM.push(aL);
      }
      return aM;
    },
    refProdDescTableColumn1stLine: function (P) {
      var aK = G.refCoriAliasOrRefNumber(P);
      return aK;
    },
    refCoriAlias: function (P) {
      return P.getRefCoriAlias && P.getRefCoriAlias();
    },
    refCoriAliasOrRefNumber: function (P) {
      return G.refCoriAlias(P) || T(P);
    },
    refProdDescTableColumn2ndLine: function (P) {
      var aK = "";
      if (P.getRefActtDescription && P.getRefActtDescription()) {
        aK = P.getRefActtDescription();
      }
      return aK;
    },
    formatMarketInfoUrl: function () {
      var P = CLX.$("#" + g).text(),
        aL = CLX.$("#" + p).text(),
        aK = CLX.$("#" + z).text();
      if (at) {
        aK = CLX.$("#" + ao).text();
      }
      P = P.replace("{hashValue}", aK);
      P = P.replace("{langId}", aL);
      return P;
    },
    formatTranslation: function (P, aL) {
      var aK = {
        translate: function (aM, aN) {
          if (aM && aN) {
            switch (aM) {
              case "LIMIT":
                return aK.translateLimitType(aN);
              case "TIME_PERIOD":
                return aK.translateTimePeriod(aN);
            }
          }
          return aN;
        },
        translateTimePeriod: function (aM) {
          switch (aM) {
            case "Day":
              return U.get("i18n_ebilling_daily");
            case "Week":
              return U.get("i18n_ebilling_weekly");
            case "Month":
              return U.get("i18n_ebilling_monthly");
            case "Quarter":
              return U.get("i18n_ebilling_quarterly");
            case "HalfYear":
              return U.get("i18n_ebilling_half_yearly");
            case "Year":
              return U.get("i18n_ebilling_yearly");
          }
          return aM;
        },
        translateLimitType: function (aM) {
          switch (aM) {
            case "Limit":
              return U.get("i18n_ebilling_limit_type");
            case "Exact":
              return U.get("i18n_ebilling_exact");
          }
        },
      };
      return aK.translate(P, aL);
    },
  };
  return G;
};
CLX.Ek = function (a) {
  return a.indexOf(CLX.Dh) === 0 ? a : CLX.Dh + CLX.W(a);
};
CLX.El = function (a) {
  var b = CLX.I.get(CLX.Ef);
  return CLX.Cr(b, a);
};
CLX.Em = function () {
  var c,
    e = CLX.D,
    a,
    b,
    d = function () {
      a = CLX.Ae("buttonGroupLayoutTemplate");
      b = CLX.Ae("buttonGroupLayoutCellTemplate");
    };
  d();
  c = {
    getName: function () {
      return CLX.Cq.BUTTON_GROUP;
    },
    attach: function (f, h, j, g) {
      var i = a.clone();
      h.append(i);
      CLX.$.each(j, function (k, l) {
        if (l) {
          var m = b.clone();
          i.append(m);
          l.attach(m.find("." + e.BUTTON_GROUP_COMPONENT), g);
        }
      });
    },
  };
  return c;
};
CLX.En = function (a) {
  var b = CLX.I.get(CLX.Eh);
  return CLX.Cr(b, a);
};
CLX.Eo = function (d, c) {
  var a = c ? {} : null,
    b = {
      get: function (f) {
        var e = this;
        return CLX.Bg.getValue.call(e, "rec." + f, c, a);
      },
    };
  b.val = b.get;
  if (CLX.B(d)) {
    CLX.$.each(d, function (e, f) {
      CLX.Bg.addAccessorMethods.call(b, f, true);
    });
  } else {
    if (CLX.C(d)) {
      CLX.$.each(d, function (g, h) {
        var f, e;
        if (CLX.M(h)) {
          CLX.Bg.addAccessorMethods.call(b, g, h);
        } else {
          if (CLX.C(h)) {
            f = CLX.Eo(h, CLX.Eg(h));
            e = CLX.Ei(f);
          }
          CLX.Bg.addAccessorMethods.call(b, g, true, e);
        }
      });
    }
  }
  return b;
};
CLX.Ep = function () {
  return CLX.I.get(CLX.Ej);
};
CLX.Eq = { TOGGLE_BAR: "toggle_bar", TAB_BAR: "tab_bar" };
CLX.Er = {
  ACCO_AVAIL_AMOUNT_ACC_CURR: "ACCO_AVAIL_AMOUNT_ACC_CURR",
  ACCO_AVAIL_AMOUNT_CUST_CURR: "ACCO_AVAIL_AMOUNT_CUST_CURR",
  ACCO_CORI_ALIAS: "ACCO_CORI_ALIAS",
  ACCO_CURR_ISO_CODE: "ACCO_CURR_ISO_CODE",
  ACCO_DEB_CORI_ALIAS: "CoAlPC",
  ACCO_DESCRIPTION: "ACCO_DESCRIPTION",
  ACCO_ESR_ID: "ACCO_ESR_ID",
  ACCO_ID: "ACCO_ID",
  ACCO_INTEREST_RATE: "ACCO_INTEREST_RATE",
  ACCO_PROD_IBAN: "ACCO_PROD_IBAN",
  ACCO_PROD_ID: "ACCO_PROD_ID",
  ACCO_PROD_NO: "ACCO_PROD_NO",
  ACCO_PROD_NO_FORM: "ACCO_PROD_NO_FORM",
  ACCO_DEB_PROD_DESCRIPTION: "PrDebC",
  ACGR_ID: "ACGR_ID",
  ACGR_NAME: "ACGR_NAME",
  ACTD_ID: "ACTD_ID",
  ACTD_ACTR_ID: "ACTD_ACTR_ID",
  ACTD_AMMOUNT_ACC: "ACTD_AMMOUNT_ACC",
  ACTD_DEBIT_CREDIT_CD: "ACTD_DEBIT_CREDIT_CD",
  ACTD_IBF_TEXT_1: "ACTD_IBF_TEXT_1",
  ACTD_TEXT_1: "ACTD_TEXT_1",
  ACTD_TEXT_2: "ACTD_TEXT_2",
  ACTD_TEXT_PREFIX: "ACTD_TEXT_",
  ACTD_PAYM_ID: "ACTD_PAYM_ID",
  ACTR_BALANCE: "ACTR_BALANCE",
  ACTR_BOOKING_NO: "ACTR_BOOKING_NO",
  ACTR_CUAT_ID: "ACTR_CUAT_ID",
  ACTR_DETAIL_COUNT: "ACTR_DETAIL_COUNT",
  ACTR_FEES: "ACTR_FEES",
  ACTR_ID: "ACTR_ID",
  ACTR_INTRADAY_COUNTER: "ACTR_INTRADAY_COUNTER",
  ACTR_ORDE_ID: "ACTR_ORDE_ID",
  ACTR_PAYM_ID: "ACTR_PAYM_ID",
  ACTR_REFERENCE_NO: "ACTR_REFERENCE_NO",
  ACTR_SALARY_PAYMENT: "ACTR_SALARY_PAYMENT",
  ACTR_SIGNED_AMOUNT: "ACTR_SIGNED_AMOUNT",
  ACTR_SIGNED_AMOUNT_PORT_CURR: "ACTR_SIGNED_AMOUNT_PORT_CURR",
  ACTR_TEXT_1: "ACTR_TEXT_1",
  ACTR_TEXT_2: "ACTR_TEXT_2",
  ACCT_CREDIT_DESCRIPTION: "ACCT_CREDIT_DESCRIPTION",
  ACCT_DEBIT_DESCRIPTION: "ACCT_DEBIT_DESCRIPTION",
  ACTT_DESCRIPTION: "ACTT_DESCRIPTION",
  ACTUAL_VALUE: "ACTUAL_VALUE",
  ACTY_PT_AUTHORIZATION: "ACTY_PT_AUTHORIZATION",
  ACTY_DENY_MASTER_DATA_PRINTING: "ACTY_DENY_MASTER_DATA_PRINTING",
  ACTY_DENY_STORD: "ACTY_DENY_STORD",
  ACTY_SPECIAL_ACCOUNT: "ACTY_SPECIAL_ACCOUNT",
  ADAS_ASSIGNMENT_ROLE: "ADAS_ASSIGNMENT_ROLE",
  ADAS_ASSIGNMENT_TYPE: "ADAS_ASSIGNMENT_TYPE",
  ADDR_CITY: "ADDR_CITY",
  ADDR_CO: "ADDR_CO",
  ADDR_COUNTRY: "ADDR_COUNTRY",
  ADDR_CONT_NAME: "ADDR_CONT_NAME",
  ADDR_CONT_SURNAME: "ADDR_CONT_SURNAME",
  ADDR_FIRM: "ADDR_FIRM",
  ADDR_FULL_ADDRESS: "ADDR_FULL_ADDRESS",
  ADDR_ID: "ADDR_ID",
  ADDR_NAME: "ADDR_NAME",
  ADDR_PO_BOX: "ADDR_PO_BOX",
  ADDR_RELATION_ID: "ADDR_RELATION_ID",
  ADDR_STATE: "ADDR_STATE",
  ADDR_STREET: "ADDR_STREET",
  ADDR_SURNAME: "ADDR_SURNAME",
  ADDR_TITLE: "ADDR_TITLE",
  ADDR_ZIP_CD: "ADDR_ZIP_CD",
  ADDR_ZIP_CODE: "ADDR_ZIP_CODE",
  ADVI_EMAIL_ADDR: "ADVI_EMAIL_ADDR",
  ADVI_ID: "ADVI_ID",
  ADVI_MOBILE_PHONE: "ADVI_MOBILE_PHONE",
  ADVI_DIRECT_PHONE: "ADVI_DIRECT_PHONE",
  ADVI_NAME: "ADVI_NAME",
  ADVI_NO: "ADVI_NO",
  EXTENDED_FIELDS: "EXTENDED_FIELDS",
  OUT_OFF_OFFICE_DATE: "out-of-office-date",
  OUT_OFF_OFFICE_STATUS: "out-of-office-status",
  ADVI_SURNAME: "ADVI_SURNAME",
  ALEN_ID: "ALEN_ID",
  ALEN_REQ_TIME: "ALEN_REQ_TIME",
  ALEN_RES_TIME: "ALEN_RES_TIME",
  ALEN_SERVICE_NAME: "ALEN_SERVICE_NAME",
  ALRT_ACTIVE: "ALRT_ACTIVE",
  ALRT_ALIAS: "ALRT_ALIAS",
  ALRT_CENSORED_EMAIL_ADDR: "ALRT_CENSORED_EMAIL_ADDR",
  ALRT_CENSORED_MOBILE_NO: "ALRT_CENSORED_MOBILE_NO",
  ALRT_EMAIL_ADDR: "ALRT_EMAIL_ADDR",
  ALRT_ID: "ALRT_ID",
  ALRT_MOBILE_NO: "ALRT_MOBILE_NO",
  ALRT_STREAM: "ALRT_STREAM",
  ALRT_VALID_UNTIL: "ALRT_VALID_UNTIL",
  ALTP_CD: "ALTP_CD",
  ASSET_TYPE: "ASSET_TYPE",
  BADI_BACS_STATUS: "BADI_BACS_STATUS",
  BADI_CHAPS_S_STATUS: "BADI_CHAPS_S_STATUS",
  BADI_CITY: "BADI_CITY",
  BADI_COTT_DESCRIPTION: "BADI_COTT_DESCRIPTION",
  BADI_COUN_SHORT: "BADI_COUN_SHORT",
  BADI_FPS_STATUS: "BADI_FPS_STATUS",
  BADI_ID: "BADI_ID",
  BADI_NAME: "BADI_NAME",
  BADI_NATIONAL_CODE: "BADI_NATIONAL_CODE",
  BADI_STREET: "BADI_STREET",
  BADI_SWIFT: "BADI_SWIFT",
  BADI_SWIFT_BIC_IBAN_CODE: "BADI_SWIFT_BIC_IBAN_CODE",
  BADI_TYPE_OF: "BADI_TYPE_OF",
  BADI_ZIP_CD: "BADI_ZIP_CD",
  BADO_CATEGORY_CD: "BADO_CATEGORY_CD",
  BADO_CATEGORY_LONG: "BADO_CATEGORY_LONG",
  BADO_CATEGORY_SHORT: "BADO_CATEGORY_SHORT",
  BADO_CUST_NAME: "BADO_CUST_NAME",
  BADO_CUST_SURNAME: "BADO_CUST_SURNAME",
  BADO_CUSTOMER_NO: "BADO_CUSTOMER_NO",
  BADO_FOLDER: "BADO_FOLDER",
  BADO_ID: "BADO_ID",
  BADO_OWNER_NAME: "BADO_OWNER_NAME",
  BADO_OWNER_SURNAME: "BADO_OWNER_SURNAME",
  BADO_PEME_FOLDER: "BADO_PEME_FOLDER",
  BADO_PEME_ID: "BADO_PEME_ID",
  BADO_READ_AT: "BADO_READ_AT",
  BADO_SENT_AT: "BADO_SENT_AT",
  BADO_SOURCE_NO: "BADO_SOURCE_NO",
  BADO_ACCOUNT_NO: "BADO_ACCOUNT_NO",
  BADO_CUSTODY_ACCOUNT_NO: "BADO_CUSTODY_ACCOUNT_NO",
  BADO_PORTFOLIO_NO: "BADO_PORTFOLIO_NO",
  BADO_SUBJECT: "BADO_SUBJECT",
  BADO_PRODUCT_DESC: "BADO_PRODUCT_DESC",
  BADO_PRODUCT_TYPE: "BADO_PRODUCT_TYPE",
  BANK_CODE: "BANK_CODE",
  BAPD_PC_ACCOUNT_FORM: "BAPD_PC_ACCOUNT_FORM",
  BIDA_ID: "BIDA_ID",
  BOND_CURR_MNEMONIC: "BOND_CURR_MNEMONIC",
  BOND_DENOMINATION: "BOND_DENOMINATION",
  BOND_DURATION: "BOND_DURATION",
  BOND_ID: "BOND_ID",
  BOND_INTEREST_RATE: "BOND_INTEREST_RATE",
  BOND_LEAST_AMOUNT: "BOND_LEAST_AMOUNT",
  BOOKED_AT: "BOOKED_AT",
  BUY_PERMITTED: "BUY_PERMITTED",
  CACA_ID: "CACA_ID",
  CACA_LOCK_REASON: "CACA_LOCK_REASON",
  CACA_LOCKED_AT: "CACA_LOCKED_AT",
  CACA_PAN: "CACA_PAN",
  CACA_STATUS: "CACA_STATUS",
  CACA_UNLOCK_AT: "CACA_UNLOCK_AT",
  CACA_UNLOCK_REASON: "CACA_UNLOCK_REASON",
  CACT_AMOUNT_TYPE: "CACT_AMOUNT_TYPE",
  CARD_CURR_MNEMONIC: "CARD_CURR_MNEMONIC",
  CARD_EXPIRY_DATE: "CARD_EXPIRY_DATE",
  CARD_ID: "CARD_ID",
  CARD_LIMIT: "CARD_LIMIT",
  CARD_NAME: "CARD_NAME",
  CARD_NO_FORM: "CARD_NO_FORM",
  CARD_ORDER: "CARD_ORDER",
  CARD_STATUS: "CARD_STATUS",
  CARD_TYPE_CD: "CARD_TYPE_CD",
  CATD_CUAT_ID: "CATD_CUAT_ID",
  CATD_TEXT: "CATD_TEXT",
  CATD_TEXT_TYPE_CD: "CATD_TEXT_TYPE_CD",
  CATT_DESCRIPTION_SHORT: "CATT_DESCRIPTION_SHORT",
  CCAC_ACCOUNT_ID: "CCAC_ACCOUNT_ID",
  CCAC_CURRENCY: "CCAC_CURRENCY",
  CCCC_CARD_LIMIT: "CCCC_CARD_LIMIT",
  CCCC_CARD_NAME: "CCCC_CARD_NAME",
  CCCC_CCAC_ID: "CCCC_CCAC_ID",
  CCCC_ID: "CCCC_ID",
  CCCC_EXPIRY_DATE: "CCCC_EXPIRY_DATE",
  CCCC_FIRST_NAME: "CCCC_FIRST_NAME",
  CCCC_LAST_NAME: "CCCC_LAST_NAME",
  CCCC_MASKED_NUMBER: "CCCC_MASKED_NUMBER",
  CCCC_STATUS: "CCCC_STATUS",
  CCLI_DESTINATION_URL: "CCLI_DESTINATION_URL",
  CCLI_LANDING_URL: "CCLI_LANDING_URL",
  CCOR_COUNTERSIGN_STATUS: "CCOR_COUNTERSIGN_STATUS",
  CCOR_DELIVERY_ADDR_1: "CCOR_DELIVERY_ADDR_1",
  CCOR_DELIVERY_ADDR_2: "CCOR_DELIVERY_ADDR_2",
  CCOR_DELIVERY_ADDR_3: "CCOR_DELIVERY_ADDR_3",
  CCOR_DELIVERY_ADDR_4: "CCOR_DELIVERY_ADDR_4",
  CCOR_DELIVERY_ADDR_5: "CCOR_DELIVERY_ADDR_5",
  CCOR_DELIVERY_ADDR_6: "CCOR_DELIVERY_ADDR_6",
  CCOR_DELIVERY_ADDR_NAME: "CCOR_DELIVERY_ADDR_NAME",
  CONTRACT_LANGUAGE: "ContractLanguage",
  CCOR_DELIVERY_COUNTRY_CD: "CCOR_DELIVERY_COUNTRY_CD",
  CCOR_DELIVERY_SALUTATION: "CCOR_DELIVERY_SALUTATION",
  CCOR_DISPLAYED_USER_FORENAME: "CCOR_DISPLAYED_USER_FORENAME",
  CCOR_DISPLAYED_USER_SURNAME: "CCOR_DISPLAYED_USER_SURNAME",
  CCOR_ID: "CCOR_ID",
  CCOR_TYPE_CD: "CCOR_TYPE_CD",
  CCOR_USER_ADDR_1: "CCOR_USER_ADDR_1",
  CCOR_USER_ADDR_2: "CCOR_USER_ADDR_2",
  CCOR_USER_ADDR_3: "CCOR_USER_ADDR_3",
  CCOR_USER_ADDR_4: "CCOR_USER_ADDR_4",
  CCOR_USER_ADDR_5: "CCOR_USER_ADDR_5",
  CCOR_USER_ADDR_6: "CCOR_USER_ADDR_6",
  CCOR_USER_ADDR_NAME: "CCOR_USER_ADDR_NAME",
  CCOR_USER_COUNTRY_CD: "CCOR_USER_COUNTRY_CD",
  CCOR_USER_SALUTATION: "CCOR_USER_SALUTATION",
  CCST_AMOUNT: "CCST_AMOUNT",
  CCST_LINK_DESTINATION_URL: "CCST_LINK_DESTINATION_URL",
  CCST_LINK_LANDING_URL: "CCST_LINK_LANDING_URL",
  CCST_STATEMENT_DATE: "CCST_STATEMENT_DATE",
  CCTR_CCAC_ID: "CCTR_CCAC_ID",
  CCTR_ID: "CCTR_ID",
  CCTR_LONG_DESCRIPTION: "CCTR_LONG_DESCRIPTION",
  CCTR_TOTAL_AMOUNT: "CCTR_TOTAL_AMOUNT",
  CCTR_TRANSACTION_DATE: "CCTR_TRANSACTION_DATE",
  CCTR_VALUTA_DATE: "CCTR_VALUTA_DATE",
  CHILD_CATE_CD: "CHILD_CATE_CD",
  CHILD_CATE_DESC_LONG: "CHILD_CATE_DESC_LONG",
  CHILD_CATE_DESC_SHORT: "CHILD_CATE_DESC_SHORT",
  CHILD_CATE_ID: "CHILD_CATE_ID",
  CHILD_CATE_LEVEL: "CHILD_CATE_LEVEL",
  CHILD_CATE_TYPE: "CHILD_CATE_TYPE",
  CHILD_CATE_VISIBLE: "CHILD_CATE_VISIBLE",
  CODW_DAWA_ID: "CODW_DAWA_ID",
  CODW_ID: "CODW_ID",
  CODW_POS_COL: "CODW_POS_COL",
  CODW_POS_TOP: "CODW_POS_TOP",
  CONT_ALWAYS_EBANKING: "CONT_ALWAYS_EBANKING",
  CONT_DESCRIPTION: "CONT_DESCRIPTION",
  CONT_EMAIL: "CONT_EMAIL",
  CONT_ID: "CONT_ID",
  CONT_LOCK_REASON: "CONT_LOCK_REASON",
  CONT_LOCKED: "CONT_LOCKED",
  CONT_LOCKED_AT: "CONT_LOCKED_AT",
  CONT_MOB_AUTH_TYPE: "CONT_MOB_AUTH_TYPE",
  CONT_MOB_PASSWORD_LAST_UPDATE: "CONT_MOB_PASSWORD_LAST_UPDATE",
  CONT_MOB_SELECTED_PHONE: "CONT_MOB_SELECTED_PHONE",
  CONT_MOB_STATUS: "CONT_MOB_STATUS",
  CONT_NO: "CONT_NO",
  CONT_PEPF_ID: "CONT_PEPF_ID",
  CONT_PHONE_NO: "CONT_PHONE_NO",
  CONT_PHONE_NO_2: "CONT_PHONE_NO_2",
  CONT_STATUS: "CONT_STATUS",
  CONT_UNLOCK_AT: "CONT_UNLOCK_AT",
  CONT_UNLOCK_REASON: "CONT_UNLOCK_REASON",
  CONTRACT_MTAN_SIGN_LEVEL: "CONTRACT_MTAN_SIGN_LEVEL",
  CORE_CODE_VCHAR: "CORE_CODE_VCHAR",
  CORE_TEXT: "CORE_TEXT",
  CORI_ALIAS: "CORI_ALIAS",
  CORI_CREDIT_ALIAS: "CORI_CREDIT_ALIAS",
  CORI_DEBIT_ALIAS: "CORI_DEBIT_ALIAS",
  CORI_SALARY_PAYMENTS_ALLOWED: "CORI_SALARY_PAYMENTS_ALLOWED",
  COTT_DESCRIPTION: "COTT_DESCRIPTION",
  COUN_IS_EEA: "COUN_IS_EEA",
  COUN_MNEMONIC2: "COUN_MNEMONIC2",
  COUNT_PGML_PORT_ID: "COUNT_PGML_PORT_ID",
  CREDIT_CARDS_APPLY_URL: "CREDIT_CARDS_APPLY_URL",
  CREDIT_CARDS_INVOICES_LIST: "CREDIT_CARDS_INVOICES_LIST",
  CREDIT_CARDS_LANDING_URL: "CREDIT_CARDS_LANDING_URL",
  CREDIT_CARDS_LINKS_LIST: "CREDIT_CARDS_LINKS_LIST",
  CREDIT_CARDS_LIST: "CREDIT_CARDS_LIST",
  CREDIT_CARDS_SAML_RESPONSE: "CREDIT_CARDS_SAML_RESPONSE",
  CREDIT_CARDS_TRANSACTIONS_LIST: "CREDIT_CARDS_TRANSACTIONS_LIST",
  CUAC_CORI_ALIAS: "CUAC_CORI_ALIAS",
  CUAC_ID: "CUAC_ID",
  CUAC_PROD_ID: "CUAC_PROD_ID",
  CUAC_RUBRIC_LABEL: "CUAC_RUBRIC_LABEL",
  CUAT_AMOUNT: "CUAT_AMOUNT",
  CUAT_BOOKED_AT: "CUAT_BOOKED_AT",
  CUAT_CLOSING_BALANCE: "CUAT_CLOSING_BALANCE",
  CUAT_DEBIT_CREDIT_CD: "CUAT_DEBIT_CREDIT_CD",
  CUAT_FEES: "CUAT_FEES",
  CUAT_HOST_ORDER_NO: "CUAT_HOST_ORDER_NO",
  CUAT_ID: "CUAT_ID",
  CUAT_PRICE_RATE_CURR: "CUAT_PRICE_RATE_CURR",
  CACT_PT_AUTHORIZATION: "CACT_PT_AUTHORIZATION",
  CUAT_SIGNED_AMOUNT: "CUAT_SIGNED_AMOUNT",
  CUAT_TRADED_AT: "CUAT_TRADED_AT",
  CUAT_TRANSACTION_TEXT: "CUAT_TRANSACTION_TEXT",
  CUAT_VALUE_DATE: "CUAT_VALUE_DATE",
  CUAT_VALUE_PORT_CURR: "CUAT_VALUE_PORT_CURR",
  CUAT_VALUE_RATE_CURR: "CUAT_VALUE_RATE_CURR",
  CUAT_VALUE_RATE_CURR_MNEMONIC: "CUAT_VALUE_RATE_CURR_MNEMONIC",
  CUAT_VALUE_SIGNED_PORT_CURR: "CUAT_VALUE_SIGNED_PORT_CURR",
  CUATT_DESCRIPTION: "CUATT_DESCRIPTION",
  CUATT_CACT_ID: "CUATT_CACT_ID",
  CUAV_ACCRUED_INTEREST: "CUAV_ACCRUED_INTEREST",
  CUAV_ACCRUED_INTEREST_P_CURR: "CUAV_ACCRUED_INTEREST_P_CURR",
  CUAV_ACCRUED_INTEREST_POGR_CURR: "CUAV_ACCRUED_INTEREST_POGR_CURR",
  CUAV_BLOCKED_QUANTITY: "CUAV_BLOCKED_QUANTITY",
  CUAV_CALC_RATE: "CUAV_CALC_RATE",
  CUAV_CALC_RATE_CURR_TEXT: "CUAV_CALC_RATE_CURR_TEXT",
  CUAV_CALC_RATE_FROM: "CUAV_CALC_RATE_FROM",
  CUAV_CALC_REMAINING_TIME: "CUAV_CALC_REMAINING_TIME",
  CUAV_COST_RATE: "CUAV_COST_RATE",
  CUAV_COST_VALUE: "CUAV_COST_VALUE",
  CUAV_COST_VALUE_P_CURR: "CUAV_COST_VALUE_P_CURR",
  CUAV_COST_VALUE_POGR_CURR: "CUAV_COST_VALUE_POGR_CURR",
  CUAV_COST_VALUE_REF_CURR: "CUAV_COST_VALUE_REF_CURR",
  CUAV_CUAC_ID: "CUAV_CUAC_ID",
  CUAV_CURR_CD_EXT: "CUAV_CURR_CD_EXT",
  CUAV_CURR_ISO_CODE: "CUAV_CURR_ISO_CODE",
  CUAV_CURR_MNEMONIC: "CUAV_CURR_MNEMONIC",
  CUAV_CUST_CURR_MNEMONIC: "CUAV_CUST_CURR_MNEMONIC",
  CUAV_ID: "CUAV_ID",
  CUAV_INTEREST_RATE: "CUAV_INTEREST_RATE",
  CUAV_CALC_RATE_CHANGE_PERC_P_C: "CUAV_CALC_RATE_CHANGE_PERC_P_C",
  CUAV_COST_VALUE_C_CURR: "CUAV_COST_VALUE_C_CURR",
  CUAV_ACCRUED_INTEREST_NET: "CUAV_ACCRUED_INTEREST_NET",
  CUAV_INTEREST: "CUAV_INTEREST",
  CUAV_INTEREST_NET: "CUAV_INTEREST_NET",
  CUAV_ACCRUED_INTEREST_RATE: "CUAV_ACCRUED_INTEREST_RATE",
  CUAV_ACCRUED_INTEREST_D_CURR: "CUAV_ACCRUED_INTEREST_D_CURR",
  CUAV_MARKET_VALUE: "CUAV_MARKET_VALUE",
  CUAV_MARKET_VALUE_C_CURR: "CUAV_MARKET_VALUE_C_CURR",
  CUAV_MARKET_VALUE_P_CURR: "CUAV_MARKET_VALUE_P_CURR",
  CUAV_MARKET_VALUE_REF_CURR: "CUAV_MARKET_VALUE_REF_CURR",
  CUAV_MATURITY_DATE: "CUAV_MATURITY_DATE",
  CUAV_MATURITY_MONTH: "CUAV_MATURITY_MONTH",
  CUAV_MATURITY_YEAR: "CUAV_MATURITY_YEAR",
  CUAV_NR_MARKET_PROFIT: "CUAV_NR_MARKET_PROFIT",
  CUAV_NR_MARKET_PROFIT_P_C: "CUAV_NR_MARKET_PROFIT_P_C",
  CUAV_NR_MARKET_PROFIT_PCTG_P_C: "CUAV_NR_MARKET_PROFIT_PCTG_P_C",
  CUAV_NR_MARKET_PROFIT_P_CURR: "CUAV_NR_MARKET_PROFIT_P_CURR",
  CUAV_NR_MARKET_PROFIT_PCTG: "CUAV_NR_MARKET_PROFIT_PCTG",
  CUAV_NR_MARKET_PROFIT_POGR_CURR: "CUAV_NR_MARKET_PROFIT_POGR_CURR",
  CUAV_PENDING_QUANTITY: "CUAV_PENDING_QUANTITY",
  CUAV_PORT_CURR_MNEMONIC: "CUAV_PORT_CURR_MNEMONIC",
  CUAV_RISK_CURR_MNEMONIC: "CUAV_RISK_CURR_MNEMONIC",
  CUAV_SALE_PERMITTED: "CUAV_SALE_PERMITTED",
  CUAV_SECU_ID: "CUAV_SECU_ID",
  CUAV_TIME_TO_MATURITY: "CUAV_TIME_TO_MATURITY",
  CUAV_VALUE: "CUAV_VALUE",
  CUAV_YEAR_END_PROFIT_P_CURR: "CUAV_YEAR_END_PROFIT_P_CURR",
  CUAV_YEAR_END_PROFIT_PCTG: "CUAV_YEAR_END_PROFIT_PCTG",
  CURR_CD_EXT: "CURR_CD_EXT",
  CURR_CREDIT_MNEMONIC: "CURR_CREDIT_MNEMONIC",
  CURR_DEBIT_MNEMONIC: "CURR_DEBIT_MNEMONIC",
  CURR_ID: "CURR_ID",
  CURR_ISO_CODE: "CURR_ISO_CODE",
  CURR_MNEMONIC: "CURR_MNEMONIC",
  CURR_FX_TRADABLE: "CURR_FX_TRADABLE",
  CURRENCY: "CURRENCY",
  CUSE_ACTION_COUNT: "CUSE_ACTION_COUNT",
  CUSE_SESSION_TYPE: "CUSE_SESSION_TYPE",
  CUST_ADDR_NAME: "CUST_ADDR_NAME",
  CUST_ADDR_SURNAME: "CUST_ADDR_SURNAME",
  CUST_ADDR_CITY: "CUST_ADDR_CITY",
  CUST_ADDR_STREET: "CUST_ADDR_STREET",
  CUST_ADDR_ZIP_CD: "CUST_ADDR_ZIP_CD",
  CUST_ASSET: "CUST_ASSET",
  CUST_CURR_MNEMONIC: "CUST_CURR_MNEMONIC",
  CUST_ID: "CUST_ID",
  CUST_LOAN: "CUST_LOAN",
  CUST_NAME: "CUST_NAME",
  CUST_NAME_SURNAME: "CUST_NAME_SURNAME",
  CUSTOMER_NAME_SURNAME: "CUST_NAME_SURNAME",
  CUST_NO: "CUST_NO",
  CUST_SURNAME: "CUST_SURNAME",
  ACCO_VALUE_CURR_ISO_CODE: "ACCO_VALUE_CURR_ISO_CODE",
  CUST_NAME_AND_SURNAME: "CUST_NAME_AND_SURNAME",
  CUST_PHONE_NO: "CUST_PHONE_NO",
  CUST_BIRTHDAY: "CUST_BIRTHDAY",
  CUTT_DESCRIPTION_SHORT: "CUTT_DESCRIPTION_SHORT",
  DATA_LEN: "DATA_LEN",
  DATE: "DATE",
  DAWA_ID: "DAWA_ID",
  DAWA_REMOVABLE: "DAWA_REMOVABLE",
  DAWI_ID: "DAWI_ID",
  DAWI_NAME: "DAWI_NAME",
  DAWP_REMOVABLE: "DAWP_REMOVABLE",
  DAWP_HEIGHT: "DAWP_HEIGHT",
  DAWP_COLOR: "DAWP_COLOUR",
  DAYS_OF_WEEK: "DAYS_OF_WEEK",
  DAYS_TO_SEND_CODES: "DAYS_TO_SEND_CODES",
  DEBIT_CREDIT_CD: "DEBIT_CREDIT_CD",
  DEBIT_FORM: "DEBIT_FORM",
  DEEL_FILE_NAME: "DEEL_FILE_NAME",
  DEEL_LOGIN_NAME: "DEEL_LOGIN_NAME",
  DEEL_ROW_COUNTER: "DEEL_ROW_COUNTER",
  DEFAULT_BOOKINGS: "DEFAULT_BOOKINGS",
  DEFAULT_BOOKING_DETAILS: "DEFAULT_BOOKING_DETAILS",
  DEFAULT_DEACTIVATE_CAMPAIGNER: "DEFAULT_DEACTIVATE_CAMPAIGNER",
  DEFAULT_FILTER: "DEFAULT_FILTER",
  DEFAULT_PAYMENTS: "DEFAULT_PAYMENTS",
  DEFAULT_PAYMENT_ACCOUNT_NO: "DEFAULT_PAYMENT_ACCOUNT_NO",
  DEFAULT_PAYMENT_CUSTOMER_ID: "DEFAULT_PAYMENT_CUSTOMER_ID",
  DEFAULT_TRADING_CUSTOMER_ID: "DEFAULT_TRADING_CUSTOMER_ID",
  DEFAULT_PORTFOLIO_GROUP_ID: "DEFAULT_PORTFOLIO_GROUP_ID",
  DEFAULT_PORTFOLIO_ID: "DEFAULT_PORTFOLIO_ID",
  DEFAULT_PORTFOLIO_PER_PORTFOLIO_GROUP_ID:
    "DEFAULT_PORTFOLIO_PER_PORTFOLIO_GROUP_ID",
  DEFAULT_ROWCOUNT: "DEFAULT_ROWCOUNT",
  DEFAULT_STARTPAGE_OPTION: "DEFAULT_STARTPAGE_OPTION",
  DEFAULT_TRADE_ACCOUNT_ID_PER_PORTFOLIO:
    "DEFAULT_TRADE_ACCOUNT_ID_PER_PORTFOLIO",
  DEFAULT_TRADE_CUSTACC_ID: "DEFAULT_TRADE_CUSTACC_ID",
  DEGR_ACCOUNT_ZE: "DEGR_ACCOUNT_ZE",
  DEGR_ACCOUNT_ZE_ID: "DEGR_ACCOUNT_ZE_ID",
  DEGR_DELETE_REQUIRED: "DEGR_DELETE_REQUIRED",
  DEGR_EXECUTE_AT: "DEGR_EXECUTE_AT",
  DEGR_GROUP_AMOUNT: "DEGR_GROUP_AMOUNT",
  DEGR_ID: "DEGR_ID",
  DEGR_LSV_ID: "DEGR_LSV_ID",
  DEGR_NUMBEROFTRXS: "DEGR_NUMBEROFTRXS",
  DEGR_SIGN_REQUIRED: "DEGR_SIGN_REQUIRED",
  DEGR_STATUS_TEXT: "DEGR_STATUS_TEXT",
  DEHE_AMOUNT: "DEHE_AMOUNT",
  DEHE_CURRENCY_ISO_CODE: "DEHE_CURRENCY_ISO_CODE",
  DEHE_DELIVERED_AT: "DEHE_DELIVERED_AT",
  DEHE_FILE_DELETABLE: "DEHE_FILE_DELETABLE",
  DEHE_ID: "DEHE_ID",
  DEHE_INVALID_COUNTER: "DEHE_INVALID_COUNTER",
  DEHE_SIGN_REQUIRED: "DEHE_SIGN_REQUIRED",
  DEHE_STATUS_CD: "DEHE_STATUS_CD",
  DEHE_STATUS_TEXT: "DEHE_STATUS_TEXT",
  DELETED_BY_PERS_NAME: "DELETED_BY_PERS_NAME",
  DELETED_BY_PERS_SURNAME: "DELETED_BY_PERS_SURNAME",
  DELIVERY_CHANGE: "DELIVERY_CHANGE",
  DELIVERY_CHANGE_ALLOWED: "DELIVERY_CHANGE_ALLOWED",
  DELIVERY_CHANGE_PROCESSING: "DELIVERY_CHANGE_PROCESSING",
  DELIVERY_TYPE: "DELIVERY_TYPE",
  DEMA_AMOUNT_CURR_MNEMONIC: "DEMA_AMOUNT_CURR_MNEMONIC",
  DEMA_CLOSE_DATE: "DEMA_CLOSE_DATE",
  DEMA_CONTRACT_OWNER: "DEMA_CONTRACT_OWNER",
  DEMA_DC: "DEMA_DC",
  DEMA_ID: "DEMA_ID",
  DEMA_LAST_PAYMENT_AMOUNT: "DEMA_LAST_PAYMENT_AMOUNT",
  DEMA_LAST_PAYMENT_DATE: "DEMA_LAST_PAYMENT_DATE",
  DEMA_MANDATE_ID: "DEMA_MANDATE_ID",
  DEMA_OPEN_DATE: "DEMA_OPEN_DATE",
  DEMA_OWNER: "DEMA_OWNER",
  DEMA_REG_NO: "DEMA_REG_NO",
  DEMA_STATUS: "DEMA_STATUS",
  DEMA_CREATION_DATE: "DEMA_CREATION_DATE",
  DETR_ACCOUNT_ZP: "DETR_ACCOUNT_ZP",
  DETR_ADDRESS_ZP1: "DETR_ADDRESS_ZP1",
  DETR_AMOUNT: "DETR_AMOUNT",
  DETR_CURRENCY_ISO_CODE: "DETR_CURRENCY_ISO_CODE",
  DETR_STATUS_TEXT: "DETR_STATUS_TEXT",
  DISPLAY_FORMAT: "DISPLAY_FORMAT",
  DJ_ACCO_ID: "DJ_ACCO_ID",
  DJ_CURRENCY: "DJ_CURRENCY",
  DJ_DATE_FROM: "DJ_DATE_FROM",
  DJ_DATE_TO: "DJ_DATE_TO",
  DJ_DC: "DJ_DC",
  DJ_DELO_FILE_NAME: "DJ_DELO_FILE_NAME",
  DJ_FILE_VALUE: "DJ_FILE_VALUE",
  DJ_FTEL_FILE_NAME: "DJ_FTEL_FILE_NAME",
  DJ_ID: "DJ_ID",
  DJ_REPORT_TYPE_CD: "DJ_REPORT_TYPE_CD",
  DJ_ROWCOUNT: "DJ_ROWCOUNT",
  ENTERED_BY_PERS_NAME: "ENTERED_BY_PERS_NAME",
  ENTERED_BY_PERS_SURNAME: "ENTERED_BY_PERS_SURNAME",
  EXRT_MIDDLE: "EXRT_MIDDLE",
  FAVO_DELETABLE: "FAVO_DELETABLE",
  FAVO_HIDDEN: "FAVO_HIDDEN",
  FAVO_ID: "FAVO_ID",
  FAVO_LABEL_TEXT: "FAVO_LABEL_TEXT",
  FAVO_LABEL_TEXT_2: "FAVO_LABEL_TEXT_2",
  FAVO_MODULE_COMPONENT: "FAVO_MODULE_COMPONENT",
  FAVO_MODULE_TYPE: "FAVO_MODULE_TYPE",
  FAVO_POSITION: "FAVO_POSITION",
  FAVO_TABLET_POSITION: "FAVO_TABLET_POSITION",
  FAVO_TRANSITION_STATE: "FAVO_TRANSITION_STATE",
  FAVO_PROD_ID: "FAVO_PROD_ID",
  FAVO_CORI_ALIAS: "FAVO_CORI_ALIAS",
  FAVO_PROD_IBAN: "FAVO_PROD_IBAN",
  FAVO_PROD_NO: "FAVO_PROD_NO",
  FILTER: "FILTER",
  FIEL_NAME: "FIEL_NAME",
  FIEL_VALUE: "FIEL_VALUE",
  FILT_ID: "FILT_ID",
  FILT_NAME: "FILT_NAME",
  FILT_TYPE: "FILT_TYPE",
  FILT_IS_DEFAULT: "FILT_IS_DEFAULT_FILTER",
  FIUF_DESCRIPTION: "FIUF_DESCRIPTION",
  FIUF_ID: "FIUF_ID",
  FIUF_TYPE: "FIUF_TYPE",
  FIUP_ACCO_CURR_CD: "FIUP_ACCO_CURR_CD",
  FIUP_ACTUAL_FILE: "FIUP_ACTUAL_FILE",
  FIUP_EXECUTION_DATE: "FIUP_EXECUTION_DATE",
  FIUP_FILE_NAME: "FIUP_FILE_NAME",
  FIUP_PARENT_FILE_NAME: "FIUP_PARENT_FILE_NAME",
  FIUP_FILE_STATUS: "FIUP_FILE_STATUS",
  FIUP_ID: "FIUP_ID",
  FIUP_ISSUER: "FIUP_ISSUER",
  FIUP_ISSUER_ACCO_NO: "FIUP_ISSUER_ACCO_NO",
  FIUP_NNE_NUMBER: "FIUP_NNE_NUMBER",
  FIUP_NUMBER_OF_RECORDS: "FIUP_NUMBER_OF_RECORDS",
  FIUP_NUMBER_OF_ORDERS: "FIUP_NUMBER_OF_ORDERS",
  FIUP_SUMMARY_INFO: "FIUP_SUMMARY_INFO",
  FIUP_TOTAL_AMOUNT: "FIUP_TOTAL_AMOUNT",
  FIUP_UPLOAD_DATE: "FIUP_UPLOAD_DATE",
  FOTD_DC: "FOTD_DC",
  FOTD_DEVICE_NAME: "FOTD_DEVICE_NAME",
  FOTD_ID: "FOTD_ID",
  FOTD_STATUS: "FOTD_STATUS",
  FTEL_ACCO_ID: "FTEL_ACCO_ID",
  FTEL_AMOUNT: "FTEL_AMOUNT",
  FTEL_CREATED_AT: "FTEL_CREATED_AT",
  FTEL_CURR_ISO_CODE: "FTEL_CURR_ISO_CODE",
  FTEL_CUST_CURR_ISO_CODE: "FTEL_CUST_CURR_ISO_CODE",
  FTEL_ID: "FTEL_ID",
  FTEL_MODIFIED_AT: "FTEL_MODIFIED_AT",
  FTEL_PAYM_COUNT: "FTEL_PAYM_COUNT",
  FTEL_PAYMENT_TYPE_CD: "FTEL_PAYMENT_TYPE_CD",
  FTEL_EXECUTE_AT: "FTEL_EXECUTE_AT",
  FTEL_REFERENCE: "FTEL_REFERENCE",
  FTEL_SALARY_PAYMENT: "FTEL_SALARY_PAYMENT",
  FTEL_STATUS: "FTEL_STATUS",
  FTEL_STATUS_UNIFORM: "FTEL_STATUS_UNIFORM",
  FTEL_TYPE_CD: "FTEL_TYPE_CD",
  FXOR_AMOUNT: "FXOR_AMOUNT",
  FXOR_EXECUTION_CD: "FXOR_EXECUTION_CD",
  FXOR_HOST_ORDER_NO: "FXOR_HOST_ORDER_NO",
  FXOR_HOST_RATE: "FXOR_HOST_RATE",
  FXOR_ID: "FXOR_ID",
  FXOR_ORDER_STATUS_CD: "FXOR_ORDER_STATUS_CD",
  FXOR_TYPE_CD: "FXOR_TYPE_CD",
  FXOR_VALUE_DATE: "FXOR_VALUE_DATE",
  GEODIST_DESCRIPTION: "GEODIST_DESCRIPTION",
  HAS_CREDIT_TRADING_ACCO: "HAS_CREDIT_TRADING_ACCO",
  HAS_DEBIT_TRADING_ACCO: "HAS_DEBIT_TRADING_ACCO",
  HAS_POSITION_CRITERIA: "HAS_POSITION_CRITERIA",
  HOLIDAY_HANDLING: "HOLIDAY_HANDLING",
  IBSTR_IBAN_NATIONAL_CD_LENGTH: "IBSTR_IBAN_NATIONAL_CD_LENGTH",
  IBSTR_IBAN_TOTAL_LENGTH: "IBSTR_IBAN_TOTAL_LENGTH",
  INAC_ACK_TIMESTAMP: "INAC_ACK_TIMESTAMP",
  INDTY_DESCRIPTION: "INDTY_DESCRIPTION",
  INDTYT_DESCRIPTION: "INDTYT_DESCRIPTION",
  INFO_ATTACHMENTS: "INFO_ATTACHMENTS",
  INFO_ID: "INFO_ID",
  INFO_OFFSET_VALID_FROM: "OFFSET_VALID_FROM",
  INFO_REQUIRES_ACK: "INFO_REQUIRES_ACK",
  INFO_TEXT: "INFO_TEXT",
  INFO_TITLE: "INFO_TITLE",
  INFO_VALID_FROM: "INFO_VALID_FROM",
  IPS_ID: "IPS_ID",
  IPS_NAME: "IPS_NAME",
  IPS_NO: "IPS_NO",
  IPS_PRODUCT_NAME: "IPS_PRODUCT_NAME",
  IPS_REFERENCE_CURR_ISO_CODE: "IPS_REFERENCE_CURR_ISO_CODE",
  IPS_REFERENCE_CURR_MNEMONIC: "IPS_REFERENCE_CURR_MNEMONIC",
  IPS_STATUS: "IPS_STATUS",
  IPS_VALUE: "IPS_VALUE",
  ISFI_ID: "ISFI_ID",
  ISFI_ISO_STATUS: "ISFI_ISO_STATUS",
  ISIN: "ISIN",
  ISIN_NO: "ISIN_NO",
  ISPI_PAYMENT_INFORMATION_ID: "ISPI_PAYMENT_INFORMATION_ID",
  ISPT_PAYMENT_INSTRUCTION_ID: "ISPT_PAYMENT_INSTRUCTION_ID",
  ISSU_COMPANY: "ISSU_COMPANY",
  ISSU_CURR_MNEMONIC: "ISSU_CURR_MNEMONIC",
  ISSU_DENOMINATION1: "ISSU_DENOMINATION1",
  ISSU_ID: "ISSU_ID",
  ISSU_PAYMENT_AT: "ISSU_PAYMENT_AT",
  ISSU_REFUND1: "ISSU_REFUND1",
  ISSU_REFUND2: "ISSU_REFUND2",
  ISSU_REFUND3: "ISSU_REFUND3",
  ISSU_SECURITY_NO: "ISSU_SECURITY_NO",
  ISSU_SUBSCRIPTION_CLOSING: "ISSU_SUBSCRIPTION_CLOSING",
  ISSU_SUBSCRIPTION_PERIOD: "ISSU_SUBSCRIPTION_PERIOD",
  IS_THIRD_PARTY: "IS_THIRD_PARTY",
  JSON_ACCO_NUMBER: "AccoNumber",
  JSON_ACCOUNT: "Account",
  JSON_ACCOUNTS: "Accounts",
  JSON_ACCOUNT_DESC: "accountDesc",
  JSON_ACCOUNT_DETAILS: "accountDetails",
  JSON_ACCOUNT_DETAILS_UPP: "AccountDetails",
  JSON_ACCOUNT_GROUPS: "AccountGroups",
  JSON_ACCOUNT_IBAN: "accountIban",
  JSON_ACCOUNT_L: "account",
  JSON_ACTION_NEEDED: "ActionNeeded",
  JSON_ACTIONS: "Actions",
  JSON_ACTIVE_TEMPLATES_COUNT: "ActiveTemplatesCount",
  JSON_ADDED: "Added",
  JSON_ADDITIONAL_INFO: "AdditionalInfo",
  JSON_ADDRESS: "Address",
  JSON_ADDRESS_RELATION_ID: "AddressRelationId",
  JSON_ADVISOR: "Advisor",
  JSON_ADVISORS: "Advisors",
  JSON_ADVISOR_DETAIL: "AdvisorDetail",
  JSON_AMOUNT: "amount",
  JSON_ASSET_ID: "AssetId",
  JSON_ATTACHMENTS: "Attachments",
  JSON_AUTO_PAYMENT_AMOUNT: "autoPaymentAmount",
  JSON_AUTO_PAYMENT_CURRENCY: "autoPaymentCurrency",
  JSON_AUTO_PAYMENT_ERROR_CODE: "autoPaymentErrorCode",
  JSON_AUTO_PAYMENT_ID: "autoPaymentId",
  JSON_AUTO_PAYMENT_LIMIT: "autoPaymentLimit",
  JSON_AUTO_PAYMENT_TIME_PERIOD: "autoPaymentTimePeriod",
  JSON_AUTO_PAYMENT_DEBIT_ACCOUNT: "autoPaymentDebitAccount",
  JSON_AUTO_PAYMENT_DEBIT_NOTE: "autoPaymentDebitNote",
  NEW_INVOICE: "newInvoice",
  JSON_AVAILABLE: "AVAILABLE",
  JSON_BD: "bd",
  JSON_BILL_ID: "billId",
  JSON_BILL_TRX_REFERENCE: "billTrxReference",
  JSON_BILLER_CITY: "billerCity",
  JSON_BILLER_NAME: "billerName",
  JSON_BILLER_PID: "billerPid",
  JSON_BILLER_STREET: "billerStreet",
  JSON_BILLER_ZIP: "billerZip",
  JSON_BILLING_DATE: "billingDate",
  JSON_BLOCKED_QUANTITY: "blockedQuantity",
  JSON_BLOCKED_VALID_TO: "blockedValidTo",
  JSON_BLOCKED_REASON: "blockedReason",
  JSON_BLOG_LINK: "blogLink",
  JSON_BN: "bn",
  JSON_BROKERAGE_ACCOUNTS: "BrokerageAccounts",
  JSON_BULK_DETAIL_PERMISSIONS: "BULK_DETAIL_PERMISSIONS",
  JSON_BULK_PAYMENT_PERMISSIONS: "BULK_PAYMENT_PERMISSIONS",
  JSON_BULK_DETAIL_ID: "BUPD_ID",
  JSON_CA: "ca",
  JSON_CARD: "CapCardPAN",
  JSON_CARD_ACCOUNT: "CardAccount",
  JSON_CATEGORY_RELATION: "CategoryRelation",
  JSON_CENSORED_PHONE_NO: "CensoredPhone",
  JSON_CENSORED_PHONE_NO_1: "Censored_phone_1",
  JSON_CENSORED_PHONE_NO_2: "Censored_phone_2",
  JSON_CENSORED_PHONE_NUMBER: "Censored_phone",
  JSON_CH: "ch",
  JSON_CITY: "City",
  JSON_CLEARED: "Cleared",
  JSON_CLEARED_EOD: "ClearedEod",
  JSON_CN: "cn",
  JSON_COUNTERSIGNED: "Countersigned",
  JSON_COUNTRY: "Country",
  JSON_CREDIT: "CREDIT",
  JSON_CREDIT_ACCOUNT: "CreditAccount",
  JSON_CREDIT_ACCOUNTS: "CreditAccounts",
  JSON_CREDIT_CARDS: "Cards",
  JSON_CREDIT_NOTES: "CreditNotes",
  JSON_CUAV_ID: "CuavId",
  JSON_CURRENCY: "currency",
  JSON_CURRENCY_ACCOUNT_COLLECTIVE_BOOKING_DETAILS:
    "CurrencyAccountCollectiveBookingDetails",
  JSON_CURRENCY_CODE: "CurrencyCode",
  JSON_CUST_NAME: "CustName",
  JSON_CUST_NO: "CustNo",
  JSON_CUST_SURNAME: "CustSurname",
  JSON_CUST_TOTAL_ASSET: "CustTotalAsset",
  JSON_CUSTODY_ACCOUNT: "CustodyAccount",
  JSON_CUSTODY_ACCOUNTS: "CustodyAccounts",
  JSON_CUSTOM_DATA: "customData",
  JSON_CUSTOM_DATA_EXTENDED: "customDataExtended",
  JSON_CUSTOMER_ACCOUNT_NUMBER: "customerAccountNumber",
  JSON_CUSTOMER_CURR_CD: "CustomerCurrCd",
  JSON_CUSTOMER_CURRENCY_AMOUNT: "CUSTOMER_CURRENCY_AMOUNT",
  JSON_CUSTOMER_CURRENCY_ISO_CODE: "CUSTOMER_CURRENCY_ISO_CODE",
  JSON_CUSTOMER_ID: "CustomerId",
  JSON_CUSTOMER_PAYNET_REFERENCE: "customerPaynetReference",
  JSON_DA: "da",
  JSON_DATE: "Date",
  JSON_DATE_FROM: "dateFrom",
  JSON_DATE_L: "date",
  JSON_DATE_MS: "dateMs",
  JSON_DATE_TO: "dateTo",
  JSON_DEBIT_ACCOUNT: "DebitAccount",
  JSON_DEBIT_ACCOUNTS: "DebitAccounts",
  JSON_DEBIT_ACCOUNT_ID: "debitAccountId",
  JSON_DEBIT_ACCOUNT_NUMBER: "DebitAccountNumber",
  JSON_DEFAULT_FILTER: "DEFAULT_FILTER",
  JSON_DELIVERY_CHANGE: "DeliveryChange",
  JSON_DELIVERY_CHANGE_ALLOWED: "DeliveryChangeAllowed",
  JSON_DELIVERY_CHANGE_PROCESSING: "DeliveryChangeProcessing",
  JSON_DELIVERY_TYPE: "DeliveryType",
  JSON_DESCRIPTION: "DESCRIPTION",
  JSON_DESCRIPTION_L: "description",
  JSON_DUE_DATE: "dueDate",
  JSON_EDITABLE: "editable",
  JSON_EMAIL: "Email",
  JSON_EMAIL_VERIFIED: "EmailVerified",
  JSON_ENTERED_DATE: "enteredDate",
  JSON_ENTRY_PERM: "EntryPerm",
  JSON_EXCHANGE_RATE: "ExchangeRate",
  JSON_FILE_NAME: "FileName",
  JSON_FILTER_ELEMENTS: "FilterElements",
  JSON_FILTERED_ACTIVE_TEMPLATES_COUNT: "FilteredActiveTemplatesCount",
  JSON_FORECAST_VALUE: "ForecastValue",
  JSON_HAS_PENDING_ORDERS: "hasPendingOrders",
  JSON_HAS_PENDING_PAYMENTS: "hasPendingPayments",
  JSON_HAS_VALIDATION_STATUS: "HAS_VALIDATION_STATUS",
  JSON_HOLIDAY_ALLOWED: "HOLIDAY_ALLOWED",
  JSON_HOUSE_NUMBER: "HouseNumber",
  JSON_IBAN: "IBAN",
  JSON_IC: "ic",
  JSON_ID: "id",
  JSON_ID_U: "ID",
  JSON_IMAGE_CACHED: "imageCached",
  JSON_IMAGE_URL: "imageUrl",
  JSON_INDUSTRY: "industry",
  JSON_INDUSTRY_DESC: "industryDesc",
  JSON_IS_BALANCE_PREVIEW: "isBalancePreview",
  JSON_IS_CASH: "isCash",
  JSON_IS_VIRTUAL: "isVirtual",
  JSON_LINE_NUMBER: "LineNumber",
  JSON_MARKET_VALUE: "MarketValue",
  JSON_MATURITY_DATE: "MATURITY_DATE",
  JSON_MAX_PHONES_REGISTRABLE: "MaxPhonesRegistrable",
  JSON_MOBILE_BANKING_REGISTRATION_ALLOWED: "MobileBankingRegistrationAllowed",
  JSON_MODULE_COMPONENT: "ModuleComponent",
  JSON_MODULE_TYPE: "ModuleType",
  JSON_IS_MORTGAGE: "IS_MORTGAGE",
  JSON_MS: "ms",
  JSON_MY_CONTRACT: "MyContract",
  JSON_NAME: "name",
  JSON_NAME_U: "NAME",
  JSON_NAME_X: "Name",
  JSON_NO: "NO",
  JSON_NO_FORM: "NO_FORM",
  JSON_NON_DELETED_TEMPLATES_COUNT: "NonDeletedTemplatesCount",
  JSON_NOTICE_ACCOUNT: "NoticeAccount",
  JSON_NUM: "Num",
  JSON_OPEN_EBILLS: "OpenEBills",
  JSON_OUTSTANDING_AMOUNT: "OutstandingAmount",
  JSON_OVERVIEW: "overview",
  JSON_PAYM: "Paym",
  JSON_PAYM_ASSISTANT_BADI_CITY: "badiCity",
  JSON_PAYM_ASSISTANT_BADI_NAME: "badiName",
  JSON_PAYM_ASSISTANT_BADI_STREET: "badiStreet",
  JSON_PAYM_ASSISTANT_BADI_ZIP: "badiZip",
  JSON_PAYMENT_TEMPLATE_GROUP_ID: "PaymentTemplateGroupId",
  JSON_PAYMENT_TYPE: "paymentType",
  JSON_PAYMENT_TYPE_CODE: "paymenTypeCode",
  JSON_PAYMENT_TYPE_DEPA_CONFIG: "PaymentTypeDepaConfig",
  JSON_PENDING_CHANGES: "PendingChanges",
  JSON_PERMANENT_ORDER_EXECUTION_DATE: "permanentOrderExecutionDate",
  JSON_PERMISSIONS: "Permissions",
  JSON_PHONE: "Phone",
  JSON_PHONE_1_DELETABLE: "Phone1Deletable",
  JSON_PHONE_1_EDITABLE: "Phone1Editable",
  JSON_PHONE_2_DELETABLE: "Phone2Deletable",
  JSON_PHONE_2_EDITABLE: "Phone2Editable",
  JSON_PORTFOL_NAME: "PortfolName",
  JSON_PORTFOLIO_GROUP_MEMBERS: "PortfolioGroupMembers",
  JSON_PORTFOLIO: "Portfolio",
  JSON_PORTFOLIOS: "Portfolios",
  JSON_POS_CURRENCY: "PosCurrency",
  JSON_POS_MKT_VAL: "PosMktVal",
  JSON_POSTAL_NUMBER: "PostalNumber",
  JSON_POSTER_IMAGE_CACHED: "posterImageCached",
  JSON_POSTER_IMAGE_URL: "posterImageUrl",
  JSON_POSTER_LINK: "posterLink",
  JSON_POSTER_NAME: "posterName",
  JSON_PRESENTATION_URL: "presentationUrl",
  JSON_PREVIEW_IMAGE_CACHED: "previewImageCached",
  JSON_PREVIEW_IMAGE_URL: "previewImageUrl",
  JSON_PROD_REF_VALUE: "PROD_REF_VALUE",
  JSON_PROD_VALID_UNTIL: "PROD_VALID_UNTIL",
  JSON_PROD_VAL: "ProdVal",
  JSON_PROFILE: "Profile",
  JSON_PROFILES: "Profiles",
  JSON_PT: "pt",
  JSON_REAL_ID: "realId",
  JSON_REF_CURR_MNEMONIC: "REF_CURR_MNEMONIC",
  JSON_REGISTERED_BILLERS: "RegisteredBillers",
  JSON_REGULAR_LIMIT_AMOUNT: "REGULAR_LIMIT_AMOUNT",
  JSON_REPLIED_AT: "repliedAt",
  JSON_REQUEST: "Request",
  JSON_RESPONSE: "Response",
  JSON_RESTRICTED_FEATURES_ALLOWED: "RestrictedFeaturesAllowed",
  JSON_RIGHTS: "Rights",
  JSON_SALARY_GROUP: "SalaryGroup",
  JSON_SALARY_PAYMENTS: "SalaryPayments",
  JSON_SEC_TYPE_FORMAT_PATTERN: "secTypeFormatPattern",
  JSON_SECURITY_TYPE_FORMAT_PATTERN: "securityTypeFormatPattern",
  JSON_SELI_ID: "SeliId",
  JSON_SERVICE_CALL_DETAILS: "ServiceCallDetails",
  JSON_SO_REGULAR_LIMIT_AMOUNT: "SO_REGULAR_LIMIT_AMOUNT",
  JSON_SPECIAL_ACCOUNT: "SPECIAL_ACCOUNT",
  JSON_STATUS: "Status",
  JSON_STATUS_L: "status",
  JSON_STREET: "Street",
  JSON_SUBSCRIPTION_URL: "subscriptionUrl",
  JSON_SUPPORTED_PAYMENT_TYPES: "SupportedPaymentTypes",
  JSON_SUPPORTS_SEPA: "supportsSepa",
  JSON_SUPPRESS_ALTERNATIVE_NUMBER: "SuppressAlternativeNumber",
  JSON_SYS_FILTER: "SYS_FILTER",
  JSON_TAGS: "tags",
  JSON_TEMPLATES_COUNT: "TemplatesCount",
  JSON_TEXT_SHORT: "TextShort",
  JSON_TITLE: "title",
  JSON_TOTAL_ORDER_VALUE: "TotalOrderValue",
  JSON_TRANSACTION_DETAILS: "TransactionDetails",
  JSON_TRX_TYPE: "trxType",
  JSON_TX: "tx",
  JSON_TX1: "tx1",
  JSON_TYPE: "type",
  JSON_TYPE_CD: "TYPE_CD",
  JSON_TYPE_TT: "TYPE_TT",
  JSON_TYPE_U: "TYPE",
  JSON_UNCLEARED: "Uncleared",
  JSON_UNCLEARED_EOD: "UnclearedEod",
  JSON_UNSUBSCRIPTION_URL: "unsubscriptionUrl",
  JSON_UPCOMING_VALUE: "UpcomingValue",
  JSON_VAB: "vab",
  JSON_VALIDATION_DETAILS: "ValidationDetails",
  JSON_VALUE: "value",
  JSON_VALUE_CURR_MNEMONIC: "VALUE_CURR_MNEMONIC",
  JSON_VALUE_ISO_CODE: "VALUE_ISO_CODE",
  JSON_VALUE_U: "VALUE",
  JSON_VBD: "vbd",
  JSON_VD: "vd",
  JSON_VEB: "veb",
  JSON_VIDEO_URL: "videoUrl",
  JSON_VISA1_USER: "Visa1User",
  JSON_WEEKEND_ALLOWED: "WEEKEND_ALLOWED",
  JSON_WIDGET: "Widget",
  JUST_READ: "JUST_READ",
  KEY: "KEY",
  LAST_ASK: "LAST_ASK",
  LAST_BID: "LAST_BID",
  LAST_VALUE: "LAST_VALUE",
  LIMI_AMOUNT: "LIMI_AMOUNT",
  LIMI_COUNTERSIGN_STATUS: "LIMI_COUNTERSIGN_STATUS",
  LITY_ID: "LITY_ID",
  LOSE_ACS: "LOSE_ACS",
  LOSE_CONT_NO: "LOSE_CONT_NO",
  LOSE_LOGIN_AT: "LOSE_LOGIN_AT",
  LOSE_PERS_LOGIN_NAME: "LOSE_PERS_LOGIN_NAME",
  MAAT_FILENAME: "MAAT_FILENAME",
  MAAT_ID: "MAAT_ID",
  MAAT_MIME_TYPE: "MAAT_MIME_TYPE",
  MANAGEMENT_GOAL: "MANAGEMENT_GOAL",
  MANAGEMENT_TYPE: "MANAGEMENT_TYPE",
  MAPL_ALIAS: "MAPL_ALIAS",
  MAPL_CD: "MAPL_CD",
  MAPL_COUN_DESCRIPTION: "MAPL_COUN_DESCRIPTION",
  MAPL_ID: "MAPL_ID",
  MAPL_MATT_DESCRIPTION_SHORT: "MAPL_MATT_DESCRIPTION_SHORT",
  MAPLT_DESCRIPTION: "MAPLT_DESCRIPTION",
  MATT_DESCRIPTION: "MATT_DESCRIPTION",
  MATT_DESCRIPTION_SHORT: "MATT_DESCRIPTION_SHORT",
  MATR_PROD_ID: "MATR_PROD_ID",
  MATR_CURR_CD: "MATR_CURR_CD",
  MATR_CURR_ROW_TYPE: "MATR_CURR_ROW_TYPE",
  MATR_FACTOR: "MATR_FACTOR",
  MATR_ON_CALL: "MATR_ON_CALL",
  MATR_LIQUID_ASSETS: "MATR_LIQUID_ASSETS",
  MATR_MONTH_CURRENT: "MATR_MONTH_CURRENT",
  MATR_MONTH_PLUS_1: "MATR_MONTH_PLUS_1",
  MATR_MONTH_PLUS_2: "MATR_MONTH_PLUS_2",
  MATR_MONTH_PLUS_3: "MATR_MONTH_PLUS_3",
  MATR_QUARTER_PLUS_1: "MATR_QUARTER_PLUS_1",
  MATR_QUARTER_PLUS_2: "MATR_QUARTER_PLUS_2",
  MATR_QUARTER_PLUS_3: "MATR_QUARTER_PLUS_3",
  MATR_VALUE_DATE: "MATR_VALUE_DATE",
  MSAL_CATE_ID: "MSAL_CATE_ID",
  MSAL_FORWARD_ORIGINAL: "MSAL_FORWARD_ORIGINAL",
  MSAL_MESSAGE_TYPE: "MSAL_MESSAGE_TYPE",
  ORCO_ITEM_COUNT: "ORCO_ITEM_COUNT",
  ORCO_ORDER_NO: "ORCO_ORDER_NO",
  ORDE_ACCO_ID: "ORDE_ACCO_ID",
  ORDE_AGREED_PRICE: "ORDE_AGREED_PRICE",
  ORDE_AMOUNT: "ORDE_AMOUNT",
  ORDE_AMOUNT_EXECUTED: "ORDE_AMOUNT_EXECUTED",
  ORDE_AMOUNT_TYPE: "ORDE_AMOUNT_TYPE",
  ORDE_AVERAGE_PRICE: "ORDE_AVERAGE_PRICE",
  ORDE_CANCELLED_BY: "ORDE_CANCELLED_BY",
  ORDE_COLL_ORDER_ITEM_NO: "ORDE_COLL_ORDER_ITEM_NO",
  ORDE_CUAC_ID: "ORDE_CUAC_ID",
  ORDE_CUAV_ID: "ORDE_CUAV_ID",
  ORDE_CURR_ID: "ORDE_CURR_ID",
  ORDE_ENTERED_BY: "ORDE_ENTERED_BY",
  ORDE_ERROR_CD: "ORDE_ERROR_CD",
  ORDE_ERROR_TEXT: "ORDE_ERROR_TEXT",
  ORDE_EXEC_MAPL_ALIAS: "ORDE_EXEC_MAPL_ALIAS",
  ORDE_EXEC_MAPL_CD: "ORDE_EXEC_MAPL_CD",
  ORDE_EXEC_MAPL_DESC_SHORT: "ORDE_EXEC_MAPL_DESC_SHORT",
  ORDE_EXEC_MAPL_DESCRIPTION: "ORDE_EXEC_MAPL_DESCRIPTION",
  ORDE_EXECUTION_TIME: "ORDE_EXECUTION_TIME",
  ORDE_EXTERNALLY_MANAGED: "ORDE_EXTERNALLY_MANAGED",
  ORDE_ID: "ORDE_ID",
  ORDE_HOST_ORDER_NO: "ORDE_HOST_ORDER_NO",
  ORDE_LIMIT: "ORDE_LIMIT",
  ORDE_MAPL_ID: "ORDE_MAPL_ID",
  ORDE_ORDER_CANCEL_CD: "ORDE_ORDER_CANCEL_CD",
  ORDE_ORDER_STATUS_CD: "ORDE_ORDER_STATUS_CD",
  ORDE_ORDER_STATUS_DATE: "ORDE_ORDER_STATUS_DATE",
  ORDE_ORDERED_AT: "ORDE_ORDERED_AT",
  ORDE_ORDERED_BY_PERS_ID: "ORDE_ORDERED_BY_PERS_ID",
  ORDE_ORIGINATING_SYSTEM_CD: "ORDE_ORIGINATING_SYSTEM_CD",
  ORDE_ORUN_ID: "ORDE_ORUN_ID",
  ORDE_PROCESSING_TYPE: "ORDE_PROCESSING_TYPE",
  ORDE_SECU_ID: "ORDE_SECU_ID",
  ORDE_SHARE_REGISTER_CD: "ORDE_SHARE_REGISTER_CD",
  ORDE_STOP_LIMIT: "ORDE_STOP_LIMIT",
  ORDE_TICKER: "ORDE_TICKER",
  ORDE_TRADE_SECURITY_NO: "ORDE_TRADE_SECURITY_NO",
  ORDE_TRANSACTION_KEY: "ORDE_TRANSACTION_KEY",
  ORDE_TYPE_CD: "ORDE_TYPE_CD",
  ORDE_VALID_FROM: "ORDE_VALID_FROM",
  ORDE_VALID_UNTIL: "ORDE_VALID_UNTIL",
  ORDER_LAST_UPDATE_DATE: "ORDER_LAST_UPDATE_DATE",
  ORDE_ISSUING_COMMISSION: "ORDE_ISSUING_COMMISSION",
  ORDERED_BY_PERSON: "ORDERED_BY_PERSON",
  ORUN_BANK_CODE: "ORUN_BANK_CODE",
  ORUN_CITY: "ORUN_CITY",
  ORUN_NAME: "ORUN_NAME",
  PABE_IS_TRUSTED_BENEF: "PABE_IS_TRUSTED_BENEF",
  PAGR_ID: "PAGR_ID",
  PAGR_NAME: "PAGR_NAME",
  PARENT_CATE_CD: "PARENT_CATE_CD",
  PARENT_CATE_DESC_LONG: "PARENT_CATE_DESC_LONG",
  PARENT_CATE_DESC_SHORT: "PARENT_CATE_DESC_SHORT",
  PARENT_CATE_ID: "PARENT_CATE_ID",
  PART_NAME: "PART_NAME",
  PART_SURNAME: "PART_SURNAME",
  PART_MOBILE_NO: "PART_MOBILE_NO",
  PART_EMAIL_ADDR: "PART_EMAIL_ADDR",
  PART_SEX_CD: "PART_SEX_CD",
  PATY_ID: "PATY_ID",
  PAYM_ACCO_ID: "PAYM_ACCO_ID",
  PAYM_AMOUNT: "PAYM_AMOUNT",
  PAYM_AMOUNT_ADVISOR_ALERT_SENT: "PAYM_AMOUNT_ADVISOR_ALERT_SENT",
  PAYM_BENEFICIARY_ACCO_IS_IBAN: "PAYM_BENEFICIARY_ACCO_IS_IBAN",
  PAYM_BENEFICIARY_ACCOUNT_NO: "PAYM_BENEFICIARY_ACCOUNT_NO",
  PAYM_BENEFICIARY_BANK_ACCOUNT: "PAYM_BENEFICIARY_BANK_ACCOUNT",
  PAYM_BENEFICIARY_BC_NO: "PAYM_BENEFICIARY_BC_NO",
  PAYM_BENEFICIARY1: "PAYM_BENEFICIARY1",
  PAYM_BENEFICIARY2: "PAYM_BENEFICIARY2",
  PAYM_BENEFICIARY3: "PAYM_BENEFICIARY3",
  PAYM_BENEFICIARY4: "PAYM_BENEFICIARY4",
  PAYM_BOOKING_TEXT: "PAYM_BOOKING_TEXT",
  PAYM_CREATED_AT: "PAYM_CREATED_AT",
  PAYM_CREDIT_DEBIT_CD: "PAYM_CREDIT_DEBIT_CD",
  PAYM_CREDIT_FORM: "PAYM_CREDIT_FORM",
  PAYM_CREDIT_ACCOUNT_BANK_CODE: "PAYM_CREDIT_ACCOUNT_BANK_CODE",
  PAYM_CREDIT_ACCOUNT_AGENCY_CODE: "PAYM_CREDIT_ACCOUNT_AGENCY_CODE",
  PAYM_CREDIT_ACCOUNT_ACC_NUM: "PAYM_CREDIT_ACCOUNT_ACC_NUM",
  PAYM_CREDIT_ACCOUNT_CONTROL_NUM: "PAYM_CREDIT_ACCOUNT_CONTROL_NUM",
  PAYM_CURR_ID: "PAYM_CURR_ID",
  PAYM_DC: "PAYM_DC",
  PAYM_DEBIT_FORM: "PAYM_DEBIT_FORM",
  PAYM_DEBITING_DATE: "PAYM_DEBITING_DATE",
  PAYM_ECON_REASON: "PAYM_ECON_REASON",
  PAYM_ENTERED_BY_PERS_ID: "PAYM_ENTERED_BY_PERS_ID",
  PAYM_ERROR_CD: "PAYM_ERROR_CD",
  PAYM_EXCLUDE_FROM_WHITELIST: "PAYM_EXCLUDE_FROM_WHITELIST",
  PAYM_EXECUTE_AT: "PAYM_EXECUTE_AT",
  PAYM_EXPENSE_CD: "PAYM_EXPENSE_CD",
  PAYM_EXTERNALLY_MANAGED: "PAYM_EXTERNALLY_MANAGED",
  PAYM_FREEZE: "PAYM_FREEZE",
  PAYM_FTEL_ID: "PAYM_FTEL_ID",
  PAYM_FX_RATE: "PAYM_FX_RATE",
  PAYM_ID: "PAYM_ID",
  PAYM_IPI_BANK_SWIFT_BIC_NO: "PAYM_IPI_BANK_SWIFT_BIC_NO",
  PAYM_IS_IMMEDIATE: "PAYM_IS_IMMEDIATE",
  PAYM_IS_REALISED: "PAYM_IS_REALISED",
  PAYM_ISPT_ID: "PAYM_ISPT_ID",
  PAYM_JAILBREAKED: "PAYM_JAILBREAKED",
  PAYM_HOST_ORDER_NO: "PAYM_HOST_ORDER_NO",
  PAYM_HOST_REFERENCE_NO: "PAYM_HOST_REFERENCE_NO",
  PAYM_MESSAGE1: "PAYM_MESSAGE1",
  PAYM_MESSAGE2: "PAYM_MESSAGE2",
  PAYM_MESSAGE3: "PAYM_MESSAGE3",
  PAYM_MESSAGE4: "PAYM_MESSAGE4",
  PAYM_MODIFIED_AT: "PAYM_MODIFIED_AT",
  PAYM_OBJECT_NO: "PAYM_OBJECT_NO",
  PAYM_ORIGIN_CD: "PAYM_ORIGIN_CD",
  PAYM_ORIGINAL_PAYM_ID: "PAYM_ORIGINAL_PAYM_ID",
  PAYM_ORIGINATING_SYSTEM_CD: "PAYM_ORIGINATING_SYSTEM_CD",
  PAYM_ORUN_ID: "PAYM_ORUN_ID",
  PAYM_PAGR_ID: "PAYM_PAGR_ID",
  PAYM_PATE_ID: "PAYM_PATE_ID",
  PAYM_PAYMENT_TYPE_CD: "PAYM_PAYMENT_TYPE_CD",
  PAYM_PC_NO: "PAYM_PC_NO",
  PAYM_PS_REFERENCE_NO: "PAYM_PS_REFERENCE_NO",
  PAYM_RETIREMENT_AMOUNT_TYPE: "PAYM_RETIREMENT_AMOUNT_TYPE",
  PAYM_REVEAL_CONFIDENTIAL_DATA: "PAYM_REVEAL_CONFIDENTIAL_DATA",
  PAYM_SALARY_PAYMENT: "PAYM_SALARY_PAYMENT",
  PAYM_SEQUENCE_NO: "PAYM_SEQUENCE_NO",
  PAYM_SIGN_MTAN_AVAILABLE: "PAYM_SIGN_MTAN_AVAILABLE",
  PAYM_SIGNED_WITH_MTAN: "PAYM_SIGNED_WITH_MTAN",
  PAYM_SO_ACTIVE: "PAYM_SO_ACTIVE",
  PAYM_SO_END_CONDITION_CD: "PAYM_SO_END_CONDITION_CD",
  PAYM_SO_FIRST_EXECUTION: "PAYM_SO_FIRST_EXECUTION",
  PAYM_SO_HOLIDAY_HANDLING: "PAYM_SO_HOLIDAY_HANDLING",
  PAYM_SO_LAST_AT: "PAYM_SO_LAST_AT",
  PAYM_SO_PERIOD_CD: "PAYM_SO_PERIOD_CD",
  PAYM_SO_REMAINING_EXECUTIONS: "PAYM_SO_REMAINING_EXECUTIONS",
  PAYM_SO_ULTIMO: "PAYM_SO_ULTIMO",
  PAYM_SORT_CODE: "PAYM_SORT_CODE",
  PAYM_STATUS: "PAYM_STATUS",
  PAYM_SYNC_STATUS: "PAYM_SYNC_STATUS",
  PAYM_UC: "PAYM_UC",
  PAYM_URGENT_CD: "PAYM_URGENT_CD",
  PAYM_USER_AGENT: "PAYM_USER_AGENT",
  PAYM_VALIDATION_STATUS: "PAYM_VALIDATION_STATUS",
  PAYM_VISA1_COUNTERSIGN_AT: "PAYM_VISA1_COUNTERSIGN_AT",
  PAYM_VISA1_PERS_ID: "PAYM_VISA1_PERS_ID",
  PAYM_VISA2_COUNTERSIGN_AT: "PAYM_VISA2_COUNTERSIGN_AT",
  PAYM_VISA2_PERS_ID: "PAYM_VISA2_PERS_ID",
  PAYM_VISIBLE: "PAYM_VISIBLE",
  PAYM_WHITE_BLACK_LISTED: "PAYM_WHITE_BLACK_LISTED",
  PEME_FOLDER: "PEME_FOLDER",
  PEME_ID: "PEME_ID",
  PEME_IS_REPLIED: "PEME_IS_REPLIED",
  PEME_PEME_ID: "PEME_PEME_ID",
  PEME_PMFO_ID: "PEME_PMFO_ID",
  PEME_READ_AT: "PEME_READ_AT",
  PEME_SHME_ID: "PEME_SHME_ID",
  PEPF_ALWAYS_EBANKING: "PEPF_ALWAYS_EBANKING",
  PEPF_ID: "PEPF_ID",
  PEPF_DESCRIPTION: "PEPF_DESCRIPTION",
  PEPF_NAME: "PEPF_NAME",
  PEPF_STATE: "PEPF_STATE",
  PERF_ACCRUED_INTEREST_BALANCE: "PERF_ACCRUED_INTEREST_BALANCE",
  PERF_ADJUSTED_ASSET: "PERF_ADJUSTED_ASSET",
  PERF_ADMIN_FEE: "PERF_ADMIN_FEE",
  PERF_ADMIN_FEE_PERCENT: "PERF_ADMIN_FEE_PERCENT",
  PERF_AIC: "PERF_AIC",
  PERF_ASSET_INC_PERCENT: "PERF_ASSET_INC_PERCENT",
  PERF_CUMULATED_RETURN: "PERF_CUMULATED_RETURN",
  PERF_DIVIDENT: "PERF_DIVIDENT",
  PERF_END_DATE: "PERF_END_DATE",
  PERF_ID: "PERF_ID",
  PERF_INTR_COSTS: "PERF_INTR_COSTS",
  PERF_MEAN_CAPITAL: "PERF_MEAN_CAPITAL",
  PERF_MONTH: "PERF_MONTH",
  PERF_NET_INCOME: "PERF_NET_INCOME",
  PERF_NMF: "PERF_NMF",
  PERF_NSF: "PERF_NSF",
  PERF_PERFORMANCE: "PERF_PERFORMANCE",
  PERF_PERFORMANCE_CD: "PERF_PERFORMANCE_CD",
  PERF_PERFORMANCE_MONEY: "PERF_PERFORMANCE_MONEY",
  PERF_PERFORMANCE_MONEY_CUMULATED: "PERF_PERFORMANCE_MONEY_CUMULATED",
  PERF_PERFORMANCE_TIME: "PERF_PERFORMANCE_TIME",
  PERF_PERFORMANCE_TIME_CUMULATED: "PERF_PERFORMANCE_TIME_CUMULATED",
  PERF_PROFIT_LOOSE: "PERF_PROFIT_LOOSE",
  PERF_PROFIT_LOOSE_ACCUMULATED_PERCENT:
    "PERF_PROFIT_LOOSE_ACCUMULATED_PERCENT",
  PERF_PROFIT_LOOSE_PERCENT: "PERF_PROFIT_LOOSE_PERCENT",
  PERF_RES_EARNINGS: "PERF_RES_EARNINGS",
  PERF_RETURN: "PERF_RETURN",
  PERF_START_DATE: "PERF_START_DATE",
  PERF_TAX: "PERF_TAX",
  PERF_TOTAL_ASSET_END: "PERF_TOTAL_ASSET_END",
  PERF_TOTAL_ASSET_START: "PERF_TOTAL_ASSET_START",
  PERF_TOTAL_DEPOSITS: "PERF_TOTAL_DEPOSITS",
  PERF_TOTAL_INPUT: "PERF_TOTAL_INPUT",
  PERF_TOTAL_WITHDRAWALS: "PERF_TOTAL_WITHDRAWALS",
  PERF_YEAR: "PERF_YEAR",
  PERF_PORTFOLIO_INDEX: "PERF_PORTFOLIO_INDEX",
  PERF_INIT_DATE: "PERF_INIT_DATE",
  PERM_COUNTERSIGN_STATUS: "PERM_COUNTERSIGN_STATUS",
  PERM_ID: "PERM_ID",
  PERS_LAST_LOGIN_AT: "PERS_LAST_LOGIN_AT",
  PERS_LOGIN_NAME: "PERS_LOGIN_NAME",
  PERS_LOGOUT_TIMEOUT: "PERS_LOGOUT_TIMEOUT",
  PERS_MOB_REG_STATE: "PERS_MOB_REG_STATE",
  PERS_MOB_REG_STATE_2: "PERS_MOB_REG_STATE_2",
  PERS_NAME: "PERS_NAME",
  PERS_SALUTATION: "PERS_SALUTATION",
  PERS_SURNAME: "PERS_SURNAME",
  PETY_ID: "PETY_ID",
  PETY_CD: "PETY_CD",
  PFTY_ID: "PFTY_ID",
  PFTT_DESCRIPTION: "PFTT_DESCRIPTION",
  PFTY_INVESTMENT_ALLOWED: "PFTY_INVESTMENT_ALLOWED",
  PFTY_ISSUING_COMM_ALLOWED: "PFTY_ISSUING_COMM_ALLOWED",
  PHONE_NO_1: "CONT_PHONE_NO",
  PHONE_NO_2: "CONT_PHONE_NO_2",
  PHONE_NUMBER: "PHONE_NUMBER",
  PHONE_POSITION: "PHONE_POSITION",
  PHONE_REG_STATE: "PHONE_REG_STATE",
  PHONE_VOICE_OUTPUT: "PHONE_VOICE_OUTPUT",
  PLAN_TYPE_CD: "PLAN_TYPE_CD",
  PMFO_ID: "PMFO_ID",
  PMFO_NAME: "PMFO_NAME",
  POGR_CALCULATED_AT: "POGR_CALCULATED_AT",
  POGR_CURR: "POGR_CURR",
  POGR_CURR_ISO_CODE: "POGR_CURR_ISO_CODE",
  POGR_CUSTOMER_CNT: "POGR_CUSTOMER_CNT",
  POGR_FILT_ID: "POGR_FILT_ID",
  POGR_ID: "POGR_ID",
  POGR_IS_DYNAMIC: "POGR_IS_DYNAMIC",
  POGR_NAME: "POGR_NAME",
  POGR_PORTFOLIO_CNT: "POGR_PORTFOLIO_CNT",
  POGR_VALUE: "POGR_VALUE",
  POGR_VALUE_CHF: "POGR_VALUE_CHF",
  POGR_VALUE_USD: "POGR_VALUE_USD",
  POGR_VALUE_EUR: "POGR_VALUE_EUR",
  POGR_VALUE_GBP: "POGR_VALUE_GBP",
  POPO_AMOUNT_CURR: "POPO_AMOUNT_CURR",
  POPO_DESCRIPTION: "POPO_DESCRIPTION",
  POPO_NAME: "POPO_NAME",
  POPO_VALUE: "POPO_VALUE",
  POPO_VALUE_PORT_CURR: "POPO_VALUE_PORT_CURR",
  PORT_ACCRUED_INTER_PORT_CURR: "PORT_ACCRUED_INTER_PORT_CURR",
  PORT_ACCR_INTER_CUST_CURR: "PORT_ACCR_INTER_CUST_CURR",
  PORT_DESCRIPTION: "PORT_DESCRIPTION",
  PORT_DESCRIPTION_TEXT: "PORT_DESCRIPTION_TEXT",
  PORT_ID: "PORT_ID",
  PORT_IPS_ID: "PORT_IPS_ID",
  PORT_PROD_DESCRIPTION: "PORT_PROD_DESCRIPTION",
  PORT_PROD_ID: "PORT_PROD_ID",
  PORT_PROD_NO: "PORT_PROD_NO",
  PORT_PROD_VALUE: "PORT_PROD_VALUE",
  PORT_PROD_NO_FORM: "PORT_PROD_NO_FORM",
  PORT_PROD_VALUE_P_CURR: "PORT_PROD_VALUE_P_CURR",
  PORT_PRODUCT_NAME: "PORT_PRODUCT_NAME",
  PORT_TEXT1: "PORT_TEXT1",
  PORT_TEXT2: "PORT_TEXT2",
  PORT_TEXT3: "PORT_TEXT3",
  PORT_TEXT4: "PORT_TEXT4",
  PORT_TEXT5: "PORT_TEXT5",
  PORT_TEXT6: "PORT_TEXT6",
  PORT_TEXT7: "PORT_TEXT7",
  PORT_TEXT8: "PORT_TEXT8",
  PORT_TEXT9: "PORT_TEXT9",
  PORT_TEXT10: "PORT_TEXT10",
  PORT_VALUE1: "PORT_VALUE1",
  PORT_VALUE2: "PORT_VALUE2",
  PORT_VALUE3: "PORT_VALUE3",
  PORT_VALUE4: "PORT_VALUE4",
  PORT_VALUE5: "PORT_VALUE5",
  PORT_VALUE6: "PORT_VALUE6",
  PORT_VALUE7: "PORT_VALUE7",
  PORT_VALUE8: "PORT_VALUE8",
  PORT_VALUE9: "PORT_VALUE9",
  PORT_VALUE10: "PORT_VALUE10",
  PORT_PLAN_TYPE_CD: "PORT_PLAN_TYPE_CD",
  PORT_TOTAL_ACCR_INTEREST: "PORT_TOTAL_ACCR_INTEREST",
  PORTFOLIO_WEIGHT: "PORTFOLIO_WEIGHT",
  PORTFOLIO_WEIGHT_ACCR_INT: "PORTFOLIO_WEIGHT_ACCR_INT",
  PRICE_RATE: "PRICE_RATE",
  PROD_ACCRUED_INTEREST: "PROD_ACCRUED_INTEREST",
  PROD_ACCRUED_INTER_PORT_CURR: "PROD_ACCRUED_INTER_PORT_CURR",
  PROD_ACCR_INTER_CUST_CURR: "PROD_ACCR_INTER_CUST_CURR",
  PROD_ALIAS: "PROD_ALIAS",
  PROD_CREDIT_DESCRIPTION: "PROD_CREDIT_DESCRIPTION",
  PROD_CREDIT_IBAN: "PROD_CREDIT_IBAN",
  PROD_CREDIT_NO: "PROD_CREDIT_NO",
  PROD_CREDIT_NO_FORM: "PROD_CREDIT_NO_FORM",
  PROD_CUST_ID: "PROD_CUST_ID",
  PROD_DEBIT_DESCRIPTION: "PROD_DEBIT_DESCRIPTION",
  PROD_DEBIT_IBAN: "PROD_DEBIT_IBAN",
  PROD_DEBIT_NO: "PROD_DEBIT_NO",
  PROD_DEBIT_NO_FORM: "PROD_DEBIT_NO_FORM",
  PROD_DESCRIPTION: "PROD_DESCRIPTION",
  PROD_ESR_PARTICIPANT_NO: "PROD_ESR_PARTICIPANT_NO",
  PROD_IBAN: "PROD_IBAN",
  PROD_ID: "PROD_ID",
  PROD_INFOTEXT_CD: "PROD_INFOTEXT_CD",
  PROD_NO: "PROD_NO",
  PROD_NO_FORM: "PROD_NO_FORM",
  PROD_OUT_ALLOWED: "PROD_OUT_ALLOWED",
  PROD_IN_ALLOWED: "PROD_IN_ALLOWED",
  PROD_PROD_ID: "PROD_PROD_ID",
  PROD_STATUS: "PROD_STATUS",
  PROD_VALID_FROM: "PROD_VALID_FROM",
  PROD_VALID_UNTIL: "PROD_VALID_UNTIL",
  PROD_VALUE: "PROD_VALUE",
  PROD_VALUE_C_CURR: "PROD_VALUE_C_CURR",
  PROD_VALUE_CLEARED: "PROD_VALUE_CLEARED",
  PROD_VALUE_CLEARED_EOD: "PROD_VALUE_CLEARED_EOD",
  PROD_VALUE_CURR_ISO_CODE: "PROD_VALUE_CURR_ISO_CODE",
  PROD_VALUE_CURR_MNEMONIC: "PROD_VALUE_CURR_MNEMONIC",
  PORT_CURR_MNEMONIC: "PORT_CURR_MNEMONIC",
  PORT_CUST_CURR_MNEMONIC: "PORT_CUST_CURR_MNEMONIC",
  INPO_IS_POSITION_MATCHED: "INPO_IS_POSITION_MATCHED",
  PROD_VALUE_DATE: "PROD_VALUE_DATE",
  PROD_VALUE_POGR_CURR: "PROD_VALUE_POGR_CURR",
  PROD_VALUE_P_CURR: "PROD_VALUE_P_CURR",
  PROD_VALUE_REF_CURR: "PROD_VALUE_REF_CURR",
  PROD_VALUE_UNCLEARED: "PROD_VALUE_UNCLEARED",
  PROD_VALUE_UNCLEARED_EOD: "PROD_VALUE_UNCLEARED_EOD",
  PROD_Z_FREE_TEXT1: "PROD_Z_FREE_TEXT1",
  PROD1_ID: "PROD1_ID",
  PORT_TOTAL_ASSET: "PORT_TOTAL_ASSET",
  PROD1_NO: "PROD1_NO",
  PROD1_NO_FORM: "PROD1_NO_FORM",
  PROR_ACTIVE: "PROR_ACTIVE",
  PROR_DC: "PROR_DC",
  PROR_DM: "PROR_DM",
  IS_RESTRICTED: "IS_RESTRICTED",
  PROR_EXECUTE_AT: "PROR_EXECUTE_AT",
  PROR_ID: "PROR_ID",
  PROR_LATEST_EXECUTION: "PROR_LATEST_EXECUTION",
  PROR_PERIOD_TEXT: "PROR_PERIOD_TEXT",
  PROR_PROD_ID: "PROR_PROD_ID",
  PROR_PROD_NO: "PROR_PROD_NO",
  PROR_RANGE_TEXT: "PROR_RANGE_TEXT",
  PROR_RETP_ID: "PROR_RETP_ID",
  PROR_RETR_ID: "PROR_RETR_ID",
  PROR_RETY_DESCRIPTION: "PROR_RETY_DESCRIPTION",
  PROR_RETY_ID: "PROR_RETY_ID",
  PROR_RETY_TYPE: "PROR_RETY_TYPE",
  PROR_VALID_UNTIL: "PROR_VALID_UNTIL",
  PRTY_CD: "PRTY_CD",
  REOR_CUST_NAME: "REOR_CUST_NAME",
  REOR_CUST_SURNAME: "REOR_CUST_SURNAME",
  REOR_ENTERED_AT: "REOR_ENTERED_AT",
  REOR_ID: "REOR_ID",
  REOR_PROD_NO_FORM: "REOR_PROD_NO_FORM",
  REOR_REPTY_DESCRIPTION: "REOR_REPTY_DESCRIPTION",
  RETE_SORT_SEQUENCE_NO: "RETE_SORT_SEQUENCE_NO",
  REOR_STATUS: "REOR_STATUS",
  RETE_ID: "RETE_ID",
  RETY_ID: "RETY_ID",
  RETY_CD: "RETY_CD",
  RETE_ADDITION1: "RETE_ADDITION1",
  RETE_ADDITION2: "RETE_ADDITION2",
  RETE_ACTIVE: "RETE_ACTIVE",
  RETE_TITLE: "RETE_TITLE",
  RETE_DESCRIPTION: "RETE_DESCRIPTION",
  RETE_HELP_TEXT: "RETE_HELP_TEXT",
  RETE_CHOOSE_ACCOUNT_MANDATORY: "RETE_CHOOSE_ACCOUNT_MANDATORY",
  REPTY_DESCRIPTION: "REPTY_DESCRIPTION",
  REPTY_EOP_DEFAULT: "REPTY_EOP_DEFAULT",
  REPTY_EOP_MAX: "REPTY_EOP_MAX",
  REPTY_ID: "REPTY_ID",
  REPTY_KEY: "REPTY_KEY",
  REPTY_PERIOD_TYPE: "REPTY_PERIOD_TYPE",
  REPTY_SOP_DEFAULT: "REPTY_SOP_DEFAULT",
  REPTY_SOP_MIN: "REPTY_SOP_MIN",
  REPTY_TAG: "REPTY_TAG",
  REPTY_TYPE: "REPTY_TYPE",
  RESO_URL: "RESO_URL",
  RETP_ID: "RETP_ID",
  RETP_PERIOD_TEXT: "RETP_PERIOD_TEXT",
  RETP_RETY_ID: "RETP_RETY_ID",
  RETR_ID: "RETR_ID",
  RETR_RANGE_TEXT: "RETR_RANGE_TEXT",
  RETR_RETY_ID: "RETR_RETY_ID",
  RETT_DESCRIPTION: "RETT_DESCRIPTION",
  RISK_CURR_MNEMONIC_PRIORITY: "RISK_CURR_MNEMONIC_PRIORITY",
  SALE_PERMITTED: "SALE_PERMITTED",
  SCAN_ACCOUNT_NUMBER: "SCAN_ACCOUNT_NUMBER",
  SCAN_AMOUNT: "SCAN_AMOUNT",
  SCAN_BENEFICIARY_ACCOUNT: "SCAN_BENEFICIARY_ACCOUNT",
  SCAN_BENEFICIARY_BC_NO: "SCAN_BENEFICIARY_BC_NO",
  SCAN_BENEFICIARY_LINE_1: "SCAN_BENEFICIARY_LINE_1",
  SCAN_BENEFICIARY_LINE_2: "SCAN_BENEFICIARY_LINE_2",
  SCAN_BENEFICIARY_LINE_3: "SCAN_BENEFICIARY_LINE_3",
  SCAN_BENEFICIARY_LINE_4: "SCAN_BENEFICIARY_LINE_4",
  SCAN_CODE_LINE: "SCAN_CODE_LINE",
  SCAN_CURRENCY_CODE: "SCAN_CURRENCY_CODE",
  SCAN_DATE: "SCAN_DATE",
  SCAN_DEBIT_ACCOUNT: "SCAN_DEBIT_ACCOUNT",
  SCAN_EXECUTION_DATE: "SCAN_EXECUTION_DATE",
  SCAN_ID: "SCAN_ID",
  SCAN_PAYMENT_TYPE: "SCAN_PAYMENT_TYPE",
  SCAN_PS_REFERENCE_NO: "SCAN_PS_REFERENCE_NO",
  SCAN_READY_FOR_EXECUTION: "SCAN_READY_FOR_EXECUTION",
  SCHEMA: "SCHEMA",
  SEC_TYPE_FORMAT_PATTERN: "SEC_TYPE_FORMAT_PATTERN",
  SECU_ASSET_TYPE: "SECU_ASSET_TYPE",
  SECU_AMOUNT_TYPE: "SECU_AMOUNT_TYPE",
  SECU_ORDER_TYPE: "SECU_ORDER_TYPE",
  SECU_CURR_ID: "SECU_CURR_ID",
  SECU_ID: "SECU_ID",
  SECU_INTEREST_FRQ: "SECU_INTEREST_FRQ",
  SECU_IS_MORTGAGE: "SECU_IS_MORTGAGE",
  SECU_ISIN_NO: "SECU_ISIN_NO",
  SECU_MAPL_ID: "SECU_MAPL_ID",
  SECU_MASTER_DATA_ORDERABLE: "SECU_MASTER_DATA_ORDERABLE",
  SECU_MATURITY_DATE: "SECU_MATURITY_DATE",
  SECU_MATURITY_RATE_P_CURR: "SECU_MATURITY_RATE_P_CURR",
  SECU_MODIFIED_DURATION: "SECU_MODIFIED_DURATION",
  SECU_NO: "SECU_NO",
  SECU_NO_FORM: "SECU_NO_FORM",
  SECU_NOMINAL_FLAG: "SECU_NOMINAL_FLAG",
  SECU_NOMINAL_VALUE: "SECU_NOMINAL_VALUE",
  SECU_OBJECT_NO: "SECU_OBJECT_NO",
  SECU_OPENING_DATE: "SECU_OPENING_DATE",
  SECU_RATING1: "SECU_RATING1",
  SECU_RISK_CURR_MNEMONIC: "SECU_RISK_CURR_MNEMONIC",
  SECU_SECURITY_NO_LONG: "SECU_SECURITY_NO_LONG",
  SECU_SECURITY_TYPE: "SECU_SECURITY_TYPE",
  SECU_TRADABLE: "SECU_TRADABLE",
  SECU_TRADE_UNIT: "SECU_TRADE_UNIT",
  SECU_YIELD_TO_MATURITY: "SECU_YIELD_TO_MATURITY",
  SECURE_SAFE_EXIST: "SECURE_SAFE_EXIST",
  SECURE_SAFE_LANDING_URL: "SECURE_SAFE_LANDING_URL",
  SECURE_SAFE_TOTAL_NUM_FILES: "SECURE_SAFE_TOTAL_NUM_FILES",
  SECURE_SAFE_UPLOADED_NUM_FILES: "SECURE_SAFE_UPLOADED_NUM_FILES",
  SELI_FIX_AT: "SELI_FIX_AT",
  SELI_ID: "SELI_ID",
  SELI_RATE: "SELI_RATE",
  SELI_ROUND_LOT: "SELI_ROUND_LOT",
  SELI_TICKER: "SELI_TICKER",
  SESS_ACS: "SESS_ACS",
  SESS_CONT_NO: "SESS_CONT_NO",
  SESS_LOGIN_AT: "SESS_LOGIN_AT",
  SESS_LOGOUT_AT: "SESS_LOGOUT_AT",
  SESS_PERS_LOGIN_NAME: "SESS_PERS_LOGIN_NAME",
  SETE_TEXT_ADD_ON: "SETE_TEXT_ADD_ON",
  SETE_TEXT_LONG1: "SETE_TEXT_LONG1",
  SETE_TEXT_SHORT: "SETE_TEXT_SHORT",
  SETT_DESCRIPTION: "SETT_DESCRIPTION",
  SETT_L1_DESCRIPTION: "SETT_L1_DESCRIPTION",
  SETT_L2_DESCRIPTION: "SETT_L2_DESCRIPTION",
  SETY_CD: "SETY_CD",
  SETY_CATEGORIZATION_LEVEL: "SETY_CATEGORIZATION_LEVEL",
  SETY_DISPLAY_PRIORITY: "SETY_DISPLAY_PRIORITY",
  SETY_L1_DISPLAY_PRIORITY: "SETY_L1_DISPLAY_PRIORITY",
  SETY_L2_DISPLAY_PRIORITY: "SETY_L2_DISPLAY_PRIORITY",
  SETY_ID: "SETY_ID",
  SECU_IS_ETF: "SECU_IS_ETF",
  SETY_IS_FUND: "SETY_IS_FUND",
  SECU_IS_OWN_FUND: "SECU_IS_OWN_FUND",
  SETY_L1_CD: "SETY_L1_CD",
  SETY_L2_CD: "SETY_L2_CD",
  SETY_RGB_CODE: "SETY_RGB_CODE",
  SEUR_DOCUMENT_CATEGORY: "SEUR_DOCUMENT_CATEGORY",
  SEUR_LANG_ID: "SEUR_LANG_ID",
  SEUR_ORUN_ID: "SEUR_ORUN_ID",
  SEUR_SECU_ID: "SEUR_SECU_ID",
  SEUR_URL: "SEUR_URL",
  SHME_ATTACHMENTS: "SHME_ATTACHMENTS",
  SHME_ID: "SHME_ID",
  SHME_NO: "SHME_NO",
  SHME_ORDER_TYPE: "SHME_ORDER_TYPE",
  SHME_OWNER: "SHME_OWNER",
  SHME_PRIORITY: "SHME_PRIORITY",
  SHME_RECEIVER: "SHME_RECEIVER",
  SHME_RECEIVER_ADDR: "SHME_RECEIVER_ADDR",
  SHME_SENDER_ADDR: "SHME_SENDER_ADDR",
  SHME_SENDER_NAME: "SHME_SENDER_NAME",
  SHME_SENT_AT: "SHME_SENT_AT",
  SHME_SOURCE_CD: "SHME_SOURCE_CD",
  SHME_SUBJECT: "SHME_SUBJECT",
  SHME_TEXT: "SHME_TEXT",
  SHME_TOPIC: "SHME_TOPIC",
  SHME_VOTING_OPTIONS: "SHME_VOTING_OPTIONS",
  STPF_DESCRIPTION: "STPF_DESCRIPTION",
  STPF_ID: "STPF_ID",
  STPF_NAME: "STPF_NAME",
  STPF_SORT_SEQUENCE: "STPF_SORT_SEQUENCE",
  TEXT: "TEXT",
  VOTING_ANSWER: "VOTING_ANSWER",
  ANSWER_TO_VOTING: "ANSWER_TO_VOTING",
  TIME_TO_SEND: "TIME_TO_SEND",
  TYPE: "TYPE",
  USE_EXTENDED_BROKERAGE_ORDER: "USE_EXTENDED_BROKERAGE_ORDER",
  USE_ORDER_TYPE: "USE_ORDER_TYPE",
  USUP_NAME: "USUP_NAME",
  USUP_SALUTATION: "USUP_SALUTATION",
  USUP_SURNAME: "USUP_SURNAME",
  VALUE_ASSET: "VALUE_ASSET",
  VALUE_CLEARED: "VALUE_CLEARED",
  VALUE_DATE: "VALUE_DATE",
  VALUE_LOAN: "VALUE_LOAN",
  VALUE_UNCLEARED: "VALUE_UNCLEARED",
  VISA1_PERS_NAME: "VISA1_PERS_NAME",
  VISA1_PERS_SURNAME: "VISA1_PERS_SURNAME",
  VISA2_PERS_NAME: "VISA2_PERS_NAME",
  VISA2_PERS_SURNAME: "VISA2_PERS_SURNAME",
  WLST_BEN_ACCO_NO: "WLST_BEN_ACCO_NO",
  WLST_BEN_BANK_COUNTRY: "WLST_BEN_BANK_COUNTRY",
  WLST_BEN_BANK_NAME: "WLST_BEN_BANK_NAME",
  WLST_BEN_BANK_ACCOUNT_NO: "WLST_BEN_BANK_ACCOUNT_NO",
  WLST_BEN_BC_NO: "WLST_BEN_BC_NO",
  WLST_BEN_BIC: "WLST_BEN_BIC",
  WLST_BEN_ESR_REF_NO: "WLST_BEN_ESR_REF_NO",
  WLST_BEN_IBAN: "WLST_BEN_IBAN",
  WLST_BEN_NAME: "WLST_BEN_NAME",
  WLST_BEN_PC_NO: "WLST_BEN_PC_NO",
  WLST_BEN_SORT_CODE: "WLST_BEN_SORT_CODE",
  WLST_ID: "WLST_ID",
  JSON_PAYMENT_TYPES: "PaymentTypes",
  JSON_AC_OWNERS: "PROD_DESCRIPTION",
  JSON_REF_PROD_NO_FORM: "REF_PROD_NO_FORM",
  JSON_REF_PROD_NO: "REF_PROD_NO",
  JSON_REF_PROD_IBAN: "REF_PROD_IBAN",
  JSON_REF_CORI_ALIAS: "REF_CORI_ALIAS",
  JSON_PORT_PROD_DESCRIPTION: "PORT_PROD_DESCRIPTION",
  JSON_REF_ACTT_DESCRIPTION: "REF_ACTT_DESCRIPTION",
  JSON_ACTR_DEBIT_CREDIT_CD: "ACTR_DEBIT_CREDIT_CD",
  FIUP_SIGN_BY: "FIUP_SIGN_BY",
  FIUP_COUNTERSIGN_BY: "FIUP_COUNTERSIGN_BY",
  CUST_ADDR_FULL_ADDRESS: "CUST_ADDR_FULL_ADDRESS",
  PROD_PRTY_CD: "PROD_PRTY_CD",
  ACCO_DM: "ACCO_DM",
  WLST_PATY_ID: "WLST_PATY_ID",
};
CLX.Es = {
  ABSOLUTE_PROFIT_PERCENT: "absoluteProfitPercent",
  ACCO_ALIAS_OR_PRODUCT_NUMBER: "accoAliasOrProductNumber",
  ACCO_ALIAS_OR_PRODUCT_NUMBER_BY_SETTING: "accoAliasOrProductNumberBySetting",
  ACCO_DESCRIPTION: "accoDescription",
  ACCO_ID: "accoId",
  ACCO_NUMBER: "accoNumber",
  ACCO_PROD_ID: "accountProdId",
  ACCOUNT: "account",
  ACCOUNT_BALANCE: "accountBalance",
  ACCOUNT_DESCRIPTION: "accountDescription",
  ACCOUNT_IBAN: "accountIban",
  ACCOUNT_ID: "accountId",
  ACCOUNT_HOLDER_NAME: "accountHolderName",
  ACCOUNT_POSITION_REFERENCE: "referenceId",
  ACCOUNT_NO: "accountNo",
  ACCOUNT_NUMBER: "accountNumber",
  ACCOUNT_NUMBER_BY_SETTINGS: "accountNumberBySettings",
  ACCOUNT_REC: "accountRec",
  ACCRUED_INTEREST: "accruedInterest",
  ACCRUED_INTEREST_BALANCE: "accruedInterestBalance",
  ACCRUED_INTEREST_GROUP_CURR: "accruedInterestGroupCurr",
  ACCRUED_INTEREST_PORT_CURR: "accruedInterestPortCurr",
  ACK_REQUIRED: "ackRequired",
  ACK_TIMESTAMP: "ackTimestamp",
  ACTIVE: "active",
  ACTIVE_TEMPLATES_COUNT: "activeTemplatesCount",
  ACTR_FEES: "cashTransactionFees",
  ACTT_DESCRIPTION: "acttDescription",
  ACTUAL_FILE: "actualFile",
  ACTUAL_MARKET_VALUE: "actualMarketValue",
  ACTUAL_VALUE: "actualValue",
  ADDITIONAL_INFO: "additionalInfo",
  ADDRESS: "address",
  ADDRESSEE: "addressee",
  ADDR_STREET: "addrStreet",
  ADDR_ADDRESS_NO: "addrAddressNo",
  ADDR_RELATION_ID: "AddressRelationId",
  ADJUSTED_ASSET: "adjustedAsset",
  ADMIN_FEE: "adminFee",
  ADMIN_FEE_PERC: "adminFeePerc",
  ADMIN_WIDGET_REMOVABLE: "adminWidgetRemovable",
  ADVISOR: "advisor",
  ADVISOR_ID: "advisorId",
  ADVISOR_NAME: "advisorName",
  ADVISOR_NAME_ORIGINAL: "advisorNameOriginal",
  ADVISOR_NO: "advisorNo",
  EXTENDED_FIELDS: "extendedFields",
  OUT_OF_OFFICE_DATE: "outOfOfficeDate",
  OUT_OFF_OFFICE_STATUS: "outOfOfficeStatus",
  AGGREGATE_RETURN: "aggregateReturn",
  AGREED_PRICE: "agreedPrice",
  AIC: "aic",
  ALERT_DELIVERY_TYPE: "alertDeliveryType",
  ALERT_TYPE: "alertType",
  ALERT_TYPE_CD: "alertTypeCd",
  ALIAS: "alias",
  ALIAS_OR_DESCRIPTION: "aliasOrDescription",
  ALIAS_OR_FORMATTED_NUMBER: "aliasOrFormattedNumber",
  ALIAS_OR_NUMBER: "aliasOrNumber",
  ALIAS_OR_PORT_NUMBER: "aliasOrPortNumber",
  ALIAS_OR_PROD_DESC_NAME: "aliasOrProductDescriptionName",
  ALIAS_OR_ACCOUNT_TYPE_DESCRIPTION: "aliasOrAccountTypeDescription",
  AMOUNT: "amount",
  AMOUNT_CURRENCY: "amountCurrency",
  AMOUNT_TYPE: "amountType",
  AMOUNT_UNIT: "amountUnit",
  APPLIES_TO: "appliesTo",
  APPLY_URL: "applyUrl",
  ASSET_CLASS: "assetClass",
  ASSET_CLASS_CD: "assetClassCd",
  ASSET_DESCRIPTION: "assetDescription",
  ASSET_ID: "assetId",
  ASSET_INC_PERCENT: "assetIncPercent",
  ASSET_TYPE_DETAILS: "assetTypeDetails",
  ATTACHMENTS: "attachments",
  ATTACHMENTS_COUNT: "attachmentsCount",
  AUTO_PAYMENT_AMOUNT: "autoPaymentAmount",
  AUTO_PAYMENT_CURRENCY: "autoPaymentCurrency",
  AUTO_PAYMENT_ERROR_CODE: "autoPaymentErrorCode",
  AUTO_PAYMENT_ID: "autoPaymentId",
  AUTO_PAYMENT_TIME_PERIOD: "autoPaymentTimePeriod",
  AUTO_PAYMENT_DEBIT_ACCOUNT: "autoPaymentDebitAccount",
  AUTO_PAYMENT_DEBIT_NOTE: "autoPaymentDebitNote",
  AVAILABLE_BALANCE: "availableBalance",
  AVAILABLE_PRODUCT_VALUE: "availableProductValue",
  AVAILABLE_PRODUCT_VALUE_CUST_CURR: "availableProductValueCustCurr",
  AVERAGE_ASSET: "averageAsset",
  AVERAGE_PRICE: "averagePrice",
  BALANCE: "balance",
  BANK_BRANCH: "bankBranch",
  BANK_CITY: "bankCity",
  BANK_CODE: "bankCode",
  BANK_CODE_TYPE: "bankCodeType",
  BANK_NAME: "bankName",
  BANK_ACCOUNT_NO: "bankAccountNo",
  BANK_STREET: "bankStreet",
  BANK_ZIP: "bankZip",
  BANK_COUNTRY: "bankCountry",
  BANK_NCC: "bankNcc",
  BENEFICIARY_ACCOUNT: "beneficiaryAccount",
  BENEFICIARY_NAME_AND_ACCOUNT: "beneficiaryNameAndAccount",
  BENEFICIARY_ACCOUNT_NUMBER: "beneficiaryAccountNumber",
  BENEFICIARY_ADDRESS: "beneficiaryAddress",
  BENEFICIARY_BANK_ACCOUNT: "beneficiaryBankAccount",
  BENEFICIARY_BC_NO: "beneficiaryBcNo",
  BENEFICIARY_LINE_1: "beneficiaryLine1",
  BENEFICIARY_NAME: "beneficiaryName",
  BENEFICIARY_REFERENCE: "beneficiaryReference",
  BENEFICIARY1: "beneficiary1",
  BENEFICIARY2: "beneficiary2",
  BENEFICIARY3: "beneficiary3",
  BENEFICIARY4: "beneficiary4",
  BIC_SWIFT: "bicSwift",
  BIDA_ID: "bidaId",
  BILL_TRX_REFERENCE: "billTrxReference",
  BILLER_NAME: "billerName",
  BILLER_PID: "billerPid",
  BILLING_DATE: "billingDate",
  BLOCKED_QUANTITY: "blockedQuantity",
  BLOCKED_REASON: "blockedReason",
  BLOCKED_VALID_TO: "blockedValidTo",
  BLOG_LINK: "blogLink",
  BOOKING_DATE: "bookingDate",
  BOOKING_ID: "bookingId",
  BOOKING_NO: "bookingNo",
  BOOKING_TEXT: "bookingText",
  BOOKING_TEXT1: "bookingText1",
  BOOKING_TEXT2: "bookingText2",
  BOOKING_TYPE: "bookingType",
  BROKERAGE_ACCOUNTS: "brokerageAccounts",
  BULK_DETAIL_IDS: "bulkDetailIds",
  BULK_UNDERLYING_PAYM_IDS: "bulkUnderlyingPaymIds",
  CALC_RATE: "calcRate",
  CALC_RATE_CURR_TEXT: "calcRateCurrText",
  CALC_RATE_FROM: "calcRateFrom",
  CALCULATED_AT: "calculatedAt",
  CANCELLATION_STATUS: "cancellationStatus",
  CANCELLED_BY_PERSON_ID: "cancelledByPersonId",
  CAP_CARD: "capCard",
  CARD: "card",
  CARD_BALANCE: "CardBalance",
  CARD_HOLDER: "cardHolder",
  CARD_NAME: "cardName",
  CARD_NUMBER: "cardNumber",
  CASH: "cash",
  CATEGORY: "category",
  CATEGORY_CD: "categoryCd",
  CATEGORY_DETAILS: "categoryDetails",
  CATEGORY_ID: "categoryId",
  CATEGORY_LEVEL: "categoryLevel",
  CATEGORY_LONG: "categoryLong",
  CATEGORY_SHORT: "categoryShort",
  CENSORED_EMAIL_ADDR: "censoredEmailAddr",
  CENSORED_NUMBER: "censoredNumber",
  CENSORED_PHONE_NO: "censoredPhoneNo",
  CENSORED_PHONE_NO_1: "censoredPhoneNo1",
  CENSORED_PHONE_NO_2: "censoredPhoneNo2",
  CHOOSE_ACCOUNT_MANDATORY: "chooseAccountMandatory",
  CITY: "city",
  CLEARED_AMOUNT: "clearedAmount",
  CLEARING_TYPE_CD: "clearingTypeCd",
  CLOSE_DATE: "closeDate",
  CODW_COL: "codwCol",
  CODW_DAWA_ID: "codwDawaId",
  CODW_ID: "codwId",
  CODW_TOP: "codwTop",
  COLL_ORDER_ITEM_COUNT: "collOrderItemCount",
  COLL_ORDER_ITEM_NO: "collOrderItemNo",
  COLL_ORDER_NO: "collOrderNo",
  COLLECTIVE_BOOKING_TRANSACTION_DETAILS: "collectiveBookingTransactionDetails",
  COMPOSITE_TYPE_CD: "compositeTypeCd",
  CONFIDENTIAL: "confidential",
  CONTRACT: "contract",
  CONTRACT_LANGUAGE: "contractLanguage",
  CONTRACT_MTAN_SIGN_LEVEL: "contractMtanSignLevel",
  CONTRACT_OWNER: "contractOwner",
  CODE: "code",
  COST_PRICE_GROSS: "costPriceGross",
  COST_PRICE_NET: "costPriceNet",
  COST_RATE: "costRate",
  COST_VALUE: "costValue",
  COST_VALUE_CURR: "costValueCurr",
  COST_VALUE_PORT_CURR: "costValuePortCurr",
  COUNTRY: "country",
  COUNTRY_CODE: "countryCode",
  COUNTRY_DESCRIPTION: "countryDescription",
  COUNTRY_ISO_CODE: "countryIsoCode",
  COUNTRY_NAME: "countryName",
  COUNTY: "county",
  CREDIT_ACCOUNT: "creditAccount",
  CREDIT_ACCOUNT_BANK_CODE: "creditAccountBankCode",
  CREDIT_ACCOUNT_AGENCY_CODE: "creditAccountAgencyCode",
  CREDIT_ACCOUNT_ACC_NUM: "creditAccountAccNum",
  CREDIT_ACCOUNT_CONTROL_NUM: "creditAccountControlNum",
  CREDIT_ACCOUNT_DESCRIPTION: "creditAccountDescription",
  CREDIT_ALIAS_OR_FORMATTED_NUMBER: "creditAliasOrFormattedNumber",
  CREDIT_AMOUNT: "creditAmount",
  CREDIT_CARDS: "creditCards",
  CREDIT_CURR_MNEMONIC: "creditCurrMnemonic",
  CREDIT_FORMATTED_NUMBER: "creditFormattedNumber",
  CREDIT_FORMATTED_NUMBER_BY_SETTING: "creditFormattedNumberBySetting",
  CREDIT_IBAN: "creditIban",
  CREDIT_NOTES: "creditNotes",
  CREDIT_NUMBER: "creditNumber",
  CRITERIA: "criteria",
  CUAC_ALIAS_OR_FORMATTED_PRODUCT_NUMBER: "cuacAliasOrFormattedProductNumber",
  CUAC_ALIAS_OR_PRODUCT_NUMBER: "cuacAliasOrProductNumber",
  CUAC_DESCRIPTION_AND_NO: "cuacDescriptionAndNo",
  CUAC_ID: "cuacId",
  CUAT_FEES: "securityTransactionFees",
  CUATT_DESCRIPTION: "cuattDescription",
  CUATT_CACT_ID: "cuattCactId",
  CUAT_ID: "cuatId",
  CUAV_ID: "cuavId",
  CUAV_CURR_MNEMONIC: "cuavCurrMnemonic",
  CUAV_CURRENCY_CD_EXT: "cuavCurrencyCdExt",
  CUAV_ACCRUED_INTEREST_NET: "cuavAccruedInterestNet",
  CUAV_INTEREST: "cuavInterest",
  CUAV_INTEREST_NET: "cuavInterestNet",
  CUAV_ACCRUED_INTEREST_RATE: "cuavAccruedInterestRate",
  CUAV_ACCRUED_INTEREST_D_CURR: "cuavAccruedInterestDCurr",
  CURRENCY: "currency",
  CURRENCY_CD_EXT: "currencyCdExt",
  CURRENCY_CODE: "currencyCode",
  CURRENCY_ID: "currencyId",
  CURRENCY_ISO: "currencyIso",
  CURRENCY_ISO_CODE: "currencyIsoCode",
  CURRENCY_MNEMONIC: "currencyMnemonic",
  CURR_ROW_TYPE: "currRowType",
  CURRENT_BALANCE: "currentBalance",
  CUSTOMER_ADDR_NAME: "custAddrName",
  CUST_ADDR_CITY: "custAddrCity",
  CUST_ADDR_STREET: "custAddrStreet",
  CUST_ADDR_ZIP_CODE: "custAddrZipCode",
  CUST_ADDR_ZIP_CODE_AND_CITY: "addrZipCodeAndCity",
  CUST_ASSET: "custAsset",
  CUST_BIRTHDAY: "custBirthday",
  CUST_COUNTRY: "custCountry",
  CUST_CO: "custCo",
  CUST_MOBILE_NUMBER: "custMobileNumber",
  CUST_CURR_MNEMONIC: "custCurrMnemonic",
  CUST_EMAIL: "custEmail",
  CUST_ID: "custId",
  CUST_LOAN: "custLoan",
  CUST_NAME: "custName",
  CUST_NAME_AND_SURNAME: "custNameAndSurname",
  CUST_NO: "custNo",
  CUST_PO_BOX: "custPoBox",
  CUST_SURNAME: "custSurname",
  ACCO_VALUE_CURR_ISO_CODE: "accoValueCurrIsoCode",
  PAYM_CREDIT_DEBIT_CD: "paymCreditDebitCd",
  CUST_TOTAL_ASSET: "custTotalAsset",
  CUSTODY_ACCOUNT_DESC: "custodyAccountDesc",
  CUSTODY_ACCOUNT_ID: "custodyAccountId",
  CUSTOMERS: "customers",
  CUSTODY_ACCOUNT_REC: "custodyAccountRec",
  CUSTODY_ACCOUNT_VALUE: "custodyAccountValue",
  CUSTODY_ACCOUNTS: "custodyAccounts",
  CUSTODY_ID: "custodyId",
  CUSTOM_DATA: "customData",
  CUSTOM_DATA_EXTENDED: "customDataExtended",
  CUSTOM_FOLDER: "customFolder",
  CUSTOMER: "customer",
  CUSTOMER_CNT: "customerCnt",
  CUSTOMER_CURR_CD: "customerCurrCd",
  CUSTOMER_CURRENCY: "customerCurrency",
  CUSTOMER_CURRENCY_AMOUNT: "customerCurrencyAmount",
  CUSTOMER_CURRENCY_ISO_CODE: "customerCurrencyIsoCode",
  CUSTOMER_CURRENCY_VALUE: "customerCurrencyValue",
  CUSTOMER_ID: "customerId",
  CUSTOMER_NAME: "customerName",
  CUSTOMER_NAME_SURNAME: "customerNameSurname",
  CUSTOMER_NO: "customerNo",
  CUSTOMER_PAYNET_REFERENCE: "customerPaynetReference",
  CUSTOMER_SURNAME: "customerSurname",
  DATE: "date",
  DATE_CREATED: "dateCreated",
  DATE_FROM: "dateFrom",
  DATE_MS: "dateMs",
  DATE_ORDER_PLACED: "dateOrderPlaced",
  DATE_TO: "dateTo",
  DAWA_ID: "dawaId",
  DAWI_ID: "dawiId",
  DAWI_NAME: "dawiName",
  DAYS_OF_WEEK: "daysOfWeek",
  DAYS_TO_SEND_CODES: "daysToSendCodes",
  DEBIT_ACCO_NUMBER: "debitAccoNumber",
  DEBIT_ACCOUNT: "debitAccount",
  DEBIT_ACCOUNT_DESCRIPTION: "debitAccountDescription",
  DEBIT_ACCOUNT_ID: "debitAccountId",
  DEBIT_ACCOUNTS: "debitAccounts",
  DEBIT_ADVICE: "debitAdvice",
  DEBIT_ALIAS_OR_FORMATTED_NUMBER: "debitAliasOrFormattedNumber",
  NEW_INVOICE: "newInvoice",
  DEBIT_AMOUNT: "debitAmount",
  DEBIT_CURR_MNEMONIC: "debitCurrMnemonic",
  DEBIT_FORM: "debitForm",
  DEBIT_FORMATTED_NUMBER: "debitFormattedNumber",
  DEBIT_FORMATTED_NUMBER_BY_SETTING: "debitFormattedNumberBySetting",
  DEBIT_IBAN: "debitIban",
  DEBIT_ID: "debitId",
  DEBIT_NOTE: "debitNote",
  DEBIT_NUMBER: "debitNumber",
  DEBIT_REFERENCE: "debitReference",
  DEFAULT_BOOKINGS: "defaultBookings",
  DEFAULT_BOOKING_DETAILS: "defaultBookingDetails",
  DEFAULT_DEACTIVATE_CAMPAIGNER: "defaultDeactivateCampaigner",
  DEFAULT_PAYMENTS: "defaultPayments",
  DEFAULT_PAYMENT_ACCOUNT_NO: "defaultPaymentAccountNo",
  DEFAULT_PORTFOLIO_GROUP_ID: "defaultPortfolioGroupId",
  DEFAULT_PORTFOLIO_ID: "defaultPortfolioId",
  DEFAULT_PORTFOLIO_ID_PER_PORTFOLIO_GROUP:
    "defaultPortfolioIdPerPortfolioGroup",
  DEFAULT_ROWCOUNT: "Default_Rowcount",
  DEFAULT_SCOPE_END: "defaultScopeEnd",
  DEFAULT_SCOPE_START: "defaultScopeStart",
  DEFAULT_STARTPAGE_OPTION: "defaultStartpageOption",
  DEFAULT_TRADE_ACCOUNT_ID_PER_PORTFOLIO: "defaultTradeAccountIdPerPortfolio",
  DEFAULT_TRADE_CUSTACC_ID: "defaultTradeCustaccId",
  DELETED_BY: "deletedBy",
  DELIVERY_CHANGE: "deliveryChange",
  DELIVERY_CHANGE_ALLOWED: "deliveryChangeAllowed",
  DELIVERY_CHANGE_PROCESSING: "deliveryChangeProcessing",
  DELIVERY_NAME: "deliveryName",
  DELIVERY_TYPE: "deliveryType",
  DENOMINATION: "denomination",
  DENOMINATION_CONVERTED: "denominationConverted",
  DESCRIPTION: "description",
  DESCRIPTION_LONG: "descriptionLong",
  DESCRIPTION_SHORT: "descriptionShort",
  DESTINATION: "destination",
  DESTIONATION_URL: "destionationUrl",
  DETAIL_COUNT: "detailCount",
  DETAIL_ID: "detailId",
  DETAIL_TEXT: "detailText",
  DEBIT_CREDIT_CD: "debitCreditCd",
  DETAIL_TYPE: "detailType",
  DETAILS: "details",
  DIRECT_PHONE: "directPhone",
  DISPLAY_CURR: "displayCurr",
  DISPLAY_FORMAT: "displayFormat",
  DIVIDEND: "dividend",
  DOCUMENT_CATEGORY: "documentCategory",
  DTA_FILENAME: "dtaFilename",
  DUE_DATE: "dueDate",
  DURATION: "duration",
  DYNAMIC: "dynamic",
  EBILL_ID: "eBillId",
  ECONOMIC_REASON: "economicReason",
  EMAIL: "email",
  EMAIL_ADDR: "emailAddr",
  EMAIL_ADDRESS: "emailAddress",
  END_DATE: "endDate",
  END_YEAR_PROFIT_PERCENTAGE: "endYearProfitPercentage",
  ENTERED_BY: "enteredBy",
  ENTERED_BY_PERS_ID: "enteredByPersId",
  ENTERED_BY_PERSON_ID: "enteredByPersonId",
  ENTERED_DATE: "enteredDate",
  ERROR_CD: "errorCd",
  ERROR_CODE: "errorCode",
  ERROR_TEXT: "errorText",
  ESR_ACCOUNT_ID: "esrAccountId",
  ESR_PARTICIPANT_NUMBER: "esrParticipantNumber",
  ESR_REF_NO: "esrReferenceNo",
  EXCHANGE_RATE: "exchangeRate",
  EXCHANGE_RATE_PROFIT: "exchangeRateProfit",
  EXCHANGE_RATE_PURCHASE_VALUE: "exchangeRatePurchaseValue",
  EXECUTE_DATE: "executeDate",
  EXECUTION_CD: "executionCd",
  EXECUTION_DATE: "executionDate",
  EXECUTION_TIME: "executionTime",
  EXPENSE_CD: "expenseCd",
  EXPIRY_DATE: "expiryDate",
  EXT_CODE: "extCode",
  FACTOR: "factor",
  FORMAT_ID: "formatId",
  FORMAT_DESCRIPTION: "formatDescription",
  FORMAT_TYPE: "formatType",
  FILE_TYPE: "fileType",
  FILE_UPLOAD_ID: "fileUploadId",
  FILENAME: "filename",
  FILE_NAME: "fileName",
  FILTER_ELEMENTS: "filterElements",
  FILTER: "filter",
  FILTER_ID: "filterId",
  FILTER_NAME: "filterName",
  FILTER_TYPE: "filterType",
  FILTERED_ACTIVE_TEMPLATES_COUNT: "filteredActiveTemplatesCount",
  FINAL_PAYMENT_DATE: "finalPaymentDate",
  FIRM: "firm",
  FIRST_PAYMENT_DATE: "firstPaymentDate",
  FOLDER: "folder",
  FORECAST: "Forecast",
  FORMATTED_LIMIT: "formattedLimit",
  FORMATTED_NUMBER: "formattedNumber",
  FORMATTED_NUMBER_BY_SETTING: "formattedNumberBySetting",
  FORMATTED_PORT_NUMBER: "formattedPortNumber",
  FORMATTED_STOP_LOSS_LIMIT: "formattedStopLossLimit",
  FREQUENCY: "frequency",
  FTEL_ID: "ftelId",
  FTEL_TYPE_CD: "ftelTypeCd",
  FULL_ADDRESS: "fullAddress",
  FX_RATE: "fxRate",
  FX_TRADABLE: "fxTradable",
  GEODIST_DESCRIPTION: "geodistDescription",
  GROUP_CURRENCY: "groupCurrency",
  GROUP_CURRENCY_MARKET_VALUE: "groupCurrencyMarketValue",
  GROUP_ID: "groupId",
  GROUP_NAME: "groupName",
  HAS_ADDRESS: "hasAddress",
  HAS_ATTACHMENTS: "hasAttachments",
  HAS_BENEFICIARY_BANK_ACCOUNT: "hasBeneficiaryBankAccount",
  HAS_CREDIT_TRADING_ACCOUNTS: "hasCreditTradingAccounts",
  HAS_DEBIT_TRADING_ACCOUNTS: "hasDebitTradingAccounts",
  HAS_POSITION_CRITERIA: "hasPositionCriteria",
  HAS_EMAIL_ADDR: "hasEmailAddr",
  HAS_HIDDEN_DEPOT: "hasHiddenDepot",
  HAS_IBAN_INFO: "hasIbanInfo",
  HAS_LIMITS: "hasLimits",
  HAS_NOMINAL_VALUE: "hasNominalValue",
  HAS_PENDING_ADDRESS_CHANGE: "hasPendingAddressChange",
  HAS_PENDING_CHANGES: "hasPendingChanges",
  HAS_PENDING_NAME_CHANGE: "hasPendingNameChange",
  HAS_PENDING_ORDERS: "hasPendingOrders",
  HAS_PENDING_OWNER_CHANGE: "hasPendingOwnerChange",
  HAS_PENDING_PAYMENTS: "hasPendingPayments",
  HAS_PENDING_SALUTATION_CHANGE: "hasPendingSalutationChange",
  HAS_PENDING_SURNAME_CHANGE: "hasPendingSurnameChange",
  HAS_PERMISSION: "hasPermission",
  HAS_PERMISSIONS: "hasPermissions",
  HAS_PHONE_NO: "hasPhoneNo",
  HAS_STREAM: "hasStream",
  HAS_VALIDATION_STATUS: "hasValidationStatus",
  HAS_VIDEO: "hasVideo",
  HOLDER: "holder",
  HOLDING: "holding",
  HOLIDAY_HANDLING: "holidayHandling",
  HOST_ORDER_NO: "hostOrderNo",
  HOUSE_NUMBER: "houseNumber",
  IBAN: "iban",
  IBAN_NATIONAL_CODE_LENGTH: "ibanNationalCodeLength",
  IBAN_TOTAL_LENGTH: "ibanTotalLength",
  ICON_LABEL: "iconLabel",
  ICON_LABEL2: "iconLabel2",
  ID: "id",
  IMAGE_URL: "imageUrl",
  IMPORTANCE: "importance",
  INDUSTRY: "industry",
  INDUSTRY_DESC: "industryDesc",
  INTEREST: "interest",
  INTEREST_AMOUNT: "interestAmount",
  INTEREST_AMOUNT_PORT_CURR: "interestAmountPortCurr",
  INTEREST_FREQUENCY: "interestFrequency",
  INTEREST_RATE: "interestRate",
  INTR_COSTS: "intrCosts",
  INTRADAY_COUNTER: "intradayCounter",
  INVALID_NUMBER: "invalidNumber",
  INVESTMENT_PORTFOLIOS: "investmentPortfolios",
  INVESTMENT_PORTFOLIOS_WITH_BROKERAGE_RIGHTS:
    "investmentPortfoliosWithBrokerageRights",
  IPS_ID: "ipsId",
  IS_ACCOUNT_ALERT: "isAccountAlert",
  IS_ACK_NEEDED: "isAckNeeded",
  IS_ACTION_NEEDED: "isActionNeeded",
  IS_ACTIVE: "isActive",
  IS_ALWAYS_EBANKING: "isAlwaysEbanking",
  IS_AMOUNT_UNIT_PIECE: "isAmountUnitPiece",
  IS_BACS_PAYMENTS_PARTICIPANT: "isBacsPaymentsParticipant",
  IS_BALANCE_PREVIEW: "isBalancePreview",
  IS_BIC_SWIFT: "isBicSwift",
  IS_BUY_PERMITTED: "isBuyPermitted",
  IS_CACHED: "isCached",
  IS_CARD_ACCOUNT: "isCardAccount",
  IS_CASH_POSITION: "isCashPosition",
  IS_CATEGORY_VISIBLE: "isCategoryVisible",
  IS_CHAPS_STERLING_PARTICIPANT: "isChapsSterlingParticipant",
  IS_COLLATED_DEBIT_ADVICE: "isCollatedDebitAdvice",
  IS_COLLECTIVE_TRX: "isCollectiveTrx",
  IS_CONFIDENTIAL: "isConfidential",
  IS_COUNTERSIGNED: "isCountersigned",
  IS_CREDIT: "isCredit",
  IS_CURRENCY_ACCOUNT: "isCurrencyAccount",
  IS_CUST_ADMIN_USER: "isCustAdminUser",
  IS_DEFAULT_FILTER: "isDefaultFilter",
  IS_DELETABLE: "isDeletable",
  IS_DIRECT_MATCH: "isDirectMatch",
  IS_DYNAMIC: "isDynamic",
  IS_EBILL_REC: "isEbillRec",
  IS_EMAIL_VERIFIED: "isEmailVerified",
  IS_EXTERNALLY_MANAGED: "isExternallyManaged",
  IS_FASTER_PAYMENT_PARTICIPANT: "isFasterPaymentParticipant",
  IS_HIDDEN: "isHidden",
  IS_HOLIDAY_ALLOWED: "isHolidayAllowed",
  IS_IMAGE_CACHED: "isImageCached",
  IS_INDIVIDUAL_DEBIT_ADVICE: "isIndividualDebitAdvice",
  IS_INTERNATIONAL_PAYMENT_TYPE: "isInternationalPaymentType",
  IS_INVALID: "isInvalid",
  IS_IPS_ACCOUNT: "isIpsAccount",
  IS_JUST_READ: "isJustRead",
  IS_LOCKED: "isLocked",
  IS_MEMBER_OF_EEA: "isMemberOfEea",
  IS_MOBILE_BANKING_ENABLED: "isMobileBankingEnabled",
  IS_MODIFIED: "isModified",
  IS_MORTGAGE: "isMortgage",
  IS_MTAN_REQUIRED: "isMtanRequired",
  IS_MY_CONTRACT: "isMyContract",
  IS_NEW: "isNew",
  IS_NOMINAL_CURRENCY: "isNominalCurrency",
  IS_NOTICE_ACCOUNT: "isNoticeAccount",
  IS_OUT_ALLOWED: "isOutAllowed",
  IS_IN_ALLOWED: "isInAllowed",
  IS_PAYMENT_TYPE_SUPPORTED: "isPaymentTypeSupported",
  IS_PHONE_1_REGISTERED: "isPhone1Registered",
  IS_PHONE_2_REGISTERED: "isPhone2Registered",
  IS_PHONE_DELETABLE: "isPhoneDeletable",
  IS_PHONE_EDITABLE: "isPhoneEditable",
  IS_PORTFOLIO_PERIODIC_ALERT: "isPortfolioPeriodicAlert",
  IS_POSSIBLE_ACTION: "isPossibleAction",
  IS_POSTER_IMAGE_CACHED: "isPosterImageCached",
  IS_PREDEFINED: "isPredefined",
  IS_PREVIEW_IMAGE_CACHED: "isPreviewImageCached",
  IS_PRODUCT_CLOSED: "isProductClosed",
  IS_READ: "isRead",
  IS_REALISED: "isRealised",
  IS_REJECTED: "isRejected",
  IS_REPLIED: "isReplied",
  IS_REPORT_ORDER_REC: "isReportOrderRec",
  IS_RESTRICTED_ACCOUNT: "isRestrictedAccount",
  IS_RETIREMENT_ACCOUNT: "isRetirementAccount",
  IS_SALARY_ALLOWED: "isSalaryAllowed",
  IS_SALARY_GROUP: "isSalaryGroup",
  IS_SALARY_PAYMENT: "isSalaryPayment",
  IS_SALARY_PAYMENTS_ALLOWED: "isSalaryPaymentsAllowed",
  IS_SALE_PERMITTED: "isSalePermitted",
  IS_SECU_DATA_ORDERABLE: "isSecuDataOrderable",
  IS_SECU_TRADABLE: "isSecuTradable",
  IS_SELLABLE: "isSellable",
  IS_SEPA_SUPPORTED: "isSepaSupported",
  IS_SINGLE_DEBIT_ADVICE: "isSingleDebitAdvice",
  IS_SYS_FILTER: "isSysFilter",
  IS_THIRD_PARTY: "isThirdParty",
  IS_TEMPORARY_GROUP: "isTemporaryGroup",
  IS_TO_BANK: "isToBank",
  IS_UK_BANK: "isUkBank",
  IS_ULTIMO: "isUltimo",
  IS_UNIFORM: "isUniform",
  IS_UNREAD: "isUnread",
  IS_UPLOADED: "isUploaded",
  IS_VALID: "isValid",
  IS_VIEWED: "isViewed",
  IS_VIRTUAL: "isVirtual",
  IS_VISA1_USER: "isVisa1User",
  IS_WEEKEND_ALLOWED: "isWeekendAllowed",
  IS_WORKING: "isWorking",
  ISIN: "isin",
  ISIN_NO: "isinNo",
  ISO_CODE: "isoCode",
  ISO_FILE_ID: "isoFileId",
  ISO_STATUS: "isoStatus",
  ISSUER_ACCOUNT_NO: "issuerAccountNo",
  ISSUER: "issuer",
  ISSUE_TYPE: "issueType",
  JSON: "json",
  KEY: "key",
  LANDING_URL: "landingUrl",
  LANGUAGE_ID: "languageId",
  LAST_ASK: "lastAsk",
  LAST_BID: "lastBid",
  LAST_DELIVERY: "lastDelivery",
  LAST_LOGIN_AT: "lastLoginAt",
  LAST_MODIFIED_DATE: "lastModifiedDate",
  LAST_NIGHT_CLEARED_AMOUNT: "lastNightClearedAmount",
  LAST_NIGHT_LEDGER_AMOUNT: "lastNightLedgerAmount",
  LAST_PAYMENT_AMOUNT: "lastPaymentAmount",
  LAST_PAYMENT_DATE: "lastPaymentDate",
  LAST_UPDATE: "lastUpdate",
  LAST_VALUE: "lastValue",
  LIMIT: "limit",
  LIMITS: "limits",
  LINE_NUMBER: "lineNumber",
  LOCATION: "location",
  LOCK_REASON: "lockReason",
  LOCKED_AT: "lockedAt",
  LOGIN_NAME: "loginName",
  LOGIN_TIME: "loginTime",
  LOGOUT_TIME: "logoutTime",
  LOGOUT_TIMEOUT: "logoutTimeout",
  MANAGEMENT_GOAL: "managementGoal",
  MANAGEMENT_TYPE: "managementType",
  MANDATE_ID: "mandateId",
  MAPL_CD: "maplCd",
  MAPL_DESCRIPTION: "maplDescription",
  MAPL_ID: "maplId",
  MARKET_ALIAS_OR_CODE: "marketAliasOrCode",
  MARKET_ALIAS: "marketAlias",
  MARKET_ID: "marketId",
  MARKET_PLACE: "marketPlace",
  MARKET_PLACE_CD: "marketPlaceCd",
  MARKET_PLACE_CODE: "marketPlaceCode",
  MARKET_PLACE_ID: "marketPlaceId",
  MARKET_PROFIT: "marketProfit",
  MARKET_PROFIT_PERCENTAGE: "marketProfitPercentage",
  MARKET_PROFIT_PORT_CURR: "marketProfitPortCurr",
  MARKET_SHORT_DESCRIPTION: "marketShortDescription",
  MARKET_VALUE: "marketValue",
  MARKET_VALUE_CUST_CURR: "marketValueCustCurr",
  MARKET_VALUE_PORT_CURR: "marketValuePortCurr",
  MARKET_VALUE_REF_CURR: "marketValueRefCurr",
  MARKETPLACE_COUNTRY: "marketplaceCountry",
  MARKETPLACE_DESCRIPTION: "marketplaceDescription",
  MATURITY_DATE: "maturityDate",
  SECU_MATURITY_DATE: "secuMaturityDate",
  MATURITY_MONTH: "maturityMonth",
  MATURITY_VALUE: "maturity_value",
  MATURITY_VALUE_PORT_CURR: "maturityValuePortCurr",
  MATURITY_YEAR: "maturityYear",
  MAX_LIMIT_AMOUNT: "maxLimitAmount",
  MAX_PHONES_REGISTRABLE: "maxPhonesRegistrable",
  MAX_SCOPE_END: "maxScopeEnd",
  MEAN_CAPITAL: "meanCapital",
  MESSAGE: "message",
  MESSAGE_COUNT: "messageCount",
  MESSAGE_TYPE: "messageType",
  MIME_TYPE: "mimeType",
  MIN_SCOPE_START: "minScopeStart",
  MINIMAL_AMOUNT: "minimalAmount",
  MINIMAL_AMOUNT_CONVERTED: "minimalAmountConverted",
  MNEMONIC: "mnemonic",
  MOBILE_BANKING_REGISTRATION_ALLOWED: "mobileBankingRegistrationAllowed",
  MODIFIED: "modified",
  MODIFIED_DURATION: "modifiedDuration",
  MODIFIED_ENTERED_AT: "modifiedEnteredAt",
  MODULE_COMPONENT: "moduleComponent",
  MODULE_TYPE: "moduleType",
  MONTH: "month",
  MONTH_CURRENT: "monthCurrent",
  MONTH_PLUS_1: "monthPlus1",
  MONTH_PLUS_2: "monthPlus2",
  MONTH_PLUS_3: "monthPlus3",
  MSAL_FORWARD_ORIGINAL: "msalForwardOriginal",
  MSG_ID: "msgId",
  MULTILINE_VAL: "multilineVal",
  MULTILINE_VAL_SUBSET: "multilineValSubset",
  NAME: "name",
  NATIONAL_CODE: "nationalCode",
  NET_INCOME: "netIncome",
  NET_MONEY_FLOW: "netMoneyFlow",
  NET_SECURITY_FLOW: "netSecurityFlow",
  NET_VALUE: "netValue",
  NEXT_DELIVERY: "nextDelivery",
  NNE_NUMBER: "nneNumber",
  NO: "no",
  NO_FORM: "noForm",
  NOMINAL_FLAG: "nominalFlag",
  NOMINAL_VALUE: "nominalValue",
  NON_DELETED_TEMPLATES_COUNT: "nonDeletedTemplatesCount",
  NR_MARKET_PROFIT_PORT_CURR: "nrMarketProfitPortCurr",
  NR_MARKET_PROFIT_PCTG_PORT_CURR: "nrMarketProfitPctgPortCurr",
  NUM_ACCOUNTS: "numAccounts",
  NUMBER: "number",
  NUMBER_OF_ACTIONS: "numberOfActions",
  NUMBER_OF_EXECUTIONS: "numberOfExecutions",
  NUMBER_OF_MATCHED_ACTIONS: "numberOfMatchedActions",
  NUMBER_OF_ORDERS: "numberOfOrders",
  NUMBER_OF_RECORDS: "numberOfRecords",
  NUMBER_SUCCESSFUL: "numberSuccessful",
  OBJECT_NO: "objectNo",
  OFFSET_VALID_FROM: "offsetValidFrom",
  ON_CALL: "onCall",
  OPEN_BILLS: "openBills",
  OPEN_DATE: "openDate",
  OPENING_DATE: "openingDate",
  ORAN_UNIT_ID: "oranUnitId",
  ORDER: "order",
  ORDER_ADDRESS_LINES_CARD: "orderAddressLinesCard",
  ORDER_ADDRESS_LINES_PIN: "orderAddressLinesPin",
  ORDER_AMOUNT: "orderAmount",
  ORDER_AMOUNT_EXEC: "orderAmountExec",
  ORDER_CREATED_BY: "orderCreatedBy",
  ISSUING_COMMISSION: "issuingCommission",
  ORDER_ID: "orderId",
  ORDER_NUMBER: "orderNumber",
  ORDER_STATUS: "orderStatus",
  ORDER_TYPE: "orderType",
  ORDER_VALUE: "orderValue",
  ORDERED_BY_PERSON_ID: "orderedByPersonId",
  ORIGINAL_PAYM_ID: "originalPaymId",
  ORIGINATING_SYSTEM: "originatingSystem",
  ORUN_ID: "orunId",
  OUTSTANDING_AMOUNT: "outstandingAmount",
  OWNER: "owner",
  OWNER_NAME: "ownerName",
  OWNER_SURNAME: "ownerSurname",
  PABE_IS_TRUSTED_BENEF: "pabeIsTrustedBenef",
  PAGR_ID: "pagrId",
  PARENT_CATEGORY_SHORT: "parentCategoryShort",
  PARENT_CODE: "parentCode",
  PARENT_DESCRIPTION: "parentDescription",
  PARENT_DESCRIPTION_LONG: "parentDescriptionLong",
  PARENT_ID: "parentId",
  PART_NAME: "partName",
  PART_SURNAME: "partSurname",
  PASSWORD_LAST_UPDATE: "passwordLastUpdate",
  PARENT_FILE_NAME: "parentFileName",
  PATE_ID: "pateId",
  PAYM_EXTERNALLY_MANAGED: "paymExternallyManaged",
  PAYM_ID: "paymId",
  PAYMENT_AMOUNT: "paymentAmount",
  PAYMENT: "payment",
  PAYMENT_AT: "paymentAt",
  PAYMENT_COUNT: "paymentCount",
  PAYMENT_DATE: "paymentDate",
  PAYMENT_INFORMATION_ID: "paymentInformationId",
  PAYMENT_INSTRUCTION_ID: "paymentInstructionId",
  PAYMENT_LIMIT: "paymentLimit",
  PAYMENT_MESSAGE1: "paymentMessage1",
  PAYMENT_MESSAGE2: "paymentMessage2",
  PAYMENT_MESSAGE3: "paymentMessage3",
  PAYMENT_MESSAGE4: "paymentMessage4",
  PAYMENT_ORIGIN: "paymentOrigin",
  PAYMENT_PS_REFERENCE_NUMBER: "paymentPsReferenceNumber",
  PAYMENT_TYPE: "paymentType",
  PC_NO: "pcNo",
  IS_RESTRICTED: "isRestricted",
  PENDING_QUANTITY: "pendingQuantity",
  PENDING_CHANGES: "PendingChanges",
  PERFORMANCE: "performance",
  PERFORMANCE_CD: "performanceCd",
  PERFORMANCE_CODE: "performanceCode",
  PERFORMANCE_ID: "performanceId",
  PERFORMANCE_MONEY: "performanceMoney",
  PERFORMANCE_MONEY_CUMULATED: "performanceMoneyCumulated",
  PERFORMANCE_TIME: "performanceTime",
  PERFORMANCE_TIME_CUMULATED: "performanceTimeCumulated",
  PERF_PORTFOLIO_INDEX: "perfPortfolioIndex",
  PERF_INIT_DATE: "perfInitDate",
  PERMISSION_CODE: "permissionCode",
  PERIOD: "period",
  PERIOD_ID: "periodId",
  PERIOD_TYPE: "periodType",
  PERIODIC_TYPE: "periodicType",
  PETY_ID: "petyId",
  PERMANENT_ORDER_EXECUTION_DATE: "permanentOrderExecutionDate",
  PERMISSIONS: "permissions",
  PHONE: "phone",
  PHONE_1_REGISTRATION_STATE: "phone1RegistrationState",
  PHONE_2_REGISTRATION_STATE: "phone2RegistrationState",
  PHONE_NO: "phoneNo",
  PHONE_NO_1: "phoneNo1",
  PHONE_NO_2: "phoneNo2",
  PHONES: "phones",
  PO_BOX: "poBox",
  PORT_ACCRUED_INTEREST_PORT_CURR: "portAccruedInterestPortCurr",
  PORT_CURR_MNEMONIC: "portCurrMnemonic",
  PORT_CURRENCY: "portCurrency",
  PORT_DESCRIPTION: "portDescription",
  PORT_DESCRIPTION_AND_FORMATTED_NO: "portDescriptionAndFormattedNo",
  PORT_DESCRIPTION_AND_NO: "portDescriptionAndNo",
  PORT_ID: "portId",
  PORT_IPS_ID: "portIpsId",
  PORT_NUMBER: "portNumber",
  PORT_PROD_ID: "portProdId",
  PORT_PRODUCT_ID: "portProductId",
  PORT_PRODUCT_NAME: "portProductName",
  PORT_STRATEGY: "portStrategy",
  PORT_ISSUING_COMM_ALLOWED: "portIssuingCommAllowed",
  PORT_VALUE: "portValue",
  PORT_VALUE_PORT_CURR: "portValuePortCurr",
  PORTFOL_NAME: "portfolName",
  PORTFOLIO_CNT: "portfolioCnt",
  PORTFOLIO_GROUP_ID: "portfolioGroupId",
  PORTFOLIO_GROUP_NAME: "portfolioGroupName",
  PORTFOLIO_GROUP_MEMBERS: "portfolioGroupMembers",
  PORTFOLIO_GROUPS: "portfolioGroups",
  PORTFOLIO_ID: "portfolioId",
  PORTFOLIO_REC: "portfolioRec",
  PORTFOLIO_WEIGHT: "portfolioWeight",
  PORTFOLIO_WEIGHT_WITH_INTEREST: "portfolioWeightWithInterest",
  POS_CURRENCY: "posCurrency",
  POS_MKT_VAL: "posMktVal",
  POSSIBLE_ACTIONS: "possibleActions",
  ACCOUNT_POSITION_TYPE: "accountPositionType",
  POSTAL_NUMBER: "postalNumber",
  POSTER_IMAGE_URL: "posterImageUrl",
  POSTER_LINK: "posterLink",
  POSTER_NAME: "posterName",
  PRESENTATION_NAME: "presentationName",
  PRESENTATION_URL: "presentationUrl",
  PREVIEW_IMAGE_URL: "previewImageUrl",
  PRICE: "price",
  PRICE_CURRENCY: "priceCurrency",
  PRICE_FROM: "priceFrom",
  PROCESSING_ORDER_TYPE: "processingOrderType",
  PROD_ACCRUED_INTER_PORT_CURR: "prodAccruedInterPortCurr",
  PROD_ACCRUED_INTER_CUST_CURR: "prodAccruedInterCustCurr",
  PROD_ALIAS: "prodAlias",
  PROD_DESCRIPTION: "prodDescription",
  PROD_CUST_ID: "prodCustId",
  PROD_ID: "prodId",
  PROD_IDS: "prodIds",
  PROD_INFOTEXT_CD: "prodInfoTextCode",
  PROD_NO: "prodNo",
  PROD_NO_FORM: "prodNoForm",
  PROD_PROD_ID: "prodProdId",
  PROD_FREE_TEXT1: "prodFreeText1",
  PROD_VALUE_CURR_MNEMONIC: "prodValueCurrMnemonic",
  PROD_VALUE_CURRENCY: "prodValueCurrency",
  PRODUCT_ALIAS: "productAlias",
  PRODUCT_DESC: "productDesc",
  PRODUCT_DESCRIPTION: "productDescription",
  PRODUCT_ID: "productId",
  PORT_TOTAL_ASSET: "portTotalAsset",
  PRODUCT_NAME: "productName",
  PRODUCT_NUMBER: "productNumber",
  PRODUCT_NUMBER_FORM: "productNumberForm",
  PRODUCT_NUMBER_FORMATTED: "productNumberFormatted",
  PRODUCT_VALUE: "productValue",
  PRODUCT_VALUE_CUST_CURR: "productValueCustCurr",
  PRODUCT_VALUE_DATE: "productValueDate",
  PRODUCT_VALUE_REF_CURR: "productValueRefCurr",
  PROFILE: "profile",
  PROD_VALID_FROM: "prodValidFrom",
  PROD_VALID_UNTIL: "prodValidUntil",
  PROFILE_ID: "profileId",
  PROFILE_NAME: "profileName",
  PROFIT: "profit",
  PROFIT_LOSS: "profitLoss",
  PROFIT_LOSS_PERC: "profitLossPerc",
  PROFIT_LOSS_PERC_ACCUM: "profitLossPercAccum",
  PROFIT_PERCENTAGE: "profitPercentage",
  PROFIT_PORT_CURR: "profitPortCurr",
  REPORT_TYPES: "reportTypes",
  PROFIT_GROUP_CURR: "profitGroupCurr",
  PRTY_CD: "prtyCd",
  PT_AUTHORIZATION: "ptAuthorization",
  DENY_MASTER_DATA_PRINTING: "denyMasterDataPrinting",
  DENY_STORD: "denyStord",
  PURCHASE_PRICE: "purchasePrice",
  PURCHASE_VALUE: "purchaseValue",
  PURCHASE_VALUE_PORT_CURR: "purchaseValuePortCurr",
  PURCHASE_VALUE_GROUP_CURR: "purchaseValueGroupCurr",
  PURCHASE_VALUE_REF_CURR: "purchaseValueRefCurr",
  QUANTITY: "quantity",
  QUARTER_PLUS_1: "quarterPlus1",
  QUARTER_PLUS_2: "quarterPlus2",
  QUARTER_PLUS_3: "quarterPlus3",
  RANGE: "range",
  RANGE_ID: "rangeId",
  RATE: "rate",
  RATE_CHANGE_PERCENT: "rateChangePercent",
  RATE_DATE: "rateDate",
  RATE_UNIT: "rateUnit",
  RATING: "rating",
  READ_AT: "readAt",
  REAL_ID: "realId",
  REALISED: "realised",
  RECEIVED_DATE: "receivedDate",
  RECEIVER_ADDRESS: "receiverAddress",
  REF_CURRENCY: "refCurrency",
  REFERENCE_ID: "referenceId",
  REFERENCE_NO: "referenceNo",
  RETY_ID: "retyId",
  REG_NO: "regNo",
  REGION: "region",
  REGISTERED_BILLERS: "registeredBillers",
  REGISTRATION_STATE: "registrationState",
  REMANING_EXECUTIONS: "remaningExecutions",
  REPLIED_AT: "repliedAt",
  REPORT_TYPE: "reportType",
  REPORT_TYPE_CD: "reportTypeCd",
  REPORT_TYPE_ID: "reportTypeId",
  REQUEST_DATE_TIME: "requestDateTime",
  REQUEST_OBJECT: "requestObject",
  RES_EARNINGS: "resEarnings",
  RESPONSE_DATE_TIME: "responseDateTime",
  RESPONSE_OBJECT: "responseObject",
  RESTRICTED_FEATURES_ALLOWED: "restrictedFeaturesAllowed",
  RETIREMENT_AMOUNT_TYPE: "retirementAmountType",
  RETURN: "return",
  RGB_CODE: "rgbCode",
  RIGHTS: "rights",
  RISK_CURRENCY: "riskCurrency",
  RISK_CURRENCY_PRIORITY: "RiskCurrencyPriority",
  ROLE: "role",
  ROUND_LOT: "roundLot",
  ROUNDED_DATE: "roundedDate",
  ROW_COUNT: "rowCount",
  ALIAS_OR_RUBRIK: "aliasOrRubrik",
  ALIAS_OR_RUBRIK_OR_EMPTY: "aliasOrRubrikOrEmpty",
  SALUTATION: "salutation",
  SALUTATION_CARD: "salutationCard",
  SALUTATION_PIN: "salutationPin",
  SAML: "saml",
  SCAN_DATE: "scanDate",
  SCAN_CODE_LINE: "scanCodeLine",
  READY_FOR_EXECUTION: "isReadyForExecution",
  SCHEMA: "schema",
  SEC_TYPE_FORMAT_PATTERN: "secTypeFormatPattern",
  SECTOR: "sector",
  SECU_ID: "secuId",
  SECU_IS_ETF: "secuIsEtf",
  SECU_ORDER_TYPE: "secuOrderType",
  SECU_IS_FUND: "secuIsFund",
  SECU_INTEREST_FRQ: "secuInterestFrq",
  SECU_NOMINAL_FLAG: "secuNominalFlag",
  SECU_RISK_CURRENCY: "secuRiskCurrency",
  SECU_TYPE: "secuType",
  SECU_TYPE_CD: "secuTypeCd",
  SECU_TYPE_L1: "secuTypeL1",
  SECU_TYPE_L2: "secuTypeL2",
  SECURITY_CURR_ID: "securityCurrId",
  SECURITY_DESCRIPTION: "securityDescription",
  SECURITY_FACTSHEET_URL: "securityFactsheetUrl",
  SECURITY_ID: "securityId",
  SECURITY_ISIN_NUMBER: "securityIsinNumber",
  SECURITY_MAPL_ID: "securityMaplId",
  SECURITY_NUMBER: "securityNumber",
  SECURITY_TEXT: "securityText",
  SECURITY_TEXT_LONG: "securityTextLong",
  SECURITY_TYPE: "securityType",
  SELECTED_PHONE: "selectedPhone",
  SELECTED_PHONE_NO: "selectedPhoneNo",
  SELI_ID: "seliId",
  SELI_TICKER: "seliTicker",
  SENDER_ADDRESS: "senderAddress",
  SEC_TT_DESCRIPTION: "SettDescription",
  SENDER_NAME: "senderName",
  SENT_AT: "sentAt",
  SEQUENCE_NO: "sequenceNo",
  SERVICE_NAME: "serviceName",
  SESSION_TYPE: "sessionType",
  SETY_CATEGORIZATION_LEVEL: "setyCategorizationLevel",
  SETY_DISPLAY_PRIORITY: "setyDisplayPriority",
  SETY_L1_DISPLAY_PRIORITY: "setyL1DisplayPriority",
  SETY_L2_DISPLAY_PRIORITY: "setyL2DisplayPriority",
  SEX_CODE: "sexCode",
  SHARE_REGISTER_CODE: "shareRegisterCode",
  SHORT_MESSAGE_ID: "shortMessageId",
  SHORT_MESSAGE_SOURCE_CODE: "shortMessageSourceCode",
  SIGN_REQUIRED: "signRequired",
  SIGNED_AMOUNT_PORT_CURR: "signedAmountPortCurr",
  SIGNED_QUANTITY: "signedQuantity",
  SIZE: "size",
  SO_ACTIVE: "isSoActive",
  SORT_CODE: "sortCode",
  SORT_INDEX: "sortIndex",
  SORT_SEQUENCE: "sortSequence",
  SOURCE_NO: "sourceNo",
  SPECIAL_ACCOUNT: "SpecialAccount",
  STANDING_ORDER_LIMIT: "standingOrderLimit",
  START_DATE: "startDate",
  STARTPAGE_OPTIONS: "startpageOptions",
  STATE: "state",
  STATE_BUTTON_IDS: "stateButtonIds",
  STATUS: "status",
  STATUS_DATE_CHANGE: "statusDateChange",
  STOP_LOSS_LIMIT: "stopLossLimit",
  STREET: "street",
  SUB_ASSET_CLASS: "subAssetClass",
  SUB_ASSET_CLASS_CD: "subAssetClassCd",
  SUBJECT: "subject",
  SUBSCRIPTION_URL: "subscriptionUrl",
  SUMMARY_INFO: "summaryInfo",
  SUPPORTED_PAYMENT_TYPES: "supportedPaymentTypes",
  SUPPRESS_ALTERNATIVE_NUMBER: "suppressAlternativeNumber",
  SURNAME: "surname",
  SWIFT: "swift",
  SWIFT_BIC_IBAN_CODE: "swiftBicIbanCode",
  SYMBOL: "symbol",
  SYSTEM_WIDGET_REMOVABLE: "systemWidgetRemovable",
  SYSTEM_WIDGET_HEIGHT: "systemWidgetHeight",
  SYSTEM_WIDGET_COLOR: "systemWidgetColor",
  TABLET_POSITION: "tabletPosition",
  TAG: "tag",
  TAG_LINK: "tagLink",
  TAGS: "tags",
  TAX: "tax",
  TEMPLATE_GROUP: "templateGroup",
  TEMPLATES_COUNT: "templatesCount",
  TEXT: "text",
  VOTING_ANSWER: "votingAnswer",
  IS_ANSWER_TO_VOTING: "isAnswerToVoting",
  TEXT_LEFT1: "textLeft1",
  TEXT_LEFT2: "textLeft2",
  TEXT_LEFT3: "textLeft3",
  TEXT_LEFT4: "textLeft4",
  TEXT_LEFT5: "textLeft5",
  TEXT_LEFT6: "textLeft6",
  TEXT_LEFT7: "textLeft7",
  TEXT_LEFT8: "textLeft8",
  TEXT_LEFT9: "textLeft9",
  TEXT_LEFT10: "textLeft10",
  TEXT_RIGHT1: "textRight1",
  TEXT_RIGHT2: "textRight2",
  TEXT_RIGHT3: "textRight3",
  TEXT_RIGHT4: "textRight4",
  TEXT_RIGHT5: "textRight5",
  TEXT_RIGHT6: "textRight6",
  TEXT_RIGHT7: "textRight7",
  TEXT_RIGHT8: "textRight8",
  TEXT_RIGHT9: "textRight9",
  TEXT_RIGHT10: "textRight10",
  PLAN_TYPE_CD: "planTypeCd",
  TEXT_SHORT: "textShort",
  TICKER_SYMBOL: "tickerSymbol",
  TIME_TO_MATURITY: "timeToMaturity",
  TIME_TO_SEND: "timeToSend",
  TITLE: "title",
  TOTAL_AMOUNT: "totalAmount",
  TOTAL_ASSET_END: "totalAssetEnd",
  TOTAL_ASSET_START: "totalAssetStart",
  TOTAL_DEPOSITS: "totalDeposits",
  TOTAL_INPUT: "totalInput",
  TOTAL_WITHDRAWALS: "totalWithdrawals",
  TRADE_DATE: "tradeDate",
  TRADE_UNIT: "tradeUnit",
  TRADING_PLACE: "tradingPlace",
  TRANSACTION_AMOUNT_INCL_FEES: "transactionAmountInclFees",
  TRANSACTION_TYPE: "transactionType",
  TRANSFERRED_ON: "transferredOn",
  TRANSITION_STATE: "transitionState",
  TRX_ID: "trxId",
  TYPE: "type",
  TYPE_CD: "typeCd",
  TYPE_DESCRIPTION: "typeDescription",
  TYPE_ID: "typeId",
  TYPE_TRANSLATION: "typeTranslation",
  UNCLEARED_AMOUNT: "unclearedAmount",
  UNIT: "unit",
  UNLOCK_AT: "unlockAt",
  UNLOCK_REASON: "unlockReason",
  UNSUBSCRIPTION_URL: "unsubscriptionUrl",
  UPCOMING: "Upcoming",
  URL: "url",
  USE_EXTENDED_BROKERAGE_ORDER: "useExtendedBrokerageOrder",
  USE_ORDER_TYPE: "useOrderType",
  USER_COUNT: "userCount",
  USER_UPDATE: "userUpdate",
  UPLOAD_DATE: "uploadDate",
  VAL: "val",
  VALID_FROM: "validFrom",
  VALID_FROM_DATE: "validFromDate",
  VALID_UNTIL: "validUntil",
  VALID_UNTIL_DATE: "validUntilDate",
  VALIDATION_STATUS: "validationStatus",
  VALIDITY: "validity",
  VALUE: "value",
  VALUE_CHF: "valueChf",
  VALUE_USD: "valueUsd",
  VALUE_EUR: "valueEur",
  VALUE_GBP: "valueGbp",
  VALUE_ASSET: "valueAsset",
  VALUE_BOOK_DATE: "valueBookDate",
  VALUE_BOOK_DATE_BALANCE: "valueBookDateBalance",
  VALUE_CLEARED: "valueCleared",
  VALUE_DATE: "valueDate",
  VALUE_DISPLAY_CURR: "valueDisplayCurr",
  VALUE_INCL_INTEREST: "valueInclInterest",
  VALUE_INCL_INTEREST_CUST_CURR: "valueInclInterestCustCurr",
  VALUE_LOAN: "valueLoan",
  VALUE_PORT_CURR: "valuePortCurr",
  VALUE_RATE: "valueRate",
  VALUE_RATE_CURRENCY: "valueRateCurrency",
  VALUE_RATE_CURRENCY_INCL_FEES: "valueRateCurrencyInclFees",
  VALUE_UNCLEARED: "valueUncleared",
  VIDEO_URL: "videoUrl",
  VISA1: "visa1",
  VISA2: "visa2",
  VOICE_OUTPUT: "voiceOutput",
  VOTING_OPTIONS: "votingOptions",
  WEALTH_CATEGORY_TRANSLATION: "wealthCategoryTranslation",
  WEALTH_CATEGORY_TYPE: "wealthCategoryType",
  WIDGET_INFO: "widgetInfo",
  YEAR: "year",
  YEAR_END_PROFIT: "yearEndProfit",
  YEAR_END_PROFIT_PERCENTAGE: "yearEndProfitPercentage",
  YIELD_TO_MATURITY: "yieldToMaturity",
  ZIP: "zip",
  ZIP_CODE: "zipCode",
  REF_PROD_NO_FORM: "refProdNoForm",
  REF_PROD_NO: "refProdNo",
  REF_PROD_IBAN: "refProdIban",
  REF_CORI_ALIAS: "refCoriAlias",
  VALID_TO: "validTo",
  SETE_TEXT_SHORT: "secuTextDescription",
  CUAV_INTEREST_RATE: "loanInterestRate",
  POPO_VALUE: "loanValue",
  CUAV_COST_VALUE: "loanCostValue",
  PORT_PROD_DESCRIPTION: "portProdDescription",
  SETT_DESCRIPTION: "loanTypeDescription",
  CUAV_MARKET_VALUE: "marketValue",
  REF_ACTT_DESCRIPTION: "refActtDescription",
  ACTR_DEBIT_CREDIT_CD: "actrDebitCreditCd",
  JSON_TYPE_CD: "typeCd",
  CUAV_ACCRUED_INTEREST: "cuavAccruedInterest",
  BADO_PRODUCT_DESC: "documentProductDescription",
  BADO_PRODUCT_TYPE: "documentProductType",
  CUAV_MARKET_VALUE_C_CURR: "cuavMarketValueC",
  FIUP_SIGN_BY: "fiupSignBy",
  FIUP_COUNTERSIGN_BY: "fiupCountersignBy",
  SETE_TEXT_ADD_ON: "loanName",
  SECU_ASSET_TYPE: "secuAssetType",
  CUST_ADDR_FULL_ADDRESS: "custAddrFullAddress",
  PROD_VALUE_C_CURR: "prodValueCustCurr",
  ACTY_SPECIAL_ACCOUNT: "actySpecialAccount",
  PROD_PRTY_CD: "prodTypeCode",
  ACCO_DM: "accoDateModified",
};
CLX.Et = function () {
  var c,
    e = CLX.D,
    b,
    a,
    d = function () {
      b = CLX.Ae("toolbarLayoutTemplate");
      a = CLX.Ae("toolbarLayoutCellTemplate");
    };
  d();
  c = {
    getName: function () {
      return CLX.Cq.TOOLBAR;
    },
    attach: function (f, h, j, g) {
      var i = b.clone();
      h.append(i);
      CLX.$.each(j, function (k, l) {
        if (l) {
          var m = a.clone();
          i.append(m);
          l.attach(m.find("." + e.TOOLBAR_COMPONENT), g);
        }
      });
    },
  };
  return c;
};
CLX.Eu = function (b, a) {
  b.addClass(CLX.Ek(a));
};
CLX.Ev = function (b, a, d) {
  var c = CLX.L(b, a) || [];
  if (!CLX.B(c)) {
    c = [c];
  }
  return d ? c.slice(0) : c;
};
CLX.Ew = function (b) {
  var a = b;
  if (CLX.O(b)) {
    a = CLX.$("#" + b);
  } else {
    if (CLX.M(b)) {
      a = b();
    }
  }
  return a;
};
CLX.Ex = function (b, a) {
  var c = CLX.L(b, a);
  if (c !== undefined && c !== null) {
    if (CLX.B(c)) {
      c = CLX.$.map(c, function (d) {
        return String(d || "");
      });
    } else {
      c = String(c).split(/\s+/);
    }
    c = CLX.$.grep(c, function (d) {
      return !!d;
    });
  }
  return c;
};
CLX.Ey = function (b, a) {
  b.removeClass(CLX.Ek(a));
};
CLX.Ez = function (c, a) {
  var b = CLX.Eo(c, CLX.Eg(c, a));
  return CLX.Ei(b);
};
CLX.Fa = function HeadingRenderer() {
  var i = CLX.As(CLX.Bx()),
    o = CLX.Be,
    e = CLX.F,
    h = CLX.E,
    k = CLX.S,
    l = CLX.D,
    g =
      "." +
      l.HEADING_BODY +
      " > ." +
      l.HEADING_CHILDREN +
      " > ." +
      l.HEADING_TOOLBAR,
    p =
      "." +
      l.HEADING_BODY +
      " > ." +
      l.HEADING_CHILDREN +
      " > ." +
      l.HEADING_TOGGLEBAR,
    m = CLX.Eq,
    r,
    b = function () {
      r = CLX.Ae("headingTemplate");
    },
    q = function (w, u) {
      var x, z, v, t, y;
      x = w.children("." + l.HEADING_BODY).children("." + l.HEADING_ICON);
      z = w.children("." + l.HEADING_BODY).children("." + l.HEADING_TITLE);
      v = CLX.Ex(u, h.ICON) || [];
      t = CLX.Do(u, h.INTERACTIVE) || v.length > 1;
      if (t) {
        x.attr(h.TABINDEX, "0");
      } else {
        x.removeAttr(h.TABINDEX);
      }
      y = CLX.Do(u, h.COLLAPSED);
      v = y ? v[1] || v[0] : v[0];
      x.attr(h.CLASS, l.HEADING_ICON);
      if (CLX.N(v)) {
        x.addClass(v);
      }
      if (t) {
        x.addClass(l.HEADING_INTERACTIVE);
        z.addClass(l.HEADING_INTERACTIVE);
      } else {
        x.removeClass(l.HEADING_INTERACTIVE);
        z.removeClass(l.HEADING_INTERACTIVE);
      }
    },
    a = function (w, u) {
      var y, x, z, v, t;
      x = w.children("." + l.HEADING_BODY).children("." + l.HEADING_ICON);
      z = w.children("." + l.HEADING_BODY).children("." + l.HEADING_TITLE);
      x.unbind();
      z.unbind();
      v = CLX.Ex(u, h.ICON) || [];
      t = v.length > 1;
      if (t) {
        y = function (A) {
          var B = CLX.Do(u, h.COLLAPSED);
          CLX.R(u, h.COLLAPSED, !B);
          A.preventDefault();
        };
        x.press(y);
        z.press(y);
      }
      x.press(function (A) {
        CLX.Bn(u, o.CLICK, l.HEADING_ICON);
        A.preventDefault();
      });
      z.press(function (A) {
        CLX.Bn(u, o.CLICK, l.HEADING_TITLE);
        A.preventDefault();
      });
    },
    n = function (u) {
      var t, v, x, w;
      t = CLX.Ev(u, h.OPTIONS);
      v = CLX.L(u, h.OPTION);
      x = CLX.L(u, h.ID);
      w = CLX.$.map(t, function (z, y) {
        var B, A;
        if (CLX.O(z)) {
          B = z;
        } else {
          if (CLX.C(z)) {
            B = z.text;
          }
        }
        A = (y === 0 && !v) || v === z;
        return CLX.El({
          type: CLX.Cp.TOGGLE,
          name: x + "_option",
          text: B,
          value: z,
          active: A,
          css: z.css,
        });
      });
      if (t.length && !v) {
        CLX.R(u, h.OPTION, t[0]);
      }
      return w;
    },
    c = function (v, u) {
      var t = v.data(k.BUTTON_GROUP);
      if (!t) {
        t = CLX.En({ content: n(u), layout: CLX.Em() });
        CLX.Bi(t, function (x) {
          var y, w, z;
          if (x.action === o.CLICK) {
            y = CLX.L(x.component, h.SELECTED_VALUE);
            w = CLX.Ev(u, h.OPTIONS);
            if (CLX.Ak(w, y)) {
              z = { action: o.CLICK, name: h.OPTION, value: y };
              CLX.Bn(u, z);
              CLX.R(u, h.OPTION, y);
            }
          }
        });
        v.data(k.BUTTON_GROUP, t);
      }
      return t;
    },
    s = function (u, t) {
      var v = u.data(k.TOOLBAR);
      if (!v) {
        v = CLX.En({ layout: CLX.Et() });
        u.data(k.TOOLBAR, v);
      }
      return v;
    },
    d = function () {
      var t = CLX.By();
      if (t.get(CLX.Bw.HEADINGS_USE_TABS)) {
        return m.TAB_BAR;
      }
      return m.TOGGLE_BAR;
    },
    f = function (w) {
      var u = this,
        t = CLX.Ev(u, h.OPTIONS),
        v;
      v = CLX.$.grep(t, function (x) {
        return x && x[h.ID] === w;
      });
      if (v.length) {
        CLX.R(u, h.OPTION, v[0]);
      }
    },
    j = CLX.Aj(CLX.Bx().getDescriptor());
  j.def(e.STRING, null, h.ICON, h.DATA_ICON);
  j.def(e.STRING, null, h.TEXT, h.DATA_TEXT);
  j.def(e.BOOLEAN, null, h.COLLAPSED, h.DATA_COLLAPSED, true);
  j.def(e.COMPONENT, null, h.TOOLBAR, [], true);
  j.def(e.OBJECT, null, h.OPTIONS, [], true);
  j.def(e.OBJECT, null, h.OPTION, [], true);
  j.def(e.STRING, d(), h.LAYOUT_TYPE, [h.LAYOUT_TYPE, h.DATA_TYPE], true);
  b();
  i.getDescriptor = function () {
    return j;
  };
  i.getName = function () {
    return CLX.Ag.HEADING;
  };
  i.init = function (t) {
    i.parent.init(t);
    t.setOptionById = f;
  };
  i.paint = function (u, t) {
    return i.parent.paint(r.clone(), t);
  };
  i.addEventHandlers = function (u, t) {
    a(u, t);
    i.parent.addEventHandlers(u, t);
  };
  i.attachChildren = function (u, y, t) {
    var z = CLX.L(y, h.TOOLBAR),
      B = CLX.L(y, h.HEADING_TABS_BOTTOM),
      A,
      w,
      v,
      x;
    if (z) {
      z.attach(CLX.$(g, u), t);
    }
    if (B) {
      A = l.HEADING_TABBAR_BOTTOM;
      w = CLX.D.HEADING_CONTAINS_TABBAR_BOTTOM;
    } else {
      A = l.HEADING_TABBAR;
      w = CLX.D.HEADING_CONTAINS_TABBAR;
    }
    if (CLX.L(y, h.OPTIONS)) {
      v = c(u, y);
      if (CLX.Ds(y, h.LAYOUT_TYPE, m) === m.TAB_BAR) {
        v.addClass(CLX.D.TABS);
        v.attach(u.children("." + A), t);
        u.addClass(w);
      } else {
        x = s(u, y);
        CLX.R(x, h.CONTENT, v);
        v.removeClass(CLX.D.TABS);
        x.attach(CLX.$(p, u), t);
      }
    }
    i.parent.attachChildren(u, y, t);
  };
  i.detachChildren = function (u, t) {
    var v = CLX.L(t, h.TOOLBAR),
      x,
      w;
    if (v) {
      v.detach();
    }
    if (CLX.L(t, h.OPTIONS)) {
      x = c(u, t);
      if (CLX.Ds(t, h.LAYOUT_TYPE, m) === m.TAB_BAR) {
        x.detach();
      } else {
        w = s(u, t);
        w.detach();
      }
    }
    i.parent.detachChildren(u, t);
  };
  CLX.Az(i, h.TOOLBAR, function (t) {
    if (t.old) {
      t.old.detach();
    }
    CLX.Co(t);
  });
  CLX.Az(i, h.ICON, function (v) {
    var u = v.data.element,
      t = v.data.component;
    q(u, t);
    a(u, t);
  });
  CLX.Az(i, h.INTERACTIVE, function (v) {
    var u = v.data.element,
      t = v.data.component;
    q(u, t);
  });
  CLX.Az(i, h.COLLAPSED, function (w) {
    var u = w.data.element,
      t = w.data.component,
      v = CLX.L(t, h.PARENT);
    if (v) {
      CLX.R(v, h.COLLAPSED, w.value);
    }
    q(u, t);
  });
  CLX.Az(i, h.PARENT, function (v) {
    var t = v.data.component,
      u = CLX.L(t, h.PARENT);
    if (u) {
      CLX.R(t, h.COLLAPSED, CLX.Do(u, h.COLLAPSED));
    }
  });
  CLX.Az(i, h.TEXT, function (t) {
    t.data.element
      .children("." + l.HEADING_BODY)
      .children("." + l.HEADING_TITLE)
      .html(t.value || "");
  });
  CLX.Az(i, h.SUBTITLE, function (t) {
    t.data.element
      .children("." + l.HEADING_BODY)
      .children("." + l.HEADING_SUBTITLE)
      .html(t.value || "");
  });
  CLX.Az(i, h.OPTION, function (u) {
    var v = c(u.data.element, u.data.component),
      t = null;
    CLX.$.each(CLX.L(v, h.CONTENT), function (w, x) {
      if (CLX.L(x, h.VALUE) === u.value) {
        CLX.R(x, h.ACTIVE, true);
        t = null;
        return false;
      }
      if (CLX.Do(x, h.ACTIVE)) {
        t = x;
      }
    });
    if (t) {
      CLX.R(t, h.ACTIVE, false);
    }
  });
  CLX.Az(i, h.OPTIONS, function (u) {
    var t = c(u.data.element, u.data.component);
    CLX.R(t, h.CONTENT, n(u.data.component));
  });
  CLX.Az(i, h.LAYOUT_TYPE, CLX.Co);
  return i;
};
CLX.Fb = {
  NORTH_LEFT: "clx-overlay-north-left",
  NORTH_RIGHT: "clx-overlay-north-right",
  NORTH_CENTER_LEFT: "clx-overlay-north-center-left",
  NORTH_CENTER_RIGHT: "clx-overlay-north-center-right",
  NORTH_EAST: "clx-overlay-north-east",
  EAST_TOP: "clx-overlay-east-top",
  EAST_BOTTOM: "clx-overlay-east-bottom",
  EAST_CENTER: "clx-overlay-east-center",
  SOUTH_EAST: "clx-overlay-south-east",
  SOUTH_LEFT: "clx-overlay-south-left",
  SOUTH_RIGHT: "clx-overlay-south-right",
  SOUTH_CENTER_RIGHT: "clx-overlay-south-center-right",
  SOUTH_CENTER_LEFT: "clx-overlay-south-center-left",
  SOUTH_WEST: "clx-overlay-south-west",
  WEST_TOP: "clx-overlay-west-top",
  WEST_BOTTOM: "clx-overlay-west-bottom",
  WEST_CENTER: "clx-overlay-west-center",
  NORTH_WEST: "clx-overlay-north-west",
};
CLX.Fc = function (b, a) {
  CLX.Eu(b, a);
  b.children().each(function () {
    CLX.Fc(CLX.$(this), a);
    return true;
  });
};
CLX.Fd = function (c, b) {
  var a = 0,
    d = " ";
  if (CLX.B(c)) {
    c = CLX.Ce(c, d);
  }
  if (CLX.B(b)) {
    b = CLX.Ce(b, d);
  }
  if (!c && b) {
    a = -1;
  } else {
    if (c && !b) {
      a = 1;
    } else {
      if (c !== b) {
        c = c.toLowerCase();
        b = b.toLowerCase();
        c = c.replace(/\u00DF/g, "s");
        c = c.replace(/\u00E0/g, "a");
        c = c.replace(/\u00E1/g, "a");
        c = c.replace(/\u00E2/g, "a");
        c = c.replace(/\u00E3/g, "a");
        c = c.replace(/\u00E4/g, "a");
        c = c.replace(/\u00E5/g, "a");
        c = c.replace(/\u00E6/g, "a");
        c = c.replace(/\u00E7/g, "c");
        c = c.replace(/\u00E8/g, "e");
        c = c.replace(/\u00E9/g, "e");
        c = c.replace(/\u00EA/g, "e");
        c = c.replace(/\u00EB/g, "e");
        c = c.replace(/\u00EC/g, "i");
        c = c.replace(/\u00ED/g, "i");
        c = c.replace(/\u00EE/g, "i");
        c = c.replace(/\u00EF/g, "i");
        c = c.replace(/\u00F0/g, "d");
        c = c.replace(/\u00F1/g, "n");
        c = c.replace(/\u00F2/g, "o");
        c = c.replace(/\u00F3/g, "o");
        c = c.replace(/\u00F4/g, "o");
        c = c.replace(/\u00F5/g, "o");
        c = c.replace(/\u00F6/g, "o");
        c = c.replace(/\u00F8/g, "o");
        c = c.replace(/\u00F9/g, "u");
        c = c.replace(/\u00FA/g, "u");
        c = c.replace(/\u00FB/g, "u");
        c = c.replace(/\u00FC/g, "u");
        c = c.replace(/\u00FD/g, "y");
        c = c.replace(/\u00FF/g, "y");
        b = b.replace(/\u00DF/g, "s");
        b = b.replace(/\u00E0/g, "a");
        b = b.replace(/\u00E1/g, "a");
        b = b.replace(/\u00E2/g, "a");
        b = b.replace(/\u00E3/g, "a");
        b = b.replace(/\u00E4/g, "a");
        b = b.replace(/\u00E5/g, "a");
        b = b.replace(/\u00E6/g, "a");
        b = b.replace(/\u00E7/g, "c");
        b = b.replace(/\u00E8/g, "e");
        b = b.replace(/\u00E9/g, "e");
        b = b.replace(/\u00EA/g, "e");
        b = b.replace(/\u00EB/g, "e");
        b = b.replace(/\u00EC/g, "i");
        b = b.replace(/\u00ED/g, "i");
        b = b.replace(/\u00EE/g, "i");
        b = b.replace(/\u00EF/g, "i");
        b = b.replace(/\u00F0/g, "d");
        b = b.replace(/\u00F1/g, "n");
        b = b.replace(/\u00F2/g, "o");
        b = b.replace(/\u00F3/g, "o");
        b = b.replace(/\u00F4/g, "o");
        b = b.replace(/\u00F5/g, "o");
        b = b.replace(/\u00F6/g, "o");
        b = b.replace(/\u00F8/g, "o");
        b = b.replace(/\u00F9/g, "u");
        b = b.replace(/\u00FA/g, "u");
        b = b.replace(/\u00FB/g, "u");
        b = b.replace(/\u00FC/g, "u");
        b = b.replace(/\u00FD/g, "y");
        b = b.replace(/\u00FF/g, "y");
        a = c < b ? -1 : 1;
      }
    }
  }
  return a;
};
CLX.Fe = function () {
  var b,
    a = {};
  b = {
    put: function (c, d) {
      if (c || c === 0) {
        a[String(c)] = d;
      }
    },
    getValue: function (c) {
      return a[String(c)];
    },
    keys: function () {
      var c = [],
        d;
      for (d in a) {
        if (a.hasOwnProperty(d)) {
          c[c.length] = d;
        }
      }
      return c;
    },
    values: function () {
      var c = [],
        d;
      for (d in a) {
        if (a.hasOwnProperty(d)) {
          c[c.length] = a[d];
        }
      }
      return c;
    },
    isEmpty: function () {
      var c = true,
        d;
      for (d in a) {
        if (a.hasOwnProperty(d)) {
          c = false;
          break;
        }
      }
      return c;
    },
    size: function () {
      var c = 0,
        d;
      for (d in a) {
        if (a.hasOwnProperty(d)) {
          c += 1;
        }
      }
      return c;
    },
    containsKey: function (c) {
      return a.hasOwnProperty(String(c));
    },
    remove: function (d) {
      var e = String(d),
        c;
      if (a.hasOwnProperty(e)) {
        c = a[e];
        delete a[e];
      }
      return c;
    },
    clear: function () {
      a = {};
    },
  };
  return b;
};
CLX.Ff = function (b) {
  var c, d, a;
  c = {
    positionPopup: function (k, s) {
      var e = CLX.Ew(b),
        j,
        f,
        h,
        g,
        m,
        l,
        q,
        n,
        r,
        i,
        p,
        o;
      q = e.outerWidth(true);
      l = e.outerHeight(true);
      j = CLX.$(window);
      f = j.width();
      h = j.height();
      g = j.scrollLeft();
      m = j.scrollTop();
      if (k && k.length) {
        s = s || 0;
        r = k.offset();
        i = k.outerHeight(true);
        p = r.left;
        o = r.top;
        if (d || a) {
          p += d;
          o += a;
        } else {
          o += i + s;
          if (o + l > h + m) {
            o = r.top - l - s;
          }
        }
      } else {
        p = (f - q) / 2 + g;
        o = m;
        o += a || (h - l) / 3;
      }
      f += g;
      h += m;
      if (p + q > f) {
        p = f - q;
      }
      if (o + l > h) {
        o = h - l;
      }
      n = { left: p < 0 ? 0 : p, top: o < 0 ? 0 : o };
      e.css(n);
    },
    setRelativePosition: function (f, e) {
      d = f;
      a = e;
    },
  };
  return c;
};
CLX.Fg = function (a) {
  CLX.Ew(a)
    .mousedown(function () {
      return false;
    })
    .bind("selectstart", function () {
      return false;
    });
};
CLX.Fh = function () {
  return /(Mobile|Android|Windows Phone)/.test(navigator.userAgent);
};
CLX.Fi = function (b, a) {
  CLX.Ey(b, a);
  b.children().each(function () {
    CLX.Fi(CLX.$(this), a);
    return true;
  });
};
CLX.Fj = function (a) {
  if (a.length) {
    CLX.Av(function () {
      a.first().focus();
    });
  }
};
CLX.Fk = function (a) {
  return !a ? 0 : a > 0 ? 1 : -1;
};
CLX.Fl = function () {
  return;
};
CLX.Fm = function () {
  return false;
};
CLX.Fn = function (a) {
  var b = CLX.I.get(CLX.Fa);
  return CLX.Cr(b, a);
};
CLX.Fo = function OverlayRenderer() {
  var g = CLX.As(CLX.Bx()),
    d = CLX.F,
    h = CLX.E,
    a = CLX.D,
    e = CLX.Fb,
    b = (function () {
      var k = [];
      CLX.$.each(e, function (l, m) {
        k.push(m);
      });
      return k.join(" ");
    })(),
    c = function (m, q) {
      var o = CLX.$(window),
        p = o.height() / 2,
        k = o.scrollTop(),
        s = CLX.L(q, h.PARENT),
        t = s ? s.getElement() : null,
        v = t ? t.offset().top : 0,
        n = v - k,
        u = m.outerHeight(true),
        l = CLX.$("." + a.PAGE_HEADING).outerHeight(true),
        r = n < p || v < l + u;
      return r ? e.SOUTH_RIGHT : e.NORTH_RIGHT;
    },
    i = function (k) {
      return CLX.Ds(k, h.POSITION, e) || CLX.L(k, h.POSITION);
    },
    f = function (m, l) {
      var k = i(l);
      CLX.Aa.call(l, b, true);
      m.removeClass(b);
      if (CLX.N(k)) {
        CLX.X.call(l, k);
        m.addClass(k);
      } else {
        k = c(m, l);
        if (CLX.N(k)) {
          m.addClass(k);
        }
      }
    },
    j = CLX.Aj(CLX.Bx().getDescriptor());
  j.def(d.STRING, null, h.POSITION, h.DATA_POSITION);
  j.def(d.COMPONENT, null, h.CONTENT, [], true);
  j.def(d.BOOLEAN, false, h.EXPANDED, [h.EXPANDED, h.ARIA_EXPANDED]);
  g.getDescriptor = function () {
    return j;
  };
  g.getName = function () {
    return CLX.Ag.OVERLAY;
  };
  g.paint = function (l, k) {
    var m = CLX.Ai.clone();
    CLX.Aa.call(k, b, true);
    return g.parent.paint(m, k);
  };
  g.attachChildren = function (m, k, l) {
    var n = CLX.L(k, h.CONTENT);
    if (n) {
      n.attach(m.find("." + a.OVERLAY_COMPONENT), l);
    }
    g.parent.attachChildren(m, k, l);
  };
  g.detachChildren = function (l, k) {
    var m = CLX.L(k, h.CONTENT);
    if (m) {
      m.detach();
    }
    g.parent.detachChildren(l, k);
  };
  CLX.Az(g, h.CONTENT, CLX.Co);
  CLX.Az(g, h.POSITION, function (k) {
    f(k.data.element, k.data.component);
  });
  CLX.Az(g, h.EXPANDED, function (o) {
    var m = o.data.element,
      l = o.data.component,
      n,
      k,
      p;
    n = CLX.L(l, h.PARENT);
    if (n) {
      if (o.value) {
        n.addClass(a.EXPANDED);
      } else {
        n.removeClass(a.EXPANDED);
      }
      k = n.getElement();
      if (k) {
        p = k
          .children()
          .not("." + a.OVERLAY)
          .find("[role]")
          .first();
        if (!p.length) {
          p = k;
        }
        p.attr(h.ARIA_EXPANDED, String(!!o.value));
      }
    }
    if (o.value) {
      f(m, l);
      m.removeClass(a.DISPLAY_NONE);
    } else {
      m.addClass(a.DISPLAY_NONE);
    }
  });
  return g;
};
CLX.Fp = {
  SWISS_RED: 2,
  SWISS_DOMESTIC: 3,
  INTERNATIONAL: 5,
  ACCOUNT_TRANSFER: 6,
  SAVING_PLAN_FIX_AMOUNT: 7,
  SAVING_PLAN_SURPLUS: 8,
  MONEY_ORDER: 9,
  BANK_CHEQUE: 10,
  IPI: 11,
  SWISS_ORANGE: 12,
  SAVING_PLAN_FIX_AMOUNT_DEBIT_ACCOUNT: 16,
  SAVING_PLAN_SURPLUS_DEBIT_ACCOUNT: 17,
  BULK_PAYMENT: 20,
  BULK_SALARY_PAYMENT: 21,
  PAYMENT_IMPORT: 22,
  UK_BACS: 23,
  UK_FASTER: 24,
  UK_CHAPS: 25,
  WITHDRAWAL_NOTICE: 26,
  NC_DOMESTIC: 27,
};
CLX.Fq = function (b, a) {
  b.push(a);
};
CLX.Fr = function (d, c) {
  var a = 0,
    b = typeof d,
    e = typeof c;
  if (d !== c) {
    if (b === e) {
      a = d - c;
    } else {
      if (d) {
        a = CLX.Fk(d);
      } else {
        if (c) {
          a = -CLX.Fk(c);
        }
      }
    }
  }
  return a;
};
CLX.Fs = function (c, m) {
  var g,
    n = 0.5,
    q = [],
    p,
    o,
    l,
    k,
    v,
    u,
    j,
    i,
    t,
    s,
    e,
    h,
    b = 0,
    a = 0,
    r = function (w) {
      var y, x, z;
      j = w.pageX;
      i = w.pageY;
      y = { left: p + (j - v), top: o + (i - u) };
      if (y.left < 0) {
        y.left = 0;
      }
      if (y.top < 0) {
        y.top = 0;
      }
      if ((t || t === 0) && y.left > t) {
        y.left = t;
      }
      if ((s || s === 0) && y.top > s) {
        y.top = s;
      }
      c.css(y).show();
      c.css("right", "auto");
      for (x = 0; x < q.length; x += 1) {
        z = q[x].drag;
        if (CLX.M(z)) {
          z(g);
        }
      }
      return false;
    },
    d = function () {
      var w, x;
      if (!h) {
        c.hide();
      }
      for (w = 0; w < q.length; w += 1) {
        x = q[w].drop;
        if (CLX.M(x)) {
          x(g);
        }
      }
    },
    f;
  f = function (x) {
    var w, y;
    j = x.pageX;
    i = x.pageY;
    CLX.$(document).unbind("mousemove", r);
    CLX.$(document).unbind("mouseup", f);
    for (w = 0; w < q.length; w += 1) {
      y = q[w].prepareForDrop;
      if (CLX.M(y)) {
        y(g);
      }
    }
    if (!h && (l || l === 0) && (k || k === 0)) {
      c.animate({ left: l + "px", top: k + "px" }, "fast", "swing", d);
    } else {
      d();
    }
    return false;
  };
  g = {
    getGhost: function () {
      return c;
    },
    addHandler: function (w) {
      q[q.length] = w;
    },
    getToken: function () {
      return e;
    },
    prepareForDrag: function (z, w, F) {
      var B, D, x, E, y, A, C;
      e = F;
      h = c === w;
      v = j = z.pageX;
      u = i = z.pageY;
      l = undefined;
      k = undefined;
      B = {};
      if (m) {
        b = m.offset().left;
        a = m.offset().top;
      }
      if (w) {
        D = w.offset();
        p = D.left - b;
        o = D.top - a;
        x = w.outerWidth(true);
        E = w.outerHeight(true);
        B.width = x - (c.outerWidth(true) - c.width());
        B.height = E - (c.outerHeight(true) - c.height());
      } else {
        x = c.outerWidth(true);
        E = c.outerHeight(true);
        p = j - x / 2;
        o = i - E / 2;
      }
      B.left = p;
      B.top = o;
      B.opacity = n;
      C = m || CLX.$(document);
      t = C.width() - x;
      s = C.height() - E;
      if (t < p) {
        t = p;
      }
      if (s < o) {
        s = o;
      }
      CLX.$(document).mousemove(r);
      CLX.$(document).mouseup(f);
      for (y = 0; y < q.length; y += 1) {
        A = q[y].prepareForDrag;
        if (CLX.M(A)) {
          A(g);
        }
      }
      if (!h) {
        c.css(B);
      }
      return false;
    },
    getMouseX: function () {
      return j - b;
    },
    getMouseY: function () {
      return i - a;
    },
    isMouseOver: function (z, B, A, w) {
      return j >= z && j < z + A && i >= B && i < B + w;
    },
    setLandingPosition: function (w, z) {
      if ((w || w === 0) && (z || z === 0)) {
        l = w;
        k = z;
      } else {
        l = p;
        k = o;
      }
    },
  };
  return g;
};
CLX.Ft = function (d, a) {
  var e,
    i = CLX.Ew(d),
    b = CLX.H,
    c = b.HIDDEN_SELECTOR,
    h = 20,
    f,
    g = function () {
      i.css({
        bottom: null,
        height: Math.max(CLX.$(document).height(), CLX.$(window).height()) + h,
        width: Math.max(CLX.$(document).width(), CLX.$(window).width()) + h,
      });
    };
  e = {
    init: function (j) {
      f = j || 0;
      CLX.$(window).resize(g).scroll(g);
      CLX.Fg(d);
    },
    show: function (k, j) {
      if (i.is(c)) {
        g();
        i.css("opacity", f).show();
      }
      return false;
    },
    hide: function () {
      if (!i.is(c)) {
        i.hide();
      }
      return false;
    },
  };
  return e;
};
CLX.Fu = function (b) {
  var a,
    d,
    e = 1000 * 60,
    c = 24 * 60 * e;
  if (!b) {
    return null;
  }
  if (CLX.C(b) && CLX.M(b.getTime)) {
    b = b.getTime();
  }
  d = b % c;
  if (d >= c / 2) {
    b += c - d;
  } else {
    b -= d;
  }
  a = new Date(b);
  b += a.getTimezoneOffset() * e;
  return new Date(b);
};
CLX.Fv = function (t, i, o) {
  var e,
    s = CLX.H,
    c = CLX.Cu,
    h = "doingFade",
    f = /^mbox|\smbox/,
    p = function (u) {
      return f.test(CLX.$(this).classNames());
    },
    r = CLX.$("#" + t),
    n = o ? o(t) : CLX.Ff(t),
    b = i ? CLX.$("#" + i) : null,
    d = false,
    j = false,
    k,
    q,
    a = function () {
      r.find(s.ALL_SELECTOR).filter(p).removeClass(h);
      j = false;
    },
    m = function (u) {
      return !u.parent().length || u.is(s.BODY_SELECTOR);
    },
    l = function (v) {
      var u;
      if (d) {
        u = CLX.$(v.target);
        if (
          !m(u) &&
          u.closest(r).length === 0 &&
          (!b || u.closest(b).length === 0)
        ) {
          e.hide();
        }
      }
      return true;
    },
    g = function (y, w, u) {
      var x,
        v = r.outerWidth(true);
      if (w) {
        x = w - Math.floor(v / 2);
      } else {
        x = Math.floor((y.outerWidth(true) - v) / 2);
      }
      n.setRelativePosition(x, u ? -r.outerHeight(true) : y.outerHeight(true));
      n.positionPopup(y);
    };
  e = {
    init: function () {
      CLX.$(document).mousedown(l).focusin(l);
    },
    setHoverCallbacks: function (v, u) {
      r.hover(v, u);
    },
    setPreShowCallback: function (u) {
      k = u;
    },
    setPostHideCallback: function (u) {
      q = u;
    },
    isVisible: function () {
      return d;
    },
    isFullyVisible: function () {
      return d && !j;
    },
    show: function (u) {
      if (!d) {
        d = true;
        if (k) {
          k(r);
        }
        if (u) {
          j = true;
          r.find(s.ALL_SELECTOR).filter(p).addClass(h);
          r.fadeIn(u, a);
        } else {
          r.stop(true, true).show();
        }
        CLX.$(s.SELECT_SELECTOR + s.FOCUS_SELECTOR).blur();
      }
    },
    hide: function () {
      if (d) {
        r.find(s.FOCUS_SELECTOR).blur();
        r.stop(true, true).hide();
        d = false;
        if (q) {
          q(r);
        }
      }
    },
    toggle: function () {
      if (d) {
        e.hide();
      } else {
        e.show();
      }
      return d;
    },
    setControlElement: function (u) {
      b = u;
    },
    positionAbove: function (v, u) {
      g(v, u, true);
    },
    positionBelow: function (v, u) {
      g(v, u, false);
    },
    getSubElements: function (u) {
      return r.find(c.selector(u));
    },
    addHighlighting: function (u) {
      CLX.Fc(r, u);
    },
    removeHighlighting: function (u) {
      CLX.Fi(r, u);
    },
    getOverlay: function () {
      return r;
    },
    setRelativePosition: function (v, u) {
      n.setRelativePosition(v, u);
    },
  };
  return e;
};
CLX.Fw = function (a) {
  return a.is(CLX.H.FOCUS_SELECTOR);
};
CLX.Fx = function (a) {
  return CLX.Cn(a) && isFinite(a);
};
CLX.Fy = function (g, f, e) {
  var b = g.pageX,
    a = g.pageY,
    d = f.offset(),
    c = e || 0;
  return (
    b >= d.left - c &&
    b < d.left + f.width() + c &&
    a >= d.top - c &&
    a < d.top + f.height() + c
  );
};
CLX.Fz = function (b, f) {
  var a = CLX.H,
    d = a.ALL_TABBABLES,
    e,
    c;
  if (f) {
    e = b.filter(d);
    if (e.length) {
      CLX.Fj(e);
    } else {
      c = b.find(d);
      if (c.length) {
        CLX.Fj(c);
      } else {
        CLX.Fj(b);
      }
    }
  } else {
    CLX.Fj(b);
  }
};
CLX.Ga = function (d) {
  var b = /[^a-zA-Z0-9_$]/g,
    c = /^\d/,
    e = "_",
    a;
  if (d) {
    a = d.replace(b, "");
  }
  if (!a) {
    a = e;
  } else {
    if (c.test(a)) {
      a = e + a;
    }
  }
  return a;
};
CLX.Gb = {
  AUTO: "auto",
  ABSOLUTE: "absolute",
  PX: "px",
  PERCENT: "%",
  COLOR: "color",
  BACKGROUND_COLOR: "background-color",
  OPACITY: "opacity",
  POSITION: "position",
  TOP: "top",
  LEFT: "left",
  BORDER_TOP_LEFT_RADIUS: "border-top-left-radius",
  PADDING_RIGHT: "padding-right",
  PADDING_LEFT: "padding-left",
  MARGIN_TOP: "margin-top",
  MARGIN_LEFT: "margin-left",
  CURSOR: "cursor",
  MAX_HEIGHT: "max-height",
  MAX_WIDTH: "max-width",
  MIN_WIDTH: "min-width",
  setTheme: function (c) {
    var b = "href",
      a = /^(.*\/[^\/.]*)(\.[^\/.]*)?(\.css)$/i;
    CLX.$("link").each(function (f, g) {
      var h = CLX.$(g),
        d = h.attr(b),
        e = a.exec(d);
      if (e) {
        h.attr(b, e[1] + "." + c + e[3]);
      }
    });
  },
  numericValue: function (k, a, o) {
    var e = /calc\(([\s\d.+\-*\/()px%]+)\)$/,
      m = /\s*(\d[\d.]*)%/g,
      q = /\s*(\d[\d.]*)(px)?/g,
      i = /\s*([+\-*\/])/g,
      c = /\s*\(/g,
      r = /\s*\)/g,
      s = k.css(a) || o,
      l = s ? e.exec(s) : null,
      b,
      j,
      f,
      g,
      p,
      d = 0,
      h = function () {
        var t,
          u = CLX.Gb;
        switch (a) {
          case u.PADDING_RIGHT:
          case u.PADDING_LEFT:
          case u.MAX_WIDTH:
          case u.MIN_WIDTH:
            t = k.parent().width();
            break;
          case u.MAX_HEIGHT:
            t = k.parent().height();
            break;
          default:
            t = 0;
            break;
        }
        return t;
      },
      n = function (u) {
        var t = 0,
          v = true;
        while (v && d < s.length) {
          if (!j || j.index < d) {
            j = m.exec(s);
          }
          if (!b || b.index < d) {
            b = q.exec(s);
          }
          if (!f || f.index < d) {
            f = i.exec(s);
          }
          if (!g || g.index < d) {
            g = c.exec(s);
          }
          if (!p || p.index < d) {
            p = r.exec(s);
          }
          if (j && j.index === d) {
            d = m.lastIndex;
            t = (Number(j[1]) * h()) / 100;
          } else {
            if (b && b.index === d) {
              d = q.lastIndex;
              t = Number(b[1]);
            } else {
              if (f && f.index === d) {
                d = i.lastIndex;
                switch (f[1]) {
                  case "-":
                    t -= n(true);
                    break;
                  case "*":
                    t *= n(true);
                    break;
                  case "/":
                    t /= n(true);
                    break;
                  default:
                    t += n(true);
                    break;
                }
              } else {
                if (g && g.index === d) {
                  d = c.lastIndex;
                  t = n();
                } else {
                  if (p && p.index === d) {
                    d = r.lastIndex;
                    v = false;
                  } else {
                    d = s.length;
                  }
                }
              }
            }
          }
          if (u) {
            v = false;
          }
        }
        return t;
      };
    if (l) {
      s = l[1];
    }
    return s ? n() : 0;
  },
  clipRect: function (f, e, b, a, d) {
    var c = function (g) {
      return CLX.Fx(g) ? String(g) + CLX.Gb.PX : CLX.Gb.AUTO;
    };
    f.css("clip", "rect(" + c(e) + " " + c(b) + " " + c(a) + " " + c(d) + ")");
  },
};
CLX.Gc = (function () {
  var b,
    e = "Hover",
    d = "Active",
    c = function (g, h) {
      return h.hasClass(CLX.Ek(g));
    },
    a = function (g, h, i) {
      if (i) {
        CLX.Fi(h, g);
      } else {
        CLX.Ey(h, g);
      }
    },
    f = function (g, h, i) {
      if (i) {
        CLX.Fc(h, g);
      } else {
        CLX.Eu(h, g);
      }
    };
  b = {
    addActive: function (g, h) {
      f(d, g, h);
    },
    removeActive: function (g, h) {
      a(d, g, h);
    },
    hasActive: function (g) {
      return c(d, g);
    },
    filterActive: function () {
      return c(d, CLX.$(this));
    },
    addHover: function (g, h) {
      f(e, g, h);
    },
    removeHover: function (g, h) {
      a(e, g, h);
    },
    hasHover: function (g) {
      return c(e, g);
    },
    filterHover: function () {
      return c(e, CLX.$(this));
    },
  };
  return b;
})();
CLX.Gd = {
  EBAN3_MODULE: "EBAN3_MODULE",
  DEFAULT: "DEFAULT",
  PORTAL: "PORTAL",
  SHOWCASE: "SHOWCASE",
  WEALTH_OVERVIEW: "WEALTH_OVERVIEW",
  CURRENCY_ACCOUNT: "CURRENCY_ACCOUNT",
  INVESTMENT_PORTFOLIO: "INVESTMENT_PORTFOLIO",
  LOAN_AND_MORTGAGE: "LOAN_AND_MORTGAGE",
  MONEY_MARKET: "MONEY_MARKET",
  FINANCES_OVERVIEW: "FINANCES",
  ADVICE_MANAGER: "ADVICE_MANAGER",
  ADVICE_MANAGER_ADVISOR: "ADVICE_MANAGER_ADVISOR",
  BUDGET_ENTRIES: "BUDGET_ENTRIES",
  CREDIT_CARDS: "CREDIT_CARDS",
  DEBIT_CARDS: "DEBIT_CARDS",
  CMS_ACCOUNT: "CMS_ACCOUNT",
  CMS_PAYMENT: "CMS_PAYMENT",
  CMS_CUSTOMER_REQUEST: "CMS_CUSTOMER_REQUEST",
  CUSTOMER_ADMIN_CONTRACT: "CUSTOMER_ADMIN_CONTRACT",
  CUSTOMER_ADMIN_ACCOUNT: "CUSTOMER_ADMIN_ACCOUNT",
  CUSTOMER_ADMIN_PROFILE: "CUSTOMER_ADMIN_PROFILE",
  CUSTOMER_ADMIN_AUDIT: "CUSTOMER_ADMIN_AUDIT",
  CUSTOMER_CARE_NOTICE: "CUSTOMER_CARE_NOTICE",
  CUSTOMER_CARE_MESSAGES: "CUSTOMER_CARE_MESSAGES",
  CUSTOMER_CARE_VOTING_MESSAGES: "CUSTOMER_CARE_VOTING_MESSAGES",
  CUSTOMER_CARE_DOCUMENTS: "CUSTOMER_CARE_DOCUMENTS",
  CUSTOMER_CARE_DEACTIVATION: "CUSTOMER_CARE_DEACTIVATION",
  CUSTOMER_CARE_SETTINGS: "CUSTOMER_CARE_SETTINGS",
  CUSTOMER_CARE_LOGOUT: "CUSTOMER_CARE_LOGOUT",
  CUSTOMER_CARE_CHANGE_PASSWORD: "CUSTOMER_CARE_CHANGE_PASSWORD",
  CUSTOMER_CARE_ABOUT: "CUSTOMER_CARE_ABOUT",
  COMMON_PAYMENT: "COMMON_PAYMENT",
  SINGLE_PAYMENT: "SINGLE_PAYMENT",
  PAYMENT_TEMPLATE: "PAYMENT_TEMPLATE",
  SIMPLE_TEMPLATE: "SIMPLE_TEMPLATE",
  DIRECT_DEBIT: "DIRECT_DEBIT",
  TRUSTED_BENEFICIARIES: "TRUSTED_BENEFICIARIES",
  DEBIT_MANDATE: "DEBIT_MANDATE",
  STANDING_ORDER: "STANDING_ORDER",
  BULK_PAYMENT: "BULK_PAYMENT",
  PAYMENT_LIST: "PAYMENT_LIST",
  PAYMENT_STATUS: "PAYMENT_STATUS",
  ACCOUNT_TRANSFER: "ACCOUNT_TRANSFER",
  ENTER_TRANSFER: "ENTER_TRANSFER",
  ENTER_BALANCE_MANAGER: "ENTER_BALANCE_MANAGER",
  PAYNET: "PAYNET",
  PAYMENT_SCANNER: "PAYMENT_SCANNER",
  QR_PAYMENT_RECEIVE: "QR_PAYMENT_RECEIVE",
  QR_PAYMENT_SEND: "QR_PAYMENT_SEND",
  MESSAGE: "MESSAGE",
  PROFILE: "PROFILE",
  ALERTING: "ALERTING",
  STATEMENTS: "STATEMENTS",
  ACCOUNT_STATEMENTS: "ACCOUNT_STATEMENTS",
  E_STATEMENTS: "E_STATEMENTS",
  TAX_REPORTS: "TAX_REPORTS",
  FIVE_TRADE: "FIVE_TRADE",
  REPORTING: "REPORTING",
  CUSTOMER_REQUEST: "CUSTOMER_REQUEST",
  PERSONAL_SETTINGS: "PERSONAL_SETTINGS",
  CONTACT_SCREEN: "CONTACT_SCREEN",
  FILE_EXCHANGE: "FILE_EXCHANGE",
  SECURE_SAFE: "SECURE_SAFE",
  FAVOURITES_OVERVIEW: "FAVOURITES_OVERVIEW",
  BROKERAGE_ORDERS: "BROKERAGE_ORDERS",
  BROKERAGE_BUY: "BROKERAGE_BUY",
  BROKERAGE_SELL: "BROKERAGE_SELL",
  BROKERAGE_ISSUES: "BROKERAGE_ISSUES",
  FOREX_ORDERS: "FOREX_ORDERS",
  PORTFOLIO_GROUPS: "PORTFOLIO_GROUPS",
  COLLECTIVE_BUY: "COLLECTIVE_BUY",
  COLLECTIVE_SELL: "COLLECTIVE_SELL",
  NOTIFICATIONS_OVERVIEW: "NOTIFICATIONS_OVERVIEW",
  FIXED_TERM_DEPOSIT: "FIXED_TERM_DEPOSIT",
  PFM: "PFM",
};
CLX.Ge = function (a) {
  var b = CLX.I.get(CLX.Fo);
  return CLX.Cr(b, a);
};
CLX.Gf = {
  DEFAULT_SORT_COL: "tagDefaultSortCol",
  DEFAULT_OPTION: "tagDefaultOption",
  NON_DEFAULT_SEL: "tagNonDefaultSelect",
  DEFAULT_SEL: "tagDefaultSelect",
  PREDEFINED_OPTION: "tagPredefinedOption",
  NOT_DELETABLE_ITEM: "tagNotDeleteableItem",
  DELETEABLE_ITEMS_SEPARATOR: "tagDeleteableItemsSeparator",
  DEFAULT_SORT_ORDER_DESC: "tagDefaultSortOrderDesc",
  HIDE_IF_EMPTY: "tagHideIfEmpty",
  TEMPLATE_CONTENT: "tagTemplateContent",
  CHILD_ROW_CLASS: "tagChildRow",
  NAV_RIGHT_CLASS: "tagNavRight",
  DRAG_HANDLE_CLASS: "tagDragHandle",
  IMAGE: "tagImage",
  TITLE: "tagTitle",
  PLAY: "tagPlay",
  VIDEO: "tagVideo",
  BLOG: "tagBlog",
  LINKS: "tagLinks",
  TAGS: "tagTags",
  LABEL: "tagLabel",
  NAME: "tagName",
  DATE: "tagDate",
  YEAR: "tagYear",
  CONTENT: "tagContent",
  POSITION_CCY: "tagPositionCcy",
  TRX_DESCRIPTION: "tagTrxDescription",
  TRX_AMOUNT: "tagTrxAmount",
  TRX_SINGLE_AMOUNT: "tagTrxSingleAmount",
  TRX_DETAIL_COUNT: "tagTrxDetailCount",
  SELI_RATE_UNIT: "tagRateUnit",
  AMOUNT_UNIT: "tagAmountUnit",
  AMOUNT_TYPE: "tagAmountType",
  NO_GROUPING: "tagNoGrouping",
  NO_ACTION: "tagNoAction",
  NO_DRILLDOWN: "tagNoDrilldown",
  MESSAGE: "tagMessage",
  INFO: "tagInfo",
  NOTE: "tagNote",
  MESSAGE_SUBJECT: "tagMessageSubject",
  ATTACHMENT: "tagAttachment",
  DOCUMENT_SUBJECT: "tagDocumentSubject",
  DOCUMENT_ATTACHMENT: "tagDocumentAttachment",
  HEADING: "tagHeading",
  HEADING_SECOND_ROW: "tagHeadingSecondRow",
  DESCRIPTION: "tagDescription",
  SECU_NAME: "tagSecuName",
  MY_ALERTS: "tagMyAlerts",
  STRETCHABLE: "tagStretchable",
  FREE_WRAP: "tagFreeWrap",
  SEPARATOR: "tagSeparator",
  SURROUND: "tagSurround",
  CLICKABLE: "tagClickable",
  INPUT_AND_BUTTON_FIELD: "tagInputButtonField",
  OPTION_TEXT: "tagOptionText",
  CUSTOMER_NAME: "tagCustomerName",
  ACCOUNT_NUMBER: "tagAccountNumber",
  ACCOUNT_DESCRIPTION: "tagAccountDesc",
  BENEFICIARY_NAME: "tagBeneficiaryName",
  BALANCE: "tagBalance",
  ALIAS_OR_NUMBER: "tagAliasOrNumber",
  HIDE_GOUPING_ICON: "tagHideGroupingIcon",
  DONT_LOAD_USER_PRESETS: "tagDontLoadUserPresets",
  PORTFOLIO_VALUE_DATE: "tagPortProdValueDate",
  PORTFOLIO_VALID_UNTIL: "tagPortProdValidUntil",
  REF_CURR: "tagRefCurrency",
};
CLX.Gg = function (e, d, c) {
  var a,
    b = CLX.V(e, d, c);
  if (b !== -1) {
    a = e[b];
    e.splice(b, 1);
    return a;
  }
};
CLX.Gh = function (c, a, b) {
  b = CLX.U(b);
  CLX.Al(b, function (f, e) {
    var g = CLX.L(c, e);
    if (g !== null && g !== undefined) {
      CLX.R(a, e, g);
    }
  });
  var d = function (e) {
    if ((!e.data || e.data.component !== a) && (!b || CLX.Ak(b, e.name))) {
      CLX.R(a, e.name, e.value);
    }
  };
  CLX.Bj(c, d);
  return d;
};
CLX.Gi = function (j, b, i, f) {
  var h,
    e,
    a = "inputPrompt",
    k = function (l) {
      if (b !== null) {
        if (l && l !== b) {
          j.removeClass(i || a);
        } else {
          j.addClass(i || a);
        }
      }
    },
    d = function () {
      if (j.isEditable() && (CLX.Ed(j.val()) === b || CLX.Ed(j.val()) === "")) {
        j.val("");
        j.removeClass(i || a);
        j.select();
      }
      return true;
    },
    c = function () {
      var l = CLX.Ed(j.val());
      if (!l && b) {
        j.val(b);
      }
      k(l);
      return true;
    },
    g = function () {
      if (!f) {
        j.focus(d);
        j.focusout(c);
      }
      e = true;
    };
  h = {
    init: function (l) {
      if (!b) {
        b = j.val();
        j.addClass(i || a);
      }
      if (b) {
        g();
      } else {
        j.removeClass(i || a);
        b = null;
      }
      if (l) {
        j.change(function (m) {
          return l(h.getText());
        });
      }
    },
    getEmptyText: function () {
      return b;
    },
    setEmptyText: function (l) {
      if (l && !e) {
        g();
      }
      b = l;
    },
    setText: function (m) {
      var l = m || m === 0;
      if (CLX.Fw(j)) {
        j.val(l ? m : "");
      } else {
        j.val(l ? m : b);
        k(l ? String(m) : "");
      }
    },
    getText: function () {
      var l = CLX.Ed(j.val());
      return f || l !== b ? l : "";
    },
    reset: function () {
      h.setText("");
    },
  };
  return h;
};
CLX.Gj = function (m, n) {
  var i,
    z = CLX.H,
    o = "headerBar",
    h = "closeIcon",
    t = z.HIDDEN_SELECTOR,
    x = z.TABBABLES_SELECTOR,
    l = z.TABINDEX_SELECTOR,
    q = z.VISIBLE_SELECTOR,
    y = 0.5,
    f,
    w,
    b,
    r,
    d = [],
    u = [],
    j,
    g,
    v,
    p = CLX.Ff(m),
    k = function () {
      return i.getPopup();
    },
    A = function (D, B) {
      var C = !k() || !k().length;
      D.each(function (E) {
        var G,
          F,
          H = d.length;
        G = CLX.$(this);
        if (C || !CLX.$.contains(k()[0], this)) {
          F = G.tabindex();
          if (F > 0 || F === 0 || B) {
            d[H] = G;
            u[H] = F || 0;
            H += 1;
            G.tabindex(-1);
          }
        }
        return true;
      });
    },
    s = function () {
      if (d.length === 0) {
        A(CLX.$(x).filter(q), true);
        A(CLX.$(l).filter(q));
      }
    },
    c = function () {
      var B;
      if (d.length) {
        for (B = 0; B < d.length; B += 1) {
          d[B].tabindex(u[B]);
        }
        d.length = 0;
        u.length = 0;
      }
    },
    a = function (F) {
      var G = CLX.Ah.ENTER === F.keyCode,
        B = CLX.Ah.ESC === F.keyCode,
        E,
        D,
        C;
      if (G) {
        D = "button[name~=search]";
      } else {
        if (B) {
          D = "button[name~=cancel]";
          C = ".cancelButton";
        } else {
          return;
        }
      }
      E = k().find(D);
      if (!E.html() && C) {
        E = k().find(C);
      }
      if (!E.html()) {
        window.console.warn("popupManager of " + m + ": button not found");
        return;
      }
      E.focus();
      E.click();
    },
    e = function (B) {
      if (j.length && CLX.Fy(B, j)) {
        return i.closePopup();
      }
      v.prepareForDrag(B, k());
      return true;
    };
  i = {
    init: function (C, B) {
      f = C || o;
      w = B || h;
    },
    getPopup: function () {
      if (!b) {
        b = CLX.Ew(m);
        j = b.find("." + w);
        if (n) {
          r = CLX.Ft(n, b);
          r.init(y);
        }
        j.press(i.closePopup);
        v = CLX.Fs(b);
        b.keypress(a);
        b.find("." + f)
          .on("mousedown", e)
          .on("selectstart", CLX.Fm);
      }
      return b;
    },
    getDragNdrop: function () {
      return v;
    },
    setCloseCallback: function (B) {
      g = B;
    },
    setFocusOnCloseIcon: function () {
      CLX.Fz(j);
    },
    showPopup: function (C, B) {
      if (k().is(t)) {
        if (r) {
          r.show();
          s();
        }
        p.positionPopup(C, B);
        k().show();
      }
      return false;
    },
    hidePopup: function () {
      if (!k().is(t)) {
        k().hide();
        if (r) {
          r.hide();
        }
        c();
      }
      return false;
    },
    setRelativePosition: function (C, B) {
      p.setRelativePosition(C, B);
    },
    closePopup: function () {
      if (g) {
        g();
      } else {
        i.hidePopup();
      }
    },
  };
  return i;
};
CLX.Gk = function (h, d) {
  var e = "readonlyInput",
    m = "disabledIconButton",
    b = CLX.$("#_isMobileDevice").text() === "true",
    c = CLX.H,
    p = c.INPUT_SELECTOR,
    f = c.BUTTON_SELECTOR,
    n = c.INPUT_TOGGLE_SELECTOR,
    i = c.SELECT_SELECTOR,
    l = c.INPUT_FIELD_SELECTOR,
    g = CLX.$("#" + h),
    o = CLX.$("#" + h + c.CUSTOM_SELECTBOX_SUFFIX_SELECTOR),
    k,
    j,
    a;
  a = g.find(p);
  if (!a.length) {
    a = g.filter(p);
  }
  if (a.length) {
    if (d) {
      a.removeClass(e);
      a.filter(n).disabled(false).ariaDisabled(false);
      a.filter(i).disabled(false).ariaDisabled(false);
      a.filter(l).readOnly(false).ariaReadOnly(false);
      a.prop("disabled", false);
    } else {
      a.filter(n).disabled(true).ariaDisabled(true);
      a.filter(i).disabled(true).ariaDisabled(true).addClass(e);
      a.filter(l).readOnly(true).ariaReadOnly(true).addClass(e);
      a.prop("disabled", true);
    }
  }
  k = o.find(f);
  j = o.find(l);
  if (!k.length) {
    k = o.filter(f);
  }
  if (k.length) {
    if (d) {
      k.filter(f).disabled(false);
      k.filter(f).css("pointerEvents", "all");
      j.disabled(false);
      k.filter(f)
        .find("." + m)
        .remove();
    } else {
      k.filter(f).disabled(true);
      k.filter(f).css("pointerEvents", "none");
      j.disabled(true);
    }
  }
  if (b) {
    j.readOnly(true);
  }
};
CLX.Gl = function (a, b) {
  return CLX.$("meta[name=" + String(a) + "]").attr("content", String(b));
};
CLX.Gm = function (b) {
  var a = b || b === 0 ? Number(b) : null;
  return (a || a === 0) && isFinite(a) ? a : null;
};
CLX.Gn = function (a) {
  return CLX.Ga(String(a));
};
CLX.Go = {
  copy: "copy",
  move: "move",
  link: "link",
  execute: "execute",
  popup: "popup",
  none: "none",
  ascending: "ascending",
  descending: "descending",
  other: "other",
  grammar: "grammar",
  spelling: "spelling",
};
CLX.Gp = function ActivityIndicatorFactory() {
  var d,
    e = [],
    c,
    b = function () {
      var f;
      if (c) {
        f = "ERROR: " + c;
      } else {
        if (e.length) {
          f = "ACTIVE";
        } else {
          f = "IDLE";
        }
      }
      return f;
    },
    a = function () {
      CLX.Gl("asyncTaskIndicator", b());
    };
  d = {
    addTask: function (g) {
      var f = g && String(g);
      CLX.Fq(e, f);
      a();
    },
    removeTask: function (g) {
      var f = g && String(g);
      CLX.Gg(e, f);
      a();
    },
    setErrorMessage: function (f) {
      c = f;
      a();
    },
  };
  return d;
};
CLX.Gq = {
  TABLE: "Table",
  PAGING: "Paging",
  SORT: "Sort",
  COLS: "Cols",
  EXPAND: "Expand",
  COLLAPSE: "Collapse",
  EXPORT: "Export",
  EMPTY: "Empty",
  SUMMARY: "Summary",
  SUMMARY_BAR: "SummaryBar",
  HEADER_BAR: "HeaderBar",
  FILTER_BAR: "FilterBar",
  PANEL: "Panel",
  BUTTON: "Button",
  BUTTONS: "Buttons",
  VIEW_SELECT: "ViewSelect",
  MSG: "Msg",
  MISSING_MESSAGE: "Missing",
  NOTE_MESSAGE: "Note",
  MESSAGE_ID_PREFIX: "message",
  MESSAGE_TITLE_ID_PREFIX: "title",
  INVALID: "Invalid",
  CALENDAR: "Cal",
  DETAIL: "Detail",
  HOLDER: "Holder",
  DRILLDOWN: "Drilldown",
  COMBO: "Combo",
  SELECT: "Select",
  TITLE: "Title",
  TEXT: "Text",
  INPUT: "Input",
  VALUE: "Value",
  FILTER: "Filter",
  CONTEXT: "Context",
  FUNCTION: "Function",
  INFO: "Info",
  HELP: "Help",
  POPUP: "Popup",
  SAVE: "Save",
  CANCEL: "Cancel",
  REGION: "Region",
  HEADING: "Heading",
  TEMPLATE: "Template",
  PRIMARY: "Primary",
  SECONDARY: "Secondary",
  LABEL: "Label",
  CHART: "Chart",
};
CLX.Gr = { VALID: 0, INVALID: 1, SUGGESTION: 2 };
CLX.Gs = function PopupRenderer() {
  var f = CLX.As(CLX.Bx()),
    e = CLX.F,
    g = CLX.E,
    b = CLX.D,
    a = CLX.S,
    h,
    c = "z-index",
    d = 100,
    j = function () {
      h = CLX.Ae("popupTemplate");
      h.find(b.POPUP).removeAttr(g.ARIA_LABEL);
    },
    i = CLX.Aj(CLX.Bx().getDescriptor());
  i.def(e.COMPONENT, null, g.CONTENT, [], true);
  i.def(e.STRING, null, g.CLOSE, g.DATA_CLOSE, true);
  i.def(e.STRING, null, g.HEADING, g.DATA_HEADING, true);
  i.def(e.BOOLEAN, true, g.HIDDEN);
  i.def(e.BOOLEAN, false, g.KEEP_POSITION_ON_REATTACH, true);
  j();
  f.getDescriptor = function () {
    return i;
  };
  f.getName = function () {
    return CLX.Ag.POPUP;
  };
  f.attach = function (n, q, l) {
    var r, m, p, k, s, o;
    l.indom.push(function () {
      k = CLX.Gj(p, m);
      k.init(CLX.L(q, g.HEADING) || b.POPUP_HEADING, CLX.L(q, g.CLOSE));
      r.data(a.COMPONENT, q);
      r.data(a.POPUP, k);
      CLX.Ab(p, q, f.getDescriptor(), true);
      CLX.Y(p, q, f);
    });
    r = h.clone().children();
    m = r.first();
    p = r.last();
    if (CLX.O(n)) {
      n = CLX.$(n);
    }
    r.each(function () {
      n.append(this);
    });
    o = CLX.L(q, g.CONTENT);
    if (o) {
      s = CLX.L(o, g.HEADING);
      if (s) {
        CLX.X.call(s, b.POPUP_HEADING);
      }
      o.attach(p.find("." + b.POPUP_CONTENT), l);
    }
    return r;
  };
  f.detach = function (l, n, k) {
    if (l) {
      var m = CLX.L(k, g.CONTENT);
      if (m) {
        m.detach();
      }
      l.remove();
    }
    return null;
  };
  CLX.Az(f, g.CONTENT, CLX.Co);
  CLX.Az(f, g.CLOSE, CLX.Co);
  CLX.Az(f, g.HEADING, CLX.Co);
  CLX.Az(f, g.HIDDEN, function (n) {
    var m = n.data.element,
      l = m.data(a.POPUP),
      k;
    if (l) {
      if (n.value) {
        l.hidePopup();
        if (n.old === false) {
          d -= 2;
        }
      } else {
        l.showPopup();
        CLX.$(m[0]).css(c, String(d));
        CLX.$(m[1]).css(c, String(d + 1));
        d += 2;
        if (!CLX.Fh()) {
          k = CLX.$(
            "." + b.POPUP_CONTENT + " > :not(." + b.POPUP_HEADING + ")",
            m[1]
          ).find(CLX.H.ALL_TABBABLES);
          if (!k.length) {
            k = CLX.$(m[1]).find(CLX.H.ALL_TABBABLES);
          }
          CLX.Fz(k, true);
        }
      }
    }
  });
  CLX.Az(f, g.CSS, function (m) {
    var l = m.data.element,
      k = m.data.component;
    if (l && l.length > 1) {
      l = l.last();
    }
    CLX.Bd(l, g.CLASS, k.getCss());
  });
  return f;
};
CLX.Gt = { INFO: "I", WARN: "W", ERROR: "E" };
CLX.Gu = function (g) {
  var a,
    c = CLX.Gd,
    b = {},
    e = {},
    f = function (l, h, m) {
      var k, j;
      if (CLX.B(m)) {
        k = m.length ? m[0] : "";
        for (j = 1; j < m.length; ++j) {
          k += "," + m[j];
        }
        m = k;
      }
      l.children("input[name='" + h + "']").val(m || m === 0 ? m : "");
    },
    d = function (i, j) {
      var h;
      if (j) {
        for (h in j) {
          if (j.hasOwnProperty(h)) {
            f(i, h, j[h]);
          }
        }
      }
    };
  b[c.PAYMENT_TEMPLATE] = "paymentQuickLinkForm";
  b[c.BULK_PAYMENT] = "paymentQuickLinkForm";
  b[c.PAYMENT_LIST] = "paymentQuickLinkForm";
  b[c.PAYMENT_STATUS] = "paymentQuickLinkForm";
  b[c.SINGLE_PAYMENT] = "paymentQuickLinkForm";
  b[CLX.Fp.SWISS_ORANGE] = "paymentQuickLinkForm";
  b[c.BROKERAGE_ORDERS] = "brokerageQuickLinkForm";
  b[c.BROKERAGE_BUY] = "brokerageQuickLinkForm";
  b[c.BROKERAGE_SELL] = "brokerageQuickLinkForm";
  b[c.COLLECTIVE_BUY] = "brokerageQuickLinkForm";
  b[c.COLLECTIVE_SELL] = "brokerageQuickLinkForm";
  b[c.CURRENCY_ACCOUNT] = "accountOverviewLinkForm";
  b[c.FINANCES_OVERVIEW] = "accountOverviewLinkForm";
  b[c.DEBIT_CARDS] = "debitCardOverviewLinkForm";
  b[c.INVESTMENT_PORTFOLIO] = "portfolioOverviewLinkForm";
  b[c.LOAN_AND_MORTGAGE] = "loanAndDepositForm";
  b[c.CREDIT_CARDS] = "creditCardsQuickLinkForm";
  b[c.STANDING_ORDER] = "paymentQuickLinkForm";
  b[c.SIMPLE_TEMPLATE] = "paymentQuickLinkForm";
  b[c.REPORTING] = "reportingQuickLinkForm";
  b[c.PERSONAL_SETTINGS] = "settingsQuickLinkForm";
  b[c.SECURE_SAFE] = "secureSafeQuickLinkForm";
  b[c.ALERTING] = "alertingQuickLinkForm";
  b[c.MESSAGE] = "messageQuickLinkForm";
  b[c.CONTACT_SCREEN] = "contactScreenQuickLinkForm";
  b[c.DEFAULT] = "breadcrumbQuickLinkForm";
  b[c.FIVE_TRADE] = "brokerageQuickLinkForm";
  b[c.ENTER_TRANSFER] = "paymentQuickLinkForm";
  b[c.ENTER_BALANCE_MANAGER] = "paymentQuickLinkForm";
  b[c.BUDGET_ENTRIES] = "budgetEntriesQuickLinkForm";
  b[c.PAYNET] = "paymentQuickLinkForm";
  b[c.STATEMENTS] = "documentQuickLinkForm";
  b[c.PFM] = "pfmQuickLinkForm";
  b[c.CUSTOMER_REQUEST] = "customerRequestQuickLinkForm";
  e[c.PAYMENT_TEMPLATE] = { page: "paymentTemplate" };
  e[c.SIMPLE_TEMPLATE] = { page: "simpleTemplate" };
  e[c.BULK_PAYMENT] = { page: "bulkPayment" };
  e[c.PAYMENT_LIST] = { page: "paymentList" };
  e[c.PAYMENT_STATUS] = { page: "paymentStatus" };
  e[c.SINGLE_PAYMENT] = { page: "singlePayment" };
  e[CLX.Fp.SWISS_ORANGE] = { page: "enterSwiss" };
  e[c.STANDING_ORDER] = { page: "standingOrder" };
  e[c.ALERTING] = { page: "alerting" };
  e[c.BROKERAGE_BUY] = { page: "brokerageBuy" };
  e[c.BROKERAGE_SELL] = { page: "brokerageSell" };
  e[c.BROKERAGE_ORDERS] = { page: "brokerageOrders" };
  e[c.COLLECTIVE_BUY] = { page: "collectiveBuy" };
  e[c.COLLECTIVE_SELL] = { page: "collectiveSell" };
  e[c.DEFAULT] = { page: "ebankingContextEntry" };
  e[c.FIVE_TRADE] = { page: "fiveTrade" };
  e[c.ENTER_TRANSFER] = { page: "enterTransfer" };
  e[c.ENTER_BALANCE_MANAGER] = { page: "enterBalanceManager" };
  e[c.BUDGET_ENTRIES] = { page: "budgetEntries" };
  e[c.PAYNET] = { page: "eBilling" };
  e[c.STATEMENTS] = { page: "statements" };
  e[c.PFM] = { page: "pfm" };
  e[c.CUSTOMER_REQUEST] = { page: "customerRequest" };
  a = {
    quickLink: function (i, j) {
      if (i) {
        var k, h;
        k = b[i];
        h = k ? CLX.$("#" + k) : null;
        if (h) {
          d(h, j);
          d(h, e[i]);
          CLX.$(window).unbind();
          if (g) {
            g.setBusyCursor();
          }
          h.submit();
        }
      }
    },
  };
  return a;
};
CLX.Gv = function (d) {
  var c,
    a = CLX.Fe(),
    b = function (e) {
      return d ? d(e) : CLX.Ga(String(e));
    };
  c = {
    add: function (e) {
      a.put(b(e), e);
    },
    addAll: function (e) {
      var f;
      if (e) {
        for (f = 0; f < e.length; f += 1) {
          c.add(e[f]);
        }
      }
    },
    getMatchingValue: function (e) {
      return a.getValue(b(e));
    },
    toArray: function () {
      return a.values();
    },
    isEmpty: function () {
      return a.isEmpty();
    },
    size: function () {
      return a.size();
    },
    contains: function (e) {
      return a.containsKey(b(e));
    },
    remove: function (e) {
      return a.remove(b(e));
    },
    clear: function () {
      a.clear();
    },
  };
  return c;
};
CLX.Gw = function (a) {
  CLX.Fj(CLX.$("#" + a));
};
CLX.Gx = function () {
  return CLX.I.get(CLX.Gp);
};
CLX.Gy = {
  FAVOURITES_OVERVIEW: "favouritesOverview",
  ASSET_OVERVIEW: "assetOverview",
  WEALTH_CUSTOMERS_OVERVIEW: "wealthCustomersOverview",
  WEALTH_ASSETS_OVERVIEW: "wealthSingleOverview",
  ACCOUNT_OVERVIEW: "accountOverview",
  ACCOUNT_DETAIL: "accountDetail",
  ACCOUNT_TRX_LIST: "accountTrxList",
  ACCOUNT_TRX_DETAIL: "accountTrxDetail",
  CUAC_POSITION_LIST: "custodyAccountPositions",
  CUAC_POSITION_DETAIL: "custodyAccountPositionDetail",
  CUAC_SECURITY_DETAIL: "custodyAccountSecurityDetail",
  PORTFOLIO_OVERVIEW: "portfolioOverview",
  PORTFOLIO_POSITIONS: "portfolioPositions",
  PORTFOLIO_PAYMENTS: "portfolioPayments",
  PORTFOLIO_POSITION_DETAIL: "portfolioPositionDetail",
  PORTFOLIO_TRANSACTION_DETAIL: "portfolioTransactionDetail",
  PORTFOLIO_POSITIONS_CHARTS_PICKER: "portfolioPositionsChartsPicker",
  PORTFOLIO_POSITIONS_CHART: "portfolioPositionsChart",
  LOANS_AND_MORTGAGES_POSITION_DETAIL: "loansAndMortgagesPositionDetail",
  FIXED_TERM_DEPOSITS_POSITION_DETAIL: "FIXED_TERM_DEPOSITS_POSITION_DETAIL",
  MONEY_MARKET_POSITION_DETAIL: "moneyMarketPositionDetail",
  ADVICE_MANAGER: "adviceManager",
  ADVICE_MANAGER_ADVISOR: "adviceManagerAdvisor",
  PAYMENT_MENU: "paymentMenu",
  PAYMENT_ASSISTANT: "paymentAssistant",
  QUICK_PAYMENT: "quickPayment",
  PAYMENT_ENTRY: "paymentEntry",
  PAYMENT_SCANNER: "paymentScanner",
  QR_PAYMENT_RECEIVE: "qrPaymentReceive",
  QR_PAYMENT_SEND: "qrPaymentSend",
  PAYMENT_CANCEL: "paymentCancelView",
  PAYMENT_OVERVIEW: "paymentOverviewView",
  PAYMENT_DETAIL: "paymentDetailView",
  PAYMENT_STANDING_ORDERS: "paymentStandingOrders",
  PAYMENT_STANDING_ORDER_DETAIL: "standingOrderDetail",
  PAYMENT_DEBIT_MANDATES: "paymentDebitMandates",
  PAYMENT_DEBIT_MANDATE_DETAIL: "paymentDebitMandateDetail",
  PAYMENT_TEMPLATE_GROUP: "paymentTemplateGroup",
  PAYMENT_TEMPLATE_OVERVIEW: "paymentTemplateOverview",
  PAYMENT_TEMPLATE_DETAIL: "paymentTemplateDetail",
  TRANSFER_OVERVIEW: "transferOverviewView",
  TRANSFER_DETAIL: "transferDetailView",
  PAYMENT_E_BILLS_LIST: "eBillsList",
  PAYMENT_E_BILL_DETAIL: "eBillDetail",
  ACCOUNT_TRANSFER: "accountTransfer",
  TRUSTED_BENEFICIARIES_OVERVIEW: "trustedBeneficiariesOverviewView",
  TRUSTED_BENEFICIARIES_MULTISELECT: "trustedBeneficiariesMultiSelect",
  TRUSTED_BENEFICIARIES_ENTRY: "trustedBeneficiariesEntry",
  INTERNATIONAL_BANK_SEARCH: "internationalBankSearchView",
  CUSTOMER_CARE_ABOUT: "customerCareAbout",
  CUSTOMER_CARE_NOTICE_OVERVIEW: "noticeOverview",
  CUSTOMER_CARE_NOTICE_DETAIL: "customerCareNoticeDetail",
  CUSTOMER_CARE_DEACTIVATION: "customerCareDeactivation",
  CUSTOMER_CARE_DOCUMENTS: "customerCareDocuments",
  CUSTOMER_CARE_ACCOUNT_STATEMENTS: "customerCaseAccountStatements",
  CUSTOMER_CARE_DOCUMENT_DETAIL: "customerCareDocumentDetail",
  CUSTOMER_CARE_MESSAGES: "customerCareMessages",
  CUSTOMER_CARE_VOTING_MESSAGES: "cutomerCareVotingMessages",
  CUSTOMER_CARE_NEWS: "customerCareNews",
  CUSTOMER_CARE_NEWS_DETAIL: "customerCareNewsDetail",
  CUSTOMER_CARE_MESSAGE_DETAIL: "customerCareMessageDetail",
  CUSTOMER_CARE_MESSAGE_EDIT: "customerCareMessageEdit",
  CUSTOMER_CARE_NOTICES: "customerCareNotices",
  CUSTOMER_CARE_OVERVIEW: "customerCareOverview",
  CUSTOMER_CARE_SETTINGS: "customerCareSettings",
  CUSTOMER_CARE_LOGOUT: "customerCareLogout",
  CUSTOMER_CARE_CHANGE_PASSWORD: "customerCareChangePassword",
  CUSTOMER_CARE_CHANGE_PASSWORD_CONFIRMATION:
    "customerCareChangePasswordConfirmation",
  CUSTOMER_CARE_PORTFOLIO_STATEMENT_ON_DEMAND:
    "customerCarePortfolioStatementOnDemand",
  CUSTOMER_CARE_PORTFOLIO_STATEMENT_ON_DEMAND_CONFIRMATION:
    "customerCarePortfolioStatementOnDemandConfirmation",
  BROKERAGE_MENU: "brokerageMenu",
  SECURITY_LISTING_SEARCH: "securityListingSearchView",
  BROKERAGE_ORDER_ENTRY: "brokerageOrderEntry",
  BROKERAGE_ORDER_CONFIRMATION: "brokerageOrderConfirmation",
  BROKERAGE_ORDER_VALIDATION_INFO: "brokerageOrderValidationInfo",
  BROKERAGE_POSITION_LIST: "brokerageCuacPositions",
  BROKERAGE_ORDERS_OVERVIEW: "brokerageOrdersOverview",
  BROKERAGE_ORDER_DETAIL: "brokerageOrderDetailView",
  FOREX_ORDERS_OVERVIEW: "forexOrdersOverview",
  NOTIFICATIONS_OVERVIEW: "notificationsOverview",
};
CLX.Gz = "\n";
CLX.Ha = function (d) {
  var e,
    c,
    b,
    a,
    f = CLX.E;
  e = CLX.I.get(CLX.Gs);
  c = CLX.Cr(e, d);
  b = c.attach;
  a = c.reattach;
  c.attach = function (h, g) {
    return b(CLX.$(CLX.H.BODY_SELECTOR), g);
  };
  c.reattach = function () {
    var g, j, i, h;
    if (CLX.Do(c, f.KEEP_POSITION_ON_REATTACH)) {
      j = c.getElement();
      if (j) {
        i = CLX.$(j[j.length - 1]);
        h = { top: i.css("top"), left: i.css("left") };
      }
    }
    g = a();
    if (h) {
      j = c.getElement();
      i = CLX.$(j[j.length - 1]);
      i.css(h);
    }
    return g;
  };
  c.show = function () {
    CLX.R(c, f.HIDDEN, false);
    return c;
  };
  c.hide = function () {
    CLX.R(c, f.HIDDEN, true);
    return c;
  };
  return c;
};
CLX.Hb = { GROUP: "Grp", PRIMARY: "Pri", SECONDARY: "Sec", DEFAULT: "Dflt" };
CLX.Hc = { ASC: "Asc", DESC: "Desc" };
CLX.Hd = {
  ACCOUNT_INPUT: "clx-account-input",
  ACCOUNT_OPTION_1: "clx-account-option1",
  ACCOUNT_OPTION_2: "clx-account-option2",
  ACCOUNT_OPTION_3: "clx-account-option3",
  AMOUNT_INPUT_NO_CURRENCY: "clx-amount-input-no-currency",
  AMOUNT_INPUT_SINGLE_CURRENCY: "clx-amount-input-single-currency",
  BUBBLE_CHART: "clx-bubble-chart",
  BUBBLE_CHART_WITH_GRID: "clx-bubble-chart-with-grid",
  COLUMN_CHART: "clx-column-chart",
  CURRENCY_INPUT: "clx-currency-input",
  MARKET_PLACE_INPUT: "clx-market-place-input",
  MESSAGE_OVERLAY: "clx-message-overlay",
  OPTION_INPUT: "clx-option-input",
  PIE_CHART: "clx-pie-chart",
  PORTFOLIO_GROUP_INPUT: "clx-portfolio-group-input",
  POPUP_DIALOG_MESSAGE: "clx-popup-dialog-message",
  POPUP_DIALOG_LARGE: "clx-popup-dialog-large",
  POPUP_DIALOG_SMALL: "clx-popup-dialog-small",
  SECURITY_LISTING_INPUT: "clx-security-listing-input",
  SECURITY_TYPE_INPUT: "clx-security-type-input",
  STACKED_BAR_CHART: "clx-stacked-bar-chart",
};
CLX.He = function (a, f, c, k) {
  var g,
    n = k ? k(a) : null,
    p,
    d,
    h = null,
    q = function (s) {
      return s ? c(s) : "";
    },
    o = function (u) {
      var t, s;
      t = u.keyCode || u.which;
      s = u.shiftKey || (t === 16 ? true : false);
      if ((t >= 65 && t <= 90 && !s) || (t >= 97 && t <= 122 && s)) {
        h = true;
      } else {
        h = false;
      }
    },
    m = "maxlength",
    j = function () {
      var s = a.attr(m);
      return CLX.Gm(s);
    },
    i = false,
    r = j(),
    l = function () {
      var t,
        w,
        s = j(),
        v,
        u = s > r;
      if (r) {
        t = a.val();
        w = t ? t.length : 0;
        if (!u || w < s) {
          v = Math.max(r, w);
          if (v !== s) {
            a.attr(m, v);
          }
        }
      }
    },
    e = function (s) {
      if (n) {
        n.setText(s);
      } else {
        a.val(s);
        if (i) {
          l();
        }
      }
    },
    b = function () {
      var t, s, u;
      t = n ? n.getText() : a.val();
      s = f(t);
      u = q(s);
      if (s && t !== u) {
        e(u);
      } else {
        if (i) {
          l();
        }
      }
      if (s !== p || (t && !s)) {
        p = s;
        if (d) {
          d(s, t);
        }
      }
      return true;
    };
  g = {
    init: function (s, t) {
      if (t) {
        if (n === null) {
          n = CLX.Gi(a);
        }
        n.init(b);
      } else {
        a.change(b);
        b();
      }
      d = s;
    },
    getValue: function () {
      return p;
    },
    actionKey: function (t, s) {
      a.actionKey(function (v, u) {
        b();
        t(v, u);
      }, s);
    },
    addCapsLockListener: function () {
      h = false;
      a.keypress(function (s) {
        o(s);
      });
    },
    getCheckedValue: function () {
      b();
      return p;
    },
    getCheckedValueAndEncode: function () {
      b();
      return encodeURI(p);
    },
    getInputValue: function () {
      return n ? n.getText() : a.val();
    },
    getFormattedValue: function () {
      return q(p);
    },
    setValue: function (s) {
      p = s;
      e(q(s));
    },
    setValueForUser: function (s) {
      e(q(s));
      b();
    },
    setUpdateMaxLength: function (s) {
      i = s;
    },
    isCapsLockOn: function () {
      return h;
    },
  };
  return g;
};
CLX.Hf = function (g, k) {
  var l,
    f = CLX.H,
    c = CLX.Ah,
    p = {},
    o = "selectstart",
    e = CLX.Gn,
    n = function () {
      if (g) {
        g();
      }
    },
    a = function () {
      if (k) {
        k();
      }
    },
    d = function (s) {
      var r = CLX.$(s.target),
        q;
      q = r.prevAll(f.VISIBLE_SELECTOR).first();
      if (!q.length) {
        q = r.siblings(f.VISIBLE_SELECTOR).last();
      }
      CLX.Fj(q);
      return true;
    },
    h = function (s) {
      var r = CLX.$(s.target),
        q;
      q = r.nextAll(f.VISIBLE_SELECTOR).first();
      if (!q.length) {
        q = r.siblings(f.VISIBLE_SELECTOR).first();
      }
      CLX.Fj(q);
      return true;
    },
    j = function (t) {
      var s = CLX.$(t.target),
        r,
        q;
      if (t.shiftKey) {
        r = s.prevAll(f.VISIBLE_SELECTOR);
      } else {
        r = s.nextAll(f.VISIBLE_SELECTOR);
      }
      if (r.length) {
        q = true;
      } else {
        n();
        a();
        q = false;
      }
      return q;
    },
    b = function () {
      n();
      a();
      return false;
    },
    m = function (t) {
      var q = true,
        u = t.keyCode,
        v,
        r,
        s;
      v = p[e(u)];
      if (v) {
        q = v(t);
      } else {
        r = String.fromCharCode(u);
        if (r) {
          r = r.charAt(0).toLowerCase();
          s = CLX.$(t.target)
            .nextAll(f.VISIBLE_SELECTOR)
            .filter(function () {
              var w = CLX.$(this).text();
              return w && w.charAt(0).toLowerCase() === r;
            });
          CLX.Fj(s);
        }
      }
      return q;
    },
    i = function () {
      return false;
    };
  p[e(c.UP)] = d;
  p[e(c.DOWN)] = h;
  p[e(c.LEFT)] = d;
  p[e(c.RIGHT)] = h;
  p[e(c.TAB)] = j;
  p[e(c.ESC)] = b;
  l = {
    addAnonymousItem: function (r, q) {
      if (q) {
        r.press(q);
      }
      r.keydown(m);
      r.mousedown(i);
      r.bind(o, i);
    },
    addItem: function (r, q) {
      l.addAnonymousItem(CLX.$("#" + r), q);
    },
  };
  return l;
};
CLX.Hg = function () {
  var e,
    b = -1,
    f,
    c,
    d,
    a = CLX.Gv();
  e = {
    setGroups: function (i, h, g, j) {
      b = i;
      c = b >= 0 ? h : null;
      f = b >= 0 ? g : null;
      d = j;
    },
    isActive: function () {
      return b >= 0 && c && c.length;
    },
    getGroupCol: function () {
      return b;
    },
    getGroups: function () {
      return f;
    },
    getGroupColName: function () {
      return d;
    },
    getVisibleRecs: function (g, n) {
      var o = [],
        h,
        j,
        p,
        k,
        l = 0,
        m = 0;
      for (j = 0; j < f.length && m < n; j += 1) {
        h = f[j];
        if (l >= g) {
          m += 1;
        }
        l += 1;
        if (m < n && e.isGroupExpanded(j)) {
          p = 0;
          if (l < g) {
            p = g - l;
          }
          if (p < h.length) {
            k = h.length - p;
            if (m + k > n) {
              k = n - m;
            }
            o = o.concat(h.slice(p, p + k));
            m += k;
          }
          l += h.length;
        }
      }
      return o;
    },
    hasExpandedGroups: function () {
      return c && c.length > a.size();
    },
    hasCollapsedGroups: function () {
      return !a.isEmpty();
    },
    expandAllGroups: function () {
      a.clear();
    },
    collapseAllGroups: function () {
      if (c) {
        a.addAll(c);
      }
    },
    isGroupExpanded: function (g) {
      return !a.contains(c[g]);
    },
    toggleGroupState: function (h) {
      var g = c[h];
      if (a.remove(g) !== g) {
        a.add(g);
      }
    },
    getNumRowsTotal: function () {
      var h = c ? c.length : 0,
        g = h,
        j;
      for (j = 0; j < h; j += 1) {
        if (!a.contains(c[j])) {
          g += f[j].length;
        }
      }
      return g;
    },
    getAbsRowIndexForRec: function (k, h, l) {
      var g = c ? c.length : 0,
        s = -1,
        n,
        m,
        p = 0,
        r,
        o,
        q;
      h = h || 0;
      for (n = 0; n < g && s < 0; n += 1) {
        p += 1;
        if (!a.contains(c[n])) {
          r = f[n];
          o = r.length;
          if (p + o < h) {
            p += o;
          } else {
            q = h > p ? h - p : 0;
            p += q;
            for (m = q; m < o; m += 1) {
              if (k === r[m]) {
                s = p;
                break;
              }
              p += 1;
              if (l && p >= l) {
                n = g;
                break;
              }
            }
          }
        }
      }
      return s;
    },
    reset: function () {
      f = null;
      c = null;
      a.clear();
    },
  };
  return e;
};
CLX.Hh = function () {
  var a = /ip(hone|od|ad)/i,
    b =
      window.navigator.userAgent ||
      window.navigator.vendor ||
      window.opera ||
      "";
  return a.test(b);
};
CLX.Hi = function (b) {
  var a;
  if (CLX.C(b)) {
    a = true;
    CLX.$.each(b, function (c, d) {
      if (d !== null && d !== undefined) {
        a = false;
        return false;
      }
    });
  } else {
    if (b === null || b === undefined) {
      a = true;
    }
  }
  return a;
};
CLX.Hj = function (b) {
  var a = CLX.H,
    d = a.ALL_TABBABLES,
    c = a.VISIBLE_SELECTOR;
  if (b) {
    CLX.Fj(
      CLX.$("#" + b)
        .find(d)
        .filter(c)
    );
  } else {
    CLX.Fj(CLX.$(d).filter(c));
  }
};
CLX.Hk = {
  ACCOUNT_MASTER_DATA: "ACCOUNTMASTERDATA",
  MORTGAGE_MASTER_DATA: "MORTGAGEMASTERDATA",
  STANDING_ORDERS: "STANDINGORDERS",
};
CLX.Hl = function () {
  var e,
    g = CLX.E,
    c,
    f,
    a,
    d,
    h,
    b = function () {
      c = null;
      f = null;
      d = null;
      h = null;
      a = false;
    };
  b();
  e = {
    setButton: function (i) {
      c = i;
      return e;
    },
    setToggle: function (i) {
      a = i;
      return e;
    },
    setCss: function (i) {
      f = f || {};
      f[g.CSS] = i;
      return e;
    },
    setPosition: function (i) {
      f = f || {};
      f[g.POSITION] = i;
      return e;
    },
    setContent: function (i) {
      if (!CLX.Ax(i)) {
        i = CLX.Dk({ content: i });
      }
      f = f || {};
      f[g.CONTENT] = i;
      return e;
    },
    setTitle: function (i) {
      d = d || {};
      d[g.TEXT] = i;
      return e;
    },
    setIcon: function (i) {
      d = d || {};
      d[g.ICON] = i;
      return e;
    },
    setFooter: function (i) {
      h = i;
      return e;
    },
    build: function () {
      var k,
        j = c,
        i;
      if (j) {
        f = f || {};
        i = !CLX.Hi(d);
        if (i || h !== null) {
          f[g.CONTENT] = CLX.En({
            heading: i ? CLX.Fn(d) : null,
            footer: h,
            content: f[g.CONTENT],
          });
        } else {
          f[g.CSS] = (f[g.CSS] || "") + " " + CLX.D.OVERLAY_BRIGHT;
        }
        k = CLX.Ge(f);
        CLX.Gh(j, k, [g.POSITION, g.EXPANDED]);
        CLX.Gh(k, j, [g.POSITION, g.EXPANDED]);
        CLX.R(j, g.OVERLAY_HIDE_ON_BLUR, true);
        CLX.R(j, g.OVERLAY, k);
        CLX.Bi(j, CLX.Be.CLICK, function (l) {
          if (l.component === j) {
            CLX.R(k, g.EXPANDED, !CLX.L(k, g.EXPANDED));
          }
        });
        if (a) {
          CLX.R(j, g.TYPE, CLX.Cp.TOGGLE);
          CLX.R(j, g.ALLOW_DEACTIVATE, true);
          CLX.Bj(k, function (l) {
            if (l.name === g.EXPANDED) {
              CLX.R(j, g.ACTIVE, l.value);
            }
          });
        }
      }
      b();
      return k;
    },
  };
  return e;
};
CLX.Hm = {
  ADD_TO_FAVOURITES: "AddToFavourites",
  CREATE_QUICK_VIEW: "CreateQuickView",
  SET_ALERT: "SetAlert",
  SHOW_HIDE_COLUMNS: "ShowHideColumns",
  REFRESH: "Refresh",
  EXPORT_XLS: "ExportXls",
  EXPORT_PDF: "ExportPdf",
  ADD_WIDGET: "AddWidget",
  ENTER_EDIT_MODE: "EnterEditMode",
  EDIT_PREF_TRADING: "EditPreferencesTrading",
  EDIT_PREF_FINANCES: "EditPreferencesFinances",
  CREATE_STANDING_ORDER: "CreateStandingOrder",
  CREATE_TEMPLATE: "CreateTemplate",
  MANUAL_STANDING_ORDER_REPORT: "ManualStandingOrderReport",
  WIDGET_QUICKBUY: "quicktrade",
  PORTFOLIO_STATEMENT_ON_DEMAND: "PortfolioStatementOnDemand",
};
CLX.Hn = { CSV: "CSV", OFX: "QFX", QIF: "QIF", PDF: "PDF" };
CLX.Ho = {
  FAVOURITES_OVERVIEW: "FAVOURITES_OVERVIEW",
  ASSET_OVERVIEW: "ASSET_OVERVIEW",
  ACCOUNT_OVERVIEW: "ACCOUNT_OVERVIEW",
  ACCOUNT_DETAIL: "ACCOUNT_DETAIL",
  ACCOUNT_TRX_LIST: "ACCOUNT_TRX_LIST",
  DEBIT_CARD_TRX_LIST: "DEBIT_CARD_TRX_LIST",
  ACCOUNT_TRX_DETAIL: "ACCOUNT_TRX_DETAIL",
  FINANCES_OVERVIEW: "FINANCES_OVERVIEW",
  FORECAST_OVERVIEW: "FORECAST_OVERVIEW",
  COLLECTIVE_BUY_EAM: "COLLECTIVE_BUY_VIEW",
  COLLECTIVE_SELL_EAM: "COLLECTIVE_SELL_VIEW",
  CUSTODY_ACCOUNT_DETAIL: "CUAC_DETAIL",
  CUSTODY_ACCOUNT_POS_LIST: "CUAC_POS_LIST",
  CUSTODY_ACCOUNT_POS_DETAIL: "CUAC_POS_DETAIL",
  CUSTODY_ACCOUNT_SECU_DETAIL: "CUAC_SECU_DETAIL",
  PORTFOLIO_OVERVIEW: "PORTFOLIO_OVERVIEW",
  PORTFOLIO_OVERVIEW_TRANSACTIONS: "PORTFOLIO_OVERVIEW_TRANSACTIONS",
  PORTFOLIO_POSITIONS: "PORTFOLIO_POSITIONS",
  PORTFOLIO_PAYMENTS: "PORTFOLIO_PAYMENTS",
  PORTFOLIO_POSITION_DETAIL: "PORTFOLIO_POSITION_DETAIL",
  PORTFOLIO_TRANSACTION_DETAIL: "PORTFOLIO_TRANSACTION_DETAIL",
  PORTFOLIO_TRANSACTIONS: "PORTFOLIO_TRANSACTIONS",
  PORTFOLIO_MATURITY: "PORTFOLIO_MATURITY",
  PORTFOLIO_DETAIL: "PORTFOLIO_DETAIL",
  PERFORMANCE_DETAILED: "PERFORMANCE_DETAILED",
  PERFORMANCE_RELATIVE: "PERFORMANCE_RELATIVE",
  PERFORMANCE_ABSOLUTE: "PERFORMANCE_ABSOLUTE",
  CUSTOMER_PERFORMANCE: "CUSTOMER_PERFORMANCE",
  CUSTOMER_PERFORMANCE_YEARLY: "CUSTOMER_PERFORMANCE_YEARLY",
  PORTFOLIO_POSITION_TRANSACTIONS: "PORTFOLIO_POSITION_TRANSACTIONS",
  PORTFOLIO_GROUPS_OVERVIEW: "PORTFOLIO_GROUPS_OVERVIEW",
  PORTFOLIO_GROUPS_OVERVIEW_TABLE: "PORTFOLIO_GROUPS_OVERVIEW_TABLE",
  PORTFOLIO_GROUPS_OVERVIEW_FILTER: "PORTFOLIO_GROUPS_OVERVIEW_FILTER",
  PORTFOLIO_GROUPS_DETAILS: "PORTFOLIO_GROUPS_DETAILS",
  PORTFOLIO_GROUPS_CUSTOMERS: "PORTFOLIO_GROUPS_CUSTOMERS",
  PORTFOLIO_GROUPS_POSITIONS: "PORTFOLIO_GROUPS_POSITIONS",
  PORTFOLIO_GROUPS_PORTFOLIOS: "PORTFOLIO_GROUPS_PORTFOLIOS",
  LOANS_AND_MORTGAGES_POSITION_DETAIL: "LOANS_AND_MORTGAGES_POSITION_DETAIL",
  LOANS_AND_MORTGAGES_OVERVIEW: "LOANS_AND_MORTGAGES_OVERVIEW",
  MONEY_MARKET_POSITION_DETAIL: "MONEY_MARKET_POSITION_DETAIL",
  ADVICE_MANAGER: "ADVICE_MANAGER",
  ADVICE_MANAGER_ADVISOR: "ADVICE_MANAGER_ADVISOR",
  BUDGET_OVERVIEW: "BUDGET_OVERVIEW",
  QUICK_PAYMENT: "QUICK_PAYMENT",
  PAYMENT_MENU: "PAYMENT_MENU",
  PAYMENT_ASSISTANT: "PAYMENT_ASSISTANT",
  PAYMENT_ENTRY: "PAYMENT_ENTRY",
  PAYMENT_OVERVIEW: "PAYMENT_OVERVIEW",
  PAYMENT_DETAIL: "PAYMENT_DETAIL",
  PAYMENT_TEMPLATE_GROUP: "PAYMENT_TEMPLATE_GROUP",
  PAYMENT_TEMPLATE_OVERVIEW: "PAYMENT_TEMPLATE_OVERVIEW",
  PAYMENT_TEMPLATE_DETAIL: "PAYMENT_TEMPLATE_DETAIL",
  PAYMENT_STANDING_ORDERS: "PAYMENT_STANDING_ORDERS",
  PAYMENT_STANDING_ORDER_DETAIL: "PAYMENT_STANDING_ORDER_DETAIL",
  PAYMENT_DEBIT_MANDATES: "PAYMENT_DEBIT_MANDATES",
  PAYMENT_DEBIT_MANDATE_DETAIL: "PAYMENT_DEBIT_MANDATE_DETAIL",
  TRANSFER_OVERVIEW: "TRANSFER_OVERVIEW",
  PAYMENT_E_BILL_ACCOUNTS_OVERVIEW: "PAYMENT_E_BILL_ACCOUNTS_OVERVIEW",
  PAYMENT_E_BILLS_LIST: "PAYMENT_E_BILLS_LIST",
  PAYMENT_E_BILLERS_LIST: "PAYMENT_E_BILLERS_LIST",
  PAYMENT_E_BILL_DETAIL: "PAYMENT_E_BILL_DETAIL",
  PAYMENT_E_BILL_NEW_ACCOUNT: "PAYMENT_E_BILL_NEW_ACCOUNT",
  PAYMENT_E_BILL_SUBSCRIBE_ACCOUNT: "PAYMENT_E_BILL_SUBSCRIBE_ACCOUNT",
  PAYMENT_E_BILL_ACCOUNT_DETAIL: "PAYMENT_E_BILL_ACCOUNT_DETAIL",
  PAYMENT_SCANNER: "PAYMENT_SCANNER",
  TRUSTED_BENEFICIARIES: "TRUSTED_BENEFICIARIES",
  QR_PAYMENT_RECEIVE: "QR_PAYMENT_RECEIVE",
  QR_PAYMENT_SEND: "QR_PAYMENT_SEND",
  ACCOUNT_TRANSFER: "ACCOUNT_TRANSFER",
  ACCOUNT_TRANSFER_STANDING_ORDER: "ACCOUNT_TRANSFER_STANDING_ORDER",
  ENTER_BALANCE: "ENTER_BALANCE",
  UK_ACCOUNT_TRANSFER: "UK_ACCOUNT_TRANSFER",
  UK_FASTER_PAYMENT: "UK_FASTER_PAYMENT",
  UK_CHAPS_PAYMENT: "UK_CHAPS_PAYMENT",
  UK_INTERNATIONAL_PAYMENT: "UK_INTERNATIONAL_PAYMENT",
  PAYMENT_BULK: "PAYMENT_BULK",
  PAYMENT_BULK_DETAIL_SUMMARY: "PAYMENT_BULK_DETAIL_SUMMARY",
  PAYMENT_BULK_DETAIL_PAYMENTS: "PAYMENT_BULK_DETAIL_PAYMENTS",
  PAYMENT_DIRECT_DEBIT_OVERVIEW: "PAYMENT_DIRECT_DEBIT_OVERVIEW",
  PAYMENT_DEBIT_MANDATE_OVERVIEW: "PAYMENT_DEBIT_MANDATE_OVERVIEW",
  CUSTOMER_CARE_NOTICE_OVERVIEW: "CUSTOMER_CARE_NOTICE_OVERVIEW",
  CUSTOMER_CARE_NOTICE_DETAIL: "CUSTOMER_CARE_NOTICE_DETAIL",
  CUSTOMER_CARE_ABOUT: "CUSTOMER_CARE_ABOUT",
  CUSTOMER_CARE_DEACTIVATION: "CUSTOMER_CARE_DEACTIVATION",
  CUSTOMER_CARE_DOCUMENTS: "CUSTOMER_CARE_DOCUMENTS",
  CUSTOMER_CARE_ACCOUNT_STATEMENTS: "CUSTOMER_CARE_ACCOUNT_STATEMENTS",
  CUSTOMER_CARE_DOCUMENT_DETAIL: "CUSTOMER_CARE_DOCUMENT_DETAIL",
  CUSTOMER_CARE_MESSAGES: "CUSTOMER_CARE_MESSAGES",
  CUSTOMER_CARE_VOTING_MESSAGES: "CUSTOMER_CARE_VOTING_MESSAGES",
  CUSTOMER_CARE_MESSAGE_DETAIL: "CUSTOMER_CARE_MESSAGE_DETAIL",
  CUSTOMER_CARE_MESSAGE_EDIT: "CUSTOMER_CARE_MESSAGE_EDIT",
  CUSTOMER_CARE_NOTICES: "CUSTOMER_CARE_NOTICES",
  CUSTOMER_CARE_OVERVIEW: "CUSTOMER_CARE_OVERVIEW",
  CUSTOMER_CARE_PORTFOLIO_STATEMENT_ON_DEMAND:
    "CUSTOMER_CARE_PORTFOLIO_STATEMENT_ON_DEMAND",
  CUSTOMER_CARE_PORTFOLIO_STATEMENT_ON_DEMAND_CONFIRMATION:
    "CUSTOMER_CARE_PORTFOLIO_STATEMENT_ON_DEMAND_CONFIRMATION",
  CUSTOMER_CARE_SETTINGS: "CUSTOMER_CARE_SETTINGS",
  CUSTOMER_CARE_LOGOUT: "CUSTOMER_CARE_LOGOUT",
  CUSTOMER_CARE_CHANGE_PASSWORD: "CUSTOMER_CARE_CHANGE_PASSWORD",
  CUSTOMER_CARE_CHANGE_PASSWORD_CONFIRMATION:
    "CUSTOMER_CARE_CHANGE_PASSWORD_CONFIRMATION",
  CUSTOMER_CARE_DOCUMENT_REQUEST: "CUSTOMER_CARE_DOCUMENT_REQUEST",
  REPORTING_OVERVIEW: "REPORTING_OVERVIEW",
  REPORTING_REQUEST: "REPORTING_REQUEST",
  ALERTING_OVERVIEW: "ALERTING_OVERVIEW",
  FILE_EXCHANGE_OVERVIEW: "FILE_EXCHANGE_OVERVIEW",
  FILE_EXCHANGE_DOWNLOAD: "FILE_EXCHANGE_DOWNLOAD",
  PROFILE_OVERVIEW: "PROFILE_OVERVIEW",
  CREDIT_CARDS_OVERVIEW: "CREDIT_CARDS_OVERVIEW",
  CREDIT_CARDS_TRANSACTIONS: "CREDIT_CARDS_TRANSACTIONS",
  CREDIT_CARDS_INVOICES: "CREDIT_CARDS_INVOICES",
  CREDIT_CARDS_DETAILS: "CREDIT_CARDS_DETAILS",
  DEBIT_CARDS_OVERVIEW: "DEBIT_CARDS_OVERVIEW",
  BROKERAGE_ORDERS_OVERVIEW: "BROKERAGE_ORDERS_OVERVIEW",
  BROKERAGE_POSITION_LIST: "BROKERAGE_POSITION_LIST",
  SECURITY_LISTING_SEARCH: "SECURITY_LISTING_SEARCH",
  FOREX_ORDERS_OVERVIEW: "FOREX_ORDERS_OVERVIEW",
  NOTIFICATIONS_OVERVIEW: "NOTIFICATIONS_OVERVIEW",
  LOGOUT: "LOGOUT",
  FIXED_TERM_DEPOSIT_OVERVIEW: "FIXED_TERM_DEPOSIT_OVERVIEW",
  getMobileViewId: function (b) {
    var a;
    switch (b) {
      case this.FAVOURITES_OVERVIEW:
        a = CLX.Gy.ACCOUNT_OVERVIEW;
        break;
      case this.ASSET_OVERVIEW:
        a = CLX.Gy.ASSET_OVERVIEW;
        break;
      case this.ACCOUNT_OVERVIEW:
        a = CLX.Gy.ACCOUNT_OVERVIEW;
        break;
      case this.ACCOUNT_DETAIL:
        a = CLX.Gy.ACCOUNT_DETAIL;
        break;
      case this.ACCOUNT_TRX_LIST:
      case this.DEBIT_CARD_TRX_LIST:
        a = CLX.Gy.ACCOUNT_TRX_LIST;
        break;
      case this.ACCOUNT_TRX_DETAIL:
        a = CLX.Gy.ACCOUNT_TRX_DETAIL;
        break;
      case this.CUSTODY_ACCOUNT_POS_DETAIL:
        a = CLX.Gy.CUAC_POSITION_DETAIL;
        break;
      case this.CUSTODY_ACCOUNT_SECU_DETAIL:
        a = CLX.Gy.CUAC_SECURITY_DETAIL;
        break;
      case this.CUSTODY_ACCOUNT_POS_LIST:
        a = CLX.Gy.CUAC_POSITION_LIST;
        break;
      case this.PORTFOLIO_OVERVIEW:
        a = CLX.Gy.PORTFOLIO_OVERVIEW;
        break;
      case this.PORTFOLIO_POSITIONS:
        a = CLX.Gy.PORTFOLIO_POSITIONS;
        break;
      case this.PORTFOLIO_PAYMENTS:
        a = CLX.Gy.PORTFOLIO_PAYMENTS;
        break;
      case this.PORTFOLIO_POSITION_DETAIL:
        a = CLX.Gy.PORTFOLIO_POSITION_DETAIL;
        break;
      case this.PORTFOLIO_TRANSACTION_DETAIL:
        a = CLX.Gy.PORTFOLIO_TRANSACTION_DETAIL;
        break;
      case this.LOANS_AND_MORTGAGES_POSITION_DETAIL:
        a = CLX.Gy.LOANS_AND_MORTGAGES_POSITION_DETAIL;
        break;
      case this.MONEY_MARKET_POSITION_DETAIL:
        a = CLX.Gy.MONEY_MARKET_POSITION_DETAIL;
        break;
      case this.PAYMENT_OVERVIEW:
        a = CLX.Gy.PAYMENT_OVERVIEW;
        break;
      case this.TRUSTED_BENEFICIARIES:
        a = CLX.Gy.TRUSTED_BENEFICIARIES_OVERVIEW;
        break;
      case this.PAYMENT_DETAIL:
        a = CLX.Gy.PAYMENT_DETAIL;
        break;
      case this.TRANSFER_OVERVIEW:
        a = CLX.Gy.TRANSFER_OVERVIEW;
        break;
      case this.PAYMENT_TEMPLATE_GROUP:
        a = CLX.Gy.PAYMENT_TEMPLATE_GROUP;
        break;
      case this.PAYMENT_TEMPLATE_OVERVIEW:
        a = CLX.Gy.PAYMENT_TEMPLATE_OVERVIEW;
        break;
      case this.PAYMENT_TEMPLATE_DETAIL:
        a = CLX.Gy.PAYMENT_TEMPLATE_OVERVIEW;
        break;
      case this.PAYMENT_STANDING_ORDERS:
        a = CLX.Gy.PAYMENT_STANDING_ORDERS;
        break;
      case this.PAYMENT_STANDING_ORDER_DETAIL:
        a = CLX.Gy.PAYMENT_STANDING_ORDER_DETAIL;
        break;
      case this.PAYMENT_DEBIT_MANDATES:
        a = CLX.Gy.PAYMENT_DEBIT_MANDATES;
        break;
      case this.PAYMENT_DEBIT_MANDATE_DETAIL:
        a = CLX.Gy.PAYMENT_DEBIT_MANDATE_DETAIL;
        break;
      case this.PAYMENT_MENU:
        a = CLX.Gy.PAYMENT_MENU;
        break;
      case this.PAYMENT_ENTRY:
        a = CLX.Gy.PAYMENT_ENTRY;
        break;
      case this.PAYMENT_ASSISTANT:
        a = CLX.Gy.PAYMENT_ASSISTANT;
        break;
      case this.PAYMENT_E_BILLS_LIST:
        a = CLX.Gy.PAYMENT_E_BILLS_LIST;
        break;
      case this.PAYMENT_E_BILL_DETAIL:
        a = CLX.Gy.PAYMENT_E_BILL_DETAIL;
        break;
      case this.PAYMENT_SCANNER:
        a = CLX.Gy.PAYMENT_SCANNER;
        break;
      case this.QR_PAYMENT_RECEIVE:
        a = CLX.Gy.QR_PAYMENT_RECEIVE;
        break;
      case this.QR_PAYMENT_SEND:
        a = CLX.Gy.QR_PAYMENT_SEND;
        break;
      case this.ACCOUNT_TRANSFER:
        a = CLX.Gy.ACCOUNT_TRANSFER;
        break;
      case this.UK_ACCOUNT_TRANSFER:
        a = CLX.Gy.PAYMENT_ENTRY;
        break;
      case this.UK_FASTER_PAYMENT:
        a = CLX.Gy.PAYMENT_ENTRY;
        break;
      case this.UK_CHAPS_PAYMENT:
        a = CLX.Gy.PAYMENT_ENTRY;
        break;
      case this.UK_INTERNATIONAL_PAYMENT:
        a = CLX.Gy.PAYMENT_ENTRY;
        break;
      case this.CUSTOMER_CARE_NOTICE_OVERVIEW:
        a = CLX.Gy.CUSTOMER_CARE_NOTICE_OVERVIEW;
        break;
      case this.CUSTOMER_CARE_NOTICE_DETAIL:
        a = CLX.Gy.CUSTOMER_CARE_NOTICE_DETAIL;
        break;
      case this.CUSTOMER_CARE_ABOUT:
        a = CLX.Gy.CUSTOMER_CARE_ABOUT;
        break;
      case this.CUSTOMER_CARE_DEACTIVATION:
        a = CLX.Gy.CUSTOMER_CARE_DEACTIVATION;
        break;
      case this.CUSTOMER_CARE_DOCUMENTS:
        a = CLX.Gy.CUSTOMER_CARE_DOCUMENTS;
        break;
      case this.CUSTOMER_CARE_ACCOUNT_STATEMENTS:
        a = CLX.Gy.CUSTOMER_CARE_DOCUMENTS;
        break;
      case this.CUSTOMER_CARE_DOCUMENT_DETAIL:
        a = CLX.Gy.CUSTOMER_CARE_DOCUMENT_DETAIL;
        break;
      case this.CUSTOMER_CARE_MESSAGES:
        a = CLX.Gy.CUSTOMER_CARE_MESSAGES;
        break;
      case this.CUSTOMER_CARE_VOTING_MESSAGES:
        a = CLX.Gy.CUSTOMER_CARE_VOTING_MESSAGES;
        break;
      case this.CUSTOMER_CARE_MESSAGE_DETAIL:
        a = CLX.Gy.CUSTOMER_CARE_MESSAGE_DETAIL;
        break;
      case this.CUSTOMER_CARE_MESSAGE_EDIT:
        a = CLX.Gy.CUSTOMER_CARE_MESSAGE_EDIT;
        break;
      case this.CUSTOMER_CARE_NOTICES:
        a = CLX.Gy.CUSTOMER_CARE_NOTICES;
        break;
      case this.CUSTOMER_CARE_OVERVIEW:
        a = CLX.Gy.CUSTOMER_CARE_OVERVIEW;
        break;
      case this.CUSTOMER_CARE_SETTINGS:
        a = CLX.Gy.CUSTOMER_CARE_SETTINGS;
        break;
      case this.CUSTOMER_CARE_LOGOUT:
        a = CLX.Gy.CUSTOMER_CARE_LOGOUT;
        break;
      case this.CUSTOMER_CARE_CHANGE_PASSWORD:
        a = CLX.Gy.CUSTOMER_CARE_CHANGE_PASSWORD;
        break;
      case this.CUSTOMER_CARE_CHANGE_PASSWORD_CONFIRMATION:
        a = CLX.Gy.CUSTOMER_CARE_CHANGE_PASSWORD_CONFIRMATION;
        break;
      case this.CUSTOMER_CARE_PORTFOLIO_STATEMENT_ON_DEMAND:
        a = CLX.Gy.CUSTOMER_CARE_PORTFOLIO_STATEMENT_ON_DEMAND;
        break;
      case this.CUSTOMER_CARE_PORTFOLIO_STATEMENT_ON_DEMAND_CONFIRMATION:
        a = CLX.Gy.CUSTOMER_CARE_PORTFOLIO_STATEMENT_ON_DEMAND_CONFIRMATION;
        break;
      case this.BROKERAGE_POSITION_LIST:
        a = CLX.Gy.BROKERAGE_POSITION_LIST;
        break;
      case this.BROKERAGE_ORDERS_OVERVIEW:
        a = CLX.Gy.BROKERAGE_ORDERS_OVERVIEW;
        break;
      case this.SECURITY_LISTING_SEARCH:
        a = CLX.Gy.SECURITY_LISTING_SEARCH;
        break;
      case this.FOREX_ORDERS_OVERVIEW:
        a = CLX.Gy.FOREX_ORDERS_OVERVIEW;
        break;
      case this.NOTIFICATIONS_OVERVIEW:
        a = CLX.Gy.NOTIFICATIONS_OVERVIEW;
        break;
      default:
        break;
    }
    return a;
  },
};
CLX.Hp = {
  EBAN3_MODULE: "eban3Module",
  SHOWCASE: "showcase",
  PORTAL: "portal",
  WEALTH_OVERVIEW: "wealthOverview",
  CURRENCY_ACCOUNT: "currencyAccounts",
  INVESTMENT_PORTFOLIO: "investmentPortfolios",
  LOAN_AND_MORTGAGE: "loansAndMortgages",
  FIXED_TERM_DEPOSIT: "fixedTermDeposits",
  MONEY_MARKET: "moneyMarkets",
  ADVICE_MANAGER: "adviceManager",
  ADVICE_MANAGER_ADVISOR: "adviceManagerAdvisor",
  BUDGET_ENTRIES: "budgetEntries",
  CMS_ACCOUNT: "cmsCompositeAccount",
  CMS_PAYMENT: "cmsPayment",
  CMS_CUSTOMER_REQUEST: "cmsCustomerRequest",
  CUSTOMER_ADMIN_CONTRACT: "customerAdminContract",
  CUSTOMER_ADMIN_ACCOUNT: "customerAdminAccount",
  CUSTOMER_ADMIN_PROFILE: "customerAdminProfile",
  CUSTOMER_ADMIN_AUDIT: "customerAdminAudit",
  CUSTOMER_CARE_NOTICE: "customerCareNotice",
  CUSTOMER_CARE_MESSAGES: "customerCareMessages",
  CUSTOMER_CARE_VOTING_MESSAGES: "cutomerCareVotingMessages",
  CUSTOMER_CARE_DOCUMENTS: "customerCareDocuments",
  CUSTOMER_CARE_DEACTIVATION: "customerCareDeactivation",
  CUSTOMER_CARE_SETTINGS: "customerCareSettings",
  CUSTOMER_CARE_LOGOUT: "customerCareLogout",
  CUSTOMER_CARE_CHANGE_PASSWORD: "customerCareChangePassword",
  CUSTOMER_CARE_ABOUT: "customerCareAbout",
  SINGLE_PAYMENT: "singlePayment",
  PAYMENT_TEMPLATE: "paymentTemplate",
  SIMPLE_TEMPLATE: "simpleTemplate",
  DIRECT_DEBIT: "directDebit",
  DEBIT_MANDATE: "debitMandate",
  TRUSTED_BENEFICIARIES: "trustedBeneficiaries",
  STANDING_ORDER: "standingOrder",
  BULK_PAYMENT: "bulkPayment",
  PAYMENT_LIST: "paymentList",
  PAYMENT_STATUS: "paymentStatus",
  ACCOUNT_TRANSFER: "accountTransfer",
  MESSAGE: "message",
  ALERTING: "alerting",
  STATEMENTS: "statements",
  E_STATEMENTS: "e_statements",
  TAX_REPORTS: "tax_reports",
  FIVE_TRADE: "fiveTrade",
  REPORTING: "reporting",
  CUSTOMER_REQUEST: "customerRequest",
  PERSONAL_SETTINGS: "personalSettings",
  FILE_EXCHANGE: "fileExchange",
  SECURE_SAFE: "secureSafe",
  FAVOURITES_OVERVIEW: "favouritesOverview",
  BROKERAGE_ORDERS: "brokerageOrders",
  BROKERAGE_BUY: "brokerageBuy",
  BROKERAGE_SELL: "brokerageSell",
  BROKERAGE_ISSUES: "brokerageIssues",
  FOREX_ORDERS: "forexOrders",
  RESEARCH: "research",
  PORTFOLIO_GROUPS: "portfolioGroups",
  NOTIFICATIONS_OVERVIEW: "notificationsOverview",
  FINANCES: "finances",
};
CLX.Hq = {
  GENERAL_SETTINGS: "generalSettings",
  CHANGE_PASSWORD: "changePassword",
  CHANGE_ADDRESS: "changeAddress",
  ACCESS: "access",
  BLOCK_ACCESS: "blockAccess",
  SECURE_SAFE: "secureSafe",
  BALANCE_ON_DEMAND: "balanceOnDemand",
  BALANCE_ON_DEMAND_ENTRY: "balanceOnDemandEntry",
  MOBILE_ACCESS: "mobileAccess",
  FINANCES_SETTINGS: "aliasSettings",
  PAYMENTS_SETTINGS: "paymentsSettings",
  TRADING_SETTINGS: "tradingSettings",
  FOTO_TAN_SETTINGS: "fotoTanSettings",
  MESSAGE_ALERTS_SETTINGS: "message",
  RECORD_DELIVERY: "recordDeliveryRequest",
  RECORD_DELIVERY_ENTRY: "recordDeliveryEntry",
  PHONE_SETTINGS: "phoneSettings",
  REGISTRATION_SETTINGS: "registrationSettings",
  PORTFOLIO_STATEMENT_ON_DEMAND_SETTINGS: "portStatOnDemandSettings",
  PFM_SETTINGS: "pfm",
  CONSOLIDATION_CURRENCY_SETTINGS: "consolidationCurrencySettings",
  PREFERENCES_SETTINGS: "preferencesSettings",
};
CLX.Hr = function () {
  var c,
    e = CLX.E,
    h,
    g,
    d,
    b,
    i,
    a,
    f = function () {
      h = false;
      g = null;
      d = null;
      b = [];
      i = [];
      a = {};
    };
  f();
  c = {
    setCss: function (j) {
      g = g || {};
      g[e.CSS] = j;
      return c;
    },
    setTitle: function (j) {
      d = d || {};
      d[e.TEXT] = j;
      return c;
    },
    setIcon: function (j) {
      d = d || {};
      d[e.ICON] = j;
      return c;
    },
    setContent: function (j) {
      if (!CLX.Ax(j)) {
        j = CLX.Dk({ content: j });
      }
      g = g || {};
      g[e.CONTENT] = j;
      return c;
    },
    addHeadingButton: function (k, j, l) {
      if (CLX.O(k)) {
        k = CLX.El({ name: j, icon: k });
      }
      if (k) {
        i.push(k);
      }
      if (j && l) {
        a[j] = l;
      }
      return c;
    },
    addFooterButton: function (k, j, l) {
      if (CLX.O(k)) {
        k = CLX.El({ name: j, text: k });
      }
      if (k) {
        b.push(k);
      }
      if (j && l) {
        a[j] = l;
      }
      return c;
    },
    addButton: function () {
      return c.addFooterButton.apply(null, arguments);
    },
    setDetachOnHide: function (j) {
      h = j;
      return c;
    },
    build: function () {
      g = g || {};
      if (d || i.length) {
        if (i.length) {
          d = d || {};
          d[e.TOOLBAR] = CLX.En({ layout: CLX.Et(), content: i });
        }
        g[e.HEADING] = CLX.Fn(d);
      }
      if (b.length) {
        g[e.FOOTER] = CLX.Fn({
          toolbar: CLX.En({ layout: CLX.Et(), content: b }),
        });
      }
      var j, k;
      j = CLX.Ha({ hidden: true, content: CLX.En(g) }).attach();
      k = CLX.$.extend({}, a);
      CLX.Bi(j, function (l) {
        if (l.action === CLX.Be.CLICK) {
          if (l.name) {
            var m = k[l.name];
            if (CLX.M(m)) {
              m(j);
            }
          }
        }
      });
      if (h) {
        CLX.Bj(j, function (l) {
          if (l.name === e.HIDDEN && l.value) {
            j.detach();
          }
        });
      }
      f();
      return j;
    },
  };
  return c;
};
CLX.Hs = function (i, d, k) {
  var f,
    c,
    h,
    e = true,
    j = CLX.Df(),
    a = new RegExp(
      "^\\d+(([,]\\d+)+[" + j.getDecimalSeparator() + "]\\d{0,2})?$"
    ),
    g = function (m) {
      var l, n;
      if (CLX.O(m) && j.getDecimalSeparator() !== ",") {
        if (!a.test(m)) {
          m = m.replace(",", ".");
        }
      }
      if (m || m === 0) {
        n = k ? k(m) : true;
        l = n ? d.parseAmount(h, m, e) : null;
      } else {
        l = "";
      }
      if (l === null) {
        f.clear();
      }
      return j.removeGroupingSeparator(l);
    },
    b = function (l) {
      var m = k ? k(l) : true;
      return m ? d.formatAmount(h, l) : l;
    };
  f = {
    init: function (l, m) {
      c = CLX.He(i, g, b);
      c.setUpdateMaxLength(true);
      c.init(l, m);
    },
    load: function (m, l) {
      h = m;
      c.setValue(g(l) || l);
    },
    setCurrency: function (l) {
      f.load(l, c.getValue());
    },
    setAllowNegative: function (l) {
      if (l) {
        i.keyFilter(d.getAmountCharFilter(null, true));
      }
      e = l || false;
    },
    setAmount: function (l) {
      f.load(h, l);
    },
    getCurrency: function () {
      return h;
    },
    getAmount: function () {
      var l = c.getValue();
      return !k || k(l) ? l : "";
    },
    getInputValue: function () {
      return c.getInputValue();
    },
    getFormattedAmount: function () {
      return c.getFormattedValue();
    },
    clear: function () {
      c.setValue(null);
    },
  };
  return f;
};
CLX.Ht = function (a, d, b, c) {
  return CLX.He(CLX.$("#" + a), d, b, c);
};
CLX.Hu = function (ad, aI, aF) {
  var N,
    aU = CLX.Gb,
    Q = CLX.Go,
    u = CLX.Gf,
    aX = u.DEFAULT_SORT_COL,
    U = CLX.Hc,
    n = U.ASC,
    az = U.DESC,
    C = CLX.Hb,
    e = C.GROUP,
    aL = C.PRIMARY,
    aB = C.SECONDARY,
    aj = C.DEFAULT,
    z = aF + "collapseAllOnHeadId",
    an = aF + "expandAllOnHeadId",
    f = "<span id=" + z + ' class="floatLeft sortOptionCollapseAll"></span>',
    ac = "<span id=" + an + ' class="floatLeft sortOptionExpandAll"></span>',
    ak =
      '<span id= emptyGroupingId class="floatLeft emptyGroupingOption"></span>',
    aR = "groupingPlaceholder",
    am = false,
    d = "sortOptionExpandAll",
    q = u.HIDE_GOUPING_ICON,
    aH = 200,
    ai = "sortAndGroup",
    c = "showBelowTag",
    aM = "tagAlignToHeader",
    ay,
    au,
    W,
    aE,
    v = CLX.Hg(),
    aq = aF + e,
    S = aq + n,
    R = aq + az,
    g = aF + aL + n,
    ah = aF + aL + az,
    x = aF + aB + n,
    aG = aF + aB + az,
    av = aF + "Separator",
    Y = aF + "ExpandAll",
    ab = aF + "CollapseAll",
    w = aF + "Ungroup",
    H = "tableHeaderActive",
    I = {},
    aO = aF + "SortAndGroupingLabel",
    X = aF + "SortingOnlyLabel",
    A = "sortOptionsHeading",
    ap = "changeHeadingTitleTag",
    aa,
    P,
    B,
    O = false,
    T = false,
    i = -1,
    ax,
    at = -1,
    m,
    t = -1,
    k,
    al = function () {
      ay.hide();
      aE[P].removeClass(H);
      W.sortAndDisplayRecs();
    },
    aJ = function () {
      var aY;
      if (i >= 0) {
        aY = aE[i];
        aY.ariaSort(ax === n ? Q.ascending : Q.descending);
        CLX.Fc(aY, B ? e : aL);
        CLX.Fc(aY, ax);
      }
    },
    b = function () {
      var aY;
      if (i >= 0) {
        aY = aE[i];
        aY.ariaSort();
        CLX.Fi(aY, ax);
        CLX.Fi(aY, B ? e : aL);
      }
    },
    aV = function () {
      var aY;
      if (at >= 0) {
        aY = aE[at];
        CLX.Fc(aY, aB);
        CLX.Fc(aY, m);
      }
    },
    aK = function () {
      var aY;
      if (at >= 0) {
        aY = aE[at];
        CLX.Fi(aY, m);
        CLX.Fi(aY, aB);
      }
    },
    aW = function (a0, aZ) {
      var aY = true;
      b();
      if (P === i) {
        aZ = aZ || ax;
        aY = false;
      } else {
        if (at >= 0) {
          aK();
          at = -1;
        } else {
          if (a0) {
            at = i;
            m = ax;
            aV();
          }
        }
      }
      B = a0;
      i = P;
      ax = aZ || n;
      aJ();
      if (aY) {
        v.expandAllGroups();
      }
      if (aa) {
        aa(aI.getColType(i), aI.getColType(at), i, ax, B, at, m);
      }
      al();
    },
    p = function (aY) {
      aK();
      at = P;
      m = aY;
      aV();
      if (aa) {
        aa(aI.getColType(i), aI.getColType(at), i, ax, B, at, m);
      }
      al();
    },
    aD = function () {
      v.expandAllGroups();
      al();
    },
    V = function () {
      v.collapseAllGroups();
      al();
    },
    aS = function () {
      return !aE[P].hasClass(u.NO_GROUPING);
    },
    af = function (aY) {
      return !aY.hasClass(u.NO_ACTION);
    },
    aw = function () {
      return (!B || P !== i) && aS();
    },
    j = function () {
      return B && P === i && ax === az && aS();
    },
    L = function () {
      return B && P === i && ax === n && aS();
    },
    aN = function () {
      var aY;
      if (P === i) {
        aY = !B && ax === az;
      } else {
        if (P === at) {
          aY = m === n;
        } else {
          aY = true;
        }
      }
      return aY;
    },
    o = function () {
      var aY;
      if (P === i) {
        aY = !B && ax === n;
      } else {
        if (P === at) {
          aY = m === az;
        } else {
          aY = false;
        }
      }
      return aY;
    },
    s = function () {
      return P !== i && (P !== at || m === az);
    },
    aP = function () {
      return P === at && m === n;
    },
    J = function () {
      return B && P === i && v.hasCollapsedGroups();
    },
    F = function () {
      return B && P === i && v.hasExpandedGroups();
    },
    r = function () {
      return B && P === i;
    },
    y = function () {
      var aY, aZ;
      aY = aN() || o() || s() || aP();
      aZ = aw() || j() || L() || J() || F() || r();
      return aY && aZ;
    },
    aA = function () {
      if (au) {
        window.clearTimeout(au);
        au = null;
      }
    },
    h = function () {
      au = null;
      ay.hide();
      if (P !== undefined) {
        aE[P].removeClass(H);
      }
    },
    ao = function () {
      CLX.Fj(aE[P]);
    },
    l = function () {
      aA();
      au = window.setTimeout(h, aH);
      return true;
    },
    aQ = function (aY) {
      if (aY === P) {
        if (ay.isVisible()) {
          l();
        } else {
          aA();
        }
      }
      return true;
    },
    aC = function () {
      var aZ, aY;
      for (aZ in I) {
        if (I.hasOwnProperty(aZ)) {
          aY = I[aZ];
          if (aY()) {
            CLX.$("#" + aZ).show();
          } else {
            CLX.$("#" + aZ).hide();
          }
        }
      }
    },
    aT = function () {
      var a1 = aE[0].find("." + aR),
        aZ = aE[0].outerWidth(),
        aY,
        a0;
      if (!a1.length) {
        a1 = aE[0];
      }
      if (a1.find(".emptyGroupingOption").length === 1) {
        a1.find(".emptyGroupingOption").remove();
        a1.prepend(f);
        CLX.$("#" + z).press(function () {
          V();
          CLX.$("#" + z).hide();
          CLX.$("#" + an).show();
          return false;
        });
        a1.prepend(ac);
        CLX.$("#" + an).press(function () {
          aD();
          CLX.$("#" + an).hide();
          CLX.$("#" + z).show();
          return false;
        });
        CLX.$("#" + an).hide();
        aY = a1.outerWidth();
        a0 = CLX.$("." + d).outerWidth();
        if (aY < aZ + a0) {
          am = true;
          a1.css("width", aZ + a0);
        }
      }
    },
    G = function () {
      var aY = aE[0].find("." + aR);
      if (!aY.length) {
        aY = aE[0];
      }
      if (aY.find(".emptyGroupingOption").length === 0) {
        aY.prepend(ak);
      }
      aY.find("#" + z).remove();
      aY.find("#" + an).remove();
      if (am) {
        aY.css("width", "auto");
      }
    },
    a = function (aY) {
      return CLX.$("#" + aY).text();
    },
    D = function (aY) {
      var a0 = aE[P],
        a1,
        aZ;
      if (!af(a0)) {
        return;
      }
      a0.addClass(H);
      aA();
      aC();
      if (CLX.$("." + A).hasClass(ap)) {
        if (aS()) {
          CLX.$("." + A).text(a(aO));
        } else {
          CLX.$("." + A).text(a(X));
        }
      }
      if (CLX.$("." + ai).hasClass(aM)) {
        if (CLX.$("." + ai).hasClass(c)) {
          ay.positionBelow(a0);
        } else {
          ay.positionAbove(a0);
        }
      } else {
        a1 = a0.children().first();
        if (P === i || P === at) {
          aZ =
            a1.width() + Math.ceil(aU.numericValue(a1, aU.PADDING_RIGHT) / 2);
        }
        if (CLX.$("." + ai).hasClass(c)) {
          ay.positionBelow(a1.length ? a1 : a0, aZ);
        } else {
          ay.positionAbove(a1.length ? a1 : a0, aZ);
        }
      }
      ay.show(aY ? 0 : ad.getEffectsMs());
    },
    ar = function (aY) {
      aA();
      if (ay.isVisible()) {
        h();
      }
      P = aY;
      if (ad.showSortAndGroupPopupOnHover()) {
        au = window.setTimeout(D, aH);
      }
      return true;
    },
    K = function (aY) {
      if (aY !== P) {
        l();
      }
      return true;
    },
    M = function (aY, aZ) {
      P = aY;
      D(true);
      if (aZ) {
        CLX.Hj(aF);
      }
    },
    ag = function (aY, aZ) {
      if (!ad.sortOnHeaderClick()) {
        M(aY, aZ);
        return;
      }
      aA();
      if (ay.isFullyVisible() && P === aY) {
        if (i === P) {
          aW(B, ax === n ? az : n);
        } else {
          if (at === P) {
            p(m === n ? az : n);
          } else {
            aW(false);
          }
        }
      } else {
        M(aY, aZ);
      }
      return true;
    },
    E = function (aY) {
      return ag(aY, true);
    },
    Z = function (aZ, aY) {
      aY.actionKey(function (a0) {
        return E(aZ);
      })
        .click(function (a0) {
          return ag(aZ);
        })
        .hover(
          function (a0) {
            return ar(aZ);
          },
          function (a0) {
            return aQ(aZ);
          }
        )
        .focus(function (a0) {
          return K(aZ);
        });
    },
    ae = function (aY) {
      return aY.indexOf(az) === -1 ? n : az;
    };
  I[g] = aN;
  I[ah] = o;
  I[x] = s;
  I[aG] = aP;
  I[av] = y;
  I[aq] = aw;
  I[S] = j;
  I[R] = L;
  I[Y] = J;
  I[ab] = F;
  I[w] = r;
  N = {
    init: function (aZ) {
      var aY;
      aa = aZ;
      ay = CLX.Fv(aF, null, ad.getGuiUtils().getSortAndGroupPopupPositioner);
      ay.init();
      ay.setHoverCallbacks(aA, l);
      aY = CLX.Hf(h, ao);
      aY.addItem(aq, function () {
        aW(true);
      });
      aY.addItem(S, function () {
        aW(true, n);
      });
      aY.addItem(R, function () {
        aW(true, az);
      });
      aY.addItem(w, function () {
        aW(false);
      });
      aY.addItem(g, function () {
        aW(false, n);
      });
      aY.addItem(ah, function () {
        aW(false, az);
      });
      aY.addItem(x, function () {
        p(n);
      });
      aY.addItem(aG, function () {
        p(az);
      });
      aY.addItem(Y, aD);
      aY.addItem(ab, V);
    },
    bindToTable: function (aY, a1, aZ) {
      var a0;
      W = aY;
      aE = aZ;
      ay.setControlElement(a1);
      for (a0 = 0; a0 < aZ.length; a0 += 1) {
        Z(a0, aZ[a0]);
      }
      return v;
    },
    applySort: function (a2) {
      var a1, a0, aZ, aY;
      if (i >= 0 && (aI.isColVisible(i) || T)) {
        if (B) {
          aY = aI.getColTypes()[i];
          a0 = [];
          a1 = aI.sortAndGroup(a2, i, ax === n, a0);
          if (at >= 0 && aI.isColVisible(at)) {
            for (aZ = 0; aZ < a1.length; aZ += 1) {
              aI.sortRecs(a1[aZ], at, m === n, t, k === n);
            }
          }
        } else {
          aI.sortRecs(a2, i, ax === n, at, m === n, t, k === n);
        }
      } else {
        if (at >= 0 && aI.isColVisible(at)) {
          aI.sortRecs(a2, at, m === n, t, k === n);
        }
      }
      v.setGroups(B ? i : -1, a0, a1, aY);
      if (ad.expandCollapseOnFirstHeaderCell() && !O) {
        if (B) {
          aT();
          W.highlightTableElement(e);
        } else {
          G();
          W.highlightTableElement(e, true);
        }
      }
    },
    setDefaultSort: function () {
      var a0, a1, aZ, aY;
      b();
      aK();
      i = -1;
      at = -1;
      for (aZ = 0; aZ < aE.length; aZ += 1) {
        a0 = aE[aZ].classes();
        if (a0) {
          for (aY = 0; aY < a0.length; aY += 1) {
            a1 = a0[aY];
            if (a1.indexOf(aX) === 0) {
              if (a1.indexOf(aB) === -1 && a1.indexOf(aj) === -1) {
                i = aZ;
                B = a1.indexOf(e) !== -1;
                ax = ae(a1);
                aJ();
              } else {
                if (a1.indexOf(aj) > -1) {
                  t = aZ;
                  k = ae(a1);
                } else {
                  at = aZ;
                  m = ae(a1);
                  aV();
                }
              }
            }
            if (a1.indexOf(q) === 0) {
              O = true;
            }
          }
        }
      }
    },
    setAllowSortOnInvisibleColums: function (aY) {
      T = aY;
    },
    getPriColType: function () {
      return aI.getColType(i);
    },
    getPriSortOrder: function () {
      return ax;
    },
    getSecColType: function () {
      return aI.getColType(at);
    },
    getSecSortOrder: function () {
      return m;
    },
    toggleExpandAllCollapseAll: function (aY) {
      if (aY && CLX.$("#" + z).is(":visible")) {
        CLX.$("#" + z).hide();
        CLX.$("#" + an).show();
      }
      if (!aY && CLX.$("#" + an).is(":visible")) {
        CLX.$("#" + an).hide();
        CLX.$("#" + z).show();
      }
    },
    applyPrimarySort: function (a0, aY, aZ) {
      P = aZ || 0;
      if (aS()) {
        aW(a0, aY);
      } else {
        aW(false, aY);
      }
    },
    applySecondarySort: function (aY, aZ) {
      P = aZ || 0;
      p(aY);
    },
  };
  return N;
};
CLX.Hv = function (a) {
  var l,
    c,
    j,
    b = CLX.Gb,
    e = CLX.H,
    m = a + "pointerId",
    k = "pointerUpSortAndGroupRight",
    i = "pointerUpSortAndGroupLeft",
    d = "horizontalScrollOverflow",
    h = "popup",
    g = function (s, r, q) {
      var n = q,
        p,
        o,
        u,
        t;
      if (s.closest(e.TABLE_SELECTOR).parent().hasClass(d)) {
        p = s.closest(e.TABLE_SELECTOR).parent();
        o = p.position()[b.LEFT];
        u = r;
        if (u < o) {
          t = o - u;
          p.scrollLeft(-t);
          n += t;
        }
      }
      return n;
    },
    f = function (r, s, o, q) {
      var t = q,
        u,
        p,
        v,
        n;
      if (r.closest(e.TABLE_SELECTOR).parent().hasClass(d)) {
        u = r.closest(e.TABLE_SELECTOR).parent();
        p = u.position()[b.LEFT] + u.width();
        v = s + o.width();
        if (v > p) {
          n =
            v +
            b.numericValue(o, b.PADDING_LEFT) +
            b.numericValue(o, b.PADDING_RIGHT) -
            p;
          u.scrollLeft(n);
          t -= n;
        }
      }
      return t;
    };
  l = {
    positionPopup: function (I, C) {
      var n = CLX.$("#" + a),
        r,
        A,
        o,
        B,
        F,
        w,
        D,
        q,
        H,
        s,
        v,
        u,
        E,
        G,
        t,
        z = false,
        p;
      D = n.outerWidth(true);
      w = n.outerHeight(true);
      r = CLX.$(window);
      A = r.width();
      o = r.height();
      B = r.scrollLeft();
      F = r.scrollTop();
      if (I && I.length) {
        if (I.parents("." + h).length) {
          p = I.parents("." + h).offset();
          z = true;
        }
        C = C || 0;
        H = I.offset();
        s = I.outerHeight(true);
        v = H.left;
        u = H.top;
        if (c || j) {
          E = I.closest(e.TR_SELECTOR);
          G = E.width() / 2;
          t = I.position()[b.LEFT];
          if (G - t > 0) {
            v = t;
            n.find("#" + m).removeClass(k);
            n.find("#" + m).addClass(i);
            v = g(E, t, v);
          } else {
            v -=
              D -
              I.width() -
              (b.numericValue(I, b.PADDING_LEFT) +
                b.numericValue(I, b.PADDING_RIGHT));
            n.find("#" + m).removeClass(i);
            n.find("#" + m).addClass(k);
            v = f(E, t, I, v);
            if (z) {
              v -= p.left;
            }
          }
          u += j;
          if (z) {
            u -= p.top;
          }
        } else {
          u += s + C;
          if (u + w > o + F) {
            u = H.top - w - C;
          }
        }
      } else {
        v = (A - D) / 2 + B;
        u = (o - w) / 3 + F;
      }
      A += B;
      o += F;
      if (v + D > A) {
        v = A - D;
      }
      if (u + w > o) {
        u = o - w;
      }
      q = { left: v < 0 ? 0 : v, top: u < 0 ? 0 : u };
      n.css(q);
    },
    setRelativePosition: function (o, n) {
      c = o;
      j = n;
    },
  };
  return l;
};
CLX.Hw = function (b, a) {
  if (CLX.M(b)) {
    return b.apply(null, a);
  }
};
CLX.Hx = function (b) {
  var a = CLX.$("#" + b);
  return a.length ? a.get(0).checked : false;
};
CLX.Hy = function (d, c, a) {
  var b = CLX.$("#" + d);
  if (b.length) {
    b.get(0).checked = c ? true : false;
    if (a) {
      b.change();
    }
  }
};
CLX.Hz = function (a) {
  a.setHours(23);
  a.setMinutes(59);
  a.setSeconds(59);
  a.setMilliseconds(999);
  return a;
};
CLX.Ia = function () {
  var b = "aria-activedescendant",
    e = "aria-busy",
    z = "aria-controls",
    f = "aria-disabled",
    j = "aria-dropeffect",
    r = "aria-expanded",
    i = "aria-grabbed",
    q = "aria-hidden",
    t = "aria-invalid",
    u = "aria-label",
    o = "aria-owns",
    y = "aria-readonly",
    v = "aria-required",
    p = "aria-selected",
    c = "aria-sort",
    h = "aria-valuenow",
    s = "aria-valuetext",
    d = [
      b,
      "aria-atomic",
      "aria-autocomplete",
      e,
      "aria-checked",
      z,
      "aria-describedby",
      f,
      "aria-dropeffect",
      r,
      "aria-flowto",
      i,
      "aria-haspopup",
      q,
      u,
      "aria-labelledby",
      "aria-level",
      "aria-live",
      "aria-multiline",
      "aria-multiselectable",
      "aria-orientation",
      o,
      "aria-posinset",
      "aria-pressed",
      y,
      "aria-relevant",
      "aria-required",
      p,
      "aria-setsize",
      c,
      "aria-valuemax",
      "aria-valuemin",
      h,
      "aria-valuetext",
    ],
    k = CLX.$.fn,
    l = k.hide,
    x = k.show,
    a = k.fadeOut,
    n = k.fadeIn,
    w = k.slideUp,
    g = k.slideDown,
    m = function (A, B) {
      return function () {
        A.ariaHidden(false);
        if (B) {
          B();
          CLX.Bq();
        }
      };
    };
  if (!k.aria) {
    k.aria = function (B) {
      var D, C, E, A;
      if (B) {
        for (C in B) {
          if (B.hasOwnProperty(C)) {
            this.attr(C, B[C]);
          }
        }
        A = this;
      } else {
        A = {};
        for (D = 0; D < d.length; D += 1) {
          C = d[D];
          E = this.attr(C);
          if (E) {
            A[C] = E;
          }
        }
      }
      return A;
    };
    k.ariaActiveDescendant = function (A) {
      return A ? this.attr(b, A) : this.removeAttr(b);
    };
    k.ariaBusy = function (A) {
      return A ? this.attr(e, true) : this.removeAttr(e);
    };
    k.ariaControls = function (A) {
      return A ? this.attr(z, A) : this.removeAttr(z);
    };
    k.ariaDisabled = function (A) {
      return A ? this.attr(f, true) : this.removeAttr(f);
    };
    k.ariaDropEffect = function (A) {
      return A ? this.attr(j, A) : this.removeAttr(j);
    };
    k.ariaExpanded = function (A) {
      return A === undefined ? this.removeAttr(r) : this.attr(r, A);
    };
    k.ariaGrabbed = function (A) {
      return this.attr(i, A);
    };
    k.ariaHidden = function (A) {
      return this.attr(q, A);
    };
    k.ariaInvalid = function (A) {
      return A ? this.attr(t, A) : this.removeAttr(t);
    };
    k.ariaLabel = function (A) {
      return A ? this.attr(u, A) : this.removeAttr(u);
    };
    k.ariaOwns = function (A) {
      return A ? this.attr(o, A) : this.removeAttr(o);
    };
    k.ariaReadOnly = function (A) {
      return A ? this.attr(y, true) : this.removeAttr(y);
    };
    k.ariaRequired = function (A) {
      return this.attr(v, A);
    };
    k.ariaSelected = function (A) {
      return this.attr(p, A);
    };
    k.ariaSort = function (A) {
      return A ? this.attr(c, A) : this.removeAttr(c);
    };
    k.ariaValueNow = function (A) {
      return this.attr(h, A);
    };
    k.ariaValueText = function (A) {
      return this.attr(s, A);
    };
    if (Function.prototype.call) {
      k.hide = function (A, B) {
        this.attr(q, true);
        return l.call(this, A, B);
      };
      k.show = function (A, B) {
        if (A && isFinite(A) && A > 0) {
          x.call(this, A, m(this, B));
        } else {
          x.call(this);
          this.attr(q, false);
          if (B) {
            B();
            CLX.Bq();
          }
        }
        return this;
      };
      k.fadeOut = function (A, B) {
        this.attr(q, true);
        return a.call(this, A, B);
      };
      k.fadeIn = function (A, B) {
        return n.call(this, A, m(this, B));
      };
      k.slideUp = function (A, B) {
        this.attr(q, true);
        return w.call(this, A, B);
      };
      k.slideDown = function (A, B) {
        return g.call(this, A, m(this, B));
      };
    }
  }
};
CLX.Ib = function () {
  var i = "id",
    l = "name",
    b = "for",
    e = "title",
    f = "tabindex",
    h = "readonly",
    g = "disabled",
    c = "checked",
    a = "className",
    d = "role",
    k = /^[A-Za-z]+[A-Za-z0-9_\-\:\.]*$/,
    j = CLX.$.fn;
  if (!j.id) {
    j.id = function (m) {
      return m && k.test(m) ? this.attr(i, m) : this.attr(i);
    };
    j.name = function (n) {
      var m;
      if (n || n === 0) {
        m = this.attr(l, n);
      } else {
        if (arguments.length) {
          m = this.removeAttr(l);
        } else {
          m = this.attr(l);
        }
      }
      return m;
    };
    j.labelFor = function (m) {
      return m && k.test(m) ? this.attr(b, m) : this.attr(b);
    };
    j.title = function (n) {
      var m;
      if (n || n === 0) {
        m = this.attr(e, n);
      } else {
        if (arguments.length) {
          m = this.removeAttr(e);
        } else {
          m = this.attr(e);
        }
      }
      return m;
    };
    j.tabindex = function (m) {
      if (!arguments.length) {
        return this.attr(f);
      }
      if (CLX.Fx(CLX.Gm(m))) {
        return this.attr(f, String(m));
      }
      return this.removeAttr(f);
    };
    j.readOnly = function (m) {
      return m ? this.attr(h, true) : this.removeAttr(h);
    };
    j.disabled = function (m) {
      return m ? this.attr(g, true) : this.removeAttr(g);
    };
    j.isEditable = function () {
      return !this.prop(h) && !this.prop(g);
    };
    j.checked = function (n) {
      var m;
      if (n) {
        m = this.attr(c, true);
      } else {
        if (arguments.length) {
          m = this.removeAttr(c);
        } else {
          m = this.attr(c) ? true : false;
        }
      }
      return m;
    };
    j.classNames = function () {
      return this.prop(a);
    };
    j.classes = function () {
      var m = this.prop(a);
      return m ? m.split(" ") : null;
    };
    j.role = function (m) {
      return m ? this.attr(d, m) : this.attr(d);
    };
    j.generousFullWidth = function () {
      var m = 4;
      return this.outerWidth(true) + m;
    };
  }
};
CLX.Ic = function () {
  var s = CLX.H,
    g = CLX.Ah,
    d = g.TAB,
    i = g.ENTER,
    k = g.SPACE,
    f = g.END,
    n = g.LEFT,
    e = g.UP,
    l = g.RIGHT,
    q = g.DOWN,
    r = g.DELETE,
    m = "maxlength",
    h = CLX.$.fn,
    j = function (t) {
      return t.toLowerCase() !== t.toUpperCase();
    },
    c = function (t) {
      return t.charCode || t.keyCode;
    },
    p = function (v) {
      var t = v.ctrlKey,
        u = v.charCode,
        w = v.keyCode;
      if (!t) {
        if (u === 0) {
          t = (w >= f && w <= q) || w === r;
        }
        if (!t) {
          t = (u || w) < k;
        }
      }
      return t;
    },
    b = function (t) {
      var v = document.selection.createRange().getBookmark(),
        u = t.createTextRange(),
        w = t.createTextRange();
      u.moveToBookmark(v);
      w.collapse(true);
      w.setEndPoint("EndToStart", u);
      return u.text.length;
    },
    o = true,
    a = function (v, u) {
      if (o) {
        var t,
          w = false;
        v.focus(function () {
          t = CLX.$(this).val();
          w = true;
          return true;
        });
        v.change(function () {
          w = false;
          t = "";
          return true;
        });
        v.blur(function () {
          var x;
          if (w) {
            w = false;
            x = CLX.$(this).val();
            if (t !== x) {
              CLX.$(this).trigger("change");
            }
            t = "";
          }
          return true;
        });
      }
      v.bind("paste", null, function (y) {
        var x = CLX.$(this);
        CLX.Av(function () {
          x.val(u(x.val()));
        });
        return true;
      });
      v.keypress(function (C) {
        var E = C.charCode === undefined ? C.keyCode : C.charCode,
          D = String.fromCharCode(E),
          B,
          x,
          A,
          y,
          z,
          F = CLX.$(this).isEditable();
        if (!F && !C.ctrlKey && !C.altKey) {
          return true;
        }
        if (j(D) && !C.ctrlKey && !C.altKey) {
          if (this.setSelectionRange === undefined) {
            window.event.keyCode = u(D).charCodeAt(0);
          } else {
            B = this.selectionStart;
            x = this.selectionEnd;
            A = this.value.length;
            y = Number(CLX.$(this).attr(m));
            z = y && A - (x - B) >= y;
            if (!z) {
              this.value =
                this.value.substr(0, B) + u(D) + this.value.substr(x);
              this.setSelectionRange(B + 1, B + 1);
              return false;
            }
          }
        }
        return true;
      });
    };
  if (!h.actionKey) {
    h.actionKey = function (u, t) {
      this.keydown(function (w) {
        var v = true;
        if (w.keyCode === i || (w.keyCode === k && !t)) {
          v = u.call(w.currentTarget, w);
        }
        return v;
      });
      return this;
    };
    h.press = function (t) {
      this.click(t);
      if (
        !this.is(s.BUTTON_SELECTOR) &&
        !this.is(s.CHECKBOX_SELECTOR) &&
        !this.is(s.RADIO_SELECTOR) &&
        !this.is(".button")
      ) {
        this.actionKey(t);
      }
      return this;
    };
    h.uppercase = function () {
      var t = function (u) {
        return u.toUpperCase();
      };
      a(this, t);
      return this;
    };
    h.lowercase = function () {
      var t = function (u) {
        return u.toLowerCase();
      };
      a(this, t);
      return this;
    };
    h.arrowKey = function (w, t, u, x) {
      var v = {};
      v[e] = w;
      v[q] = t;
      v[n] = u;
      v[l] = x;
      this.keydown(function (z) {
        var y = true,
          A = v[z.keyCode];
        if (A) {
          y = A.call(z.currentTarget, z);
        }
        return y;
      });
      return this;
    };
    if (CLX.Hh()) {
      h.autoTab = function () {
        return this;
      };
    } else {
      h.autoTab = function (u) {
        var t;
        t = this.attr(m);
        if (t && u) {
          this.keypress(function (x) {
            var v = c(x),
              y,
              w = this.value.length;
            if (
              typeof this.selectionStart === "number" &&
              typeof this.selectionEnd === "number"
            ) {
              y = this.selectionEnd - this.selectionStart;
            } else {
              y = b(this);
            }
            if (y > 0) {
              w -= y;
            }
            if (!p(x)) {
              if (w + 1 >= t) {
                CLX.Gw(u);
              }
            } else {
              if (v === d && x.shiftKey) {
                this.select();
              }
            }
            return true;
          });
        }
        return this;
      };
    }
    h.keyFilter = function (t) {
      if (t) {
        this.keypress(function (x) {
          var v = true,
            w = c(x),
            u;
          if (!p(x)) {
            u = String.fromCharCode(w);
            v = t.test(u);
            if (!v && u === "," && t.test(".")) {
              CLX.$(this).insertAtCaret(".");
            }
          }
          return v;
        });
      }
      return this;
    };
    h.insertAtCaret = function (t) {
      return this.each(function (u) {
        var w, v, x, y;
        if (document.selection) {
          this.focus();
          w = document.selection.createRange();
          w.text = t;
          this.focus();
        } else {
          if (this.selectionStart || this.selectionStart === 0) {
            v = this.selectionStart;
            x = this.selectionEnd;
            y = this.scrollTop;
            this.value =
              this.value.substring(0, v) +
              t +
              this.value.substring(x, this.value.length);
            this.focus();
            this.selectionStart = v + t.length;
            this.selectionEnd = v + t.length;
            this.scrollTop = y;
          } else {
            this.value += t;
            this.focus();
          }
        }
      });
    };
    h.blockChars = function (t) {
      if (t) {
        this.on("input", function (x) {
          var u = CLX.$(this),
            w = u.val(),
            v;
          if (w) {
            v = w.replace(t, "");
            if (w !== v) {
              u.val(v);
            }
          }
          return true;
        });
      }
      return this;
    };
    h.limitLineCount = function (u) {
      var t = Number(u) || 0;
      if (t && t > 0) {
        this.keypress(function (y) {
          var x = c(y),
            v = true,
            w;
          if (x === i) {
            w = (CLX.$(this).val() || "").split(CLX.Gz).length;
            v = w < t;
          }
          return v;
        });
      }
      return this;
    };
  }
};
CLX.Id = function FormatFavouritesFactory() {
  var O = {},
    y = CLX.Ep(),
    L = "mobile_favo_customer_care_logout",
    D = "desktop_favo_customer_care_messages",
    W = "desktop_favo_customer_care_documents",
    u = "desktop_favo_customer_care_account_statements",
    A = "mobile_favo_customer_care_notices",
    n = "desktop_favo_payment_ch_assistant",
    au = "mobile_favo_payment_uk_faster",
    aC = "mobile_favo_payment_uk_chaps",
    al = "mobile_favo_payment_uk_account_transfer",
    am = "mobile_favo_payment_uk_international",
    k = "desktop_favo_account_overview",
    t = "desktop_favo_forecast_overview",
    v = "desktop_favo_debit_card_overview",
    ao = "desktop_favo_loans_and_mortgages_overview",
    K = "desktop_favo_fixed_term_deposit_overview",
    ak = "desktop_favo_standing_orders_overview",
    p = "mobile_customer_care_change_password",
    f = "mobile_customer_care_deactivation",
    M = "mobile_customer_care_settings",
    o = "desktop_favo_customer_care_messages_edit",
    aB = "desktop_favo_customer_care_document_request",
    s = "desktop_favo_brokerage_orders_overview",
    ax = "desktop_favo_forex_orders_overview",
    x = "desktop_favo_trusted_beneficiaries",
    b = "desktop_favo_trusted_beneficiaries_overview",
    Q = "desktop_favo_brokerage_buy",
    G = "desktop_favo_brokerage_sell",
    J = "desktop_favo_payment_account_transfer",
    Y = "desktop_favo_collective_buy",
    ai = "desktop_favo_collective_sell",
    X = "desktop_favo_payment_account_transfer_standing_order",
    w = "desktop_favo_payment_enter_balance",
    T = "desktop_favo_payment_templates_overview",
    ay = "desktop_favo_ebill_accounts_overview",
    g = "desktop_favo_ebills_new_account",
    az = "desktop_favo_ebills_subscribe_account",
    at = "desktop_favo_ebills_account_detail",
    N = "desktop_favo_ebills_filter_ebills",
    m = "desktop_favo_ebills_filter_ebillers",
    Z = "desktop_favo_payment_ch_assistant_quick_payment",
    S = "desktop_favo_payment_ch_assistant_forms_of_payment",
    B = "desktop_favo_payment_ch_slip_forms_of_payment",
    d = "desktop_favo_payment_overview",
    l = "desktop_favo_payment_bulk",
    an = "desktop_favo_payment_bulk_detail_summary",
    ad = "desktop_favo_payment_bulk_detail_payments",
    i = "desktop_favo_payment_scanner",
    ac = "desktop_favo_finance_overview",
    P = "desktop_favo_portfolio_overview",
    a = "desktop_favo_portfolio_overview_transactions",
    c = "desktop_favo_reporting_overview",
    ap = "desktop_favo_reporting_request",
    ag = "desktop_favo_alerting_overview",
    U = "desktop_favo_portfolio_positions",
    e = "desktop_favo_portfolio_transactions",
    C = "desktop_favo_portfolio_performance",
    aA = "desktop_favo_portfolio_performance_detailed",
    aw = "desktop_favo_portfolio_performance_relative",
    aj = "desktop_favo_portfolio_performance_absolute",
    R = "desktop_favo_portfolio_maturity",
    I = "desktop_favo_portfolio_groups_details",
    ab = "desktop_favo_portfolio_groups_portfolios",
    ah = "desktop_favo_portfolio_groups_positions",
    aq = "desktop_favo_portfolio_groups_customers",
    F = "desktop_favo_file_exchange_overview",
    H = "desktop_favo_file_exchange_download",
    ar = "desktop_favo_profile_overview",
    ae = "desktop_favo_credit_cards_overview",
    av = "desktop_favo_credit_cards_cards",
    E = "desktop_favo_credit_cards_invoices",
    aE = "desktop_favo_credit_cards_transactions",
    V = "desktop_favo_portfolio_position_detail",
    r = "desktop_favo_payment_direct_debit_overview",
    af = "desktop_favo_account_detail",
    aD = "desktop_favo_portfolio_groups_overview",
    z = "desktop_favo_portfolio_groups_overview_table",
    aa = "desktop_favo_portfolio_groups_overview_filter",
    j = "desktop_favo_budget_overview",
    h = "desktop_favo_payment_debit_mandate_overview",
    q = function (aH, aF) {
      var aG;
      if (y.alias(aH)) {
        aG = y.alias(aH);
      } else {
        if (
          aF &&
          aF !== CLX.Dc.SPEC &&
          aH.getIban &&
          aH.getIban() &&
          CLX.Ee(aH.getIban(), false)
        ) {
          aG = y.formatIBAN(aH.getIban());
        } else {
          aG = aH.getNumber && aH.getNumber();
        }
      }
      return aG;
    };
  O.getFavouriteIconClass = function (aI) {
    var aF,
      aH = CLX.Gd,
      aG = CLX.Ho;
    if (aI.isHidden()) {
      aF = "hiddenFavourite";
    } else {
      switch (aI.getModuleComponent()) {
        case aH.FINANCES_OVERVIEW:
          aF = "sNavItemFinances";
          break;
        case aH.CURRENCY_ACCOUNT:
          aF = "sNavItemCurrencyAccounts";
          break;
        case aH.DEBIT_CARDS:
          aF = "sNavItemDebitCards";
          break;
        case aH.LOAN_AND_MORTGAGE:
          aF = "sNavItemLoansAndMortgages";
          break;
        case aH.FIXED_TERM_DEPOSIT:
          aF = "sNavItemFixedTermDeposits";
          break;
        case aH.INVESTMENT_PORTFOLIO:
          aF = "sNavItemInvestmentPortfolios";
          break;
        case aH.PORTFOLIO_GROUPS:
          aF = "sNavItemPortfolioGroups ";
          break;
        case aH.BULK_PAYMENT:
          aF = "sNavItemBulkPayment";
          break;
        case aH.ENTER_TRANSFER:
          aF = "sNavItemEnterTransfer";
          break;
        case aH.ENTER_BALANCE_MANAGER:
          aF = "sNavItemEnterBalanceManager";
          break;
        case aH.PAYMENT_SCANNER:
          aF = "sNavItemPaymentScanner";
          break;
        case aH.PAYMENT_STATUS:
          switch (aI.getTransitionState()) {
            case aG.PAYMENT_OVERVIEW:
              aF = "sNavItemPaymentStatus";
              break;
            default:
              aF = "sNavItemPaymentStatus";
              break;
          }
          break;
        case aH.SIMPLE_TEMPLATE:
          aF = "sNavItemSimpleTemplate";
          break;
        case aH.STANDING_ORDER:
          aF = "sNavItemStandingOrder";
          break;
        case aH.PAYNET:
          aF = "sNavItemEBilling";
          break;
        case aH.SINGLE_PAYMENT:
          switch (aI.getTransitionState()) {
            case aG.PAYMENT_ASSISTANT:
              aF = "sNavItemSinglePayment";
              break;
            default:
              aF = "sNavItemSinglePayment";
              break;
          }
          break;
        case aH.MESSAGE:
          aF = "sNavItemMessage";
          break;
        case aH.STATEMENTS:
          aF = "sNavItemStatements";
          break;
        case aH.ACCOUNT_STATEMENTS:
          aF = "sNavItemStatements";
          break;
        case aH.REPORTING:
          aF = "sNavItemReporting";
          break;
        case aH.TRUSTED_BENEFICIARIES:
          aF = "sNavItemTrustedBeneficiaries";
          break;
        case aH.ALERTING:
          aF = "sNavItemAlerting";
          break;
        case aH.BROKERAGE_ORDERS:
          aF = "sNavItemBrokerageOrders";
          break;
        case aH.BROKERAGE_SELL:
          aF = "sNavItemBrokerageSell";
          break;
        case aH.BROKERAGE_BUY:
          aF = "sNavItemBrokerageBuy";
          break;
        case aH.COLLECTIVE_SELL:
          aF = "sNavItemCollectiveSell";
          break;
        case aH.COLLECTIVE_BUY:
          aF = "sNavItemCollectiveBuy";
          break;
        case aH.FILE_EXCHANGE:
          aF = "sNavItemFileExchange";
          break;
        case aH.PROFILE:
          aF = "sNavItemProfile";
          break;
        case aH.CREDIT_CARDS:
          aF = "sNavItemCreditCards";
          break;
        case aH.DIRECT_DEBIT:
          aF = "sNavItemDirectDebit";
          break;
        case aH.BUDGET_ENTRIES:
          aF = "sNavItemBudgetEntries ";
          break;
        case aH.DEBIT_MANDATE:
          aF = "sNavItemDebitMandate";
          break;
        default:
          break;
      }
    }
    return aF;
  };
  O.getFavouriteIconLabelFormatted = function (aJ, aG, aK, aN) {
    var aI,
      aM,
      aH = 400,
      aL = CLX.Gd,
      aF = CLX.Ho;
    if (aJ.isHidden()) {
      aI = "";
    } else {
      if (aG) {
        aH = aG;
      }
      switch (aJ.getTransitionState()) {
        case aF.LOGOUT:
          aM = CLX.$("#" + L).text();
          break;
        case aF.CUSTOMER_CARE_MESSAGES:
          aM = CLX.$("#" + D).text();
          break;
        case aF.CUSTOMER_CARE_DOCUMENTS:
          if (aJ.rec.FAVO_MODULE_COMPONENT === CLX.Gd.ACCOUNT_STATEMENTS) {
            aM = CLX.$("#" + u).text();
          } else {
            aM = CLX.$("#" + W).text();
          }
          break;
        case aF.CUSTOMER_CARE_NOTICES:
          aM = CLX.$("#" + A).text();
          break;
        case aF.PAYMENT_ASSISTANT:
          switch (aJ.getModuleComponent()) {
            case aL.SIMPLE_TEMPLATE:
              aM = CLX.$("#" + T).text();
              break;
            case aL.STANDING_ORDER:
              aM = CLX.$("#" + ak).text();
              break;
            default:
              aM = CLX.$("#" + n).text();
              break;
          }
          break;
        case aF.TRUSTED_BENEFICIARIES:
          aM = CLX.$("#" + x).text();
          break;
        case aF.UK_FASTER_PAYMENT:
          aM = CLX.$("#" + au).text();
          break;
        case aF.UK_CHAPS_PAYMENT:
          aM = CLX.$("#" + aC).text();
          break;
        case aF.UK_ACCOUNT_TRANSFER:
          aM = CLX.$("#" + al).text();
          break;
        case aF.UK_INTERNATIONAL_PAYMENT:
          aM = CLX.$("#" + am).text();
          break;
        case aF.ACCOUNT_OVERVIEW:
          aM = CLX.$("#" + k).text();
          break;
        case aF.DEBIT_CARDS_OVERVIEW:
          aM = CLX.$("#" + v).text();
          break;
        case aF.LOANS_AND_MORTGAGES_OVERVIEW:
          aM = CLX.$("#" + ao).text();
          break;
        case aF.FIXED_TERM_DEPOSIT_OVERVIEW:
          aM = CLX.$("#" + K).text();
          break;
        case aF.PAYMENT_STANDING_ORDERS:
          aM = CLX.$("#" + ak).text();
          break;
        case aF.CUSTOMER_CARE_CHANGE_PASSWORD:
          aM = CLX.$("#" + p).text();
          break;
        case aF.CUSTOMER_CARE_DEACTIVATION:
          aM = CLX.$("#" + f).text();
          break;
        case aF.CUSTOMER_CARE_SETTINGS:
          aM = CLX.$("#" + M).text();
          break;
        case aF.CUSTOMER_CARE_MESSAGE_EDIT:
          aM = CLX.$("#" + o).text();
          break;
        case aF.CUSTOMER_CARE_DOCUMENT_REQUEST:
          aM = CLX.$("#" + aB).text();
          break;
        case aF.BROKERAGE_ORDERS_OVERVIEW:
          aM = CLX.$("#" + s).text();
          break;
        case aF.SECURITY_LISTING_SEARCH:
          aM = CLX.$("#" + Q).text();
          break;
        case aF.BROKERAGE_POSITION_LIST:
          aM = CLX.$("#" + G).text();
          break;
        case aF.COLLECTIVE_BUY_EAM:
          aM = CLX.$("#" + Y).text();
          break;
        case aF.COLLECTIVE_SELL_EAM:
          aM = CLX.$("#" + ai).text();
          break;
        case aF.FOREX_ORDERS_OVERVIEW:
          aM = CLX.$("#" + ax).text();
          break;
        case aF.ACCOUNT_TRANSFER:
          aM = CLX.$("#" + J).text();
          break;
        case aF.ACCOUNT_TRANSFER_STANDING_ORDER:
          aM = CLX.$("#" + X).text();
          break;
        case aF.ENTER_BALANCE:
          aM = CLX.$("#" + w).text();
          break;
        case aF.PAYMENT_TEMPLATE_OVERVIEW:
        case aF.PAYMENT_TEMPLATE_DETAIL:
          aM = CLX.$("#" + T).text();
          break;
        case aF.PAYMENT_E_BILL_ACCOUNTS_OVERVIEW:
          aM = CLX.$("#" + ay).text();
          break;
        case aF.PAYMENT_E_BILL_NEW_ACCOUNT:
          aM = CLX.$("#" + g).text();
          break;
        case aF.PAYMENT_E_BILL_SUBSCRIBE_ACCOUNT:
          aM = CLX.$("#" + az).text();
          break;
        case aF.PAYMENT_OVERVIEW:
          aM = CLX.$("#" + d).text();
          break;
        case aF.PAYMENT_BULK:
          aM = CLX.$("#" + l).text();
          break;
        case aF.PAYMENT_SCANNER:
          aM = CLX.$("#" + i).text();
          break;
        case aF.FINANCES_OVERVIEW:
          aM = CLX.$("#" + ac).text();
          break;
        case aF.PORTFOLIO_OVERVIEW:
          aM = CLX.$("#" + P).text();
          break;
        case aF.PORTFOLIO_OVERVIEW_TRANSACTIONS:
          aM = CLX.$("#" + a).text();
          break;
        case aF.REPORTING_OVERVIEW:
          aM = CLX.$("#" + c).text();
          break;
        case aF.REPORTING_REQUEST:
          aM = CLX.$("#" + ap).text();
          break;
        case aF.ALERTING_OVERVIEW:
          aM = CLX.$("#" + ag).text();
          break;
        case aF.FILE_EXCHANGE_OVERVIEW:
          aM = CLX.$("#" + F).text();
          break;
        case aF.FILE_EXCHANGE_DOWNLOAD:
          aM = CLX.$("#" + H).text();
          break;
        case aF.PROFILE_OVERVIEW:
          aM = CLX.$("#" + ar).text();
          break;
        case aF.CREDIT_CARDS_OVERVIEW:
        case aF.CREDIT_CARDS_INVOICES:
          aM = CLX.$("#" + ae).text();
          break;
        case aF.PAYMENT_DIRECT_DEBIT_OVERVIEW:
          aM = CLX.$("#" + r).text();
          break;
        case aF.PORTFOLIO_GROUPS_OVERVIEW:
          aM = CLX.$("#" + aD).text();
          break;
        case aF.PORTFOLIO_GROUPS_OVERVIEW_TABLE:
          aM = CLX.$("#" + z).text();
          break;
        case aF.PORTFOLIO_GROUPS_OVERVIEW_FILTER:
          aM = CLX.$("#" + aa).text();
          break;
        case aF.BUDGET_OVERVIEW:
          aM = CLX.$("#" + j).text();
          break;
        case aF.PAYMENT_DEBIT_MANDATE_OVERVIEW:
          aM = CLX.$("#" + h).text();
          break;
        case aF.FORECAST_OVERVIEW:
          if (aJ.getProdId && aJ.getProdId()) {
            aM = q(aJ, aN);
          } else {
            aM = CLX.$("#" + t).text();
          }
          break;
        case aF.ACCOUNT_TRX_LIST:
        case aF.ACCOUNT_DETAIL:
          if (aJ.getProdId && aJ.getProdId()) {
            aM = q(aJ, aN);
          }
          break;
        case aF.PORTFOLIO_TRANSACTIONS:
        case aF.PORTFOLIO_POSITIONS:
        case aF.PORTFOLIO_POSITION_TRANSACTIONS:
        case aF.PORTFOLIO_MATURITY:
          if (aJ.getProdId && aJ.getProdId()) {
            aM = y.aliasOrNumber(aJ);
          }
          break;
        default:
          break;
      }
      if (!aM) {
        aM = aJ.getIconLabel();
      }
      if (!aK) {
        aI = aM;
      } else {
        switch (aJ.getModuleComponent()) {
          case aL.CURRENCY_ACCOUNT:
            switch (aJ.getTransitionState()) {
              case aF.CUSTODY_ACCOUNT_POS_DETAIL:
              case aF.CUSTODY_ACCOUNT_SECU_DETAIL:
                aI = aK.formatString(aM, aH, -1);
                break;
              default:
                aI = aK.formatString(aM, aH, 1);
                break;
            }
            break;
          case aL.INVESTMENT_PORTFOLIO:
            aI = aK.formatString(aM, aH, 1);
            break;
          default:
            aI = aK.formatString(aM, aH, 0);
            break;
        }
      }
    }
    return aI;
  };
  O.getFavouriteLine2IconLabelFormatted = function (aI) {
    var aH = "",
      aG = CLX.Ho,
      aF = CLX.Gd;
    if (aI.isHidden()) {
      aH = "";
    } else {
      switch (aI.getTransitionState()) {
        case aG.PORTFOLIO_POSITIONS:
          aH = CLX.$("#" + U).text() + " / " + aI.getIconLabel2();
          break;
        case aG.PORTFOLIO_TRANSACTIONS:
          aH = CLX.$("#" + e).text() + " / " + aI.getIconLabel2();
          break;
        case aG.PERFORMANCE_DETAILED:
          aH = CLX.$("#" + C).text() + " / " + CLX.$("#" + aA).text();
          break;
        case aG.TRUSTED_BENEFICIARIES:
          aH = CLX.$("#" + b).text();
          break;
        case aG.PERFORMANCE_RELATIVE:
          aH = CLX.$("#" + C).text() + " / " + CLX.$("#" + aw).text();
          break;
        case aG.PERFORMANCE_ABSOLUTE:
          aH = CLX.$("#" + C).text() + " / " + CLX.$("#" + aj).text();
          break;
        case aG.PORTFOLIO_MATURITY:
          aH = CLX.$("#" + R).text() + " / " + aI.getIconLabel2();
          break;
        case aG.PORTFOLIO_GROUPS_PORTFOLIOS:
          aH = CLX.$("#" + ab).text();
          break;
        case aG.PORTFOLIO_GROUPS_DETAILS:
          aH = CLX.$("#" + I).text();
          break;
        case aG.PORTFOLIO_GROUPS_POSITIONS:
          aH = CLX.$("#" + ah).text();
          break;
        case aG.PORTFOLIO_GROUPS_CUSTOMERS:
          aH = CLX.$("#" + aq).text();
          break;
        case aG.ACCOUNT_OVERVIEW:
        case aG.FORECAST_OVERVIEW:
        case aG.FINANCES_OVERVIEW:
        case aG.CUSTOMER_CARE_MESSAGES:
        case aG.CUSTOMER_CARE_DOCUMENTS:
        case aG.PORTFOLIO_OVERVIEW:
        case aG.PORTFOLIO_DETAIL:
        case aG.PORTFOLIO_OVERVIEW_TRANSACTIONS:
        case aG.ALERTING_OVERVIEW:
        case aG.PAYMENT_BULK:
        case aG.REPORTING_OVERVIEW:
        case aG.PAYMENT_OVERVIEW:
        case aG.PAYMENT_STANDING_ORDERS:
        case aG.BROKERAGE_ORDERS_OVERVIEW:
        case aG.ACCOUNT_TRX_LIST:
        case aG.FILE_EXCHANGE_OVERVIEW:
        case aG.PAYMENT_DIRECT_DEBIT_OVERVIEW:
        case aG.PAYMENT_DEBIT_MANDATE_OVERVIEW:
        case aG.PAYMENT_TEMPLATE_OVERVIEW:
        case aG.PAYMENT_TEMPLATE_DETAIL:
        case aG.BUDGET_OVERVIEW:
        case aG.DEBIT_CARDS_OVERVIEW:
        case aG.FIXED_TERM_DEPOSIT_OVERVIEW:
        case aG.LOANS_AND_MORTGAGES_OVERVIEW:
          aH = aI.getIconLabel2();
          break;
        case aG.PAYMENT_E_BILLS_LIST:
          aH = CLX.$("#" + N).text() + " / " + aI.getIconLabel2();
          break;
        case aG.PAYMENT_E_BILLERS_LIST:
          aH = CLX.$("#" + m).text() + " / " + aI.getIconLabel2();
          break;
        case aG.PAYMENT_E_BILL_ACCOUNT_DETAIL:
          aH = CLX.$("#" + at).text();
          break;
        case aG.PAYMENT_ASSISTANT:
          switch (aI.getModuleComponent()) {
            case aF.SIMPLE_TEMPLATE:
              aH = aI.getIconLabel2();
              break;
            case aF.STANDING_ORDER:
              aH = aI.getIconLabel2();
              break;
            default:
              switch (aI.getIconLabel2()) {
                case "quick":
                  aH = CLX.$("#" + Z).text();
                  break;
                case "fop":
                  aH = CLX.$("#" + S).text();
                  break;
                case "slip":
                  aH = CLX.$("#" + B).text();
                  break;
                default:
                  break;
              }
              break;
          }
          break;
        case aG.PAYMENT_BULK_DETAIL_SUMMARY:
          aH = CLX.$("#" + an).text();
          break;
        case aG.PAYMENT_BULK_DETAIL_PAYMENTS:
          aH = CLX.$("#" + ad).text();
          break;
        case aG.PORTFOLIO_POSITION_TRANSACTIONS:
          switch (aI.getIconLabel2()) {
            case "transactions":
              aH = CLX.$("#" + aE).text();
              break;
            default:
              aH = aI.getIconLabel2();
              break;
          }
          break;
        case aG.CREDIT_CARDS_OVERVIEW:
        case aG.CREDIT_CARDS_TRANSACTIONS:
        case aG.CREDIT_CARDS_INVOICES:
        case aG.CREDIT_CARDS_DETAILS:
        case aG.PORTFOLIO_POSITION_DETAIL:
        case aG.ACCOUNT_DETAIL:
          switch (aI.getIconLabel2()) {
            case "cards":
              aH = CLX.$("#" + av).text();
              break;
            case "invoices":
              aH = CLX.$("#" + E).text();
              break;
            case "transactions":
              aH = CLX.$("#" + aE).text();
              break;
            case "details":
              aH = CLX.$("#" + V).text();
              break;
            case "account_details":
              aH = CLX.$("#" + af).text();
              break;
            default:
              break;
          }
          break;
        default:
          aH = "";
          break;
      }
    }
    if (CLX.B(aH)) {
      aH = aH.join("");
    }
    return aH;
  };
  return O;
};
CLX.Ie = {
  MOVED_PERMANENTLY: 301,
  MOVED_TEMPORARILY: 302,
  SEE_OTHER: 303,
  BAD_REQUEST: 400,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};
CLX.If = function (a, b, c) {
  return CLX.Hs(CLX.$("#" + a), b, c);
};
CLX.Ig = function (a) {
  var b,
    c = function () {
      return CLX.$("#" + a);
    };
  b = {
    init: function (d) {
      c().change(d);
    },
    setChecked: function (d) {
      CLX.Hy(a, d);
    },
    isChecked: function () {
      return CLX.Hx(a);
    },
    getInputValue: function () {
      return CLX.Hx(a);
    },
  };
  return b;
};
CLX.Ih = function (w, b) {
  var i,
    h = -110,
    g = "Function",
    t = CLX.Gq,
    l = t.BUTTON,
    p = b + l,
    f = "reportType",
    a = "contextPopupMenuContainer",
    r = b + "pointer",
    m = b + "pointer-below",
    j = CLX.Gu(w.getGuiUtils()),
    y = function () {
      return CLX.Ff(b);
    },
    q = CLX.Fv(b, p, y),
    x = function () {
      return CLX.$("#" + p);
    },
    u = function () {
      var z = x();
      CLX.Gc.addActive(z);
    },
    d = function () {
      var z = x();
      CLX.Gc.removeActive(z);
    },
    s = function () {
      q.hide();
    },
    c = function (z) {
      return b + g + z;
    },
    o = function (z) {
      return CLX.$("#" + c(z));
    },
    e = function () {
      var z = {};
      z.page = CLX.Hp.PERSONAL_SETTINGS;
      z.transition = CLX.Hq.TRADING_SETTINGS;
      j.quickLink(CLX.Gd.PERSONAL_SETTINGS, z);
    },
    n = function () {
      var z = {};
      z.page = CLX.Hp.PERSONAL_SETTINGS;
      z.transition = CLX.Hq.FINANCES_SETTINGS;
      j.quickLink(CLX.Gd.PERSONAL_SETTINGS, z);
    },
    v = function () {
      var z = {};
      z[f] = CLX.Hk.STANDING_ORDERS;
      j.quickLink(CLX.Gd.REPORTING, z);
    },
    k = function () {
      if (q.isVisible()) {
        s();
      } else {
        i.show();
      }
    };
  i = {
    init: function (A, z) {
      q.init();
      q.setPreShowCallback(u);
      q.setPostHideCallback(d);
      x().press(k);
      o(CLX.Hm.EXPORT_PDF).press(function () {
        s();
        A(CLX.Hn.PDF);
      });
      o(CLX.Hm.EXPORT_XLS).press(function () {
        s();
        A(CLX.Hn.CSV);
      });
      o(CLX.Hm.EDIT_PREF_TRADING).press(function () {
        s();
        e();
      });
      o(CLX.Hm.EDIT_PREF_FINANCES).press(function () {
        s();
        n();
      });
      o(CLX.Hm.MANUAL_STANDING_ORDER_REPORT).press(function () {
        s();
        v();
      });
      o(CLX.Hm.REFRESH).press(function () {
        s();
        z();
      });
      CLX.Hl()
        .setCss(CLX.Hd.POPUP_DIALOG_SMALL)
        .setToggle(true)
        .setTitle("Title")
        .setIcon(CLX.D.CONTEXT_HEADING_ICON)
        .setButton(CLX.El({ id: b + "Button" }))
        .setPosition(CLX.Fb.SOUTH_RIGHT)
        .build();
    },
    show: function () {
      var B = x(),
        G = q.getOverlay(),
        E = B.offset().top,
        F = B.outerHeight(true),
        H = G.outerHeight(true),
        A = CLX.$(window).scrollTop(),
        C = CLX.$(window).height(),
        I = CLX.$(".mastheadPanel").outerHeight(true),
        z = CLX.$(".mastheadPanel").offset().top,
        D = E + H + F;
      if (D > A + C && E - H > I + z) {
        q.positionAbove(B, h);
        CLX.$("." + a)
          .css("left", "auto")
          .css("right", "-5px")
          .css("top", -H + "px");
        CLX.$("#" + r).hide();
        CLX.$("#" + m).show();
      } else {
        q.positionBelow(B, h);
        CLX.$("." + a)
          .css("left", "auto")
          .css("right", "0px")
          .css("top", "45px");
        CLX.$("#" + m).hide();
        CLX.$("#" + r).show();
      }
      q.show();
      CLX.$(".headingRegion").css("position", "relative");
    },
    hide: function () {
      s();
    },
    getShowHideButtonId: function () {
      return c(CLX.Hm.SHOW_HIDE_COLUMNS);
    },
    setButtonId: function (z) {
      p = z;
    },
  };
  return i;
};
CLX.Ii = function (t, w, s, c, b) {
  var e,
    u,
    r,
    p,
    h,
    j,
    o = false,
    a = false,
    f = true,
    d = false,
    k,
    l = s.getLocaleFormat(),
    g,
    q = function (x) {
      CLX.Gc.addHover(r);
      CLX.Gc.addHover(p);
    },
    m = function (x) {
      CLX.Gc.removeHover(r);
      CLX.Gc.removeHover(p);
    },
    v = function (x) {
      return l.parseDateString(x);
    },
    i = function (x) {
      return x ? l.formatInputDate(x) : "";
    },
    n = function () {
      if (e.isEnabled() || d) {
        if (g) {
          g();
        }
        if (c.isVisible()) {
          c.hide();
        } else {
          c.setWeekendEnabled(o);
          c.setLastDayOfMonthOnly(a);
          c.setCurrentAlwaysEnabled(f);
          c.setDateRange(h, j, e.getDate());
          c.attachToField(t, w, e.setDateForUser).slideDown(
            k,
            c.setFocusOnFirstPulldown
          );
        }
      }
      return false;
    };
  e = {
    init: function (z, x, y, A) {
      k = z;
      o = y;
      a = A;
      u = CLX.Ht(t, v, i);
      u.init(x, true);
      r = CLX.$("#" + w);
      p = CLX.$("#" + t);
      r.press(n);
      r.hover(q, m);
      p.hover(q, m);
    },
    focus: function () {
      p.focus();
    },
    setDate: function (x) {
      if (CLX.Cn(x)) {
        x = new Date(x);
      }
      if (x) {
        if (b) {
          x = CLX.Hz(x);
        }
        if (h && x.getTime() < h.getTime()) {
          x = h;
        }
        if (j && x.getTime() > j.getTime()) {
          x = j;
        }
      }
      u.setValue(x);
    },
    setCurrentAlwaysEnabled: function (x) {
      f = x;
    },
    setHolidayDates: function (x) {
      c.setHolidayDates(x);
    },
    setDateForUser: function (x) {
      u.setValueForUser(x);
    },
    getDate: function () {
      return u.getValue();
    },
    getDateMs: function () {
      var x = e.getDate();
      return x ? x.getTime() : undefined;
    },
    getFormattedDate: function () {
      return u.getFormattedValue();
    },
    getInputValue: function () {
      return u.getInputValue();
    },
    setWeekendEnabled: function (x) {
      o = x;
    },
    setLastDayOfMonthOnly: function (x) {
      a = x;
    },
    setMinDate: function (x) {
      if (CLX.Cn(x)) {
        x = new Date(x);
      }
      h = x;
    },
    setMaxDate: function (x) {
      if (CLX.Cn(x)) {
        x = new Date(x);
      }
      j = x;
    },
    setEnabled: function (x) {
      CLX.Gk(t, x);
    },
    isEnabled: function () {
      return CLX.$("#" + t).isEditable();
    },
    setToggleCallback: function (x) {
      g = x;
    },
    setDatePickerEnableOverride: function (x) {
      d = x;
    },
  };
  return e;
};
CLX.Ij = function () {
  var f,
    c,
    e = function () {
      if (c === undefined) {
        c = CLX.By().get(CLX.Bw.SHORT_MONTH_NAMES_IN_DATEPICKER);
      }
      return c;
    },
    k,
    d = function () {
      if (!k) {
        k = CLX.Df();
      }
      return k;
    },
    l,
    b = function () {
      if (!l) {
        l = CLX.Ep();
      }
      return l;
    },
    h = {
      formatTime: function () {
        return CLX.Hw(d().formatTime, arguments);
      },
      formatMonth: function () {
        return CLX.Hw(d().formatMonthName, arguments);
      },
      formatYear: function () {
        return CLX.Hw(d().formatYear, arguments);
      },
      formatNumericDate: function () {
        return CLX.Hw(d().formatNumericDate, arguments);
      },
      getFullMonthNames: function () {
        return CLX.Hw(d().getFullMonthNames, arguments);
      },
      getFullMonthName: function () {
        return CLX.Hw(d().getFullMonthName, arguments);
      },
      getShortMonthNames: function () {
        return CLX.Hw(d().getShortMonthNames, arguments);
      },
      getShortMonthName: function () {
        return CLX.Hw(d().getShortMonthName, arguments);
      },
      getShortDayNames: function () {
        return CLX.Hw(d().getShortDayNames, arguments);
      },
      getLocaleDecimalSeparator: function () {
        return CLX.Hw(d().getDecimalSeparator, arguments);
      },
      formatDate: function () {
        return CLX.Hw(d().formatDate, arguments);
      },
      formatInputDate: function () {
        return CLX.Hw(d().formatInputDate, arguments);
      },
      formatDateTime: function () {
        return CLX.Hw(d().formatDateTime, arguments);
      },
      formatNumericDateTime: function () {
        return CLX.Hw(d().formatNumericDateTime, arguments);
      },
      formatNumericDateToken: function () {
        return CLX.Hw(d().formatNumericDateToken, arguments);
      },
      formatNumber: function () {
        return CLX.Hw(d().formatNumber, arguments);
      },
      formatQuantity: function () {
        return CLX.Hw(d().formatNumber, arguments);
      },
      reformatNumberString: function () {
        return CLX.Hw(d().reformatNumberString, arguments);
      },
      getAmountCharFilter: function () {
        return CLX.Hw(d().getNumberCharFilter, arguments);
      },
      parseNumber: function () {
        return CLX.Hw(d().parseNumber, arguments);
      },
      parseDateString: function () {
        return CLX.Hw(d().parseDate, arguments);
      },
      parseTimeString: function () {
        return CLX.Hw(d().parseTime, arguments);
      },
      isNumber: function () {
        return CLX.Hw(d().isNumber, arguments);
      },
      removeGroupingSeparator: function () {
        return CLX.Hw(d().removeGroupingSeparator, arguments);
      },
    },
    a = 1000 * 60,
    i = CLX.Cb,
    g = /&(?:nbsp|amp);|<br\s*\/?>|<nobr>|<span[ >]|<div[ >]|<input[ >]|<a[ >]/i,
    j = function (m, n) {
      var o;
      if (m) {
        o = new Date(m);
        if (n) {
          m += n;
        }
        m += o.getTimezoneOffset() * a;
      }
      return m;
    };
  f = {
    getLocaleFormat: function () {
      return h;
    },
    displayValue: function (o, n) {
      var m = true;
      if (!n) {
        n = i;
      } else {
        m = g.test(n);
      }
      if (m) {
        o.html(n);
      } else {
        if (o.is("textarea")) {
          o.val(n);
          o.text(n);
        } else {
          if (o.text() !== n) {
            o.text(n);
          }
        }
      }
    },
    parseDateInput: function (n) {
      var o = CLX.$("#" + n),
        m = d().parseDate(o.val());
      o.val(d().formatInputDate(m));
      return m;
    },
    parseNumber: function (p, n, o) {
      var m = d().parseNumber(String(p));
      if (CLX.Cn(m) && !o) {
        m = Math.abs(m);
      }
      return d().removeGroupingSeparator(d().formatNumber(m, n));
    },
    parseAmount: function (m, p, o) {
      var n = b().currencyDecimalPlaces(m);
      return f.parseNumber(p, n, o);
    },
    parseAmountWithoutRounding: function (m, p, o) {
      var n = Math.max(d().getDecimalPlaces(p), b().currencyDecimalPlaces(m));
      return f.parseNumber(p, n, o);
    },
    formatRoundedDate: function (m) {
      return d().formatDate(CLX.Fu(m));
    },
    formatNumericRoundedDate: function (m) {
      return d().formatNumericDate(CLX.Fu(m));
    },
    formatDateTimeStamp: function (m) {
      return d().formatTimeStampWithMillisecond(m, true, false);
    },
    formatServerDate: function (m, n) {
      return d().formatDate(j(m, n));
    },
    formatServerDateNumeric: function (m, n) {
      return d().formatNumericDate(j(m, n));
    },
    getFullMonthName: function () {
      return CLX.Hw(d().getFullMonthName, arguments);
    },
    getDatePickerMonthNames: function () {
      var m = e() ? d().getShortMonthNames : d().getFullMonthNames;
      return CLX.Hw(m, arguments);
    },
    getShortMonthName: function () {
      return CLX.Hw(d().getShortMonthName, arguments);
    },
    formatDate: function () {
      return CLX.Hw(d().formatDate, arguments);
    },
    formatDateTime: function () {
      return CLX.Hw(d().formatDateTime, arguments);
    },
    formatNumericDate: function () {
      return CLX.Hw(d().formatNumericDate, arguments);
    },
    formatNumericDateTime: function () {
      return CLX.Hw(d().formatNumericDateTime, arguments);
    },
    formatTime: function () {
      return CLX.Hw(d().formatTime, arguments);
    },
    formatString: function () {
      return CLX.Hw(d().formatString, arguments);
    },
    formatMultiLineString: function () {
      return CLX.Hw(d().formatMultiLineString, arguments);
    },
    formatCompactMultiLineString: function () {
      return CLX.Hw(d().formatCompactMultiLineString, arguments);
    },
    formatNumber: function () {
      return CLX.Hw(d().formatNumber, arguments);
    },
    formatDecimal: function () {
      return CLX.Hw(d().formatDecimal, arguments);
    },
    getAmountCharFilter: function () {
      return CLX.Hw(d().getNumberCharFilter, arguments);
    },
    formatYesNo: function () {
      return CLX.Hw(d().formatBoolean, arguments);
    },
    getDecimalPlaces: function () {
      return CLX.Hw(d().getDecimalPlaces, arguments);
    },
    isNumber: function () {
      return CLX.Hw(d().isNumber, arguments);
    },
    getCurrencyPlaces: function () {
      return CLX.Hw(b().currencyDecimalPlaces, arguments);
    },
    formatQuantity: function () {
      return CLX.Hw(b().formatQuantity, arguments);
    },
    formatFxRate: function () {
      return CLX.Hw(b().formatFxRate, arguments);
    },
    formatPrice: function () {
      return CLX.Hw(b().formatPrice, arguments);
    },
    formatAmount: function (m, n) {
      return b().formatAmount(n, m);
    },
    formatAmountWithCurrency: function (m, n) {
      return b().formatCurrencyAmount(m, n);
    },
    formatAmountWithoutRounding: function (m, n) {
      return b().formatAmountWithoutRounding(n, m);
    },
    formatFullName: function () {
      return CLX.Hw(b().formatFullName, arguments);
    },
    formatPercentage: function () {
      return CLX.Hw(b().formatPercentage, arguments);
    },
  };
  return f;
};
CLX.Ik = function () {
  var h,
    a = CLX.H,
    e = "popupHeaderBar",
    p = "busyMask",
    g = "backgroundMask",
    c = "display",
    i = "none",
    b = "zebraStripe",
    m = "lastChild",
    j = "busy",
    d = "autocomplete",
    l = "rows",
    k = "off",
    o,
    f = function () {
      return o;
    },
    n = false;
  if (CLX.$("#" + p).length) {
    o = CLX.Ft(p);
    o.init(1);
    o.show();
  }
  CLX.Ia();
  CLX.Ic();
  CLX.Ib();
  h = {
    createPopupManager: function (t, r, s, u) {
      var q;
      q = CLX.Gj(t, r || g);
      q.init(s || e, u);
      return q;
    },
    isItemDisplayable: function (q) {
      return q.css(c) !== i;
    },
    hideEmptyRows: function (t, q, s) {
      var r = CLX.$("#" + t);
      if (r.length === 0) {
        r = CLX.$("." + t);
      }
      r.each(function () {
        var u = CLX.$(this);
        u.children().each(function () {
          var v = CLX.$(this);
          if ((!q || v.hasClass(q)) && CLX.Aw(v.children().last().text())) {
            v.hide();
          } else {
            if (!s) {
              v.show();
            }
          }
          return true;
        });
      });
    },
    paintZebra: function (w) {
      var q = 0,
        v,
        s,
        u = false,
        t = CLX.By(),
        r = CLX.Bw;
      CLX.$("#" + w)
        .children()
        .each(function () {
          v = CLX.$(this);
          if (h.isItemDisplayable(v) && v.role()) {
            s = v;
            u = true;
            if (q % 2) {
              v.removeClass(b);
            } else {
              v.addClass(b);
            }
            ++q;
          }
        });
      if (t.get(r.SHOW_ZEBRA_STRIPES) && u) {
        if (!s.hasClass(b)) {
          s.addClass(m);
        }
      }
    },
    updateGridVisibility: function (q, r) {
      CLX.$("#" + q)
        .children("." + r)
        .show();
      CLX.$("#" + q)
        .children()
        .not("." + r)
        .hide();
    },
    updateGridVisibilityWithExemptions: function (q, r, s) {
      CLX.$("#" + q)
        .children("." + r)
        .not("." + s)
        .show();
      CLX.$("#" + q)
        .children("." + s)
        .hide();
      CLX.$("#" + q)
        .children()
        .not("." + r)
        .hide();
    },
    updateChildrenVisibility: function (r, q) {
      var u = CLX.$("#" + r),
        t = u.children(),
        w = t,
        s,
        v;
      for (s in q) {
        if (q.hasOwnProperty(s)) {
          v = q[s];
          if (v && v !== "") {
            w = w.filter("." + v);
          }
        }
      }
      t.not(w).hide();
      return w.show();
    },
    setBusyCursor: function (t) {
      var q,
        s = CLX.By(),
        r = CLX.Bw;
      q = f();
      if (q) {
        q.show();
        if (s.get(r.SHOW_RUNNING_INSIDE_IFRAME)) {
          window.top.scrollTo(0, 0);
        }
      }
      CLX.Av(function () {
        CLX.$("html").addClass(j);
        if (t) {
          CLX.$("#" + t).ariaBusy(true);
        }
      });
    },
    resetBusyCursor: function (s, r) {
      if (!n) {
        var q = f();
        if (q && r) {
          q.hide();
        }
        CLX.Av(function () {
          CLX.$("html").removeClass(j);
          if (s) {
            CLX.$("#" + s).ariaBusy(false);
          }
        });
      }
    },
    setBusyCursorLock: function (q) {
      n = q;
    },
    disableAutocomplete: function () {
      CLX.$(document)
        .find(
          a.TEXT_INPUT_SELECTOR +
            "," +
            a.NUMBER_INPUT_SELECTOR +
            "," +
            a.TELEPHONE_INPUT_SELECTOR +
            "," +
            a.EMAIL_INPUT_SELECTOR +
            "," +
            a.FORM_SELECTOR
        )
        .attr(d, k);
    },
    applyInputFieldCharacterFilter: function (s, q) {
      var r;
      if (s || q) {
        r = CLX.$(a.INPUT_FIELD_SELECTOR);
        if (s) {
          r.keyFilter(s);
        }
        if (q) {
          r.blockChars(q);
        }
      }
    },
    getSortAndGroupPopupPositioner: function (q) {
      return CLX.Hv(q);
    },
    createStandardTableSortController: function (q, s, r) {
      var t = CLX.Hu(q, s, r);
      t.init();
      return t;
    },
    setRowsAttribute: function (s, x, y) {
      var r = CLX.$("#" + s),
        v,
        u = 1,
        q = 47,
        w,
        t;
      if (r) {
        v = r.val().replace(/\s*$/, "");
        if (x) {
          if (y) {
            q = y;
          }
          u = 0;
          for (t = 0; t < v.split(/\n/g).length; t++) {
            if (v.split(/\n/g)[t] && v.split(/\n/g)[t].length > q) {
              w = v.split(/\n/g)[t].length / q;
              u += w > Math.round(w) ? Math.round(w) + 1 : Math.round(w);
            } else {
              u++;
            }
          }
          r.attr(l, u);
        } else {
          r.attr(l, (v.match(/\n/g) || []).length + (v.length > 0 ? u : 0));
        }
      }
    },
    createExportPopup: CLX.Fl,
    createContextMenu: CLX.Fl,
  };
  return h;
};
CLX.Il = function (l) {
  var h,
    i = "~",
    c = CLX.H,
    d = /^([A-Za-z][A-Za-z0-9-_.]*)(:[A-Z]+:)?$/,
    b = CLX.$("#" + l),
    a,
    n = function (p) {
      var o = d.exec(p);
      return o ? o[1] : p;
    },
    k = function () {
      var p, o;
      a = CLX.Fe();
      b.find(c.INPUT_SELECTOR).each(function (q) {
        p = CLX.$(this).name();
        if (p) {
          o = n(p);
          a.put(o, p);
          if (o !== p) {
            a.put(p, p);
          }
        }
        return true;
      });
      return a;
    },
    m = function (o) {
      return o || o === 0 || o === false;
    },
    g = function (o) {
      return m(o) ? String(o) : "";
    },
    j = function (p) {
      var o = a || k();
      return o.getValue(p);
    },
    f = function (o) {
      var p = j(o);
      return p ? b.find("input[name='" + p + "']") : null;
    },
    e = function (q, o, p) {
      if (m(p)) {
        q[o] = String(p);
      }
    };
  h = {
    setInputVal: function (p, s) {
      var q, o, r;
      o = f(p);
      if (o && o.length) {
        if (o.length > 1) {
          o.slice(1).remove();
          o = o.first();
        }
        if (CLX.B(s)) {
          if (s.length === 1) {
            o.val(g(s[0]));
          } else {
            o.val("");
            if (s.length) {
              r = o.clone();
              for (q = 0; q < s.length; q += 1) {
                if (q) {
                  o = r.clone();
                  b.append(o);
                }
                o.val(String(q) + i + g(s[q]));
              }
            }
          }
        } else {
          o.val(g(s));
        }
      }
    },
    setFormValues: function (p) {
      var o;
      if (p) {
        for (o in p) {
          if (p.hasOwnProperty(o)) {
            h.setInputVal(o, p[o]);
          }
        }
      }
    },
    prepareAjaxParams: function (t) {
      var r,
        v,
        s,
        u,
        o = {},
        p,
        q;
      if (t) {
        for (r in t) {
          if (t.hasOwnProperty(r)) {
            v = j(r);
            if (v) {
              s = t[r];
              if (CLX.B(s)) {
                u = s.length;
                if (u === 1) {
                  e(o, v, s[0]);
                } else {
                  if (u > 1) {
                    q = [];
                    for (p = 0; p < s.length; p += 1) {
                      q[p] = String(p) + i + g(s[p]);
                    }
                    o[v] = q;
                  }
                }
              } else {
                e(o, v, s);
              }
            }
          }
        }
      }
      return o;
    },
    cleanupArrayInputs: function (r) {
      var p, q, o;
      if (r) {
        for (p in r) {
          if (r.hasOwnProperty(p)) {
            q = r[p];
            if (CLX.B(q) && q.length > 1) {
              o = f(p);
              if (o.length > 1) {
                o.slice(1).remove();
              }
            }
          }
        }
      }
    },
    removeEmptyInputs: function () {
      b.find(c.INPUT_SELECTOR)
        .not(function () {
          return m(CLX.$(this).val());
        })
        .remove();
    },
  };
  return h;
};
CLX.Im = function postMessageManagerCreate() {
  var h,
    b = CLX.By(),
    f = CLX.Bw,
    g;
  h = {};
  function e(k) {
    var n,
      r,
      o,
      p,
      q,
      m,
      l,
      j = k.source || k.originalEvent.source;
    CLX.$("iframe").each(function (s, t) {
      if (t.contentWindow === j) {
        p = t;
        return false;
      }
    });
    if (!p) {
      return;
    }
    o = k.data || k.originalEvent.data;
    if (typeof o === "string") {
      o = JSON.parse(o);
    }
    n = o.action;
    m = o.module;
    if (m && h[m]) {
      if (n && h[m][n]) {
        l = h[m][n];
        q = l.length;
        for (r = 0; r < q; r += 1) {
          if ((l[r].target && l[r].target === p) || !l[r].target) {
            l[r].listener(p, o);
          }
        }
      }
    }
  }
  function a(j, k) {
    if (CLX.$(j).data("parentPopup")) {
      CLX.$(j).data("parentPopup").hide();
    }
  }
  function d(k, l) {
    var j;
    j = l.height;
    CLX.$(k).height(j);
  }
  function c(j, k) {
    CLX.$("#logoffForm").submit();
  }
  function i(m, n) {
    var j, l, p, o, k, q;
    o = n.title;
    k = n.url;
    q = n.showCloseButton;
    l = CLX.$("#popupCommon").clone();
    l.removeAttr("id");
    p = CLX.$("iframe", l);
    j = CLX.Hr().setContent(l);
    if (o && b.get(f.CAMPAIGNER_SHOW_THIRD_PARTY_POPUP_TITLE)) {
      j = j.setTitle(o);
    }
    j = j.setDetachOnHide(true);
    if (!!q) {
      j = j.addButton(
        CLX.$('div[data-name="common_popup_button_cancel"]', null).text(),
        "close",
        function (r) {
          a(p, n);
        }
      );
    }
    if (b.get(f.CAMPAIGNER_SHOW_CLOSE_ICON_IN_POPUP)) {
      j = j.addHeadingButton("closeThirdPartyPopupIcon", "close", function (r) {
        a(p, n);
      });
    }
    j = j.build();
    p.data("parentPopup", j);
    p.attr("src", k);
    if (b.get(f.USE_THIRD_PARTY_WIDGET_POPUP_DEFAULT_HEIGHT)) {
      p.height((80 * CLX.$(window).height()) / 100);
    }
    l.show();
    j.show();
    return p;
  }
  g = {
    register: function (j, l, m, k) {
      if (!(typeof m === "function")) {
        throw new Error(
          "Tried to register a callback for postMessage that isn't a function."
        );
      }
      if (m.length !== 2) {
        throw new Error(
          "Tried to register a callback for postMessage that doesn't expect the correct number of parameters."
        );
      }
      if (!h[j]) {
        h[j] = {};
      }
      if (!h[j][l]) {
        h[j][l] = [];
      }
      h[j][l].push({ listener: m, target: k });
      return 0;
    },
    unregister: function (m, p, o, n) {
      var q, k, l, j;
      if (!h[m]) {
        return -1;
      }
      if (!h[m][p]) {
        return -1;
      }
      l = h[m][p];
      j = l.length;
      for (q = 0; q < j; q += 1) {
        k = l[q];
        if (k.listener === o && k.target === n) {
          l.splice(q, 1);
          if (h[m][p].length === 0) {
            delete h[m][p];
            if (Object.keys(h[m]).length) {
              delete h[m];
            }
          }
          return 0;
        }
      }
      return -1;
    },
    enableIframeSupport: function (l) {
      var m, k, j;
      k = CLX.$("#ebanIframe", window.parent.document);
      if (!l) {
        l = b.get(CLX.Bw.EMBEDDING_IN_IFRAME_DOMAIN_URL);
      }
      if (window.parent !== window) {
        g.setHeigh(g.getHeight(), l, k);
        m = g.getHeight();
        j = function () {
          var n = g.getHeight();
          if (n > m + 40) {
            g.setHeigh(g.getHeight(), l, k);
            m = n;
          }
          window.setTimeout(j, 1000);
        };
        j();
      }
    },
    getHeight: function () {
      return CLX.$(document).height();
    },
    setHeigh: function (k, l, j) {
      j.height(k + 40);
    },
    closeCallback: a,
    popupCallback: i,
    heightCallback: d,
  };
  CLX.$(window).on("message", e);
  g.register("common", "close", a);
  g.register("common", "height", d);
  g.register("common", "logout", c);
  g.register("common", "popup", i);
  if (b.get(CLX.Bw.SHOW_RUNNING_INSIDE_IFRAME)) {
    g.enableIframeSupport();
  }
  return g;
};
CLX.In = { DAYS: 0, OBJECTS: 1 };
CLX.Io = function () {
  return CLX.I.get(CLX.Id);
};
CLX.Ip = function (r) {
  var U,
    o,
    k = 0,
    s = 30,
    A = "monthMinus",
    T = "monthDisplay",
    ac = "monthPlus",
    l = "yearMinus",
    v = "yearDisplay",
    M = "yearPlus",
    x = "datePickerMonth",
    al = "datePickerYear",
    ak = "datePickerRows",
    H = "calDay",
    N = "jsCalToday",
    F = "jsCalPastDay",
    O = "jsCalRow",
    V = "calCell",
    G = "jsCalOtherMonth",
    K = "jsCalWeekday",
    a = "jsCalWeekend",
    D = "jsCalSelected",
    z = "Hover",
    y,
    e = "backMonth",
    w = "forwardMonth",
    I = "Disabled",
    ah = CLX.H,
    Z = ah.SELECTED_OPTION_SELECTOR,
    h,
    R,
    n,
    m,
    u,
    g,
    j,
    E = false,
    c = false,
    Y = true,
    t = false,
    aa,
    X,
    P,
    ae = function (am) {
      if (am.hasClass(K)) {
        am.removeClass(K).addClass(K + z);
      } else {
        if (am.hasClass(a)) {
          am.removeClass(a).addClass(a + z);
        }
      }
      return true;
    },
    Q = function (am) {
      if (am.hasClass(K + z)) {
        am.removeClass(K + z).addClass(K);
      } else {
        if (am.hasClass(a + z)) {
          am.removeClass(a + z).addClass(a);
        }
      }
      return true;
    },
    d = function (am, an) {
      h = new Date(j, g, am);
      if (X) {
        if (P) {
          CLX.$("." + D).removeClass(D);
          CLX.$(an.currentTarget).addClass(D);
        }
        X(h);
      }
      return false;
    },
    p = function (am, an) {
      am.hover(
        function () {
          ae(am);
        },
        function () {
          Q(am);
        }
      );
      am.click(function (ao) {
        d(an, ao);
      }).actionKey(function () {
        d(an);
      });
    },
    ag = function (an) {
      var am;
      if (an < 14) {
        CLX.$("#" + ac).click();
      } else {
        CLX.$("#" + A).click();
      }
      am = CLX.$("#" + r + " ." + ak).find(
        "." + K + ":contains(" + an + ") , ." + a + ":contains(" + an + ")"
      );
      am.each(function () {
        var ao = CLX.$(this);
        if (ao.text() === an) {
          d(an);
          return false;
        }
      });
    },
    J = function (am, an) {
      am.click(function (ao) {
        ag(an);
      }).actionKey(function () {
        ag(an);
      });
    },
    af = function (ao, aq, ap, an, at, ar, au) {
      var am = "<div class='" + V + " ";
      if (ap) {
        am += N + " ";
      } else {
        if (an) {
          am += G + " ";
        }
      }
      if (ar && aq) {
        am += F + " ";
      }
      am += at;
      if (aq) {
        if (au) {
          am += " " + D;
        }
        am += "' role='button' tabindex='0'";
      } else {
        am += I + "' role='gridcell'";
      }
      am += ">" + ao + "</div>";
      return am;
    },
    q = function (an, ap, ao, am, aq, ar) {
      return af(an, ap, ao, am, a, aq, ar);
    },
    ad = function (an, ap, ao, am, aq, ar) {
      return af(an, ap, ao, am, K, aq, ar);
    },
    W = function () {
      var aC,
        aq,
        aF,
        aB,
        ao,
        aH,
        ax,
        ar,
        ay,
        aw,
        aD,
        aG,
        ap,
        aI,
        au,
        aE = new Date(),
        am = aE.getFullYear(),
        aA = aE.getMonth(),
        at = aE.getDate(),
        av,
        an,
        az;
      an = 0;
      aC = 1;
      aq = CLX.Ck(g, j);
      aF = new Date(j, g, aC);
      ar = aF.getDay() || 7;
      if (ar > 1) {
        aH = g - 1;
        ax = j;
        if (g < 0) {
          g = 11;
          ax = j - 1;
        }
        ao = CLX.Ck(aH, ax);
        aB = ao - ar + 2;
      }
      aw = "";
      while (aC <= aq) {
        aw += "<div class='" + O + "'>";
        for (aD = 1; aD < ar; aD += 1) {
          if (aD > 5) {
            aw += q(aB, false, false, true);
          } else {
            aw += ad(aB, false, false, true);
          }
          aB += 1;
        }
        while (ar <= 7 && aC <= aq) {
          aF = new Date(j, g, aC);
          if (aa) {
            av = aa[aF];
          }
          aG = aF.getTime() >= R.getTime() && aF.getTime() <= n.getTime();
          if (c) {
            aG = aG && CLX.Ck(g, j) === aC;
          } else {
            aG = aG && (t || !av);
          }
          aI = j === am && g === aA && aC === at;
          ap = !aI && aF.getTime() < aE.getTime();
          if (h) {
            au =
              j === h.getFullYear() && g === h.getMonth() && aC === h.getDate();
          }
          aG = (Y && au) || aG;
          if (ar > 5) {
            aw += q(aC, aG && (E || c), aI, false, ap, au);
          } else {
            aw += ad(aC, aG, aI, false, ap, au);
          }
          aC += 1;
          ar += 1;
        }
        aD = 1;
        while (ar <= 7) {
          if (ar > 5) {
            aw += q(aD, false, false, true);
          } else {
            aw += ad(aD, false, false, true);
          }
          aD += 1;
          ar += 1;
        }
        aw += "</div>";
        ar = 1;
        az = aD;
        if (az >= 30) {
          az = 1;
        }
        an += 1;
      }
      if (an < 6) {
        aw += "<div class='" + O + "'>";
        for (aD = 1; aD <= 7; aD += 1) {
          aw += q(az, false, false, true);
          az += 1;
        }
        aw += "</div>";
      }
      ay = CLX.$("#" + r).find("." + ak);
      ay.empty().html(aw);
      aC = 1;
      ay.find("." + V).each(function () {
        var aJ = CLX.$(this);
        if (!aJ.hasClass(G)) {
          if (aJ.hasClass(K) || aJ.hasClass(a)) {
            p(aJ, aC);
          }
          aC += 1;
        }
        if (!P && aJ.hasClass(G)) {
          J(aJ, aJ.text());
        }
        return true;
      });
    },
    aj = function () {
      if (g > 11) {
        j += 1;
        if (j <= n.getFullYear()) {
          g = 0;
        } else {
          g -= 1;
          j -= 1;
        }
      }
      if (g < 0) {
        j -= 1;
        if (j >= R.getFullYear()) {
          g = 11;
        } else {
          g += 1;
          j += 1;
        }
      }
      W();
      CLX.$("#" + y).html(o[g] + " " + j);
    },
    i = function () {
      CLX.$("." + e).click(function () {
        g -= 1;
        aj();
      });
      CLX.$("." + w).click(function () {
        g += 1;
        aj();
      });
    },
    S = function () {
      g = Number(m.find(Z).val());
      W();
      return false;
    },
    f = function () {
      j = Number(u.find(Z).val());
      W();
      return false;
    },
    b = CLX.$("#" + T),
    C = CLX.$("#" + v),
    B = function () {
      g -= 1;
      if (g < 0) {
        j -= 1;
        if (j >= R.getFullYear()) {
          g = 11;
        } else {
          g += 1;
          j += 1;
        }
      }
      b.html(o[g]);
      C.html(j);
      W();
    },
    L = function () {
      g += 1;
      if (g > 11) {
        j += 1;
        if (j <= n.getFullYear()) {
          g = 0;
        } else {
          g -= 1;
          j -= 1;
        }
      }
      b.html(o[g]);
      C.html(j);
      W();
    },
    ab = function () {
      if (j > R.getFullYear()) {
        j -= 1;
      }
      b.html(o[g]);
      C.html(j);
      W();
    },
    ai = function () {
      if (j < n.getFullYear()) {
        j += 1;
      }
      b.html(o[g]);
      C.html(j);
      W();
    };
  U = {
    init: function (ar, ao, ap, au) {
      var an = new Date(),
        aq,
        am,
        at;
      o = ar;
      P = ap;
      y = au;
      if (!R) {
        R = new Date(an.getFullYear() - k, an.getMonth(), an.getDate());
      }
      if (!n) {
        n = new Date(an.getFullYear() + s, an.getMonth(), an.getDate());
      }
      if (!P) {
        m = CLX.$("#" + r).find("." + x);
        u = CLX.$("#" + r).find("." + al);
        if (m.is(CLX.H.SELECT_SELECTOR)) {
          am = m.get(0);
          if (am && am.options.length === 0 && ar) {
            for (aq = 0; aq < 12; aq += 1) {
              at = new Option(ar[aq], aq);
              am.options[aq] = at;
            }
            am.options.length = aq;
          }
          m.change(S);
          u.change(f);
        } else {
          CLX.$("#" + A)
            .click(B)
            .actionKey(B);
          CLX.$("#" + ac)
            .click(L)
            .actionKey(L);
          CLX.$("#" + l)
            .click(ab)
            .actionKey(ab);
          CLX.$("#" + M)
            .click(ai)
            .actionKey(ai);
        }
      } else {
        i();
      }
      if (ao) {
        CLX.$("#" + r)
          .find("." + H)
          .each(function (av) {
            CLX.$(this).text(ao[av]);
            return true;
          });
      }
    },
    setCurrentDate: function (am) {
      if (am) {
        h = am;
      } else {
        h = new Date();
      }
    },
    mobileDisplayDate: function (am) {
      j = am.getFullYear();
      g = am.getMonth();
      U.setCurrentDate(am);
      CLX.$("#" + y).html(o[g] + " " + j);
      W();
    },
    setSelectCallback: function (am) {
      X = am;
    },
    setWeekendEnabled: function (am) {
      E = am;
    },
    setLastDayOfMonthOnly: function (am) {
      c = am;
    },
    setHolidaysEnabled: function (am) {
      t = am;
    },
    setHolidayDates: function (am) {
      aa = am;
    },
    setCurrentAlwaysEnabled: function (am) {
      Y = am;
    },
    setDateRange: function (aq, an, at) {
      var ao = new Date(),
        am,
        ap,
        au,
        ar;
      R = aq;
      n = an;
      h = at || ao;
      if (!R) {
        R = new Date(ao.getFullYear() - k, ao.getMonth(), ao.getDate());
      }
      if (!n) {
        n = new Date(ao.getFullYear() + s, ao.getMonth(), ao.getDate());
      }
      if (!Y) {
        if (h.getTime() < R.getTime()) {
          h = R;
        } else {
          if (h.getTime() > n.getTime()) {
            h = n;
          }
        }
      }
      j = h.getFullYear();
      g = h.getMonth();
      if (!P) {
        if (m.is(CLX.H.SELECT_SELECTOR)) {
          am = u.get(0);
          am.options.length = 0;
          ap = 0;
          for (au = R.getFullYear(); au <= n.getFullYear(); au += 1) {
            ar = new Option(String(au), String(au), false, au === j);
            am.options[ap] = ar;
            ap += 1;
          }
          am.options.length = ap;
          m.get(0).selectedIndex = g;
        } else {
          CLX.$("#" + T).html(o[g]);
          CLX.$("#" + v).html(j);
        }
      } else {
        CLX.$("#" + y).html(o[g] + " " + j);
      }
      W();
    },
    getDateMin: function () {
      return R;
    },
    getDateMax: function () {
      return n;
    },
  };
  return U;
};
CLX.Iq = function () {
  var h,
    k = 1000,
    d = k / 8,
    a = 10,
    e = 300,
    j = "unloadForm",
    i = "logoff",
    g = "BRSINFO_",
    c = /(?=[\u0008-\u007F,\u00A0-\u00FF,\u20AC]*$)/,
    m = /[^\u0008-\u007F,\u00A0-\u00FF,\u20AC]/g,
    f = CLX.Ij(),
    l,
    b = function () {
      if (!l) {
        l = CLX.Ep();
      }
      return l;
    };
  h = {
    getBrowserInfoCookiePrefix: function () {
      return g;
    },
    getEffectsMs: function (p) {
      var o = p || p === 0 ? (p / a) * e : e;
      if (o > k) {
        o = k;
      } else {
        if (o < d) {
          o = d;
        }
      }
      return o;
    },
    getPresentation: function () {
      return f;
    },
    setPresentation: function (n) {
      f = n;
    },
    getLocaleFormat: function () {
      return f.getLocaleFormat();
    },
    getUnloadFormId: function () {
      return j;
    },
    getLogoutButtonId: function () {
      return i;
    },
    compareAmount: function (r, p, q, o) {
      var n;
      n = CLX.Fr(p, o);
      if (n === 0) {
        n = CLX.Fd(r, q);
      }
      return n;
    },
    isLogoutRequiredAfterBadRequest: function () {
      return false;
    },
    getInputFieldCharacterFilter: function () {
      return c;
    },
    getBadCharacterExpr: function () {
      return m;
    },
    isLoadPerformanceOnPortOverview: function () {
      return true;
    },
    formatAccountNumber: function () {
      return CLX.Hw(b().formatAccountNumber, arguments);
    },
    getAccountNumber: function () {
      return CLX.Hw(b().accountNumber, arguments);
    },
    formatAlias: function () {
      return CLX.Hw(b().formatAlias, arguments);
    },
    getAccountAliasOrName: function () {
      return CLX.Hw(b().aliasOrName, arguments);
    },
    getAccountTypeDescription: function () {
      return CLX.Hw(b().accountTypeDescription, arguments);
    },
    formatCurrencyAmount: function () {
      return CLX.Hw(b().formatCurrencyAmount, arguments);
    },
    getAccountTitle: function () {
      return CLX.Hw(b().accountTitle, arguments);
    },
    getAccountNumberBySetting: function () {
      return CLX.Hw(b().accountNumberBySetting, arguments);
    },
    formatPositionType: function () {
      return CLX.Hw(b().formatPositionType, arguments);
    },
    formatCurrencyPrice: function () {
      return CLX.Hw(b().formatCurrencyPrice, arguments);
    },
    formatPrice: function () {
      return CLX.Hw(b().formatPrice, arguments);
    },
    formatQuantity: function () {
      return CLX.Hw(b().formatQuantity, arguments);
    },
    formatBIC: function () {
      return CLX.Hw(b().formatBIC, arguments);
    },
    formatPercentage: function () {
      return CLX.Hw(b().formatPercentage, arguments);
    },
    formatChartPercentage: function () {
      return CLX.Hw(b().formatChartPercentage, arguments);
    },
    getAdvisor: function () {
      return CLX.Hw(b().advisor, arguments);
    },
    getCurrentBalance: CLX.Dx,
    getAvailableBalance: CLX.Dn,
    formatBankCode: function () {
      return CLX.Hw(b().formatSortCode, arguments);
    },
    formatPositionTitle: function () {
      return CLX.Hw(b().formatPositionTitle, arguments);
    },
    trimConvertedAmount: function () {
      return CLX.Hw(b().trimConvertedAmount, arguments);
    },
    getBankCode: function () {
      return CLX.Hw(b().bankCode, arguments);
    },
  };
  return h;
};
CLX.Ir = function () {
  var a = CLX.Ik();
  a.createContextMenu = function (e, d, h, g, c) {
    var b, f;
    b = function (j) {
      var i = "format",
        k;
      if (g !== null && g !== undefined && h !== null && h !== undefined) {
        k = g();
        k[i] = j;
        h(k);
      }
    };
    f = CLX.Ih(e, d);
    f.init(b, c);
    return f;
  };
  a.showMessageSentPopup = function (b, c) {
    b.setMessageSentText();
    b.showMessage(c);
  };
  return a;
};
CLX.Is = function (m, t, f) {
  var j,
    b = "service",
    a = "bootstrap",
    h = "shorthand",
    u = CLX.H,
    q = u.TEXT_INPUT_SELECTOR,
    o = u.PASSWORD_INPUT_SELECTOR,
    r,
    c = function () {
      if (r === undefined) {
        r =
          CLX.By().get(CLX.Bw.USE_ATTACHMENT_CONTENT_DISPOSITION_FOR_PDF) ||
          false;
      }
      return r;
    },
    s,
    e = function () {
      if (!s) {
        s = CLX.Il(t);
      }
      return s;
    },
    i = true,
    p = function (x, v, w) {
      j.resetTextInput();
      if (x && CLX.M(x)) {
        x(v, w);
      }
    },
    d = function (w) {
      var v;
      v = function (x, y) {
        i = false;
        CLX.$("." + a).remove();
        p(w, x, y);
      };
      return v;
    },
    g = function (w) {
      var v;
      v = function (x, y) {
        p(w, x, y);
      };
      return v;
    },
    l = function (v, w) {
      e().setFormValues(w);
      e().setInputVal(b, v);
    },
    k = function (w, v) {
      e().cleanupArrayInputs(w);
      j.resetTextInput();
      if (v) {
        m.reset();
      }
    },
    n = function (v, w) {
      w = w || {};
      w[b] = v;
      return e().prepareAjaxParams(w);
    };
  j = {
    setShorthand: function (v) {
      e().setInputVal(h, v);
    },
    resetTextInput: function () {
      CLX.$("#" + t)
        .find(q + ":not(." + a + ")")
        .val("");
    },
    resetPasswordInput: function () {
      CLX.$("#" + t)
        .find(o + ":not(." + a + ")")
        .val("");
    },
    sendRequest: function (y, B, w, A, v, x) {
      var z;
      if (v) {
        A = v.writeToken(A);
        w = v.createCallbackWrapper(w);
      }
      A = n(y, A);
      z = i ? d(w) : g(w);
      if (B) {
        m.sendFgJsonRequest(t, B, z, g(f), null, A);
      } else {
        m.sendBgJsonRequest(t, undefined, z, g(x), null, A);
      }
    },
    submitFormRequest: function (w, y, v, x) {
      if (v) {
        y = v.writeToken(y);
      }
      l(w, y);
      m.submitForm(t, false, x);
      CLX.Av(function () {
        k(y, x);
      });
    },
    sendDownloadRequest: function (w, z, v, y) {
      var x = CLX.$("#" + t).attr("action");
      if (z.format) {
        CLX.$("#" + t).attr("action", x + "?fileexport=true");
        CLX.$("#" + t + " input[name=fileexport]").val("true");
      }
      if (!c() && (y || (z.format && z.format.toUpperCase() === "PDF"))) {
        CLX.$("#" + t).attr("target", "_blank");
      } else {
        CLX.$("#" + t).removeAttr("target");
      }
      j.submitFormRequest(w, z, v, true);
      if (z.format) {
        CLX.$("#" + t).attr("action", x);
        CLX.$("#" + t).attr("target", "");
        CLX.$("#" + t + " input[name=fileexport]").val("");
      }
    },
  };
  return j;
};
CLX.It = function () {
  return CLX.I.get(CLX.Im);
};
CLX.Iu = function () {
  var d,
    f = 60,
    b = window.navigator.cookieEnabled,
    a = function () {
      var h,
        l,
        k,
        j,
        g = [];
      h = document.cookie;
      if (h) {
        l = h.split(";");
        for (j = 0; j < l.length; j += 1) {
          k = CLX.Ed(l[j]);
          g.push(k);
        }
      }
      return g;
    },
    c = function (g) {
      return g.substring(0, g.indexOf("="));
    },
    e = function (g) {
      return g.substring(g.indexOf("=") + 1);
    };
  d = {
    readCookie: function (g) {
      var j, h;
      j = a();
      if (j) {
        for (h = 0; h < j.length; h += 1) {
          if (c(j[h]) === g) {
            return e(j[h]);
          }
        }
      }
    },
    readEncodedCookie: function (h) {
      var g = d.readCookie(h);
      return g ? decodeURIComponent(g) : g;
    },
    writeCookie: function (g, m, j, l, i, k) {
      var h;
      if (b === undefined || b) {
        h = g + "=" + m;
        if (j === 0 || j > 0) {
          h += "; max-age=" + j * f;
        }
        if (l) {
          h += "; path=" + l;
        }
        if (i) {
          h += "; domain=" + i;
        }
        if (k) {
          h += "; secure";
        }
        document.cookie = h;
      }
      if (b === undefined) {
        b = d.readCookie(g) !== null;
      }
    },
    writeEncodedCookie: function (g, l, i, k, h, j) {
      d.writeCookie(g, encodeURIComponent(l), i, k, h, j);
    },
    deleteCookie: function (g, i, h) {
      d.writeCookie(g, "X", 0, i, h, false);
    },
    getCookieNames: function (k) {
      var j,
        h,
        g = [];
      j = a();
      if (j) {
        for (h = 0; h < j.length; h += 1) {
          if (j[h].substring(0, k.length) === k) {
            g.push(c(j[h]));
          }
        }
      }
      return g;
    },
  };
  return d;
};
CLX.Iv = function (s) {
  var d,
    h,
    f = function () {
      if (!h) {
        h = s.getPresentation().getLocaleFormat();
      }
      return h;
    },
    a = "datePicker",
    m = "tagAlignWithCalIcon",
    e = "pointerUp",
    u = "pointerDownBright",
    o = "mastheadPanel",
    l = "datePicker",
    q = "datePickerAbove",
    t = CLX.H,
    n = t.VISIBLE_SELECTOR,
    c,
    b,
    r,
    k,
    i = function (v) {
      d.hide();
      if (b) {
        b.val(v ? f().formatInputDate(v) : "");
      }
      if (k) {
        k(v);
      }
    },
    g = function () {
      if (!c) {
        c = CLX.Ip(a);
        c.init(
          s.getPresentation().getDatePickerMonthNames(),
          f().getShortDayNames()
        );
        c.setSelectCallback(i);
        c.setCurrentDate(new Date());
      }
      return c;
    },
    p = function (v) {
      var w = CLX.$(v.target);
      if (!(r && w.closest(r).length) && d.isVisible()) {
        if (!w.closest("#" + a).length) {
          d.hide();
        }
      }
      return true;
    },
    j = function () {
      CLX.$(document).focusin(p).mouseup(p);
    };
  d = {
    init: function () {
      CLX.Av(j);
    },
    attachToField: function (E, z, L) {
      var v = CLX.$("#" + a),
        G,
        N,
        D,
        K,
        J,
        I,
        w,
        M,
        F,
        H,
        A,
        C,
        B;
      b = CLX.$("#" + E);
      r = CLX.$("#" + z);
      if (r) {
        CLX.Gc.addActive(r);
      }
      if (r && v.hasClass(m)) {
        G = r;
      } else {
        G = b;
      }
      k = L;
      w = CLX.$(window).height() / 2;
      M = G.offset().top;
      F = M - CLX.$(window).scrollTop();
      H = v.outerHeight(true);
      A = CLX.$("." + o).outerHeight(true);
      B = CLX.$(".footer").offset().top;
      if ((w - F > 0 || H > M - A) && !(B <= M + H)) {
        C = false;
        v.find("." + e).show();
        v.find("." + u).hide();
        v.parent()
          .find("." + l)
          .removeClass(q);
      } else {
        C = true;
        v.find("." + e).hide();
        v.find("." + u).show();
        v.parent()
          .find("." + l)
          .addClass(q);
      }
      N = G.offset();
      D = G.outerHeight(true);
      K = N.left;
      J = N.top + D;
      if (C) {
        J = J - D - H;
      }
      I = { left: K, top: J };
      return v.css(I);
    },
    setCurrentAlwaysEnabled: function (v) {
      g().setCurrentAlwaysEnabled(v);
    },
    setWeekendEnabled: function (v) {
      g().setWeekendEnabled(v);
    },
    setHolidayDates: function (v) {
      g().setHolidayDates(v);
    },
    setLastDayOfMonthOnly: function (v) {
      g().setLastDayOfMonthOnly(v);
    },
    setDateRange: function (w, v, x) {
      g().setDateRange(w, v, x);
    },
    setFocusOnFirstPulldown: function () {
      CLX.Fz(CLX.$("#" + a).find(s.getFocusElementForDatepicker()));
    },
    isVisible: function () {
      return CLX.$("#" + a).is(n);
    },
    hide: function () {
      CLX.$("#" + a).hide();
      if (b) {
        CLX.Fz(b);
      }
      if (r) {
        CLX.Gc.removeActive(r);
      }
    },
  };
  return d;
};
CLX.Iw = function () {
  var n = CLX.Iq(),
    u,
    a,
    q,
    s = function () {
      if (!u) {
        u = CLX.Df();
      }
      return u;
    },
    h = function () {
      if (!a) {
        a = CLX.Ep();
      }
      return a;
    },
    g = function () {
      if (!q) {
        q = CLX.Io();
      }
      return q;
    },
    o = CLX.Gr,
    y = CLX.Gf,
    e = CLX.Cu,
    B = "label",
    x = "for",
    z = "checked",
    l = "type",
    r = "checkbox",
    v = "inputFieldError",
    f = "inputFieldSuggestion",
    A = "buttonError",
    w = "buttonSuggestion",
    t = "inputFieldSiblingError",
    k = "datePickerMinus",
    j = 9,
    d = 9,
    D = 20,
    c = -8,
    m,
    b,
    p = function (E) {
      E = s().removeGroupingSeparator(E);
      if (!b) {
        b = new RegExp("^\\d+([" + s().getDecimalSeparator() + "]\\d{0,2})?$");
      }
      return b.test(E);
    },
    C = function (E, H, G) {
      var F;
      if (H) {
        F = E.parent().find(e.selector(e.BUTTON));
        if (!F.length) {
          F = E.parent().parent().find(e.selector(e.BUTTON));
        }
        F.addClass(G);
      } else {
        F = E.parent().find(e.selector(e.BUTTON));
        if (!F.length) {
          F = E.parent().parent().find(e.selector(e.BUTTON));
        }
        F.removeClass(G);
      }
    },
    i = function (E, I, G) {
      var F,
        H = G === o.INVALID;
      I.ariaInvalid(H);
      if (H) {
        if (I.hasClass(y.INPUT_AND_BUTTON_FIELD)) {
          C(I, true, A);
        }
        I.addClass(v);
      } else {
        if (I.hasClass(y.INPUT_AND_BUTTON_FIELD)) {
          C(I, false, A);
        }
        I.removeClass(v);
      }
      if (G === o.SUGGESTION) {
        I.addClass(f);
        if (I.hasClass(y.INPUT_AND_BUTTON_FIELD)) {
          C(I, true, w);
        }
      } else {
        I.removeClass(f);
        if (I.hasClass(y.INPUT_AND_BUTTON_FIELD)) {
          C(I, false, w);
        }
      }
      if (E) {
        F = CLX.$(B + "[" + x + "=" + E + "]");
        if (F.length) {
          if (H) {
            F.addClass(t);
          } else {
            F.removeClass(t);
          }
        }
      }
    };
  n.getMinToleratedIEVersion = function () {
    return j;
  };
  n.getMinCompatibleIEVersion = function () {
    return d;
  };
  n.applyValidationDecoration = function (G, F, E) {
    G.ariaInvalid(F);
    if (E) {
      if (G.attr(l) === r) {
        G.attr(z, false);
      } else {
        G.val("");
      }
    }
    if (F) {
      G.addClass(v).siblings().addClass(t);
    } else {
      G.removeClass(v).siblings().removeClass(t);
    }
  };
  n.decorateField = function (F, G) {
    var I = CLX.$("#" + F),
      E,
      H;
    if (I.length) {
      i(F, I, G);
    } else {
      for (H = 1; true; H += 1) {
        E = F + String(H);
        I = CLX.$("#" + E);
        if (I.length) {
          i(E, I, G);
        } else {
          break;
        }
      }
    }
  };
  n.decorateIsolatedField = function (F, E) {
    i(null, F, E ? o.INVALID : o.VALID);
  };
  n.applyRelativePositionForPopupInfo = function (E) {
    E.setRelativePosition(D, c);
  };
  n.getGuiUtils = function () {
    if (!m) {
      m = CLX.Ir();
    }
    return m;
  };
  n.createAnonymousAmountInput = function (F, E) {
    F.keyFilter(s().getNumberCharFilter());
    return CLX.Hs(F, n.getPresentation(), E || p);
  };
  n.createAmountInput = function (E, F) {
    CLX.$("#" + E).keyFilter(s().getNumberCharFilter());
    return CLX.If(E, n.getPresentation(), F || p);
  };
  n.isAutocompleteAllowed = function () {
    return false;
  };
  n.enforceDoubleWordWrapping = CLX.Fl;
  n.showSortAndGroupPopupOnHover = function (E) {
    return true;
  };
  n.sortOnHeaderClick = function (E) {
    return true;
  };
  n.executeCustomEllipsis = function () {
    return false;
  };
  n.addMediaQueryListener = function () {
    return false;
  };
  n.expandCollapseOnFirstHeaderCell = function () {
    return false;
  };
  n.enableHorizontalScrollbarOnTable = function () {
    return false;
  };
  n.getDefaultFilterAccoTrx = function () {
    return CLX.In.OBJECTS;
  };
  n.accoOverviewAlwaysShowHeader = function () {
    return true;
  };
  n.portOverviewAlwaysShowHeader = function () {
    return true;
  };
  n.useAccoTrxCollectiveDetail = function () {
    return true;
  };
  n.isLoadCustomersOnPortfolioOverview = function () {
    return true;
  };
  n.isLoadCurrenciesForPositionSearch = function () {
    return true;
  };
  n.getFocusElementForDatepicker = function () {
    return "." + k;
  };
  n.getFavouriteIconClass = function () {
    return CLX.Hw(g().getFavouriteIconClass, arguments);
  };
  n.getFavouriteIconLabelFormatted = function () {
    return CLX.Hw(g().getFavouriteIconLabelFormatted, arguments);
  };
  n.getFavouriteLine2IconLabelFormatted = function () {
    return CLX.Hw(g().getFavouriteLine2IconLabelFormatted, arguments);
  };
  n.getBriefDepotDescription = function () {
    return CLX.Hw(h().briefDepotDescription, arguments);
  };
  n.getBriefAccountDescription = function () {
    return CLX.Hw(h().getBriefAccountDescription, arguments);
  };
  n.getCuacDescriptionAndNo = function () {
    return CLX.Hw(h().getCuacDescriptionAndNo, arguments);
  };
  n.getAccountDescription = function () {
    return CLX.Hw(h().accountDescription, arguments);
  };
  n.getProductCurrencyAndAmount = function () {
    return CLX.Hw(h().productCurrencyAndAmount, arguments);
  };
  n.getAccountDescriptionForTrading = function () {
    return CLX.Hw(h().accountDescriptionForTrading, arguments);
  };
  n.getFullAccountDescription = function () {
    return CLX.Hw(h().fullAccountDescription, arguments);
  };
  n.getPortfolioDescription = function () {
    return CLX.Hw(h().portfolioDescription, arguments);
  };
  n.formatCard = function () {
    return CLX.Hw(h().formatCard, arguments);
  };
  n.formatAddress = function () {
    return CLX.Hw(h().formatAddress, arguments);
  };
  n.formatPrice = function () {
    return CLX.Hw(h().formatPrice, arguments);
  };
  n.formatAccountNumber = function () {
    return CLX.Hw(h().formatAccountNumber, arguments);
  };
  n.getFormattedNumber = function () {
    return CLX.Hw(h().getFormattedNumber, arguments);
  };
  n.getAliasOrFormattedNumber = function (E, F) {
    return h().aliasOrNumber(F);
  };
  n.getAlias = function () {
    return CLX.Hw(h().alias, arguments);
  };
  n.getCurrencyDescription = function () {
    return CLX.Hw(h().currencyDescription, arguments);
  };
  n.getCurrencyDescriptionSecondLine = function () {
    return CLX.Hw(h().currencyDescriptionSecondLine, arguments);
  };
  n.getCustomerId = function () {
    return CLX.Hw(h().customerId, arguments);
  };
  n.getCustomerName = function () {
    return CLX.Hw(h().customerName, arguments);
  };
  n.getProductReadOnlyDescription = function () {
    return CLX.Hw(h().getProductReadOnlyDescription, arguments);
  };
  return n;
};
CLX.Ix = function () {
  var a = CLX.Iw();
  a.showSortAndGroupPopupOnHover = function (b) {
    return false;
  };
  a.sortOnHeaderClick = function (b) {
    return false;
  };
  a.executeCustomEllipsis = function () {
    return true;
  };
  a.addMediaQueryListener = function () {
    return true;
  };
  a.expandCollapseOnFirstHeaderCell = function () {
    return true;
  };
  a.enableHorizontalScrollbarOnTable = function () {
    return true;
  };
  return a;
};
CLX.Iy = function (W, P) {
  var V,
    D = 60,
    B = 1000,
    H = 3,
    g = 75,
    ah = "extrasForm",
    n = "ping",
    w = "timeoutPopup",
    j = "unauthenticatedTimeoutPopup",
    G = "timeoutPopupMask",
    al = "remainingTime",
    aa = "keepAliveButton",
    q = "timeoutOkButton",
    T = "minsSecsRemaining",
    L = "minutesRemaining",
    ab = "loginScheme",
    v = "popupDisable",
    R = "oneMinuteRemaining",
    t = "secondsRemaining",
    ak = "oneSecondRemaining",
    m = "logoutButton",
    o,
    N = 0,
    ad = 0,
    ac,
    r,
    Q,
    aj,
    h,
    X,
    M,
    ag,
    z,
    U = true,
    J = false,
    O,
    y,
    f,
    Z,
    x,
    c = function () {
      if (!x) {
        x = CLX.Is(P, ah);
      }
      return x;
    },
    l = [],
    F = function () {
      P.logout();
    },
    A,
    b = function () {
      return new Date().getTime();
    },
    k = function (am) {
      var an;
      for (an = 0; an < l.length; ++an) {
        l[an](am);
      }
    },
    af,
    ae = function () {
      if (r) {
        window.clearTimeout(r);
        r = null;
      }
    },
    C = function () {
      y().hidePopup();
      ac = null;
      af();
      k(false);
    },
    e = function () {
      if (!ac) {
        c().sendRequest(n);
      }
    },
    E = function () {
      C();
      ad = b();
      e();
      return false;
    },
    a = function (am) {
      var ap, an, ar, aq, ao;
      ap = Math.floor(am / D);
      an = am % D;
      if (an) {
        ao = an > 1 ? CLX.Dm(ag, an) : z;
      } else {
        if (an === 0) {
          ao = CLX.Dm(ag, an);
        }
      }
      if (ap) {
        aq = ap > 1 ? CLX.Dm(X, ap) : M;
        ar = an ? CLX.Dm(h, [aq, ao]) : aq;
      } else {
        ar = ao;
      }
      CLX.$("#" + al).text(ar);
    },
    K = function () {
      var am = ".popup";
      if (
        CLX.$("#" + ab).text() === "true" &&
        !CLX.By().get(CLX.Bw.SHOW_POPUP_WHEN_TIMEOUT)
      ) {
        CLX.$(am).hide();
      }
      Z().showPopup();
      CLX.Gw(q);
    },
    Y = function () {
      if (U) {
        A();
      } else {
        y().hidePopup();
        K();
      }
    },
    s = function () {
      var ao, ap, an, am;
      if (ac) {
        ao = b();
        ap = (ao - ac) / B;
        an = Math.round(aj - ap);
        if (an > 0) {
          a(an);
          --an;
          am = ac + (aj - an) * B;
          window.setTimeout(s, am - ao);
        } else {
          Y();
        }
      }
    },
    u = function (am) {
      a(am || aj);
      y().showPopup();
      CLX.Gw(aa);
      ac = b() - (am ? aj - am : 0) * B;
      window.setTimeout(s, B);
      k(true);
    },
    i = function (am) {
      var an = b();
      N = am ? an : ad || an;
      ae();
      if (am && ac) {
        C();
      }
    },
    d = function () {
      var am = b(),
        an = (am - ad) / B,
        ao;
      if (an > H) {
        an = (am - N) / B;
        if (!ac && Q && aj && N && an > H) {
          ae();
          ao = Q - an < g + H ? 1 : g;
          r = window.setTimeout(e, ao * B);
        }
      }
      ad = am;
      return true;
    },
    S = function (am) {
      return 1 + Math.floor(am / 30);
    },
    ai = function (am) {
      V.setTimeoutMins(am.getLogoutTimeoutMins());
    },
    p = function () {
      var am = b(),
        an,
        ao;
      if (N && Q) {
        an = N + (Q - H) * B;
        if (am < an) {
          ao = an - aj * B;
          if (am < ao) {
            af();
          } else {
            if (!ac) {
              u(Math.ceil((an - am) / B));
            }
          }
        } else {
          Y();
        }
      } else {
        af();
      }
    },
    I = function () {
      CLX.$("#" + aa).press(E);
      CLX.$("#" + m).press(F);
      CLX.$("#" + q).press(F);
      h = CLX.$("#" + T).text();
      X = CLX.$("#" + L).text();
      M = CLX.$("#" + R).text();
      ag = CLX.$("#" + t).text();
      z = CLX.$("#" + ak).text();
      CLX.$(document).click(d).keypress(d).bind("touchend", d);
      ad = b();
      if (CLX.$("#" + v).text() === "") {
        af();
      }
    };
  af = function () {
    if (!J) {
      window.setTimeout(p, B);
    }
  };
  y = function () {
    if (!O) {
      O = o(w, G);
      O.setCloseCallback(E);
    }
    return O;
  };
  Z = function () {
    if (!f) {
      f = o(j, G);
      f.setCloseCallback(F);
    }
    return f;
  };
  V = {
    init: function (an, ao, am) {
      o = an;
      A = am || F;
      if (ao) {
        ao.addCallback(ai);
      }
      P.setMonitorCallback(i);
      CLX.Av(I);
    },
    setTimeoutMins: function (am) {
      Q = am * D;
      aj = S(am) * D;
      i(true);
    },
    addCallback: function (am) {
      l[l.length] = am;
    },
    ping: function () {
      c().sendRequest(n);
    },
    setAuthenticated: function (am) {
      U = am;
    },
    disable: function () {
      J = true;
    },
  };
  return V;
};
CLX.Iz = function (a) {
  return (
    !a ||
    !CLX.$.browser.msie ||
    (document.documentMode && document.documentMode >= a) ||
    (!document.documentMode && CLX.$.browser.version >= a)
  );
};
CLX.Ja = function (z) {
  var y = CLX.Iu(),
    m = window.navigator,
    B = -1,
    a = "/",
    E = "https",
    l = "true",
    e = "=",
    D = ";",
    w = "env",
    j = "date",
    c = "javaEnabled",
    A = "windowSize",
    F = "x",
    x = "plugins",
    v = (function () {
      return /[^\s\/\\]+$/;
    })(),
    h = ";",
    s = "screen",
    t = ["width", "height", "colorDepth"],
    r = "screenColorDepth",
    d = "os",
    f = "osPlatform",
    q = "browser",
    n = "cpuInfo",
    i = "sysLang",
    u = function (G, H) {
      var I, J;
      I = window.location.protocol;
      J = I.indexOf(E) === 0;
      y.writeEncodedCookie(z + G, H, B, a, null, J);
    },
    g = function (G, H) {
      y.deleteCookie(z + G, a);
    },
    k = function () {
      var H = new Date(),
        I = CLX.$(window),
        G;
      G = j + e + H.getTime();
      if (m.javaEnabled()) {
        G += D + c + e + l;
      }
      G += D + A + e + I.width() + F + I.height();
      u(w, G);
    },
    b = function () {
      var H = "",
        G,
        I,
        J;
      if (m.plugins && m.plugins.length) {
        for (I = 0; I < m.plugins.length; I += 1) {
          J = m.plugins[I];
          G = J.filename || J.name;
          if (G) {
            if (I) {
              H += h;
            }
            H += G.match(v);
          }
        }
      }
      if (H) {
        u(x, H + h);
      } else {
        g(x);
      }
    },
    p = function () {
      var H = "",
        G = window.screen,
        J,
        I;
      if (G) {
        for (I = 0; I < t.length; I += 1) {
          if (I > 0) {
            H += D;
          }
          J = t[I];
          H += J + e + G[J];
        }
        u(s, H);
      } else {
        g(s);
      }
    },
    C = function () {
      var G = {};
      G.screenColorDepth = window.screen.colorDepth;
      G.os = m.appVersion;
      G.osPlatform = m.platform;
      G.browser = m.appName;
      if (m.cpuClass !== null) {
        G.cpuInfo = m.cpuClass;
      } else {
        if (m.oscpu !== null) {
          G.cpuInfo = m.oscpu;
        } else {
          if (window.clientInformation && window.clientInformation.cpuClass) {
            G.cpuInfo = window.clientInformation.cpuClass;
          }
        }
      }
      if (m.systemLanguage && m.systemLanguage !== undefined) {
        G.sysLang = m.systemLanguage;
      } else {
        if (
          window.clientInformation &&
          window.clientInformation.systemLanguage &&
          window.clientInformation.systemLanguage !== null
        ) {
          G.sysLang = window.clientInformation.systemLanguage;
        } else {
          if (m.language) {
            G.sysLang = m.language;
          }
        }
      }
      return G;
    },
    o = function () {
      var G = C();
      u(r, G.screenColorDepth);
      u(d, G.os);
      u(f, G.osPlatform);
      u(q, G.browser);
      u(n, G.cpuInfo);
      u(i, G.sysLang);
    };
  k();
  b();
  p();
  o();
};
CLX.Jb = function () {
  var c = {},
    b = CLX.Es,
    a = CLX.Er;
  c[b.ID] = [a.JSON_ID];
  c[b.REAL_ID] = [a.JSON_REAL_ID];
  c[b.DESCRIPTION] = [a.JSON_NAME];
  return c;
};
CLX.Jc = function (h) {
  var g,
    c = CLX.Cu,
    k,
    d,
    e,
    j,
    b = function (l) {
      return l.substring((h + "_").length);
    },
    a = function (l) {
      return h + "_" + l;
    },
    i = function (l) {
      l.press(function () {
        var m = false;
        CLX.Gc.removeActive(e);
        CLX.Gc.addActive(l);
        if (l.id() === e.id()) {
          m = true;
        }
        e = l;
        if (d && !m) {
          d(b(l.id()));
        }
      });
    },
    f = function () {
      var l;
      k.find(c.selector(c.BUTTON)).each(function () {
        l = CLX.$(this);
        if (CLX.Gc.hasActive(l)) {
          e = l;
        }
        i(l);
      });
      if (!e) {
        e = k.find(c.selector(c.BUTTON)).first();
        CLX.Gc.addActive(e);
      }
      if (e.id()) {
        j = b(e.id());
      }
    };
  g = {
    init: function (l) {
      d = l;
      k = CLX.$("#" + h);
      f();
    },
    getActiveOptionId: function () {
      return b(e.id());
    },
    setActiveOptionId: function (m, n) {
      var l,
        o = false;
      if (!m) {
        l = CLX.$("#" + a(j));
      } else {
        l = CLX.$("#" + a(m));
      }
      CLX.Gc.removeActive(e);
      CLX.Gc.addActive(l);
      if (l.id() === e.id()) {
        o = true;
      }
      e = l;
      if (n && d && !o) {
        d(b(e.id()));
      }
    },
    getOptionCount: function () {
      return k.find(c.selector(c.BUTTON)).length;
    },
    hideOption: function (l) {
      CLX.$("#" + a(l)).hide();
    },
    showOption: function (l) {
      CLX.$("#" + a(l)).show();
    },
  };
  return g;
};
CLX.Jd = (function () {
  var a;
  return function () {
    if (!a) {
      a = CLX.Ez(CLX.Jb());
      a.type = "AuthTypeRecord";
    }
    return a;
  };
})();
CLX.Je = function (n, u) {
  var N,
    ab = 0,
    E = CLX.Ie,
    ad = "application/x-www-form-urlencoded; charset=UTF-8",
    A = "CLXDate",
    F = (function () {
      return /^(.*?)([012]?\d)([.:])(\d\d)([.:])(\d\d)(.*)$/;
    })(),
    v = "paVersion",
    w = "redirectLocation",
    ah = "paLogin",
    J = "logoutAddress",
    Y = "href",
    q = 1000,
    t = 60,
    H = 60,
    L = 24,
    ai = CLX.H,
    X = ai.INPUT_NON_TOGGLE_SELECTOR,
    B = ai.INPUT_TOGGLE_SELECTOR,
    W = ai.BUTTON_SELECTOR,
    s = 20,
    z = " input[name='window']",
    l = " input[name='output']",
    I = "action",
    K = "name",
    o = 1,
    g = "json",
    ag = "html",
    R = "POST",
    e = "parsererror",
    T = 2,
    C = 0,
    G,
    a = function () {
      if (G === undefined) {
        G = CLX.By().get(CLX.Bw.AJAX_TIMEOUT) || 0;
      }
      return G;
    },
    aa,
    f,
    Q = false,
    M,
    k,
    d,
    j = CLX.Gx(),
    m = "extrasServiceForm",
    r = "logJsErrors",
    b = "errorText",
    U = function (al) {
      if (al) {
        try {
          al.abort();
        } catch (am) {}
      }
    },
    x = function (am, al) {
      return am > 9 || (al && al.length === 1) ? am : "0" + am;
    },
    ac = function (an) {
      var au, ar, aq, al, ao, at, am, ap;
      if (an && an.readyState > T) {
        au = an.getResponseHeader(A);
      }
      if (au) {
        au = decodeURIComponent(au).replace(/\+/g, " ");
        k = au;
        d = new Date();
      } else {
        if (k) {
          ar = F.exec(k);
          at = Math.ceil((new Date().getTime() - d.getTime()) / q);
          if (ar && at >= 0) {
            aq = Number(ar[2]);
            al = Number(ar[4]);
            ao = Number(ar[6]);
            am = at % t;
            at -= am;
            ao += am;
            if (ao >= t) {
              ao -= t;
              al += 1;
            }
            at /= t;
            ap = at % H;
            at -= ap;
            al += ap;
            while (al >= H) {
              al -= H;
              aq += 1;
            }
            at /= H;
            aq += at;
            if (aq < L) {
              au = ar[1] + x(aq, ar[2]) + ar[3] + x(al) + ar[5] + x(ao) + ar[7];
            }
          }
        }
      }
      return au || new Date().toUTCString();
    },
    p = function (al) {
      return al && al.readyState > T ? al.status : E.REQUEST_TIMEOUT;
    },
    D = function (al) {
      return al ? al[w] : null;
    },
    c = function (am, al) {
      return (
        am === E.MOVED_PERMANENTLY ||
        am === E.MOVED_TEMPORARILY ||
        am === E.SEE_OTHER ||
        am === C ||
        al === e
      );
    },
    aj = function (am) {
      var al = function (ap, an, ao) {
        var av = p(ao),
          ar = D(ap),
          au = ap[ah],
          at = ap[v],
          aq = false,
          aw = CLX.$("#logoutAddress").attr("href");
        Q = false;
        if (aw && aw.toLowerCase().indexOf("sentinel") > -1) {
          aq = true;
        }
        if (ar) {
          if ("l2" === ar && at && au && au === "1") {
            if (!aq) {
              window.location = "crealogix.com://navigation/close";
            }
          } else {
            if (
              "l0" === ar ||
              "l1" === ar ||
              "l2" === ar ||
              "l3" === ar ||
              "l4" === ar
            ) {
              if ("l0" === ar && aq) {
                ar = "l4";
              }
              ar = CLX.$("#" + ar + " a").attr("href");
            }
            j.addTask("window:replace");
            window.location.replace(ar);
          }
        } else {
          if (c(av, an)) {
            j.addTask("window:reload");
            window.location.reload();
          } else {
            if (ao && ao === f && am) {
              am(ap, ac(ao));
            }
          }
        }
      };
      return al;
    },
    i = function (am) {
      var al = function (ao, ar, an) {
        var aq = p(ao),
          ap = ac(ao);
        Q = false;
        if (c(aq, ar)) {
          j.addTask("window:reload");
          window.location.reload();
        } else {
          if (u && aq === E.BAD_REQUEST) {
            N.logout();
          } else {
            if (ao && ao === f) {
              U(ao);
              if (aq !== E.CONFLICT && am) {
                am(aq, ap);
              }
            }
          }
        }
      };
      return al;
    },
    af = function (an, am) {
      var al;
      al = function (ao, ap) {
        try {
          if (an) {
            an(ao, ap);
          }
        } finally {
          ab--;
          if (ao && ao === f) {
            N.reset(am);
          }
        }
      };
      return al;
    },
    V = function () {
      var al = window.name;
      if (!al || al.length > s) {
        al = String(new Date().getTime());
        window.name = al;
      }
      return al;
    },
    S = function (aq, ar, an, ap) {
      var al = ap || {},
        ao,
        am;
      CLX.$("#" + aq + l).val(an || "");
      CLX.$("#" + aq + z).val(V());
      CLX.$("#" + aq)
        .find(X)
        .each(function () {
          if (!ap || !ap.hasOwnProperty([this.name])) {
            ao = this.value;
            if (ao || ao === 0 || ao === false) {
              al[this.name] = ao;
            }
          }
          return true;
        });
      CLX.$("#" + aq)
        .find(B)
        .each(function () {
          ao = this.value;
          if ((ao || ao === 0 || ao === false) && this.checked) {
            al[this.name] = ao;
          }
        });
      if (ar) {
        am = CLX.$("#" + ar).attr(K);
        if (
          am &&
          !al[am] &&
          CLX.$("#" + aq).find(W + "[" + K + "='" + am + "']").length
        ) {
          al[am] = o;
        }
      }
      return al;
    },
    h = function (ap, ao, al, am, an) {
      return function (ar, au, aq) {
        if (al) {
          try {
            al.apply(this, arguments);
          } catch (at) {
            try {
              if (am) {
                am(aq, au, at);
              }
            } finally {
              try {
                if (an) {
                  an.apply(this, arguments);
                }
              } finally {
                window.setTimeout(function () {
                  var av,
                    aw,
                    ay,
                    ax = {};
                  av =
                    "JavaScript Error in a success callback (" +
                    ap +
                    "::" +
                    ao.service +
                    ").\n" +
                    (at.stack || at || "No error details available");
                  aw = Number(
                    CLX.$("#" + m + " input[name^=" + b + "]").attr("maxlength")
                  );
                  if (aw && av.length > aw) {
                    ax[b] = av.substring(0, aw);
                  } else {
                    ax[b] = av;
                  }
                  j.setErrorMessage(av);
                  ay = CLX.Is(N, m);
                  ay.sendRequest(r, null, null, ax);
                  throw av;
                }, 0);
              }
            }
          }
        }
      };
    },
    P = function (au, av, at, an, ap, ar, ao, al) {
      var am, aq;
      j.addTask("request:" + au);
      am = CLX.$("#" + au);
      aq = S(au, av, at, ao);
      if (am.length !== 1) {
        throw (
          "FormId is not set, duplicated id or invalid for service ::" +
          aq.service +
          " :: formId :: " +
          au
        );
      }
      return {
        data: aq,
        traditional: true,
        url: am.attr(I),
        dataType: at,
        contentType: ad,
        type: R,
        timeout: a() * q,
        async: al ? false : true,
        success: h(au, aq, an, ap, ar),
        error: ap,
        complete: function () {
          j.removeTask("request:" + au);
          if (ar) {
            ar.apply(this, arguments);
          }
        },
      };
    },
    O = function (au, av, aq, al, an, ao, am) {
      var aw, ar, at, ap;
      if (!Q) {
        Q = true;
        if (n) {
          n.setBusyCursor(av);
          ab++;
        }
        if (aa) {
          aa(true);
        }
        ar = aj(al);
        at = i(an);
        ap = af(ao, av);
        aw = P(au, av, aq, ar, at, ap, am);
        f = CLX.$.ajax(aw);
      }
    },
    Z = function (am) {
      var al = function (an, ao) {
        if (am) {
          am(ao, ac(an));
        }
      };
      return al;
    },
    ak = function (at, au, ar, am, ao, ap, an, al) {
      var av, aq;
      if (aa) {
        aa(false);
      }
      aq = Z(ao);
      av = P(at, au, ar, am, aq, ap, an, al);
      CLX.$.ajax(av);
      if (n && ab === 0) {
        n.resetBusyCursor(null, true);
      }
    },
    ae = function () {
      if (M) {
        ak(M, null, g, null, null, null, null, true);
      }
    },
    y = function () {
      M = null;
      return true;
    };
  V();
  N = {
    setTimeoutSecs: function (al) {
      G = al;
    },
    sendFgHtmlRequest: function (ap, aq, al, am, an, ao) {
      O(ap, aq, ag, al, am, an, ao);
    },
    sendBgHtmlRequest: function (ap, aq, al, am, an, ao) {
      ak(ap, aq, ag, al, am, an, ao);
    },
    sendFgJsonRequest: function (ap, aq, al, am, an, ao) {
      O(ap, aq, g, al, am, an, ao);
    },
    sendBgJsonRequest: function (ap, aq, al, am, an, ao) {
      ak(ap, aq, g, al, am, an, ao);
    },
    submitForm: function (ao, am, al) {
      j.addTask("submit:" + ao);
      if (aa) {
        aa(true);
      }
      if (am) {
        M = null;
      }
      if (n && al) {
        n.setBusyCursor();
      }
      CLX.$("#" + ao + z).val(V());
      try {
        CLX.$("#" + ao).submit();
      } catch (an) {
        if (an.name !== "NS_ERROR_FAILURE" || an.result !== 2147500037) {
          throw an;
        }
      }
    },
    setUnloadFormId: function (am, al) {
      M = am;
      if (am && CLX.$("#" + am).length) {
        CLX.$(window).unload(ae);
        if (al) {
          CLX.$("#" + al).press(y);
        }
      }
    },
    setMonitorCallback: function (al) {
      aa = al;
    },
    logout: function () {
      var al = CLX.$("#" + J).attr(Y);
      CLX.$("body").hide();
      M = null;
      j.addTask("window:replace");
      window.location.replace(al);
    },
    reset: function (al) {
      f = null;
      if (n && ab === 0) {
        n.resetBusyCursor(al, true);
      }
    },
  };
  return N;
};
CLX.Jf = function () {
  var a = "checked",
    b = "input",
    d = "keypress",
    e = ".styledCheckbox",
    c = function (f) {
      f.toggleClass(a, f.find(b).prop(a));
      f.attr("aria-checked", f.hasClass(a));
    };
  CLX.$(e)
    .change(function () {
      c(CLX.$(this));
    })
    .each(function (f, g) {
      c(CLX.$(g));
    });
  CLX.$(e).on(d, function (f) {
    if (f.keyCode === 32 || f.which === 32) {
      CLX.$(this).find(b).click();
    }
  });
};
CLX.Jg = function () {
  var a = true,
    b = CLX.By();
  if (
    !b.get(CLX.Bw.LOGIN_CONFIG_ALLOW_EMBEDDING_IN_IFRAME) &&
    !b.get(CLX.Bw.SHOW_RUNNING_INSIDE_IFRAME)
  ) {
    a = window.top.location === window.location;
    if (!a) {
      window.top.location.replace(window.location.href);
    }
  }
  return a;
};
CLX.Jh = {
  AUTH_TYPE_TAN: 1,
  AUTH_TYPE_MATRIX: 2,
  AUTH_TYPE_TOKEN: 3,
  AUTH_TYPE_PASSWORD: 5,
  AUTH_TYPE_TOKEN_AND_PASSWORD: 9,
  AUTH_TYPE_MTAN: 10,
  AUTH_TYPE_CERTIFICATE: 100,
  AUTH_TYPE_4P: 1000,
  AUTH_TYPE_SOFT_CERTIFICATE: 10000,
  AUTH_TYPE_MOBILE: 100000,
  AUTH_TYPE_FOTO_TAN: 10000000,
};
CLX.Ji = {
  PHONE_NUMBER_SAVED: 73,
  UNREGISTERED_MOBILE_NUMBER: 104,
  CONF_SMS_SENT: 109,
};
CLX.Jj = {
  INVALID: 0,
  STEP_1: 1,
  STEP_2: 2,
  STEP_3: 3,
  STEP_4: 4,
  STEP_5: 5,
  AUTH: 10,
  LOCKED_TEMP: 11,
  UNLOCK_TEMP: 12,
  LOCKED: 13,
  CHANGEPWD: 14,
  CONFIRM_NEW_MATRIX_ORDER: 15,
  INVALID_CERTIFICATE: 16,
  BUSY: 17,
  REGISTER_MOBILE_NUMBER: 18,
  ACTIVATE_MOBILE_NUMBER: 19,
  CHOOSE_AUTH_METHOD: 20,
  OFFLINE_TOOL_MUST_BROWSER_LOGIN: 21,
  DISPATCHED: 22,
  EXTERNAL_NOTICE: 23,
  ACTIVATE_SOFT_CERT: 24,
  BROWSER_DETECTION: 25,
  LOGOUT_BROWSER_DETECTION: 26,
  LOGOUT_INFO: 27,
  CHANGEPIN: 28,
  LOGOUT_NOTICE: 29,
  PASSWORD_REQUIRED: 30,
  PRE_AUTH: 31,
  CHOOSE_AUTH_METHOD_FOR_OFFLINE_TOOL: 32,
  INTERNAL_NOTICE: 33,
  ACTIVATE_FOTO_TAN: 35,
  LOGOUT_INVALID: 36,
  MOBILE_NUMBER_SAVED: 37,
  SHOW_DISCLAIMER: 38,
  MOBILE_PAGE_REDIRECTION: 39,
  SHOW_OLD_BROWSER: 40,
  PREPARE_CUSTOM_DISCLAIMERS: 41,
  CUSTOM_DISCLAIMER: 42,
};
CLX.Jk = function (l, b, i, f) {
  var h,
    e,
    m,
    a = '<div class="input-placeholder" />',
    g = '<label class="placeholder" style="z-index: 1; opacity: 1;">',
    o = "</label>",
    j = "placeholder",
    n = function (p) {
      if (b !== null) {
        if (p && p !== b) {
          m.hide();
        } else {
          m.show();
        }
      }
    },
    d = function () {
      var p = CLX.Ed(l.val());
      if (!p) {
        m.show();
      } else {
        m.hide();
      }
      return true;
    },
    c = function () {
      var p = CLX.Ed(l.val());
      if (!p && b) {
        m.show();
      }
      n(p);
      return true;
    },
    k = function () {
      if (!f) {
        l.keyup(d);
        l.focusout(c);
        m.press(function () {
          CLX.Gw(l.attr("id"));
        });
      }
      e = true;
    };
  h = {
    init: function (q) {
      l.wrap(a);
      var p = l.val();
      l.val("");
      l.parent().append(g + p + o);
      m = l.parent().find("." + j);
      b = p;
      if (b) {
        k();
      } else {
        m.hide();
        b = null;
      }
      if (q) {
        l.change(function (r) {
          return q(h.getText());
        });
      }
    },
    getEmptyText: function () {
      return b;
    },
    setEmptyText: function (p) {
      if (p && !e) {
        k();
      }
      b = p;
    },
    setText: function (q) {
      var p = q || q === 0;
      if (CLX.Fw(l)) {
        l.val(p ? q : "");
      } else {
        l.val(p ? q : "");
        n(p ? String(q) : "");
      }
    },
    getText: function () {
      var p = CLX.Ed(l.val());
      return f || p !== b ? p : "";
    },
    reset: function () {
      h.setText("");
    },
  };
  return h;
};
CLX.Jl = function (b) {
  var a, d, c;
  a = "[\\?&]" + b + "=([^&#]*)";
  d = new RegExp(a);
  c = d.exec(window.location.href);
  if (c === null) {
    return "";
  }
  return decodeURIComponent(c[1].replace(/\+/g, " "));
};
CLX.Jm = function (c) {
  var b,
    a = "AuthTypes";
  b = c && c[a];
  return CLX.Jd().create(b || []);
};
CLX.Jn = function (Y, n) {
  var h,
    ap = CLX.Ie,
    i = "infoMessages",
    j = "errorMessages",
    a2 = "errBrowser",
    be = "errBusy",
    a0 = "errLoginFailed",
    Q = "errActivationFailed",
    L = "errReset",
    R = "errTimeout",
    at = "errContractLocked",
    aA = "infLastLogoutMissing",
    aa = "msgLastLogoutMissing",
    N = "errContractTempLocked",
    a1 = "errContractLocked",
    af = "msgBadBrowser",
    t = "msgTryAgainLater",
    a = "msgRestart",
    b = "noResponse",
    w = "requestError",
    bC = "msgUsernamePassword",
    bf = "msgMissingInput",
    a8 = "infMandatoryInput",
    bu = "msgBadMobilePhoneNumber",
    ah = "msgInvalidCertificate",
    aV = "errInvalidCertificate",
    aD = "msgNoAccess",
    bz = "msgOfflineToolOnly",
    E = "msgInternalError",
    aw = "infMtanResent",
    aU = "msgMtanResent",
    an = "errMtanMaxResendsReached",
    bb = "msgMtanMaxResendsReached",
    bq = "msgMustUseCertificate",
    P = "msgServerProblem",
    bs = "msgServerTimeout",
    ag = "msgContractLocked",
    al = "msgContractTempLocked",
    a7 = "errContractLockFailed",
    v = "msgContractLockFailed",
    o = "infLockContract",
    by = "infPasswordOrder",
    aT = "msgLockContract",
    aC = "msgPasswordOrder",
    am = "errPasswordOrderFailed",
    aM = "msgPasswordOrderFailed",
    ab = "infMatrixCardOrdered",
    H = "msgMatrixCardOrdered",
    bk = "msgEmptyPwdOld",
    r = "msgEmptyPwdNew",
    q = "msgEmptyPwdNewRepeated",
    av = "msgPwdNewNotValid",
    k = "msgPwdNewTooShort",
    F = "msgPwdNewTooLong",
    aO = "msgPwdNewDontMatch",
    au = "msgPwdNewEqualOld",
    aq = "msgPwdRequirements",
    J = "msgEmptyDesktopCookieName",
    bg = "msgDisclaimerMustBeAccepted",
    f = "msgCustomDisclaimerMustBeAccepted",
    U = "infRegisterMobilePhone",
    bl = "msgRegisterMobilePhoneConfirm",
    aF = "errTanInvalid",
    aj = "msgTanInvalid",
    a3 = "errMatrixInvalid",
    s = "msgMatrixInvalid",
    aG = "msgFotoTANInvalid",
    X = "errMtanInvalid",
    bo = "errFotoTANInvalid",
    T = "msgMtanInvalid",
    m = "infChangePasswordConfirmed",
    a6 = "msgChangePasswordConfirmed",
    z = "infLoggedOut",
    bh = "msgLoggedOut",
    aY = "rp",
    M = "paVersion",
    S = "lt",
    aQ = Y.applyValidationDecoration,
    aL = null,
    K = CLX.$("#" + bl).html(),
    e = {
      0: bC,
      12: bC,
      13: bC,
      14: bC,
      18: bC,
      "12_1": aj,
      "12_2": s,
      "12_10": T,
      "12_10000000": aG,
      "24_1": aj,
      "24_2": s,
      "24_10": T,
      "24_100000": T,
      "24_10000000": aG,
      44: av,
      45: k,
      46: F,
      48: aO,
      59: au,
      23: aD,
      64: bz,
      72: bu,
      102: "msgMtanExpired",
      104: T,
      106: "msgActivationCodeInvalid",
      113: bq,
      138: "msgMasterPasswordInvalid",
      258: J,
      510: "msgMissingUsername",
      511: "msgMissingUsername",
      512: "msgMissingPassword",
      513: "msgMissingMtan",
      514: "msgMissingMatrix",
      515: "msgMissingPhoneNumber",
      516: bk,
      517: r,
      518: q,
      519: "msgMissingTanCode",
      520: "msgMissingActivationCode",
      522: "msgMissingFotoTan",
      3007: bg,
      3107: f,
      missingInput: bf,
    },
    ak = {
      12: "errUsernamePassword",
      "12_1": aF,
      "12_2": a3,
      "12_10": X,
      "12_10000000": bo,
      13: "errUsernamePassword",
      14: "errUsernamePassword",
      18: "errUsernamePassword",
      "24_1": aF,
      "24_2": a3,
      "24_10": X,
      "24_100000": X,
      "24_10000000": bo,
      41: Q,
      43: Q,
      44: "errChangePasswordNew",
      45: "errChangePasswordNew",
      46: "errChangePasswordNew",
      48: "errPwdNewDontMatch",
      49: Q,
      50: Q,
      51: Q,
      52: Q,
      53: Q,
      54: Q,
      59: "errChangePasswordNew",
      72: Q,
      104: X,
      102: "errMtanExpired",
      106: "errActivationCode",
      121: Q,
      122: Q,
      123: Q,
      138: "msgMasterPasswordInvalid",
      511: "errMissingUsername",
      512: "errMissingPassword",
      513: "errMissingMtanCode",
      514: "errMissingMatrixCode",
      515: "errMissingPhoneNumber",
      516: "errMissingChangePasswordOld",
      517: "errMissingChangePasswordNew",
      518: "errMissingChangePasswordConfirm",
      519: "errMissingTanCode",
      520: "errMissingActivationCode",
      522: "errFotoTANInvalid",
      3007: "errDisclaimerAccept",
      3107: "errCustomDisclaimerAccept",
    },
    c = {
      12: CLX.$("#username"),
      13: CLX.$("#username"),
      14: CLX.$("#username"),
      15: CLX.$("#PWDOLD"),
      16: CLX.$("#PWDNEW0"),
      17: CLX.$("#PWDNEW1"),
      18: CLX.$("#username"),
      23: CLX.$("#username"),
      "12_1": CLX.$("#tan"),
      "12_2": CLX.$("#matrix"),
      "12_3": CLX.$("#tokencode"),
      "12_10": CLX.$("#mtan"),
      "12_10000000": CLX.$("#fotoTAN"),
      "24_1": CLX.$("#tan"),
      "24_2": CLX.$("#matrix"),
      "24_3": CLX.$("#tokencode"),
      "24_10": CLX.$("#mtan"),
      "24_100000": CLX.$("#mtan"),
      "24_10000000": CLX.$("#fotoTAN"),
      44: CLX.$("#PWDNEW0"),
      45: CLX.$("#PWDNEW0"),
      46: CLX.$("#PWDNEW0"),
      48: CLX.$("#PWDNEW0"),
      49: CLX.$("#PWDNEW0"),
      64: CLX.$("#username"),
      59: CLX.$("#PWDNEW0"),
      102: CLX.$("#mtan"),
      104: CLX.$("#mtan"),
      106: CLX.$("#activationCode"),
      113: CLX.$("#username"),
      138: CLX.$("#masterPassword"),
      510: CLX.$("#username"),
      511: CLX.$("#username"),
      512: CLX.$("#password"),
      513: CLX.$("#mtan"),
      514: CLX.$("#matrix"),
      515: CLX.$("#PhoneNo"),
      516: CLX.$("#PWDOLD"),
      517: CLX.$("#PWDNEW0"),
      518: CLX.$("#PWDNEW1"),
      519: CLX.$("#tan"),
      520: CLX.$("#activationCode"),
      522: CLX.$("#fotoTAN"),
      "-1001": CLX.$("#username"),
      "-1002": CLX.$("#password"),
      "-1010": CLX.$("#PhoneNo"),
      "-1011": CLX.$("#activationCode"),
      "-1012": CLX.$("#codeA"),
      "-1013": CLX.$("#codeB"),
      "-1014": CLX.$("#contId"),
      "-1015": CLX.$("#dob"),
      "-1020": CLX.$("#errDisclaimerAccept"),
      "-1030": CLX.$("#PWDOLD"),
      "-1031": CLX.$("#PWDNEW0"),
      "-1032": CLX.$("#PWDNEW1"),
      "-1100": CLX.$("#matrix"),
      "-1101": CLX.$("#mtan"),
      "-1102": CLX.$("#desktopCookieName"),
      3107: CLX.$("#customDisclaimerAcceptInput"),
    },
    bt = {
      40: aq,
      "-1001": "msgUsername",
      "-1002": "msgPassword",
      "-1010": "msgPhoneNumber",
      "-1011": "msgActivationCode",
      "-1012": "msgSoftCertCodeA",
      "-1013": "msgSoftCertCodeB",
      "-1014": "msgContractName",
      "-1015": "msgDateOfBirth",
      "-1020": "msgDisclaimerAccept",
      "-1030": "msgChangePasswordOld",
      "-1031": "msgChangePasswordNew",
      "-1032": "msgChangePasswordConfirm",
      "-1100": "msgMatrixCode",
      "-1101": "msgMtanCode",
      "-1102": "msgDesktopCookieName",
    },
    aS = {
      "-1001": "infUsername",
      "-1002": "infPassword",
      "-1010": "infPhoneNumber",
      "-1011": "infActivationCode",
      "-1012": "infSoftCertCodeA",
      "-1013": "infSoftCertCodeB",
      "-1014": "infContractName",
      "-1015": "infDateOfBirth",
      "-1020": "infDisclaimerAccept",
      "-1030": "infChangePasswordOld",
      "-1031": "infChangePasswordNew",
      "-1032": "infChangePasswordConfirm",
      "-1100": "infMatrixCode",
      "-1101": "infMtanCode",
      "-1102": "infDesktopCookieName",
    },
    aI = i,
    aN = j,
    aW,
    aP,
    a5 = "loginPopup",
    W = "errorPopupMask",
    bD = "popupHeaderBar",
    a9 = "loginPopupTitle",
    aK = "loginPopupMessage",
    d = "loginPopupButtonNext",
    V = "loginPopupButtonOk",
    aX = "loginPopupButtonOkAndRestart",
    ac = "loginPopupButtonRestartLogin",
    x = "orderPassword2",
    ad = "lockContract2",
    g = "loginPopupButtonCancelLogin",
    C = "loginPopupButtonSmsReceived",
    aR = false,
    ay,
    bB,
    I,
    aZ = function () {
      CLX.$("#" + aN).hide();
      CLX.$("#" + aI).hide();
      if (bB) {
        window.clearInterval(bB);
      }
      aW.hidePopup();
      aR = false;
    },
    bw = function () {
      aW.hidePopup();
    },
    bE = function () {
      window.location = "crealogix.com://navigation/close";
    },
    bA = function (bK, bJ, bG, bH) {
      var bL, bI, bF;
      bL = CLX.$("#" + bJ);
      bI = CLX.$("#" + bG);
      bL.show().siblings().hide();
      bI.show().siblings().hide();
      if (aN === bH) {
        aR = true;
      }
      if (bK) {
        bF = CLX.$("#" + bK.id() + "Msg");
        bF.append(CLX.$("#" + bH));
      }
      CLX.$("#" + bH).show();
      if (bF) {
        bF.show();
      }
    },
    ai = function (bH, bG, bF) {
      bA(bH, bG, bF, aI);
    },
    A = function (bF) {
      if (!aP) {
        return;
      }
      if (bF === "username" || bF === "password" || bF === "acceptTermsInput") {
        CLX.$("#orderPassword").show();
      }
      CLX.$("#lockContract").show();
    },
    bv = function (bH, bG, bF) {
      if (aQ && bH) {
        aQ(bH, true);
      }
      bA(bH, bG, bF, aN);
      A(bH);
      aR = true;
    },
    aH = function (bF) {
      CLX.$("#" + ac).show();
      bv(undefined, L, a);
    },
    ba = "headingError",
    aJ = "headingWarning",
    br = "headingInfo",
    bp = "popupWarningHeaderBar",
    y,
    a4,
    ax,
    Z = function (bH, bG, bF) {
      if (ax) {
        ax.removeClass(bp);
      }
      if (y) {
        y.html(bH);
        y.removeClass(br);
        y.removeClass(br + "WithIcon");
        y.removeClass(aJ);
        y.removeClass(aJ + "WithIcon");
        y.removeClass(ba);
        y.removeClass(ba + "WithIcon");
        if (!bF || bF === CLX.Gt.ERROR) {
          y.addClass(ba);
          y.addClass(ba + "WithIcon");
        } else {
          if (bF === CLX.Gt.WARN) {
            y.addClass(aJ);
            y.addClass(aJ + "WithIcon");
            ax.addClass(bp);
          } else {
            if (bF === CLX.Gt.INFO) {
              y.addClass(br);
              y.addClass(br + "WithIcon");
            }
          }
        }
      }
      if (a4) {
        a4.html(bG);
      }
    },
    G = function (bH, bG, bF) {
      Z(CLX.$("#" + bH).html(), CLX.$("#" + bG).html(), bF);
      aW.showPopup();
      A(undefined);
    },
    D = function () {
      CLX.$("#" + d).hide();
      CLX.$("#" + V).hide();
      CLX.$("#" + aX).hide();
      CLX.$("#" + ac).hide();
      CLX.$("#" + g).hide();
      CLX.$("#" + x).hide();
      CLX.$("#" + ad).hide();
      CLX.$("#" + C).hide();
    },
    az = function (bF) {
      D();
      G(aV, ah);
    },
    bn = function (bF) {
      D();
      CLX.$("#" + d).show();
      G(R, a);
    },
    u = function (bF) {
      D();
      CLX.$("#" + ac).show();
      G(at, ag);
    },
    B = function (bF) {
      D();
      CLX.$("#" + d).show();
      G(aA, aa, CLX.Gt.WARN);
    },
    bx = function () {
      var bI,
        bG,
        bH,
        bF = CLX.$("#" + al);
      if (0 > I) {
        window.clearInterval(bB);
        CLX.$("#" + ac).click();
        return;
      }
      bI = Math.floor(I / 60);
      bI += ":";
      bG = I % 60;
      if (bG < 10) {
        bI += "0";
      }
      if (bG === 0 && aL) {
        aL();
      }
      bI += bG;
      bH = CLX.Dm(ay, bI);
      bF.html(bH);
      G(N, al, CLX.Gt.WARN);
      I -= 1;
    },
    p = function (bF) {
      I = bF[S];
      bB = window.setInterval(function () {
        bx();
      }, 1000);
      if (aP) {
        CLX.$("#" + x).show();
        CLX.$("#" + ad).show();
      }
      CLX.$("#" + ac).show();
    },
    bc = function (bG) {
      var bF;
      if (bG) {
        bF = bG[M];
      }
      if (bF) {
        CLX.$("#" + ac).unbind();
        CLX.$("#" + ac).press(bE);
      }
      D();
      CLX.$("#" + ac).show();
      G(a1, aT, CLX.Gt.WARN);
    },
    ao = function (bF) {
      D();
      CLX.$("#" + d).show();
      G(aw, aU, CLX.Gt.INFO);
    },
    l = function (bF) {
      D();
      CLX.$("#" + ac).show();
      G(an, bb);
    },
    aB = function (bG) {
      var bF = CLX.$("#" + bl);
      bF.html(CLX.Dm(K, bG[aY]));
      D();
      CLX.$("#" + g).show();
      CLX.$("#" + C).show();
      G(U, bl, CLX.Gt.INFO);
    },
    aE = function (bF) {
      D();
      CLX.$("#" + aX).show();
      G(o, aT, CLX.Gt.INFO);
    },
    bi = function (bF) {
      D();
      CLX.$("#" + V).show();
      G(a7, v);
    },
    bm = function (bF) {
      D();
      CLX.$("#" + aX).show();
      G(by, aC, CLX.Gt.INFO);
    },
    ae = function (bF) {
      D();
      CLX.$("#" + V).show();
      G(am, aM);
    },
    ar = function (bF) {
      D();
      CLX.$("#" + ac).show();
      G(ab, H, CLX.Gt.INFO);
    },
    bj = function (bF) {
      D();
      CLX.$("#" + d).show();
      G(m, a6, CLX.Gt.INFO);
    },
    O = function (bF) {
      D();
      CLX.$("#" + V).show();
      G(z, bh, CLX.Gt.INFO);
    },
    bd = {
      "-11": O,
      "-10": bj,
      "-8": ar,
      "-4": bm,
      "-3": ae,
      "-2": aE,
      "-1": bi,
      3: bi,
      60: u,
      61: p,
      101: ao,
      103: l,
      109: aB,
      111: aH,
      116: az,
      119: bn,
    };
  h = {
    init: function (bF) {
      aP = false;
      aW = bF(a5, W);
      aW.init(bD);
      y = CLX.$("#" + a9);
      a4 = CLX.$("#" + aK);
      ax = CLX.$(".popupHeaderBar", "#" + a5).first();
      aR = false;
      ay = CLX.$("#" + al).html();
    },
    showValidationError: function (bI, bH) {
      var bJ = bI.id(),
        bG = ak[bH],
        bF = e[bH] || e[0];
      bv(bI, bG, bF);
      A(bJ);
    },
    showLoginError: function (bI, bH, bL, bG) {
      var bK = bd[bH],
        bF,
        bJ;
      if (bK) {
        return bK(bG);
      }
      bF = e[bH] || e[0];
      bJ = ak[bH];
      if (bF === bz) {
        aP = false;
      }
      if (!bI) {
        bI = c[bH];
      }
      if (!bJ) {
        bJ = a0;
      }
      bv(bI, bJ, bF);
      if (bI && bF !== bz) {
        A(bI.id());
      }
    },
    showLoginInfo: function (bJ, bG, bI) {
      var bK,
        bH = bd[bG],
        bF = bt[bG];
      if (bH) {
        return bH(bI);
      }
      if (bF) {
        bK = aS[bG] || a8;
        ai(bJ, bK, bF);
      }
    },
    hideLoginInfo: function () {
      CLX.$("#" + aI).hide();
    },
    hidePopup: function () {
      bw();
    },
    showBadBrowserMessage: function () {
      G(a2, af);
    },
    showBusyMessage: function () {
      CLX.$("#" + ac).show();
      G(be, t);
    },
    showServerError: function (bF) {
      CLX.$("#" + ac).show();
      switch (bF) {
        case ap.INTERNAL_SERVER_ERROR:
          G(w, E);
          break;
        case ap.REQUEST_TIMEOUT:
          G(b, bs);
          break;
        default:
          G(w, P);
          break;
      }
    },
    resetAll: function () {
      aZ();
    },
    setPasswordOrderingOffered: function (bF) {
      aP = bF;
    },
    hasError: function () {
      return aR;
    },
    showLockedTempError: function (bF) {
      p(bF);
    },
    showLocked: function (bF) {
      bc(bF);
    },
    showInproperLogout: function (bF) {
      B(bF);
    },
    setResetTimeoutAndPing: function (bF) {
      aL = bF;
    },
  };
  return h;
};
CLX.Jo = function (aX, aP, cy) {
  var j,
    bq = false,
    ap = CLX.Jj,
    br = CLX.Jh,
    bW = CLX.Ji,
    K = "loginForm",
    bQ = "loginScheme",
    aY = "fotoTANbutton",
    E = "flatHeadingTitleLogout",
    bP = "flatHeadingTitle",
    H = CLX.H,
    o = H.PASSWORD_INPUT_SELECTOR,
    T = "submit",
    bv = "cancel",
    dk = "msgChooseMobileNo1Fmt",
    b0 = "msgChooseMobileNo2Fmt",
    dv = "msgTitleFotoTan",
    aE = "msgChooseFotoTan",
    a2 = "matrixHintFmt",
    aR = "expandGroupIcon",
    dp = "collapseGroupIcon",
    ah = "c",
    cQ = "a",
    dw = "ft",
    p = "mft",
    aM = "decAuthType",
    ce = "cta",
    bf = "lta",
    a0 = "tref",
    bn = "changePinSuccessful",
    ca = "nextTokenRequested",
    ch = "cl",
    s = "e",
    cv = "p",
    cC = "d",
    c0 = "lastLoginWithNoLogout",
    c6 = "desktopCookieEnabled",
    dj = "4pi",
    cq = "4pw",
    aW = "mi",
    bT = "matrixMax",
    d = "mc",
    bk = "ab",
    bM = "al",
    dI = "ml",
    ao = "paVersion",
    aH = "paLogin",
    b5 = "pwdReqHints",
    Q = "cn",
    dF = "ci",
    cK = "cs",
    aV = "mti",
    cl = "lc",
    dB = "pC",
    ag = "pwo",
    aI = "tnv",
    ax = "tav",
    ak = "pg",
    c1 = "liF",
    cT = "liN",
    dN = "tni",
    aB = "customDiscId",
    cg = "customDiscText",
    aZ = H.VISIBLE_INPUT_SELECTOR,
    bV = "button[name='login']",
    e = "loginLanguages",
    c2 = "loginLanguageButtons",
    z = "step1",
    y = "step2",
    a8 = "changePwd",
    bz = "changePin",
    cG = "chooseAuthMethod",
    bY = "activateSoftCertificate",
    U = "activateMobileNumber",
    cO = "activationPhone",
    dq = "registerMobileNumber",
    ct = "confirmMatrixOrder",
    av = "cookiesNotSupported",
    c4 = "auth",
    b4 = "stepActivateFotoTAN",
    cs = "stepMobileNumberSaved",
    aS = "softcertActivationConfirmationMessage",
    a1 = "softcertActivationMessage",
    cZ = "softcertActivationIssuer",
    dP = "softcertActivationName",
    bR = "softcertActivationSerial",
    cL = "custName",
    b2 = "lastLoginDateRow",
    R = "desktopCookieLoginRow",
    dh = "desktopCookieLoginNameRow",
    bt = "lastLoginDate",
    al = "pleaseEnterPartialPin",
    G = "pleaseEnterPartialPwd",
    cz = "partialPINChallenge",
    aA = "partialPasswordChallenge",
    L = "declineAuthMethod",
    cX = "msgMatrixCodeForCard",
    bS = "mtanInfoDesc",
    a5 = {},
    bB = {},
    aC = "orderNames",
    bc = [],
    bC = "actionButtons",
    cf = "buttonsNextReset",
    cM = "buttonsNextCancelDisclaimer",
    b7 = "buttonsNextCancelCustomDisclaimer",
    aD = "buttonsNextOldBrowser",
    ai = "buttonsNextCancel",
    M = "buttonsNextRestartLogin",
    af = "buttonsReloadLogin",
    au = "buttonsBankHomepageRestartLogin",
    aT = "restartLogin",
    dd = "reset",
    V = "resendActivationCode",
    df = "buttonsAcceptDeclineSaveTC",
    dD = "buttonsAuthenticated",
    O = "buttonsForgotPasswordCancel",
    cF = "partialPIN",
    cW = "partialPassword",
    S = "partialPinTitle",
    aw = "partialPwdTitle",
    b6 = "tokencodeLabel",
    dl = "tokenReference",
    ac = "password",
    da = "passwordDiv",
    cj = "tan",
    dO = "tanIndex",
    aK = "step2Matrix",
    aF = "matrixCode",
    an = "matrix",
    bu = "step2Mtan",
    aO = "step2FotoTAN",
    ci = "nextTokenLabel",
    dE = "contemporaryPasscodeHelp",
    cc = "legacyPasscodeHelp",
    b1 = "nextTokenHelp",
    cp = "contemporaryAndLegacyPasscodeHelp",
    dr = "tokencodeLabel_TAP",
    aa = "nextTokenLabel_TAP",
    b = "legacyPasscodeHelp_TAP",
    dC = "nextTokenHelp_TAP",
    ba = "newPin",
    dt = "newPinConfirmation",
    bX = "changePinHelp",
    n = "changePinSuccessfulHelp",
    dA = "broadcastMessage",
    cm = "mtanObtainHintCollapse",
    cD = "mtanObtainHintPanel",
    cS = "fotoTANObtainHintCollapse",
    l = "fotoTANObtainHintPanel",
    a7 = "matrixHintCollapse",
    az = "matrixHintPanel",
    by = "tokenNumberHintCollapse",
    b8 = "tokenNumberHintPanel",
    dH = "desktopCookieInput",
    bg = "disclaimerAcceptedInput",
    bO = "acceptTerms" + CLX.Gq.INPUT,
    D = "acceptTermsAuth" + CLX.Gq.INPUT,
    x = "logout",
    c8 = "logoutInfo",
    bF = "News",
    cx = "Feedback",
    bJ = "loginPanel",
    bj = "loginForm",
    F = "showDisclaimer",
    cY = "showOldBrowser",
    c7 = "showCustomDisclaimer",
    J = "customDisclaimerText",
    co = "customDisclaimerId",
    cn = "maxLogCookies",
    cP = "msgMaxNumberLoginCookies",
    dn =
      '<div class="tagAttachmentDownloadLink  messageAttachment  padding-left" data-maatid="maat_id">maat_file_name</div>',
    b9 = '<a href="info_url" target="_blank">info_url_name</a>',
    bL = "loginWelcomeAuth",
    b3 = "loginWelcomeAuthFirstLogin",
    bl = "login",
    bU = "submit3",
    dm = 13,
    bH,
    I,
    A,
    aj,
    aN,
    cw,
    g,
    bZ,
    r,
    cV = CLX.Jc(c2),
    dz,
    X,
    bx,
    ab,
    q,
    bp = CLX.Ig(dH),
    a4 = CLX.Ig(bg),
    bh = CLX.Ig(bO),
    v = CLX.Ig(D),
    cr,
    W = CLX.$("#ShowLogoutGoodByePopup").text(),
    be = false,
    ds = false,
    k = function (dS, dR) {
      var dQ;
      if (dS) {
        dQ = CLX.$("#" + dS).find(aZ);
      }
      if (dQ && dQ.length) {
        CLX.Fz(dQ);
      } else {
        dR = dR || dS;
        if (dR) {
          CLX.Fz(CLX.$("#" + dR).find(bV));
        }
      }
    },
    i = function (dR, dQ) {
      var dU = CLX.$("#" + dR).text(),
        dT,
        dS;
      if (dU) {
        dT = dU.split(" ");
        for (dS = 0; dS < dT.length; dS++) {
          dQ[dS] = dT[dS];
        }
      }
    },
    bK = function (dQ, dT, dY, dW) {
      var dU,
        dV,
        dS,
        dR = [],
        dX;
      for (dU = 0; dU < dQ.length; ++dU) {
        dV = dQ[dU];
        dS = dV < bc.length - 1 ? bc[dV] : String(dV) + bc[bc.length - 1];
        dR[dR.length] = dS;
        dX = CLX.Dm(dW, dS);
        CLX.$("#" + dT + (dU + 1))
          .title(dX)
          .ariaLabel(dX);
      }
      return CLX.Dm(dY, dR);
    },
    cN = function (dQ, dR) {
      if (dR !== dQ) {
        if (dQ) {
          CLX.$("#" + dQ).hide();
          if (cw) {
            cw();
          }
        }
        if (dR) {
          CLX.$("#" + dR)
            .stop(true, false)
            .fadeIn(aX.getEffectsMs());
        }
      }
      return dR;
    },
    dM = function (dS, dT, dQ, dU, dR) {
      if (
        (dT === z || dT === F || dT === cY) &&
        cV &&
        cV.getOptionCount() > 1
      ) {
        CLX.$("#" + e).show();
      } else {
        CLX.$("#" + e).hide();
      }
      if (r && dQ !== r) {
        CLX.$("#" + r).hide();
      }
      if (dQ) {
        CLX.$("#" + dQ).show();
      }
      r = dQ;
      g = cN(g, dS);
      bZ = cN(bZ, dT);
      if (dU) {
        aP.showLoginError(undefined, dU);
      } else {
        if (dR) {
          aP.showLoginInfo(undefined, dR);
        }
      }
      if (dT || dQ) {
        k(dT, dQ);
      }
      return dU;
    },
    bo = function (dQ) {
      aP.showBusyMessage(dQ);
    },
    aJ = function () {
      if (a4.isChecked()) {
        CLX.$("#" + T + "Disclaimer").removeAttr("disabled");
      } else {
        CLX.$("#" + T + "Disclaimer").attr("disabled", "disabled");
      }
    },
    dG = function (dQ) {
      return CLX.$("#" + dQ);
    },
    m = function (dR, dQ) {
      var dS = dG(dQ);
      if (ds) {
        if (dR.isChecked()) {
          dS.prop("disabled", false);
        } else {
          dS.prop("disabled", true);
        }
      }
    },
    dK = function (dR) {
      var dQ,
        dS = dR[ch];
      if (dS) {
        cV.setActiveOptionId(dS);
      }
      aJ();
      CLX.$("#" + bC).show();
      dQ = dM(bJ, F, cM, dR[s]);
      return dQ;
    },
    bE = function (dT) {
      var dQ, dS, dR;
      cw();
      dR = dT[aB];
      CLX.$("#" + T + "CustomDisclaimer").removeAttr("disabled");
      CLX.$("#" + bv + "CustomDisclaimer").removeAttr("disabled");
      CLX.$("#" + co).val(dR);
      CLX.$("#" + J).empty();
      dS = dT[cg];
      if (CLX.B(dS)) {
        dS = dS.join("\n");
      }
      if (dS) {
        CLX.$("#" + J).append(dS);
      }
      CLX.$("#" + bC).show();
      dQ = dM(c7, null, b7, dT[s]);
      return dQ;
    },
    de = function (dR) {
      var dQ,
        dS = dR[ch];
      if (dS) {
        cV.setActiveOptionId(dS);
      }
      CLX.$("#" + bC).show();
      dQ = dM(bJ, cY, aD, dR[s]);
      return dQ;
    },
    c = function (dQ) {
      window.location.reload();
    },
    dc = function (dQ) {
      CLX.$("#" + T + "Only").click();
    },
    a9 = function () {
      if (CLX.$("#" + dA + "0Text").text().length > 1) {
        CLX.$("#" + dA).show();
      }
    },
    ae = function (dR) {
      var dQ = dR[c0];
      if (dQ) {
        return aP.showInproperLogout(dR);
      }
    },
    bi = function (dS) {
      var dQ, dT, dR;
      for (dQ = 0; dQ < 4; dQ++) {
        dT = CLX.$("#" + dA + dQ + "Title");
        dT.html("");
        dR = CLX.$("#" + dA + dQ + "Text");
        dR.html("");
        CLX.$("#" + dA + dQ + "Attachments").empty();
        CLX.$("#" + dA + dQ + "Url1").empty();
        CLX.$("#" + dA + dQ + "Url2").empty();
        CLX.$("#" + dA + dQ + "Url3").empty();
        CLX.$("#" + dA + dQ).hide();
      }
    },
    cE = function (dQ) {
      if (
        dQ.substring(0, 8) !== "https://" &&
        dQ.substring(0, 7) !== "http://"
      ) {
        dQ = "http://" + dQ;
      }
      return dQ;
    },
    a = function (dR, dQ, dT) {
      var dS;
      if (dR) {
        dS = b9.replace("info_url_name", dQ).replace("info_url", cE(dR));
        CLX.$("#" + dA + dT)
          .append(dS)
          .show();
      } else {
        CLX.$("#" + dA + dT).hide();
      }
    },
    bA = function (dR, dW) {
      var dS = dR.Notices,
        dY,
        dU,
        dX,
        dZ,
        dT,
        dQ,
        dV = dR[cQ];
      if (dV === CLX.Jh.AUTH_TYPE_CERTIFICATE) {
        return;
      }
      ae(dR);
      if (!dR.Notices) {
        return;
      }
      bi();
      for (dU = 0; dU < 4; dU++) {
        if (!dS[dU]) {
          break;
        }
        dX = CLX.$("#" + dA + dU + "Title");
        dX.html(dS[dU].Title);
        dY = dS[dU].Text;
        if (CLX.B(dY)) {
          dY = dY.join(dW);
        }
        if (dS[dU].Attachments) {
          for (dQ = 0; dQ < dS[dU].Attachments.length; dQ++) {
            dT = dn
              .replace("maat_id", dS[dU].Attachments[dQ].attId)
              .replace("maat_file_name", dS[dU].Attachments[dQ].attFn);
            CLX.$("#" + dA + dU + "Attachments").append(dT);
          }
        }
        a(dS[dU].urlText1, dS[dU].url1, dU + "Url1");
        a(dS[dU].urlText2, dS[dU].url2, dU + "Url2");
        a(dS[dU].urlText3, dS[dU].url3, dU + "Url3");
        dZ = CLX.$("#" + dA + dU + "Text");
        dZ.html(dY);
        CLX.$("#" + dA + dU).show();
      }
      CLX.$("#" + dA).show();
    },
    Z = function (dQ) {
      bA(dQ, CLX.Dg);
    },
    bI = function (dQ) {
      bA(dQ, "\n");
    },
    db = function (dQ) {
      if (dQ[s]) {
        return aP.showLoginError(undefined, -3, dQ);
      }
      return aP.showLoginError(undefined, -4, dQ);
    },
    bm = function (dQ) {
      if (dQ[s]) {
        return aP.showLoginError(undefined, -1, dQ);
      }
      return aP.showLoginError(undefined, -2, dQ);
    },
    cJ = function () {
      CLX.$("#buttonsNextRestartNEXT").text(CLX.$("#button_next").text());
    },
    cB = function () {
      CLX.$("#" + K)
        .find(o)
        .val("");
      CLX.$("#encryptedPassword").val("");
      CLX.$("#PWDNEW0").val("");
      CLX.$("#PWDNEW1").val("");
    },
    du = function (dQ) {
      if (dQ.masterPassword) {
        CLX.$("#masterPasswordSection").show();
      } else {
        CLX.$("#masterPasswordSection").hide();
      }
    },
    dL = function (dS) {
      var dQ,
        dT = z,
        dR = cf,
        dU = dS[ch];
      cB();
      du(dS);
      if (dS[ag]) {
        aP.setPasswordOrderingOffered(true);
      }
      if (dS[cl]) {
        return bm(dS);
      }
      if (dS[dB]) {
        return db(dS);
      }
      if (8 === dS[ah]) {
        return aP.showLoginError(undefined, -8, dS);
      }
      if (dU) {
        cV.setActiveOptionId(dU);
      }
      if (dS[ao] && dS[aH] && dS[aH] === "1") {
        if (dS[s]) {
          CLX.$("#" + dd).show();
        } else {
          dT = null;
          dR = null;
        }
      } else {
        CLX.$("#" + bC).show();
      }
      CLX.$("#" + bC).show();
      Z(dS);
      dQ = dM(bJ, dT, dR, dS[s]);
      cJ();
      if (dS[s]) {
        CLX.$("#" + O).show();
      }
      a9();
      CLX.$("#disclaimer").hide();
      return dQ;
    },
    t = function (dQ) {
      CLX.$("#" + dO).text(dQ[dN]);
      CLX.$("#" + cj).show();
    },
    am = function (dU) {
      var dT,
        dR = dU[s],
        dV = [dU[aW], dU[d]],
        dQ,
        dS = [dU[bT]];
      dT = CLX.Dm(aN, dV);
      CLX.$("#" + aF).html(dT);
      CLX.$("#" + an).attr("placeholder", dT);
      CLX.$("#" + aK).show();
      if (dR) {
        CLX.$("#" + an).val("");
      }
      dQ = CLX.Dm(q, dS);
      CLX.$("#matrixHintMsg").html(dQ);
    },
    bD = function (dQ) {
      CLX.$("#" + dE).hide();
      CLX.$("#" + cc).hide();
      CLX.$("#" + cp).hide();
      CLX.$("#" + b1).hide();
      CLX.$("#" + b6).hide();
      CLX.$("#" + ci).hide();
      CLX.$("#" + n).hide();
      CLX.$("#" + dl + "Row").hide();
      if (dQ[a0]) {
        CLX.$("#" + dl).html(dQ[a0]);
        CLX.$("#" + dl + "Row").show();
      }
      if (dQ[ca]) {
        CLX.$("#" + ci).show();
        CLX.$("#" + b1).show();
      } else {
        if (dQ[bn] && dQ[bf]) {
          CLX.$("#" + n).show();
          CLX.$("#" + b6).show();
        } else {
          if (dQ[ce] && dQ[bf]) {
            CLX.$("#" + b6).show();
            CLX.$("#" + cp).show();
          } else {
            if (dQ[bf]) {
              CLX.$("#" + b6).show();
              CLX.$("#" + cc).show();
            } else {
              CLX.$("#" + b6).show();
              CLX.$("#" + dE).show();
            }
          }
        }
      }
    },
    ck = function (dQ) {
      CLX.$("#" + ac).show();
    },
    f = function (dQ) {
      if (dQ[ca]) {
        CLX.$("#" + aa).show();
        CLX.$("#" + dC).show();
      } else {
        CLX.$("#" + dr).show();
        CLX.$("#" + b).show();
      }
    },
    bb = function (dQ) {
      var dS = dQ[c6],
        dR = dQ[aV];
      if (dR && CLX.$("#" + bQ).text() !== "true") {
        CLX.$("#mtanObtainHintMsg").html(dR);
        CLX.$("#mtanObtainHint").show();
      } else {
        CLX.$("#mtanObtainHint").hide();
      }
      CLX.$("#" + V).show();
      CLX.$("#" + bu).show();
      if (dS) {
        CLX.$("#" + R).show();
      }
    },
    h = function (dS) {
      var dR = dS[dw],
        dT = "",
        dQ,
        dU = dS[p];
      if (!dU) {
        CLX.$("#" + aO).show();
        if (dR instanceof Array) {
          for (dQ = 0; dQ < dR.length; dQ++) {
            dT += dR[dQ];
          }
        } else {
          dT = dR;
        }
        CLX.$("#qrCodeFotoTANImg").attr("src", "data:image/png;base64," + dT);
      } else {
        window.location.replace(
          "crealogix.com://clxfototan/mobileauth?mac=" + dR
        );
      }
      if (CLX.$("#" + aY).text() === "true") {
        CLX.$("#buttonsNextRestartLogin").addClass("loginButtonFix");
      }
    },
    C = function (dR) {
      var dS, dQ;
      dS = dR[dj].split(", ");
      dQ = dR[cq].split(", ");
      CLX.$("#" + cz).text(bK(dS, cF, bH, A));
      CLX.$("#" + aA).text(bK(dQ, cW, I, aj));
    },
    cR = function (dQ) {
      var dR = dQ[aV];
      if (dR) {
        CLX.$("#mtanObtainHintMsg").html(dR);
        CLX.$("#mtanObtainHint").show();
      } else {
        CLX.$("#mtanObtainHint").hide();
      }
      CLX.$("#" + V).show();
      CLX.$("#" + bu).show();
      if (dQ[ao] && dQ[aH] && dQ[aH] === "1") {
        CLX.$("#" + aT).hide();
      }
    },
    aL = function (dR) {
      var dQ = dR[cC];
      if (dQ) {
        CLX.$("#" + b3).hide();
        CLX.$("#" + bL).show();
        CLX.$("#" + bt).text(dQ);
        CLX.$("#" + b2).show();
      } else {
        CLX.$("#" + b2).hide();
        CLX.$("#" + bt).empty();
        CLX.$("#" + b3).show();
        CLX.$("#" + bL).hide();
      }
    },
    c9 = function (dR) {
      var dQ = dR[cn];
      if (dQ) {
        CLX.$("#" + cP).show();
      } else {
        CLX.$("#" + cP).hide();
      }
    },
    Y = function (dW) {
      var dV, dQ, dS, dR, dU, dT;
      if (be) {
        return;
      }
      bq = true;
      dV = dW[aI];
      dQ = dW[ax];
      if (!dV && !dQ) {
        return;
      }
      dS = aX.getPresentation();
      if (dV) {
        dR = dS.formatDate(new Date(dV));
        dU = CLX.$("#acceptTerms1");
        m(bh, bU);
      } else {
        dR = dS.formatDate(new Date(dQ));
        dU = CLX.$("#acceptTerms2");
      }
      dT = dU.find(".loginTermsAndConditions");
      dT.html(CLX.Dm(dT.html(), dR));
      dU.show().siblings().hide();
      CLX.$("#disclaimer").show();
    },
    dJ = function (dV) {
      var dT,
        dX,
        dU,
        dY,
        dW,
        dS,
        dR = dV[cv],
        dQ;
      cB();
      if (dV[ag]) {
        aP.setPasswordOrderingOffered(true);
      }
      if (dV[cl]) {
        return bm(dV);
      }
      Y(dV);
      dT = y;
      dX = dV[cQ];
      if (dX) {
        dY = a5[dX];
        if (dY) {
          dT += dY;
        }
      }
      dS = dV[s];
      if (24 === dS || 12 === dS) {
        dS = dS + "_" + dX;
        dV[s] = dS;
      }
      dU = Number(dX);
      if (bB.hasOwnProperty(dU)) {
        dW = bB[dU];
        dW(dV);
      }
      if (dR) {
        CLX.$("#" + cL).text(dR);
      }
      aL(dV);
      CLX.$("#" + bC).show();
      dQ = dM(bJ, dT, M, dV[s], dV[ah]);
      cJ();
      return dQ;
    },
    c5 = function (dQ) {
      return dM(null, b4, M, null);
    },
    dx = function (dQ) {
      return dM(null, cs, au, null);
    },
    cd = function (dQ) {
      if (dQ[ak]) {
        aP.showLoginInfo(undefined, "-10", dQ);
      }
    },
    aQ = function (dW) {
      var dV, dQ, dS, dR, dU, dT;
      if (bq) {
        return true;
      }
      bq = true;
      dV = dW[aI];
      dQ = dW[ax];
      if (!dV && !dQ) {
        return;
      }
      dS = aX.getPresentation();
      if (dV) {
        dR = dS.formatDate(new Date(dV));
        dU = CLX.$("#acceptTerms1Auth");
        m(v, bl);
      } else {
        dR = dS.formatDate(new Date(dQ));
        dU = CLX.$("#acceptTerms2Auth");
      }
      dT = dU.find(".loginTermsAndConditionsAuth");
      dT.html(CLX.Dm(dT.html(), dR));
      dU.show().siblings().hide();
      CLX.$("#disclaimerAuth").show();
    },
    ad = function (dR) {
      var dQ = dR[cQ];
      cB();
      cd(dR);
      if (dQ === br.AUTH_TYPE_SOFT_CERTIFICATE) {
        CLX.$("#" + x).hide();
        CLX.$("#" + bJ).hide();
      }
      CLX.$("#" + bC).hide();
      CLX.$("#" + cL).text(dR[cv]);
      CLX.$("#loginGroup").hide();
      CLX.$("#" + bC).hide();
      aL(dR);
      c9(dR);
      Z(dR);
      aQ(dR);
      return dM(c4, null, dD, dR[s]);
    },
    dy = function (dQ) {
      cB();
      return aP.showLockedTempError(dQ);
    },
    cb = function (dQ) {
      cB();
      return aP.showUnlockTemp(dQ);
    },
    c3 = function (dQ) {
      cB();
      return aP.showLocked(dQ);
    },
    bs = function (dQ) {
      return dM(null, null, null, dQ[s]);
    },
    P = function (dR) {
      var dT = dR[s],
        dS = "40",
        dQ;
      CLX.$("#" + cL).text(dR[cv]);
      if (dR[b5] && !dT) {
        aP.showLoginInfo(undefined, dS, dR);
      }
      dQ = dM(a8, null, ai, dT);
      CLX.$("#buttonsNextRestartNEXT").text(CLX.$("#button_change").text());
      return dQ;
    },
    bG = function (dQ) {
      return dM(null, ct, M, dQ[s]);
    },
    at = function (dQ) {
      return dM(av, null, null);
    },
    bd = function (dU) {
      var dT,
        dW,
        dQ,
        dS,
        dV = dU[dI],
        dR = CLX.Jm(dU);
      dT = dM(U, null, M, dU[s]);
      CLX.$("#buttonsNextRestartNEXT").text(CLX.$("#button_activate").text());
      if (dV === 0) {
        dV = 1;
      }
      for (dS = 0; dS < dR.length; ++dS) {
        dW = dR[dS].rec.id;
        if (dW === "Mobile" + dV) {
          dQ = dR[dS].rec.name;
          CLX.$("#" + cO).text(dQ);
        }
      }
      return dT;
    },
    a3 = function (dQ) {
      CLX.$("#" + dP).text(dQ[Q]);
      CLX.$("#" + cZ).text(dQ[dF]);
      CLX.$("#" + bR).text(dQ[cK]);
      CLX.$("#" + bC).show();
      return dM(a1, bY, M, dQ[s]);
    },
    aq = function (dS) {
      var dT,
        dR,
        dY,
        dQ,
        dX,
        dW,
        dU,
        dV = "CLX.";
      if (dS) {
        for (dT = 0; dT < dS.length; ++dT) {
          dR = dS[dT].rec.id;
          if (dR.indexOf(dV) >= 0 && CLX.$("#" + bQ).text() === "true") {
            dY = dS[dT].rec.id;
            if (dY.indexOf(dV) + 4 === dY.length) {
              dY = dY.substring(0, dY.length - (dY.length - dY.indexOf(dV)));
            } else {
              dY = dY.substring(dY.indexOf(dV) + 4, dY.length);
            }
            dR = dY;
          }
          dQ = dS[dT].rec.name;
          dX = dS[dT].rec.realId;
          if ("Mobile1" === dR) {
            CLX.$("#chooseAuthMobile1InputDesc").html(CLX.Dm(dz, dQ));
          }
          if ("Mobile2" === dR) {
            CLX.$("#chooseAuthMobile2InputDesc").html(CLX.Dm(X, dQ));
          }
          if (typeof dX === "string" && dX.indexOf("CLX_FotoTAN_") === 0) {
            dW = CLX.$("#chooseAuthFotoTANTemplate")
              .clone()
              .attr("id", dX + "Container")
              .appendTo("#chooseAuthenticationGrid")
              .show();
            dW.find("[title='chooseAuthFotoTANTemplateLabel']")
              .attr("title", dR)
              .attr("aria-label", dR)
              .find("[value='chooseAuthFotoTANTemplateValue']")
              .attr("value", dX)
              .attr("id", dX);
            dW.find("label").attr("for", dX);
            dW.find("label")
              .find("div[id!='chooseAuthFotoTANTemplateIdInputDesc']")
              .html(bx);
            dW.find("label")
              .find("div[id='chooseAuthFotoTANTemplateIdInputDesc']")
              .attr("id", dX + "Desc")
              .html(CLX.Dm(ab, dQ));
          }
        }
        if (dS.length !== 0) {
          dU = window.setInterval(function () {
            if (CLX.$("#chooseAuth" + dS[0].rec.id + "Input").length) {
              CLX.$("#chooseAuth" + dS[0].rec.id + "Input").focus();
              window.clearInterval(dU);
            }
          }, 100);
        }
      }
      return dS;
    },
    N = function (dQ) {
      if (dQ === 1) {
        CLX.$("#chooseAuthMobile1Input").prop("checked", true);
      } else {
        if (dQ === 2) {
          CLX.$("#chooseAuthMobile2Input").prop("checked", true);
        } else {
          CLX.$("#" + bj + " input:visible")
            .first()
            .prop("checked", true);
        }
      }
    },
    w = function (dQ, dS) {
      var dR,
        dV,
        dU = false,
        dT = ["CLX", "FotoTAN"].join(".");
      if (dQ) {
        for (dR = 0; dR < dQ.length; ++dR) {
          dV = dQ[dR].rec.id;
          switch (dS) {
            case CLX.Jh.AUTH_TYPE_TAN:
              if ("Tan" === dV) {
                dU = true;
              }
              break;
            case CLX.Jh.AUTH_TYPE_MATRIX:
              if ("Matrix" === dV) {
                dU = true;
              }
              break;
            case CLX.Jh.AUTH_TYPE_PASSWORD:
              if ("Password" === dV) {
                dU = true;
              }
              break;
            case CLX.Jh.AUTH_TYPE_MTAN:
              if ("Mobile1" === dV || "Mobile2" === dV) {
                dU = true;
              }
              break;
            case CLX.Jh.AUTH_TYPE_CERTIFICATE:
              if ("Mobile1" === dV || "Mobile2" === dV) {
                dU = true;
              }
              break;
            case CLX.Jh.AUTH_TYPE_MOBILE:
              if ("Mobile1" === dV || "Mobile2" === dV) {
                dU = true;
              }
              break;
            case CLX.Jh.AUTH_TYPE_FOTO_TAN:
              if (dV.substring(0, dT.length) === dT) {
                dU = true;
              }
              break;
          }
          if (dU) {
            break;
          }
        }
      }
      return dU;
    },
    cI = function (dQ, dU) {
      var dR = dU ? dU[bM] : null,
        dT = dU ? dU[dI] : null,
        dS = false;
      if (dQ) {
        dS = w(dQ, dR);
        if (dS) {
          switch (dR) {
            case CLX.Jh.AUTH_TYPE_TAN:
              CLX.$("#chooseAuthTanInput").prop("checked", true);
              break;
            case CLX.Jh.AUTH_TYPE_MATRIX:
              CLX.$("#chooseAuthMatrixInput").prop("checked", true);
              break;
            case CLX.Jh.AUTH_TYPE_PASSWORD:
              CLX.$("#chooseAuthPasswordInput").prop("checked", true);
              break;
            case CLX.Jh.AUTH_TYPE_MTAN:
              N(dT);
              break;
            case CLX.Jh.AUTH_TYPE_CERTIFICATE:
              N(dT);
              break;
            case CLX.Jh.AUTH_TYPE_MOBILE:
              N(dT);
              break;
            case CLX.Jh.AUTH_TYPE_FOTO_TAN:
              CLX.$("#" + bj + ' input[id^="CLX_FotoTAN_"]:visible')
                .first()
                .prop("checked", true);
              break;
            default:
              CLX.$("#" + bj + " input:visible")
                .first()
                .prop("checked", true);
          }
        } else {
          CLX.$("#" + bj + " input:visible")
            .first()
            .prop("checked", true);
        }
      }
    },
    cA = function (dT) {
      var dU,
        dS,
        dW,
        dX = dT ? dT[aM] : null,
        dY,
        dV,
        dR,
        dQ;
      CLX.$("#" + V).hide();
      if (dX) {
        CLX.$("#" + L).val(dX);
      }
      dS = dT[bk];
      if (br.AUTH_TYPE_4P === dT[cQ] && br.AUTH_TYPE_TOKEN === dS) {
        dW = df;
      } else {
        dW = M;
      }
      if (cr) {
        CLX.$("#chooseAuthenticationGrid").html(cr);
      } else {
        cr = CLX.$("#chooseAuthenticationGrid").html();
      }
      CLX.$("#chooseAuthenticationGrid").children().hide();
      dY = CLX.Jm(dT);
      dY = aq(dY);
      dU = 0;
      while (dU < dY.length) {
        dR = "#chooseAuth" + dY[dU].rec.id;
        dV = CLX.$(dR);
        dV.show();
        dU++;
      }
      CLX.$("#" + bC).show();
      dQ = dM(bJ, cG, dW, dT[s]);
      cI(dY, dT);
      CLX.$("#chooseAuthenticationGrid")
        .children()
        .each(function () {
          if (!CLX.$(this).is(":visible")) {
            CLX.$(this).remove();
          }
        });
      return dQ;
    },
    ar = function (dQ) {
      CLX.$("#" + ba).show();
      CLX.$("#" + dt).show();
      CLX.$("#" + bX).show();
      return dM(null, bz, cf, dQ[s]);
    },
    bw = function (dQ) {
      a9();
      CLX.$("#" + da).removeClass("displayNone");
    },
    cU = function (dR) {
      var dQ = dR[ah];
      if (dQ === bW.PHONE_NUMBER_SAVED || dQ === bW.CONF_SMS_SENT) {
        aP.showLoginInfo(undefined, dQ, dR);
        return dR[s];
      }
      return dM(dq, null, M, dR[s]);
    },
    aG = function (dQ) {
      if (dQ.activationDone) {
        CLX.$("#" + aS).show();
        return dM(aS, af, dQ[s]);
      }
      CLX.$("#" + bC).hide();
      CLX.$("#" + bJ).hide();
      CLX.$("#" + b2).hide();
      bI(dQ);
      if (W) {
        aP.showLoginInfo(undefined, "-11", dQ);
      }
      if (dQ[c1]) {
        CLX.$("#" + c8 + cx).show();
      }
      if (dQ[cT]) {
        CLX.$("#" + c8 + bF).show();
      }
      if (CLX.$("#" + bQ).text() === "true") {
        CLX.$("#" + E).removeClass("displayNone");
        CLX.$("#" + bP).addClass("displayNone");
      }
      return dM(c8, undefined, dQ[s]);
    },
    di = function (dR) {
      var dQ, dS;
      dS = CLX.$("#username").val();
      dQ = dM(
        "lockContractPanel",
        undefined,
        "buttonsRestartLoginForgotPasswordLock"
      );
      CLX.$("#contId").focusin();
      CLX.$("#contId").val(dS);
      CLX.$("#contId").focusout();
      return dQ;
    },
    cu = function (dS, dQ, dR) {
      if (dR) {
        dS.hide();
        dQ.show();
        dQ.ariaExpanded(true);
        return;
      }
      dS.press(function () {
        if (dQ.is(":visible")) {
          dQ.hide();
          dQ.ariaExpanded(false);
        } else {
          dQ.show();
          dQ.ariaExpanded(true);
        }
        dS.toggleClass(aR);
        dS.toggleClass(dp);
      });
    },
    u = function () {
      var dR, dQ;
      dR = CLX.$("#" + cm);
      dQ = CLX.$("#" + cD);
      cu(dR, dQ, false);
    },
    aU = function () {
      var dR, dQ;
      dR = CLX.$("#" + cS);
      dQ = CLX.$("#" + l);
      cu(dR, dQ, false);
    },
    bN = function () {
      var dR, dQ;
      dR = CLX.$("#" + a7);
      dQ = CLX.$("#" + az);
      cu(dR, dQ, false);
    },
    ay = function () {
      CLX.$("[name=authMethod]")
        .parent()
        .closest("[tabindex]")
        .press(function (dQ) {
          if (dQ.keyCode !== CLX.Ah.ENTER) {
            CLX.$(this).find("input").prop("checked", true);
          } else {
            return true;
          }
        });
    },
    B = function () {
      var dR, dQ;
      dR = CLX.$("#" + by);
      dQ = CLX.$("#" + b8);
      cu(dR, dQ, false);
    },
    dg = function (dQ) {
      window.location.replace("?lang=" + dQ);
    },
    cH = function (dQ, dR) {
      var dS = CLX.$("#" + dQ);
      dS.focusin(function () {
        if (aP.hasError()) {
          return;
        }
        aP.showLoginInfo(dS, dR);
      });
      dS.focusout(function () {
        aP.hideLoginInfo();
      });
    },
    a6 = {};
  a6[ap.INVALID] = dc;
  a6[ap.STEP_1] = dL;
  a6[ap.STEP_2] = dJ;
  a6[ap.AUTH] = ad;
  a6[ap.LOCKED_TEMP] = dy;
  a6[ap.UNLOCK_TEMP] = cb;
  a6[ap.LOCKED] = c3;
  a6[ap.CHANGEPWD] = P;
  a6[ap.CONFIRM_NEW_MATRIX_ORDER] = bG;
  a6[ap.INVALID_CERTIFICATE] = bs;
  a6[ap.BUSY] = bo;
  a6[ap.REGISTER_MOBILE_NUMBER] = cU;
  a6[ap.ACTIVATE_MOBILE_NUMBER] = bd;
  a6[ap.CHOOSE_AUTH_METHOD] = cA;
  a6[ap.EXTERNAL_NOTICE] = Z;
  a6[ap.ACTIVATE_SOFT_CERT] = a3;
  a6[ap.LOGOUT_INFO] = aG;
  a6[ap.CHANGEPIN] = ar;
  a6[ap.PASSWORD_REQUIRED] = bw;
  a6[ap.INTERNAL_NOTICE] = Z;
  a6[ap.PRE_AUTH] = ae;
  a6[ap.ACTIVATE_FOTO_TAN] = c5;
  a6[ap.MOBILE_NUMBER_SAVED] = dx;
  a6[ap.SHOW_DISCLAIMER] = dK;
  a6[ap.MOBILE_PAGE_REDIRECTION] = c;
  a6[ap.SHOW_OLD_BROWSER] = de;
  a6[ap.CUSTOM_DISCLAIMER] = bE;
  a5[br.AUTH_TYPE_TAN] = "Tan";
  a5[br.AUTH_TYPE_MATRIX] = "Matrix";
  a5[br.AUTH_TYPE_TOKEN] = "Token";
  a5[br.AUTH_TYPE_PASSWORD] = "Password";
  a5[br.AUTH_TYPE_TOKEN_AND_PASSWORD] = "TokenAndPassword";
  a5[br.AUTH_TYPE_MTAN] = "Mtan";
  a5[br.AUTH_TYPE_4P] = "PartialPINPwd";
  a5[br.AUTH_TYPE_MOBILE] = "Mobile";
  bB[br.AUTH_TYPE_TAN] = t;
  bB[br.AUTH_TYPE_MATRIX] = am;
  bB[br.AUTH_TYPE_TOKEN] = bD;
  bB[br.AUTH_TYPE_PASSWORD] = ck;
  bB[br.AUTH_TYPE_TOKEN_AND_PASSWORD] = f;
  bB[br.AUTH_TYPE_MTAN] = bb;
  bB[br.AUTH_TYPE_4P] = C;
  bB[br.AUTH_TYPE_MOBILE] = cR;
  bB[br.AUTH_TYPE_FOTO_TAN] = h;
  j = {
    init: function (dQ) {
      dz = CLX.$("#" + dk).html();
      X = CLX.$("#" + b0).html();
      bx = CLX.$("#" + dv).html();
      ab = CLX.$("#" + aE).html();
      q = CLX.$("#" + a2).html();
      bp.init(function () {
        if (bp.isChecked()) {
          CLX.$("#" + dh).show();
        } else {
          CLX.$("#" + dh).hide();
        }
      });
      a4.init(aJ);
      bh.init(function () {
        m(bh, bU);
      });
      v.init(function () {
        m(v, bl);
      });
      cw = dQ;
      u();
      bN();
      aU();
      ay();
      B();
      i(aC, bc);
      bH = CLX.$("#" + al).text();
      I = CLX.$("#" + G).text();
      A = CLX.$("#" + S).text();
      aj = CLX.$("#" + aw).text();
      aN = CLX.$("#" + cX).text();
      CLX.$("#" + dA + "Title").empty();
      CLX.$("#" + dA + "Text").empty();
      CLX.$("#" + bS).empty();
      CLX.$("#disclaimer").hide();
      cV.init(dg);
      cH("activationCode", -1011);
      cH("desktopCookieName", -1102);
      CLX.$("#" + bj).keypress(function (dR) {
        if (dR.which === dm) {
          CLX.$("#" + bU).click();
        }
      });
    },
    processResponse: function (dT, dS) {
      var dR, dQ;
      CLX.$("#l0").val(undefined);
      CLX.$("#l1").val(undefined);
      if (!be && dS.ShowTermsInDisclaimerAlwaysOnWelcomePage) {
        be = true;
      }
      if (!ds && dS.disableLoginButtonIfTermsCbNotChecked) {
        ds = true;
      }
      dR = a6[dT];
      if (dR) {
        CLX.$("#" + dA).hide();
        dQ = dR(dS);
      }
      return dQ;
    },
    resetDynamicText: function () {
      CLX.$("#" + cL).empty();
      CLX.$("#" + bt).empty();
      CLX.$("#" + aF).empty();
      CLX.$("#" + bS).empty();
      CLX.$("#" + dO).empty();
      CLX.$("#l0").val(undefined);
      CLX.$("#l1").val(undefined);
    },
    block: function () {
      bo();
    },
    showLockContract: function () {
      di();
    },
    showCookiesNotSupportedSection: function () {
      at();
    },
  };
  return j;
};
CLX.Jp = function (aj, S, L) {
  var P,
    aa = aj.getPresentation(),
    U = S,
    ao = CLX.H,
    I = ao.VISIBLE_INPUT_SELECTOR,
    T = "username",
    aw = "password",
    an = "masterPassword",
    aQ = "password2",
    ai = "activationCode",
    aY = "submit",
    ab = "loginSatellite",
    g = "loginMainFlat",
    u = "loginScheme",
    ar = "loginFlatFooter",
    d = "loginFlatAside",
    V = "desktopCookieName",
    Q = "PWDOLD",
    Z = "PWDNEW0",
    o = "PWDNEW1",
    aL = "PhoneNo",
    av = "matrix",
    a = "mTAN2",
    b = "mtan",
    G = "fotoTAN",
    k = "tan",
    O = "tokencode",
    ac = "codeA",
    ah = "codeB",
    A = "orderNewMatrixCardInput",
    C = "acceptTerms",
    aK = "acceptTermsAuth",
    aN = "customDisclaimerAcceptInput",
    aP = "dateOfBirth",
    aE = "contId",
    ak = "primaryButton",
    j = "errorMessages",
    n = "messageBox",
    aB = "messageAbove",
    ay = "themeNumber-",
    y = "themeNumber-headfoot-",
    r = "theme-border-",
    i = "leftArrowFontIconPayment-",
    aS = 1,
    s = 3,
    aO,
    al = /^[A-Za-z0-9]{1,}$/,
    aD = /^(\+|0{1,2})[^0]\d{8,}$/,
    D = {
      INVALID_INPUT: 3,
      INVALID_USERNAME: 12,
      PWD_NEW_NO_MATCH: 48,
      NON_MATCHING_PINS: 65,
      LEADING_ZERO: 66,
      BAD_PHONE_NUMBER: 72,
      WROING_PASSWORD: 102,
      WROING_MASTER_PASSWORD: 138,
      MISSING_USERNAME_PASSWORD: 510,
      MISSING_USERNAME: 511,
      MISSING_PASSWORD: 512,
      MISSING_MTAN: 513,
      MISSING_MATRIX: 514,
      MISSING_PHONE_NO: 515,
      MISSING_PASSWORD_OLD: 516,
      MISSING_PASSWORD_NEW: 517,
      MISSING_PASSWORD_CONFIRM: 518,
      MISSING_PASSCODE: 519,
      MISSING_ACTIVATION_CODE: 520,
      MISSING_PASSWORD2: 521,
      MISSING_FOTO_TAN: 522,
      MANDATORY_INPUT_MISSING: "missingInput",
      DISCLAIMER_NOT_ACCEPTED: 3007,
      CUSTOM_DISCLAIMER_NOT_ACCEPTED: 3107,
    },
    aH = {
      3: T,
      12: T,
      20: aQ,
      23: T,
      24: b,
      48: Z,
      72: aL,
      102: aw,
      138: an,
      510: T,
      511: aw,
      512: b,
      513: av,
      514: aL,
      515: Q,
      516: Z,
      517: o,
      519: ai,
      520: aQ,
      522: G,
    },
    M = {
      username: D.MISSING_USERNAME,
      password: D.MISSING_PASSWORD,
      password2: D.MISSING_PASSWORD2,
      mtan: D.MISSING_MTAN,
      fotoTAN: D.MISSING_FOTO_TAN,
      tan: D.MISSING_PASSCODE,
      activationCode: D.MISSING_ACTIVATION_CODE,
      PhoneNo: D.MISSING_PHONE_NO,
      dateOfBirth: D.MANDATORY_INPUT_MISSING,
    },
    af = al,
    aR = CLX.Ht(ai, CLX.Ed, CLX.Ed, CLX.Jk),
    aJ = CLX.Ht(V, CLX.Ed, CLX.Ed, CLX.Jk),
    R = CLX.Ht(ac, CLX.Ed, CLX.Ed, CLX.Jk),
    ag = CLX.Ht(ah, CLX.Ed, CLX.Ed, CLX.Jk),
    aC = CLX.Ht(aE, CLX.Ed, CLX.Ed, CLX.Jk),
    J = CLX.Ii(aP, aP + "Cal", aa, L, false),
    aV = CLX.Ht(T, CLX.Ed, CLX.Ed, CLX.Jk),
    H = CLX.Ht(aw, CLX.Ed, CLX.Ed, CLX.Jk),
    z = CLX.Ht(an, CLX.Ed, CLX.Ed, CLX.Jk),
    az = CLX.Ht(aQ, CLX.Ed, CLX.Ed, CLX.Jk),
    aG = CLX.Ht(Q, CLX.Ed, CLX.Ed, CLX.Jk),
    Y = CLX.Ht(Z, CLX.Ed, CLX.Ed, CLX.Jk),
    aq = CLX.Ht(o, CLX.Ed, CLX.Ed, CLX.Jk),
    aI = CLX.Ht(aL, CLX.Ed, CLX.Ed, CLX.Jk),
    ae = CLX.Ht(av, CLX.Ed, CLX.Ed, CLX.Jk),
    v = CLX.Ht(b, CLX.Ed, CLX.Ed, CLX.Jk),
    B = CLX.Ht(G, CLX.Ed, CLX.Ed, CLX.Jk),
    au = CLX.Ht(a, CLX.Ed, CLX.Ed, CLX.Jk),
    h = CLX.Ht(k, CLX.Ed, CLX.Ed, CLX.Jk),
    am = CLX.Ht(O, CLX.Ed, CLX.Ed, CLX.Jk),
    aU = CLX.Ig(A),
    t = CLX.Ig(C),
    ax = CLX.Ig(aK),
    N = CLX.Ig(aN),
    aX,
    m = CLX.$("#lockContract"),
    ap = function () {
      var a0,
        aZ =
          aR.getInputValue() +
          "|" +
          R.getInputValue() +
          "|" +
          ag.getInputValue() +
          "|" +
          aC.getInputValue() +
          "|" +
          J.getDateMs() +
          "|" +
          aV.getInputValue() +
          "|" +
          H.getInputValue() +
          "|" +
          z.getInputValue() +
          "|" +
          az.getInputValue() +
          "|" +
          aG.getInputValue() +
          "|" +
          Y.getInputValue() +
          "|" +
          aq.getInputValue() +
          "|" +
          aI.getInputValue() +
          "|" +
          ae.getInputValue() +
          "|" +
          v.getInputValue() +
          "|" +
          au.getInputValue() +
          "|" +
          B.getInputValue() +
          "|" +
          h.getInputValue() +
          "|" +
          am.getInputValue() +
          "|" +
          aU.getInputValue() +
          "|" +
          t.getInputValue() +
          "|" +
          ax.getInputValue() +
          "|";
      a0 = CLX.$(
        "#chooseAuthenticationGrid input[type='radio'][name='authMethod']:checked"
      );
      if (a0.length > 0) {
        aZ += a0.val();
      }
      return aZ;
    },
    l = function (aZ) {
      return !aZ ? D.MISSING_USERNAME : undefined;
    },
    e = function (aZ) {
      return !aZ ? D.MISSING_PASSCODE : undefined;
    },
    aT = function (aZ) {
      return !aZ ? D.MISSING_PASSWORD : undefined;
    },
    q = function (aZ) {
      return !aZ ? D.MISSING_PASSWORD_OLD : undefined;
    },
    x = function (aZ) {
      return !aZ ? D.MISSING_PASSWORD_NEW : undefined;
    },
    w = function (aZ) {
      if (!aZ) {
        return D.MISSING_PASSWORD_CONFIRM;
      }
      if (Y.getInputValue() !== aZ) {
        return D.PWD_NEW_NO_MATCH;
      }
      return undefined;
    },
    aA = function (aZ) {
      if (aU.isChecked() || "1" === m.val()) {
        return undefined;
      }
      if (!aZ) {
        return D.MISSING_MATRIX;
      }
      return af && !af.test(aZ) ? D.MISSING_MATRIX : undefined;
    },
    X = function (aZ) {
      return aZ === "" || aZ === undefined ? D.INVALID_INPUT : undefined;
    },
    f = function (a0) {
      var aZ;
      if (!a0) {
        return D.MISSING_PHONE_NO;
      }
      a0 = a0.replace(/[ \(\)\'\-]/g, "");
      if (!aD.test(a0)) {
        aZ = D.BAD_PHONE_NUMBER;
      }
      aI.setValue(a0);
      return aZ;
    },
    c = function (a0) {
      var aZ;
      if (a0) {
        aZ = a0.indexOf("+");
        a0 = a0.replace(/\D/g, "");
        if (aZ !== -1) {
          a0 = "+" + a0;
        }
      }
      return a0;
    },
    E = function (aZ) {
      if ("1" === m.val()) {
        return undefined;
      }
      if (!aZ) {
        return D.MISSING_MTAN;
      }
      return af && !af.test(aZ) ? D.MISSING_MTAN : undefined;
    },
    W = function (aZ) {
      if ("1" === m.val()) {
        return undefined;
      }
      if (!aZ) {
        return D.MISSING_FOTO_TAN;
      }
      return af && !af.test(aZ) ? D.MISSING_FOTO_TAN : undefined;
    },
    aM = function (a0) {
      var aZ = CLX.$("#dob").val();
      return !aZ ? D.MANDATORY_INPUT_MISSING : undefined;
    },
    ad = function (aZ) {
      return !aZ ? D.DISCLAIMER_NOT_ACCEPTED : undefined;
    },
    aW = function (aZ) {
      return !aZ ? D.CUSTOM_DISCLAIMER_NOT_ACCEPTED : undefined;
    },
    at = {
      username: l,
      tan: e,
      password: aT,
      password2: aT,
      mobilePwd: X,
      matrix: aA,
      PhoneNo: f,
      mtan: E,
      fotoTAN: W,
      mTAN2: E,
      PWDOLD: q,
      PWDNEW0: x,
      PWDNEW1: w,
      dateOfBirth: aM,
      acceptTermsInput: ad,
      acceptTermsAuthInput: ad,
      customDisclaimerAcceptInput: aW,
    },
    p = {
      username: aV,
      activationCode: aR,
      mtan: v,
      fotoTAN: B,
      mTAN2: au,
      password: H,
      masterPassword: z,
      password2: az,
      PWDNEW0: Y,
      PWDNEW1: aq,
      PWDOLD: aG,
      matrix: ae,
      PhoneNo: aI,
      tan: h,
      tokencode: am,
      dateOfBirth: J,
      acceptTermsInput: t,
      acceptTermsAuthInput: ax,
      customDisclaimerAcceptInput: N,
    },
    K = function (a0, a1) {
      var aZ;
      if (!a0.val()) {
        aZ = M[a0.id()] || D.MANDATORY_INPUT_MISSING;
      }
      return aZ;
    },
    F = function (a8, a6) {
      var a4, a5, a1, a7, a3, a0, aZ, a2;
      CLX.$.each(
        CLX.$("#" + a8)
          .find(I + ",input[type=checkbox],input[type=radio]")
          .get()
          .reverse(),
        function () {
          a7 = CLX.$(this);
          if (
            a7.is("input[type=checkbox],input[type=radio]") &&
            !a7.siblings("label").is(":visible")
          ) {
            return;
          }
          a1 = a7.id();
          aZ = p[a1];
          a0 = at[a1];
          if (a0) {
            a2 =
              aZ === aU || aZ === t || aZ === ax || aZ === N
                ? CLX.Hx(a1)
                : aZ.getInputValue();
            a4 = a0(a2);
          } else {
            a4 = K(a7, a6);
          }
          if (a6) {
            a6(a7, Boolean(a4));
          }
          if (a4) {
            a5 = a4;
            a3 = a7;
          }
        }
      );
      if (a5) {
        U.showValidationError(a3, a5);
        CLX.Fz(a3);
      }
      return a5;
    },
    aF = function (aZ) {
      var a0 = J.getDate();
      if (a0) {
        CLX.$("#dob").val(a0.getTime());
        CLX.$("#doff").val(a0.getTimezoneOffset());
      }
    };
  P = {
    init: function () {
      aR.init(null, true);
      aJ.init(null, true);
      R.init(null, true);
      ag.init(null, true);
      aC.init(null, true);
      J.setMinDate(new Date(0, 0, 0));
      J.setMaxDate(new Date());
      J.init(aj.getEffectsMs(), aF, true);
      ae.init(null, true);
      v.init(null, true);
      au.init(null, true);
      B.init(null, true);
      H.init(null, true);
      z.init(null, true);
      az.init(null, true);
      aI = CLX.Ht(aL, c, c, CLX.Jk);
      aI.init(null, true);
      Y.init(null, true);
      aq.init(null, true);
      aG.init(null, true);
      h.init(null, true);
      am.init(null, true);
      aV.init(null, true);
      aX = ap();
      if (CLX.$("#" + u).text() === "true") {
        aO = Math.floor(Math.random() * (s - aS + 1)) + aS;
        CLX.$("#" + d + ",#" + ab).addClass(ay + aO);
        CLX.$("#" + ar + ",#" + g + ",#" + aY).addClass(y + aO);
        CLX.$("." + ak).addClass(y + aO);
        CLX.$("." + j).addClass(r + aO);
        CLX.$("." + n + " ." + aB).addClass(i + aO);
        CLX.$("." + n).addClass(r + aO);
      }
    },
    validateInputFields: function (aZ, a0) {
      return F(aZ, a0);
    },
    fieldIdForFailureReason: function (aZ) {
      return aH[aZ];
    },
    setMatrixcodeExpr: function (aZ) {
      af = aZ;
    },
    hasChanged: function () {
      return ap() !== aX;
    },
  };
  return P;
};
CLX.Jq = function () {
  return Math.min(window.outerWidth, window.outerHeight);
};
CLX.Jr = function (ay) {
  var U,
    am = CLX.Jj,
    aM = CLX.H,
    a2 = aM.BODY_SELECTOR,
    aV = aM.TEXT_INPUT_SELECTOR,
    aO = aM.NUMBER_INPUT_SELECTOR,
    aI = aM.TELEPHONE_INPUT_SELECTOR,
    w = aM.PASSWORD_INPUT_SELECTOR,
    n = aM.CHECKBOX_SELECTOR,
    D = "s",
    f = "e",
    aY = "t",
    bj = "paVersion",
    c = "paLogin",
    p = "touchstart touchend touchmove touchenter touchleave touchcancel",
    k = "loginForm",
    af = "username",
    e = "submit",
    bb = "reset",
    o = "restartLogin",
    aS = "reloadLogin",
    g = "banksHomepage",
    a0 = "loginPopupButtonRestartLogin",
    ah = "loginPopupButtonSmsReceived",
    aC = "resendActivationCode",
    aU = "retry",
    T = "abort",
    aq = "login",
    h = "cancel",
    u = "logout",
    ai = "accept",
    J = "decline",
    ae = "print",
    ab = "lockContract",
    H = "buttonLock",
    ax = "partialPIN1",
    aA = "partialPIN2",
    aG = "partialPIN3",
    az = "partialPassword1",
    aE = "partialPassword2",
    aL = "partialPassword3",
    ag = "authMethod",
    I = "acceptAuthMethod",
    a = "declineAuthMethod",
    av = " input[name='touchEventsDetected']",
    P = " input[name='screenSize']",
    al = " input[name='resendMTAN']",
    M = "persistent",
    bd = "lock",
    ba = "order",
    aW = "orderPassword",
    bk = "disclaimerAcceptedInput",
    s = "INFO_EXTERNAL",
    a4 = "INFO_INTERNAL",
    aR = "INFO_LOGOUT_EXTERNAL",
    A = "tan",
    aT = "fotoTAN",
    t,
    aX,
    Z,
    j,
    a5,
    d = 5,
    aN = false,
    B = CLX.$("#logoutAddress").attr("href"),
    C,
    aF = CLX.Il(k),
    au,
    y,
    N,
    aB,
    an = {},
    Y = {},
    bg = {},
    bc = "cash_logo_link",
    X = "cash_logo_link_page",
    bf = "cash_inform_link",
    ad = "cash_inform_link_page",
    aK = "cash_invest_link",
    be = "cash_discuss_link",
    ac = "cash_discuss_link_page",
    z = function (bo, bp) {
      var bm, bn;
      bo.preventDefault();
      bm = CLX.$("#" + bp);
      if (bm.length) {
        bn = bm.text();
        window.location = bn;
      }
    },
    S = function () {
      var bm = CLX.$("#" + bc);
      return !!bm.length;
    },
    v = function () {
      var bo, bp, bm, bn;
      bo = CLX.$("#" + bc);
      bp = CLX.$("#" + bf);
      bm = CLX.$("#" + aK);
      bn = CLX.$("#" + be);
      if (bo.length) {
        bo.click(function (bq) {
          z(bq, X);
        });
      }
      if (bp.length) {
        bp.click(function (bq) {
          z(bq, ad);
        });
      }
      if (bm.length) {
        bm.click(function (bq) {
          bq.preventDefault();
        });
      }
      if (bn.length) {
        bn.click(function (bq) {
          z(bq, ac);
        });
      }
    },
    m = function (bq, br) {
      var bp, bo, bn, bm;
      if (bq) {
        bp = CLX.$(bq);
        bo = bp.find("#l0 a").attr("href");
        bn = bp.find("#l1 a").attr("href");
        bm = bp.find("#l2 a").attr("href");
        CLX.$("#l0 a").attr("href", bo);
        CLX.$("#l1 a").attr("href", bn);
        CLX.$("#l2 a").attr("href", bm);
      }
    },
    at = function (bq, bs) {
      var bp, br, bm, bo, bn;
      if (bq) {
        bp = bq[D];
        bo = Y[bp];
        bn = bg[bp];
        if (bo) {
          bo(bq);
        }
        try {
          br = j.processResponse(bp, bq);
          if (br) {
            bm = aX.fieldIdForFailureReason(br);
            if (bm) {
              ay.applyValidationDecoration(CLX.$("#" + bm), true);
            }
            if (br === 111) {
              Z.showServerError();
            }
          }
        } finally {
          CLX.Gk(k, true);
          if (bn) {
            bn(bq);
          }
        }
      }
    },
    F = function (bn, bm) {
      if (y === aq) {
        t.setBusyCursorLock(false);
        t.resetBusyCursor(aq);
        CLX.Gk(k, true);
        j.block();
        au = false;
      } else {
        Z.showServerError(bn);
      }
    },
    aH = function (bn, bo, bm) {
      if (!au) {
        CLX.$("#" + k + al).val("");
      }
    },
    ak = function (bn) {
      var bm = CLX.Jl("redirect_uri");
      y = bn;
      if (aB) {
        CLX.$("#" + k + av).val("1");
      }
      C.sendFgJsonRequest(k, bn, at, F, aH, { redirect_uri: bm });
    },
    q = function (bn, bm) {
      a5.setAuthenticated(bn);
      a5.setTimeoutMins(bm || d);
    },
    aa = function () {
      var bm, bo, bn;
      bm =
        "18460247739203247582659674754286967991765780596130996719811702212263817829805544209536738604771516787433691933421333577056451170708105665682615249313153089483885458394841674595104664757891005911968140908182514268846648901868123940960796818301079916672250452758806078553838981661501808158046138841653653745300086407783491957545884767569135578950776478986735975552293584298683034100775542521409915556488819398322598347352708341699496232791729833219617729008727070067406823042834939057209568587818246700113780534953463411951762976359846381978481185724033672513933764000337639426113480575175114287546056180578515737635277";
      bo = "65537";
      if (CLX.$("#password").is(":visible")) {
        bn = RSA.encrypt(
          UTF8.encode(CLX.$("#password").val()),
          new RSAPublicKey(bm, bo)
        );
        CLX.$("#encryptedPassword").val(bn);
        CLX.$("#password").val(
          bm.substring(0, CLX.$("#password").val().length)
        );
      }
      if (CLX.$("#PWDNEW0").is(":visible")) {
        bn = RSA.encrypt(
          UTF8.encode(CLX.$("#PWDNEW0").val()),
          new RSAPublicKey(bm, bo)
        );
        CLX.$("#encryptedPWDNEW0").val(bn);
        CLX.$("#PWDNEW0").val("");
      }
      if (CLX.$("#PWDNEW1").is(":visible")) {
        bn = RSA.encrypt(
          UTF8.encode(CLX.$("#PWDNEW1").val()),
          new RSAPublicKey(bm, bo)
        );
        CLX.$("#encryptedPWDNEW1").val(bn);
        CLX.$("#PWDNEW1").val("");
      }
    },
    Q = function () {
      var bm;
      bm = aX.validateInputFields(k, ay.applyValidationDecoration);
      if (!bm) {
        Z.resetAll();
        aa();
        ak(e);
      }
      return false;
    },
    a9 = function () {
      var bm;
      bm = aX.validateInputFields(k, ay.applyValidationDecoration);
      if (!bm) {
        Z.resetAll();
        ak(e);
      }
      return false;
    },
    bi = function () {
      var bm;
      bm = aX.validateInputFields(k, ay.applyValidationDecoration);
      if (!bm) {
        CLX.$("#" + e + "CustomDisclaimer").attr("disabled", "disabled");
        CLX.$("#" + h + "CustomDisclaimer").attr("disabled", "disabled");
        Z.resetAll();
        ak(e + "CustomDisclaimer");
      }
      return false;
    },
    O = function () {
      CLX.$("#" + ba).val("1");
      CLX.$("#" + bd).val("");
      CLX.$("#" + H).hide();
      CLX.$("#" + e + "5").show();
      CLX.$("#orderPasswordTitle").show();
      CLX.$("#lockContractTitle").hide();
      CLX.$("#lockContractInfoMessageDiv").hide();
      CLX.$("#orderPasswordInfoMessageDiv").show();
      return j.showLockContract();
    },
    x = function () {
      Z.resetAll();
      return O();
    },
    r = function () {
      CLX.$("#" + ba).val("");
      CLX.$("#" + bd).val("1");
      CLX.$("#" + H).show();
      CLX.$("#" + e + "5").hide();
      CLX.$("#orderPasswordTitle").hide();
      CLX.$("#lockContractTitle").show();
      CLX.$("#lockContractInfoMessageDiv").show();
      CLX.$("#orderPasswordInfoMessageDiv").hide();
      return j.showLockContract();
    },
    L = function () {
      Z.resetAll();
      return r();
    },
    E = function () {
      Z.resetAll();
      ak(ah);
      return false;
    },
    b = function () {
      window.location.replace(CLX.$("#logoLinkId").attr("href"));
      return false;
    },
    W = function () {
      CLX.$("#" + k + al).val("1");
      Z.resetAll();
      ak(e);
      return false;
    },
    i = function () {
      CLX.$("#" + ag).val(CLX.$("#" + I).val());
      return Q();
    },
    V = function () {
      CLX.$("#" + ag).val(CLX.$("#" + a).val());
      return Q();
    },
    l = function () {
      window.print();
    },
    aJ = function (bm) {
      if (!bm.hasClass(M)) {
        ay.applyValidationDecoration(bm, false, true);
      }
    },
    a6 = function (bm) {
      bm.actionKey(Q, true);
    },
    a8 = function (bm) {
      CLX.$("#" + bm).autoTab(an[bm]);
    },
    aZ = function (bm) {
      CLX.$("#" + k)
        .find(aV + "," + aO + "," + aI)
        .each(function () {
          bm(CLX.$(this));
          return true;
        });
      CLX.$("#" + k)
        .find(w)
        .each(function () {
          bm(CLX.$(this));
          return true;
        });
      CLX.$("#" + k)
        .find(n)
        .each(function () {
          bm(CLX.$(this));
          return true;
        });
    },
    K = function () {
      aZ(aJ);
    },
    ar = function () {
      Z.resetAll();
      j.resetDynamicText();
      CLX.$("#" + ba).val("");
      CLX.$("#" + bd).val("");
      K();
    },
    G = function () {
      window.location.reload();
    },
    aj = function () {
      CLX.$("#" + bk).val("false");
      ak(e);
    },
    aQ = function () {
      ar();
      ak(bb);
      return false;
    },
    ap = function () {
      ar();
      ak(u);
      return false;
    },
    aw = function () {
      au = true;
      t.setBusyCursorLock(true);
      CLX.Gk(k, false);
      ak(aq);
    },
    aP = function () {
      C.sendFgHtmlRequest(k, e, m, F, aw, { redirectLinksOnly: true });
    },
    ao = function () {
      var bm;
      if (!au) {
        bm = aX.validateInputFields(k, ay.applyValidationDecoration);
        if (!bm) {
          aP();
        }
      }
      return false;
    },
    bh = function (bm) {
      CLX.$(".tagAttachmentDownloadLink")
        .unbind()
        .press(function () {
          var bn = CLX.$(this).data("maatid");
          CLX.$("#broadcastMsgattachmentMaatId").val(bn);
          CLX.$("#broadcastMsgattachmentInfoTypeId").val(bm);
          CLX.$("#broadcastMsgattachmentForm").submit();
        });
    },
    a1 = function (bp) {
      var bm = bp[c],
        bo = bp[bj],
        bn = bp[f];
      if (bo && bm && bm === "1" && !bn) {
        window.location = "crealogix.com://navigation/getCredentials";
      }
    },
    aD = function (bp) {
      var bm = bp[c],
        bo = bp[bj],
        bn = bp[f];
      if (B && B.toLowerCase().indexOf("sentinel") > -1) {
        aN = true;
      }
      if (!aN && bo && bm && bm === "1" && !bn) {
        window.location = "crealogix.com://navigation/close";
      }
    },
    bl = function () {
      aw();
    },
    a7 = function () {
      bh(s);
      ak(e);
    },
    R = function () {
      Z.hidePopup();
      aQ();
    },
    a3 = function () {
      a5.ping();
    };
  an[ax] = aA;
  an[aA] = aG;
  an[aG] = az;
  an[az] = aE;
  an[aE] = aL;
  Y[am.DISPATCHED] = bl;
  bg[am.AUTH] = function (bm) {
    bh(a4);
    q(true, bm[aY]);
  };
  bg[am.EXTERNAL_NOTICE] = a7;
  bg[am.STEP_1] = function (bm) {
    bh(s);
    a1(bm);
  };
  bg[am.PRE_AUTH] = a7;
  bg[am.INTERNAL_NOTICE] = a7;
  bg[am.LOGOUT_INFO] = function (bm) {
    bh(aR);
    aD(bm);
    a5.disable();
  };
  bg[am.PREPARE_CUSTOM_DISCLAIMERS] = a7;
  U = {
    start: function () {
      CLX.Ia();
      CLX.Ib();
      CLX.Ic();
      t = CLX.Ir();
      Z = CLX.Jn(ay, t);
      Z.init(t.createPopupManager);
      Z.setResetTimeoutAndPing(a3);
      if (CLX.Iz(ay.getMinToleratedIEVersion())) {
        CLX.Ja(ay.getBrowserInfoCookiePrefix());
        t.applyInputFieldCharacterFilter(
          ay.getInputFieldCharacterFilter(),
          ay.getBadCharacterExpr()
        );
        if (!ay.isAutocompleteAllowed()) {
          t.disableAutocomplete();
        }
        C = CLX.Je(t, ay.isLogoutRequiredAfterBadRequest());
        a5 = CLX.Iy(ay, C);
        a5.init(t.createPopupManager, undefined, ap);
        q(false);
        N = CLX.Iv(ay);
        N.init();
        aX = CLX.Jp(ay, Z, N);
        aX.init();
        j = CLX.Jo(ay, Z, aX);
        j.init(K);
        if (!navigator.cookieEnabled) {
          j.showCookiesNotSupportedSection();
        } else {
          CLX.$("#" + e).press(Q);
          CLX.$("#" + e + "2").press(Q);
          CLX.$("#" + e + "3").press(Q);
          CLX.$("#" + e + "4").press(Q);
          CLX.$("#" + e + "5").press(Q);
          CLX.$("#" + e + "Only").press(a9);
          CLX.$("#" + e + "Disclaimer").press(Q);
          CLX.$("#" + e + "OldBrowser").press(Q);
          CLX.$("#" + e + "CustomDisclaimer").press(bi);
          CLX.$("#loginPopupButtonNext").press(Z.hidePopup);
          CLX.$("#loginPopupButtonOk").press(Z.hidePopup);
          CLX.$("#loginPopupButtonOkAndRestart").press(R);
          CLX.$("#loginPopupButtonCancelLogin").press(Z.hidePopup);
          CLX.$("#" + aU).press(Q);
          CLX.$("#" + aq).press(ao);
          CLX.$("#" + bb).press(aQ);
          CLX.$("#" + bb + "2").press(aQ);
          CLX.$("#" + o).press(aQ);
          CLX.$("#" + aS).press(G);
          CLX.$("#" + o + "2").press(aQ);
          CLX.$("#" + o + "3").press(aQ);
          CLX.$("#" + o + "4").press(aQ);
          CLX.$("#" + o + "5").press(aQ);
          CLX.$("#" + a0).press(aQ);
          CLX.$("#" + h + "CustomDisclaimer").press(aQ);
          CLX.$("#" + ah).press(E);
          CLX.$("#" + aC).press(W);
          CLX.$("#" + h).press(aQ);
          CLX.$("#" + h + "Disclaimer").press(aj);
          CLX.$("#" + T).press(aQ);
          CLX.$("#" + T + "2").press(aQ);
          CLX.$("#" + u).press(ap);
          CLX.$("#" + ai).press(i);
          CLX.$("#" + J).press(V);
          CLX.$("#" + ae).press(l);
          CLX.$("#" + ab).press(r);
          CLX.$("#" + aW).press(O);
          CLX.$("#" + ab + "2").press(L);
          CLX.$("#" + aW + "2").press(x);
          CLX.$("#" + H).press(Q);
          CLX.$("#" + H).press(Q);
          CLX.$("#" + g).press(b);
          CLX.$(a2).one(p, function () {
            aB = true;
          });
          aZ(a6);
          a8(ax);
          a8(aA);
          a8(aG);
          a8(az);
          a8(aE);
          CLX.$("#" + k + P).val(CLX.Jq());
          ak(e);
        }
        if (S()) {
          v();
        }
      } else {
        Z.showBadBrowserMessage();
      }
      CLX.$("html").on("touchstart", function (bm) {
        bm.preventDefault();
        bm.stopPropagation();
        CLX.$("html").unbind("touchstart");
      });
    },
    viewDidLoad: function () {
      CLX.$("#" + af).focus();
    },
    injectCredentials: function (bo, bm) {
      var bn = { username: bo, password: bm };
      CLX.$("#" + af).focusin();
      CLX.$("#" + af).val(bo);
      CLX.$("#" + af).focusout();
      bn = aF.prepareAjaxParams(bn);
      C.sendFgJsonRequest(k, e, at, F, aH, bn);
    },
    injectMobileAuthResponse: function (bm) {
      var bn = {};
      bn[aT] = bm[A];
      C.sendFgJsonRequest(k, e, at, F, aH, bn);
    },
  };
  return U;
};
CLX.createLogin = function () {
  var c = "getLoginDriver",
    b = "getLoginDriverMobile",
    a = function () {
      var d,
        f,
        e = CLX.By();
      if (e.get(CLX.Bw.LOGIN_CONFIG_ALLOW_EMBEDDING_IN_IFRAME)) {
        CLX.It().enableIframeSupport(
          e.get(CLX.Bw.LOGIN_CONFIG_EMBEDDING_IN_IFRAME_DOMAIN_URL)
        );
      }
      if (CLX.Jg()) {
        d = CLX.Ix();
        f = CLX.Jr(d);
        CLX[c] = function () {
          return f;
        };
        CLX[b] = function () {
          return f;
        };
        f.start();
        CLX.Jf();
      }
    };
  return a;
};
/*
page: http://www.onba.ch/
url: https://www.onba.ch/login/staticcontent/html/-369683922/js/lib/loginApp.min.js
*/
