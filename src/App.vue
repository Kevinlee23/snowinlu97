<script setup lang="ts">
import { NConfigProvider, dateZhCN, zhCN } from 'naive-ui'
</script>

<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN">
    <div>Hello, world</div>
  </NConfigProvider>
</template>

<style scoped></style>
