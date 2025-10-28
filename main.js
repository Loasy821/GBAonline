// Create the emulator instance
const canvas = document.getElementById('screen');
const emulator = new WebGBA(canvas); // assuming webgba.js exposes WebGBA

// Keyboard mapping
const keyMap = {
    'ArrowUp': 'UP',
    'ArrowDown': 'DOWN',
    'ArrowLeft': 'LEFT',
    'ArrowRight': 'RIGHT',
    'KeyZ': 'A',
    'KeyX': 'B',
    'KeyA': 'L',
    'KeyS': 'R',
    'Enter': 'START',
    'ShiftLeft': 'SELECT'
};

// Handle keyboard input
document.addEventListener('keydown', e => {
    if (keyMap[e.code]) emulator.pressButton(keyMap[e.code]);
});

document.addEventListener('keyup', e => {
    if (keyMap[e.code]) emulator.releaseButton(keyMap[e.code]);
});

// Handle ROM upload
document.getElementById('romInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function() {
        const romData = new Uint8Array(reader.result);
        emulator.loadROM(romData);
        emulator.start();
    };
    reader.readAsArrayBuffer(file);
});

