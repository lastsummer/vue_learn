<template>
    <div class="container">
     <appQuoteGrid :quotes="quotes"></appQuoteGrid>
    </div>
</template>

<script>
    import QuoteGrid from './components/QuoteGrid.vue'
    export default {
        data: function(){
            return {
                maxQuotes:10,
                quotes:[
                    'Just a Quote to see something'
                ]
            }
        },
        components:{
            appQuoteGrid: QuoteGrid
        }
    }
</script>

<style>
</style>
