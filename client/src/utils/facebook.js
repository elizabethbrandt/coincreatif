import firebase from 'firebase';



function IfUnAuthedFB () {
    return (

        <div
        onClick={() => {
        const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(facebookAuthProvider);
            }}
    >
        Sign in with Facebook
        </div>

);
  };

  export default IfUnAuthedFB;