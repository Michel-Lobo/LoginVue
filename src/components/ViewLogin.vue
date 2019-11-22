<template>
     <ul class="navbar-nav bc-topbar_username">
<li class="bg-topbar_photo"><img src="../assets/images/photo.png" class="img-fluid"></li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="dropdown08"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <h5>{{name}}</h5>
          <small>{{email}}</small>
        </a>
        <div class="dropdown-menu bc-topbar_submenu" aria-labelledby="dropdown08">
          <a class="dropdown-item" href="#">Meu perfil</a>
          <a class="dropdown-item" href="#">Minha Conta</a>
          <a class="dropdown-item" href="#" v-on:click.stop.prevent="logout">Sair</a>
        </div>
      </li>
    </ul>
</template>

<script>
import auth from '../services/auth'

    export default {
        name: 'ViewLogin',
        data()
            { return{
                'name' : localStorage.getItem('name'),
                'email': localStorage.getItem('email')
            }
            },
            methods:{
                logout(){
                    auth.logout();
                }
            }
        
    }
</script>
