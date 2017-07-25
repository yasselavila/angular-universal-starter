/**
 * NgUniversalSkeleton
 *
 * WARNING: The source code in this file is protected by copyright laws,
 * unauthorized use, duplication or redistribution may result in civil
 * liability and criminal prosecution.
 *
 * @copyright Copyright (c) 2017, Yassel Avila Gil (http://yasselavila.com)
 * @author    Yassel Avila Gil (yassel.avila@gmail.com)
 */

/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */

/* Support IE 9+ and old Android browsers */
import 'ie-shim';

/* IE9, IE10 and IE11 requires all of the following polyfills: */
import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es7/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/set';

/* Evergreen browsers require these: */
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';

/* IE10 and IE11 requires the following for NgClass support on SVG elements: */
// import 'classlist.js';

/* IE10, IE11 and all versions of Firefox requires the following to support `@angular/animations`: */
// import 'web-animations-js';

/* Zone JS is required by Angular itself: */
import 'zone.js/dist/zone';

/* Date, currency, decimal and percent pipes:
 * - Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10 */
// import 'intl';
/* - Need to import at least one locale-data with intl */
// import 'intl/locale-data/jsonp/en';

/* TypeScript emit helpers polyfill */
import 'ts-helpers';
