<template>
  <div class="home">
    <h1>TODO App</h1>
    <div class="flex justify-center bg-grey-lighter mt-4">
      <div class="m-auto">
        <gremio-table></gremio-table>
      </div>
    </div>
  </div>
</template>

<script>
  import GremioTable from "@/components/GremioTable";
  export default {
    name: "home",
    components: {
      GremioTable
    }
  };
</script>