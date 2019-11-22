import router from '../../router'
import axios from 'axios';

const API_URL = '';
const LOGIN_URL = API_URL + 'login'
//const SIGNUP_URL = API_URL + 'users/'
export default{

    user:{
        authenticated: false,
        name:'',
        email:'',
        token:''
    },

    login(credentials){
        axios.post('https://travel-expense-backend.herokuapp.com/auth',
        {email:credentials.email, password:credentials.password})
        .then(response =>{
            this.user.authenticated = true;
            localStorage.setItem('id', response.data.user._id);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('name', response.data.user.name);
            localStorage.setItem('email', response.data.user.email);
            router.push({path: '/main/'});
            console.log(response.data);
        }).catch(err =>{
            return err;
        });
    },

    logout(){
        localStorage.clear();
        router.push({path: '/', name:'login'});
    },
    isAuthenticated(){
        var jwt = localStorage.getItem('token')
        if(jwt){
           return true;
        }
        else{
            return false;
        }
    }
}