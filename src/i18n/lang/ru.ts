export default {
	Onboard: 'Бортовой компьютер',
	SetTime: 'Установка времени',
	Setting: 'Настройки',

	LangRussian: 'Russian language',
	LangEnglish: 'English language',

	DeviceInfo: 'Об устройстве',
	About: 'О программе',

	Apply: 'Применить',
	Cancel: 'Отмена',
	Close: 'Закрыть',

	About_Version: 'Версия web-приложения',
	About_VersionFirmware: 'Версия прошивки PJCAN',
	About_CarSupport: 'Поддержка автомобиля',
	About_Author: 'Автор',
	About_DeviceInfo: 'Техническая информация',

	DeviceInfo_ChipCores: 'Количество ядер',
	DeviceInfo_ChipModel: 'Модель чипа',
	DeviceInfo_ChipRevision: 'Номер ревизии чипа',
	DeviceInfo_CpuFreqMHz: 'Частота ЦП, МГц',
	DeviceInfo_CycleCount: 'Количество циклов',
	DeviceInfo_EfuseMac: 'MAC-адрес',
	DeviceInfo_FlashChipMode: 'Режим флеш-памяти',
	DeviceInfo_FlashChipSize: 'Размер флеш-памяти, байт',
	DeviceInfo_FlashChipSpeed: 'Частота флеш-памяти',
	DeviceInfo_HeapSize: 'Размер кучи в памяти',
	DeviceInfo_FreeHeap: 'Свободной кучи в памяти',
	DeviceInfo_MaxAllocHeap: 'Размер самого большого блока кучи',
	DeviceInfo_MinFreeHeap: 'Наименьший уровень свободной кучи',
	DeviceInfo_PsramSize: 'Размер SPI RAM',
	DeviceInfo_FreePsram: 'Свободной SPI RAM',
	DeviceInfo_MaxAllocPsram: 'Размер самого большого блока SPI RAM',
	DeviceInfo_MinFreePsram: 'Наименьший уровень свободной SPI RAM',
	DeviceInfo_FreeSketchSpace: 'Свободное место для прошивки',
	DeviceInfo_SdkVersion: 'Версия SDK',
	DeviceInfo_SketchMD5: 'MD5 прошивки',
	DeviceInfo_SketchSize: 'Размер прошивки',

	SettingLCD: 'Настройки отображения на LCD',

	BLE_BtnConnect: 'Подключиться',
	BLE_BtnDisconnect: 'Отключиться',
	BLE_NoConnected: 'Вы не подключены ни к одному устройству Bluetooth.',
	BLE_Connected: 'PJCAN подключен',
	BLE_Disconnected: 'PJCAN отключен',
	BLE_LostConnected: 'Потеряно подключение с устройством Bluetooth PJCAN. Пытаюсь восстановить связь...',
	BLE_NoData: 'Нет данных для отправки',

	BLESrv_Device_Selected: 'Выбрано % Bluetooth устройство.',
	BLESrv_Device_Disconnected: 'Устройство Bluetooth % отключено.',
	BLESrv_GATT_Connect: 'Подключение к GATT серверу ...',
	BLESrv_Get_Service: 'GATT сервер подключен, читаю сервис ...',
	BLESrv_Get_Characteristic: 'Сервис получен, читаю характеристику ...',
	BLESrv_Characteristic_Done: 'Характеристика получена.',
	BLESrv_Start_Notifications: 'Запуск уведомлений ...',
	BLESrv_Notifications_Done: 'Уведомления запущены.',
	BLESrv_Reconnect: 'Повторная попытка через % сек... (осталось $ попыток)',
	BLESrv_Reconnect_Restored: 'Соединение с устройством Bluetooth PJCAN восстановлено.',
	BLESrv_Connection_Lost: 'Связь с устройством Bluetooth PJCAN потеряна.',
	BLESrv_Receive: 'Входящие данные: ID %',
	BLESrv_Send: 'Исходящие данные: ID %',
	BLESrv_Version_Protocol: 'Версия протокола: %0.%1.%2.%3',

	UpdFirmware_Later: 'Позже',
	UpdFirmware_Update: 'Обновить',
	UpdFirmware_New: 'Доступна новая версия прошивки устройства PJCAN. Обновить до версии % ?',
	UpdFirmware_Preparation: 'Подготовка к загрузке ...',
	UpdFirmware_ProcessUpload: 'Загрузка прошивки ...',
	UpdFirmware_ProcessUpdate: 'Обновление прошивки ...',
	UpdFirmware_ProcessCompleted: 'Прошивка успешно завершена',
	UpdFirmware_ProcessWarning: 'Прошивка завершена не удачно. Перезагрузите устройство и попробуйте еще раз',
	UpdFirmware_Error: 'Ошибка обновления прошивки',

	InfoCard_Title: 'Информация',
	InfoCard_ACC_Comment: 'Питание автомобиля',
	InfoCard_TimeWork_Title: 'Время работы',
	InfoCard_TimeWork_Comment: 'Время работы устройства с момента включения',
	InfoCard_Temperature_Title: 'Температура воздуха',
	InfoCard_Temperature_Comment: 'Показания внешней температуры со штатных датчиков автомобиля',
	InfoCard_Handbrake_Title: 'Ручной тормоз',
	InfoCard_Handbrake_Comment: 'Положение ручного тормоза',
	InfoCard_Reverse_Title: 'Задний ход',
	InfoCard_Reverse_Comment: 'Ручка КПП в положении R',
	InfoCard_SafetyBelt_Title: 'Ремень безопасности',
	InfoCard_SafetyBelt_Comment: 'Ремень безопасности водителя и пассажира',
	InfoCard_Signal_Title: 'Сигнал поворота',
	InfoCard_Signal_Comment: 'Сигнал поворота и аварийной остановки',

	DoorsCard_Title: 'Двери',
	DoorsCard_FL_Title: 'Передняя левая',
	DoorsCard_FL_Comment: 'Текущее состояние передней левой двери',
	DoorsCard_FR_Title: 'Передняя правая',
	DoorsCard_FR_Comment: 'Текущее состояние передней правой двери',
	DoorsCard_BL_Title: 'Задняя левая',
	DoorsCard_BL_Comment: 'Текущее состояние задней левой двери',
	DoorsCard_BR_Title: 'Задняя правая',
	DoorsCard_BR_Comment: 'Текущее состояние задней правой двери',
	DoorsCard_Trunk_Title: 'Багажник',
	DoorsCard_Trunk_Comment: 'Текущее состояние багажника',

	EngineCard_Title: 'Двигатель',
	EngineCard_Enabled_Title: 'Работа ДВС',
	EngineCard_Enabled_Comment: 'Текущее состояние ДВС',
	EngineCard_RPM_Title: 'RPM двигателя',
	EngineCard_RPM_Comment: 'Текущее количество полных оборотов коленчатого вала двигателя в минуту',
	EngineCard_CountRPM_Title: 'Счетчик RPM, тыс.',
	EngineCard_CountRPM_Comment: 'Общее количество полных оборотов коленчатого вала двигателя в тысячах',
	EngineCard_Load_Title: 'Нагрузка на ДВС',
	EngineCard_Load_Comment: 'Нагрузка чего-то на что-то, хз как рассчитывается',
	EngineCard_Motors_Title: 'Моточасы',
	EngineCard_Motors_Comment: 'Общее время работы двигателя',
	EngineCard_Throttle_Title: 'Положение дрос. заслонки',
	EngineCard_Throttle_Comment: 'Вот как ее положили, так и лежит',
	EngineCard_Coolant_Title: 'Температура антифриза',
	EngineCard_Coolant_Comment: 'Температура охлаждающей жидкости',

	FuelCard_Title: 'Топливо',
	FuelCard_Current_Title: 'Расход топлива',
	FuelCard_Current_Comment: 'Значение БК, л/100 км',
	FuelCard_AVG_Title: 'Средний расход',
	FuelCard_AVG_Comment: 'Значение БК, л/100 км',
	FuelCard_Total_Title: 'Количество топлива',
	FuelCard_Total_Comment: 'Экспериментальное значение (расчетное), л',
	FuelCard_Consumption_Title: 'Расход топлива',
	FuelCard_Consumption_Comment: 'Экспериментальное значение (расчетное), л/ч',

	MovementCard_Title: 'Спидометр',
	MovementCard_Speed_Title: 'Скорость автомобиля',
	MovementCard_Speed_Comment: 'Значение БК, км/ч',
	MovementCard_SpeedAVG_Title: 'Средняя скорость',
	MovementCard_SpeedAVG_Comment: 'Значение БК, км/ч',
	MovementCard_RestWay_Title: 'Остаток пути, км',
	MovementCard_RestWay_Comment: 'Значение БК, км',

	ClimateCard_Title: 'Климат-контроль',
	ClimateCard_StatusWork_Title: 'Статус работы',
	ClimateCard_StatusWork_Comment: 'Статус работы блока климат-контроля',
	ClimateCard_AutoMode_Title: 'Auto',
	ClimateCard_AutoMode_Comment: 'Автоматический режим работы блока климата',
	ClimateCard_AC_Title: 'AC',
	ClimateCard_AC_Comment: 'Работа кондиционера',
	ClimateCard_Temperature_Title: 'Температура',
	ClimateCard_Temperature_Comment: 'Установленное значение температуры блока климат-контроля',
	ClimateCard_Air_Title: 'Вентиляция салона',
	ClimateCard_Air_Comment: 'Циркуляция воздуха внутри салона или забор "свежего" воздуха',
	ClimateCard_Blow_Title: 'Воздушный поток',
	ClimateCard_Blow_Comment: 'Направление воздушного потока в ноги, в туловище, в ветровое стекло',

	VolumeCard_Title: 'Звук',
	VolumeCard_Mute_Title: 'Включить звук',
	VolumeCard_Mute_Comment: 'Временное включение/выключение звука без изменения текущего уровня',
	VolumeCard_Volume_Title: 'Уровень звука',
	VolumeCard_Volume_Comment: 'Текущее значение уровня звука',

	BoseCard_Title: 'Bose',
	BoseCard_Enabled_Title: 'Включить усилитель',
	BoseCard_Enabled_Comment: 'Управление питанием усилителя звука',
	BoseCard_AudioPLT_Title: 'AudioPilot',
	BoseCard_AudioPLT_Comment:
		'Представляет собой систему подавления шумов, которая непрерывно регулирует звучание для компенсации фонового шума и скорости автомобиля',
	BoseCard_CenterPoint_Title: 'CenterPoint',
	BoseCard_CenterPoint_Comment:
		'Технология CenterPoint преобразует стерео-сигналы в многоканальное аудио, и одновременно создает более широкую и объемную звуковую область',
	BoseCard_Balance_Title: 'Balance',
	BoseCard_Balance_Comment: 'Смещение звукового баланса вправо или влево',
	BoseCard_Fade_Title: 'Fade',
	BoseCard_Fade_Comment: 'Увеличение громкости передних или задних динамиков',
	BoseCard_Treble_Title: 'Treble',
	BoseCard_Treble_Comment: 'Усиление или ослабление высоких частот',
	BoseCard_Bass_Title: 'Bass',
	BoseCard_Bass_Comment: 'Усиление или ослабление низких частот',
	BoseCard_Wow_Title: 'Wow',
	BoseCard_Wow_Comment: 'Звуковой сигнал при изменении параметров',

	ViewSetting_Enabled: 'Отображать информацию',
	ViewSetting_Enabled_Comment: 'Статус отображения информации на информационном экране',
	ViewSetting_Type: 'Стиль отображения информации',
	ViewSetting_Type_Comment: 'Отображать статичный текст, мигающий или в стиле бегущий строки',
	ViewSetting_Time: 'Время отображения, сек.',
	ViewSetting_Time_Comment: 'Показывать на информационном экране указанное количество секунд',

	ManualControlCard: 'Кнопки БК',
	ManualControlCard_Restyling: 'Рестайлинг',
	ManualControlCard_BeforeRestyling: 'До рестайлинг',

	ButtonsSetting_Title: 'Настройка кнопок'
};