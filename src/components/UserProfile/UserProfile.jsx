import React from "react";

const UserProfile = () => {
    const { currentUser } = useAuth();
    return (
        <div>
            <div>
                <p>{currentUser && currentUser.email}</p>
            </div>
            <div>
            <input type="text" value="First Name"/>
            <input type="text"/>
            </div>


        </div>
        
    );
};

export default UserProfile;
