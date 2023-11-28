<template>
   <div class="flex flex-col w-screen h-screen px-2 pt-4 gap-24 pb-24">
    <h1 class="text-4xl text-center">Chang Education Enterprises Private Ltd. (example)</h1>
    <h3 class="text-2xl">Latest blog posts</h3>
    <div class="grid xl:grid-cols-3 justify-between sm:grid-cols-1 gap-8 md:grid-cols-2">
      <Card on="23 September 2023" author="Niel Bore" picurl="https://images.unsplash.com/photo-1630839437035-dac17da580d0?q=80&w=3415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" maintext="377 reasons why Hydrogen is the best element(it really is)       Lorem ipsum dolor sit ad animi in vel tempore quas. Totam sint nulla recusandae nisi illo!
" head="Hydrogen"></Card>
      <Card on="29 September 2023" author="Elbert Ainstein" picurl="https://images.unsplash.com/photo-1605901501589-80b8d9fc022c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" maintext="Cheetahs for long have been humans. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rerum nostrum voluptates voluptas, exercitationem aliquam! Beatae velit, illum, nobis, ea ut maxime optio ipsam facilis eligendi enim ullam deserunt dolorem." head="Cheetahs"></Card>
      <Card on="31 October 2023" author="Chick McChicken" picurl="https://images.unsplash.com/photo-1573936451783-0b33869dd43a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" head="McDonald's Case study" maintext="Why the fast food chain is       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam vitae quos accusantium corrupti quisquam et quasi praesentium aperiam, autem beatae unde magni, placeat, asperiores repellendus eos minus quidem repudiandae in."></Card>

    </div>
  <label class="modal-overlay"></label>
    <div class="modal flex flex-col gap-5 w-[50vw]" :class="{'show': showModal}">
    <button class="absolute right-4 top-3" @click="show(false)">✕</button>
    <h2 class="text-xl">Install app</h2>
    <span
      >{{$device.isDesktop ? "Click the Install Icon on the browser url bar." : $device.isIos ? "Click Share -> Add to home screen" : "Click three dots on chrome and 'Add to Home Screen'"}}<br> Please note app is example only; not representative of any real entities.</span
    >
    <div class="flex gap-3">
      <button class="btn solid danger flex-1" @click="show(false)">Close</button>
    </div>
  </div>
    <div class="flex flex-row justify-center items-center mb-24">
      <button class="btn solid info" @click="show(true)">How do I install App -></button>
    </div>
  </div> 

  this website is an example website for pwa capability not to represent any real entities
</template>  
<script setup lang="ts">  
  const showModal = ref(false);
  const show = (q: boolean) => {showModal.value = q;}
</script>
