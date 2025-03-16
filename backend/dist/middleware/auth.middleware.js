"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLoggedOut = exports.authMiddleware = void 0;
const authMiddleware = (req, res, next) => {
    if (req.session && req.session.isLoggedIn) {
        next(); // El usuario está autenticado, puede continuar
    }
    else {
        res.status(401).json({ error: 'Unauthorized access! Please log in.' });
    }
};
exports.authMiddleware = authMiddleware;
const checkLoggedOut = (req, res, next) => {
    if (req.session && req.session.isLoggedIn) {
        res.status(301).redirect('/profile');
    }
    else {
        next(); // Si no está logueado, puede continuar
    }
};
exports.checkLoggedOut = checkLoggedOut;
