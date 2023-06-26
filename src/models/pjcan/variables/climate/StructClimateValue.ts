import { BluetoothStruct } from "@/components/bluetooth";

export const API_VARIABLE_CLIMATE_SIZE = 7;

/** Структура данных */
export const StructClimateValue = {
	enabled: BluetoothStruct.bit(),
	automode: BluetoothStruct.bit(),
	ac: BluetoothStruct.bit(),
	airDLegs: BluetoothStruct.bit(),
	airDBody: BluetoothStruct.bit(),
	airDWindshield: BluetoothStruct.bit(),
	airDBackWin: BluetoothStruct.bit(),
	eco: BluetoothStruct.bit(),
	airRate: BluetoothStruct.uint8(),
	airType: BluetoothStruct.uint8(),
	tempType: BluetoothStruct.uint8(),
	tempDisplay: BluetoothStruct.uint8(),
	temperature: BluetoothStruct.uint16()
};
