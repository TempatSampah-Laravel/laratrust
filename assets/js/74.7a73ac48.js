(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{183:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("In order to upgrade from Laratrust 5.2 to 6.x you have to follow these steps:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),s("ol",{attrs:{start:"2"}},[t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("li",[s("p",[s("em",[t._v("(Optional)")]),t._v(" If you want to use the administration panel provided in the 6.x version, please read "),s("docs-link",{attrs:{to:"/usage/admin-panel.html"}},[t._v("here")])],1)])]),t._v(" "),s("p",[t._v("Now you can use the 6.x version without any problem.")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"upgrade-from-5-2-to-6-x"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-from-5-2-to-6-x"}},[this._v("#")]),this._v(" Upgrade from 5.2 to 6.X")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("IMPORTANT")]),this._v(" "),e("p",[this._v("Laratrust 6.x requires Laravel >= 6.x and php >= 7.2.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Change your "),e("code",[this._v("composer.json")]),this._v(" to require the 6.x version of Laratrust:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[this._v('"santigarcor/laratrust"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v(":")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"^6.0"')]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Run "),e("code",[this._v("composer update")]),this._v(" to update the source code.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Run "),e("code",[this._v("php artisan config:clear")]),this._v(" and "),e("code",[this._v("php artisan cache:clear")]),this._v(".")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("p",[t._v("Update your "),s("code",[t._v("config/laratrust.php")]),t._v(":")]),t._v(" "),s("p",[t._v("4.1. Backup your "),s("code",[t._v("config/laratrust.php")]),t._v(" configuration values.")]),t._v(" "),s("p",[t._v("4.2. Delete the "),s("code",[t._v("config/laratrust.php")]),t._v(" file.")]),t._v(" "),s("p",[t._v("4.3. Run "),s("code",[t._v("php artisan vendor:publish --tag=laratrust")]),t._v(".")]),t._v(" "),s("p",[t._v("4.4. Update the "),s("code",[t._v("config/laratrust.php")]),t._v(" file with your old values.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Delete the "),e("code",[this._v("LaratrustSeeder.php")]),this._v(" file and run "),e("code",[this._v("php artisan laratrust:seeder")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Run "),e("code",[this._v("composer dump-autoload")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("If you use the "),e("code",[this._v("can")]),this._v(" method you "),e("strong",[this._v("MUST")]),this._v(" change it to "),e("code",[this._v("isAbleTo")]),this._v(". We removed the can method in order to support Laravel policies and gates out of the box.")])])}],!1,null,null,null);e.default=a.exports}}]);