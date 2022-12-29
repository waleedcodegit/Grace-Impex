<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-tocken" content="{{csrf_token()}}">
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content="Grace Impex - P.E.T. Bottles & Containers">
            <link href="assets/images/favicon/favicon.png" rel="icon">
            <title>..:: Grace Impex ::..</title>
            <link rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Barlow:400,500,600,700%7cRoboto:400,500,700&display=swap">
            <link rel="stylesheet" href="{{asset('css/style.css')}}" >
            <link rel="stylesheet" href="{{asset('css/libraries.css')}}" >
        <!-- Fonts -->
        {{-- <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet"> --}}

        <!-- Styles -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
        {{-- <link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"> --}}
        <link rel="stylesheet"type="text/css" href="{{asset('css/app.css')}}">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"/>
        <link href="{{asset('css/toggle-switch.css')}}" rel="stylesheet" />
        <link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}" >
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"> -->
        

    </head>
    <body>
    <div >
            <div id="root">

            </div>

        </div>
        <script type="text/javascript" src ="{{asset('js/app.js')}}"></script>

        {{-- <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
        <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script> --}}
        <script src="{{asset('js/popper.min.js')}}" ></script>
        <script src="{{asset('js/bootstrap.min.js')}}" ></script>
        <script src="{{asset('js/jquery-3.5.1.min.js')}}" ></script>
        <script src="{{asset('js/plugins.js')}}" ></script>
        <script src="{{asset('js/main.js')}}" ></script>
        {{-- <script src="assets/js/jquery-3.5.1.min.js"></script>
        <script src="assets/js/plugins.js"></script>
        <script src="assets/js/main.js"></script> --}}
        <!-- jQuery library -->
        <script>
            $(document).ready(function(){
                $('.customer-logos').slick({
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1500,
                    arrows: false,
                    dots: false,
                    pauseOnHover: false,
                    responsive: [{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 4
                        }
                    }, {
                        breakpoint: 520,
                        settings: {
                            slidesToShow: 3
                        }
                    }]
                });
            });
        </script>

        <!-- <script src="https://code.jquery.com/jquery-2.2.0.min.js" type="text/javascript"></script> -->
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js"></script> -->
        <!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script> -->
        <!-- -->
        

        {{-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> --}}

    <!-- Popper JS -->
    {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script> --}}

    <!-- Latest compiled JavaScript -->
    {{-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script> --}}
    </body>
</html>
