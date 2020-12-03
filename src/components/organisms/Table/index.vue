<template>
    <div class="table">
        <TableHeader :data="header" />
        <TableContent />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TableHeader from "@/components/organisms/Table/TableHeader.vue";
import TableContent from "@/components/organisms/Table/TableContent.vue";

export default defineComponent({
    name: "TableComponent",
    components: {
        TableHeader,
        TableContent,
    },
    props: {
        header: Array,
    },
});
</script>

<style lang="scss" scoped>
.table {
    width: 100%;
}
</style>