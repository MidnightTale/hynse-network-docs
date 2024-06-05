# Sacleshifter
สามารถให้ผู้เล่นเลือกขนาดตัวละครได้

มีเข้ามาครั้งแรกจะมี gui ให้เลือกขนาดตัว
![alt text](image-3.png)

สารารถคราฟ Scale of orb เพื่อเลือกใหม่ได้
<code-preview>

```
<div class="crafting-table">
    <img src="https://assets.hynse.net/crafting/crafting_grid.png" alt="Crafting Table" class="crafting-grid">
    <img src="https://assets.hynse.net/minecraft/textures/item/gold_ingot.png" alt="Gold Ingot" class="itemx slot-1">
    <img src="https://assets.hynse.net/minecraft/textures/item/gold_ingot.png" alt="Gold Ingot" class="itemx slot-3">
    <img src="https://assets.hynse.net/minecraft/textures/item/gold_ingot.png" alt="Gold Ingot" class="itemx slot-7">
    <img src="https://assets.hynse.net/minecraft/textures/item/gold_ingot.png" alt="Gold Ingot" class="itemx slot-9">
    <img src="https://assets.hynse.net/minecraft/textures/item/copper_ingot.png" alt="Copper Ingot" class="itemx slot-2">
    <img src="https://assets.hynse.net/minecraft/textures/item/diamond.png" alt="Diamond" class="itemx slot-6">
    <img src="https://assets.hynse.net/minecraft/textures/item/iron_ingot.png" alt="Iron Ingot" class="itemx slot-4">
    <img src="https://assets.hynse.net/minecraft/textures/item/netherite_ingot.png" alt="Netherite Ingot" class="itemx slot-8">
    <img src="https://assets.hynse.net/minecraft/textures/item/ender_pearl.png" alt="Ender Pearl" class="itemx slot-5">
    <div class="result-slot">
      <img src="https://assets.hynse.net/minecraft/textures/item/heart_of_the_sea.png" alt="Scale Orb" class="itemx slot-0">
      <div class="itemx-count">1</div>
    </div>
  </div>

```

</code-preview>

<script setup>
    import CodePreview from '../components/CodePreview.vue'
</script>


## ขนาดตัว tiny
![alt text](image-4.png)

## ขนาดตัว small
![alt text](image-5.png)

## ขนาดตัว normal
![alt text](image-6.png)

## ขนาดตัว large
![alt text](image-7.png)

## ขนาดตัว massive
![alt text](image-8.png)
