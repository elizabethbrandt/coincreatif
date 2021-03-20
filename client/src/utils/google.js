import firebase from 'firebase';



function IfUnAuthed () {
    return (


        <button
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        >
          Sign in with Google
        </button>
    );
  };

  export default IfUnAuthed;

