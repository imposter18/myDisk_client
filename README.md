# myDisk_client
На этом проекте используется мой webpack config, позже залью его в отдельный репо с подробным описанием т.к теперь он обкатан и можно делиться им с миром.
# DEMO
### [http://my-cloud-disk.site](http://my-cloud-disk.site/) после регистрации на почту должно приди письмо с подтверждением.
Пожалуйста, используйте диск только для ознакомления! После просмотра очень желательно все удалить т.к место на сервере ограниченно.

# Запуск
!!Для запуска необходимо создать файл `.env`. Что в нем должно быть указанно в файле `.env.exemple`
```javascript
	"scripts": {
		"start": "cross-env NODE_ENV=development webpack serve --config webpackConfig/webpack.dev.js",
		"build": "cross-env NODE_OPTIONS=--max-old-space-size=600 NODE_ENV=production webpack --config webpackConfig/webpack.prod.js",
		"server": "node server.js"
	},
```
###  `npm run start` запускает development версию, как в обычном *create react app*

###  `npm run build` запускает сборку production версии по пути */build*

`NODE_OPTIONS=--max-old-space-size=X`
Данная переменная окружения отвечает за то, сколько памяти может быть выделено для процесса *nodeJS*.
актуально для слабых машин, вы можете эту строчку удалить, но если билд упадет с ошибкой по памяти, можно поиграть с этой переменной.
На моем сервере с 1gb оперативы, я использую значение 600-700 (MB)

###  `npm run server` запускает express сервер для раздачи билда из соответствующей директории.

# Описание 
Это клиентская часть облачного хранилища.
Построена на архитектуре [Feature-Sliced Design](https://feature-sliced.design/).
### Stack 
* TypeScript
* React 18
* React-router-dom
* Redux toolkit, thunk
* Axios
* Moment js для работы с датами 
* Библиотека компонентов Ant design
* Scss modules
* Express
