import { BluetoothStruct } from '@/components/bluetooth';
import { BaseModel, IBaseModel } from '../../BaseModel';

export const API_EXEC_VARIABLE_BOSE = 110; // команда API
const STRUCT_LENGTH = 7; // длина данных API

/** Интерфейс параметров Bose */
export interface IBoseConfig extends IBaseModel {
	enabled: boolean;
	audioPLT: boolean;
	radioFM: boolean;
	wow: boolean;
	balance: number;
	bass: number;
	fade: number;
	treble: number;
	centerPoint: number;
}

/** Структура данных */
export const StructBoseConfig = {
	enabled: BluetoothStruct.bit(),
	audioPLT: BluetoothStruct.bit(),
	radioFM: BluetoothStruct.bit(),
	wow: BluetoothStruct.bit(),
	balance: BluetoothStruct.int8(),
	bass: BluetoothStruct.int8(),
	fade: BluetoothStruct.int8(),
	treble: BluetoothStruct.int8(),
	centerPoint: BluetoothStruct.uint8()
};

const struct = new BluetoothStruct(StructBoseConfig);

/** Модель параметров Bose */
export class BoseConfig extends BaseModel implements IBoseConfig {
	enabled = false;
	audioPLT = false;
	radioFM = false;
	wow = false;
	balance = 0;
	bass = 0;
	fade = 0;
	treble = 0;
	centerPoint = 0;

	/**
	 * Запись данных
	 * @param {DataView} buf Буффер данных
	 */
	set(buf: DataView): boolean {
		return this._set(this, API_EXEC_VARIABLE_BOSE, STRUCT_LENGTH, struct, buf);
	}

	/** Чтение данных */
	get(): DataView | undefined {
		return this._get(this, API_EXEC_VARIABLE_BOSE, STRUCT_LENGTH, struct);
	}
}