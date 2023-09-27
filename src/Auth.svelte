<script>
  import { auth, GoogleProvider} from "./firebase";
  import {signInWithPopup, signInWithRedirect, signInWithEmailAndPassword} from 'firebase/auth';

  let user = null;

  export let useRedirect = false;

  const userMapper = claims => ({
    id: claims.user_id,
    name: claims.name,
    email: claims.email,
    picture: claims.picture,
  });

  export const loginWithEmailPassword = (email, password) => signInWithEmailAndPassword(email, password);

  export const loginWithGoogle =()=> {
    if(useRedirect){
      return signInWithRedirect(auth,GoogleProvider);
    } else {
      return signInWithPopup(auth,GoogleProvider);
    }
  }

  export const logout = () => auth.signOut();

  auth.onAuthStateChanged(async fireUser => {
    if(fireUser){
      fireUser.getIdTokenResult().then(token => {
        user = userMapper(token.claims);
      });
    } else {
      user = null;
    }
  });

  $: loggedIn = user !== null;
  </script>

  <div>
    <slot {user} {loggedIn} {loginWithGoogle} {loginWithEmailPassword} {logout} />
  </div>