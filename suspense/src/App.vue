<template>
  <RouterView name="default" v-slot="{ Component, route }">
    <template v-if="Component">
      <Transition mode="in-out">
        <Suspense>
          <div :key="route.path">
            <component :is="Component" />
          </div>

          <template #fallback>
            <p>Loading...</p>
          </template>
        </Suspense>
      </Transition>
    </template>
  </RouterView>
</template>

