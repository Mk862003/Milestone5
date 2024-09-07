"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var jspdf_1 = require("jspdf");
// Function to handle form submission
var handleFormSubmit = function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var username, resumeData, response, result, resumeUrl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                event.preventDefault();
                username = document.getElementById('username').value;
                resumeData = gatherResumeData();
                return [4 /*yield*/, fetch('/api/save-resume', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ username: username, resumeData: resumeData })
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                result = _a.sent();
                resumeUrl = result.url;
                // Display resume URL and show share/download buttons
                document.getElementById('resume-url').textContent = "Your resume is available at: ".concat(resumeUrl);
                document.getElementById('resume-url').classList.remove('hidden');
                document.getElementById('share-resume').classList.remove('hidden');
                document.getElementById('download-resume').classList.remove('hidden');
                return [2 /*return*/];
        }
    });
}); };
// Function to gather resume data (example)
var gatherResumeData = function () {
    // Collect and format resume data from the form
    // This is just a placeholder function
    return {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        profilePicture: document.getElementById('profile-pic-preview').src,
        skills: document.getElementById('skills').value,
        education: gatherEducationData(),
        workExperience: gatherWorkExperienceData()
    };
};
// Function to gather education data (example)
var gatherEducationData = function () {
    // Collect education data from form
    return [];
};
// Function to gather work experience data (example)
var gatherWorkExperienceData = function () {
    // Collect work experience data from form
    return [];
};
// Function to handle resume download as PDF
var handleDownloadResume = function () {
    var doc = new jspdf_1.default();
    doc.text("Resume", 10, 10);
    // Add resume content to the PDF here
    doc.save("resume.pdf");
};
// Function to handle sharing the resume
var handleShareResume = function () {
    var resumeUrl = document.getElementById('resume-url').textContent;
    navigator.clipboard.writeText(resumeUrl).then(function () {
        alert('Resume URL copied to clipboard!');
    });
};
// Add event listeners
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', handleFormSubmit);
(_b = document.getElementById('download-resume')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', handleDownloadResume);
(_c = document.getElementById('share-resume')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', handleShareResume);
