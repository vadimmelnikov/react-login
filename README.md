Thanks for icons

[Free Icon Pack 1600+ icons](https://www.figma.com/community/file/886554014393250663)

Image from

[goodfon.ru](https://www.goodfon.ru/wallpaper/tuman-oblaka-neboskreb.html)

Logo

[evilmartians](https://evilmartians.com/)

Optimization images 

[squoosh](https://squoosh.app/)


Шрифты (https://fonts.google.com/specimen/Open+Sans) подключены через <link/>

Картинка (лого) через loading="lazy"

hooks
  useFullHeight - избавляет от баг в ios height: 100vh; 
  useForm - спасибо https://github.com/fgerschau/react-custom-form-validation-example, конечно работает так себе, на onBlur нету события, но не хотел ставить npm либу для кастомной валидации

UI компоненты: Button. Input, Text, Title, Loader

Компонент иконок: Icons - импорт через ReactComponent, в svg иконках прописан currentColor - чтобы управлять цветом с помощью color

Чтобы реакт продолжал работать когда ругается линтер в .env можно прописать:
TSC_COMPILE_ON_ERROR=true

styles - обычно использую Sass в связке с css-modules, так же готов попробовать PostCss.

globals.scss 
  body - родительский font-size: 16px, дочерние уже в rem.

_variables.scss
  каждый цвет в переменной
  gap кратен 4px (хороший тон в дизайне для отступов)

favicon https://favicon.io/emoji-favicons/grinning-cat