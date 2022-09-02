<template>
    <transition
        enter-active-class="animate__animated animate__fadeIn "
        
    >
        <section
            v-if="activeSection === 0"
            class="main-setion section-1 main-padding"
            :style="'background-image: url(' + bg1 + ');'"
            :ref="
                (el) => {
                    refList[0] = el;
                }
            "
        >
            <div class="header flex items-center justify-between">
                <div class="logo shadow flex items-center justify-between">
                    <img src="@/assets/logo.jpg" />
                    <span>GAME SHOW</span>
                </div>
                <div class="menu shadow flex items-center flex justify-evenly">
                    <div
                        v-for="item in menus"
                        :key="item.name"
                        class="cursor-pointer"
                    >
                        {{ item.name }}
                    </div>
                </div>
            </div>
            <div class="banner shadow mt-20">
                <img :src="banner" class="w-full" />
            </div>
        </section>
    </transition>
    <transition
        enter-active-class="animate__animated animate__fadeIn "
        
    >
        <section
            v-if="activeSection === 1"
            class="main-setion section-2 relative"
            :ref="
                (el) => {
                    refList[1] = el;
                }
            "
        >
            <div class="desc flex justify-center">
                <p class="text-7xl transform desc_1">让Web3用户</p>
                <p class="text-9xl transform desc_2">“身临其境”</p>
            </div>
        </section>
    </transition>
    <transition
        enter-active-class="animate__animated animate__fadeIn "
        
    >
        <section
            v-if="activeSection === 2"
            class="main-setion section-3 main-padding flex flex-col justify-center"
            :style="'background-image: url(' + bg3 + ');'"
            :ref="
                (el) => {
                    refList[2] = el;
                }
            "
        >
            <p class="text-7xl mb-20">故事梗概</p>
            <div class="desc flex flex-col justify-center">
                <p class="mb-24">故事发生在2050年上海。</p>
                <p class="mb-24">
                    随着科技发展，虚拟与现实的界限已经逐渐模糊。
                </p>
                <p class="mb-24">
                    名为Eyebags
                    Lab的顶尖开发团队，几个脑洞爆棚的设计师在一家宠物店的储藏间开发Web3
                    GAME Creator AI ——“小K”，可以通过智能合约创造游戏。
                </p>
                <p class="mb-24">
                    在制造卡牌游戏中，“小K”意外制造只能新型病毒，病毒将“小K”释放到了公共网络，找到了现实世界与虚拟世界的通道，执行原本游戏设计的逻辑，游戏元素被“小K”释放到现实中。
                </p>
                <p class="mb-24">
                    国际黑客组织也盯上了“小K”，企图利用它去实现自己的邪恶的目的。Eyebags
                    Lab组成了一支“小K”收集小队，企图回收“小K”核心代码碎片，夺得“小K”控制权（POS），与国际黑客组织开始了对决。
                </p>
                <p>世界危机一触即发...</p>
            </div>
        </section>
    </transition>
    <transition
        enter-active-class="animate__animated animate__fadeIn "
        
    >
        <section
            v-if="activeSection === 3"
            class="main-setion section-4 flex justify-center items-center"
            :ref="
                (el) => {
                    refList[3] = el;
                }
            "
        >
            <img :src="bg4" />
        </section>
    </transition>
    <transition
        enter-active-class="animate__animated animate__fadeIn "
        
    >
        <section
            v-if="activeSection === 4"
            class="main-setion section-5 flex justify-center items-center"
            :ref="
                (el) => {
                    refList[4] = el;
                }
            "
        >
            <img :src="bg5" />
        </section>
    </transition>
    <transition
        enter-active-class="animate__animated animate__fadeIn "
        
    >
        <section
            v-if="activeSection === 5"
            class="main-setion section-6 main-padding flex flex-col justify-center items-center"
            :ref="
                (el) => {
                    refList[5] = el;
                }
            "
        >
            <p class="text-7xl mb-20 text-center">
                持有者
                <span class="text-9xl" style="color: var(--theme)">权益</span>
            </p>
            <div class="desc flex flex-col justify-center">
                <p class="mb-6 text-4xl">
                    >权益一：Gameshow数藏持有者获得部分动画的剧情制定权（Dao治理）
                </p>
                <p class="mb-6 text-4xl">
                    >权益二：Gameshow数藏Top3持有者，其形象会随机出现在未来动画剧情中，同时且持有其他数字藏品的Holder可申请其数字藏品参演动画
                </p>
                <p class="mb-6 text-4xl">
                    >权益三：Gameshow数藏一次性购买10个将会收到Opensea Gameshow
                    Pass空投，并享受Gameshow后续项目的收益分红
                </p>
                <p class="mb-6 text-4xl">
                    >权益四：线下活动受邀资格+线下周边领取
                </p>
            </div>
        </section>
    </transition>
    <transition
        enter-active-class="animate__animated animate__fadeIn "
        
    >
        <section
            v-if="activeSection === 6"
            class="main-setion section-7 main-padding flex flex-col justify-center items-center"
            :ref="
                (el) => {
                    refList[6] = el;
                }
            "
        >
            <p
                class="text-7xl mb-20 text-center title"
                :style="'background-image: url(' + roadMapBg + ');'"
            >
                Road<span style="color: rgb(251, 79, 243)">Map</span>
            </p>
            <div class="desc flex items-center justify-center">
                <div class="left">2022</div>
                <div class="right">
                    <p class="month">9月</p>
                    <p class="desc">
                        项目启动，前期预热（数字藏品发型，团队PV公布）
                    </p>
                    <p class="month">10月</p>
                    <p class="desc">
                        海外Game Show Pass卡空头开始，并确定出境任务
                    </p>
                    <p class="month">11月</p>
                    <p class="desc">公布Game Show PV、系列片量产开始</p>
                    <p class="month">12月</p>
                    <p class="desc">
                        与蓝筹NFT项目方+影视界明星举办线下AMA，交流项目
                    </p>
                </div>
            </div>
            <div class="desc flex items-center justify-center">
                <div class="left">2023</div>
                <div class="right">
                    <p class="month">2月</p>
                    <p class="desc">公布第一季部分剧情，引导用户参与投票</p>
                    <p class="month">3月</p>
                    <p class="desc">建议GameShow线下主题公园</p>
                    <p class="desc">前6集准备完毕，公开第一集，月更/半月更</p>
                    <p class="month">5月</p>
                    <p class="desc">完成第一季动画制作</p>
                    <p class="month">8月</p>
                    <p class="desc">第一季12集播放结束，第二季连播</p>
                </div>
            </div>
        </section>
    </transition>
    <transition
        enter-active-class="animate__animated animate__fadeIn "
        
    >
        <section
            v-if="activeSection === 7"
            class="main-setion section-8 main-padding flex flex-col justify-center items-center"
            :style="'background-image: url(' + bg8 + ');'"
            :ref="
                (el) => {
                    refList[7] = el;
                }
            "
        >
            <div class="desc flex items-center justify-between">
                <div class="left">团队成员</div>
                <div class="right">
                    <div class="flex items-stretch justify-center items-line">
                        <div v-for="item in members1" :key="item" class="item">
                            <img :src="item.avatar" />
                            <p class="name">{{ item.name }}</p>
                            <div
                                v-for="cItem in item.expirences"
                                :key="cItem.expirence"
                            >
                                <p class="expirence">
                                    {{ cItem.expirence }}
                                </p>
                                <p class="title">{{ cItem.title }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-stretch justify-center items-line">
                        <div v-for="item in members2" :key="item" class="item">
                            <img :src="item.avatar" />
                            <p class="name">{{ item.name }}</p>
                            <div
                                v-for="cItem in item.expirences"
                                :key="cItem.expirence"
                            >
                                <p class="expirence">
                                    {{ cItem.expirence }}
                                </p>
                                <p class="title">{{ cItem.title }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </transition>
    <transition
        enter-active-class="animate__animated animate__fadeIn "
        
    >
        <section
            v-if="activeSection === 8"
            class="main-setion section-9 main-padding flex flex-col justify-center items-center"
            :style="'background-image: url(' + bg9 + ');'"
            :ref="
                (el) => {
                    refList[8] = el;
                }
            "
        >
            <div class="desc relative">
                <img src="@/assets/bird_icon.png" />
                <p>
                    <span>Kiframe Studio (风帧动画)</span
                    >是一家专注于动画开发的原创公司。公司核心成员均来自迪士尼（中国）本土动画原创部门，团队合作超过五年。成员平均行业时间超过7年，直接参与的动画系列片、电影、短片等项目不少于30部。通过在迪士尼、梦工厂等长期以来积累的经验，Kiframe的原创能力以及对项目整体的制作把控，在业内受到一致认可。2021年Kiframe成立元宇宙部门，招聘专家研发适合Kifame自身情况的AI图像生成软件以及风格迁移算法，以传统web2.0的角度去探索全新的web3.0的世界，期望能碰撞出不同的火花。
                </p>
            </div>
            <div class="links flex justify-center items-center mt-40 mb-6">
                <img
                    class="cursor-pointer mx-4 w-10"
                    src="@/assets/twitter.png"
                />
                <img
                    class="cursor-pointer mx-4 w-10"
                    src="@/assets/github.png"
                />
                <img
                    class="cursor-pointer mx-4 w-10"
                    src="@/assets/twitter.png"
                />
                <img
                    class="cursor-pointer mx-4 w-10"
                    src="@/assets/discord.png"
                />
            </div>
            <div class="others flex justify-center items-center mb-10">
                <div class="cursor-pointer mx-8 text-xl">Security Report</div>
                <div class="cursor-pointer mx-8 text-xl">
                    Privacy and Cookies
                </div>
                <div class="cursor-pointer mx-8 text-xl">Cookies Settings</div>
            </div>
            <div class="others flex justify-center items-center">
                <div class="text-xl">2022 Eyebags Lab, All Rights Reserved</div>
            </div>
        </section>
    </transition>
</template>
<script setup>
import SectionBg1 from '@/assets/section_bg_1.png';
import SectionBg3 from '@/assets/section_bg_3.png';
import SectionBg4 from '@/assets/section_bg_4.jpg';
import SectionBg5 from '@/assets/section_bg_5.jpg';
import Avatar1 from '@/assets/ava_1.png';
import Avatar2 from '@/assets/ava_2.png';
import Avatar3 from '@/assets/ava_3.png';
import Avatar4 from '@/assets/ava_4.png';
import Avatar5 from '@/assets/ava_5.png';
import Avatar6 from '@/assets/ava_6.png';
import SectionBg8 from '@/assets/section_bg_8.jpg';
import SectionBg9 from '@/assets/section_bg_9.jpg';
import RoadMapBg from '@/assets/road_map_line.png';
import Banner from '@/assets/game_show_banner.jpg';
import { onMounted, reactive, toRefs, ref } from 'vue';
import { throttle } from 'lodash-es';

const bg1 = ref(SectionBg1);
const bg3 = ref(SectionBg3);
const bg4 = ref(SectionBg4);
const bg5 = ref(SectionBg5);
const bg8 = ref(SectionBg8);
const bg9 = ref(SectionBg9);
const roadMapBg = ref(RoadMapBg);
const banner = ref(Banner);

const members1 = ref([
    {
        avatar: Avatar1,
        name: 'Frank',
        expirences: [
            {
                expirence: '-Eyebags Lab',
                title: '创始人/Partner 动画负责人',
            },
            {
                expirence: '-风帧文化',
                title: '创始人',
            },
            {
                expirence: '-艺术独立电影 《郊区的鸟》',
                title: '出品人、监制、财务负责人',
            },
            {
                expirence: '-格拉斯哥大学',
                title: '会计学硕士',
            },
            {
                expirence: '-法国左岸名庄骑士会',
                title: '授勋骑士',
            },
        ],
    },
    {
        avatar: Avatar2,
        name: 'William黄',
        expirences: [
            {
                expirence: '-Eyebags Lab',
                title: 'Partner',
            },
            {
                expirence: '-Web 3.0',
                title: 'Blockchain Product Manager',
            },
            {
                expirence: '-Dorahacks',
                title: 'Developer Partner',
            },
            {
                expirence: '-Microsoft',
                title: 'Hackathon Champion 2020',
            },
            {
                expirence: '-百度 AI',
                title: 'Contributor',
            },
        ],
    },
    {
        avatar: Avatar3,
        name: 'Fei Chen',
        expirences: [
            {
                expirence: '-Eyebags Lab',
                title: '导演',
            },
            {
                expirence: '-上海卡通影视',
                title: '导演',
            },
            {
                expirence: '-风帧文化',
                title: '导演|全能',
            },
            {
                expirence: '-东方梦工厂',
                title: '导演/分镜',
            },
            {
                expirence: '-迪士尼（中国）',
                title: '导演/分镜',
            },
        ],
    },
]);
const members2 = ref([
    {
        avatar: Avatar4,
        name: 'Khaines',
        expirences: [
            {
                expirence: '-Eyebags Lab',
                title: '技术负责人',
            },
            {
                expirence: '-Bilibili',
                title: '区块链资深研发',
            },
            {
                expirence: '-CNCF',
                title: 'Contributor',
            },
            {
                expirence: '-Go架构布道师',
            },
        ],
    },
    {
        avatar: Avatar5,
        name: 'Edr',
        expirences: [
            {
                expirence: '-Eyebags Lab',
                title: '产品负责人',
            },
            {
                expirence: '-万向区块链',
                title: '资深产品',
            },
            {
                expirence: '-参与多个出海NFT项目',
            },
        ],
    },
    {
        avatar: Avatar6,
        name: 'Winnie',
        expirences: [
            {
                expirence: '-Eyebags Lab',
                title: '美术总监',
            },
            {
                expirence: '-风帧文化',
                title: '前期概念设计师',
            },
            {
                expirence: '-京都情报大学院大学',
                title: 'IT应用硕士',
            },
        ],
    },
]);
const menus = ref([
    {
        name: '故事梗概',
        target: '',
    },
    {
        name: '参与方式',
        target: '',
    },
    {
        name: 'Roadmap',
        target: '',
    },
    {
        name: '团队介绍',
        target: '',
    },
]);

onMounted(() => {});
const refList = ref([]);
const activeSection = ref(0);
const MAX_SECTION = 8;
const doScroll = () => {
    // const targetIndex = activeSection.value;
    // const targetDom = refList.value[targetIndex];
    // const domOffsetTop = targetDom.offsetTop;
    // const computedTop = window.innerHeight * targetIndex;
    // console.log(computedTop, domOffsetTop, targetDom);

    // document.body.scrollTo({
    //     top: computedTop,
    //     left: 0,
    //     behavior: 'smooth'
    // });
    // document.body.scrollTo(0, computedTop, {
    //     top: computedTop,
    //     left: 0,
    //     behavior: 'smooth'
    // });
    // window.scrollTo(0, computedTop);
    // targetDom.scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'end',
    //     inline: 'nearest',
    // });
    // targetDom.scrollIntoView();
};
const mouseWheel = (e) => {
    const isDown = e.deltaY > 0;
    if (isDown) {
        if (activeSection.value >= MAX_SECTION) {
            return;
        }
        activeSection.value++;
        doScroll();
    } else if (activeSection.value > 0) {
        activeSection.value--;
        doScroll();
    }
};
window.onmousewheel = throttle(mouseWheel, 600);
</script>
<style lang="scss" scoped>
.fullpage-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
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
    box-shadow: 0px 0px 10px 10px #000;
}

.section-9 {
    color: white;
    padding: 0 5%;

    background-size: 100%;
    background-position: bottom;
    .desc {
        width: 100%;
        border: 2px solid white;
        border-radius: 10px;
        font-size: 24px;
        padding: 65px;
        line-height: 50px;
        letter-spacing: 3px;
        img {
            position: absolute;
            top: -25px;
            left: -25px;
        }
        span {
            font-size: 40px;
            font-weight: bold;
        }
    }
    .others {
        color: rgb(180, 180, 180);
    }
}
.section-8 {
    color: white;
    padding: 0 5%;
    .desc {
        width: 100%;
        .left {
            font-size: 80px;
            margin-right: 20px;
        }
        .right {
            flex-grow: 1;
            .items-line {
                margin: 20px;
                .item {
                    width: 250px;
                    margin: 0 40px;
                    img {
                        width: 100%;
                    }
                    .name {
                        margin: 20px 0;
                        text-align: center;
                        font-size: 20px;
                        font-weight: bold;
                    }
                    .expirence {
                        text-indent: 30px;
                        margin: 5px auto;
                        font-size: 16px;
                        font-weight: bold;
                    }
                    .title {
                        text-indent: 30px;
                        margin: 5px auto;
                        font-size: 13px;
                        color: rgba(255, 255, 255, 0.8);
                        font-weight: lighter;
                    }
                }
            }
        }
    }
}
.section-7 {
    color: white;
    .title {
        width: 400px;
        background-repeat: no-repeat;
        background-position: center;
    }
    .desc {
        width: 80%;
        margin: 20px 0;
        .left {
            font-size: 80px;
            margin-right: 40px;
            flex-shrink: 0;
        }
        .right {
            padding: 35px 40px;
            border: 2px solid white;
            border-radius: 10px;
            color: white;
            font-size: 25px;
            flex-grow: 1;
            p {
                margin: 5px 0;
            }
            .month {
                color: var(--theme);
            }
        }
    }
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
    position: relative;
    .header {
        height: 45px;
        color: white;
        .logo {
            width: 210px;
            height: 100%;
            padding: 0 10px;
            background-color: black;
            font-weight: bold;
            font-size: 16px;
            img {
                height: 80%;
            }
        }
        .menu {
            width: 400px;
            height: 100%;
            background-color: black;
            font-size: 16px;
            font-weight: bold;
        }
    }
    .banner {
        position: absolute;
        top: 50%;
        left: 50%;
        width: calc(100% - 90px);
        transform: translate(-50%, -50%);
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
            transform: rotate(-10deg);
            margin-top: 80px;
        }

        .desc_2 {
            transform: rotate(20deg);
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

.section-4,
.section-5 {
    img {
        width: 100%;
    }
}
</style>
