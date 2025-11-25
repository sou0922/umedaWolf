import Container from "@/components/container"
import Hero from "@/components/hero"
import Accordion from "@/components/accordion"
import Image from "next/image"
import styles from "@/styles/level.module.css"
import anker from "@/images/2_anker.png"
import apple from "@/images/2_apple.png"
import burger from "@/images/2_burger.png"
import kitchen from "@/images/2_kitchen.png"
import links from "@/images/2_links.png"
import tfal from "@/images/2_tfal.png"
import Meta from "@/components/meta"

export default function Level2() {
    return (
        <Container>
            <Meta pageTitle="Level2" pageDesc="Level2"/>
            <Hero title="Lv2" subtitle="これらのショップいくつ知っているかな?"/>

            <Accordion heading="撮影要件">
                <p>Lv1よりは難しいはず</p>
                <p><br />コンプリートボーナス: 1000P</p>
            </Accordion>

            <div className={styles.area}>
                <div className={styles.cheki}>
                    <Image src={anker} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
                    充電器屋 500P
                </div>
                <div className={styles.cheki}>
                    <Image src={apple} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
                    りんご 100P
                </div>
            </div>

            <div className={styles.area}>
                <div className={styles.cheki}>
                    <Image src={burger} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
                    Notマクド 100P
                </div>
                <div className={styles.cheki}>
                    <Image src={kitchen} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
                    キッチン 200P
                </div>
            </div>

            <div className={styles.area}>
                <div className={styles.cheki}>
                    <Image src={links} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
                    なにこれ 300P
                </div>
                <div className={styles.cheki}>
                    <Image src={tfal} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
                    湯沸かし器 400P
                </div>
            </div>
        </Container>
    )
}