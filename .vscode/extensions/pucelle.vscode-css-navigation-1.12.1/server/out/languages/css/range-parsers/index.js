"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCSSRange = void 0;
const css_like_1 = require("./css-like");
const sass_indented_1 = require("./sass-indented");
/** Parse a CSS document to ranges. */
function parseCSSRange(document) {
    let languageId = document.languageId;
    if (languageId === 'sass') {
        return new sass_indented_1.SassRangeParser(document).parse();
    }
    else {
        return new css_like_1.CSSLikeRangeParser(document).parse();
    }
}
exports.parseCSSRange = parseCSSRange;
//# sourceMappingURL=index.js.map