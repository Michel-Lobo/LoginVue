<template>
<div>
      <div class="row mt-2 mb-1">
        <div class="col-md-12 bc-list-filter-all">
            <div class="check-control">
                <input id="chklist1" type="checkbox">
                <label for="chklist1">Selecionar | </label>
            </div>
            <a href="#" class="select_print" >
                <i class="fas fa-print"></i>
                <label>Imprimir selecionados</label>
            </a>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <div class="line-list check-list">
                <!--
                <router-link :v-for="item in quotas" class="item elementleft list-name" to="/pagequotedetail">
                    <div class="check-control">
                        <input id="chklist7" type="checkbox">
                        <label for="chklist7"></label>
                    </div>
                    <b class="categoryicon fas fa-home"></b>
                    <h5>Cota: {{item.quota}} | Grupo: {{item.group}} | <b>{{item.type}}: {{item.value}}</b></h5>
                    <h5>{{item.consortiumCompany}} | {{item.fund}}</h5>
                </router-link>
                -->
            </div>
        </div>
    </div>

   <div class="bc-pagination">
        <nav class="bc-pagination-nav">
            <ul class="pagination bc-pagination-navbottom justify-content-end">
                <li class="page-item disabled bc-pagination-nav-item"><a class="page-link bc-pagination-nav-link" href="#" tabindex="-1" aria-disabled="true">«</a></li>
                <li class="page-item bc-pagination-nav-item active" aria-current="page"><a class="page-link bc-pagination-nav-link" href="#">1</a></li>
                <li class="page-item bc-pagination-nav-item"><a class="page-link bc-pagination-nav-link" href="#">2</a></li>
                <li class="page-item bc-pagination-nav-item"><a class="page-link bc-pagination-nav-link" href="#">3</a></li>
                <li class="page-item bc-pagination-nav-item"><a class="page-link bc-pagination-nav-link" href="#">»</a></li>
            </ul>
        </nav>
    </div>
</div>
</template>

<script>
    import QuotaService from '../services/quota/QuotaService';
    export default {
        name: 'PageQuote',
        data(){
        return 
            {
                quotas:[]
            }
        },
        created(){
            this.get();
        },
        methods:{
            async get(){
                console.log(await QuotaService.get);
                this.quotas = QuotaService.get;
            }
        },
        
        
    }
</script>
