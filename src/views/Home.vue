<template>
    <section class="main-setion section-1 main-padding" :style="'background-image: url(' + bg1 + ');'">
        <div class="header flex items-center justify-between">
            <div class="logo shadow flex items-center justify-center">

            </div>
            <div class="menu shadow flex items-center flex justify-evenly">
                <div v-for="item in menus"
                     :key="item.name"
                     class="cursor-pointer">
                    {{ item.name }}
                </div>
            </div>
        </div>
        <div class="banner shadow mt-20 ">
            <img :src="banner" class="w-full">
        </div>
    </section>
    <section class="main-setion section-2 relative">
        <div class="desc flex justify-center">
            <p class="text-7xl transform desc_1">让Web3用户</p>
            <p class="text-9xl transform desc_2">“身临其境”</p>
        </div>
    </section>
    <section class="main-setion section-3 main-padding flex flex-col justify-center"  :style="'background-image: url(' + bg3 + ');'">
        <p class="text-7xl mb-20">故事梗概</p>
        <div class="desc flex flex-col justify-center">
            <p class="mb-24">故事发生在2050年上海。</p>
            <p class="mb-24">随着科技发展，虚拟与现实的界限已经逐渐模糊。</p>
            <p class="mb-24">名为Eyebags Lab的顶尖开发团队，几个脑洞爆棚的设计师在一家宠物店的储藏间开发Web3 GAME Creator AI ——“小K”，可以通过智能合约创造游戏。</p>
            <p class="mb-24">在制造卡牌游戏中，“小K”意外制造只能新型病毒，病毒将“小K”释放到了公共网络，找到了现实世界与虚拟世界的通道，执行原本游戏设计的逻辑，游戏元素被“小K”释放到现实中。</p>
            <p class="mb-24">国际黑客组织也盯上了“小K”，企图利用它去实现自己的邪恶的目的。Eyebags Lab组成了一支“小K”收集小队，企图回收“小K”核心代码碎片，夺得“小K”控制权（POS），与国际黑客组织开始了对决。</p>
            <p>世界危机一触即发...</p>
        </div>
    </section>
    
    <section class="main-setion section-4 flex  justify-center items-center">
        <img :src="bg4">
    </section>
    <section class="main-setion section-5 flex  justify-center items-center">
        <img :src="bg5">
    </section>
    
    <section class="main-setion section-6 main-padding flex flex-col justify-center items-center">
        <p class="text-7xl mb-20 text-center">
            持有者
            <span class="text-9xl" style="color: var(--theme)">权益</span>
        </p>
        <div class="desc flex flex-col justify-center">
            <p class="mb-6 text-4xl">>权益一：Gameshow数藏持有者获得部分动画的剧情制定权（Dao治理）</p>
            <p class="mb-6 text-4xl">>权益二：Gameshow数藏Top3持有者，其形象会随机出现在未来动画剧情中，同时且持有其他数字藏品的Holder可申请其数字藏品参演动画</p>
            <p class="mb-6 text-4xl">>权益三：Gameshow数藏一次性购买10个将会收到Opensea Gameshow Pass空投，并享受Gameshow后续项目的收益分红</p>
            <p class="mb-6 text-4xl">>权益三：线下活动受邀资格+线下周边领取</p>
        </div>
    </section>
</template>
<script setup>
import SectionBg1 from '@/assets/section_bg_1.png';
import SectionBg3 from '@/assets/section_bg_3.png';
import SectionBg4 from '@/assets/section_bg_4.jpg';
import SectionBg5 from '@/assets/section_bg_5.jpg';
import Banner from '@/assets/game_show_banner.jpg';
import { onMounted, reactive, toRefs, ref } from 'vue';

const bg1 = ref(SectionBg1);
const bg3 = ref(SectionBg3);
const bg4 = ref(SectionBg4);
const bg5 = ref(SectionBg5);
const banner = ref(Banner);
const menus = ref([{
    name: '故事梗概',
    target: ''
}, {
    name: '参与方式',
    target: ''
}, {
    name: 'Roadmap',
    target: ''
}, {
    name: '团队介绍',
    target: ''
}]);

onMounted(() => {});
</script>
<style lang="scss" scoped>
.main-setion {
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-size: cover;
}
.main-padding {
    padding: 20px 45px;
}

.shadow {
    box-shadow: 0px 0px 10px 10px  #000;
}

.section-6 {
    color: white;
    .desc {
        width: 80%;
        p {
            line-height: 1.5;
        }
    }
}
.section-5 {
    color: white;
    .desc {
        width: 1300px;
        .snd {
            color: var(--theme);
        }
    }
}
.section-1 {
    .header {
        height: 45px;
        color: white;
        .logo {
            width: 200px;
            height: 100%;
            background-color: black;
        }
        .menu {
            width: 400px;
            height: 100%;
            background-color: black;
            font-size: 16px;
            font-weight: bold;
        }
    }
}
.section-2 {
    .desc {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        width: 1200px;
        .desc_1 {
            rotate: -10deg;
            margin-top: 80px;
        }

        .desc_2{
            rotate: 20deg;
            margin-left: -60px;
            font-weight: bold;
        }
    }
}

.section-3 {
    color: white;
    padding: 100px;
    .desc {
        border: 2px solid white;
        border-radius: 10px;
        padding: 100px;
        font-size: 26px;
    }
}

.section-4, .section-5 {
    img {
        width: 100%;
    }
}
</style>
