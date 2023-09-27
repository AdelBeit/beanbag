<script>
  import TodoItem from './TodoItem.svelte';
  import {db} from './firebase.js';
  import {collectionData} from 'rxfire/firestore';
  import {startWith} from 'rxjs/operators';

  export let uid;

  let text = 'some task';

  const query = db.collection('todos').where('uid','==',uid).orderBy('created');
  const todos = collectionData(query,'id').pipe(startWith([]));

  function add(){
    db.collection('todos');
    text ='';
  }

  function updateStatus(event){
    console.log(event);
    const {id,newStatus} = event.detail;
    db.collection('todos').doc(id).update({complete:newStatus});
  }

  function removeItem(event){
    const {id} = event.detail;
    db.collection('todos').doc(id).delete();
  }

</script>

<ul>
  {#each $todos as todo}
    <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus}/>
  {/each}

  <input bind:value={text} /> 
  <hr>
  <p>Your task: <string>{text}</string></p>
  <button on:click={add}>Add Task</button>
</ul>