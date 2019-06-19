import React from 'react';

const UserDataContext = React.createContext({
    comments: [],
    rating: [],
    postUserData: ()=> {},
})
	

export default UserDataContext;