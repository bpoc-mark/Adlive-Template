$(function() {
		$("body").on("click", "a", function(e) {
				var _this = $(this);
				var _href = _this.attr("href");
				
				if (_href.charAt(0,1) == "#") {
					e.preventDefault();
					var _target  = $(_href == "#" || _href == "" ? $("html") : _href);
					if (_target.length == "0") _target = $("html");
					var position = _target.offset().top;
					var _scroll  = _this.data("scroll");
					if (_scroll !== undefined) position = position + Number(_scroll);
					if (position <= 0) position = 1;	//Android2系でスクロールのバグ対策
					$("html, body").animate({scrollTop : position} ,500, "swing");
					return false;
				}
		});
});