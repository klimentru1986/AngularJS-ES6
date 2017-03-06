# Демоприложение AngularJS + ES6

### Описание
Небольшое приложение на AngularJS + ES6 с использованием компонентного подхода.
Пивная база данных с имитация регистрации, подробной информацией и возможностью добавления в избранное.

### Использованные технологии
Cборщик gulp + webpack.
Структура согласно стайлгайда: https://github.com/toddmotto/angular-styleguide
Для роутингов использован ui-router 1.0 betta: https://ui-router.github.io/ng1/
Так же использован angular material: https://material.angularjs.org/latest/


### Установка
```sh
$ git clone https://github.com/klimentru1986/AngularJS-ES6
$ cd AngularJS-ES6
$ npm install
$ gulp
```

### Список задач

gulp build - собирает приложение
gulp watch - запускает наблюдение за изменением файлов
gulp serve - запускает сервер
gulp - запускает сервер с наблюдением за файлами и livereload
gulp html - копирует index.html в dist
gulp css - собирает стили css
gulp vendorCss - собриает стили внешних библиотек
gulp app - собирает модули приложения в один bunle
gulp vendorJs - собирает внешние библиотеки
gulp clean - очищает сборку

