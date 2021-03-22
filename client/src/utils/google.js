import firebase from 'firebase';



function IfUnAuthed () {
    return (


        <div
          onClick={() => {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }}
        >
          Sign in with Google
        </div>
    );
  };

  export default IfUnAuthed;

