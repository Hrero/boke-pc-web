export default function () {
    const getItem = (item) => localStorage.getItem(item);
    
    if (window && getItem("userid") && getItem("headPicture") && getItem("nickname")) {
        return true;
    } else {
        return false;
    }
}
