<template>
    <ModalFrame size="L">
        <template v-slot:header>
            <div>新規登録</div>
        </template>
        <template v-slot:content>AddCanvasContent</template>
        <template v-slot:footerLeft>
            <div></div>
        </template>
        <template v-slot:footerRight>
            <CommonButton label="登録" />
        </template>
    </ModalFrame>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ModalFrame from "@/components/organisms/Modal/ModalFrame.vue";
import CommonButton from "@/components/atoms/CommonButton.vue";

export default defineComponent({
    name: "AddCanvas",
    components: {
        ModalFrame,
        CommonButton,
    },
});
</script>