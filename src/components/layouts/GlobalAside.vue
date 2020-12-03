<template>
  <div class="global-aside" :class="setClassOpen">
    <div class="global-aside-header">
      <div class="aside-arrow" :class="setClassOpen" @click="handleAside"></div>
    </div>
    <div class="global-aside-content">
      <router-link
        class="aside-menu"
        v-for="(item, index) in asideMenuList"
        :key="index"
        :to="item.path"
      >
        <img :src="require(`@/assets/icon/${item.icon}.svg`)" />
        <div class="aside-menu-label">{{ item.label }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
// import { defineComponent } from "vue";

import { ASIDE_MENU_LIST } from "@/mixins/asideMenuList.ts";

export default {
  name: "GlobalAside",
  data() {
    return {
      open: false,
      asideMenuList: ASIDE_MENU_LIST,
    };
  },
  computed: {
    setClassOpen() {
      return this.open ? "open" : "";
    },
  },
  methods: {
    handleAside() {
      this.open = !this.open;
    },
  },
};
</script>

<style lang="scss" scopped>
.global-aside {
  width: 64px;
  height: 100%;
  color: white;
  background: black;
  transition: all 0.4s ease;
  &-header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 8px 16px;
    padding-right: 24px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }
  .aside-arrow {
    width: 24px;
    height: 24px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    &:hover {
      &:before {
        border-color: rgb(23, 182, 255);
      }
    }
    &:before {
      content: "";
      position: absolute;
      display: inline-block;
      width: 12px;
      height: 12px;
      border-left: 2px solid white;
      border-top: 2px solid white;
      transform: rotate(135deg);
      transition: all 0.4s ease;
    }
  }
  .open {
    &:before {
      transform: rotate(-45deg) !important;
    }
  }
  &-content {
    .aside-menu {
      height: 40px;
      color: white;
      display: flex;
      align-items: center;
      text-decoration: none;
      border-bottom: 1px solid white;
      padding: 0px 16px;
      &:hover {
        background: gray;
      }
      img {
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
      &-label {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        flex: 1;
      }
    }
  }
}

.open {
  width: 192px;
}
</style>