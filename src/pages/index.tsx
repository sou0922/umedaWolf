import Hero from "@/components/hero"
import Container from "@/components/container"
import Meta from "@/components/meta"
import Accordion from "@/components/accordion"
import Image from "next/image"
import citizen from "@/images/Card_Citizen.png"
import wolf from "@/images/Card_Werewolf.png"
import wisewolf from "@/images/Card_Wisewolf.png"
import fortune from "@/images/Card_FortuneTeller.png"
import map from "@/images/map.jpg"

export default function Home() {
  return (
      <Container>
        <Meta />
        <Hero title="UMEDA WOLF" subtitle="探し出せ、あいつを、新の裏切りを" imageOn/>
        <Accordion heading="ルール">
          <p>0. 提示された写真と同じ場所での撮影を目指しながら、人狼ゲーム</p>
          <p>1. 全プレイヤーの中で最高スコアを獲得すると<b>勝利</b></p>
          <p>2. 皆さんにはそれぞれ<b>役職</b>があり、<b>固有能力</b>を持つ</p>
          <p>3. 役職はLINEで通知されます</p>
          <p>※&nbsp;&nbsp;役職の数は均等ではなく<b>チーム内に全役職がいるとは限らない</b></p>
          <p>4. 制限時間は<b>1時間30分</b></p>
          <p>5. グーグルマップ等の<b>地図アプリの使用を禁止する</b></p>
          <p>6. 紙媒体や、看板、館内マップ等の地図は使用可能</p>
          <p>7. スコアは各自で計算をしてもらう予定で、撮影した写真で不安なものがあればゲーム終了時に確認します</p>
          <p>8. 全員から写真が送られてくると大変なのでやめてください</p>
          <p>9. 不公平になるので細かい質問にゲーム中は応えません(大きな不具合のみ全体で共有します)</p>
        </Accordion>

        <Accordion heading="チームメンバー">
          <p><b>-腹ペコ詐欺師ズ-</b><br />&nbsp;内山、吉田、山本、下津T</p>
          <p><br /><b>-黒幕クラブ-</b><br />&nbsp;加藤、篠原、仲石、森本</p>
          <p><br /><b>-狼の晩餐会-</b><br />&nbsp;敦賀、牟田、冨田、福田</p>
          <p><br /><b>-株式会社狼派遣代表-</b><br />&nbsp;玉木</p>
        </Accordion>

        <Accordion heading="スコア">
          <p><b>-チームスコア-</b></p>
          <p>&nbsp;Level1~Level4までの写真と同じ場所で撮影ができるとスコアを獲得できる</p>
          <p>&nbsp;写真に関して角度、天候、細かいことは重要でなく、そのものが認識できるかどうか</p>
          <p>&nbsp;各レベルのコンプリートボーナスも含む</p>
          <p>&nbsp;Extraは別の条件</p>
          <p><br /><b>-役職スコア-</b></p>
          <p>&nbsp;それぞれの特殊能力によって獲得できるスコア</p>
          <p><br /><b>-プレイヤースコア-</b></p>
          <p>&nbsp;チームスコアと役職スコアの合計</p>
        </Accordion>

        <Accordion heading="役職">
          <Accordion heading="村人">
            <Image src={citizen} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
            <p><b>-目的-</b><br />&nbsp;写真撮影課題をクリアしてチームスコアに貢献する</p>
            <p><br /><b>-固有能力-</b><br />&nbsp;「あいつ」に会えるとハッピーになれる</p>
            <p><br /><b>-役職スコア-</b><br />&nbsp;写真撮影課題をクリアするごとに+20Pを得る<br />&nbsp;ゲーム終了時、役職投票にて「人狼」だと選択された場合-1000Pを得る</p>
          </Accordion>

          <Accordion heading="人狼">
          <Image src={wolf} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
            <p><b>-目的-</b><br />&nbsp;自分が「人狼」だとバレないようにしつつ、ゲーム終了時に高スコアを目指す</p>
            <p><br /><b>-固有能力-</b><br />&nbsp;狼化</p>
            <p><br /><b>-役職スコア-</b><br />&nbsp;ゲーム終了時、役職投票にて「人狼」だと選択されなかった場合+4000Pを得る<br />&nbsp;ゲーム終了時、役職投票にて「人狼」だと選択された場合-3000Pを得る<br />&nbsp;ゲーム中、主である「あいつ」に会った場合、-1500Pを得る(適用回数制限なし)</p>
          </Accordion>

          <Accordion heading="占い師">
            <Image src={fortune} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
            <p><b>-目的-</b><br />&nbsp;写真撮影課題をクリアしてチームスコアに貢献する</p>
            <p><br /><b>-固有能力-</b><br />&nbsp;ゲーム中、時々「あいつ」の現在地を示す写真が送られてくる<br />&nbsp;写真をチーム内で見せ合うことは禁じる<br />&nbsp;写真情報を口頭で説明することは可能</p>
            <p><br /><b>-役職スコア-</b><br />&nbsp;写真撮影課題をクリアするごとに+20Pを得る<br />&nbsp;ゲーム終了時、役職投票にて「人狼」だと選択された場合-1000Pを得る</p>
          </Accordion>
          
          <Accordion heading="主">
            <Image src={wisewolf} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
            <p><b>-目的-</b><br />&nbsp;ゲームを面白く導きつつ、捕まらずに逃げ切る</p>
            <p><br /><b>-固有能力-</b><br />&nbsp;ゲーム中、ルールを好きに追加、変更できる</p>
            <p><br /><b>-役職スコア-</b><br />&nbsp;誰にも遭遇しなかった場合+1億Pを得る</p>
          </Accordion>

        </Accordion>

        <Accordion heading="エリア">
          <Image src={map} alt="" layout="responsive" sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw" priority placeholder="blur" />
          <p>赤枠の内側</p>
          <p>範囲内から写真、「あいつ」を探し出すことが可能</p>
          <p>空、地上、地下、全て対象エリアです</p>
          <p>※ 流石に以下を除く</p>
          <p>1. 改札の向こう側</p>
          <p>2. 有料入場エリア</p>
          <p>3. 飲食店の中(コーヒー買うときと、テラス席等の屋外を除く)</p>
        </Accordion>
      </Container>
  )
}