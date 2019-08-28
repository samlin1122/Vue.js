<template>
  <div>
    <div class="container-fluid">
      <navbar />
      <alert />
      <div class="row">
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <sidebar />
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import navbar from './Navbar'
import sidebar from './Sidebar'
import alert from './Alert'
export default {
  components: {
    navbar,
    sidebar,
    alert
  }
}
</script>
