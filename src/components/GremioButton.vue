<template>
    <button class="text-white font-bold py-1 px-3 rounded text-xs" :class="btnType">
        {{text}}
    </button>
</template>

<script>
    export default {
        name: "gremiobutton",
        props: ["type", "text"],

        computed: {
            btnType(){
                let type = "";

                switch(this.type){
                    case "info":
                        type = "bg-blue-500 hover:bg-blue-700";
                        break;
                    
                    case "danger":
                        type = "bg-red-500 hover:bg-red-700";
                        break;

                    case "success":
                        type = "bg-green-500 hover:bg-green-700";
                        break;

                    case "warning":
                        type = "bg-orange-500 hover:bg-orange-700";
                        break;
                }

                return type;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>