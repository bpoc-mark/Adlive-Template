// コントローラ作成
const controller = new ScrollMagic.Controller()
// アニメーションスピード
const speed = 1

// TweenMaxでのアニメーション指定
var tween = TweenMax.to('#rogo', speed, {
		width: '35vw'
})
var scene = new ScrollMagic.Scene({
		triggerElement: '#rogo', // 要素の指定
		triggerHook: 'onCenter', // トリガーのスクロール位置指定。onEnter, onLeaveの指定が可能
		reverse: false // スクロールを戻した時にアニメーションの逆再生を行うか
})
.setTween(tween) // Tweenアニメーション指定
//    .addIndicators({ name: 'rogo' }) // デバッグ用インジケータの表示
.addTo(controller) // コントローラへ追加

var tween = TweenMax.staggerFrom(
	'.work_item',
	speed,
	{
		margin: '40px 0 0',
		opacity: 0
	},
	0.3
)
var scene = new ScrollMagic.Scene({
		triggerElement: '.works_list',
		triggerHook: 'onCenter',
		reverse: false
})
.setTween(tween)
//    .addIndicators({ name: 'row-b' })
.addTo(controller)

var tween = TweenMax.staggerFrom(
	'.mix_item',
	speed,
	{
		margin: '40px 0 0',
		opacity: 0
	},
	0.3
)
var scene = new ScrollMagic.Scene({
		triggerElement: '.mix_list',
		triggerHook: 'onCenter',
		reverse: false
})
.setTween(tween)
//   .addIndicators({ name: 'row-c' })
.addTo(controller)  