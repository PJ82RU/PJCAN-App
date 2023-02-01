import { BluetoothStruct } from "@/components/bluetooth";
import { BaseModel } from "../base";
import { API_SIZE_DEVICE_SHA, StructDeviceConfig } from "./StructDeviceConfig";
import { IDeviceConfig } from "./IDeviceConfig";

export const API_EXEC_DEVICE_CONFIG = 10;
export const API_SIZE_DEVICE_CONFIG = 2 + API_SIZE_DEVICE_SHA;

const struct = new BluetoothStruct(StructDeviceConfig);

/** Модель параметров устройства */
export class DeviceConfig extends BaseModel implements IDeviceConfig
{
	reboot = false;
	resetConfig = false;
	resetView = false;
	led = 0;
	sha = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	activation = false;
	save = false;
	serial = "";

	constructor(data?: DataView)
	{
		super();
		if (data) this.set(data);
	}

	/**
	 * Запись данных
	 * @param {DataView} buf Буффер данных
	 */
	set(buf: DataView): boolean
	{
		return this._set(this, API_EXEC_DEVICE_CONFIG, API_SIZE_DEVICE_CONFIG + 1, struct, buf);
	}

	/** Чтение данных */
	get(): DataView | undefined
	{
		return this._get(this, API_EXEC_DEVICE_CONFIG, API_SIZE_DEVICE_CONFIG + 1, struct);
	}
}
