import Container from "@/components/container"
import Hero from "@/components/hero"
import Accordion from "@/components/accordion"
import Image from "next/image"
import styles from "@/styles/level.module.css"
import bear from "@/images/1_bear.png"
import building from "@/images/1_building.png"
import fountain from "@/images/1_fountain.png"
import gatcha from "@/images/1_gatcha.png"
import mario from "@/images/1_mario.png"
import station from "@/images/1_station.png"
import Meta from "@/components/meta"

export default function Level1() {
    return (
        <Container>
            <Meta pageTitle="Level1" pageDesc="Level1"/>
            <Hero title="Lv1" subtitle="JR大阪周辺のメインスポット"/>

            <Accordion heading="撮影要件">
                <p>このLevel1のみ早いものがち</p>
                <p>グループラインへ最速で投稿したチームに得点</p>
                <p>本日限りの限定グループの方へ!</p>
                <p>最速でない場合はコンプリートボーナスのみ</p>
                <p><br />コンプリートボーナス: 1000P</p>
            </Accordion>

            <div className={styles.area}>
                <div className={styles.cheki}>
                    <Image src={bear} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
                    くまさん 500P
                </div>
                <div className={styles.cheki}>
                    <Image src={building} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
                    ◯◯バシ 500P
                </div>
            </div>

            <div className={styles.area}>
                <div className={styles.cheki}>
                    <Image src={fountain} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
                    水カーテン 600P
                </div>
                <div className={styles.cheki}>
                    <Image src={gatcha} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
                    ガチャ 600P
                </div>
            </div>

            <div className={styles.area}>
                <div className={styles.cheki}>
                    <Image src={station} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
                    梅田駅 300P
                </div>
                <div className={styles.cheki}>
                    <Image src={mario} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
                    Mari0 800P
                </div>
            </div>
        </Container>
    )
}