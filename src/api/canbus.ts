import EventEmitter from "eventemitter3";
import { toast } from "vue3-toastify";
import { t } from "@/lang";
import { Timeout } from "@/models/types/Timeout";

import { getFirmware, getFirmwareVersion } from "@/api/firmware";
import { getSerial } from "@/api/hash";

import { createDebounce } from "@/utils/debounce";
import { arrayToHex } from "@/utils/conversion";

import {
	BLUETOOTH_EVENT_CONNECTED,
	BLUETOOTH_EVENT_RECEIVE,
	Bluetooth,
	TConnectedStatus
} from "@/components/bluetooth";
import { IBaseModel } from "@/models/pjcan/base";
import {
	API_DEVICE_ACTIVATION_EXEC,
	API_DEVICE_ACTIVATION_EVENT,
	API_DEVICE_VALUE_EXEC,
	API_DEVICE_VALUE_EVENT,
	API_DEVICE_INFO_EXEC,
	API_DEVICE_INFO_EVENT,
	API_DEVICE_UPDATE_EXEC,
	API40_DEVICE_UPDATE_EXEC,
	API_DEVICE_UPDATE_EVENT,
	API_DEVICE_UPDATE_EVENT_ERROR,
	API_DEVICE_SCANNER_VALUE_EXEC,
	API_DEVICE_SCANNER_VALUE_EVENT,
	API_DEVICE_VIEW_WORKTIME_EXEC,
	API_DEVICE_VIEW_WORKTIME_EVENT,
	API_DEVICE_VIEW_VOLTMETER_EXEC,
	API_DEVICE_VIEW_VOLTMETER_EVENT,
	IDeviceAction,
	DeviceInfo,
	DeviceAction,
	DeviceActivation,
	DeviceValue,
	DeviceUpdate,
	DeviceScannerAction,
	DeviceScannerValue,
	IDeviceScannerValue,
	IDeviceFirmwareUrl,
	API_DEVICE_ROLLBACK_EVENT,
	IDeviceUpdate,
	IDeviceValue,
	IDeviceInfo,
	IDeviceActivation,
	IDeviceScannerAction, API_DEVICE_CONFIG_EXEC, API_DEVICE_CONFIG_EVENT
} from "@/models/pjcan/device";
import {
	API_SW1_CONFIG_EXEC,
	API_SW1_CONFIG_EVENT,
	API_SW1_VALUE_EXEC,
	API_SW1_VALUE_EVENT,
	API_SW3_CONFIG_EXEC,
	API_SW3_CONFIG_EVENT,
	API_SW3_VALUE_EXEC,
	API_SW3_VALUE_EVENT
} from "@/models/pjcan/buttons";
import {
	API_HEAD_UNIT_CONFIG_EXEC,
	API_HEAD_UNIT_CONFIG_EVENT,
	API_HEAD_UNIT_VALUE_EXEC,
	API_HEAD_UNIT_VALUE_EVENT,
	API_HEAD_UNIT_VIEW_EXEC,
	API_HEAD_UNIT_VIEW_EVENT
} from "@/models/pjcan/head-unit";
import {
	API_ONBOARD_CONFIG_EXEC,
	API_ONBOARD_CONFIG_EVENT,
	API_ONBOARD_VIEW_EXEC,
	API_ONBOARD_VIEW_EVENT
} from "@/models/pjcan/onboard";
import {
	API_DATETIME_CONFIG_EVENT,
	API_DATETIME_CONFIG_EXEC,
	API_DATETIME_VIEW_EVENT,
	API_DATETIME_VIEW_EXEC
} from "@/models/pjcan/datetime";
import {
	API_BOSE_CONFIG_EXEC,
	API_BOSE_CONFIG_EVENT,
	API_BOSE_VIEW_EXEC,
	API_BOSE_VIEW_EVENT
} from "@/models/pjcan/bose";
import {
	API_CLIMATE_VALUE_EXEC,
	API_CLIMATE_VALUE_EVENT,
	API_CLIMATE_VIEW_EXEC,
	API_CLIMATE_VIEW_EVENT
} from "@/models/pjcan/climate";
import {
	API_DOORS_CONFIG_EXEC,
	API_DOORS_CONFIG_EVENT,
	API_DOORS_VALUE_EXEC,
	API_DOORS_VALUE_EVENT,
	API_DOORS_VIEW_EXEC,
	API_DOORS_VIEW_EVENT
} from "@/models/pjcan/doors";
import {
	API_ENGINE_CONFIG_EXEC,
	API_ENGINE_CONFIG_EVENT,
	API_ENGINE_VALUE_EXEC,
	API_ENGINE_VALUE_EVENT,
	API_ENGINE_VIEW_EXEC,
	API_ENGINE_VIEW_EVENT,
	API_ENGINE_VIEW_ENABLED_EXEC,
	API_ENGINE_VIEW_TOTAL_WORKTIME_EXEC,
	API_ENGINE_VIEW_TOTAL_COUNT_RPM_EXEC,
	API_ENGINE_VIEW_COOLANT_EXEC,
	API_ENGINE_VIEW_RPM_EXEC,
	API_ENGINE_VIEW_LOAD_EXEC,
	API_ENGINE_VIEW_THROTTLE_EXEC,
	API_ENGINE_VIEW_ENABLED_EVENT,
	API_ENGINE_VIEW_TOTAL_WORKTIME_EVENT,
	API_ENGINE_VIEW_TOTAL_COUNT_RPM_EVENT,
	API_ENGINE_VIEW_COOLANT_EVENT,
	API_ENGINE_VIEW_RPM_EVENT,
	API_ENGINE_VIEW_LOAD_EVENT,
	API_ENGINE_VIEW_THROTTLE_EVENT
} from "@/models/pjcan/engine";
import {
	API_FUEL_CONFIG_EXEC,
	API_FUEL_CONFIG_EVENT,
	API_FUEL_VALUE_EXEC,
	API_FUEL_VALUE_EVENT,
	API_FUEL_VIEW_EXEC,
	API_FUEL_VIEW_EVENT,
	API_FUEL_VIEW_CURRENT_EXEC,
	API_FUEL_VIEW_AVG_EXEC,
	API_FUEL_VIEW_CURRENT_EVENT,
	API_FUEL_VIEW_AVG_EVENT
} from "@/models/pjcan/fuel";
import {
	API_MOVEMENT_VALUE_EXEC,
	API_MOVEMENT_VALUE_EVENT,
	API_MOVEMENT_VIEW_EXEC,
	API_MOVEMENT_VIEW_EVENT,
	API_MOVEMENT_VIEW_SPEED_EXEC,
	API_MOVEMENT_VIEW_SPEED_EVENT,
	API_MOVEMENT_VIEW_SPEED_AVG_EXEC,
	API_MOVEMENT_VIEW_SPEED_AVG_EVENT,
	API_MOVEMENT_VIEW_REST_WAY_EXEC,
	API_MOVEMENT_VIEW_REST_WAY_EVENT
} from "@/models/pjcan/movement";
import {
	API_SENSORS_VALUE_EXEC,
	API_SENSORS_VALUE_EVENT,
	API_SENSORS_VIEW_EXEC,
	API_SENSORS_VIEW_EVENT,
	API_SENSORS_VIEW_HANDBRAKE_EXEC,
	API_SENSORS_VIEW_HANDBRAKE_EVENT,
	API_SENSORS_VIEW_REVERSE_EXEC,
	API_SENSORS_VIEW_REVERSE_EVENT,
	API_SENSORS_VIEW_SEATBELT_EXEC,
	API_SENSORS_VIEW_SEATBELT_EVENT,
	API_SENSORS_VIEW_TURN_SIGNAL_EXEC,
	API_SENSORS_VIEW_TURN_SIGNAL_EVENT
} from "@/models/pjcan/sensors";
import {
	API_TEMPERATURE_VALUE_EXEC,
	API_TEMPERATURE_VALUE_EVENT,
	API_TEMPERATURE_VIEW_EXEC,
	API_TEMPERATURE_VIEW_EVENT
} from "@/models/pjcan/temperature";
import {
	API_VOLUME_VALUE_EXEC,
	API_VOLUME_VALUE_EVENT,
	API_VOLUME_VIEW_EXEC,
	API_VOLUME_VIEW_EVENT
} from "@/models/pjcan/volume";
import {
	API_NEW_VERSION_EVENT,
	API_VERSION_EVENT,
	API_VERSION_EXEC,
	API40_VERSION_EVENT,
	IVersion,
	Version
} from "@/models/pjcan/version";
import { API_CHOICE_EXEC, ChoiceValue, IChoiceValue } from "@/models/pjcan/choice";

import { IQuery } from "@/models/interfaces/IQuery";
import { API_CANBUS_EVENT } from "@/models/pjcan/base/BaseModel";
import { EDeviceUpdateError } from "@/models/pjcan/device/EDeviceUpdateError";
import { IDeviceHardware } from "@/models/pjcan/device/IDeviceValue";

const dev = process.env.NODE_ENV === "development";

export class Canbus extends EventEmitter
{
	/** Bluetooth */
	bluetooth: Bluetooth = new Bluetooth();
	/** Очередь */
	private queue: IQuery[] = [];
	/** Ожидание следующей очереди */
	private queueWait: boolean = false;
	/** Запрет на отправку данных */
	queueDisabled: boolean = false;
	/** Обновление прошивки */
	update: IDeviceUpdate = new DeviceUpdate();
	/** Таймер */
	private debounce: (fn: () => void, delay: number) => void = createDebounce();

	/** Версия прошивки PJCAN */
	version: IVersion = new Version();
	/** Версия платы */
	hardware: IDeviceHardware = {} as IDeviceHardware;
	/** Статус активации устройства */
	activation: boolean = false;

	private __onVersion: (ev: any) => void = (ev: any): void => canbus.onVersion(ev, false);
	private __onVersion40: (ev: any) => void = (ev: any): void => canbus.onVersion(ev, true);
	private __onIsActivation: (ev: any) => void = (ev: any): void => canbus.onIsActivation(ev);
	private __onActivation: (ev: any) => void = (ev: any): void => canbus.onActivation(ev);

	constructor()
	{
		super();
		this.bluetooth.addListener(BLUETOOTH_EVENT_CONNECTED, (ev): void => this.onConnected(ev));
		this.bluetooth.addListener(BLUETOOTH_EVENT_RECEIVE, (ev): void => this.onReceive(ev));
	}

	/** Статус работы Canbus */
	get status(): boolean
	{
		return this.bluetooth.connected && this.version.is;
	}

	/** Отправка сообщений из очереди */
	private sendBluetoothQueue(): void
	{
		if (this.bluetooth.connected)
		{
			if (this.queueWait) return;

			this.queueWait = true;
			while (this.queue.length)
			{
				const next: IQuery = this.queue[0];
				this.queue.shift();
				if (!this.queueDisabled || (this.queueDisabled && next.highPriority))
				{
					this.bluetooth
						.send(next.data)
						.then((): void =>
						{
							next.fn?.(true);
						})
						.catch((err): void =>
						{
							next.fn?.(false);
							if (dev) console.log("Query:", err);
						})
						.finally((): void =>
						{
							this.queueWait = false;
							this.sendBluetoothQueue();
						});
					return;
				}
			}
			this.queueWait = false;
		}
		else if (this.queue.length)
		{
			this.queue = [];
		}
	}

	/**
	 * Запрос/отправка данных
	 * @param {IBaseModel} obj Объект данных
	 * @param {boolean} request Только запрос данных
	 * @param {function} fn Функция обратного вызова
	 */
	query(obj: IBaseModel, request?: boolean, fn?: (success: boolean) => void): void
	{
		if (!this.activation && !obj.skipActivationCheck) return;
		if (this.queue.length)
		{
			const item = this.queue.find((x: IQuery) => x.exec === obj.exec && x.id === obj.id);
			if (item)
			{
				if (!request)
				{
					item.data = obj.get();
					item.fn = fn;
				}
				return;
			}
		}

		this.queue.push({
			exec: obj.exec,
			highPriority: obj.highPriority,
			id: obj.id,
			data: obj.get(request),
			fn
		});
		this.sendBluetoothQueue();
	}

	/**
	 * Событие подключения Bluetooth
	 * @param {TConnectedStatus} status Статус подключения
	 */
	onConnected(status: TConnectedStatus): void
	{
		this.queue = [];
		if (status === TConnectedStatus.CONNECT)
		{
			if (!this.version.is)
			{
				// Запрос версии прошивки
				this.addListener(API_VERSION_EVENT, this.__onVersion);
				this.query(new Version(), true);

				// Запрос версии прошивки 4.0
				this.addListener(API40_VERSION_EVENT, this.__onVersion40);
				this.query(new Version(undefined, 40), true);
				return;
			}
		}
		this.emit(API_CANBUS_EVENT, this.status);
	}

	/**
	 * Входящее значение версии
	 * @param {DataView} data Данные
	 * @param {boolean} oldProtocol Старая версия протокола
	 */
	private onVersion(data: DataView, oldProtocol: boolean): void
	{
		this.removeListener(API_VERSION_EVENT, this.__onVersion);
		this.removeListener(API40_VERSION_EVENT, this.__onVersion40);
		this.queue = [];
		if (oldProtocol)
		{
			const ver40 = new Version(data, 40);
			this.version.major = ver40.major;
			this.version.minor = ver40.minor;
			this.version.build = ver40.build;
			this.version.revision = ver40.revision;
			this.update.protocol = 40;
			this.emit(API_VERSION_EVENT, this.version.get(false));
		}
		else this.version.set(data);
		if (this.version.is)
		{
			const { major, minor, build, revision } = this.version;
			console.log(t("BLE.server.versionProtocol", { mj: major, mn: minor, bl: build, rv: revision }));

			// Запрос значения активации устройства
			if (!oldProtocol)
			{
				this.addListener(API_DEVICE_VALUE_EVENT, this.__onIsActivation);
				this.query(new DeviceValue());
			}

			// Проверка наличия новой версии прошивки, каждые 5 минут
			this.startCheckVersion(300000, true);
		}
		else
		{
			this.emit(API_CANBUS_EVENT, this.status);
			toast.error(t("error.version"));
		}
	}

	private checkVersionInterval: Timeout;

	/**
	 * Запустить проверку версии прошивки
	 * @param {number} interval Интервал не менее 5000 мс
	 * @param {boolean} force Запустить проверку немедленно
	 */
	startCheckVersion(interval: number, force: boolean = false): void
	{
		const onCheckVersion = () =>
		{
			this.checkVersion()
				.then((newVersion: IVersion): void =>
				{
					this.emit(API_NEW_VERSION_EVENT, newVersion);
					// Меняем время проверки наличия новой версии прошивки на каждые 15 минут
					this.startCheckVersion(900000);
				})
				.catch((): void => {});
		};

		if (interval >= 5000)
		{
			this.stopCheckVersion();
			this.checkVersionInterval = setInterval(() => onCheckVersion(), interval);
		}
		if (force) onCheckVersion();
	}

	/** Остановить проверку версии прошивки */
	stopCheckVersion(): void
	{
		if (this.checkVersionInterval)
		{
			clearInterval(this.checkVersionInterval);
			this.checkVersionInterval = undefined;
		}
	}

	/**
	 * Проверка активации устройства PJCAN
	 * @param {DataView} data Данные
	 */
	private onIsActivation(data: DataView): void
	{
		const device: IDeviceValue = new DeviceValue(data);
		if (device.isData)
		{
			this.removeListener(API_DEVICE_VALUE_EVENT, this.__onIsActivation);
			this.hardware = device.hardware;
			this.activation = device.activation;
			if (!this.activation)
			{
				// для активации устройства получаем хеш устройства
				this.addListener(API_DEVICE_INFO_EVENT, this.__onActivation);
				this.query(new DeviceInfo());
			}
			else
			{
				this.rollbackVersion()
					.then((rollback: IDeviceFirmwareUrl): void =>
					{
						this.emit(API_DEVICE_ROLLBACK_EVENT, rollback);
					})
					.catch((): void => {})
					.finally((): void =>
					{
						this.emit(API_CANBUS_EVENT, this.status);
					});
			}
		}
	}

	/**
	 * Активация устройства PJCAN
	 * @param {DataView} data Данные
	 */
	private onActivation(data: DataView): void
	{
		const info: IDeviceInfo = new DeviceInfo(data);
		if (info.isData)
		{
			this.removeListener(API_DEVICE_INFO_EVENT, this.__onActivation);
			const sha = arrayToHex(info.sha);
			if (sha?.length)
			{
				getSerial(sha)
					.then((res: any): void =>
					{
						if (res?.sha?.length)
						{
							const device: IDeviceActivation = new DeviceActivation();
							device.serial = res.sha;
							this.query(device, false, (success): void =>
							{
								if (success)
								{
									this.rebootDevice(true);
									toast.success(t("activation.success"));
								}
								else toast.error(t("activation.error"));
							});
						}
						else toast.error(t("activation.error"));
					})
					.catch((): void =>
					{
						toast.error(t("activation.error"));
					});
			}
		}
	}

	/**
	 * Входящие данные
	 * @param {DataView} data Данные
	 */
	onReceive(data: DataView): void
	{
		const id: number = data.getUint8(0);
		switch (id)
		{
			case API_VERSION_EXEC: // Версия прошивки
				this.emit(API_VERSION_EVENT, data);
				break;
			case API_DEVICE_INFO_EXEC: // Информация об устройстве
				this.emit(API_DEVICE_INFO_EVENT, data);
				break;
			case API_DEVICE_ACTIVATION_EXEC: // Активация устройства
				this.emit(API_DEVICE_ACTIVATION_EVENT, data);
				break;
			case API_DEVICE_CONFIG_EXEC: // Конфигурация устройства
				this.emit(API_DEVICE_CONFIG_EVENT, data);
				break;
			case API_DEVICE_VALUE_EXEC: // Значения устройства
				this.emit(API_DEVICE_VALUE_EVENT, data);
				break;
			case API_DEVICE_UPDATE_EXEC: // Обновление прошивки
			case API40_DEVICE_UPDATE_EXEC:
				this.update.set(data);
				if (this.update.offset < this.update.total) this.updateUpload().then();
				this.emit(API_DEVICE_UPDATE_EVENT, this.update);
				break;
			case API_DEVICE_SCANNER_VALUE_EXEC: // Значения сканирования (устаревший ID API40_VERSION_EXEC, нужен для обновления до 4.1)
				// Версия прошивки 4.0
				if (!this.version.is) this.emit(API40_VERSION_EVENT, data);
				else this.emit(API_DEVICE_SCANNER_VALUE_EVENT, data);
				break;
			case API_DEVICE_VIEW_WORKTIME_EXEC: // Отображение времени работы устройства
				this.emit(API_DEVICE_VIEW_WORKTIME_EVENT, data);
				break;
			case API_DEVICE_VIEW_VOLTMETER_EXEC: // Отображение напряжения бортовой сети
				this.emit(API_DEVICE_VIEW_VOLTMETER_EVENT, data);
				break;

			case API_CHOICE_EXEC: // Выборочные данные
				new ChoiceValue(data, (res: DataView): void => this.onReceive(res));
				break;

			case API_SW1_CONFIG_EXEC: // Конфигурация кнопок SW1
				this.emit(API_SW1_CONFIG_EVENT, data);
				break;
			case API_SW1_VALUE_EXEC: // Значения кнопки SW1
				this.emit(API_SW1_VALUE_EVENT, data);
				break;
			case API_SW3_CONFIG_EXEC: // Конфигурация кнопок SW3
				this.emit(API_SW3_CONFIG_EVENT, data);
				break;
			case API_SW3_VALUE_EXEC: // Значения кнопки SW3
				this.emit(API_SW3_VALUE_EVENT, data);
				break;

			case API_ONBOARD_CONFIG_EXEC: // Конфигурация автомобиля
				this.emit(API_ONBOARD_CONFIG_EVENT, data);
				break;
			case API_ONBOARD_VIEW_EXEC: // Конфигурация отображения текста приветствия
				this.emit(API_ONBOARD_VIEW_EVENT, data);
				break;

			case API_DATETIME_CONFIG_EXEC: // Конфигурация времени
				this.emit(API_DATETIME_CONFIG_EVENT, data);
				break;
			case API_DATETIME_VIEW_EXEC: // Конфигурация отображения времени
				this.emit(API_DATETIME_VIEW_EVENT, data);
				break;

			case API_HEAD_UNIT_CONFIG_EXEC: // Конфигурация Head Unit
				this.emit(API_HEAD_UNIT_CONFIG_EVENT, data);
				break;
			case API_HEAD_UNIT_VALUE_EXEC: // Текст Head Unit
				this.emit(API_HEAD_UNIT_VALUE_EVENT, data);
				break;
			case API_HEAD_UNIT_VIEW_EXEC: // Параметры отображения Head Unit
				this.emit(API_HEAD_UNIT_VIEW_EVENT, data);
				break;

			case API_BOSE_CONFIG_EXEC: // Конфигурация Bose
				this.emit(API_BOSE_CONFIG_EVENT, data);
				break;
			case API_BOSE_VIEW_EXEC: // Параметры отображения Bose
				this.emit(API_BOSE_VIEW_EVENT, data);
				break;

			case API_CLIMATE_VALUE_EXEC: // Значения климат-контроля
				this.emit(API_CLIMATE_VALUE_EVENT, data);
				break;
			case API_CLIMATE_VIEW_EXEC: // Параметры отображения климат-контроля
				this.emit(API_CLIMATE_VIEW_EVENT, data);
				break;

			case API_DOORS_CONFIG_EXEC:
				this.emit(API_DOORS_CONFIG_EVENT, data);
				break;
			case API_DOORS_VALUE_EXEC: // Значения дверей
				this.emit(API_DOORS_VALUE_EVENT, data);
				break;
			case API_DOORS_VIEW_EXEC: // Параметры отображения дверей
				this.emit(API_DOORS_VIEW_EVENT, data);
				break;

			case API_ENGINE_CONFIG_EXEC: // Конфигурация ДВС
				this.emit(API_ENGINE_CONFIG_EVENT, data);
				break;
			case API_ENGINE_VALUE_EXEC: // Значения ДВС
				this.emit(API_ENGINE_VALUE_EVENT, data);
				break;
			case API_ENGINE_VIEW_EXEC: // Параметры отображения ДВС
				this.emit(API_ENGINE_VIEW_EVENT, data);
				break;
			case API_ENGINE_VIEW_ENABLED_EXEC:
				this.emit(API_ENGINE_VIEW_ENABLED_EVENT, data);
				break;
			case API_ENGINE_VIEW_TOTAL_WORKTIME_EXEC:
				this.emit(API_ENGINE_VIEW_TOTAL_WORKTIME_EVENT, data);
				break;
			case API_ENGINE_VIEW_TOTAL_COUNT_RPM_EXEC:
				this.emit(API_ENGINE_VIEW_TOTAL_COUNT_RPM_EVENT, data);
				break;
			case API_ENGINE_VIEW_COOLANT_EXEC:
				this.emit(API_ENGINE_VIEW_COOLANT_EVENT, data);
				break;
			case API_ENGINE_VIEW_RPM_EXEC:
				this.emit(API_ENGINE_VIEW_RPM_EVENT, data);
				break;
			case API_ENGINE_VIEW_LOAD_EXEC:
				this.emit(API_ENGINE_VIEW_LOAD_EVENT, data);
				break;
			case API_ENGINE_VIEW_THROTTLE_EXEC:
				this.emit(API_ENGINE_VIEW_THROTTLE_EVENT, data);
				break;

			case API_FUEL_CONFIG_EXEC: // Конфигурация расхода
				this.emit(API_FUEL_CONFIG_EVENT, data);
				break;
			case API_FUEL_VALUE_EXEC: // Значения расхода
				this.emit(API_FUEL_VALUE_EVENT, data);
				break;
			case API_FUEL_VIEW_EXEC: // Параметры отображения расхода
				this.emit(API_FUEL_VIEW_EVENT, data);
				break;
			case API_FUEL_VIEW_CURRENT_EXEC:
				this.emit(API_FUEL_VIEW_CURRENT_EVENT, data);
				break;
			case API_FUEL_VIEW_AVG_EXEC:
				this.emit(API_FUEL_VIEW_AVG_EVENT, data);
				break;

			case API_MOVEMENT_VALUE_EXEC: // Значения движения
				this.emit(API_MOVEMENT_VALUE_EVENT, data);
				break;
			case API_MOVEMENT_VIEW_EXEC: // Параметры отображения движения
				this.emit(API_MOVEMENT_VIEW_EVENT, data);
				break;
			case API_MOVEMENT_VIEW_SPEED_EXEC:
				this.emit(API_MOVEMENT_VIEW_SPEED_EVENT, data);
				break;
			case API_MOVEMENT_VIEW_SPEED_AVG_EXEC:
				this.emit(API_MOVEMENT_VIEW_SPEED_AVG_EVENT, data);
				break;
			case API_MOVEMENT_VIEW_REST_WAY_EXEC:
				this.emit(API_MOVEMENT_VIEW_REST_WAY_EVENT, data);
				break;

			case API_SENSORS_VALUE_EXEC: // Значения датчиков
				this.emit(API_SENSORS_VALUE_EVENT, data);
				break;
			case API_SENSORS_VIEW_EXEC: // Параметры отображения датчиков
				this.emit(API_SENSORS_VIEW_EVENT, data);
				break;
			case API_SENSORS_VIEW_HANDBRAKE_EXEC:
				this.emit(API_SENSORS_VIEW_HANDBRAKE_EVENT, data);
				break;
			case API_SENSORS_VIEW_REVERSE_EXEC:
				this.emit(API_SENSORS_VIEW_REVERSE_EVENT, data);
				break;
			case API_SENSORS_VIEW_SEATBELT_EXEC:
				this.emit(API_SENSORS_VIEW_SEATBELT_EVENT, data);
				break;
			case API_SENSORS_VIEW_TURN_SIGNAL_EXEC:
				this.emit(API_SENSORS_VIEW_TURN_SIGNAL_EVENT, data);
				break;

			case API_TEMPERATURE_VALUE_EXEC: // Значения температуры
				this.emit(API_TEMPERATURE_VALUE_EVENT, data);
				break;
			case API_TEMPERATURE_VIEW_EXEC: // Параметры отображения температуры
				this.emit(API_TEMPERATURE_VIEW_EVENT, data);
				break;

			case API_VOLUME_VALUE_EXEC: // Конфигурация уровня звука
				this.emit(API_VOLUME_VALUE_EVENT, data);
				break;
			case API_VOLUME_VIEW_EXEC: // Параметры отображения уровня звука
				this.emit(API_VOLUME_VIEW_EVENT, data);
				break;
		}
	}

	/** Запустить процесс загрузки прошивки на устройство */
	updateStart(rollback: boolean = false): void
	{
		getFirmware(!rollback ? this.update.firmware.url : this.update.rollback.url)
			.then((res: any): void =>
			{
				if (res?.byteLength > 0)
				{
					this.stopCheckVersion();
					this.loopFree();
					this.update.firmwareData = new Uint8Array(res);
					this.update.total = res.byteLength;
					this.update.offset = 0;
					this.update.error = EDeviceUpdateError.UPD_OK;
					this.update.encrypt = this.update.setIV(
						!rollback ? this.update.firmware.iv : this.update.rollback.iv
					);
					this.update.is_rollback = rollback;
					setTimeout(() => this.updateUpload(), 1000);
				}
			})
			.catch((): void =>
			{
				this.emit(API_DEVICE_UPDATE_EVENT_ERROR, t("update.notify.errorDownload"));
			});
	}

	/** Пишем данные файла прошивки в устройство PJCAN */
	async updateUpload(): Promise<void>
	{
		if (this.bluetooth.connected && this.update.error === 0 && this.update.offset <= this.update.total)
		{
			this.queueDisabled = true;
			try
			{
				await this.bluetooth.send(this.update.get());
			}
			catch (e)
			{
				console.log(e);
			}
		}
		else if (this.update.error !== 0)
		{
			this.queueDisabled = false;
		}

		if (this.update.end)
		{
			const action: IDeviceAction = new DeviceAction();
			action.reboot = true;
			action.format = this.update.is_rollback;
			this.query(action);
			this.debounce((): void =>
			{
				this.emit(API_DEVICE_UPDATE_EVENT_ERROR, t("update.notify.errorWaitUpdate"));
			}, 60000);
		}
		else
		{
			this.debounce((): void =>
			{
				this.emit(API_DEVICE_UPDATE_EVENT_ERROR, t("update.notify.errorUpload"));
			}, 5000);
		}
	}

	/** Проверить версию прошивки */
	checkVersion(): Promise<IVersion>
	{
		return new Promise((resolve, reject): void =>
		{
			getFirmwareVersion()
				.then((res: any): void =>
				{
					const { firmware } = this.update;
					firmware.url = res?.url ?? "";
					firmware.iv = res?.iv ?? "";

					// проверяем версию прошивки
					if (res.current?.length === 4)
					{
						const ver: any = res.current;
						const newVersion: IVersion = new Version();
						newVersion.major = ver[0];
						newVersion.minor = ver[1];
						newVersion.build = ver[2];
						newVersion.revision = ver[3];

						if (this.version.compare(newVersion, 4) > 0) resolve(newVersion);
						else reject("Current version");
					}
					else reject("No data");
				})
				.catch((e): void => reject(e));
		});
	}

	/** Получить версию прошивки для отката */
	rollbackVersion(): Promise<IDeviceFirmwareUrl>
	{
		return new Promise((resolve, reject): void =>
		{
			getFirmwareVersion()
				.then((res: any): void =>
				{
					const { rollback } = this.update;
					const resVer: any =
						this.hardware.major === 4
							? this.hardware.minor === 0
								? res?.v40
								: this.hardware.minor === 1
									? this.hardware.build === 0
										? res?.v41a
										: res?.v41b
									: null
							: null;
					rollback.current =
						resVer?.current?.length === 4
							? `${resVer.current[0]}.${resVer.current[1]}.${resVer.current[2]}.${resVer.current[3]}`
							: "";
					rollback.url = resVer?.url ?? "";
					rollback.iv = resVer?.iv ?? "";

					if (rollback.url.length && rollback.current.length) resolve(rollback);
					else reject("No data");
				})
				.catch((e): void => reject(e));
		});
	}

	/**
	 * Перезагрузить устройство
	 * @param {boolean} save Сохранить настройки перед загрузкой
	 * @param {boolean} resetConfig Сбросить конфигурацию устройства
	 * @param {boolean} resetView Сбросить параметры отображения
	 * @param {boolean} resetButtons Сбросить конфигурацию кнопок
	 */
	rebootDevice(
		save: boolean = false,
		resetConfig: boolean = false,
		resetView: boolean = false,
		resetButtons: boolean = false
	): void
	{
		this.version.clear();
		this.queue = [];
		const action: IDeviceAction = new DeviceAction();
		action.reboot = true;
		action.save = save;
		action.resetConfig = resetConfig;
		action.resetView = resetView;
		action.resetButtons = resetButtons;
		this.query(action);
	}

	private scannerInterval: Timeout;
	private scannerValue: IDeviceScannerValue | undefined;

	/**
	 * Запуск/остановка сканера
	 * @param {boolean} status Статус
	 * @param {function} fn Функция обратного вызова
	 */
	scanner(status: boolean, fn: (success: boolean) => void): boolean
	{
		if (status && !this.status) return false;

		const action: IDeviceScannerAction = new DeviceScannerAction();
		this.queueDisabled = status;
		action.enabled = status;
		this.query(action, false, (success): void =>
		{
			if (success && status)
			{
				if (!this.scannerValue) this.scannerValue = new DeviceScannerValue();
				if (!this.scannerInterval)
				{
					this.scannerInterval = setInterval((): void =>
					{
						if (this.scannerValue) this.query(this.scannerValue, true);
						else this.scannerFree();
					}, 500);
				}
			}
			fn(success);
		});

		if (!status) this.scannerFree();
		return true;
	}

	/** Очистить значения сканера */
	private scannerFree(): void
	{
		clearInterval(this.scannerInterval);
		this.scannerInterval = undefined;
		this.scannerValue = undefined;
	}

	/**
	 * Циклический опрос
	 * @param {number[]} list Список ChoiceValue
	 */
	loop(list: number[]): boolean
	{
		const result: boolean = list.length > 0 && this.status;
		if (result)
		{
			const choice: IChoiceValue = new ChoiceValue();
			choice.repeat = 2;
			choice.listID = [...list];
			this.query(choice, true);
		}
		return result;
	}

	/** Очистить цикл */
	loopFree(): void
	{
		if (this.status)
		{
			const choice: IChoiceValue = new ChoiceValue();
			choice.repeat = 0;
			this.query(choice, true);
		}
	}
}

const canbus: Canbus = new Canbus();
export default canbus;
