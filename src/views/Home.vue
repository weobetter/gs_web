<template>
    <section
        class="section-1"
        id="section-1"
        :style="'background-image: url(' + bg1 + ');'"
        :ref="
            (el) => {
                refList[0] = el;
            }
        "
    >
        <div class="main-setion main-padding mt-0">
            <div class="header flex items-center justify-between">
                <div class="logo shadow flex items-center justify-between">
                    <img :src="`${OSS_BASE}/logo.jpg`" />
                    <span>GAME SHOW</span>
                </div>
                <div
                    class="menu shadow flex items-center flex justify-evenly pc-menu"
                >
                    <a
                        v-for="item in menus"
                        :key="item.name"
                        class="cursor-pointer"
                        :href="'#section-' + item.targetIndex"
                    >
                        {{ item.name }}
                    </a>
                </div>
                <div class="mobile-menu">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            <el-icon class="el-icon--right">
                                <MoreFilled />
                            </el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item
                                    v-for="item in menus"
                                    :key="item.name"
                                >
                                    <a :href="'#section-' + item.targetIndex">
                                        {{ item.name }}
                                    </a>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </div>
            <div class="banner shadow mt-20 mb-20">
                <img :src="banner" class="w-full" />
            </div>
        </div>
    </section>

    <section
        id="section-2"
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

    <section
        id="section-3"
        class="section-3"
        :style="'background-image: url(' + bg3 + ');'"
        :ref="
            (el) => {
                refList[2] = el;
            }
        "
    >
        <div class="main-setion main-padding flex flex-col justify-center">
            <p class="text-7xl mb-20 section-title">故事梗概</p>
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
        </div>
    </section>

    <section
        id="section-4"
        class="main-setion section-4 flex justify-center items-center"
        :ref="
            (el) => {
                refList[3] = el;
            }
        "
    >
        <img :src="bg4" />
    </section>

    <section
        id="section-5"
        class="main-setion section-5 flex justify-center items-center"
        :ref="
            (el) => {
                refList[4] = el;
            }
        "
    >
        <img :src="bg5" />
    </section>

    <section
        id="section-6"
        class="main-setion section-6 flex flex-col justify-center"
        :ref="
            (el) => {
                refList[5] = el;
            }
        "
    >
        <p class="text-7xl mb-20 font-bold section-title">
            持有者
            <span class="" style="color: var(--theme)">权益</span>
        </p>
        <div class="desc flex flex-col justify-center">
            <p class="mb-6 text-4xl">
                >权益一：Gameshow数藏持有者获得部分动画的剧情制定权（Dao治理）
            </p>
            <p class="mb-6 text-4xl">
                >权益二：Gameshow数藏Top持有者，其形象会出现动画剧情中，同时且持有其他数字藏品的Holder可申请其数字藏品参演动画
            </p>
            <p class="mb-6 text-4xl">
                >权益三：Gameshow数藏一次性购买10个将会收到Opensea Gameshow
                Pass空投，并享受Gameshow后续项目的收益分红
            </p>
            <p class="mb-6 text-4xl">>权益四：线下活动受邀资格+线下周边领取</p>
            <p class="mb-6 text-4xl">>权益五：Gameshow元宇宙土地项目入场券</p>
        </div>
        <div class="learn-more flex justify-between items-stretch mt-28">
            <img :src="`${OSS_BASE}/gs_pass.svg`" class="mr-20 bg-img" />
            <div class="flex flex-col justify-evenly learn-more__content">
                <p class="mb-6 text-7xl content-title">Gam3Show Pass</p>
                <p class="text-4xl leading-relaxed">
                    Gam3Show Pass 是 1,000 张通往 Web3
                    动画生态的通行证集合。同时，Pass 的持有者也将会成为由
                    Kiframe 工作室打造的 Web3 最大动画生态的参与者与决策者。
                </p>
                <div
                    class="more-btn flex justify-between items-center cursor-pointer"
                    @click="
                        outsideURL(
                            'https://opensea.io/collection/gam3show-pass'
                        )
                    "
                >
                    <img :src="`${OSS_BASE}/gs_pass_btn.svg`" />
                    <span class="ml-3 text-2xl">了解更多</span>
                </div>
            </div>
        </div>
    </section>

    <section
        id="section-7"
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
                <p class="desc">海外Game Show Pass卡空头开始，并确定出境任务</p>
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

    <section
        id="section-8"
        class="section-8 flex flex-col justify-center items-center"
        :style="'background-image: url(' + bg8 + ');'"
        :ref="
            (el) => {
                refList[7] = el;
            }
        "
    >
        <div
            class="main-setion main-padding desc flex items-center justify-between"
        >
            <div class="left">团队成员</div>
            <div class="right members-pc">
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
            <div class="right members-mobile">
                <div
                    class="flex items-stretch justify-center items-line flex-wrap"
                >
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

    <section
        id="section-9"
        class="section-9"
        :style="'background-image: url(' + bg9 + ');'"
        :ref="
            (el) => {
                refList[8] = el;
            }
        "
    >
        <div
            class="main-setion main-padding flex flex-col justify-center items-center"
            style="margin-bottom: 0"
        >
            <div class="desc relative">
                <img :src="`${OSS_BASE}/bird_icon.png`" />
                <p>
                    <span>Kiframe Studio (风帧动画)</span
                    >是一家专注于动画开发的原创公司。公司核心成员均来自迪士尼（中国）本土动画原创部门，团队合作超过五年。成员平均行业时间超过7年，直接参与的动画系列片、电影、短片等项目不少于30部。通过在迪士尼、梦工厂等长期以来积累的经验，Kiframe的原创能力以及对项目整体的制作把控，在业内受到一致认可。2021年Kiframe成立元宇宙部门，招聘专家研发适合Kifame自身情况的AI图像生成软件以及风格迁移算法，以传统web2.0的角度去探索全新的web3.0的世界，期望能碰撞出不同的火花。
                </p>
            </div>
            <div
                class="links flex justify-center items-center mt-40 mb-6 hidden"
            >
                <img
                    class="cursor-pointer mx-4 w-10"
                    :src="`${OSS_BASE}/position.png`"
                />
                <img
                    class="cursor-pointer mx-4 w-10"
                    :src="`${OSS_BASE}/github.png`"
                />
                <img
                    class="cursor-pointer mx-4 w-10"
                    :src="`${OSS_BASE}/twitter.png`"
                />
                <img
                    class="cursor-pointer mx-4 w-10"
                    :src="`${OSS_BASE}/discord.png`"
                />
            </div>
            <div class="others flex justify-center items-center mb-10 mt-40">
                <div class="cursor-pointer mx-8 text-xl">Security Report</div>
                <div class="cursor-pointer mx-8 text-xl">
                    Privacy and Cookies
                </div>
                <div class="cursor-pointer mx-8 text-xl">Cookies Settings</div>
            </div>
            <div class="others flex justify-center items-center">
                <div class="text-xl">2022 Eyebags Lab, All Rights Reserved</div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { onMounted, reactive, toRefs, ref } from 'vue';
import { MoreFilled } from '@element-plus/icons-vue';
import { throttle } from 'lodash-es';
import { useRouter } from 'vue-router';
const OSS_BASE =
    'https://gs-1253494566.cos.ap-shanghai.myqcloud.com/web_static/assets';
const currentRoute = useRouter()?.currentRoute || {};
const bg1 = ref(`${OSS_BASE}/section_bg_1.png`);
const bg3 = ref(`${OSS_BASE}/section_bg_3.png`);
const bg4 = ref(`${OSS_BASE}/section_bg_4.jpg`);
const bg5 = ref(`${OSS_BASE}/section_bg_5.jpg`);
const bg8 = ref(`${OSS_BASE}/section_bg_8.jpg`);
const bg9 = ref(`${OSS_BASE}/section_bg_9.jpg`);
const roadMapBg = ref(`${OSS_BASE}/road_map_line.png`);
const banner = ref(`${OSS_BASE}/game_show_banner.jpg`);

const members1 = ref([
    {
        avatar: `${OSS_BASE}/ava_1.png`,
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
        avatar: `${OSS_BASE}/ava_6.png`,
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
    {
        avatar: `${OSS_BASE}/ava_3.png`,
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
        avatar: `${OSS_BASE}/ava_2.png`,
        name: 'W. George',
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
        avatar: `${OSS_BASE}/ava_4.svg`,
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
        avatar: `${OSS_BASE}/ava_5.svg`,
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
]);
const menus = ref([
    {
        name: '故事梗概',
        targetIndex: 2,
    },
    {
        name: '参与方式',
        targetIndex: 4,
    },
    {
        name: 'Roadmap',
        targetIndex: 6,
    },
    {
        name: '团队介绍',
        targetIndex: 7,
    },
]);
const toTargetSection = (targetIndex) => {
    activeSection.value = targetIndex;
};
onMounted(() => {});
const refList = ref([]);
const getHashIndex = (str) => {
    let result = '';

    const infoArr = str?.split('#')?.[1]?.split('&') || [];
    if (!str || !infoArr.length) {
        return result;
    }
    infoArr.forEach((item) => {
        const info = item.split('=');
        if (info?.[0] === 'index') {
            result = parseInt(info?.[1], 10) || '';
        }
    });
    return result;
};
const activeSection = ref(getHashIndex(currentRoute.value.hash) || 0);
const MAX_SECTION = 8;
const mouseWheel = (e) => {
    const isDown = e.deltaY > 0;
    if (isDown) {
        if (activeSection.value >= MAX_SECTION) {
            return;
        }
        activeSection.value++;
    } else if (activeSection.value > 0) {
        activeSection.value--;
    }
    location.hash = `#index=${activeSection.value}`;
};
window.onmousewheel = throttle(mouseWheel, 1100);
const outsideURL = (link) => {
    window.open(link);
};
</script>
<style lang="scss">
@media screen and (max-width: 680px) {
    body {
        overflow-x: hidden;
    }
}
</style>
<style lang="scss" scoped>
.main-setion {
    width: 80vw;
    margin: 0px auto;
    margin-bottom: 80px;
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
        color: rgb(255, 255, 255);
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
                        color: rgba(255, 255, 255, 1);
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
    height: 100vh;
    .desc {
        p {
            line-height: 1.5;
        }
    }
    .more-btn {
        width: 150px;
        padding: 10px;
        border-radius: 10px;
        background-color: white;
        color: black;
        img {
            height: 31.5px;
        }
    }
}
.section-5 {
    color: white;
    height: 70vh;
    .desc {
        width: 80vw;
        .snd {
            color: var(--theme);
        }
    }
}
.section-1 {
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
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
    }
}
.section-2 {
    height: 60vh;
    .desc {
        color: white;
        width: 80vw;
        margin: 0 auto;
        align-items: center;
        height: 100%;
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

.section-4 {
    img {
        height: 100%;
    }
}
.section-5 {
    img {
        width: 100%;
    }
}
.mobile-menu {
    display: none;
    font-size: 16px;
    color: white;
}

.members-mobile {
    display: none;
}

@media screen and (max-width: 680px) {
    .main-padding {
        padding: 10px 20px;
    }
    .main-setion {
        width: 95vw;
    }
    .pc-menu {
        display: none;
    }
    .mobile-menu {
        display: block;
        .el-icon {
            color: white;

            font-size: 36px;
        }
    }
    .section-1 {
        .header {
            margin-top: 10px;
        }
    }
    .section-2 {
        height: 30vh;
        .desc_1 {
            font-size: 2rem;
        }
        .desc_2 {
            font-size: 3rem;
        }
    }
    .section-3 {
        padding: 0px;
        background-size: contain;
        .main-setion {
            padding: 20px;
            width: 100vw;
        }
        .section-title {
            font-size: 2.3rem;
            margin-bottom: 2rem;
        }
        .desc {
            padding: 20px;
            p {
                margin-bottom: 1rem;
                font-size: 16px;
            }
        }
    }
    .section-4 {
        margin-bottom: 30px;
    }
    .section-5 {
        height: auto;
    }
    .section-6 {
        height: auto;
        position: relative;
        .section-title {
            font-size: 2.1rem;
            text-align: center;
            margin-bottom: 2rem;
        }
        .desc {
            padding: 10px;
            p {
                margin-bottom: 1rem;
                font-size: 16px;
            }
        }
        .bg-img {
            display: none;
        }
        .learn-more {
            display: block;
        }
        .learn-more__content {
            position: relative;
            z-index: 100;
            .content-title {
                font-size: 2rem;
            }
            p {
                font-size: 1.3rem;
            }
            .more-btn {
                margin-top: 20px;
                width: 115px;
                img {
                    height: 25px;
                }
                span {
                    font-size: 1rem;
                    margin-left: 10px;
                }
            }
        }
    }
    .section-7 {
        .title {
            margin-bottom: 10px;
        }
        .desc {
            width: 100%;
            display: block;
            .left {
                font-size: 34px;
            }
            .right {
                padding: 10px 20px;
                font-size: 20px;
            }
        }
    }
    .section-8 {
        padding: 0 20px;
        .main-setion.desc {
            padding: 0;
            display: block;
            margin-bottom: 30px;
            .members-mobile {
                display: block;
            }
            .members-pc {
                display: none;
            }
            .left {
                font-size: 34px;
            }
            .right {
                margin: 0;
                .items-line {
                    .item {
                        width: 30vw;
                        margin: 0 10px;
                    }
                    .expirence {
                        text-indent: 0px;
                        font-weight: normal;
                    }
                    .title {
                        text-indent: 10px;
                    }
                }
            }
        }
    }
    .section-9 {
        padding: 0 20px;
        background-repeat: no-repeat;
        background-size: contain;
        .main-setion {
            width: 100%;
            padding: 0;
        }
        .desc {
            padding: 15px 20px;
            line-height: 26px;
            p {
                font-size: 16px;
                span {
                    font-size: 24px;
                }
            }
        }
        .others {
            margin-top: 40px;
            display: block;
            width: 100%;
            margin-bottom: 20px;
            div {
                font-size: 15px;
                margin: 0;
            }
        }
    }
}
</style>
