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
