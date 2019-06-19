export const textMixin = {
    computed: {
        computedCounted(value) {
            return this.counted + " (" + this.counted.length + ")";
        }
    }
}