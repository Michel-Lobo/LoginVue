<template>
   <div class="col-sm-3 col-md-2 d-none d-md-block sidebar bc-left_sidebar">
        <aside class="row">
          <div class="col-md-12">
            <div class="bc-left_column">
              <div class="bc-left_search">
                <input placeholder="Buscar" />
                <i class="fas fa-search"></i>
              </div>
              <div class="bc-left_filter">
                <h5
                  class="bc-leftbar-title colapser"
                  onclick="$(this).toggleClass('open')"
                >Ordenar por</h5>
                <div class="bc-leftbar-radio custom-control custom-radio ml-1">
                  <input type="radio" id="date" name="customRadio" class="custom-control-input" />
                  <label class="custom-control-label" for="date">Data</label>
                </div>
                <div class="bc-leftbar-radio custom-control custom-radio ml-1">
                  <input type="radio" id="adm" name="customRadio" class="custom-control-input" />
                  <label class="custom-control-label" for="adm">Administradora</label>
                </div>
                <div class="bc-leftbar-radio custom-control custom-radio ml-1">
                  <input
                    type="radio"
                    id="investment"
                    name="customRadio"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="investment">Fundo</label>
                </div>

                <h5 class="bc-leftbar-title mt-3 colapser">Período</h5>
                <form>
                  <div class="row">
                    <div class="col">
                      <input type="text" class="form-control" placeholder="Data Inicial" />
                    </div>
                    <div class="col">
                      <input type="text" class="form-control" placeholder="Data Final" />
                    </div>
                  </div>
                </form>

                <h5 class="bc-leftbar-title mt-3 colapser">Status</h5>
                <div class="bc-leftbar-radio custom-control custom-radio ml-1">
                  <input
                    type="radio"
                    id="confirmed"
                    name="customRadio"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="confirmed">Confirmado</label>
                </div>
                <div class="bc-leftbar-radio custom-control custom-radio ml-1">
                  <input type="radio" id="send" name="customRadio" class="custom-control-input" />
                  <label class="custom-control-label" for="send">Enviado</label>
                </div>
                <div class="bc-leftbar-radio custom-control custom-radio ml-1">
                  <input type="radio" id="error" name="customRadio" class="custom-control-input" />
                  <label class="custom-control-label" for="error">Com erro</label>
                </div>

                <h5 class="bc-leftbar-title mt-3 colapser">Fundo</h5>
                <div class="bc-leftbar-radio custom-control custom-radio ml-1">
                  <input type="radio" id="x" name="customRadio" class="custom-control-input" />
                  <label class="custom-control-label" for="x">X</label>
                </div>
                <div class="bc-leftbar-radio custom-control custom-radio ml-1">
                  <input type="radio" id="y" name="customRadio" class="custom-control-input" />
                  <label class="custom-control-label" for="y">Y</label>
                </div>

                <h5 class="bc-leftbar-title mt-3 colapser">Administradora</h5>
                <div class="bc-leftbar-radio custom-control custom-radio ml-1">
                  <input type="radio" id="o" name="customRadio" class="custom-control-input" />
                  <label class="custom-control-label" for="o">O</label>
                </div>
                <div class="bc-leftbar-radio custom-control custom-radio ml-1">
                  <input type="radio" id="v" name="customRadio" class="custom-control-input" />
                  <label class="custom-control-label" for="v">V</label>
                </div>
              </div>
            </div>
            <button
              type="button"
              class="mt-4 btn btn-block bc-btn-r bc-btn-blue"
              data-toggle="modal"
              data-target="#payment-new"
            >Criar pagamento</button>
            <button
              type="button"
              class="btn btn-block bc-btn-r bc-btn-purple"
              data-toggle="modal"
              data-target="#payment-manual"
            >Cadastro manual</button>
          </div>
        </aside>
      </div>
</template>

<script>
    export default {
        name: 'LeftBar'
    }
</script>

