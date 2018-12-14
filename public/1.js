webpackJsonp([1],{

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(301)
}
var normalizeComponent = __webpack_require__(80)
/* script */
var __vue_script__ = __webpack_require__(303)
/* template */
var __vue_template__ = __webpack_require__(314)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/permissionManage/role/Role.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c1db66da", Component.options)
  } else {
    hotAPI.reload("data-v-c1db66da", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(234)
}
var normalizeComponent = __webpack_require__(80)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(236)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/ToolBar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b21dd180", Component.options)
  } else {
    hotAPI.reload("data-v-b21dd180", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(235);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(81)("15854828", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b21dd180\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ToolBar.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b21dd180\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ToolBar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.toolbar {\n  width: 100%;\n  padding: 8px;\n  background-color: #ffffff;\n  overflow: hidden;\n  line-height: 32px;\n  border: 1px solid #e6ebf5;\n}\n", ""]);

// exports


/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "toolbar" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b21dd180", module.exports)
  }
}

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(80)
/* script */
var __vue_script__ = __webpack_require__(238)
/* template */
var __vue_template__ = __webpack_require__(239)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/HelpHint.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dcf88a5a", Component.options)
  } else {
    hotAPI.reload("data-v-dcf88a5a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'HelpHint',
  props: {
    placement: {
      default: 'top'
    },
    content: String
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    [
      _c(
        "span",
        { staticStyle: { "margin-right": "8px" } },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _c(
        "el-tooltip",
        { attrs: { content: _vm.content, placement: _vm.placement } },
        [
          _c("i", {
            staticClass: "el-icon-question",
            staticStyle: { cursor: "pointer" }
          })
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-dcf88a5a", module.exports)
  }
}

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(302);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(81)("633a0164", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c1db66da\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Role.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c1db66da\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Role.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ToolBar_vue__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ToolBar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_ToolBar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_HelpHint_vue__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_HelpHint_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_HelpHint_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RoleEdit_vue__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RoleEdit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__RoleEdit_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PermissionsEdit_vue__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PermissionsEdit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__PermissionsEdit_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      roleEditTitle: '角色编辑',
      currentEditRole: false,
      dialogFormVisible: false,
      currentEditPermissions: false,
      params: {
        name: ''
      },
      roleData: [{ id: 1, key: 'SuperAdmin', name: '超级管理员', description: '具有最高权限,全站唯一' }, { id: 2, key: 'NormalAdmin', name: '普通管理员', description: '拥有所有权限,除权限管理权限' }, { id: 4, key: 'Admin', name: '一般管理员', description: '只有查看权限' }]
    };
  },

  methods: {
    searchRole: function searchRole() {
      var tableRow = this.$refs.table.$el.querySelectorAll('tbody tr');
      var tableRowHeight = tableRow[1].offsetHeight;
      var isjump = false;
      for (var i = 0; i < this.roleData.length; i++) {
        if (this.params.name && this.roleData[i].name.indexOf(this.params.name) != -1) {
          tableRow[i].style.backgroundColor = '#85ce61';
          if (!isjump) {
            scrollTo(0, i * tableRowHeight + 66);
            isjump = true;
          }
        } else {
          tableRow[i].style.backgroundColor = '#fff';
        }
      }
    },
    tableAction: function tableAction() {
      return this.$createElement('HelpHint', {
        props: {
          content: '编辑角色 / 编辑角色权限'
        }
      }, '操作');
    },
    roleEditChange: function roleEditChange(data) {
      console.log(data);
      var self = this;

      self.$notify({
        title: self.roleEditTitle + '成功！',
        message: '自己对接Api,并调用你的初始化列表函数！',
        type: 'success'
      });
      self.dialogFormVisible = false;
      // self.$Api.editRole(data,r=>{
      //   self.$message.success(self.roleEditTitle+'成功！');
      //   self.init();
      //   self.dialogFormVisible = false;
      // });
    },
    editRole: function editRole(data) {
      if (data) {
        this.currentEditRole = data;
      } else {
        this.currentEditRole = false;
      }

      this.dialogFormVisible = true;
    },
    UploadRole: function UploadRole(data) {},
    deleteRole: function deleteRole(id) {

      this.$message({
        message: '这里请求api删除或者恢复用户之后刷新分页组件，列表自动更新',
        type: 'success'
      });
    },
    resetting: function resetting(id) {

      var dom = this.$refs[id].$el;
      dom.style.transform = 'rotate(180deg)';
      setTimeout(function () {
        dom.style.transform = 'rotate(0deg)';
      }, 600);
      this.$message({
        message: '已经成功重置密码',
        type: 'success'
      });
    }
  },
  components: {
    ToolBar: __WEBPACK_IMPORTED_MODULE_0__components_ToolBar_vue___default.a, HelpHint: __WEBPACK_IMPORTED_MODULE_1__components_HelpHint_vue___default.a, RoleEdit: __WEBPACK_IMPORTED_MODULE_2__RoleEdit_vue___default.a, PermissionsEdit: __WEBPACK_IMPORTED_MODULE_3__PermissionsEdit_vue___default.a
  }
});

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(305)
}
var normalizeComponent = __webpack_require__(80)
/* script */
var __vue_script__ = __webpack_require__(307)
/* template */
var __vue_template__ = __webpack_require__(308)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/permissionManage/role/RoleEdit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f2c2d786", Component.options)
  } else {
    hotAPI.reload("data-v-f2c2d786", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(306);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(81)("1374a716", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f2c2d786\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RoleEdit.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f2c2d786\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RoleEdit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'RoleEdit',
  props: {
    dialogFormVisible: Boolean,
    data: [Object, Boolean],
    title: String
  },
  data: function data() {
    return {
      form: {
        id: null,
        name: '',
        description: ''
      },
      btnLoading: false
    };
  },

  watch: {
    'data': {
      handler: function handler() {
        if (this.data) {
          for (var k in this.form) {
            this.form[k] = this.data[k];
          }
        } else {
          for (var _k in this.form) {
            this.form[_k] = '';
          }
        }
      },
      deep: true
    }
  },
  methods: {
    handleChange: function handleChange() {},
    btnOk: function btnOk() {
      var _this = this;

      var errorMsg = false;
      var formData = this.form;

      if (formData.name.length <= 2) errorMsg = '角色名称必须大于2个字符';

      if (errorMsg) {
        this.$message.error(errorMsg);
        return;
      }
      this.$emit('val-change', this.form);
      this.btnLoading = true;
      setTimeout(function () {
        _this.btnLoading = false;
      }, 1000);
    }
  },
  components: {}
});

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "role-dialog" },
    [
      _c(
        "el-dialog",
        {
          attrs: {
            title: _vm.title,
            visible: _vm.dialogFormVisible,
            "show-close": false,
            width: "45%"
          }
        },
        [
          _c(
            "el-form",
            { attrs: { model: _vm.form } },
            [
              _c(
                "el-form-item",
                { attrs: { label: "角色名称" } },
                [
                  _c("el-input", {
                    attrs: { "auto-complete": "off" },
                    model: {
                      value: _vm.form.name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "角色描述" } },
                [
                  _c("el-input", {
                    attrs: {
                      type: "textarea",
                      rows: 3,
                      placeholder: "请输入角色描述"
                    },
                    model: {
                      value: _vm.form.description,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "description", $$v)
                      },
                      expression: "form.description"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.$emit("cancel")
                    }
                  }
                },
                [_vm._v("取 消")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary", loading: _vm.btnLoading },
                  on: { click: _vm.btnOk }
                },
                [_vm._v("确 定")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f2c2d786", module.exports)
  }
}

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(310)
}
var normalizeComponent = __webpack_require__(80)
/* script */
var __vue_script__ = __webpack_require__(312)
/* template */
var __vue_template__ = __webpack_require__(313)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/views/permissionManage/role/PermissionsEdit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47bfc6a1", Component.options)
  } else {
    hotAPI.reload("data-v-47bfc6a1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(311);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(81)("d7a00f56", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47bfc6a1\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PermissionsEdit.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47bfc6a1\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PermissionsEdit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router___ = __webpack_require__(82);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PermissionsEdit',
  props: {
    role: [Object, Boolean]

  },
  data: function data() {
    return {
      dialogFormVisible: false,
      btnLoading: false,
      allPermissions: [],
      searchPermissionsDisplayName: '',
      multipleSelection: []
    };
  },

  watch: {
    'role': {
      handler: function handler() {
        var self = this;
        if (!self.role) return;
        self.dialogFormVisible = true;

        //获取当前角色的权限并勾选在权限表里
        // self.$Api.getPermissions({id:self.role.id}, r => {
        //   this.$refs.table.clearSelection();
        //   r.forEach(selectRoleId =>{
        //     self.allPermissions.forEach(row=>{
        //       if(row.id == selectRoleId)self.$refs.table.toggleRowSelection(row,true);
        //     })
        //   })
        //
        // });
      },
      deep: true
    },
    'searchPermissionsDisplayName': {
      handler: function handler() {
        this.searchPermissions();
      }

    }
  },
  methods: {
    changeFun: function changeFun(val) {
      this.multipleSelection = val;
    },
    searchPermissions: function searchPermissions() {
      var tableRow = this.$refs.permissionsTable.$el.querySelectorAll('tbody tr');
      var wrapperScrolling = this.$refs.permissionsTable.$el.getElementsByClassName('el-table__body-wrapper')[0];

      var tableRowHeight = tableRow[1].offsetHeight;
      var isjump = false;
      for (var i = 0; i < this.allPermissions.length; i++) {
        if (this.searchPermissionsDisplayName && this.allPermissions[i].display_name.indexOf(this.searchPermissionsDisplayName) != -1) {
          tableRow[i].style.backgroundColor = '#85ce61';
          if (!isjump) {
            wrapperScrolling.scrollTo(0, i * tableRowHeight);
            isjump = true;
          }
        } else {
          tableRow[i].style.backgroundColor = '#fff';
        }
      }
    },
    btnOk: function btnOk() {
      var _this = this;

      var self = this;
      //这块逻辑建议放到父组件role.vue里去做 this.$emit('success',{role:self.role,multipleSelection:self.multipleSelection});
      self.$notify({
        title: '编辑“' + self.role.name + '”权限成功！',
        message: '自己对接Api,角色id：' + self.role.id + ',选择了' + self.multipleSelection.length + '项权限',
        type: 'success'
      });

      this.$emit('success');
      this.btnLoading = true;
      setTimeout(function () {
        _this.btnLoading = false;
        _this.dialogFormVisible = false;
        _this.$refs.permissionsTable.clearSelection();
      }, 600);
    }
  },
  mounted: function mounted() {
    //所有的权限可以使用前端的路由来生成，这只是一种思路，具体怎么做，取决于你们的后台权限架构。
    var self = this;
    var AllPermissions = __WEBPACK_IMPORTED_MODULE_0__router___["a" /* default */].options.routes[0].children;

    for (var i = 0; i < AllPermissions.length; i++) {
      var permissions = AllPermissions[i];
      self.allPermissions.push({
        id: '',
        name: permissions.name + 'View',
        display_name: permissions.meta.title + '查看权限',
        description: '查看权限'
      });
      self.allPermissions.push({
        id: '',
        name: permissions.name + 'Edit',
        display_name: permissions.meta.title + '编辑权限',
        description: '编辑权限'
      });
    }

    // self.$Api.getPermissions({}, r => {
    //     self.allPermissions = r;
    // });
  },
  components: {}
});

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "role-dialog" },
    [
      _c(
        "el-dialog",
        {
          attrs: {
            title: "编辑“" + _vm.role.name + "”的权限",
            visible: _vm.dialogFormVisible,
            "show-close": false
          }
        },
        [
          _c(
            "el-table",
            {
              ref: "permissionsTable",
              staticStyle: { width: "100%" },
              attrs: { data: _vm.allPermissions, border: "", height: "500" },
              on: { "selection-change": _vm.changeFun }
            },
            [
              _c("el-table-column", {
                attrs: { type: "selection", width: "35" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "name", label: "权限KEY" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "display_name", label: "权限名称" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "description", label: "权限描述" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return _c("div", {}, [
                        _vm._v(
                          "\n          " +
                            _vm._s(
                              scope.row.description
                                ? scope.row.description
                                : "暂无描述"
                            ) +
                            "\n        "
                        )
                      ])
                    }
                  }
                ])
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "div",
                { staticStyle: { float: "left" } },
                [
                  _c("el-input", {
                    attrs: { placeholder: "搜索权限名称", clearable: "" },
                    model: {
                      value: _vm.searchPermissionsDisplayName,
                      callback: function($$v) {
                        _vm.searchPermissionsDisplayName = $$v
                      },
                      expression: "searchPermissionsDisplayName"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      ;(_vm.dialogFormVisible = false), _vm.$emit("cancel")
                    }
                  }
                },
                [_vm._v("取 消")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary", loading: _vm.btnLoading },
                  on: { click: _vm.btnOk }
                },
                [_vm._v("确 定")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-47bfc6a1", module.exports)
  }
}

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "role-list" },
    [
      _c(
        "ToolBar",
        [
          _c(
            "el-button",
            {
              attrs: { type: "primary", icon: "el-icon-plus", size: "small" },
              on: {
                click: function($event) {
                  _vm.editRole(false)
                }
              }
            },
            [_vm._v("添加")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticStyle: { float: "right" } },
            [
              _c("el-input", {
                staticStyle: { width: "140px" },
                attrs: {
                  placeholder: "请输入角色名称！",
                  size: "small",
                  clearable: ""
                },
                on: { clear: _vm.searchRole },
                model: {
                  value: _vm.params.name,
                  callback: function($$v) {
                    _vm.$set(_vm.params, "name", $$v)
                  },
                  expression: "params.name"
                }
              }),
              _vm._v(" "),
              _c("el-button", {
                attrs: {
                  type: "success",
                  icon: "el-icon-search",
                  size: "small"
                },
                on: { click: _vm.searchRole }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-table",
        {
          ref: "table",
          staticStyle: { width: "100%" },
          attrs: { data: _vm.roleData, border: "" }
        },
        [
          _c("el-table-column", { attrs: { prop: "key", label: "角色key" } }),
          _vm._v(" "),
          _c("el-table-column", { attrs: { prop: "name", label: "角色名称" } }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "description", label: "描述" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              label: "操作",
              "render-header": _vm.tableAction,
              width: "120"
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("el-button", {
                      attrs: {
                        type: "primary",
                        icon: "el-icon-edit",
                        size: "small",
                        circle: ""
                      },
                      on: {
                        click: function($event) {
                          _vm.editRole(scope.row)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("el-button", {
                      attrs: {
                        type: "success",
                        icon: "el-icon-setting",
                        size: "small",
                        circle: ""
                      },
                      on: {
                        click: function($event) {
                          _vm.currentEditPermissions = scope.row
                        }
                      }
                    })
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("RoleEdit", {
        attrs: {
          title: _vm.roleEditTitle,
          dialogFormVisible: _vm.dialogFormVisible,
          data: _vm.currentEditRole
        },
        on: {
          "val-change": _vm.roleEditChange,
          cancel: function($event) {
            _vm.dialogFormVisible = false
          }
        }
      }),
      _vm._v(" "),
      _c("PermissionsEdit", {
        attrs: { role: _vm.currentEditPermissions },
        on: {
          success: function($event) {
            _vm.currentEditPermissions = false
          },
          cancel: function($event) {
            _vm.currentEditPermissions = false
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c1db66da", module.exports)
  }
}

/***/ })

});