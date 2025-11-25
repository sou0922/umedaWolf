import Container from "@/components/container"
import Hero from "@/components/hero"
import Accordion from "@/components/accordion"
import Image from "next/image"
import styles from "@/styles/level.module.css"
import pen from "@/images/5_pen.png"
import Meta from "@/components/meta"

export default function Extra() {
    return (
        <Container>
            <Meta pageTitle="Extra" pageDesc="Extra level"/>
            <Hero title="Extra" subtitle="最高なやつ"/>

            <Accordion heading="スコア要件">
                <p>これらは撮影ではない</p>
                <p>「ほしい」は撮影ではなくて1つ購入後、ゲーム中に「あいつ」へ手渡しでクリア</p>
                <p>「あいつ」も撮影ではなくて遭遇</p>
                <p>「あいつ」はエリア内をウロウロしてるはず</p>
                <p>「あいつ」はシャイなのでプレイヤーを見つけると逃走する</p>
                <p>「あいつ」は安全思考なので他者に迷惑をかけるような危険な逃走はしない</p>
                <p>「あいつ」との遭遇スコアは複数回受け取り可能</p>
                <p>「あいつ」の2回目以降は200P</p>
                <p>「あいつ」と遭遇後に15分のインターバルが存在</p>
                <p><br />コンプリートボーナス: 1000P</p>
            </Accordion>

            <div className={styles.area}>
                <div className={styles.cheki}>
                    <Image src={pen} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
                    ほしい 2000P
                </div>
            </div>
        </Container>
    )
}