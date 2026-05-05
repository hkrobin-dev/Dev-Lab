enum UserRole {
    Admin = "Admin",
    User = "User"
}
const canEdit = (role:UserRole)=>{
    if(role === UserRole.Admin || role === UserRole.User){
        return true;

    }else{
        return false
    }
}
console.log(canEdit)