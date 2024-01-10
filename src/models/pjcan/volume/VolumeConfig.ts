import { BluetoothStruct } from "@/components/bluetooth";
import { BaseModel } from "../base";
import { IVolumeConfig } from "./IVolumeConfig";

export const API_VOLUME_CONFIG_EXEC = 0xe1;
export const API_VOLUME_CONFIG_EVENT = "VolumeConfig";

export const API_VOLUME_VIEW_EXEC = 0xe3;
export const API_VOLUME_VIEW_EVENT = "VolumeView";

/** Модель конфигурации уровня звука */
export class VolumeConfig extends BaseModel implements IVolumeConfig
{
	static struct: any = {
		mute: BluetoothStruct.bit(),
		muteBose: BluetoothStruct.bit(),
		volume: BluetoothStruct.uint8(),
		volumeBose: BluetoothStruct.uint8()
	};
	static size: number = 3;

	mute = false;
	muteBose = false;
	volume = 0;
	volumeBose = 0;

	constructor(data?: DataView)
	{
		super(API_VOLUME_CONFIG_EXEC, true);
		if (data) this.set(data);
	}

	/**
	 * Запись данных
	 * @param {DataView} buf Буфер данных
	 */
	set(buf: DataView): boolean
	{
		return this._set(this, this.exec, VolumeConfig.size, new BluetoothStruct(VolumeConfig.struct), buf);
	}

	/**
	 * Чтение данных
	 * @param {boolean} request Только запрос
	 */
	get(request?: boolean): DataView
	{
		return request
			? this._get(this, this.exec)
			: this._get(this, this.exec, VolumeConfig.size, new BluetoothStruct(VolumeConfig.struct));
	}
}
