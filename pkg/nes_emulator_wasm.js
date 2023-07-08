import * as wasm from "./nes_emulator_wasm_bg.wasm";
import { __wbg_set_wasm } from "./nes_emulator_wasm_bg.js";
__wbg_set_wasm(wasm);
export * from "./nes_emulator_wasm_bg.js";
