<template>
  <div id="setup-layout" :class="displayType">
    <div class="title">
      <div class="title-text">
        <Icon
          icon="app_registration"
          :style="{
            marginRight: '1rem'
          }"
        />
        <p>
          セットアップ
        </p>
      </div>
      <div class="meta-title">
        <Icon
          icon="radio_button_checked"
        />
        <h2>
          {{ route.meta.title }}
        </h2>
      </div>
    </div>
    <div class="contents">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const route = useRoute()
const { displayType } = displayStatus()

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#setup-layout {
  min-height: calc(100% - 2em);

  padding: 1em;

  &.lp, &.pc {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .title {
      grid-column: 1;
    }
  }

  &.sm {
    display: grid;
    grid-template-rows: 1fr 1fr;

    .title {
      p {
        margin-top: 0px;

        font-size: 1rem;
        font-weight: 500;
      }
    }
  }

  .title {
    align-self: center;

    .title-text {
      display: flex;
      align-items: center;

      p {
        margin: 0px;
      }
    }

    .meta-title {
      display: flex;
      align-items: center;

      h2 {
        margin-left: 1rem;
      }
    }
  }

}
</style>
