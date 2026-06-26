<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UrlsController;

Route::get('/', function () {
    return 'hello world!';
});

Route::get('/{shortcode}', [UrlsController::class, 'getUrlByShortcode']);
