const controller = new ScrollMagic.Controller();
const titles = document.querySelectorAll(".title");
titles.forEach(title => {
		//tween作成
		const tween = TweenMax.from(title, 0.8, {
				autoAlpha: 0, 
				scale: 0.8, 
				y: '+=10', 
				ease: Linear.easeNone
		});
		
		//シーンを作成
		const scene = new ScrollMagic.Scene({
				triggerElement: title,
				triggerHook: 1
		})
		.setTween(tween) //trigger a TweenMax tween
		.addTo(controller)
//		.addIndicators();
})



// アニメーションスピード
const speed = 1

var tween = TweenMax.staggerFrom(
	'.sp_item',
	speed,
	{
		margin: '40px 0 0',
		opacity: 0
	},
	0.3
)
var scene = new ScrollMagic.Scene({
		triggerElement: '.sp_wrapper',
		triggerHook: 'onCenter',
		reverse: false
})
.setTween(tween)
//    .addIndicators({ name: 'row-b' })
.addTo(controller)

var tween = TweenMax.staggerFrom(
	'.bp_item',
	speed,
	{
		margin: '40px 0 0',
		opacity: 0
	},
	0.3
)
var scene = new ScrollMagic.Scene({
		triggerElement: '.bp_wrapper',
		triggerHook: 'onCenter',
		reverse: false
})
.setTween(tween)
//   .addIndicators({ name: 'row-c' })
.addTo(controller)  


var tween = TweenMax.staggerFrom(
	'.voice_item',
	speed,
	{
		margin: '40px 0 0',
		opacity: 0
	},
	0.3
)
var scene = new ScrollMagic.Scene({
		triggerElement: '.voice_wrapper',
		triggerHook: 'onCenter',
		reverse: false
})
.setTween(tween)
//   .addIndicators({ name: 'row-c' })
.addTo(controller)  
