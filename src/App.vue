<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <h2>Local Filter</h2>
        <p>{{ reversed | toReverse }}</p>

        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <h2>Global Filter</h2>
        <p>{{ 'this is the counted text' | addLength }}</p>
        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <h2>Computed</h2>
        <p>{{ computedReversed }}</p>
        <p>{{ computedCounted }}</p>
        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->

      </div>
    </div>
  </div>
</template>

<script>
  import { textMixin } from './assets/textMixin';
  export default {
    mixins: [textMixin],
    data() {
      return {
        reversed: "this is the reversed text",
        counted: "this is the counted text"
      }
    },
    filters: {
      toReverse(value) {
        return value.split('').reverse().join('')
      }
    },
    computed: {
      computedReversed() {
        return this.reversed.split('').reverse().join('')
      },
    }
  }
</script>

<style>
</style>
