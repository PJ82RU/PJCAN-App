export default {
	BLE: {
		title: "Bluetooth",
		btn: {
			connect: "Подключиться",
			disconnect: "Отключиться"
		},
		dialog: {
			noConnected: "Вы не подключены ни к одному устройству Bluetooth.",
			connected: "Вы подключены к устройству Bluetooth PJCAN."
		},
		notify: {
			noConnected: "Нет подключения устройству Bluetooth.",
			connected: "PJCAN подключен",
			disconnected: "PJCAN отключен",
			lostConnected: "Потеряно подключение с устройством Bluetooth PJCAN. Пытаюсь восстановить связь...",
			noData: "Нет данных для отправки"
		},
		server: {
			deviceSelected: "Выбрано {n} Bluetooth устройство.",
			deviceDisconnected: "Устройство Bluetooth {n} отключено.",
			GATTConnect: "Подключение к GATT серверу ...",
			getService: "GATT сервер подключен, читаю сервис ...",
			getCharacteristic: "Сервис получен, читаю характеристику ...",
			characteristicDone: "Характеристика получена.",
			startNotifications: "Запуск уведомлений ...",
			notificationsDone: "Уведомления запущены.",
			reconnect: "Повторная попытка через {n} сек... (осталось {c} попыток)",
			reconnectRestored: "Соединение с устройством Bluetooth PJCAN восстановлено.",
			connectionLost: "Связь с устройством Bluetooth PJCAN потеряна.",
			receive: "Входящие данные: ID {n}",
			send: "Исходящие данные: ID {n}",
			versionProtocol: "Версия протокола: {mj}.{mn}.{bl}.{rv}"
		}
	},

	update: {
		title: "Обновление PJCAN",
		warning: "Внимание!",
		btn: {
			update: "Обновить",
			later: "Позже"
		},
		dialog: {
			updateTo: "Обновить прошивку PJCAN до версии {version} ?",
			browserOutdated: "Версия вашего браузера устарела.\n" + "Обновите его и откройте web-приложение заново."
		},
		process: {
			preparation: "Подготовка к загрузке ...",
			upload: "Загрузка прошивки",
			update: "Обновление прошивки ...",
			timeLeft: "Оставшееся время"
		},
		notify: {
			newVersion: "Доступно обновление {version}",
			completed: "Прошивка успешно завершена",
			warning: "Прошивка завершена не удачно. Выключите и включите устройство, и попробуйте обновить еще раз",
			error: "Ошибка обновления прошивки",
			errorDownload: "Ошибка загрузки прошивки с сервера. Возможно отсутствует подключение к сети интернет",
			errorUpload: "Ошибка загрузки прошивки на устройство PJCAN. Возможно отсутствует подключение по Bluetooth",
			errorWaitUpdate:
				"Истекло время ожидания устройства PJCAN. Выключите и включите устройство, и попробуйте обновить еще раз"
		}
	},

	error: {
		title: "Что смотришь,\nпиши PJ82",
		version: "Ошибка запроса версии устройства. Переподключите устройство PJCAN"
	},

	rules: {
		required: "Обязательное поле",
		counter: "Максимум {n} символов | Максимум {n} символ | Максимум {n} символа | Максимум {n} символов",
		english: "Ввод только английских символов и цифр"
	},

	menu: {
		onboard: "Бортовой компьютер",
		onboardButtons: "Кнопки БК",
		test: "Тестирование",
		language: {
			russian: "Russian language",
			english: "English language"
		},
		settings: {
			buttonsSW1: "Кнопки руля",
			buttonsSW3: "Кнопки SW3",
			options: "Параметры"
		},
		update: "Обновить до {version}",
		about: "О программе"
	},

	activation: {
		success: "Устройство успешно активировано! Устройство перезагружается ...",
		error: "Устройство не активировано. Обратитесь к разработчику."
	},

	about: {
		title: "О программе",
		version: "Версия web-приложения",
		versionFirmware: "Версия прошивки PJCAN",
		carSupport: "Поддержка автомобиля",
		author: "Автор",
		sha: "Хеш устройства"
	},

	deviceInfo: {
		title: "Техническая информация",
		// chipCores: "Количество ядер",
		// chipModel: "Модель чипа",
		// chipRevision: "Номер ревизии чипа",
		cpuFreqMHz: "Частота ЦП, МГц",
		// cycleCount: "Количество циклов",
		efuseMac: "MAC-адрес",
		// flashChipMode: "Режим флеш-памяти",
		// flashChipSize: "Размер флеш-памяти, байт",
		// flashChipSpeed: "Частота флеш-памяти",
		// heapSize: "Размер кучи в памяти",
		// freeHeap: "Свободной кучи в памяти",
		// maxAllocHeap: "Размер самого большого блока кучи",
		// minFreeHeap: "Наименьший уровень свободной кучи",
		// psramSize: "Размер SPI RAM",
		// freePsram: "Свободной SPI RAM",
		// maxAllocPsram: "Размер самого большого блока SPI RAM",
		// minFreePsram: "Наименьший уровень свободной SPI RAM",
		freeSketchSpace: "Свободное место для прошивки",
		sdkVersion: "Версия SDK",
		sketchMD5: "MD5 прошивки",
		sketchSize: "Размер прошивки",
		temperatureChip: "Температура чипа",
		sha: "SHA",
		hardware: "Версия платы"
	},

	deviceReset: {
		title: "Сброс конфигурации устройства",
		config: "Сбросить значения конфигурации по умолчанию",
		view: "Сбросить значения конфигурации отображения по умолчанию"
	},

	btn: {
		apply: "Применить",
		cancel: "Отмена",
		close: "Закрыть",
		deviceInfo: "Об устройстве",
		deviceReset: "Сбросить конфигурацию",
		reset: "Сбросить",
		ok: "OK"
	},

	onboard: {
		title: "Бортовой компьютер",

		viewSetting: {
			enabled: {
				title: "Отображать информацию",
				description: "Статус отображения информации на информационном экране"
			},
			type: {
				title: "Стиль отображения информации",
				description: "Отображать статичный текст, мигающий или в стиле бегущий строки",
				items: ["Обычный текст", "Мигание текста", "Бегущая строка"]
			},
			time: {
				title: "Время отображения, сек.",
				description: "Показывать на информационном экране указанное количество секунд"
			},
			delay: {
				title: "Время паузы отображения, сек.",
				description: "Пауза отображения информации указанное количество секунд"
			}
		},

		info: {
			title: "Информация",
			acc: {
				title: "ACC",
				description: "Питание автомобиля"
			},
			worktime: {
				title: "Время работы",
				description: "Время работы устройства с момента включения",
				menu: "LCD: Время работы"
			},
			voltmeter: {
				title: "Напряжение",
				description: "Напряжение бортовой сети в вольтах",
				menu: "LCD: Напряжение"
			},
			temperature: {
				title: "Температура воздуха",
				description: "Показания внешней температуры автомобиля",
				menu: "LCD: Температура воздуха"
			},
			handbrake: {
				title: "Ручной тормоз",
				description: "Положение ручного тормоза",
				menu: "LCD: Ручной тормоз"
			},
			reverse: {
				title: "Задний ход",
				description: "Ручка КПП в положении R",
				menu: "LCD: Задний ход"
			},
			safetyBelt: {
				title: "Ремень безопасности",
				description: "Ремень безопасности водителя и пассажира",
				menu: "LCD: Ремень безопасности"
			},
			signal: {
				title: "Сигнал поворота",
				description: "Сигнал поворота и аварийной остановки",
				menu: "LCD: Сигнал поворота"
			}
		},

		engine: {
			title: "Двигатель",

			enabled: {
				title: "Работа ДВС",
				description: "Текущее состояние ДВС",
				menu: "LCD: Работа ДВС"
			},
			RPM: {
				title: "RPM двигателя",
				description: "Текущее количество полных оборотов коленчатого вала двигателя в минуту",
				menu: "LCD: RPM двигателя"
			},
			countRPM: {
				title: "Счетчик RPM, тыс.",
				description: "Общее количество полных оборотов коленчатого вала двигателя в тысячах",
				menu: "LCD: Счетчик RPM"
			},
			load: {
				title: "Нагрузка на ДВС",
				description: "Нагрузка чего-то на что-то, хз как рассчитывается",
				menu: "LCD: Нагрузка на ДВС"
			},
			worktime: {
				title: "Моточасы",
				description: "Общее время работы двигателя",
				menu: "LCD: Моточасы"
			},
			throttle: {
				title: "Положение дрос. заслонки",
				description: "Относительное положение дроссельной заслонки",
				menu: "LCD: Положение дроссельной заслонки"
			},
			coolant: {
				title: "Температура антифриза",
				description: "Температура охлаждающей жидкости",
				menu: "LCD: Температура антифриза"
			},
			settings: {
				title: "Настройки статистики ДВС",
				menu: "Настройки статистики",
				showDays: {
					title: "Показывать дни в статистике",
					titleShort: "Показывать дни",
					description: "Отображать моточасы на информационном экране в формате d.hh:mm:ss"
				},
				worktime: {
					title: "Время работы, мин.",
					description: "Общее время работы двигателя"
				},
				countRPM: {
					title: "Счетчик RPM, тыс.",
					description: "Общее количество полных оборотов коленчатого вала двигателя в тысячах"
				}
			}
		},

		fuel: {
			title: "Топливо",

			current: {
				title: "Расход топлива",
				description: "Значение БК, л/100 км",
				menu: "LCD: Расход топлива"
			},
			avg: {
				title: "Средний расход",
				description: "Значение БК, л/100 км",
				menu: "LCD: Средний расход"
			},
			settings: {
				title: "Настройки расхода",
				menu: "Настройки расхода",
				ratio: {
					title: "Коэффициент расхода топлива",
					description: "Для корректировки расхода ГБО или др. вида топлива"
				}
			}
		},

		movement: {
			title: "Спидометр",

			speed: {
				title: "Скорость автомобиля",
				description: "Значение БК, км/ч",
				menu: "LCD: Скорость автомобиля"
			},
			speedAVG: {
				title: "Средняя скорость",
				description: "Значение БК, км/ч",
				menu: "LCD: Средняя скорость"
			},
			restWay: {
				title: "Остаток пути, км",
				description: "Значение БК в км",
				menu: "LCD: Остаток пути"
			}
		},

		doors: {
			title: "Двери",
			menu: "LCD: Двери",

			doorFL: {
				title: "Передняя левая",
				description: "Текущее состояние передней левой двери"
			},
			doorFR: {
				title: "Передняя правая",
				description: "Текущее состояние передней правой двери"
			},
			doorBL: {
				title: "Задняя левая",
				description: "Текущее состояние задней левой двери"
			},
			doorBR: {
				title: "Задняя правая",
				description: "Текущее состояние задней правой двери"
			},
			trunk: {
				title: "Багажник",
				description: "Текущее состояние багажника"
			},

			settings: {
				title: "Конфигурация дверей",
				frontReverse: {
					title: "Поменять передние двери",
					description: "Поменять местами передние двери"
				},
				backReverse: {
					title: "Поменять задние двери",
					description: "Поменять местами задние двери"
				},
				frontBackReverse: {
					title: "Поменять передние с задними дверьми",
					description: "Поменять местами левые и правые двери"
				}
			}
		},

		volume: {
			title: "Звук",
			menu: "LCD: Звук",

			mute: {
				title: "Выключить звук",
				description: "Временное выключение звука без изменения текущего уровня"
			},
			level: {
				title: "Уровень звука",
				description: "Текущее значение уровня звука"
			}
		},

		climate: {
			title: "Климат-контроль",
			menu: "LCD: Климат-контроль",

			enabled: {
				title: "Статус работы",
				description: "Статус работы блока климат-контроля"
			},
			autoMode: {
				title: "Auto",
				description: "Автоматический режим работы блока климата"
			},
			ac: {
				title: "AC",
				description: "Работа кондиционера"
			},
			temperature: {
				title: "Температура",
				description: "Установленное значение температуры блока климат-контроля"
			},
			air: {
				title: "Вентиляция салона",
				description: "Циркуляция воздуха внутри салона"
			},
			blow: {
				title: "Воздушный поток",
				description: "Направление воздушного потока"
			}
		},

		bose: {
			title: "Bose",
			menu: "LCD: Bose",

			enabled: {
				title: "Включение Bose",
				description: "Включение/выключение усилителя звука Bose"
			},
			audioPLT: {
				title: "Audio PLT",
				description:
					"Представляет собой систему подавления шумов, которая непрерывно регулирует звучание для компенсации фонового шума и скорости автомобиля"
			},
			radioFM: {
				title: "Radio FM",
				description: "Включение/выключение радио FM"
			},
			wow: {
				title: "Wow",
				description: "Звуковой сигнал при изменении параметров"
			},
			balance: {
				title: "Balance",
				description: "Смещение звукового баланса вправо или влево"
			},
			bass: {
				title: "Bass",
				description: "Усиление низких частот"
			},
			fade: {
				title: "Fade",
				description: "Смещение звукового баланса вперед или назад"
			},
			treble: {
				title: "Treble",
				description: "Усиление высоких частот"
			},
			centerPoint: {
				title: "CenterPoint",
				description:
					"Технология CenterPoint преобразует стерео-сигналы в многоканальное аудио и одновременно создает более широкую/объемную звуковую область"
			},

			volumeConfig: {
				title: "Настройка запуска",
				start: {
					title: "Изменять уровень звука",
					description: "Устанавливать указанный ниже уровень звука при включении адаптера PJCAN"
				},
				level: {
					title: "Уровень звука",
					description: "Уровень звука устанавливаемый при включении адаптера PJCAN"
				}
			}
		}
	},

	buttons: {
		title: "Настройки кнопок",
		extendedMode: "Режим Mode",
		hintMode: " (режим Mode)",

		mode: "Кнопка MODE",
		setUp: "Кнопка SET UP",
		setDown: "Кнопка SET DOWN",
		volUp: "Кнопка VOL +",
		volDown: "Кнопка VOL -",
		volMute: "Кнопка VOL MUTE",

		extended: {
			title: "Расширенный режим",
			description: "Поддержка двойного, тройного нажатия и удержания кнопки"
		},
		resistance: {
			title: "Сопротивление кнопки",
			description: "Интервал сопротивления кнопки",
			cur: {
				title: "Текущее сопротивление",
				description: "Значение сопротивления нажатой кнопки. Изменить нельзя"
			},
			min: {
				title: "Минимальное сопротивление",
				description: "Укажите минимальное значение кнопки, но не допускайте пересечение значений с другими кнопками"
			},
			max: {
				title: "Максимальное сопротивление",
				description: "Укажите максимальное значение кнопки, но не допускайте пересечение значений с другими кнопками"
			}
		},
		pressSingle: {
			title: "Кнопка нажата 1 раз",
			description: "Функция, которая выполняется при нажатии кнопки"
		},
		pressDual: {
			title: "Кнопка нажата 2 раза",
			description: "Функция, которая выполняется при нажатии кнопки 2 раза"
		},
		pressTriple: {
			title: "Кнопка нажата 3 раза",
			description: "Функция, которая выполняется при нажатии кнопки 3 раза"
		},
		pressHold: {
			title: "Удержание кнопки",
			description: "Функция, которая выполняется при нажатии и удержании кнопки 3 и более секунд.",
			time: {
				title: "Время удержания кнопки",
				description: "Время удержания кнопки, сек."
			}
		},

		functions: {
			0: "Нет действия",
			1: "Перейти в режим Mode",
			2: "Выход из режима Mode",
			3: "Нажатие кнопки MODE",
			4: "Нажатие кнопки SET UP",
			5: "Нажатие кнопки SET DOWN",
			6: "Нажатие кнопки уровень звука +",
			7: "Нажатие кнопки уровень звука -",
			8: "Нажатие кнопки отк. звука",
			9: "Удержание кнопки CLOCK",
			10: "Нажатие кнопки CLOCK",
			11: "Нажатие кнопки CLOCK H",
			12: "Нажатие кнопки CLOCK M",
			13: "Нажатие кнопки CLOCK 24/12",
			14: "Удержание кнопки INFO",
			15: "Нажатие кнопки INFO",
			16: "Показать значения ДВС",
			17: "Показать значения расхода",
			18: "Показать значения движения",
			19: "Показать значения температуры",
			20: "Голосовое управление",
			21: "Радио",
			22: "Камера",
			23: "Радио: поиск",
			24: "Эквалайзер",
			25: "Вкл/выкл дисплея",
			26: "Телефон"
		},

		definition: {
			title: "Обнаружено нажатие кнопки",
			type: {
				title: "Тип кнопки",
				description: "Выберите тип кнопки для дальнейшего ее использования"
			}
		},

		adding: "Создание кнопки",
		edit: "Редактирование кнопки",
		name: "Наименование кнопки"
	},

	onboardButtons: {
		title: "Кнопки БК",
		buttons: {
			modeClock: "Mode CLOCK",
			modeInfo: "Mode INFO",
			clock: "CLOCK",
			info: "INFO",
			clockH: "H",
			clockM: "M",
			clockRM: "RM",
			clock24: "24/12"
		}
	},

	test: {
		title: "Тестирование",
		description:
			'Введите текст (только латинские символы и цифры), выберите стиль и выравнивание, укажите время отображения и нажмите "Показать"',
		text: {
			title: "Текст",
			description: "Текст отображаемый на информационном экране"
		},
		btnShow: "Показать"
	},

	options: {
		title: "Параметры",
		lcd: {
			title: "LCD",
			enabled: {
				title: "LCD",
				description: "Включить/выключить вывод информации на информационный экран"
			},
			logo: {
				title: "Логотип",
				description: "Тест отображаемый в момент отсутствия данных для вывода на LCD. Максимум 12 символов",
				menu: "LCD: Логотип"
			},
			hello: {
				title: "Текст приветствия",
				description: "Тест отображаемый при включении ACC. Максимум 32 символов",
				menu: "LCD: Текст приветствия"
			}
		},
		teyes: {
			title: "ГУ",
			protocol: {
				title: "Протокол UART",
				description: "Протокол UART для связи PJCAN с ГУ",
				list: {
					1: "Raise HM_ND00 2017.12.11 (19200)",
					2: "Raise HM_ND01 2019.06.21 (38400)",
					3: "SimpleSoft MZ_SS_07A (38400)",
					4: "SimpleSoft RP5_MZ_002 (38400)"
				}
			},
			reverseUart: {
				title: "Поменять контакты UART",
				description: "Поменять контакты UART местами, если нет связи PJCAN с ГУ"
			},
			lcdShow: {
				title: "Показывать информацию ГУ",
				description: "Показывать текст ГУ на информационном экране (БК) вместо логотипа",
				menu: "LCD: Показывать текст ГУ"
			},
			sendButton: {
				title: "Кнопки руля",
				description: "Поддержка управления ГУ кнопками на руле"
			},
			sendClimate: {
				title: "Показать климат на ГУ",
				description: "Показать панель климата на ГУ (если протокол поддерживает данный функционал)"
			},
			sendDoors: {
				title: "Показать статус дверей на ГУ",
				description: "Показать статус дверей автомобиля на ГУ (если протокол поддерживает данный функционал)"
			},
			parseVolume: {
				title: "Управлять уровнем звука на ГУ",
				description: "Рекомендуется выключить этот параметр, для прямого управления звуком усилителя Bose"
			},
			receiveText: {
				title: "Принимать информацию ГУ",
				description: "Принимать входящие значения ГУ: название радиостанций и др."
			},
			receiveClock: {
				title: "Время ГУ",
				description: "Принимать входящее значение времени от ГУ (если протокол поддерживает данный функционал)"
			},
			receiveButtons: {
				title: "Кнопки ГУ",
				description: "Поддержка кнопок ГУ: CLOCK, HOUR, MIN (если протокол поддерживает данный функционал)"
			}
		},
		onboard: {
			title: "Бортовой компьютер",
			description:
				'Список карточек отображаемых на экране "Бортовой компьютер". Порядок меняется путем перетаскивания блока вверх/вниз. Так же можно включить/выключить отображения на странице',
			reset: {
				menu: "Упорядочить по умолчанию"
			}
		}
	},

	scanner: {
		dialog: {
			title: "Сканирование can-шины",
			text: "Начать сканирование can-шины?\n" + "Значения сканирования будут автоматически отправлены PJ82."
		},
		btn: {
			start: "Начать",
			next: "Далее",
			finish: "Финиш"
		},
		step: {
			0: {
				title: "Сканирование значений двигателя",
				text: 'Запустите двигатель автомобиля и нажмите кнопку "Далее"'
			},
			1: {
				title: "Сканирование значений дверей",
				text:
					"1. Откройте водительскую дверь и закройте ее;\n" +
					"2. Откройте пассажирскую дверь за водителем и закройте ее;\n" +
					"3. Откройте багажник и закройте его;\n" +
					"4. Откройте пассажирскую дверь сзади справа и закройте ее;\n" +
					"5. Откройте пассажирскую дверь спереди справа и закройте ее.\n" +
					"\n" +
					'Вернитесь в салон и нажмите кнопку "Далее"'
			},
			2: {
				title: "Сканирование значений сигналов",
				text:
					"1. Пристегните ремень безопасности водителя;\n" +
					"2. Пристегните ремень безопасности переднего пассажира;\n" +
					"3. Пристегните ремни безопасности задних пассажиров;\n" +
					"4. Включите сигнал левого поворота, затем правого, выключите;\n" +
					"5. Включите сигнал аварийной остановки, выключите его.\n" +
					"\n" +
					'Нажмите кнопку "Далее"'
			},
			3: {
				title: "Сканирование значений климата",
				text:
					"1. Включите/выключите AUTO;\n" +
					"2. Включите/выключите AC;\n" +
					"3. Измените направление воздушного потока;\n" +
					"4. Изменить скорость воздушного потока.\n" +
					"\n" +
					'Нажмите кнопку "Далее"'
			},
			4: {
				title: "Сканирование значений движения",
				text:
					"1. Снимите автомобиль с ручного тормоза;\n" +
					"2. Включите заднюю передачу и немного сдайте назад;\n" +
					"3. Включите режим драйва АКПП или переключите передачу МКПП и начните движение вперед.\n" +
					"\n" +
					'После завершения движения автомобиля заглушите двигатель и нажмите кнопку "Финиш"'
			}
		},
		notify: {
			errorStart: "Сканирование не запущено.\n" + "Проверьте подключение к устройству PJCAN.",
			errorSend: "Ошибка отправки пакета данных сканирования.",
			warningSend: "Нет данных сканирования для отправки."
		},
		upload: {
			title: "Загрузка на сервер",
			text: "Загрузка отсканированных значений на сервер.",
			leftToLoad:
				"Нет пакетов для загрузки | Осталось загрузить {n} пакет | Осталось загрузить {n} пакета | Осталось загрузить {n} пакетов"
		}
	},

	choosingCarModel: {
		title: "Выбор модели автомобиля",
		label: "Модель автомобиля",
		description: "Возможность изменить модель автомобиля поддерживаемое адаптером PJCAN",
		carModels: {
			0: "Mazda",
			1: "Mazda 3 BK",
			2: "Mazda 3 BL (не поддерживается)",
			3: "Mazda 6 GG",
			4: "Mazda 6 GH (не поддерживается)",
			5: "Mazda CX-7",
			6: "Mazda CX-7 rest",
			7: "Mazda CX-9",
			8: "Mazda CX-9 rest"
		}
	},

	help: {
		buttons: {
			notify: "Внимание! В этом разделе меню кнопки руля работают в режиме программирования"
		},
		onboard: {
			notify: "Свайп влево/вправо позволяет листать блоки с информацией"
		}
	}
};
