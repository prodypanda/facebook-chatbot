import Postback from './components/Bot/Postback'
import Postbackview from './components/Bot/PostbackView'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

export default [
    { path: '/', component: Postback, meta: { requiresAuth: true } },

    { path: '/login', component: Login, meta: { requiresAuth: false } },
    { path: '/register', component: Register, meta: { requiresAuth: false } },

    { path: '/postback/:id', component: Postbackview, meta: { requiresAuth: true } }
]