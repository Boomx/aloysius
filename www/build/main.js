webpackJsonp([0],{

/***/ 174:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 174;

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 216;

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/denilson/hackaton/aloysius/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <h1>\n        Olá\n      </h1>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="green-background" padding>\n  <div class="jumbotron">\n    <h1>Bem vindo ao Aloysius</h1>\n\n    <h3>\n      Seu objetivo é facilitar seu dia como DP.\n    </h3>\n  </div>\n</ion-content>\n<ion-footer>\n  <!-- Powered by Stone.co -->\n</ion-footer>'/*ion-inline-end:"/home/denilson/hackaton/aloysius/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__candidatesList_candidatesList__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tagsList_tagsList__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__statusList_statusList__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenusPage = (function () {
    function MenusPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.menus = [
            { title: 'Todos', component: __WEBPACK_IMPORTED_MODULE_2__candidatesList_candidatesList__["a" /* CandidatesListPage */], icon: 'people' },
            { title: 'Habilidades', component: __WEBPACK_IMPORTED_MODULE_3__tagsList_tagsList__["a" /* TagsListPage */], icon: 'pricetags' },
            { title: 'Status', component: __WEBPACK_IMPORTED_MODULE_4__statusList_statusList__["a" /* StatusListPage */], icon: 'stats' }
        ];
    }
    MenusPage.prototype.showCandidates = function (page) {
        this.navCtrl.push(page.component);
    };
    return MenusPage;
}());
MenusPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menus',template:/*ion-inline-start:"/home/denilson/hackaton/aloysius/src/pages/menus/menus.html"*/'<ion-header >\n    <ion-navbar color="primary">\n    <ion-title>\n      <h1>\n        Aloysius\n      </h1>\n    </ion-title>\n    </ion-navbar >\n</ion-header>\n\n<ion-content >\n    <ion-list>\n    <button ion-item *ngFor="let p of menus" (click)="showCandidates(p)">\n        <h1>\n          <ion-icon name="{{p.icon}}"></ion-icon>\n          {{p.title}}\n        </h1>\n    </button>\n    </ion-list>\n</ion-content>\n<ion-footer>\n  Powered by Stone.co\n</ion-footer>\n'/*ion-inline-end:"/home/denilson/hackaton/aloysius/src/pages/menus/menus.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], MenusPage);

//# sourceMappingURL=menus.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_candidates_candidates_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__candidatesList_candidatesList__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ramda__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ramda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ramda__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TagsListPage = (function () {
    function TagsListPage(navCtrl, eventCtrl, candidatesService) {
        this.navCtrl = navCtrl;
        this.eventCtrl = eventCtrl;
        this.candidatesService = candidatesService;
        this.allCandidates = candidatesService.getCandidates();
        this.tags = this.gatherTags();
    }
    TagsListPage.prototype.getCandidateTags = function (candidate) {
        return candidate.tags.split(',').map(function (x) { return x.trim(); });
    };
    TagsListPage.prototype.gatherTags = function () {
        var tags = __WEBPACK_IMPORTED_MODULE_4_ramda__["chain"](this.getCandidateTags, this.allCandidates);
        var uniqueTags = __WEBPACK_IMPORTED_MODULE_4_ramda__["uniq"](tags);
        return uniqueTags;
    };
    TagsListPage.prototype.showCandidatesFromTag = function (tag) {
        var _this = this;
        var candidates = this.allCandidates.filter(function (candidate) {
            return _this.getCandidateTags(candidate).includes(tag);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__candidatesList_candidatesList__["a" /* CandidatesListPage */], candidates);
    };
    TagsListPage.prototype.searchTags = function (param) {
        var _this = this;
        if (!param)
            return this.tags;
        return this.tags.map(function (x) { return x.toLowerCase(); }).filter(function (tag) {
            return _this.tags.includes(param.toLowerCase());
        });
    };
    return TagsListPage;
}());
TagsListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tags-list',template:/*ion-inline-start:"/home/denilson/hackaton/aloysius/src/pages/menus/tagsList/tagsList.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      <h1>\n\n        Candidatos\n      </h1>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let tag of tags" (click)="showCandidatesFromTag(tag)">\n      <h1>\n        {{tag}}\n      </h1>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/denilson/hackaton/aloysius/src/pages/menus/tagsList/tagsList.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__services_candidates_candidates_service__["a" /* CandidatesService */]])
], TagsListPage);

//# sourceMappingURL=tagsList.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_candidates_candidates_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__candidatesList_candidatesList__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ramda__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ramda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ramda__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StatusListPage = (function () {
    function StatusListPage(navCtrl, eventCtrl, candidatesService, toastController) {
        this.navCtrl = navCtrl;
        this.eventCtrl = eventCtrl;
        this.candidatesService = candidatesService;
        this.toastController = toastController;
        this.statusCodes = [0, 1, 2, 3, 4];
        this.getStatusFromEnum = this.candidatesService.getStatusfromEnum;
        this.allCandidates = candidatesService.getCandidates();
    }
    StatusListPage.prototype.getCandidateTags = function (candidate) {
        return candidate.tags.split(',').map(function (x) { return x.trim(); });
    };
    StatusListPage.prototype.showCandidatesFromCode = function (code) {
        var candidates = this.allCandidates.filter(function (candidate) {
            return candidate.status == code;
        });
        if (__WEBPACK_IMPORTED_MODULE_4_ramda__["isEmpty"](candidates)) {
            var toaster_1 = this.toastController.create({ message: "Não candidatos existem com estes status", position: "top" });
            toaster_1.present();
            setTimeout(function () {
                toaster_1.dismiss();
            }, 2000);
        }
        else
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__candidatesList_candidatesList__["a" /* CandidatesListPage */], candidates);
    };
    return StatusListPage;
}());
StatusListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tags-list',template:/*ion-inline-start:"/home/denilson/hackaton/aloysius/src/pages/menus/statusList/statusList.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      <h1>\n\n        Candidatos\n      </h1>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let code of statusCodes" (click)="showCandidatesFromCode(code)">\n      <h1>\n        {{getStatusFromEnum(code)}}\n        </h1>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/denilson/hackaton/aloysius/src/pages/menus/statusList/statusList.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__services_candidates_candidates_service__["a" /* CandidatesService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], StatusListPage);

//# sourceMappingURL=statusList.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_candidates_candidates_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editProfile_editProfile__ = __webpack_require__(321);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CandidateProfilePage = (function () {
    function CandidateProfilePage(navCtrl, eventCtrl, navParams, candidateService, loadingController, modalController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.eventCtrl = eventCtrl;
        this.navParams = navParams;
        this.candidateService = candidateService;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.getStatusfromEnum = this.candidateService.getStatusfromEnum;
        this.profile = {};
        var profile = __assign({}, navParams.data);
        profile.tags = this.parseTags(profile.tags);
        this.profile = profile;
        this.loader = this.loadingController.create();
        this.loader.present();
        this.candidateService.loadCurriculum(profile.id).subscribe(function (resp) {
            _this.waitProfile = resp.json();
            _this.loader.dismiss();
        });
    }
    CandidateProfilePage.prototype.parseTags = function (tags) {
        return (typeof tags) === 'string' ? tags.split(',') : (Array.isArray(tags) ? tags : []);
    };
    CandidateProfilePage.prototype.getColorByStatus = function (num) {
        return ["myGray", "myLightYellow", "myYellow", "myGreen", "myRed"][num];
    };
    CandidateProfilePage.prototype.updateStatus = function (candidate) {
        var _this = this;
        this.loader = this.loader = this.loadingController.create();
        this.loader.present();
        this.candidateService.updateCandidateStatus(candidate).subscribe(function (resp) {
            setTimeout(function () { return _this.candidateService.loadCandidate(candidate.id).subscribe(function (resp) {
                _this.profile = resp.json();
                _this.profile.tags = _this.parseTags(_this.profile.tags);
                _this.candidateService.loadCandidates();
                _this.profile.newObs = "";
                _this.loader.dismiss();
            }); }, 1000);
        });
    };
    CandidateProfilePage.prototype.editCandidate = function () {
        var _this = this;
        console.log("editCandidate");
        var modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_3__editProfile_editProfile__["a" /* EditProfilePage */], this.profile);
        this.loader = this.loader = this.loadingController.create();
        modal.present();
        modal.onDidDismiss(function (resp) {
            if (resp) {
                _this.loader.present();
                _this.candidateService.updateCandidate(resp).subscribe(function (resp) {
                    setTimeout(function () { return _this.candidateService.loadCandidate(_this.profile.id).subscribe(function (resp) {
                        _this.profile = resp.json();
                        _this.profile.tags = _this.parseTags(_this.profile.tags);
                        _this.candidateService.loadCandidates();
                        _this.profile.newObs = "";
                        _this.loader.dismiss();
                    }); }, 1000);
                });
            }
        });
    };
    CandidateProfilePage.prototype.downloadCurriculum = function () {
        var pdfBlob = b64toBlob(this.waitProfile.filecontent, 'application/pdf', 512);
        // var blob;
        // var blob_response = new Blob([ 'data:application/octet-stream;base64,' + this.waitProfile.filecontent], {
        //   type: 'application/pdf'
        // });
        var fileURL = URL.createObjectURL(pdfBlob);
        var summary_pdf = document.createElement('a');
        summary_pdf.href = fileURL;
        summary_pdf.target = '_blank';
        summary_pdf.download = this.waitProfile.filename;
        // return summary_pdf;
        document.body.appendChild(summary_pdf);
        summary_pdf.click();
        // $scope.alerts.push(response.data.message);
        function b64toBlob(b64Data, contentType, sliceSize) {
            contentType = contentType || '';
            sliceSize = sliceSize || 512;
            var byteCharacters = atob(b64Data);
            var byteArrays = [];
            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                var slice = byteCharacters.slice(offset, offset + sliceSize);
                var byteNumbers = new Array(slice.length);
                for (var i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }
                var byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }
            var blob = new Blob(byteArrays, { type: contentType });
            return blob;
        }
    };
    return CandidateProfilePage;
}());
CandidateProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'candidate-profile-page',template:/*ion-inline-start:"/home/denilson/hackaton/aloysius/src/pages/candidateProfile/candidateProfile.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true" color="primary">\n    <ion-title>\n      <h1>\n        Perfil\n      </h1>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="editCandidate()">\n          <ion-icon name="create" end></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <article>\n    <ion-row>\n      <ion-col>\n        <header>\n          <h1 class="profile-name">{{profile.nome}}</h1>\n          <div class="profile-infos">\n            <h3 class="profile-age">Idade: {{profile.idade}} anos,Cidade: {{profile.cidade}} / {{profile.estado}}</h3>\n            <h4 class="profile-area">Área de atuação: {{profile.area}} / {{profile.subarea}}</h4>\n            <h4>\n              <ion-badge *ngFor="let tag of profile.tags">\n                {{tag}}\n              </ion-badge>\n            </h4>\n          </div>\n        </header>\n        <content>\n          <h6 class="profile-infos"> <span style="font-weight: bold;">Status:</span>\n            <ion-badge color="{{getColorByStatus(profile.status)}}">{{getStatusfromEnum(profile.status)}}</ion-badge> | <span>Responsável: {{profile.responsavel}}</span>\n          </h6>\n          <h6 class="profile-tel profile-infos" *ngIf="profile.telefone">\n            <ion-icon name="call"></ion-icon>: {{profile.telefone}}</h6>\n          <h6 class="profile-tel profile-infos" *ngIf="profile.email">\n            <ion-icon name="mail"></ion-icon>: <a href="mailto:{{profile.email}}">{{profile.email}}</a> </h6>\n          <h6 class="profile-linkedin profile-infos" *ngIf="profile.linkedin">\n            <ion-icon name="logo-linkedin"></ion-icon>: <a href="{{profile.linkedin}}">{{profile.linkedin}}</a> </h6>\n          <h6 class="profile-github profile-infos" *ngIf="profile.github">\n            <ion-icon name="logo-github"></ion-icon>: <a href="{{profile.github}}">{{profile.github}}</a> </h6>\n          <button [disabled]="!waitProfile || waitProfile.filecontent === \'Não informado\'" ion-button primary (click)="downloadCurriculum(profile.id)">Baixar Currículo</button>\n        </content>\n      </ion-col>\n      <ion-col>\n        <h6 class="profile-infos" style="font-weight: bold;">Comentários: </h6>\n        <ion-list>\n          <ion-item *ngFor="let comment of  profile.obs">- "{{comment}}"</ion-item>\n        </ion-list>\n        <div class="statusUpdate">\n          <h4 style="text-align:center;padding-top:20px;">Inserir novo Status</h4>\n          <hr/>\n          <ion-row>\n            <ion-textarea placeholder="Enter a description" [(ngModel)]="profile.newObs"></ion-textarea>\n          </ion-row>\n          <ion-row>\n            <ion-item>\n              <ion-label>Status</ion-label>\n              <ion-select [(ngModel)]="profile.status">\n                <ion-option value="0">Novo</ion-option>\n                <ion-option value="1">Pendente</ion-option>\n                <ion-option value="2">Em processo</ion-option>\n                <ion-option value="3">Contratado</ion-option>\n                <ion-option value="4">Eliminado</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-row>\n          <ion-row>\n            <button ion-button block primary (click)="updateStatus(profile)">Atualizar estado</button>\n          </ion-row>\n          <hr/>\n        </div>\n      </ion-col>\n    </ion-row>\n  </article>\n</ion-content>\n'/*ion-inline-end:"/home/denilson/hackaton/aloysius/src/pages/candidateProfile/candidateProfile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_candidates_candidates_service__["a" /* CandidatesService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], CandidateProfilePage);

//# sourceMappingURL=candidateProfile.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditProfilePage = (function () {
    function EditProfilePage(navCtrl, navParams, modalContoller, viewController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalContoller = modalContoller;
        this.viewController = viewController;
        this.profile = {};
        var profile = __assign({}, navParams.data);
        this.profile = profile;
    }
    EditProfilePage.prototype.cancel = function () {
        this.viewController.dismiss(false);
    };
    EditProfilePage.prototype.submit = function () {
        this.viewController.dismiss(this.profile);
    };
    return EditProfilePage;
}());
EditProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'candidate-profile-edit-page',template:/*ion-inline-start:"/home/denilson/hackaton/aloysius/src/pages/candidateProfile/editProfile/editProfile.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true" color="primary">\n    <ion-title>\n      Editar\n    </ion-title>\n    <ion-buttons end>\n       <button ion-button (click)="cancel()">\n          <ion-icon name="close" end></ion-icon>\n        </button>         \n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <article>\n    <form (ngSubmit)="submit()">\n      <ion-item>\n        <ion-label floating>Nome</ion-label>\n        <ion-input type="text" [(ngModel)]="profile.nome" name="nome"></ion-input>\n      </ion-item>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Idade</ion-label>\n            <ion-input type="number" [(ngModel)]="profile.idade" name="idade"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Cidade</ion-label>\n            <ion-input type="text" [(ngModel)]="profile.cidade" name="cidade"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Estado</ion-label>\n            <ion-input [(ngModel)]="profile.estado" name="estado"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Área</ion-label>\n            <ion-input [(ngModel)]="profile.area" name="área"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Sub-area</ion-label>\n            <ion-input [(ngModel)]="profile.subarea" name="subarea"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Telefone</ion-label>\n            <ion-input [(ngModel)]="profile.telefone" name="telefone"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Tags</ion-label>\n            <ion-input [(ngModel)]="profile.tags" name="tags"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input [(ngModel)]="profile.email" name="email"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>Responsável</ion-label>\n            <ion-select [(ngModel)]="profile.responsavel" name="responsavel">\n              <ion-option value="denilson.santos@mundipagg.com">denilson.santos@mundipagg.com</ion-option>\n              <ion-option value="r.mirandaterra@gmail.com">r.mirandaterra@gmail.com</ion-option>\n              <ion-option value="lbarbosa@stone.com.br">lbarbosa@stone.com.br</ion-option>\n              <ion-option value="thales.mello@pagar.me">thales.mello@pagar.me</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>LinkedIn</ion-label>\n            <ion-input [(ngModel)]="profile.linkedin" name="linkedin"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>GitHub</ion-label>\n            <ion-input [(ngModel)]="profile.github" name="github"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <button ion-button type="submit" block>Confirma</button>\n    </form>\n  </article>\n</ion-content>\n'/*ion-inline-end:"/home/denilson/hackaton/aloysius/src/pages/candidateProfile/editProfile/editProfile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], EditProfilePage);

//# sourceMappingURL=editProfile.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(340);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_menus_menus__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_menus_candidatesList_candidatesList__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_candidateProfile_candidateProfile__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_candidates_candidates_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_menus_tagsList_tagsList__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_menus_statusList_statusList__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_candidateProfile_editProfile_editProfile__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_menus_menus__["a" /* MenusPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_menus_candidatesList_candidatesList__["a" /* CandidatesListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_candidateProfile_candidateProfile__["a" /* CandidateProfilePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_menus_tagsList_tagsList__["a" /* TagsListPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_menus_statusList_statusList__["a" /* StatusListPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_candidateProfile_editProfile_editProfile__["a" /* EditProfilePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_menus_menus__["a" /* MenusPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_menus_candidatesList_candidatesList__["a" /* CandidatesListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_candidateProfile_candidateProfile__["a" /* CandidateProfilePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_menus_tagsList_tagsList__["a" /* TagsListPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_menus_statusList_statusList__["a" /* StatusListPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_candidateProfile_editProfile_editProfile__["a" /* EditProfilePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__services_candidates_candidates_service__["a" /* CandidatesService */],
            __WEBPACK_IMPORTED_MODULE_13__pages_menus_tagsList_tagsList__["a" /* TagsListPage */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_menus_menus__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_candidateProfile_candidateProfile__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_candidates_candidates_service__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, eventCtrl, candidateService, loadingController, fodase) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.eventCtrl = eventCtrl;
        this.candidateService = candidateService;
        this.loadingController = loadingController;
        this.fodase = fodase;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.menusPage = __WEBPACK_IMPORTED_MODULE_5__pages_menus_menus__["a" /* MenusPage */];
        this.initializeApp();
        this.loader = this.loadingController.create();
        this.loader.present();
        // fodase.create(EditProfilePage).present();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.candidateService.loadCandidates().subscribe(function (resp) {
                var urlParams = new URLSearchParams(window.location.search);
                var cand_id = urlParams.get('candidato_id');
                if (cand_id) {
                    console.log(cand_id);
                    var candidate = resp.find(function (candidate) { return candidate.id == cand_id; });
                    console.log(candidate);
                    _this.loader.dismiss();
                    if (candidate)
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_candidateProfile_candidateProfile__["a" /* CandidateProfilePage */], candidate);
                }
                else
                    _this.loader.dismiss();
            });
            _this.setSubscriptions();
        });
    };
    MyApp.prototype.setSubscriptions = function () {
        var _this = this;
        this.eventCtrl.subscribe('changeRootPage', function (candidate) {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_candidateProfile_candidateProfile__["a" /* CandidateProfilePage */], candidate);
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/denilson/hackaton/aloysius/src/app/app.html"*/'<ion-split-pane>\n  <ion-nav [root]="rootPage" #content canGoBack="false" swipeBackEnabled="false" main></ion-nav>\n  <ion-menu persistent="true" [content]="content">\n    <ion-nav [root]="menusPage"  canGoBack="true" menu></ion-nav>  \n  </ion-menu>\n</ion-split-pane>'/*ion-inline-end:"/home/denilson/hackaton/aloysius/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
        __WEBPACK_IMPORTED_MODULE_7__services_candidates_candidates_service__["a" /* CandidatesService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidatesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CandidatesService = (function () {
    function CandidatesService(http) {
        this.http = http;
        this.candidates = [];
    }
    CandidatesService.prototype.loadCandidates = function () {
        var _this = this;
        return this.http.get("https://hackmundi.herokuapp.com/candidatos").map(function (resp) {
            return _this.candidates = resp.json();
        });
    };
    CandidatesService.prototype.loadCandidate = function (id) {
        return this.http.get("https://hackmundi.herokuapp.com/candidatos/" + id);
    };
    CandidatesService.prototype.updateCandidateStatus = function (candidate) {
        return this.http.put("https://hackmundi.herokuapp.com/candidatos/" + candidate.id + "/status", { status: candidate.status, obs: candidate.newObs });
    };
    CandidatesService.prototype.updateCandidate = function (candidate) {
        return this.http.put("https://hackmundi.herokuapp.com/candidatos/" + candidate.id, candidate);
    };
    CandidatesService.prototype.getCandidates = function () {
        return this.candidates;
    };
    ;
    CandidatesService.prototype.searchCandidates = function (param, candidates) {
        if (!param)
            return candidates;
        return candidates.filter(function (candidate) {
            return Object.keys(candidate).some(function (key) {
                if (typeof candidate[key] === 'string' || Array.isArray(candidate[key])) {
                    return candidate[key].includes(param);
                }
                return false;
            });
        });
    };
    CandidatesService.prototype.getStatusfromEnum = function (num) {
        return ["Novo", "Pendente", "Em processo", "Contratado", "Eliminado"][num];
    };
    CandidatesService.prototype.loadCurriculum = function (id) {
        return this.http.get("https://hackmundi.herokuapp.com/candidatos/" + id);
    };
    return CandidatesService;
}());
CandidatesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], CandidatesService);

//# sourceMappingURL=candidates.service.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/home/denilson/hackaton/aloysius/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/denilson/hackaton/aloysius/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidatesListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_candidates_candidates_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ramda__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CandidatesListPage = (function () {
    function CandidatesListPage(navCtrl, eventCtrl, candidatesService, navParam) {
        this.navCtrl = navCtrl;
        this.eventCtrl = eventCtrl;
        this.candidatesService = candidatesService;
        this.navParam = navParam;
        this.allCandidates = candidatesService.getCandidates();
        this.candidates = __WEBPACK_IMPORTED_MODULE_3_ramda__["isEmpty"](navParam.data) ? candidatesService.getCandidates() : navParam.data;
    }
    CandidatesListPage.prototype.showCandidate = function (candidate) {
        this.eventCtrl.publish('changeRootPage', candidate);
    };
    CandidatesListPage.prototype.searchCandidates = function (param) {
        this.candidates = this.candidatesService.searchCandidates(param, this.allCandidates);
    };
    return CandidatesListPage;
}());
CandidatesListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-candidates-list',template:/*ion-inline-start:"/home/denilson/hackaton/aloysius/src/pages/menus/candidatesList/candidatesList.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      <h1>\n        Candidatos\n      </h1>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-searchbar (ionInput)="searchCandidates(myParam)" [(ngModel)]="myParam"></ion-searchbar>\n  <ion-list>\n    <button menuClose ion-item *ngFor="let candidate of candidates" (click)="showCandidate(candidate)">\n      <h1>\n        {{candidate.nome}}\n        </h1>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/denilson/hackaton/aloysius/src/pages/menus/candidatesList/candidatesList.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__services_candidates_candidates_service__["a" /* CandidatesService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], CandidatesListPage);

//# sourceMappingURL=candidatesList.js.map

/***/ })

},[322]);
//# sourceMappingURL=main.js.map