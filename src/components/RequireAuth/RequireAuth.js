import { Navigate, useLocation } from "react-router-dom";
import { auth } from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <p>Loading...</p>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};
export default RequireAuth;