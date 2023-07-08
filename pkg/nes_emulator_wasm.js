let wasm;

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let WASM_VECTOR_LEN = 0;

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

let cachedFloat32Memory0 = null;

function getFloat32Memory0() {
    if (cachedFloat32Memory0 === null || cachedFloat32Memory0.byteLength === 0) {
        cachedFloat32Memory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachedFloat32Memory0;
}

function passArrayF32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4, 4) >>> 0;
    getFloat32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}
/**
*/
export const ButtonEvent = Object.freeze({ ButtonA:0,"0":"ButtonA",ButtonB:1,"1":"ButtonB",Select:2,"2":"Select",Start:3,"3":"Start",Up:4,"4":"Up",Down:5,"5":"Down",Left:6,"6":"Left",Right:7,"7":"Right", });
/**
*/
export class WasmEmulator {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(WasmEmulator.prototype);
        obj.__wbg_ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_wasmemulator_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.wasmemulator_new();
        return WasmEmulator.__wrap(ret);
    }
    /**
    * @param {number} index
    */
    set_buffer_index(index) {
        wasm.wasmemulator_set_buffer_index(this.__wbg_ptr, index);
    }
    /**
    * @returns {number}
    */
    get_audio_sample_pointer() {
        const ret = wasm.wasmemulator_get_audio_sample_pointer(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get_buffer_index() {
        const ret = wasm.wasmemulator_get_buffer_index(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    get_read_index() {
        const ret = wasm.wasmemulator_get_read_index(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get_prg_ram_pointer() {
        const ret = wasm.wasmemulator_get_prg_ram_pointer(this.__wbg_ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    prg_ram_length() {
        const ret = wasm.wasmemulator_prg_ram_length(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @returns {boolean}
    */
    prg_save() {
        const ret = wasm.wasmemulator_prg_save(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
    * @param {boolean} val
    */
    set_prg_save(val) {
        wasm.wasmemulator_set_prg_save(this.__wbg_ptr, val);
    }
    /**
    * @param {Uint8Array} ram
    */
    load_prg_ram(ram) {
        const ptr0 = passArray8ToWasm0(ram, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wasmemulator_load_prg_ram(this.__wbg_ptr, ptr0, len0);
    }
    /**
    * @param {Float32Array} buffer
    */
    update_buffer(buffer) {
        var ptr0 = passArrayF32ToWasm0(buffer, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.wasmemulator_update_buffer(this.__wbg_ptr, ptr0, len0, addHeapObject(buffer));
    }
    /**
    */
    step_frame() {
        wasm.wasmemulator_step_frame(this.__wbg_ptr);
    }
    /**
    * @returns {number}
    */
    get_picture_pointer() {
        const ret = wasm.wasmemulator_get_picture_pointer(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {Uint8Array} rom
    */
    load(rom) {
        const ptr0 = passArray8ToWasm0(rom, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.wasmemulator_load(this.__wbg_ptr, ptr0, len0);
    }
    /**
    * @param {number} button_event
    * @param {boolean} is_pressed
    */
    update_input(button_event, is_pressed) {
        wasm.wasmemulator_update_input(this.__wbg_ptr, button_event, is_pressed);
    }
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_copy_to_typed_array = function(arg0, arg1, arg2) {
        new Uint8Array(getObject(arg2).buffer, getObject(arg2).byteOffset, getObject(arg2).byteLength).set(getArrayU8FromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };

    return imports;
}

function __wbg_init_memory(imports, maybe_memory) {

}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedFloat32Memory0 = null;
    cachedUint8Memory0 = null;


    return wasm;
}

function initSync(module) {
    if (wasm !== undefined) return wasm;

    const imports = __wbg_get_imports();

    __wbg_init_memory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(input) {
    if (wasm !== undefined) return wasm;

    if (typeof input === 'undefined') {
        input = new URL('nes_emulator_wasm_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    __wbg_init_memory(imports);

    const { instance, module } = await __wbg_load(await input, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync }
export default __wbg_init;
