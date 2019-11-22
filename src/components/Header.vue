<template>
     <nav class="navbar navbar-expand-lg sticky-top bc-topbar">
    <a class="navbar-brand bc-topbar_brand" href="login.html">
      <center>
        <img src="../assets/images/brand-white.png" />
      </center>
    </a>

    <button
      class="navbar-toggler bc-topbar_menumobile"
      type="button"
      data-toggle="collapse"
      data-target="#bc-topbar"
      aria-controls="bc-topbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <app-menu></app-menu>
   <app-viewlogin></app-viewlogin>
  </nav>
</template>

<script>
    export default {
        name:'Header',
    }
</script>
