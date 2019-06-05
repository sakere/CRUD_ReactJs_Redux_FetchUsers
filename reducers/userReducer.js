const userReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_USERS':
            return state.concat([...action.data]);
      case 'ADD_USER':
        return state.concat([action.data]);
      case 'DELETE_USER':
        return state.filter((user)=>user.id !== action.id);
      case 'EDIT_USER':
        return state.map((user)=>user.id === action.id ? {...user,editing:!user.editing}:user)
      case 'UPDATE':
        return state.map((user)=>{
          if(user.id === action.id) {
            return {
               ...user,
               first_name: action.data.newFirstName,
               last_name: action.data.newLastName,
               address: action.data.newAddress,
               phoneNumber: action.data.newPhoneNumber,
               userName: action.data.newUserName,
               email: action.data.newEmailId,
               pinCode: action.data.newPinCode,
               editing: !user.editing
            }
          } else return user;
        })
      default:
        return state;
    }
  }
  export default userReducer;