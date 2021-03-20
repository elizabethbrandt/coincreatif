import firebase from 'firebase';



function IfUnAuthedFB () {
    return (

        <button
        onClick={() => {
        const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(facebookAuthProvider);
            }}
    >
        Sign in with Facebook
        </button>

);
  };

  export default IfUnAuthedFB;