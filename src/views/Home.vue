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
        <div class="desc flex justify-center flex-col items-center">
            <p class="text-6xl transform desc_1">???Web3????????????????????????</p>
            <video
                id="eyebagsLab"
                class="mt-16"
                autoplay
                controls
                src="https://gs-1253494566.cos.ap-shanghai.myqcloud.com/web_static/Eyebags%20Lab%20pv%201080p.mp4#t=0.5"
            ></video>
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
            <p class="text-7xl mb-20 section-title">????????????</p>
            <div class="desc flex flex-col justify-center">
                <p class="mb-10">???????????????2050???SH???</p>
                <p class="mb-10">
                    ??????????????????????????????????????????????????????????????????
                </p>
                <p class="mb-10">
                    ??????Eyebags
                    Lab??????????????????????????????????????????????????????????????????????????????????????????Web3
                    GAME Creator AI ????????????K?????????????????????????????????????????????
                </p>
                <p class="mb-10">
                    ?????????????????????????????????K???????????????????????????????????????????????????K???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????K????????????????????????
                </p>
                <p class="mb-10">
                    ????????????????????????????????????K?????????????????????????????????????????????????????????Eyebags
                    Lab?????????????????????K????????????????????????????????????K????????????????????????????????????K???????????????POS?????????????????????????????????????????????
                </p>
                <p>????????????????????????...</p>
            </div>
        </div>
    </section>

    <section
        id="section-4"
        class="main-setion section-4 flex justify-center items-center relative"
        :ref="
            (el) => {
                refList[3] = el;
            }
        "
    >
        <img :src="bg4" />
        <video
            id="ntfDemo"
            class="ntfDemo"
            controls
            src="https://gs-1253494566.cos.ap-shanghai.myqcloud.com/web_static/NFT%20demo.mp4#t=0.5"
        ></video>
    </section>

    <section
        id="section-5"
        class="main-setion section-5 flex flex-col justify-center items-center"
        :ref="
            (el) => {
                refList[4] = el;
            }
        "
    >
        <div class="flex items-center justify-center text-7xl">
            <span class="flex-shrink-0">????????????</span>
            <img :src="`${OSS_BASE}/question_icon.png`" class="question_icon" />
        </div>
        <div class="mt-8 text-7xl">
            <span class="text-theme-color">??????</span>
            <span class="mx-1">Game Show</span>
            <span class="text-theme-color">?????????????????????</span>
            <img :src="`${OSS_BASE}/circle_icon.png`" class="circle_icon" />
            <img :src="`${OSS_BASE}/yes_icon.png`" class="yes_icon" />
        </div>
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
        <div class="flex flex-col justify-center benifits">
            <p class="text-7xl mb-20 font-bold section-title">
                ?????????
                <span class="" style="color: var(--theme)">??????</span>
            </p>
            <div class="desc flex flex-col justify-center">
                <p class="mb-6 text-4xl">
                    >????????????Gameshow??????????????????????????????????????????????????????Dao?????????
                </p>
                <p class="mb-6 text-4xl">
                    >????????????Gameshow??????Top????????????????????????????????????????????????????????????????????????????????????Holder????????????????????????????????????
                </p>
                <p class="mb-6 text-4xl">
                    >????????????Gameshow ?????????????????????????????????Gameshow NFT??????
                </p>
                <p class="mb-6 text-4xl">
                    >????????????????????????????????????+??????????????????
                </p>
                <p class="mb-6 text-4xl">
                    >????????????Gameshow??????????????????????????????
                </p>
            </div>
        </div>
        <div class="learn-more flex justify-between items-stretch mt-28">
            <img :src="`${OSS_BASE}/gs_pass.svg`" class="mr-20 bg-img" />
            <div class="flex flex-col justify-evenly learn-more__content">
                <p class="mb-6 text-7xl content-title">Gam3Show Pass</p>
                <p class="text-4xl leading-relaxed">
                    Gam3Show Pass ??? 1,000 ????????? Web3
                    ??????????????????????????????????????????Pass ??????????????????????????????
                    Kiframe ?????????????????? Web3 ?????????????????????????????????????????????
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
                    <span class="ml-3 text-2xl">????????????</span>
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
                <p class="desc">
                    <span class="month">9???</span>
                    ???????????????????????????????????????????????????????????????PV?????????
                </p>
                <p class="desc">
                    <span class="month">11???</span>
                    ??????Game Show PV????????????????????????
                </p>
                <p class="desc">
                    <span class="month">12???</span>
                    ?????????NFT?????????+???????????????????????????AMA???????????????
                </p>
            </div>
        </div>
        <div class="desc flex items-center justify-center">
            <div class="left">2023</div>
            <div class="right">
                <p class="desc">
                    <span class="month">2???</span>
                    ??????????????????????????????????????????????????????
                </p>
                <p class="desc">
                    <span class="month">3???</span>
                    ??????GameShow??????????????????
                </p>
                <p class="desc">???6??????????????????????????????????????????/?????????</p>
                <p class="desc">
                    <span class="month">5???</span>
                    ???????????????????????????
                </p>
                <p class="desc">
                    <span class="month">8???</span>
                    ?????????12?????????????????????????????????
                </p>
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
            <div class="left">????????????</div>
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
                    <span>Kiframe Studio (????????????)</span
                    >????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????7????????????????????????????????????????????????????????????????????????30?????????????????????????????????????????????????????????????????????Kiframe????????????????????????????????????????????????????????????????????????????????????2021???Kiframe????????????????????????????????????????????????Kifame???????????????AI??????????????????????????????????????????????????????web2.0???????????????????????????web3.0????????????????????????????????????????????????
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
            <div class="others flex justify-center items-center mt-4 mb-20">
                <div class="text-xl">???ICP???17019960???-2</div>
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
                title: '?????????/Partner ???????????????',
            },
            {
                expirence: '-????????????',
                title: '?????????',
            },
            {
                expirence: '-?????????????????? ??????????????????',
                title: '????????????????????????????????????',
            },
            {
                expirence: '-??????????????????',
                title: '???????????????',
            },
            {
                expirence: '-???????????????????????????',
                title: '????????????',
            },
        ],
    },

    {
        avatar: `${OSS_BASE}/ava_6.png`,
        name: 'Winnie',
        expirences: [
            {
                expirence: '-Eyebags Lab',
                title: '????????????',
            },
            {
                expirence: '-????????????',
                title: '?????????????????????',
            },
            {
                expirence: '-???????????????????????????',
                title: 'IT????????????',
            },
        ],
    },
    {
        avatar: `${OSS_BASE}/ava_3.png`,
        name: 'Fei Chen',
        expirences: [
            {
                expirence: '-Eyebags Lab',
                title: '??????',
            },
            {
                expirence: '-??????????????????',
                title: '??????',
            },
            {
                expirence: '-????????????',
                title: '??????|??????',
            },
            {
                expirence: '-???????????????',
                title: '??????/??????',
            },
            {
                expirence: '-?????????????????????',
                title: '??????/??????',
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
                expirence: '-?????? AI',
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
                title: '???????????????',
            },
            {
                expirence: '-Bilibili',
                title: '?????????????????????',
            },
            {
                expirence: '-CNCF',
                title: 'Contributor',
            },
            {
                expirence: '-Go???????????????',
            },
        ],
    },
    {
        avatar: `${OSS_BASE}/ava_5.svg`,
        name: 'Edr',
        expirences: [
            {
                expirence: '-Eyebags Lab',
                title: '???????????????',
            },
            {
                expirence: '-???????????????',
                title: '????????????',
            },
            {
                expirence: '-??????????????????NFT??????',
            },
        ],
    },
]);
const menus = ref([
    {
        name: '????????????',
        targetIndex: 3,
    },
    {
        name: '????????????',
        targetIndex: 5,
    },
    {
        name: 'Roadmap',
        targetIndex: 7,
    },
    {
        name: '????????????',
        targetIndex: 8,
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
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    .main-setion {
        width: 1200px;
    }
    .desc {
        width: 100%;
        border: 2px solid white;
        border-radius: 10px;
        font-size: 24px;
        padding: 34px;
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
        width: 100%;
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
    .benifits {
        height: 60vh;
    }
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
    height: 100vh;
    margin-bottom: 0;
    .desc {
        .snd {
            color: var(--theme);
        }
    }
    .question_icon {
        height: 120px;
        margin-left: 20px;
    }
    .yes_icon {
        height: 130px;
        display: inline;
        margin-left: 10px;
    }
    .circle_icon {
        height: 120px;
        width: auto;
        display: inline;
        margin-left: -225px;
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
    .desc {
        color: white;
        margin: 0 auto;
        align-items: center;
        height: 100%;
    }
    video {
    }
}

.section-3 {
    color: white;
    padding: 100px;
    .desc {
        border: 2px solid white;
        border-radius: 10px;
        padding: 40px;
        font-size: 26px;
    }
}

.section-4 {
    img {
        width: 100%;
        height: auto;
    }
    .ntfDemo {
        position: absolute;
        width: 44.85%;
        right: 11.75%;
        top: 29.63%;
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
        .desc_1 {
            font-size: 2rem;
        }
        .desc_2 {
            font-size: 2rem;
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

        .ntfDemo {
            right: 11.7%;
            top: 29.6%;
        }
    }
    .section-5 {
        height: auto;
        span {
            font-size: 35px;
        }
        .question_icon {
            height: 80px;
        }
        .circle_icon {
            display: none;
        }
        .yes_icon {
            height: 70px;
        }
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
