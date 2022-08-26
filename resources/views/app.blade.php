<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full bg-gray-100">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="antialiased" class="h-full">
        <noscript>
            This page will not work properly without JavaScript enabled. Please enable it to continue.
        </noscript>
        <div id="app"></div>
    </body>
</html>
