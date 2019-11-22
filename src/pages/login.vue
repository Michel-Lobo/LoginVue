<template>
    <section class="container-fluid login">
    <div class="container login-box">
<!-- Usuário -->
       <div class="row" id="login-access" >
           <div class="col-md-6 col-sm-12 login-box--left  d-none d-sm-block pt-5 pl-5 pr-5">
               <h2>Faça seu login!</h2>
               <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore.</p>
           </div>
           <div class="col-md-6 col-sm-12 login-box--right pt-5 pr-2">
               <div class="brand-logo"><img src="../assets/images/logo-brand.png" class="img-fluid"></div>
               <div class="login-access" >
                   <h6>Entre com seus dados de login:</h6>
                   <form>
                       <div class="form-group row mt-3">
                           <div class="col-sm-12 col-md-10 col-xs-12">
                               <input type="email" class="form-control" v-model="email" placeholder="Email">
                           </div>
                       </div>
                       <div class="form-group row">
                           <div class="col-sm-12 col-md-10 col-xs-12">
                               <input type="password" class="form-control" v-model="password" placeholder="Senha">
                           </div>
                       </div>
                       <div class="form-group row">
                           <div class="col-sm-12 col-md-10 col-xs-12">
                               <a href="/">Esqueceu a senha?</a>
                           </div>
                       </div>
                       <div class="form-group row mt-4">
                           <div class="col-sm-12 col-md-10 col-xs-12">
                               <button type="buttom" v-on:click.stop.prevent="login" class="text-uppercase btn btn-success btn-lg btn-block bc-btn bc-btn-green" >Continue</button>
                           </div>
                       </div>
                   </form>
               </div>
           </div>
        </div>
    </div>
    </section>
</template>

<script>
import auth from '../services/auth';
    export default {
        data(){
            return{
            email:'',
            password:''
            }
        },
        methods:{
            login(){
                console.log(this.email);
                auth.login({
                    email:this.email, password:this.password
                });
            }
        }
        
    }
</script>
