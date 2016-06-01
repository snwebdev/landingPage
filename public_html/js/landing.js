
            $(".contentContainer").css("min-height", $(window).height());
            $("#top").css("min-width", $(window).width());
            $("#bottom").css("min-width", $(window).width());


            $(".nav a").on("click", function () {
                $(".nav").find(".active").removeClass("active");
                $(this).parent().addClass("active");
            });


            $(document).ready(function () {
                $('#loginButton').click(function () {
                    alert("If this wasn't a dummy page, you would now be logged in.");
                });

                $('#submitButton').click(function () {
                    alert("If this wasn't a dummy page, you would now be signed up for our mailing list.");
                });

                $('.more').click(function () {
                    alert("If this wasn't a dummy page, you would now be given more info on this Fantastic App.");
                });

                $('.appstoreImage').click(function () {
                    alert("If this wasn't a dummy page, you would now be taken to the app store to download this Fantastic App");
                });
            });

