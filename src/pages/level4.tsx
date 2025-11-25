import Container from "@/components/container"
import Hero from "@/components/hero"
import Accordion from "@/components/accordion"
import Image from "next/image"
import styles from "@/styles/level.module.css"
import bike from "@/images/4_bike.png"
import cafe from "@/images/4_cafe.png"
import Meta from "@/components/meta"

export default function Level4() {
    return (
        <Container>
            <Meta pageTitle="Level4" pageDesc="Level4"/>
            <Hero title="Lv4" subtitle="多分かなりむずい"/>

            <Accordion heading="撮影要件">
                <p>駐輪場はマジでむずいと思う</p>
                <p><br />コンプリートボーナス: 1000P</p>
            </Accordion>

            <div className={styles.area}>
                <div className={styles.cheki}>
                    <Image src={bike} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
                    駐輪場 2000P
                </div>
                <div className={styles.cheki}>
                    <Image src={cafe} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
                    出入口 800P
                </div>
            </div>
        </Container>
    )
}