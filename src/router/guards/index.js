import { ANNONYMOUS, USER, userPermissionHierarchy } from './permissionsHierarchy';


// A mock user, IRL it comes from store
const user = {
    permissions: []
};

const handleRestrictedView = (to, userPermissions, next) => {
    if (userPermissions === ANNONYMOUS) {
        // IRL redirecing annonymous users to { name: 'Login' }
        next({ name: 'Home' })
    } else {
        for (let permission of userPermissions) {
            if (userPermissionHierarchy[to.meta.permissions] <= userPermissionHierarchy[permission]) {
                // Entity is authorized
                next();
                return;
            };
        };
        // Insufficent permission
        next({ name: 'PermissionDenied' });
    }
};

const globalGuard = (to, _, next) => {
    const userPermissions = "permissions" in user && user.permissions.length ? user.permissions : ANNONYMOUS;

    if (to.meta.permissions) {
        handleRestrictedView(to, userPermissions, next);
    } else {
        next();
    }
};


export default globalGuard;