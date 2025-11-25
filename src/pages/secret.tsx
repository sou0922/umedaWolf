import Container from "@/components/container"
import Hero from "@/components/hero"
import Accordion from "@/components/accordion"
import Image from "next/image"
import styles from "@/styles/level.module.css"
import secret from "@/images/secret.png"
import Meta from "@/components/meta"

export default function Secret() {
    return (
        <Container>
            <Meta pageTitle="Secret" pageDesc="緊急クエスト"/>
            <Hero title="Secret" subtitle="緊急クエスト"/>

            <Accordion heading="撮影要件">
                <p>「超かわいい」「超すげー」写真を撮影してください</p>
                <p>どれくらいスコアが入るかは、「あいつ」にが勝手に決定します</p>
                <p>チームスコアとして換算します</p>
                <p>遭遇時に拝見します</p>
            </Accordion>

            <div className={styles.area}>
                <div className={styles.cheki}>
                    <Image src={secret} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
                    超かわいい写真
                </div>
                <div className={styles.cheki}>
                    <Image src={secret} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
                    超すげー写真
                </div>
            </div>
        </Container>
    )
}