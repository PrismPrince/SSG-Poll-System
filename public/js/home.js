/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("Vue.mixin({\r\n  methods: {\r\n    logout: function logout() {\r\n      document.getElementById('logout-form').submit();\r\n    }\r\n  }\r\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2xvZ291dC5qcz9hOWFmIl0sInNvdXJjZXNDb250ZW50IjpbIlZ1ZS5taXhpbih7XHJcbiAgbWV0aG9kczoge1xyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nb3V0LWZvcm0nKS5zdWJtaXQoKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2xvZ291dC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 1 */
/***/ function(module, exports) {

eval("Vue.mixin({\r\n  data: function data() {\r\n    return {\r\n      post: {\r\n        id: null,\r\n        title: '',\r\n        desc: '',\r\n        action: '',\r\n        disabled: true\r\n        // error: {}\r\n      },\r\n      posts: {\r\n        skip: 0,\r\n        take: 5,\r\n        full: false,\r\n        data: []\r\n      }\r\n    }\r\n  },\r\n  methods: {\r\n    showPostModal: function showPostModal(selector, action, id, title, desc) {\n      if ( action === void 0 ) action = '';\n      if ( id === void 0 ) id = null;\n      if ( title === void 0 ) title = '';\n      if ( desc === void 0 ) desc = '';\n\r\n      this.post.action = action\r\n      this.post.id = id\r\n      this.post.title = title\r\n      this.post.desc = desc\r\n\r\n      this.enablePostInput()\r\n\r\n      $(selector).modal('show')\r\n    },\r\n    hidePostModal: function hidePostModal(selector, action, id, title, desc) {\n      if ( action === void 0 ) action = '';\n      if ( id === void 0 ) id = null;\n      if ( title === void 0 ) title = '';\n      if ( desc === void 0 ) desc = '';\n\r\n      var vm = this\r\n\r\n      $(selector).modal('hide')\r\n\r\n      $(selector).on('hidden.bs.modal', function () {\r\n        vm.post.action = action\r\n        vm.post.id = id\r\n        vm.post.title = title\r\n        vm.post.desc = desc\r\n      })\r\n    },\r\n    disablePostInput: function disablePostInput() {\r\n      this.post.disabled = true\r\n    },\r\n    enablePostInput: function enablePostInput() {\r\n      this.post.disabled = false\r\n    },\r\n    submitPost: function submitPost() {\r\n      var vm = this\r\n\r\n      if (vm.post.action != 'Update') {\r\n        // disable input fields and button\r\n        vm.disablePostInput()\r\n\r\n        // post request with the input data\r\n        vm.$http.post(window.location.origin + '/api/post', {\r\n          title: vm.post.title,\r\n          desc: vm.post.desc\r\n        }).then(function (response) {\r\n\r\n          vm.posts.skip++\r\n\r\n          vm.hidePostModal('#post-modal')\r\n          vm.enablePostInput()\r\n\r\n          vm.posts.data.splice(0, 0, response.data)\r\n\r\n        }).catch(function (response) {\r\n          console.error(response.error)\r\n        })\r\n      } else {\r\n        // disable input fields and button\r\n        vm.disablePostInput()\r\n\r\n        // put request with the updated data\r\n        vm.$http.put(window.location.origin + '/api/post/' + vm.post.id, {\r\n          title: vm.post.title,\r\n          desc: vm.post.desc\r\n        }).then(function (response) {\r\n\r\n          vm.hidePostModal('#post-modal')\r\n          vm.enablePostInput()\r\n\r\n          var i = _.indexOf(vm.posts.data, _.find(vm.posts.data, {id: response.data.id}))\r\n          vm.posts.data.splice(i, 1, response.data)\r\n\r\n        }).catch(function (response) {\r\n          console.error(response.error)\r\n        })\r\n      }\r\n    },\r\n    getPosts: function getPosts() {\n      var this$1 = this;\n\r\n      this.$http.get(window.location.origin + '/api/post?skip=' + this.posts.skip + '&take=' + this.posts.take)\r\n        .then(function (response) {\r\n          if (response.data.length == 0 || response.data.length < 5) {\r\n            this$1.posts.full = true\r\n          }\r\n\r\n          this$1.posts.skip += 5\r\n\r\n          for (var i = 0; i <= response.data.length - 1; i++) {\r\n            this$1.posts.data.push(response.data[i])\r\n          }\r\n\r\n        }).catch(function (response) {\r\n          console.error(response.error)\r\n        })\r\n    },\r\n    editPost: function editPost(id) {\n      var this$1 = this;\n\r\n      this.$http.get(window.location.origin + '/api/post/' + id + '/edit')\r\n        .then(function (response) {\r\n          this$1.showPostModal('#post-modal', 'Update', response.data.id, response.data.title, response.data.desc)\r\n        }).catch(function (response) {\r\n          console.error(response.error)\r\n        })\r\n    },\r\n    confirmDeletePost: function confirmDeletePost(id) {\r\n      this.showPostModal('#confirm-post-modal', 'Delete', id)\r\n    },\r\n    deletePost: function deletePost() {\n      var this$1 = this;\n\r\n      this.$http.delete(window.location.origin + '/api/post/' + this.post.id)\r\n        .then(function (response) {\r\n          this$1.posts.skip--\r\n\r\n          var i = _.indexOf(this$1.posts.data, _.find(this$1.posts.data, {id: response.data.id}))\r\n          this$1.posts.data.splice(i, 1)\r\n\r\n          this$1.hidePostModal('#confirm-post-modal')\r\n        }).catch(function (response) {\r\n          console.error(response.error)\r\n        })\r\n    }\r\n  }\r\n})//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3Bvc3QuanM/YjZiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJWdWUubWl4aW4oe1xyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwb3N0OiB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIGRlc2M6ICcnLFxyXG4gICAgICAgIGFjdGlvbjogJycsXHJcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgICAvLyBlcnJvcjoge31cclxuICAgICAgfSxcclxuICAgICAgcG9zdHM6IHtcclxuICAgICAgICBza2lwOiAwLFxyXG4gICAgICAgIHRha2U6IDUsXHJcbiAgICAgICAgZnVsbDogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogW11cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2hvd1Bvc3RNb2RhbChzZWxlY3RvciwgYWN0aW9uID0gJycsIGlkID0gbnVsbCwgdGl0bGUgPSAnJywgZGVzYyA9ICcnKSB7XHJcbiAgICAgIHRoaXMucG9zdC5hY3Rpb24gPSBhY3Rpb25cclxuICAgICAgdGhpcy5wb3N0LmlkID0gaWRcclxuICAgICAgdGhpcy5wb3N0LnRpdGxlID0gdGl0bGVcclxuICAgICAgdGhpcy5wb3N0LmRlc2MgPSBkZXNjXHJcblxyXG4gICAgICB0aGlzLmVuYWJsZVBvc3RJbnB1dCgpXHJcblxyXG4gICAgICAkKHNlbGVjdG9yKS5tb2RhbCgnc2hvdycpXHJcbiAgICB9LFxyXG4gICAgaGlkZVBvc3RNb2RhbChzZWxlY3RvciwgYWN0aW9uID0gJycsIGlkID0gbnVsbCwgdGl0bGUgPSAnJywgZGVzYyA9ICcnKSB7XHJcbiAgICAgIHZhciB2bSA9IHRoaXNcclxuXHJcbiAgICAgICQoc2VsZWN0b3IpLm1vZGFsKCdoaWRlJylcclxuXHJcbiAgICAgICQoc2VsZWN0b3IpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdm0ucG9zdC5hY3Rpb24gPSBhY3Rpb25cclxuICAgICAgICB2bS5wb3N0LmlkID0gaWRcclxuICAgICAgICB2bS5wb3N0LnRpdGxlID0gdGl0bGVcclxuICAgICAgICB2bS5wb3N0LmRlc2MgPSBkZXNjXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgZGlzYWJsZVBvc3RJbnB1dCgpIHtcclxuICAgICAgdGhpcy5wb3N0LmRpc2FibGVkID0gdHJ1ZVxyXG4gICAgfSxcclxuICAgIGVuYWJsZVBvc3RJbnB1dCgpIHtcclxuICAgICAgdGhpcy5wb3N0LmRpc2FibGVkID0gZmFsc2VcclxuICAgIH0sXHJcbiAgICBzdWJtaXRQb3N0KCkge1xyXG4gICAgICB2YXIgdm0gPSB0aGlzXHJcblxyXG4gICAgICBpZiAodm0ucG9zdC5hY3Rpb24gIT0gJ1VwZGF0ZScpIHtcclxuICAgICAgICAvLyBkaXNhYmxlIGlucHV0IGZpZWxkcyBhbmQgYnV0dG9uXHJcbiAgICAgICAgdm0uZGlzYWJsZVBvc3RJbnB1dCgpXHJcblxyXG4gICAgICAgIC8vIHBvc3QgcmVxdWVzdCB3aXRoIHRoZSBpbnB1dCBkYXRhXHJcbiAgICAgICAgdm0uJGh0dHAucG9zdCh3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgJy9hcGkvcG9zdCcsIHtcclxuICAgICAgICAgIHRpdGxlOiB2bS5wb3N0LnRpdGxlLFxyXG4gICAgICAgICAgZGVzYzogdm0ucG9zdC5kZXNjXHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICAgICAgICB2bS5wb3N0cy5za2lwKytcclxuXHJcbiAgICAgICAgICB2bS5oaWRlUG9zdE1vZGFsKCcjcG9zdC1tb2RhbCcpXHJcbiAgICAgICAgICB2bS5lbmFibGVQb3N0SW5wdXQoKVxyXG5cclxuICAgICAgICAgIHZtLnBvc3RzLmRhdGEuc3BsaWNlKDAsIDAsIHJlc3BvbnNlLmRhdGEpXHJcblxyXG4gICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5lcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGRpc2FibGUgaW5wdXQgZmllbGRzIGFuZCBidXR0b25cclxuICAgICAgICB2bS5kaXNhYmxlUG9zdElucHV0KClcclxuXHJcbiAgICAgICAgLy8gcHV0IHJlcXVlc3Qgd2l0aCB0aGUgdXBkYXRlZCBkYXRhXHJcbiAgICAgICAgdm0uJGh0dHAucHV0KHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL2FwaS9wb3N0LycgKyB2bS5wb3N0LmlkLCB7XHJcbiAgICAgICAgICB0aXRsZTogdm0ucG9zdC50aXRsZSxcclxuICAgICAgICAgIGRlc2M6IHZtLnBvc3QuZGVzY1xyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblxyXG4gICAgICAgICAgdm0uaGlkZVBvc3RNb2RhbCgnI3Bvc3QtbW9kYWwnKVxyXG4gICAgICAgICAgdm0uZW5hYmxlUG9zdElucHV0KClcclxuXHJcbiAgICAgICAgICB2YXIgaSA9IF8uaW5kZXhPZih2bS5wb3N0cy5kYXRhLCBfLmZpbmQodm0ucG9zdHMuZGF0YSwge2lkOiByZXNwb25zZS5kYXRhLmlkfSkpXHJcbiAgICAgICAgICB2bS5wb3N0cy5kYXRhLnNwbGljZShpLCAxLCByZXNwb25zZS5kYXRhKVxyXG5cclxuICAgICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UuZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldFBvc3RzKCkge1xyXG4gICAgICB0aGlzLiRodHRwLmdldCh3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgJy9hcGkvcG9zdD9za2lwPScgKyB0aGlzLnBvc3RzLnNraXAgKyAnJnRha2U9JyArIHRoaXMucG9zdHMudGFrZSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmxlbmd0aCA9PSAwIHx8IHJlc3BvbnNlLmRhdGEubGVuZ3RoIDwgNSkge1xyXG4gICAgICAgICAgICB0aGlzLnBvc3RzLmZ1bGwgPSB0cnVlXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5wb3N0cy5za2lwICs9IDVcclxuXHJcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSByZXNwb25zZS5kYXRhLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBvc3RzLmRhdGEucHVzaChyZXNwb25zZS5kYXRhW2ldKVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UuZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBlZGl0UG9zdChpZCkge1xyXG4gICAgICB0aGlzLiRodHRwLmdldCh3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgJy9hcGkvcG9zdC8nICsgaWQgKyAnL2VkaXQnKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zaG93UG9zdE1vZGFsKCcjcG9zdC1tb2RhbCcsICdVcGRhdGUnLCByZXNwb25zZS5kYXRhLmlkLCByZXNwb25zZS5kYXRhLnRpdGxlLCByZXNwb25zZS5kYXRhLmRlc2MpXHJcbiAgICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLmVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgY29uZmlybURlbGV0ZVBvc3QoaWQpIHtcclxuICAgICAgdGhpcy5zaG93UG9zdE1vZGFsKCcjY29uZmlybS1wb3N0LW1vZGFsJywgJ0RlbGV0ZScsIGlkKVxyXG4gICAgfSxcclxuICAgIGRlbGV0ZVBvc3QoKSB7XHJcbiAgICAgIHRoaXMuJGh0dHAuZGVsZXRlKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL2FwaS9wb3N0LycgKyB0aGlzLnBvc3QuaWQpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBvc3RzLnNraXAtLVxyXG5cclxuICAgICAgICAgIHZhciBpID0gXy5pbmRleE9mKHRoaXMucG9zdHMuZGF0YSwgXy5maW5kKHRoaXMucG9zdHMuZGF0YSwge2lkOiByZXNwb25zZS5kYXRhLmlkfSkpXHJcbiAgICAgICAgICB0aGlzLnBvc3RzLmRhdGEuc3BsaWNlKGksIDEpXHJcblxyXG4gICAgICAgICAgdGhpcy5oaWRlUG9zdE1vZGFsKCcjY29uZmlybS1wb3N0LW1vZGFsJylcclxuICAgICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UuZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcG9zdC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 2 */
/***/ function(module, exports) {

eval("Vue.mixin({\r\n  data: function data() {\r\n    return {\r\n      suggestion: {\r\n        id: null,\r\n        title: '',\r\n        direct: '',\r\n        message: '',\r\n        action: '',\r\n        disabled: true\r\n        // error: {}\r\n      },\r\n      suggestions: {\r\n        skip: 0,\r\n        take: 5,\r\n        full: false,\r\n        data: []\r\n      }\r\n    }\r\n  },\r\n  methods: {\r\n    showSuggestionModal: function showSuggestionModal(selector, action, id, title, direct, message) {\n      if ( action === void 0 ) action = '';\n      if ( id === void 0 ) id = null;\n      if ( title === void 0 ) title = '';\n      if ( direct === void 0 ) direct = '';\n      if ( message === void 0 ) message = '';\n\r\n      this.suggestion.action = action\r\n      this.suggestion.id = id\r\n      this.suggestion.title = title\r\n      this.suggestion.direct = direct\r\n      this.suggestion.message = message\r\n\r\n      this.enableSuggestionInput()\r\n\r\n      $(selector).modal('show')\r\n    },\r\n    hideSuggestionModal: function hideSuggestionModal(selector, action, id, title, direct, message) {\n      if ( action === void 0 ) action = '';\n      if ( id === void 0 ) id = null;\n      if ( title === void 0 ) title = '';\n      if ( direct === void 0 ) direct = '';\n      if ( message === void 0 ) message = '';\n\r\n      var vm = this\r\n\r\n      $(selector).modal('hide')\r\n\r\n      $(selector).on('hidden.bs.modal', function () {\r\n        vm.suggestion.action = action\r\n        vm.suggestion.id = id\r\n        vm.suggestion.title = title\r\n        vm.suggestion.direct = direct\r\n        vm.suggestion.message = message\r\n      })\r\n    },\r\n    disableSuggestionInput: function disableSuggestionInput() {\r\n      this.suggestion.disabled = true\r\n    },\r\n    enableSuggestionInput: function enableSuggestionInput() {\r\n      this.suggestion.disabled = false\r\n    },\r\n    submitSuggestion: function submitSuggestion() {\r\n      var vm = this\r\n\r\n      if (vm.suggestion.action != 'Update') {\r\n        // disable input fields and button\r\n        vm.disableSuggestionInput()\r\n\r\n        // post request with the input data\r\n        vm.$http.post(window.location.origin + '/api/suggestion', {\r\n          title: vm.suggestion.title,\r\n          direct: vm.suggestion.direct,\r\n          message: vm.suggestion.message\r\n        }).then(function (response) {\r\n\r\n          vm.suggestions.skip++\r\n\r\n          vm.hideSuggestionModal('#suggestion-modal')\r\n          vm.enableSuggestionInput()\r\n\r\n          vm.suggestions.data.splice(0, 0, response.data)\r\n\r\n        }).catch(function (response) {\r\n          console.error(response.error)\r\n        })\r\n      } else {\r\n        // disable input fields and button\r\n        vm.disableSuggestionInput()\r\n\r\n        // put request with the updated data\r\n        vm.$http.put(window.location.origin + '/api/suggestion/' + vm.suggestion.id, {\r\n          title: vm.suggestion.title,\r\n          direct: vm.suggestion.direct,\r\n          message: vm.suggestion.message\r\n        }).then(function (response) {\r\n\r\n          vm.hideSuggestionModal('#suggestion-modal')\r\n          vm.enableSuggestionInput()\r\n\r\n          var i = _.indexOf(vm.suggestions.data, _.find(vm.suggestions.data, {id: response.data.id}))\r\n          vm.suggestions.data.splice(i, 1, response.data)\r\n\r\n        }).catch(function (response) {\r\n          console.error(response.error)\r\n        })\r\n      }\r\n    },\r\n    getSuggestions: function getSuggestions() {\n      var this$1 = this;\n\r\n      this.$http.get(window.location.origin + '/api/suggestion?skip=' + this.suggestions.skip + '&take=' + this.suggestions.take)\r\n        .then(function (response) {\r\n          if (response.data.length == 0 || response.data.length < 5) {\r\n            this$1.suggestions.full = true\r\n          }\r\n\r\n          this$1.suggestions.skip += 5\r\n\r\n          for (var i = 0; i <= response.data.length - 1; i++) {\r\n            this$1.suggestions.data.push(response.data[i])\r\n          }\r\n\r\n        }).catch(function (response) {\r\n          console.error(response.error)\r\n        })\r\n    },\r\n    editSuggestion: function editSuggestion(id) {\n      var this$1 = this;\n\r\n      this.$http.get(window.location.origin + '/api/suggestion/' + id + '/edit')\r\n        .then(function (response) {\r\n          this$1.showSuggestionModal('#suggestion-modal', 'Update', response.data.id, response.data.title, response.data.direct, response.data.message)\r\n        }).catch(function (response) {\r\n          console.error(response.error)\r\n        })\r\n    },\r\n    confirmDeleteSuggestion: function confirmDeleteSuggestion(id) {\r\n      this.showSuggestionModal('#confirm-suggestion-modal', 'Delete', id)\r\n    },\r\n    deleteSuggestion: function deleteSuggestion() {\n      var this$1 = this;\n\r\n      this.$http.delete(window.location.origin + '/api/suggestion/' + this.suggestion.id)\r\n        .then(function (response) {\r\n          this$1.suggestions.skip--\r\n\r\n          var i = _.indexOf(this$1.suggestions.data, _.find(this$1.suggestions.data, {id: response.data.id}))\r\n          this$1.suggestions.data.splice(i, 1)\r\n\r\n          this$1.hideSuggestionModal('#confirm-suggestion-modal')\r\n        }).catch(function (response) {\r\n          console.error(response.error)\r\n        })\r\n    }\r\n  }\r\n})//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3N1Z2dlc3Rpb24uanM/OTEzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJWdWUubWl4aW4oe1xyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdWdnZXN0aW9uOiB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIGRpcmVjdDogJycsXHJcbiAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgYWN0aW9uOiAnJyxcclxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxyXG4gICAgICAgIC8vIGVycm9yOiB7fVxyXG4gICAgICB9LFxyXG4gICAgICBzdWdnZXN0aW9uczoge1xyXG4gICAgICAgIHNraXA6IDAsXHJcbiAgICAgICAgdGFrZTogNSxcclxuICAgICAgICBmdWxsOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiBbXVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBzaG93U3VnZ2VzdGlvbk1vZGFsKHNlbGVjdG9yLCBhY3Rpb24gPSAnJywgaWQgPSBudWxsLCB0aXRsZSA9ICcnLCBkaXJlY3QgPSAnJywgbWVzc2FnZSA9ICcnKSB7XHJcbiAgICAgIHRoaXMuc3VnZ2VzdGlvbi5hY3Rpb24gPSBhY3Rpb25cclxuICAgICAgdGhpcy5zdWdnZXN0aW9uLmlkID0gaWRcclxuICAgICAgdGhpcy5zdWdnZXN0aW9uLnRpdGxlID0gdGl0bGVcclxuICAgICAgdGhpcy5zdWdnZXN0aW9uLmRpcmVjdCA9IGRpcmVjdFxyXG4gICAgICB0aGlzLnN1Z2dlc3Rpb24ubWVzc2FnZSA9IG1lc3NhZ2VcclxuXHJcbiAgICAgIHRoaXMuZW5hYmxlU3VnZ2VzdGlvbklucHV0KClcclxuXHJcbiAgICAgICQoc2VsZWN0b3IpLm1vZGFsKCdzaG93JylcclxuICAgIH0sXHJcbiAgICBoaWRlU3VnZ2VzdGlvbk1vZGFsKHNlbGVjdG9yLCBhY3Rpb24gPSAnJywgaWQgPSBudWxsLCB0aXRsZSA9ICcnLCBkaXJlY3QgPSAnJywgbWVzc2FnZSA9ICcnKSB7XHJcbiAgICAgIHZhciB2bSA9IHRoaXNcclxuXHJcbiAgICAgICQoc2VsZWN0b3IpLm1vZGFsKCdoaWRlJylcclxuXHJcbiAgICAgICQoc2VsZWN0b3IpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdm0uc3VnZ2VzdGlvbi5hY3Rpb24gPSBhY3Rpb25cclxuICAgICAgICB2bS5zdWdnZXN0aW9uLmlkID0gaWRcclxuICAgICAgICB2bS5zdWdnZXN0aW9uLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB2bS5zdWdnZXN0aW9uLmRpcmVjdCA9IGRpcmVjdFxyXG4gICAgICAgIHZtLnN1Z2dlc3Rpb24ubWVzc2FnZSA9IG1lc3NhZ2VcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBkaXNhYmxlU3VnZ2VzdGlvbklucHV0KCkge1xyXG4gICAgICB0aGlzLnN1Z2dlc3Rpb24uZGlzYWJsZWQgPSB0cnVlXHJcbiAgICB9LFxyXG4gICAgZW5hYmxlU3VnZ2VzdGlvbklucHV0KCkge1xyXG4gICAgICB0aGlzLnN1Z2dlc3Rpb24uZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgfSxcclxuICAgIHN1Ym1pdFN1Z2dlc3Rpb24oKSB7XHJcbiAgICAgIHZhciB2bSA9IHRoaXNcclxuXHJcbiAgICAgIGlmICh2bS5zdWdnZXN0aW9uLmFjdGlvbiAhPSAnVXBkYXRlJykge1xyXG4gICAgICAgIC8vIGRpc2FibGUgaW5wdXQgZmllbGRzIGFuZCBidXR0b25cclxuICAgICAgICB2bS5kaXNhYmxlU3VnZ2VzdGlvbklucHV0KClcclxuXHJcbiAgICAgICAgLy8gcG9zdCByZXF1ZXN0IHdpdGggdGhlIGlucHV0IGRhdGFcclxuICAgICAgICB2bS4kaHR0cC5wb3N0KHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL2FwaS9zdWdnZXN0aW9uJywge1xyXG4gICAgICAgICAgdGl0bGU6IHZtLnN1Z2dlc3Rpb24udGl0bGUsXHJcbiAgICAgICAgICBkaXJlY3Q6IHZtLnN1Z2dlc3Rpb24uZGlyZWN0LFxyXG4gICAgICAgICAgbWVzc2FnZTogdm0uc3VnZ2VzdGlvbi5tZXNzYWdlXHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICAgICAgICB2bS5zdWdnZXN0aW9ucy5za2lwKytcclxuXHJcbiAgICAgICAgICB2bS5oaWRlU3VnZ2VzdGlvbk1vZGFsKCcjc3VnZ2VzdGlvbi1tb2RhbCcpXHJcbiAgICAgICAgICB2bS5lbmFibGVTdWdnZXN0aW9uSW5wdXQoKVxyXG5cclxuICAgICAgICAgIHZtLnN1Z2dlc3Rpb25zLmRhdGEuc3BsaWNlKDAsIDAsIHJlc3BvbnNlLmRhdGEpXHJcblxyXG4gICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5lcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGRpc2FibGUgaW5wdXQgZmllbGRzIGFuZCBidXR0b25cclxuICAgICAgICB2bS5kaXNhYmxlU3VnZ2VzdGlvbklucHV0KClcclxuXHJcbiAgICAgICAgLy8gcHV0IHJlcXVlc3Qgd2l0aCB0aGUgdXBkYXRlZCBkYXRhXHJcbiAgICAgICAgdm0uJGh0dHAucHV0KHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL2FwaS9zdWdnZXN0aW9uLycgKyB2bS5zdWdnZXN0aW9uLmlkLCB7XHJcbiAgICAgICAgICB0aXRsZTogdm0uc3VnZ2VzdGlvbi50aXRsZSxcclxuICAgICAgICAgIGRpcmVjdDogdm0uc3VnZ2VzdGlvbi5kaXJlY3QsXHJcbiAgICAgICAgICBtZXNzYWdlOiB2bS5zdWdnZXN0aW9uLm1lc3NhZ2VcclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cclxuICAgICAgICAgIHZtLmhpZGVTdWdnZXN0aW9uTW9kYWwoJyNzdWdnZXN0aW9uLW1vZGFsJylcclxuICAgICAgICAgIHZtLmVuYWJsZVN1Z2dlc3Rpb25JbnB1dCgpXHJcblxyXG4gICAgICAgICAgdmFyIGkgPSBfLmluZGV4T2Yodm0uc3VnZ2VzdGlvbnMuZGF0YSwgXy5maW5kKHZtLnN1Z2dlc3Rpb25zLmRhdGEsIHtpZDogcmVzcG9uc2UuZGF0YS5pZH0pKVxyXG4gICAgICAgICAgdm0uc3VnZ2VzdGlvbnMuZGF0YS5zcGxpY2UoaSwgMSwgcmVzcG9uc2UuZGF0YSlcclxuXHJcbiAgICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLmVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRTdWdnZXN0aW9ucygpIHtcclxuICAgICAgdGhpcy4kaHR0cC5nZXQod2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvYXBpL3N1Z2dlc3Rpb24/c2tpcD0nICsgdGhpcy5zdWdnZXN0aW9ucy5za2lwICsgJyZ0YWtlPScgKyB0aGlzLnN1Z2dlc3Rpb25zLnRha2UpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGggPT0gMCB8fCByZXNwb25zZS5kYXRhLmxlbmd0aCA8IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5zdWdnZXN0aW9ucy5mdWxsID0gdHJ1ZVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbnMuc2tpcCArPSA1XHJcblxyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gcmVzcG9uc2UuZGF0YS5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zdWdnZXN0aW9ucy5kYXRhLnB1c2gocmVzcG9uc2UuZGF0YVtpXSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLmVycm9yKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgZWRpdFN1Z2dlc3Rpb24oaWQpIHtcclxuICAgICAgdGhpcy4kaHR0cC5nZXQod2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvYXBpL3N1Z2dlc3Rpb24vJyArIGlkICsgJy9lZGl0JylcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2hvd1N1Z2dlc3Rpb25Nb2RhbCgnI3N1Z2dlc3Rpb24tbW9kYWwnLCAnVXBkYXRlJywgcmVzcG9uc2UuZGF0YS5pZCwgcmVzcG9uc2UuZGF0YS50aXRsZSwgcmVzcG9uc2UuZGF0YS5kaXJlY3QsIHJlc3BvbnNlLmRhdGEubWVzc2FnZSlcclxuICAgICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UuZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBjb25maXJtRGVsZXRlU3VnZ2VzdGlvbihpZCkge1xyXG4gICAgICB0aGlzLnNob3dTdWdnZXN0aW9uTW9kYWwoJyNjb25maXJtLXN1Z2dlc3Rpb24tbW9kYWwnLCAnRGVsZXRlJywgaWQpXHJcbiAgICB9LFxyXG4gICAgZGVsZXRlU3VnZ2VzdGlvbigpIHtcclxuICAgICAgdGhpcy4kaHR0cC5kZWxldGUod2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvYXBpL3N1Z2dlc3Rpb24vJyArIHRoaXMuc3VnZ2VzdGlvbi5pZClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbnMuc2tpcC0tXHJcblxyXG4gICAgICAgICAgdmFyIGkgPSBfLmluZGV4T2YodGhpcy5zdWdnZXN0aW9ucy5kYXRhLCBfLmZpbmQodGhpcy5zdWdnZXN0aW9ucy5kYXRhLCB7aWQ6IHJlc3BvbnNlLmRhdGEuaWR9KSlcclxuICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbnMuZGF0YS5zcGxpY2UoaSwgMSlcclxuXHJcbiAgICAgICAgICB0aGlzLmhpZGVTdWdnZXN0aW9uTW9kYWwoJyNjb25maXJtLXN1Z2dlc3Rpb24tbW9kYWwnKVxyXG4gICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5lcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9zdWdnZXN0aW9uLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

eval("Vue.http.interceptors.push(function (request, next) {\r\n    request.headers.set('Authorization', 'Bearer ' + document.getElementById('Authorization').value);\r\n\r\n    next();\r\n});\r\n\r\nVue.mixin({\r\n  data: function data() {\r\n    return {\r\n      active: 'post',\r\n      user: null\r\n    }\r\n  },\r\n  created: function created() {\n    var this$1 = this;\n\r\n    this.$http.get(window.location.origin + '/api/user')\r\n      .then(function (response) {\r\n        this$1.user = response.data\r\n      }).catch(function (response) {\r\n        console.error(response.error)\r\n      })\r\n\r\n      if (this.active == 'post') {\r\n        this.getPosts()\r\n      } else if (this.active == 'poll') {\r\n      } else if (this.active == 'suggestion') {\r\n        this.getSuggestions()\r\n      } else {\r\n        this.active = 'post'\r\n      }\r\n\r\n  },\r\n  methods: {\r\n    focusNext: function focusNext(target) {\r\n      $(target).focus()\r\n    },\r\n    switchActivity: function switchActivity(activity) {\r\n      this.active = activity\r\n\r\n      if (this.active == 'post') {\r\n        this.clearPolls()\r\n        this.clearSuggestions()\r\n        this.getPosts()\r\n      } else if (this.active == 'poll') {\r\n        this.clearSuggestions()\r\n        this.clearPosts()\r\n        //\r\n      } else if (this.active == 'suggestion') {\r\n        this.clearPosts()\r\n        this.clearPolls()\r\n        this.getSuggestions()\r\n      } else {\r\n        this.active = 'post'\r\n        this.clearPolls()\r\n        this.clearSuggestions()\r\n        this.getPosts()\r\n      }\r\n    },\r\n    clearPosts: function clearPosts() {\r\n      this.post.id = null\r\n      this.post.title = ''\r\n      this.post.description = ''\r\n      this.post.disabled = true\r\n      this.posts.skip = 0\r\n      this.posts.take = 5\r\n      this.posts.full = false\r\n      this.posts.data = []\r\n    },\r\n    clearPolls: function clearPolls() {},\r\n    clearSuggestions: function clearSuggestions() {\r\n      this.suggestion.id = null\r\n      this.suggestion.title = ''\r\n      this.suggestion.direct = ''\r\n      this.suggestion.message = ''\r\n      this.suggestion.disabled = true\r\n      this.suggestions.skip = 0\r\n      this.suggestions.take = 5\r\n      this.suggestions.full = false\r\n      this.suggestions.data = []\r\n    }\r\n  }\r\n})\r\n\r\n__webpack_require__(1)\r\n__webpack_require__(2)\r\n__webpack_require__(0)//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2hvbWUuanM/NTcyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJWdWUuaHR0cC5pbnRlcmNlcHRvcnMucHVzaCgocmVxdWVzdCwgbmV4dCkgPT4ge1xyXG4gICAgcmVxdWVzdC5oZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBdXRob3JpemF0aW9uJykudmFsdWUpO1xyXG5cclxuICAgIG5leHQoKTtcclxufSk7XHJcblxyXG5WdWUubWl4aW4oe1xyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhY3RpdmU6ICdwb3N0JyxcclxuICAgICAgdXNlcjogbnVsbFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuJGh0dHAuZ2V0KHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyAnL2FwaS91c2VyJylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLmVycm9yKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKHRoaXMuYWN0aXZlID09ICdwb3N0Jykge1xyXG4gICAgICAgIHRoaXMuZ2V0UG9zdHMoKVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlID09ICdwb2xsJykge1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlID09ICdzdWdnZXN0aW9uJykge1xyXG4gICAgICAgIHRoaXMuZ2V0U3VnZ2VzdGlvbnMoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gJ3Bvc3QnXHJcbiAgICAgIH1cclxuXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBmb2N1c05leHQodGFyZ2V0KSB7XHJcbiAgICAgICQodGFyZ2V0KS5mb2N1cygpXHJcbiAgICB9LFxyXG4gICAgc3dpdGNoQWN0aXZpdHkoYWN0aXZpdHkpIHtcclxuICAgICAgdGhpcy5hY3RpdmUgPSBhY3Rpdml0eVxyXG5cclxuICAgICAgaWYgKHRoaXMuYWN0aXZlID09ICdwb3N0Jykge1xyXG4gICAgICAgIHRoaXMuY2xlYXJQb2xscygpXHJcbiAgICAgICAgdGhpcy5jbGVhclN1Z2dlc3Rpb25zKClcclxuICAgICAgICB0aGlzLmdldFBvc3RzKClcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZSA9PSAncG9sbCcpIHtcclxuICAgICAgICB0aGlzLmNsZWFyU3VnZ2VzdGlvbnMoKVxyXG4gICAgICAgIHRoaXMuY2xlYXJQb3N0cygpXHJcbiAgICAgICAgLy9cclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZSA9PSAnc3VnZ2VzdGlvbicpIHtcclxuICAgICAgICB0aGlzLmNsZWFyUG9zdHMoKVxyXG4gICAgICAgIHRoaXMuY2xlYXJQb2xscygpXHJcbiAgICAgICAgdGhpcy5nZXRTdWdnZXN0aW9ucygpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSAncG9zdCdcclxuICAgICAgICB0aGlzLmNsZWFyUG9sbHMoKVxyXG4gICAgICAgIHRoaXMuY2xlYXJTdWdnZXN0aW9ucygpXHJcbiAgICAgICAgdGhpcy5nZXRQb3N0cygpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbGVhclBvc3RzKCkge1xyXG4gICAgICB0aGlzLnBvc3QuaWQgPSBudWxsXHJcbiAgICAgIHRoaXMucG9zdC50aXRsZSA9ICcnXHJcbiAgICAgIHRoaXMucG9zdC5kZXNjcmlwdGlvbiA9ICcnXHJcbiAgICAgIHRoaXMucG9zdC5kaXNhYmxlZCA9IHRydWVcclxuICAgICAgdGhpcy5wb3N0cy5za2lwID0gMFxyXG4gICAgICB0aGlzLnBvc3RzLnRha2UgPSA1XHJcbiAgICAgIHRoaXMucG9zdHMuZnVsbCA9IGZhbHNlXHJcbiAgICAgIHRoaXMucG9zdHMuZGF0YSA9IFtdXHJcbiAgICB9LFxyXG4gICAgY2xlYXJQb2xscygpIHt9LFxyXG4gICAgY2xlYXJTdWdnZXN0aW9ucygpIHtcclxuICAgICAgdGhpcy5zdWdnZXN0aW9uLmlkID0gbnVsbFxyXG4gICAgICB0aGlzLnN1Z2dlc3Rpb24udGl0bGUgPSAnJ1xyXG4gICAgICB0aGlzLnN1Z2dlc3Rpb24uZGlyZWN0ID0gJydcclxuICAgICAgdGhpcy5zdWdnZXN0aW9uLm1lc3NhZ2UgPSAnJ1xyXG4gICAgICB0aGlzLnN1Z2dlc3Rpb24uZGlzYWJsZWQgPSB0cnVlXHJcbiAgICAgIHRoaXMuc3VnZ2VzdGlvbnMuc2tpcCA9IDBcclxuICAgICAgdGhpcy5zdWdnZXN0aW9ucy50YWtlID0gNVxyXG4gICAgICB0aGlzLnN1Z2dlc3Rpb25zLmZ1bGwgPSBmYWxzZVxyXG4gICAgICB0aGlzLnN1Z2dlc3Rpb25zLmRhdGEgPSBbXVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbnJlcXVpcmUoJy4vcG9zdCcpXHJcbnJlcXVpcmUoJy4vc3VnZ2VzdGlvbicpXHJcbnJlcXVpcmUoJy4vbG9nb3V0JylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9ob21lLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);