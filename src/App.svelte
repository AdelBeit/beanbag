<script>
  export let name;
  import Auth from './Auth.svelte';

  let loginWithEmailPassword;
  let error = null;

  const loginHandler = async event => {
    const {email, password} = event.target.elements;
    try{
      error = null;
      await loginWithEmailPassword(email.value, password.value);
    } catch(err){
      error = err;
    }
  }
</script>

<style>
</style>

<main >
  <Auth 
  useRedirect={true}
  let:user
  let:loggedIn
  let:loginWithGoogle
  bind:loginWithEmailPassword
  let:logout>
  {#if loggedIn}
          <h2>{user.email}</h2>
          <button type="button" on:click={logout}>Logout</button>
    {:else}
        <form on:submit|preventDefault={loginHandler} >
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="name@acme.com"
          />
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="******************"
          />
          <button type="submit">Sign In</button>
          <button type="button" on:click|preventDefault={loginWithGoogle}>
            Sign In with Google
          </button>
      </form>
    {/if}
  </Auth>
</main>