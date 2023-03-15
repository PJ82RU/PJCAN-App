import EventEmitter from "eventemitter3";
import { toast } from "vue3-toastify";
import { t } from "@/lang";
import { getFirmware, getFirmwareVersion } from "@/api/firmware";
import { getSerial } from "@/api/hash";

import { clearDebounce, debounce } from "@/utils/debounce";
import {
	BLUETOOTH_EVENT_CONNECTED,
	BLUETOOTH_EVENT_RECEIVE,
	Bluetooth,
	TConnectedStatus
} from "@/components/bluetooth";
import { IBaseModel } from "@/models/pjcan/base";
import { API_CONFIG_EXEC, Configs, IConfigs } from "@/models/pjcan/configs";
import { API_VIEW_EXEC, Views, IViews } from "@/models/pjcan/views";
import { API_VARIABLE_CONFIG_EXEC, IVariableConfigs } from "@/models/pjcan/variables/configs";
import { API_VARIABLE_VIEW_EXEC, IVariableViews } from "@/models/pjcan/variables/views";
import {
	API_DEVICE_CONFIG_EXEC,
	API_DEVICE_VALUE_EXEC,
	API_INFO_EXEC,
	DeviceInfo,
	IDeviceInfo
} from "@/models/pjcan/device";
import { API_BUTTONS_CONFIG_EXEC, API_BUTTONS_VALUE_EXEC, ButtonValue, IButtonValue } from "@/models/pjcan/button";
import {
	API_TEYES_CONFIG_EXEC,
	API_TEYES_TEXT_EXEC,
	API_TEYES_VIEW_EXEC,
	ITeyesText,
	TeyesText
} from "@/models/pjcan/teyes";
import { API_LCD_VALUE_EXEC } from "@/models/pjcan/lcd";
import { API_CAR_CONFIG_EXEC, API_CAR_VIEW_EXEC } from "@/models/pjcan/car";
import { API_UPDATE_EXEC, API_UPDATE_EVENT, Update } from "@/models/pjcan/update";
import { API_VARIABLE_BOSE_EXEC, API_VARIABLE_BOSE_VIEW_EXEC } from "@/models/pjcan/variables/bose";
import { API_VARIABLE_CLIMATE_EXEC, API_VARIABLE_CLIMATE_VIEW_EXEC } from "@/models/pjcan/variables/climate";
import { API_VARIABLE_DOORS_EXEC, API_VARIABLE_DOORS_VIEW_EXEC } from "@/models/pjcan/variables/doors";
import {
	API_VARIABLE_ENGINE_EXEC,
	API_VARIABLE_ENGINE_CONFIG_EXEC,
	API_VARIABLE_ENGINE_VIEW_EXEC
} from "@/models/pjcan/variables/engine";
import {
	API_VARIABLE_FUEL_EXEC,
	API_VARIABLE_FUEL_CONFIG_EXEC,
	API_VARIABLE_FUEL_VIEW_EXEC
} from "@/models/pjcan/variables/fuel";
import { API_VARIABLE_MOVEMENT_EXEC, API_VARIABLE_MOVEMENT_VIEW_EXEC } from "@/models/pjcan/variables/movement";
import { API_VARIABLE_SENSORS_EXEC, API_VARIABLE_SENSORS_VIEW_EXEC } from "@/models/pjcan/variables/sensors";
import {
	API_VARIABLE_TEMPERATURE_EXEC,
	API_VARIABLE_TEMPERATURE_VIEW_EXEC
} from "@/models/pjcan/variables/temperature";
import {
	API_VARIABLE_VOLUME_EXEC,
	API_VARIABLE_VOLUME_CONFIG_EXEC,
	API_VARIABLE_VOLUME_VIEW_EXEC
} from "@/models/pjcan/variables/volume";
import { IValues, Values } from "@/models/pjcan/values";
import { IVariablesValue } from "@/models/pjcan/variables/values";
import { API_VALUE_EXEC } from "@/models/pjcan/values/Values";
import { API_VARIABLE_VALUE_EXEC } from "@/models/pjcan/variables/values/VariablesValue";
import { IUpdate } from "@/models/pjcan/update/IUpdate";
import { IVersion, Version } from "@/models/pjcan/version";
import { ITestValue } from "@/models/pjcan/variables/test";

export const API_CONFIGS_EVENT = "Configs";
export const API_VIEWS_EVENT = "Views";
export const API_VALUES_EVENT = "Values";

export const API_VARIABLE_CONFIGS_EVENT = "VariableConfigs";
export const API_VARIABLE_VIEWS_EVENT = "VariableViews";
export const API_VARIABLE_VALUES_EVENT = "VariableValues";

export const API_BUTTONS_CONFIG_EVENT = "ButtonsConfig";
export const API_BUTTON_EVENT = "ButtonsValue";

export const API_CAR_CONFIG_EVENT = "CarConfig";
export const API_CAR_VIEW_EVENT = "CarView";

export const API_DEVICE_CONFIG_EVENT = "DeviceConfig";
export const API_DEVICE_EVENT = "DeviceValue";
export const API_INFO_EVENT = "Info";

export const API_LCD_EVENT = "LCDValue";
export const API_TEYES_CONFIG_EVENT = "TeyesConfig";
export const API_TEYES_VIEW_EVENT = "TeyesView";
export const API_TEYES_TEXT_EVENT = "TeyesText";

export const API_VARIABLE_BOSE_VIEW_EVENT = "VariableBoseView";
export const API_VARIABLE_BOSE_EVENT = "VariableBoseConfig";

export const API_VARIABLE_CLIMATE_VIEW_EVENT = "VariableClimateView";
export const API_VARIABLE_CLIMATE_EVENT = "VariableClimateValue";

export const API_VARIABLE_DOORS_VIEW_EVENT = "VariableDoorsView";
export const API_VARIABLE_DOORS_EVENT = "VariableDoorsValue";

export const API_VARIABLE_ENGINE_CONFIG_EVENT = "VariableEngineConfig";
export const API_VARIABLE_ENGINE_VIEW_EVENT = "VariableEngineView";
export const API_VARIABLE_ENGINE_EVENT = "VariableEngineValue";

export const API_VARIABLE_FUEL_CONFIG_EVENT = "VariableFuelConfig";
export const API_VARIABLE_FUEL_VIEW_EVENT = "VariableFuelView";
export const API_VARIABLE_FUEL_EVENT = "VariableFuelValue";

export const API_VARIABLE_MOVEMENT_VIEW_EVENT = "VariableMovementView";
export const API_VARIABLE_MOVEMENT_EVENT = "VariableMovementValue";

export const API_VARIABLE_SENSORS_VIEW_EVENT = "VariableSensorsView";
export const API_VARIABLE_SENSORS_EVENT = "VariableSensorsValue";

export const API_VARIABLE_TEMPERATURE_VIEW_EVENT = "VariableTemperatureView";
export const API_VARIABLE_TEMPERATURE_EVENT = "VariableTemperatureValue";

export const API_VARIABLE_VOLUME_CONFIG_EVENT = "VariableVolumeConfig";
export const API_VARIABLE_VOLUME_VIEW_EVENT = "VariableVolumeView";
export const API_VARIABLE_VOLUME_EVENT = "VariableVolumeValue";

export const API_UPDATE_EVENT_ERROR = "ErrorUpdate";

export class Canbus extends EventEmitter
{
	/** Bluetooth */
	bluetooth: Bluetooth = new Bluetooth();
	/** Конфигурация устройства */
	configs: IConfigs = new Configs();
	/** Конфигурация отображения значений */
	views: IViews = new Views();
	/** Значения */
	values: IValues = new Values();

	/** Устройство */
	deviceInfo: IDeviceInfo = new DeviceInfo();
	/** SHA */
	sha: string | undefined;

	/** Обновление прошивки */
	update: IUpdate = new Update();

	/** Значения кнопки */
	buttonValue: IButtonValue = new ButtonValue();
	/** Текст Teyes */
	teyesText: ITeyesText = new TeyesText();

	/** Запрет на отправку данных */
	private queryDisabled: boolean = true;

	/** Последний promise */
	private promises: Promise<void>[] | null = null;
	private queue: Promise<void>[] = [];
	/** Таймер */
	private debounceFetchValue: boolean = false;

	constructor()
	{
		super();
		this.bluetooth.addListener(BLUETOOTH_EVENT_CONNECTED, (ev: any) => this.onConnected(ev));
		this.bluetooth.addListener(BLUETOOTH_EVENT_RECEIVE, (ev: any) => this.onReceive(ev));
	}

	/**
	 * Запрос/отправка данных
	 * @param {IBaseModel} obj Объект данных
	 * @private
	 */
	private async query(obj: IBaseModel)
	{
		if (!this.bluetooth.connected) return;

		this.queue.push(this.bluetooth.send(obj.get()));
		if (!this.promises)
		{
			this.promises = this.queue;
			this.queue = [];
			await Promise.all(this.promises);
			this.promises = null;
		}
	}

	/**
	 * Событие подключения Bluetooth
	 * @param {TConnectedStatus} status Статус подключения
	 */
	async onConnected(status: TConnectedStatus)
	{
		if (status !== TConnectedStatus.CONNECT)
		{
			this.queryDisabled = true;
			return;
		}

		await this.queryConfig();
		await this.queryView();
		this.queryDisabled = false;
		if (!this.debounceFetchValue)
		{
			await this.queryValue();
		}
	}

	/**
	 * Отправить/получить конфигурацию
	 * @param {number} type Тип конфигурации
	 */
	async queryConfig(type: number = 0)
	{
		switch (type)
		{
			case API_VARIABLE_CONFIG_EXEC:
				await this.query(this.configs.variable);
				break;

			case API_BUTTONS_CONFIG_EXEC:
				if (!this.queryDisabled) await this.query(this.configs.buttons);
				break;

			case API_CAR_CONFIG_EXEC:
				await this.query(this.configs.car);
				break;

			case API_DEVICE_CONFIG_EXEC:
				await this.query(this.configs.device);
				break;

			case API_TEYES_CONFIG_EXEC:
				await this.query(this.configs.teyes);
				break;

			case API_VARIABLE_BOSE_EXEC:
				await this.query(this.configs.variable.bose);
				break;

			case API_VARIABLE_ENGINE_CONFIG_EXEC:
				await this.query(this.configs.variable.engine);
				break;

			case API_VARIABLE_FUEL_CONFIG_EXEC:
				await this.query(this.configs.variable.fuel);
				break;

			case API_VARIABLE_VOLUME_CONFIG_EXEC:
				await this.query(this.configs.variable.volume);
				break;

			default:
				await this.query(this.configs);
				break;
		}
	}

	/**
	 * Отправить/получить конфигурацию отображения значений
	 * @param {number} type Тип конфигурации отображения значений
	 */
	async queryView(type: number = 0)
	{
		switch (type)
		{
			case API_VARIABLE_VIEW_EXEC:
				await this.query(this.views.variable);
				break;

			case API_CAR_VIEW_EXEC:
				if (!this.queryDisabled) await this.query(this.views.car);
				break;

			case API_TEYES_VIEW_EXEC:
				if (!this.queryDisabled) await this.query(this.views.teyes);
				break;

			case API_VARIABLE_BOSE_VIEW_EXEC:
				if (!this.queryDisabled) await this.query(this.views.variable.bose);
				break;

			case API_VARIABLE_CLIMATE_VIEW_EXEC:
				if (!this.queryDisabled) await this.query(this.views.variable.climate);
				break;

			case API_VARIABLE_DOORS_VIEW_EXEC:
				if (!this.queryDisabled) await this.query(this.views.variable.doors);
				break;

			case API_VARIABLE_ENGINE_VIEW_EXEC:
				if (!this.queryDisabled) await this.query(this.views.variable.engine);
				break;

			case API_VARIABLE_FUEL_VIEW_EXEC:
				if (!this.queryDisabled) await this.query(this.views.variable.fuel);
				break;

			case API_VARIABLE_MOVEMENT_VIEW_EXEC:
				if (!this.queryDisabled) await this.query(this.views.variable.movement);
				break;

			case API_VARIABLE_SENSORS_VIEW_EXEC:
				if (!this.queryDisabled) await this.query(this.views.variable.sensors);
				break;

			case API_VARIABLE_TEMPERATURE_VIEW_EXEC:
				if (!this.queryDisabled) await this.query(this.views.variable.temperature);
				break;

			case API_VARIABLE_VOLUME_VIEW_EXEC:
				if (!this.queryDisabled) await this.query(this.views.variable.volume);
				break;

			default:
				await this.query(this.views);
				break;
		}
	}

	/** Отправить/получить значения
	 * @param {number} type Тип значения
	 */
	async queryValue(type: number = 0)
	{
		if (this.queryDisabled) return;

		switch (type)
		{
			case API_VARIABLE_VALUE_EXEC:
				await this.query(this.values.variable);
				break;

			case API_DEVICE_VALUE_EXEC:
				await this.query(this.values.device);
				break;

			case API_LCD_VALUE_EXEC:
				await this.query(this.values.lcd);
				break;

			case API_VARIABLE_CLIMATE_EXEC:
				await this.query(this.values.variable.climate);
				break;

			case API_VARIABLE_DOORS_EXEC:
				await this.query(this.values.variable.doors);
				break;

			case API_VARIABLE_ENGINE_EXEC:
				await this.query(this.values.variable.engine);
				break;

			case API_VARIABLE_FUEL_EXEC:
				await this.query(this.values.variable.fuel);
				break;

			case API_VARIABLE_MOVEMENT_EXEC:
				await this.query(this.values.variable.movement);
				break;

			case API_VARIABLE_SENSORS_EXEC:
				await this.query(this.values.variable.sensors);
				break;

			case API_VARIABLE_TEMPERATURE_EXEC:
				await this.query(this.values.variable.temperature);
				break;

			case API_VARIABLE_VOLUME_EXEC:
				await this.query(this.values.variable.volume);
				break;

			default:
				await this.query(this.values);
				break;
		}
	}

	/** Получить информацию устройства */
	async queryDeviceInfo()
	{
		if (!this.queryDisabled)
		{
			await this.query(this.deviceInfo);
		}
	}

	/**
	 * Отправить тест
	 * @param {ITestValue} value Значение теста
	 */
	async queryTest(value: ITestValue)
	{
		if (!this.queryDisabled)
		{
			await this.query(value);
		}
	}

	/**
	 * Запустить циклический запрос значений
	 * @param {number} timeout Пауза между ответом и запросом
	 */
	startFetchValue(timeout: number = 500)
	{
		this.debounceFetchValue = true;
		debounce(async () =>
		{
			await this.queryValue();
			if (this.debounceFetchValue) this.startFetchValue(timeout);
		}, timeout);
	}

	/** Остановить циклический запрос значений */
	stopFetchValue()
	{
		this.debounceFetchValue = false;
		clearDebounce();
	}

	/**
	 * Событие входящих значений конфигурации
	 * @param {IVariableConfigs} config Конфигурация
	 */
	private emitVariableConfigs(config: IVariableConfigs): void
	{
		this.emit(API_VARIABLE_CONFIGS_EVENT, config);
		this.emit(API_VARIABLE_BOSE_EVENT, config.bose);
		this.emit(API_VARIABLE_ENGINE_CONFIG_EVENT, config.engine);
		this.emit(API_VARIABLE_FUEL_CONFIG_EVENT, config.fuel);
		this.emit(API_VARIABLE_VOLUME_CONFIG_EVENT, config.volume);
	}

	/**
	 * Событие входящих значений отображения
	 * @param {IVariableViews} view Параметры отображения
	 */
	private emitVariableViews(view: IVariableViews): void
	{
		this.emit(API_VARIABLE_VIEWS_EVENT, view);
		this.emit(API_VARIABLE_BOSE_VIEW_EVENT, view.bose);
		this.emit(API_VARIABLE_CLIMATE_VIEW_EVENT, view.climate);
		this.emit(API_VARIABLE_DOORS_VIEW_EVENT, view.doors);
		this.emit(API_VARIABLE_ENGINE_VIEW_EVENT, view.engine);
		this.emit(API_VARIABLE_FUEL_VIEW_EVENT, view.fuel);
		this.emit(API_VARIABLE_MOVEMENT_VIEW_EVENT, view.movement);
		this.emit(API_VARIABLE_SENSORS_VIEW_EVENT, view.sensors);
		this.emit(API_VARIABLE_TEMPERATURE_VIEW_EVENT, view.temperature);
		this.emit(API_VARIABLE_VOLUME_VIEW_EVENT, view.volume);
	}

	/**
	 * Событие входящих значений
	 * @param {IVariablesValue} value Значения
	 */
	private emitVariableValues(value: IVariablesValue): void
	{
		this.emit(API_VARIABLE_VALUES_EVENT, value);
		this.emit(API_VARIABLE_CLIMATE_EVENT, value.climate);
		this.emit(API_VARIABLE_DOORS_EVENT, value.doors);
		this.emit(API_VARIABLE_ENGINE_EVENT, value.engine);
		this.emit(API_VARIABLE_FUEL_EVENT, value.fuel);
		this.emit(API_VARIABLE_MOVEMENT_EVENT, value.movement);
		this.emit(API_VARIABLE_SENSORS_EVENT, value.sensors);
		this.emit(API_VARIABLE_TEMPERATURE_EVENT, value.temperature);
		this.emit(API_VARIABLE_VOLUME_EVENT, value.volume);
	}

	/**
	 * Входящие данные
	 * @param data Данные
	 */
	onReceive(data: DataView): void
	{
		switch (data.getUint8(0))
		{
			case API_CONFIG_EXEC: // Вся конфигурация
				this.configs.set(data);
				this.logVersion();

				this.emit(API_CONFIGS_EVENT, this.configs);
				this.emit(API_DEVICE_CONFIG_EVENT, this.configs.device);
				this.emit(API_BUTTONS_CONFIG_EVENT, this.configs.buttons);
				this.emit(API_CAR_CONFIG_EVENT, this.configs.car);
				this.emit(API_TEYES_CONFIG_EVENT, this.configs.teyes);
				this.emitVariableConfigs(this.configs.variable);
				break;

			case API_VIEW_EXEC: // Все параметры отображения
				this.views.set(data);

				this.emit(API_VIEWS_EVENT, this.views);
				this.emit(API_CAR_VIEW_EVENT, this.views.car);
				this.emit(API_TEYES_VIEW_EVENT, this.views.teyes);
				this.emitVariableViews(this.views.variable);
				break;

			case API_VALUE_EXEC: // Все значения
				this.values.set(data);
				if (!this.values.device.activation && !this.sha)
				{
					this.queryDeviceInfo().then();
				}

				this.emit(API_VALUES_EVENT, this.values);
				this.emit(API_DEVICE_EVENT, this.values.device);
				this.emit(API_LCD_EVENT, this.values.lcd);
				this.emitVariableValues(this.values.variable);
				break;

			case API_INFO_EXEC: // Информация об устройстве
				this.deviceInfo.set(data);
				if (this.values.device.isData && !this.sha) this.getSHA();
				this.emit(API_INFO_EVENT, this.deviceInfo);
				break;
			case API_DEVICE_CONFIG_EXEC: // Конфигурация устройства
				this.configs.device.set(data);
				this.emit(API_DEVICE_CONFIG_EVENT, this.configs.device);
				break;
			case API_DEVICE_VALUE_EXEC: // Значения устройства
				this.values.device.set(data);
				this.emit(API_DEVICE_EVENT, this.values.device);
				break;

			case API_BUTTONS_CONFIG_EXEC: // Конфигурация кнопок
				this.configs.buttons.set(data);
				this.emit(API_BUTTONS_CONFIG_EVENT, this.configs.buttons);
				break;
			case API_BUTTONS_VALUE_EXEC: // Значения кнопки
				this.buttonValue.set(data);
				this.emit(API_BUTTON_EVENT, this.buttonValue);
				break;

			case API_TEYES_CONFIG_EXEC: // Конфигурация Teyes
				this.configs.teyes.set(data);
				this.emit(API_TEYES_CONFIG_EVENT, this.configs.teyes);
				break;
			case API_TEYES_VIEW_EXEC: // Параметры отображения Teyes
				this.views.teyes.set(data);
				this.emit(API_TEYES_VIEW_EVENT, this.views.teyes);
				break;
			case API_TEYES_TEXT_EXEC: // Текст Teyes
				this.teyesText.set(data);
				this.emit(API_TEYES_TEXT_EVENT, this.teyesText);
				break;

			case API_LCD_VALUE_EXEC: // Значения LCD
				this.values.lcd.set(data);
				this.emit(API_LCD_EVENT, this.values.lcd);
				break;

			case API_CAR_CONFIG_EXEC: // Конфигурация машины
				this.configs.car.set(data);
				this.emit(API_CAR_CONFIG_EVENT, this.configs.car);
				break;
			case API_CAR_VIEW_EXEC: // Параметры отображения машины
				this.views.car.set(data);
				this.emit(API_CAR_VIEW_EVENT, this.views.car);
				break;

			case API_UPDATE_EXEC: // Обновление прошивки
				this.update.set(data);
				this.emit(API_UPDATE_EVENT, this.update);
				break;

			case API_VARIABLE_CONFIG_EXEC: // Вся конфигурация переменных
				this.configs.variable.set(data);
				this.emitVariableConfigs(this.configs.variable);
				break;

			case API_VARIABLE_VIEW_EXEC: // Все параметры отображения переменных
				this.views.variable.set(data);
				this.emitVariableViews(this.views.variable);
				break;

			case API_VARIABLE_VALUE_EXEC: // Все значения переменных
				this.values.variable.set(data);
				this.emitVariableValues(this.values.variable);
				break;

			case API_VARIABLE_BOSE_EXEC: // Конфигурация Bose
				this.configs.variable.bose.set(data);
				this.emit(API_VARIABLE_BOSE_EVENT, this.configs.variable.bose);
				break;
			case API_VARIABLE_BOSE_VIEW_EXEC: // Параметры отображения Bose
				this.views.variable.bose.set(data);
				this.emit(API_VARIABLE_BOSE_VIEW_EVENT, this.views.variable.bose);
				break;

			case API_VARIABLE_CLIMATE_EXEC: // Значения климата
				this.values.variable.climate.set(data);
				this.emit(API_VARIABLE_CLIMATE_EVENT, this.values.variable.climate);
				break;
			case API_VARIABLE_CLIMATE_VIEW_EXEC: // Параметры отображения климата
				this.views.variable.climate.set(data);
				this.emit(API_VARIABLE_CLIMATE_VIEW_EVENT, this.views.variable.climate);
				break;

			case API_VARIABLE_DOORS_EXEC: // Значения дверей
				this.values.variable.doors.set(data);
				this.emit(API_VARIABLE_DOORS_EVENT, this.values.variable.doors);
				break;
			case API_VARIABLE_DOORS_VIEW_EXEC: // Параметры отображения дверей
				this.views.variable.doors.set(data);
				this.emit(API_VARIABLE_DOORS_VIEW_EVENT, this.views.variable.doors);
				break;

			case API_VARIABLE_ENGINE_EXEC: // Значения ДВС
				this.values.variable.engine.set(data);
				this.emit(API_VARIABLE_ENGINE_EVENT, this.values.variable.engine);
				break;
			case API_VARIABLE_ENGINE_CONFIG_EXEC: // Конфигурация ДВС
				this.configs.variable.engine.set(data);
				this.emit(API_VARIABLE_ENGINE_CONFIG_EVENT, this.configs.variable.engine);
				break;
			case API_VARIABLE_ENGINE_VIEW_EXEC: // Параметры отображения ДВС
				this.views.variable.engine.set(data);
				this.emit(API_VARIABLE_ENGINE_VIEW_EVENT, this.views.variable.engine);
				break;

			case API_VARIABLE_FUEL_EXEC: // Значения расхода
				this.values.variable.fuel.set(data);
				this.emit(API_VARIABLE_FUEL_EVENT, this.values.variable.fuel);
				break;
			case API_VARIABLE_FUEL_CONFIG_EXEC: // Конфигурация расхода
				this.configs.variable.fuel.set(data);
				this.emit(API_VARIABLE_FUEL_CONFIG_EVENT, this.configs.variable.fuel);
				break;
			case API_VARIABLE_FUEL_VIEW_EXEC: // Параметры отображения расхода
				this.views.variable.fuel.set(data);
				this.emit(API_VARIABLE_FUEL_VIEW_EVENT, this.views.variable.fuel);
				break;

			case API_VARIABLE_MOVEMENT_EXEC: // Значения движения
				this.values.variable.movement.set(data);
				this.emit(API_VARIABLE_MOVEMENT_EVENT, this.values.variable.movement);
				break;
			case API_VARIABLE_MOVEMENT_VIEW_EXEC: // Параметры отображения движения
				this.views.variable.movement.set(data);
				this.emit(API_VARIABLE_MOVEMENT_VIEW_EVENT, this.views.variable.movement);
				break;

			case API_VARIABLE_SENSORS_EXEC: // Значения датчиков
				this.values.variable.sensors.set(data);
				this.emit(API_VARIABLE_SENSORS_EVENT, this.values.variable.sensors);
				break;
			case API_VARIABLE_SENSORS_VIEW_EXEC: // Параметры отображения датчиков
				this.views.variable.movement.set(data);
				this.emit(API_VARIABLE_SENSORS_VIEW_EVENT, this.views.variable.movement);
				break;

			case API_VARIABLE_TEMPERATURE_EXEC: // Значения температуры
				this.values.variable.temperature.set(data);
				this.emit(API_VARIABLE_TEMPERATURE_EVENT, this.values.variable.temperature);
				break;
			case API_VARIABLE_TEMPERATURE_VIEW_EXEC: // Параметры отображения температуры
				this.views.variable.temperature.set(data);
				this.emit(API_VARIABLE_TEMPERATURE_VIEW_EVENT, this.views.variable.temperature);
				break;

			case API_VARIABLE_VOLUME_EXEC: // Значения уровня звука
				this.values.variable.volume.set(data);
				this.emit(API_VARIABLE_VOLUME_EVENT, this.values.variable.volume);
				break;
			case API_VARIABLE_VOLUME_CONFIG_EXEC: // Конфигурация уровня звука
				this.configs.variable.volume.set(data);
				this.emit(API_VARIABLE_VOLUME_CONFIG_EVENT, this.configs.variable.volume);
				break;
			case API_VARIABLE_VOLUME_VIEW_EXEC: // Параметры отображения уровня звука
				this.views.variable.volume.set(data);
				this.emit(API_VARIABLE_VOLUME_VIEW_EVENT, this.views.variable.volume);
				break;
		}
	}

	/** Запустить процесс загрузки прошивки на устройство */
	updateStart(): void
	{
		getFirmware(this.update.firmwareUrl)
			.then((res: any) =>
			{
				if (res?.byteLength > 0)
				{
					this.update.firmwareData = new Uint8Array(res);
					this.update.total = res.byteLength;
					this.update.offset = 0;
					this.update.error = 0;
					this.update.encrypt = this.update.iv;
					setTimeout(() => this.updateUpload(), 1000);
				}
			})
			.catch(() => this.emit(API_UPDATE_EVENT_ERROR, t("update.notify.errorDownload")));
	}

	/** Пишем данные файла прошивки в устройство PJ CAN */
	async updateUpload()
	{
		if (this.bluetooth.connected && this.update.error === 0 && this.update.offset <= this.update.total)
		{
			this.queryDisabled = true;
			await this.bluetooth.send(this.update.get());
		}
		else if (this.update.error !== 0)
		{
			this.queryDisabled = false;
		}

		if (this.update.end)
		{
			debounce(() => this.emit(API_UPDATE_EVENT_ERROR, t("update.notify.errorWaitUpdate")), 60000);
		}
		else
		{
			debounce(() => this.emit(API_UPDATE_EVENT_ERROR, t("update.notify.errorUpload")), 5000);
		}
	}

	/** Лог версии прошивки */
	private logVersion()
	{
		const { major, minor, build, revision } = this.configs.version;
		console.log(t("BLE.server.versionProtocol", { mj: major, mn: minor, bl: build, rv: revision }));
	}

	/** Проверить версию прошивки */
	checkVersion(): Promise<IVersion>
	{
		return new Promise((resolve, reject) =>
		{
			getFirmwareVersion()
				.then((res: any) =>
				{
					this.update.firmwareUrl = res?.url ?? "";
					this.update.setIV(res?.iv);

					// проверяем версию прошивки
					if (res.current?.length === 4)
					{
						const ver = res.current;
						const newVersion: IVersion = new Version();
						newVersion.major = ver[0];
						newVersion.minor = ver[1];
						newVersion.build = ver[2];
						newVersion.revision = ver[3];

						if (this.configs.version.compare(newVersion) > 0) resolve(newVersion);
						else reject("Current version");
					}
					else reject("No data");
				})
				.catch((e) => reject(e));
		});
	}

	/**
	 * Перезагрузить устройство
	 * @param {boolean} save Сохранить настройки перед загрузкой
	 */
	rebootDevice(save: boolean = false)
	{
		this.values.device.reboot = true;
		this.values.device.save = save;
		this.queryValue(API_DEVICE_VALUE_EXEC).then();
	}

	/**
	 * Сбросить настройки устройства
	 * @param {boolean} resetConfig Удалить конфигурацию
	 * @param {boolean} resetView Удалить параметры отображения
	 */
	resetDevice(resetConfig: boolean = true, resetView: boolean = true)
	{
		this.values.device.resetConfig = resetConfig;
		this.values.device.resetView = resetView;
		this.sha = undefined;
		this.rebootDevice();
	}

	private getSHA(): void
	{
		this.sha = "";
		this.deviceInfo.sha.forEach((x) =>
		{
			const hex = x.toString(16);
			this.sha += (hex.length === 1 ? "0" : "") + hex;
		});

		if (!this.values.device.activation)
		{
			getSerial(this.sha)
				.then(async (res: any) =>
				{
					this.configs.device.serial = res?.sha ?? "";
					await this.queryConfig(API_DEVICE_CONFIG_EXEC);
					this.rebootDevice(true);
					toast.success(t("activation.success"));
				})
				.catch(() =>
				{
					toast.error(t("activation.error"));
				});
		}
	}
}

const canbus = new Canbus();
export default canbus;
