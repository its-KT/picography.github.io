
	let index = 0;
	const totcateg = (".categ").length;
	console.log(totcateg);
	$(document).ready(function (){

		
		$(".categ-inner").click(function()
		{
			index =$(this).parent(".categ").index();
			$(".lightbox").addClass("open");
			lightboxSlidShow();

		})
		$(".lightbox .prev").click(function(){
			if(index == 0)
			{
				index = totcateg-1;
			}
			else
			{
				index--;
			}
			lightboxSlidShow();
		})
		$(".lightbox .next").click(function(){
			if(index == totcateg-1)
			{
				index = 0;
			}
			else
			{
				index++;
			}
			lightboxSlidShow();
		})
		$(".imgbox-close").click(function(){

			$(".lightbox").removeClass("open");
		})
		$(".lightbox").click(function(event){
			if($(event.target).hasClass("lightbox")){
				$(this).removeClass("open");
			}

		})
	})

		function lightboxSlidShow()
		{
			const imgSrc = $(".categ").eq(index).find("img").attr("data-large");
			const category = $(".categ").eq(index).find("p").html();
			$(".lightbox-img").attr("src",imgSrc);
		}