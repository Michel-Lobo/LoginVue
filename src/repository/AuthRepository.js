import RepositoryBase from './RepositoryBase';

export default{
    async auth(user, password) {
        RepositoryBase.post('/auth',
        {
            user,
            password
        }).then(res=>{
            return res;
        }).catch(err => {
            return err;
        });
    }
}