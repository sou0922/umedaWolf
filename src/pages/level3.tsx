import Container from "@/components/container"
import Hero from "@/components/hero"
import Accordion from "@/components/accordion"
import Image from "next/image"
import styles from "@/styles/level.module.css"
import chikawa from "@/images/3_chikawa.png"
import dog from "@/images/3_dog.png"
import okinawa from "@/images/3_okinawa.png"
import sign from "@/images/3_sign.png"
import Meta from "@/components/meta"

export default function Level3() {
    return (
        <Container>
            <Meta pageTitle="Level3" pageDesc="Level3"/>
            <Hero title="Lv3" subtitle="なんか見つけたやつら"/>

            <Accordion heading="撮影要件">
                <p>芸人の写っている写真のみエリア内からエリア外を撮影したものである</p>
                <p><br />コンプリートボーナス: 1000</p>
            </Accordion>

            <div className={styles.area}>
                <div className={styles.cheki}>
                    <Image src={chikawa} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
                    ちぃかわ 600P
                </div>
                <div className={styles.cheki}>
                    <Image src={dog} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
                    なんかの犬 1000P
                </div>
            </div>
            <div className={styles.area}>
                <div className={styles.cheki}>
                    <Image src={okinawa} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
                    ここらしい 600P
                </div>
                <div className={styles.cheki}>
                    <Image src={sign} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
                    右をよく見る 800P
                </div>
            </div>
        </Container>
    )
}