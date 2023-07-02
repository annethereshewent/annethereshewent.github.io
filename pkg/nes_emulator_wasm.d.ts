/* tslint:disable */
/* eslint-disable */
/**
*/
export enum ButtonEvent {
  ButtonA = 0,
  ButtonB = 1,
  Select = 2,
  Start = 3,
  Up = 4,
  Down = 5,
  Left = 6,
  Right = 7,
}
/**
*/
export class WasmEmulator {
  free(): void;
/**
*/
  constructor();
/**
* @param {number} index
*/
  set_buffer_index(index: number): void;
/**
* @returns {number}
*/
  get_audio_sample_pointer(): number;
/**
* @returns {number}
*/
  get_buffer_index(): number;
/**
* @returns {number}
*/
  get_read_index(): number;
/**
* @param {Float32Array} buffer
*/
  update_buffer(buffer: Float32Array): void;
/**
*/
  step_frame(): void;
/**
* @returns {number}
*/
  get_picture_pointer(): number;
/**
* @param {Uint8Array} rom
*/
  load(rom: Uint8Array): void;
/**
* @param {number} button_event
* @param {boolean} is_pressed
*/
  update_input(button_event: number, is_pressed: boolean): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_wasmemulator_free: (a: number) => void;
  readonly wasmemulator_new: () => number;
  readonly wasmemulator_set_buffer_index: (a: number, b: number) => void;
  readonly wasmemulator_get_audio_sample_pointer: (a: number) => number;
  readonly wasmemulator_get_buffer_index: (a: number) => number;
  readonly wasmemulator_get_read_index: (a: number) => number;
  readonly wasmemulator_update_buffer: (a: number, b: number, c: number, d: number) => void;
  readonly wasmemulator_step_frame: (a: number) => void;
  readonly wasmemulator_get_picture_pointer: (a: number) => number;
  readonly wasmemulator_load: (a: number, b: number, c: number) => void;
  readonly wasmemulator_update_input: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
