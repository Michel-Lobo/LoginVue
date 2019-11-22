<template>
<div>
<app-header></app-header>

  <div class="container-fluid">
    <div class="row">
      <app-leftbar></app-leftbar>
      <div class="col-sm-12 col-md-9 col-md-9 ml-sm-auto col-lg-10 px-4">
        <main class="container-fluid mt-4 bc-content">
            <app-sum></app-sum>
            <app-content></app-content>
          <!--div class="row mt-2 mb-1">
            <div class="col-md-12 bc-list-filter-all">
              <div class="check-control">
                <input id="chklist1" type="checkbox" />
                <label for="chklist1">Selecionar |</label>
              </div>
              <a href="#" class="select_print">
                <i class="fas fa-print"></i>
                <label>Imprimir selecionados</label>
              </a>
              <a href="#" class="button-pending-payment float-right">
                <label>Pagamentos pendentes</label>
                <span data-toggle="modal" data-target="#payment-manual">15</span>
              </a>
            </div>
          </!--div>

          <div class="row">
            <div class="col-md-12">
              <div class="line-list check-list">
                <a class="item elementleft" href="page_payment-detail.html">
                  <div class="check-control">
                    <input id="chklist7" type="checkbox" />
                    <label for="chklist7"></label>
                  </div>
                  <b class="categoryicon fas fa-home"></b>
                  <h5>
                    <b>Data: 10/12/2019 | Valor total: R$ 500.000,00</b>
                  </h5>
                  <h5>Nome Administradora | Fundo Pagador</h5>
                  <div class="status-tree">
                    <span class="status-left">Com erro</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Confirmadas</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Enviadas</span>
                    <span class="status-right">02</span>
                  </div>
                </a>
                <a class="item elementleft" href="page_payment-detail.html">
                  <div class="check-control">
                    <input id="chklist7" type="checkbox" />
                    <label for="chklist7"></label>
                  </div>
                  <b class="categoryicon fas fa-home"></b>
                  <h5>
                    <b>Data: 10/12/2019 | Valor total: R$ 500.000,00</b>
                  </h5>
                  <h5>Nome Administradora | Fundo Pagador</h5>
                  <div class="status-tree">
                    <span class="status-left">Com erro</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Confirmadas</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Enviadas</span>
                    <span class="status-right">02</span>
                  </div>
                </a>
                <a class="item elementleft" href="page_payment-detail.html">
                  <div class="check-control">
                    <input id="chklist7" type="checkbox" />
                    <label for="chklist7"></label>
                  </div>
                  <b class="categoryicon fas fa-home"></b>
                  <h5>
                    <b>Data: 10/12/2019 | Valor total: R$ 500.000,00</b>
                  </h5>
                  <h5>Nome Administradora | Fundo Pagador</h5>
                  <div class="status-tree">
                    <span class="status-left">Com erro</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Confirmadas</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Enviadas</span>
                    <span class="status-right">02</span>
                  </div>
                </a>
                <a class="item elementleft" href="page_payment-detail.html">
                  <div class="check-control">
                    <input id="chklist7" type="checkbox" />
                    <label for="chklist7"></label>
                  </div>
                  <b class="categoryicon fas fa-home"></b>
                  <h5>
                    <b>Data: 10/12/2019 | Valor total: R$ 500.000,00</b>
                  </h5>
                  <h5>Nome Administradora | Fundo Pagador</h5>
                  <div class="status-tree">
                    <span class="status-left">Com erro</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Confirmadas</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Enviadas</span>
                    <span class="status-right">02</span>
                  </div>
                </a>
                <a class="item elementleft" href="page_payment-detail.html">
                  <div class="check-control">
                    <input id="chklist7" type="checkbox" />
                    <label for="chklist7"></label>
                  </div>
                  <b class="categoryicon fas fa-home"></b>
                  <h5>
                    <b>Data: 10/12/2019 | Valor total: R$ 500.000,00</b>
                  </h5>
                  <h5>Nome Administradora | Fundo Pagador</h5>
                  <div class="status-tree">
                    <span class="status-left">Com erro</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Confirmadas</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Enviadas</span>
                    <span class="status-right">02</span>
                  </div>
                </a>
                <a class="item elementleft" href="page_payment-detail.html">
                  <div class="check-control">
                    <input id="chklist7" type="checkbox" />
                    <label for="chklist7"></label>
                  </div>
                  <b class="categoryicon fas fa-home"></b>
                  <h5>
                    <b>Data: 10/12/2019 | Valor total: R$ 500.000,00</b>
                  </h5>
                  <h5>Nome Administradora | Fundo Pagador</h5>
                  <div class="status-tree">
                    <span class="status-left">Com erro</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Confirmadas</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Enviadas</span>
                    <span class="status-right">02</span>
                  </div>
                </a>
                <a class="item elementleft" href="page_payment-detail.html">
                  <div class="check-control">
                    <input id="chklist7" type="checkbox" />
                    <label for="chklist7"></label>
                  </div>
                  <b class="categoryicon fas fa-home"></b>
                  <h5>
                    <b>Data: 10/12/2019 | Valor total: R$ 500.000,00</b>
                  </h5>
                  <h5>Nome Administradora | Fundo Pagador</h5>
                  <div class="status-tree">
                    <span class="status-left">Com erro</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Confirmadas</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Enviadas</span>
                    <span class="status-right">02</span>
                  </div>
                </a>
                <a class="item elementleft" href="page_payment-detail.html">
                  <div class="check-control">
                    <input id="chklist7" type="checkbox" />
                    <label for="chklist7"></label>
                  </div>
                  <b class="categoryicon fas fa-home"></b>
                  <h5>
                    <b>Data: 10/12/2019 | Valor total: R$ 500.000,00</b>
                  </h5>
                  <h5>Nome Administradora | Fundo Pagador</h5>
                  <div class="status-tree">
                    <span class="status-left">Com erro</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Confirmadas</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Enviadas</span>
                    <span class="status-right">02</span>
                  </div>
                </a>
                <a class="item elementleft" href="page_payment-detail.html">
                  <div class="check-control">
                    <input id="chklist7" type="checkbox" />
                    <label for="chklist7"></label>
                  </div>
                  <b class="categoryicon fas fa-home"></b>
                  <h5>
                    <b>Data: 10/12/2019 | Valor total: R$ 500.000,00</b>
                  </h5>
                  <h5>Nome Administradora | Fundo Pagador</h5>
                  <div class="status-tree">
                    <span class="status-left">Com erro</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Confirmadas</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Enviadas</span>
                    <span class="status-right">02</span>
                  </div>
                </a>
                <a class="item elementleft" href="page_payment-detail.html">
                  <div class="check-control">
                    <input id="chklist7" type="checkbox" />
                    <label for="chklist7"></label>
                  </div>
                  <b class="categoryicon fas fa-home"></b>
                  <h5>
                    <b>Data: 10/12/2019 | Valor total: R$ 500.000,00</b>
                  </h5>
                  <h5>Nome Administradora | Fundo Pagador</h5>
                  <div class="status-tree">
                    <span class="status-left">Com erro</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Confirmadas</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Enviadas</span>
                    <span class="status-right">02</span>
                  </div>
                </a>
                <a class="item elementleft" href="page_payment-detail.html">
                  <div class="check-control">
                    <input id="chklist7" type="checkbox" />
                    <label for="chklist7"></label>
                  </div>
                  <b class="categoryicon fas fa-home"></b>
                  <h5>
                    <b>Data: 10/12/2019 | Valor total: R$ 500.000,00</b>
                  </h5>
                  <h5>Nome Administradora | Fundo Pagador</h5>
                  <div class="status-tree">
                    <span class="status-left">Com erro</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Confirmadas</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Enviadas</span>
                    <span class="status-right">02</span>
                  </div>
                </a>
                <a class="item elementleft" href="page_payment-detail.html">
                  <div class="check-control">
                    <input id="chklist7" type="checkbox" />
                    <label for="chklist7"></label>
                  </div>
                  <b class="categoryicon fas fa-home"></b>
                  <h5>
                    <b>Data: 10/12/2019 | Valor total: R$ 500.000,00</b>
                  </h5>
                  <h5>Nome Administradora | Fundo Pagador</h5>
                  <div class="status-tree">
                    <span class="status-left">Com erro</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Confirmadas</span>
                    <span class="status-right">02</span>
                  </div>
                  <div class="status-tree">
                    <span class="status-left">Enviadas</span>
                    <span class="status-right">02</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div-- class="bc-pagination">
            <nav class="bc-pagination-nav">
              <ul class="pagination bc-pagination-navbottom justify-content-end">
                <li class="page-item disabled bc-pagination-nav-item">
                  <a
                    class="page-link bc-pagination-nav-link"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >«</a>
                </li>
                <li class="page-item bc-pagination-nav-item active" aria-current="page">
                  <a class="page-link bc-pagination-nav-link" href="#">1</a>
                </li>
                <li class="page-item bc-pagination-nav-item">
                  <a class="page-link bc-pagination-nav-link" href="#">2</a>
                </li>
                <li class="page-item bc-pagination-nav-item">
                  <a class="page-link bc-pagination-nav-link" href="#">3</a>
                </li>
                <li class="page-item bc-pagination-nav-item">
                  <a class="page-link bc-pagination-nav-link" href="#">»</a>
                </li>
              </ul>
            </nav>
          </div-->
        </main>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {};
</script>
