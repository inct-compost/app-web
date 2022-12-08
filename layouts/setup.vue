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
          v-if="displayType !== 'sm'"
          icon="radio_button_checked"
          :style="{
            marginRight: '1rem'
          }"
        />
        <h2>
          {{ route.meta.title }}
        </h2>
      </div>
      <p>
        {{ route.meta.text }}
      </p>
    </div>
    <div class="contents">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const colorStore = useColorStore()

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

      border-right: solid 1px v-bind("colorStore.color.theme.subText");
    }
  }

  &.sm {
    display: grid;
    grid-template-rows: auto 1fr;

    .title {
      border-bottom: solid 1px v-bind("colorStore.color.theme.subText");

      p {
        margin-top: 0px;

        font-size: 1rem;
        font-weight: 500;
      }
    }
  }

  .title {
    align-self: center;

    padding: 1rem;

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
    }
  }

  .contents {
    align-self: center;
    justify-self: center;

    padding: 1em;
  }
}
</style>
